(function(){CodeMirror.switchSlackMode=function(f,g){var e={php:["php","application/x-httpd-php"],sql:["sql","text/x-sql"],mysql:["sql","text/x-mysql"],html:["htmlmixed","text/html"],javascript:["javascript","text/javascript"],markdown:["markdown","text/x-markdown"],c:["clike","text/x-csrc"],cpp:["clike","text/x-c++src"],csharp:["clike","text/x-csharp"],vb:["vb","text/x-vb"],vbscript:["vbscript","text/vbscript"],java:["clike","text/x-java"],css:["css","text/css"],perl:["perl","text/x-perl"],python:["python","text/x-python"],ruby:["ruby","text/x-ruby"],erlang:["erlang","text/x-erlang"],diff:["diff","text/x-diff"],xml:["xml","text/xml"],coffeescript:["coffeescript","text/x-coffeescript"],clojure:["clojure","text/x-clojure"],scheme:["scheme","text/x-scheme"],haskell:["haskell","text/x-haskell"],scala:["clike","text/x-scala"],shell:["shell","text/x-sh"],go:["go","text/x-go"],groovy:["groovy","text/x-groovy"],yaml:["yaml","text/x-yaml"],lua:["lua","text/x-lua"],matlab:["octave","text/x-octave"],r:["r","text/x-rsrc"],puppet:["puppet","text/x-puppet"],smalltalk:["smalltalk","text/x-stsrc"],latex:["stex","text/x-stex"]};
if(e[g]){f.setOption("mode",e[g][1]);
CodeMirror.autoLoadMode(f,e[g][0])
}else{f.setOption("mode",null)
}};
function c(e){switch(e){case"apl":return cdn_url+"/31541/js/libs_codemirror_apl_1419026209.js";
case"asterisk":return cdn_url+"/31541/js/libs_codemirror_asterisk_1419026149.js";
case"clike":return cdn_url+"/31541/js/libs_codemirror_clike_1419026207.js";
case"clojure":return cdn_url+"/31541/js/libs_codemirror_clojure_1419026240.js";
case"cobol":return cdn_url+"/31541/js/libs_codemirror_cobol_1419026247.js";
case"coffeescript":return cdn_url+"/31541/js/libs_codemirror_coffeescript_1419026142.js";
case"commonlisp":return cdn_url+"/31541/js/libs_codemirror_commonlisp_1419026154.js";
case"css":return cdn_url+"/31541/js/libs_codemirror_css_1419026135.js";
case"cypher":return cdn_url+"/31541/js/libs_codemirror_cypher_1419026228.js";
case"d":return cdn_url+"/31541/js/libs_codemirror_d_1419026215.js";
case"diff":return cdn_url+"/31541/js/libs_codemirror_diff_1419026243.js";
case"django":return cdn_url+"/31541/js/libs_codemirror_django_1419026168.js";
case"dockerfile":return cdn_url+"/31541/js/libs_codemirror_dockerfile_1419026286.js";
case"dtd":return cdn_url+"/31541/js/libs_codemirror_dtd_1419026262.js";
case"dylan":return cdn_url+"/31541/js/libs_codemirror_dylan_1419026278.js";
case"ecl":return cdn_url+"/31541/js/libs_codemirror_ecl_1419026245.js";
case"eiffel":return cdn_url+"/31541/js/libs_codemirror_eiffel_1419026266.js";
case"erlang":return cdn_url+"/31541/js/libs_codemirror_erlang_1419026272.js";
case"fortran":return cdn_url+"/31541/js/libs_codemirror_fortran_1419026232.js";
case"gas":return cdn_url+"/31541/js/libs_codemirror_gas_1419026211.js";
case"gfm":return cdn_url+"/31541/js/libs_codemirror_gfm_1419026101.js";
case"gherkin":return cdn_url+"/31541/js/libs_codemirror_gherkin_1419026191.js";
case"go":return cdn_url+"/31541/js/libs_codemirror_go_1419026160.js";
case"groovy":return cdn_url+"/31541/js/libs_codemirror_groovy_1419026184.js";
case"haml":return cdn_url+"/31541/js/libs_codemirror_haml_1419026203.js";
case"haskell":return cdn_url+"/31541/js/libs_codemirror_haskell_1419026108.js";
case"haxe":return cdn_url+"/31541/js/libs_codemirror_haxe_1419026257.js";
case"htmlembedded":return cdn_url+"/31541/js/libs_codemirror_htmlembedded_1419026253.js";
case"htmlmixed":return cdn_url+"/31541/js/libs_codemirror_htmlmixed_1419026280.js";
case"http":return cdn_url+"/31541/js/libs_codemirror_http_1419026099.js";
case"idl":return cdn_url+"/31541/js/libs_codemirror_idl_1419026238.js";
case"jade":return cdn_url+"/31541/js/libs_codemirror_jade_1419026182.js";
case"javascript":return cdn_url+"/31541/js/libs_codemirror_javascript_1419026186.js";
case"jinja2":return cdn_url+"/31541/js/libs_codemirror_jinja2_1419026236.js";
case"julia":return cdn_url+"/31541/js/libs_codemirror_julia_1419026165.js";
case"kotlin":return cdn_url+"/31541/js/libs_codemirror_kotlin_1419026225.js";
case"livescript":return cdn_url+"/31541/js/libs_codemirror_livescript_1419026106.js";
case"lua":return cdn_url+"/31541/js/libs_codemirror_lua_1419026195.js";
case"markdown":return cdn_url+"/31541/js/libs_codemirror_markdown_1419026217.js";
case"mirc":return cdn_url+"/31541/js/libs_codemirror_mirc_1419026156.js";
case"mllike":return cdn_url+"/31541/js/libs_codemirror_mllike_1419026270.js";
case"modelica":return cdn_url+"/31541/js/libs_codemirror_modelica_1419026189.js";
case"nginx":return cdn_url+"/31541/js/libs_codemirror_nginx_1419026111.js";
case"ntriples":return cdn_url+"/31541/js/libs_codemirror_ntriples_1419026201.js";
case"octave":return cdn_url+"/31541/js/libs_codemirror_octave_1419026158.js";
case"pascal":return cdn_url+"/31541/js/libs_codemirror_pascal_1419026264.js";
case"pegjs":return cdn_url+"/31541/js/libs_codemirror_pegjs_1419026093.js";
case"perl":return cdn_url+"/31541/js/libs_codemirror_perl_1419026249.js";
case"php":return cdn_url+"/31541/js/libs_codemirror_php_1419026255.js";
case"pig":return cdn_url+"/31541/js/libs_codemirror_pig_1419026274.js";
case"properties":return cdn_url+"/31541/js/libs_codemirror_properties_1419026113.js";
case"puppet":return cdn_url+"/31541/js/libs_codemirror_puppet_1419026145.js";
case"python":return cdn_url+"/31541/js/libs_codemirror_python_1419026199.js";
case"q":return cdn_url+"/31541/js/libs_codemirror_q_1419026260.js";
case"r":return cdn_url+"/31541/js/libs_codemirror_r_1419026129.js";
case"rpm":return cdn_url+"/31541/js/libs_codemirror_rpm_1419026117.js";
case"rst":return cdn_url+"/31541/js/libs_codemirror_rst_1419026121.js";
case"ruby":return cdn_url+"/31541/js/libs_codemirror_ruby_1419026268.js";
case"rust":return cdn_url+"/31541/js/libs_codemirror_rust_1419026152.js";
case"sass":return cdn_url+"/31541/js/libs_codemirror_sass_1419026205.js";
case"scheme":return cdn_url+"/31541/js/libs_codemirror_scheme_1419026175.js";
case"shell":return cdn_url+"/31541/js/libs_codemirror_shell_1419026088.js";
case"sieve":return cdn_url+"/31541/js/libs_codemirror_sieve_1419026230.js";
case"slim":return cdn_url+"/31541/js/libs_codemirror_slim_1419026147.js";
case"smalltalk":return cdn_url+"/31541/js/libs_codemirror_smalltalk_1419026193.js";
case"smarty":return cdn_url+"/31541/js/libs_codemirror_smarty_1419026251.js";
case"smartymixed":return cdn_url+"/31541/js/libs_codemirror_smartymixed_1419026197.js";
case"solr":return cdn_url+"/31541/js/libs_codemirror_solr_1419026133.js";
case"sparql":return cdn_url+"/31541/js/libs_codemirror_sparql_1419026172.js";
case"sql":return cdn_url+"/31541/js/libs_codemirror_sql_1419026115.js";
case"stex":return cdn_url+"/31541/js/libs_codemirror_stex_1419026097.js";
case"tcl":return cdn_url+"/31541/js/libs_codemirror_tcl_1419026288.js";
case"textile":return cdn_url+"/31541/js/libs_codemirror_textile_1419026125.js";
case"tiddlywiki":return cdn_url+"/31541/js/libs_codemirror_tiddlywiki_1419026220.js";
case"tiki":return cdn_url+"/31541/js/libs_codemirror_tiki_1419026169.js";
case"toml":return cdn_url+"/31541/js/libs_codemirror_toml_1419026123.js";
case"tornado":return cdn_url+"/31541/js/libs_codemirror_tornado_1419026213.js";
case"turtle":return cdn_url+"/31541/js/libs_codemirror_turtle_1419026276.js";
case"vb":return cdn_url+"/31541/js/libs_codemirror_vb_1419026132.js";
case"vbscript":return cdn_url+"/31541/js/libs_codemirror_vbscript_1419026091.js";
case"velocity":return cdn_url+"/31541/js/libs_codemirror_velocity_1419026138.js";
case"verilog":return cdn_url+"/31541/js/libs_codemirror_verilog_1419026095.js";
case"xml":return cdn_url+"/31541/js/libs_codemirror_xml_1419026119.js";
case"xquery":return cdn_url+"/31541/js/libs_codemirror_xquery_1419026127.js";
case"yaml":return cdn_url+"/31541/js/libs_codemirror_yaml_1419026140.js";
case"z80":return cdn_url+"/31541/js/libs_codemirror_z80_1419026234.js"
}return null
}var d={};
function b(e,g){var f=g;
return function(){if(--f==0){e()
}}
}function a(k,e){var j=CodeMirror.modes[k].dependencies;
if(!j){return e()
}var h=[];
for(var g=0;
g<j.length;
++g){if(!CodeMirror.modes.hasOwnProperty(j[g])){h.push(j[g])
}}if(!h.length){return e()
}var f=b(e,h.length);
for(var g=0;
g<h.length;
++g){CodeMirror.requireMode(h[g],f)
}}CodeMirror.requireMode=function(k,e){if(typeof k!="string"){k=k.name
}if(CodeMirror.modes.hasOwnProperty(k)){return a(k,e)
}if(d.hasOwnProperty(k)){return d[k].push(e)
}var f=document.createElement("script");
f.src=c(k);
var g=document.getElementsByTagName("script")[0];
g.parentNode.insertBefore(f,g);
var i=d[k]=[e];
var h=0,j=setInterval(function(){if(++h>100){return clearInterval(j)
}if(CodeMirror.modes.hasOwnProperty(k)){clearInterval(j);
d[k]=null;
a(k,function(){for(var l=0;
l<i.length;
++l){i[l]()
}})
}},200)
};
CodeMirror.autoLoadMode=function(e,f){if(!CodeMirror.modes.hasOwnProperty(f)){CodeMirror.requireMode(f,function(){e.setOption("mode",e.getOption("mode"))
})
}}
}());