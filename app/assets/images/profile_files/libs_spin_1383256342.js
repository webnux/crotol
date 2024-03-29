(function(a,b){if(typeof exports=="object"){module.exports=b()
}else{if(typeof define=="function"&&define.amd){define(b)
}else{a.Spinner=b()
}}}(this,function(){var e=["webkit","Moz","ms","O"],p={},o;
function g(q,t){var r=document.createElement(q||"div"),s;
for(s in t){r[s]=t[s]
}return r
}function h(r){for(var q=1,s=arguments.length;
q<s;
q++){r.appendChild(arguments[q])
}return r
}var i=(function(){var q=g("style",{type:"text/css"});
h(document.getElementsByTagName("head")[0],q);
return q.sheet||q.styleSheet
}());
function c(u,q,v,y){var r=["opacity",q,~~(u*100),v,y].join("-"),s=0.01+v/y*100,x=Math.max(1-(1-u)/q*(100-s),u),w=o.substring(0,o.indexOf("Animation")).toLowerCase(),t=w&&"-"+w+"-"||"";
if(!p[r]){i.insertRule("@"+t+"keyframes "+r+"{0%{opacity:"+x+"}"+s+"%{opacity:"+u+"}"+(s+0.01)+"%{opacity:1}"+(s+q)%100+"%{opacity:"+u+"}100%{opacity:"+x+"}}",i.cssRules.length);
p[r]=1
}return r
}function m(u,v){var t=u.style,q,r;
v=v.charAt(0).toUpperCase()+v.slice(1);
for(r=0;
r<e.length;
r++){q=e[r]+v;
if(t[q]!==undefined){return q
}}if(t[v]!==undefined){return v
}}function f(q,s){for(var r in s){q.style[m(q,r)||r]=s[r]
}return q
}function k(s){for(var q=1;
q<arguments.length;
q++){var r=arguments[q];
for(var t in r){if(s[t]===undefined){s[t]=r[t]
}}}return s
}function j(q){var r={x:q.offsetLeft,y:q.offsetTop};
while((q=q.offsetParent)){r.x+=q.offsetLeft,r.y+=q.offsetTop
}return r
}function n(r,q){return typeof r=="string"?r:r[q%r.length]
}var d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2000000000,className:"spinner",top:"auto",left:"auto",position:"relative"};
function b(q){if(typeof this=="undefined"){return new b(q)
}this.opts=k(q||{},b.defaults,d)
}b.defaults={};
k(b.prototype,{spin:function(z){this.stop();
var D=this,r=D.opts,s=D.el=f(g(0,{className:r.className}),{position:r.position,width:0,zIndex:r.zIndex}),C=r.radius+r.length+r.width,E,B;
if(z){z.insertBefore(s,z.firstChild||null);
B=j(z);
E=j(s);
f(s,{left:(r.left=="auto"?B.x-E.x+(z.offsetWidth>>1):parseInt(r.left,10)+C)+"px",top:(r.top=="auto"?B.y-E.y+(z.offsetHeight>>1):parseInt(r.top,10)+C)+"px"})
}s.setAttribute("role","progressbar");
D.lines(s,D.opts);
if(!o){var w=0,q=(r.lines-1)*(1-r.direction)/2,v,t=r.fps,y=t/r.speed,x=(1-r.opacity)/(y*r.trail/100),A=y/r.lines;
(function u(){w++;
for(var F=0;
F<r.lines;
F++){v=Math.max(1-(w+(r.lines-F)*A)%y*x,r.opacity);
D.opacity(s,F*r.direction+q,v,r)
}D.timeout=D.el&&setTimeout(u,~~(1000/t))
})()
}return D
},stop:function(){var q=this.el;
if(q){clearTimeout(this.timeout);
if(q.parentNode){q.parentNode.removeChild(q)
}this.el=undefined
}return this
},lines:function(s,u){var r=0,v=(u.lines-1)*(1-u.direction)/2,q;
function t(w,x){return f(g(),{position:"absolute",width:(u.length+u.width)+"px",height:u.width+"px",background:w,boxShadow:x,transformOrigin:"left",transform:"rotate("+~~(360/u.lines*r+u.rotate)+"deg) translate("+u.radius+"px,0)",borderRadius:(u.corners*u.width>>1)+"px"})
}for(;
r<u.lines;
r++){q=f(g(),{position:"absolute",top:1+~(u.width/2)+"px",transform:u.hwaccel?"translate3d(0,0,0)":"",opacity:u.opacity,animation:o&&c(u.opacity,u.trail,v+r*u.direction,u.lines)+" "+1/u.speed+"s linear infinite"});
if(u.shadow){h(q,f(t("#000","0 0 4px #000"),{top:2+"px"}))
}h(s,h(q,t(n(u.color,r),"0 0 1px rgba(0,0,0,.1)")))
}return s
},opacity:function(r,q,s){if(q<r.childNodes.length){r.childNodes[q].style.opacity=s
}}});
function l(){function q(s,r){return g("<"+s+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',r)
}i.addRule(".spin-vml","behavior:url(#default#VML)");
b.prototype.lines=function(v,u){var t=u.length+u.width,B=2*t;
function A(){return f(q("group",{coordsize:B+" "+B,coordorigin:-t+" "+-t}),{width:B,height:B})
}var w=-(u.width+u.length)*2+"px",z=f(A(),{position:"absolute",top:w,left:w}),y;
function x(s,r,C){h(z,h(f(A(),{rotation:360/u.lines*s+"deg",left:~~r}),h(f(q("roundrect",{arcsize:u.corners}),{width:t,height:u.width,left:u.radius,top:-u.width>>1,filter:C}),q("fill",{color:n(u.color,s),opacity:u.opacity}),q("stroke",{opacity:0}))))
}if(u.shadow){for(y=1;
y<=u.lines;
y++){x(y,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")
}}for(y=1;
y<=u.lines;
y++){x(y)
}return h(v,z)
};
b.prototype.opacity=function(s,r,u,t){var v=s.firstChild;
t=t.shadow&&t.lines||0;
if(v&&r+t<v.childNodes.length){v=v.childNodes[r+t];
v=v&&v.firstChild;
v=v&&v.firstChild;
if(v){v.opacity=u
}}}
}var a=f(g("group"),{behavior:"url(#default#VML)"});
if(!m(a,"transform")&&a.adj){l()
}else{o=m(a,"animation")
}return b
}));