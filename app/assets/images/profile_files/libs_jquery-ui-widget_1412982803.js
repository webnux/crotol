/*! jQuery UI - v1.11.1 - 2014-09-24
* http://jqueryui.com
* Includes: widget.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(c){
/*!
 * jQuery UI Widget 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
;
var d=0,a=Array.prototype.slice;
c.cleanData=(function(e){return function(f){var h,j,g;
for(g=0;
(j=f[g])!=null;
g++){try{h=c._data(j,"events");
if(h&&h.remove){c(j).triggerHandler("remove")
}}catch(k){}}e(f)
}
})(c.cleanData);
c.widget=function(e,f,m){var j,k,h,l,g={},i=e.split(".")[0];
e=e.split(".")[1];
j=i+"-"+e;
if(!m){m=f;
f=c.Widget
}c.expr[":"][j.toLowerCase()]=function(n){return !!c.data(n,j)
};
c[i]=c[i]||{};
k=c[i][e];
h=c[i][e]=function(n,o){if(!this._createWidget){return new h(n,o)
}if(arguments.length){this._createWidget(n,o)
}};
c.extend(h,k,{version:m.version,_proto:c.extend({},m),_childConstructors:[]});
l=new f();
l.options=c.widget.extend({},l.options);
c.each(m,function(o,n){if(!c.isFunction(n)){g[o]=n;
return
}g[o]=(function(){var p=function(){return f.prototype[o].apply(this,arguments)
},q=function(r){return f.prototype[o].apply(this,r)
};
return function(){var t=this._super,r=this._superApply,s;
this._super=p;
this._superApply=q;
s=n.apply(this,arguments);
this._super=t;
this._superApply=r;
return s
}
})()
});
h.prototype=c.widget.extend(l,{widgetEventPrefix:k?(l.widgetEventPrefix||e):e},g,{constructor:h,namespace:i,widgetName:e,widgetFullName:j});
if(k){c.each(k._childConstructors,function(o,p){var n=p.prototype;
c.widget(n.namespace+"."+n.widgetName,h,p._proto)
});
delete k._childConstructors
}else{f._childConstructors.push(h)
}c.widget.bridge(e,h);
return h
};
c.widget.extend=function(j){var f=a.call(arguments,1),i=0,e=f.length,g,h;
for(;
i<e;
i++){for(g in f[i]){h=f[i][g];
if(f[i].hasOwnProperty(g)&&h!==undefined){if(c.isPlainObject(h)){j[g]=c.isPlainObject(j[g])?c.widget.extend({},j[g],h):c.widget.extend({},h)
}else{j[g]=h
}}}}return j
};
c.widget.bridge=function(f,e){var g=e.prototype.widgetFullName||f;
c.fn[f]=function(j){var h=typeof j==="string",i=a.call(arguments,1),k=this;
j=!h&&i.length?c.widget.extend.apply(null,[j].concat(i)):j;
if(h){this.each(function(){var m,l=c.data(this,g);
if(j==="instance"){k=l;
return false
}if(!l){return c.error("cannot call methods on "+f+" prior to initialization; attempted to call method '"+j+"'")
}if(!c.isFunction(l[j])||j.charAt(0)==="_"){return c.error("no such method '"+j+"' for "+f+" widget instance")
}m=l[j].apply(l,i);
if(m!==l&&m!==undefined){k=m&&m.jquery?k.pushStack(m.get()):m;
return false
}})
}else{this.each(function(){var l=c.data(this,g);
if(l){l.option(j||{});
if(l._init){l._init()
}}else{c.data(this,g,new e(j,this))
}})
}return k
}
};
c.Widget=function(){};
c.Widget._childConstructors=[];
c.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(e,f){f=c(f||this.defaultElement||this)[0];
this.element=c(f);
this.uuid=d++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=c.widget.extend({},this.options,this._getCreateOptions(),e);
this.bindings=c();
this.hoverable=c();
this.focusable=c();
if(f!==this){c.data(f,this.widgetFullName,this);
this._on(true,this.element,{remove:function(g){if(g.target===f){this.destroy()
}}});
this.document=c(f.style?f.ownerDocument:f.document||f);
this.window=c(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:c.noop,_getCreateEventData:c.noop,_create:c.noop,_init:c.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(c.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:c.noop,widget:function(){return this.element
},option:function(h,j){var e=h,k,g,f;
if(arguments.length===0){return c.widget.extend({},this.options)
}if(typeof h==="string"){e={};
k=h.split(".");
h=k.shift();
if(k.length){g=e[h]=c.widget.extend({},this.options[h]);
for(f=0;
f<k.length-1;
f++){g[k[f]]=g[k[f]]||{};
g=g[k[f]]
}h=k.pop();
if(arguments.length===1){return g[h]===undefined?null:g[h]
}g[h]=j
}else{if(arguments.length===1){return this.options[h]===undefined?null:this.options[h]
}e[h]=j
}}this._setOptions(e);
return this
},_setOptions:function(e){var f;
for(f in e){this._setOption(f,e[f])
}return this
},_setOption:function(e,f){this.options[e]=f;
if(e==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled",!!f);
if(f){this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}}return this
},enable:function(){return this._setOptions({disabled:false})
},disable:function(){return this._setOptions({disabled:true})
},_on:function(h,g,f){var i,e=this;
if(typeof h!=="boolean"){f=g;
g=h;
h=false
}if(!f){f=g;
g=this.element;
i=this.widget()
}else{g=i=c(g);
this.bindings=this.bindings.add(g)
}c.each(f,function(o,n){function l(){if(!h&&(e.options.disabled===true||c(this).hasClass("ui-state-disabled"))){return
}return(typeof n==="string"?e[n]:n).apply(e,arguments)
}if(typeof n!=="string"){l.guid=n.guid=n.guid||l.guid||c.guid++
}var m=o.match(/^([\w:-]*)\s*(.*)$/),k=m[1]+e.eventNamespace,j=m[2];
if(j){i.delegate(j,k,l)
}else{g.bind(k,l)
}})
},_off:function(f,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
f.unbind(e).undelegate(e)
},_delay:function(h,g){function f(){return(typeof h==="string"?e[h]:h).apply(e,arguments)
}var e=this;
return setTimeout(f,g||0)
},_hoverable:function(e){this.hoverable=this.hoverable.add(e);
this._on(e,{mouseenter:function(f){c(f.currentTarget).addClass("ui-state-hover")
},mouseleave:function(f){c(f.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(e){this.focusable=this.focusable.add(e);
this._on(e,{focusin:function(f){c(f.currentTarget).addClass("ui-state-focus")
},focusout:function(f){c(f.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(e,f,g){var j,i,h=this.options[e];
g=g||{};
f=c.Event(f);
f.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase();
f.target=this.element[0];
i=f.originalEvent;
if(i){for(j in i){if(!(j in f)){f[j]=i[j]
}}}this.element.trigger(f,g);
return !(c.isFunction(h)&&h.apply(this.element[0],[f].concat(g))===false||f.isDefaultPrevented())
}};
c.each({show:"fadeIn",hide:"fadeOut"},function(f,e){c.Widget.prototype["_"+f]=function(i,h,k){if(typeof h==="string"){h={effect:h}
}var j,g=!h?f:h===true||typeof h==="number"?e:h.effect||e;
h=h||{};
if(typeof h==="number"){h={duration:h}
}j=!c.isEmptyObject(h);
h.complete=k;
if(h.delay){i.delay(h.delay)
}if(j&&c.effects&&c.effects.effect[g]){i[f](h)
}else{if(g!==f&&i[g]){i[g](h.duration,h.easing,k)
}else{i.queue(function(l){c(this)[f]();
if(k){k.call(i[0])
}l()
})
}}}
});
var b=c.widget
}));