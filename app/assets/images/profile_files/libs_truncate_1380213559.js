(function(b,c){function a(e,l,j){if(e){e=e.replace(/\@/g,"&#64;")
}var d={},g="",v="...",p=["img","br"],u=[],C=0,w=g,q='([\\w|-]+\\s*=\\s*"[^"]*"\\s*)*',A="\\s*\\/?\\s*",k="\\s*\\/\\s*",s=new RegExp("<\\/?\\w+\\s*"+q+k+">"),m=new RegExp("<\\/?\\w+\\s*"+q+A+">"),x=/(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w\-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g,r=new RegExp("<img\\s*"+q+A+">"),h=true,t,n,o,B,f;
function i(G){var F=r.exec(G),E,D;
if(!F){return G
}E=F.index;
D=F[0].length;
return G.substring(0,E)+G.substring(E+D)
}function y(D){var E="";
D.reverse().forEach(function(F,G){if(-1===p.indexOf(F)){E+="</"+F+">"
}});
return E
}function z(E){var D=E.indexOf(" ");
if(-1===D){D=E.indexOf(">");
if(-1===D){throw new Error("HTML tag is not well-formed : "+E)
}}return E.substring(1,D)
}j=j||d;
j.ellipsis=(c!==j.ellipsis)?j.ellipsis:v;
while(h){h=m.exec(e);
if(!h){if(C>=l){break
}h=x.exec(e);
if(!h||h.index>=l){w+=e.substring(0,l-C);
break
}while(h){t=h[0];
n=h.index;
w+=e.substring(0,(n+t.length)-C);
e=e.substring(n+t.length);
h=x.exec(e)
}break
}t=h[0];
n=h.index;
if(C+n>l){w+=(e.substring(0,l-C));
break
}else{C+=n;
w+=e.substring(0,n)
}if("/"===t[1]){u.pop()
}else{f=s.exec(t);
if(!f){B=z(t);
u.push(B)
}}if(f){w+=f[0]
}else{w+=t
}e=e.substring(n+t.length)
}if(e.length>l&&j.ellipsis){w+=j.ellipsis
}w+=y(u);
if(!j.keepImageTag){w=i(w)
}return w
}if("undefined"!==typeof module&&module.exports){module.exports=a
}else{b.truncate=a
}}(this));