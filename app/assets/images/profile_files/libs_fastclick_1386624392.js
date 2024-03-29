function FastClick(b){var c,a=this;
this.trackingClick=false;
this.trackingClickStart=0;
this.targetElement=null;
this.touchStartX=0;
this.touchStartY=0;
this.lastTouchIdentifier=0;
this.touchBoundary=10;
this.layer=b;
if(!b||!b.nodeType){throw new TypeError("Layer must be a document node")
}this.onClick=function(){return FastClick.prototype.onClick.apply(a,arguments)
};
this.onMouse=function(){return FastClick.prototype.onMouse.apply(a,arguments)
};
this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(a,arguments)
};
this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(a,arguments)
};
this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(a,arguments)
};
this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(a,arguments)
};
if(FastClick.notNeeded(b)){return
}if(this.deviceIsAndroid){b.addEventListener("mouseover",this.onMouse,true);
b.addEventListener("mousedown",this.onMouse,true);
b.addEventListener("mouseup",this.onMouse,true)
}b.addEventListener("click",this.onClick,true);
b.addEventListener("touchstart",this.onTouchStart,false);
b.addEventListener("touchmove",this.onTouchMove,false);
b.addEventListener("touchend",this.onTouchEnd,false);
b.addEventListener("touchcancel",this.onTouchCancel,false);
if(!Event.prototype.stopImmediatePropagation){b.removeEventListener=function(e,g,d){var f=Node.prototype.removeEventListener;
if(e==="click"){f.call(b,e,g.hijacked||g,d)
}else{f.call(b,e,g,d)
}};
b.addEventListener=function(f,g,e){var d=Node.prototype.addEventListener;
if(f==="click"){d.call(b,f,g.hijacked||(g.hijacked=function(h){if(!h.propagationStopped){g(h)
}}),e)
}else{d.call(b,f,g,e)
}}
}if(typeof b.onclick==="function"){c=b.onclick;
b.addEventListener("click",function(d){c(d)
},false);
b.onclick=null
}}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;
FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);
FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&(/OS 4_\d(_\d)?/).test(navigator.userAgent);
FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&(/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);
FastClick.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled){return true
}break;
case"input":if((this.deviceIsIOS&&a.type==="file")||a.disabled){return true
}break;
case"label":case"video":return true
}return(/\bneedsclick\b/).test(a.className)
};
FastClick.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":return true;
case"select":return !this.deviceIsAndroid;
case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false
}return !a.disabled&&!a.readOnly;
default:return(/\bneedsfocus\b/).test(a.className)
}};
FastClick.prototype.sendClick=function(b,c){var a,d;
if(document.activeElement&&document.activeElement!==b){document.activeElement.blur()
}d=c.changedTouches[0];
a=document.createEvent("MouseEvents");
a.initMouseEvent(this.determineEventType(b),true,true,window,1,d.screenX,d.screenY,d.clientX,d.clientY,false,false,false,false,0,null);
a.forwardedTouchEvent=true;
b.dispatchEvent(a)
};
FastClick.prototype.determineEventType=function(a){if(this.deviceIsAndroid&&a.tagName.toLowerCase()==="select"){return"mousedown"
}return"click"
};
FastClick.prototype.focus=function(a){var b;
if(this.deviceIsIOS&&a.setSelectionRange&&a.type.indexOf("date")!==0&&a.type!=="time"){b=a.value.length;
a.setSelectionRange(b,b)
}else{a.focus()
}};
FastClick.prototype.updateScrollParent=function(b){var c,a;
c=b.fastClickScrollParent;
if(!c||!c.contains(b)){a=b;
do{if(a.scrollHeight>a.offsetHeight){c=a;
b.fastClickScrollParent=a;
break
}a=a.parentElement
}while(a)
}if(c){c.fastClickLastScrollTop=c.scrollTop
}};
FastClick.prototype.getTargetElementFromEventTarget=function(a){if(a.nodeType===Node.TEXT_NODE){return a.parentNode
}return a
};
FastClick.prototype.onTouchStart=function(c){var a,d,b;
if(c.targetTouches.length>1){return true
}a=this.getTargetElementFromEventTarget(c.target);
d=c.targetTouches[0];
if(this.deviceIsIOS){b=window.getSelection();
if(b.rangeCount&&!b.isCollapsed){return true
}if(!this.deviceIsIOS4){if(d.identifier===this.lastTouchIdentifier){c.preventDefault();
return false
}this.lastTouchIdentifier=d.identifier;
this.updateScrollParent(a)
}}this.trackingClick=true;
this.trackingClickStart=c.timeStamp;
this.targetElement=a;
this.touchStartX=d.pageX;
this.touchStartY=d.pageY;
if((c.timeStamp-this.lastClickTime)<200){c.preventDefault()
}return true
};
FastClick.prototype.touchHasMoved=function(a){var c=a.changedTouches[0],b=this.touchBoundary;
if(Math.abs(c.pageX-this.touchStartX)>b||Math.abs(c.pageY-this.touchStartY)>b){return true
}return false
};
FastClick.prototype.onTouchMove=function(a){if(!this.trackingClick){return true
}if(this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a)){this.trackingClick=false;
this.targetElement=null
}return true
};
FastClick.prototype.findControl=function(a){if(a.control!==undefined){return a.control
}if(a.htmlFor){return document.getElementById(a.htmlFor)
}return a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
};
FastClick.prototype.onTouchEnd=function(c){var e,d,b,g,f,a=this.targetElement;
if(!this.trackingClick){return true
}if((c.timeStamp-this.lastClickTime)<200){this.cancelNextClick=true;
return true
}this.cancelNextClick=false;
this.lastClickTime=c.timeStamp;
d=this.trackingClickStart;
this.trackingClick=false;
this.trackingClickStart=0;
if(this.deviceIsIOSWithBadTarget){f=c.changedTouches[0];
a=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||a;
a.fastClickScrollParent=this.targetElement.fastClickScrollParent
}b=a.tagName.toLowerCase();
if(b==="label"){e=this.findControl(a);
if(e){this.focus(a);
if(this.deviceIsAndroid){return false
}a=e
}}else{if(this.needsFocus(a)){if((c.timeStamp-d)>100||(this.deviceIsIOS&&window.top!==window&&b==="input")){this.targetElement=null;
return false
}this.focus(a);
if(!this.deviceIsIOS4||b!=="select"){this.targetElement=null;
c.preventDefault()
}return false
}}if(this.deviceIsIOS&&!this.deviceIsIOS4){g=a.fastClickScrollParent;
if(g&&g.fastClickLastScrollTop!==g.scrollTop){return true
}}if(!this.needsClick(a)){c.preventDefault();
this.sendClick(a,c)
}return false
};
FastClick.prototype.onTouchCancel=function(){this.trackingClick=false;
this.targetElement=null
};
FastClick.prototype.onMouse=function(a){if(!this.targetElement){return true
}if(a.forwardedTouchEvent){return true
}if(!a.cancelable){return true
}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(a.stopImmediatePropagation){a.stopImmediatePropagation()
}else{a.propagationStopped=true
}a.stopPropagation();
a.preventDefault();
return false
}return true
};
FastClick.prototype.onClick=function(a){var b;
if(this.trackingClick){this.targetElement=null;
this.trackingClick=false;
return true
}if(a.target.type==="submit"&&a.detail===0){return true
}b=this.onMouse(a);
if(!b){this.targetElement=null
}return b
};
FastClick.prototype.destroy=function(){var a=this.layer;
if(this.deviceIsAndroid){a.removeEventListener("mouseover",this.onMouse,true);
a.removeEventListener("mousedown",this.onMouse,true);
a.removeEventListener("mouseup",this.onMouse,true)
}a.removeEventListener("click",this.onClick,true);
a.removeEventListener("touchstart",this.onTouchStart,false);
a.removeEventListener("touchmove",this.onTouchMove,false);
a.removeEventListener("touchend",this.onTouchEnd,false);
a.removeEventListener("touchcancel",this.onTouchCancel,false)
};
FastClick.notNeeded=function(b){var a;
var c;
if(typeof window.ontouchstart==="undefined"){return true
}c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];
if(c){if(FastClick.prototype.deviceIsAndroid){a=document.querySelector("meta[name=viewport]");
if(a){if(a.content.indexOf("user-scalable=no")!==-1){return true
}if(c>31&&window.innerWidth<=window.screen.width){return true
}}}else{return true
}}if(b.style.msTouchAction==="none"){return true
}return false
};
FastClick.attach=function(a){return new FastClick(a)
};
if(typeof define!=="undefined"&&define.amd){define(function(){return FastClick
})
}else{if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;
module.exports.FastClick=FastClick
}else{window.FastClick=FastClick
}};