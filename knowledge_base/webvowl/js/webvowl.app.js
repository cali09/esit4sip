// Setting the onotology shown on startup of webvowl
// "ontology" will load data/ontology.json
default_ontology = "ontology";


webvowl.app = function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}({
    0: function(e, t, n) {
        n(314), n(316), e.exports = n(317)
    },
    6: function(e, t) {
        e.exports = d3
    },
    86: function(e, t, n) {
        function o(e) {
            return null == e ? void 0 === e ? s : l : c && c in Object(e) ? a(e) : r(e)
        }
        var i = n(87),
            a = n(90),
            r = n(91),
            l = "[object Null]",
            s = "[object Undefined]",
            c = i ? i.toStringTag : void 0;
        e.exports = o
    },
    87: function(e, t, n) {
        var o = n(88),
            i = o.Symbol;
        e.exports = i
    },
    88: function(e, t, n) {
        var o = n(89),
            i = "object" == typeof self && self && self.Object === Object && self,
            a = o || i || Function("return this")();
        e.exports = a
    },
    89: function(e, t) {
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(t, function() {
            return this
        }())
    },
    90: function(e, t, n) {
        function o(e) {
            var t = r.call(e, s),
                n = e[s];
            try {
                e[s] = void 0;
                var o = !0
            } catch (e) {}
            var i = l.call(e);
            return o && (t ? e[s] = n : delete e[s]), i
        }
        var i = n(87),
            a = Object.prototype,
            r = a.hasOwnProperty,
            l = a.toString,
            s = i ? i.toStringTag : void 0;
        e.exports = o
    },
    91: function(e, t) {
        function n(e) {
            return i.call(e)
        }
        var o = Object.prototype,
            i = o.toString;
        e.exports = n
    },
    98: function(e, t, n) {
        function o(e) {
            return "symbol" == typeof e || a(e) && i(e) == r
        }
        var i = n(86),
            a = n(99),
            r = "[object Symbol]";
        e.exports = o
    },
    99: function(e, t) {
        function n(e) {
            return null != e && "object" == typeof e
        }
        e.exports = n
    },
    107: function(e, t) {
        var n = Array.isArray;
        e.exports = n
    },
    149: function(e, t) {
        function n(e, t) {
            for (var n = -1, o = null == e ? 0 : e.length, i = Array(o); ++n < o;) i[n] = t(e[n], n, e);
            return i
        }
        e.exports = n
    },
    214: function(e, t, n) {
        function o(e) {
            return null == e ? "" : i(e)
        }
        var i = n(215);
        e.exports = o
    },
    215: function(e, t, n) {
        function o(e) {
            if ("string" == typeof e) return e;
            if (r(e)) return a(e, o) + "";
            if (l(e)) return d ? d.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -s ? "-0" : t
        }
        var i = n(87),
            a = n(149),
            r = n(107),
            l = n(98),
            s = 1 / 0,
            c = i ? i.prototype : void 0,
            d = c ? c.toString : void 0;
        e.exports = o
    },
    314: function(e, t) {},
    316: function(e, t, n) {
        (function(t) {
            function n() {
                var e, t, n = -1,
                    o = /(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:|\bEdge\/)(\d+)/.test(navigator.userAgent);
                if (o) return n = parseInt("12");
                var i = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
                return i ? n = parseInt("11") : ("Microsoft Internet Explorer" === navigator.appName ? (e = navigator.userAgent, t = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})"), null !== t.exec(e) && (n = parseFloat(RegExp.$1))) : "Netscape" === navigator.appName && (e = navigator.userAgent, t = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})"), null !== t.exec(e) && (n = parseFloat(RegExp.$1))), n)
            }

            function o() {
                var e = n();
                if (console.log("Browser Version =" + e), e > 0 && e <= 11 && (t.select("#browserCheck").classed("hidden", !1), t.select("#killWarning").classed("hidden", !0), t.select("#optionsArea").classed("hidden", !0), t.select("#logo").classed("hidden", !0)), 12 == e) {
                    t.select("#logo").classed("hidden", !1), t.select("#browserCheck").classed("hidden", !1);
                    var o = t.select("#killWarning");
                    o.on("click", function() {
                        console.log("hide the warning please"), t.select("#browserCheck").classed("hidden", !0), t.select("#logo").style("padding", "10px")
                    })
                } else t.select("#logo").classed("hidden", !1), t.select("#browserCheck").classed("hidden", !0)
            }
            e.exports = o, o()
        }).call(t, n(6))
    },
    317: function(e, t, n) {
        (function(t) {
            e.exports = function() {
                function e(e, t, n) {
                    if (v.reset(), l.options().navigationMenu().hideAllMenus(), void 0 === e && void 0 === t || 0 === e.length) return void k.notValidJsonFile();
                    var i;
                    if (e) {
                        var a;
                        try {
                            i = JSON.parse(e), a = !0
                        } catch (e) {
                            a = !1
                        }
                        if (a === !1) return void k.notValidJsonFile();
                        if (!t) {
                            var r = i.header ? i.header.title : void 0,
                                d = c.textInLanguage(r);
                            t = d ? d : n
                        }
                    }
                    var p = 0;
                    void 0 !== i.class && (p = i.class.length), 0 === p ? k.emptyGraphContentError() : (k.validJsonFile(), g.setCachedOntology(t, e), u.setJsonText(e), s.data(i), l.options().loadingModule().setPercentMode(), l.load(), w.updateOntologyInformation(i, T), u.setFilename(t), l.updateZoomSliderValueFromOutside(), o())
                }

                function o() {
                    var e = t.select(d),
                        n = e.select("svg"),
                        o = window.innerHeight - 40,
                        a = window.innerWidth - .22 * window.innerWidth;
                    "0" === w.getSidebarVisibility() && (o = window.innerHeight - 40, a = window.innerWidth), l.adjustingGraphSize(!0), e.style("height", o + "px"), n.attr("width", a).attr("height", o), s.width(a).height(o), l.updateStyle(), i(), t.select("#loadingInfo-container").style("height", .5 * (o - 80) + "px"), k.checkForScreenSize();
                    var r = t.select("#browserCheck");
                    if (r.classed("hidden") === !1) {
                        var c = 10 + r.node().getBoundingClientRect().height;
                        t.select("#logo").style("padding", c + "px 10px")
                    } else t.select("#logo").style("padding", "10px");
                    var u = t.select("#menuElementContainer").node(),
                        p = u.scrollWidth - u.clientWidth,
                        h = t.select("#scrollLeftButton"),
                        f = t.select("#scrollRightButton");
                    p > 0 ? (f.classed("hidden", !1), h.classed("hidden", !1), b.updateScrollButtonVisibility()) : (f.classed("hidden", !0), h.classed("hidden", !0))
                }

                function i() {
                    var e = window.innerHeight - 40,
                        n = e,
                        o = e - 30,
                        i = 150;
                    if (n < 150) return t.select("#zoomSliderParagraph").classed("hidden", !0), t.select("#zoomOutButton").classed("hidden", !0), t.select("#zoomInButton").classed("hidden", !0), void t.select("#centerGraphButton").classed("hidden", !0);
                    t.select("#zoomSliderParagraph").classed("hidden", !1), t.select("#zoomOutButton").classed("hidden", !1), t.select("#zoomInButton").classed("hidden", !1), t.select("#centerGraphButton").classed("hidden", !1);
                    var a = o - 20,
                        r = a - 20;
                    if (n < 280) return t.select("#zoomSliderParagraph").classed("hidden", !0), t.select("#zoomOutButton").style("top", o + "px"), t.select("#zoomInButton").style("top", a + "px"), void t.select("#centerGraphButton").style("top", r + "px");
                    var l = o - i;
                    a = l - 20, r = a - 20, t.select("#zoomSliderParagraph").classed("hidden", !1), t.select("#zoomOutButton").style("top", o + "px"), t.select("#zoomInButton").style("top", a + "px"), t.select("#centerGraphButton").style("top", r + "px"), t.select("#zoomSliderParagraph").style("top", l + "px")
                }

                function a() {
                    var e, t, n = -1,
                        o = /(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:|\bEdge\/)(\d+)/.test(navigator.userAgent);
                    if (o) return n = parseInt("12");
                    var i = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
                    return i ? n = parseInt("11") : ("Microsoft Internet Explorer" === navigator.appName ? (e = navigator.userAgent, t = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})"), null !== t.exec(e) && (n = parseFloat(RegExp.$1))) : "Netscape" === navigator.appName && (e = navigator.userAgent, t = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})"), null !== t.exec(e) && (n = parseFloat(RegExp.$1))), n)
                }
                var r = {},
                    l = webvowl.graph(),
                    s = l.graphOptions(),
                    c = webvowl.util.languageTools(),
                    d = "#graph",
                    u = n(318)(l),
                    p = n(319)(l),
                    h = n(320)(l),
                    f = n(321)(l),
                    g = n(322)(l),
                    v = n(326)(l),
                    m = n(327)(l),
                    y = n(328)(l),
                    b = n(329)(l),
                    x = n(330)(l),
                    w = n(331)(l),
                    S = n(332)(l),
                    k = n(333)(l),
                    C = webvowl.modules.colorExternalsSwitch(l),
                    L = webvowl.modules.compactNotationSwitch(l),
                    M = webvowl.modules.datatypeFilter(),
                    O = webvowl.modules.disjointFilter(),
                    A = webvowl.modules.focuser(),
                    E = webvowl.modules.emptyLiteralFilter(),
                    _ = webvowl.modules.nodeDegreeFilter(p),
                    F = webvowl.modules.nodeScalingSwitch(l),
                    B = webvowl.modules.objectPropertyFilter(),
                    D = webvowl.modules.pickAndPin(),
                    I = webvowl.modules.selectionDetailsDisplayer(w.updateSelectionInformation),
                    T = webvowl.modules.statistics(),
                    P = webvowl.modules.subclassFilter(),
                    V = webvowl.modules.setOperatorFilter();
                return r.initialize = function() {
                    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                        return setTimeout(e, 1e3 / 60)
                    }, window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function(e) {
                        clearTimeout(e)
                    }, s.graphContainerSelector(d), s.selectionModules().push(A), s.selectionModules().push(I), s.selectionModules().push(D), s.filterModules().push(E), s.filterModules().push(T), s.filterModules().push(M), s.filterModules().push(B), s.filterModules().push(P), s.filterModules().push(O), s.filterModules().push(V), s.filterModules().push(F), s.filterModules().push(_), s.filterModules().push(L), s.filterModules().push(C), t.select(window).on("resize", o), u.setup(), h.setup(), p.setup(M, B, P, O, V, _), f.setup(D, F, L, C), v.setup(), w.setup(), k.setup();
                    var n = a();
                    if (n > 0 && n <= 11) console.log("Agent version " + n), console.log("This agent is not supported"), t.select("#browserCheck").classed("hidden", !1), t.select("#killWarning").classed("hidden", !0), t.select("#optionsArea").classed("hidden", !0), t.select("#logo").classed("hidden", !0);
                    else {
                        t.select("#logo").classed("hidden", !1), 12 === n ? (t.select("#browserCheck").classed("hidden", !1), t.select("#killWarning").classed("hidden", !1)) : t.select("#browserCheck").classed("hidden", !0), m.setup([h, p, f, A, I, v]), y.setup(), b.setup(), x.setup(), s.literalFilter(E), s.loadingModule(k), s.filterMenu(p), s.modeMenu(f), s.gravityMenu(h), s.pausedMenu(v), s.pickAndPinModule(D), s.resetMenu(m), s.searchMenu(y), s.ontologyMenu(g), s.navigationMenu(b), s.sidebar(w), s.exportMenu(u), s.graphObject(l), s.zoomSlider(x), g.setup(e), S.setup(), l.start(), o();
                        var i, r = l.options().width(),
                            c = l.options().height();
                        i = Math.min(r, c) / 1e3, l.setDefaultZoom(i);
                        var R = t.select("body");
                        t.select(document).on("keydown", function(e) {
                            8 === t.event.keyCode && t.event.target === R.node() && t.event.preventDefault()
                        }), k.parseUrlAndLoadOntology()
                    }
                }, r
            }
        }).call(t, n(6))
    },
    318: function(e, t, n) {
        (function(t) {
            e.exports = function(e) {
                function n() {
                    t.select("#exportedUrl").node().focus(), t.select("#exportedUrl").node().select(), document.execCommand("copy"), e.options().navigationMenu().hideAllMenus()
                }

                function o(e, t) {
                    var n = 0,
                        o = "opts=";
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            var a = e[i],
                                r = t[i];
                            a !== r && (o += i + "=" + r + ";", n++)
                        }
                    return o += "", 0 === n ? "" : o
                }

                function i() {
                    e.options().navigationMenu().hideAllMenus();
                    var n, o, i, l = t.select(e.options().graphContainerSelector()).select("svg");
                    r(), d(), n = l.attr("version", 1.1).attr("xmlns", "http://www.w3.org/2000/svg").node().parentNode.innerHTML, n = "<!-- Created with WebVOWL (version " + webvowl.version + "), http://vowl.visualdataweb.org -->\n" + n, o = a(n), i = "data:image/svg+xml;base64," + btoa(o), f.attr("href", i).attr("download", g + ".svg"), u(), p()
                }

                function a(e) {
                    var t, n, o, i = [],
                        a = e.length;
                    for (t = 0; t < a; t++) n = e.charAt(t), o = n.charCodeAt(0), o < 128 ? i.push(n) : i.push("&#" + o + ";");
                    return i.join("")
                }

                function r() {
                    l(".text", [{
                        name: "font-family",
                        value: "Helvetica, Arial, sans-serif"
                    }, {
                        name: "font-size",
                        value: "12px"
                    }]), l(".subtext", [{
                        name: "font-size",
                        value: "9px"
                    }]), l(".text.instance-count", [{
                        name: "fill",
                        value: "#666"
                    }]), l(".external + text .instance-count", [{
                        name: "fill",
                        value: "#aaa"
                    }]), l(".cardinality", [{
                        name: "font-size",
                        value: "10px"
                    }]), l(".text, .embedded", [{
                        name: "pointer-events",
                        value: "none"
                    }]), l(".class, .object, .disjoint, .objectproperty, .disjointwith, .equivalentproperty, .transitiveproperty, .functionalproperty, .inversefunctionalproperty, .symmetricproperty, .allvaluesfromproperty, .somevaluesfromproperty", [{
                        name: "fill",
                        value: "#acf"
                    }]), l(".label .datatype, .datatypeproperty", [{
                        name: "fill",
                        value: "#9c6"
                    }]), l(".rdf, .rdfproperty", [{
                        name: "fill",
                        value: "#c9c"
                    }]), l(".literal, .node .datatype", [{
                        name: "fill",
                        value: "#fc3"
                    }]), l(".deprecated, .deprecatedproperty", [{
                        name: "fill",
                        value: "#ccc"
                    }]), l(".external, .externalproperty", [{
                        name: "fill",
                        value: "#36c"
                    }]), l("path, .nofill", [{
                        name: "fill",
                        value: "none"
                    }]), l("marker path", [{
                        name: "fill",
                        value: "#000"
                    }]), l(".class, path, line, .fineline", [{
                        name: "stroke",
                        value: "#000"
                    }]), l(".white, .subclass, .subclassproperty, .external + text", [{
                        name: "fill",
                        value: "#fff"
                    }]), l(".class.hovered, .property.hovered, .cardinality.hovered, .cardinality.focused, circle.pin, .filled.hovered, .filled.focused", [{
                        name: "fill",
                        value: "#f00"
                    }, {
                        name: "cursor",
                        value: "pointer"
                    }]), l(".focused, path.hovered", [{
                        name: "stroke",
                        value: "#f00"
                    }]), l(".indirect-highlighting, .feature:hover", [{
                        name: "fill",
                        value: "#f90"
                    }]), l(".values-from", [{
                        name: "stroke",
                        value: "#69c"
                    }]), l(".symbol, .values-from.filled", [{
                        name: "fill",
                        value: "#69c"
                    }]), l(".class, path, line", [{
                        name: "stroke-width",
                        value: "2"
                    }]), l(".fineline", [{
                        name: "stroke-width",
                        value: "1"
                    }]), l(".dashed, .anonymous", [{
                        name: "stroke-dasharray",
                        value: "8"
                    }]), l(".dotted", [{
                        name: "stroke-dasharray",
                        value: "3"
                    }]), l("rect.focused, circle.focused", [{
                        name: "stroke-width",
                        value: "4px"
                    }]), l(".nostroke", [{
                        name: "stroke",
                        value: "none"
                    }]), l("marker path", [{
                        name: "stroke-dasharray",
                        value: "100"
                    }])
                }

                function l(e, n) {
                    var o = t.selectAll(e);
                    o.empty() || n.forEach(function(e) {
                        o.each(function() {
                            var n = t.select(this);
                            s(n, e.name) || n.style(e.name, e.value)
                        })
                    })
                }

                function s(e, t) {
                    return "fill" === t && c(e)
                }

                function c(e) {
                    var t = e.datum();
                    return void 0 !== t && (t.backgroundColor && !!t.backgroundColor())
                }

                function d() {
                    t.selectAll(".hidden-in-export").style("display", "none")
                }

                function u() {
                    t.selectAll(".text, .subtext, .text.instance-count, .external + text .instance-count, .cardinality, .text, .embedded, .class, .object, .disjoint, .objectproperty, .disjointwith, .equivalentproperty, .transitiveproperty, .functionalproperty, .inversefunctionalproperty, .symmetricproperty, .allvaluesfromproperty, .somevaluesfromproperty, .label .datatype, .datatypeproperty, .rdf, .rdfproperty, .literal, .node .datatype, .deprecated, .deprecatedproperty, .external, .externalproperty, path, .nofill, .symbol, .values-from.filled, marker path, .class, path, line, .fineline, .white, .subclass, .subclassproperty, .external + text, .class.hovered, .property.hovered, .cardinality.hovered, .cardinality.focused, circle.pin, .filled.hovered, .filled.focused, .focused, path.hovered, .indirect-highlighting, .feature:hover, .values-from, .class, path, line, .fineline, .dashed, .anonymous, .dotted, rect.focused, circle.focused, .nostroke, marker path").each(function() {
                        var e = t.select(this),
                            n = e.node().style;
                        for (var o in n)
                            if (n.hasOwnProperty(o)) {
                                if (s(e, o)) continue;
                                e.style(o, null)
                            }
                        e.datum && void 0 !== e.datum() && e.datum().type && "rdfs:subClassOf" === e.datum().type() && e.style("fill", null)
                    });
                    for (var e = t.select("#menuElementContainer").node(), n = e.children, o = n.length, i = 0; i < o; i++) {
                        var a = n[i].id;
                        t.select("#" + a).select("path").style("stroke-width", "0"), t.select("#" + a).select("path").style("fill", "#fff")
                    }
                    t.select("#magnifyingGlass").style("stroke-width", "0"), t.select("#magnifyingGlass").style("fill", "#666")
                }

                function p() {
                    t.selectAll(".hidden-in-export").style("display", null)
                }

                function h() {
                    if (e.options().navigationMenu().hideAllMenus(), !y) return alert("No graph data available."), void t.event.preventDefault();
                    var n, o = e.graphNodeElements(),
                        i = e.graphLabelElements(),
                        a = JSON.parse(y),
                        r = a._comment,
                        l = " [Additional Information added by WebVOWL Exporter Version: 1.1.2]";
                    r.indexOf(l) === -1 && (a._comment = r + " [Additional Information added by WebVOWL Exporter Version: 1.1.2]");
                    var s = a.classAttribute,
                        c = a.propertyAttribute;
                    for (n = 0; n < s.length; n++) {
                        var d = s[n];
                        delete d.pos, delete d.pinned
                    }
                    var u;
                    for (n = 0; n < c.length; n++) u = c[n], delete u.pos, delete u.pinned;
                    o.each(function(e) {
                        var t = e.id();
                        for (n = 0; n < s.length; n++) {
                            var o = s[n];
                            if (o.id === t) {
                                o.pos = [e.x, e.y], e.pinned() && (o.pinned = !0);
                                break
                            }
                        }
                    });
                    for (var p = 0; p < i.length; p++) {
                        var h = i[p].property();
                        for (n = 0; n < c.length; n++)
                            if (u = c[n], u.id === h.id()) {
                                u.pos = [i[p].x, i[p].y], i[p].pinned() && (u.pinned = !0);
                                break
                            }
                    }
                    a.settings = {};
                    var f = e.scaleFactor(),
                        m = e.paused(),
                        b = e.translation();
                    a.settings.global = {}, a.settings.global.zoom = f, a.settings.global.translation = b, a.settings.global.paused = m;
                    var x, w, S, k = e.options().classDistance(),
                        C = e.options().datatypeDistance();
                    a.settings.gravity = {}, a.settings.gravity.classDistance = k, a.settings.gravity.datatypeDistance = C;
                    var L = e.options().filterMenu(),
                        M = L.getCheckBoxContainer(),
                        O = [];
                    for (n = 0; n < M.length; n++) x = M[n].checkbox.attr("id"), w = M[n].checkbox.property("checked"), S = {}, S.id = x, S.checked = w, O.push(S);
                    var A = L.getDegreeSliderValue();
                    a.settings.filter = {}, a.settings.filter.checkBox = O, a.settings.filter.degreeSliderValue = A;
                    var E = e.options().modeMenu(),
                        _ = E.getCheckBoxContainer(),
                        F = [];
                    for (n = 0; n < _.length; n++) x = _[n].attr("id"), w = _[n].property("checked"), S = {}, S.id = x, S.checked = w, F.push(S);
                    var B = E.colorModeState();
                    a.settings.modes = {}, a.settings.modes.checkBox = F, a.settings.modes.colorSwitchState = B;
                    var D = {};
                    D._comment = a._comment, D.header = a.header, D.namespace = a.namespace, D.metrics = a.metrics, D.settings = a.settings, D.class = a.class, D.classAttribute = a.classAttribute, D.property = a.property, D.propertyAttribute = a.propertyAttribute;
                    var I = JSON.stringify(D, null, "  "),
                        T = "data:text/json;charset=utf-8," + encodeURIComponent(I);
                    v.attr("href", T).attr("download", g + ".json")
                }
                var f, g, v, m, y, b = {};
                return b.setup = function() {
                    f = t.select("#exportSvg").on("click", i), v = t.select("#exportJson").on("click", h), m = t.select("#copyBt").on("click", n);
                    var o = t.select("#m_export");
                    o.on("mouseover", function() {
                        var t = e.options().searchMenu();
                        t.hideSearchEntries(), b.exportAsUrl()
                    })
                }, b.setFilename = function(e) {
                    g = e || "export"
                }, b.setJsonText = function(e) {
                    y = e
                }, b.exportAsUrl = function() {
                    var n = {};
                    n.sidebar = e.options().sidebar().getSidebarVisibility();
                    var i = e.options().filterMenu().getDefaultDegreeValue(),
                        a = e.options().filterMenu().getDegreeSliderValue();
                    parseInt(i) === parseInt(a) ? n.doc = -1 : n.doc = a, n.cd = e.options().classDistance(), n.dd = e.options().datatypeDistance(), n.filter_datatypes = String(e.options().filterMenu().getCheckBoxValue("datatypeFilterCheckbox")), n.filter_sco = String(e.options().filterMenu().getCheckBoxValue("subclassFilterCheckbox")), n.filter_disjoint = String(e.options().filterMenu().getCheckBoxValue("disjointFilterCheckbox")), n.filter_setOperator = String(e.options().filterMenu().getCheckBoxValue("setoperatorFilterCheckbox")), n.filter_objectProperties = String(e.options().filterMenu().getCheckBoxValue("objectPropertyFilterCheckbox")), n.mode_dynamic = String(e.options().dynamicLabelWidth()), n.mode_scaling = String(e.options().modeMenu().getCheckBoxValue("nodescalingModuleCheckbox")), n.mode_compact = String(e.options().modeMenu().getCheckBoxValue("compactnotationModuleCheckbox")), n.mode_colorExt = String(e.options().modeMenu().getCheckBoxValue("colorexternalsModuleCheckbox")), n.mode_multiColor = String(e.options().modeMenu().colorModeState()), n.rect = 0;
                    var r, l = e.options().defaultConfig(),
                        s = o(l, n),
                        c = String(location);
                    if (0 === s.length) return r = t.select("#exportedUrl").node(), r.value = c, void(r.title = c);
                    var d, u = (c.match(/#/g) || []).length;
                    if (void 0 !== u && 0 !== u || (d = c + "#" + s), u > 0) {
                        var p, h = c.split("#");
                        for (h[1].indexOf("opts=") >= 0 ? (h[1] = s, d = h[0]) : (d = h[0] + "#", d += s), p = 1; p < h.length; p++) h[p].length > 0 && (d += "#" + h[p])
                    }
                    r = t.select("#exportedUrl").node(), r.value = d, r.focus(), r.select(), r.title = d
                }, b
            }
        }).call(t, n(6))
    },
    319: function(e, t, n) {
        (function(t) {
            e.exports = function(e) {
                function n(n, o, i, a) {
                    var r, l;
                    r = t.select(a).append("div").classed("checkboxContainer", !0), l = r.append("input").classed("filterCheckbox", !0).attr("id", o + "FilterCheckbox").attr("type", "checkbox").property("checked", n.enabled()), d.push({
                        checkbox: l,
                        defaultState: n.enabled()
                    }), l.on("click", function(t) {
                        var o = l.property("checked");
                        n.enabled(o), t !== !0 && e.update()
                    }), r.append("label").attr("for", o + "FilterCheckbox").text(i)
                }

                function o(t, n) {
                    t.setMaxDegreeSetter(function(e) {
                        s.attr("max", e), a(s, Math.min(e, s.property("value")))
                    }), t.setDegreeGetter(function() {
                        return +s.property("value")
                    }), t.setDegreeSetter(function(e) {
                        a(s, e)
                    });
                    var o, r;
                    o = n.append("div").classed("distanceSliderContainer", !0), s = o.append("input").attr("id", "nodeDegreeDistanceSlider").attr("type", "range").attr("min", 0).attr("step", 1), o.append("label").classed("description", !0).attr("for", "nodeDegreeDistanceSlider").text("Degree of collapsing"), r = o.append("label").classed("value", !0).attr("for", "nodeDegreeDistanceSlider").text(0), s.on("change", function(t) {
                        t !== !0 && (e.update(), l = s.property("value"))
                    }), s.on("input", function() {
                        var e = s.property("value");
                        r.text(e)
                    }), s.on("wheel", i), s.on("focusout", function() {
                        s.property("value") !== l && e.update()
                    })
                }

                function i() {
                    var n, o = t.event;
                    o.deltaY < 0 && (n = 1), o.deltaY > 0 && (n = -1);
                    var i = parseInt(s.property("value")),
                        a = i + n;
                    i !== a && (s.property("value", a), s.on("input")(), e.update()), t.event.preventDefault()
                }

                function a(e, t) {
                    e.property("value", t).on("input")()
                }

                function r() {
                    u.node().addEventListener("animationend", function() {
                        u.classed("buttonPulse", !1), u.classed("filterMenuButtonHighlight", !0)
                    })
                }
                var l, s, c = {},
                    d = [],
                    u = (t.select("#m_filter"), t.select("#c_filter a")),
                    p = t.select("#nodeDegreeFilteringOption"),
                    h = 0;
                return c.setDefaultDegreeValue = function(e) {
                    h = e
                }, c.getDefaultDegreeValue = function() {
                    return h
                }, c.getGraphObject = function() {
                    return e
                }, c.getCheckBoxContainer = function() {
                    return d
                }, c.getDegreeSliderValue = function() {
                    return s.property("value")
                }, c.setup = function(t, i, a, l, s, d) {
                    u.on("mouseover", function() {
                        var t = e.options().searchMenu();
                        t.hideSearchEntries()
                    }), u.on("mouseleave", function() {
                        c.highlightForDegreeSlider(!1)
                    }), n(t, "datatype", "Datatype properties", "#datatypeFilteringOption"), n(i, "objectProperty", "Object properties", "#objectPropertyFilteringOption"), n(a, "subclass", "Solitary subclasses", "#subclassFilteringOption"), n(l, "disjoint", "Class disjointness", "#disjointFilteringOption"), n(s, "setoperator", "Set operators", "#setOperatorFilteringOption"), o(d, p), r()
                }, c.reset = function() {
                    d.forEach(function(e) {
                        var t = e.checkbox,
                            n = e.defaultState,
                            o = t.property("checked");
                        o !== n && (t.property("checked", n), t.on("click")())
                    }), a(s, 0), s.on("change")()
                }, c.killButtonAnimation = function() {
                    u.classed("buttonPulse", !1), u.classed("filterMenuButtonHighlight", !1)
                }, c.highlightForDegreeSlider = function(e) {
                    if (arguments.length || (e = !0), u.classed("highlighted", e), p.classed("highlighted", e), u.classed("buttonPulse") === !0 && e === !0) {
                        u.classed("buttonPulse", !1);
                        var t = setTimeout(function() {
                            u.classed("buttonPulse", e), clearTimeout(t)
                        }, 100)
                    } else u.classed("buttonPulse", e), u.classed("filterMenuButtonHighlight", e)
                }, c.setCheckBoxValue = function(e, t) {
                    for (var n = 0; n < d.length; n++) {
                        var o = d[n].checkbox.attr("id");
                        if (o === e) {
                            d[n].checkbox.property("checked", t);
                            break
                        }
                    }
                }, c.getCheckBoxValue = function(e) {
                    for (var t = 0; t < d.length; t++) {
                        var n = d[t].checkbox.attr("id");
                        if (n === e) return d[t].checkbox.property("checked")
                    }
                }, c.setDegreeSliderValue = function(e) {
                    s.property("value", e)
                }, c.getDegreeSliderValue = function() {
                    return s.property("value")
                }, c.updateSettings = function() {
                    var e = !0,
                        t = s.property("value");
                    t > 0 ? c.highlightForDegreeSlider(!0) : c.highlightForDegreeSlider(!1), d.forEach(function(t) {
                        var n = t.checkbox;
                        n.on("click")(e)
                    }), s.on("input")(), s.on("change")(e)
                }, c
            }
        }).call(t, n(6))
    },
    320: function(e, t, n) {
        (function(t) {
            e.exports = function(e) {
                function n(n, i, r, l) {
                    var s, c, d = l();
                    s = t.select(n).append("div").datum({
                        distanceFunction: l
                    }).classed("distanceSliderContainer", !0);
                    var u = s.append("input").attr("id", i + "DistanceSlider").attr("type", "range").attr("min", 10).attr("max", 600).attr("value", l()).attr("step", 10);
                    s.append("label").classed("description", !0).attr("for", i + "DistanceSlider").text(r), c = s.append("label").classed("value", !0).attr("for", i + "DistanceSlider").text(l()), a.push(u), u.on("focusout", function() {
                        e.updateStyle()
                    }), u.on("input", function() {
                        var t = u.property("value");
                        l(t), o(d), c.text(t), e.updateStyle()
                    }), u.on("wheel", function() {
                        var e, n = t.event;
                        n.deltaY < 0 && (e = 10), n.deltaY > 0 && (e = -10);
                        var o = parseInt(u.property("value")),
                            i = o + e;
                        i !== o && (u.property("value", i), l(i), u.on("input")()), t.event.preventDefault()
                    })
                }

                function o(e) {
                    var t = Math.max(r.classDistance(), r.datatypeDistance()),
                        n = t / e,
                        o = l * n;
                    r.charge(o)
                }
                var i = {},
                    a = [],
                    r = e.graphOptions(),
                    l = r.charge();
                return i.setup = function() {
                    var o = t.select("#m_gravity");
                    o.on("mouseover", function() {
                        var t = e.options().searchMenu();
                        t.hideSearchEntries()
                    }), n("#classSliderOption", "class", "Class distance", r.classDistance), n("#datatypeSliderOption", "datatype", "Datatype distance", r.datatypeDistance)
                }, i.reset = function() {
                    a.forEach(function(e) {
                        e.property("value", function(e) {
                            return e.distanceFunction()
                        }), e.on("input")()
                    })
                }, i
            }
        }).call(t, n(6))
    },
    321: function(e, t, n) {
        (function(t) {
            e.exports = function(e) {
                function n(n, o, i, a, r) {
                    var l = t.select(i).append("div").classed("checkboxContainer", !0),
                        c = l.append("input").classed("moduleCheckbox", !0).attr("id", n + "ModuleCheckbox").attr("type", "checkbox").property("checked", a());
                    c.on("click", function(n) {
                        var o = c.property("checked");
                        a(o), t.select("#maxLabelWidthSliderOption").classed("hidden", !o), r > 0 && e.lazyRefresh()
                    }), l.append("label").attr("for", n + "ModuleCheckbox").text(o), s = c
                }

                function o(n, o, i, a, r) {
                    var l, s;
                    return l = t.select(a).append("div").classed("checkboxContainer", !0).datum({
                        module: n,
                        defaultState: n.enabled()
                    }), s = l.append("input").classed("moduleCheckbox", !0).attr("id", o + "ModuleCheckbox").attr("type", "checkbox").property("checked", n.enabled()), p.push(s), s.on("click", function(t, n) {
                        var o = s.property("checked");
                        t.module.enabled(o), r && n !== !0 && e.update()
                    }), l.append("label").attr("for", o + "ModuleCheckbox").text(i), l
                }

                function i(t, n) {
                    var o = t.append("button").datum({
                        active: !1
                    }).classed("color-mode-switch", !0);
                    return a(o, n), o.on("click", function(t) {
                        var i = o.datum();
                        i.active = !i.active, a(o, n), n.enabled() && t !== !0 && e.update()
                    }), o
                }

                function a(e, t) {
                    var n = e.datum().active,
                        o = r(n);
                    e.classed("active", n).text(o.text), t && t.colorModeType(o.type)
                }

                function r(e) {
                    return e ? d : c
                }
                var l, s, c = {
                        text: "Multicolor",
                        type: "same"
                    },
                    d = {
                        text: "Multicolor",
                        type: "gradient"
                    },
                    u = {},
                    p = [];
                return u.colorModeState = function(e) {
                    return arguments.length ? (l.datum().active = e, u) : l.datum().active
                }, u.setDynamicLabelWidth = function(e) {
                    s.property("checked", e)
                }, u.getCheckBoxContainer = function() {
                    return p
                }, u.colorModeSwitch = function() {
                    return l
                }, u.setup = function(a, r, s, c) {
                    var d = t.select("#m_modes");
                    d.on("mouseover", function() {
                        var t = e.options().searchMenu();
                        t.hideSearchEntries()
                    }), n("labelWidth", "Dynamic label width", "#dynamicLabelWidth", e.options().dynamicLabelWidth, 1), o(a, "pickandpin", "Pick & pin", "#pickAndPinOption", !1), o(r, "nodescaling", "Node scaling", "#nodeScalingOption", !0), o(s, "compactnotation", "Compact notation", "#compactNotationOption", !0);
                    var u = o(c, "colorexternals", "Color externals", "#colorExternalsOption", !0);
                    l = i(u, c)
                }, u.reset = function() {
                    p.forEach(function(e) {
                        var t = e.datum().defaultState,
                            n = e.property("checked");
                        n !== t && (e.property("checked", t), e.on("click")(e.datum())), e.datum().module.reset()
                    }), l.datum().active = !0, l.on("click")()
                }, u.setCheckBoxValue = function(e, t) {
                    for (var n = 0; n < p.length; n++) {
                        var o = p[n].attr("id");
                        if (o === e) {
                            p[n].property("checked", t);
                            break
                        }
                    }
                }, u.getCheckBoxValue = function(e) {
                    for (var t = 0; t < p.length; t++) {
                        var n = p[t].attr("id");
                        if (n === e) return p[t].property("checked")
                    }
                }, u.setColorSwitchState = function(e) {
                    u.colorModeState(!e)
                }, u.setColorSwitchStateUsingURL = function(e) {
                    u.colorModeState(!e), l.on("click")(!0)
                }, u.updateSettingsUsingURL = function() {
                    var e = !0;
                    p.forEach(function(t) {
                        t.on("click")(t.datum(), e)
                    })
                }, u.updateSettings = function() {
                    var e = !0;
                    p.forEach(function(t) {
                        t.on("click")(t.datum(), e)
                    }), l.on("click")(e)
                }, u
            }
        }).call(t, n(6))
    },
    322: function(e, t, n) {
        (function(t) {
            n(323);
            e.exports = function(e) {
                function n() {
                    t.select(window).on("hashchange", function() {
                        var e = t.event.oldURL,
                            n = t.event.newURL;
                        if (e !== n) {
                            if (n === e + "#") return;
                            o(), O.parseUrlAndLoadOntology()
                        }
                    }), o()
                }

                function o() {
                    t.selectAll("#menuElementContainer > li > a").attr("href", location.hash || "#")
                }

                function i(e) {
                    var n = t.select("#bulletPoint_container"),
                        o = n.append("div");
                    o.node().innerHTML = e, O.scrollDownDetails()
                }

                function a(e) {
                    var n = t.select("#bulletPoint_container"),
                        o = n.node().getElementsByTagName("LI"),
                        i = o.length - 1;
                    if (i >= 0) {
                        var a = o[i].innerHTML;
                        o[i].innerHTML = a + e
                    }
                    O.scrollDownDetails()
                }

                function r(e) {
                    var n = t.select("#bulletPoint_container"),
                        o = n.append("li");
                    o.node().innerHTML = e, t.select("#currentLoadingStep").node().innerHTML = e, O.scrollDownDetails()
                }

                function l() {
                    var e = t.select("#iri-converter-button"),
                        n = t.select("#iri-converter-input");
                    n.on("input", function() {
                        x();
                        var t = "" === n.property("value");
                        e.attr("disabled", t || void 0)
                    }).on("click", function() {
                        x()
                    }), t.select("#iri-converter-form").on("submit", function() {
                        for (var e = n.property("value"), o = e.replace(/%20/g, " "); o.beginsWith(" ");) o = o.substr(1, o.length);
                        for (; o.endsWith(" ");) o = o.substr(0, o.length - 1);
                        e = o;
                        var i = e.toLowerCase();
                        return i.endsWith(".json") ? (location.hash = "url=" + e, n.property("value", ""), n.on("input")()) : (location.hash = "iri=" + e, n.property("value", ""), n.on("input")()), t.event.preventDefault(), !1
                    })
                }

                function s() {
                    var n = t.select("#file-converter-input"),
                        o = t.select("#file-converter-label"),
                        i = t.select("#file-converter-button");
                    n.on("change", function() {
                        var t = n.property("files");
                        t.length <= 0 ? (o.text("Select ontology file"), i.property("disabled", !0)) : (o.text(t[0].name), C = t[0].name, i.property("disabled", !1), i.node().click(), e.options().navigationMenu().hideAllMenus())
                    }), i.on("click", function() {
                        var e = n.property("files")[0];
                        if (!e) return !1;
                        var t = "file=" + e.name;
                        location.hash === "#" + t ? O.parseUrlAndLoadOntology() : location.hash = t
                    })
                }

                function c(e) {
                    var n = t.select("#o2vConverterContainer");
                    if (!n.node()) {
                        var o = t.select("#bulletPoint_container"),
                            i = o.append("div");
                        n = i.append("ul"), n.attr("id", "o2vConverterContainer"), n.style("margin-left", "-25px")
                    }
                    for (var a = n.node().children, r = a.length, l = 0; l < r; l++) a[0].remove();
                    for (var s, c = e.split("* "), d = 0; d < c.length; d++) {
                        var u = c[d];
                        u.length > 0 && (s = n.append("li"), s.attr("type", "disc"), s.node().innerHTML = u.replace(/\n/g, "<br>"))
                    }
                    s && (s.node().innerHTML += "<br>"), O.scrollDownDetails()
                }

                function d(e, n) {
                    t.xhr("loadingStatus?sessionId=" + M, "application/text", function(t, o) {
                        t && (console.log("ontologyMenu getLoadingStatusOnceCallBacked throws error"), console.log("---------Error -----------"), console.log(t), console.log("---------Request -----------"), console.log(o)), c(o.responseText), e(n)
                    })
                }

                function u() {
                    t.xhr("loadingStatus?sessionId=" + M, "application/text", function(e, t) {
                        e && (console.log("ontologyMenu getLoadingStatusTimeLooped throws error"), console.log("---------Error -----------"), console.log(e), console.log("---------Request -----------"), console.log(t)), B === !1 && (c(t.responseText), p())
                    })
                }

                function p() {
                    clearTimeout(L), B === !1 && (L = setTimeout(function() {
                        u()
                    }, 1e3))
                }

                function h(e) {
                    t.xhr("loadingStatus", "application/text", function(t, n) {
                        void 0 !== n ? c(n.responseText + "<br>" + e) : i(e)
                    })
                }

                function f(e) {
                    var t = e[2];
                    return t !== M ? (console.log("The conversion process for file:" + e[1] + " has been canceled!"), void E.conversionFinished(t)) : (O.loadFromOWL2VOWL(e[0], e[1]), void E.conversionFinished())
                }

                function g(e) {
                    var t = e[2];
                    return t !== M ? void console.log("The conversion process for file:" + e[1] + " has been canceled!") : void O.loadFromOWL2VOWL(e[0], e[1])
                }

                function v(t) {
                    var n = t[0],
                        o = t[1],
                        a = t[2];
                    return a !== M ? (console.log("This thread has been canceled!!"), void E.conversionFinished(a)) : (h('<br><span style=\'color:red\'> Failed to convert the file.</span>  Ontology could not be loaded.<br>Is it a valid OWL ontology? Please check with <a target="_blank"href="http://visualdataweb.de/validator/">OWL Validator</a>'), null !== n && 500 === n.status && i("<span style='color:red'>Could not find ontology  at the URL</span>"), o && 0 === o.responseText.length && i("<span style='color:red'>Received empty graph</span>"), e.handleOnLoadingError(), void E.conversionFinished())
                }

                function m(t) {
                    var n = t[0],
                        o = t[1],
                        a = t[2];
                    return a !== M ? void console.log("The loading process of JSON_URL has been canceled!") : (null !== n && 500 === n.status && i("<span style='color:red'>Could not find json at the URL</span>"), o && 0 === o.responseText.length && i("<span style='color:red'>Received empty graph</span>"), e.handleOnLoadingError(), void E.conversionFinished())
                }

                function y(e, t, n) {
                    B = !1, p();
                    var o = new FormData;
                    o.append("ontology", e), o.append("sessionId", n);
                    var i = new XMLHttpRequest;
                    i.open("POST", "convert", !0), i.onload = function() {
                        clearTimeout(L), B = !0, d(b, [i, t, n])
                    }, p(), i.send(o)
                }

                function b(t) {
                    var n = t[0],
                        o = t[1],
                        i = t[2];
                    return i !== M ? (console.log("The conversion process for file:" + o + " has been canceled!"), void E.conversionFinished(i)) : void(200 === n.status ? (O.loadFromOWL2VOWL(n.responseText, o), E.conversionFinished()) : (h('Failed to convert the file. Ontology could not be loaded.<br>Is it a valid OWL ontology? Please check with <a target="_blank"href="http://visualdataweb.de/validator/">OWL Validator</a>'), e.handleOnLoadingError(), E.conversionFinished()))
                }

                function x() {
                    function e() {
                        n.style("display", void 0), clearTimeout(k), t.select(window).on("click", void 0).on("keydown", void 0), n.on("mouseover", void 0)
                    }
                    var n = t.select("#select .toolTipMenu");
                    n.on("click", function() {
                        t.event.stopPropagation()
                    }).on("keydown", function() {
                        t.event.stopPropagation()
                    }), n.style("display", "block"), clearTimeout(k), k = setTimeout(function() {
                        e()
                    }, 3e3), t.select(window).on("click", function() {
                        e()
                    }).on("keydown", function() {
                        e()
                    }), n.on("mouseover", function() {
                        e()
                    })
                }

                function w() {
                    t.select("#layoutLoadingProgressBarContainer").classed("hidden", !1), _.classed("hidden", !1), F.classed("hidden", !1)
                }

                function S() {
                    _.classed("hidden", !0)
                }
                var k, C, L, M, O, A, E = {},
                    _ = t.select("#loading-info"),
                    F = t.select("#loading-progress"),
                    B = !1,
                    D = !1,
                    I = {};
                return String.prototype.beginsWith = function(e) {
                    return 0 === this.indexOf(e)
                }, E.getLoadingFunction = function() {
                    return A
                }, E.cachedOntology = function(e) {
                    return I[e]
                }, E.setCachedOntology = function(e, t) {
                    I[e] = t
                }, E.getErrorStatus = function() {
                    return D
                }, E.setup = function(o) {
                    A = o, O = e.options().loadingModule();
                    var i = t.select("#m_select");
                    i.on("mouseover", function() {
                        var t = e.options().searchMenu();
                        t.hideSearchEntries()
                    }), l(), s(), n(), O.setOntologyMenu(E)
                }, E.stopLoadingTimer = function() {
                    B = !0, clearTimeout(L)
                }, E.setIriText = function(e) {
                    t.select("#iri-converter-input").node().value = e, t.select("#iri-converter-button").attr("disabled", !1), t.select("#iri-converter-form").on("submit")()
                }, E.clearDetailInformation = function() {
                    for (var e = t.select("#bulletPoint_container"), n = e.node().children, o = n.length, i = 0; i < o; i++) n[0].remove()
                }, E.append_message = function(e) {
                    i(e)
                }, E.append_message_toLastBulletPoint = function(e) {
                    a(e)
                }, E.append_bulletPoint = function(e) {
                    r(e)
                }, E.setLoadingStatusInfo = function(e) {
                    c(e)
                }, E.setConversionID = function(e) {
                    M = e
                }, E.callbackLoad_Ontology_FromIRI = function(e) {
                    var n = e[0],
                        o = e[1],
                        i = e[2];
                    B = !1, p(), t.xhr(n, "application/json", function(e, t) {
                        var n = !e;
                        (null !== e && 500 === e.status || t && 0 === t.responseText.length) && (clearTimeout(L), B = !0, d(v, [e, t, i]));
                        var a;
                        n && (clearTimeout(L), B = !0, a = t.responseText, d(f, [a, o, i]))
                    })
                }, E.getConversionId = function() {
                    return M
                }, E.callbackLoad_JSON_FromURL = function(e) {
                    var n = e[0],
                        o = e[1],
                        i = e[2];
                    B = !1, p(), t.xhr(n, "application/json", function(e, t) {
                        var n = !e;
                        if ((null !== e && 500 === e.status || t && 0 === t.responseText.length) && (clearTimeout(L), B = !0, n = !1, console.log(t), console.log(t.responseText.length), d(m, [e, t, i])), n) {
                            clearTimeout(L), B = !0;
                            var a = t.responseText;
                            d(g, [a, o, i])
                        }
                    })
                }, E.callbackLoadFromOntology = function(e, t, n) {
                    y(e, t, n)
                }, E.conversionFinished = function(e) {
                    var n = M;
                    e && (n = e), t.xhr("conversionDone?sessionId=" + n, "application/text", function(e, t) {
                        e && (console.log("ontologyMenu conversionFinished throws error"), console.log("---------Error -----------"), console.log(e), console.log("---------Request -----------"), console.log(t))
                    })
                }, E.showLoadingStatus = function(e) {
                    e === !0 ? w() : S()
                }, E
            }
        }).call(t, n(6))
    },
    323: function(e, t, n) {
        function o(e) {
            return e = i(e), e && l.test(e) ? e.replace(r, a) : e
        }
        var i = n(214),
            a = n(324),
            r = /&(?:amp|lt|gt|quot|#39);/g,
            l = RegExp(r.source);
        e.exports = o
    },
    324: function(e, t, n) {
        var o = n(325),
            i = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            },
            a = o(i);
        e.exports = a
    },
    325: function(e, t) {
        function n(e) {
            return function(t) {
                return null == e ? void 0 : e[t]
            }
        }
        e.exports = n
    },
    326: function(e, t, n) {
        (function(t) {
            e.exports = function(e) {
                function n() {
                    o(), i()
                }

                function o() {
                    a.classed("paused", function(e) {
                        return e.paused
                    })
                }

                function i() {
                    a.datum().paused ? a.text("Resume") : a.text("Pause")
                }
                var a, r = {};
                return r.setup = function() {
                    var o = t.select("#pauseOption");
                    o.on("mouseover", function() {
                        var t = e.options().searchMenu();
                        t.hideSearchEntries()
                    }), a = t.select("#pause-button").datum({
                        paused: !1
                    }).on("click", function(t) {
                        e.paused(!t.paused), t.paused = !t.paused, n(), a.classed("highlighted", t.paused)
                    }), n()
                }, r.setPauseValue = function(t) {
                    a.datum().paused = t, e.paused(t), a.classed("highlighted", t), n()
                }, r.reset = function() {
                    r.setPauseValue(!1)
                }, r
            }
        }).call(t, n(6))
    },
    327: function(e, t, n) {
        (function(t) {
            e.exports = function(e) {
                function n() {
                    e.resetSearchHighlight(), e.options().searchMenu().clearText(), a.classDistance(r.classDistance()), a.datatypeDistance(r.datatypeDistance()), a.charge(r.charge()), a.gravity(r.gravity()), a.linkStrength(r.linkStrength()), e.reset(), o.forEach(function(e) {
                        e.reset()
                    }), e.updateStyle()
                }
                var o, i = {},
                    a = e.graphOptions(),
                    r = webvowl.options();
                return i.setup = function(i) {
                    o = i, t.select("#reset-button").on("click", n);
                    var a = t.select("#resetOption");
                    a.on("mouseover", function() {
                        var t = e.options().searchMenu();
                        t.hideSearchEntries()
                    })
                }, i
            }
        }).call(t, n(6))
    },
    328: function(e, t, n) {
        (function(t) {
            e.exports = function(e) {
                function n() {
                    h = e.getUpdateDictionary(), b = !1, v = [], m = [];
                    var t, n = [],
                        o = [];
                    for (t = 0; t < h.length; t++) {
                        var i = h[t].labelForCurrentLanguage();
                        if (n.push(h[t].id()), o.push(i), h[t].equivalents && h[t].equivalents().length > 0)
                            for (var a = h[t].equivalentsString(), r = a.split(", "), l = 0; l < r.length; l++) n.push(h[t].id()), o.push(r[l])
                    }
                    u = [], p = [];
                    var s, c, d = -1;
                    for (t = 0; t < o.length; t++)
                        if (0 !== t)
                            if (s = o[t], c = n[t], d = u.indexOf(s), d === -1) {
                                u.push(o[t]), p.push([]);
                                var f = p.length;
                                p[f - 1].push(c)
                            } else p[d].push(c);
                    else u.push(o[t]), p.push([]), p[0].push(n[t]);
                    for (t = 0; t < u.length; t++) {
                        for (var g = u[t], y = p[t], x = "[ ", w = 0; w < y.length; w++) x += y[w].toString(), x += ", ";
                        x = x.substring(0, x.length - 2), x += " ]";
                        var S = y[0];
                        if (y.length > 1) {
                            for (var k = !0, C = 0; C < y.length; C++) y[C] !== S && (k = !1);
                            k === !0 ? v.push(g) : v.push(g + " (" + y.length + ")")
                        } else v.push(g);
                        m.push(g)
                    }
                }

                function o() {
                    g.showSearchEntries()
                }

                function i() {
                    x ? g.hideSearchEntries() : g.showSearchEntries()
                }

                function a(e) {
                    var t = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
                    return t.test(e)
                }

                function r() {
                    b && n();
                    var o, i = S.node().children,
                        r = i.length,
                        l = 0,
                        s = -1;
                    for (o = 0; o < r; o++) {
                        var c = i[o].getAttribute("class");
                        "dbEntrySelected" === c && (s = o)
                    }
                    if (13 === t.event.keyCode)
                        if (s >= 0 && s < r) i[s].onclick(), g.hideSearchEntries();
                        else if (0 === r) {
                        f = d.node().value;
                        for (var u = f.replace(/%20/g, " "); u.beginsWith(" ");) u = u.substr(1, u.length);
                        for (; u.endsWith(" ");) u = u.substr(0, u.length - 1);
                        var p = u.replace(/ /g, "%20"),
                            h = a(p);
                        if (h) {
                            var v = e.options().ontologyMenu();
                            v.setIriText(p), d.node().value = ""
                        } else console.log(p + " is not a valid URL!")
                    }
                    38 === t.event.keyCode && (l = -1, g.showSearchEntries()), 40 === t.event.keyCode && (l = 1, g.showSearchEntries());
                    var m = s + l;
                    m !== s && (m < 0 && s <= 0 && i[0].setAttribute("class", "dbEntrySelected"), m >= r && i[s].setAttribute("class", "dbEntrySelected"), m >= 0 && m < r && (i[m].setAttribute("class", "dbEntrySelected"), s >= 0 && i[s].setAttribute("class", "dbEntry")))
                }

                function l() {
                    var e, t;
                    f = d.node().value;
                    var n, o, i = [],
                        a = [],
                        r = f.toLowerCase();
                    for (n = 0; n < v.length; n++) {
                        var l = v[n];
                        void 0 !== l && (o = v[n].toLowerCase(), o.indexOf(r) > -1 && (i.push(v[n]), a.push(n)))
                    }
                    for (e = S.node().children, t = e.length, n = 0; n < t; n++) e[0].remove();
                    var s = i;
                    t = i.length, t > y && (t = y);
                    var u = [],
                        p = [];
                    for (n = 0; n < t; n++) {
                        for (var h = 1e6, g = 1e6, m = -1, b = 0; b < s.length; b++) {
                            o = s[b].toLowerCase();
                            var x = o.indexOf(r),
                                w = o.length;
                            x > -1 && x <= h && w <= g && (m = b, h = x, g = w)
                        }
                        u.push(s[m]), p.push(a[m]), s[m] = ""
                    }
                    for (t = i.length, t > y && (t = y), n = 0; n < t; n++) {
                        var k = document.createElement("li");
                        k.setAttribute("elementID", p[n]), k.onclick = c(p[n]), k.setAttribute("class", "dbEntry");
                        var C = document.createTextNode(u[n]);
                        k.appendChild(C), S.node().appendChild(k)
                    }
                }

                function s() {
                    if (b && n(), e.resetSearchHighlight(), 0 === v.length) return void console.log("dictionary is empty");
                    var t, o = S.node().children,
                        i = o.length;
                    if (f = d.node().value, w.classed("highlighted", !1), w.node().title = "Nothing to locate, enter search term.", 0 !== f.length) {
                        var a, r = [],
                            l = [],
                            s = f.toLowerCase();
                        for (t = 0; t < v.length; t++) {
                            var u = v[t];
                            void 0 !== u && (a = v[t].toLowerCase(), a.indexOf(s) > -1 && (r.push(v[t]), l.push(t)))
                        }
                        for (o = S.node().children, i = o.length, t = 0; t < i; t++) o[0].remove();
                        var p = r;
                        i = r.length, i > y && (i = y);
                        var h = [],
                            m = [];
                        for (t = 0; t < i; t++) {
                            for (var x = 1e8, k = 1e8, C = -1, L = 0; L < p.length; L++) {
                                a = p[L].toLowerCase();
                                var M = a.indexOf(s),
                                    O = a.length;
                                M > -1 && M <= x && O <= k && (C = L, x = M, k = O)
                            }
                            h.push(p[C]), m.push(l[C]), p[C] = ""
                        }
                        for (t = 0; t < i; t++) {
                            var A;
                            A = document.createElement("li"), A.setAttribute("elementID", m[t]), A.setAttribute("class", "dbEntry"), A.onclick = c(m[t]);
                            var E = document.createTextNode(h[t]);
                            A.appendChild(E), S.node().appendChild(A)
                        }
                        g.showSearchEntries()
                    } else
                        for (t = 0; t < i; t++) o[0].remove()
                }

                function c(t) {
                    return function() {
                        var n = t,
                            o = p[n],
                            i = m[n];
                        d.node().value = i, e.resetSearchHighlight(), e.highLightNodes(o), w.node().title = "Locate search term", i !== f && l(), g.hideSearchEntries()
                    }
                }
                var d, u, p, h, f, g = {},
                    v = [],
                    m = [],
                    y = 6,
                    b = !0,
                    x = !1,
                    w = t.select("#locateSearchResult"),
                    S = (t.select("#c_search"), t.select("#m_search"));
                return String.prototype.beginsWith = function(e) {
                    return 0 === this.indexOf(e)
                }, g.requestDictionaryUpdate = function() {
                    b = !0;
                    for (var e = S.node().children, t = e.length, n = 0; n < t; n++) e[0].remove();
                    d.node().value = ""
                }, g.setup = function() {
                    v = [], d = t.select("#search-input-text"), d.on("input", s), d.on("keydown", r), d.on("click", i), d.on("mouseover", o), w.on("click", function() {
                        e.locateSearchResult()
                    }), w.on("mouseover", function() {
                        g.hideSearchEntries()
                    })
                }, g.hideSearchEntries = function() {
                    S.style("display", "none"), x = !1
                }, g.showSearchEntries = function() {
                    S.style("display", "block"), x = !0
                }, g.getSearchString = function() {
                    return d.node().value
                }, g.clearText = function() {
                    d.node().value = "", w.classed("highlighted", !1), w.node().title = "Nothing to locate, enter search term.";
                    for (var e = S.node().children, t = e.length, n = 0; n < t; n++) e[0].remove()
                }, g
            }
        }).call(t, n(6))
    },
    329: function(e, t, n) {
        (function(t) {
            e.exports = function(e) {
                function n() {
                    cancelAnimationFrame(m), cancelAnimationFrame(y)
                }

                function o() {
                    return h += 5, x.scrollLeft = h, b.updateScrollButtonVisibility(), h >= f ? void n() : void(y = requestAnimationFrame(o))
                }

                function i() {
                    return h -= 5, x.scrollLeft = h, b.updateScrollButtonVisibility(), h <= 0 ? void n() : void(y = requestAnimationFrame(i))
                }

                function a() {
                    L = [], M = [];
                    var e, a = [],
                        d = [],
                        u = x.children,
                        p = u.length;
                    for (e = 0; e < p; e++) a.push(u[e].id.slice(2));
                    var f = w.children;
                    for (p = f.length, e = 0; e < p; e++) d.push(f[e].id.slice(2));
                    for (p = u.length, e = 0; e < p; e++) L[e] = "c_" + a[e], d.indexOf(a[e]) > -1 ? M[e] = "m_" + a[e] : M[e] = void 0, t.select("#" + L[e]).on("mouseover", r), t.select("#" + L[e]).on("mouseout", l), t.select("#" + L[e]).on("click", s), t.select("#" + L[e]).on("touchstart", c);
                    t.select("#menuElementContainer").on("wheel", function() {
                        var e, n = t.event;
                        n.deltaY < 0 && (e = 20), n.deltaY > 0 && (e = -20), x.scrollLeft += e, b.hideAllMenus(), b.updateScrollButtonVisibility()
                    }), t.select("#scrollRightButton").on("mousedown", function() {
                        h = x.scrollLeft, b.hideAllMenus(), y = requestAnimationFrame(o)
                    }).on("touchstart", function() {
                        h = x.scrollLeft, b.hideAllMenus(), y = requestAnimationFrame(o)
                    }).on("mouseup", n).on("touchend", n).on("touchcancel", n), t.select("#scrollLeftButton").on("mousedown", function() {
                        h = x.scrollLeft, b.hideAllMenus(), m = requestAnimationFrame(i)
                    }).on("touchstart", function() {
                        h = x.scrollLeft, b.hideAllMenus(), m = requestAnimationFrame(i)
                    }).on("mouseup", n).on("touchend", n).on("touchcancel", n), t.select("#menuElementContainer").on("scroll", function() {
                        b.updateScrollButtonVisibility(), b.hideAllMenus()
                    })
                }

                function r() {
                    b.hideAllMenus(), C || u(this.id)
                }

                function l() {
                    d(this.id)
                }

                function s() {
                    var e = M[L.indexOf(this.id)];
                    if (e) {
                        var n = t.select("#" + e);
                        n && ("block" === n.style("display") ? n.style("display", "none") : u(this.id))
                    }
                }

                function c() {
                    C = !0
                }

                function d(e) {
                    v = t.select("#" + e), "c_search" !== e && (t.select("#" + e).select("path").style("stroke-width", "0"), t.select("#" + e).select("path").style("fill", "#fff"))
                }

                function u(n) {
                    v = t.select("#" + n).node();
                    var o = M[L.indexOf(n)];
                    o && ("c_search" !== n && (t.select("#" + n).select("path").style("stroke-width", "0"), t.select("#" + n).select("path").style("fill", "#bdc3c7")), g = t.select("#" + o), g.style("display", "block"), "m_export" === o && e.options().exportMenu().exportAsUrl(), p())
                }

                function p() {
                    if (v) {
                        var e = v.offsetLeft,
                            t = x.scrollLeft,
                            n = e - t,
                            o = Math.max(0, n),
                            i = x.getBoundingClientRect().width,
                            a = g.node().getBoundingClientRect().width;
                        o + a > i && (o = i - a), o = Math.max(0, o), g.style("left", o + "px")
                    }
                }
                var h, f, g, v, m, y, b = {},
                    x = t.select("#menuElementContainer").node(),
                    w = t.select("#menuContainer").node(),
                    S = t.select("#scrollLeftButton"),
                    k = t.select("#scrollRightButton"),
                    C = !1,
                    L = [],
                    M = [];
                return b.hideAllMenus = function() {
                    t.selectAll(".toolTipMenu").style("display", "none")
                }, b.updateScrollButtonVisibility = function() {
                    f = x.scrollWidth - x.clientWidth - 2, 0 === x.scrollLeft ? S.classed("hidden", !0) : S.classed("hidden", !1), x.scrollLeft > f ? k.classed("hidden", !0) : k.classed("hidden", !1)
                }, b.setup = function() {
                    a(), t.select("#graph").on("mouseover", function() {
                        b.hideAllMenus()
                    }), t.select("#generalDetails").on("mouseover", function() {
                        b.hideAllMenus()
                    })
                }, b
            }
        }).call(t, n(6))
    },
    330: function(e, t, n) {
        (function(t) {
            e.exports = function(e) {
                function n() {
                    cancelAnimationFrame(r), cancelAnimationFrame(l)
                }

                function o() {
                    s *= .98, s < u && (s = u), e.setSliderZoom(s), r = requestAnimationFrame(o)
                }

                function i() {
                    s *= 1.02, s > p && (s = p), e.setSliderZoom(s), l = requestAnimationFrame(i)
                }
                var a, r, l, s, c, d = {},
                    u = e.options().minMagnification(),
                    p = e.options().maxMagnification(),
                    h = !0,
                    f = e.options().width(),
                    g = e.options().height();
                return a = Math.min(f, g) / 1e3, d.setup = function() {
                    c = t.select("#zoomSliderParagraph").append("input").datum({}).attr("id", "zoomSliderElement").attr("type", "range").attr("value", a).attr("min", u).attr("max", p).attr("step", (p - u) / 40).attr("title", "zoom factor").on("input", function() {
                        d.zooming()
                    }), t.select("#zoomOutButton").on("mousedown", function() {
                        e.options().navigationMenu().hideAllMenus(), s = e.scaleFactor(), r = requestAnimationFrame(o)
                    }).on("touchstart", function() {
                        e.options().navigationMenu().hideAllMenus(), s = e.scaleFactor(), r = requestAnimationFrame(o)
                    }).on("mouseup", n).on("touchend", n).on("touchcancel", n).attr("title", "zoom out"), t.select("#zoomInButton").on("mousedown", function() {
                        e.options().navigationMenu().hideAllMenus(), s = e.scaleFactor(), l = requestAnimationFrame(i)
                    }).on("touchstart", function() {
                        e.options().navigationMenu().hideAllMenus(), s = e.scaleFactor(), l = requestAnimationFrame(i)
                    }).on("mouseup", n).on("touchend", n).on("touchcancel", n).attr("title", "zoom in"), t.select("#centerGraphButton").on("click", function() {
                        e.options().navigationMenu().hideAllMenus(), e.forceRelocationEvent()
                    }).attr("title", "center graph")
                }, d.showSlider = function(e) {
                    return arguments.length ? (t.select("#zoomSlider").classed("hidden", !e), void(h = e)) : h
                }, d.zooming = function() {
                    e.options().navigationMenu().hideAllMenus();
                    var t = c.property("value");
                    c.attr("value", t), e.setSliderZoom(t)
                }, d.updateZoomSliderValue = function(e) {
                    c && (c.attr("value", e), c.property("value", e))
                }, d
            }
        }).call(t, n(6))
    },
    331: function(e, t, n) {
        (function(t) {
            e.exports = function(e) {
                function n() {
                    function e(e) {
                        e.classed("hidden", !0)
                    }

                    function n(e) {
                        e.classed("hidden", !1)
                    }
                    var o = t.selectAll(".accordion-trigger");
                    e(t.selectAll(".accordion-trigger:not(.accordion-trigger-active) + div")), o.on("click", function() {
                        var o = t.select(this),
                            i = t.selectAll(".accordion-trigger-active");
                        o.classed("accordion-trigger-active") ? (e(t.select(o.node().nextElementSibling)), o.classed("accordion-trigger-active", !1)) : (e(t.selectAll(".accordion-trigger-active + div")), i.classed("accordion-trigger-active", !1), n(t.select(o.node().nextElementSibling)), o.classed("accordion-trigger-active", !0))
                    })
                }

                function o(n) {
                    n = n || [], n.sort(function(e, t) {
                        return e === webvowl.util.constants().LANG_IRIBASED ? -1 : t === webvowl.util.constants().LANG_IRIBASED ? 1 : e === webvowl.util.constants().LANG_UNDEFINED ? -1 : t === webvowl.util.constants().LANG_UNDEFINED ? 1 : e.localeCompare(t)
                    });
                    var o = t.select("#language").on("change", function() {
                        e.language(t.event.target.value), a(), k.updateSelectionInformation(S)
                    });
                    o.selectAll("option").remove(), o.selectAll("option").data(n).enter().append("option").attr("value", function(e) {
                        return e
                    }).text(function(e) {
                        return e
                    }), i(o, n, "en") || i(o, n, webvowl.util.constants().LANG_UNDEFINED) || i(o, n, webvowl.util.constants().LANG_IRIBASED)
                }

                function i(t, n, o) {
                    var i = n.indexOf(o);
                    return i >= 0 && (t.property("selectedIndex", i), e.language(o), !0)
                }

                function a() {
                    var n = C.textInLanguage(w.title, e.language());
                    t.select("#title").text(n || "No title available"), t.select("#about").attr("href", w.iri).attr("target", "_blank").text(w.iri), t.select("#version").text(w.version || "--");
                    var o = w.author;
                    "string" == typeof o ? t.select("#authors").text(o) : o instanceof Array ? t.select("#authors").text(o.join(", ")) : t.select("#authors").text("--");
                    var i = C.textInLanguage(w.description, e.language());
                    t.select("#description").text(i || "No description available.")
                }

                function r(e, n) {
                    e = e || {}, t.select("#classCount").text(e.classCount || n.classCount()), t.select("#objectPropertyCount").text(e.objectPropertyCount || n.objectPropertyCount()), t.select("#datatypePropertyCount").text(e.datatypePropertyCount || n.datatypePropertyCount()), t.select("#individualCount").text(e.totalIndividualCount || n.totalIndividualCount()), t.select("#nodeCount").text(n.nodeCount()), t.select("#edgeCount").text(n.edgeCount())
                }

                function l(e) {
                    var n = t.select("#ontology-metadata");
                    n.selectAll("*").remove(), s(n, e), n.selectAll(".annotation").size() <= 0 && n.append("p").text("No annotations available.")
                }

                function s(e, n) {
                    n = n || {};
                    var o = [];
                    for (var i in n) n.hasOwnProperty(i) && o.push(n[i][0]);
                    e.selectAll(".annotation").remove(), e.selectAll(".annotation").data(o).enter().append("p").classed("annotation", !0).classed("statisticDetails", !0).text(function(e) {
                        return e.identifier + ":"
                    }).append("span").each(function(e) {
                        f(t.select(this), e.value, "iri" === e.type ? e.value : void 0)
                    })
                }

                function c() {
                    d(!1, !1, !0)
                }

                function d(e, n, o) {
                    t.select("#classSelectionInformation").classed("hidden", !e), t.select("#propertySelectionInformation").classed("hidden", !n), t.select("#noSelectionInformation").classed("hidden", !o)
                }

                function u(e) {
                    p(), h(t.select("#propname"), e.labelForCurrentLanguage(), e.iri()), t.select("#typeProp").text(e.type()), void 0 !== e.inverse() ? (t.select("#inverse").classed("hidden", !1), h(t.select("#inverse span"), e.inverse().labelForCurrentLanguage(), e.inverse().iri())) : t.select("#inverse").classed("hidden", !0);
                    var n = t.select("#propEquivUri");
                    b(n, e.equivalents()), b(t.select("#subproperties"), e.subproperties()), b(t.select("#superproperties"), e.superproperties()), void 0 !== e.minCardinality() ? (t.select("#infoCardinality").classed("hidden", !0), t.select("#minCardinality").classed("hidden", !1), t.select("#minCardinality span").text(e.minCardinality()), t.select("#maxCardinality").classed("hidden", !1), void 0 !== e.maxCardinality() ? t.select("#maxCardinality span").text(e.maxCardinality()) : t.select("#maxCardinality span").text("*")) : void 0 !== e.cardinality() ? (t.select("#minCardinality").classed("hidden", !0), t.select("#maxCardinality").classed("hidden", !0), t.select("#infoCardinality").classed("hidden", !1), t.select("#infoCardinality span").text(e.cardinality())) : (t.select("#infoCardinality").classed("hidden", !0), t.select("#minCardinality").classed("hidden", !0), t.select("#maxCardinality").classed("hidden", !0)), h(t.select("#domain"), e.domain().labelForCurrentLanguage(), e.domain().iri()), h(t.select("#range"), e.range().labelForCurrentLanguage(), e.range().iri()), g(e.attributes(), t.select("#propAttributes")), x(t.select("#propDescription"), e.descriptionForCurrentLanguage()), x(t.select("#propComment"), e.commentForCurrentLanguage()), s(t.select("#propertySelectionInformation"), e.annotations())
                }

                function p() {
                    d(!1, !0, !1)
                }

                function h(e, n, o) {
                    var i = t.select(e.node().parentNode);
                    n ? (e.selectAll("*").remove(), f(e, n, o), i.classed("hidden", !1)) : i.classed("hidden", !0)
                }

                function f(e, t, n) {
                    var o;
                    n = fix_url(n);
                    o = n ? e.append("a").attr("href", n).attr("title", n).attr("target", "_blank") : e.append("span"), o.text(t)
                }

                function print_individual_with_link(e, t, n) {
                    var o;
                    n = fix_url(n);
                    o = n ? e.append("li").append("a").attr("href", n).attr("title", n).attr("target", "_blank") : e.append("span"), o.text(t)
                } 

                function print_individual_without_link(e, t, n) {
                    var o;
                    n = fix_url(n);
                    o = n ? e.append("li") : e.append("span"), o.text(t)
                }                              

               function fix_url(n) {
                    if(typeof n !== "undefined" && n.indexOf("www.") == -1) {
                            n = n.replace("http://", "http://www.");
                    }
                    if(typeof n !== "undefined" && n.indexOf("http://www.kb.") >= 0) {
                            n = n.replace("http://www.kb.", "http://www.");
                    }
                    return n;
                }

                function g(e, n) {
                    var o = t.select(n.node().parentNode);
                    e && e.length > 0 && (v("object", e), v("datatype", e), v("rdf", e)), e && e.length > 0 ? (n.text(e.join(", ")), o.classed("hidden", !1)) : o.classed("hidden", !0)
                }

                function v(e, t) {
                    var n = t.indexOf(e);
                    n > -1 && t.splice(n, 1)
                }

                function m(e) {
                    y(), h(t.select("#name"), e.labelForCurrentLanguage(), e.iri());
                    var n = t.select("#classEquivUri");
                    t.select("#individuals").selectAll("*").remove();
                    b(n, e.equivalents()), t.select("#typeNode").text(e.type()), b(t.select("#individuals"), e.individuals());
                    var o = t.select("#disjointNodes"),
                        i = t.select(o.node().parentNode);
                    void 0 !== e.disjointWith() ? (o.selectAll("*").remove(), e.disjointWith().forEach(function(e, t) {
                        t > 0 && o.append("span").text(", "), f(o, e.labelForCurrentLanguage(), e.iri())
                    }), i.classed("hidden", !1)) : i.classed("hidden", !0), g(e.attributes(), t.select("#classAttributes")), x(t.select("#nodeDescription"), e.descriptionForCurrentLanguage()), x(t.select("#nodeComment"), e.commentForCurrentLanguage()), s(t.select("#classSelectionInformation"), e.annotations())
                }

                function y() {
                    d(!0, !1, !1)
                }

                function b(e, n) {

                	// Check wheter individuals are loaded into the list
                    id_name = e.attr("id");
                    if(id_name=="individuals") {
                        var o = t.select(e.node().parentNode);
                        e = e.append("ul")

                        // Get the node name. 
                        // If it is "Scenario" we link the individuals to the KB
                        // If the name is different, we simply list the indi. without link
	                    var node_name = d3.select("#name").text();
	                    console.log("Node name: " + node_name);

	                    if(node_name == "Scenario" || node_name == "scenario") {
	                        // iterate (over individuals) - print with hyperlinks
	                        n && n.length ? (e.selectAll("*").remove(), n.forEach(function(t, n) {
	                            n > 0 && e, print_individual_with_link(e, t.labelForCurrentLanguage(), t.iri())
	                        }), o.classed("hidden", !1)) : o.classed("hidden", !0)
						} else {
							// iterate (over individuals) - print without hyperlinks
	                        n && n.length ? (e.selectAll("*").remove(), n.forEach(function(t, n) {
	                            n > 0 && e, print_individual_without_link(e, t.labelForCurrentLanguage(), t.iri())
	                        }), o.classed("hidden", !1)) : o.classed("hidden", !0)							
						}


                    } else {
                        var o = t.select(e.node().parentNode);
                        n && n.length ? (e.selectAll("*").remove(), n.forEach(function(t, n) {
                            n > 0 && e.append("span").text(", "), f(e, t.labelForCurrentLanguage(), t.iri())
                        }), o.classed("hidden", !1)) : o.classed("hidden", !0)
                    }
                }

                function x(e, n) {
                    var o = t.select(e.node().parentNode),
                        i = !!n;
                    n && e.text(n), o.classed("hidden", !i)
                }
                var w, S, k = {},
                    C = webvowl.util.languageTools(),
                    L = webvowl.util.elementTools(),
                    M = 1,
                    O = t.select("#detailsArea"),
                    A = t.select("#canvasArea"),
                    E = t.select("#swipeBarContainer"),
                    _ = t.select("#sidebarExpandButton");
                return k.clearOntologyInformation = function() {
                    t.select("#title").text("No title available"), t.select("#about").attr("href", "#").attr("target", "_blank").text("not given"), t.select("#version").text("--"), t.select("#authors").text("--"), t.select("#description").text("No description available.");
                    var e = t.select("#ontology-metadata");
                    e.selectAll("*").remove(), t.select("#classCount").text("0"), t.select("#objectPropertyCount").text("0"), t.select("#datatypePropertyCount").text("0"), t.select("#individualCount").text("0"), t.select("#nodeCount").text("0"), t.select("#edgeCount").text("0");
                    var n = t.select("#selection-details-trigger").classed("accordion-trigger-active");
                    n && t.select("#selection-details-trigger").node().click(), c()
                }, k.updateOntologyInformation = function(e, t) {
                    e = e || {}, w = e.header || {}, a(), r(void 0, t), l(w.other), k.updateSelectionInformation(void 0), o(w.languages)
                }, k.updateSelectionInformation = function(e) {
                    if (S = e, !t.event || !t.event.defaultPrevented) {
                        var n = t.select("#selection-details-trigger").classed("accordion-trigger-active");
                        if (e && !n) t.select("#selection-details-trigger").node().click();
                        else if (!e && n) return void c();
                        L.isProperty(e) ? u(e) : L.isNode(e) && m(e)
                    }
                }, k.showSidebar = function(t, n) {
                    1 === t && (M = !0, _.node().innerHTML = ">", O.classed("hidden", !0), n === !0 ? (O.classed("hidden", !M), A.style("width", "78%"), A.style("-webkit-animation-name", "none"), E.style("width", "78%"), E.style("-webkit-animation-name", "none")) : (A.style("width", "78%"), A.style("-webkit-animation-name", "sbCollapseAnimation"), A.style("-webkit-animation-duration", "0.5s"), E.style("width", "78%"), E.style("-webkit-animation-name", "sbCollapseAnimation"), E.style("-webkit-animation-duration", "0.5s")), e.options().width(window.innerWidth - .22 * window.innerWidth), e.options().navigationMenu().updateScrollButtonVisibility()), 0 === t && (M = !1, O.classed("hidden", !0), _.node().innerHTML = "<", n === !0 ? (A.style("width", "100%"), A.style("-webkit-animation-name", "none"), E.style("width", "100%"), E.style("-webkit-animation-name", "none")) : (A.style("width", "100%"), A.style("-webkit-animation-name", "sbExpandAnimation"), A.style("-webkit-animation-duration", "0.5s"), E.style("width", "100%"), E.style("-webkit-animation-name", "sbExpandAnimation"), E.style("-webkit-animation-duration", "0.5s")), e.options().width(window.innerWidth), e.updateCanvasContainerSize(), e.options().navigationMenu().updateScrollButtonVisibility())
                }, k.isSidebarVisible = function() {
                    return M
                }, k.updateSideBarVis = function(e) {
                    var t = k.getSidebarVisibility();
                    k.showSidebar(parseInt(t), e)
                }, k.getSidebarVisibility = function() {
                    var e = O.classed("hidden");
                    return e === !1 ? String(1) : e === !0 ? String(0) : void 0
                }, k.initSideBarAnimation = function() {
                    A.node().addEventListener("animationend", function() {
                        O.classed("hidden", !M), e.updateCanvasContainerSize(), e.options().navigationMenu().updateScrollButtonVisibility()
                    })
                }, k.setup = function() {
                    n(), k.initSideBarAnimation(), _.on("click", function() {
                        e.options().navigationMenu().hideAllMenus();
                        var t = parseInt(k.getSidebarVisibility());
                        1 === t ? k.showSidebar(0) : k.showSidebar(1)
                    })
                }, k
            }
        }).call(t, n(6))
    },
    332: function(e, t, n) {
        (function(t) {
            e.exports = function(e) {
                function n(n, o, i, a) {
                    var r, l;
                    r = t.select(n).append("div").classed("distanceSliderContainer", !0);
                    var s = r.append("input").attr("id", o + "Slider").attr("type", "range").attr("min", 20).attr("max", 600).attr("value", a()).attr("step", 10);
                    r.append("label").classed("description", !0).attr("for", o + "Slider").text(i), l = r.append("label").classed("value", !0).attr("for", o + "Slider").text(a()), s.on("input", function() {
                        var t = s.property("value");
                        a(t), l.text(t), e.options().dynamicLabelWidth() === !0 && e.animateDynamicLabelWidth()
                    }), s.on("wheel", function() {
                        var e, n = t.event;
                        n.deltaY < 0 && (e = 10), n.deltaY > 0 && (e = -10);
                        var o = parseInt(s.property("value")),
                            i = o + e;
                        i !== o && (s.property("value", i), a(i), s.on("input")()), t.event.preventDefault()
                    })
                }

                function o(n, o, i, r, l) {
                    var s = t.select(i).append("div").classed("checkboxContainer", !0),
                        c = s.append("input").classed("moduleCheckbox", !0).attr("id", n + "ConfigCheckbox").attr("type", "checkbox").property("checked", r());
                    c.on("click", function(t) {
                        var n = c.property("checked");
                        r(n), t !== !0 && (1 === l && e.lazyRefresh(), 2 === l && e.update())
                    }), a.push(c), s.append("label").attr("for", n + "ConfigCheckbox").text(o)
                }
                var i = {},
                    a = [];
                return i.setup = function() {
                    var i = t.select("#m_modes");
                    i.on("mouseover", function() {
                        var t = e.options().searchMenu();
                        t.hideSearchEntries()
                    }), o("showZoomSlider", "Zoom controls", "#zoomSliderOption", e.options().zoomSlider().showSlider, 0), n("#maxLabelWidthSliderOption", "maxLabelWidth", "Max label width", e.options().maxLabelWidth)
                }, i.setCheckBoxValue = function(e, t) {
                    for (var n = 0; n < a.length; n++) {
                        var o = a[n].attr("id");
                        if (o === e) {
                            a[n].property("checked", t);
                            break
                        }
                    }
                }, i.getCheckBoxValue = function(e) {
                    for (var t = 0; t < a.length; t++) {
                        var n = a[t].attr("id");
                        if (n === e) return a[t].property("checked")
                    }
                }, i.updateSettings = function() {
                    var e = !0;
                    a.forEach(function(t) {
                        t.on("click")(e)
                    })
                }, i
            }
        }).call(t, n(6))
    },
    333: function(e, t, n) {
        (function(t) {
            e.exports = function(e) {
                function n(e, n) {
                    t.xhr("serverTimeStamp", "application/text", function(t, i) {
                        t ? (h.append_bulletPoint("Could not establish connection to OWL2VOWL service"), o(e, n)) : (p = i.responseText, h.setConversionID(p), n.push(p), e(n))
                    })
                }

                function o(e, t) {
                    h.append_message_toLastBulletPoint("<br>Trying to convert with other communication protocol."), e(t)
                }

                function i(e) {
                    h.append_message_toLastBulletPoint("<br>Trying to convert with other communication protocol.");
                    var t = e[0],
                        n = e[1],
                        o = new FormData;
                    o.append("ontology", t);
                    var i = new XMLHttpRequest;
                    i.open("POST", "convert", !0);
                    var a = "";
                    i.onload = function() {
                        200 === i.status && (a = i.responseText, h.setCachedOntology(n, a), f = n, C = !0, h.append_message_toLastBulletPoint("<br>Success, <span style='color:yellow'>but you are using a deprecated OWL2VOWL service!<span>"), s(a))
                    }, i.onreadystatechange = function() {
                        4 === i.readyState && 0 === i.status && (h.append_message_toLastBulletPoint("<br>Old protocol also failed to establish connection to OWL2VOWL service!"), A.setErrorMode(), h.append_bulletPoint("Failed to load ontology"), h.append_message_toLastBulletPoint("<br><span style='color:red'>Could not connect to OWL2VOWL service </span>"), A.showErrorDetailsMessage())
                    }, i.send(o)
                }

                function a(e, n) {
                    t.xhr("serverTimeStamp", "application/text", function(t, o) {
                        A.setBusyMode(), t ? (h.append_bulletPoint("Could not establish connection to OWL2VOWL service"), A.setErrorMode(), h.append_bulletPoint("Failed to load ontology"), h.append_message_toLastBulletPoint("<br><span style='color:red'>Could not connect to OWL2VOWL service </span>"), A.showErrorDetailsMessage()) : (p = o.responseText, h.setConversionID(p), n[0] = n[0] + "&sessionId=" + p, n.push(p), e(n))
                    })
                }

                function r(e, n) {
                    t.xhr("serverTimeStamp", "application/text", function(t, o) {
                        t ? (h.append_bulletPoint("Could not establish connection to OWL2VOWL service"), i(n)) : (p = o.responseText, h.setConversionID(p), console.log("Request Session ID:" + p), e(n[0], n[1], p))
                    })
                }

                function l(n) {
                    k = !1;
                    var o = "";
                    if (h.cachedOntology(n)) h.append_bulletPoint("Loading already cached ontology: " + n), o = h.cachedOntology(n), k = !0, s(o);
                    else {
                        var i = "./data/" + n + ".json";
                        t.xhr(i, "application/json", function(t, i) {
                            var a = !t;
                            a ? (o = i.responseText, s(o)) : (h.append_bulletPoint("Failed to load: " + n), h.append_message_toLastBulletPoint("<span style='color: red'>ERROR STATUS:</span> " + t.status), e.handleOnLoadingError(), A.setErrorMode());
                            h.append_message_toLastBulletPoint("<br><br><span>There was no ontology found on this path.<br> Please try <a href='http://www.esit4sip.eu/webvowl/#iri=http://www.esit4sip.eu/fuseki/esit4sip/get'>http://www.esit4sip.eu/webvowl/#iri=http://www.esit4sip.eu/fuseki/esit4sip/get</a>")
                        })
                    }
                }

                function s(e) {
                    h.append_bulletPoint("Reading ontology graph ... ");
                    var t = h.getLoadingFunction();
                    t(e, f, "noAlternativeNameYet")
                }

                function c(e) {
                    var t = (e.match(/#/g) || []).length,
                        n = [];
                    if (t > 0)
                        for (var o = e.split("#"), i = 1; i < o.length; i++) 0 === o[i].length ? n[n.length - 1] = n[n.length - 1] + "#" : n.push(o[i]);
                    return n
                }

                function d(t) {
                    function n() {
                        e.options().setOptionsFromURL(e.options().defaultConfig())
                    }

                    function o(t) {
                        for (var n = e.options().defaultConfig(), o = 0; o < t.length; o++) {
                            var i = t[o].split("=");
                            n[i[0]] = i[1]
                        }
                        e.options().setOptionsFromURL(n)
                    }

                    function i(e) {
                        if (e[0].indexOf(r) >= 0) {
                            var t = e[0].length,
                                i = e[0].substr(5, t - 6),
                                a = i.split(";");
                            o(a)
                        } else f = e[0], n()
                    }

                    function a(e) {
                        if (e[0].indexOf(r) >= 0) {
                            var t = e[0].length,
                                i = e[0].substr(5, t - 6),
                                a = i.split(";");
                            o(a)
                        } else n();
                        f = e[1]
                    }
                    var r = "opts=";
                    switch (t.length) {
                        case 0:
                            n();
                            break;
                        case 1:
                            i(t);
                            break;
                        case 2:
                            a(t);
                            break;
                        default:
                            console.log("To many input parameters , loading default config"), n(), f = "ERROR_TO_MANY_INPUT_PARAMETERS"
                    }
                }

                function u(e) {
                    var t = "iri=",
                        n = "url=",
                        o = "file=",
                        i = -1;
                    return i = e.substr(0, o.length) === o ? v : e.substr(0, n.length) === n ? m : e.substr(0, t.length) === t ? y : g
                }
                var p, h, f, g = 0,
                    v = 1,
                    m = 2,
                    y = 3,
                    b = 0,
                    x = 1,
                    w = 2,
                    S = 1,
                    k = !1,
                    C = !1,
                    L = !1,
                    M = !0,
                    O = default_ontology,
                    A = {},
                    E = t.select("#loading-info"),
                    _ = t.select("#loadingInfo-container"),
                    F = t.select("#show-loadingInfo-button"),
                    B = t.select("#loadingIndicator_closeButton");
                return A.checkForScreenSize = function() {
                    var n = e.options().width(),
                        o = e.options().height();
                    n < 270 ? t.select("#loading-info").classed("hidden", !0) : M === !0 ? t.select("#loading-info").classed("hidden", !1) : t.select("#loading-info").classed("hidden", !0), o < 150 ? t.select("#loadingInfo_msgBox").classed("hidden", !0) : t.select("#loadingInfo_msgBox").classed("hidden", !1), o < 80 ? (t.select("#progressBarContext").classed("hidden", !0), t.select("#layoutLoadingProgressBarContainer").style("height", "20px")) : (t.select("#progressBarContext").classed("hidden", !1), t.select("#layoutLoadingProgressBarContainer").style("height", "50px"))
                }, A.getProgressBarMode = function() {
                    return S
                }, A.successfullyLoadedOntology = function() {
                    return k
                }, A.missingImportsWarning = function() {
                    return C
                }, A.setOntologyMenu = function(e) {
                    h = e
                }, A.showErrorDetailsMessage = function() {
                    A.showLoadingIndicator(), A.expandDetails(), t.select("#loadingIndicator_closeButton").classed("hidden", !0), A.scrollDownDetails()
                }, A.showWarningDetailsMessage = function() {
                    t.select("#currentLoadingStep").style("color", "#ff0"), A.showLoadingIndicator(), A.expandDetails(), t.select("#loadingIndicator_closeButton").classed("hidden", !1), A.scrollDownDetails()
                }, A.scrollDownDetails = function() {
                    var e = t.select("#loadingInfo-container").node();
                    e.scrollTop = e.scrollHeight
                }, A.hideLoadingIndicator = function() {
                    t.select("#loading-info").classed("hidden", !0), M = !1
                }, A.showLoadingIndicator = function() {
                    t.select("#loading-info").classed("hidden", !1), M = !0
                }, A.setup = function() {
                    _.classed("hidden", !L), F.on("click", function() {
                        L = !L, _.classed("hidden", !L), F.classed("accordion-trigger-active", L)
                    }), B.on("click", function() {
                        E.classed("hidden", !0)
                    }), A.setBusyMode()
                }, A.updateSize = function() {
                    L = !_.classed("hidden"), _.classed("hidden", !L), F.classed("accordion-trigger-active", L)
                }, A.getDetailsState = function() {
                    return L
                }, A.expandDetails = function() {
                    L = !0, _.classed("hidden", !L), F.classed("accordion-trigger-active", L)
                }, A.collapseDetails = function() {
                    L = !1, _.classed("hidden", !L), F.classed("accordion-trigger-active", L)
                }, A.setBusyMode = function() {
                    t.select("#currentLoadingStep").style("color", "#fff"), t.select("#progressBarValue").node().innherHTML = "", t.select("#progressBarValue").style("width", "20%"), t.select("#progressBarValue").classed("busyProgressBar", !0), S = x
                }, A.setSuccessful = function() {
                    t.select("#currentLoadingStep").style("color", "#0f0")
                }, A.setErrorMode = function() {
                    t.select("#currentLoadingStep").style("color", "#f00"), t.select("#progressBarValue").style("width", "0%"), t.select("#progressBarValue").classed("busyProgressBar", !1), t.select("#progressBarValue").node().innherHTML = "", S = b
                }, A.setPercentMode = function() {
                    t.select("#currentLoadingStep").style("color", "#fff"), t.select("#progressBarValue").classed("busyProgressBar", !1), t.select("#progressBarValue").node().innherHTML = "0%", t.select("#progressBarValue").style("width", "0%"), S = w
                }, A.setPercentValue = function(e) {
                    t.select("#progressBarValue").node().innherHTML = e
                }, A.emptyGraphContentError = function() {
                    e.clearGraphData(), h.append_message_toLastBulletPoint("<span style='color:red;'>failed</span>"), h.append_message_toLastBulletPoint('<br><span style="color:red;">Error: Received empty graph</span>'), k = !1, e.handleOnLoadingError(), A.setErrorMode()
                }, A.isThreadCanceled = function() {}, A.parseUrlAndLoadOntology = function() {
                    p = -1e4, h.setConversionID(p), h.stopLoadingTimer(), e.clearGraphData(), A.setBusyMode(), A.showLoadingIndicator(),
                        A.collapseDetails(), C = !1, t.select("#loadingIndicator_closeButton").classed("hidden", !0), h.clearDetailInformation();
                    var n = String(location),
                        o = c(n);
                    f = O, d(o);
                    var i = u(f);
                    switch (t.select("#progressBarValue").node().innerHTML = " ", i) {
                        case 0:
                            A.from_presetOntology(f);
                            break;
                        case 1:
                            A.from_FileUpload(f);
                            break;
                        case 2:
                            A.from_JSON_URL(f);
                            break;
                        case 3:
                            A.from_IRI_URL(f);
                            break;
                        default:
                            console.log("Could not identify loading method , or not IMPLEMENTED YET")
                    }
                }, A.from_JSON_URL = function(e) {
                    var t = decodeURIComponent(e.slice("url=".length));
                    f = t;
                    var o = "";
                    h.cachedOntology(t) ? (h.append_bulletPoint("Loading already cached ontology: " + t), o = h.cachedOntology(t), k = !0, s(o)) : (h.append_message("Retrieving ontology from JSON URL " + t), n(h.callbackLoad_JSON_FromURL, ["read?json=" + t, t]))
                }, A.from_IRI_URL = function(e) {
                    var t = decodeURIComponent(e.slice("iri=".length));
                    f = t;
                    var n = "";
                    if (h.cachedOntology(t)) h.append_bulletPoint("Loading already cached ontology: " + t), n = h.cachedOntology(t), k = !0, s(n);
                    else {
                        var o = encodeURIComponent(t);
                        h.append_bulletPoint("Retrieving ontology from IRI: " + t), a(h.callbackLoad_Ontology_FromIRI, ["convert?iri=" + o, t])
                    }
                }, A.from_FileUpload = function(n) {
                    A.setBusyMode();
                    var o = decodeURIComponent(n.slice("file=".length));
                    f = o;
                    var i = "";
                    if (h.cachedOntology(o)) h.append_bulletPoint("Loading already cached ontology: " + o), i = h.cachedOntology(o), k = !0, s(i);
                    else {
                        h.append_bulletPoint("Retrieving ontology from file: " + o);
                        var a = t.select("#file-converter-input").property("files")[0];
                        if (!a || o && o !== a.name) return h.append_message_toLastBulletPoint('<br><span style="color:red;">No cached version of "' + o + '" was found.</span><br>Please reupload the file.'), A.setErrorMode(), t.select("#progressBarValue").classed("busyProgressBar", !1), void e.handleOnLoadingError();
                        if (o = a.name, o.match(/\.json$/)) {
                            h.setConversionID(-1e4);
                            var l = new FileReader;
                            l.readAsText(a), l.onload = function() {
                                i = l.result, f = o, s(i)
                            }
                        } else {
                            var c = [a, o];
                            r(h.callbackLoadFromOntology, c)
                        }
                    }
                }, A.loadFromOWL2VOWL = function(e, n) {
                    k = !1;
                    var o = t.select("#bulletPoint_container").node().innerHTML;
                    o.indexOf("(with warnings)") !== -1 && (C = !0), h.cachedOntology(e) ? (h.append_bulletPoint("Loading already cached ontology: " + n), s(e)) : s(e)
                }, A.from_presetOntology = function(e) {
                    h.append_bulletPoint("Retrieving ontology: " + e), l(e)
                }, A.notValidJsonFile = function() {
                    e.clearGraphData(), h.append_message_toLastBulletPoint("<span style='color:red;'>failed</span>"), h.append_message_toLastBulletPoint("<br><span style='color:red;'>Error: Received empty graph</span>"), k = !1, e.handleOnLoadingError()
                }, A.validJsonFile = function() {
                    h.append_message_toLastBulletPoint("done"), k = !0
                }, A
            }
        }).call(t, n(6))
    }
});