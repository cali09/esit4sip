# ---- Program info ----
# The 'tag_mapper' analyzes scenario json-files and adds tags defined in the eSIT4SIP project
# The program reads .json scenario files generated by 'scraper_mnstep' and 'scraper_lehreronline'.
# The program iterates over each scenario and uses string comparison to find matching tags
# If there is a matching tag it is added to a pre-defined json field and then saved to file.
# The mapping files are written in .json and can be found in the subfolder 'mapper_json'
# The resulting .json files are structured in a way the 'xwiki_uploader' can read and upload to eSIT4SIP-XWiki.

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

require 'cgi'
require 'find'
require 'json'
require 'logger'

# Location of the mapper .json files
MAPPER_LEHRERONLINE = "mapper_json/mapper_lehreronline.json"
MAPPER_MNSTEP = "mapper_json/mapper_mnstep.json"

# Fields to be analyzed
# Example: ["subject", "subject_raw", "subject"]. 
# - Save the matching tags in 'subject' field
# - Analyze the content inside subject_raw field
# - Get your mapping info from subject field in the mapper file

# FIELD_EXAMPLE = [ ["TargetFieldInScenarioJson", "sourceFieldInScenarioJson", "mapperFieldInMapperJson"], ... ]
FIELDS_LEHRERONLINE =  [
	
	# Subject
	["subject", "subject_raw", "subject"],
	["bs_tags", "subject_raw", "subject_bs"],	
	# Devices
	["bs_tags", "keywords", "devices"],
	["bs_tags", "description", "devices"],
	# Spatial
	["bs_tags", "keywords", "spatial_settings"],
	# Affordances
	["bs_tags", "keywords", "affordances"],
	#["affordances", "summary_de", "affordances"],
	#["affordances", "description", "affordances"],
	#["affordances", "unitplan", "affordances"],
	#["affordances", "didactic", "affordances"],

	["digital_device", "keywords", "digital_device"],
	["digital_device", "summary_de", "digital_device"],
	["digital_device", "description", "digital_device"],
	["digital_device", "unitplan", "digital_device"],
	["digital_device", "didactic", "digital_device"]	
]

FIELDS_MNSTEP =  [
	["bs_tags", "subject_raw", "subject"],
	["bs_tags", "spatial_settings", "spatial_settings"],
	["bs_tags", "content_tags", "teaching_approach"]
]


# Logger settings
$log = Logger.new(STDOUT)
$log.formatter = proc { |type, date, prog, msg| "#{type} --: #{msg}\n" }

def list_files

	# Check for json files in directory
	files = Dir.glob("*.json")
	if files.empty? 
		$log.error("No json files found in current directory. Add files and restart program.")
		exit
	end

	# List file names
	puts "\nFound #{files.length} file(s) for analyzing content."
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

def build_short_title(title)
	# Some page titles are too long to generate meaningful log info. 
	# So this function trims a given title to x characters. 	
	title.length >= 40 ? (short_title = "#{title[0..40]}...") : (short_title = title)
end

def parse_json(filename)
	begin
		file = File.read(filename, :encoding => 'UTF-8')
		data = JSON.parse(file)
		$log.info("Success: Parsing '#{filename}' was sucessful")
	rescue JSON::ParserError
		$log.fatal("Could not parse #{filename}")
		exit
	end
	return data
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


def analyze_content(content, mapper_json, mapper_field)
	# Param Content: String or array containing content to be analyzed
	# Param mapper_json: Containing json objects for mapping.
	# Objects are in key/value style: They key is the resulting tag...
	# the value(s) are the "predictors" which stand for the result tag.
	# E.g.: "Mathematics": ["Rechnen und Logik", "Mathematik"]
	# Param mapper_field: the higher field name like "subject"
	# Return: array called "result" containing matching tags

	result = Array.new # will contain matching tags
	content_to_analyze = content.dup
	content_to_analyze = content_to_analyze.join(", ") if content.class.to_s == "Array"
	content_to_analyze.downcase!

	# If our given content contains a 'predictor', it's tag is added to array
	# E.g: The mapper contains: "Mathematics": ["Rechnen und Logik", "Mathematik"]
	# The programm will enter the class == Array part and look which predictor
	# (here Rechnen und Logik and Mathematik) is contained by our content.
	
	mapper_json[mapper_field].each do |tag, predictor|

		# Due to completeness reasons, some tags don't carray a predictor.
		# E.g.: "Nano-technology": "" So ignore this iteration
		next if predictor.empty?
		next if predictor[0].empty?

		if predictor.class.to_s == "Array"			
			predictor.each {|pr| result << tag if content_to_analyze.include?(pr.downcase)}			
		else
			result << tag if content_to_analyze.include?(predictor.downcase)
		end
	end

	if result.empty?
		$log.warn("-- No tags generated!")
		#result << "undefined_#{mapper_field}"
	else
		result.uniq!
		$log.info("-- Tags generated: #{result}")		
	end

	return result
end



# ----- Main program -----

# Let user choose files to analyze
filenames = list_files()

# For each choosen file do
filenames.each do |filename|
	
	# Parse file
	data = parse_json(filename)
	
	# MnSTEP or LehrerOnline?
	# Get json mapper and fields dependent on source
	source = content_by_key(data, "source")
	if source == "MnSTEP"
		mapper_json = parse_json(MAPPER_MNSTEP)
		fields_to_be_analyzed = FIELDS_MNSTEP
	elsif source == "LehrerOnline"
		mapper_json = parse_json(MAPPER_LEHRERONLINE)
		fields_to_be_analyzed = FIELDS_LEHRERONLINE
	end

	# For each scenario in file do
	scenarios = content_by_key(data, "scenarios")
	scenarios.each_with_index do |scenario, i|

		# Print title in CLI
		puts "-------------------------"
		short_title = build_short_title(content_by_key(scenario, "title"))
		short_title = build_short_title(content_by_key(scenario, "title_de")) if source == "LehrerOnline"
		$log.info("Analyzing scenario: #{short_title}")
			
		# For each field-to-be-analyzed do
		fields_to_be_analyzed.each do |elem|

			# Save each field in read-able variable
			target_field = target_field.to_s #sym to string
			target_field = elem[0]
			source_field = elem[1]
			mapper_field = elem[2]
			
			# Get content which should be analyzed
			content = content_by_key(scenario, source_field)
			$log.info("Analyze '#{source_field}' with mapper field: #{mapper_field}")

			# Analyze content and return array of matching tags
			result_arr = analyze_content(content, mapper_json, mapper_field)
			# Get existing content (tags) of  target field
			target_arr = content_by_key(scenario, target_field)
			# Merge existing and new content (tags)
			target_arr += result_arr
			target_arr.uniq!
			# Overwrite field
			scenario[target_field] = target_arr

		end
	end

	# Update/ overwrite file
	File.open(filename, "w") { |f| f.write(data.to_json) }
	puts
	$log.info("File saved: #{filename}")

end
