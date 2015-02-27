/*!
 * jQuery scrollintoview() plugin and :scrollable selector filter
 *
 * Version 1.8 (14 Jul 2011)
 * Requires jQuery 1.4 or newer
 *
 * Copyright (c) 2011 Robert Koritnik
 * Licensed under the terms of the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */
(function(g){var d={vertical:{x:false,y:true},horizontal:{x:true,y:false},both:{x:true,y:true},x:{x:true,y:false},y:{x:false,y:true}};
var c={duration:"fast",direction:"both",offset:null,px_offset:0};
var f=/^(?:html)$/i;
var h=function(l,k){k=k||(document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(l,null):l.currentStyle);
var j=document.defaultView&&document.defaultView.getComputedStyle?true:false;
var i={top:(parseFloat(j?k.borderTopWidth:g.css(l,"borderTopWidth"))||0),left:(parseFloat(j?k.borderLeftWidth:g.css(l,"borderLeftWidth"))||0),bottom:(parseFloat(j?k.borderBottomWidth:g.css(l,"borderBottomWidth"))||0),right:(parseFloat(j?k.borderRightWidth:g.css(l,"borderRightWidth"))||0)};
return{top:i.top,left:i.left,bottom:i.bottom,right:i.right,vertical:i.top+i.bottom,horizontal:i.left+i.right}
};
var e=function(i){var k=g(window);
var j=f.test(i[0].nodeName);
return{border:j?{top:0,left:0,bottom:0,right:0}:h(i[0]),scroll:{top:(j?k:i).scrollTop(),left:(j?k:i).scrollLeft()},scrollbar:{right:j?0:i.innerWidth()-i[0].clientWidth,bottom:j?0:i.innerHeight()-i[0].clientHeight},rect:a(i)}
};
var a=function(i){var j=f.test(i[0].nodeName);
if(!i.___dimensions_rect){i.___dimensions_rect={}
}var l=i.___dimensions_rect;
if(j){l.top=0,l.left=0,l.bottom=i[0].clientHeight,l.right=i[0].clientWidth
}else{var k=i[0].getBoundingClientRect();
l.top=k.top,l.left=k.left,l.bottom=k.bottom,l.right=k.right
}l.height=l.bottom-l.top;
l.width=l.right-l.left;
return l
};
g.fn.extend({dimensions:function(){var i=this.eq(0);
return e(i)
}});
g.fn.extend({dimensions_rect:function(){var i=this.eq(0);
return a(i)
}});
g.fn.extend({scrollintoview:function(r){var k=window.log_scrollintoview;
r=g.extend({},c,r);
r.direction=d[typeof(r.direction)==="string"&&r.direction.toLowerCase()]||d.both;
var n="";
if(r.direction.x===true){n="horizontal"
}if(r.direction.y===true){n=n?"both":"vertical"
}var i=this.eq(0);
var m=i.closest(":scrollable("+n+")");
var o=r.px_offset;
if(m.length>0){m=m.eq(0);
var l={e:e(i),s:e(m)};
var q={top:l.e.rect.top-(l.s.rect.top+l.s.border.top),bottom:l.s.rect.bottom-l.s.border.bottom-l.s.scrollbar.bottom-l.e.rect.bottom,left:l.e.rect.left-(l.s.rect.left+l.s.border.left),right:l.s.rect.right-l.s.border.right-l.s.scrollbar.right-l.e.rect.right};
if(k&&TS){TS.info("scroller id:"+m.attr("id")+" scrollTop():"+m.scrollTop());
TS.info("dim: "+JSON.stringify(l,null,"  "));
TS.info("rel: "+JSON.stringify(q))
}var j={};
if(r.direction.y===true){var p=(r.offset=="center"||r.offset=="center_vertical")?((l.s.rect.height)-(l.e.rect.height))/2:0;
if(q.top<0){if(k&&TS){TS.warn("case rel.top < 0")
}if(r.offset=="bottom"){p=l.s.rect.height-l.e.rect.height
}j.scrollTop=l.s.scroll.top+q.top-p-o
}else{if(q.top>0&&q.bottom<0){if(k&&TS){TS.warn("case rel.top > 0 && rel.bottom < 0")
}if(r.offset=="top"){p=l.s.rect.height-l.e.rect.height
}j.scrollTop=l.s.scroll.top+Math.min(q.top,-q.bottom)+p-o
}else{if(k&&TS){TS.warn("case WTF")
}}}}if(r.direction.x===true){if(q.left<0){j.scrollLeft=l.s.scroll.left+q.left
}else{if(q.left>0&&q.right<0){j.scrollLeft=l.s.scroll.left+Math.min(q.left,-q.right)
}}}if(!g.isEmptyObject(j)){if(f.test(m[0].nodeName)){m=g("html,body")
}if(k&&TS){TS.info("dest:"+j.scrollTop)
}m.animate(j,{progress:function(s,t,u){if(k&&TS){TS.info(100*t+"% "+m.scrollTop())
}},duration:r.duration}).eq(0).queue(function(s){g.isFunction(r.complete)&&r.complete.call(m[0]);
s()
})
}else{g.isFunction(r.complete)&&r.complete.call(m[0])
}}return this
}});
var b={auto:true,scroll:true,visible:false,hidden:false};
g.extend(g.expr[":"],{scrollable:function(l,j,o,i){var n=d[typeof(o[3])==="string"&&o[3].toLowerCase()]||d.both;
var m=(document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(l,null):l.currentStyle);
var p={x:b[m.overflowX.toLowerCase()]||false,y:b[m.overflowY.toLowerCase()]||false,isRoot:f.test(l.nodeName)};
if(!p.x&&!p.y&&!p.isRoot){return false
}var k={height:{scroll:l.scrollHeight,client:l.clientHeight},width:{scroll:l.scrollWidth,client:l.clientWidth},scrollableX:function(){return(p.x||p.isRoot)&&this.width.scroll>this.width.client
},scrollableY:function(){return(p.y||p.isRoot)&&this.height.scroll>this.height.client
}};
return n.y&&k.scrollableY()||n.x&&k.scrollableX()
}})
})(jQuery);