/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};
var d=document.createElement("div");
var q={};
function b(v){if(v in d.style){return v
}var u=["Moz","Webkit","O","ms"];
var r=v.charAt(0).toUpperCase()+v.substr(1);
if(v in d.style){return v
}for(var t=0;
t<u.length;
++t){var s=u[t]+r;
if(s in d.style){return s
}}}function e(){d.style[q.transform]="";
d.style[q.transform]="rotateY(90deg)";
return d.style[q.transform]!==""
}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;
q.transition=b("transition");
q.transitionDelay=b("transitionDelay");
q.transform=b("transform");
q.transformOrigin=b("transformOrigin");
q.transform3d=e();
var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};
var f=q.transitionEnd=i[q.transition]||null;
for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]
}}d=null;
k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};
k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()
},set:function(s,r){var t=r;
if(!(t instanceof j)){t=new j(t)
}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)
}else{s.style[q.transform]=t.toString()
}k(s).data("transform",t)
}};
k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};
if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]
},set:function(r,s){r.style[q.transformOrigin]=s
}};
k.cssHooks.transition={get:function(r){return r.style[q.transition]
},set:function(r,s){r.style[q.transition]=s
}}
}n("scale");
n("translate");
n("rotate");
n("rotateX");
n("rotateY");
n("rotate3d");
n("perspective");
n("skewX");
n("skewY");
n("x",true);
n("y",true);
function j(r){if(typeof r==="string"){this.parse(r)
}return this
}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];
r.unshift(t);
j.prototype.set.apply(this,r)
},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);
if(this.setter[s]){this.setter[s].apply(this,r)
}else{this[s]=r.join(",")
}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)
}else{return this[r]||0
}},setter:{rotate:function(r){this.rotate=o(r,"deg")
},rotateX:function(r){this.rotateX=o(r,"deg")
},rotateY:function(r){this.rotateY=o(r,"deg")
},scale:function(r,s){if(s===undefined){s=r
}this.scale=r+","+s
},skewX:function(r){this.skewX=o(r,"deg")
},skewY:function(r){this.skewY=o(r,"deg")
},perspective:function(r){this.perspective=o(r,"px")
},x:function(r){this.set("translate",r,null)
},y:function(r){this.set("translate",null,r)
},translate:function(r,s){if(this._translateX===undefined){this._translateX=0
}if(this._translateY===undefined){this._translateY=0
}if(r!==null&&r!==undefined){this._translateX=o(r,"px")
}if(s!==null&&s!==undefined){this._translateY=o(s,"px")
}this.translate=this._translateX+","+this._translateY
}},getter:{x:function(){return this._translateX||0
},y:function(){return this._translateY||0
},scale:function(){var r=(this.scale||"1,1").split(",");
if(r[0]){r[0]=parseFloat(r[0])
}if(r[1]){r[1]=parseFloat(r[1])
}return(r[0]===r[1])?r[0]:r
},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");
for(var r=0;
r<=3;
++r){if(t[r]){t[r]=parseFloat(t[r])
}}if(t[3]){t[3]=o(t[3],"deg")
}return t
}},parse:function(s){var r=this;
s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)
})
},toString:function(t){var s=[];
for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue
}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")
}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")
}else{s.push(r+"("+this[r]+")")
}}}}}return s.join(" ")
}};
function m(s,r,t){if(r===true){s.queue(t)
}else{if(r){s.queue(r,t)
}else{t()
}}}function h(s){var r=[];
k.each(s,function(t){t=k.camelCase(t);
t=k.transit.propertyMap[t]||k.cssProps[t]||t;
t=c(t);
if(k.inArray(t,r)===-1){r.push(t)
}});
return r
}function g(s,v,x,r){var t=h(s);
if(k.cssEase[x]){x=k.cssEase[x]
}var w=""+l(v)+" "+x;
if(parseInt(r,10)>0){w+=" "+l(r)
}var u=[];
k.each(t,function(z,y){u.push(y+" "+w)
});
return u.join(", ")
}k.fn.transition=k.fn.transit=function(A,t,z,D){var E=this;
var v=0;
var x=true;
var r=jQuery.extend(true,{},A);
if(typeof t==="function"){D=t;
t=undefined
}if(typeof t==="object"){z=t.easing;
v=t.delay||0;
x=t.queue||true;
D=t.complete;
t=t.duration
}if(typeof z==="function"){D=z;
z=undefined
}if(typeof r.easing!=="undefined"){z=r.easing;
delete r.easing
}if(typeof r.duration!=="undefined"){t=r.duration;
delete r.duration
}if(typeof r.complete!=="undefined"){D=r.complete;
delete r.complete
}if(typeof r.queue!=="undefined"){x=r.queue;
delete r.queue
}if(typeof r.delay!=="undefined"){v=r.delay;
delete r.delay
}if(typeof t==="undefined"){t=k.fx.speeds._default
}if(typeof z==="undefined"){z=k.cssEase._default
}t=l(t);
var F=g(r,t,z,v);
var C=k.transit.enabled&&q.transition;
var u=C?(parseInt(t,10)+parseInt(v,10)):0;
if(u===0){var B=function(G){E.css(r);
if(D){D.apply(E)
}if(G){G()
}};
m(E,x,B);
return E
}var y={};
var s=function(I){var H=false;
var G=function(){if(H){E.unbind(f,G)
}if(u>0){E.each(function(){this.style[q.transition]=(y[this]||null)
})
}if(typeof D==="function"){D.apply(E)
}if(typeof I==="function"){I()
}};
if((u>0)&&(f)&&(k.transit.useTransitionEnd)){H=true;
E.bind(f,G)
}else{window.setTimeout(G,u)
}E.each(function(){if(u>0){this.style[q.transition]=F
}k(this).css(A)
})
};
var w=function(G){this.offsetWidth;
s(G)
};
m(E,x,w);
return this
};
function n(s,r){if(!r){k.cssNumber[s]=true
}k.transit.propertyMap[s]=q.transform;
k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");
return u.get(s)
},set:function(v,w){var u=k(v).css("transit:transform");
u.setFromString(s,w);
k(v).css({"transit:transform":u})
}}
}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()
})
}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s
}else{return""+s+r
}}function l(s){var r=s;
if(typeof r==="string"&&(!r.match(/^[\-0-9\.]+/))){r=k.fx.speeds[r]||k.fx.speeds._default
}return o(r,"ms")
}k.transit.getTransitionValue=g
})(jQuery);