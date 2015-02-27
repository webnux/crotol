/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
(function(f,a){var e={bind:!!(function(){}.bind),classList:"classList" in a.documentElement,rAF:!!(f.requestAnimationFrame||f.webkitRequestAnimationFrame||f.mozRequestAnimationFrame)};
f.requestAnimationFrame=f.requestAnimationFrame||f.webkitRequestAnimationFrame||f.mozRequestAnimationFrame;
function d(i){this.callback=i;
this.ticking=false
}d.prototype={constructor:d,update:function(){this.callback&&this.callback();
this.ticking=false
},requestTick:function(){if(!this.ticking){requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this)));
this.ticking=true
}},handleEvent:function(){this.requestTick()
}};
function g(i){return i&&typeof f!=="undefined"&&(i===f||i.nodeType)
}function h(k){if(arguments.length<=0){throw new Error("Missing arguments in extend function")
}var j=k||{},m,l;
for(l=1;
l<arguments.length;
l++){var n=arguments[l]||{};
for(m in n){if(typeof j[m]==="object"&&!g(j[m])){j[m]=h(j[m],n[m])
}else{j[m]=j[m]||n[m]
}}}return j
}function c(i){return i===Object(i)?i:{down:i,up:i}
}function b(j,i){i=h(i,b.options);
this.lastKnownScrollY=0;
this.elem=j;
this.debouncer=new d(this.update.bind(this));
this.tolerance=c(i.tolerance);
this.classes=i.classes;
this.offset=i.offset;
this.scroller=i.scroller;
this.initialised=false;
this.onPin=i.onPin;
this.onUnpin=i.onUnpin;
this.onTop=i.onTop;
this.onNotTop=i.onNotTop
}b.prototype={constructor:b,init:function(){if(!b.cutsTheMustard){return
}this.elem.classList.add(this.classes.initial);
setTimeout(this.attachEvent.bind(this),100);
return this
},destroy:function(){var i=this.classes;
this.initialised=false;
this.elem.classList.remove(i.unpinned,i.pinned,i.top,i.initial);
this.scroller.removeEventListener("scroll",this.debouncer,false)
},attachEvent:function(){if(!this.initialised){this.lastKnownScrollY=this.getScrollY();
this.initialised=true;
this.scroller.addEventListener("scroll",this.debouncer,false);
this.debouncer.handleEvent()
}},unpin:function(){var j=this.elem.classList,i=this.classes;
if(j.contains(i.pinned)||!j.contains(i.unpinned)){j.add(i.unpinned);
j.remove(i.pinned);
this.onUnpin&&this.onUnpin.call(this)
}},pin:function(){var j=this.elem.classList,i=this.classes;
if(j.contains(i.unpinned)){j.remove(i.unpinned);
j.add(i.pinned);
this.onPin&&this.onPin.call(this)
}},top:function(){var j=this.elem.classList,i=this.classes;
if(!j.contains(i.top)){j.add(i.top);
j.remove(i.notTop);
this.onTop&&this.onTop.call(this)
}},notTop:function(){var j=this.elem.classList,i=this.classes;
if(!j.contains(i.notTop)){j.add(i.notTop);
j.remove(i.top);
this.onNotTop&&this.onNotTop.call(this)
}},getScrollY:function(){return(this.scroller.pageYOffset!==undefined)?this.scroller.pageYOffset:(this.scroller.scrollTop!==undefined)?this.scroller.scrollTop:(a.documentElement||a.body.parentNode||a.body).scrollTop
},getViewportHeight:function(){return f.innerHeight||a.documentElement.clientHeight||a.body.clientHeight
},getDocumentHeight:function(){var i=a.body,j=a.documentElement;
return Math.max(i.scrollHeight,j.scrollHeight,i.offsetHeight,j.offsetHeight,i.clientHeight,j.clientHeight)
},getElementHeight:function(i){return Math.max(i.scrollHeight,i.offsetHeight,i.clientHeight)
},getScrollerHeight:function(){return(this.scroller===f||this.scroller===a.body)?this.getDocumentHeight():this.getElementHeight(this.scroller)
},isOutOfBounds:function(k){var j=k<0,i=k+this.getViewportHeight()>this.getScrollerHeight();
return j||i
},toleranceExceeded:function(j,i){return Math.abs(j-this.lastKnownScrollY)>=this.tolerance[i]
},shouldUnpin:function(l,i){var j=l>this.lastKnownScrollY,k=l>=this.offset;
return j&&k&&i
},shouldPin:function(l,j){var i=l<this.lastKnownScrollY,k=l<=this.offset;
return(i&&j)||k
},update:function(){var k=this.getScrollY(),j=k>this.lastKnownScrollY?"down":"up",i=this.toleranceExceeded(k,j);
if(this.isOutOfBounds(k)){return
}if(k<=this.offset){this.top()
}else{this.notTop()
}if(this.shouldUnpin(k,i)){this.unpin()
}else{if(this.shouldPin(k,i)){this.pin()
}}this.lastKnownScrollY=k
}};
b.options={tolerance:{up:0,down:0},offset:0,scroller:f,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}};
b.cutsTheMustard=typeof e!=="undefined"&&e.rAF&&e.bind&&e.classList;
f.Headroom=b
}(window,document));