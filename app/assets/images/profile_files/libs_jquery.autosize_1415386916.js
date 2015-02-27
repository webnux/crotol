/*!
	Autosize v1.18.9 - 2014-05-27
	Automatically adjust textarea height based on user input.
	(c) 2014 Jack Moore - http://www.jacklmoore.com/autosize
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(b){var e={className:"autosizejs",id:"autosizejs",append:"\n",callback:false,resizeDelay:200,placeholder:true},f='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',a=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],d,c=b(f).data("autosize",true)[0];
c.style.lineHeight="99px";
if(b(c).css("lineHeight")==="99px"){a.push("lineHeight")
}c.style.lineHeight="";
b.fn.autosize=function(g){if(!this.length){return this
}g=b.extend({},e,g||{});
if(c.parentNode!==document.body){b(document.body).append(c)
}return this.each(function(){var m=this,l=b(m),s,u,k=0,t=b.isFunction(g.callback),n={height:m.style.height,overflow:m.style.overflow,overflowY:m.style.overflowY,wordWrap:m.style.wordWrap,resize:m.style.resize},h=l.width(),j=l.css("resize");
if(l.data("autosize")){return
}l.data("autosize",true);
if(l.css("box-sizing")==="border-box"||l.css("-moz-box-sizing")==="border-box"||l.css("-webkit-box-sizing")==="border-box"){k=l.outerHeight()-l.height()
}k-=(typeof g.boxOffset!=="undefined"?g.boxOffset:0);
u=Math.max(parseInt(l.css("minHeight"),10)-k||0,l.height());
l.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word"});
if(j==="vertical"){l.css("resize","none")
}else{if(j==="both"){l.css("resize","horizontal")
}}function o(){var w;
var v=window.getComputedStyle?window.getComputedStyle(m,null):false;
if(v){w=m.getBoundingClientRect().width;
if(w===0||typeof w!=="number"){w=parseInt(v.width,10)
}b.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(x,y){w-=parseInt(v[y],10)
})
}else{w=l.width()
}c.style.width=Math.max(w,0)+"px"
}function r(){var w={};
d=m;
c.className=g.className;
c.id=g.id;
s=parseInt(l.css("maxHeight"),10);
b.each(a,function(y,z){w[z]=l.css(z)
});
b(c).css(w).attr("wrap",l.attr("wrap"));
o();
if(window.chrome){var v=m.style.width;
m.style.width="0px";
var x=m.offsetWidth;
m.style.width=v
}}function q(){var v,w;
if(d!==m){r()
}else{o()
}if(!m.value&&g.placeholder){c.value=(l.attr("placeholder")||"")+g.append
}else{c.value=m.value+g.append
}c.style.overflowY=m.style.overflowY;
w=parseInt(m.style.height,10);
c.scrollTop=0;
c.scrollTop=90000;
v=c.scrollTop;
if(s&&v>s){m.style.overflowY="scroll";
v=s
}else{m.style.overflowY="hidden";
if(v<u){v=u
}}v=parseInt(v,10);
if(w!==v){m.style.height=v+"px";
if(t){g.callback.call(m,m)
}}}function p(){var v=l.width();
if(v!==h){h=v;
q()
}}function i(){TS.utility.throttle.method(p,"autosize_resize",g.resizeDelay)
}if("onpropertychange" in m){if("oninput" in m){l.on("input keyup",q)
}else{l.on("propertychange.autosize",function(){if(event.propertyName==="value"){q()
}})
}}else{l.on("input",q)
}if(g.resizeDelay!==false){b(window).on("resize.autosize",i)
}l.on("autosize.resize",q);
l.on("autosize-resize",q);
l.on("autosize.resizeIncludeStyle",function(){d=null;
q()
});
l.on("autosize.destroy",function(){d=null;
b(window).off("resize",i);
l.off("autosize").off(".autosize").css(n).removeData("autosize")
});
q()
})
}
}(window.jQuery||window.$));