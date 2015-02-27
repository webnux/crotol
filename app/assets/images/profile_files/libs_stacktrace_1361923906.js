function printStackTrace(b){b=b||{guess:true};
var c=b.e||null,e=!!b.guess;
var d=new printStackTrace.implementation(),a=d.run(c);
return(e)?d.guessAnonymousFunctions(a):a
}if(typeof module!=="undefined"&&module.exports){module.exports=printStackTrace
}printStackTrace.implementation=function(){};
printStackTrace.implementation.prototype={run:function(a,b){a=a||this.createException();
b=b||this.mode(a);
if(b==="other"){return this.other(arguments.callee)
}else{return this[b](a)
}},createException:function(){try{this.undef()
}catch(a){return a
}},mode:function(a){if(a["arguments"]&&a.stack){return"chrome"
}else{if(a.stack&&a.sourceURL){return"safari"
}else{if(a.stack&&a.number){return"ie"
}else{if(typeof a.message==="string"&&typeof window!=="undefined"&&window.opera){if(!a.stacktrace){return"opera9"
}if(a.message.indexOf("\n")>-1&&a.message.split("\n").length>a.stacktrace.split("\n").length){return"opera9"
}if(!a.stack){return"opera10a"
}if(a.stacktrace.indexOf("called from line")<0){return"opera10b"
}return"opera11"
}else{if(a.stack){return"firefox"
}}}}}return"other"
},instrumentFunction:function(b,d,e){b=b||window;
var a=b[d];
b[d]=function c(){e.call(this,printStackTrace().slice(4));
return b[d]._instrumented.apply(this,arguments)
};
b[d]._instrumented=a
},deinstrumentFunction:function(a,b){if(a[b].constructor===Function&&a[b]._instrumented&&a[b]._instrumented.constructor===Function){a[b]=a[b]._instrumented
}},chrome:function(b){var a=(b.stack+"\n").replace(/^\S[^\(]+?[\n$]/gm,"").replace(/^\s+(at eval )?at\s+/gm,"").replace(/^([^\(]+?)([\n$])/gm,"{anonymous}()@$1$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm,"{anonymous}()@$1").split("\n");
a.pop();
return a
},safari:function(a){return a.stack.replace(/\[native code\]\n/m,"").replace(/^(?=\w+Error\:).*$\n/m,"").replace(/^@/gm,"{anonymous}()@").split("\n")
},ie:function(b){var a=/^.*at (\w+) \(([^\)]+)\)$/gm;
return b.stack.replace(/at Anonymous function /gm,"{anonymous}()@").replace(/^(?=\w+Error\:).*$\n/m,"").replace(a,"$1@$2").split("\n")
},firefox:function(a){return a.stack.replace(/(?:\n@:0)?\s+$/m,"").replace(/^[\(@]/gm,"{anonymous}()@").split("\n")
},opera11:function(g){var a="{anonymous}",h=/^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/;
var k=g.stacktrace.split("\n"),l=[];
for(var c=0,f=k.length;
c<f;
c+=2){var d=h.exec(k[c]);
if(d){var j=d[4]+":"+d[1]+":"+d[2];
var b=d[3]||"global code";
b=b.replace(/<anonymous function: (\S+)>/,"$1").replace(/<anonymous function>/,a);
l.push(b+"@"+j+" -- "+k[c+1].replace(/^\s+/,""))
}}return l
},opera10b:function(h){var g=/^(.*)@(.+):(\d+)$/;
var c=h.stacktrace.split("\n"),b=[];
for(var f=0,a=c.length;
f<a;
f++){var d=g.exec(c[f]);
if(d){var j=d[1]?(d[1]+"()"):"global code";
b.push(j+"@"+d[2]+":"+d[3])
}}return b
},opera10a:function(g){var a="{anonymous}",h=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
var j=g.stacktrace.split("\n"),k=[];
for(var c=0,f=j.length;
c<f;
c+=2){var d=h.exec(j[c]);
if(d){var b=d[3]||a;
k.push(b+"()@"+d[2]+":"+d[1]+" -- "+j[c+1].replace(/^\s+/,""))
}}return k
},opera9:function(j){var d="{anonymous}",h=/Line (\d+).*script (?:in )?(\S+)/i;
var c=j.message.split("\n"),b=[];
for(var g=2,a=c.length;
g<a;
g+=2){var f=h.exec(c[g]);
if(f){b.push(d+"()@"+f[2]+":"+f[1]+" -- "+c[g+1].replace(/^\s+/,""))
}}return b
},other:function(g){var b="{anonymous}",f=/function\s*([\w\-$]+)?\s*\(/i,a=[],d,c,e=10;
while(g&&g["arguments"]&&a.length<e){d=f.test(g.toString())?RegExp.$1||b:b;
c=Array.prototype.slice.call(g["arguments"]||[]);
a[a.length]=d+"("+this.stringifyArguments(c)+")";
g=g.caller
}return a
},stringifyArguments:function(c){var b=[];
var e=Array.prototype.slice;
for(var d=0;
d<c.length;
++d){var a=c[d];
if(a===undefined){b[d]="undefined"
}else{if(a===null){b[d]="null"
}else{if(a.constructor){if(a.constructor===Array){if(a.length<3){b[d]="["+this.stringifyArguments(a)+"]"
}else{b[d]="["+this.stringifyArguments(e.call(a,0,1))+"..."+this.stringifyArguments(e.call(a,-1))+"]"
}}else{if(a.constructor===Object){b[d]="#object"
}else{if(a.constructor===Function){b[d]="#function"
}else{if(a.constructor===String){b[d]='"'+a+'"'
}else{if(a.constructor===Number){b[d]=a
}}}}}}}}}return b.join(",")
},sourceCache:{},ajax:function(a){var b=this.createXMLHTTPObject();
if(b){try{b.open("GET",a,false);
b.send(null);
return b.responseText
}catch(c){}}return""
},createXMLHTTPObject:function(){var c,a=[function(){return new XMLHttpRequest()
},function(){return new ActiveXObject("Msxml2.XMLHTTP")
},function(){return new ActiveXObject("Msxml3.XMLHTTP")
},function(){return new ActiveXObject("Microsoft.XMLHTTP")
}];
for(var b=0;
b<a.length;
b++){try{c=a[b]();
this.createXMLHTTPObject=a[b];
return c
}catch(d){}}},isSameDomain:function(a){return typeof location!=="undefined"&&a.indexOf(location.hostname)!==-1
},getSource:function(a){if(!(a in this.sourceCache)){this.sourceCache[a]=this.ajax(a).split("\n")
}return this.sourceCache[a]
},guessAnonymousFunctions:function(k){for(var g=0;
g<k.length;
++g){var f=/\{anonymous\}\(.*\)@(.*)/,l=/^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/,b=k[g],c=f.exec(b);
if(c){var e=l.exec(c[1]);
if(e){var d=e[1],a=e[2],j=e[3]||0;
if(d&&this.isSameDomain(d)&&a){var h=this.guessAnonymousFunction(d,a,j);
k[g]=b.replace("{anonymous}",h)
}}}}return k
},guessAnonymousFunction:function(c,f,a){var b;
try{b=this.findFunctionName(this.getSource(c),f)
}catch(d){b="getSource failed with url: "+c+", exception: "+d.toString()
}return b
},findFunctionName:function(a,e){var g=/function\s+([^(]*?)\s*\(([^)]*)\)/;
var k=/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/;
var h=/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/;
var b="",l,j=Math.min(e,20),d,c;
for(var f=0;
f<j;
++f){l=a[e-f-1];
c=l.indexOf("//");
if(c>=0){l=l.substr(0,c)
}if(l){b=l+b;
d=k.exec(b);
if(d&&d[1]){return d[1]
}d=g.exec(b);
if(d&&d[1]){return d[1]
}d=h.exec(b);
if(d&&d[1]){return d[1]
}}}return"(?)"
}};