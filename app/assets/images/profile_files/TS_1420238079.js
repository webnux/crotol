window.TS={session_ms:new Date().getTime(),modules:{},boot_data:{},qs_args:{},pri:0,dom_ready:false,module_exec_order_index:1,requireds:{view:{clearMessageInput:true,focusMessageInput:true,onMsgsDivClick:true}},logLoad:function(a){TS.log(88,a);
if(!window.logLoad){return
}window.logLoad(a)
},reportLoad:function(b,c){if(!window.load_log||!window.load_log.length){return
}if(!TS.model||!TS.model.team||TS.model.team.domain!="tinyspeck"){return
}TS.dir(88,window.load_log);
if(!TS.client||!TS.ims){return
}c=c||"short";
b=b||window.load_log.length-1;
var d=window.load_log[b]["t"];
var f="total time: "+d+"s (at index "+b+")";
var a;
if(c=="complete"){f+="\n"+JSON.stringify(window.load_log,null,"\t");
f+="\n<javascript:TS.reportLoad("+b+", 'snippet')|share this with eric as a snippet>"
}else{if(c=="short"){f+=" <javascript:TS.reportLoad("+b+", 'complete')|click for details>"
}else{if(c=="snippet"){f+="\n"+navigator.userAgent+"\nsvn_rev: "+TS.boot_data.svn_rev+"\n";
if($&&$.jStorage){f+="$.jStorage.storageAvailable(): "+$.jStorage.storageAvailable()+"\n$.jStorage.storageSize(): "+$.jStorage.storageSize()+"\n$.jStorage.currentBackend(): "+$.jStorage.currentBackend()+"\n";
if(TS.storage){f+="TS.storage.version: "+TS.storage.version+"\nTS.storage._get('storage_version'): "+TS.storage._get("storage_version")+"\nTS.storage.msgs_version: "+TS.storage.msgs_version+"\nTS.storage._get('storage_msgs_version'): "+TS.storage._get("storage_msgs_version")+"\n"
}if(TS.model){f+="TS.model.initial_ui_state_str: "+TS.model.initial_ui_state_str+"\n"
}}if(TS.storage&&TS.storage.storageAvailable){f+="TS.storage.storageAvailable: "+TS.storage.storageAvailable+"\nTS.storage.storageSize(): "+TS.storage.storageSize()+"\n";
f+="TS.storage.version: "+TS.storage.version+"\nTS.storage._get('storage_version'): "+TS.storage._get("storage_version")+"\nTS.storage.msgs_version: "+TS.storage.msgs_version+"\nTS.storage._get('storage_msgs_version'): "+TS.storage._get("storage_msgs_version")+"\n";
if(TS.model){f+="TS.model.initial_ui_state_str: "+TS.model.initial_ui_state_str+"\n"
}}f+=JSON.stringify(window.load_log,null,"\t");
a=TS.ims.getImByUsername("eric");
TS.files.upload(f,null,null,null,"load times "+TS.utility.date.toDate(TS.utility.date.makeTsStamp()),"javascript",(a)?[a.id]:null,"");
return
}else{alert("type:"+c);
return
}}}var e={type:"message",subtype:"bot_message",username:"loadBot",icons:{emoji:":rocket:"},is_ephemeral:true,ts:TS.utility.date.makeTsStamp(),text:f,no_notifications:true};
a=TS.ims.getImByMemberId("USLACKBOT");
if(a){TS.ims.addMsg(a.id,e)
}},delayed_module_loads:{},registerModule:function(d,b,c){TS.last_registered_module=b;
if(TS.dom_ready){TS.error('module "'+d+'" must be registered on before dom ready');
return
}if(TS.modules[d]){TS.error('module "'+d+'" already exists');
return
}var g;
var f;
if(d.indexOf(".")!=-1){var h=d.split(".");
if(h.length>2){TS.error('module "'+d+'" cannot be registered, as we only support a depth of one sub module right now');
return
}g=h[0];
f=h[1];
if(!f){TS.error('module "'+d+'" cannot be registered because of a bad name');
return
}if(!TS.modules[g]){if(c){TS.error('module "'+d+'" cannot be registered after delay; "'+g+'" is not registered')
}else{TS.delayed_module_loads[d]=b
}return
}if(f in TS.modules[g]){TS.error('module "'+d+'" cannot be registered; "'+f+'" already exists on "'+g+'"');
return
}}if(TS.requireds[d]){var e=true;
for(var a in TS.requireds[d]){if(!(a in b)){TS.warn('all mudules registering as "'+d+'" must implement "'+a+'"');
e=false
}}if(!e){TS.error('module "'+d+'" does not implement all requireds');
return
}}if(g){TS[g][f]=b
}else{TS[d]=b
}b._name=d;
TS.modules[d]=b;
if(!b._exec_order){b._exec_order=TS.module_exec_order_index++
}},makeLogDate:function(){if(window.TSMakeLogDate){return TSMakeLogDate()
}return"(TSMakeLogDate not loaded) "
},log:function(c,a){if(!window.console){return
}var b=(TS.pri)?TS.pri.toString().split(","):["0"];
if(c!="0"&&b.indexOf(c.toString())==-1&&b.indexOf("all")==-1){return
}if(typeof a=="object"){console.log(a)
}else{console.log(TS.makeLogDate()+c+" "+a)
}},info:function(a){if(!window.console||!console.info){return
}console.info(TS.makeLogDate()+a)
},warn:function(a){if(!window.console||!console.warn){return
}console.warn(TS.makeLogDate()+a)
},dir:function(b,a){if(!window.console||!console.dir){return
}if(TS.utility&&b){if(!TS.utility.inArray(TS.pri.toString().split(","),b)){return
}}try{var d=TS.utility.clone(a);
console.dir(d)
}catch(c){TS.warn("could not dir ob:"+a+" err:"+c)
}},error:function(a){if(!window.console||!console.error){return
}console.error(TS.makeLogDate()+a)
},logError:function(a,b){if(!window.badtoys||!window.badtoys.log){if(window.console&&console.error){console.error(TS.makeLogDate()+"no window.badtoys.log trying to log e:"+a+" desc:"+b)
}return
}badtoys.log(a,b);
if(window.console&&console.error){console.error(TS.makeLogDate()+"logging e:"+a+" desc:"+b)
}},track:function(a){if(window.track){TS.info("tracking: "+a);
window.track(a)
}else{TS.warn('could not track "'+a+'" because there is no window.track')
}},boot:function(a){TS.logLoad("TS.boot");
TS.boot_data=a;
TS.setQsArgs(location);
TS.pri=(TS.qs_args.pri)?TS.qs_args.pri+",0":TS.pri;
TS.info("booted! pri:"+TS.pri);
$(document).ready(TS.onDOMReady)
},setQsArgs:function(h){var c={};
var f;
var a=h.search.substring(1);
f=a.split("&");
for(var d=0;
d<f.length;
d++){var g=f[d].indexOf("=");
if(g!=-1){var b=f[d].substring(0,g);
var e=f[d].substring(g+1);
c[b]=unescape(e)
}}TS.qs_args=c
},onDOMReady:function(){TS.info("onDOMReady");
if(TS.client&&window.WEB_SOCKET_USING_FLASH_BUT_NO_FLASH){TS.info("WEB_SOCKET_USING_FLASH_BUT_NO_FLASH");
$("#loading_animation").addClass("hidden");
$("#no_ws_and_bad_flash").css("display","inline");
$("#loading_nag").css("display","none");
return
}if(TS.client){TS.info("calling didStartLoading");
TSSSB.call("didStartLoading",30000)
}else{TS.info("no TS.client on page:"+document.location.href)
}TS.logLoad("TS.onDOMReady");
TS.info("soundManager.setup called");
soundManager.setup({url:"/img/sm/",debugMode:false,preferFlash:false,onready:function(){TS.info("soundManager.onready called")
}});
var b=new Date();
var a=(TS.boot_data.svn_rev=="dev")?b.getTime():TS.boot_data.svn_rev;
var d="/templates.php?cb="+a+TS.appendQSArgsToUrl();
var c=new XMLHttpRequest();
c.onreadystatechange=function(){if(c.readyState!=4){return
}if(c.status!=200){return
}c.onreadystatechange=null;
var e=(new Date().getTime()-b);
TS.logLoad(d+" is loaded (took "+e+"ms), doing $('body').append(req.responseText)");
$("body").append(c.responseText);
TS.onTemplatesLoaded()
};
TS.logLoad("loading "+d);
c.open("GET",d,1);
c.send()
},async_js_loaded:0,onTemplatesLoaded:function(){TS.logLoad("TS.onTemplatesLoaded");
if(TS.client){TSSSB.call("didStartLoading",30000)
}var a=window.async_css_urls||[];
var c=true;
function d(f){var e=a[f]+"?cb="+window.location.hostname;
TS.logLoad("TS loading: "+e);
var h=new Date().getTime();
var g=new XMLHttpRequest();
g.onreadystatechange=function(){if(g.readyState==4){if(g.status==200){g.onreadystatechange=null;
TS.async_css_loaded++;
TS.logLoad("TS loaded ("+(new Date().getTime()-h)+"ms) "+e);
$("head").append('<style type="text/css">'+g.responseText+"<style>");
if(TS.async_css_loaded==a.length){TS.onAsyncCSSLoaded()
}else{if(TS.async_css_loaded>a.length){alert("bad! TS.async_css_loaded > A.length")
}else{if(!c){d(f+1)
}}}}else{}}};
g.open("GET",e,1);
g.send()
}if(a.length){if(c){for(var b=0;
b<a.length;
b++){d(b)
}}else{d(0)
}}else{TS.onAsyncCSSLoaded()
}},async_css_loaded:0,onAsyncCSSLoaded:function(){TS.logLoad("TS.onAsyncCSSLoaded");
if(TS.client){TSSSB.call("didStartLoading",30000)
}var a=window.async_js_urls||[];
var c=true;
function d(f){var e=a[f];
TS.logLoad("TS loading: "+e);
var g=new Date().getTime();
$.ajax({url:e,dataType:"script",cache:true,success:function(i,j,h){TS.async_js_loaded++;
TS.logLoad("TS loaded "+TS.async_js_loaded+" of "+a.length+" ("+(new Date().getTime()-g)+"ms) "+e);
TS.last_registered_module._exec_order=f;
if(TS.async_js_loaded==a.length){TS.onAsyncJSLoaded()
}else{if(TS.async_js_loaded>a.length){alert("bad! TS.async_js_loaded > A.length")
}else{if(!c){d(f+1)
}}}}})
}if(a.length){if(c){for(var b=0;
b<a.length;
b++){d(b)
}}else{d(0)
}}else{TS.onAsyncJSLoaded()
}},onAsyncJSLoaded:function(){TS.logLoad("TS.onAsyncJSLoaded, calling onStarts()");
if(window.load_start_ms){TS.warn((new Date()-window.load_start_ms)+"ms from first html to calling onStarts()")
}emoji.include_title=true;
emoji.allow_native=false;
for(var a in TS.delayed_module_loads){TS.registerModule(a,TS.delayed_module_loads[a],true)
}TS.storage.onStart();
TS.storage.onStart=function(){};
if(TS.boot_data.app=="client"){TS.client.onStart();
TS.client.onStart=function(){}
}else{if(TS.boot_data.app=="web"||TS.boot_data.app=="mobile"){TS.web.onStart();
TS.web.onStart=function(){}
}else{if(TS.boot_data.app=="test"){return
}else{TS.error("WTF app? "+TS.boot_data.app);
return
}}}TS.callModuleMethod("onStart",true);
TS.dom_ready=true;
if(TS.client){TSSSB.call("didStartLoading",60000)
}TS.setUpCmds(function(){TS.setUpEmoji(function(){if(TS.boot_data.app=="client"){TS.client.gogogo()
}else{if(TS.boot_data.app=="web"||TS.boot_data.app=="mobile"){TS.web.gogogo()
}}if(window.macgap){window.addEventListener("sleep",function(){TS.info("sleep event!");
if(TS.client){TS.client.sleep()
}if(TS.web&&TS.web.space){TS.web.space.sleep()
}},false);
window.addEventListener("wake",function(){TS.info("wake event!");
if(TS.client){TS.client.wake()
}if(TS.web&&TS.web.space){TS.web.space.wake()
}},false)
}TS.ui.setUpWindowUnloadHandlers()
})
})
},ingestCustoms:function(a,h){var e=false;
TS.model.all_custom_emoji.length=0;
TS.model.emoji_complex_customs={};
var g;
var b;
var c;
var f=false;
function d(l){var n;
for(var j in emoji.data){n=emoji.data[j][3];
for(var m=0;
m<n.length;
m++){if(l==n[m]){if(f){delete emoji.data[j]
}return false
}}}return true
}for(c in a){if(typeof a[c]=="object"){TS.model.emoji_complex_customs[c]=a[c];
emoji.data[c]=[null,null,null,[c],null,null,null,a[c]["apple"]];
emoji.map.colons[c]=c;
TS.model.all_custom_emoji.push(c);
if(c=="simple_smile"){emoji.emoticons_data[":)"]="simple_smile";
emoji.emoticons_data["(:"]="simple_smile";
emoji.emoticons_data[":-)"]="simple_smile"
}}else{if(a[c].indexOf("alias:")===0){continue
}if(!d(c)){if(f){TS.error("allowing custom emoji :"+c+": to overwrite")
}else{TS.error("can't ingest custom emoji :"+c+": because that already exists");
continue
}}emoji.data[c]=[null,null,null,[c],null,null,null,a[c]];
emoji.map.colons[c]=c;
TS.model.all_custom_emoji.push(c)
}}for(c in a){if(typeof a[c]=="object"||a[c].indexOf("alias:")!==0){continue
}if(!d(c)){if(f){TS.error("allowing custom emoji :"+c+": to overwrite")
}else{TS.error("can't ingest custom emoji :"+c+": because that already exists");
continue
}}g=a[c].replace("alias:","");
b=emoji.data[g];
if(b){b[3].push(c);
emoji.map.colons[c]=g;
if(e){TS.model.all_custom_emoji.push(c)
}continue
}g=emoji.map.colons[g];
b=emoji.data[g];
if(b){b[3].push(c);
emoji.map.colons[c]=g;
if(e){TS.model.all_custom_emoji.push(c)
}continue
}TS.warn('alias for "'+c+'":"'+a[c]+'" not recognized')
}TS.model.all_custom_emoji=TS.model.all_custom_emoji.sort();
if(h){h()
}},setUpCmds:function(a){if(!TS.boot_data.page_needs_custom_cmds){return a?a():null
}TS.api.call("commands.list",{},function(c,d,b){if(!c||!d.commands){if(a){a()
}return
}TS.cmd_handlers.mergeInServerCmds(d.commands);
if(a){a()
}})
},setUpEmoji:function(a){if(!window.emoji){return a()
}emoji.include_text=true;
if(emoji.unaltered_data){emoji.data=TS.utility.clone(emoji.unaltered_data);
emoji.inits={}
}else{emoji.unaltered_data=TS.utility.clone(emoji.data)
}emoji.init_colons();
if(TS.boot_data.emoji_customs){TS.ingestCustoms(TS.boot_data.emoji_customs,a);
TS.boot_data.emoji_customs=null;
return
}if(!TS.boot_data.page_needs_custom_emoji){return a()
}TS.api.call("emoji.list",{include_complex_values:(TS.boot_data.feature_simple_smile?1:0)},function(c,d,b){if(!c||!d.emoji){if(a){a()
}return
}TS.ingestCustoms(d.emoji,a)
})
},setUpModel:function(c){var k=!TS.model.ms_logged_in_once;
TS.model.team=c.team;
TS.model.bots_legacy=c.team.bots;
TS.model.team.url=c.url;
if(!TS.model.last_team_name){TS.model.last_team_name=TS.model.team.name;
TS.model.last_team_domain=TS.model.team.domain
}TS.model.team.activity=[];
if(TS.model.break_token){TS.model.team.url+="f"
}if(TS.model.break_reconnections){TS.model.team.url=TS.model.team.url.replace("websocket","BUSTED")
}if(k){TS.model.bots=[];
TS.model.members=[];
TS.model.channels=[];
TS.model.ims=[];
TS.model.groups=[]
}else{TS.refreshTeams()
}TS.prefs.setPrefs(c.self.prefs);
delete c.self.prefs;
var d;
var b;
if(!c.members){c.members=c.users
}for(d=0;
d<c.members.length;
d++){b=c.members[d];
var a=TS.members.upsertAndSignal(b);
if(b.id==c.self.id){TS.model.user=a.member;
TS.model.user.is_self=true;
TS.members.upsertMember(c.self)
}}var g;
for(d=0;
d<c.bots.length;
d++){g=c.bots[d];
TS.bots.upsertAndSignal(g)
}if(k||true){TS.prefs.setHighlightWords(TS.model.prefs.highlight_words)
}var f=0;
var e;
for(d=0;
d<c.channels.length;
d++){e=c.channels[d];
e.all_read_this_session_once=false;
if(TS.qs_args.just_general=="1"&&!e.is_general){continue
}TS.channels.upsertChannel(e);
if(e.is_member){f++
}}var j;
for(d=0;
d<c.ims.length;
d++){j=c.ims[d];
j.all_read_this_session_once=false;
if(TS.qs_args.just_general=="1"){continue
}TS.ims.upsertIm(j);
if(j.is_open){f++
}}var l;
for(d=0;
d<c.groups.length;
d++){l=c.groups[d];
l.all_read_this_session_once=false;
if(TS.qs_args.just_general=="1"){continue
}TS.groups.upsertGroup(l);
if(l.is_open&&!l.is_archived){f++
}}TS.info("open channels/groups/ims:"+f);
if(!k){}if(TS.qs_args.api_count){TS.model.initial_msgs_cnt=parseInt(TS.qs_args.api_count)||TS.model.initial_msgs_cnt
}else{if(f<10){TS.model.initial_msgs_cnt=200
}else{if(f<20){TS.model.initial_msgs_cnt=180
}else{if(f<30){TS.model.initial_msgs_cnt=160
}else{if(f<40){TS.model.initial_msgs_cnt=140
}else{if(f<50){TS.model.initial_msgs_cnt=120
}else{if(f<60){TS.model.initial_msgs_cnt=100
}else{if(f<70){TS.model.initial_msgs_cnt=80
}else{if(f<80){TS.model.initial_msgs_cnt=60
}else{TS.model.initial_msgs_cnt=50
}}}}}}}}}var h=TS.model.hard_msg_limit;
TS.model.subsequent_msgs_cnt=Math.min(h,TS.model.initial_msgs_cnt*2);
TS.model.special_initial_msgs_cnt=Math.min(h,TS.model.initial_msgs_cnt*2);
TS.info("initial_msgs_cnt:"+TS.model.initial_msgs_cnt);
TS.info("subsequent_msgs_cnt:"+TS.model.subsequent_msgs_cnt);
TS.info("special_initial_msgs_cnt:"+TS.model.special_initial_msgs_cnt)
},setThemeClasses:function(a){$("body").removeClass("dense_theme light_theme");
if(TS.model.prefs.theme=="dense"){$("body").addClass("dense_theme")
}else{if(TS.model.prefs.theme=="light"){$("body").addClass("light_theme")
}else{TS.error("no theme?");
return
}}if(TS.model.prefs.avatars){$("body").removeClass("no_avatars")
}else{$("body").addClass("no_avatars")
}if(TS.client&&!a){if(TS.shared.getActiveModelOb()){TS.client.msg_pane.rebuildMsgs()
}}},callModuleMethod:function(e,g){var b;
var d;
var a=[];
for(b in TS.modules){d=TS.modules[b];
d._exec_order=d._exec_order||0;
a.push(d)
}a.sort(function f(i,h){if(i._exec_order<h._exec_order){return -1
}if(i._exec_order>h._exec_order){return 1
}return 0
});
for(var c=0;
c<a.length;
c++){d=a[c];
if(!(e in d)||typeof d[e]!="function"){if(g){TS.error('module:"'+d._name+'" does not have method:"'+e+'"')
}continue
}TS.log(4,'calling "'+e+'" on "'+d._name+'" _exec_order:'+d._exec_order);
d[e]()
}},getAllTeams:function(){if(!TS.boot_data){return null
}if(!TS.model){return null
}if(!TS.model.team){return null
}if(!TS.model.user){return null
}var a=[{id:TS.model.user.id,name:TS.model.user.name,team_id:TS.model.team.id,team_name:TS.model.team.name.replace(/ +/g," "),team_url:"https://"+TS.model.team.domain+".slack.com/"}];
if(TS.boot_data.other_accounts&&typeof TS.boot_data.other_accounts=="object"&&!TS.boot_data.other_accounts.length){for(var b in TS.boot_data.other_accounts){var c=TS.utility.clone(TS.boot_data.other_accounts[b]);
c.id=b;
c.team_name=c.team_name.replace(/ +/g," ");
a.push(c)
}}TS.info("TS.getAllTeams():");
TS.dir(0,a);
return a
},getOtherAccountsCount:function(){var a=0;
if(!TS.boot_data.other_accounts){return a
}a=Object.keys(TS.boot_data.other_accounts).length;
return a
},refreshTeams:function(){if(!TS.boot_data){return
}if(!TS.model){return
}if(!TS.model.team){return
}if(!TS.model.user){return
}var a="/account-list-api";
var b=new XMLHttpRequest();
b.onreadystatechange=function(){if(b.readyState!=4){return
}if(b.status!=200){return
}b.onreadystatechange=null;
if(b.responseText.indexOf("{")!==0){return
}var f;
try{f=JSON.parse(b.responseText);
if(f.ok){TS.boot_data.other_accounts={};
var g=0;
for(var d in f.accounts){if(d==TS.model.user.id){continue
}TS.boot_data.other_accounts[d]=f.accounts[d];
g++
}if(TSSSB.call("teamsUpdate",TS.getAllTeams())){TS.info("called TSSSB.call('teamsUpdate')")
}TS.warn("c:"+g);
if(TS.view&&!g){TS.info("calling TS.view.updateTitleBarColor");
TS.view.updateTitleBarColor()
}}else{}}catch(e){if(window.console&&console.warn&&console.error){console.warn("unable to do anything with refreshTeams rsp");
console.error(e)
}}};
b.open("POST",a,1);
b.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
b.send("token="+encodeURIComponent(TS.model.api_token))
},qs_url_args:null,appendQSArgsToUrl:function(){if(TS.qs_url_args!==null){return TS.qs_url_args
}TS.qs_url_args="";
for(var a in TS.qs_args){TS.qs_url_args+="&"+a+"="+TS.qs_args[a]
}return TS.qs_url_args
},ssbChromeClicked:function(a){if(a){return
}$("html").trigger("mousedown");
$(".modal-backdrop").trigger("click")
}};