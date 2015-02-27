/*!
 * Ladda 0.9.0
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
(function(a,b){if(typeof exports==="object"){module.exports=b()
}else{if(typeof define==="function"&&define.amd){define(["spin"],b)
}else{a.Ladda=b(a.Spinner)
}}}(this,function(c){var e=[];
function f(k){if(typeof k==="undefined"){console.warn("Ladda button target must be defined.");
return
}if(!k.querySelector(".ladda-label")){k.innerHTML='<span class="ladda-label">'+k.innerHTML+"</span>"
}var m=i(k);
var l=document.createElement("span");
l.className="ladda-spinner";
k.appendChild(l);
var n;
var j={start:function(){k.setAttribute("disabled","");
k.setAttribute("data-loading","");
clearTimeout(n);
m.spin(l);
this.setProgress(0);
return this
},startAfter:function(o){clearTimeout(n);
n=setTimeout(function(){j.start()
},o);
return this
},stop:function(){k.removeAttribute("disabled");
k.removeAttribute("data-loading");
clearTimeout(n);
n=setTimeout(function(){m.stop()
},1000);
return this
},toggle:function(){if(this.isLoading()){this.stop()
}else{this.start()
}return this
},setProgress:function(o){o=Math.max(Math.min(o,1),0);
var p=k.querySelector(".ladda-progress");
if(o===0&&p&&p.parentNode){p.parentNode.removeChild(p)
}else{if(!p){p=document.createElement("div");
p.className="ladda-progress";
k.appendChild(p)
}p.style.width=((o||0)*k.offsetWidth)+"px"
}},enable:function(){this.stop();
return this
},disable:function(){this.stop();
k.setAttribute("disabled","");
return this
},isLoading:function(){return k.hasAttribute("data-loading")
}};
e.push(j);
return j
}function g(k,j){while(k.parentNode&&k.tagName!==j){k=k.parentNode
}return k
}function b(o){var n=["input","textarea"];
var k=[];
for(var m=0;
m<n.length;
m++){var p=o.getElementsByTagName(n[m]);
for(var l=0;
l<p.length;
l++){if(p[l].hasAttribute("required")){k.push(p[l])
}}}return k
}function h(n,l){l=l||{};
var k=[];
if(typeof n==="string"){k=d(document.querySelectorAll(n))
}else{if(typeof n==="object"&&typeof n.nodeName==="string"){k=[n]
}}for(var m=0,j=k.length;
m<j;
m++){(function(){var p=k[m];
if(typeof p.addEventListener==="function"){var o=f(p);
var q=-1;
p.addEventListener("click",function(v){var u=true;
var t=g(p,"FORM");
var r=b(t);
for(var s=0;
s<r.length;
s++){if(r[s].value.replace(/^\s+|\s+$/g,"")===""){u=false
}}if(u){o.startAfter(1);
if(typeof l.timeout==="number"){clearTimeout(q);
q=setTimeout(o.stop,l.timeout)
}if(typeof l.callback==="function"){l.callback.apply(null,[o])
}}},false)
}})()
}}function a(){for(var k=0,j=e.length;
k<j;
k++){e[k].stop()
}}function i(m){var k=m.offsetHeight,p;
if(k>32){k*=0.8
}if(m.hasAttribute("data-spinner-size")){k=parseInt(m.getAttribute("data-spinner-size"),10)
}if(m.hasAttribute("data-spinner-color")){p=m.getAttribute("data-spinner-color")
}var l=12,j=k*0.2,o=j*0.6,n=j<7?2:3;
return new c({color:p||"#fff",lines:l,radius:j,length:o,width:n,zIndex:"auto",top:"auto",left:"auto",className:""})
}function d(k){var j=[];
for(var l=0;
l<k.length;
l++){j.push(k[l])
}return j
}return{bind:h,create:f,stopAll:a}
}));