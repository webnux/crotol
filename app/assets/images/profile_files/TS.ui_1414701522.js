(function(){TS.registerModule("ui",{window_focus_changed_sig:new signals.Signal(),window_unloaded_sig:new signals.Signal(),onStart:function(){$(window).bind("focus",TS.ui.onWindowFocus);
$(window).bind("blur",TS.ui.onWindowBlur);
$("html").bind("mousedown",function(b){TS.ui.onWindowFocus({target:window})
});
var a=(document.hasFocus&&document.hasFocus()&&window.macgap_is_in_active_space)?true:false;
if(a){TS.ui.onWindowFocus({target:window})
}else{TS.ui.onWindowBlur({target:window})
}},setUpWindowUnloadHandlers:function(){if(window.macgap){window.onbeforeunload=TS.ui.onWindowUnload
}else{if(typeof window.addEventListener!="undefined"){window.addEventListener("beforeunload",TS.ui.onWindowUnload,false)
}else{if(typeof document.addEventListener!="undefined"){document.addEventListener("beforeunload",TS.ui.onWindowUnload,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onbeforeunload",TS.ui.onWindowUnload)
}else{if(typeof window.onbeforeunload=="function"){window.onbeforeunload=function(){TS.ui.onWindowUnload();
return false
}
}else{window.onbeforeunload=TS.ui.onWindowUnload
}}}}}},onWindowUnload:function(){if(TS.client){TS.client.markLastReadsWithAPI()
}TS.model.window_unloading=true;
TS.ui.window_unloaded_sig.dispatch();
return
},maybeTickleMS:function(){if(!TS.client){return
}TS.client.ui.maybeTickleMS()
},handleDraghoverstartFromWinSSB:function(){$(window).trigger("draghoverstart",[null,true])
},handleDraghoverendFromWinSSB:function(){$(window).trigger("draghoverend")
},handleDropFromWinSSB:function(a){TS.info("handleDropFromWinSSB called files:"+a);
$("body").removeClass("drop-target");
if(TS.client.ui.checkForEditing()){return
}if(!a||!a.length){TS.warn("handleDropFromWinSSB called with no files");
return
}TS.client.ui.validateFiles(a,TS.model.shift_key_pressed)
},onMacSpaceChanged:function(a){if(!a){TS.ui.onWindowBlur({target:window})
}else{if(document.hasFocus()){TS.ui.onWindowFocus({target:window})
}}},onWindowFocus:function(a){if(a.target!==window){return
}if(TS.model.ui.is_window_focused){return
}TS.model.shift_key_pressed=false;
TS.model.insert_key_pressed=false;
TS.model.ui.is_window_focused=true;
if(TS.view){TS.view.updateTitleBarColor()
}TS.ui.window_focus_changed_sig.dispatch(true)
},onWindowBlur:function(a){if(a.target!==window){return
}if(!TS.model.ui.is_window_focused){return
}TS.model.shift_key_pressed=false;
TS.model.insert_key_pressed=false;
TS.model.ui.is_window_focused=false;
TS.ui.window_focus_changed_sig.dispatch(false)
}})
})();