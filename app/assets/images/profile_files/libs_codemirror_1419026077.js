(function(a){if(typeof exports=="object"&&typeof module=="object"){module.exports=a()
}else{if(typeof define=="function"&&define.amd){return define([],a)
}else{this.CodeMirror=a()
}}})(function(){var cn=/gecko\/\d/i.test(navigator.userAgent);
var eB=/MSIE \d/.test(navigator.userAgent);
var bH=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
var dA=eB||bH;
var l=dA&&(eB?document.documentMode||6:bH[1]);
var cV=/WebKit\//.test(navigator.userAgent);
var dD=cV&&/Qt\/\d+\.\d+/.test(navigator.userAgent);
var c7=/Chrome\//.test(navigator.userAgent);
var dS=/Opera\//.test(navigator.userAgent);
var aA=/Apple Computer/.test(navigator.vendor);
var a6=/KHTML\//.test(navigator.userAgent);
var c2=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent);
var fl=/PhantomJS/.test(navigator.userAgent);
var eS=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent);
var d6=eS||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent);
var b5=eS||/Mac/.test(navigator.platform);
var aL=/win/i.test(navigator.platform);
var aT=dS&&navigator.userAgent.match(/Version\/(\d*\.\d*)/);
if(aT){aT=Number(aT[1])
}if(aT&&aT>=15){dS=false;
cV=true
}var bO=b5&&(dD||dS&&(aT==null||aT<12.11));
var fV=cn||(dA&&l>=9);
var fY=false,a2=false;
function J(f3,f4){if(!(this instanceof J)){return new J(f3,f4)
}this.options=f4=f4?aJ(f4):{};
aJ(eU,f4,false);
cc(f4);
var f8=f4.value;
if(typeof f8=="string"){f8=new ar(f8,f4.mode)
}this.doc=f8;
var f7=this.display=new ez(f3,f8);
f7.wrapper.CodeMirror=this;
d2(this);
cL(this);
if(f4.lineWrapping){this.display.wrapper.className+=" CodeMirror-wrap"
}if(f4.autofocus&&!d6){eq(this)
}this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:false,focused:false,suppressEdits:false,pasteIncoming:false,cutIncoming:false,draggingText:false,highlight:new f2(),keySeq:null};
if(dA&&l<11){setTimeout(cu(ff,this,true),20)
}fG(this);
be();
cF(this);
this.curOp.forceUpdate=true;
d1(this,f8);
if((f4.autofocus&&!d6)||dE()==f7.input){setTimeout(cu(cz,this),20)
}else{aQ(this)
}for(var f6 in ba){if(ba.hasOwnProperty(f6)){ba[f6](this,f4[f6],ca)
}}dV(this);
for(var f5=0;
f5<a3.length;
++f5){a3[f5](this)
}al(this)
}function ez(f3,f5){var f6=this;
var f4=f6.input=fN("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
if(cV){f4.style.width="1000px"
}else{f4.setAttribute("wrap","off")
}if(eS){f4.style.border="1px solid black"
}f4.setAttribute("autocorrect","off");
f4.setAttribute("autocapitalize","off");
f4.setAttribute("spellcheck","false");
f6.inputDiv=fN("div",[f4],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");
f6.scrollbarH=fN("div",[fN("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");
f6.scrollbarV=fN("div",[fN("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar");
f6.scrollbarFiller=fN("div",null,"CodeMirror-scrollbar-filler");
f6.gutterFiller=fN("div",null,"CodeMirror-gutter-filler");
f6.lineDiv=fN("div",null,"CodeMirror-code");
f6.selectionDiv=fN("div",null,null,"position: relative; z-index: 1");
f6.cursorDiv=fN("div",null,"CodeMirror-cursors");
f6.measure=fN("div",null,"CodeMirror-measure");
f6.lineMeasure=fN("div",null,"CodeMirror-measure");
f6.lineSpace=fN("div",[f6.measure,f6.lineMeasure,f6.selectionDiv,f6.cursorDiv,f6.lineDiv],null,"position: relative; outline: none");
f6.mover=fN("div",[fN("div",[f6.lineSpace],"CodeMirror-lines")],null,"position: relative");
f6.sizer=fN("div",[f6.mover],"CodeMirror-sizer");
f6.heightForcer=fN("div",null,null,"position: absolute; height: "+bg+"px; width: 1px;");
f6.gutters=fN("div",null,"CodeMirror-gutters");
f6.lineGutter=null;
f6.scroller=fN("div",[f6.sizer,f6.heightForcer,f6.gutters],"CodeMirror-scroll");
f6.scroller.setAttribute("tabIndex","-1");
f6.wrapper=fN("div",[f6.inputDiv,f6.scrollbarH,f6.scrollbarV,f6.scrollbarFiller,f6.gutterFiller,f6.scroller],"CodeMirror");
if(dA&&l<8){f6.gutters.style.zIndex=-1;
f6.scroller.style.paddingRight=0
}if(eS){f4.style.width="0px"
}if(!cV){f6.scroller.draggable=true
}if(a6){f6.inputDiv.style.height="1px";
f6.inputDiv.style.position="absolute"
}if(dA&&l<8){f6.scrollbarH.style.minHeight=f6.scrollbarV.style.minWidth="18px"
}if(f3){if(f3.appendChild){f3.appendChild(f6.wrapper)
}else{f3(f6.wrapper)
}}f6.viewFrom=f6.viewTo=f5.first;
f6.view=[];
f6.externalMeasured=null;
f6.viewOffset=0;
f6.lastWrapHeight=f6.lastWrapWidth=0;
f6.updateLineNumbers=null;
f6.lineNumWidth=f6.lineNumInnerWidth=f6.lineNumChars=null;
f6.prevInput="";
f6.alignWidgets=false;
f6.pollingFast=false;
f6.poll=new f2();
f6.cachedCharWidth=f6.cachedTextHeight=f6.cachedPaddingH=null;
f6.inaccurateSelection=false;
f6.maxLine=null;
f6.maxLineLength=0;
f6.maxLineChanged=false;
f6.wheelDX=f6.wheelDY=f6.wheelStartX=f6.wheelStartY=null;
f6.shift=false;
f6.selForContextMenu=null
}function bp(f3){f3.doc.mode=J.getMode(f3.options,f3.doc.modeOption);
eb(f3)
}function eb(f3){f3.doc.iter(function(f4){if(f4.stateAfter){f4.stateAfter=null
}if(f4.styles){f4.styles=null
}});
f3.doc.frontier=f3.doc.first;
d5(f3,100);
f3.state.modeGen++;
if(f3.curOp){ag(f3)
}}function ex(f3){if(f3.options.lineWrapping){fr(f3.display.wrapper,"CodeMirror-wrap");
f3.display.sizer.style.minWidth=""
}else{f(f3.display.wrapper,"CodeMirror-wrap");
g(f3)
}Y(f3);
ag(f3);
aj(f3);
setTimeout(function(){eP(f3)
},100)
}function a9(f3){var f5=aS(f3.display),f4=f3.options.lineWrapping;
var f6=f4&&Math.max(5,f3.display.scroller.clientWidth/du(f3.display)-3);
return function(f8){if(fn(f3.doc,f8)){return 0
}var f7=0;
if(f8.widgets){for(var f9=0;
f9<f8.widgets.length;
f9++){if(f8.widgets[f9].height){f7+=f8.widgets[f9].height
}}}if(f4){return f7+(Math.ceil(f8.text.length/f6)||1)*f5
}else{return f7+f5
}}
}function Y(f3){var f5=f3.doc,f4=a9(f3);
f5.iter(function(f6){var f7=f4(f6);
if(f7!=f6.height){fR(f6,f7)
}})
}function cL(f3){f3.display.wrapper.className=f3.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+f3.options.theme.replace(/(^|\s)\s*/g," cm-s-");
aj(f3)
}function dm(f3){d2(f3);
ag(f3);
setTimeout(function(){ev(f3)
},20)
}function d2(f3){var f4=f3.display.gutters,f8=f3.options.gutters;
dR(f4);
for(var f5=0;
f5<f8.length;
++f5){var f6=f8[f5];
var f7=f4.appendChild(fN("div",null,"CodeMirror-gutter "+f6));
if(f6=="CodeMirror-linenumbers"){f3.display.lineGutter=f7;
f7.style.width=(f3.display.lineNumWidth||1)+"px"
}}f4.style.display=f5?"":"none";
cZ(f3)
}function cZ(f3){var f4=f3.display.gutters.offsetWidth;
f3.display.sizer.style.marginLeft=f4+"px";
f3.display.scrollbarH.style.left=f3.options.fixedGutter?f4+"px":0
}function ec(f5){if(f5.height==0){return 0
}var f4=f5.text.length,f3,f7=f5;
while(f3=eF(f7)){var f6=f3.find(0,true);
f7=f6.from.line;
f4+=f6.from.ch-f6.to.ch
}f7=f5;
while(f3=el(f7)){var f6=f3.find(0,true);
f4-=f7.text.length-f6.from.ch;
f7=f6.to.line;
f4+=f7.text.length-f6.to.ch
}return f4
}function g(f3){var f5=f3.display,f4=f3.doc;
f5.maxLine=e5(f4,f4.first);
f5.maxLineLength=ec(f5.maxLine);
f5.maxLineChanged=true;
f4.iter(function(f7){var f6=ec(f7);
if(f6>f5.maxLineLength){f5.maxLineLength=f6;
f5.maxLine=f7
}})
}function cc(f3){var f4=dc(f3.gutters,"CodeMirror-linenumbers");
if(f4==-1&&f3.lineNumbers){f3.gutters=f3.gutters.concat(["CodeMirror-linenumbers"])
}else{if(f4>-1&&!f3.lineNumbers){f3.gutters=f3.gutters.slice(0);
f3.gutters.splice(f4,1)
}}}function cN(f3){return f3.display.scroller.clientHeight-f3.display.wrapper.clientHeight<bg-3
}function dr(f4){var f3=f4.display.scroller;
return{clientHeight:f3.clientHeight,barHeight:f4.display.scrollbarV.clientHeight,scrollWidth:f3.scrollWidth,clientWidth:f3.clientWidth,hScrollbarTakesSpace:cN(f4),barWidth:f4.display.scrollbarH.clientWidth,docHeight:Math.round(f4.doc.height+bG(f4.display))}
}function eP(ga,f3){if(!f3){f3=dr(ga)
}var f7=ga.display,f4=k(f7.measure);
var gb=f3.docHeight+bg;
var f5=f3.scrollWidth>f3.clientWidth;
if(f5&&f3.scrollWidth<=f3.clientWidth+1&&f4>0&&!f3.hScrollbarTakesSpace){f5=false
}var f6=gb>f3.clientHeight;
if(f6){f7.scrollbarV.style.display="block";
f7.scrollbarV.style.bottom=f5?f4+"px":"0";
f7.scrollbarV.firstChild.style.height=Math.max(0,gb-f3.clientHeight+(f3.barHeight||f7.scrollbarV.clientHeight))+"px"
}else{f7.scrollbarV.style.display="";
f7.scrollbarV.firstChild.style.height="0"
}if(f5){f7.scrollbarH.style.display="block";
f7.scrollbarH.style.right=f6?f4+"px":"0";
f7.scrollbarH.firstChild.style.width=(f3.scrollWidth-f3.clientWidth+(f3.barWidth||f7.scrollbarH.clientWidth))+"px"
}else{f7.scrollbarH.style.display="";
f7.scrollbarH.firstChild.style.width="0"
}if(f5&&f6){f7.scrollbarFiller.style.display="block";
f7.scrollbarFiller.style.height=f7.scrollbarFiller.style.width=f4+"px"
}else{f7.scrollbarFiller.style.display=""
}if(f5&&ga.options.coverGutterNextToScrollbar&&ga.options.fixedGutter){f7.gutterFiller.style.display="block";
f7.gutterFiller.style.height=f4+"px";
f7.gutterFiller.style.width=f7.gutters.offsetWidth+"px"
}else{f7.gutterFiller.style.display=""
}if(!ga.state.checkedOverlayScrollbar&&f3.clientHeight>0){if(f4===0){var f9=b5&&!c2?"12px":"18px";
f7.scrollbarV.style.minWidth=f7.scrollbarH.style.minHeight=f9;
var f8=function(gc){if(M(gc)!=f7.scrollbarV&&M(gc)!=f7.scrollbarH){cX(ga,ej)(gc)
}};
bV(f7.scrollbarV,"mousedown",f8);
bV(f7.scrollbarH,"mousedown",f8)
}ga.state.checkedOverlayScrollbar=true
}}function b4(f6,ga,f5){var f7=f5&&f5.top!=null?Math.max(0,f5.top):f6.scroller.scrollTop;
f7=Math.floor(f7-eY(f6));
var f3=f5&&f5.bottom!=null?f5.bottom:f7+f6.wrapper.clientHeight;
var f8=bE(ga,f7),f9=bE(ga,f3);
if(f5&&f5.ensure){var f4=f5.ensure.from.line,gb=f5.ensure.to.line;
if(f4<f8){return{from:f4,to:bE(ga,bK(e5(ga,f4))+f6.wrapper.clientHeight)}
}if(Math.min(gb,ga.lastLine())>=f9){return{from:bE(ga,bK(e5(ga,gb))-f6.wrapper.clientHeight),to:gb}
}}return{from:f8,to:Math.max(f9,f8+1)}
}function ev(gb){var f9=gb.display,ga=f9.view;
if(!f9.alignWidgets&&(!f9.gutters.firstChild||!gb.options.fixedGutter)){return
}var f7=dN(f9)-f9.scroller.scrollLeft+gb.doc.scrollLeft;
var f3=f9.gutters.offsetWidth,f4=f7+"px";
for(var f6=0;
f6<ga.length;
f6++){if(!ga[f6].hidden){if(gb.options.fixedGutter&&ga[f6].gutter){ga[f6].gutter.style.left=f4
}var f8=ga[f6].alignable;
if(f8){for(var f5=0;
f5<f8.length;
f5++){f8[f5].style.left=f4
}}}}if(gb.options.fixedGutter){f9.gutters.style.left=(f7+f3)+"px"
}}function dV(f3){if(!f3.options.lineNumbers){return false
}var f8=f3.doc,f4=ei(f3.options,f8.first+f8.size-1),f7=f3.display;
if(f4.length!=f7.lineNumChars){var f9=f7.measure.appendChild(fN("div",[fN("div",f4)],"CodeMirror-linenumber CodeMirror-gutter-elt"));
var f5=f9.firstChild.offsetWidth,f6=f9.offsetWidth-f5;
f7.lineGutter.style.width="";
f7.lineNumInnerWidth=Math.max(f5,f7.lineGutter.offsetWidth-f6);
f7.lineNumWidth=f7.lineNumInnerWidth+f6;
f7.lineNumChars=f7.lineNumInnerWidth?f4.length:-1;
f7.lineGutter.style.width=f7.lineNumWidth+"px";
cZ(f3);
return true
}return false
}function ei(f3,f4){return String(f3.lineNumberFormatter(f4+f3.firstLineNumber))
}function dN(f3){return f3.scroller.getBoundingClientRect().left-f3.sizer.getBoundingClientRect().left
}function aF(f4,f3,f5){var f6=f4.display;
this.viewport=f3;
this.visible=b4(f6,f4.doc,f3);
this.editorIsHidden=!f6.wrapper.offsetWidth;
this.wrapperHeight=f6.wrapper.clientHeight;
this.wrapperWidth=f6.wrapper.clientWidth;
this.oldViewFrom=f6.viewFrom;
this.oldViewTo=f6.viewTo;
this.oldScrollerWidth=f6.scroller.clientWidth;
this.force=f5;
this.dims=e3(f4)
}function D(gc,f6){var f7=gc.display,gb=gc.doc;
if(f6.editorIsHidden){en(gc);
return false
}if(!f6.force&&f6.visible.from>=f7.viewFrom&&f6.visible.to<=f7.viewTo&&(f7.updateLineNumbers==null||f7.updateLineNumbers>=f7.viewTo)&&c6(gc)==0){return false
}if(dV(gc)){en(gc);
f6.dims=e3(gc)
}var f5=gb.first+gb.size;
var f9=Math.max(f6.visible.from-gc.options.viewportMargin,gb.first);
var ga=Math.min(f5,f6.visible.to+gc.options.viewportMargin);
if(f7.viewFrom<f9&&f9-f7.viewFrom<20){f9=Math.max(gb.first,f7.viewFrom)
}if(f7.viewTo>ga&&f7.viewTo-ga<20){ga=Math.min(f5,f7.viewTo)
}if(a2){f9=aR(gc.doc,f9);
ga=dT(gc.doc,ga)
}var f4=f9!=f7.viewFrom||ga!=f7.viewTo||f7.lastWrapHeight!=f6.wrapperHeight||f7.lastWrapWidth!=f6.wrapperWidth;
cO(gc,f9,ga);
f7.viewOffset=bK(e5(gc.doc,f7.viewFrom));
gc.display.mover.style.top=f7.viewOffset+"px";
var f3=c6(gc);
if(!f4&&f3==0&&!f6.force&&(f7.updateLineNumbers==null||f7.updateLineNumbers>=f7.viewTo)){return false
}var f8=dE();
if(f3>4){f7.lineDiv.style.display="none"
}cl(gc,f7.updateLineNumbers,f6.dims);
if(f3>4){f7.lineDiv.style.display=""
}if(f8&&dE()!=f8&&f8.offsetHeight){f8.focus()
}dR(f7.cursorDiv);
dR(f7.selectionDiv);
if(f4){f7.lastWrapHeight=f6.wrapperHeight;
f7.lastWrapWidth=f6.wrapperWidth;
d5(gc,400)
}f7.updateLineNumbers=null;
return true
}function ci(f4,f8){var f6=f8.force,f3=f8.viewport;
for(var f7=true;
;
f7=false){if(f7&&f4.options.lineWrapping&&f8.oldScrollerWidth!=f4.display.scroller.clientWidth){f6=true
}else{f6=false;
if(f3&&f3.top!=null){f3={top:Math.min(f4.doc.height+bG(f4.display)-bg-f4.display.scroller.clientHeight,f3.top)}
}f8.visible=b4(f4.display,f4.doc,f3);
if(f8.visible.from>=f4.display.viewFrom&&f8.visible.to<=f4.display.viewTo){break
}}if(!D(f4,f8)){break
}a4(f4);
var f5=dr(f4);
bA(f4);
dq(f4,f5);
eP(f4,f5)
}ad(f4,"update",f4);
if(f4.display.viewFrom!=f8.oldViewFrom||f4.display.viewTo!=f8.oldViewTo){ad(f4,"viewportChange",f4,f4.display.viewFrom,f4.display.viewTo)
}}function dJ(f4,f3){var f6=new aF(f4,f3);
if(D(f4,f6)){a4(f4);
ci(f4,f6);
var f5=dr(f4);
bA(f4);
dq(f4,f5);
eP(f4,f5)
}}function dq(f3,f4){f3.display.sizer.style.minHeight=f3.display.heightForcer.style.top=f4.docHeight+"px";
f3.display.gutters.style.height=Math.max(f4.docHeight,f4.clientHeight-bg)+"px"
}function fQ(f3,f4){if(f3.display.sizer.offsetWidth+f3.display.gutters.offsetWidth<f3.display.scroller.clientWidth-1){f3.display.sizer.style.minHeight=f3.display.heightForcer.style.top="0px";
f3.display.gutters.style.height=f4.docHeight+"px"
}}function a4(ga){var f8=ga.display;
var f4=f8.lineDiv.offsetTop;
for(var f5=0;
f5<f8.view.length;
f5++){var gb=f8.view[f5],gc;
if(gb.hidden){continue
}if(dA&&l<8){var f7=gb.node.offsetTop+gb.node.offsetHeight;
gc=f7-f4;
f4=f7
}else{var f6=gb.node.getBoundingClientRect();
gc=f6.bottom-f6.top
}var f9=gb.line.height-gc;
if(gc<2){gc=aS(f8)
}if(f9>0.001||f9<-0.001){fR(gb.line,gc);
b9(gb.line);
if(gb.rest){for(var f3=0;
f3<gb.rest.length;
f3++){b9(gb.rest[f3])
}}}}}function b9(f3){if(f3.widgets){for(var f4=0;
f4<f3.widgets.length;
++f4){f3.widgets[f4].height=f3.widgets[f4].node.offsetHeight
}}}function e3(f3){var f8=f3.display,f6={},f5={};
var f7=f8.gutters.clientLeft;
for(var f9=f8.gutters.firstChild,f4=0;
f9;
f9=f9.nextSibling,++f4){f6[f3.options.gutters[f4]]=f9.offsetLeft+f9.clientLeft+f7;
f5[f3.options.gutters[f4]]=f9.clientWidth
}return{fixedPos:dN(f8),gutterTotalWidth:f8.gutters.offsetWidth,gutterLeft:f6,gutterWidth:f5,wrapperWidth:f8.wrapper.clientWidth}
}function cl(ge,f5,gd){var ga=ge.display,gg=ge.options.lineNumbers;
var f3=ga.lineDiv,gf=f3.firstChild;
function f9(gi){var gh=gi.nextSibling;
if(cV&&b5&&ge.display.currentWheelTarget==gi){gi.style.display="none"
}else{gi.parentNode.removeChild(gi)
}return gh
}var gb=ga.view,f8=ga.viewFrom;
for(var f6=0;
f6<gb.length;
f6++){var f7=gb[f6];
if(f7.hidden){}else{if(!f7.node){var f4=aC(ge,f7,f8,gd);
f3.insertBefore(f4,gf)
}else{while(gf!=f7.node){gf=f9(gf)
}var gc=gg&&f5!=null&&f5<=f8&&f7.lineNumber;
if(f7.changes){if(dc(f7.changes,"gutter")>-1){gc=false
}aa(ge,f7,f8,gd)
}if(gc){dR(f7.lineNumber);
f7.lineNumber.appendChild(document.createTextNode(ei(ge.options,f8)))
}gf=f7.node.nextSibling
}}f8+=f7.size
}while(gf){gf=f9(gf)
}}function aa(f3,f5,f7,f8){for(var f4=0;
f4<f5.changes.length;
f4++){var f6=f5.changes[f4];
if(f6=="text"){fb(f3,f5)
}else{if(f6=="gutter"){da(f3,f5,f7,f8)
}else{if(f6=="class"){dx(f5)
}else{if(f6=="widget"){an(f5,f8)
}}}}}f5.changes=null
}function fz(f3){if(f3.node==f3.text){f3.node=fN("div",null,null,"position: relative");
if(f3.text.parentNode){f3.text.parentNode.replaceChild(f3.node,f3.text)
}f3.node.appendChild(f3.text);
if(dA&&l<8){f3.node.style.zIndex=2
}}return f3.node
}function ek(f4){var f3=f4.bgClass?f4.bgClass+" "+(f4.line.bgClass||""):f4.line.bgClass;
if(f3){f3+=" CodeMirror-linebackground"
}if(f4.background){if(f3){f4.background.className=f3
}else{f4.background.parentNode.removeChild(f4.background);
f4.background=null
}}else{if(f3){var f5=fz(f4);
f4.background=f5.insertBefore(fN("div",null,f3),f5.firstChild)
}}}function dL(f3,f4){var f5=f3.display.externalMeasured;
if(f5&&f5.line==f4.line){f3.display.externalMeasured=null;
f4.measure=f5.measure;
return f5.built
}return eI(f3,f4)
}function fb(f3,f6){var f4=f6.text.className;
var f5=dL(f3,f6);
if(f6.text==f6.node){f6.node=f5.pre
}f6.text.parentNode.replaceChild(f5.pre,f6.text);
f6.text=f5.pre;
if(f5.bgClass!=f6.bgClass||f5.textClass!=f6.textClass){f6.bgClass=f5.bgClass;
f6.textClass=f5.textClass;
dx(f6)
}else{if(f4){f6.text.className=f4
}}}function dx(f4){ek(f4);
if(f4.line.wrapClass){fz(f4).className=f4.line.wrapClass
}else{if(f4.node!=f4.text){f4.node.className=""
}}var f3=f4.textClass?f4.textClass+" "+(f4.line.textClass||""):f4.line.textClass;
f4.text.className=f3||""
}function da(gb,f9,f8,ga){if(f9.gutter){f9.node.removeChild(f9.gutter);
f9.gutter=null
}var f6=f9.line.gutterMarkers;
if(gb.options.lineNumbers||f6){var f4=fz(f9);
var f7=f9.gutter=f4.insertBefore(fN("div",null,"CodeMirror-gutter-wrapper","left: "+(gb.options.fixedGutter?ga.fixedPos:-ga.gutterTotalWidth)+"px; width: "+ga.gutterTotalWidth+"px"),f9.text);
if(f9.line.gutterClass){f7.className+=" "+f9.line.gutterClass
}if(gb.options.lineNumbers&&(!f6||!f6["CodeMirror-linenumbers"])){f9.lineNumber=f7.appendChild(fN("div",ei(gb.options,f8),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+ga.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+gb.display.lineNumInnerWidth+"px"))
}if(f6){for(var f5=0;
f5<gb.options.gutters.length;
++f5){var f3=gb.options.gutters[f5],gc=f6.hasOwnProperty(f3)&&f6[f3];
if(gc){f7.appendChild(fN("div",[gc],"CodeMirror-gutter-elt","left: "+ga.gutterLeft[f3]+"px; width: "+ga.gutterWidth[f3]+"px"))
}}}}}function an(f3,f6){if(f3.alignable){f3.alignable=null
}for(var f5=f3.node.firstChild,f4;
f5;
f5=f4){var f4=f5.nextSibling;
if(f5.className=="CodeMirror-linewidget"){f3.node.removeChild(f5)
}}fk(f3,f6)
}function aC(f3,f5,f6,f7){var f4=dL(f3,f5);
f5.text=f5.node=f4.pre;
if(f4.bgClass){f5.bgClass=f4.bgClass
}if(f4.textClass){f5.textClass=f4.textClass
}dx(f5);
da(f3,f5,f6,f7);
fk(f5,f7);
return f5.node
}function fk(f4,f5){fS(f4.line,f4,f5,true);
if(f4.rest){for(var f3=0;
f3<f4.rest.length;
f3++){fS(f4.rest[f3],f4,f5,false)
}}}function fS(gb,f8,ga,f6){if(!gb.widgets){return
}var f3=fz(f8);
for(var f5=0,f9=gb.widgets;
f5<f9.length;
++f5){var f7=f9[f5],f4=fN("div",[f7.node],"CodeMirror-linewidget");
if(!f7.handleMouseEvents){f4.ignoreEvents=true
}bD(f7,f4,f8,ga);
if(f6&&f7.above){f3.insertBefore(f4,f8.gutter||f8.text)
}else{f3.appendChild(f4)
}ad(f7,"redraw")
}}function bD(f6,f5,f3,f7){if(f6.noHScroll){(f3.alignable||(f3.alignable=[])).push(f5);
var f4=f7.wrapperWidth;
f5.style.left=f7.fixedPos+"px";
if(!f6.coverGutter){f4-=f7.gutterTotalWidth;
f5.style.paddingLeft=f7.gutterTotalWidth+"px"
}f5.style.width=f4+"px"
}if(f6.coverGutter){f5.style.zIndex=5;
f5.style.position="relative";
if(!f6.noHScroll){f5.style.marginLeft=-f7.gutterTotalWidth+"px"
}}}var X=J.Pos=function(f3,f4){if(!(this instanceof X)){return new X(f3,f4)
}this.line=f3;
this.ch=f4
};
var cd=J.cmpPos=function(f4,f3){return f4.line-f3.line||f4.ch-f3.ch
};
function ch(f3){return X(f3.line,f3.ch)
}function bv(f4,f3){return cd(f4,f3)<0?f3:f4
}function aq(f4,f3){return cd(f4,f3)<0?f4:f3
}function fO(f3,f4){this.ranges=f3;
this.primIndex=f4
}fO.prototype={primary:function(){return this.ranges[this.primIndex]
},equals:function(f3){if(f3==this){return true
}if(f3.primIndex!=this.primIndex||f3.ranges.length!=this.ranges.length){return false
}for(var f5=0;
f5<this.ranges.length;
f5++){var f4=this.ranges[f5],f6=f3.ranges[f5];
if(cd(f4.anchor,f6.anchor)!=0||cd(f4.head,f6.head)!=0){return false
}}return true
},deepCopy:function(){for(var f3=[],f4=0;
f4<this.ranges.length;
f4++){f3[f4]=new dO(ch(this.ranges[f4].anchor),ch(this.ranges[f4].head))
}return new fO(f3,this.primIndex)
},somethingSelected:function(){for(var f3=0;
f3<this.ranges.length;
f3++){if(!this.ranges[f3].empty()){return true
}}return false
},contains:function(f6,f3){if(!f3){f3=f6
}for(var f5=0;
f5<this.ranges.length;
f5++){var f4=this.ranges[f5];
if(cd(f3,f4.from())>=0&&cd(f6,f4.to())<=0){return f5
}}return -1
}};
function dO(f3,f4){this.anchor=f3;
this.head=f4
}dO.prototype={from:function(){return aq(this.anchor,this.head)
},to:function(){return bv(this.anchor,this.head)
},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch
}};
function cv(f3,ga){var f5=f3[ga];
f3.sort(function(gd,gc){return cd(gd.from(),gc.from())
});
ga=dc(f3,f5);
for(var f7=1;
f7<f3.length;
f7++){var gb=f3[f7],f4=f3[f7-1];
if(cd(f4.to(),gb.from())>=0){var f8=aq(f4.from(),gb.from()),f9=bv(f4.to(),gb.to());
var f6=f4.empty()?gb.from()==gb.head:f4.from()==f4.head;
if(f7<=ga){--ga
}f3.splice(--f7,2,new dO(f6?f9:f8,f6?f8:f9))
}}return new fO(f3,ga)
}function eJ(f3,f4){return new fO([new dO(f3,f4||f3)],0)
}function c0(f3,f4){return Math.max(f3.first,Math.min(f4,f3.first+f3.size-1))
}function fA(f4,f5){if(f5.line<f4.first){return X(f4.first,0)
}var f3=f4.first+f4.size-1;
if(f5.line>f3){return X(f3,e5(f4,f3).text.length)
}return fj(f5,e5(f4,f5.line).text.length)
}function fj(f5,f4){var f3=f5.ch;
if(f3==null||f3>f4){return X(f5.line,f4)
}else{if(f3<0){return X(f5.line,0)
}else{return f5
}}}function b7(f4,f3){return f3>=f4.first&&f3<f4.first+f4.size
}function dP(f5,f6){for(var f3=[],f4=0;
f4<f6.length;
f4++){f3[f4]=fA(f5,f6[f4])
}return f3
}function fm(f8,f4,f7,f3){if(f8.cm&&f8.cm.display.shift||f8.extend){var f6=f4.anchor;
if(f3){var f5=cd(f7,f6)<0;
if(f5!=(cd(f3,f6)<0)){f6=f7;
f7=f3
}else{if(f5!=(cd(f7,f3)<0)){f7=f3
}}}return new dO(f6,f7)
}else{return new dO(f3||f7,f7)
}}function fK(f6,f5,f3,f4){bS(f6,new fO([fm(f6,f6.sel.primary(),f5,f3)],0),f4)
}function av(f8,f7,f5){for(var f4=[],f6=0;
f6<f8.sel.ranges.length;
f6++){f4[f6]=fm(f8,f8.sel.ranges[f6],f7[f6],null)
}var f3=cv(f4,f8.sel.primIndex);
bS(f8,f3,f5)
}function e(f7,f6,f4,f5){var f3=f7.sel.ranges.slice(0);
f3[f6]=f4;
bS(f7,cv(f3,f7.sel.primIndex),f5)
}function H(f6,f4,f5,f3){bS(f6,eJ(f4,f5),f3)
}function c(f5,f3){var f4={ranges:f3.ranges,update:function(f6){this.ranges=[];
for(var f7=0;
f7<f6.length;
f7++){this.ranges[f7]=new dO(fA(f5,f6[f7].anchor),fA(f5,f6[f7].head))
}}};
aB(f5,"beforeSelectionChange",f5,f4);
if(f5.cm){aB(f5.cm,"beforeSelectionChange",f5.cm,f4)
}if(f4.ranges!=f3.ranges){return cv(f4.ranges,f4.ranges.length-1)
}else{return f3
}}function eX(f7,f6,f4){var f3=f7.history.done,f5=fy(f3);
if(f5&&f5.ranges){f3[f3.length-1]=f6;
ef(f7,f6,f4)
}else{bS(f7,f6,f4)
}}function bS(f5,f4,f3){ef(f5,f4,f3);
fX(f5,f5.sel,f5.cm?f5.cm.curOp.id:NaN,f3)
}function ef(f6,f5,f4){if(e8(f6,"beforeSelectionChange")||f6.cm&&e8(f6.cm,"beforeSelectionChange")){f5=c(f6,f5)
}var f3=f4&&f4.bias||(cd(f5.primary().head,f6.sel.primary().head)<0?-1:1);
c4(f6,o(f6,f5,f3,true));
if(!(f4&&f4.scroll===false)&&f6.cm){fx(f6.cm)
}}function c4(f4,f3){if(f3.equals(f4.sel)){return
}f4.sel=f3;
if(f4.cm){f4.cm.curOp.updateInput=f4.cm.curOp.selectionChanged=true;
W(f4.cm)
}ad(f4,"cursorActivity",f4)
}function eo(f3){c4(f3,o(f3,f3.sel,null,false),Z)
}function o(gb,f3,f8,f9){var f5;
for(var f6=0;
f6<f3.ranges.length;
f6++){var f7=f3.ranges[f6];
var ga=bT(gb,f7.anchor,f8,f9);
var f4=bT(gb,f7.head,f8,f9);
if(f5||ga!=f7.anchor||f4!=f7.head){if(!f5){f5=f3.ranges.slice(0,f6)
}f5[f6]=new dO(ga,f4)
}}return f5?cv(f5,f3.primIndex):f3
}function bT(gc,gb,f8,f9){var gd=false,f5=gb;
var f6=f8||1;
gc.cantEdit=false;
search:for(;
;
){var ge=e5(gc,f5.line);
if(ge.markedSpans){for(var f7=0;
f7<ge.markedSpans.length;
++f7){var f3=ge.markedSpans[f7],f4=f3.marker;
if((f3.from==null||(f4.inclusiveLeft?f3.from<=f5.ch:f3.from<f5.ch))&&(f3.to==null||(f4.inclusiveRight?f3.to>=f5.ch:f3.to>f5.ch))){if(f9){aB(f4,"beforeCursorEnter");
if(f4.explicitlyCleared){if(!ge.markedSpans){break
}else{--f7;
continue
}}}if(!f4.atomic){continue
}var ga=f4.find(f6<0?-1:1);
if(cd(ga,f5)==0){ga.ch+=f6;
if(ga.ch<0){if(ga.line>gc.first){ga=fA(gc,X(ga.line-1))
}else{ga=null
}}else{if(ga.ch>ge.text.length){if(ga.line<gc.first+gc.size-1){ga=X(ga.line+1,0)
}else{ga=null
}}}if(!ga){if(gd){if(!f9){return bT(gc,gb,f8,true)
}gc.cantEdit=true;
return X(gc.first,0)
}gd=true;
ga=gb;
f6=-f6
}}f5=ga;
continue search
}}}return f5
}}function bj(gd){var f9=gd.display,gc=gd.doc,ge={};
var gb=ge.cursors=document.createDocumentFragment();
var f5=ge.selection=document.createDocumentFragment();
for(var f7=0;
f7<gc.sel.ranges.length;
f7++){var f8=gc.sel.ranges[f7];
var f6=f8.empty();
if(f6||gd.options.showCursorWhenSelecting){B(gd,f8,gb)
}if(!f6){bB(gd,f8,f5)
}}if(gd.options.moveInputWithCursor){var ga=dK(gd,gc.sel.primary().head,"div");
var f3=f9.wrapper.getBoundingClientRect(),f4=f9.lineDiv.getBoundingClientRect();
ge.teTop=Math.max(0,Math.min(f9.wrapper.clientHeight-10,ga.top+f4.top-f3.top));
ge.teLeft=Math.max(0,Math.min(f9.wrapper.clientWidth-10,ga.left+f4.left-f3.left))
}return ge
}function ak(f3,f4){bP(f3.display.cursorDiv,f4.cursors);
bP(f3.display.selectionDiv,f4.selection);
if(f4.teTop!=null){f3.display.inputDiv.style.top=f4.teTop+"px";
f3.display.inputDiv.style.left=f4.teLeft+"px"
}}function bA(f3){ak(f3,bj(f3))
}function B(f3,f6,f5){var f8=dK(f3,f6.head,"div",null,null,!f3.options.singleCursorHeightPerLine);
var f7=f5.appendChild(fN("div","\u00a0","CodeMirror-cursor"));
f7.style.left=f8.left+"px";
f7.style.top=f8.top+"px";
f7.style.height=Math.max(0,f8.bottom-f8.top)*f3.options.cursorHeight+"px";
if(f8.other){var f4=f5.appendChild(fN("div","\u00a0","CodeMirror-cursor CodeMirror-secondarycursor"));
f4.style.display="";
f4.style.left=f8.other.left+"px";
f4.style.top=f8.other.top+"px";
f4.style.height=(f8.other.bottom-f8.other.top)*0.85+"px"
}}function bB(f7,gd,f8){var gg=f7.display,gk=f7.doc;
var f3=document.createDocumentFragment();
var gc=eV(f7.display),f6=gc.left,gh=gg.lineSpace.offsetWidth-gc.right;
function ge(go,gn,gm,gl){if(gn<0){gn=0
}gn=Math.round(gn);
gl=Math.round(gl);
f3.appendChild(fN("div",null,"CodeMirror-selected","position: absolute; left: "+go+"px; top: "+gn+"px; width: "+(gm==null?gh-go:gm)+"px; height: "+(gl-gn)+"px"))
}function f4(gm,go,gr){var gn=e5(gk,gm);
var gp=gn.text.length;
var gs,gl;
function gq(gu,gt){return cG(f7,X(gm,gu),"div",gn,gt)
}dU(a(gn),go||0,gr==null?gp:gr,function(gA,gz,gt){var gw=gq(gA,"left"),gx,gy,gv;
if(gA==gz){gx=gw;
gy=gv=gw.left
}else{gx=gq(gz-1,"right");
if(gt=="rtl"){var gu=gw;
gw=gx;
gx=gu
}gy=gw.left;
gv=gx.right
}if(go==null&&gA==0){gy=f6
}if(gx.top-gw.top>3){ge(gy,gw.top,null,gw.bottom);
gy=f6;
if(gw.bottom<gx.top){ge(gy,gw.bottom,null,gx.top)
}}if(gr==null&&gz==gp){gv=gh
}if(!gs||gw.top<gs.top||gw.top==gs.top&&gw.left<gs.left){gs=gw
}if(!gl||gx.bottom>gl.bottom||gx.bottom==gl.bottom&&gx.right>gl.right){gl=gx
}if(gy<f6+1){gy=f6
}ge(gy,gx.top,gv-gy,gx.bottom)
});
return{start:gs,end:gl}
}var gj=gd.from(),gi=gd.to();
if(gj.line==gi.line){f4(gj.line,gj.ch,gi.ch)
}else{var f5=e5(gk,gj.line),ga=e5(gk,gi.line);
var f9=z(f5)==z(ga);
var gb=f4(gj.line,gj.ch,f9?f5.text.length+1:null).end;
var gf=f4(gi.line,f9?0:null,gi.ch).start;
if(f9){if(gb.top<gf.top-2){ge(gb.right,gb.top,null,gb.bottom);
ge(f6,gf.top,gf.left,gf.bottom)
}else{ge(gb.right,gb.top,gf.left-gb.right,gb.bottom)
}}if(gb.bottom<gf.top){ge(f6,gb.bottom,null,gf.top)
}}f8.appendChild(f3)
}function p(f3){if(!f3.state.focused){return
}var f5=f3.display;
clearInterval(f5.blinker);
var f4=true;
f5.cursorDiv.style.visibility="";
if(f3.options.cursorBlinkRate>0){f5.blinker=setInterval(function(){f5.cursorDiv.style.visibility=(f4=!f4)?"":"hidden"
},f3.options.cursorBlinkRate)
}else{if(f3.options.cursorBlinkRate<0){f5.cursorDiv.style.visibility="hidden"
}}}function d5(f3,f4){if(f3.doc.mode.startState&&f3.doc.frontier<f3.display.viewTo){f3.state.highlight.set(f4,cu(cM,f3))
}}function cM(f3){var f7=f3.doc;
if(f7.frontier<f7.first){f7.frontier=f7.first
}if(f7.frontier>=f3.display.viewTo){return
}var f5=+new Date+f3.options.workTime;
var f6=b1(f7.mode,ds(f3,f7.frontier));
var f4=[];
f7.iter(f7.frontier,Math.min(f7.first+f7.size,f3.display.viewTo+500),function(f8){if(f7.frontier>=f3.display.viewFrom){var gb=f8.styles;
var gd=fq(f3,f8,f6,true);
f8.styles=gd.styles;
var ga=f8.styleClasses,gc=gd.classes;
if(gc){f8.styleClasses=gc
}else{if(ga){f8.styleClasses=null
}}var ge=!gb||gb.length!=f8.styles.length||ga!=gc&&(!ga||!gc||ga.bgClass!=gc.bgClass||ga.textClass!=gc.textClass);
for(var f9=0;
!ge&&f9<gb.length;
++f9){ge=gb[f9]!=f8.styles[f9]
}if(ge){f4.push(f7.frontier)
}f8.stateAfter=b1(f7.mode,f6)
}else{dn(f3,f8.text,f6);
f8.stateAfter=f7.frontier%5==0?b1(f7.mode,f6):null
}++f7.frontier;
if(+new Date>f5){d5(f3,f3.options.workDelay);
return true
}});
if(f4.length){cJ(f3,function(){for(var f8=0;
f8<f4.length;
f8++){S(f3,f4[f8],"text")
}})
}}function cx(f9,f3,f6){var f4,f7,f8=f9.doc;
var f5=f6?-1:f3-(f9.doc.mode.innerMode?1000:100);
for(var gc=f3;
gc>f5;
--gc){if(gc<=f8.first){return f8.first
}var gb=e5(f8,gc-1);
if(gb.stateAfter&&(!f6||gc<=f8.frontier)){return gc
}var ga=bR(gb.text,null,f9.options.tabSize);
if(f7==null||f4>ga){f7=gc-1;
f4=ga
}}return f7
}function ds(f3,f9,f4){var f7=f3.doc,f6=f3.display;
if(!f7.mode.startState){return true
}var f8=cx(f3,f9,f4),f5=f8>f7.first&&e5(f7,f8-1).stateAfter;
if(!f5){f5=bY(f7.mode)
}else{f5=b1(f7.mode,f5)
}f7.iter(f8,f9,function(ga){dn(f3,ga.text,f5);
var gb=f8==f9-1||f8%5==0||f8>=f6.viewFrom&&f8<f6.viewTo;
ga.stateAfter=gb?b1(f7.mode,f5):null;
++f8
});
if(f4){f7.frontier=f8
}return f5
}function eY(f3){return f3.lineSpace.offsetTop
}function bG(f3){return f3.mover.offsetHeight-f3.lineSpace.offsetHeight
}function eV(f6){if(f6.cachedPaddingH){return f6.cachedPaddingH
}var f5=bP(f6.measure,fN("pre","x"));
var f3=window.getComputedStyle?window.getComputedStyle(f5):f5.currentStyle;
var f4={left:parseInt(f3.paddingLeft),right:parseInt(f3.paddingRight)};
if(!isNaN(f4.left)&&!isNaN(f4.right)){f6.cachedPaddingH=f4
}return f4
}function cg(ga,f6,f9){var f5=ga.options.lineWrapping;
var f7=f5&&ga.display.scroller.clientWidth;
if(!f6.measure.heights||f5&&f6.measure.width!=f7){var f8=f6.measure.heights=[];
if(f5){f6.measure.width=f7;
var gc=f6.text.firstChild.getClientRects();
for(var f3=0;
f3<gc.length-1;
f3++){var gb=gc[f3],f4=gc[f3+1];
if(Math.abs(gb.bottom-f4.bottom)>2){f8.push((gb.bottom+f4.top)/2-f9.top)
}}}f8.push(f9.bottom-f9.top)
}}function cs(f5,f3,f6){if(f5.line==f3){return{map:f5.measure.map,cache:f5.measure.cache}
}for(var f4=0;
f4<f5.rest.length;
f4++){if(f5.rest[f4]==f3){return{map:f5.measure.maps[f4],cache:f5.measure.caches[f4]}
}}for(var f4=0;
f4<f5.rest.length;
f4++){if(bL(f5.rest[f4])>f6){return{map:f5.measure.maps[f4],cache:f5.measure.caches[f4],before:true}
}}}function cW(f3,f5){f5=z(f5);
var f7=bL(f5);
var f4=f3.display.externalMeasured=new bt(f3.doc,f5,f7);
f4.lineN=f7;
var f6=f4.built=eI(f3,f4);
f4.text=f6.pre;
bP(f3.display.lineMeasure,f6.pre);
return f4
}function d7(f3,f4,f6,f5){return E(f3,aZ(f3,f4),f6,f5)
}function e1(f3,f5){if(f5>=f3.display.viewFrom&&f5<f3.display.viewTo){return f3.display.view[di(f3,f5)]
}var f4=f3.display.externalMeasured;
if(f4&&f5>=f4.lineN&&f5<f4.lineN+f4.size){return f4
}}function aZ(f3,f5){var f6=bL(f5);
var f4=e1(f3,f6);
if(f4&&!f4.text){f4=null
}else{if(f4&&f4.changes){aa(f3,f4,f6,e3(f3))
}}if(!f4){f4=cW(f3,f5)
}var f7=cs(f4,f5,f6);
return{line:f5,view:f4,rect:null,map:f7.map,cache:f7.cache,before:f7.before,hasHeights:false}
}function E(f3,f9,f7,f4,f6){if(f9.before){f7=-1
}var f5=f7+(f4||""),f8;
if(f9.cache.hasOwnProperty(f5)){f8=f9.cache[f5]
}else{if(!f9.rect){f9.rect=f9.view.text.getBoundingClientRect()
}if(!f9.hasHeights){cg(f3,f9.view,f9.rect);
f9.hasHeights=true
}f8=j(f3,f9,f7,f4);
if(!f8.bogus){f9.cache[f5]=f8
}}return{left:f8.left,right:f8.right,top:f6?f8.rtop:f8.top,bottom:f6?f8.rbottom:f8.bottom}
}var er={left:0,right:0,top:0,bottom:0};
function j(ga,gk,gc,f8){var go=gk.map;
var gh,f7,f6,f3;
for(var gj=0;
gj<go.length;
gj+=3){var gm=go[gj],gi=go[gj+1];
if(gc<gm){f7=0;
f6=1;
f3="left"
}else{if(gc<gi){f7=gc-gm;
f6=f7+1
}else{if(gj==go.length-3||gc==gi&&go[gj+3]>gc){f6=gi-gm;
f7=f6-1;
if(gc>=gi){f3="right"
}}}}if(f7!=null){gh=go[gj+2];
if(gm==gi&&f8==(gh.insertLeft?"left":"right")){f3=f8
}if(f8=="left"&&f7==0){while(gj&&go[gj-2]==go[gj-3]&&go[gj-1].insertLeft){gh=go[(gj-=3)+2];
f3="left"
}}if(f8=="right"&&f7==gi-gm){while(gj<go.length-3&&go[gj+3]==go[gj+4]&&!go[gj+5].insertLeft){gh=go[(gj+=3)+2];
f3="right"
}}break
}}var f4;
if(gh.nodeType==3){for(var gj=0;
gj<4;
gj++){while(f7&&fg(gk.line.text.charAt(gm+f7))){--f7
}while(gm+f6<gi&&fg(gk.line.text.charAt(gm+f6))){++f6
}if(dA&&l<9&&f7==0&&f6==gi-gm){f4=gh.parentNode.getBoundingClientRect()
}else{if(dA&&ga.options.lineWrapping){var f5=ck(gh,f7,f6).getClientRects();
if(f5.length){f4=f5[f8=="right"?f5.length-1:0]
}else{f4=er
}}else{f4=ck(gh,f7,f6).getBoundingClientRect()||er
}}if(f4.left||f4.right||f7==0){break
}f6=f7;
f7=f7-1;
f3="right"
}if(dA&&l<11){f4=eE(ga.display.measure,f4)
}}else{if(f7>0){f3=f8="right"
}var f5;
if(ga.options.lineWrapping&&(f5=gh.getClientRects()).length>1){f4=f5[f8=="right"?f5.length-1:0]
}else{f4=gh.getBoundingClientRect()
}}if(dA&&l<9&&!f7&&(!f4||!f4.left&&!f4.right)){var f9=gh.parentNode.getClientRects()[0];
if(f9){f4={left:f9.left,right:f9.left+du(ga.display),top:f9.top,bottom:f9.bottom}
}else{f4=er
}}var gf=f4.top-gk.rect.top,gd=f4.bottom-gk.rect.top;
var gn=(gf+gd)/2;
var gl=gk.view.measure.heights;
for(var gj=0;
gj<gl.length-1;
gj++){if(gn<gl[gj]){break
}}var gg=gj?gl[gj-1]:0,ge=gl[gj];
var gb={left:(f3=="right"?f4.right:f4.left)-gk.rect.left,right:(f3=="left"?f4.left:f4.right)-gk.rect.left,top:gg,bottom:ge};
if(!f4.left&&!f4.right){gb.bogus=true
}if(!ga.options.singleCursorHeightPerLine){gb.rtop=gf;
gb.rbottom=gd
}return gb
}function eE(f5,f6){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!aH(f5)){return f6
}var f4=screen.logicalXDPI/screen.deviceXDPI;
var f3=screen.logicalYDPI/screen.deviceYDPI;
return{left:f6.left*f4,right:f6.right*f4,top:f6.top*f3,bottom:f6.bottom*f3}
}function at(f4){if(f4.measure){f4.measure.cache={};
f4.measure.heights=null;
if(f4.rest){for(var f3=0;
f3<f4.rest.length;
f3++){f4.measure.caches[f3]={}
}}}}function aK(f3){f3.display.externalMeasure=null;
dR(f3.display.lineMeasure);
for(var f4=0;
f4<f3.display.view.length;
f4++){at(f3.display.view[f4])
}}function aj(f3){aK(f3);
f3.display.cachedCharWidth=f3.display.cachedTextHeight=f3.display.cachedPaddingH=null;
if(!f3.options.lineWrapping){f3.display.maxLineChanged=true
}f3.display.lineNumChars=null
}function ct(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft
}function cr(){return window.pageYOffset||(document.documentElement||document.body).scrollTop
}function eH(f9,f6,f8,f4){if(f6.widgets){for(var f5=0;
f5<f6.widgets.length;
++f5){if(f6.widgets[f5].above){var gb=cT(f6.widgets[f5]);
f8.top+=gb;
f8.bottom+=gb
}}}if(f4=="line"){return f8
}if(!f4){f4="local"
}var f7=bK(f6);
if(f4=="local"){f7+=eY(f9.display)
}else{f7-=f9.display.viewOffset
}if(f4=="page"||f4=="window"){var f3=f9.display.lineSpace.getBoundingClientRect();
f7+=f3.top+(f4=="window"?0:cr());
var ga=f3.left+(f4=="window"?0:ct());
f8.left+=ga;
f8.right+=ga
}f8.top+=f7;
f8.bottom+=f7;
return f8
}function f0(f4,f7,f5){if(f5=="div"){return f7
}var f9=f7.left,f8=f7.top;
if(f5=="page"){f9-=ct();
f8-=cr()
}else{if(f5=="local"||!f5){var f6=f4.display.sizer.getBoundingClientRect();
f9+=f6.left;
f8+=f6.top
}}var f3=f4.display.lineSpace.getBoundingClientRect();
return{left:f9-f3.left,top:f8-f3.top}
}function cG(f3,f7,f6,f5,f4){if(!f5){f5=e5(f3.doc,f7.line)
}return eH(f3,f5,d7(f3,f5,f7.ch,f4),f6)
}function dK(gc,gb,f5,f9,ge,ga){f9=f9||e5(gc.doc,gb.line);
if(!ge){ge=aZ(gc,f9)
}function f7(gh,gg){var gf=E(gc,ge,gh,gg?"right":"left",ga);
if(gg){gf.left=gf.right
}else{gf.right=gf.left
}return eH(gc,f9,gf,f5)
}function gd(gi,gf){var gg=f8[gf],gh=gg.level%2;
if(gi==dp(gg)&&gf&&gg.level<f8[gf-1].level){gg=f8[--gf];
gi=fZ(gg)-(gg.level%2?0:1);
gh=true
}else{if(gi==fZ(gg)&&gf<f8.length-1&&gg.level<f8[gf+1].level){gg=f8[++gf];
gi=dp(gg)-gg.level%2;
gh=false
}}if(gh&&gi==gg.to&&gi>gg.from){return f7(gi-1)
}return f7(gi,gh)
}var f8=a(f9),f3=gb.ch;
if(!f8){return f7(f3)
}var f4=aD(f8,f3);
var f6=gd(f3,f4);
if(eT!=null){f6.other=gd(f3,eT)
}return f6
}function dy(f3,f7){var f6=0,f7=fA(f3.doc,f7);
if(!f3.options.lineWrapping){f6=du(f3.display)*f7.ch
}var f4=e5(f3.doc,f7.line);
var f5=bK(f4)+eY(f3.display);
return{left:f6,right:f6,top:f5,bottom:f5+f4.height}
}function fM(f3,f4,f5,f7){var f6=X(f3,f4);
f6.xRel=f7;
if(f5){f6.outside=true
}return f6
}function fF(ga,f7,f6){var f9=ga.doc;
f6+=ga.display.viewOffset;
if(f6<0){return fM(f9.first,0,true,-1)
}var f5=bE(f9,f6),gb=f9.first+f9.size-1;
if(f5>gb){return fM(f9.first+f9.size-1,e5(f9,gb).text.length,true,1)
}if(f7<0){f7=0
}var f4=e5(f9,f5);
for(;
;
){var gc=cU(ga,f4,f5,f7,f6);
var f8=el(f4);
var f3=f8&&f8.find(0,true);
if(f8&&(gc.ch>f3.from.ch||gc.ch==f3.from.ch&&gc.xRel>0)){f5=bL(f4=f3.to.line)
}else{return gc
}}}function cU(gd,f5,gg,gf,ge){var gc=ge-bK(f5);
var f9=false,gm=2*gd.display.wrapper.clientWidth;
var gj=aZ(gd,f5);
function gq(gs){var gt=dK(gd,X(gg,gs),"line",f5,gj);
f9=true;
if(gc>gt.bottom){return gt.left-gm
}else{if(gc<gt.top){return gt.left+gm
}else{f9=false
}}return gt.left
}var gi=a(f5),gl=f5.text.length;
var gn=cC(f5),f6=cP(f5);
var gk=gq(gn),f3=f9,f4=gq(f6),f8=f9;
if(gf>f4){return fM(gg,f6,f8,1)
}for(;
;
){if(gi?f6==gn||f6==v(f5,gn,1):f6-gn<=1){var gh=gf<gk||gf-gk<=f4-gf?gn:f6;
var gp=gf-(gh==gn?gk:f4);
while(fg(f5.text.charAt(gh))){++gh
}var gb=fM(gg,gh,gh==gn?f3:f8,gp<-1?-1:gp>1?1:0);
return gb
}var ga=Math.ceil(gl/2),gr=gn+ga;
if(gi){gr=gn;
for(var go=0;
go<ga;
++go){gr=v(f5,gr,1)
}}var f7=gq(gr);
if(f7>gf){f6=gr;
f4=f7;
if(f8=f9){f4+=1000
}gl=ga
}else{gn=gr;
gk=f7;
f3=f9;
gl-=ga
}}}var aE;
function aS(f5){if(f5.cachedTextHeight!=null){return f5.cachedTextHeight
}if(aE==null){aE=fN("pre");
for(var f4=0;
f4<49;
++f4){aE.appendChild(document.createTextNode("x"));
aE.appendChild(fN("br"))
}aE.appendChild(document.createTextNode("x"))
}bP(f5.measure,aE);
var f3=aE.offsetHeight/50;
if(f3>3){f5.cachedTextHeight=f3
}dR(f5.measure);
return f3||1
}function du(f7){if(f7.cachedCharWidth!=null){return f7.cachedCharWidth
}var f3=fN("span","xxxxxxxxxx");
var f6=fN("pre",[f3]);
bP(f7.measure,f6);
var f5=f3.getBoundingClientRect(),f4=(f5.right-f5.left)/10;
if(f4>2){f7.cachedCharWidth=f4
}return f4||10
}var bn=null;
var dY=0;
function cF(f3){f3.curOp={cm:f3,viewChanged:false,startHeight:f3.doc.height,forceUpdate:false,updateInput:null,typing:false,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:false,updateMaxLine:false,scrollLeft:null,scrollTop:null,scrollToPos:null,id:++dY};
if(bn){bn.ops.push(f3.curOp)
}else{f3.curOp.ownsGroup=bn={ops:[f3.curOp],delayedCallbacks:[]}
}}function cQ(f6){var f5=f6.delayedCallbacks,f4=0;
do{for(;
f4<f5.length;
f4++){f5[f4]()
}for(var f3=0;
f3<f6.ops.length;
f3++){var f7=f6.ops[f3];
if(f7.cursorActivityHandlers){while(f7.cursorActivityCalled<f7.cursorActivityHandlers.length){f7.cursorActivityHandlers[f7.cursorActivityCalled++](f7.cm)
}}}}while(f4<f5.length)
}function al(f3){var f6=f3.curOp,f5=f6.ownsGroup;
if(!f5){return
}try{cQ(f5)
}finally{bn=null;
for(var f4=0;
f4<f5.ops.length;
f4++){f5.ops[f4].cm.curOp=null
}cH(f5)
}}function cH(f5){var f4=f5.ops;
for(var f3=0;
f3<f4.length;
f3++){b3(f4[f3])
}for(var f3=0;
f3<f4.length;
f3++){ap(f4[f3])
}for(var f3=0;
f3<f4.length;
f3++){b0(f4[f3])
}for(var f3=0;
f3<f4.length;
f3++){ao(f4[f3])
}for(var f3=0;
f3<f4.length;
f3++){eR(f4[f3])
}}function b3(f5){var f3=f5.cm,f4=f3.display;
if(f5.updateMaxLine){g(f3)
}f5.mustUpdate=f5.viewChanged||f5.forceUpdate||f5.scrollTop!=null||f5.scrollToPos&&(f5.scrollToPos.from.line<f4.viewFrom||f5.scrollToPos.to.line>=f4.viewTo)||f4.maxLineChanged&&f3.options.lineWrapping;
f5.update=f5.mustUpdate&&new aF(f3,f5.mustUpdate&&{top:f5.scrollTop,ensure:f5.scrollToPos},f5.forceUpdate)
}function ap(f3){f3.updatedDisplay=f3.mustUpdate&&D(f3.cm,f3.update)
}function b0(f5){var f3=f5.cm,f4=f3.display;
if(f5.updatedDisplay){a4(f3)
}f5.barMeasure=dr(f3);
if(f4.maxLineChanged&&!f3.options.lineWrapping){f5.adjustWidthTo=d7(f3,f4.maxLine,f4.maxLine.text.length).left+3;
f5.maxScrollLeft=Math.max(0,f4.sizer.offsetLeft+f5.adjustWidthTo+bg-f4.scroller.clientWidth)
}if(f5.updatedDisplay||f5.selectionChanged){f5.newSelectionNodes=bj(f3)
}}function ao(f4){var f3=f4.cm;
if(f4.adjustWidthTo!=null){f3.display.sizer.style.minWidth=f4.adjustWidthTo+"px";
if(f4.maxScrollLeft<f3.doc.scrollLeft){bC(f3,Math.min(f3.display.scroller.scrollLeft,f4.maxScrollLeft),true)
}f3.display.maxLineChanged=false
}if(f4.newSelectionNodes){ak(f3,f4.newSelectionNodes)
}if(f4.updatedDisplay){dq(f3,f4.barMeasure)
}if(f4.updatedDisplay||f4.startHeight!=f3.doc.height){eP(f3,f4.barMeasure)
}if(f4.selectionChanged){p(f3)
}if(f3.state.focused&&f4.updateInput){ff(f3,f4.typing)
}}function eR(f6){var gc=f6.cm,f8=gc.display,gb=gc.doc;
if(f6.adjustWidthTo!=null&&Math.abs(f6.barMeasure.scrollWidth-gc.display.scroller.scrollWidth)>1){eP(gc)
}if(f6.updatedDisplay){ci(gc,f6.update)
}if(f8.wheelStartX!=null&&(f6.scrollTop!=null||f6.scrollLeft!=null||f6.scrollToPos)){f8.wheelStartX=f8.wheelStartY=null
}if(f6.scrollTop!=null&&(f8.scroller.scrollTop!=f6.scrollTop||f6.forceScroll)){var f9=Math.max(0,Math.min(f8.scroller.scrollHeight-f8.scroller.clientHeight,f6.scrollTop));
f8.scroller.scrollTop=f8.scrollbarV.scrollTop=gb.scrollTop=f9
}if(f6.scrollLeft!=null&&(f8.scroller.scrollLeft!=f6.scrollLeft||f6.forceScroll)){var f4=Math.max(0,Math.min(f8.scroller.scrollWidth-f8.scroller.clientWidth,f6.scrollLeft));
f8.scroller.scrollLeft=f8.scrollbarH.scrollLeft=gb.scrollLeft=f4;
ev(gc)
}if(f6.scrollToPos){var ga=F(gc,fA(gb,f6.scrollToPos.from),fA(gb,f6.scrollToPos.to),f6.scrollToPos.margin);
if(f6.scrollToPos.isCursor&&gc.state.focused){dW(gc,ga)
}}var f7=f6.maybeHiddenMarkers,f3=f6.maybeUnhiddenMarkers;
if(f7){for(var f5=0;
f5<f7.length;
++f5){if(!f7[f5].lines.length){aB(f7[f5],"hide")
}}}if(f3){for(var f5=0;
f5<f3.length;
++f5){if(f3[f5].lines.length){aB(f3[f5],"unhide")
}}}if(f8.wrapper.offsetHeight){gb.scrollTop=gc.display.scroller.scrollTop
}if(f6.updatedDisplay&&cV){if(gc.options.lineWrapping){fQ(gc,f6.barMeasure)
}if(f6.barMeasure.scrollWidth>f6.barMeasure.clientWidth&&f6.barMeasure.scrollWidth<f6.barMeasure.clientWidth+1&&!cN(gc)){eP(gc)
}}if(f6.changeObjs){aB(gc,"changes",gc,f6.changeObjs)
}}function cJ(f3,f4){if(f3.curOp){return f4()
}cF(f3);
try{return f4()
}finally{al(f3)
}}function cX(f3,f4){return function(){if(f3.curOp){return f4.apply(f3,arguments)
}cF(f3);
try{return f4.apply(f3,arguments)
}finally{al(f3)
}}
}function c3(f3){return function(){if(this.curOp){return f3.apply(this,arguments)
}cF(this);
try{return f3.apply(this,arguments)
}finally{al(this)
}}
}function cB(f3){return function(){var f4=this.cm;
if(!f4||f4.curOp){return f3.apply(this,arguments)
}cF(f4);
try{return f3.apply(this,arguments)
}finally{al(f4)
}}
}function bt(f5,f3,f4){this.line=f3;
this.rest=h(f3);
this.size=this.rest?bL(fy(this.rest))-f4+1:1;
this.node=this.text=null;
this.hidden=fn(f5,f3)
}function eM(f3,f9,f8){var f7=[],f5;
for(var f6=f9;
f6<f8;
f6=f5){var f4=new bt(f3.doc,e5(f3.doc,f6),f6);
f5=f6+f4.size;
f7.push(f4)
}return f7
}function ag(ga,f8,f9,gb){if(f8==null){f8=ga.doc.first
}if(f9==null){f9=ga.doc.first+ga.doc.size
}if(!gb){gb=0
}var f5=ga.display;
if(gb&&f9<f5.viewTo&&(f5.updateLineNumbers==null||f5.updateLineNumbers>f8)){f5.updateLineNumbers=f8
}ga.curOp.viewChanged=true;
if(f8>=f5.viewTo){if(a2&&aR(ga.doc,f8)<f5.viewTo){en(ga)
}}else{if(f9<=f5.viewFrom){if(a2&&dT(ga.doc,f9+gb)>f5.viewFrom){en(ga)
}else{f5.viewFrom+=gb;
f5.viewTo+=gb
}}else{if(f8<=f5.viewFrom&&f9>=f5.viewTo){en(ga)
}else{if(f8<=f5.viewFrom){var f7=c9(ga,f9,f9+gb,1);
if(f7){f5.view=f5.view.slice(f7.index);
f5.viewFrom=f7.lineN;
f5.viewTo+=gb
}else{en(ga)
}}else{if(f9>=f5.viewTo){var f7=c9(ga,f8,f8,-1);
if(f7){f5.view=f5.view.slice(0,f7.index);
f5.viewTo=f7.lineN
}else{en(ga)
}}else{var f6=c9(ga,f8,f8,-1);
var f4=c9(ga,f9,f9+gb,1);
if(f6&&f4){f5.view=f5.view.slice(0,f6.index).concat(eM(ga,f6.lineN,f4.lineN)).concat(f5.view.slice(f4.index));
f5.viewTo+=gb
}else{en(ga)
}}}}}}var f3=f5.externalMeasured;
if(f3){if(f9<f3.lineN){f3.lineN+=gb
}else{if(f8<f3.lineN+f3.size){f5.externalMeasured=null
}}}}function S(f4,f5,f8){f4.curOp.viewChanged=true;
var f9=f4.display,f7=f4.display.externalMeasured;
if(f7&&f5>=f7.lineN&&f5<f7.lineN+f7.size){f9.externalMeasured=null
}if(f5<f9.viewFrom||f5>=f9.viewTo){return
}var f6=f9.view[di(f4,f5)];
if(f6.node==null){return
}var f3=f6.changes||(f6.changes=[]);
if(dc(f3,f8)==-1){f3.push(f8)
}}function en(f3){f3.display.viewFrom=f3.display.viewTo=f3.doc.first;
f3.display.view=[];
f3.display.viewOffset=0
}function di(f3,f6){if(f6>=f3.display.viewTo){return null
}f6-=f3.display.viewFrom;
if(f6<0){return null
}var f4=f3.display.view;
for(var f5=0;
f5<f4.length;
f5++){f6-=f4[f5].size;
if(f6<0){return f5
}}}function c9(gb,f5,f7,f4){var f8=di(gb,f5),ga,f9=gb.display.view;
if(!a2||f7==gb.doc.first+gb.doc.size){return{index:f8,lineN:f7}
}for(var f6=0,f3=gb.display.viewFrom;
f6<f8;
f6++){f3+=f9[f6].size
}if(f3!=f5){if(f4>0){if(f8==f9.length-1){return null
}ga=(f3+f9[f8].size)-f5;
f8++
}else{ga=f3-f5
}f5+=ga;
f7+=ga
}while(aR(gb.doc,f7)!=f7){if(f8==(f4<0?0:f9.length-1)){return null
}f7+=f4*f9[f8-(f4<0?1:0)].size;
f8+=f4
}return{index:f8,lineN:f7}
}function cO(f3,f7,f6){var f5=f3.display,f4=f5.view;
if(f4.length==0||f7>=f5.viewTo||f6<=f5.viewFrom){f5.view=eM(f3,f7,f6);
f5.viewFrom=f7
}else{if(f5.viewFrom>f7){f5.view=eM(f3,f7,f5.viewFrom).concat(f5.view)
}else{if(f5.viewFrom<f7){f5.view=f5.view.slice(di(f3,f7))
}}f5.viewFrom=f7;
if(f5.viewTo<f6){f5.view=f5.view.concat(eM(f3,f5.viewTo,f6))
}else{if(f5.viewTo>f6){f5.view=f5.view.slice(0,di(f3,f6))
}}}f5.viewTo=f6
}function c6(f3){var f4=f3.display.view,f7=0;
for(var f6=0;
f6<f4.length;
f6++){var f5=f4[f6];
if(!f5.hidden&&(!f5.node||f5.changes)){++f7
}}return f7
}function bk(f3){if(f3.display.pollingFast){return
}f3.display.poll.set(f3.options.pollInterval,function(){cf(f3);
if(f3.state.focused){bk(f3)
}})
}function C(f3){var f4=false;
f3.display.pollingFast=true;
function f5(){var f6=cf(f3);
if(!f6&&!f4){f4=true;
f3.display.poll.set(60,f5)
}else{f3.display.pollingFast=false;
bk(f3)
}}f3.display.poll.set(20,f5)
}var bi=null;
function cf(f7){var f8=f7.display.input,gb=f7.display.prevInput,gm=f7.doc;
if(!f7.state.focused||(bq(f8)&&!gb)||ai(f7)||f7.options.disableInput||f7.state.keySeq){return false
}if(f7.state.pasteIncoming&&f7.state.fakedLastChar){f8.value=f8.value.substring(0,f8.value.length-1);
f7.state.fakedLastChar=false
}var ga=f8.value;
if(ga==gb&&!f7.somethingSelected()){return false
}if(dA&&l>=9&&f7.display.inputHasSelection===ga||b5&&/[\uf700-\uf7ff]/.test(ga)){ff(f7);
return false
}var gi=!f7.curOp;
if(gi){cF(f7)
}f7.display.shift=false;
if(ga.charCodeAt(0)==8203&&gm.sel==f7.display.selForContextMenu&&!gb){gb="\u200b"
}var gh=0,ge=Math.min(gb.length,ga.length);
while(gh<ge&&gb.charCodeAt(gh)==ga.charCodeAt(gh)){++gh
}var f4=ga.slice(gh),gc=aV(f4);
var gl=null;
if(f7.state.pasteIncoming&&gm.sel.ranges.length>1){if(bi&&bi.join("\n")==f4){gl=gm.sel.ranges.length%bi.length==0&&bQ(bi,aV)
}else{if(gc.length==gm.sel.ranges.length){gl=bQ(gc,function(gn){return[gn]
})
}}}for(var gj=gm.sel.ranges.length-1;
gj>=0;
gj--){var gd=gm.sel.ranges[gj];
var gf=gd.from(),f3=gd.to();
if(gh<gb.length){gf=X(gf.line,gf.ch-(gb.length-gh))
}else{if(f7.state.overwrite&&gd.empty()&&!f7.state.pasteIncoming){f3=X(f3.line,Math.min(e5(gm,f3.line).text.length,f3.ch+fy(gc).length))
}}var f6=f7.curOp.updateInput;
var gk={from:gf,to:f3,text:gl?gl[gj%gl.length]:gc,origin:f7.state.pasteIncoming?"paste":f7.state.cutIncoming?"cut":"+input"};
bb(f7.doc,gk);
ad(f7,"inputRead",f7,gk);
if(f4&&!f7.state.pasteIncoming&&f7.options.electricChars&&f7.options.smartIndent&&gd.head.ch<100&&(!gj||gm.sel.ranges[gj-1].head.line!=gd.head.line)){var f9=f7.getModeAt(gd.head);
var f5=cS(gk);
if(f9.electricChars){for(var gg=0;
gg<f9.electricChars.length;
gg++){if(f4.indexOf(f9.electricChars.charAt(gg))>-1){ac(f7,f5.line,"smart");
break
}}}else{if(f9.electricInput){if(f9.electricInput.test(e5(gm,f5.line).text.slice(0,f5.ch))){ac(f7,f5.line,"smart")
}}}}}fx(f7);
f7.curOp.updateInput=f6;
f7.curOp.typing=true;
if(ga.length>1000||ga.indexOf("\n")>-1){f8.value=f7.display.prevInput=""
}else{f7.display.prevInput=ga
}if(gi){al(f7)
}f7.state.pasteIncoming=f7.state.cutIncoming=false;
return true
}function ff(f3,f7){var f4,f6,f9=f3.doc;
if(f3.somethingSelected()){f3.display.prevInput="";
var f5=f9.sel.primary();
f4=c5&&(f5.to().line-f5.from().line>100||(f6=f3.getSelection()).length>1000);
var f8=f4?"-":f6||f3.getSelection();
f3.display.input.value=f8;
if(f3.state.focused){dB(f3.display.input)
}if(dA&&l>=9){f3.display.inputHasSelection=f8
}}else{if(!f7){f3.display.prevInput=f3.display.input.value="";
if(dA&&l>=9){f3.display.inputHasSelection=null
}}}f3.display.inaccurateSelection=f4
}function eq(f3){if(f3.options.readOnly!="nocursor"&&(!d6||dE()!=f3.display.input)){f3.display.input.focus()
}}function s(f3){if(!f3.state.focused){eq(f3);
cz(f3)
}}function ai(f3){return f3.options.readOnly||f3.doc.cantEdit
}function fG(f3){var f5=f3.display;
bV(f5.scroller,"mousedown",cX(f3,ej));
if(dA&&l<11){bV(f5.scroller,"dblclick",cX(f3,function(f9){if(aN(f3,f9)){return
}var ga=cm(f3,f9);
if(!ga||m(f3,f9)||a5(f3.display,f9)){return
}cD(f9);
var f8=f3.findWordAt(ga);
fK(f3.doc,f8.anchor,f8.head)
}))
}else{bV(f5.scroller,"dblclick",function(f8){aN(f3,f8)||cD(f8)
})
}bV(f5.lineSpace,"selectstart",function(f8){if(!a5(f5,f8)){cD(f8)
}});
if(!fV){bV(f5.scroller,"contextmenu",function(f8){ax(f3,f8)
})
}bV(f5.scroller,"scroll",function(){if(f5.scroller.clientHeight){O(f3,f5.scroller.scrollTop);
bC(f3,f5.scroller.scrollLeft,true);
aB(f3,"scroll",f3)
}});
bV(f5.scrollbarV,"scroll",function(){if(f5.scroller.clientHeight){O(f3,f5.scrollbarV.scrollTop)
}});
bV(f5.scrollbarH,"scroll",function(){if(f5.scroller.clientHeight){bC(f3,f5.scrollbarH.scrollLeft)
}});
bV(f5.scroller,"mousewheel",function(f8){b(f3,f8)
});
bV(f5.scroller,"DOMMouseScroll",function(f8){b(f3,f8)
});
function f7(){if(f3.state.focused){setTimeout(cu(eq,f3),0)
}}bV(f5.scrollbarH,"mousedown",f7);
bV(f5.scrollbarV,"mousedown",f7);
bV(f5.wrapper,"scroll",function(){f5.wrapper.scrollTop=f5.wrapper.scrollLeft=0
});
bV(f5.input,"keyup",function(f8){bd.call(f3,f8)
});
bV(f5.input,"input",function(){if(dA&&l>=9&&f3.display.inputHasSelection){f3.display.inputHasSelection=null
}C(f3)
});
bV(f5.input,"keydown",cX(f3,q));
bV(f5.input,"keypress",cX(f3,cw));
bV(f5.input,"focus",cu(cz,f3));
bV(f5.input,"blur",cu(aQ,f3));
function f4(f8){if(!aN(f3,f8)){eh(f8)
}}if(f3.options.dragDrop){bV(f5.scroller,"dragstart",function(f8){R(f3,f8)
});
bV(f5.scroller,"dragenter",f4);
bV(f5.scroller,"dragover",f4);
bV(f5.scroller,"drop",cX(f3,bf))
}bV(f5.scroller,"paste",function(f8){if(a5(f5,f8)){return
}f3.state.pasteIncoming=true;
eq(f3);
C(f3)
});
bV(f5.input,"paste",function(){if(cV&&!f3.state.fakedLastChar&&!(new Date-f3.state.lastMiddleDown<200)){var f9=f5.input.selectionStart,f8=f5.input.selectionEnd;
f5.input.value+="$";
f5.input.selectionEnd=f8;
f5.input.selectionStart=f9;
f3.state.fakedLastChar=true
}f3.state.pasteIncoming=true;
C(f3)
});
function f6(gc){if(f3.somethingSelected()){bi=f3.getSelections();
if(f5.inaccurateSelection){f5.prevInput="";
f5.inaccurateSelection=false;
f5.input.value=bi.join("\n");
dB(f5.input)
}}else{var gd=[],f9=[];
for(var ga=0;
ga<f3.doc.sel.ranges.length;
ga++){var f8=f3.doc.sel.ranges[ga].head.line;
var gb={anchor:X(f8,0),head:X(f8+1,0)};
f9.push(gb);
gd.push(f3.getRange(gb.anchor,gb.head))
}if(gc.type=="cut"){f3.setSelections(f9,null,Z)
}else{f5.prevInput="";
f5.input.value=gd.join("\n");
dB(f5.input)
}bi=gd
}if(gc.type=="cut"){f3.state.cutIncoming=true
}}bV(f5.input,"cut",f6);
bV(f5.input,"copy",f6);
if(a6){bV(f5.sizer,"mouseup",function(){if(dE()==f5.input){f5.input.blur()
}eq(f3)
})
}}function aP(f3){var f4=f3.display;
if(f4.lastWrapHeight==f4.wrapper.clientHeight&&f4.lastWrapWidth==f4.wrapper.clientWidth){return
}f4.cachedCharWidth=f4.cachedTextHeight=f4.cachedPaddingH=null;
f3.setSize()
}function a5(f4,f3){for(var f5=M(f3);
f5!=f4.wrapper;
f5=f5.parentNode){if(!f5||f5.ignoreEvents||f5.parentNode==f4.sizer&&f5!=f4.mover){return true
}}}function cm(gd,f7,f4,f5){var f9=gd.display;
if(!f4){var f8=M(f7);
if(f8==f9.scrollbarH||f8==f9.scrollbarV||f8==f9.scrollbarFiller||f8==f9.gutterFiller){return null
}}var gc,ga,f3=f9.lineSpace.getBoundingClientRect();
try{gc=f7.clientX-f3.left;
ga=f7.clientY-f3.top
}catch(f7){return null
}var gb=fF(gd,gc,ga),ge;
if(f5&&gb.xRel==1&&(ge=e5(gd.doc,gb.line).text).length==gb.ch){var f6=bR(ge,ge.length,gd.options.tabSize)-ge.length;
gb=X(gb.line,Math.max(0,Math.round((gc-eV(gd.display).left)/du(gd.display))-f6))
}return gb
}function ej(f5){if(aN(this,f5)){return
}var f3=this,f4=f3.display;
f4.shift=f5.shiftKey;
if(a5(f4,f5)){if(!cV){f4.scroller.draggable=false;
setTimeout(function(){f4.scroller.draggable=true
},100)
}return
}if(m(f3,f5)){return
}var f6=cm(f3,f5);
window.focus();
switch(fE(f5)){case 1:if(f6){aw(f3,f5,f6)
}else{if(M(f5)==f4.scroller){cD(f5)
}}break;
case 2:if(cV){f3.state.lastMiddleDown=+new Date
}if(f6){fK(f3.doc,f6)
}setTimeout(cu(eq,f3),20);
cD(f5);
break;
case 3:if(fV){ax(f3,f5)
}break
}}var df,c8;
function aw(f4,f8,f9){setTimeout(cu(s,f4),0);
var f5=+new Date,f6;
if(c8&&c8.time>f5-400&&cd(c8.pos,f9)==0){f6="triple"
}else{if(df&&df.time>f5-400&&cd(df.pos,f9)==0){f6="double";
c8={time:f5,pos:f9}
}else{f6="single";
df={time:f5,pos:f9}
}}var f7=f4.doc.sel,f3=b5?f8.metaKey:f8.ctrlKey;
if(f4.options.dragDrop&&eC&&!ai(f4)&&f6=="single"&&f7.contains(f9)>-1&&f7.somethingSelected()){aY(f4,f8,f9,f3)
}else{n(f4,f8,f9,f6,f3)
}}function aY(f5,f7,f8,f4){var f6=f5.display;
var f3=cX(f5,function(f9){if(cV){f6.scroller.draggable=false
}f5.state.draggingText=false;
d3(document,"mouseup",f3);
d3(f6.scroller,"drop",f3);
if(Math.abs(f7.clientX-f9.clientX)+Math.abs(f7.clientY-f9.clientY)<10){cD(f9);
if(!f4){fK(f5.doc,f8)
}eq(f5);
if(dA&&l==9){setTimeout(function(){document.body.focus();
eq(f5)
},20)
}}});
if(cV){f6.scroller.draggable=true
}f5.state.draggingText=f3;
if(f6.scroller.dragDrop){f6.scroller.dragDrop()
}bV(document,"mouseup",f3);
bV(f6.scroller,"drop",f3)
}function n(f6,gk,f5,f3,f8){var gh=f6.display,gm=f6.doc;
cD(gk);
var f4,gl,f7=gm.sel;
if(f8&&!gk.shiftKey){gl=gm.sel.contains(f5);
if(gl>-1){f4=gm.sel.ranges[gl]
}else{f4=new dO(f5,f5)
}}else{f4=gm.sel.primary()
}if(gk.altKey){f3="rect";
if(!f8){f4=new dO(f5,f5)
}f5=cm(f6,gk,true,true);
gl=-1
}else{if(f3=="double"){var gi=f6.findWordAt(f5);
if(f6.display.shift||gm.extend){f4=fm(gm,f4,gi.anchor,gi.head)
}else{f4=gi
}}else{if(f3=="triple"){var gb=new dO(X(f5.line,0),fA(gm,X(f5.line+1,0)));
if(f6.display.shift||gm.extend){f4=fm(gm,f4,gb.anchor,gb.head)
}else{f4=gb
}}else{f4=fm(gm,f4,f5)
}}}if(!f8){gl=0;
bS(gm,new fO([f4],0),N);
f7=gm.sel
}else{if(gl>-1){e(gm,gl,f4,N)
}else{gl=gm.sel.ranges.length;
bS(gm,cv(gm.sel.ranges.concat([f4]),gl),{scroll:false,origin:"*mouse"})
}}var gg=f5;
function gf(gx){if(cd(gg,gx)==0){return
}gg=gx;
if(f3=="rect"){var go=[],gu=f6.options.tabSize;
var gn=bR(e5(gm,f5.line).text,f5.ch,gu);
var gA=bR(e5(gm,gx.line).text,gx.ch,gu);
var gp=Math.min(gn,gA),gy=Math.max(gn,gA);
for(var gB=Math.min(f5.line,gx.line),gr=Math.min(f6.lastLine(),Math.max(f5.line,gx.line));
gB<=gr;
gB++){var gz=e5(gm,gB).text,gq=eg(gz,gp,gu);
if(gp==gy){go.push(new dO(X(gB,gq),X(gB,gq)))
}else{if(gz.length>gq){go.push(new dO(X(gB,gq),X(gB,eg(gz,gy,gu))))
}}}if(!go.length){go.push(new dO(f5,f5))
}bS(gm,cv(f7.ranges.slice(0,gl).concat(go),gl),{origin:"*mouse",scroll:false});
f6.scrollIntoView(gx)
}else{var gv=f4;
var gs=gv.anchor,gw=gx;
if(f3!="single"){if(f3=="double"){var gt=f6.findWordAt(gx)
}else{var gt=new dO(X(gx.line,0),fA(gm,X(gx.line+1,0)))
}if(cd(gt.anchor,gs)>0){gw=gt.head;
gs=aq(gv.from(),gt.anchor)
}else{gw=gt.anchor;
gs=bv(gv.to(),gt.head)
}}var go=f7.ranges.slice(0);
go[gl]=new dO(fA(gm,gs),gw);
bS(gm,cv(go,gl),N)
}}var gd=gh.wrapper.getBoundingClientRect();
var f9=0;
function gj(gp){var gn=++f9;
var gr=cm(f6,gp,true,f3=="rect");
if(!gr){return
}if(cd(gr,gg)!=0){s(f6);
gf(gr);
var gq=b4(gh,gm);
if(gr.line>=gq.to||gr.line<gq.from){setTimeout(cX(f6,function(){if(f9==gn){gj(gp)
}}),150)
}}else{var go=gp.clientY<gd.top?-20:gp.clientY>gd.bottom?20:0;
if(go){setTimeout(cX(f6,function(){if(f9!=gn){return
}gh.scroller.scrollTop+=go;
gj(gp)
}),50)
}}}function gc(gn){f9=Infinity;
cD(gn);
eq(f6);
d3(document,"mousemove",ge);
d3(document,"mouseup",ga);
gm.history.lastSelOrigin=null
}var ge=cX(f6,function(gn){if(!fE(gn)){gc(gn)
}else{gj(gn)
}});
var ga=cX(f6,gc);
bV(document,"mousemove",ge);
bV(document,"mouseup",ga)
}function f1(ge,ga,gc,gd,f6){try{var f4=ga.clientX,f3=ga.clientY
}catch(ga){return false
}if(f4>=Math.floor(ge.display.gutters.getBoundingClientRect().right)){return false
}if(gd){cD(ga)
}var gb=ge.display;
var f9=gb.lineDiv.getBoundingClientRect();
if(f3>f9.bottom||!e8(ge,gc)){return bJ(ga)
}f3-=f9.top-gb.viewOffset;
for(var f7=0;
f7<ge.options.gutters.length;
++f7){var f8=gb.gutters.childNodes[f7];
if(f8&&f8.getBoundingClientRect().right>=f4){var gf=bE(ge.doc,f3);
var f5=ge.options.gutters[f7];
f6(ge,gc,ge,gf,f5,ga);
return bJ(ga)
}}}function m(f3,f4){return f1(f3,f4,"gutterClick",true,ad)
}var af=0;
function bf(f9){var gb=this;
if(aN(gb,f9)||a5(gb.display,f9)){return
}cD(f9);
if(dA){af=+new Date
}var ga=cm(gb,f9,true),f3=f9.dataTransfer.files;
if(!ga||ai(gb)){return
}if(f3&&f3.length&&window.FileReader&&window.File){var f5=f3.length,gc=Array(f5),f4=0;
var f7=function(gf,ge){var gd=new FileReader;
gd.onload=cX(gb,function(){gc[ge]=gd.result;
if(++f4==f5){ga=fA(gb.doc,ga);
var gg={from:ga,to:ga,text:aV(gc.join("\n")),origin:"paste"};
bb(gb.doc,gg);
eX(gb.doc,eJ(ga,cS(gg)))
}});
gd.readAsText(gf)
};
for(var f8=0;
f8<f5;
++f8){f7(f3[f8],f8)
}}else{if(gb.state.draggingText&&gb.doc.sel.contains(ga)>-1){gb.state.draggingText(f9);
setTimeout(cu(eq,gb),20);
return
}try{var gc=f9.dataTransfer.getData("Text");
if(gc){if(gb.state.draggingText&&!(b5?f9.metaKey:f9.ctrlKey)){var f6=gb.listSelections()
}ef(gb.doc,eJ(ga,ga));
if(f6){for(var f8=0;
f8<f6.length;
++f8){aW(gb.doc,"",f6[f8].anchor,f6[f8].head,"drag")
}}gb.replaceSelection(gc,"around","paste");
eq(gb)
}}catch(f9){}}}function R(f3,f5){if(dA&&(!f3.state.draggingText||+new Date-af<100)){eh(f5);
return
}if(aN(f3,f5)||a5(f3.display,f5)){return
}f5.dataTransfer.setData("Text",f3.getSelection());
if(f5.dataTransfer.setDragImage&&!aA){var f4=fN("img",null,null,"position: fixed; left: 0; top: 0;");
f4.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
if(dS){f4.width=f4.height=1;
f3.display.wrapper.appendChild(f4);
f4._top=f4.offsetTop
}f5.dataTransfer.setDragImage(f4,0,0);
if(dS){f4.parentNode.removeChild(f4)
}}}function O(f3,f4){if(Math.abs(f3.doc.scrollTop-f4)<2){return
}f3.doc.scrollTop=f4;
if(!cn){dJ(f3,{top:f4})
}if(f3.display.scroller.scrollTop!=f4){f3.display.scroller.scrollTop=f4
}if(f3.display.scrollbarV.scrollTop!=f4){f3.display.scrollbarV.scrollTop=f4
}if(cn){dJ(f3)
}d5(f3,100)
}function bC(f3,f5,f4){if(f4?f5==f3.doc.scrollLeft:Math.abs(f3.doc.scrollLeft-f5)<2){return
}f5=Math.min(f5,f3.display.scroller.scrollWidth-f3.display.scroller.clientWidth);
f3.doc.scrollLeft=f5;
ev(f3);
if(f3.display.scroller.scrollLeft!=f5){f3.display.scroller.scrollLeft=f5
}if(f3.display.scrollbarH.scrollLeft!=f5){f3.display.scrollbarH.scrollLeft=f5
}}var fc=0,ce=null;
if(dA){ce=-0.53
}else{if(cn){ce=15
}else{if(c7){ce=-0.7
}else{if(aA){ce=-1/3
}}}}function b(gb,f5){var ge=f5.wheelDeltaX,gd=f5.wheelDeltaY;
if(ge==null&&f5.detail&&f5.axis==f5.HORIZONTAL_AXIS){ge=f5.detail
}if(gd==null&&f5.detail&&f5.axis==f5.VERTICAL_AXIS){gd=f5.detail
}else{if(gd==null){gd=f5.wheelDelta
}}var f7=gb.display,ga=f7.scroller;
if(!(ge&&ga.scrollWidth>ga.clientWidth||gd&&ga.scrollHeight>ga.clientHeight)){return
}if(gd&&b5&&cV){outer:for(var gc=f5.target,f9=f7.view;
gc!=ga;
gc=gc.parentNode){for(var f4=0;
f4<f9.length;
f4++){if(f9[f4].node==gc){gb.display.currentWheelTarget=gc;
break outer
}}}}if(ge&&!cn&&!dS&&ce!=null){if(gd){O(gb,Math.max(0,Math.min(ga.scrollTop+gd*ce,ga.scrollHeight-ga.clientHeight)))
}bC(gb,Math.max(0,Math.min(ga.scrollLeft+ge*ce,ga.scrollWidth-ga.clientWidth)));
cD(f5);
f7.wheelStartX=null;
return
}if(gd&&ce!=null){var f3=gd*ce;
var f8=gb.doc.scrollTop,f6=f8+f7.wrapper.clientHeight;
if(f3<0){f8=Math.max(0,f8+f3-50)
}else{f6=Math.min(gb.doc.height,f6+f3+50)
}dJ(gb,{top:f8,bottom:f6})
}if(fc<20){if(f7.wheelStartX==null){f7.wheelStartX=ga.scrollLeft;
f7.wheelStartY=ga.scrollTop;
f7.wheelDX=ge;
f7.wheelDY=gd;
setTimeout(function(){if(f7.wheelStartX==null){return
}var gf=ga.scrollLeft-f7.wheelStartX;
var gh=ga.scrollTop-f7.wheelStartY;
var gg=(gh&&f7.wheelDY&&gh/f7.wheelDY)||(gf&&f7.wheelDX&&gf/f7.wheelDX);
f7.wheelStartX=f7.wheelStartY=null;
if(!gg){return
}ce=(ce*fc+gg)/(fc+1);
++fc
},200)
}else{f7.wheelDX+=ge;
f7.wheelDY+=gd
}}}function fH(f4,f7,f3){if(typeof f7=="string"){f7=eu[f7];
if(!f7){return false
}}if(f4.display.pollingFast&&cf(f4)){f4.display.pollingFast=false
}var f6=f4.display.shift,f5=false;
try{if(ai(f4)){f4.state.suppressEdits=true
}if(f3){f4.display.shift=false
}f5=f7(f4)!=b8
}finally{f4.display.shift=f6;
f4.state.suppressEdits=false
}return f5
}function d0(f4,f5,f7){for(var f6=0;
f6<f4.state.keyMaps.length;
f6++){var f3=i(f5,f4.state.keyMaps[f6],f7);
if(f3){return f3
}}return(f4.options.extraKeys&&i(f5,f4.options.extraKeys,f7))||i(f5,f4.options.keyMap,f7)
}var dC=new f2;
function a8(f4,f6,f8,f7){var f5=f4.state.keySeq;
if(f5){if(et(f6)){return"handled"
}dC.set(50,function(){if(f4.state.keySeq==f5){f4.state.keySeq=null;
ff(f4)
}});
f6=f5+" "+f6
}var f3=d0(f4,f6,f7);
if(f3=="multi"){f4.state.keySeq=f6
}if(f3=="handled"){ad(f4,"keyHandled",f4,f6,f8)
}if(f3=="handled"||f3=="multi"){cD(f8);
p(f4)
}if(f5&&!f3&&/\'$/.test(f6)){cD(f8);
return true
}return !!f3
}function e9(f3,f5){var f4=fi(f5,true);
if(!f4){return false
}if(f5.shiftKey&&!f3.state.keySeq){return a8(f3,"Shift-"+f4,f5,function(f6){return fH(f3,f6,true)
})||a8(f3,f4,f5,function(f6){if(typeof f6=="string"?/^go[A-Z]/.test(f6):f6.motion){return fH(f3,f6)
}})
}else{return a8(f3,f4,f5,function(f6){return fH(f3,f6)
})
}}function d9(f3,f5,f4){return a8(f3,"'"+f4+"'",f5,function(f6){return fH(f3,f6,true)
})
}var de=null;
function q(f6){var f3=this;
s(f3);
if(aN(f3,f6)){return
}if(dA&&l<11&&f6.keyCode==27){f6.returnValue=false
}var f4=f6.keyCode;
f3.display.shift=f4==16||f6.shiftKey;
var f5=e9(f3,f6);
if(dS){de=f5?f4:null;
if(!f5&&f4==88&&!c5&&(b5?f6.metaKey:f6.ctrlKey)){f3.replaceSelection("",null,"cut")
}}if(f4==18&&!/\bCodeMirror-crosshair\b/.test(f3.display.lineDiv.className)){au(f3)
}}function au(f4){var f5=f4.display.lineDiv;
fr(f5,"CodeMirror-crosshair");
function f3(f6){if(f6.keyCode==18||!f6.altKey){f(f5,"CodeMirror-crosshair");
d3(document,"keyup",f3);
d3(document,"mouseover",f3)
}}bV(document,"keyup",f3);
bV(document,"mouseover",f3)
}function bd(f3){if(f3.keyCode==16){this.doc.sel.shift=false
}aN(this,f3)
}function cw(f7){var f3=this;
if(aN(f3,f7)||f7.ctrlKey&&!f7.altKey||b5&&f7.metaKey){return
}var f6=f7.keyCode,f4=f7.charCode;
if(dS&&f6==de){de=null;
cD(f7);
return
}if(((dS&&(!f7.which||f7.which<10))||a6)&&e9(f3,f7)){return
}var f5=String.fromCharCode(f4==null?f6:f4);
if(d9(f3,f7,f5)){return
}if(dA&&l>=9){f3.display.inputHasSelection=null
}C(f3)
}function cz(f3){if(f3.options.readOnly=="nocursor"){return
}if(!f3.state.focused){aB(f3,"focus",f3);
f3.state.focused=true;
fr(f3.display.wrapper,"CodeMirror-focused");
if(!f3.curOp&&f3.display.selForContextMenu!=f3.doc.sel){ff(f3);
if(cV){setTimeout(cu(ff,f3,true),0)
}}}bk(f3);
p(f3)
}function aQ(f3){if(f3.state.focused){aB(f3,"blur",f3);
f3.state.focused=false;
f(f3.display.wrapper,"CodeMirror-focused")
}clearInterval(f3.display.blinker);
setTimeout(function(){if(!f3.state.focused){f3.display.shift=false
}},150)
}function ax(gc,f7){if(aN(gc,f7,"contextmenu")){return
}var f9=gc.display;
if(a5(f9,f7)||db(gc,f7)){return
}var gb=cm(gc,f7),f3=f9.scroller.scrollTop;
if(!gb||dS){return
}var f6=gc.options.resetSelectionOnContextMenu;
if(f6&&gc.doc.sel.contains(gb)==-1){cX(gc,bS)(gc.doc,eJ(gb),Z)
}var f8=f9.input.style.cssText;
f9.inputDiv.style.position="absolute";
f9.input.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(f7.clientY-5)+"px; left: "+(f7.clientX-5)+"px; z-index: 1000; background: "+(dA?"rgba(255, 255, 255, .05)":"transparent")+"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
if(cV){var gd=window.scrollY
}eq(gc);
if(cV){window.scrollTo(null,gd)
}ff(gc);
if(!gc.somethingSelected()){f9.input.value=f9.prevInput=" "
}f9.selForContextMenu=gc.doc.sel;
clearTimeout(f9.detectingSelectAll);
function f5(){if(f9.input.selectionStart!=null){var ge=gc.somethingSelected();
var gf=f9.input.value="\u200b"+(ge?f9.input.value:"");
f9.prevInput=ge?"":"\u200b";
f9.input.selectionStart=1;
f9.input.selectionEnd=gf.length;
f9.selForContextMenu=gc.doc.sel
}}function ga(){f9.inputDiv.style.position="relative";
f9.input.style.cssText=f8;
if(dA&&l<9){f9.scrollbarV.scrollTop=f9.scroller.scrollTop=f3
}bk(gc);
if(f9.input.selectionStart!=null){if(!dA||(dA&&l<9)){f5()
}var ge=0,gf=function(){if(f9.selForContextMenu==gc.doc.sel&&f9.input.selectionStart==0){cX(gc,eu.selectAll)(gc)
}else{if(ge++<10){f9.detectingSelectAll=setTimeout(gf,500)
}else{ff(gc)
}}};
f9.detectingSelectAll=setTimeout(gf,200)
}}if(dA&&l>=9){f5()
}if(fV){eh(f7);
var f4=function(){d3(window,"mouseup",f4);
setTimeout(ga,20)
};
bV(window,"mouseup",f4)
}else{setTimeout(ga,50)
}}function db(f3,f4){if(!e8(f3,"gutterContextMenu")){return false
}return f1(f3,f4,"gutterContextMenu",false,aB)
}var cS=J.changeEnd=function(f3){if(!f3.text){return f3.to
}return X(f3.from.line+f3.text.length-1,fy(f3.text).length+(f3.text.length==1?f3.from.ch:0))
};
function bX(f6,f5){if(cd(f6,f5.from)<0){return f6
}if(cd(f6,f5.to)<=0){return cS(f5)
}var f3=f6.line+f5.text.length-(f5.to.line-f5.from.line)-1,f4=f6.ch;
if(f6.line==f5.to.line){f4+=cS(f5).ch-f5.to.ch
}return X(f3,f4)
}function fa(f6,f7){var f4=[];
for(var f5=0;
f5<f6.sel.ranges.length;
f5++){var f3=f6.sel.ranges[f5];
f4.push(new dO(bX(f3.anchor,f7),bX(f3.head,f7)))
}return cv(f4,f6.sel.primIndex)
}function bs(f5,f4,f3){if(f5.line==f4.line){return X(f3.line,f5.ch-f4.ch+f3.ch)
}else{return X(f3.line+(f5.line-f4.line),f5.ch)
}}function ae(gd,ga,f4){var f5=[];
var f3=X(gd.first,0),ge=f3;
for(var f7=0;
f7<ga.length;
f7++){var f9=ga[f7];
var gc=bs(f9.from,f3,ge);
var gb=bs(cS(f9),f3,ge);
f3=f9.to;
ge=gb;
if(f4=="around"){var f8=gd.sel.ranges[f7],f6=cd(f8.head,f8.anchor)<0;
f5[f7]=new dO(f6?gb:gc,f6?gc:gb)
}else{f5[f7]=new dO(gc,gc)
}}return new fO(f5,gd.sel.primIndex)
}function dH(f4,f6,f5){var f3={canceled:false,from:f6.from,to:f6.to,text:f6.text,origin:f6.origin,cancel:function(){this.canceled=true
}};
if(f5){f3.update=function(ga,f9,f8,f7){if(ga){this.from=fA(f4,ga)
}if(f9){this.to=fA(f4,f9)
}if(f8){this.text=f8
}if(f7!==undefined){this.origin=f7
}}
}aB(f4,"beforeChange",f4,f3);
if(f4.cm){aB(f4.cm,"beforeChange",f4.cm,f3)
}if(f3.canceled){return null
}return{from:f3.from,to:f3.to,text:f3.text,origin:f3.origin}
}function bb(f6,f7,f5){if(f6.cm){if(!f6.cm.curOp){return cX(f6.cm,bb)(f6,f7,f5)
}if(f6.cm.state.suppressEdits){return
}}if(e8(f6,"beforeChange")||f6.cm&&e8(f6.cm,"beforeChange")){f7=dH(f6,f7,true);
if(!f7){return
}}var f4=fY&&!f5&&cE(f6,f7.from,f7.to);
if(f4){for(var f3=f4.length-1;
f3>=0;
--f3){L(f6,{from:f4[f3].from,to:f4[f3].to,text:f3?[""]:f7.text})
}}else{L(f6,f7)
}}function L(f5,f6){if(f6.text.length==1&&f6.text[0]==""&&cd(f6.from,f6.to)==0){return
}var f4=fa(f5,f6);
fD(f5,f6,f4,f5.cm?f5.cm.curOp.id:NaN);
d4(f5,f6,f4,ea(f5,f6));
var f3=[];
dX(f5,function(f8,f7){if(!f7&&dc(f3,f8.history)==-1){dv(f8.history,f6);
f3.push(f8.history)
}d4(f8,f6,null,ea(f8,f6))
})
}function b6(ge,gc,gg){if(ge.cm&&ge.cm.state.suppressEdits){return
}var gb=ge.history,f5,f7=ge.sel;
var f3=gc=="undo"?gb.done:gb.undone,gf=gc=="undo"?gb.undone:gb.done;
for(var f8=0;
f8<f3.length;
f8++){f5=f3[f8];
if(gg?f5.ranges&&!f5.equals(ge.sel):!f5.ranges){break
}}if(f8==f3.length){return
}gb.lastOrigin=gb.lastSelOrigin=null;
for(;
;
){f5=f3.pop();
if(f5.ranges){cK(f5,gf);
if(gg&&!f5.equals(ge.sel)){bS(ge,f5,{clearRedo:false});
return
}f7=f5
}else{break
}}var ga=[];
cK(f7,gf);
gf.push({changes:ga,generation:gb.generation});
gb.generation=f5.generation||++gb.maxGeneration;
var f6=e8(ge,"beforeChange")||ge.cm&&e8(ge.cm,"beforeChange");
for(var f8=f5.changes.length-1;
f8>=0;
--f8){var gd=f5.changes[f8];
gd.origin=gc;
if(f6&&!dH(ge,gd,false)){f3.length=0;
return
}ga.push(dl(ge,gd));
var f4=f8?fa(ge,gd):fy(f3);
d4(ge,gd,f4,dZ(ge,gd));
if(!f8&&ge.cm){ge.cm.scrollIntoView({from:gd.from,to:cS(gd)})
}var f9=[];
dX(ge,function(gi,gh){if(!gh&&dc(f9,gi.history)==-1){dv(gi.history,gd);
f9.push(gi.history)
}d4(gi,gd,null,dZ(gi,gd))
})
}}function fd(f4,f6){if(f6==0){return
}f4.first+=f6;
f4.sel=new fO(bQ(f4.sel.ranges,function(f7){return new dO(X(f7.anchor.line+f6,f7.anchor.ch),X(f7.head.line+f6,f7.head.ch))
}),f4.sel.primIndex);
if(f4.cm){ag(f4.cm,f4.first,f4.first-f6,f6);
for(var f5=f4.cm.display,f3=f5.viewFrom;
f3<f5.viewTo;
f3++){S(f4.cm,f3,"gutter")
}}}function d4(f7,f8,f6,f4){if(f7.cm&&!f7.cm.curOp){return cX(f7.cm,d4)(f7,f8,f6,f4)
}if(f8.to.line<f7.first){fd(f7,f8.text.length-1-(f8.to.line-f8.from.line));
return
}if(f8.from.line>f7.lastLine()){return
}if(f8.from.line<f7.first){var f3=f8.text.length-1-(f7.first-f8.from.line);
fd(f7,f3);
f8={from:X(f7.first,0),to:X(f8.to.line+f3,f8.to.ch),text:[fy(f8.text)],origin:f8.origin}
}var f5=f7.lastLine();
if(f8.to.line>f5){f8={from:f8.from,to:X(f5,e5(f7,f5).text.length),text:[f8.text[0]],origin:f8.origin}
}f8.removed=fP(f7,f8.from,f8.to);
if(!f6){f6=fa(f7,f8)
}if(f7.cm){aG(f7.cm,f8,f4)
}else{fp(f7,f8,f4)
}ef(f7,f6,Z)
}function aG(ge,ga,f8){var gd=ge.doc,f9=ge.display,gb=ga.from,gc=ga.to;
var f3=false,f7=gb.line;
if(!ge.options.lineWrapping){f7=bL(z(e5(gd,gb.line)));
gd.iter(f7,gc.line+1,function(gg){if(gg==f9.maxLine){f3=true;
return true
}})
}if(gd.sel.contains(ga.from,ga.to)>-1){W(ge)
}fp(gd,ga,f8,a9(ge));
if(!ge.options.lineWrapping){gd.iter(f7,gb.line+ga.text.length,function(gh){var gg=ec(gh);
if(gg>f9.maxLineLength){f9.maxLine=gh;
f9.maxLineLength=gg;
f9.maxLineChanged=true;
f3=false
}});
if(f3){ge.curOp.updateMaxLine=true
}}gd.frontier=Math.min(gd.frontier,gb.line);
d5(ge,400);
var gf=ga.text.length-(gc.line-gb.line)-1;
if(gb.line==gc.line&&ga.text.length==1&&!dI(ge.doc,ga)){S(ge,gb.line,"text")
}else{ag(ge,gb.line,gc.line+1,gf)
}var f5=e8(ge,"changes"),f6=e8(ge,"change");
if(f6||f5){var f4={from:gb,to:gc,text:ga.text,removed:ga.removed,origin:ga.origin};
if(f6){ad(ge,"change",ge,f4)
}if(f5){(ge.curOp.changeObjs||(ge.curOp.changeObjs=[])).push(f4)
}}ge.display.selForContextMenu=null
}function aW(f6,f5,f8,f7,f3){if(!f7){f7=f8
}if(cd(f7,f8)<0){var f4=f7;
f7=f8;
f8=f4
}if(typeof f5=="string"){f5=aV(f5)
}bb(f6,{from:f8,to:f7,text:f5,origin:f3})
}function dW(f4,f7){if(aN(f4,"scrollCursorIntoView")){return
}var f8=f4.display,f5=f8.sizer.getBoundingClientRect(),f3=null;
if(f7.top+f5.top<0){f3=true
}else{if(f7.bottom+f5.top>(window.innerHeight||document.documentElement.clientHeight)){f3=false
}}if(f3!=null&&!fl){var f6=fN("div","\u200b",null,"position: absolute; top: "+(f7.top-f8.viewOffset-eY(f4.display))+"px; height: "+(f7.bottom-f7.top+bg)+"px; left: "+f7.left+"px; width: 2px;");
f4.display.lineSpace.appendChild(f6);
f6.scrollIntoView(f3);
f4.display.lineSpace.removeChild(f6)
}}function F(gd,gb,f7,f6){if(f6==null){f6=0
}for(var f8=0;
f8<5;
f8++){var f9=false,gc=dK(gd,gb);
var f3=!f7||f7==gb?gc:dK(gd,f7);
var f5=I(gd,Math.min(gc.left,f3.left),Math.min(gc.top,f3.top)-f6,Math.max(gc.left,f3.left),Math.max(gc.bottom,f3.bottom)+f6);
var ga=gd.doc.scrollTop,f4=gd.doc.scrollLeft;
if(f5.scrollTop!=null){O(gd,f5.scrollTop);
if(Math.abs(gd.doc.scrollTop-ga)>1){f9=true
}}if(f5.scrollLeft!=null){bC(gd,f5.scrollLeft);
if(Math.abs(gd.doc.scrollLeft-f4)>1){f9=true
}}if(!f9){return gc
}}}function G(f3,f5,f7,f4,f6){var f8=I(f3,f5,f7,f4,f6);
if(f8.scrollTop!=null){O(f3,f8.scrollTop)
}if(f8.scrollLeft!=null){bC(f3,f8.scrollLeft)
}}function I(gf,f6,ge,f4,gd){var gb=gf.display,f9=aS(gf.display);
if(ge<0){ge=0
}var f7=gf.curOp&&gf.curOp.scrollTop!=null?gf.curOp.scrollTop:gb.scroller.scrollTop;
var gh=gb.scroller.clientHeight-bg,gj={};
if(gd-ge>gh){gd=ge+gh
}var f5=gf.doc.height+bG(gb);
var f3=ge<f9,ga=gd>f5-f9;
if(ge<f7){gj.scrollTop=f3?0:ge
}else{if(gd>f7+gh){var gc=Math.min(ge,(ga?f5:gd)-gh);
if(gc!=f7){gj.scrollTop=gc
}}}var gi=gf.curOp&&gf.curOp.scrollLeft!=null?gf.curOp.scrollLeft:gb.scroller.scrollLeft;
var gg=gb.scroller.clientWidth-bg-gb.gutters.offsetWidth;
var f8=f4-f6>gg;
if(f8){f4=f6+gg
}if(f6<10){gj.scrollLeft=0
}else{if(f6<gi){gj.scrollLeft=Math.max(0,f6-(f8?0:10))
}else{if(f4>gg+gi-3){gj.scrollLeft=f4+(f8?0:10)-gg
}}}return gj
}function cI(f3,f5,f4){if(f5!=null||f4!=null){ft(f3)
}if(f5!=null){f3.curOp.scrollLeft=(f3.curOp.scrollLeft==null?f3.doc.scrollLeft:f3.curOp.scrollLeft)+f5
}if(f4!=null){f3.curOp.scrollTop=(f3.curOp.scrollTop==null?f3.doc.scrollTop:f3.curOp.scrollTop)+f4
}}function fx(f3){ft(f3);
var f4=f3.getCursor(),f6=f4,f5=f4;
if(!f3.options.lineWrapping){f6=f4.ch?X(f4.line,f4.ch-1):f4;
f5=X(f4.line,f4.ch+1)
}f3.curOp.scrollToPos={from:f6,to:f5,margin:f3.options.cursorScrollMargin,isCursor:true}
}function ft(f3){var f5=f3.curOp.scrollToPos;
if(f5){f3.curOp.scrollToPos=null;
var f7=dy(f3,f5.from),f6=dy(f3,f5.to);
var f4=I(f3,Math.min(f7.left,f6.left),Math.min(f7.top,f6.top)-f5.margin,Math.max(f7.right,f6.right),Math.max(f7.bottom,f6.bottom)+f5.margin);
f3.scrollTo(f4.scrollLeft,f4.scrollTop)
}}function ac(gg,f6,gf,f5){var ge=gg.doc,f4;
if(gf==null){gf="add"
}if(gf=="smart"){if(!ge.mode.indent){gf="prev"
}else{f4=ds(gg,f6)
}}var ga=gg.options.tabSize;
var gh=e5(ge,f6),f9=bR(gh.text,null,ga);
if(gh.stateAfter){gh.stateAfter=null
}var f3=gh.text.match(/^\s*/)[0],gc;
if(!f5&&!/\S/.test(gh.text)){gc=0;
gf="not"
}else{if(gf=="smart"){gc=ge.mode.indent(f4,gh.text.slice(f3.length),gh.text);
if(gc==b8||gc>150){if(!f5){return
}gf="prev"
}}}if(gf=="prev"){if(f6>ge.first){gc=bR(e5(ge,f6-1).text,null,ga)
}else{gc=0
}}else{if(gf=="add"){gc=f9+gg.options.indentUnit
}else{if(gf=="subtract"){gc=f9-gg.options.indentUnit
}else{if(typeof gf=="number"){gc=f9+gf
}}}}gc=Math.max(0,gc);
var gd="",gb=0;
if(gg.options.indentWithTabs){for(var f7=Math.floor(gc/ga);
f7;
--f7){gb+=ga;
gd+="\t"
}}if(gb<gc){gd+=co(gc-gb)
}if(gd!=f3){aW(ge,gd,X(f6,0),X(f6,f3.length),"+input")
}else{for(var f7=0;
f7<ge.sel.ranges.length;
f7++){var f8=ge.sel.ranges[f7];
if(f8.head.line==f6&&f8.head.ch<f3.length){var gb=X(f6,f3.length);
e(ge,f7,new dO(gb,gb));
break
}}}gh.stateAfter=null
}function ep(f6,f5,f3,f8){var f7=f5,f4=f5;
if(typeof f5=="number"){f4=e5(f6,c0(f6,f5))
}else{f7=bL(f5)
}if(f7==null){return null
}if(f8(f4,f7)&&f6.cm){S(f6.cm,f7,f3)
}return f4
}function eO(f3,f9){var f4=f3.doc.sel.ranges,f7=[];
for(var f6=0;
f6<f4.length;
f6++){var f5=f9(f4[f6]);
while(f7.length&&cd(f5.from,fy(f7).to)<=0){var f8=f7.pop();
if(cd(f8.from,f5.from)<0){f5.from=f8.from;
break
}}f7.push(f5)
}cJ(f3,function(){for(var ga=f7.length-1;
ga>=0;
ga--){aW(f3.doc,"",f7[ga].from,f7[ga].to,"+delete")
}fx(f3)
})
}function bu(gl,f7,gf,ge,f9){var gc=f7.line,gd=f7.ch,gk=gf;
var f4=e5(gl,gc);
var gi=true;
function gj(){var gm=gc+gf;
if(gm<gl.first||gm>=gl.first+gl.size){return(gi=false)
}gc=gm;
return f4=e5(gl,gm)
}function gh(gn){var gm=(f9?v:ah)(f4,gd,gf,true);
if(gm==null){if(!gn&&gj()){if(f9){gd=(gf<0?cP:cC)(f4)
}else{gd=gf<0?f4.text.length:0
}}else{return(gi=false)
}}else{gd=gm
}return true
}if(ge=="char"){gh()
}else{if(ge=="column"){gh(true)
}else{if(ge=="word"||ge=="group"){var gg=null,ga=ge=="group";
var f3=gl.cm&&gl.cm.getHelper(f7,"wordChars");
for(var f8=true;
;
f8=false){if(gf<0&&!gh(!f8)){break
}var f5=f4.text.charAt(gd)||"\n";
var f6=cy(f5,f3)?"w":ga&&f5=="\n"?"n":!ga||/\s/.test(f5)?null:"p";
if(ga&&!f8&&!f6){f6="s"
}if(gg&&gg!=f6){if(gf<0){gf=1;
gh()
}break
}if(f6){gg=f6
}if(gf>0&&!gh(!f8)){break
}}}}}var gb=bT(gl,X(gc,gd),gk,true);
if(!gi){gb.hitSide=true
}return gb
}function bo(gb,f6,f3,ga){var f9=gb.doc,f8=f6.left,f7;
if(ga=="page"){var f5=Math.min(gb.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);
f7=f6.top+f3*(f5-(f3<0?1.5:0.5)*aS(gb.display))
}else{if(ga=="line"){f7=f3>0?f6.bottom+3:f6.top-3
}}for(;
;
){var f4=fF(gb,f8,f7);
if(!f4.outside){break
}if(f3<0?f7<=0:f7>=f9.height){f4.hitSide=true;
break
}f7+=f3*5
}return f4
}J.prototype={constructor:J,focus:function(){window.focus();
eq(this);
C(this)
},setOption:function(f5,f6){var f4=this.options,f3=f4[f5];
if(f4[f5]==f6&&f5!="mode"){return
}f4[f5]=f6;
if(ba.hasOwnProperty(f5)){cX(this,ba[f5])(this,f6,f3)
}},getOption:function(f3){return this.options[f3]
},getDoc:function(){return this.doc
},addKeyMap:function(f4,f3){this.state.keyMaps[f3?"push":"unshift"](fL(f4))
},removeKeyMap:function(f4){var f5=this.state.keyMaps;
for(var f3=0;
f3<f5.length;
++f3){if(f5[f3]==f4||f5[f3].name==f4){f5.splice(f3,1);
return true
}}},addOverlay:c3(function(f3,f4){var f5=f3.token?f3:J.getMode(this.options,f3);
if(f5.startState){throw new Error("Overlays may not be stateful.")
}this.state.overlays.push({mode:f5,modeSpec:f3,opaque:f4&&f4.opaque});
this.state.modeGen++;
ag(this)
}),removeOverlay:c3(function(f3){var f5=this.state.overlays;
for(var f4=0;
f4<f5.length;
++f4){var f6=f5[f4].modeSpec;
if(f6==f3||typeof f3=="string"&&f6.name==f3){f5.splice(f4,1);
this.state.modeGen++;
ag(this);
return
}}}),indentLine:c3(function(f5,f3,f4){if(typeof f3!="string"&&typeof f3!="number"){if(f3==null){f3=this.options.smartIndent?"smart":"prev"
}else{f3=f3?"add":"subtract"
}}if(b7(this.doc,f5)){ac(this,f5,f3,f4)
}}),indentSelection:c3(function(gc){var f3=this.doc.sel.ranges,f6=-1;
for(var f8=0;
f8<f3.length;
f8++){var f9=f3[f8];
if(!f9.empty()){var ga=f9.from(),gb=f9.to();
var f4=Math.max(f6,ga.line);
f6=Math.min(this.lastLine(),gb.line-(gb.ch?0:1))+1;
for(var f7=f4;
f7<f6;
++f7){ac(this,f7,gc)
}var f5=this.doc.sel.ranges;
if(ga.ch==0&&f3.length==f5.length&&f5[f8].from().ch>0){e(this.doc,f8,new dO(ga,f5[f8].to()),Z)
}}else{if(f9.head.line>f6){ac(this,f9.head.line,gc,true);
f6=f9.head.line;
if(f8==this.doc.sel.primIndex){fx(this)
}}}}}),getTokenAt:function(f4,f3){return cp(this,f4,f3)
},getLineTokens:function(f4,f3){return cp(this,X(f4),f3,true)
},getTokenTypeAt:function(ga){ga=fA(this.doc,ga);
var f6=c1(this,e5(this.doc,ga.line));
var f8=0,f9=(f6.length-1)/2,f5=ga.ch;
var f4;
if(f5==0){f4=f6[2]
}else{for(;
;
){var f3=(f8+f9)>>1;
if((f3?f6[f3*2-1]:0)>=f5){f9=f3
}else{if(f6[f3*2+1]<f5){f8=f3+1
}else{f4=f6[f3*2+2];
break
}}}}var f7=f4?f4.indexOf("cm-overlay "):-1;
return f7<0?f4:f7==0?null:f4.slice(0,f7-1)
},getModeAt:function(f4){var f3=this.doc.mode;
if(!f3.innerMode){return f3
}return J.innerMode(f3,this.getTokenAt(f4).state).mode
},getHelper:function(f4,f3){return this.getHelpers(f4,f3)[0]
},getHelpers:function(ga,f5){var f6=[];
if(!fe.hasOwnProperty(f5)){return fe
}var f3=fe[f5],f9=this.getModeAt(ga);
if(typeof f9[f5]=="string"){if(f3[f9[f5]]){f6.push(f3[f9[f5]])
}}else{if(f9[f5]){for(var f4=0;
f4<f9[f5].length;
f4++){var f8=f3[f9[f5][f4]];
if(f8){f6.push(f8)
}}}else{if(f9.helperType&&f3[f9.helperType]){f6.push(f3[f9.helperType])
}else{if(f3[f9.name]){f6.push(f3[f9.name])
}}}}for(var f4=0;
f4<f3._global.length;
f4++){var f7=f3._global[f4];
if(f7.pred(f9,this)&&dc(f6,f7.val)==-1){f6.push(f7.val)
}}return f6
},getStateAfter:function(f4,f3){var f5=this.doc;
f4=c0(f5,f4==null?f5.first+f5.size-1:f4);
return ds(this,f4+1,f3)
},cursorCoords:function(f6,f4){var f5,f3=this.doc.sel.primary();
if(f6==null){f5=f3.head
}else{if(typeof f6=="object"){f5=fA(this.doc,f6)
}else{f5=f6?f3.from():f3.to()
}}return dK(this,f5,f4||"page")
},charCoords:function(f4,f3){return cG(this,fA(this.doc,f4),f3||"page")
},coordsChar:function(f3,f4){f3=f0(this,f3,f4||"page");
return fF(this,f3.left,f3.top)
},lineAtHeight:function(f3,f4){f3=f0(this,{top:f3,left:0},f4||"page").top;
return bE(this.doc,f3+this.display.viewOffset)
},heightAtLine:function(f4,f7){var f3=false,f6=this.doc.first+this.doc.size-1;
if(f4<this.doc.first){f4=this.doc.first
}else{if(f4>f6){f4=f6;
f3=true
}}var f5=e5(this.doc,f4);
return eH(this,f5,{top:0,left:0},f7||"page").top+(f3?this.doc.height-bK(f5):0)
},defaultTextHeight:function(){return aS(this.display)
},defaultCharWidth:function(){return du(this.display)
},setGutterMarker:c3(function(f3,f4,f5){return ep(this.doc,f3,"gutter",function(f6){var f7=f6.gutterMarkers||(f6.gutterMarkers={});
f7[f4]=f5;
if(!f5&&eL(f7)){f6.gutterMarkers=null
}return true
})
}),clearGutter:c3(function(f5){var f3=this,f6=f3.doc,f4=f6.first;
f6.iter(function(f7){if(f7.gutterMarkers&&f7.gutterMarkers[f5]){f7.gutterMarkers[f5]=null;
S(f3,f4,"gutter");
if(eL(f7.gutterMarkers)){f7.gutterMarkers=null
}}++f4
})
}),addLineWidget:c3(function(f5,f4,f3){return bF(this,f5,f4,f3)
}),removeLineWidget:function(f3){f3.clear()
},lineInfo:function(f3){if(typeof f3=="number"){if(!b7(this.doc,f3)){return null
}var f4=f3;
f3=e5(this.doc,f3);
if(!f3){return null
}}else{var f4=bL(f3);
if(f4==null){return null
}}return{line:f4,handle:f3,text:f3.text,gutterMarkers:f3.gutterMarkers,textClass:f3.textClass,bgClass:f3.bgClass,wrapClass:f3.wrapClass,widgets:f3.widgets}
},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}
},addWidget:function(f8,f5,ga,f6,gc){var f7=this.display;
f8=dK(this,fA(this.doc,f8));
var f9=f8.bottom,f4=f8.left;
f5.style.position="absolute";
f7.sizer.appendChild(f5);
if(f6=="over"){f9=f8.top
}else{if(f6=="above"||f6=="near"){var f3=Math.max(f7.wrapper.clientHeight,this.doc.height),gb=Math.max(f7.sizer.clientWidth,f7.lineSpace.clientWidth);
if((f6=="above"||f8.bottom+f5.offsetHeight>f3)&&f8.top>f5.offsetHeight){f9=f8.top-f5.offsetHeight
}else{if(f8.bottom+f5.offsetHeight<=f3){f9=f8.bottom
}}if(f4+f5.offsetWidth>gb){f4=gb-f5.offsetWidth
}}}f5.style.top=f9+"px";
f5.style.left=f5.style.right="";
if(gc=="right"){f4=f7.sizer.clientWidth-f5.offsetWidth;
f5.style.right="0px"
}else{if(gc=="left"){f4=0
}else{if(gc=="middle"){f4=(f7.sizer.clientWidth-f5.offsetWidth)/2
}}f5.style.left=f4+"px"
}if(ga){G(this,f4,f9,f4+f5.offsetWidth,f9+f5.offsetHeight)
}},triggerOnKeyDown:c3(q),triggerOnKeyPress:c3(cw),triggerOnKeyUp:bd,execCommand:function(f3){if(eu.hasOwnProperty(f3)){return eu[f3](this)
}},findPosH:function(f9,f6,f7,f4){var f3=1;
if(f6<0){f3=-1;
f6=-f6
}for(var f5=0,f8=fA(this.doc,f9);
f5<f6;
++f5){f8=bu(this.doc,f8,f3,f7,f4);
if(f8.hitSide){break
}}return f8
},moveH:c3(function(f4,f5){var f3=this;
f3.extendSelectionsBy(function(f6){if(f3.display.shift||f3.doc.extend||f6.empty()){return bu(f3.doc,f6.head,f4,f5,f3.options.rtlMoveVisually)
}else{return f4<0?f6.from():f6.to()
}},cR)
}),deleteH:c3(function(f3,f4){var f5=this.doc.sel,f6=this.doc;
if(f5.somethingSelected()){f6.replaceSelection("",null,"+delete")
}else{eO(this,function(f8){var f7=bu(f6,f8.head,f3,f4,false);
return f3<0?{from:f7,to:f8.head}:{from:f8.head,to:f7}
})
}}),findPosV:function(f8,f5,f9,gb){var f3=1,f7=gb;
if(f5<0){f3=-1;
f5=-f5
}for(var f4=0,ga=fA(this.doc,f8);
f4<f5;
++f4){var f6=dK(this,ga,"div");
if(f7==null){f7=f6.left
}else{f6.left=f7
}ga=bo(this,f6,f3,f9);
if(ga.hitSide){break
}}return ga
},moveV:c3(function(f4,f6){var f3=this,f8=this.doc,f7=[];
var f9=!f3.display.shift&&!f8.extend&&f8.sel.somethingSelected();
f8.extendSelectionsBy(function(ga){if(f9){return f4<0?ga.from():ga.to()
}var gc=dK(f3,ga.head,"div");
if(ga.goalColumn!=null){gc.left=ga.goalColumn
}f7.push(gc.left);
var gb=bo(f3,gc,f4,f6);
if(f6=="page"&&ga==f8.sel.primary()){cI(f3,null,cG(f3,gb,"div").top-gc.top)
}return gb
},cR);
if(f7.length){for(var f5=0;
f5<f8.sel.ranges.length;
f5++){f8.sel.ranges[f5].goalColumn=f7[f5]
}}}),findWordAt:function(ga){var f8=this.doc,f6=e5(f8,ga.line).text;
var f9=ga.ch,f5=ga.ch;
if(f6){var f7=this.getHelper(ga,"wordChars");
if((ga.xRel<0||f5==f6.length)&&f9){--f9
}else{++f5
}var f4=f6.charAt(f9);
var f3=cy(f4,f7)?function(gb){return cy(gb,f7)
}:/\s/.test(f4)?function(gb){return/\s/.test(gb)
}:function(gb){return !/\s/.test(gb)&&!cy(gb)
};
while(f9>0&&f3(f6.charAt(f9-1))){--f9
}while(f5<f6.length&&f3(f6.charAt(f5))){++f5
}}return new dO(X(ga.line,f9),X(ga.line,f5))
},toggleOverwrite:function(f3){if(f3!=null&&f3==this.state.overwrite){return
}if(this.state.overwrite=!this.state.overwrite){fr(this.display.cursorDiv,"CodeMirror-overwrite")
}else{f(this.display.cursorDiv,"CodeMirror-overwrite")
}aB(this,"overwriteToggle",this,this.state.overwrite)
},hasFocus:function(){return dE()==this.display.input
},scrollTo:c3(function(f3,f4){if(f3!=null||f4!=null){ft(this)
}if(f3!=null){this.curOp.scrollLeft=f3
}if(f4!=null){this.curOp.scrollTop=f4
}}),getScrollInfo:function(){var f3=this.display.scroller,f4=bg;
return{left:f3.scrollLeft,top:f3.scrollTop,height:f3.scrollHeight-f4,width:f3.scrollWidth-f4,clientHeight:f3.clientHeight-f4,clientWidth:f3.clientWidth-f4}
},scrollIntoView:c3(function(f4,f5){if(f4==null){f4={from:this.doc.sel.primary().head,to:null};
if(f5==null){f5=this.options.cursorScrollMargin
}}else{if(typeof f4=="number"){f4={from:X(f4,0),to:null}
}else{if(f4.from==null){f4={from:f4,to:null}
}}}if(!f4.to){f4.to=f4.from
}f4.margin=f5||0;
if(f4.from.line!=null){ft(this);
this.curOp.scrollToPos=f4
}else{var f3=I(this,Math.min(f4.from.left,f4.to.left),Math.min(f4.from.top,f4.to.top)-f4.margin,Math.max(f4.from.right,f4.to.right),Math.max(f4.from.bottom,f4.to.bottom)+f4.margin);
this.scrollTo(f3.scrollLeft,f3.scrollTop)
}}),setSize:c3(function(f6,f4){var f3=this;
function f5(f8){return typeof f8=="number"||/^\d+$/.test(String(f8))?f8+"px":f8
}if(f6!=null){f3.display.wrapper.style.width=f5(f6)
}if(f4!=null){f3.display.wrapper.style.height=f5(f4)
}if(f3.options.lineWrapping){aK(this)
}var f7=f3.display.viewFrom;
f3.doc.iter(f7,f3.display.viewTo,function(f8){if(f8.widgets){for(var f9=0;
f9<f8.widgets.length;
f9++){if(f8.widgets[f9].noHScroll){S(f3,f7,"widget");
break
}}}++f7
});
f3.curOp.forceUpdate=true;
aB(f3,"refresh",this)
}),operation:function(f3){return cJ(this,f3)
},refresh:c3(function(){var f3=this.display.cachedTextHeight;
ag(this);
this.curOp.forceUpdate=true;
aj(this);
this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop);
cZ(this);
if(f3==null||Math.abs(f3-aS(this.display))>0.5){Y(this)
}aB(this,"refresh",this)
}),swapDoc:c3(function(f4){var f3=this.doc;
f3.cm=null;
d1(this,f4);
aj(this);
ff(this);
this.scrollTo(f4.scrollLeft,f4.scrollTop);
this.curOp.forceScroll=true;
ad(this,"swapDoc",this,f3);
return f3
}),getInputField:function(){return this.display.input
},getWrapperElement:function(){return this.display.wrapper
},getScrollerElement:function(){return this.display.scroller
},getGutterElement:function(){return this.display.gutters
}};
bw(J);
var eU=J.defaults={};
var ba=J.optionHandlers={};
function t(f3,f6,f5,f4){J.defaults[f3]=f6;
if(f5){ba[f3]=f4?function(f7,f9,f8){if(f8!=ca){f5(f7,f9,f8)
}}:f5
}}var ca=J.Init={toString:function(){return"CodeMirror.Init"
}};
t("value","",function(f3,f4){f3.setValue(f4)
},true);
t("mode",null,function(f3,f4){f3.doc.modeOption=f4;
bp(f3)
},true);
t("indentUnit",2,bp,true);
t("indentWithTabs",false);
t("smartIndent",true);
t("tabSize",4,function(f3){eb(f3);
aj(f3);
ag(f3)
},true);
t("specialChars",/[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,function(f3,f4){f3.options.specialChars=new RegExp(f4.source+(f4.test("\t")?"":"|\t"),"g");
f3.refresh()
},true);
t("specialCharPlaceholder",e2,function(f3){f3.refresh()
},true);
t("electricChars",true);
t("rtlMoveVisually",!aL);
t("wholeLineUpdateBefore",true);
t("theme","default",function(f3){cL(f3);
dm(f3)
},true);
t("keyMap","default",function(f3,f7,f4){var f5=fL(f7);
var f6=f4!=J.Init&&fL(f4);
if(f6&&f6.detach){f6.detach(f3,f5)
}if(f5.attach){f5.attach(f3,f6||null)
}});
t("extraKeys",null);
t("lineWrapping",false,ex,true);
t("gutters",[],function(f3){cc(f3.options);
dm(f3)
},true);
t("fixedGutter",true,function(f3,f4){f3.display.gutters.style.left=f4?dN(f3.display)+"px":"0";
f3.refresh()
},true);
t("coverGutterNextToScrollbar",false,eP,true);
t("lineNumbers",false,function(f3){cc(f3.options);
dm(f3)
},true);
t("firstLineNumber",1,dm,true);
t("lineNumberFormatter",function(f3){return f3
},dm,true);
t("showCursorWhenSelecting",false,bA,true);
t("resetSelectionOnContextMenu",true);
t("readOnly",false,function(f3,f4){if(f4=="nocursor"){aQ(f3);
f3.display.input.blur();
f3.display.disabled=true
}else{f3.display.disabled=false;
if(!f4){ff(f3)
}}});
t("disableInput",false,function(f3,f4){if(!f4){ff(f3)
}},true);
t("dragDrop",true);
t("cursorBlinkRate",530);
t("cursorScrollMargin",0);
t("cursorHeight",1,bA,true);
t("singleCursorHeightPerLine",true,bA,true);
t("workTime",100);
t("workDelay",100);
t("flattenSpans",true,eb,true);
t("addModeClass",false,eb,true);
t("pollInterval",100);
t("undoDepth",200,function(f3,f4){f3.doc.history.undoDepth=f4
});
t("historyEventDelay",1250);
t("viewportMargin",10,function(f3){f3.refresh()
},true);
t("maxHighlightLength",10000,eb,true);
t("moveInputWithCursor",true,function(f3,f4){if(!f4){f3.display.inputDiv.style.top=f3.display.inputDiv.style.left=0
}});
t("tabindex",null,function(f3,f4){f3.display.input.tabIndex=f4||""
});
t("autofocus",null);
var dj=J.modes={},aO=J.mimeModes={};
J.defineMode=function(f3,f4){if(!J.defaults.mode&&f3!="null"){J.defaults.mode=f3
}if(arguments.length>2){f4.dependencies=Array.prototype.slice.call(arguments,2)
}dj[f3]=f4
};
J.defineMIME=function(f4,f3){aO[f4]=f3
};
J.resolveMode=function(f3){if(typeof f3=="string"&&aO.hasOwnProperty(f3)){f3=aO[f3]
}else{if(f3&&typeof f3.name=="string"&&aO.hasOwnProperty(f3.name)){var f4=aO[f3.name];
if(typeof f4=="string"){f4={name:f4}
}f3=cj(f4,f3);
f3.name=f4.name
}else{if(typeof f3=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(f3)){return J.resolveMode("application/xml")
}}}if(typeof f3=="string"){return{name:f3}
}else{return f3||{name:"null"}
}};
J.getMode=function(f4,f3){var f3=J.resolveMode(f3);
var f6=dj[f3.name];
if(!f6){return J.getMode(f4,"text/plain")
}var f7=f6(f4,f3);
if(dg.hasOwnProperty(f3.name)){var f5=dg[f3.name];
for(var f8 in f5){if(!f5.hasOwnProperty(f8)){continue
}if(f7.hasOwnProperty(f8)){f7["_"+f8]=f7[f8]
}f7[f8]=f5[f8]
}}f7.name=f3.name;
if(f3.helperType){f7.helperType=f3.helperType
}if(f3.modeProps){for(var f8 in f3.modeProps){f7[f8]=f3.modeProps[f8]
}}return f7
};
J.defineMode("null",function(){return{token:function(f3){f3.skipToEnd()
}}
});
J.defineMIME("text/plain","null");
var dg=J.modeExtensions={};
J.extendMode=function(f5,f4){var f3=dg.hasOwnProperty(f5)?dg[f5]:(dg[f5]={});
aJ(f4,f3)
};
J.defineExtension=function(f3,f4){J.prototype[f3]=f4
};
J.defineDocExtension=function(f3,f4){ar.prototype[f3]=f4
};
J.defineOption=t;
var a3=[];
J.defineInitHook=function(f3){a3.push(f3)
};
var fe=J.helpers={};
J.registerHelper=function(f4,f3,f5){if(!fe.hasOwnProperty(f4)){fe[f4]=J[f4]={_global:[]}
}fe[f4][f3]=f5
};
J.registerGlobalHelper=function(f5,f4,f3,f6){J.registerHelper(f5,f4,f6);
fe[f5]._global.push({pred:f3,val:f6})
};
var b1=J.copyState=function(f6,f3){if(f3===true){return f3
}if(f6.copyState){return f6.copyState(f3)
}var f5={};
for(var f7 in f3){var f4=f3[f7];
if(f4 instanceof Array){f4=f4.concat([])
}f5[f7]=f4
}return f5
};
var bY=J.startState=function(f5,f4,f3){return f5.startState?f5.startState(f4,f3):true
};
J.innerMode=function(f5,f3){while(f5.innerMode){var f4=f5.innerMode(f3);
if(!f4||f4.mode==f5){break
}f3=f4.state;
f5=f4.mode
}return f4||{mode:f5,state:f3}
};
var eu=J.commands={selectAll:function(f3){f3.setSelection(X(f3.firstLine(),0),X(f3.lastLine()),Z)
},singleSelection:function(f3){f3.setSelection(f3.getCursor("anchor"),f3.getCursor("head"),Z)
},killLine:function(f3){eO(f3,function(f5){if(f5.empty()){var f4=e5(f3.doc,f5.head.line).text.length;
if(f5.head.ch==f4&&f5.head.line<f3.lastLine()){return{from:f5.head,to:X(f5.head.line+1,0)}
}else{return{from:f5.head,to:X(f5.head.line,f4)}
}}else{return{from:f5.from(),to:f5.to()}
}})
},deleteLine:function(f3){eO(f3,function(f4){return{from:X(f4.from().line,0),to:fA(f3.doc,X(f4.to().line+1,0))}
})
},delLineLeft:function(f3){eO(f3,function(f4){return{from:X(f4.from().line,0),to:f4.from()}
})
},delWrappedLineLeft:function(f3){eO(f3,function(f4){var f6=f3.charCoords(f4.head,"div").top+5;
var f5=f3.coordsChar({left:0,top:f6},"div");
return{from:f5,to:f4.from()}
})
},delWrappedLineRight:function(f3){eO(f3,function(f4){var f6=f3.charCoords(f4.head,"div").top+5;
var f5=f3.coordsChar({left:f3.display.lineDiv.offsetWidth+100,top:f6},"div");
return{from:f4.from(),to:f5}
})
},undo:function(f3){f3.undo()
},redo:function(f3){f3.redo()
},undoSelection:function(f3){f3.undoSelection()
},redoSelection:function(f3){f3.redoSelection()
},goDocStart:function(f3){f3.extendSelection(X(f3.firstLine(),0))
},goDocEnd:function(f3){f3.extendSelection(X(f3.lastLine()))
},goLineStart:function(f3){f3.extendSelectionsBy(function(f4){return br(f3,f4.head.line)
},{origin:"+move",bias:1})
},goLineStartSmart:function(f3){f3.extendSelectionsBy(function(f4){return dz(f3,f4.head)
},{origin:"+move",bias:1})
},goLineEnd:function(f3){f3.extendSelectionsBy(function(f4){return dF(f3,f4.head.line)
},{origin:"+move",bias:-1})
},goLineRight:function(f3){f3.extendSelectionsBy(function(f4){var f5=f3.charCoords(f4.head,"div").top+5;
return f3.coordsChar({left:f3.display.lineDiv.offsetWidth+100,top:f5},"div")
},cR)
},goLineLeft:function(f3){f3.extendSelectionsBy(function(f4){var f5=f3.charCoords(f4.head,"div").top+5;
return f3.coordsChar({left:0,top:f5},"div")
},cR)
},goLineLeftSmart:function(f3){f3.extendSelectionsBy(function(f4){var f5=f3.charCoords(f4.head,"div").top+5;
var f6=f3.coordsChar({left:0,top:f5},"div");
if(f6.ch<f3.getLine(f6.line).search(/\S/)){return dz(f3,f4.head)
}return f6
},cR)
},goLineUp:function(f3){f3.moveV(-1,"line")
},goLineDown:function(f3){f3.moveV(1,"line")
},goPageUp:function(f3){f3.moveV(-1,"page")
},goPageDown:function(f3){f3.moveV(1,"page")
},goCharLeft:function(f3){f3.moveH(-1,"char")
},goCharRight:function(f3){f3.moveH(1,"char")
},goColumnLeft:function(f3){f3.moveH(-1,"column")
},goColumnRight:function(f3){f3.moveH(1,"column")
},goWordLeft:function(f3){f3.moveH(-1,"word")
},goGroupRight:function(f3){f3.moveH(1,"group")
},goGroupLeft:function(f3){f3.moveH(-1,"group")
},goWordRight:function(f3){f3.moveH(1,"word")
},delCharBefore:function(f3){f3.deleteH(-1,"char")
},delCharAfter:function(f3){f3.deleteH(1,"char")
},delWordBefore:function(f3){f3.deleteH(-1,"word")
},delWordAfter:function(f3){f3.deleteH(1,"word")
},delGroupBefore:function(f3){f3.deleteH(-1,"group")
},delGroupAfter:function(f3){f3.deleteH(1,"group")
},indentAuto:function(f3){f3.indentSelection("smart")
},indentMore:function(f3){f3.indentSelection("add")
},indentLess:function(f3){f3.indentSelection("subtract")
},insertTab:function(f3){f3.replaceSelection("\t")
},insertSoftTab:function(f3){var f5=[],f4=f3.listSelections(),f8=f3.options.tabSize;
for(var f7=0;
f7<f4.length;
f7++){var f9=f4[f7].from();
var f6=bR(f3.getLine(f9.line),f9.ch,f8);
f5.push(new Array(f8-f6%f8+1).join(" "))
}f3.replaceSelections(f5)
},defaultTab:function(f3){if(f3.somethingSelected()){f3.indentSelection("add")
}else{f3.execCommand("insertTab")
}},transposeChars:function(f3){cJ(f3,function(){var f6=f3.listSelections(),f5=[];
for(var f7=0;
f7<f6.length;
f7++){var f9=f6[f7].head,f4=e5(f3.doc,f9.line).text;
if(f4){if(f9.ch==f4.length){f9=new X(f9.line,f9.ch-1)
}if(f9.ch>0){f9=new X(f9.line,f9.ch+1);
f3.replaceRange(f4.charAt(f9.ch-1)+f4.charAt(f9.ch-2),X(f9.line,f9.ch-2),f9,"+transpose")
}else{if(f9.line>f3.doc.first){var f8=e5(f3.doc,f9.line-1).text;
if(f8){f3.replaceRange(f4.charAt(0)+"\n"+f8.charAt(f8.length-1),X(f9.line-1,f8.length-1),X(f9.line,1),"+transpose")
}}}}f5.push(new dO(f9,f9))
}f3.setSelections(f5)
})
},newlineAndIndent:function(f3){cJ(f3,function(){var f4=f3.listSelections().length;
for(var f6=0;
f6<f4;
f6++){var f5=f3.listSelections()[f6];
f3.replaceRange("\n",f5.anchor,f5.head,"+input");
f3.indentLine(f5.from().line+1,null,true);
fx(f3)
}})
},toggleOverwrite:function(f3){f3.toggleOverwrite()
}};
var e0=J.keyMap={};
e0.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"};
e0.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"};
e0.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars"};
e0.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]};
e0["default"]=b5?e0.macDefault:e0.pcDefault;
function dk(f4){var ga=f4.split(/-(?!$)/),f4=ga[ga.length-1];
var f9,f8,f3,f7;
for(var f6=0;
f6<ga.length-1;
f6++){var f5=ga[f6];
if(/^(cmd|meta|m)$/i.test(f5)){f7=true
}else{if(/^a(lt)?$/i.test(f5)){f9=true
}else{if(/^(c|ctrl|control)$/i.test(f5)){f8=true
}else{if(/^s(hift)$/i.test(f5)){f3=true
}else{throw new Error("Unrecognized modifier name: "+f5)
}}}}}if(f9){f4="Alt-"+f4
}if(f8){f4="Ctrl-"+f4
}if(f7){f4="Cmd-"+f4
}if(f3){f4="Shift-"+f4
}return f4
}J.normalizeKeyMap=function(ga){var f4={};
for(var f9 in ga){if(ga.hasOwnProperty(f9)){var gb=ga[f9];
if(/^(name|fallthrough|(de|at)tach)$/.test(f9)){continue
}if(gb=="..."){delete ga[f9];
continue
}var gc=bQ(f9.split(" "),dk);
for(var f8=0;
f8<gc.length;
f8++){var f6,f5;
if(f8==gc.length-1){f5=f9;
f6=gb
}else{f5=gc.slice(0,f8+1).join(" ");
f6="..."
}var f7=f4[f5];
if(!f7){f4[f5]=f6
}else{if(f7!=f6){throw new Error("Inconsistent bindings for "+f5)
}}}delete ga[f9]
}}for(var f3 in f4){ga[f3]=f4[f3]
}return ga
};
var i=J.lookupKey=function(f5,f8,f7){f8=fL(f8);
var f6=f8.call?f8.call(f5):f8[f5];
if(f6===false){return"nothing"
}if(f6==="..."){return"multi"
}if(f6!=null&&f7(f6)){return"handled"
}if(f8.fallthrough){if(Object.prototype.toString.call(f8.fallthrough)!="[object Array]"){return i(f5,f8.fallthrough,f7)
}for(var f4=0;
f4<f8.fallthrough.length;
f4++){var f3=i(f5,f8.fallthrough[f4],f7);
if(f3){return f3
}}}};
var et=J.isModifierKey=function(f4){var f3=typeof f4=="string"?f4:e6[f4.keyCode];
return f3=="Ctrl"||f3=="Alt"||f3=="Shift"||f3=="Mod"
};
var fi=J.keyName=function(f4,f6){if(dS&&f4.keyCode==34&&f4["char"]){return false
}var f5=e6[f4.keyCode],f3=f5;
if(f3==null||f4.altGraphKey){return false
}if(f4.altKey&&f5!="Alt"){f3="Alt-"+f3
}if((bO?f4.metaKey:f4.ctrlKey)&&f5!="Ctrl"){f3="Ctrl-"+f3
}if((bO?f4.ctrlKey:f4.metaKey)&&f5!="Cmd"){f3="Cmd-"+f3
}if(!f6&&f4.shiftKey&&f5!="Shift"){f3="Shift-"+f3
}return f3
};
function fL(f3){return typeof f3=="string"?e0[f3]:f3
}J.fromTextArea=function(ga,gb){if(!gb){gb={}
}gb.value=ga.value;
if(!gb.tabindex&&ga.tabindex){gb.tabindex=ga.tabindex
}if(!gb.placeholder&&ga.placeholder){gb.placeholder=ga.placeholder
}if(gb.autofocus==null){var f3=dE();
gb.autofocus=f3==ga||ga.getAttribute("autofocus")!=null&&f3==document.body
}function f7(){ga.value=f9.getValue()
}if(ga.form){bV(ga.form,"submit",f7);
if(!gb.leaveSubmitMethodAlone){var f4=ga.form,f8=f4.submit;
try{var f6=f4.submit=function(){f7();
f4.submit=f8;
f4.submit();
f4.submit=f6
}
}catch(f5){}}}ga.style.display="none";
var f9=J(function(gc){ga.parentNode.insertBefore(gc,ga.nextSibling)
},gb);
f9.save=f7;
f9.getTextArea=function(){return ga
};
f9.toTextArea=function(){f9.toTextArea=isNaN;
f7();
ga.parentNode.removeChild(f9.getWrapperElement());
ga.style.display="";
if(ga.form){d3(ga.form,"submit",f7);
if(typeof ga.form.submit=="function"){ga.form.submit=f8
}}};
return f9
};
var eK=J.StringStream=function(f3,f4){this.pos=this.start=0;
this.string=f3;
this.tabSize=f4||8;
this.lastColumnPos=this.lastColumnValue=0;
this.lineStart=0
};
eK.prototype={eol:function(){return this.pos>=this.string.length
},sol:function(){return this.pos==this.lineStart
},peek:function(){return this.string.charAt(this.pos)||undefined
},next:function(){if(this.pos<this.string.length){return this.string.charAt(this.pos++)
}},eat:function(f3){var f5=this.string.charAt(this.pos);
if(typeof f3=="string"){var f4=f5==f3
}else{var f4=f5&&(f3.test?f3.test(f5):f3(f5))
}if(f4){++this.pos;
return f5
}},eatWhile:function(f3){var f4=this.pos;
while(this.eat(f3)){}return this.pos>f4
},eatSpace:function(){var f3=this.pos;
while(/[\s\u00a0]/.test(this.string.charAt(this.pos))){++this.pos
}return this.pos>f3
},skipToEnd:function(){this.pos=this.string.length
},skipTo:function(f3){var f4=this.string.indexOf(f3,this.pos);
if(f4>-1){this.pos=f4;
return true
}},backUp:function(f3){this.pos-=f3
},column:function(){if(this.lastColumnPos<this.start){this.lastColumnValue=bR(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue);
this.lastColumnPos=this.start
}return this.lastColumnValue-(this.lineStart?bR(this.string,this.lineStart,this.tabSize):0)
},indentation:function(){return bR(this.string,null,this.tabSize)-(this.lineStart?bR(this.string,this.lineStart,this.tabSize):0)
},match:function(f7,f4,f3){if(typeof f7=="string"){var f8=function(f9){return f3?f9.toLowerCase():f9
};
var f6=this.string.substr(this.pos,f7.length);
if(f8(f6)==f8(f7)){if(f4!==false){this.pos+=f7.length
}return true
}}else{var f5=this.string.slice(this.pos).match(f7);
if(f5&&f5.index>0){return null
}if(f5&&f4!==false){this.pos+=f5[0].length
}return f5
}},current:function(){return this.string.slice(this.start,this.pos)
},hideFirstChars:function(f4,f3){this.lineStart+=f4;
try{return f3()
}finally{this.lineStart-=f4
}}};
var Q=J.TextMarker=function(f4,f3){this.lines=[];
this.type=f3;
this.doc=f4
};
bw(Q);
Q.prototype.clear=function(){if(this.explicitlyCleared){return
}var ga=this.doc.cm,f4=ga&&!ga.curOp;
if(f4){cF(ga)
}if(e8(this,"clear")){var gb=this.find();
if(gb){ad(this,"clear",gb.from,gb.to)
}}var f5=null,f8=null;
for(var f6=0;
f6<this.lines.length;
++f6){var gc=this.lines[f6];
var f9=eZ(gc.markedSpans,this);
if(ga&&!this.collapsed){S(ga,bL(gc),"text")
}else{if(ga){if(f9.to!=null){f8=bL(gc)
}if(f9.from!=null){f5=bL(gc)
}}}gc.markedSpans=ey(gc.markedSpans,f9);
if(f9.from==null&&this.collapsed&&!fn(this.doc,gc)&&ga){fR(gc,aS(ga.display))
}}if(ga&&this.collapsed&&!ga.options.lineWrapping){for(var f6=0;
f6<this.lines.length;
++f6){var f3=z(this.lines[f6]),f7=ec(f3);
if(f7>ga.display.maxLineLength){ga.display.maxLine=f3;
ga.display.maxLineLength=f7;
ga.display.maxLineChanged=true
}}}if(f5!=null&&ga&&this.collapsed){ag(ga,f5,f8+1)
}this.lines.length=0;
this.explicitlyCleared=true;
if(this.atomic&&this.doc.cantEdit){this.doc.cantEdit=false;
if(ga){eo(ga.doc)
}}if(ga){ad(ga,"markerCleared",ga,this)
}if(f4){al(ga)
}if(this.parent){this.parent.clear()
}};
Q.prototype.find=function(f6,f4){if(f6==null&&this.type=="bookmark"){f6=1
}var f9,f8;
for(var f5=0;
f5<this.lines.length;
++f5){var f3=this.lines[f5];
var f7=eZ(f3.markedSpans,this);
if(f7.from!=null){f9=X(f4?f3:bL(f3),f7.from);
if(f6==-1){return f9
}}if(f7.to!=null){f8=X(f4?f3:bL(f3),f7.to);
if(f6==1){return f8
}}}return f9&&{from:f9,to:f8}
};
Q.prototype.changed=function(){var f5=this.find(-1,true),f4=this,f3=this.doc.cm;
if(!f5||!f3){return
}cJ(f3,function(){var f7=f5.line,f8=bL(f5.line);
var f6=e1(f3,f8);
if(f6){at(f6);
f3.curOp.selectionChanged=f3.curOp.forceUpdate=true
}f3.curOp.updateMaxLine=true;
if(!fn(f4.doc,f7)&&f4.height!=null){var ga=f4.height;
f4.height=null;
var f9=cT(f4)-ga;
if(f9){fR(f7,f7.height+f9)
}}})
};
Q.prototype.attachLine=function(f3){if(!this.lines.length&&this.doc.cm){var f4=this.doc.cm.curOp;
if(!f4.maybeHiddenMarkers||dc(f4.maybeHiddenMarkers,this)==-1){(f4.maybeUnhiddenMarkers||(f4.maybeUnhiddenMarkers=[])).push(this)
}}this.lines.push(f3)
};
Q.prototype.detachLine=function(f3){this.lines.splice(dc(this.lines,f3),1);
if(!this.lines.length&&this.doc.cm){var f4=this.doc.cm.curOp;
(f4.maybeHiddenMarkers||(f4.maybeHiddenMarkers=[])).push(this)
}};
var a0=0;
function ew(gb,f9,ga,gd,f7){if(gd&&gd.shared){return P(gb,f9,ga,gd,f7)
}if(gb.cm&&!gb.cm.curOp){return cX(gb.cm,ew)(gb,f9,ga,gd,f7)
}var f6=new Q(gb,f7),gc=cd(f9,ga);
if(gd){aJ(gd,f6,false)
}if(gc>0||gc==0&&f6.clearWhenEmpty!==false){return f6
}if(f6.replacedWith){f6.collapsed=true;
f6.widgetNode=fN("span",[f6.replacedWith],"CodeMirror-widget");
if(!gd.handleMouseEvents){f6.widgetNode.ignoreEvents=true
}if(gd.insertLeft){f6.widgetNode.insertLeft=true
}}if(f6.collapsed){if(A(gb,f9.line,f9,ga,f6)||f9.line!=ga.line&&A(gb,ga.line,f9,ga,f6)){throw new Error("Inserting collapsed marker partially overlapping an existing one")
}a2=true
}if(f6.addToHistory){fD(gb,{from:f9,to:ga,origin:"markText"},gb.sel,NaN)
}var f4=f9.line,f8=gb.cm,f3;
gb.iter(f4,ga.line+1,function(ge){if(f8&&f6.collapsed&&!f8.options.lineWrapping&&z(ge)==f8.display.maxLine){f3=true
}if(f6.collapsed&&f4!=f9.line){fR(ge,0)
}cb(ge,new d8(f6,f4==f9.line?f9.ch:null,f4==ga.line?ga.ch:null));
++f4
});
if(f6.collapsed){gb.iter(f9.line,ga.line+1,function(ge){if(fn(gb,ge)){fR(ge,0)
}})
}if(f6.clearOnEnter){bV(f6,"beforeCursorEnter",function(){f6.clear()
})
}if(f6.readOnly){fY=true;
if(gb.history.done.length||gb.history.undone.length){gb.clearHistory()
}}if(f6.collapsed){f6.id=++a0;
f6.atomic=true
}if(f8){if(f3){f8.curOp.updateMaxLine=true
}if(f6.collapsed){ag(f8,f9.line,ga.line+1)
}else{if(f6.className||f6.title||f6.startStyle||f6.endStyle){for(var f5=f9.line;
f5<=ga.line;
f5++){S(f8,f5,"text")
}}}if(f6.atomic){eo(f8.doc)
}ad(f8,"markerAdded",f8,f6)
}return f6
}var y=J.SharedTextMarker=function(f5,f4){this.markers=f5;
this.primary=f4;
for(var f3=0;
f3<f5.length;
++f3){f5[f3].parent=this
}};
bw(y);
y.prototype.clear=function(){if(this.explicitlyCleared){return
}this.explicitlyCleared=true;
for(var f3=0;
f3<this.markers.length;
++f3){this.markers[f3].clear()
}ad(this,"clear")
};
y.prototype.find=function(f4,f3){return this.primary.find(f4,f3)
};
function P(f7,ga,f9,f3,f5){f3=aJ(f3);
f3.shared=false;
var f8=[ew(f7,ga,f9,f3,f5)],f4=f8[0];
var f6=f3.widgetNode;
dX(f7,function(gc){if(f6){f3.widgetNode=f6.cloneNode(true)
}f8.push(ew(gc,fA(gc,ga),fA(gc,f9),f3,f5));
for(var gb=0;
gb<gc.linked.length;
++gb){if(gc.linked[gb].isParent){return
}}f4=fy(f8)
});
return new y(f8,f4)
}function eG(f3){return f3.findMarks(X(f3.first,0),f3.clipPos(X(f3.lastLine())),function(f4){return f4.parent
})
}function dw(f8,f9){for(var f6=0;
f6<f9.length;
f6++){var f4=f9[f6],ga=f4.find();
var f3=f8.clipPos(ga.from),f7=f8.clipPos(ga.to);
if(cd(f3,f7)){var f5=ew(f8,f3,f7,f4.primary,f4.primary.type);
f4.markers.push(f5);
f5.parent=f4
}}}function ee(f6){for(var f5=0;
f5<f6.length;
f5++){var f3=f6[f5],f8=[f3.primary.doc];
dX(f3.primary.doc,function(f9){f8.push(f9)
});
for(var f4=0;
f4<f3.markers.length;
f4++){var f7=f3.markers[f4];
if(dc(f8,f7.doc)==-1){f7.parent=null;
f3.markers.splice(f4--,1)
}}}}function d8(f3,f5,f4){this.marker=f3;
this.from=f5;
this.to=f4
}function eZ(f5,f3){if(f5){for(var f4=0;
f4<f5.length;
++f4){var f6=f5[f4];
if(f6.marker==f3){return f6
}}}}function ey(f4,f5){for(var f6,f3=0;
f3<f4.length;
++f3){if(f4[f3]!=f5){(f6||(f6=[])).push(f4[f3])
}}return f6
}function cb(f3,f4){f3.markedSpans=f3.markedSpans?f3.markedSpans.concat([f4]):[f4];
f4.marker.attachLine(f3)
}function aM(f4,f5,f9){if(f4){for(var f7=0,ga;
f7<f4.length;
++f7){var gb=f4[f7],f8=gb.marker;
var f3=gb.from==null||(f8.inclusiveLeft?gb.from<=f5:gb.from<f5);
if(f3||gb.from==f5&&f8.type=="bookmark"&&(!f9||!gb.marker.insertLeft)){var f6=gb.to==null||(f8.inclusiveRight?gb.to>=f5:gb.to>f5);
(ga||(ga=[])).push(new d8(f8,gb.from,f6?null:gb.to))
}}}return ga
}function az(f4,f6,f9){if(f4){for(var f7=0,ga;
f7<f4.length;
++f7){var gb=f4[f7],f8=gb.marker;
var f5=gb.to==null||(f8.inclusiveRight?gb.to>=f6:gb.to>f6);
if(f5||gb.from==f6&&f8.type=="bookmark"&&(!f9||gb.marker.insertLeft)){var f3=gb.from==null||(f8.inclusiveLeft?gb.from<=f6:gb.from<f6);
(ga||(ga=[])).push(new d8(f8,f3?null:gb.from-f6,gb.to==null?null:gb.to-f6))
}}}return ga
}function ea(gf,gc){var gb=b7(gf,gc.from.line)&&e5(gf,gc.from.line).markedSpans;
var gi=b7(gf,gc.to.line)&&e5(gf,gc.to.line).markedSpans;
if(!gb&&!gi){return null
}var f4=gc.from.ch,f7=gc.to.ch,ga=cd(gc.from,gc.to)==0;
var f9=aM(gb,f4,ga);
var gh=az(gi,f7,ga);
var gg=gc.text.length==1,f5=fy(gc.text).length+(gg?f4:0);
if(f9){for(var f6=0;
f6<f9.length;
++f6){var ge=f9[f6];
if(ge.to==null){var gj=eZ(gh,ge.marker);
if(!gj){ge.to=f4
}else{if(gg){ge.to=gj.to==null?null:gj.to+f5
}}}}}if(gh){for(var f6=0;
f6<gh.length;
++f6){var ge=gh[f6];
if(ge.to!=null){ge.to+=f5
}if(ge.from==null){var gj=eZ(f9,ge.marker);
if(!gj){ge.from=f5;
if(gg){(f9||(f9=[])).push(ge)
}}}else{ge.from+=f5;
if(gg){(f9||(f9=[])).push(ge)
}}}}if(f9){f9=r(f9)
}if(gh&&gh!=f9){gh=r(gh)
}var f8=[f9];
if(!gg){var gd=gc.text.length-2,f3;
if(gd>0&&f9){for(var f6=0;
f6<f9.length;
++f6){if(f9[f6].to==null){(f3||(f3=[])).push(new d8(f9[f6].marker,null,null))
}}}for(var f6=0;
f6<gd;
++f6){f8.push(f3)
}f8.push(gh)
}return f8
}function r(f4){for(var f3=0;
f3<f4.length;
++f3){var f5=f4[f3];
if(f5.from!=null&&f5.from==f5.to&&f5.marker.clearWhenEmpty!==false){f4.splice(f3--,1)
}}if(!f4.length){return null
}return f4
}function dZ(gb,f9){var f3=b2(gb,f9);
var gc=ea(gb,f9);
if(!f3){return gc
}if(!gc){return f3
}for(var f6=0;
f6<f3.length;
++f6){var f7=f3[f6],f8=gc[f6];
if(f7&&f8){spans:for(var f5=0;
f5<f8.length;
++f5){var ga=f8[f5];
for(var f4=0;
f4<f7.length;
++f4){if(f7[f4].marker==ga.marker){continue spans
}}f7.push(ga)
}}else{if(f8){f3[f6]=f8
}}}return f3
}function cE(gf,gd,ge){var f7=null;
gf.iter(gd.line,ge.line+1,function(gg){if(gg.markedSpans){for(var gh=0;
gh<gg.markedSpans.length;
++gh){var gi=gg.markedSpans[gh].marker;
if(gi.readOnly&&(!f7||dc(f7,gi)==-1)){(f7||(f7=[])).push(gi)
}}}});
if(!f7){return null
}var f8=[{from:gd,to:ge}];
for(var f9=0;
f9<f7.length;
++f9){var ga=f7[f9],f5=ga.find(0);
for(var f6=0;
f6<f8.length;
++f6){var f4=f8[f6];
if(cd(f4.to,f5.from)<0||cd(f4.from,f5.to)>0){continue
}var gc=[f6,1],f3=cd(f4.from,f5.from),gb=cd(f4.to,f5.to);
if(f3<0||!ga.inclusiveLeft&&!f3){gc.push({from:f4.from,to:f5.from})
}if(gb>0||!ga.inclusiveRight&&!gb){gc.push({from:f5.to,to:f4.to})
}f8.splice.apply(f8,gc);
f6+=gc.length-1
}}return f8
}function fU(f3){var f5=f3.markedSpans;
if(!f5){return
}for(var f4=0;
f4<f5.length;
++f4){f5[f4].marker.detachLine(f3)
}f3.markedSpans=null
}function cY(f3,f5){if(!f5){return
}for(var f4=0;
f4<f5.length;
++f4){f5[f4].marker.attachLine(f3)
}f3.markedSpans=f5
}function w(f3){return f3.inclusiveLeft?-1:0
}function bU(f3){return f3.inclusiveRight?1:0
}function dG(f6,f4){var f8=f6.lines.length-f4.lines.length;
if(f8!=0){return f8
}var f5=f6.find(),f9=f4.find();
var f3=cd(f5.from,f9.from)||w(f6)-w(f4);
if(f3){return -f3
}var f7=cd(f5.to,f9.to)||bU(f6)-bU(f4);
if(f7){return f7
}return f4.id-f6.id
}function a1(f4,f8){var f3=a2&&f4.markedSpans,f7;
if(f3){for(var f6,f5=0;
f5<f3.length;
++f5){f6=f3[f5];
if(f6.marker.collapsed&&(f8?f6.from:f6.to)==null&&(!f7||dG(f7,f6.marker)<0)){f7=f6.marker
}}}return f7
}function eF(f3){return a1(f3,true)
}function el(f3){return a1(f3,false)
}function A(gb,f5,f9,ga,f7){var ge=e5(gb,f5);
var f3=a2&&ge.markedSpans;
if(f3){for(var f6=0;
f6<f3.length;
++f6){var f4=f3[f6];
if(!f4.marker.collapsed){continue
}var gd=f4.marker.find(0);
var gc=cd(gd.from,f9)||w(f4.marker)-w(f7);
var f8=cd(gd.to,ga)||bU(f4.marker)-bU(f7);
if(gc>=0&&f8<=0||gc<=0&&f8>=0){continue
}if(gc<=0&&(cd(gd.to,f9)>0||(f4.marker.inclusiveRight&&f7.inclusiveLeft))||gc>=0&&(cd(gd.from,ga)<0||(f4.marker.inclusiveLeft&&f7.inclusiveRight))){return true
}}}}function z(f4){var f3;
while(f3=eF(f4)){f4=f3.find(-1,true).line
}return f4
}function h(f5){var f3,f4;
while(f3=el(f5)){f5=f3.find(1,true).line;
(f4||(f4=[])).push(f5)
}return f4
}function aR(f6,f4){var f3=e5(f6,f4),f5=z(f3);
if(f3==f5){return f4
}return bL(f5)
}function dT(f6,f5){if(f5>f6.lastLine()){return f5
}var f4=e5(f6,f5),f3;
if(!fn(f6,f4)){return f5
}while(f3=el(f4)){f4=f3.find(1,true).line
}return bL(f4)+1
}function fn(f7,f4){var f3=a2&&f4.markedSpans;
if(f3){for(var f6,f5=0;
f5<f3.length;
++f5){f6=f3[f5];
if(!f6.marker.collapsed){continue
}if(f6.from==null){return true
}if(f6.marker.widgetNode){continue
}if(f6.from==0&&f6.marker.inclusiveLeft&&U(f7,f4,f6)){return true
}}}}function U(f8,f4,f6){if(f6.to==null){var f3=f6.marker.find(1,true);
return U(f8,f3.line,eZ(f3.line.markedSpans,f6.marker))
}if(f6.marker.inclusiveRight&&f6.to==f4.text.length){return true
}for(var f7,f5=0;
f5<f4.markedSpans.length;
++f5){f7=f4.markedSpans[f5];
if(f7.marker.collapsed&&!f7.marker.widgetNode&&f7.from==f6.to&&(f7.to==null||f7.to!=f6.from)&&(f7.marker.inclusiveLeft||f6.marker.inclusiveRight)&&U(f8,f4,f7)){return true
}}}var dt=J.LineWidget=function(f3,f6,f4){if(f4){for(var f5 in f4){if(f4.hasOwnProperty(f5)){this[f5]=f4[f5]
}}}this.cm=f3;
this.node=f6
};
bw(dt);
function dQ(f3,f4,f5){if(bK(f4)<((f3.curOp&&f3.curOp.scrollTop)||f3.doc.scrollTop)){cI(f3,null,f5)
}}dt.prototype.clear=function(){var f4=this.cm,f6=this.line.widgets,f5=this.line,f8=bL(f5);
if(f8==null||!f6){return
}for(var f7=0;
f7<f6.length;
++f7){if(f6[f7]==this){f6.splice(f7--,1)
}}if(!f6.length){f5.widgets=null
}var f3=cT(this);
cJ(f4,function(){dQ(f4,f5,-f3);
S(f4,f8,"widget");
fR(f5,Math.max(0,f5.height-f3))
})
};
dt.prototype.changed=function(){var f4=this.height,f3=this.cm,f5=this.line;
this.height=null;
var f6=cT(this)-f4;
if(!f6){return
}cJ(f3,function(){f3.curOp.forceUpdate=true;
dQ(f3,f5,f6);
fR(f5,f5.height+f6)
})
};
function cT(f4){if(f4.height!=null){return f4.height
}if(!fW(document.body,f4.node)){var f3="position: relative;";
if(f4.coverGutter){f3+="margin-left: -"+f4.cm.getGutterElement().offsetWidth+"px;"
}bP(f4.cm.display.measure,fN("div",[f4.node],null,f3))
}return f4.height=f4.node.offsetHeight
}function bF(f3,f7,f5,f4){var f6=new dt(f3,f5,f4);
if(f6.noHScroll){f3.display.alignWidgets=true
}ep(f3.doc,f7,"widget",function(f9){var ga=f9.widgets||(f9.widgets=[]);
if(f6.insertAt==null){ga.push(f6)
}else{ga.splice(Math.min(ga.length-1,Math.max(0,f6.insertAt)),0,f6)
}f6.line=f9;
if(!fn(f3.doc,f9)){var f8=bK(f9)<f3.doc.scrollTop;
fR(f9,f9.height+cT(f6));
if(f8){cI(f3,null,f6.height)
}f3.curOp.forceUpdate=true
}return true
});
return f6
}var fT=J.Line=function(f5,f4,f3){this.text=f5;
cY(this,f4);
this.height=f3?f3(this):1
};
bw(fT);
fT.prototype.lineNo=function(){return bL(this)
};
function ed(f4,f7,f5,f3){f4.text=f7;
if(f4.stateAfter){f4.stateAfter=null
}if(f4.styles){f4.styles=null
}if(f4.order!=null){f4.order=null
}fU(f4);
cY(f4,f5);
var f6=f3?f3(f4):1;
if(f6!=f4.height){fR(f4,f6)
}}function bz(f3){f3.parent=null;
fU(f3)
}function dd(f5,f4){if(f5){for(;
;
){var f3=f5.match(/(?:^|\s+)line-(background-)?(\S+)/);
if(!f3){break
}f5=f5.slice(0,f3.index)+f5.slice(f3.index+f3[0].length);
var f6=f3[1]?"bgClass":"textClass";
if(f4[f6]==null){f4[f6]=f3[2]
}else{if(!(new RegExp("(?:^|s)"+f3[2]+"(?:$|s)")).test(f4[f6])){f4[f6]+=" "+f3[2]
}}}}return f5
}function fh(f5,f4){if(f5.blankLine){return f5.blankLine(f4)
}if(!f5.innerMode){return
}var f3=J.innerMode(f5,f4);
if(f3.mode.blankLine){return f3.mode.blankLine(f3.state)
}}function es(f8,f7,f6,f3){for(var f4=0;
f4<10;
f4++){if(f3){f3[0]=J.innerMode(f8,f6).mode
}var f5=f8.token(f7,f6);
if(f7.pos>f7.start){return f5
}}throw new Error("Mode "+f8.name+" failed to advance stream.")
}function cp(gc,ga,f7,f6){function f3(gf){return{start:gd.start,end:gd.pos,string:gd.current(),type:f5||null,state:gf?b1(gb.mode,f4):f4}
}var gb=gc.doc,f8=gb.mode,f5;
ga=fA(gb,ga);
var ge=e5(gb,ga.line),f4=ds(gc,ga.line,f7);
var gd=new eK(ge.text,gc.options.tabSize),f9;
if(f6){f9=[]
}while((f6||gd.pos<ga.ch)&&!gd.eol()){gd.start=gd.pos;
f5=es(f8,gd,f4);
if(f6){f9.push(f3(true))
}}return f6?f9:f3()
}function x(gd,gf,f8,f4,f9,f6,f7){var f5=f8.flattenSpans;
if(f5==null){f5=gd.options.flattenSpans
}var gb=0,ga=null;
var ge=new eK(gf,gd.options.tabSize),f3;
var gh=gd.options.addModeClass&&[null];
if(gf==""){dd(fh(f8,f4),f6)
}while(!ge.eol()){if(ge.pos>gd.options.maxHighlightLength){f5=false;
if(f7){dn(gd,gf,f4,ge.pos)
}ge.pos=gf.length;
f3=null
}else{f3=dd(es(f8,ge,f4,gh),f6)
}if(gh){var gg=gh[0].name;
if(gg){f3="m-"+(f3?gg+" "+f3:gg)
}}if(!f5||ga!=f3){if(gb<ge.start){f9(ge.start,ga)
}gb=ge.start;
ga=f3
}ge.start=ge.pos
}while(gb<ge.pos){var gc=Math.min(ge.pos,gb+50000);
f9(gc,ga);
gb=gc
}}function fq(ga,gc,f3,f7){var gb=[ga.state.modeGen],f6={};
x(ga,gc.text,ga.doc.mode,f3,function(gd,ge){gb.push(gd,ge)
},f6,f7);
for(var f4=0;
f4<ga.state.overlays.length;
++f4){var f8=ga.state.overlays[f4],f9=1,f5=0;
x(ga,gc.text,f8.mode,true,function(gd,gf){var gh=f9;
while(f5<gd){var ge=gb[f9];
if(ge>gd){gb.splice(f9,1,gd,gb[f9+1],ge)
}f9+=2;
f5=Math.min(gd,ge)
}if(!gf){return
}if(f8.opaque){gb.splice(gh,f9-gh,gd,"cm-overlay "+gf);
f9=gh+2
}else{for(;
gh<f9;
gh+=2){var gg=gb[gh+1];
gb[gh+1]=(gg?gg+" ":"")+"cm-overlay "+gf
}}},f6)
}return{styles:gb,classes:f6.bgClass||f6.textClass?f6:null}
}function c1(f4,f5,f6){if(!f5.styles||f5.styles[0]!=f4.state.modeGen){var f3=fq(f4,f5,f5.stateAfter=ds(f4,bL(f5)));
f5.styles=f3.styles;
if(f3.classes){f5.styleClasses=f3.classes
}else{if(f5.styleClasses){f5.styleClasses=null
}}if(f6===f4.doc.frontier){f4.doc.frontier++
}}return f5.styles
}function dn(f3,f8,f5,f4){var f7=f3.doc.mode;
var f6=new eK(f8,f3.options.tabSize);
f6.start=f6.pos=f4||0;
if(f8==""){fh(f7,f5)
}while(!f6.eol()&&f6.pos<=f3.options.maxHighlightLength){es(f7,f6,f5);
f6.start=f6.pos
}}var dM={},bZ={};
function eN(f5,f4){if(!f5||/^\s*$/.test(f5)){return null
}var f3=f4.addModeClass?bZ:dM;
return f3[f5]||(f3[f5]=f5.replace(/\S+/g,"cm-$&"))
}function eI(f4,f8){var f9=fN("span",null,null,cV?"padding-right: .1px":null);
var f6={pre:fN("pre",[f9]),content:f9,col:0,pos:0,cm:f4};
f8.measure={};
for(var f7=0;
f7<=(f8.rest?f8.rest.length:0);
f7++){var f5=f7?f8.rest[f7-1]:f8.line,f3;
f6.pos=0;
f6.addToken=u;
if((dA||cV)&&f4.getOption("lineWrapping")){f6.addToken=fw(f6.addToken)
}if(bM(f4.display.measure)&&(f3=a(f5))){f6.addToken=V(f6.addToken,f3)
}f6.map=[];
var ga=f8!=f4.display.externalMeasured&&bL(f5);
bm(f5,f6,c1(f4,f5,ga));
if(f5.styleClasses){if(f5.styleClasses.bgClass){f6.bgClass=fI(f5.styleClasses.bgClass,f6.bgClass||"")
}if(f5.styleClasses.textClass){f6.textClass=fI(f5.styleClasses.textClass,f6.textClass||"")
}}if(f6.map.length==0){f6.map.push(0,0,f6.content.appendChild(bl(f4.display.measure)))
}if(f7==0){f8.measure.map=f6.map;
f8.measure.cache={}
}else{(f8.measure.maps||(f8.measure.maps=[])).push(f6.map);
(f8.measure.caches||(f8.measure.caches=[])).push({})
}}if(cV&&/\bcm-tab\b/.test(f6.content.lastChild.className)){f6.content.className="cm-tab-wrap-hack"
}aB(f4,"renderLine",f4,f8.line,f6.pre);
if(f6.pre.className){f6.textClass=fI(f6.pre.className,f6.textClass||"")
}return f6
}function e2(f4){var f3=fN("span","\u2022","cm-invalidchar");
f3.title="\\u"+f4.charCodeAt(0).toString(16);
return f3
}function u(f8,gi,f3,f6,gj,gh){if(!gi){return
}var gd=f8.cm.options.specialChars,gc=false;
if(!gd.test(gi)){f8.col+=gi.length;
var gb=document.createTextNode(gi);
f8.map.push(f8.pos,f8.pos+gi.length,gb);
if(dA&&l<9){gc=true
}f8.pos+=gi.length
}else{var gb=document.createDocumentFragment(),gf=0;
while(true){gd.lastIndex=gf;
var f4=gd.exec(gi);
var ga=f4?f4.index-gf:gi.length-gf;
if(ga){var f7=document.createTextNode(gi.slice(gf,gf+ga));
if(dA&&l<9){gb.appendChild(fN("span",[f7]))
}else{gb.appendChild(f7)
}f8.map.push(f8.pos,f8.pos+ga,f7);
f8.col+=ga;
f8.pos+=ga
}if(!f4){break
}gf+=ga+1;
if(f4[0]=="\t"){var f9=f8.cm.options.tabSize,ge=f9-f8.col%f9;
var f7=gb.appendChild(fN("span",co(ge),"cm-tab"));
f8.col+=ge
}else{var f7=f8.cm.options.specialCharPlaceholder(f4[0]);
if(dA&&l<9){gb.appendChild(fN("span",[f7]))
}else{gb.appendChild(f7)
}f8.col+=1
}f8.map.push(f8.pos,f8.pos+1,f7);
f8.pos++
}}if(f3||f6||gj||gc){var gg=f3||"";
if(f6){gg+=f6
}if(gj){gg+=gj
}var f5=fN("span",[gb],gg);
if(gh){f5.title=gh
}return f8.content.appendChild(f5)
}f8.content.appendChild(gb)
}function fw(f3){function f4(f5){var f6=" ";
for(var f7=0;
f7<f5.length-2;
++f7){f6+=f7%2?" ":"\u00a0"
}f6+=" ";
return f6
}return function(f6,ga,f7,f5,f9,f8){f3(f6,ga.replace(/ {3,}/g,f4),f7,f5,f9,f8)
}
}function V(f4,f3){return function(gb,gd,f5,f9,ge,gc){f5=f5?f5+" cm-force-border":"cm-force-border";
var f6=gb.pos,f8=f6+gd.length;
for(;
;
){for(var ga=0;
ga<f3.length;
ga++){var f7=f3[ga];
if(f7.to>f6&&f7.from<=f6){break
}}if(f7.to>=f8){return f4(gb,gd,f5,f9,ge,gc)
}f4(gb,gd.slice(0,f7.to-f6),f5,f9,null,gc);
f9=null;
gd=gd.slice(f7.to-f6);
f6=f7.to
}}
}function ab(f4,f6,f3,f5){var f7=!f5&&f3.widgetNode;
if(f7){f4.map.push(f4.pos,f4.pos+f6,f7);
f4.content.appendChild(f7)
}f4.pos+=f6
}function bm(gc,gi,gb){var f8=gc.markedSpans,ga=gc.text,gg=0;
if(!f8){for(var gl=1;
gl<gb.length;
gl+=2){gi.addToken(gi,ga.slice(gg,gg=gb[gl]),eN(gb[gl+1],gi.cm.options))
}return
}var gm=ga.length,f7=0,gl=1,ge="",gn;
var gp=0,f3,go,gf,gq,f5;
for(;
;
){if(gp==f7){f3=go=gf=gq="";
f5=null;
gp=Infinity;
var f9=[];
for(var gj=0;
gj<f8.length;
++gj){var gk=f8[gj],gh=gk.marker;
if(gk.from<=f7&&(gk.to==null||gk.to>f7)){if(gk.to!=null&&gp>gk.to){gp=gk.to;
go=""
}if(gh.className){f3+=" "+gh.className
}if(gh.startStyle&&gk.from==f7){gf+=" "+gh.startStyle
}if(gh.endStyle&&gk.to==gp){go+=" "+gh.endStyle
}if(gh.title&&!gq){gq=gh.title
}if(gh.collapsed&&(!f5||dG(f5.marker,gh)<0)){f5=gk
}}else{if(gk.from>f7&&gp>gk.from){gp=gk.from
}}if(gh.type=="bookmark"&&gk.from==f7&&gh.widgetNode){f9.push(gh)
}}if(f5&&(f5.from||0)==f7){ab(gi,(f5.to==null?gm+1:f5.to)-f7,f5.marker,f5.from==null);
if(f5.to==null){return
}}if(!f5&&f9.length){for(var gj=0;
gj<f9.length;
++gj){ab(gi,0,f9[gj])
}}}if(f7>=gm){break
}var gd=Math.min(gm,gp);
while(true){if(ge){var f4=f7+ge.length;
if(!f5){var f6=f4>gd?ge.slice(0,gd-f7):ge;
gi.addToken(gi,f6,gn?gn+f3:f3,gf,f7+f6.length==gp?go:"",gq)
}if(f4>=gd){ge=ge.slice(gd-f7);
f7=gd;
break
}f7=f4;
gf=""
}ge=ga.slice(gg,gg=gb[gl++]);
gn=eN(gb[gl++],gi.cm.options)
}}}function dI(f3,f4){return f4.from.ch==0&&f4.to.ch==0&&fy(f4.text)==""&&(!f3.cm||f3.cm.options.wholeLineUpdateBefore)
}function fp(gg,gb,f3,f7){function gh(gj){return f3?f3[gj]:null
}function f4(gj,gl,gk){ed(gj,gl,gk,f7);
ad(gj,"change",gj,gb)
}var ge=gb.from,gf=gb.to,gi=gb.text;
var gc=e5(gg,ge.line),gd=e5(gg,gf.line);
var ga=fy(gi),f6=gh(gi.length-1),f9=gf.line-ge.line;
if(dI(gg,gb)){for(var f5=0,f8=[];
f5<gi.length-1;
++f5){f8.push(new fT(gi[f5],gh(f5),f7))
}f4(gd,gd.text,f6);
if(f9){gg.remove(ge.line,f9)
}if(f8.length){gg.insert(ge.line,f8)
}}else{if(gc==gd){if(gi.length==1){f4(gc,gc.text.slice(0,ge.ch)+ga+gc.text.slice(gf.ch),f6)
}else{for(var f8=[],f5=1;
f5<gi.length-1;
++f5){f8.push(new fT(gi[f5],gh(f5),f7))
}f8.push(new fT(ga+gc.text.slice(gf.ch),f6,f7));
f4(gc,gc.text.slice(0,ge.ch)+gi[0],gh(0));
gg.insert(ge.line+1,f8)
}}else{if(gi.length==1){f4(gc,gc.text.slice(0,ge.ch)+gi[0]+gd.text.slice(gf.ch),gh(0));
gg.remove(ge.line+1,f9)
}else{f4(gc,gc.text.slice(0,ge.ch)+gi[0],gh(0));
f4(gd,ga+gd.text.slice(gf.ch),f6);
for(var f5=1,f8=[];
f5<gi.length-1;
++f5){f8.push(new fT(gi[f5],gh(f5),f7))
}if(f9>1){gg.remove(ge.line+1,f9-1)
}gg.insert(ge.line+1,f8)
}}}ad(gg,"change",gg,gb)
}function eQ(f4){this.lines=f4;
this.parent=null;
for(var f5=0,f3=0;
f5<f4.length;
++f5){f4[f5].parent=this;
f3+=f4[f5].height
}this.height=f3
}eQ.prototype={chunkSize:function(){return this.lines.length
},removeInner:function(f3,f7){for(var f5=f3,f6=f3+f7;
f5<f6;
++f5){var f4=this.lines[f5];
this.height-=f4.height;
bz(f4);
ad(f4,"delete")
}this.lines.splice(f3,f7)
},collapse:function(f3){f3.push.apply(f3,this.lines)
},insertInner:function(f4,f5,f3){this.height+=f3;
this.lines=this.lines.slice(0,f4).concat(f5).concat(this.lines.slice(f4));
for(var f6=0;
f6<f5.length;
++f6){f5[f6].parent=this
}},iterN:function(f3,f6,f5){for(var f4=f3+f6;
f3<f4;
++f3){if(f5(this.lines[f3])){return true
}}}};
function fo(f6){this.children=f6;
var f5=0,f3=0;
for(var f4=0;
f4<f6.length;
++f4){var f7=f6[f4];
f5+=f7.chunkSize();
f3+=f7.height;
f7.parent=this
}this.size=f5;
this.height=f3;
this.parent=null
}fo.prototype={chunkSize:function(){return this.size
},removeInner:function(f3,ga){this.size-=ga;
for(var f5=0;
f5<this.children.length;
++f5){var f9=this.children[f5],f7=f9.chunkSize();
if(f3<f7){var f6=Math.min(ga,f7-f3),f8=f9.height;
f9.removeInner(f3,f6);
this.height-=f8-f9.height;
if(f7==f6){this.children.splice(f5--,1);
f9.parent=null
}if((ga-=f6)==0){break
}f3=0
}else{f3-=f7
}}if(this.size-ga<25&&(this.children.length>1||!(this.children[0] instanceof eQ))){var f4=[];
this.collapse(f4);
this.children=[new eQ(f4)];
this.children[0].parent=this
}},collapse:function(f3){for(var f4=0;
f4<this.children.length;
++f4){this.children[f4].collapse(f3)
}},insertInner:function(f4,f5,f3){this.size+=f5.length;
this.height+=f3;
for(var f8=0;
f8<this.children.length;
++f8){var ga=this.children[f8],f9=ga.chunkSize();
if(f4<=f9){ga.insertInner(f4,f5,f3);
if(ga.lines&&ga.lines.length>50){while(ga.lines.length>50){var f7=ga.lines.splice(ga.lines.length-25,25);
var f6=new eQ(f7);
ga.height-=f6.height;
this.children.splice(f8+1,0,f6);
f6.parent=this
}this.maybeSpill()
}break
}f4-=f9
}},maybeSpill:function(){if(this.children.length<=10){return
}var f6=this;
do{var f4=f6.children.splice(f6.children.length-5,5);
var f5=new fo(f4);
if(!f6.parent){var f7=new fo(f6.children);
f7.parent=f6;
f6.children=[f7,f5];
f6=f7
}else{f6.size-=f5.size;
f6.height-=f5.height;
var f3=dc(f6.parent.children,f6);
f6.parent.children.splice(f3+1,0,f5)
}f5.parent=f6.parent
}while(f6.children.length>10);
f6.parent.maybeSpill()
},iterN:function(f3,f9,f8){for(var f4=0;
f4<this.children.length;
++f4){var f7=this.children[f4],f6=f7.chunkSize();
if(f3<f6){var f5=Math.min(f9,f6-f3);
if(f7.iterN(f3,f5,f8)){return true
}if((f9-=f5)==0){break
}f3=0
}else{f3-=f6
}}}};
var cq=0;
var ar=J.Doc=function(f5,f4,f3){if(!(this instanceof ar)){return new ar(f5,f4,f3)
}if(f3==null){f3=0
}fo.call(this,[new eQ([new fT("",null)])]);
this.first=f3;
this.scrollTop=this.scrollLeft=0;
this.cantEdit=false;
this.cleanGeneration=1;
this.frontier=f3;
var f6=X(f3,0);
this.sel=eJ(f6);
this.history=new fJ(null);
this.id=++cq;
this.modeOption=f4;
if(typeof f5=="string"){f5=aV(f5)
}fp(this,{from:f6,to:f6,text:f5});
bS(this,eJ(f6),Z)
};
ar.prototype=cj(fo.prototype,{constructor:ar,iter:function(f5,f4,f3){if(f3){this.iterN(f5-this.first,f4-f5,f3)
}else{this.iterN(this.first,this.first+this.size,f5)
}},insert:function(f4,f5){var f3=0;
for(var f6=0;
f6<f5.length;
++f6){f3+=f5[f6].height
}this.insertInner(f4-this.first,f5,f3)
},remove:function(f3,f4){this.removeInner(f3-this.first,f4)
},getValue:function(f4){var f3=aX(this,this.first,this.first+this.size);
if(f4===false){return f3
}return f3.join(f4||"\n")
},setValue:cB(function(f4){var f5=X(this.first,0),f3=this.first+this.size-1;
bb(this,{from:f5,to:X(f3,e5(this,f3).text.length),text:aV(f4),origin:"setValue"},true);
bS(this,eJ(f5))
}),replaceRange:function(f4,f6,f5,f3){f6=fA(this,f6);
f5=f5?fA(this,f5):f6;
aW(this,f4,f6,f5,f3)
},getRange:function(f6,f5,f4){var f3=fP(this,fA(this,f6),fA(this,f5));
if(f4===false){return f3
}return f3.join(f4||"\n")
},getLine:function(f4){var f3=this.getLineHandle(f4);
return f3&&f3.text
},getLineHandle:function(f3){if(b7(this,f3)){return e5(this,f3)
}},getLineNumber:function(f3){return bL(f3)
},getLineHandleVisualStart:function(f3){if(typeof f3=="number"){f3=e5(this,f3)
}return z(f3)
},lineCount:function(){return this.size
},firstLine:function(){return this.first
},lastLine:function(){return this.first+this.size-1
},clipPos:function(f3){return fA(this,f3)
},getCursor:function(f5){var f3=this.sel.primary(),f4;
if(f5==null||f5=="head"){f4=f3.head
}else{if(f5=="anchor"){f4=f3.anchor
}else{if(f5=="end"||f5=="to"||f5===false){f4=f3.to()
}else{f4=f3.from()
}}}return f4
},listSelections:function(){return this.sel.ranges
},somethingSelected:function(){return this.sel.somethingSelected()
},setCursor:cB(function(f3,f5,f4){H(this,fA(this,typeof f3=="number"?X(f3,f5||0):f3),null,f4)
}),setSelection:cB(function(f4,f5,f3){H(this,fA(this,f4),fA(this,f5||f4),f3)
}),extendSelection:cB(function(f5,f3,f4){fK(this,fA(this,f5),f3&&fA(this,f3),f4)
}),extendSelections:cB(function(f4,f3){av(this,dP(this,f4,f3))
}),extendSelectionsBy:cB(function(f4,f3){av(this,bQ(this.sel.ranges,f4),f3)
}),setSelections:cB(function(f3,f7,f5){if(!f3.length){return
}for(var f6=0,f4=[];
f6<f3.length;
f6++){f4[f6]=new dO(fA(this,f3[f6].anchor),fA(this,f3[f6].head))
}if(f7==null){f7=Math.min(f3.length-1,this.sel.primIndex)
}bS(this,cv(f4,f7),f5)
}),addSelection:cB(function(f5,f6,f4){var f3=this.sel.ranges.slice(0);
f3.push(new dO(fA(this,f5),fA(this,f6||f5)));
bS(this,cv(f3,f3.length-1),f4)
}),getSelection:function(f7){var f4=this.sel.ranges,f3;
for(var f5=0;
f5<f4.length;
f5++){var f6=fP(this,f4[f5].from(),f4[f5].to());
f3=f3?f3.concat(f6):f6
}if(f7===false){return f3
}else{return f3.join(f7||"\n")
}},getSelections:function(f7){var f6=[],f3=this.sel.ranges;
for(var f4=0;
f4<f3.length;
f4++){var f5=fP(this,f3[f4].from(),f3[f4].to());
if(f7!==false){f5=f5.join(f7||"\n")
}f6[f4]=f5
}return f6
},replaceSelection:function(f5,f7,f3){var f6=[];
for(var f4=0;
f4<this.sel.ranges.length;
f4++){f6[f4]=f5
}this.replaceSelections(f6,f7,f3||"+input")
},replaceSelections:cB(function(f8,ga,f5){var f7=[],f9=this.sel;
for(var f6=0;
f6<f9.ranges.length;
f6++){var f4=f9.ranges[f6];
f7[f6]={from:f4.from(),to:f4.to(),text:aV(f8[f6]),origin:f5}
}var f3=ga&&ga!="end"&&ae(this,f7,ga);
for(var f6=f7.length-1;
f6>=0;
f6--){bb(this,f7[f6])
}if(f3){eX(this,f3)
}else{if(this.cm){fx(this.cm)
}}}),undo:cB(function(){b6(this,"undo")
}),redo:cB(function(){b6(this,"redo")
}),undoSelection:cB(function(){b6(this,"undo",true)
}),redoSelection:cB(function(){b6(this,"redo",true)
}),setExtending:function(f3){this.extend=f3
},getExtending:function(){return this.extend
},historySize:function(){var f6=this.history,f3=0,f5=0;
for(var f4=0;
f4<f6.done.length;
f4++){if(!f6.done[f4].ranges){++f3
}}for(var f4=0;
f4<f6.undone.length;
f4++){if(!f6.undone[f4].ranges){++f5
}}return{undo:f3,redo:f5}
},clearHistory:function(){this.history=new fJ(this.history.maxGeneration)
},markClean:function(){this.cleanGeneration=this.changeGeneration(true)
},changeGeneration:function(f3){if(f3){this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null
}return this.history.generation
},isClean:function(f3){return this.history.generation==(f3||this.cleanGeneration)
},getHistory:function(){return{done:bN(this.history.done),undone:bN(this.history.undone)}
},setHistory:function(f4){var f3=this.history=new fJ(this.history.maxGeneration);
f3.done=bN(f4.done.slice(0),null,true);
f3.undone=bN(f4.undone.slice(0),null,true)
},addLineClass:cB(function(f5,f4,f3){return ep(this,f5,f4=="gutter"?"gutter":"class",function(f6){var f7=f4=="text"?"textClass":f4=="background"?"bgClass":f4=="gutter"?"gutterClass":"wrapClass";
if(!f6[f7]){f6[f7]=f3
}else{if(T(f3).test(f6[f7])){return false
}else{f6[f7]+=" "+f3
}}return true
})
}),removeLineClass:cB(function(f5,f4,f3){return ep(this,f5,"class",function(f7){var ga=f4=="text"?"textClass":f4=="background"?"bgClass":f4=="gutter"?"gutterClass":"wrapClass";
var f9=f7[ga];
if(!f9){return false
}else{if(f3==null){f7[ga]=null
}else{var f8=f9.match(T(f3));
if(!f8){return false
}var f6=f8.index+f8[0].length;
f7[ga]=f9.slice(0,f8.index)+(!f8.index||f6==f9.length?"":" ")+f9.slice(f6)||null
}}return true
})
}),markText:function(f5,f4,f3){return ew(this,fA(this,f5),fA(this,f4),f3,"range")
},setBookmark:function(f5,f3){var f4={replacedWith:f3&&(f3.nodeType==null?f3.widget:f3),insertLeft:f3&&f3.insertLeft,clearWhenEmpty:false,shared:f3&&f3.shared};
f5=fA(this,f5);
return ew(this,f5,f5,f4,"bookmark")
},findMarksAt:function(f7){f7=fA(this,f7);
var f6=[],f4=e5(this,f7.line).markedSpans;
if(f4){for(var f3=0;
f3<f4.length;
++f3){var f5=f4[f3];
if((f5.from==null||f5.from<=f7.ch)&&(f5.to==null||f5.to>=f7.ch)){f6.push(f5.marker.parent||f5.marker)
}}}return f6
},findMarks:function(f7,f6,f3){f7=fA(this,f7);
f6=fA(this,f6);
var f4=[],f5=f7.line;
this.iter(f7.line,f6.line+1,function(f8){var ga=f8.markedSpans;
if(ga){for(var f9=0;
f9<ga.length;
f9++){var gb=ga[f9];
if(!(f5==f7.line&&f7.ch>gb.to||gb.from==null&&f5!=f7.line||f5==f6.line&&gb.from>f6.ch)&&(!f3||f3(gb.marker))){f4.push(gb.marker.parent||gb.marker)
}}}++f5
});
return f4
},getAllMarks:function(){var f3=[];
this.iter(function(f5){var f4=f5.markedSpans;
if(f4){for(var f6=0;
f6<f4.length;
++f6){if(f4[f6].from!=null){f3.push(f4[f6].marker)
}}}});
return f3
},posFromIndex:function(f4){var f3,f5=this.first;
this.iter(function(f6){var f7=f6.text.length+1;
if(f7>f4){f3=f4;
return true
}f4-=f7;
++f5
});
return fA(this,X(f5,f3))
},indexFromPos:function(f4){f4=fA(this,f4);
var f3=f4.ch;
if(f4.line<this.first||f4.ch<0){return 0
}this.iter(this.first,f4.line,function(f5){f3+=f5.text.length+1
});
return f3
},copy:function(f3){var f4=new ar(aX(this,this.first,this.first+this.size),this.modeOption,this.first);
f4.scrollTop=this.scrollTop;
f4.scrollLeft=this.scrollLeft;
f4.sel=this.sel;
f4.extend=false;
if(f3){f4.history.undoDepth=this.history.undoDepth;
f4.setHistory(this.getHistory())
}return f4
},linkedDoc:function(f3){if(!f3){f3={}
}var f6=this.first,f5=this.first+this.size;
if(f3.from!=null&&f3.from>f6){f6=f3.from
}if(f3.to!=null&&f3.to<f5){f5=f3.to
}var f4=new ar(aX(this,f6,f5),f3.mode||this.modeOption,f6);
if(f3.sharedHist){f4.history=this.history
}(this.linked||(this.linked=[])).push({doc:f4,sharedHist:f3.sharedHist});
f4.linked=[{doc:this,isParent:true,sharedHist:f3.sharedHist}];
dw(f4,eG(this));
return f4
},unlinkDoc:function(f4){if(f4 instanceof J){f4=f4.doc
}if(this.linked){for(var f5=0;
f5<this.linked.length;
++f5){var f6=this.linked[f5];
if(f6.doc!=f4){continue
}this.linked.splice(f5,1);
f4.unlinkDoc(this);
ee(eG(this));
break
}}if(f4.history==this.history){var f3=[f4.id];
dX(f4,function(f7){f3.push(f7.id)
},true);
f4.history=new fJ(null);
f4.history.done=bN(this.history.done,f3);
f4.history.undone=bN(this.history.undone,f3)
}},iterLinkedDocs:function(f3){dX(this,f3)
},getMode:function(){return this.mode
},getEditor:function(){return this.cm
}});
ar.prototype.eachLine=ar.prototype.iter;
var d="iter insert remove copy getEditor".split(" ");
for(var bI in ar.prototype){if(ar.prototype.hasOwnProperty(bI)&&dc(d,bI)<0){J.prototype[bI]=(function(f3){return function(){return f3.apply(this.doc,arguments)
}
})(ar.prototype[bI])
}}bw(ar);
function dX(f6,f5,f4){function f3(gc,ga,f8){if(gc.linked){for(var f9=0;
f9<gc.linked.length;
++f9){var f7=gc.linked[f9];
if(f7.doc==ga){continue
}var gb=f8&&f7.sharedHist;
if(f4&&!gb){continue
}f5(f7.doc,gb);
f3(f7.doc,gc,gb)
}}}f3(f6,null,true)
}function d1(f3,f4){if(f4.cm){throw new Error("This document is already in use.")
}f3.doc=f4;
f4.cm=f3;
Y(f3);
bp(f3);
if(!f3.options.lineWrapping){g(f3)
}f3.options.mode=f4.modeOption;
ag(f3)
}function e5(f6,f8){f8-=f6.first;
if(f8<0||f8>=f6.size){throw new Error("There is no line "+(f8+f6.first)+" in the document.")
}for(var f3=f6;
!f3.lines;
){for(var f4=0;
;
++f4){var f7=f3.children[f4],f5=f7.chunkSize();
if(f8<f5){f3=f7;
break
}f8-=f5
}}return f3.lines[f8]
}function fP(f5,f7,f3){var f4=[],f6=f7.line;
f5.iter(f7.line,f3.line+1,function(f8){var f9=f8.text;
if(f6==f3.line){f9=f9.slice(0,f3.ch)
}if(f6==f7.line){f9=f9.slice(f7.ch)
}f4.push(f9);
++f6
});
return f4
}function aX(f4,f6,f5){var f3=[];
f4.iter(f6,f5,function(f7){f3.push(f7.text)
});
return f3
}function fR(f4,f3){var f5=f3-f4.height;
if(f5){for(var f6=f4;
f6;
f6=f6.parent){f6.height+=f5
}}}function bL(f3){if(f3.parent==null){return null
}var f7=f3.parent,f6=dc(f7.lines,f3);
for(var f4=f7.parent;
f4;
f7=f4,f4=f4.parent){for(var f5=0;
;
++f5){if(f4.children[f5]==f7){break
}f6+=f4.children[f5].chunkSize()
}}return f6+f7.first
}function bE(f5,f8){var ga=f5.first;
outer:do{for(var f6=0;
f6<f5.children.length;
++f6){var f9=f5.children[f6],f7=f9.height;
if(f8<f7){f5=f9;
continue outer
}f8-=f7;
ga+=f9.chunkSize()
}return ga
}while(!f5.lines);
for(var f6=0;
f6<f5.lines.length;
++f6){var f4=f5.lines[f6],f3=f4.height;
if(f8<f3){break
}f8-=f3
}return ga+f6
}function bK(f5){f5=z(f5);
var f7=0,f4=f5.parent;
for(var f6=0;
f6<f4.lines.length;
++f6){var f3=f4.lines[f6];
if(f3==f5){break
}else{f7+=f3.height
}}for(var f8=f4.parent;
f8;
f4=f8,f8=f4.parent){for(var f6=0;
f6<f8.children.length;
++f6){var f9=f8.children[f6];
if(f9==f4){break
}else{f7+=f9.height
}}}return f7
}function a(f4){var f3=f4.order;
if(f3==null){f3=f4.order=bc(f4.text)
}return f3
}function fJ(f3){this.done=[];
this.undone=[];
this.undoDepth=Infinity;
this.lastModTime=this.lastSelTime=0;
this.lastOp=this.lastSelOp=null;
this.lastOrigin=this.lastSelOrigin=null;
this.generation=this.maxGeneration=f3||1
}function dl(f3,f5){var f4={from:ch(f5.from),to:cS(f5),text:fP(f3,f5.from,f5.to)};
bW(f3,f4,f5.from.line,f5.to.line+1);
dX(f3,function(f6){bW(f6,f4,f5.from.line,f5.to.line+1)
},true);
return f4
}function fs(f4){while(f4.length){var f3=fy(f4);
if(f3.ranges){f4.pop()
}else{break
}}}function eD(f4,f3){if(f3){fs(f4.done);
return fy(f4.done)
}else{if(f4.done.length&&!fy(f4.done).ranges){return fy(f4.done)
}else{if(f4.done.length>1&&!f4.done[f4.done.length-2].ranges){f4.done.pop();
return fy(f4.done)
}}}}function fD(f9,f7,f3,f6){var f5=f9.history;
f5.undone.length=0;
var f4=+new Date,ga;
if((f5.lastOp==f6||f5.lastOrigin==f7.origin&&f7.origin&&((f7.origin.charAt(0)=="+"&&f9.cm&&f5.lastModTime>f4-f9.cm.options.historyEventDelay)||f7.origin.charAt(0)=="*"))&&(ga=eD(f5,f5.lastOp==f6))){var gb=fy(ga.changes);
if(cd(f7.from,f7.to)==0&&cd(f7.from,gb.to)==0){gb.to=cS(f7)
}else{ga.changes.push(dl(f9,f7))
}}else{var f8=fy(f5.done);
if(!f8||!f8.ranges){cK(f9.sel,f5.done)
}ga={changes:[dl(f9,f7)],generation:f5.generation};
f5.done.push(ga);
while(f5.done.length>f5.undoDepth){f5.done.shift();
if(!f5.done[0].ranges){f5.done.shift()
}}}f5.done.push(f3);
f5.generation=++f5.maxGeneration;
f5.lastModTime=f5.lastSelTime=f4;
f5.lastOp=f5.lastSelOp=f6;
f5.lastOrigin=f5.lastSelOrigin=f7.origin;
if(!gb){aB(f9,"historyAdded")
}}function by(f7,f3,f5,f6){var f4=f3.charAt(0);
return f4=="*"||f4=="+"&&f5.ranges.length==f6.ranges.length&&f5.somethingSelected()==f6.somethingSelected()&&new Date-f7.history.lastSelTime<=(f7.cm?f7.cm.options.historyEventDelay:500)
}function fX(f8,f6,f3,f5){var f7=f8.history,f4=f5&&f5.origin;
if(f3==f7.lastSelOp||(f4&&f7.lastSelOrigin==f4&&(f7.lastModTime==f7.lastSelTime&&f7.lastOrigin==f4||by(f8,f4,fy(f7.done),f6)))){f7.done[f7.done.length-1]=f6
}else{cK(f6,f7.done)
}f7.lastSelTime=+new Date;
f7.lastSelOrigin=f4;
f7.lastSelOp=f3;
if(f5&&f5.clearRedo!==false){fs(f7.undone)
}}function cK(f4,f3){var f5=fy(f3);
if(!(f5&&f5.ranges&&f5.equals(f4))){f3.push(f4)
}}function bW(f4,f8,f7,f6){var f3=f8["spans_"+f4.id],f5=0;
f4.iter(Math.max(f4.first,f7),Math.min(f4.first+f4.size,f6),function(f9){if(f9.markedSpans){(f3||(f3=f8["spans_"+f4.id]={}))[f5]=f9.markedSpans
}++f5
})
}function bh(f5){if(!f5){return null
}for(var f4=0,f3;
f4<f5.length;
++f4){if(f5[f4].marker.explicitlyCleared){if(!f3){f3=f5.slice(0,f4)
}}else{if(f3){f3.push(f5[f4])
}}}return !f3?f5:f3.length?f3:null
}function b2(f6,f7){var f5=f7["spans_"+f6.id];
if(!f5){return null
}for(var f4=0,f3=[];
f4<f7.text.length;
++f4){f3.push(bh(f5[f4]))
}return f3
}function bN(ge,f6,gd){for(var f9=0,f4=[];
f9<ge.length;
++f9){var f5=ge[f9];
if(f5.ranges){f4.push(gd?fO.prototype.deepCopy.call(f5):f5);
continue
}var gb=f5.changes,gc=[];
f4.push({changes:gc});
for(var f8=0;
f8<gb.length;
++f8){var ga=gb[f8],f7;
gc.push({from:ga.from,to:ga.to,text:ga.text});
if(f6){for(var f3 in ga){if(f7=f3.match(/^spans_(\d+)$/)){if(dc(f6,Number(f7[1]))>-1){fy(gc)[f3]=ga[f3];
delete ga[f3]
}}}}}}return f4
}function K(f6,f5,f4,f3){if(f4<f6.line){f6.line+=f3
}else{if(f5<f6.line){f6.line=f5;
f6.ch=0
}}}function e7(f6,f8,f9,ga){for(var f5=0;
f5<f6.length;
++f5){var f3=f6[f5],f7=true;
if(f3.ranges){if(!f3.copied){f3=f6[f5]=f3.deepCopy();
f3.copied=true
}for(var f4=0;
f4<f3.ranges.length;
f4++){K(f3.ranges[f4].anchor,f8,f9,ga);
K(f3.ranges[f4].head,f8,f9,ga)
}continue
}for(var f4=0;
f4<f3.changes.length;
++f4){var gb=f3.changes[f4];
if(f9<gb.from.line){gb.from=X(gb.from.line+ga,gb.from.ch);
gb.to=X(gb.to.line+ga,gb.to.ch)
}else{if(f8<=gb.to.line){f7=false;
break
}}}if(!f7){f6.splice(0,f5+1);
f5=0
}}}function dv(f4,f7){var f6=f7.from.line,f5=f7.to.line,f3=f7.text.length-(f5-f6)-1;
e7(f4.done,f6,f5,f3);
e7(f4.undone,f6,f5,f3)
}var cD=J.e_preventDefault=function(f3){if(f3.preventDefault){f3.preventDefault()
}else{f3.returnValue=false
}};
var dh=J.e_stopPropagation=function(f3){if(f3.stopPropagation){f3.stopPropagation()
}else{f3.cancelBubble=true
}};
function bJ(f3){return f3.defaultPrevented!=null?f3.defaultPrevented:f3.returnValue==false
}var eh=J.e_stop=function(f3){cD(f3);
dh(f3)
};
function M(f3){return f3.target||f3.srcElement
}function fE(f4){var f3=f4.which;
if(f3==null){if(f4.button&1){f3=1
}else{if(f4.button&2){f3=3
}else{if(f4.button&4){f3=2
}}}}if(b5&&f4.ctrlKey&&f3==1){f3=3
}return f3
}var bV=J.on=function(f6,f4,f5){if(f6.addEventListener){f6.addEventListener(f4,f5,false)
}else{if(f6.attachEvent){f6.attachEvent("on"+f4,f5)
}else{var f7=f6._handlers||(f6._handlers={});
var f3=f7[f4]||(f7[f4]=[]);
f3.push(f5)
}}};
var d3=J.off=function(f7,f5,f6){if(f7.removeEventListener){f7.removeEventListener(f5,f6,false)
}else{if(f7.detachEvent){f7.detachEvent("on"+f5,f6)
}else{var f3=f7._handlers&&f7._handlers[f5];
if(!f3){return
}for(var f4=0;
f4<f3.length;
++f4){if(f3[f4]==f6){f3.splice(f4,1);
break
}}}}};
var aB=J.signal=function(f7,f6){var f3=f7._handlers&&f7._handlers[f6];
if(!f3){return
}var f4=Array.prototype.slice.call(arguments,2);
for(var f5=0;
f5<f3.length;
++f5){f3[f5].apply(null,f4)
}};
var bx=null;
function ad(f9,f7){var f3=f9._handlers&&f9._handlers[f7];
if(!f3){return
}var f5=Array.prototype.slice.call(arguments,2),f8;
if(bn){f8=bn.delayedCallbacks
}else{if(bx){f8=bx
}else{f8=bx=[];
setTimeout(aI,0)
}}function f4(ga){return function(){ga.apply(null,f5)
}
}for(var f6=0;
f6<f3.length;
++f6){f8.push(f4(f3[f6]))
}}function aI(){var f3=bx;
bx=null;
for(var f4=0;
f4<f3.length;
++f4){f3[f4]()
}}function aN(f3,f5,f4){if(typeof f5=="string"){f5={type:f5,preventDefault:function(){this.defaultPrevented=true
}}
}aB(f3,f4||f5.type,f3,f5);
return bJ(f5)||f5.codemirrorIgnore
}function W(f4){var f3=f4._handlers&&f4._handlers.cursorActivity;
if(!f3){return
}var f6=f4.curOp.cursorActivityHandlers||(f4.curOp.cursorActivityHandlers=[]);
for(var f5=0;
f5<f3.length;
++f5){if(dc(f6,f3[f5])==-1){f6.push(f3[f5])
}}}function e8(f5,f4){var f3=f5._handlers&&f5._handlers[f4];
return f3&&f3.length>0
}function bw(f3){f3.prototype.on=function(f4,f5){bV(this,f4,f5)
};
f3.prototype.off=function(f4,f5){d3(this,f4,f5)
}
}var bg=30;
var b8=J.Pass={toString:function(){return"CodeMirror.Pass"
}};
var Z={scroll:false},N={origin:"*mouse"},cR={origin:"+move"};
function f2(){this.id=null
}f2.prototype.set=function(f3,f4){clearTimeout(this.id);
this.id=setTimeout(f4,f3)
};
var bR=J.countColumn=function(f6,f4,f8,f9,f5){if(f4==null){f4=f6.search(/[^\s\u00a0]/);
if(f4==-1){f4=f6.length
}}for(var f7=f9||0,ga=f5||0;
;
){var f3=f6.indexOf("\t",f7);
if(f3<0||f3>=f4){return ga+(f4-f7)
}ga+=f3-f7;
ga+=f8-(ga%f8);
f7=f3+1
}};
function eg(f7,f6,f8){for(var f9=0,f5=0;
;
){var f4=f7.indexOf("\t",f9);
if(f4==-1){f4=f7.length
}var f3=f4-f9;
if(f4==f7.length||f5+f3>=f6){return f9+Math.min(f3,f6-f5)
}f5+=f4-f9;
f5+=f8-(f5%f8);
f9=f4+1;
if(f5>=f6){return f9
}}}var aU=[""];
function co(f3){while(aU.length<=f3){aU.push(fy(aU)+" ")
}return aU[f3]
}function fy(f3){return f3[f3.length-1]
}var dB=function(f3){f3.select()
};
if(eS){dB=function(f3){f3.selectionStart=0;
f3.selectionEnd=f3.value.length
}
}else{if(dA){dB=function(f4){try{f4.select()
}catch(f3){}}
}}function dc(f5,f3){for(var f4=0;
f4<f5.length;
++f4){if(f5[f4]==f3){return f4
}}return -1
}if([].indexOf){dc=function(f4,f3){return f4.indexOf(f3)
}
}function bQ(f6,f5){var f3=[];
for(var f4=0;
f4<f6.length;
f4++){f3[f4]=f5(f6[f4],f4)
}return f3
}if([].map){bQ=function(f4,f3){return f4.map(f3)
}
}function cj(f6,f3){var f5;
if(Object.create){f5=Object.create(f6)
}else{var f4=function(){};
f4.prototype=f6;
f5=new f4()
}if(f3){aJ(f3,f5)
}return f5
}function aJ(f5,f4,f3){if(!f4){f4={}
}for(var f6 in f5){if(f5.hasOwnProperty(f6)&&(f3!==false||!f4.hasOwnProperty(f6))){f4[f6]=f5[f6]
}}return f4
}function cu(f4){var f3=Array.prototype.slice.call(arguments,1);
return function(){return f4.apply(null,f3)
}
}var a7=/[\u00df\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
var fu=J.isWordChar=function(f3){return/\w/.test(f3)||f3>"\x80"&&(f3.toUpperCase()!=f3.toLowerCase()||a7.test(f3))
};
function cy(f3,f4){if(!f4){return fu(f3)
}if(f4.source.indexOf("\\w")>-1&&fu(f3)){return true
}return f4.test(f3)
}function eL(f3){for(var f4 in f3){if(f3.hasOwnProperty(f4)&&f3[f4]){return false
}}return true
}var eA=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
function fg(f3){return f3.charCodeAt(0)>=768&&eA.test(f3)
}function fN(f3,f7,f6,f5){var f8=document.createElement(f3);
if(f6){f8.className=f6
}if(f5){f8.style.cssText=f5
}if(typeof f7=="string"){f8.appendChild(document.createTextNode(f7))
}else{if(f7){for(var f4=0;
f4<f7.length;
++f4){f8.appendChild(f7[f4])
}}}return f8
}var ck;
if(document.createRange){ck=function(f5,f6,f3){var f4=document.createRange();
f4.setEnd(f5,f3);
f4.setStart(f5,f6);
return f4
}
}else{ck=function(f5,f7,f3){var f4=document.body.createTextRange();
try{f4.moveToElementText(f5.parentNode)
}catch(f6){return f4
}f4.collapse(true);
f4.moveEnd("character",f3);
f4.moveStart("character",f7);
return f4
}
}function dR(f4){for(var f3=f4.childNodes.length;
f3>0;
--f3){f4.removeChild(f4.firstChild)
}return f4
}function bP(f3,f4){return dR(f3).appendChild(f4)
}function fW(f3,f4){if(f3.contains){return f3.contains(f4)
}while(f4=f4.parentNode){if(f4==f3){return true
}}}function dE(){return document.activeElement
}if(dA&&l<11){dE=function(){try{return document.activeElement
}catch(f3){return document.body
}}
}function T(f3){return new RegExp("(^|\\s)"+f3+"(?:$|\\s)\\s*")
}var f=J.rmClass=function(f5,f3){var f6=f5.className;
var f4=T(f3).exec(f6);
if(f4){var f7=f6.slice(f4.index+f4[0].length);
f5.className=f6.slice(0,f4.index)+(f7?f4[1]+f7:"")
}};
var fr=J.addClass=function(f4,f3){var f5=f4.className;
if(!T(f3).test(f5)){f4.className+=(f5?" ":"")+f3
}};
function fI(f5,f3){var f4=f5.split(" ");
for(var f6=0;
f6<f4.length;
f6++){if(f4[f6]&&!T(f4[f6]).test(f3)){f3+=" "+f4[f6]
}}return f3
}function ay(f6){if(!document.body.getElementsByClassName){return
}var f5=document.body.getElementsByClassName("CodeMirror");
for(var f4=0;
f4<f5.length;
f4++){var f3=f5[f4].CodeMirror;
if(f3){f6(f3)
}}}var cA=false;
function be(){if(cA){return
}fv();
cA=true
}function fv(){var f3;
bV(window,"resize",function(){if(f3==null){f3=setTimeout(function(){f3=null;
em=null;
ay(aP)
},100)
}});
bV(window,"blur",function(){ay(aQ)
})
}var eC=function(){if(dA&&l<9){return false
}var f3=fN("div");
return"draggable" in f3||"dragDrop" in f3
}();
var em;
function k(f3){if(em!=null){return em
}var f4=fN("div",null,null,"width: 50px; height: 50px; overflow-x: scroll");
bP(f3,f4);
if(f4.offsetWidth){em=f4.offsetHeight-f4.clientHeight
}return em||0
}var fC;
function bl(f3){if(fC==null){var f4=fN("span","\u200b");
bP(f3,fN("span",[f4,document.createTextNode("x")]));
if(f3.firstChild.offsetHeight!=0){fC=f4.offsetWidth<=1&&f4.offsetHeight>2&&!(dA&&l<8)
}}if(fC){return fN("span","\u200b")
}else{return fN("span","\u00a0",null,"display: inline-block; width: 1px; margin-right: -1px")
}}var fB;
function bM(f6){if(fB!=null){return fB
}var f3=bP(f6,document.createTextNode("A\u062eA"));
var f5=ck(f3,0,1).getBoundingClientRect();
if(!f5||f5.left==f5.right){return false
}var f4=ck(f3,1,2).getBoundingClientRect();
return fB=(f4.right-f5.right<3)
}var aV=J.splitLines="\n\nb".split(/\n/).length!=3?function(f8){var f9=0,f3=[],f7=f8.length;
while(f9<=f7){var f6=f8.indexOf("\n",f9);
if(f6==-1){f6=f8.length
}var f5=f8.slice(f9,f8.charAt(f6-1)=="\r"?f6-1:f6);
var f4=f5.indexOf("\r");
if(f4!=-1){f3.push(f5.slice(0,f4));
f9+=f4+1
}else{f3.push(f5);
f9=f6+1
}}return f3
}:function(f3){return f3.split(/\r\n?|\n/)
};
var bq=window.getSelection?function(f4){try{return f4.selectionStart!=f4.selectionEnd
}catch(f3){return false
}}:function(f5){try{var f3=f5.ownerDocument.selection.createRange()
}catch(f4){}if(!f3||f3.parentElement()!=f5){return false
}return f3.compareEndPoints("StartToEnd",f3)!=0
};
var c5=(function(){var f3=fN("div");
if("oncopy" in f3){return true
}f3.setAttribute("oncopy","return;");
return typeof f3.oncopy=="function"
})();
var eW=null;
function aH(f4){if(eW!=null){return eW
}var f5=bP(f4,fN("span","x"));
var f6=f5.getBoundingClientRect();
var f3=ck(f5,0,1).getBoundingClientRect();
return eW=Math.abs(f6.left-f3.left)>1
}var e6={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",107:"=",109:"-",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"};
J.keyNames=e6;
(function(){for(var f3=0;
f3<10;
f3++){e6[f3+48]=e6[f3+96]=String(f3)
}for(var f3=65;
f3<=90;
f3++){e6[f3]=String.fromCharCode(f3)
}for(var f3=1;
f3<=12;
f3++){e6[f3+111]=e6[f3+63235]="F"+f3
}})();
function dU(f3,f9,f8,f7){if(!f3){return f7(f9,f8,"ltr")
}var f6=false;
for(var f5=0;
f5<f3.length;
++f5){var f4=f3[f5];
if(f4.from<f8&&f4.to>f9||f9==f8&&f4.to==f9){f7(Math.max(f4.from,f9),Math.min(f4.to,f8),f4.level==1?"rtl":"ltr");
f6=true
}}if(!f6){f7(f9,f8,"ltr")
}}function dp(f3){return f3.level%2?f3.to:f3.from
}function fZ(f3){return f3.level%2?f3.from:f3.to
}function cC(f4){var f3=a(f4);
return f3?dp(f3[0]):0
}function cP(f4){var f3=a(f4);
if(!f3){return f4.text.length
}return fZ(fy(f3))
}function br(f4,f7){var f5=e5(f4.doc,f7);
var f8=z(f5);
if(f8!=f5){f7=bL(f8)
}var f3=a(f8);
var f6=!f3?0:f3[0].level%2?cP(f8):cC(f8);
return X(f7,f6)
}function dF(f5,f8){var f4,f6=e5(f5.doc,f8);
while(f4=el(f6)){f6=f4.find(1,true).line;
f8=null
}var f3=a(f6);
var f7=!f3?f6.text.length:f3[0].level%2?cC(f6):cP(f6);
return X(f8==null?bL(f6):f8,f7)
}function dz(f4,f9){var f8=br(f4,f9.line);
var f5=e5(f4.doc,f8.line);
var f3=a(f5);
if(!f3||f3[0].level==0){var f7=Math.max(0,f5.text.search(/\S/));
var f6=f9.line==f8.line&&f9.ch<=f7&&f9.ch;
return X(f8.line,f6?0:f7)
}return f8
}function am(f4,f5,f3){var f6=f4[0].level;
if(f5==f6){return true
}if(f3==f6){return false
}return f5<f3
}var eT;
function aD(f3,f7){eT=null;
for(var f4=0,f5;
f4<f3.length;
++f4){var f6=f3[f4];
if(f6.from<f7&&f6.to>f7){return f4
}if((f6.from==f7||f6.to==f7)){if(f5==null){f5=f4
}else{if(am(f3,f6.level,f3[f5].level)){if(f6.from!=f6.to){eT=f5
}return f4
}else{if(f6.from!=f6.to){eT=f4
}return f5
}}}}return f5
}function e4(f3,f6,f4,f5){if(!f5){return f6+f4
}do{f6+=f4
}while(f6>0&&fg(f3.text.charAt(f6)));
return f6
}function v(f3,ga,f5,f6){var f7=a(f3);
if(!f7){return ah(f3,ga,f5,f6)
}var f9=aD(f7,ga),f4=f7[f9];
var f8=e4(f3,ga,f4.level%2?-f5:f5,f6);
for(;
;
){if(f8>f4.from&&f8<f4.to){return f8
}if(f8==f4.from||f8==f4.to){if(aD(f7,f8)==f9){return f8
}f4=f7[f9+=f5];
return(f5>0)==f4.level%2?f4.to:f4.from
}else{f4=f7[f9+=f5];
if(!f4){return null
}if((f5>0)==f4.level%2){f8=e4(f3,f4.to,-1,f6)
}else{f8=e4(f3,f4.from,1,f6)
}}}}function ah(f3,f7,f4,f5){var f6=f7+f4;
if(f5){while(f6>0&&fg(f3.text.charAt(f6))){f6+=f4
}}return f6<0||f6>f3.text.length?null:f6
}var bc=(function(){var f9="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
var f7="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";
function f6(gd){if(gd<=247){return f9.charAt(gd)
}else{if(1424<=gd&&gd<=1524){return"R"
}else{if(1536<=gd&&gd<=1773){return f7.charAt(gd-1536)
}else{if(1774<=gd&&gd<=2220){return"r"
}else{if(8192<=gd&&gd<=8203){return"w"
}else{if(gd==8204){return"b"
}else{return"L"
}}}}}}}var f3=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
var gc=/[stwN]/,f5=/[LRr]/,f4=/[Lb1n]/,f8=/[1n]/;
var gb="L";
function ga(gf,ge,gd){this.level=gf;
this.from=ge;
this.to=gd
}return function(gn){if(!f3.test(gn)){return false
}var gt=gn.length,gj=[];
for(var gs=0,gf;
gs<gt;
++gs){gj.push(gf=f6(gn.charCodeAt(gs)))
}for(var gs=0,gm=gb;
gs<gt;
++gs){var gf=gj[gs];
if(gf=="m"){gj[gs]=gm
}else{gm=gf
}}for(var gs=0,gd=gb;
gs<gt;
++gs){var gf=gj[gs];
if(gf=="1"&&gd=="r"){gj[gs]="n"
}else{if(f5.test(gf)){gd=gf;
if(gf=="r"){gj[gs]="R"
}}}}for(var gs=1,gm=gj[0];
gs<gt-1;
++gs){var gf=gj[gs];
if(gf=="+"&&gm=="1"&&gj[gs+1]=="1"){gj[gs]="1"
}else{if(gf==","&&gm==gj[gs+1]&&(gm=="1"||gm=="n")){gj[gs]=gm
}}gm=gf
}for(var gs=0;
gs<gt;
++gs){var gf=gj[gs];
if(gf==","){gj[gs]="N"
}else{if(gf=="%"){for(var gg=gs+1;
gg<gt&&gj[gg]=="%";
++gg){}var gu=(gs&&gj[gs-1]=="!")||(gg<gt&&gj[gg]=="1")?"1":"N";
for(var gq=gs;
gq<gg;
++gq){gj[gq]=gu
}gs=gg-1
}}}for(var gs=0,gd=gb;
gs<gt;
++gs){var gf=gj[gs];
if(gd=="L"&&gf=="1"){gj[gs]="L"
}else{if(f5.test(gf)){gd=gf
}}}for(var gs=0;
gs<gt;
++gs){if(gc.test(gj[gs])){for(var gg=gs+1;
gg<gt&&gc.test(gj[gg]);
++gg){}var gk=(gs?gj[gs-1]:gb)=="L";
var ge=(gg<gt?gj[gg]:gb)=="L";
var gu=gk||ge?"L":"R";
for(var gq=gs;
gq<gg;
++gq){gj[gq]=gu
}gs=gg-1
}}var gr=[],go;
for(var gs=0;
gs<gt;
){if(f4.test(gj[gs])){var gh=gs;
for(++gs;
gs<gt&&f4.test(gj[gs]);
++gs){}gr.push(new ga(0,gh,gs))
}else{var gi=gs,gl=gr.length;
for(++gs;
gs<gt&&gj[gs]!="L";
++gs){}for(var gq=gi;
gq<gs;
){if(f8.test(gj[gq])){if(gi<gq){gr.splice(gl,0,new ga(1,gi,gq))
}var gp=gq;
for(++gq;
gq<gs&&f8.test(gj[gq]);
++gq){}gr.splice(gl,0,new ga(2,gp,gq));
gi=gq
}else{++gq
}}if(gi<gs){gr.splice(gl,0,new ga(1,gi,gs))
}}}if(gr[0].level==1&&(go=gn.match(/^\s+/))){gr[0].from=go[0].length;
gr.unshift(new ga(0,0,go[0].length))
}if(fy(gr).level==1&&(go=gn.match(/\s+$/))){fy(gr).to-=go[0].length;
gr.push(new ga(0,gt-go[0].length,gt))
}if(gr[0].level!=fy(gr).level){gr.push(new ga(gr[0].level,gt,gt))
}return gr
}
})();
J.version="4.8.0";
return J
});