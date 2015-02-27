/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
;
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=4f55bc1256b03eaa3770)
 * Config saved to config.json and https://gist.github.com/4f55bc1256b03eaa3770
 */
;
if(typeof jQuery==="undefined"){throw new Error("Bootstrap's JavaScript requires jQuery")
}!function(c){var b=function(e,d){this.options=d;
this.$element=c(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",c.proxy(this.hide,this));
this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)
};
b.prototype={constructor:b,toggle:function(){return this[!this.isShown?"show":"hide"]()
},show:function(){var d=this,f=c.Event("show");
this.$element.trigger(f);
if(this.isShown||f.isDefaultPrevented()){return
}this.isShown=true;
this.escape();
this.backdrop(function(){var e=c.support.transition&&d.$element.hasClass("fade");
if(!d.$element.parent().length){d.$element.appendTo(document.body)
}d.$element.show();
if(e){d.$element[0].offsetWidth
}d.$element.addClass("in").attr("aria-hidden",false);
d.enforceFocus();
e?d.$element.one(c.support.transition.end,function(){d.$element.focus().trigger("shown")
}):d.$element.focus().trigger("shown")
})
},hide:function(f){f&&f.preventDefault();
var d=this;
f=c.Event("hide");
this.$element.trigger(f);
if(!this.isShown||f.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
c(document).off("focusin.modal");
this.$element.removeClass("in").attr("aria-hidden",true);
c.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()
},enforceFocus:function(){var d=this;
c(document).on("focusin.modal",function(f){if(d.$element[0]!==f.target&&!d.$element.has(f.target).length){d.$element.focus()
}})
},escape:function(){var d=this;
if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(f){f.which==27&&d.hide()
})
}else{if(!this.isShown){this.$element.off("keyup.dismiss.modal")
}}},hideWithTransition:function(){var d=this,e=setTimeout(function(){d.$element.off(c.support.transition.end);
d.hideModal()
},500);
this.$element.one(c.support.transition.end,function(){clearTimeout(e);
d.hideModal()
})
},hideModal:function(){var d=this;
this.$element.hide();
this.backdrop(function(){d.removeBackdrop();
d.$element.trigger("hidden")
})
},removeBackdrop:function(){this.$backdrop.remove();
this.$backdrop=null
},backdrop:function(g){var f=this,e=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var d=c.support.transition&&e;
this.$backdrop=c('<div class="modal-backdrop '+e+'" />');
if(c("#page_contents").length){this.$backdrop.appendTo("#page_contents")
}else{this.$backdrop.appendTo("body")
}this.$backdrop.click(this.options.backdrop=="static"?c.proxy(this.$element[0].focus,this.$element[0]):c.proxy(this.hide,this));
if(d){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
if(!g){return
}d?this.$backdrop.one(c.support.transition.end,g):g()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
c.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(c.support.transition.end,g):g()
}else{if(g){g()
}}}}};
var a=c.fn.modal;
c.fn.modal=function(d){return this.each(function(){var g=c(this),f=g.data("modal"),e=c.extend({},c.fn.modal.defaults,g.data(),typeof d=="object"&&d);
if(!f){g.data("modal",(f=new b(this,e)))
}if(typeof d=="string"){f[d]()
}else{if(e.show){f.show()
}}})
};
c.fn.modal.defaults={backdrop:true,keyboard:true,show:true};
c.fn.modal.Constructor=b;
c.fn.modal.noConflict=function(){c.fn.modal=a;
return this
};
c(document).on("click.modal.data-api",'[data-toggle="modal"]',function(i){var h=c(this),f=h.attr("href"),d=c(h.attr("data-target")||(f&&f.replace(/.*(?=#[^\s]+$)/,""))),g=d.data("modal")?"toggle":c.extend({remote:!/#/.test(f)&&f},d.data(),h.data());
i.preventDefault();
d.modal(g).one("hide",function(){h.focus()
})
})
}(window.jQuery);
+function(c){var b=function(e,d){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;
this.init("tooltip",e,d)
};
b.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};
b.prototype.init=function(k,h,f){this.enabled=true;
this.type=k;
this.$element=c(h);
this.options=this.getOptions(f);
var j=this.options.trigger.split(" ");
for(var g=j.length;
g--;
){var e=j[g];
if(e=="click"){this.$element.on("click."+this.type,this.options.selector,c.proxy(this.toggle,this))
}else{if(e!="manual"){var l=e=="hover"?"mouseenter":"focusin";
var d=e=="hover"?"mouseleave":"focusout";
this.$element.on(l+"."+this.type,this.options.selector,c.proxy(this.enter,this));
this.$element.on(d+"."+this.type,this.options.selector,c.proxy(this.leave,this))
}}}this.options.selector?(this._options=c.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()
};
b.prototype.getDefaults=function(){return b.DEFAULTS
};
b.prototype.getOptions=function(d){d=c.extend({},this.getDefaults(),this.$element.data(),d);
if(d.delay&&typeof d.delay=="number"){d.delay={show:d.delay,hide:d.delay}
}return d
};
b.prototype.getDelegateOptions=function(){var d={};
var e=this.getDefaults();
this._options&&c.each(this._options,function(f,g){if(e[f]!=g){d[f]=g
}});
return d
};
b.prototype.enter=function(e){var d=e instanceof this.constructor?e:c(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
clearTimeout(d.timeout);
d.hoverState="in";
if(!d.options.delay||!d.options.delay.show){return d.show()
}d.timeout=setTimeout(function(){if(d.hoverState=="in"){d.show()
}},d.options.delay.show)
};
b.prototype.leave=function(e){var d=e instanceof this.constructor?e:c(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
clearTimeout(d.timeout);
d.hoverState="out";
if(!d.options.delay||!d.options.delay.hide){return d.hide()
}d.timeout=setTimeout(function(){if(d.hoverState=="out"){d.hide()
}},d.options.delay.hide)
};
b.prototype.show=function(){var p=c.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(p);
if(p.isDefaultPrevented()){return
}var o=this;
var k=this.tip();
this.setContent();
if(this.options.animation){k.addClass("fade")
}var j=typeof this.options.placement=="function"?this.options.placement.call(this,k[0],this.$element[0]):this.options.placement;
var t=/\s?auto?\s?/i;
var u=t.test(j);
if(u){j=j.replace(t,"")||"top"
}k.detach().css({top:0,left:0,display:"block"}).addClass(j);
this.options.container?k.appendTo(this.options.container):k.insertAfter(this.$element);
var q=this.getPosition();
var d=k[0].offsetWidth;
var m=k[0].offsetHeight;
if(u){var i=this.$element.parent();
var h=j;
var r=document.documentElement.scrollTop||document.body.scrollTop;
var s=this.options.container=="body"?window.innerWidth:i.outerWidth();
var n=this.options.container=="body"?window.innerHeight:i.outerHeight();
var l=this.options.container=="body"?0:i.offset().left;
j=j=="bottom"&&q.top+q.height+m-r>n?"top":j=="top"&&q.top-r-m<0?"bottom":j=="right"&&q.right+d>s?"left":j=="left"&&q.left-d<l?"right":j;
k.removeClass(h).addClass(j)
}var g=this.getCalculatedOffset(j,q,d,m);
this.applyPlacement(g,j);
this.hoverState=null;
var f=function(){o.$element.trigger("shown.bs."+o.type)
};
c.support.transition&&this.$tip.hasClass("fade")?k.one(c.support.transition.end,f).emulateTransitionEnd(150):f()
}};
b.prototype.applyPlacement=function(i,j){var g;
var k=this.tip();
var f=k[0].offsetWidth;
var n=k[0].offsetHeight;
var e=parseInt(k.css("margin-top"),10);
var h=parseInt(k.css("margin-left"),10);
if(isNaN(e)){e=0
}if(isNaN(h)){h=0
}i.top=i.top+e;
i.left=i.left+h;
c.offset.setOffset(k[0],c.extend({using:function(o){k.css({top:Math.round(o.top),left:Math.round(o.left)})
}},i),0);
k.addClass("in");
var d=k[0].offsetWidth;
var l=k[0].offsetHeight;
if(j=="top"&&l!=n){g=true;
i.top=i.top+n-l
}if(/bottom|top/.test(j)){var m=0;
if(i.left<0){m=i.left*-2;
i.left=0;
k.offset(i);
d=k[0].offsetWidth;
l=k[0].offsetHeight
}this.replaceArrow(m-f+d,d,"left")
}else{this.replaceArrow(l-n,l,"top")
}if(g){k.offset(i)
}};
b.prototype.replaceArrow=function(f,e,d){this.arrow().css(d,f?(50*(1-f/e)+"%"):"")
};
b.prototype.setContent=function(){var e=this.tip();
var d=this.getTitle();
e.find(".tooltip-inner")[this.options.html?"html":"text"](d).html(e.find(".tooltip-inner").html().replace(/\r/g,"<br>"));
e.removeClass("fade in top bottom left right")
};
b.prototype.hide=function(){var f=this;
var h=this.tip();
var g=c.Event("hide.bs."+this.type);
function d(){if(f.hoverState!="in"){h.detach()
}f.$element.trigger("hidden.bs."+f.type)
}this.$element.trigger(g);
if(g.isDefaultPrevented()){return
}h.removeClass("in");
c.support.transition&&this.$tip.hasClass("fade")?h.one(c.support.transition.end,d).emulateTransitionEnd(150):d();
this.hoverState=null;
return this
};
b.prototype.fixTitle=function(){var d=this.$element;
if(d.attr("title")||typeof(d.attr("data-original-title"))!="string"){d.attr("data-original-title",d.attr("title")||"").attr("title","")
}};
b.prototype.hasContent=function(){return this.getTitle()
};
b.prototype.getPosition=function(){var d=this.$element[0];
return c.extend({},(typeof d.getBoundingClientRect=="function")?d.getBoundingClientRect():{width:d.offsetWidth,height:d.offsetHeight},this.$element.offset())
};
b.prototype.getCalculatedOffset=function(d,g,e,f){return d=="bottom"?{top:g.top+g.height,left:g.left+g.width/2-e/2}:d=="top"?{top:g.top-f,left:g.left+g.width/2-e/2}:d=="left"?{top:g.top+g.height/2-f/2,left:g.left-e}:{top:g.top+g.height/2-f/2,left:g.left+g.width}
};
b.prototype.getTitle=function(){var f;
var d=this.$element;
var e=this.options;
f=d.attr("data-original-title")||(typeof e.title=="function"?e.title.call(d[0]):e.title);
return f
};
b.prototype.tip=function(){return this.$tip=this.$tip||c(this.options.template)
};
b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
};
b.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();
this.$element=null;
this.options=null
}};
b.prototype.enable=function(){this.enabled=true
};
b.prototype.disable=function(){this.enabled=false
};
b.prototype.toggleEnabled=function(){this.enabled=!this.enabled
};
b.prototype.toggle=function(f){var d=f?c(f.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;
d.tip().hasClass("in")?d.leave(d):d.enter(d)
};
b.prototype.destroy=function(){clearTimeout(this.timeout);
this.hide().$element.off("."+this.type).removeData("bs."+this.type)
};
var a=c.fn.tooltip;
c.fn.tooltip=function(d){return this.each(function(){var g=c(this);
var f=g.data("bs.tooltip");
var e=typeof d=="object"&&d;
if(!f&&d=="destroy"){return
}if(!f){g.data("bs.tooltip",(f=new b(this,e)))
}if(typeof d=="string"){f[d]()
}})
};
c.fn.tooltip.Constructor=b;
c.fn.tooltip.noConflict=function(){c.fn.tooltip=a;
return this
}
}(jQuery);
+function(b){function a(){var e=document.createElement("bootstrap");
var d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var c in d){if(e.style[c]!==undefined){return{end:d[c]}
}}return false
}b.fn.emulateTransitionEnd=function(e){var d=false,c=this;
b(this).one(b.support.transition.end,function(){d=true
});
var f=function(){if(!d){b(c).trigger(b.support.transition.end)
}};
setTimeout(f,e);
return this
};
b(function(){b.support.transition=a()
})
}(jQuery);