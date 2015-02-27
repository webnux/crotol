(function(f){function h(k){var n=k.data("TS-tabComplete");
var j=n.cmds=[];
var o=TS.model.input_history;
var m;
for(var l=0;
l<o.length;
l++){m=o[l];
if(m.indexOf("/")==0){j.push(m)
}}return j
}function i(n,q,p){if(TS.model.input_history.length==0){return false
}var l=q.data("TS-tabComplete");
var j=l.cmds||h(q);
var r;
if(l.cmd_matches){r=l.cmd_matches;
if(p.shiftKey){l.cmd_matches_index--;
if(l.cmd_matches_index<0){l.cmd_matches_index=l.cmd_matches.length-1
}}else{l.cmd_matches_index++;
if(l.cmd_matches_index>=l.cmd_matches.length){l.cmd_matches_index=0
}}}else{r=[];
l.cmd_matches_index=0;
var k;
for(var m=0;
m<j.length;
m++){k=j[m];
if(n&&k.toLowerCase().indexOf(n.toLowerCase())!=0){continue
}r.push(k)
}if(!r.length){return false
}if(r.length>1){l.cmd_matches=r
}}var o=r[l.cmd_matches_index];
if(l.onComplete){l.onComplete(o)
}q.setCursorPosition(1000000);
return true
}function b(s,q,y){var B=q.data("TS-tabComplete");
var k=q.getCursorPosition();
if(k==0){return false
}var r=s.substr(0,k);
var t=r.split(" ");
var l=t[t.length-1].toLowerCase();
var v="";
if(!l&&!B.channel_matches){return false
}if(l){var p=false;
if(l.indexOf("#")==0){p=true
}if(B.channel_prefix){if(l.indexOf(B.channel_prefix+"#")==0){p=true
}if(l.indexOf(B.channel_prefix)==0){p=true
}}if(!p){return false
}}var m;
var n;
if(!l){m=B.channel_matches;
if(y.shiftKey){B.channel_matches_index--;
if(B.channel_matches_index<0){B.channel_matches_index=B.channel_matches.length-1
}}else{B.channel_matches_index++;
if(B.channel_matches_index>=B.channel_matches.length){B.channel_matches_index=0
}}n=m[B.channel_matches_index];
var u=t[t.length-2];
if(B.channel_prefix&&u.toLowerCase().indexOf(B.channel_prefix.toLowerCase())==0){v=B.channel_prefix
}t[t.length-2]=v+"#"+n
}else{m=[];
var j=TS.channels.getChannelsForUser();
var C;
var D;
var x=l.replace("#","");
if(B.channel_prefix&&l.toLowerCase().indexOf(B.channel_prefix.toLowerCase())==0){x=x.substr(B.channel_prefix.length);
v=B.channel_prefix
}for(var w=0;
w<j.length;
w++){C=j[w];
if(C.is_archived){continue
}D=C._name_lc;
if(D.indexOf(x)==0||("#"+D).indexOf(x)==0){m.push(C.name)
}}if(!m.length){return false
}g(q,"subsequent name match press");
B.channel_matches_index=0;
if(m.length>1){B.channel_matches=m
}n=m[B.channel_matches_index];
t[t.length-1]=v+"#"+n+" "
}var A=t.join(" ");
var o=A.length;
var z=s.replace(r,A);
if(B.onComplete){B.onComplete(z)
}q.setCursorPosition(o);
return true
}function c(s,q,A){var E=q.data("TS-tabComplete");
var l=q.getCursorPosition();
if(l==0){return false
}var r=s.substr(0,l);
var u=r.split(" ");
var m=u[u.length-1].toLowerCase();
var w="";
if(!m&&!E.member_matches){return false
}var z="";
var t="";
var n;
var o;
if(!m){n=E.member_matches;
if(A.shiftKey){E.member_matches_index--;
if(E.member_matches_index<0){E.member_matches_index=E.member_matches.length-1
}}else{E.member_matches_index++;
if(E.member_matches_index>=E.member_matches.length){E.member_matches_index=0
}}o=n[E.member_matches_index];
var v=u[u.length-2];
if(E.member_prefix&&v.toLowerCase().indexOf(E.member_prefix.toLowerCase())==0){w=E.member_prefix
}if(u.length-2==0&&E.member_colon){z=":"
}if(v.indexOf("@")>-1){t="@"
}u[u.length-2]=w+t+o+z
}else{n=[];
var D=[];
var k=(E.include_self)?TS.members.getActiveMembersWithSelfAndSlackbot():TS.members.getActiveMembersWithSlackbotAndNotSelf();
for(var x=0;
x<k.length;
x++){if(k[x].deleted){continue
}D.push(k[x])
}var j;
var F;
var y=m;
if(E.member_prefix&&m.toLowerCase().indexOf(E.member_prefix.toLowerCase())==0){y=y.substr(E.member_prefix.length);
w=E.member_prefix
}for(var x=0;
x<D.length;
x++){j=D[x];
F=j._name_lc;
if(F.indexOf(y)==0||("@"+F).indexOf(y)==0){n.push(j.name)
}}if(E.complete_member_specials){if(("@everyone").indexOf(y)==0){n.push("everyone")
}if(("@channel").indexOf(y)==0){n.push("channel")
}if(("@group").indexOf(y)==0){n.push("group")
}}if(!n.length){return false
}g(q,"subsequent name match press");
E.member_matches_index=0;
if(n.length>1){E.member_matches=n
}o=n[E.member_matches_index];
if(u.length-1==0&&E.member_colon){z=":"
}if(u[u.length-1].indexOf("@")>-1){t="@"
}u[u.length-1]=w+t+o+z+" "
}var C=u.join(" ");
var p=C.length;
var B=s.replace(r,C);
if(E.onComplete){E.onComplete(B)
}q.setCursorPosition(p);
return true
}function a(s,q,x){var A=q.data("TS-tabComplete");
var l=q.getCursorPosition();
if(l==0){return false
}var r=s.substr(0,l);
var t=r.split(" ");
var m=t[t.length-1].toLowerCase();
if(!m&&!A.emoji_matches){return false
}if(m&&m.indexOf(":")!=0){return false
}var p;
var n;
if(!m){p=A.emoji_matches;
if(x.shiftKey){A.emoji_matches_index--;
if(A.emoji_matches_index<0){A.emoji_matches_index=A.emoji_matches.length-1
}}else{A.emoji_matches_index++;
if(A.emoji_matches_index>=A.emoji_matches.length){A.emoji_matches_index=0
}}n=p[A.emoji_matches_index];
var u=t[t.length-2];
t[t.length-2]=":"+n+":"
}else{p=[];
var k=TS.model.emoji_names;
var B;
var w=m.replace(":","");
var j=new RegExp("(^)"+TS.utility.regexpEscape(w,1000),"i");
for(var v=0;
v<k.length;
v++){B=k[v];
if(!w||B.match(w)){p.push(B)
}}if(!p.length){return false
}g(q,"subsequent emoji match press");
A.emoji_matches_index=0;
if(p.length>1){A.emoji_matches=p
}n=p[A.emoji_matches_index];
t[t.length-1]=":"+n+": "
}var z=t.join(" ");
var o=z.length;
var y=s.replace(r,z);
if(A.onComplete){A.onComplete(y)
}q.setCursorPosition(o);
return true
}function g(j,k){var l=j.data("TS-tabComplete");
l.cmds=null;
l.cmd_matches=null;
l.cmd_matches_index=-1;
l.member_matches=null;
l.member_matches_index=-1;
l.emoji_matches=null;
l.emoji_matches_index=-1;
l.channel_matches=null;
l.channel_matches_index=-1
}function e(k,m){var l=k.data("TS-tabComplete");
var j=(k.val());
if(l.complete_emoji&&a(j,k,m)){}else{if(l.complete_channels&&b(j,k,m)){}else{if(l.complete_members&&c(j,k,m)){}else{if(l.complete_cmds&&(!j||j.indexOf("/")==0)&&i(j,k,m)){}}}}}var d={init:function(j){var k=f.extend({complete_member_specials:false,complete_members:true,member_prefix:"",member_colon:true,complete_cmds:false,complete_emoji:false,complete_channels:false,channel_prefix:"",include_self:false},j);
return this.each(function(){var l=f(this);
if(l.data("TS-tabComplete")){return
}l.data("TS-tabComplete",{cmds:null,cmd_matches:null,cmd_matches_index:-1,member_matches:null,member_matches_index:-1,complete_member_specials:k.complete_member_specials,complete_members:k.complete_members,member_prefix:k.member_prefix,member_colon:k.member_colon,complete_cmds:k.complete_cmds,complete_emoji:k.complete_emoji,complete_channels:k.complete_channels,channel_prefix:k.channel_prefix,include_self:k.include_self,onComplete:k.onComplete});
l.bind("focus",function(m){l.TS_tabComplete("resetMatches","focus")
})
})
},resetMatches:function(j){return this.each(function(){g(f(this),j)
})
},onTabKey:function(j){j.preventDefault();
return this.each(function(){e(f(this),j)
})
}};
f.fn.TS_tabComplete=function(j){if(d[j]){return d[j].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof j==="object"||!j){return d.init.apply(this,arguments)
}else{f.error("Method "+j+" does not exist on jQuery.tooltip")
}}}
})(jQuery);