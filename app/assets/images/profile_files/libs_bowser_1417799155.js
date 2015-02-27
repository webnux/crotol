/*!
  * Bowser - a browser detector
  * https://github.com/ded/bowser
  * MIT License | (c) Dustin Diaz 2014
  */
;
!function(a,b){if(typeof module!="undefined"&&module.exports){module.exports.browser=b()
}else{if(typeof define=="function"&&define.amd){define(b)
}else{this[a]=b()
}}}("bowser",function(){var b=true;
function a(e){function i(p){var o=e.match(p);
return(o&&o.length>1&&o[1])||""
}var m=i(/(ipod|iphone|ipad)/i).toLowerCase(),l=/like android/i.test(e),g=!l&&/android/i.test(e),d=i(/version\/(\d+(\.\d+)?)/i),k=/tablet/i.test(e),f=!k&&/[^-]mobi/i.test(e),n;
if(/opera|opr/i.test(e)){n={name:"Opera",opera:b,version:d||i(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}
}else{if(/windows phone/i.test(e)){n={name:"Windows Phone",windowsphone:b,msie:b,version:i(/iemobile\/(\d+(\.\d+)?)/i)}
}else{if(/msie|trident/i.test(e)){n={name:"Internet Explorer",msie:b,version:i(/(?:msie |rv:)(\d+(\.\d+)?)/i)}
}else{if(/chrome|crios|crmo/i.test(e)){n={name:"Chrome",chrome:b,version:i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}
}else{if(m){n={name:m=="iphone"?"iPhone":m=="ipad"?"iPad":"iPod"};
if(d){n.version=d
}}else{if(/sailfish/i.test(e)){n={name:"Sailfish",sailfish:b,version:i(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}
}else{if(/seamonkey\//i.test(e)){n={name:"SeaMonkey",seamonkey:b,version:i(/seamonkey\/(\d+(\.\d+)?)/i)}
}else{if(/firefox|iceweasel/i.test(e)){n={name:"Firefox",firefox:b,version:i(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)};
if(/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e)){n.firefoxos=b
}}else{if(/silk/i.test(e)){n={name:"Amazon Silk",silk:b,version:i(/silk\/(\d+(\.\d+)?)/i)}
}else{if(g){n={name:"Android",version:d}
}else{if(/phantom/i.test(e)){n={name:"PhantomJS",phantom:b,version:i(/phantomjs\/(\d+(\.\d+)?)/i)}
}else{if(/blackberry|\bbb\d+/i.test(e)||/rim\stablet/i.test(e)){n={name:"BlackBerry",blackberry:b,version:d||i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}
}else{if(/(web|hpw)os/i.test(e)){n={name:"WebOS",webos:b,version:d||i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)};
/touchpad\//i.test(e)&&(n.touchpad=b)
}else{if(/bada/i.test(e)){n={name:"Bada",bada:b,version:i(/dolfin\/(\d+(\.\d+)?)/i)}
}else{if(/tizen/i.test(e)){n={name:"Tizen",tizen:b,version:i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||d}
}else{if(/safari/i.test(e)){n={name:"Safari",safari:b,version:d}
}else{n={}
}}}}}}}}}}}}}}}}if(/(apple)?webkit/i.test(e)){n.name=n.name||"Webkit";
n.webkit=b;
if(!n.version&&d){n.version=d
}}else{if(!n.opera&&/gecko\//i.test(e)){n.name=n.name||"Gecko";
n.gecko=b;
n.version=n.version||i(/gecko\/(\d+(\.\d+)?)/i)
}}if(g||n.silk){n.android=b
}else{if(m){n[m]=b;
n.ios=b
}}var h="";
if(m){h=i(/os (\d+([_\s]\d+)*) like mac os x/i);
h=h.replace(/[_\s]/g,".")
}else{if(g){h=i(/android[ \/-](\d+(\.\d+)*)/i)
}else{if(n.windowsphone){h=i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i)
}else{if(n.webos){h=i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i)
}else{if(n.blackberry){h=i(/rim\stablet\sos\s(\d+(\.\d+)*)/i)
}else{if(n.bada){h=i(/bada\/(\d+(\.\d+)*)/i)
}else{if(n.tizen){h=i(/tizen[\/\s](\d+(\.\d+)*)/i)
}}}}}}}if(h){n.osversion=h
}var j=h.split(".")[0];
if(k||m=="ipad"||(g&&(j==3||(j==4&&!f)))||n.silk){n.tablet=b
}else{if(f||m=="iphone"||m=="ipod"||g||n.blackberry||n.webos||n.bada){n.mobile=b
}}if((n.msie&&n.version>=10)||(n.chrome&&n.version>=20)||(n.firefox&&n.version>=20)||(n.safari&&n.version>=6)||(n.opera&&n.version>=10)||(n.ios&&n.osversion&&n.osversion.split(".")[0]>=6)||(n.blackberry&&n.version>=10.1)){n.a=b
}else{if((n.msie&&n.version<10)||(n.chrome&&n.version<20)||(n.firefox&&n.version<20)||(n.safari&&n.version<6)||(n.opera&&n.version<10)||(n.ios&&n.osversion&&n.osversion.split(".")[0]<6)){n.c=b
}else{n.x=b
}}return n
}var c=a(typeof navigator!=="undefined"?navigator.userAgent:"");
c._detect=a;
return c
});