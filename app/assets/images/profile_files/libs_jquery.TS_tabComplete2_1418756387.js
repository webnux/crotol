(function(i){var n=false;
var m="MATCHES_SET";
var e="MATCH_CHANGED";
function h(r,q){if(r>q){return 0
}if(r<0){return q
}return r
}function l(r){var u=r.data("TS-tabComplete");
var q=u.cmds=[];
var v=TS.model.input_history;
var t;
for(var s=0;
s<v.length;
s++){t=v[s];
if(t.indexOf("/")==0){q.push(t)
}}return q
}function o(u,x,w){if(TS.model.input_history.length==0){return false
}var s=x.data("TS-tabComplete");
var q=s.cmds||l(x);
var y;
if(s.cmd_matches){y=s.cmd_matches;
if(w&&w.shiftKey){s.cmd_matches_index--;
if(s.cmd_matches_index<0){s.cmd_matches_index=s.cmd_matches.length-1
}}else{s.cmd_matches_index++;
if(s.cmd_matches_index>=s.cmd_matches.length){s.cmd_matches_index=0
}}}else{y=[];
s.cmd_matches_index=0;
var r;
for(var t=0;
t<q.length;
t++){r=q[t];
if(u&&r.toLowerCase().indexOf(u.toLowerCase())!=0){continue
}y.push(r)
}if(!y.length){return false
}if(y.length>1){s.cmd_matches=y
}}if(!w){return true
}var v=y[s.cmd_matches_index];
if(s.onComplete){s.onComplete(v)
}x.focus().setCursorPosition(1000000);
return true
}function g(A,y,I){var N=y.data("TS-tabComplete");
var t=y.getCursorPosition();
if(t==0){}if(A.indexOf("/")!=0){return false
}var x=A.substr(t);
var L=A.substr(0,t).split("\n");
var z=L.pop();
var B=z.split(" ");
var u=B[B.length-1].toLowerCase();
var r=TS.cmd_handlers;
var C="";
if(!u&&!N.cmd_matches){return false
}if(B.length>1&&B[0] in r){}if(u&&u.indexOf("/")!=0){return false
}var q;
var v;
if(I&&I.chosen_index!=undefined){q=N.cmd_matches;
N.cmd_matches_index=h(I.chosen_index,N.cmd_matches.length-1);
v=q[N.cmd_matches_index]
}else{if(C){TS.dir(0,I);
N.matched_on=C;
N.cmd_matches_index=0;
N.cmd_matches=[C];
return m
}else{if(!u){q=N.cmd_matches;
if(I&&I.shiftKey){N.cmd_matches_index--;
if(N.cmd_matches_index<0){N.cmd_matches_index=N.cmd_matches.length-1
}}else{N.cmd_matches_index++;
if(N.cmd_matches_index>=N.cmd_matches.length){N.cmd_matches_index=0
}}v=q[N.cmd_matches_index]
}else{q=[];
var E;
var H=u;
var s=new RegExp(TS.utility.regexpEscape(H,1000),"i");
var D=TS.shared.getActiveModelOb();
for(var F in r){E=r[F];
if((typeof E.autocomplete==="function"&&!E.autocomplete())||E.autocomplete===false||E.alias_of){continue
}if(F=="/archive"||F=="/unarchive"){if(TS.model.active_group_id&&TS.model.user.is_restricted){continue
}if(TS.model.active_channel_id&&!TS.members.canUserArchiveChannels()){continue
}if(TS.model.active_im_id){continue
}}else{if(F=="/kick"||F=="/remove"){if(D.is_archived){continue
}if(TS.model.active_group_id&&!TS.members.canUserKickFromGroups()){continue
}if(TS.model.active_channel_id&&!TS.members.canUserKickFromChannels()){continue
}if(TS.model.active_im_id){continue
}}else{if(F=="/join"){if(TS.model.user.is_restricted){continue
}}else{if(F=="/feed"){if(TS.model.user.is_restricted){continue
}}else{if(F=="/invite"){if(TS.model.user.is_ultra_restricted){continue
}}else{if(F=="/topic"||F=="/purpose"){if(TS.model.active_im_id){continue
}if(TS.model.user.is_restricted){continue
}if(D.is_general&&!TS.members.canUserPostInGeneral()){continue
}}else{if(F=="/close"){if(TS.model.active_group_id){continue
}}}}}}}}if(TS.model.user.is_restricted&&(E.type=="custom"||E.type=="service")){if(TS.model.user.is_ultra_restricted){continue
}if(TS.model.team.prefs.commands_only_regular){continue
}}name=F;
if(!H||name.match(s)){q.push(name)
}else{if(E.aliases){for(var G=0;
G<E.aliases.length;
G++){if(E.aliases[G].match(s)){q.push(name);
break
}}}}}if(!q.length){return false
}q.sort(function M(P,O){var Q=P.toLowerCase();
var R=O.toLowerCase();
if(Q<R){return -1
}if(Q>R){return 1
}return 0
});
N.cmd_matches_index=0;
if(q.length>0){N.cmd_matches=q
}v=q[N.cmd_matches_index]
}}}N.matched_on=u;
if(!u){B[B.length-2]=v
}else{B[B.length-1]=v+" "
}if(!I){return m
}var K=B.join(" ");
var w=K.length;
var J=A.replace(z,K);
if(L.length){w+=L.join("\n").length+1;
J=L.join("\n")+"\n"+K+x
}if(N.onComplete){N.onComplete(J)
}y.focus().setCursorPosition(w);
N.selected_index=N.cmd_matches_index;
return e
}function b(A,y,G){var K=y.data("TS-tabComplete");
var r=y.getCursorPosition();
if(r==0){return false
}var x=A.substr(r);
var J=A.substr(0,r).split("\n");
var z=J.pop();
var B=z.split(" ");
var s=B[B.length-1].toLowerCase();
var D="";
if(!s&&!K.channel_matches){return false
}if(s){var w=false;
if(s.indexOf("#")==0){w=true
}if(K.channel_prefix){if(s.indexOf(K.channel_prefix+"#")==0){w=true
}if(s.indexOf(K.channel_prefix)==0){w=true
}}if(!w){return false
}}var t;
var u;
if(G&&G.chosen_index!=undefined){t=K.channel_matches;
K.channel_matches_index=h(G.chosen_index,K.channel_matches.length-1);
u=t[K.channel_matches_index]
}else{if(!s){t=K.channel_matches;
if(G&&G.shiftKey){K.channel_matches_index--;
if(K.channel_matches_index<0){K.channel_matches_index=K.channel_matches.length-1
}}else{K.channel_matches_index++;
if(K.channel_matches_index>=K.channel_matches.length){K.channel_matches_index=0
}}u=t[K.channel_matches_index]
}else{t=[];
var q=TS.channels.getChannelsForUser();
var L;
var M;
var F=s.replace("#","");
if(K.channel_prefix&&s.toLowerCase().indexOf(K.channel_prefix.toLowerCase())==0){F=F.substr(K.channel_prefix.length);
D=K.channel_prefix
}for(var E=0;
E<q.length;
E++){L=q[E];
if(L.is_archived){continue
}M=L._name_lc;
if(M.indexOf(F)==0||("#"+M).indexOf(F)==0){t.push(L.name)
}}if(!t.length){return false
}K.channel_matches_index=0;
if(t.length>0){K.channel_matches=t
}u=t[K.channel_matches_index]
}}K.matched_on=s;
if(!s){var C=B[B.length-2];
if(K.channel_prefix&&C.toLowerCase().indexOf(K.channel_prefix.toLowerCase())==0){D=K.channel_prefix
}B[B.length-2]=D+"#"+u
}else{B[B.length-1]=D+"#"+u+" "
}if(!G){return m
}var I=B.join(" ");
var v=I.length;
var H=A.replace(z,I);
if(J.length){v+=J.join("\n").length+1;
H=J.join("\n")+"\n"+I+x
}if(K.onComplete){K.onComplete(H)
}y.focus().setCursorPosition(v);
K.selected_index=K.channel_matches_index;
return e
}function d(D,t,ah){var ai=t.data("TS-tabComplete");
var P=t.getCursorPosition();
if(P==0){return false
}var F=D.substr(P);
var ae=D.substr(0,P).split("\n");
var X=ae.pop();
var B=X.split(" ");
var L=B[B.length-1].toLowerCase();
var Z="";
if(!L&&!ai.member_matches){return false
}var T="";
var x="";
var N;
var z;
if(ah&&ah.chosen_index!=undefined){N=ai.member_matches;
ai.member_matches_index=h(ah.chosen_index,ai.member_matches.length-1);
z=N[ai.member_matches_index]
}else{if(!L){N=ai.member_matches;
if(ah&&ah.shiftKey){ai.member_matches_index--;
if(ai.member_matches_index<0){ai.member_matches_index=ai.member_matches.length-1
}}else{ai.member_matches_index++;
if(ai.member_matches_index>=ai.member_matches.length){ai.member_matches_index=0
}}z=N[ai.member_matches_index]
}else{N=[];
var E=[];
var v=[];
var aa=[];
var S=[];
var W=[];
var af,ad;
var ag=(ai.include_self)?TS.members.getActiveMembersWithSelfAndSlackbot():TS.members.getActiveMembersWithSlackbotAndNotSelf();
for(af=0;
af<ag.length;
af++){if(ag[af].deleted){continue
}W.push(ag[af])
}var ac;
var I;
var Q;
var M;
var R;
var G;
var r;
var H;
var Y;
var V;
var s=L;
var ab=TS.shared.getActiveModelOb();
if(ai.member_prefix&&L.toLowerCase().indexOf(ai.member_prefix.toLowerCase())==0){s=s.substr(ai.member_prefix.length);
Z=ai.member_prefix
}var y=new RegExp("\\b"+TS.utility.regexpEscape(s.replace(/^@/,""),1000),"i");
for(af=0;
af<W.length;
af++){ac=W[af];
I=ac._name_lc;
Q=I+":";
M="@"+I;
R="@"+I+":";
G=(ac.profile.first_name)?ac._first_nam_lc:"";
r=(ac.profile.last_name)?ac._last_name_lc:"";
H="@"+G;
Y="@"+r;
V=(ac.profile.real_name_normalized)?ac.profile.real_name_normalized:"";
if(I.indexOf(s)==0){E.push(ac)
}else{if(Q.indexOf(s)==0){E.push(ac)
}else{if(M.indexOf(s)==0){E.push(ac)
}else{if(R.indexOf(s)==0){E.push(ac)
}else{if(G&&G.indexOf(s)==0){v.push(ac)
}else{if(r&&r.indexOf(s)==0){aa.push(ac)
}else{if(G&&H.indexOf(s)==0){v.push(ac)
}else{if(r&&Y.indexOf(s)==0){aa.push(ac)
}else{if(V&&y.test(V)){S.push(ac)
}}}}}}}}}}E.sort(function C(ak,A){var al=ak._name_lc;
var am=A._name_lc;
if(al<am){return -1
}if(al>am){return 1
}return 0
});
v.sort(function C(ak,A){var al=ak._first_nam_lc;
var am=A._first_nam_lc;
if(al<am){return -1
}if(al>am){return 1
}return 0
});
aa.sort(function C(ak,A){var al=ak._last_name_lc;
var am=A._last_name_lc;
if(al<am){return -1
}if(al>am){return 1
}return 0
});
S.sort(function C(ak,A){var al=ak._real_name_normalized_lc;
var am=A._real_name_normalized_lc;
if(al<am){return -1
}if(al>am){return 1
}return 0
});
E=E.concat(v).concat(aa).concat(S);
var U=ai.sort_by_membership&&ab&&!ab.is_im;
if(U){var K=[];
for(af=0;
af<E.length;
af++){ac=E[af];
if(TS.boot_data.feature_bot_users){if(ac.is_bot||ac.is_slackbot){K.push({sort_by:(ab.members.indexOf(ac.id)==-1?2000000:20000)+af,name:ac.name})
}else{K.push({sort_by:(ab.members.indexOf(ac.id)==-1?1000000:10000)+af,name:ac.name})
}}else{K.push({sort_by:(!ac.is_slackbot&&ab.members.indexOf(ac.id)==-1?1000000:10000)+af,name:ac.name})
}}if(ai.complete_member_specials){if(ab&&ab.is_general&&TS.members.canUserAtEveryone()){if("@everyone".indexOf(s)==0||"@all".indexOf(s)==0){K.push({sort_by:("@everyone"==s||"@all"==s)?1:2000000,name:"everyone"})
}}if(TS.members.canUserAtChannelOrAtGroup()&&ab&&ab.is_channel&&(!ab.is_general||TS.members.canUserAtEveryone())){if(("@channel").indexOf(s)==0){K.push({sort_by:500000,name:"channel"})
}}else{if(TS.members.canUserAtChannelOrAtGroup()&&ab&&ab.is_group){if(("@group").indexOf(s)==0){K.push({sort_by:500000,name:"group"})
}}}}K.sort(function C(ak,A){if(ak.sort_by<A.sort_by){return -1
}if(ak.sort_by>A.sort_by){return 1
}return 0
});
for(af=0;
af<K.length;
af++){N.push(K[af].name)
}}else{if(TS.boot_data.feature_bot_users){var u,J;
u=[];
J=[];
for(af=0;
af<E.length;
af++){ac=E[af];
if(ac.is_bot||ac.is_slackbot){J.push(ac.name)
}else{u.push(ac.name)
}}N=u.concat(J)
}else{for(af=0;
af<E.length;
af++){ac=E[af];
N.push(ac.name)
}}if(ai.complete_member_specials){if(ab&&ab.is_general&&!TS.model.user.is_restricted){if(("@everyone").indexOf(s)==0||("@all").indexOf(s)==0){if("@everyone"==s||"@all"==s){N.unshift("everyone")
}else{N.push("everyone")
}}}if(ab&&ab.is_channel){if(("@channel").indexOf(s)==0){if("@channel"==s){N.unshift("channel")
}else{N.push("channel")
}}}else{if(ab&&ab.is_group){if(("@group").indexOf(s)==0){if("@group"==s){N.unshift("group")
}else{N.push("group")
}}}}}}if(!N.length){return false
}ai.member_matches_index=0;
if(N.length>0){ai.member_matches=N
}z=N[ai.member_matches_index]
}}ai.matched_on=L;
if(!L){var aj=B[B.length-2];
if(ai.member_prefix&&aj.toLowerCase().indexOf(ai.member_prefix.toLowerCase())==0){Z=ai.member_prefix
}if(B.length-2==0&&ai.member_colon){T=":"
}if(aj&&(aj.indexOf("@")>-1||TS.model.team.prefs.require_at_for_mention)){x="@"
}B[B.length-2]=Z+x+z+T
}else{if(B.length-1==0&&ai.member_colon){T=":"
}if(B[B.length-1].indexOf("@")>-1||TS.model.team.prefs.require_at_for_mention){x="@"
}B[B.length-1]=Z+x+z+T+" "
}if(!ah){return m
}var w=B.join(" ");
var O=w.length;
var q=D.replace(X,w);
if(ae.length){O+=ae.join("\n").length+1;
q=ae.join("\n")+"\n"+w+F
}if(ai.onComplete){ai.onComplete(q)
}t.focus().setCursorPosition(O);
ai.selected_index=ai.member_matches_index;
return e
}function a(A,y,E){var I=y.data("TS-tabComplete");
var s=y.getCursorPosition();
if(s==0){return false
}var x=A.substr(s);
var H=A.substr(0,s).split("\n");
var z=H.pop();
var B=z.split(" ");
var t=B[B.length-1].toLowerCase();
if(!t&&!I.emoji_matches){return false
}if(t&&t.indexOf(":")!=0){return false
}var w;
var u;
if(E&&E.chosen_index!=undefined){w=I.emoji_matches;
I.emoji_matches_index=h(E.chosen_index,I.emoji_matches.length-1);
u=w[I.emoji_matches_index]
}else{if(!t){w=I.emoji_matches;
if(E&&E.shiftKey){I.emoji_matches_index--;
if(I.emoji_matches_index<0){I.emoji_matches_index=I.emoji_matches.length-1
}}else{I.emoji_matches_index++;
if(I.emoji_matches_index>=I.emoji_matches.length){I.emoji_matches_index=0
}}u=w[I.emoji_matches_index]
}else{w=[];
var r=TS.model.emoji_names;
var J;
var D=t.replace(/:/g,"");
var q=new RegExp("(^)"+TS.utility.regexpEscape(D,1000),"i");
for(var C=0;
C<r.length;
C++){J=r[C];
if(!D||J.match(q)){w.push(J)
}}if(!w.length){return false
}I.emoji_matches_index=0;
if(w.length>0){I.emoji_matches=w
}u=w[I.emoji_matches_index]
}}I.matched_on=t;
if(!t){B[B.length-2]=":"+u+":"
}else{B[B.length-1]=":"+u+": "
}if(!E){return m
}var G=B.join(" ");
var v=G.length;
var F=A.replace(z,G);
if(H.length){v+=H.join("\n").length+1;
F=H.join("\n")+"\n"+G+x
}if(I.onComplete){I.onComplete(F)
}y.focus().setCursorPosition(v);
I.selected_index=I.emoji_matches_index;
return e
}function k(q,r){if(n){TS.warn("reset "+r)
}var s=q.data("TS-tabComplete");
var t=j(s);
s.cmds=null;
s.cmd_matches=null;
s.cmd_matches_index=-1;
s.member_matches=null;
s.member_matches_index=-1;
s.emoji_matches=null;
s.emoji_matches_index=-1;
s.channel_matches=null;
s.channel_matches_index=-1;
s.matched_on="";
s.work_on_textchange=true;
s.selected_index=-1;
s.ui_showing=false;
if(t){q.trigger("reset",{w:t+" "+r})
}}function j(q){var r="";
if(q.cmd_matches){r="cmds"
}if(q.member_matches){r="members"
}if(q.emoji_matches){r="emoji"
}if(q.channel_matches){r="channels"
}return r
}function p(x,u,q){var s=x.data("TS-tabComplete");
var t=(x.val());
var v=j(s);
var r=50;
var w=false;
var y={hide_ui:false,delay_ui:false,shown_callback:function(){s.ui_showing=true
}};
s.ui_showing=false;
if(TS.model.prefs.enter_is_special_in_tbt&&TS.utility.isCursorWithinTBTs(x)){y.hide_ui=true
}if(s.complete_emoji){w=a(t,x,u);
if(n){TS.info("completeOnEmoji:"+w)
}y.current_matches=s.emoji_matches||[];
y.w="emoji";
y.matched_on=s.matched_on;
if(w==m){if(n){TS.info("trigger MATCHES_SET matched_on:"+s.matched_on+" emoji_matches: "+s.emoji_matches)
}if(s.matched_on.length<3){y.hide_ui=true
}if(y.current_matches.length===1&&":"+y.current_matches[0]+":"==y.matched_on){y.hide_ui=true
}if(!y.hide_ui){if(TS.model.prefs.tab_ui_return_selects){s.selected_index=s.emoji_matches_index
}}y.i=s.selected_index;
x.trigger("matches_set",y);
return
}else{if(w==e){if(n){TS.info("trigger MATCH_CHANGED "+s.emoji_matches_index)
}y.i=s.emoji_matches_index;
x.trigger("match_changed",y);
return
}else{if(v=="emoji"){k(x,"not acting")
}else{}}}}if(s.complete_channels){w=b(t,x,u);
if(n){TS.info("completeOnChannels:"+w)
}y.current_matches=s.channel_matches||[];
y.w="channels";
y.matched_on=s.matched_on;
if(w==m){if(n){TS.info("trigger MATCHES_SET matched_on:"+s.matched_on+" channel_matches: "+s.channel_matches)
}if(!s.matched_on){y.hide_ui=true
}if(y.current_matches.length>r){y.hide_ui=true
}if(y.current_matches.length===1&&("#"+y.current_matches[0]==y.matched_on||y.current_matches[0]==y.matched_on)){y.hide_ui=true
}if(!y.hide_ui){if(TS.model.prefs.tab_ui_return_selects){s.selected_index=s.channel_matches_index
}}y.i=s.selected_index;
x.trigger("matches_set",y);
return
}else{if(w==e){if(n){TS.info("trigger MATCH_CHANGED "+s.channel_matches_index)
}y.i=s.channel_matches_index;
x.trigger("match_changed",y);
return
}else{if(v=="channels"){k(x,"not acting")
}else{}}}}if(s.new_cmds&&s.complete_cmds){w=g(t,x,u);
if(n){TS.info("completeOnCommandsNew:"+w)
}y.current_matches=s.cmd_matches||[];
y.w="cmds";
y.matched_on=s.matched_on;
if(w==m){if(n){TS.info("trigger MATCHES_SET matched_on:"+s.matched_on+" cmd_matches: "+s.cmd_matches)
}if(s.matched_on.length<1){y.hide_ui=true
}if(!y.hide_ui){if(TS.model.prefs.tab_ui_return_selects){s.selected_index=s.cmd_matches_index
}}y.i=s.selected_index;
x.trigger("matches_set",y);
return
}else{if(w==e){if(n){TS.info("trigger MATCH_CHANGED "+s.cmd_matches_index)
}y.i=s.cmd_matches_index;
x.trigger("match_changed",y);
return
}else{if(v=="cmds"){k(x,"not acting")
}else{}}}}if(s.complete_members){w=d(t,x,u);
if(n){TS.info("completeOnMembers:"+w)
}y.current_matches=s.member_matches||[];
y.w="members";
y.matched_on=s.matched_on;
y.sort_by_membership=s.sort_by_membership;
if(s.matched_on&&s.matched_on.indexOf("@")!=0&&(!u||u.which!=TS.utility.keymap.tab)){y.delay_ui=true
}if(w==m){if(n){TS.info("trigger MATCHES_SET matched_on:"+s.matched_on+" member_matches:"+s.member_matches)
}if(s.matched_on.indexOf("@")!=0&&(s.matched_on.length<3||s.member_prefix_required||TS.model.prefs.require_at)){y.hide_ui=true
}if(s.matched_on=="the"||s.matched_on=="and"){y.hide_ui=true
}if(y.current_matches.length>r){y.hide_ui=true
}if(y.current_matches.length===1&&("@"+y.current_matches[0]==y.matched_on||y.current_matches[0]==y.matched_on)){y.hide_ui=true
}if(!y.hide_ui){if(TS.model.prefs.tab_ui_return_selects){s.selected_index=s.member_matches_index
}}y.i=s.selected_index;
x.trigger("matches_set",y);
return
}else{if(w==e){if(n){TS.info("trigger MATCH_CHANGED "+s.member_matches_index)
}y.i=s.member_matches_index;
x.trigger("match_changed",y);
return
}else{if(v=="members"){k(x,"not acting")
}else{}}}}if(!s.new_cmds&&q&&s.complete_cmds&&(!t||t.indexOf("/")==0)&&o(t,x,u)){return
}}function c(q,r,t){if(n){TS.warn("choose calling work with fake e i:"+r)
}var s=q.data("TS-tabComplete");
s.work_on_textchange=false;
p(q,{chosen_index:r});
s.work_on_textchange=true;
if(t){return
}setTimeout(function(){k(q,"choose "+r)
},1)
}var f={reset:function(q){var r=i(this);
k(r,"method called: "+q)
},choose:function(q){var r=i(this);
c(r,q)
},suspend:function(){var r=i(this);
var q=r.data("TS-tabComplete");
q.suspended=true;
k(r,"suspended")
},unsuspend:function(){var q=i(this).data("TS-tabComplete");
q.suspended=false
},changeoption:function(s,r){var q=i(this).data("TS-tabComplete");
q[s]=r
},init:function(q){var r=i.extend({complete_member_specials:false,complete_members:true,member_prefix:"",member_colon:true,complete_cmds:false,complete_emoji:false,complete_channels:false,channel_prefix:"",no_tab_out:false,member_prefix_required:false,include_self:false,sort_by_membership:false,new_cmds:false},q);
return this.each(function(){var s=i(this);
if(s.data("TS-tabComplete")){return
}if(q.ui_initer){q.ui_initer(s)
}s.data("TS-tabComplete",{channel_prefix:r.channel_prefix,cmd_matches_index:-1,cmd_matches:null,cmds:null,complete_channels:r.complete_channels,complete_cmds:r.complete_cmds,complete_emoji:r.complete_emoji,complete_member_specials:r.complete_member_specials,complete_members:r.complete_members,member_colon:r.member_colon,member_matches_index:-1,member_matches:null,member_prefix:r.member_prefix,onComplete:r.onComplete,selected_index:-1,work_on_textchange:true,matched_on:"",suspended:q.suspended===true,member_prefix_required:r.member_prefix_required,include_self:r.include_self,sort_by_membership:r.sort_by_membership,new_cmds:r.new_cmds});
s.bind("textchange",function(u){var t=s.data("TS-tabComplete");
if(t.suspended){return
}if(t.work_on_textchange){if(n){TS.warn('textchange calling work no e text:"'+i(this).val()+'"')
}p(s,null)
}});
s.bind("paste",function(u){var t=s.data("TS-tabComplete");
k(s,"paste");
t.work_on_textchange=false;
var v=setTimeout(function(){t.work_on_textchange=true
},50);
s.bind("textchange.after_paste",function(w){clearTimeout(v);
t.work_on_textchange=true;
s.unbind("textchange.after_paste")
})
});
s.bind("keydown",function(x){var v=s.data("TS-tabComplete");
if(v.suspended){return
}var w=j(v);
var t=TS.utility.keymap;
if(n){TS.info("keydown:"+x.which+' text:"'+i(this).val()+'" current:'+w+" ---------------------------------------------------------------")
}if(x.which==t.tab&&!(x.metaKey||x.ctrlKey)){v.work_on_textchange=false;
if(n){TS.warn("keydown calling work WITH e")
}p(s,x,true);
if(w||r.no_tab_out){x.preventDefault()
}}else{if(x.which==t.space){if(!v.new_cmds||w!="cmds"){k(s,"space")
}}}if(!v.ui_showing){return
}if(x.which==t.down&&w){x.preventDefault();
c(s,v.selected_index+1,true)
}else{if(x.which==t.up&&w){x.preventDefault();
x.shiftKey=true;
c(s,v.selected_index-1,true)
}else{if(x.which==t.right&&w=="emoji"&&v.emoji_matches.length>1){x.preventDefault();
c(s,v.selected_index+1,true)
}else{if(x.which==t.left&&w=="emoji"&&v.emoji_matches.length>1){x.preventDefault();
x.shiftKey=true;
c(s,v.selected_index-1,true)
}else{if(x.which==t.enter&&!TS.model.prefs.tab_ui_return_selects){k(s,"enter")
}else{if(x.which==t.enter&&v.selected_index!=-1){if(v.new_cmds&&w=="cmds"){c(s,v.selected_index)
}else{c(s,v.selected_index)
}}else{if(x.which==t.enter||x.which==t.tab){var u;
if(w=="members"){u=v.member_matches
}if(w=="channels"){u=v.channel_matches
}if(w=="emoji"){u=v.emoji_matches
}if(v.new_cmds&&w=="cmds"){u=v.cmd_matches
}if(u&&u.length==1){c(s,0)
}}else{if(x.which==t.esc||x.which==t.alt||x.which==t.ctrl||x.which==t.cmd_ff||x.which==t.cmd_other||x.which==t.left||x.which==t.right||x.which==t.end||x.which==t.home){k(s,x.which)
}}}}}}}}});
s.bind("keyup",function(u){var t=s.data("TS-tabComplete");
if(t.suspended){return
}t.work_on_textchange=true
})
})
}};
i.fn.TS_tabComplete2=function(q){if(f[q]){return f[q].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof q==="object"||!q){return f.init.apply(this,arguments)
}else{i.error("Method "+q+" does not exist on jQuery.tooltip")
}}}
})(jQuery);