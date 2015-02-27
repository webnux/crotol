(function(d,b,a,f){var e=d(b);
var c={};
d.fn.lazyload=function(h){var k=this;
var l;
var j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:(h&&h.skip_invisible!==f?h.skip_invisible:true),appear:null,load:null,placeholder:null};
h=h||{};
h.throttle=(h.throttle||125);
function i(){if(!h.throttle){return m()
}else{TS.utility.throttle.method(m,"jquery_lazyload",h.throttle)
}}function m(){var n=0;
if((!k||!k.each||!k.length)&&g){g();
return false
}if(j.skip_invisible&&l[0]&&l[0]!==b&&!l.is(":visible")){return
}k.each(function(){var o=d(this);
if(j.skip_invisible&&!o.is(":visible")){o=null;
return
}if(d.abovethetop(this,j)||d.leftofbegin(this,j)){}else{if(!d.belowthefold(this,j)&&!d.rightoffold(this,j)){o.trigger("appear");
n=0
}else{if(++n>j.failure_limit){o=null;
return false
}}}o=null
})
}function g(){if(l&&k){l.unbind(j.event+".lazyload");
e.unbind("resize",i);
e.unbind("resize-immediate",m);
k.each(function(){d(this).unbind()
});
l=null;
k=null
}}if(h){if(f!==h.failurelimit){h.failure_limit=h.failurelimit;
delete h.failurelimit
}if(f!==h.effectspeed){h.effect_speed=h.effectspeed;
delete h.effectspeed
}d.extend(j,h)
}l=(j.container===f||j.container===b)?e:d(j.container);
if(0===j.event.indexOf("scroll")){l.bind(j.event+".lazyload",i)
}this.each(function(){var o=this;
var r=d(o);
var q=r.attr("src");
var s=r.attr("data-"+j.data_attribute);
o.loaded=false;
function p(){var t;
r.hide();
if(r.is("img")){r.attr("src",s)
}else{if(s.indexOf("url(")!==-1){r.css("background-image",s)
}else{r.css("background-image","url('"+s+"')")
}}r[j.effect](j.effect_speed);
o.loaded=true;
if(k){t=d.grep(k,function(v){return !v.loaded
});
k=d(t)
}c[s]=true;
if(j.load&&k){var u=k.length;
j.load.call(o,u,j)
}r.trigger("lazyloaded")
}function n(){p();
d(this).remove()
}r.one("appear",function(){if(!this.loaded){if(j.appear){if(k){var t=k.length;
j.appear.call(o,t,j)
}}if(s.indexOf("url(")!==-1){p()
}else{d("<img />").one("load",n).attr("src",s)
}}});
if(q===f||q===false){if(r.is("img")){if(c[s]){r.trigger("appear")
}else{if(j.placeholder){r.attr("src",j.placeholder)
}}}}else{if(c[s]){r.trigger("appear")
}}if(0!==j.event.indexOf("scroll")){r.bind(j.event,function(){if(!o.loaded){r.trigger("appear")
}})
}});
e.bind("resize",i);
e.bind("resize-immediate",m);
if((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)){e.bind("pageshow",function(n){if(n.originalEvent&&n.originalEvent.persisted){k.each(function(){d(this).trigger("appear")
})
}})
}d(a).ready(m);
this.detachEvents=g;
return this
};
d.belowthefold=function(h,i){var g;
if(i.container===f||i.container===b){g=(b.innerHeight?b.innerHeight:e.height())+e.scrollTop()
}else{g=d(i.container).offset().top+d(i.container).height()
}return g<=d(h).offset().top-i.threshold
};
d.rightoffold=function(h,i){var g;
if(i.container===f||i.container===b){g=e.width()+e.scrollLeft()
}else{g=d(i.container).offset().left+d(i.container).width()
}return g<=d(h).offset().left-i.threshold
};
d.abovethetop=function(h,i){var g;
if(i.container===f||i.container===b){g=e.scrollTop()
}else{g=d(i.container).offset().top
}return g>=d(h).offset().top+i.threshold+d(h).height()
};
d.leftofbegin=function(h,i){var g;
if(i.container===f||i.container===b){g=e.scrollLeft()
}else{g=d(i.container).offset().left
}return g>=d(h).offset().left+i.threshold+d(h).width()
};
d.inviewport=function(g,h){return !d.rightoffold(g,h)&&!d.leftofbegin(g,h)&&!d.belowthefold(g,h)&&!d.abovethetop(g,h)
};
d.extend(d.expr[":"],{"below-the-fold":function(g){return d.belowthefold(g,{threshold:0})
},"above-the-top":function(g){return !d.belowthefold(g,{threshold:0})
},"right-of-screen":function(g){return d.rightoffold(g,{threshold:0})
},"left-of-screen":function(g){return !d.rightoffold(g,{threshold:0})
},"in-viewport":function(g){return d.inviewport(g,{threshold:0})
},"above-the-fold":function(g){return !d.belowthefold(g,{threshold:0})
},"right-of-fold":function(g){return d.rightoffold(g,{threshold:0})
},"left-of-fold":function(g){return !d.rightoffold(g,{threshold:0})
}})
})(jQuery,window,document);