var plastic={widescreen_threshold:1441,init:function(){var b="ontouchstart" in document.documentElement;
if(b){$("html").addClass("touch");
FastClick.attach(document.body)
}else{$("html").addClass("no_touch")
}plastic.initTabs();
plastic.initAlerts();
if(typeof TS!="undefined"&&TS.boot_data.login_data){plastic.initNav()
}if($("#api_nav").length){plastic.initAPINav()
}var d=$(window);
var c=$("body");
var a=$("nav#site_nav");
d.resize(function(){var f=d.width();
var e=d.height();
if(f>=plastic.widescreen_threshold&&!c.hasClass("widescreen")){c.addClass("widescreen")
}else{if(f<plastic.widescreen_threshold&&c.hasClass("widescreen")){a.addClass("no_transition");
c.removeClass("widescreen");
setTimeout(function(){a.removeClass("no_transition")
},350)
}}$("#page").css("min-height",e)
}).resize();
setTimeout(function(){a.removeClass("no_transition");
$("#menu_toggle").removeClass("no_transition");
$("#header_team_name").removeClass("no_transition")
},0)
},initNav:function(){$("header").headroom({offset:80,tolerance:5});
var d=$("body");
$("#menu_toggle").on("click.toggle_nav",function(){if(!d.hasClass("nav_open")&&d.hasClass("widescreen")){return
}d.toggleClass("nav_open")
});
$("#user_menu_contents").on("click.toggle_nav",function(f){if(!$(f.target).is("a")){if(!d.hasClass("nav_open")&&d.hasClass("widescreen")){return
}d.toggleClass("nav_open")
}});
$("#overlay").on("click touchend",function(){d.toggleClass("nav_open")
});
$("#team_switcher").on("click",function(){$("#header_team_nav").toggleClass("open")
});
$("html").bind("mousedown.team_nav touchstart.team_nav",function(f){if($(f.target).closest("#header_team_nav").length==0&&$(f.target).closest("#team_switcher").length==0){$("#header_team_nav").removeClass("open")
}});
var b=$("#user_menu").outerHeight()+$(".nav_contents").outerHeight()+$("#footer").outerHeight();
var a=80;
var c=64;
$("head").append('<style type="text/css"> #footer {bottom: 0;position: absolute;}@media only screen and (max-height: '+b+"px) and (max-width: "+plastic.widescreen_threshold+"px) { nav#site_nav #footer { position: relative; bottom: auto; } }\n@media only screen and (min-width: "+plastic.widescreen_threshold+"px) { body:not(.nav_open) nav#site_nav #footer { position: relative; bottom: auto; } }</style>")
},initAPINav:function(){$("#api_nav .section_toggle").on("click",function(){$(this).toggleClass("open").next("ul").toggleClass("hidden")
})
},initTabs:function(){$(".tab_set").on("click",function(){$(this).toggleClass("open")
}).find("a").on("click",function(g){var f=$(this);
if(f.hasClass("selected")&&f.attr("href")&&!f.hasClass("is_linked")){g.preventDefault();
return
}if(f.attr("href")){return
}f.addClass("selected").siblings(".selected").removeClass("selected");
$(".tab_pane.selected").removeClass("selected");
$('.tab_pane[data-tab="'+f.data("tab")+'"]').addClass("selected");
window.location.hash=f.data("tab")
});
var e=window.location.hash;
if(e){e=String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
if(e.charAt(0)==="#"){e=e.substring(1)
}var c=$('a[name="'+e+'"], #'+e);
var d,b,a;
if(c.length>0){b=c.closest(".tab_pane");
if(b.length>0&&!b.hasClass("selected")){a=b.data("tab");
d=$('a[data-tab="'+a+'"]');
d.click();
window.location.href=window.location.href
}}else{d=$('a[data-tab="'+e+'"]');
if(d.length>0){d.click()
}}$(".tab_set").removeClass("open")
}},initAlerts:function(){$(".alert_page").each(function(){if($(this).hasClass("is_ephemeral")){$(this).addClass("fade")
}})
}};
$(function(){plastic.init()
});