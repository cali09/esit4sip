# ---- Program info ----
# The 'sparql_uploader' is used to upload data from .json files to a SPARQL 1.1 endpoint
# In case of eSIT4SIP, the slurped scenarios from the eSIT4SIP xWiki are uploaded to a fuseki triple store
# The program lets the user choose a .json file he wants to upload. Then a RDF graph is built.
# Afterwards the graph gets inserted by the sparql client gem over HTTP.

# For a general understanding of the SPARQL query language see:
# https://www.w3.org/TR/sparql11-overview/

# ---- Developers ----
# Alexander Gantikow
# Media and education management
# University of Education Weingarten
# Member of eSIT4SIP Project

# ---- Copyright ----
# Copyright 2017 eSIT4SIP Project
# Licensed under the EUPL, Version 1.2 only (the "Licence");
# You may not use this work except in compliance with the Licence.
# You may obtain a copy of the Licence at:

# https://joinup.ec.europa.eu/software/page/eupl

# Unless required by applicable law or agreed to in writing, 
# software distributed under the Licence is
# distributed on an "AS IS" basis, 
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied.
# See the Licence for the specific language governing
# permissions and limitations under the Licence.

require 'json'
require 'logger'

# will be required by sparql/client below
#require 'rdf'
#require 'rdf/turtle'
#require 'rdf/rdfxml'

# IMPORTANT
# The gem executes SPARQL queries/updates against a SPARQL endpoint
# Do UTF-8 characters raise an error on sparql insert? 
# I did a workaround. But have a look if a newer gem version fixes this issue.
# See https://github.com/ruby-rdf/sparql-client/issues/85
# Windows user and problems with this gem?
# See https://github.com/drbrain/net-http-persistent/pull/90/files
require 'sparql/client'

# For debug reasons you can deactivate the upload here
UPLOAD_TO_FUSEKI = true

# Set your SPARL endpoint here
#SPARQL_ENDPOINT = "http://localhost:3030/yourdataset/update" 				# local server
SPARQL_ENDPOINT = "http://www.yourdomain.com/fuseki/yourdataset/update"		# remote server

# "Using ad-hoc RDF vocabularies"
# See this paragraph on https://github.com/ruby-rdf/rdf
LEARNING = RDF::Vocabulary.new("http://yourdomain.com/learning#")
INFRASTRUCTURE = RDF::Vocabulary.new("http://yourdomain.com/infrastructure#")

# Logger settings
$log = Logger.new(STDOUT)
$log.formatter = proc { |type, date, prog, msg| "#{type} --: #{msg}\n" }

# Expand string class
class String
	def not_empty?
		!self.empty?
	end
end

def list_files(suffix)
	# This function lists all .json files in the same directory of this ruby program
	# It gets one or more filenames from the user input and returns an array of filenames to be uploaded
	files = Dir.glob("*#{suffix}")
	if files.empty? 
		$log.error("No json files found in current directory. Add files and restart program.")
		exit
	end

	# List file names
	puts "\nFound #{files.length} file(s) for uploading."
	files.each_with_index { |file, i| puts i.to_s+ ": " + file }

	# User must choose files with only numbers and ,
	puts "Use numbers to choose files. Multiple files can be seperated by ',' " 
	chosen = gets.chomp
	loop do 
	  break if chosen =~ /^-?[0-9,]+$/
	  puts "Invalid input. Use numbers to choose files. Seperate with ','."
	  chosen = gets.chomp
	end 

	# Return choosen filenames as array
	file_names = Array.new()
	chosen = chosen.split(/\s*,\s*/)
	chosen = chosen.uniq
	chosen.each do |num|
		file_names << files[num.to_i] if num.to_i <= files.length
	end
	return file_names
end

def parse_json(filename)
	# This function pareses .json files by a given filename
	# Note: The file has to be in the same directory as this ruby program
	# Returns json data (hash) and success info (bool)	
	begin
		file = File.read(filename, :encoding => 'UTF-8')
		data = JSON.parse(file)
		$log.info("Success: Parsing '#{filename}' was sucessful")
		success = true
	rescue JSON::ParserError
		$log.fatal("Could not parse #{filename}")
		success = false
		print "Continue in:"
		7.downto(0) do |i|
			print " #{i}"
			sleep 1
		end
		puts
	end
	return data, success
end

def content_by_key(dataset, key)
	# This helper function returns the value by a key from a given json object
	# Param dataset: json object
	# Param key: string, key of a field inside the json object
	# Example: content_by_key(scenario, "title") returns the title of a scenario

	# If dataset contains the key
	if dataset[key].nil? == false		
		# If field contains array
		if dataset[key].kind_of?(Array)
			if dataset[key].empty? == false
				# If field not empty
				content = dataset[key]
			else
				# If content field is empty
				content = Array.new
			end		
		else
			# If field contains string
			if dataset[key].empty? == false
				# If field not empty
				content = dataset[key]
			else
				# If field is empty
				content = ""
			end		
		end
	else
		$log.error("Could not read '#{key}' field from .json file. This should be generated by scraper.")
	end
	return content
