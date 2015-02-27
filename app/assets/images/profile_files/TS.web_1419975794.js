(function(){TS.registerModule("web",{login_sig:new signals.Signal(),ds_login_sig:new signals.Signal(),email_regex:new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?","i"),onStart:function(){if(TS.ds){TS.ds.reconnect_requested_sig.add(g)
}TS.prefs.messages_theme_changed_sig.add(TS.setThemeClasses,TS);
TS.web.autoToggleSection();
$('[data-toggle="tooltip"]').tooltip({animation:true})
},gogogo:function(){TS.logLoad("TS.web.gogogo");
if(TS.boot_data.login_data){c(true,TS.boot_data.login_data);
if(TS.web.space){h()
}}else{TS.info("running without a user")
}$("html").bind("mousedown",function(){TS.model.ui.is_mouse_down=true
});
$("html").bind("dragend",function(){TS.model.ui.is_mouse_down=false
});
$("html").bind("mouseup",function(){TS.model.ui.is_mouse_down=false
})
},onMsgsDivClick:function(m){var k=$(m.target);
var j=k.closest(".message").data("ts");
var l=k.closest(".msg_actions");
if(j){j=j.toString()
}if(k.hasClass("member")){if(k.data("member-id")){}else{TS.warn("hmmm, no data-member-id?")
}}if(k.hasClass("internal_member_link")){}if(k.hasClass("internal_channel_link")){}if(l.length==1){TS.info("click on child of .msg_actions");
var n=l.data("msg-ts");
var i=TS.shared.getActiveModelOb();
if(k.hasClass("msg_cog")){m.preventDefault();
if(i){TS.menu.startWithMessageActions(m,n,i.msgs)
}else{TS.warn("Do not have any messages")
}}else{if(k.hasClass("msg_select_cb")){TS.msg_edit.batchDeleteSelectionChanged(k,m.shiftKey)
}}return
}TS.stars.checkForStarClick(m);
TS.inline_imgs.checkForInlineImgClick(m);
TS.inline_videos.checkForInlineVideoClick(m);
TS.inline_audios.checkForInlineAudioClick(m);
TS.inline_others.checkForInlineOtherClick(m);
TS.inline_attachments.checkForInlineAttachmentClick(m)
},toggleSection:function(l){var k=$("#"+l);
var i=k.css("border-bottom");
k.css("border-bottom","1px solid transparent");
k.find(".accordion_subsection").slideToggle(100,function(){k.css("border-bottom",i);
if(k.hasClass("plastic_row")&&!k.hasClass("open")){k.removeAttr("style")
}});
k.toggleClass("open");
var j=k.find(".accordion_expand");
if(j.text()=="expand"){j.text("close");
k.find(".ladda-button").each(function(){Ladda.bind($(this)[0])
})
}else{j.text("expand")
}},openSection:function(j){var i=$("#"+j);
if(!i.hasClass("open")){TS.web.toggleSection(j)
}},closeSection:function(j){var i=$("#"+j);
if(i.hasClass("open")){TS.web.toggleSection(j)
}},autoToggleSection:function(){var k=TS.utility.htmlEntities(window.location.hash);
if(k){if(k.charAt(0)==="#"){k=k.substring(1)
}var i=$('a[name="'+k+'"][data-accordion]');
var j=i.data("accordion");
if(j){TS.web.toggleSection(j)
}}},scrollToElWithHeaderOffset:function(i){var j=$(i);
j.scrollintoview({px_offset:$("header").height()+16})
},startButtonSpinner:function(j){TS.web.resetButtonSpinner(j);
var i=a(j);
if(!i.isLoading()){i.start()
}},stopButtonSpinner:function(j,m){var i=a(j);
if(i.isLoading()){i.stop();
if(m){var k=$(j).find(".ladda-label").text();
$(j).data("original_text",k);
$(j).removeClass("btn-primary").addClass("btn-success").find(".ladda-label").html('<i class="fa fa-check small_right_margin"></i>Saved')
}}},resetButtonSpinner:function(j){var i=a(j);
if(i.isLoading()){return
}var k=$(j).data("original_text");
if(k){$(j).find(".ladda-label").text(k);
$(j).removeData("original_text");
$(j).removeClass("btn-success").addClass("btn-primary")
}}});
var f=0;
var e=0;
var g=function(){if(TS.model.ds_asleep){TS.error("NOT reconnecting, we are asleep");
return
}h()
};
var h=function(){TS.info("_loginDS");
e=TS.utility.date.getTimeStamp();
var j={agent:"webapp_"+TS.boot_data.svn_rev,login_ms:e};
if(TS.boot_data.space_login_data){TS.ms.logConnectionFlow("login_with_boot_data");
var i={data:TS.boot_data.space_login_data};
delete TS.boot_data.space_login_data;
d(true,i,j);
return
}TS.ds.logConnectionFlow("_loginDS");
j.file=boot_data.file.id;
clearTimeout(f);
f=setTimeout(function(){clearTimeout(f);
TS.ds.logConnectionFlow("last_login_timeout");
TS.ds.onFailure()
},10000);
TS.model.rtd_start_throttler++;
TS.warn("incremented TS.model.rtd_start_throttler:"+TS.model.rtd_start_throttler);
TS.api.callImmediately("files.documents.connect",j,d)
};
var d=function(j,k,i){clearTimeout(f);
if(e!=i.login_ms){TS.warn("ignoring this rsp, as we have issued another login call since this one (_ds_last_login_ms != args.login_ms)");
return
}if(!j){if(k&&(k.error=="account_inactive"||k.error=="team_disabled"||k.error=="invalid_auth")){alert("_onLoginDS data.error: "+k.error);
return
}TS.ds.logConnectionFlow("on_login_failure");
TS.info("API files.documents.connect rsp was no good: "+(k&&k.error?"data.error:"+k.error:"unspecified error"));
TS.ds.onFailure();
return
}if(!k.data){TS.error("No data.data?");
return
}if(!k.data.ws){alert("serguei, no ws url in response to a documents.connectUser call, calling api again now.");
TS.error("No ws url?");
TS.ds.logConnectionFlow("on_login_missing_ws");
TS.ds.onFailure();
return
}TS.web.space.login_data=k.data;
TS.ds.logConnectionFlow("on_login");
if(!TS.model.ds_logged_in_once){TS.logLoad("_onLoginDS first time");
TS.reportLoad()
}if(!TS.model.ds_logged_in_once){if(window.load_start_ms){TS.warn((new Date()-window.load_start_ms)+"ms from first html to ds_login_sig.dispatch()")
}TS.web.ds_login_sig.dispatch()
}TS.ds.connect();
TS.model.ds_logged_in_once=true
};
var c=function(i,j){TS.info("got login data");
if(!j.self){TS.error("No self?");
return
}if(!j.team){TS.error("No team?");
return
}TS.info("setting up model");
TS.setUpModel(j);
TS.setThemeClasses();
if(window.load_start_ms){TS.warn((new Date()-window.load_start_ms)+"ms from first html to login_sig.dispatch()")
}TS.web.login_sig.dispatch();
$("body").addClass("no_attachment_max_width");
if(TS.model.is_safari_desktop){$("html").addClass("is_safari_desktop")
}b()
};
var a=function(j){var i=$(j).data("ladda");
if(!i){i=Ladda.create(j);
$(j).data("ladda",i)
}return i
};
var b=function(){$(".emoji_replace_on_load").each(function(){var i=$(this).html();
i=TS.utility.emojiGraphicReplace(i);
$(this).html(i)
})
}
})();