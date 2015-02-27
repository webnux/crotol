(function(c,d){var b=null;
function a(aZ,ai){this.setupOptions={url:(aZ||null),flashVersion:8,debugMode:true,debugFlash:false,useConsole:true,consoleOnly:true,waitForWindowLoad:false,bgColor:"#ffffff",useHighPerformance:false,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1000,wmode:null,allowScriptAccess:"always",useFlashBlock:false,useHTML5Audio:true,html5Test:/^(probably|maybe)$/i,preferFlash:true,noSWFCache:false,idPrefix:"sound"};
this.defaultOptions={autoLoad:false,autoPlay:false,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:true,multiShotEvents:false,position:null,pan:0,stream:true,to:null,type:null,usePolicyFile:false,volume:100};
this.flash9Options={isMovieStar:null,usePeakData:false,useWaveformData:false,useEQData:false,onbufferchange:null,ondataerror:null};
this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};
this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:true},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:false},ogg:{type:["audio/ogg; codecs=vorbis"],required:false},opus:{type:["audio/ogg; codecs=opus","audio/opus"],required:false},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:false}};
this.movieID="sm2-container";
this.id=(ai||"sm2movie");
this.debugID="soundmanager-debug";
this.debugURLParam=/([#?&])debug=1/i;
this.versionNumber="V2.97a.20130512";
this.version=null;
this.movieURL=null;
this.altURL=null;
this.swfLoaded=false;
this.enabled=false;
this.oMC=null;
this.sounds={};
this.soundIDs=[];
this.muted=false;
this.didFlashBlock=false;
this.filePattern=null;
this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};
this.features={buffering:false,peakData:false,waveformData:false,eqData:false,movieStar:false};
this.sandbox={type:null,types:{remote:"remote (domain-based) rules",localWithFile:"local with file access (no internet access)",localWithNetwork:"local with network (internet access only, no local access)",localTrusted:"local, trusted (local+internet access)"},description:null,noRemote:null,noLocal:null};
this.html5={usingFlash:null};
this.flash={};
this.html5Only=false;
this.ignoreFlash=false;
var ak,ao=this,a7=null,ad=null,aW="soundManager",G=aW+": ",a3="HTML5::",an,au=navigator.userAgent,y=c.location.href.toString(),aa=document,U,A,aJ,bg,w=[],bf=true,N,ap=false,aT=false,ax=false,a0=false,ba=false,W,aw=0,x,a1,a5,a2,Z,aR,t,z,bb,aU,u,e,k,aD,M,bi,q,be,I,ab,m,E,aH=["log","info","warn","error"],Y=8,X,s,az,aK=null,aj=null,bd,aA,n,F,aC,B,p,ar,J,aQ=false,aI=false,aO,O,ae,L=0,bc=null,ac,aq=[],af,C=null,T,a9,am,aL,g,P,aN,al,S=Array.prototype.slice,aY=false,l,at,R,D,i,aF,Q,aE,ag=0,aV=au.match(/(ipad|iphone|ipod)/i),av=au.match(/android/i),a6=au.match(/msie/i),aG=au.match(/webkit/i),aX=(au.match(/safari/i)&&!au.match(/chrome/i)),v=(au.match(/opera/i)),j=(au.match(/firefox/i)),aS=(au.match(/(mobile|pre\/|xoom)/i)||aV||av),a4=(!y.match(/usehtml5audio/i)&&!y.match(/sm2\-ignorebadua/i)&&aX&&!au.match(/silk/i)&&au.match(/OS X 10_6_([3-7])/i)),K=(c.console!==d&&console.log!==d),aB=(aa.hasFocus!==d?aa.hasFocus():null),a8=(aX&&(aa.hasFocus===d||!aa.hasFocus())),ay=!a8,r=/(mp3|mp4|mpa|m4a|m4b)/i,h=1000,o="about:blank",H=(aa.location?aa.location.protocol.match(/http/i):null),aM=(!H?"http://":""),f=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,V=["mpeg4","aac","flv","mov","mp4","m4v","f4v","m4a","m4b","mp4v","3gp","3g2"],ah=new RegExp("\\.("+V.join("|")+")(\\?.*)?$","i");
this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;
this.useAltURL=!H;
F={swfBox:"sm2-object-box",swfDefault:"movieContainer",swfError:"swf_error",swfTimedout:"swf_timedout",swfLoaded:"swf_loaded",swfUnblocked:"swf_unblocked",sm2Debug:"sm2_debug",highPerf:"high_performance",flashDebug:"flash_debug"};
this.hasHTML5=(function(){try{return(Audio!==d&&(v&&opera!==d&&opera.version()<10?new Audio(null):new Audio()).canPlayType!==d)
}catch(bj){return false
}}());
this.setup=function(bj){var bk=(!ao.url);
if(bj!==d&&ax&&C&&ao.ok()&&(bj.flashVersion!==d||bj.url!==d||bj.html5Test!==d)){ar(bd("setupLate"))
}a5(bj);
if(bj){if(bk&&q&&bj.url!==d){ao.beginDelayedInit()
}if(!q&&bj.url!==d&&aa.readyState==="complete"){setTimeout(M,1)
}}return ao
};
this.ok=function(){return(C?(ax&&!a0):(ao.useHTML5Audio&&ao.hasHTML5))
};
this.supported=this.ok;
this.getMovie=function(bj){return an(bj)||aa[bj]||c[bj]
};
this.createSound=function(bl,bn){var bo,bp,bk,bm=null;
bo=aW+".createSound(): ";
bp=bo+bd(!ax?"notReady":"notOK");
if(!ax||!ao.ok()){ar(bp);
return false
}if(bn!==d){bl={id:bl,url:bn}
}bk=a1(bl);
bk.url=ac(bk.url);
if(bk.id===undefined){bk.id=ao.setupOptions.idPrefix+(ag++)
}if(bk.id.toString().charAt(0).match(/^[0-9]$/)){ao._wD(bo+bd("badID",bk.id),2)
}ao._wD(bo+bk.id+(bk.url?" ("+bk.url+")":""),1);
if(J(bk.id,true)){ao._wD(bo+bk.id+" exists",1);
return ao.sounds[bk.id]
}function bj(){bk=B(bk);
ao.sounds[bk.id]=new ak(bk);
ao.soundIDs.push(bk.id);
return ao.sounds[bk.id]
}if(a9(bk)){bm=bj();
ao._wD(bk.id+": Using HTML5");
bm._setup_html5(bk)
}else{if(ao.html5Only){ao._wD(bk.id+": No HTML5 support for this sound, and no Flash. Exiting.");
return bj()
}if(ao.html5.usingFlash&&bk.url&&bk.url.match(/data\:/i)){ao._wD(bk.id+": data: URIs not supported via Flash. Exiting.");
return bj()
}if(bg>8){if(bk.isMovieStar===null){bk.isMovieStar=!!(bk.serverURL||(bk.type?bk.type.match(f):false)||(bk.url&&bk.url.match(ah)))
}if(bk.isMovieStar){ao._wD(bo+"using MovieStar handling");
if(bk.loops>1){W("noNSLoop")
}}}bk=p(bk,bo);
bm=bj();
if(bg===8){ad._createSound(bk.id,bk.loops||1,bk.usePolicyFile)
}else{ad._createSound(bk.id,bk.url,bk.usePeakData,bk.useWaveformData,bk.useEQData,bk.isMovieStar,(bk.isMovieStar?bk.bufferTime:false),bk.loops||1,bk.serverURL,bk.duration||null,bk.autoPlay,true,bk.autoLoad,bk.usePolicyFile);
if(!bk.serverURL){bm.connected=true;
if(bk.onconnect){bk.onconnect.apply(bm)
}}}if(!bk.serverURL&&(bk.autoLoad||bk.autoPlay)){bm.load(bk)
}}if(!bk.serverURL&&bk.autoPlay){bm.play()
}return bm
};
this.destroySound=function(bj,bm){if(!J(bj)){return false
}var bl=ao.sounds[bj],bk;
bl._iO={};
bl.stop();
bl.unload();
for(bk=0;
bk<ao.soundIDs.length;
bk++){if(ao.soundIDs[bk]===bj){ao.soundIDs.splice(bk,1);
break
}}if(!bm){bl.destruct(true)
}bl=null;
delete ao.sounds[bj];
return true
};
this.load=function(bj,bk){if(!J(bj)){return false
}return ao.sounds[bj].load(bk)
};
this.unload=function(bj){if(!J(bj)){return false
}return ao.sounds[bj].unload()
};
this.onPosition=function(bm,bl,bk,bj){if(!J(bm)){return false
}return ao.sounds[bm].onposition(bl,bk,bj)
};
this.onposition=this.onPosition;
this.clearOnPosition=function(bl,bk,bj){if(!J(bl)){return false
}return ao.sounds[bl].clearOnPosition(bk,bj)
};
this.play=function(bl,bm){var bj=null,bk=(bm&&!(bm instanceof Object));
if(!ax||!ao.ok()){ar(aW+".play(): "+bd(!ax?"notReady":"notOK"));
return false
}if(!J(bl,bk)){if(!bk){return false
}if(bk){bm={url:bm}
}if(bm&&bm.url){ao._wD(aW+'.play(): Attempting to create "'+bl+'"',1);
bm.id=bl;
bj=ao.createSound(bm).play()
}}else{if(bk){bm={url:bm}
}}if(bj===null){bj=ao.sounds[bl].play(bm)
}return bj
};
this.start=this.play;
this.setPosition=function(bj,bk){if(!J(bj)){return false
}return ao.sounds[bj].setPosition(bk)
};
this.stop=function(bj){if(!J(bj)){return false
}ao._wD(aW+".stop("+bj+")",1);
return ao.sounds[bj].stop()
};
this.stopAll=function(){var bj;
ao._wD(aW+".stopAll()",1);
for(bj in ao.sounds){if(ao.sounds.hasOwnProperty(bj)){ao.sounds[bj].stop()
}}};
this.pause=function(bj){if(!J(bj)){return false
}return ao.sounds[bj].pause()
};
this.pauseAll=function(){var bj;
for(bj=ao.soundIDs.length-1;
bj>=0;
bj--){ao.sounds[ao.soundIDs[bj]].pause()
}};
this.resume=function(bj){if(!J(bj)){return false
}return ao.sounds[bj].resume()
};
this.resumeAll=function(){var bj;
for(bj=ao.soundIDs.length-1;
bj>=0;
bj--){ao.sounds[ao.soundIDs[bj]].resume()
}};
this.togglePause=function(bj){if(!J(bj)){return false
}return ao.sounds[bj].togglePause()
};
this.setPan=function(bj,bk){if(!J(bj)){return false
}return ao.sounds[bj].setPan(bk)
};
this.setVolume=function(bk,bj){if(!J(bk)){return false
}return ao.sounds[bk].setVolume(bj)
};
this.mute=function(bj){var bk=0;
if(bj instanceof String){bj=null
}if(!bj){ao._wD(aW+".mute(): Muting all sounds");
for(bk=ao.soundIDs.length-1;
bk>=0;
bk--){ao.sounds[ao.soundIDs[bk]].mute()
}ao.muted=true
}else{if(!J(bj)){return false
}ao._wD(aW+'.mute(): Muting "'+bj+'"');
return ao.sounds[bj].mute()
}return true
};
this.muteAll=function(){ao.mute()
};
this.unmute=function(bj){var bk;
if(bj instanceof String){bj=null
}if(!bj){ao._wD(aW+".unmute(): Unmuting all sounds");
for(bk=ao.soundIDs.length-1;
bk>=0;
bk--){ao.sounds[ao.soundIDs[bk]].unmute()
}ao.muted=false
}else{if(!J(bj)){return false
}ao._wD(aW+'.unmute(): Unmuting "'+bj+'"');
return ao.sounds[bj].unmute()
}return true
};
this.unmuteAll=function(){ao.unmute()
};
this.toggleMute=function(bj){if(!J(bj)){return false
}return ao.sounds[bj].toggleMute()
};
this.getMemoryUse=function(){var bj=0;
if(ad&&bg!==8){bj=parseInt(ad._getMemoryUse(),10)
}return bj
};
this.disable=function(bk){var bj;
if(bk===d){bk=false
}if(a0){return false
}a0=true;
W("shutdown",1);
for(bj=ao.soundIDs.length-1;
bj>=0;
bj--){X(ao.sounds[ao.soundIDs[bj]])
}x(bk);
al.remove(c,"load",t);
return true
};
this.canPlayMIME=function(bk){var bj;
if(ao.hasHTML5){bj=am({type:bk})
}if(!bj&&C){bj=(bk&&ao.ok()?!!((bg>8?bk.match(f):null)||bk.match(ao.mimePattern)):null)
}return bj
};
this.canPlayURL=function(bk){var bj;
if(ao.hasHTML5){bj=am({url:bk})
}if(!bj&&C){bj=(bk&&ao.ok()?!!(bk.match(ao.filePattern)):null)
}return bj
};
this.canPlayLink=function(bj){if(bj.type!==d&&bj.type){if(ao.canPlayMIME(bj.type)){return true
}}return ao.canPlayURL(bj.href)
};
this.getSoundById=function(bk,bl){if(!bk){return null
}var bj=ao.sounds[bk];
if(!bj&&!bl){ao._wD(aW+'.getSoundById(): Sound "'+bk+'" not found.',2)
}return bj
};
this.onready=function(bl,bk){var bm="onready",bj=false;
if(typeof bl==="function"){if(ax){ao._wD(bd("queue",bm))
}if(!bk){bk=c
}Z(bm,bl,bk);
aR();
bj=true
}else{throw bd("needFunction",bm)
}return bj
};
this.ontimeout=function(bl,bk){var bm="ontimeout",bj=false;
if(typeof bl==="function"){if(ax){ao._wD(bd("queue",bm))
}if(!bk){bk=c
}Z(bm,bl,bk);
aR({type:bm});
bj=true
}else{throw bd("needFunction",bm)
}return bj
};
this._writeDebug=function(bk,bj){var bn="soundmanager-debug",bm,bl;
if(!ao.debugMode){return false
}if(K&&ao.useConsole){if(bj&&typeof bj==="object"){console.log(bk,bj)
}else{if(aH[bj]!==d){console[aH[bj]](bk)
}else{console.log(bk)
}}if(ao.consoleOnly){return true
}}bm=an(bn);
if(!bm){return false
}bl=aa.createElement("div");
if(++aw%2===0){bl.className="sm2-alt"
}if(bj===d){bj=0
}else{bj=parseInt(bj,10)
}bl.appendChild(aa.createTextNode(bk));
if(bj){if(bj>=2){bl.style.fontWeight="bold"
}if(bj===3){bl.style.color="#ff3333"
}}bm.insertBefore(bl,bm.firstChild);
bm=null;
return true
};
if(y.indexOf("sm2-debug=alert")!==-1){this._writeDebug=function(bj){c.alert(bj)
}
}this._wD=this._writeDebug;
this._debug=function(){var bk,bj;
W("currentObj",1);
for(bk=0,bj=ao.soundIDs.length;
bk<bj;
bk++){ao.sounds[ao.soundIDs[bk]]._debug()
}};
this.reboot=function(bn,bm){if(ao.soundIDs.length){ao._wD("Destroying "+ao.soundIDs.length+" SMSound object"+(ao.soundIDs.length!==1?"s":"")+"...")
}var bl,bk,bj;
for(bl=ao.soundIDs.length-1;
bl>=0;
bl--){ao.sounds[ao.soundIDs[bl]].destruct()
}if(ad){try{if(a6){aj=ad.innerHTML
}aK=ad.parentNode.removeChild(ad)
}catch(bo){W("badRemove",2)
}}aj=aK=C=ad=null;
ao.enabled=q=ax=aQ=aI=ap=aT=a0=aY=ao.swfLoaded=false;
ao.soundIDs=[];
ao.sounds={};
ag=0;
if(!bn){for(bl in w){if(w.hasOwnProperty(bl)){for(bk=0,bj=w[bl].length;
bk<bj;
bk++){w[bl][bk].fired=false
}}}}else{w=[]
}if(!bm){ao._wD(aW+": Rebooting...")
}ao.html5={usingFlash:null};
ao.flash={};
ao.html5Only=false;
ao.ignoreFlash=false;
c.setTimeout(function(){aD();
if(!bm){ao.beginDelayedInit()
}},20);
return ao
};
this.reset=function(){W("reset");
return ao.reboot(true,true)
};
this.getMoviePercent=function(){return(ad&&"PercentLoaded" in ad?ad.PercentLoaded():null)
};
this.beginDelayedInit=function(){ba=true;
M();
setTimeout(function(){if(aI){return false
}I();
k();
aI=true;
return true
},20);
z()
};
this.destruct=function(){ao._wD(aW+".destruct()");
ao.disable(true)
};
ak=function(bx){var by=this,bj,bu,br,bk,bo,bp,bl=false,bn=[],bv=0,bm,bq,bs=null,bt,bw;
bt={duration:null,time:null};
this.id=bx.id;
this.sID=this.id;
this.url=bx.url;
this.options=a1(bx);
this.instanceOptions=this.options;
this._iO=this.instanceOptions;
this.pan=this.options.pan;
this.volume=this.options.volume;
this.isHTML5=false;
this._a=null;
bw=(this.url?false:true);
this.id3={};
this._debug=function(){ao._wD(by.id+": Merged options:",by.options)
};
this.load=function(bz){var bA=null,bB;
if(bz!==d){by._iO=a1(bz,by.options)
}else{bz=by.options;
by._iO=bz;
if(bs&&bs!==by.url){W("manURL");
by._iO.url=by.url;
by.url=null
}}if(!by._iO.url){by._iO.url=by.url
}by._iO.url=ac(by._iO.url);
by.instanceOptions=by._iO;
bB=by._iO;
ao._wD(by.id+": load ("+bB.url+")");
if(!bB.url&&!by.url){ao._wD(by.id+": load(): url is unassigned. Exiting.",2);
return by
}if(!by.isHTML5&&bg===8&&!by.url&&!bB.autoPlay){ao._wD(by.id+": Flash 8 load() limitation: Wait for onload() before calling play().",1)
}if(bB.url===by.url&&by.readyState!==0&&by.readyState!==2){W("onURL",1);
if(by.readyState===3&&bB.onload){aE(by,function(){bB.onload.apply(by,[(!!by.duration)])
})
}return by
}by.loaded=false;
by.readyState=1;
by.playState=0;
by.id3={};
if(a9(bB)){bA=by._setup_html5(bB);
if(!bA._called_load){by._html5_canplay=false;
if(by.url!==bB.url){ao._wD(W("manURL")+": "+bB.url);
by._a.src=bB.url;
by.setPosition(0)
}by._a.autobuffer="auto";
by._a.preload="auto";
by._a._called_load=true;
if(bB.autoPlay){by.play()
}}else{ao._wD(by.id+": Ignoring request to load again")
}}else{if(ao.html5Only){ao._wD(by.id+": No flash support. Exiting.");
return by
}if(by._iO.url&&by._iO.url.match(/data\:/i)){ao._wD(by.id+": data: URIs not supported via Flash. Exiting.");
return by
}try{by.isHTML5=false;
by._iO=p(B(bB));
bB=by._iO;
if(bg===8){ad._load(by.id,bB.url,bB.stream,bB.autoPlay,bB.usePolicyFile)
}else{ad._load(by.id,bB.url,!!(bB.stream),!!(bB.autoPlay),bB.loops||1,!!(bB.autoLoad),bB.usePolicyFile)
}}catch(bC){W("smError",2);
N("onload",false);
ab({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:true})
}}by.url=bB.url;
return by
};
this.unload=function(){if(by.readyState!==0){ao._wD(by.id+": unload()");
if(!by.isHTML5){if(bg===8){ad._unload(by.id,o)
}else{ad._unload(by.id)
}}else{bk();
if(by._a){by._a.pause();
bs=g(by._a)
}}bj()
}return by
};
this.destruct=function(bz){ao._wD(by.id+": Destruct");
if(!by.isHTML5){by._iO.onfailure=null;
ad._destroySound(by.id)
}else{bk();
if(by._a){by._a.pause();
g(by._a);
if(!aY){br()
}by._a._s=null;
by._a=null
}}if(!bz){ao.destroySound(by.id,true)
}};
this.play=function(bF,bB){var bz,bC,bI,bH,bJ,bG,bE,bD=true,bA=null;
bz=by.id+": play(): ";
bB=(bB===d?true:bB);
if(!bF){bF={}
}if(by.url){by._iO.url=by.url
}by._iO=a1(by._iO,by.options);
by._iO=a1(bF,by._iO);
by._iO.url=ac(by._iO.url);
by.instanceOptions=by._iO;
if(!by.isHTML5&&by._iO.serverURL&&!by.connected){if(!by.getAutoPlay()){ao._wD(bz+" Netstream not connected yet - setting autoPlay");
by.setAutoPlay(true)
}return by
}if(a9(by._iO)){by._setup_html5(by._iO);
bo()
}if(by.playState===1&&!by.paused){bC=by._iO.multiShot;
if(!bC){ao._wD(bz+"Already playing (one-shot)",1);
if(by.isHTML5){by.setPosition(by._iO.position)
}bA=by
}else{ao._wD(bz+"Already playing (multi-shot)",1)
}}if(bA!==null){return bA
}if(bF.url&&bF.url!==by.url){if(!by.readyState&&!by.isHTML5&&bg===8&&bw){bw=false
}else{by.load(by._iO)
}}if(!by.loaded){if(by.readyState===0){ao._wD(bz+"Attempting to load");
if(!by.isHTML5&&!ao.html5Only){by._iO.autoPlay=true;
by.load(by._iO)
}else{if(by.isHTML5){by.load(by._iO)
}else{ao._wD(bz+"Unsupported type. Exiting.");
bA=by
}}by.instanceOptions=by._iO
}else{if(by.readyState===2){ao._wD(bz+"Could not load - exiting",2);
bA=by
}else{ao._wD(bz+"Loading - attempting to play...")
}}}else{ao._wD(bz.substr(0,bz.lastIndexOf(":")))
}if(bA!==null){return bA
}if(!by.isHTML5&&bg===9&&by.position>0&&by.position===by.duration){ao._wD(bz+"Sound at end, resetting to position:0");
bF.position=0
}if(by.paused&&by.position>=0&&(!by._iO.serverURL||by.position>0)){ao._wD(bz+"Resuming from paused state",1);
by.resume()
}else{by._iO=a1(bF,by._iO);
if(by._iO.from!==null&&by._iO.to!==null&&by.instanceCount===0&&by.playState===0&&!by._iO.serverURL){bH=function(){by._iO=a1(bF,by._iO);
by.play(by._iO)
};
if(by.isHTML5&&!by._html5_canplay){ao._wD(bz+"Beginning load for from/to case");
by.load({oncanplay:bH});
bA=false
}else{if(!by.isHTML5&&!by.loaded&&(!by.readyState||by.readyState!==2)){ao._wD(bz+"Preloading for from/to case");
by.load({onload:bH});
bA=false
}}if(bA!==null){return bA
}by._iO=bq()
}if(!by.instanceCount||by._iO.multiShotEvents||(by.isHTML5&&by._iO.multiShot&&!aY)||(!by.isHTML5&&bg>8&&!by.getAutoPlay())){by.instanceCount++
}if(by._iO.onposition&&by.playState===0){bp(by)
}by.playState=1;
by.paused=false;
by.position=(by._iO.position!==d&&!isNaN(by._iO.position)?by._iO.position:0);
if(!by.isHTML5){by._iO=p(B(by._iO))
}if(by._iO.onplay&&bB){by._iO.onplay.apply(by);
bl=true
}by.setVolume(by._iO.volume,true);
by.setPan(by._iO.pan,true);
if(!by.isHTML5){bD=ad._start(by.id,by._iO.loops||1,(bg===9?by.position:by.position/h),by._iO.multiShot||false);
if(bg===9&&!bD){ao._wD(bz+"No sound hardware, or 32-sound ceiling hit",2);
if(by._iO.onplayerror){by._iO.onplayerror.apply(by)
}}}else{if(by.instanceCount<2){bo();
bI=by._setup_html5();
by.setPosition(by._iO.position);
bI.play()
}else{ao._wD(by.id+": Cloning Audio() for instance #"+by.instanceCount+"...");
bJ=new Audio(by._iO.url);
bG=function(){al.remove(bJ,"onended",bG);
by._onfinish(by);
g(bJ);
bJ=null
};
bE=function(){al.remove(bJ,"canplay",bE);
try{bJ.currentTime=by._iO.position/h
}catch(bK){ar(by.id+": multiShot play() failed to apply position of "+(by._iO.position/h))
}bJ.play()
};
al.add(bJ,"ended",bG);
if(by._iO.position){al.add(bJ,"canplay",bE)
}else{bJ.play()
}}}}return by
};
this.start=this.play;
this.stop=function(bz){var bB=by._iO,bA;
if(by.playState===1){ao._wD(by.id+": stop()");
by._onbufferchange(0);
by._resetOnPosition(0);
by.paused=false;
if(!by.isHTML5){by.playState=0
}bm();
if(bB.to){by.clearOnPosition(bB.to)
}if(!by.isHTML5){ad._stop(by.id,bz);
if(bB.serverURL){by.unload()
}}else{if(by._a){bA=by.position;
by.setPosition(0);
by.position=bA;
by._a.pause();
by.playState=0;
by._onTimer();
bk()
}}by.instanceCount=0;
by._iO={};
if(bB.onstop){bB.onstop.apply(by)
}}return by
};
this.setAutoPlay=function(bz){ao._wD(by.id+": Autoplay turned "+(bz?"on":"off"));
by._iO.autoPlay=bz;
if(!by.isHTML5){ad._setAutoPlay(by.id,bz);
if(bz){if(!by.instanceCount&&by.readyState===1){by.instanceCount++;
ao._wD(by.id+": Incremented instance count to "+by.instanceCount)
}}}};
this.getAutoPlay=function(){return by._iO.autoPlay
};
this.setPosition=function(bB){if(bB===d){bB=0
}var bz,bA,bD=(by.isHTML5?Math.max(bB,0):Math.min(by.duration||by._iO.duration,Math.max(bB,0)));
by.position=bD;
bA=by.position/h;
by._resetOnPosition(by.position);
by._iO.position=bD;
if(!by.isHTML5){bz=(bg===9?by.position:bA);
if(by.readyState&&by.readyState!==2){ad._setPosition(by.id,bz,(by.paused||!by.playState),by._iO.multiShot)
}}else{if(by._a){if(by._html5_canplay){if(by._a.currentTime!==bA){ao._wD(by.id+": setPosition("+bA+")");
try{by._a.currentTime=bA;
if(by.playState===0||by.paused){by._a.pause()
}}catch(bC){ao._wD(by.id+": setPosition("+bA+") failed: "+bC.message,2)
}}}else{if(bA){ao._wD(by.id+": setPosition("+bA+"): Cannot seek yet, sound not ready",2);
return by
}}if(by.paused){by._onTimer(true)
}}}return by
};
this.pause=function(bz){if(by.paused||(by.playState===0&&by.readyState!==1)){return by
}ao._wD(by.id+": pause()");
by.paused=true;
if(!by.isHTML5){if(bz||bz===d){ad._pause(by.id,by._iO.multiShot)
}}else{by._setup_html5().pause();
bk()
}if(by._iO.onpause){by._iO.onpause.apply(by)
}return by
};
this.resume=function(){var bz=by._iO;
if(!by.paused){return by
}ao._wD(by.id+": resume()");
by.paused=false;
by.playState=1;
if(!by.isHTML5){if(bz.isMovieStar&&!bz.serverURL){by.setPosition(by.position)
}ad._pause(by.id,bz.multiShot)
}else{by._setup_html5().play();
bo()
}if(!bl&&bz.onplay){bz.onplay.apply(by);
bl=true
}else{if(bz.onresume){bz.onresume.apply(by)
}}return by
};
this.togglePause=function(){ao._wD(by.id+": togglePause()");
if(by.playState===0){by.play({position:(bg===9&&!by.isHTML5?by.position:by.position/h)});
return by
}if(by.paused){by.resume()
}else{by.pause()
}return by
};
this.setPan=function(bA,bz){if(bA===d){bA=0
}if(bz===d){bz=false
}if(!by.isHTML5){ad._setPan(by.id,bA)
}by._iO.pan=bA;
if(!bz){by.pan=bA;
by.options.pan=bA
}return by
};
this.setVolume=function(bz,bA){if(bz===d){bz=100
}if(bA===d){bA=false
}if(!by.isHTML5){ad._setVolume(by.id,(ao.muted&&!by.muted)||by.muted?0:bz)
}else{if(by._a){by._a.volume=Math.max(0,Math.min(1,bz/100))
}}by._iO.volume=bz;
if(!bA){by.volume=bz;
by.options.volume=bz
}return by
};
this.mute=function(){by.muted=true;
if(!by.isHTML5){ad._setVolume(by.id,0)
}else{if(by._a){by._a.muted=true
}}return by
};
this.unmute=function(){by.muted=false;
var bz=(by._iO.volume!==d);
if(!by.isHTML5){ad._setVolume(by.id,bz?by._iO.volume:by.options.volume)
}else{if(by._a){by._a.muted=false
}}return by
};
this.toggleMute=function(){return(by.muted?by.unmute():by.mute())
};
this.onPosition=function(bB,bA,bz){bn.push({position:parseInt(bB,10),method:bA,scope:(bz!==d?bz:by),fired:false});
return by
};
this.onposition=this.onPosition;
this.clearOnPosition=function(bA,bz){var bB;
bA=parseInt(bA,10);
if(isNaN(bA)){return false
}for(bB=0;
bB<bn.length;
bB++){if(bA===bn[bB].position){if(!bz||(bz===bn[bB].method)){if(bn[bB].fired){bv--
}bn.splice(bB,1)
}}}};
this._processOnPosition=function(){var bA,bB,bz=bn.length;
if(!bz||!by.playState||bv>=bz){return false
}for(bA=bz-1;
bA>=0;
bA--){bB=bn[bA];
if(!bB.fired&&by.position>=bB.position){bB.fired=true;
bv++;
bB.method.apply(bB.scope,[bB.position])
}}return true
};
this._resetOnPosition=function(bz){var bB,bC,bA=bn.length;
if(!bA){return false
}for(bB=bA-1;
bB>=0;
bB--){bC=bn[bB];
if(bC.fired&&bz<=bC.position){bC.fired=false;
bv--
}}return true
};
bq=function(){var bC=by._iO,bB=bC.from,bA=bC.to,bD,bz;
bz=function(){ao._wD(by.id+': "To" time of '+bA+" reached.");
by.clearOnPosition(bA,bz);
by.stop()
};
bD=function(){ao._wD(by.id+': Playing "from" '+bB);
if(bA!==null&&!isNaN(bA)){by.onPosition(bA,bz)
}};
if(bB!==null&&!isNaN(bB)){bC.position=bB;
bC.multiShot=false;
bD()
}return bC
};
bp=function(){var bz,bA=by._iO.onposition;
if(bA){for(bz in bA){if(bA.hasOwnProperty(bz)){by.onPosition(parseInt(bz,10),bA[bz])
}}}};
bm=function(){var bz,bA=by._iO.onposition;
if(bA){for(bz in bA){if(bA.hasOwnProperty(bz)){by.clearOnPosition(parseInt(bz,10))
}}}};
bo=function(){if(by.isHTML5){aO(by)
}};
bk=function(){if(by.isHTML5){O(by)
}};
bj=function(bz){if(!bz){bn=[];
bv=0
}bl=false;
by._hasTimer=null;
by._a=null;
by._html5_canplay=false;
by.bytesLoaded=null;
by.bytesTotal=null;
by.duration=(by._iO&&by._iO.duration?by._iO.duration:null);
by.durationEstimate=null;
by.buffered=[];
by.eqData=[];
by.eqData.left=[];
by.eqData.right=[];
by.failures=0;
by.isBuffering=false;
by.instanceOptions={};
by.instanceCount=0;
by.loaded=false;
by.metadata={};
by.readyState=0;
by.muted=false;
by.paused=false;
by.peakData={left:0,right:0};
by.waveformData={left:[],right:[]};
by.playState=0;
by.position=null;
by.id3={}
};
bj();
this._onTimer=function(bB){var bD,bA=false,bC,bz={};
if(by._hasTimer||bB){if(by._a&&(bB||((by.playState>0||by.readyState===1)&&!by.paused))){bD=by._get_html5_duration();
if(bD!==bt.duration){bt.duration=bD;
by.duration=bD;
bA=true
}by.durationEstimate=by.duration;
bC=(by._a.currentTime*h||0);
if(bC!==bt.time){bt.time=bC;
bA=true
}if(bA||bB){by._whileplaying(bC,bz,bz,bz,bz)
}}return bA
}};
this._get_html5_duration=function(){var bA=by._iO,bB=(by._a&&by._a.duration?by._a.duration*h:(bA&&bA.duration?bA.duration:null)),bz=(bB&&!isNaN(bB)&&bB!==Infinity?bB:null);
return bz
};
this._apply_loop=function(bz,bA){if(!bz.loop&&bA>1){ao._wD("Note: Native HTML5 looping is infinite.",1)
}bz.loop=(bA>1?"loop":"")
};
this._setup_html5=function(bA){var bB=a1(by._iO,bA),bz=aY?a7:by._a,bD=decodeURI(bB.url),bC;
if(aY){if(bD===decodeURI(l)){bC=true
}}else{if(bD===decodeURI(bs)){bC=true
}}if(bz){if(bz._s){if(aY){if(bz._s&&bz._s.playState&&!bC){bz._s.stop()
}}else{if(!aY&&bD===decodeURI(bs)){by._apply_loop(bz,bB.loops);
return bz
}}}if(!bC){bj(false);
bz.src=bB.url;
by.url=bB.url;
bs=bB.url;
l=bB.url;
bz._called_load=false
}}else{if(bB.autoLoad||bB.autoPlay){by._a=new Audio(bB.url)
}else{by._a=(v&&opera.version()<10?new Audio(null):new Audio())
}bz=by._a;
bz._called_load=false;
if(aY){a7=bz
}}by.isHTML5=true;
by._a=bz;
bz._s=by;
bu();
by._apply_loop(bz,bB.loops);
if(bB.autoLoad||bB.autoPlay){by.load()
}else{bz.autobuffer=false;
bz.preload="auto"
}return bz
};
bu=function(){if(by._a._added_events){return false
}var bz;
function bA(bC,bB,bD){return by._a?by._a.addEventListener(bC,bB,bD||false):null
}by._a._added_events=true;
for(bz in i){if(i.hasOwnProperty(bz)){bA(bz,i[bz])
}}return true
};
br=function(){var bA;
function bz(bC,bB,bD){return(by._a?by._a.removeEventListener(bC,bB,bD||false):null)
}ao._wD(by.id+": Removing event listeners");
by._a._added_events=false;
for(bA in i){if(i.hasOwnProperty(bA)){bz(bA,i[bA])
}}};
this._onload=function(bB){var bz,bA=!!bB||(!by.isHTML5&&bg===8&&by.duration);
bz=by.id+": ";
ao._wD(bz+(bA?"onload()":"Failed to load / invalid sound?"+(!by.duration?" Zero-length duration reported.":" -")+" ("+by.url+")"),(bA?1:2));
if(!bA&&!by.isHTML5){if(ao.sandbox.noRemote===true){ao._wD(bz+bd("noNet"),1)
}if(ao.sandbox.noLocal===true){ao._wD(bz+bd("noLocal"),1)
}}by.loaded=bA;
by.readyState=bA?3:2;
by._onbufferchange(0);
if(by._iO.onload){aE(by,function(){by._iO.onload.apply(by,[bA])
})
}return true
};
this._onbufferchange=function(bz){if(by.playState===0){return false
}if((bz&&by.isBuffering)||(!bz&&!by.isBuffering)){return false
}by.isBuffering=(bz===1);
if(by._iO.onbufferchange){ao._wD(by.id+": Buffer state change: "+bz);
by._iO.onbufferchange.apply(by)
}return true
};
this._onsuspend=function(){if(by._iO.onsuspend){ao._wD(by.id+": Playback suspended");
by._iO.onsuspend.apply(by)
}return true
};
this._onfailure=function(bA,bB,bz){by.failures++;
ao._wD(by.id+": Failures = "+by.failures);
if(by._iO.onfailure&&by.failures===1){by._iO.onfailure(by,bA,bB,bz)
}else{ao._wD(by.id+": Ignoring failure")
}};
this._onfinish=function(){var bz=by._iO.onfinish;
by._onbufferchange(0);
by._resetOnPosition(0);
if(by.instanceCount){by.instanceCount--;
if(!by.instanceCount){bm();
by.playState=0;
by.paused=false;
by.instanceCount=0;
by.instanceOptions={};
by._iO={};
bk();
if(by.isHTML5){by.position=0
}}if(!by.instanceCount||by._iO.multiShotEvents){if(bz){ao._wD(by.id+": onfinish()");
aE(by,function(){bz.apply(by)
})
}}}};
this._whileloading=function(bz,bA,bD,bC){var bB=by._iO;
by.bytesLoaded=bz;
by.bytesTotal=bA;
by.duration=Math.floor(bD);
by.bufferLength=bC;
if(!by.isHTML5&&!bB.isMovieStar){if(bB.duration){by.durationEstimate=(by.duration>bB.duration)?by.duration:bB.duration
}else{by.durationEstimate=parseInt((by.bytesTotal/by.bytesLoaded)*by.duration,10)
}}else{by.durationEstimate=by.duration
}if(!by.isHTML5){by.buffered=[{start:0,end:by.duration}]
}if((by.readyState!==3||by.isHTML5)&&bB.whileloading){bB.whileloading.apply(by)
}};
this._whileplaying=function(bB,bC,bF,bA,bE){var bD=by._iO,bz;
if(isNaN(bB)||bB===null){return false
}by.position=Math.max(0,bB);
by._processOnPosition();
if(!by.isHTML5&&bg>8){if(bD.usePeakData&&bC!==d&&bC){by.peakData={left:bC.leftPeak,right:bC.rightPeak}
}if(bD.useWaveformData&&bF!==d&&bF){by.waveformData={left:bF.split(","),right:bA.split(",")}
}if(bD.useEQData){if(bE!==d&&bE&&bE.leftEQ){bz=bE.leftEQ.split(",");
by.eqData=bz;
by.eqData.left=bz;
if(bE.rightEQ!==d&&bE.rightEQ){by.eqData.right=bE.rightEQ.split(",")
}}}}if(by.playState===1){if(!by.isHTML5&&bg===8&&!by.position&&by.isBuffering){by._onbufferchange(0)
}if(bD.whileplaying){bD.whileplaying.apply(by)
}}return true
};
this._oncaptiondata=function(bz){ao._wD(by.id+": Caption data received.");
by.captiondata=bz;
if(by._iO.oncaptiondata){by._iO.oncaptiondata.apply(by,[bz])
}};
this._onmetadata=function(bC,bz){ao._wD(by.id+": Metadata received.");
var bD={},bB,bA;
for(bB=0,bA=bC.length;
bB<bA;
bB++){bD[bC[bB]]=bz[bB]
}by.metadata=bD;
if(by._iO.onmetadata){by._iO.onmetadata.apply(by)
}};
this._onid3=function(bC,bz){ao._wD(by.id+": ID3 data received.");
var bD=[],bB,bA;
for(bB=0,bA=bC.length;
bB<bA;
bB++){bD[bC[bB]]=bz[bB]
}by.id3=a1(by.id3,bD);
if(by._iO.onid3){by._iO.onid3.apply(by)
}};
this._onconnect=function(bz){bz=(bz===1);
ao._wD(by.id+": "+(bz?"Connected.":"Failed to connect? - "+by.url),(bz?1:2));
by.connected=bz;
if(bz){by.failures=0;
if(J(by.id)){if(by.getAutoPlay()){by.play(d,by.getAutoPlay())
}else{if(by._iO.autoLoad){by.load()
}}}if(by._iO.onconnect){by._iO.onconnect.apply(by,[bz])
}}};
this._ondataerror=function(bz){if(by.playState>0){ao._wD(by.id+": Data error: "+bz);
if(by._iO.ondataerror){by._iO.ondataerror.apply(by)
}}};
this._debug()
};
be=function(){return(aa.body||aa._docElement||aa.getElementsByTagName("div")[0])
};
an=function(bj){return aa.getElementById(bj)
};
a1=function(bk,bj){var bm=(bk||{}),bl,bn;
bl=(bj===d?ao.defaultOptions:bj);
for(bn in bl){if(bl.hasOwnProperty(bn)&&bm[bn]===d){if(typeof bl[bn]!=="object"||bl[bn]===null){bm[bn]=bl[bn]
}else{bm[bn]=a1(bm[bn],bl[bn])
}}}return bm
};
aE=function(bj,bk){if(!bj.isHTML5&&bg===8){c.setTimeout(bk,0)
}else{bk()
}};
a2={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};
a5=function(bp,bo){var bn,bk=true,bj=(bo!==d),bm=ao.setupOptions,bl=a2;
if(bp===d){bk=[];
for(bn in bm){if(bm.hasOwnProperty(bn)){bk.push(bn)
}}for(bn in bl){if(bl.hasOwnProperty(bn)){if(typeof ao[bn]==="object"){bk.push(bn+": {...}")
}else{if(ao[bn] instanceof Function){bk.push(bn+": function() {...}")
}else{bk.push(bn)
}}}}ao._wD(bd("setup",bk.join(", ")));
return false
}for(bn in bp){if(bp.hasOwnProperty(bn)){if(typeof bp[bn]!=="object"||bp[bn]===null||bp[bn] instanceof Array||bp[bn] instanceof RegExp){if(bj&&bl[bo]!==d){ao[bo][bn]=bp[bn]
}else{if(bm[bn]!==d){ao.setupOptions[bn]=bp[bn];
ao[bn]=bp[bn]
}else{if(bl[bn]===d){ar(bd((ao[bn]===d?"setupUndef":"setupError"),bn),2);
bk=false
}else{if(ao[bn] instanceof Function){ao[bn].apply(ao,(bp[bn] instanceof Array?bp[bn]:[bp[bn]]))
}else{ao[bn]=bp[bn]
}}}}}else{if(bl[bn]===d){ar(bd((ao[bn]===d?"setupUndef":"setupError"),bn),2);
bk=false
}else{return a5(bp[bn],bn)
}}}}return bk
};
function bh(bj){return(ao.preferFlash&&at&&!ao.ignoreFlash&&(ao.flash[bj]!==d&&ao.flash[bj]))
}al=(function(){var bl=(c.attachEvent),bk={add:(bl?"attachEvent":"addEventListener"),remove:(bl?"detachEvent":"removeEventListener")};
function bn(br){var bq=S.call(br),bp=bq.length;
if(bl){bq[1]="on"+bq[1];
if(bp>3){bq.pop()
}}else{if(bp===3){bq.push(false)
}}return bq
}function bm(bp,bs){var bq=bp.shift(),br=[bk[bs]];
if(bl){bq[br](bp[0],bp[1])
}else{bq[br].apply(bq,bp)
}}function bo(){bm(bn(arguments),"add")
}function bj(){bm(bn(arguments),"remove")
}return{add:bo,remove:bj}
}());
function aP(bj){return function(bm){var bl=this._s,bk;
if(!bl||!bl._a){if(bl&&bl.id){ao._wD(bl.id+": Ignoring "+bm.type)
}else{ao._wD(a3+"Ignoring "+bm.type)
}bk=null
}else{bk=bj.call(this,bm)
}return bk
}
}i={abort:aP(function(){ao._wD(this._s.id+": abort")
}),canplay:aP(function(){var bl=this._s,bk;
if(bl._html5_canplay){return true
}bl._html5_canplay=true;
ao._wD(bl.id+": canplay");
bl._onbufferchange(0);
bk=(bl._iO.position!==d&&!isNaN(bl._iO.position)?bl._iO.position/h:null);
if(bl.position&&this.currentTime!==bk){ao._wD(bl.id+": canplay: Setting position to "+bk);
try{this.currentTime=bk
}catch(bj){ao._wD(bl.id+": canplay: Setting position of "+bk+" failed: "+bj.message,2)
}}if(bl._iO._oncanplay){bl._iO._oncanplay()
}}),canplaythrough:aP(function(){var bj=this._s;
if(!bj.loaded){bj._onbufferchange(0);
bj._whileloading(bj.bytesLoaded,bj.bytesTotal,bj._get_html5_duration());
bj._onload(true)
}}),ended:aP(function(){var bj=this._s;
ao._wD(bj.id+": ended");
bj._onfinish()
}),error:aP(function(){ao._wD(this._s.id+": HTML5 error, code "+this.error.code);
this._s._onload(false)
}),loadeddata:aP(function(){var bj=this._s;
ao._wD(bj.id+": loadeddata");
if(!bj._loaded&&!aX){bj.duration=bj._get_html5_duration()
}}),loadedmetadata:aP(function(){ao._wD(this._s.id+": loadedmetadata")
}),loadstart:aP(function(){ao._wD(this._s.id+": loadstart");
this._s._onbufferchange(1)
}),play:aP(function(){this._s._onbufferchange(0)
}),playing:aP(function(){ao._wD(this._s.id+": playing");
this._s._onbufferchange(0)
}),progress:aP(function(bo){var bs=this._s,bn,bl,bp,bk=0,br=(bo.type==="progress"),bj=bo.target.buffered,bm=(bo.loaded||0),bq=(bo.total||1);
bs.buffered=[];
if(bj&&bj.length){for(bn=0,bl=bj.length;
bn<bl;
bn++){bs.buffered.push({start:bj.start(bn)*h,end:bj.end(bn)*h})
}bk=(bj.end(0)-bj.start(0))*h;
bm=Math.min(1,bk/(bo.target.duration*h));
if(br&&bj.length>1){bp=[];
bl=bj.length;
for(bn=0;
bn<bl;
bn++){bp.push(bo.target.buffered.start(bn)*h+"-"+bo.target.buffered.end(bn)*h)
}ao._wD(this._s.id+": progress, timeRanges: "+bp.join(", "))
}if(br&&!isNaN(bm)){ao._wD(this._s.id+": progress, "+Math.floor(bm*100)+"% loaded")
}}if(!isNaN(bm)){bs._onbufferchange(0);
bs._whileloading(bm,bq,bs._get_html5_duration());
if(bm&&bq&&bm===bq){i.canplaythrough.call(this,bo)
}}}),ratechange:aP(function(){ao._wD(this._s.id+": ratechange")
}),suspend:aP(function(bk){var bj=this._s;
ao._wD(this._s.id+": suspend");
i.progress.call(this,bk);
bj._onsuspend()
}),stalled:aP(function(){ao._wD(this._s.id+": stalled")
}),timeupdate:aP(function(){this._s._onTimer()
}),waiting:aP(function(){var bj=this._s;
ao._wD(this._s.id+": waiting");
bj._onbufferchange(1)
})};
a9=function(bk){var bj;
if(!bk||(!bk.type&&!bk.url&&!bk.serverURL)){bj=false
}else{if(bk.serverURL||(bk.type&&bh(bk.type))){bj=false
}else{bj=((bk.type?am({type:bk.type}):am({url:bk.url})||ao.html5Only||bk.url.match(/data\:/i)))
}}return bj
};
g=function(bj){var bk;
if(bj){bk=(aX&&!aV?null:(j?o:null));
bj.src=bk;
if(bj._called_unload!==undefined){bj._called_load=false
}}if(aY){l=null
}return bk
};
am=function(bq){if(!ao.useHTML5Audio||!ao.hasHTML5){return false
}var bm=(bq.url||null),bo=(bq.type||null),bk=ao.audioFormats,bj,bp,bl,bn;
if(bo&&ao.html5[bo]!==d){return(ao.html5[bo]&&!bh(bo))
}if(!aL){aL=[];
for(bn in bk){if(bk.hasOwnProperty(bn)){aL.push(bn);
if(bk[bn].related){aL=aL.concat(bk[bn].related)
}}}aL=new RegExp("\\.("+aL.join("|")+")(\\?.*)?$","i")
}bl=(bm?bm.toLowerCase().match(aL):null);
if(!bl||!bl.length){if(!bo){bj=false
}else{bp=bo.indexOf(";");
bl=(bp!==-1?bo.substr(0,bp):bo).substr(6)
}}else{bl=bl[1]
}if(bl&&ao.html5[bl]!==d){bj=(ao.html5[bl]&&!bh(bl))
}else{bo="audio/"+bl;
bj=ao.html5.canPlayType({type:bo});
ao.html5[bl]=bj;
bj=(bj&&ao.html5[bo]&&!bh(bo))
}return bj
};
aN=function(){if(!ao.useHTML5Audio||!ao.hasHTML5){ao.html5.usingFlash=true;
C=true;
return false
}var bj=(Audio!==d?(v&&opera.version()<10?new Audio(null):new Audio()):null),bn,bp,bm={},bk,bl;
function bo(bs){var bu,bv,bt,br=false,bq=false;
if(!bj||typeof bj.canPlayType!=="function"){return br
}if(bs instanceof Array){for(bv=0,bt=bs.length;
bv<bt;
bv++){if(ao.html5[bs[bv]]||bj.canPlayType(bs[bv]).match(ao.html5Test)){bq=true;
ao.html5[bs[bv]]=true;
ao.flash[bs[bv]]=!!(bs[bv].match(r))
}}br=bq
}else{bu=(bj&&typeof bj.canPlayType==="function"?bj.canPlayType(bs):false);
br=!!(bu&&(bu.match(ao.html5Test)))
}return br
}bk=ao.audioFormats;
for(bn in bk){if(bk.hasOwnProperty(bn)){bp="audio/"+bn;
bm[bn]=bo(bk[bn].type);
bm[bp]=bm[bn];
if(bn.match(r)){ao.flash[bn]=true;
ao.flash[bp]=true
}else{ao.flash[bn]=false;
ao.flash[bp]=false
}if(bk[bn]&&bk[bn].related){for(bl=bk[bn].related.length-1;
bl>=0;
bl--){bm["audio/"+bk[bn].related[bl]]=bm[bn];
ao.html5[bk[bn].related[bl]]=bm[bn];
ao.flash[bk[bn].related[bl]]=bm[bn]
}}}}bm.canPlayType=(bj?bo:null);
ao.html5=a1(ao.html5,bm);
ao.html5.usingFlash=T();
C=ao.html5.usingFlash;
return true
};
e={notReady:"Unavailable - wait until onready() has fired.",notOK:"Audio support is not available.",domError:aW+"exception caught while appending SWF to DOM.",spcWmode:"Removing wmode, preventing known SWF loading issue(s)",swf404:G+"Verify that %s is a valid path.",tryDebug:"Try "+aW+".debugFlash = true for more security details (output goes to SWF.)",checkSWF:"See SWF output for more debug info.",localFail:G+"Non-HTTP page ("+aa.location.protocol+" URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",waitFocus:G+"Special case: Waiting for SWF to load with window focus...",waitForever:G+"Waiting indefinitely for Flash (will recover if unblocked)...",waitSWF:G+"Waiting for 100% SWF load...",needFunction:G+"Function object expected for %s",badID:'Sound ID "%s" should be a string, starting with a non-numeric character',currentObj:G+"_debug(): Current sound objects",waitOnload:G+"Waiting for window.onload()",docLoaded:G+"Document already loaded",onload:G+"initComplete(): calling soundManager.onload()",onloadOK:aW+".onload() complete",didInit:G+"init(): Already called?",secNote:"Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",badRemove:G+"Failed to remove Flash node.",shutdown:aW+".disable(): Shutting down",queue:G+"Queueing %s handler",smError:"SMSound.load(): Exception: JS-Flash communication failed, or JS error.",fbTimeout:"No flash response, applying ."+F.swfTimedout+" CSS...",fbLoaded:"Flash loaded",fbHandler:G+"flashBlockHandler()",manURL:"SMSound.load(): Using manually-assigned URL",onURL:aW+".load(): current URL already assigned.",badFV:aW+'.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',as2loop:"Note: Setting stream:false so looping can work (flash 8 limitation)",noNSLoop:"Note: Looping not implemented for MovieStar formats",needfl9:"Note: Switching to flash 9, required for MP4 formats.",mfTimeout:"Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",needFlash:G+"Fatal error: Flash is needed to play some required formats, but is not available.",gotFocus:G+"Got window focus.",policy:"Enabling usePolicyFile for data access",setup:aW+".setup(): allowed parameters: %s",setupError:aW+'.setup(): "%s" cannot be assigned with this method.',setupUndef:aW+'.setup(): Could not find option "%s"',setupLate:aW+".setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",noURL:G+"Flash URL required. Call soundManager.setup({url:...}) to get started.",sm2Loaded:"SoundManager 2: Ready.",reset:aW+".reset(): Removing event callbacks",mobileUA:"Mobile UA detected, preferring HTML5 by default.",globalHTML5:"Using singleton HTML5 Audio() pattern for this device."};
bd=function(){var bk=S.call(arguments),bn=bk.shift(),bm=(e&&e[bn]?e[bn]:""),bl,bj;
if(bm&&bk&&bk.length){for(bl=0,bj=bk.length;
bl<bj;
bl++){bm=bm.replace("%s",bk[bl])
}}return bm
};
B=function(bj){if(bg===8&&bj.loops>1&&bj.stream){W("as2loop");
bj.stream=false
}return bj
};
p=function(bk,bj){if(bk&&!bk.usePolicyFile&&(bk.onid3||bk.usePeakData||bk.useWaveformData||bk.useEQData)){ao._wD((bj||"")+bd("policy"));
bk.usePolicyFile=true
}return bk
};
ar=function(bj){if(K&&console.warn!==d){console.warn(bj)
}else{ao._wD(bj)
}};
U=function(){return false
};
X=function(bk){var bj;
for(bj in bk){if(bk.hasOwnProperty(bj)&&typeof bk[bj]==="function"){bk[bj]=U
}}bj=null
};
s=function(bj){if(bj===d){bj=false
}if(a0||bj){ao.disable(bj)
}};
az=function(bj){var bk=null,bl;
if(bj){if(bj.match(/\.swf(\?.*)?$/i)){bk=bj.substr(bj.toLowerCase().lastIndexOf(".swf?")+4);
if(bk){return bj
}}else{if(bj.lastIndexOf("/")!==bj.length-1){bj+="/"
}}}bl=(bj&&bj.lastIndexOf("/")!==-1?bj.substr(0,bj.lastIndexOf("/")+1):"./")+ao.movieURL;
if(ao.noSWFCache){bl+=("?ts="+new Date().getTime())
}return bl
};
aU=function(){bg=parseInt(ao.flashVersion,10);
if(bg!==8&&bg!==9){ao._wD(bd("badFV",bg,Y));
ao.flashVersion=bg=Y
}var bj=(ao.debugMode||ao.debugFlash?"_debug.swf":".swf");
if(ao.useHTML5Audio&&!ao.html5Only&&ao.audioFormats.mp4.required&&bg<9){ao._wD(bd("needfl9"));
ao.flashVersion=bg=9
}ao.version=ao.versionNumber+(ao.html5Only?" (HTML5-only mode)":(bg===9?" (AS3/Flash 9)":" (AS2/Flash 8)"));
if(bg>8){ao.defaultOptions=a1(ao.defaultOptions,ao.flash9Options);
ao.features.buffering=true;
ao.defaultOptions=a1(ao.defaultOptions,ao.movieStarOptions);
ao.filePatterns.flash9=new RegExp("\\.(mp3|"+V.join("|")+")(\\?.*)?$","i");
ao.features.movieStar=true
}else{ao.features.movieStar=false
}ao.filePattern=ao.filePatterns[(bg!==8?"flash9":"flash8")];
ao.movieURL=(bg===8?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",bj);
ao.features.peakData=ao.features.waveformData=ao.features.eqData=(bg>8)
};
m=function(bj,bk){if(!ad){return false
}ad._setPolling(bj,bk)
};
E=function(){if(ao.debugURLParam.test(y)){ao.debugMode=true
}if(an(ao.debugID)){return false
}var bo,bn,bj,bl,bk;
if(ao.debugMode&&!an(ao.debugID)&&(!K||!ao.useConsole||!ao.consoleOnly)){bo=aa.createElement("div");
bo.id=ao.debugID+"-toggle";
bl={position:"fixed",bottom:"0px",right:"0px",width:"1.2em",height:"1.2em",lineHeight:"1.2em",margin:"2px",textAlign:"center",border:"1px solid #999",cursor:"pointer",background:"#fff",color:"#333",zIndex:10001};
bo.appendChild(aa.createTextNode("-"));
bo.onclick=aC;
bo.title="Toggle SM2 debug console";
if(au.match(/msie 6/i)){bo.style.position="absolute";
bo.style.cursor="hand"
}for(bk in bl){if(bl.hasOwnProperty(bk)){bo.style[bk]=bl[bk]
}}bn=aa.createElement("div");
bn.id=ao.debugID;
bn.style.display=(ao.debugMode?"block":"none");
if(ao.debugMode&&!an(bo.id)){try{bj=be();
bj.appendChild(bo)
}catch(bm){throw new Error(bd("domError")+" \n"+bm.toString())
}bj.appendChild(bn)
}}bj=null
};
J=this.getSoundById;
W=function(bk,bj){return(!bk?"":ao._wD(bd(bk),bj))
};
aC=function(){var bk=an(ao.debugID),bj=an(ao.debugID+"-toggle");
if(!bk){return false
}if(bf){bj.innerHTML="+";
bk.style.display="none"
}else{bj.innerHTML="-";
bk.style.display="block"
}bf=!bf
};
N=function(bm,bj,bk){if(c.sm2Debugger!==d){try{sm2Debugger.handleEvent(bm,bj,bk)
}catch(bl){return false
}}return true
};
n=function(){var bj=[];
if(ao.debugMode){bj.push(F.sm2Debug)
}if(ao.debugFlash){bj.push(F.flashDebug)
}if(ao.useHighPerformance){bj.push(F.highPerf)
}return bj.join(" ")
};
aA=function(){var bk=bd("fbHandler"),bm=ao.getMoviePercent(),bl=F,bj={type:"FLASHBLOCK"};
if(ao.html5Only){return false
}if(!ao.ok()){if(C){ao.oMC.className=n()+" "+bl.swfDefault+" "+(bm===null?bl.swfTimedout:bl.swfError);
ao._wD(bk+": "+bd("fbTimeout")+(bm?" ("+bd("fbLoaded")+")":""))
}ao.didFlashBlock=true;
aR({type:"ontimeout",ignoreInit:true,error:bj});
ab(bj)
}else{if(ao.didFlashBlock){ao._wD(bk+": Unblocked")
}if(ao.oMC){ao.oMC.className=[n(),bl.swfDefault,bl.swfLoaded+(ao.didFlashBlock?" "+bl.swfUnblocked:"")].join(" ")
}}};
Z=function(bl,bk,bj){if(w[bl]===d){w[bl]=[]
}w[bl].push({method:bk,scope:(bj||null),fired:false})
};
aR=function(bp){if(!bp){bp={type:(ao.ok()?"onready":"ontimeout")}
}if(!ax&&bp&&!bp.ignoreInit){return false
}if(bp.type==="ontimeout"&&(ao.ok()||(a0&&!bp.ignoreInit))){return false
}var bl={success:(bp&&bp.ignoreInit?ao.ok():!a0)},bk=(bp&&bp.type?w[bp.type]||[]:[]),bj=[],bq,bo,bn=[bl],bm=(C&&!ao.ok());
if(bp.error){bn[0].error=bp.error
}for(bq=0,bo=bk.length;
bq<bo;
bq++){if(bk[bq].fired!==true){bj.push(bk[bq])
}}if(bj.length){for(bq=0,bo=bj.length;
bq<bo;
bq++){if(bj[bq].scope){bj[bq].method.apply(bj[bq].scope,bn)
}else{bj[bq].method.apply(this,bn)
}if(!bm){bj[bq].fired=true
}}}return true
};
t=function(){c.setTimeout(function(){if(ao.useFlashBlock){aA()
}aR();
if(typeof ao.onload==="function"){W("onload",1);
ao.onload.apply(c);
W("onloadOK",1)
}if(ao.waitForWindowLoad){al.add(c,"load",t)
}},1)
};
R=function(){if(at!==d){return at
}var bj=false,bq=navigator,bm=bq.plugins,bp,bl,bk,bo=c.ActiveXObject;
if(bm&&bm.length){bl="application/x-shockwave-flash";
bk=bq.mimeTypes;
if(bk&&bk[bl]&&bk[bl].enabledPlugin&&bk[bl].enabledPlugin.description){bj=true
}}else{if(bo!==d&&!au.match(/MSAppHost/i)){try{bp=new bo("ShockwaveFlash.ShockwaveFlash")
}catch(bn){bp=null
}bj=(!!bp);
bp=null
}}at=bj;
return bj
};
T=function(){var bk,bm,bj=ao.audioFormats,bl=(aV&&!!(au.match(/os (1|2|3_0|3_1)/i)));
if(bl){ao.hasHTML5=false;
ao.html5Only=true;
if(ao.oMC){ao.oMC.style.display="none"
}}else{if(ao.useHTML5Audio){if(!ao.html5||!ao.html5.canPlayType){ao._wD("SoundManager: No HTML5 Audio() support detected.");
ao.hasHTML5=false
}if(a4){ao._wD(G+"Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - "+(!at?" would use flash fallback for MP3/MP4, but none detected.":"will use flash fallback for MP3/MP4, if available"),1)
}}}if(ao.useHTML5Audio&&ao.hasHTML5){af=true;
for(bm in bj){if(bj.hasOwnProperty(bm)){if(bj[bm].required){if(!ao.html5.canPlayType(bj[bm].type)){af=false;
bk=true
}else{if(ao.preferFlash&&(ao.flash[bm]||ao.flash[bj[bm].type])){bk=true
}}}}}}if(ao.ignoreFlash){bk=false;
af=true
}ao.html5Only=(ao.hasHTML5&&ao.useHTML5Audio&&!bk);
return(!ao.html5Only)
};
ac=function(bl){var bn,bk,bm=0,bj;
if(bl instanceof Array){for(bn=0,bk=bl.length;
bn<bk;
bn++){if(bl[bn] instanceof Object){if(ao.canPlayMIME(bl[bn].type)){bm=bn;
break
}}else{if(ao.canPlayURL(bl[bn])){bm=bn;
break
}}}if(bl[bm].url){bl[bm]=bl[bm].url
}bj=bl[bm]
}else{bj=bl
}return bj
};
aO=function(bj){if(!bj._hasTimer){bj._hasTimer=true;
if(!aS&&ao.html5PollingInterval){if(bc===null&&L===0){bc=setInterval(ae,ao.html5PollingInterval)
}L++
}}};
O=function(bj){if(bj._hasTimer){bj._hasTimer=false;
if(!aS&&ao.html5PollingInterval){L--
}}};
ae=function(){var bj;
if(bc!==null&&!L){clearInterval(bc);
bc=null;
return false
}for(bj=ao.soundIDs.length-1;
bj>=0;
bj--){if(ao.sounds[ao.soundIDs[bj]].isHTML5&&ao.sounds[ao.soundIDs[bj]]._hasTimer){ao.sounds[ao.soundIDs[bj]]._onTimer()
}}};
ab=function(bj){bj=(bj!==d?bj:{});
if(typeof ao.onerror==="function"){ao.onerror.apply(c,[{type:(bj.type!==d?bj.type:null)}])
}if(bj.fatal!==d&&bj.fatal){ao.disable()
}};
D=function(){if(!a4||!R()){return false
}var bj=ao.audioFormats,bk,bl;
for(bl in bj){if(bj.hasOwnProperty(bl)){if(bl==="mp3"||bl==="mp4"){ao._wD(aW+": Using flash fallback for "+bl+" format");
ao.html5[bl]=false;
if(bj[bl]&&bj[bl].related){for(bk=bj[bl].related.length-1;
bk>=0;
bk--){ao.html5[bj[bl].related[bk]]=false
}}}}}};
this._setSandboxType=function(bj){var bk=ao.sandbox;
bk.type=bj;
bk.description=bk.types[(bk.types[bj]!==d?bj:"unknown")];
if(bk.type==="localWithFile"){bk.noRemote=true;
bk.noLocal=false;
W("secNote",2)
}else{if(bk.type==="localWithNetwork"){bk.noRemote=false;
bk.noLocal=true
}else{if(bk.type==="localTrusted"){bk.noRemote=false;
bk.noLocal=false
}}}};
this._externalInterfaceOK=function(bk){if(ao.swfLoaded){return false
}var bl;
N("swf",true);
N("flashtojs",true);
ao.swfLoaded=true;
a8=false;
if(a4){D()
}if(!bk||bk.replace(/\+dev/i,"")!==ao.versionNumber.replace(/\+dev/i,"")){bl=aW+': Fatal: JavaScript file build "'+ao.versionNumber+'" does not match Flash SWF build "'+bk+'" at '+ao.url+". Ensure both are up-to-date.";
setTimeout(function bj(){throw new Error(bl)
},0);
return false
}setTimeout(aJ,a6?100:1)
};
I=function(bw,bn){if(ap&&aT){return false
}function by(){var bE=[],bG,bF=[],bD=" + ";
bG="SoundManager "+ao.version+(!ao.html5Only&&ao.useHTML5Audio?(ao.hasHTML5?" + HTML5 audio":", no HTML5 audio support"):"");
if(!ao.html5Only){if(ao.preferFlash){bE.push("preferFlash")
}if(ao.useHighPerformance){bE.push("useHighPerformance")
}if(ao.flashPollingInterval){bE.push("flashPollingInterval ("+ao.flashPollingInterval+"ms)")
}if(ao.html5PollingInterval){bE.push("html5PollingInterval ("+ao.html5PollingInterval+"ms)")
}if(ao.wmode){bE.push("wmode ("+ao.wmode+")")
}if(ao.debugFlash){bE.push("debugFlash")
}if(ao.useFlashBlock){bE.push("flashBlock")
}}else{if(ao.html5PollingInterval){bE.push("html5PollingInterval ("+ao.html5PollingInterval+"ms)")
}}if(bE.length){bF=bF.concat([bE.join(bD)])
}ao._wD(bG+(bF.length?bD+bF.join(", "):""),1);
aF()
}if(ao.html5Only){aU();
by();
ao.oMC=an(ao.movieID);
aJ();
ap=true;
aT=true;
return false
}var bv=(bn||ao.url),br=(ao.altURL||bv),bC="JS/Flash audio component (SoundManager 2)",bu=be(),bt=n(),bj=null,bm=aa.getElementsByTagName("html")[0],bz,bo,bA,bs,bq,bp,bl,bB;
bj=(bm&&bm.dir&&bm.dir.match(/rtl/i));
bw=(bw===d?ao.id:bw);
function bk(bD,bE){return'<param name="'+bD+'" value="'+bE+'" />'
}aU();
ao.url=az(H?bv:br);
bn=ao.url;
ao.wmode=(!ao.wmode&&ao.useHighPerformance?"transparent":ao.wmode);
if(ao.wmode!==null&&(au.match(/msie 8/i)||(!a6&&!ao.useHighPerformance))&&navigator.platform.match(/win32|win64/i)){aq.push(e.spcWmode);
ao.wmode=null
}bz={name:bw,id:bw,src:bn,quality:"high",allowScriptAccess:ao.allowScriptAccess,bgcolor:ao.bgColor,pluginspage:aM+"www.macromedia.com/go/getflashplayer",title:bC,type:"application/x-shockwave-flash",wmode:ao.wmode,hasPriority:"true"};
if(ao.debugFlash){bz.FlashVars="debug=1"
}if(!ao.wmode){delete bz.wmode
}if(a6){bo=aa.createElement("div");
bs=['<object id="'+bw+'" data="'+bn+'" type="'+bz.type+'" title="'+bz.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+aM+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',bk("movie",bn),bk("AllowScriptAccess",ao.allowScriptAccess),bk("quality",bz.quality),(ao.wmode?bk("wmode",ao.wmode):""),bk("bgcolor",ao.bgColor),bk("hasPriority","true"),(ao.debugFlash?bk("FlashVars",bz.FlashVars):""),"</object>"].join("")
}else{bo=aa.createElement("embed");
for(bA in bz){if(bz.hasOwnProperty(bA)){bo.setAttribute(bA,bz[bA])
}}}E();
bt=n();
bu=be();
if(bu){ao.oMC=(an(ao.movieID)||aa.createElement("div"));
if(!ao.oMC.id){ao.oMC.id=ao.movieID;
ao.oMC.className=F.swfDefault+" "+bt;
bp=null;
bq=null;
if(!ao.useFlashBlock){if(ao.useHighPerformance){bp={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}
}else{bp={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"};
if(bj){bp.left=Math.abs(parseInt(bp.left,10))+"px"
}}}if(aG){ao.oMC.style.zIndex=10000
}if(!ao.debugFlash){for(bl in bp){if(bp.hasOwnProperty(bl)){ao.oMC.style[bl]=bp[bl]
}}}try{if(!a6){ao.oMC.appendChild(bo)
}bu.appendChild(ao.oMC);
if(a6){bq=ao.oMC.appendChild(aa.createElement("div"));
bq.className=F.swfBox;
bq.innerHTML=bs
}aT=true
}catch(bx){throw new Error(bd("domError")+" \n"+bx.toString())
}}else{bB=ao.oMC.className;
ao.oMC.className=(bB?bB+" ":F.swfDefault)+(bt?" "+bt:"");
ao.oMC.appendChild(bo);
if(a6){bq=ao.oMC.appendChild(aa.createElement("div"));
bq.className=F.swfBox;
bq.innerHTML=bs
}aT=true
}}ap=true;
by();
return true
};
k=function(){if(ao.html5Only){I();
return false
}if(ad){return false
}if(!ao.url){W("noURL");
return false
}ad=ao.getMovie(ao.id);
if(!ad){if(!aK){I(ao.id,ao.url)
}else{if(!a6){ao.oMC.appendChild(aK)
}else{ao.oMC.innerHTML=aj
}aK=null;
ap=true
}ad=ao.getMovie(ao.id)
}if(typeof ao.oninitmovie==="function"){setTimeout(ao.oninitmovie,1)
}Q();
return true
};
z=function(){setTimeout(bb,1000)
};
bb=function(){var bk,bj=false;
if(!ao.url){return false
}if(aQ){return false
}aQ=true;
al.remove(c,"load",z);
if(a8&&!aB){W("waitFocus");
return false
}if(!ax){bk=ao.getMoviePercent();
if(bk>0&&bk<100){bj=true
}}setTimeout(function(){bk=ao.getMoviePercent();
if(bj){aQ=false;
ao._wD(bd("waitSWF"));
c.setTimeout(z,1);
return false
}if(!ax){ao._wD(aW+": No Flash response within expected time. Likely causes: "+(bk===0?"SWF load failed, ":"")+"Flash blocked or JS-Flash security error."+(ao.debugFlash?" "+bd("checkSWF"):""),2);
if(!H&&bk){W("localFail",2);
if(!ao.debugFlash){W("tryDebug",2)
}}if(bk===0){ao._wD(bd("swf404",ao.url),1)
}N("flashtojs",false,": Timed out"+H?" (Check flash security or flash blockers)":" (No plugin/missing SWF?)")
}if(!ax&&ay){if(bk===null){if(ao.useFlashBlock||ao.flashLoadTimeout===0){if(ao.useFlashBlock){aA()
}W("waitForever")
}else{if(!ao.useFlashBlock&&af){c.setTimeout(function(){ar(G+"useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false...");
ao.setup({preferFlash:false}).reboot();
ao.didFlashBlock=true;
ao.beginDelayedInit()
},1)
}else{W("waitForever");
aR({type:"ontimeout",ignoreInit:true})
}}}else{if(ao.flashLoadTimeout===0){W("waitForever")
}else{s(true)
}}}},ao.flashLoadTimeout)
};
u=function(){function bj(){al.remove(c,"focus",u)
}if(aB||!a8){bj();
return true
}ay=true;
aB=true;
W("gotFocus");
aQ=false;
z();
bj();
return true
};
Q=function(){if(aq.length){ao._wD("SoundManager 2: "+aq.join(" "),1);
aq=[]
}};
aF=function(){Q();
var bk,bj=[];
if(ao.useHTML5Audio&&ao.hasHTML5){for(bk in ao.audioFormats){if(ao.audioFormats.hasOwnProperty(bk)){bj.push(bk+" = "+ao.html5[bk]+(!ao.html5[bk]&&C&&ao.flash[bk]?" (using flash)":(ao.preferFlash&&ao.flash[bk]&&C?" (preferring flash)":(!ao.html5[bk]?" ("+(ao.audioFormats[bk].required?"required, ":"")+"and no flash support)":""))))
}}ao._wD("SoundManager 2 HTML5 support: "+bj.join(", "),1)
}};
x=function(bm){if(ax){return false
}if(ao.html5Only){W("sm2Loaded");
ax=true;
t();
N("onload",true);
return true
}var bk=(ao.useFlashBlock&&ao.flashLoadTimeout&&!ao.getMoviePercent()),bj=true,bl;
if(!bk){ax=true;
if(a0){bl={type:(!at&&C?"NO_FLASH":"INIT_TIMEOUT")}
}}ao._wD("SoundManager 2 "+(a0?"failed to load":"loaded")+" ("+(a0?"Flash security/load error":"OK")+")",a0?2:1);
if(a0||bm){if(ao.useFlashBlock&&ao.oMC){ao.oMC.className=n()+" "+(ao.getMoviePercent()===null?F.swfTimedout:F.swfError)
}aR({type:"ontimeout",error:bl,ignoreInit:true});
N("onload",false);
ab(bl);
bj=false
}else{N("onload",true)
}if(!a0){if(ao.waitForWindowLoad&&!ba){W("waitOnload");
al.add(c,"load",t)
}else{if(ao.waitForWindowLoad&&ba){W("docLoaded")
}t()
}}return bj
};
A=function(){var bj,bk=ao.setupOptions;
for(bj in bk){if(bk.hasOwnProperty(bj)){if(ao[bj]===d){ao[bj]=bk[bj]
}else{if(ao[bj]!==bk[bj]){ao.setupOptions[bj]=ao[bj]
}}}}};
aJ=function(){if(ax){W("didInit");
return false
}function bj(){al.remove(c,"load",ao.beginDelayedInit)
}if(ao.html5Only){if(!ax){bj();
ao.enabled=true;
x()
}return true
}k();
try{ad._externalInterfaceTest(false);
m(true,(ao.flashPollingInterval||(ao.useHighPerformance?10:50)));
if(!ao.debugMode){ad._disableDebug()
}ao.enabled=true;
N("jstoflash",true);
if(!ao.html5Only){al.add(c,"unload",U)
}}catch(bk){ao._wD("js/flash exception: "+bk.toString());
N("jstoflash",false);
ab({type:"JS_TO_FLASH_EXCEPTION",fatal:true});
s(true);
x();
return false
}x();
bj();
return true
};
M=function(){if(q){return false
}q=true;
A();
E();
(function(){var bm="sm2-usehtml5audio=",bk="sm2-preferflash=",bj=null,bn=null,bl=y.toLowerCase();
if(bl.indexOf(bm)!==-1){bj=(bl.charAt(bl.indexOf(bm)+bm.length)==="1");
if(K){console.log((bj?"Enabling ":"Disabling ")+"useHTML5Audio via URL parameter")
}ao.setup({useHTML5Audio:bj})
}if(bl.indexOf(bk)!==-1){bn=(bl.charAt(bl.indexOf(bk)+bk.length)==="1");
if(K){console.log((bn?"Enabling ":"Disabling ")+"preferFlash via URL parameter")
}ao.setup({preferFlash:bn})
}}());
if(!at&&ao.hasHTML5){ao._wD("SoundManager: No Flash detected"+(!ao.useHTML5Audio?", enabling HTML5.":". Trying HTML5-only mode."),1);
ao.setup({useHTML5Audio:true,preferFlash:false})
}aN();
if(!at&&C){aq.push(e.needFlash);
ao.setup({flashLoadTimeout:1})
}if(aa.removeEventListener){aa.removeEventListener("DOMContentLoaded",M,false)
}k();
return true
};
P=function(){if(aa.readyState==="complete"){M();
aa.detachEvent("onreadystatechange",P)
}return true
};
bi=function(){ba=true;
al.remove(c,"load",bi)
};
aD=function(){if(aS){if(!ao.setupOptions.useHTML5Audio||ao.setupOptions.preferFlash){aq.push(e.mobileUA)
}ao.setupOptions.useHTML5Audio=true;
ao.setupOptions.preferFlash=false;
if(aV||(av&&!au.match(/android\s2\.3/i))){aq.push(e.globalHTML5);
if(aV){ao.ignoreFlash=true
}aY=true
}}};
aD();
R();
al.add(c,"focus",u);
al.add(c,"load",z);
al.add(c,"load",bi);
if(aa.addEventListener){aa.addEventListener("DOMContentLoaded",M,false)
}else{if(aa.attachEvent){aa.attachEvent("onreadystatechange",P)
}else{N("onload",false);
ab({type:"NO_DOM2_EVENTS",fatal:true})
}}}if(c.SM2_DEFER===undefined||!SM2_DEFER){b=new a()
}c.SoundManager=a;
c.soundManager=b
}(window));