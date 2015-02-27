(function(a){a.fn.setCursorPosition=function(b){this.each(function(d,e){if(e.setSelectionRange){e.setSelectionRange(b,b)
}else{if(e.createTextRange){var c=e.createTextRange();
c.collapse(true);
c.moveEnd("character",b);
c.moveStart("character",b);
c.select()
}}});
return this
};
a.fn.getCursorPosition=function(){var c=this.get(0);
if(!c){return
}if("selectionStart" in c){return c.selectionStart
}else{if(document.selection){c.focus();
var d=document.selection.createRange();
var b=document.selection.createRange().text.length;
d.moveStart("character",-c.value.length);
return d.text.length-b
}}};
a.fn.getCursorRange=function(){var b=this.get(0);
if(!b){return
}if("selectionStart" in b){return{s:b.selectionStart,l:b.selectionEnd-b.selectionStart}
}else{if(document.selection){}}};
jQuery.fn.highlight=function(e,c,d,b){b=(b==undefined)?2000:b;
a(this).each(function(){var f=a(this);
var g=false;
if(f.data("highlighted")){return
}f.data("highlighted",true);
if(f.css("position")=="static"){f.css("position","relative");
g=true
}a('<div class="'+c+'" />').width(f.outerWidth()).height(f.outerHeight()).css({position:"absolute",left:0,top:0,"background-color":"#FFF3B8",opacity:".6","z-index":"9999999","pointer-events":"none"}).appendTo(f).delay(b).fadeOut(e).queue(function(){a(this).remove();
f.data("highlighted",false);
if(g){f.css("position","static")
}if(d){d()
}})
})
},jQuery.fn.highlightText=function(e,c,d,b){b=(b==undefined)?2000:b;
a(this).each(function(){var f=a(this);
var g=a(this).css("background-color");
if(f.data("highlighted")){return
}f.data("highlighted",true);
f.css({"background-color":"#FFF3B8",transition:"background-color 0.25s"}).delay(b).queue(function(){f.css({"background-color":g});
f.data("highlighted",false);
if(d){d()
}})
})
},jQuery.fn.hideWithRememberedScrollTop=function(){a(this).each(function(){var b=a(this);
if(b.hasClass("hidden")){return
}b.data("remembered_scrolltop",b.scrollTop());
var c=b.find(":scrollable()");
c.each(function(d,e){a(e).data("remembered_scrolltop",a(e).scrollTop())
});
b.data("remembered_scrollers",c);
b.addClass("hidden")
})
};
jQuery.fn.unhideWithRememberedScrollTop=function(){a(this).each(function(){var c=a(this);
if(!c.hasClass("hidden")){return
}c.removeClass("hidden");
var b=c.data("remembered_scrolltop");
if(b!=undefined){c.scrollTop(b)
}var d=c.data("remembered_scrollers");
if(d){d.each(function(e,f){b=a(f).data("remembered_scrolltop");
if(b!=undefined){a(f).scrollTop(b)
}})
}})
}
})(jQuery);
(function(a){if(!a){return
}a.fn.headroom=function(b){return this.each(function(){var e=a(this),d=e.data("headroom"),c=typeof b==="object"&&b;
c=a.extend(true,{},Headroom.options,c);
if(!d){d=new Headroom(this,c);
d.init();
e.data("headroom",d)
}if(typeof b==="string"){d[b]()
}})
};
a("[data-headroom]").each(function(){var b=a(this);
b.headroom(b.data())
})
}(window.Zepto||window.jQuery));
/*!
 * jQuery TextChange Plugin
 * http://www.zurb.com/playground/jquery-text-change-custom-event
 *
 * Copyright 2010, ZURB
 * Released under the MIT License
 */
(function(a){a.event.special.textchange={setup:function(c,b){a(this).data("textchange_lastvalue",this.contentEditable==="true"?a(this).html():a(this).val());
a(this).bind("keyup.textchange",a.event.special.textchange.handler);
a(this).bind("cut.textchange paste.textchange input.textchange",a.event.special.textchange.delayedHandler)
},teardown:function(b){a(this).unbind(".textchange")
},handler:function(b){a.event.special.textchange.triggerIfChanged(a(this))
},delayedHandler:function(c){var b=a(this);
if(!a.event.special.textchange.timer){a.event.special.textchange.timer=setTimeout(function(){a.event.special.textchange.timer=null;
a.event.special.textchange.triggerIfChanged(b)
},250)
}},triggerIfChanged:function(b){var c=b[0].contentEditable==="true"?b.html():b.val();
if(c!==b.data("textchange_lastvalue")){b.trigger("textchange",[b.data("textchange_lastvalue")]);
b.data("textchange_lastvalue",c)
}},timer:null};
a.event.special.hastext={setup:function(c,b){a(this).bind("textchange",a.event.special.hastext.handler)
},teardown:function(b){a(this).unbind("textchange",a.event.special.hastext.handler)
},handler:function(c,b){if((b==="")&&b!==a(this).val()){a(this).trigger("hastext")
}}};
a.event.special.notext={setup:function(c,b){a(this).bind("textchange",a.event.special.notext.handler)
},teardown:function(b){a(this).unbind("textchange",a.event.special.notext.handler)
},handler:function(c,b){if(a(this).val()===""&&a(this).val()!==b){a(this).trigger("notext")
}}}
})(jQuery);
(function(a){a.fn.autogrow=function(b){return this.filter("textarea").each(function(){var d=this;
var f=a(d);
var e=f.height();
var c=f.hasClass("autogrow-short")?0:parseInt(f.css("lineHeight"))||0;
var h=a("<div></div>").css({position:"absolute",top:-10000,left:-10000,width:f.width(),fontSize:f.css("fontSize"),fontFamily:f.css("fontFamily"),fontWeight:f.css("fontWeight"),lineHeight:f.css("lineHeight"),resize:"none","word-wrap":"break-word"}).appendTo(document.body);
var g=function(j){var i=function(s,v){for(var t=0,u="";
t<v;
t++){u+=s
}return u
};
var k=d.value.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&/g,"&amp;").replace(/\n$/,"<br/>&nbsp;").replace(/\n/g,"<br/>").replace(/ {2,}/g,function(r){return i("&nbsp;",r.length-1)+" "
});
if(j&&j.data&&j.data.event==="keydown"&&j.keyCode===13){k+="<br />"
}var p=f.height();
h.css("width",f.width());
h.html(k+(c===0?"...":""));
f.height(Math.max(h.height()+c,e));
var o=f.getCursorPosition();
var q=f.val().length;
if(q-o<10){if(f.length&&document.activeElement==f[0]){var m=f.closest(".flex_content_scroller");
var n=f.closest(".modal");
if(m.length){var l=f;
if(f.data("el-id-to-keep-in-view")){l=a("#"+f.data("el-id-to-keep-in-view"));
if(!l.length){l=f
}}if(!TS.client.ui.isElInView(l,-50,m.dimensions_rect())){l.scrollintoview({offset:"bottom",px_offset:-50,duration:200})
}if(f.height()!=p){if(m.data("monkeyScroll")){m.data("monkeyScroll").updateFunc()
}}}else{if(n.length==-1){f.scrollintoview({offset:"bottom",px_offset:-50,duration:200})
}}}}};
f.change(g).keyup(g).keydown({event:"keydown"},g);
a(window).resize(g);
g()
})
}
})(jQuery);
(function(a){a.event.special.destroyed={remove:function(b){if(b.handler){b.handler()
}}}
})(jQuery);