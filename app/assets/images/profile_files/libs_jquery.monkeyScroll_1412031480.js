(function(e){var d=70;
var b=17;
var a;
var c=function(){if(window.chrome){return b
}var i=e('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"></div>').appendTo("body");
var h=e('<div style="height:100px;"></div>').appendTo(i);
var g=h.innerWidth();
i.css("overflow-y","auto");
var f=h.innerWidth();
i.remove();
return Math.max(g-f,b)
};
e.fn.extend({monkeyScroll:function(f){f=f||{};
return this.each(function(s,I){var i=e(I);
if(i.data("monkeyScroll")){return
}i.addClass("monkey_scroller");
var v=(I.id)?"monkey_scroll_wrapper_for_"+I.id:"";
var m=(f.debug)?"debug":"";
var B=i.wrap('<div class="monkey_scroll_hider '+m+'" />').parent();
var E=B.wrap('<div id="'+v+'" class="monkey_scroll_wrapper '+m+'" />').parent();
var p=E.prepend('<div class="monkey_scroll_bar '+m+'" />').children(".monkey_scroll_bar");
var j=p.prepend(['<div class="monkey_scroll_handle '+m+'">','	<div class="monkey_scroll_handle_inner '+m+'"></div>',"</div>"].join("")).children(".monkey_scroll_handle");
var x=j.find(".monkey_scroll_handle_inner");
var l=Math.max(p.width(),j.width());
var H=parseInt(p.css("margin-top"));
var w=parseInt(p.css("margin-bottom"));
j.css("left",-((j.width()-p.width())/2));
var n=function(){var K=Math.max(Math.min(d,i[0].clientHeight),i[0].clientHeight-(H+w));
return K
};
var y=function(){a=a||c();
return Math.max(l,a)
};
var r="";
var G=function(M){var L=f.bar_colors;
var K,O;
var N="";
if(!L){return
}for(O in L){if(L.hasOwnProperty(O)){if(O<=M&&(!K||O>K)){K=O
}}}if(K){N=L[K]
}if(N!==r){x.css("background",N);
r=N
}};
var A=function(){var Q=i.data("monkeyScroll");
if(!Q){J();
return null
}var P=i[0].clientHeight;
var N=i[0].scrollHeight;
var M=i[0].scrollTop;
var K=i.width();
var R=N-P;
var O=(R)?M/R:1;
var L=P/N;
Q.state_ob.st=M;
Q.state_ob.sh=N;
Q.state_ob.ch=P;
Q.state_ob.w=K;
Q.state_ob.ratio=O;
Q.state_ob.perc_visible=L;
return Q.state_ob
};
var F=function(){var N=A(i);
if(!N){return
}var M=N.perc_visible<1;
B.css("margin-right",M?y():"");
if(!M){if(i.css("overflow-y")!="scroll"){B.css("width","100%")
}p.hide();
return
}p.show();
var L=n();
p.css("height",L);
j.css("height",Math.max(d,L*N.perc_visible));
var K=L-j.height();
j.css("top",K*N.ratio);
if(TS.boot_data.feature_darken_scroll_handle){G(N.ratio)
}};
var t=function(){if(i.is(":hidden")){return
}var K=TS.utility.date.getTimeStamp();
B.css("width","");
B.css("margin-right","");
i.css("width","");
i.width(i.width());
B.width(i.innerWidth()-y());
if(f.bar_on_left){if("bar_on_left_y" in f){p.css("margin-left",f.bar_on_left_y)
}else{p.css("margin-left",(y()-p.width())/2)
}}else{p.css("margin-left",B.width()+((y()-p.width())/2))
}F();
TS.log(389,"update for "+i.attr("id")+" took "+(TS.utility.date.getTimeStamp()-K)+"ms")
};
i.data("monkeyScroll",{bar:p,handle:j,state_ob:{},updateFunc:g});
var C=function(K){if(i.data("disable-scroll")){return
}F()
};
var u=function(P){P.preventDefault();
var L=function(U){var T=j.height();
var S=(U-(T/2))/(p.height()-T);
var R=i[0].scrollHeight-i[0].clientHeight;
return R*S
};
var M=e(P.target);
var Q=P.pageY-M.offset().top;
if(M.hasClass("monkey_scroll_bar")){i.animate({scrollTop:L(Q)},200);
return
}var O=Q;
var K=function(R){var S=R.pageY-p.offset().top+(j.height()/2)-O;
i.scrollTop(L(S))
};
var N=function(){e("html").unbind("mousemove.monkeyScroll",K);
e("html").unbind("mouseup.monkeyScroll",N)
};
N();
e("html").bind("mousemove.monkeyScroll",K);
e("html").bind("mouseup.monkeyScroll",N)
};
p.bind("mousedown",u);
i.bind("scroll",C);
var z=function(){a=null;
i.css("width","");
g()
};
e(window).bind("resize.monkey",function(){TS.utility.throttle.method(z,"resize_monkey",150)
});
var k;
var D=function(){if(k){return
}k=true;
e("html").bind("mouseup.monkeyScrollOverflowfixer",q)
};
var q=function(){B.scrollLeft(0);
k=false;
e("html").unbind("mouseup.monkeyScrollOverflowfixer",arguments.callee)
};
B.bind("scroll",D);
t();
var h;
function g(L){if(i.data("disable-scroll")){return
}if(i.is(":hidden")){return
}var K=A();
if(!K){return
}if(L||!h||K.sh!=h.sh||K.ch!=h.ch||K.w!=h.w){t();
if(!h){h={}
}h.st=K.st;
h.sh=K.sh;
h.ch=K.ch;
h.w=K.w;
h.ratio=K.ratio;
h.perc_visible=K.perc_visible
}}var o;
if(f.update_on_interval){o=setInterval(g,200)
}var J=function(){e(window).unbind("resize.monkey");
e("html").unbind("mouseup.monkeyScrollOverflowfixer",q);
if(o){clearInterval(o)
}}
})
}})
})(jQuery);