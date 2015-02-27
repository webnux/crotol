(function(){var c=function(){var f={};
var j;
var d=window.location.search.substring(1);
j=d.split("&");
for(var g=0;
g<j.length;
g++){var k=j[g].indexOf("=");
if(k!=-1){var e=j[g].substring(0,k);
var h=j[g].substring(k+1);
f[e]=unescape(h)
}}return f
}();
if(c.flash=="1"||c.flash_debug=="1"||c.flash_debug_fail=="1"){window.WEB_SOCKET_FORCE_FLASH=true
}if(c.flash_debug=="1"){window.WEB_SOCKET_DEBUG_FLASH=true
}var b=function(){window.WEB_SOCKET_USING_FLASH=true;
var d;
if(window.WEB_SOCKET_LOGGER){d=WEB_SOCKET_LOGGER
}else{if(window.console&&window.console.log&&window.console.error){d=window.console
}else{d={log:function(){},error:function(){},warn:function(){},info:function(){}}
}}if(window.WEB_SOCKET_FORCE_FLASH){d.warn("FORCED TO USE FLASH SOCKET")
}else{d.warn("USING FLASH SOCKET FOR LACK OF WS SUPPORT")
}if(swfobject.getFlashPlayerVersion().major<10||c.flash_debug_fail=="1"){d.error("Flash Player >= 10.0.0 is required.");
window.WEB_SOCKET_USING_FLASH_BUT_NO_FLASH=true;
if(!window.WEB_SOCKET_FORCE_FLASH){return
}}if(location.protocol=="file:"){d.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://...")
}window.WebSocket=function(g,h,f,j,i){var e=this;
e.__id=WebSocket.__nextId++;
WebSocket.__instances[e.__id]=e;
e.readyState=WebSocket.CONNECTING;
e.bufferedAmount=0;
e.__events={};
if(!h){h=[]
}else{if(typeof h=="string"){h=[h]
}}e.__createTask=setTimeout(function(){WebSocket.__addTask(function(){e.__createTask=null;
WebSocket.__flash.create(e.__id,g,h,f||null,j||0,i||null)
})
},0)
};
WebSocket.prototype.send=function(f){if(this.readyState==WebSocket.CONNECTING){throw"INVALID_STATE_ERR: Web Socket connection has not been established"
}var e=WebSocket.__flash.send(this.__id,encodeURIComponent(f));
if(e<0){return true
}else{this.bufferedAmount+=e;
return false
}};
WebSocket.prototype.close=function(){if(this.__createTask){clearTimeout(this.__createTask);
this.__createTask=null;
this.readyState=WebSocket.CLOSED;
return
}if(this.readyState==WebSocket.CLOSED||this.readyState==WebSocket.CLOSING){return
}this.readyState=WebSocket.CLOSING;
WebSocket.__flash.close(this.__id)
};
WebSocket.prototype.addEventListener=function(f,g,e){if(!(f in this.__events)){this.__events[f]=[]
}this.__events[f].push(g)
};
WebSocket.prototype.removeEventListener=function(h,j,e){if(!(h in this.__events)){return
}var g=this.__events[h];
for(var f=g.length-1;
f>=0;
--f){if(g[f]===j){g.splice(f,1);
break
}}};
WebSocket.prototype.dispatchEvent=function(h){var f=this.__events[h.type]||[];
for(var e=0;
e<f.length;
++e){f[e](h)
}var g=this["on"+h.type];
if(g){g.apply(this,[h])
}};
WebSocket.prototype.__handleEvent=function(g){if("readyState" in g){this.readyState=g.readyState
}if("protocol" in g){this.protocol=g.protocol
}var e;
if(g.type=="open"||g.type=="error"){e=this.__createSimpleEvent(g.type)
}else{if(g.type=="close"){e=this.__createSimpleEvent("close");
e.wasClean=g.wasClean?true:false;
e.code=g.code;
e.reason=g.reason
}else{if(g.type=="message"){var f=decodeURIComponent(g.message);
e=this.__createMessageEvent("message",f)
}else{throw"unknown event type: "+g.type
}}}this.dispatchEvent(e)
};
WebSocket.prototype.__createSimpleEvent=function(e){if(document.createEvent&&window.Event){var f=document.createEvent("Event");
f.initEvent(e,false,false);
return f
}else{return{type:e,bubbles:false,cancelable:false}
}};
WebSocket.prototype.__createMessageEvent=function(e,g){if(document.createEvent&&window.MessageEvent&&!window.opera){var f=document.createEvent("MessageEvent");
f.initMessageEvent("message",false,false,g,null,null,window,null);
return f
}else{return{type:e,data:g,bubbles:false,cancelable:false}
}};
WebSocket.CONNECTING=0;
WebSocket.OPEN=1;
WebSocket.CLOSING=2;
WebSocket.CLOSED=3;
WebSocket.__isFlashImplementation=true;
WebSocket.__initialized=false;
WebSocket.__flash=null;
WebSocket.__instances={};
WebSocket.__tasks=[];
WebSocket.__nextId=0;
WebSocket.loadFlashPolicyFile=function(e){WebSocket.__addTask(function(){WebSocket.__flash.loadManualPolicyFile(e)
})
};
WebSocket.__initialize=function(){if(window.WEB_SOCKET_USING_FLASH_BUT_NO_FLASH){return
}if(WebSocket.__initialized){return
}WebSocket.__initialized=true;
if(WebSocket.__swfLocation){window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation
}if(!window.WEB_SOCKET_SWF_LOCATION){d.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
return
}if(!window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR&&!WEB_SOCKET_SWF_LOCATION.match(/(^|\/)WebSocketMainInsecure\.swf(\?.*)?$/)&&WEB_SOCKET_SWF_LOCATION.match(/^\w+:\/\/([^\/]+)/)){var g=RegExp.$1;
if(location.host!=g){d.error("[WebSocket] You must host HTML and WebSocketMain.swf in the same host ('"+location.host+"' != '"+g+"'). See also 'How to host HTML file and SWF file in different domains' section in README.md. If you use WebSocketMainInsecure.swf, you can suppress this message by WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;")
}}var e=document.createElement("div");
e.id="webSocketContainer";
e.style.position="absolute";
if(WebSocket.__isFlashLite()){e.style.left="0px";
e.style.top="0px"
}else{e.style.left="-100px";
e.style.top="-100px"
}var f=document.createElement("div");
f.id="webSocketFlash";
e.appendChild(f);
document.body.appendChild(e);
swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION,"webSocketFlash","1","1","10.0.0",null,null,{hasPriority:true,swliveconnect:true,allowScriptAccess:"always"},null,function(h){if(!h.success){d.error("[WebSocket] swfobject.embedSWF failed")
}})
};
WebSocket.__onFlashInitialized=function(){setTimeout(function(){WebSocket.__flash=document.getElementById("webSocketFlash");
WebSocket.__flash.setCallerUrl(location.href);
WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG_FLASH);
for(var e=0;
e<WebSocket.__tasks.length;
++e){WebSocket.__tasks[e]()
}WebSocket.__tasks=[]
},0)
};
WebSocket.__onFlashEvent=function(){setTimeout(function(){try{var g=WebSocket.__flash.receiveEvents();
for(var f=0;
f<g.length;
++f){WebSocket.__instances[g[f].webSocketId].__handleEvent(g[f])
}}catch(h){d.error(h)
}},0);
return true
};
WebSocket.__log=function(e){d.log(decodeURIComponent(e))
};
WebSocket.__error=function(e){d.error(decodeURIComponent(e))
};
WebSocket.__addTask=function(e){if(WebSocket.__flash){e()
}else{WebSocket.__tasks.push(e)
}};
WebSocket.__isFlashLite=function(){if(!window.navigator||!window.navigator.mimeTypes){return false
}var e=window.navigator.mimeTypes["application/x-shockwave-flash"];
if(!e||!e.enabledPlugin||!e.enabledPlugin.filename){return false
}return e.enabledPlugin.filename.match(/flashlite/i)?true:false
};
if(!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION){swfobject.addDomLoadEvent(function(){WebSocket.__initialize()
})
}a()
};
var a=function(){b=function(){if(console&&console.log){console.log("useFlashForWebSockets called, but already using flash, so ignoring")
}}
};
window.fallBackToFlashWebSockets=function(){window.WEB_SOCKET_FORCE_FLASH=true;
b()
};
if(window.WEB_SOCKET_FORCE_FLASH){}else{if(window.WebSocket){return
}else{if(window.MozWebSocket){window.WebSocket=MozWebSocket;
return
}}}b()
})();