end

def build_xwiki_graph(scenario)	
	# This functions collects the data of a scenario.
	# Then the data is added to a RDF graph. The graph is returned.

	# Collect the field -alues of a scenario in variables
	# Title and summary are set dependet on translations
	title = content_by_key(scenario, 'title')
	id = content_by_key(scenario, 'id')
	date = content_by_key(scenario, 'date')
	translations = content_by_key(scenario, 'translations')
	domain = content_by_key(scenario, 'domain') #ary
	affordances = content_by_key(scenario, 'affordances') #ary
	tools = content_by_key(scenario, 'tool') #ary
	devices = content_by_key(scenario, 'devices') #ary
	patterns = content_by_key(scenario, 'patterns') #ary
	teaching_approach = content_by_key(scenario, 'teaching_approach') #ary
	spatial_setting = content_by_key(scenario, 'spatial_settings') #ary
	information_function = content_by_key(scenario, 'information_functions') #ary
	language = content_by_key(scenario, 'language') #ary

	# ----- ADD FIELDS TO GRAPH -----

	# New RDF graph
	graph = RDF::Graph.new
	# Generate ressource by id
	graph << [LEARNING[id], RDF.type, LEARNING['Scenario']]
	graph << [LEARNING[id], RDF::RDFS.label, title]
	graph << [LEARNING[id], LEARNING['date'], date] if date.not_empty?

	# Check for translations. If no trans. available, use normal title and summary
	# If translations are available
	if translations.empty? == false
		translations.each do |trans|
			lang_code = content_by_key(trans, 'language')
			trans_title = content_by_key(trans, 'title') + "@#{lang_code}"
			summary = content_by_key(trans, 'summary') + "@#{lang_code}"
			# Title + summary of translation
			graph << [LEARNING[id], LEARNING['title'], trans_title] if trans_title.not_empty?
			graph << [LEARNING[id], LEARNING['summary'], summary] if summary.not_empty?
			graph << [LEARNING[id], LEARNING['hasTranslation'], lang_code] if lang_code.not_empty?
		end
	else
		# If no translations are available use normal title + summary
		trans_title = content_by_key(scenario, 'title')
		summary = content_by_key(scenario, 'summary')
		graph << [LEARNING[id], LEARNING['title'], trans_title] if trans_title.not_empty?
		graph << [LEARNING[id], LEARNING['summary'], summary] if summary.not_empty?
	end

	# Domain example: learning:Scenario1, learning:hasDomain, learning:Mathematics .
	domain.each {|subj| graph << [LEARNING[id], LEARNING['hasDomain'], LEARNING[subj]] if subj.not_empty?}

	# Affordances example: Scenario1, learning:requires, instrastructure:Animate.
	affordances.each {|aff| graph << [LEARNING[id], LEARNING['requires'], INFRASTRUCTURE[aff]] if aff.not_empty?}

	tools.each {|tool| graph << [LEARNING[id], LEARNING['hasTool'], INFRASTRUCTURE[tool]] if tool.not_empty?}
	devices.each {|dev| graph << [LEARNING[id], LEARNING['hasDevice'], dev] if dev.not_empty?}
	patterns.each {|pat| graph << [LEARNING[id], LEARNING['implements'], pat] if pat.not_empty?}
	teaching_approach.each {|ta| graph << [LEARNING[id], LEARNING['teaching_approach'], ta] if ta.not_empty?}
	spatial_setting.each {|ss| graph << [LEARNING[id], LEARNING['spatial_setting'], ss] if ss.not_empty?}
	information_function.each {|iff| graph << [LEARNING[id], LEARNING['information_function'], iff] if iff.not_empty?}
	language.each {|lang| graph << [LEARNING[id], LEARNING['language'], lang] if lang.not_empty?}

	return graph
end


# ----- Main program -----

# Initialize SPARQL client
sparql = SPARQL::Client.new(SPARQL_ENDPOINT)
$log.info("Sparql client initialized")
$log.info("Using endpoint: #{SPARQL_ENDPOINT}")
$log.warn("Uploading is disabled. See UPLOAD_TO_FUSEKI") if UPLOAD_TO_FUSEKI == false

# User picks files to upload
filenames = list_files(".json")

# For each choosen file do
filenames.each do |filename|
	
	# Parse json file, get basic info
	data, success = parse_json(filename)	
	source = content_by_key(data, "source")
	scenarios =  content_by_key(data, "scenarios")
	length = scenarios.length
	
	# For each scenario in json file do
	scenarios.each_with_index do |scenario, i|

		# Show process in cli
		title = content_by_key(scenario, 'title')
		$log.info("Uploading #{i+1}/#{length}: #{title}")

		# Build graph
		if source == "xwiki"
			graph = build_xwiki_graph(scenario)
		else
			$log.warn("Unexpected scenario source. This program was written to upload scenarios from XWiki")
		end

		# The SPARQL client inserts the graph over http
		sparql.insert_data(graph) if UPLOAD_TO_FUSEKI

	end
end