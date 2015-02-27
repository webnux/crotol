/*!
 * jQuery imagesLoaded plugin v2.1.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */
(function(a,b){var c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
a.fn.imagesLoaded=function(l){var i=this,n=a.isFunction(a.Deferred)?a.Deferred():0,m=a.isFunction(n.notify),f=i.find("img").add(i.filter("img")),g=[],k=[],h=[];
if(a.isPlainObject(l)){a.each(l,function(o,p){if(o==="callback"){l=p
}else{if(n){n[o](p)
}}})
}function j(){var o=a(k),p=a(h);
if(n){if(h.length){n.reject(f,o,p)
}else{n.resolve(f)
}}if(a.isFunction(l)){l.call(i,f,o,p)
}}function e(o){d(o.target,o.type==="error")
}function d(o,p){if(o.src===c||a.inArray(o,g)!==-1){return
}g.push(o);
if(p){h.push(o)
}else{k.push(o)
}a.data(o,"imagesLoaded",{isBroken:p,src:o.src});
if(m){n.notifyWith(a(o),[p,f,a(k),a(h)])
}if(f.length===g.length){setTimeout(j);
f.unbind(".imagesLoaded",e)
}}if(!f.length){j()
}else{f.bind("load.imagesLoaded error.imagesLoaded",e).each(function(o,q){var r=q.src;
var p=a.data(q,"imagesLoaded");
if(p&&p.src===r){d(q,p.isBroken);
return
}if(q.complete&&q.naturalWidth!==b){d(q,q.naturalWidth===0||q.naturalHeight===0);
return
}if(q.readyState||q.complete){q.src=c;
q.src=r
}})
}return n?n.promise(i):i
}
})(jQuery);