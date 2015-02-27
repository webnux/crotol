(function(){var a;
a=(function(){function b(){this.options_index=0;
this.parsed=[]
}b.prototype.add_node=function(c){if(c.nodeName.toUpperCase()==="OPTGROUP"){return this.add_group(c)
}else{return this.add_option(c)
}};
b.prototype.add_group=function(i){var h,e,g,d,f,c;
h=this.parsed.length;
this.parsed.push({array_index:h,group:true,label:i.label,children:0,disabled:i.disabled});
f=i.childNodes;
c=[];
for(g=0,d=f.length;
g<d;
g++){e=f[g];
c.push(this.add_option(e,h,i.disabled))
}return c
};
b.prototype.add_option=function(d,e,c){if(d.nodeName.toUpperCase()==="OPTION"){if(d.text!==""){if(e!=null){this.parsed[e].children+=1
}this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:d.value,text:d.text,html:d.innerHTML,selected:d.selected,disabled:c===true?c:d.disabled,group_array_index:e,classes:d.className,style:d.style.cssText})
}else{this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:true})
}return this.options_index+=1
}};
return b
})();
a.select_to_array=function(b){var g,f,e,c,d;
f=new a();
d=b.childNodes;
for(e=0,c=d.length;
e<c;
e++){g=d[e];
f.add_node(g)
}return f.parsed
};
this.SelectParser=a
}).call(this);
(function(){var b,a;
a=this;
b=(function(){function c(d,e){this.form_field=d;
this.options=e!=null?e:{};
if(!c.browser_is_supported()){return
}this.is_multiple=this.form_field.multiple;
if(!this.is_multiple){this.options.multiple_always_open=false
}this.set_default_text();
this.set_default_values();
this.setup();
this.set_up_html();
this.register_observers();
this.finish_setup()
}c.prototype.set_default_values=function(){var d=this;
this.click_test_action=function(e){return d.test_active_click(e)
};
this.activate_action=function(e){return d.activate_field(e)
};
this.active_field=false;
this.mouse_on_container=false;
this.results_showing=false;
this.result_highlighted=null;
this.result_single_selected=null;
this.allow_single_deselect=(this.options.allow_single_deselect!=null)&&(this.form_field.options[0]!=null)&&this.form_field.options[0].text===""?this.options.allow_single_deselect:false;
this.disable_search_threshold=this.options.disable_search_threshold||0;
this.disable_search=this.options.disable_search||false;
this.enable_split_word_search=this.options.enable_split_word_search!=null?this.options.enable_split_word_search:true;
this.search_contains=this.options.search_contains||false;
this.single_backstroke_delete=this.options.single_backstroke_delete||false;
this.max_selected_options=this.options.max_selected_options||Infinity;
this.optional_prefix=this.options.optional_prefix||null;
return this.inherit_select_classes=this.options.inherit_select_classes||false
};
c.prototype.set_default_text=function(){if(this.form_field.getAttribute("data-placeholder")){this.default_text=this.form_field.getAttribute("data-placeholder")
}else{if(this.is_multiple){this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||c.default_multiple_text
}else{this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||c.default_single_text
}}return this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||c.default_no_result_text
};
c.prototype.mouse_enter=function(){return this.mouse_on_container=true
};
c.prototype.mouse_leave=function(){return this.mouse_on_container=false
};
c.prototype.input_focus=function(d){var e=this;
if(this.is_multiple){if(!this.active_field){return setTimeout((function(){return e.container_mousedown()
}),50)
}}else{if(!this.active_field){return this.activate_field()
}}};
c.prototype.input_blur=function(d){var e=this;
if(!this.mouse_on_container){this.active_field=false;
return setTimeout((function(){return e.blur_test()
}),100)
}};
c.prototype.result_add_option=function(f){var d,e;
f.dom_id=this.container_id+"_o_"+f.array_index;
d=f.selected&&this.is_multiple?[]:["active-result"];
if(!f.disabled){if(f.selected){d.push("result-selected")
}if(f.group_array_index!=null){d.push("group-option")
}if(f.classes!==""){d.push(f.classes)
}e=f.style.cssText!==""?' style="'+f.style+'"':""
}else{d.push("chzn-disabled");
e='disabled="disabled"'
}return'<li id="'+f.dom_id+'" class="'+d.join(" ")+'"'+e+">"+f.html+"</li>"
};
c.prototype.results_update_field=function(){this.set_default_text();
if(!this.is_multiple){this.results_reset_cleanup()
}this.result_clear_highlight();
this.result_single_selected=null;
return this.results_build()
};
c.prototype.results_toggle=function(){if(this.results_showing){return this.results_hide()
}else{return this.results_show()
}};
c.prototype.results_search=function(d){if(this.results_showing){return this.winnow_results()
}else{return this.results_show()
}};
c.prototype.choices_count=function(){var e,g,d,f;
if(this.selected_option_count!=null){return this.selected_option_count
}this.selected_option_count=0;
f=this.form_field.options;
for(g=0,d=f.length;
g<d;
g++){e=f[g];
if(e.selected){this.selected_option_count+=1
}}return this.selected_option_count
};
c.prototype.choices_click=function(d){d.preventDefault();
if(!this.results_showing){return this.results_show()
}};
c.prototype.keyup_checker=function(d){var f,e;
f=(e=d.which)!=null?e:d.keyCode;
this.search_field_scale();
switch(f){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0){return this.keydown_backstroke()
}else{if(!this.pending_backstroke){this.result_clear_highlight();
return this.results_search()
}}break;
case 13:d.preventDefault();
if(this.results_showing){return this.result_select(d)
}break;
case 27:if(this.results_showing){this.results_hide()
}return true;
case 9:case 38:case 40:case 16:case 91:case 17:break;
default:return this.results_search()
}};
c.prototype.generate_field_id=function(){var d;
d=this.generate_random_id();
this.form_field.id=d;
return d
};
c.prototype.generate_random_char=function(){var f,e,d;
f="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
d=Math.floor(Math.random()*f.length);
return e=f.substring(d,d+1)
};
c.prototype.container_width=function(){if(this.options.width!=null){return this.options.width
}else{return""+this.form_field.offsetWidth+"px"
}};
c.browser_is_supported=function(){var d;
if(window.navigator.appName==="Microsoft Internet Explorer"){return(null!==(d=document.documentMode)&&d>=8)
}return true
};
c.default_multiple_text="Select Some Options";
c.default_single_text="Select an Option";
c.default_no_result_text="No results match";
return c
})();
a.AbstractChosen=b
}).call(this);
(function(){var d,e,a,b={}.hasOwnProperty,c=function(i,g){for(var f in g){if(b.call(g,f)){i[f]=g[f]
}}function h(){this.constructor=i
}h.prototype=g.prototype;
i.prototype=new h();
i.__super__=g.prototype;
return i
};
a=this;
d=jQuery;
d.fn.extend({chosen:function(f){if(!AbstractChosen.browser_is_supported()){return this
}return this.each(function(g){var h;
h=d(this);
if(!h.hasClass("chzn-done")){return h.data("chosen",new e(this,f))
}})
}});
e=(function(f){c(g,f);
function g(){return g.__super__.constructor.apply(this,arguments)
}g.prototype.setup=function(){this.form_field_jq=d(this.form_field);
this.current_selectedIndex=this.form_field.selectedIndex;
return this.is_rtl=this.form_field_jq.hasClass("chzn-rtl")
};
g.prototype.finish_setup=function(){if(this.options.multiple_always_open){var h=this;
setTimeout(function(){h.container_mousedown()
},100)
}return this.form_field_jq.addClass("chzn-done")
};
g.prototype.set_up_html=function(){var h,i;
this.container_id=this.form_field.id.length?this.form_field.id.replace(/[^\w]/g,"_"):this.generate_field_id();
this.container_id+="_chzn";
h=["chzn-container"];
h.push("chzn-container-"+(this.is_multiple?"multi":"single"));
if(this.inherit_select_classes&&this.form_field.className){h.push(this.form_field.className)
}if(this.is_rtl){h.push("chzn-rtl")
}i={id:this.container_id,"class":h.join(" "),style:"width: "+(this.container_width())+";",title:this.form_field.title};
this.container=d("<div />",i);
if(this.is_multiple){this.container.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop"><ul class="chzn-results"></ul></div>')
}else{this.container.html('<a class="chzn-single chzn-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chzn-drop"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>')
}this.form_field_jq.hide().after(this.container);
this.dropdown=this.container.find("div.chzn-drop").first();
this.search_field=this.container.find("input").first();
this.search_results=this.container.find("ul.chzn-results").first();
this.search_field_scale();
this.search_no_results=this.container.find("li.no-results").first();
if(this.is_multiple){this.search_choices=this.container.find("ul.chzn-choices").first();
this.search_container=this.container.find("li.search-field").first()
}else{this.search_container=this.container.find("div.chzn-search").first();
this.selected_item=this.container.find(".chzn-single").first()
}this.results_build();
this.set_tab_index();
this.set_label_behavior();
return this.form_field_jq.trigger("liszt:ready",{chosen:this})
};
g.prototype.register_observers=function(){var h=this;
this.container.mousedown(function(i){h.container_mousedown(i)
});
this.container.mouseup(function(i){h.container_mouseup(i)
});
this.container.mouseenter(function(i){h.mouse_enter(i)
});
this.container.mouseleave(function(i){h.mouse_leave(i)
});
this.search_results.mouseup(function(i){h.search_results_mouseup(i)
});
this.search_results.mouseover(function(i){h.search_results_mouseover(i)
});
this.search_results.mouseout(function(i){h.search_results_mouseout(i)
});
this.search_results.bind("mousewheel DOMMouseScroll",function(i){h.search_results_mousewheel(i)
});
this.form_field_jq.bind("liszt:updated",function(i){h.results_update_field(i)
});
this.form_field_jq.bind("liszt:activate",function(i){h.activate_field(i)
});
this.form_field_jq.bind("liszt:open",function(i){h.container_mousedown(i)
});
this.search_field.blur(function(i){h.input_blur(i)
});
this.search_field.keyup(function(i){h.keyup_checker(i)
});
this.search_field.keydown(function(i){h.keydown_checker(i)
});
this.search_field.focus(function(i){h.input_focus(i)
});
if(this.is_multiple){return this.search_choices.click(function(i){h.choices_click(i)
})
}else{return this.container.click(function(i){i.preventDefault()
})
}};
g.prototype.search_field_disabled=function(){this.is_disabled=this.form_field_jq[0].disabled;
if(this.is_disabled){this.container.addClass("chzn-disabled");
this.search_field[0].disabled=true;
if(!this.is_multiple){this.selected_item.unbind("focus",this.activate_action)
}return this.close_field()
}else{this.container.removeClass("chzn-disabled");
this.search_field[0].disabled=false;
if(!this.is_multiple){return this.selected_item.bind("focus",this.activate_action)
}}};
g.prototype.container_mousedown=function(h){if(!this.is_disabled){if(h&&h.type==="mousedown"&&!this.results_showing){h.preventDefault()
}if(!((h!=null)&&(d(h.target)).hasClass("search-choice-close"))){if(!this.active_field){if(this.is_multiple){this.search_field.val("")
}this.results_show()
}else{if(!this.is_multiple&&h&&((d(h.target)[0]===this.selected_item[0])||d(h.target).parents("a.chzn-single").length)){h.preventDefault();
this.results_toggle()
}}return this.activate_field()
}}};
g.prototype.container_mouseup=function(h){if(h.target.nodeName==="ABBR"&&!this.is_disabled){return this.results_reset(h)
}};
g.prototype.search_results_mousewheel=function(i){var k,j,h;
k=-((j=i.originalEvent)!=null?j.wheelDelta:void 0)||((h=i.originialEvent)!=null?h.detail:void 0);
if(k!=null){i.preventDefault();
if(i.type==="DOMMouseScroll"){k=k*40
}return this.search_results.scrollTop(k+this.search_results.scrollTop())
}};
g.prototype.blur_test=function(h){if(!this.active_field&&this.container.hasClass("chzn-container-active")){return this.close_field()
}};
g.prototype.close_field=function(){d(document).unbind("click",this.click_test_action);
this.active_field=false;
this.results_hide();
this.form_field_jq.trigger("blur");
this.container.removeClass("chzn-container-active");
this.winnow_results_clear();
this.clear_backstroke();
this.show_search_field_default();
return this.search_field_scale()
};
g.prototype.activate_field=function(){this.form_field_jq.trigger("focus");
this.container.addClass("chzn-container-active");
this.active_field=true;
this.search_field.val(this.search_field.val());
return this.search_field.focus()
};
g.prototype.test_active_click=function(h){if(d(h.target).parents("#"+this.container_id).length){return this.active_field=true
}else{return this.close_field()
}};
g.prototype.results_build=function(){var i,l,k,h,j;
this.parsing=true;
this.selected_option_count=null;
this.results_data=a.SelectParser.select_to_array(this.form_field);
if(this.is_multiple&&this.choices_count()>0){this.search_choices.find("li.search-choice").remove()
}else{if(!this.is_multiple){this.selected_item.addClass("chzn-default").find("span").text(this.default_text);
if(this.disable_search||this.form_field.options.length<=this.disable_search_threshold){this.container.addClass("chzn-container-single-nosearch")
}else{this.container.removeClass("chzn-container-single-nosearch")
}}}i="";
j=this.results_data;
for(k=0,h=j.length;
k<h;
k++){l=j[k];
if(l.group){i+=this.result_add_group(l)
}else{if(!l.empty){i+=this.result_add_option(l);
if(l.selected&&this.is_multiple){this.choice_build(l)
}else{if(l.selected&&!this.is_multiple){this.selected_item.removeClass("chzn-default").find("span").text(l.text);
if(this.allow_single_deselect){this.single_deselect_control_build()
}}}}}}this.search_field_disabled();
this.show_search_field_default();
this.search_field_scale();
this.search_results.html(i);
return this.parsing=false
};
g.prototype.result_add_group=function(h){if(!h.disabled){h.dom_id=this.container_id+"_g_"+h.array_index;
return'<li id="'+h.dom_id+'" class="group-result">'+d("<div />").text(h.label).html()+"</li>"
}else{return""
}};
g.prototype.result_do_highlight=function(i){var m,l,j,k,h;
if(i.length){this.result_clear_highlight();
this.result_highlight=i;
this.result_highlight.addClass("highlighted");
j=parseInt(this.search_results.css("maxHeight"),10);
h=this.search_results.scrollTop();
k=j+h;
l=this.result_highlight.position().top+this.search_results.scrollTop();
m=l+this.result_highlight.outerHeight();
if(m>=k){return this.search_results.scrollTop((m-j)>0?m-j:0)
}else{if(l<h){return this.search_results.scrollTop(l)
}}}};
g.prototype.result_clear_highlight=function(){if(this.result_highlight){this.result_highlight.removeClass("highlighted")
}return this.result_highlight=null
};
g.prototype.results_show=function(){if(this.result_single_selected!=null){this.result_do_highlight(this.result_single_selected)
}else{if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("liszt:maxselected",{chosen:this});
return false
}}this.container.addClass("chzn-with-drop");
this.form_field_jq.trigger("liszt:showing_dropdown",{chosen:this});
this.results_showing=true;
this.search_field.focus();
this.search_field.val(this.search_field.val());
return this.winnow_results()
};
g.prototype.results_hide=function(){if(this.options.multiple_always_open){return
}this.result_clear_highlight();
this.container.removeClass("chzn-with-drop");
this.form_field_jq.trigger("liszt:hiding_dropdown",{chosen:this});
return this.results_showing=false
};
g.prototype.set_tab_index=function(i){var h;
if(this.form_field_jq.attr("tabindex")){h=this.form_field_jq.attr("tabindex");
this.form_field_jq.attr("tabindex",-1);
return this.search_field.attr("tabindex",h)
}};
g.prototype.set_label_behavior=function(){var h=this;
this.form_field_label=this.form_field_jq.parents("label");
if(!this.form_field_label.length&&this.form_field.id.length){this.form_field_label=d("label[for="+this.form_field.id+"]")
}if(this.form_field_label.length>0){return this.form_field_label.click(function(i){if(h.is_multiple){return h.container_mousedown(i)
}else{return h.activate_field()
}})
}};
g.prototype.show_search_field_default=function(){if(this.is_multiple&&this.choices_count()<1&&!this.active_field){this.search_field.val(this.default_text);
return this.search_field.addClass("default")
}else{this.search_field.val("");
return this.search_field.removeClass("default")
}};
g.prototype.search_results_mouseup=function(h){var i;
i=d(h.target).hasClass("active-result")?d(h.target):d(h.target).parents(".active-result").first();
if(i.length){this.result_highlight=i;
this.result_select(h);
return this.search_field.focus()
}};
g.prototype.search_results_mouseover=function(h){var i;
i=d(h.target).hasClass("active-result")?d(h.target):d(h.target).parents(".active-result").first();
if(i){return this.result_do_highlight(i)
}};
g.prototype.search_results_mouseout=function(h){if(d(h.target).hasClass("active-result"||d(h.target).parents(".active-result").first())){return this.result_clear_highlight()
}};
g.prototype.choice_build=function(i){var h,j,k=this;
h=d("<li />",{"class":"search-choice"}).html("<span>"+i.html+"</span>");
if(i.disabled){h.addClass("search-choice-disabled")
}else{j=d("<a />",{href:"#","class":"search-choice-close",rel:i.array_index});
j.click(function(l){return k.choice_destroy_link_click(l)
});
h.append(j)
}return this.search_container.before(h)
};
g.prototype.choice_destroy_link_click=function(h){h.preventDefault();
h.stopPropagation();
if(!this.is_disabled){return this.choice_destroy(d(h.target))
}};
g.prototype.choice_destroy=function(h){if(this.result_deselect(h.attr("rel"))){if(!this.options.multiple_always_open){this.show_search_field_default();
if(this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1){this.results_hide()
}}h.parents("li").first().remove();
if(this.options.multiple_always_open){this.search_field.focus()
}return this.search_field_scale()
}};
g.prototype.results_reset=function(){this.form_field.options[0].selected=true;
this.selected_option_count=null;
this.selected_item.find("span").text(this.default_text);
if(!this.is_multiple){this.selected_item.addClass("chzn-default")
}this.show_search_field_default();
this.results_reset_cleanup();
this.form_field_jq.trigger("change");
if(this.active_field){return this.results_hide()
}};
g.prototype.results_reset_cleanup=function(){this.current_selectedIndex=this.form_field.selectedIndex;
return this.selected_item.find("abbr").remove()
};
g.prototype.result_select=function(i){var l,k,j,h;
if(this.result_highlight){l=this.result_highlight;
k=l.attr("id");
this.result_clear_highlight();
if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("liszt:maxselected",{chosen:this});
return false
}if(this.is_multiple){this.result_deactivate(l)
}else{this.search_results.find(".result-selected").removeClass("result-selected");
this.result_single_selected=l;
this.selected_item.removeClass("chzn-default")
}l.addClass("result-selected");
h=k.substr(k.lastIndexOf("_")+1);
j=this.results_data[h];
if(this.form_field.options[j.options_index].disabled){return false
}j.selected=true;
this.form_field.options[j.options_index].selected=true;
this.selected_option_count=null;
if(this.is_multiple){this.choice_build(j)
}else{this.selected_item.find("span").first().text(j.text);
if(this.allow_single_deselect){this.single_deselect_control_build()
}}if(!((i.metaKey||i.ctrlKey)&&this.is_multiple)){this.results_hide()
}if(this.options.multiple_always_open){if(!this.options.multiple_select_maintains_winnow){this.search_field.val("")
}}else{this.search_field.val("")
}if(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex){this.form_field_jq.trigger("change",{selected:this.form_field.options[j.options_index].value})
}this.current_selectedIndex=this.form_field.selectedIndex;
if(this.options.multiple_always_open){this.results_search()
}return this.search_field_scale()
}};
g.prototype.result_activate=function(h){return h.addClass("active-result")
};
g.prototype.result_deactivate=function(h){return h.removeClass("active-result")
};
g.prototype.result_deselect=function(j){var h,i;
i=this.results_data[j];
if(!this.form_field.options[i.options_index].disabled){i.selected=false;
this.form_field.options[i.options_index].selected=false;
this.selected_option_count=null;
h=d("#"+this.container_id+"_o_"+j);
h.removeClass("result-selected").addClass("active-result").show();
this.result_clear_highlight();
this.winnow_results();
this.form_field_jq.trigger("change",{deselected:this.form_field.options[i.options_index].value});
this.search_field_scale();
return true
}else{return false
}};
g.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect&&this.selected_item.find("abbr").length<1){return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')
}};
g.prototype.winnow_results=function(){var n,p,t,s,j,q,m,w,r,v,u,o,k,i,h,x,y,l;
this.no_results_clear();
r=0;
v=this.search_field.val()===this.default_text?"":d("<div/>").text(d.trim(this.search_field.val())).html();
q=this.search_contains?"":"^";
if(this.optional_prefix){q+=this.optional_prefix+"?"
}j=new RegExp(q+v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i");
k=new RegExp(v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i");
l=this.results_data;
for(i=0,x=l.length;
i<x;
i++){p=l[i];
if(!p.empty){if(p.group){d("#"+p.dom_id).css("display","none")
}else{if(!(this.is_multiple&&p.selected)){n=false;
w=p.dom_id;
m=d("#"+w);
if(j.test(p.html)){n=true;
r+=1
}else{if(this.enable_split_word_search&&(p.html.indexOf(" ")>=0||p.html.indexOf("[")===0)){s=p.html.replace(/\[|\]/g,"").split(" ");
if(s.length){for(h=0,y=s.length;
h<y;
h++){t=s[h];
if(j.test(t)){n=true;
r+=1
}}}}}if(n){if(v.length){u=p.html.search(k);
o=p.html.substr(0,u+v.length)+"</em>"+p.html.substr(u+v.length);
o=o.substr(0,u)+"<em>"+o.substr(u)
}else{o=p.html
}m.html(o);
this.result_activate(m);
if(p.group_array_index!=null){d("#"+this.results_data[p.group_array_index].dom_id).css("display","list-item")
}}else{if(this.result_highlight&&w===this.result_highlight.attr("id")){this.result_clear_highlight()
}this.result_deactivate(m)
}}}}}if(r<1&&v.length){return this.no_results(v)
}else{return this.winnow_results_set_highlight()
}};
g.prototype.winnow_results_clear=function(){var h,k,l,j,i;
this.search_field.val("");
k=this.search_results.find("li");
i=[];
for(l=0,j=k.length;
l<j;
l++){h=k[l];
h=d(h);
if(h.hasClass("group-result")){i.push(h.css("display","auto"))
}else{if(!this.is_multiple||!h.hasClass("result-selected")){i.push(this.result_activate(h))
}else{i.push(void 0)
}}}return i
};
g.prototype.winnow_results_set_highlight=function(){var h,i;
if(!this.result_highlight){i=!this.is_multiple?this.search_results.find(".result-selected.active-result"):[];
h=i.length?i.first():this.search_results.find(".active-result").first();
if(h!=null){return this.result_do_highlight(h)
}}};
g.prototype.no_results=function(h){var i;
i=d('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>');
i.find("span").first().html(h);
return this.search_results.append(i)
};
g.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()
};
g.prototype.keydown_arrow=function(){var i,h;
if(!this.result_highlight){i=this.search_results.find("li.active-result").first();
if(i){this.result_do_highlight(d(i))
}}else{if(this.results_showing){h=this.result_highlight.nextAll("li.active-result").first();
if(h){this.result_do_highlight(h)
}}}if(!this.results_showing){return this.results_show()
}};
g.prototype.keyup_arrow=function(){var h;
if(!this.results_showing&&!this.is_multiple){return this.results_show()
}else{if(this.result_highlight){h=this.result_highlight.prevAll("li.active-result");
if(h.length){return this.result_do_highlight(h.first())
}else{if(this.choices_count()>0){this.results_hide()
}return this.result_clear_highlight()
}}}};
g.prototype.keydown_backstroke=function(){var h;
if(this.pending_backstroke){this.choice_destroy(this.pending_backstroke.find("a").first());
return this.clear_backstroke()
}else{h=this.search_container.siblings("li.search-choice").last();
if(h.length&&!h.hasClass("search-choice-disabled")){this.pending_backstroke=h;
if(this.single_backstroke_delete){return this.keydown_backstroke()
}else{return this.pending_backstroke.addClass("search-choice-focus")
}}}};
g.prototype.clear_backstroke=function(){if(this.pending_backstroke){this.pending_backstroke.removeClass("search-choice-focus")
}return this.pending_backstroke=null
};
g.prototype.keydown_checker=function(h){var j,i;
j=(i=h.which)!=null?i:h.keyCode;
this.search_field_scale();
if(j!==8&&this.pending_backstroke){this.clear_backstroke()
}switch(j){case 8:this.backstroke_length=this.search_field.val().length;
break;
case 9:if(this.results_showing&&!this.is_multiple){this.result_select(h)
}this.mouse_on_container=false;
break;
case 13:h.preventDefault();
break;
case 38:h.preventDefault();
this.keyup_arrow();
break;
case 40:this.keydown_arrow();
break
}};
g.prototype.search_field_scale=function(){var p,l,k,n,m,j,o,i;
if(this.is_multiple){l=0;
j=0;
n="position:absolute; left: -1000px; top: -1000px; display:none;";
m=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];
for(o=0,i=m.length;
o<i;
o++){k=m[o];
n+=k+":"+this.search_field.css(k)+";"
}p=d("<div />",{style:n});
p.text(this.search_field.val());
d("body").append(p);
j=p.width()+25;
p.remove();
if(!this.f_width){this.f_width=this.container.outerWidth()
}if(j>this.f_width-10){j=this.f_width-10
}return this.search_field.css({width:j+"px"})
}};
g.prototype.generate_random_id=function(){var h;
h="sel"+this.generate_random_char()+this.generate_random_char()+this.generate_random_char();
while(d("#"+h).length>0){h+=this.generate_random_char()
}return h
};
return g
})(AbstractChosen);
a.Chosen=e
}).call(this);