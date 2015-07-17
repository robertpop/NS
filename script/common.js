//Flash Embed
(function(){var jQ=typeof jQuery=='function';function isDomReady(){if(domReady.done){return false;}var d=document;if(d&&d.getElementsByTagName&&d.getElementById&&d.body){clearInterval(domReady.timer);domReady.timer=null;for(var i=0;i<domReady.ready.length;i++){domReady.ready[i].call();}domReady.ready=null;domReady.done=true;}}var domReady=jQ?jQuery:function(f){if(domReady.done){return f();}if(domReady.timer){domReady.ready.push(f);}else{domReady.ready=[f];domReady.timer=setInterval(isDomReady,13);}};function extend(to,from){if(from){for(key in from){if(from.hasOwnProperty(key)){to[key]=from[key];}}}return to;}function asString(obj){switch(typeOf(obj)){case'string':obj=obj.replace(new RegExp('(["\\\\])','g'),'\\$1');obj=obj.replace(/^\s?(\d+)%/,"$1pct");return'"'+obj+'"';case'array':return'['+map(obj,function(el){return asString(el);}).join(',')+']';case'function':return'"function()"';case'object':var str=[];for(var prop in obj){if(obj.hasOwnProperty(prop)){str.push('"'+prop+'":'+asString(obj[prop]));}}return'{'+str.join(',')+'}';}return String(obj).replace(/\s/g," ").replace(/\'/g,"\"");}function typeOf(obj){if(obj===null||obj===undefined){return false;}var type=typeof obj;return(type=='object'&&obj.push)?'array':type;}if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};});}function map(arr,func){var newArr=[];for(var i in arr){if(arr.hasOwnProperty(i)){newArr[i]=func(arr[i]);}}return newArr;}function getHTML(p,c){var ie=document.all;var html='<object width="'+p.width+'" height="'+p.height+'"';if(ie&&!p.id){p.id="_"+(""+Math.random()).substring(9);}if(p.id){html+=' id="'+p.id+'"';}if(p.w3c||!ie){html+=' data="'+p.src+'" type="application/x-shockwave-flash"';}else{html+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';}html+='>';if(p.w3c||ie){html+='<param name="movie" value="'+p.src+'" />';}var e=extend({},p);e.width=e.height=e.id=e.w3c=e.src=null;for(var k in e){if(e[k]!==null){html+='<param name="'+k+'" value="'+e[k]+'" />';}}var vars="";if(c){for(var key in c){if(c[key]!==null){vars+=key+'='+(typeof c[key]=='object'?asString(c[key]):c[key])+'&';}}vars=vars.substring(0,vars.length-1);html+='<param name="flashvars" value=\''+vars+'\' />';}html+="</object>";return html;}function Flash(root,opts,flashvars){var version=flashembed.getVersion();extend(this,{getContainer:function(){return root;},getConf:function(){return conf;},getVersion:function(){return version;},getFlashvars:function(){return flashvars;},getApi:function(){return root.firstChild;},getHTML:function(){return getHTML(opts,flashvars);}});var required=opts.version;var express=opts.expressInstall;var ok=!required||flashembed.isSupported(required);if(ok){opts.onFail=opts.version=opts.expressInstall=null;root.innerHTML=getHTML(opts,flashvars);}else if(required&&express&&flashembed.isSupported([6,65])){extend(opts,{src:express});flashvars={MMredirectURL:location.href,MMplayerType:'PlugIn',MMdoctitle:document.title};root.innerHTML=getHTML(opts,flashvars);}else{if(root.innerHTML.replace(/\s/g,'')!==''){}else{root.innerHTML="<h2>Flash version "+required+" or greater is required</h2>"+"<h3>"+(version[0]>0?"Your version is "+version:"You have no flash plugin installed")+"</h3>"+(root.tagName=='A'?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='http://www.adobe.com/go/getflashplayer'>here</a></p>");if(root.tagName=='A'){root.href='http://www.adobe.com/go/getflashplayer';}}}if(!ok&&opts.onFail){var ret=opts.onFail.call(this);if(typeof ret=='string'){root.innerHTML=ret;}}}window.flashembed=function(root,conf,flashvars){if(typeof root=='string'){var el=document.getElementById(root);if(el){root=el;}else{domReady(function(){flashembed(root,conf,flashvars);});return;}}if(!root){return;}var opts={width:'100%',height:'100%',allowfullscreen:true,allowscriptaccess:'always',quality:'high',version:null,onFail:null,expressInstall:null,w3c:false};if(typeof conf=='string'){conf={src:conf};}extend(opts,conf);return new Flash(root,opts,flashvars);};extend(window.flashembed,{getVersion:function(){var version=[0,0];if(navigator.plugins&&typeof navigator.plugins["Shockwave Flash"]=="object"){var _d=navigator.plugins["Shockwave Flash"].description;if(typeof _d!="undefined"){_d=_d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");var _m=parseInt(_d.replace(/^(.*)\..*$/,"$1"),10);var _r=/r/.test(_d)?parseInt(_d.replace(/^.*r(.*)$/,"$1"),10):0;version=[_m,_r];}}else if(window.ActiveXObject){try{var _a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{_a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");version=[6,0];_a.AllowScriptAccess="always";}catch(ee){if(version[0]==6){return;}}try{_a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(eee){}}if(typeof _a=="object"){_d=_a.GetVariable("$version");if(typeof _d!="undefined"){_d=_d.replace(/^\S+\s+(.*)$/,"$1").split(",");version=[parseInt(_d[0],10),parseInt(_d[2],10)];}}}return version;},isSupported:function(version){var now=flashembed.getVersion();var ret=(now[0]>version[0])||(now[0]==version[0]&&now[1]>=version[1]);return ret;},domReady:domReady,asString:asString,getHTML:getHTML});if(jQ){jQuery.prototype.flashembed=function(conf,flashvars){return this.each(function(){flashembed(this,conf,flashvars);});};}})();

/*
 * exCanvas
 */
document.createElement("canvas").getContext||(function(){var s=Math,j=s.round,F=s.sin,G=s.cos,V=s.abs,W=s.sqrt,k=10,v=k/2;function X(){return this.context_||(this.context_=new H(this))}var L=Array.prototype.slice;function Y(b,a){var c=L.call(arguments,2);return function(){return b.apply(a,c.concat(L.call(arguments)))}}var M={init:function(b){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var a=b||document;a.createElement("canvas");a.attachEvent("onreadystatechange",Y(this.init_,this,a))}},init_:function(b){b.namespaces.g_vml_||
b.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");b.namespaces.g_o_||b.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");if(!b.styleSheets.ex_canvas_){var a=b.createStyleSheet();a.owningElement.id="ex_canvas_";a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}var c=b.getElementsByTagName("canvas"),d=0;for(;d<c.length;d++)this.initElement(c[d])},
initElement:function(b){if(!b.getContext){b.getContext=X;b.innerHTML="";b.attachEvent("onpropertychange",Z);b.attachEvent("onresize",$);var a=b.attributes;if(a.width&&a.width.specified)b.style.width=a.width.nodeValue+"px";else b.width=b.clientWidth;if(a.height&&a.height.specified)b.style.height=a.height.nodeValue+"px";else b.height=b.clientHeight}return b}};function Z(b){var a=b.srcElement;switch(b.propertyName){case "width":a.style.width=a.attributes.width.nodeValue+"px";a.getContext().clearRect();
break;case "height":a.style.height=a.attributes.height.nodeValue+"px";a.getContext().clearRect();break}}function $(b){var a=b.srcElement;if(a.firstChild){a.firstChild.style.width=a.clientWidth+"px";a.firstChild.style.height=a.clientHeight+"px"}}M.init();var N=[],B=0;for(;B<16;B++){var C=0;for(;C<16;C++)N[B*16+C]=B.toString(16)+C.toString(16)}function I(){return[[1,0,0],[0,1,0],[0,0,1]]}function y(b,a){var c=I(),d=0;for(;d<3;d++){var f=0;for(;f<3;f++){var h=0,g=0;for(;g<3;g++)h+=b[d][g]*a[g][f];c[d][f]=
h}}return c}function O(b,a){a.fillStyle=b.fillStyle;a.lineCap=b.lineCap;a.lineJoin=b.lineJoin;a.lineWidth=b.lineWidth;a.miterLimit=b.miterLimit;a.shadowBlur=b.shadowBlur;a.shadowColor=b.shadowColor;a.shadowOffsetX=b.shadowOffsetX;a.shadowOffsetY=b.shadowOffsetY;a.strokeStyle=b.strokeStyle;a.globalAlpha=b.globalAlpha;a.arcScaleX_=b.arcScaleX_;a.arcScaleY_=b.arcScaleY_;a.lineScale_=b.lineScale_}function P(b){var a,c=1;b=String(b);if(b.substring(0,3)=="rgb"){var d=b.indexOf("(",3),f=b.indexOf(")",d+
1),h=b.substring(d+1,f).split(",");a="#";var g=0;for(;g<3;g++)a+=N[Number(h[g])];if(h.length==4&&b.substr(3,1)=="a")c=h[3]}else a=b;return{color:a,alpha:c}}function aa(b){switch(b){case "butt":return"flat";case "round":return"round";case "square":default:return"square"}}function H(b){this.m_=I();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=k*1;this.globalAlpha=1;this.canvas=b;
var a=b.ownerDocument.createElement("div");a.style.width=b.clientWidth+"px";a.style.height=b.clientHeight+"px";a.style.overflow="hidden";a.style.position="absolute";b.appendChild(a);this.element_=a;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}var i=H.prototype;i.clearRect=function(){this.element_.innerHTML=""};i.beginPath=function(){this.currentPath_=[]};i.moveTo=function(b,a){var c=this.getCoords_(b,a);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};
i.lineTo=function(b,a){var c=this.getCoords_(b,a);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};i.bezierCurveTo=function(b,a,c,d,f,h){var g=this.getCoords_(f,h),l=this.getCoords_(b,a),e=this.getCoords_(c,d);Q(this,l,e,g)};function Q(b,a,c,d){b.currentPath_.push({type:"bezierCurveTo",cp1x:a.x,cp1y:a.y,cp2x:c.x,cp2y:c.y,x:d.x,y:d.y});b.currentX_=d.x;b.currentY_=d.y}i.quadraticCurveTo=function(b,a,c,d){var f=this.getCoords_(b,a),h=this.getCoords_(c,d),g={x:this.currentX_+
0.6666666666666666*(f.x-this.currentX_),y:this.currentY_+0.6666666666666666*(f.y-this.currentY_)};Q(this,g,{x:g.x+(h.x-this.currentX_)/3,y:g.y+(h.y-this.currentY_)/3},h)};i.arc=function(b,a,c,d,f,h){c*=k;var g=h?"at":"wa",l=b+G(d)*c-v,e=a+F(d)*c-v,m=b+G(f)*c-v,r=a+F(f)*c-v;if(l==m&&!h)l+=0.125;var n=this.getCoords_(b,a),o=this.getCoords_(l,e),q=this.getCoords_(m,r);this.currentPath_.push({type:g,x:n.x,y:n.y,radius:c,xStart:o.x,yStart:o.y,xEnd:q.x,yEnd:q.y})};i.rect=function(b,a,c,d){this.moveTo(b,
a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath()};i.strokeRect=function(b,a,c,d){var f=this.currentPath_;this.beginPath();this.moveTo(b,a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath();this.stroke();this.currentPath_=f};i.fillRect=function(b,a,c,d){var f=this.currentPath_;this.beginPath();this.moveTo(b,a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath();this.fill();this.currentPath_=f};i.createLinearGradient=function(b,
a,c,d){var f=new D("gradient");f.x0_=b;f.y0_=a;f.x1_=c;f.y1_=d;return f};i.createRadialGradient=function(b,a,c,d,f,h){var g=new D("gradientradial");g.x0_=b;g.y0_=a;g.r0_=c;g.x1_=d;g.y1_=f;g.r1_=h;return g};i.drawImage=function(b){var a,c,d,f,h,g,l,e,m=b.runtimeStyle.width,r=b.runtimeStyle.height;b.runtimeStyle.width="auto";b.runtimeStyle.height="auto";var n=b.width,o=b.height;b.runtimeStyle.width=m;b.runtimeStyle.height=r;if(arguments.length==3){a=arguments[1];c=arguments[2];h=g=0;l=d=n;e=f=o}else if(arguments.length==
5){a=arguments[1];c=arguments[2];d=arguments[3];f=arguments[4];h=g=0;l=n;e=o}else if(arguments.length==9){h=arguments[1];g=arguments[2];l=arguments[3];e=arguments[4];a=arguments[5];c=arguments[6];d=arguments[7];f=arguments[8]}else throw Error("Invalid number of arguments");var q=this.getCoords_(a,c),t=[];t.push(" <g_vml_:group",' coordsize="',k*10,",",k*10,'"',' coordorigin="0,0"',' style="width:',10,"px;height:",10,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]){var E=[];E.push("M11=",
this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",j(q.x/k),",","Dy=",j(q.y/k),"");var p=q,z=this.getCoords_(a+d,c),w=this.getCoords_(a,c+f),x=this.getCoords_(a+d,c+f);p.x=s.max(p.x,z.x,w.x,x.x);p.y=s.max(p.y,z.y,w.y,x.y);t.push("padding:0 ",j(p.x/k),"px ",j(p.y/k),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",E.join(""),", sizingmethod='clip');")}else t.push("top:",j(q.y/k),"px;left:",j(q.x/k),"px;");t.push(' ">','<g_vml_:image src="',b.src,
'"',' style="width:',k*d,"px;"," height:",k*f,'px;"',' cropleft="',h/n,'"',' croptop="',g/o,'"',' cropright="',(n-h-l)/n,'"',' cropbottom="',(o-g-e)/o,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",t.join(""))};i.stroke=function(b){var a=[],c=P(b?this.fillStyle:this.strokeStyle),d=c.color,f=c.alpha*this.globalAlpha;a.push("<g_vml_:shape",' filled="',!!b,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0 0" coordsize="',k*10," ",k*10,'"',' stroked="',
!b,'"',' path="');var h={x:null,y:null},g={x:null,y:null},l=0;for(;l<this.currentPath_.length;l++){var e=this.currentPath_[l];switch(e.type){case "moveTo":a.push(" m ",j(e.x),",",j(e.y));break;case "lineTo":a.push(" l ",j(e.x),",",j(e.y));break;case "close":a.push(" x ");e=null;break;case "bezierCurveTo":a.push(" c ",j(e.cp1x),",",j(e.cp1y),",",j(e.cp2x),",",j(e.cp2y),",",j(e.x),",",j(e.y));break;case "at":case "wa":a.push(" ",e.type," ",j(e.x-this.arcScaleX_*e.radius),",",j(e.y-this.arcScaleY_*e.radius),
" ",j(e.x+this.arcScaleX_*e.radius),",",j(e.y+this.arcScaleY_*e.radius)," ",j(e.xStart),",",j(e.yStart)," ",j(e.xEnd),",",j(e.yEnd));break}if(e){if(h.x==null||e.x<h.x)h.x=e.x;if(g.x==null||e.x>g.x)g.x=e.x;if(h.y==null||e.y<h.y)h.y=e.y;if(g.y==null||e.y>g.y)g.y=e.y}}a.push(' ">');if(b)if(typeof this.fillStyle=="object"){var m=this.fillStyle,r=0,n={x:0,y:0},o=0,q=1;if(m.type_=="gradient"){var t=m.x1_/this.arcScaleX_,E=m.y1_/this.arcScaleY_,p=this.getCoords_(m.x0_/this.arcScaleX_,m.y0_/this.arcScaleY_),
z=this.getCoords_(t,E);r=Math.atan2(z.x-p.x,z.y-p.y)*180/Math.PI;if(r<0)r+=360;if(r<1.0E-6)r=0}else{var p=this.getCoords_(m.x0_,m.y0_),w=g.x-h.x,x=g.y-h.y;n={x:(p.x-h.x)/w,y:(p.y-h.y)/x};w/=this.arcScaleX_*k;x/=this.arcScaleY_*k;var R=s.max(w,x);o=2*m.r0_/R;q=2*m.r1_/R-o}var u=m.colors_;u.sort(function(ba,ca){return ba.offset-ca.offset});var J=u.length,da=u[0].color,ea=u[J-1].color,fa=u[0].alpha*this.globalAlpha,ga=u[J-1].alpha*this.globalAlpha,S=[],l=0;for(;l<J;l++){var T=u[l];S.push(T.offset*q+
o+" "+T.color)}a.push('<g_vml_:fill type="',m.type_,'"',' method="none" focus="100%"',' color="',da,'"',' color2="',ea,'"',' colors="',S.join(","),'"',' opacity="',ga,'"',' g_o_:opacity2="',fa,'"',' angle="',r,'"',' focusposition="',n.x,",",n.y,'" />')}else a.push('<g_vml_:fill color="',d,'" opacity="',f,'" />');else{var K=this.lineScale_*this.lineWidth;if(K<1)f*=K;a.push("<g_vml_:stroke",' opacity="',f,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',aa(this.lineCap),
'"',' weight="',K,'px"',' color="',d,'" />')}a.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",a.join(""))};i.fill=function(){this.stroke(true)};i.closePath=function(){this.currentPath_.push({type:"close"})};i.getCoords_=function(b,a){var c=this.m_;return{x:k*(b*c[0][0]+a*c[1][0]+c[2][0])-v,y:k*(b*c[0][1]+a*c[1][1]+c[2][1])-v}};i.save=function(){var b={};O(this,b);this.aStack_.push(b);this.mStack_.push(this.m_);this.m_=y(I(),this.m_)};i.restore=function(){O(this.aStack_.pop(),
this);this.m_=this.mStack_.pop()};function ha(b){var a=0;for(;a<3;a++){var c=0;for(;c<2;c++)if(!isFinite(b[a][c])||isNaN(b[a][c]))return false}return true}function A(b,a,c){if(!!ha(a)){b.m_=a;if(c)b.lineScale_=W(V(a[0][0]*a[1][1]-a[0][1]*a[1][0]))}}i.translate=function(b,a){A(this,y([[1,0,0],[0,1,0],[b,a,1]],this.m_),false)};i.rotate=function(b){var a=G(b),c=F(b);A(this,y([[a,c,0],[-c,a,0],[0,0,1]],this.m_),false)};i.scale=function(b,a){this.arcScaleX_*=b;this.arcScaleY_*=a;A(this,y([[b,0,0],[0,a,
0],[0,0,1]],this.m_),true)};i.transform=function(b,a,c,d,f,h){A(this,y([[b,a,0],[c,d,0],[f,h,1]],this.m_),true)};i.setTransform=function(b,a,c,d,f,h){A(this,[[b,a,0],[c,d,0],[f,h,1]],true)};i.clip=function(){};i.arcTo=function(){};i.createPattern=function(){return new U};function D(b){this.type_=b;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}D.prototype.addColorStop=function(b,a){a=P(a);this.colors_.push({offset:b,color:a.color,alpha:a.alpha})};function U(){}G_vmlCanvasManager=
M;CanvasRenderingContext2D=H;CanvasGradient=D;CanvasPattern=U})();

$(document).ready(function() {
	$.ajaxSetup({
		url: "/ajax/",
		global: false,
		type: "get",
		dataType: "json"
	});
	$("#pageTitle a.button_buildaplaylist").click(tellToLoginIfNotLogged);
	$(".telltologin").click(tellToLoginIfNotLogged);
});

function urlencode(str)
{
	return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

function tellToLoginIfNotLogged()
{
	if (!LOGGED){
		location.href = '/login.html?next=' + urlencode($(this).attr("href")); 
		return false;
	}
}

// UserApi

UAjustRegistered = false;
function UA_onRegister()
{
	UAjustRegistered = true;
}

function UA_onRegisterContinue()
{
	if (LOGGED == true){
		if (redirectAfterLogin != ''){
			location.href = redirectAfterLogin; 
		}
	} else {
		location.href = '/';
	}
}

function UA_onLogin(sId){
	$.ajax({
		data: {page: 'login', sessionId: sId},
		success: function(d){
			if (d.data == true){
				LOGGED = true;
				if (redirectAfterLogin != '' && !UAjustRegistered){
					location.href = redirectAfterLogin; 
				}
			}
		}
	});
}

function UA_ifLogged(sId){
	UA_onLogin(sId);
}

function UA_onLogout(){
	$.ajax({
		data: {page: 'logout'},
		success: function(d) {
			LOGGED = false;
			if (REQUIRE_LOGGED_IN){
				location.href = '/';
			}
		}
	});
}

function getLoadingImage()
{
	$loadingImg = $('<img />').attr({src: CDNPATH+'/images/loading.gif'});
	return $loadingImg; 
}

function getLoadingImageGreen()
{
	$loadingImg = $('<img />').attr({src: CDNPATH+'/images/loading_green.gif'});
	return $loadingImg; 
}

function getLoadingImageDarkGreen()
{
	$loadingImg = $('<img />').attr({src: CDNPATH+'/images/loading_dark_green.gif'});
	return $loadingImg; 
}

function loadingHover(elem)
{
	w = elem.outerWidth();
	h = elem.outerHeight();
	d = $("<div />").css({
		left: elem.offset().left,
		top: elem.offset().top,
		width: w + 'px',
		height: h + 'px',
		position: 'absolute',
		background: '#CCC',
		opacity: 0.2,
		zIndex: 1001
	}).attr("id", "lhover");
	
	limg = getLoadingImage();
	mleft = (w - 32) / 2;
	mtop = (h - 32) / 2;
	limg.css({'display': 'block', 'margin': mtop + 'px 0 0 ' + mleft + 'px'});
	d.append(limg);
	
	$("body").append(d);
}

function removeLoadingHover()
{
	$("#lhover").remove();
}

preloadbuttons = {};
function buttonToPreloader(elem, type, name)
{
	if (elem.hasClass("ui-button")){
		elem.addClass("ui-button-preloader");
	} else {
		elem.addClass("buttonpreloader");
                elem.addClass("buttonClicked");
	}
	if (!name){
		name = 'default';
	}
	if (typeof type == "undefined" || type == ""){
		type = "blue";
	}
	
	loader = getMiniLoader(type);
	loader.css({'position': 'absolute', 'margin': '-8px auto auto -8px', 'left': '50%', 'top':'50%'});
	elPos = elem.position();
	
	var outerWidth = elem.outerWidth();
	
	elem.addClass('ua-b-' + type + '-active');
	if (elem.is('input')) {
		elem.data('value', elem.attr('value'));
		elem.attr('value', '');
	} else {
		elem.data('html', elem.html());
		elem.html('');
	}
	
	if (elem.hasClass("ui-button")){
		elem.css('cssText', 'width:'+outerWidth+'px !important');
	}
	
	loadercont = $("<div />").css({
		'position': 'absolute',
		'left': elPos.left + 'px',
		'top': elPos.top + 'px',
		'width': outerWidth,
		'height': elem.innerHeight(),
		'margin-left': elem.css('margin-left'),
		'margin-top': elem.css('margin-top')
	}).html(loader);
	
	preloadbuttons[name] = loadercont;
	elem.after(preloadbuttons[name]);
}
tmpPreload = new Array();
function buttonPreload(type)
{
	if (typeof type == "undefined" || type == ""){
		type = "blue";
	}
	if (tmpPreload[type]){
		return;
	}
	tmpPreload[type] =  new Image(16, 16);
	tmpPreload[type].src = "/images/loader_mini_" + type + ".gif";
}
function clearPreloader(elem, name)
{
	if (!name){
		name = 'default';
	}
	
	if (elem.hasClass("ui-button")){
		elem.removeClass("ui-button-preloader");
	} else {
		elem.removeClass("buttonpreloader");
                elem.removeClass("buttonClicked");
	}
	elem.removeClass("ua-b-blue-active");
	
	if (elem.data('value')) {
		elem.attr('value', elem.data('value'));
	}
	if (elem.data('html')) {
		elem.html(elem.html());
	}
	
	if (!preloadbuttons[name]){
		return;
	}
	preloadbuttons[name].remove();
}

function getMiniLoader(type)
{
	if (typeof type == "undefined"){
		type = "";
	} else {
		type = "_" + type;
	}
	elem = $("<img />").attr({src: "/images/loader_mini" + type + ".gif", width: "16", height: "16"});
	return elem;
}

function preloadGif()
{
    var style = {'position': 'absolute', 'left': '50%', 'top':'50%'}
    return $("<img />").addClass('loading').css(style).attr({src: "/images/loading.gif", width: "32", height: "32"});
}

function darkPreloaderGif()
{
    var style = {'position': 'relative', 'left': '50%', 'top':'50%'};
    return $("<img />").css(style).attr({src: "/images/loader.gif", width: "32", height: "32"}).addClass('loading');
}

var $imTimeoutErr;
var $imTimeoutNot;
var imInited = false;
function showInlineMessage($message, $type, $right, $time, $callback)
{
	if (!imInited){
		initMessages();
		imInited = true;
	}
	
	if ($type == 'err'){
		c = $("#inlineMessages .err");
		clearTimeout($imTimeoutErr);
	} else {
		c = $("#inlineMessages .not");
		if ($.userApi.cookie('ignallguidlines')){
			return;
		}
		clearTimeout($imTimeoutNot);
	}
	c.find("div.right").html($right);
	c.find("div.left").html($message);
	
	if (typeof $message == 'object'){
		c.find("div.left").html($message);
		$message.show();
	} else {
		c.find("div.left").html($message);
	}
	
	c.stop(true,true).slideDown(200);
	
	c.find("a.close").click(_closeInlineMessage);
	if (c.find("a.ignore_all").length == 1){
		c.find("a.ignore_all").click(_ignoreAllGuidlines);
	}
	if (parseInt($time) > 0){
		if ($type == 'err'){
			$imTimeoutErr = setTimeout("hideInlineMessage()",$time);
		} else {
			$imTimeoutNot = setTimeout("hideInlineMessage('not')",$time);
		}
	}
	if ($(window).scrollTop() > $("#inlineMessages").position().top){
		var body = ($.browser.safari) ? $('body') : $('html');
		body.animate({scrollTop: $("#inlineMessages").position().top}, 300);
	}
	
	if (typeof $callback == 'function'){
		$callback(im);
	}
}
function _ignoreAllGuidlines(){
	$.userApi.cookie('ignallguidlines', true, { expires: 10*365, path: '/' });
	hideInlineMessage($(this).parent().parent().parent().attr("class"), true);
}
function _closeInlineMessage(){
	hideInlineMessage($(this).parent().parent().parent().attr("class"), true);
	return false;
}

function initMessages(){
	if ($("#inlineMessages").length >= 1){
		im = $("#inlineMessages");
	} else {
		im = $("<div />").attr({id: 'inlineMessages'});
		if ($(".apptopbg").length >=1){
			$(".apptopbg").after(im);
		} else {
			$("#content").before(im);
		}
	}
	
	cont = $("<div />").addClass("cont");
	cont.append($("<div />").addClass("left"));
	cont.append($("<div />").addClass("right"));
	cont.append($("<br />").addClass("clear"));
	contErr = cont.clone();
	not = $("<div />").addClass("not").append(cont);
	err = $("<div />").addClass("err").append(contErr);
	im.html("");
	im.append(not).append(err);
}

function hideInlineMessage(t,userClicked)
{
	if (t && t == 'not') {
		if (typeof onGuidlineClose == 'function'){
			r = onGuidlineClose($("#inlineMessages .not"), userClicked);
			if (r == true){
				$("#inlineMessages .not").slideUp(200);
			}
		} else {
			$("#inlineMessages .not").slideUp(200);
		}
		clearTimeout($imTimeoutNot);
	} else {
		if (typeof onNoticeClose == 'function'){
			r = onNoticeClose($("#inlineMessages .not"), userClicked);
			if (r == true){
				$("#inlineMessages .err").slideUp(200);
			}
		} else {
			$("#inlineMessages .err").slideUp(200);
		}
		clearTimeout($imTimeoutErr);
	}
}
function hideGuidline()
{
	hideInlineMessage('not');
}
function hideErrorMessage()
{
	hideInlineMessage('err');
}
function hideAllMessages()
{
	hideInlineMessage('not');
	hideInlineMessage('err');
}
function showErrorMessage(message, timeout, callback)
{
	right = $("<a>").addClass("close").text("Dismiss").attr({href: '#'});
	showInlineMessage(message, 'err', right, timeout, callback);
}

function showMessage(message, timeout, callback)
{
	right = '<a href="#" class="close">Dismiss</a> <span style="color: #D2D2D2">|</span> <a href="#" class="ignore_all">Ignore all</a>'; 
	showInlineMessage(message, 'not', right, timeout, callback);
}

function validEmail(email)
{
	var regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (regMail.test(email)){
		return true;
	}
	return false;
}

function validLink(link)
{
	var regLink = /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
	if (regLink.test(link)){
		return true;
	}
	return false;
}

function checkLink(link)
{
	var regLink = /^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
	if(regLink.test(link)) {
	    return true;
	} else {
	    return false;
	}
}

function isEmptyDefault(item, defaultVal)
{
   return item.hasClass("empty") || item.val() == "" || item.val() == defaultVal ? true : false;
   
}

function doActionOnBuyPoints()
{
	$.userApi.buyPoints();
}

function colorDiff(col1, col2)
{
	return (getColourDifference(col1, col2) + (getBrightnessDifference(col1, col2) * 4));
}

function getColourDifference(colour1, colour2)
{
	return ((Math.max((colour1 & 0xff0000) >> 16, (colour2 & 0xff0000) >> 16)-Math.min((colour1 & 0xff0000) >> 16, (colour2 & 0xff0000) >> 16))+(Math.max((colour1 & 0xff00) >> 8, (colour2 & 0xff00) >> 8)-Math.min((colour1 & 0xff00) >> 8, (colour2 & 0xff00) >> 8))+(Math.max(colour1 & 0xff, colour2 & 0xff)-Math.min(colour1 & 0xff, colour2 & 0xff)));
}

function getBrightnessDifference(colour1, colour2)
{
	return Math.max(((((colour1 & 0xff0000) >> 16)*288)+(((colour1 & 0xff00) >> 8)*587)+((colour1 & 0xff)*114))/1000, ((((colour2 & 0xff0000) >> 16)*288)+(((colour2 & 0xff00) >> 8)*587)+((colour2 & 0xff)*114))/1000)-Math.min(((((colour1 & 0xff0000) >> 16)*288)+(((colour1 & 0xff00) >> 8)*587)+((colour1 & 0xff)*114))/1000, ((((colour2 & 0xff0000) >> 16)*288)+(((colour2 & 0xff00) >> 8)*587)+((colour2 & 0xff)*114))/1000);
}

function hasFlash()
{
	var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
	if (plugin){
		return true;
	}
	try {
		var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
		if (a){
			return true;
			}
	} catch(e) {}
	return false;
}

/* jQuery selectBox */
//selectBox.js
function getScrollBarWidth() {
	var a = document.createElement("p");
	a.style.width = "100%";
	a.style.height = "200px";
	var b = document.createElement("div");
	b.style.position = "absolute";
	b.style.top = "0px";
	b.style.left = "0px";
	b.style.visibility = "hidden";
	b.style.width = "200px";
	b.style.height = "150px";
	b.style.overflow = "hidden";
	b.appendChild(a);
	document.body.appendChild(b);
	var c = a.offsetWidth;
	b.style.overflow = "scroll";
	var d = a.offsetWidth;
	if (c == d) d = b.clientWidth;
	document.body.removeChild(b);
	var e = c - d;
	if (e <= 0) {
		e = 17
	}
	return e
}

if (jQuery)(function (a) {
	a.extend(a.fn, {
		selectBox: function (b, c) {
			var d, e = "",
			f = navigator.platform.match(/mac/i);
			var g = function (b, c) {
				var d;
				if (b.tagName.toLowerCase() !== "select") return false;
				b = a(b);
				b.data("mobileDevice", navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i));
				if (b.data("mobileDevice")) {
					return false
				}
				if (b.data("selectBox-control")) {
					return false
				}
				var e = a('<a class="selectBox" />'),
				f = b.attr("multiple") || parseInt(b.attr("size")) > 1;
				var g = c || {};
				e.width(b.outerWidth()).addClass(b.attr("class")).attr("title", b.attr("title") || "").attr("tabindex", parseInt(b.attr("tabindex"))).css("display", "inline-block").bind("focus.selectBox", function () {
					if (this !== document.activeElement && document.body !== document.activeElement) a(document.activeElement).blur();
					if (e.hasClass("selectBox-active")) return;
					e.addClass("selectBox-active");
					b.trigger("focus")
				}).bind("blur.selectBox", function () {
					if (!e.hasClass("selectBox-active")) return;
					e.removeClass("selectBox-active");
					b.trigger("blur")
				});
				if (!a(window).data("selectBox-bindings")) {
					a(window).data("selectBox-bindings", true).bind("scroll.selectBox", q).bind("resize.selectBox", q)
				}
				if (b.attr("disabled")) e.addClass("selectBox-disabled");
				b.bind("click.selectBox", function (a) {
					e.focus();
					a.preventDefault()
				});
				if (f) {
					d = h(b, "inline");
					e.append(d).data("selectBox-options", d).addClass("selectBox-inline selectBox-menuShowing").bind("keydown.selectBox", function (a) {
						v(b, a)
					}).bind("keypress.selectBox", function (a) {
						w(b, a)
					}).bind("mousedown.selectBox", function (b) {
						if (a(b.target).is("A.selectBox-inline")) b.preventDefault();
						if (!e.hasClass("selectBox-focus")) e.focus()
					}).insertAfter(b);
					if (!b[0].style.height) {
						var k = b.attr("size") ? parseInt(b.attr("size")) : 5;
						var l = e.clone().removeAttr("id").css({
							position: "absolute",
							top: "-9999em"
						}).show().appendTo("body");
						l.find(".selectBox-options").html("<li><a> </a></li>");
						var m = parseInt(l.find(".selectBox-options A:first").html(" ").outerHeight());
						l.remove();
						e.height(m * k)
					}
					B(e)
				} else {
					var n = a('<span class="selectBox-label" />'),
					o = a('<span class="selectBox-arrow" />');
					n.attr("class", i(b)).text(j(b));
					d = h(b, "dropdown");
					d.appendTo("body");
					e.css({
						"margin-left": b.css("margin-left"),
						"margin-right": b.css("margin-right"),
						"margin-top": b.css("margin-top"),
						"margin-bottom": b.css("margin-bottom")
					});
					e.data("selectBox-options", d).addClass("selectBox-dropdown gradient").append(n).append(o).bind("mousedown.selectBox", function (a) {
						if (e.hasClass("selectBox-menuShowing")) {
							q()
						} else {
							a.stopPropagation();
							d.data("selectBox-down-at-x", a.screenX).data("selectBox-down-at-y", a.screenY);
							p(b)
						}
					}).bind("keydown.selectBox", function (a) {
						v(b, a)
					}).bind("keypress.selectBox", function (a) {
						w(b, a)
					}).bind("open.selectBox", function (a, c) {
						if (c && c._selectBox === true) return;
						p(b)
					}).bind("close.selectBox", function (a, b) {
						if (b && b._selectBox === true) return;
						q()
					}).insertAfter(b);
					var r = e.width() - o.width() - parseInt(n.css("paddingLeft")) - parseInt(n.css("paddingLeft"));
					n.width(r);
					B(e)
				}
				b.addClass("selectBox").data("selectBox-control", e).data("selectBox-settings", g).hide()
			};
			var h = function (b, c) {
				var d;
				var e = function (b, c) {
					b.children("OPTION, OPTGROUP").each(function () {
						if (a(this).is("OPTION")) {
							if (a(this).length > 0) {
								C(a(this), c)
							} else {
								c.append("<li> </li>")
							}
						} else {
							var b = a('<li class="selectBox-optgroup" />');
							b.text(a(this).attr("label"));
							c.append(b);
							c = e(a(this), c)
						}
					});
					return c
				};
				switch (c) {
				case "inline":
					d = a('<ul class="selectBox-options" />');
					d = e(b, d);
					d.find("A").bind("mouseover.selectBox", function (c) {
						s(b, a(this).parent())
					}).bind("mouseout.selectBox", function (c) {
						t(b, a(this).parent())
					}).bind("mousedown.selectBox", function (a) {
						a.preventDefault();
						if (!b.selectBox("control").hasClass("selectBox-active")) b.selectBox("control").focus()
					}).bind("mouseup.selectBox", function (c) {
						q();
						r(b, a(this).parent(), c)
					});
					B(d);
					return d;
				case "dropdown":
					d = a('<ul class="selectBox-dropdown-menu selectBox-options" />');
					d = e(b, d);
					d.data("selectBox-select", b).css("display", "none").appendTo("BODY").find("A").bind("mousedown.selectBox", function (a) {
						a.preventDefault();
						if (a.screenX === d.data("selectBox-down-at-x") && a.screenY === d.data("selectBox-down-at-y")) {
							d.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y");
							q()
						}
					}).bind("mouseup.selectBox", function (c) {
						if (c.screenX === d.data("selectBox-down-at-x") && c.screenY === d.data("selectBox-down-at-y")) {
							return
						} else {
							d.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y")
						}
						r(b, a(this).parent());
						q()
					}).bind("mouseover.selectBox", function (c) {
						s(b, a(this).parent())
					}).bind("mouseout.selectBox", function (c) {
						t(b, a(this).parent())
					});
					var f = b.attr("class") || "";
					if (f !== "") {
						f = f.split(" ");
						for (var g in f) d.addClass(f[g] + "-selectBox-dropdown-menu")
					}
					B(d);
					return d
				}
			};
			var i = function (b) {
				var c = a(b).find("OPTION:selected");
				return ("selectBox-label " + (c.attr("class") || "")).replace(/\s+$/, "")
			};
			var j = function (b) {
				var c = a(b).find("OPTION:selected");
				return c.text() || " "
			};
			var k = function (b) {
				b = a(b);
				var c = b.data("selectBox-control");
				if (!c) return;
				c.find(".selectBox-label").attr("class", i(b)).text(j(b))
			};
			var l = function (b) {
				if (a(b).data("mobileDevice")) {
					return
				}
				b = a(b);
				var c = b.data("selectBox-control");
				if (!c) return;
				var d = c.data("selectBox-options");
				d.remove();
				c.remove();
				b.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control", null).removeData("selectBox-settings").data("selectBox-settings", null).show()
			};
			var m = function (b) {
				b = a(b);
				b.selectBox("options", b.html())
			};
			var n = function (b) {
				if (a(b).data("mobileDevice")) {
					a(b).hide();
					return
				}
				a(b).data("selectBox-control").hide()
			};
			var o = function (b) {
				if (a(b).data("mobileDevice")) {
					a(b).show();
					return
				}
				a(b).data("selectBox-control").show()
			};
			var p = function (b) {
				b = a(b);
				var c = b.data("selectBox-control"),
				d = b.data("selectBox-settings"),
				e = c.data("selectBox-options");
				if (c.hasClass("selectBox-disabled")) return false;
				q();
				var f = isNaN(c.css("borderBottomWidth")) ? 0 : parseInt(c.css("borderBottomWidth"));
				e.css({
					top: c.offset().top + c.outerHeight() - f,
					left: c.offset().left,
					"min-width": c.innerWidth() + "px",
					width: "auto"
				});
				if (b.triggerHandler("beforeopen")) return false;
				var g = function () {
					b.triggerHandler("open", {
						_selectBox: true
					})
				};
				switch (d.menuTransition) {
				case "fade":
					e.fadeIn(d.menuSpeed, g);
					break;
				case "slide":
					e.slideDown(d.menuSpeed, g);
					break;
				default:
					e.show(d.menuSpeed, g);
					break
				}
				if (!d.menuSpeed) g();
				var h = e.find(".selectBox-selected:first");
				var i = e.find("li").size();
				if (e.width() > c.innerWidth() && e.height() < i * h.height()) {
					e.width(e.width() + getScrollBarWidth())
				}
				u(b, h, true);
				s(b, h);
				c.addClass("selectBox-menuShowing");
				a(document).bind("mousedown.selectBox", function (b) {
					if (a(b.target).parents().andSelf().hasClass("selectBox-options")) return;
					q()
				})
			};
			var q = function () {
				if (a(".selectBox-dropdown-menu:visible").length === 0) return;
				a(document).unbind("mousedown.selectBox");
				a(".selectBox-dropdown-menu").each(function () {
					var b = a(this),
					c = b.data("selectBox-select"),
					d = c.data("selectBox-control"),
					e = c.data("selectBox-settings");
					if (!e) {
						a(this).remove();
						return
					}
					if (c.triggerHandler("beforeclose")) return false;
					var f = function () {
						c.triggerHandler("close", {
							_selectBox: true
						})
					};
					switch (e.menuTransition) {
					case "fade":
						b.fadeOut(e.menuSpeed, f);
						break;
					case "slide":
						b.slideUp(e.menuSpeed, f);
						break;
					default:
						b.hide(e.menuSpeed, f);
						break
					}
					if (!e.menuSpeed) f();
					d.removeClass("selectBox-menuShowing")
				})
			};
			var r = function (b, c, d) {
				b = a(b);
				c = a(c);
				var e = b.data("selectBox-control"),
				g = b.data("selectBox-settings");
				if (e.hasClass("selectBox-disabled")) return false;
				if (c.length === 0 || c.hasClass("selectBox-disabled")) return false;
				if (b.attr("multiple")) {
					if (d.shiftKey && e.data("selectBox-last-selected")) {
						c.toggleClass("selectBox-selected");
						var h;
						if (c.index() > e.data("selectBox-last-selected").index()) {
							h = c.siblings().slice(e.data("selectBox-last-selected").index(), c.index())
						} else {
							h = c.siblings().slice(c.index(), e.data("selectBox-last-selected").index())
						}
						h = h.not(".selectBox-optgroup, .selectBox-disabled");
						if (c.hasClass("selectBox-selected")) {
							h.addClass("selectBox-selected")
						} else {
							h.removeClass("selectBox-selected")
						}
					} else if (f && d.metaKey || !f && d.ctrlKey) {
						c.toggleClass("selectBox-selected")
					} else {
						c.siblings().removeClass("selectBox-selected");
						c.addClass("selectBox-selected")
					}
				} else {
					c.siblings().removeClass("selectBox-selected");
					c.addClass("selectBox-selected")
				}
				if (e.hasClass("selectBox-dropdown")) {
					e.find(".selectBox-label").text(c.text())
				}
				var j = 0,
				k = [];
				if (b.attr("multiple")) {
					e.find(".selectBox-selected A").each(function () {
						k[j++] = a(this).attr("rel")
					})
				} else {
					k = c.find("A").attr("rel")
				}
				e.data("selectBox-last-selected", c);
				if (b.val() !== k) {
					b.val(k);
					e.find(".selectBox-label").attr("class", i(b)).text(c.text());
					b.trigger("change")
				}
				return true
			};
			var s = function (b, c) {
				b = a(b);
				c = a(c);
				var d = b.data("selectBox-control"),
				e = d.data("selectBox-options");
				e.find(".selectBox-hover").removeClass("selectBox-hover");
				c.addClass("selectBox-hover")
			};
			var t = function (b, c) {
				b = a(b);
				c = a(c);
				var d = b.data("selectBox-control"),
				e = d.data("selectBox-options");
				e.find(".selectBox-hover").removeClass("selectBox-hover")
			};
			var u = function (b, c, d) {
				if (!c || c.length === 0) return;
				b = a(b);
				var e = b.data("selectBox-control"),
				f = e.data("selectBox-options"),
				g = e.hasClass("selectBox-dropdown") ? f: f.parent(),
				h = parseInt(c.offset().top - g.position().top),
				i = parseInt(h + c.outerHeight());
				if (d) {
					g.scrollTop(c.offset().top - g.offset().top + g.scrollTop() - g.height() / 2)
				} else {
					if (h < 0) {
						g.scrollTop(c.offset().top - g.offset().top + g.scrollTop())
					}
					if (i > g.height()) {
						g.scrollTop(c.offset().top + c.outerHeight() - g.offset().top + g.scrollTop() - g.height())
					}
				}
			};
			var v = function (b, c) {
				b = a(b);
				var d = b.data("selectBox-control"),
				f = d.data("selectBox-options"),
				g = b.data("selectBox-settings"),
				h = 0,
				i = 0;
				if (d.hasClass("selectBox-disabled")) return;
				switch (c.keyCode) {
				case 8:
					c.preventDefault();
					e = "";
					break;
				case 9:
				case 27:
					q();
					t(b);
					break;
				case 13:
					if (d.hasClass("selectBox-menuShowing")) {
						r(b, f.find("LI.selectBox-hover:first"), c);
						if (d.hasClass("selectBox-dropdown")) q()
					} else {
						p(b)
					}
					break;
				case 38:
				case 37:
					c.preventDefault();
					if (d.hasClass("selectBox-menuShowing")) {
						var j = f.find(".selectBox-hover").prev("LI");
						h = f.find("LI:not(.selectBox-optgroup)").length;
						i = 0;
						while (j.length === 0 || j.hasClass("selectBox-disabled") || j.hasClass("selectBox-optgroup")) {
							j = j.prev("LI");
							if (j.length === 0) {
								if (g.loopOptions) {
									j = f.find("LI:last")
								} else {
									j = f.find("LI:first")
								}
							}
							if (++i >= h) break
						}
						s(b, j);
						r(b, j, c);
						u(b, j)
					} else {
						p(b)
					}
					break;
				case 40:
				case 39:
					c.preventDefault();
					if (d.hasClass("selectBox-menuShowing")) {
						var k = f.find(".selectBox-hover").next("LI");
						h = f.find("LI:not(.selectBox-optgroup)").length;
						i = 0;
						while (k.length === 0 || k.hasClass("selectBox-disabled") || k.hasClass("selectBox-optgroup")) {
							k = k.next("LI");
							if (k.length === 0) {
								if (g.loopOptions) {
									k = f.find("LI:first")
								} else {
									k = f.find("LI:last")
								}
							}
							if (++i >= h) break
						}
						s(b, k);
						r(b, k, c);
						u(b, k)
					} else {
						p(b)
					}
					break
				}
			};
			var w = function (b, c) {
				b = a(b);
				var f = b.data("selectBox-control"),
				g = f.data("selectBox-options");
				if (f.hasClass("selectBox-disabled")) return;
				switch (c.keyCode) {
				case 9:
				case 27:
				case 13:
				case 38:
				case 37:
				case 40:
				case 39:
					break;
				default:
					if (!f.hasClass("selectBox-menuShowing")) p(b);
					c.preventDefault();
					clearTimeout(d);
					e += String.fromCharCode(c.charCode || c.keyCode);
					g.find("A").each(function () {
						if (a(this).text().substr(0, e.length).toLowerCase() === e.toLowerCase()) {
							s(b, a(this).parent());
							u(b, a(this).parent());
							return false
						}
					});
					d = setTimeout(function () {
						e = ""
					},
					1e3);
					break
				}
			};
			var x = function (b) {
				b = a(b);
				b.attr("disabled", false);
				var c = b.data("selectBox-control");
				if (!c) return;
				c.removeClass("selectBox-disabled")
			};
			var y = function (b) {
				b = a(b);
				b.attr("disabled", true);
				var c = b.data("selectBox-control");
				if (!c) return;
				c.addClass("selectBox-disabled")
			};
			var z = function (b, c) {
				b = a(b);
				b.val(c);
				c = b.val();
				var d = b.data("selectBox-control");
				if (!d) return;
				var e = b.data("selectBox-settings"),
				f = d.data("selectBox-options");
				k(b);
				f.find(".selectBox-selected").removeClass("selectBox-selected");
				f.find("A").each(function () {
					if (typeof c === "object") {
						for (var b = 0; b < c.length; b++) {
							if (a(this).attr("rel") == c[b]) {
								a(this).parent().addClass("selectBox-selected")
							}
						}
					} else {
						if (a(this).attr("rel") == c) {
							a(this).parent().addClass("selectBox-selected")
						}
					}
				});
				if (e.change) e.change.call(b)
			};
			var A = function (b, d) {
				b = a(b);
				var e = b.data("selectBox-control"),
				f = b.data("selectBox-settings");
				switch (typeof c) {
				case "string":
					b.html(c);
					break;
				case "object":
					b.html("");
					for (var g in c) {
						if (c[g] === null) continue;
						if (typeof c[g] === "object") {
							var i = a('<optgroup label="' + g + '" />');
							for (var j in c[g]) {
								i.append('<option value="' + j + '">' + c[g][j] + "</option>")
							}
							b.append(i)
						} else {
							var l = a('<option value="' + g + '">' + c[g] + "</option>");
							b.append(l)
						}
					}
					break
				}
				if (!e) return;
				e.data("selectBox-options").remove();
				var m = e.hasClass("selectBox-dropdown") ? "dropdown": "inline";
				d = h(b, m);
				e.data("selectBox-options", d);
				switch (m) {
				case "inline":
					e.append(d);
					break;
				case "dropdown":
					k(b);
					a("BODY").append(d);
					break
				}
			};
			var B = function (b) {
				a(b).css("MozUserSelect", "none").bind("selectstart", function (a) {
					a.preventDefault()
				})
			};
                            var C = function (b, c) {
                                    var d = a("<li />"),
                                    e = a("<a />");
                                    d.addClass(b.attr("class"));
                                    d.data(b.data());
                                    e.attr("rel", b.val()).html(b.html());
                                    d.append(e);
                                    if (b.attr("disabled")) d.addClass("selectBox-disabled");
                                    if (b.attr("selected")) d.addClass("selectBox-selected");
                                    if (b.attr("style")) {
                                        //e.attr("style", b.attr("style"));
                                        e.css({fontFamily: b.val()});
                                    }
                                    c.append(d)
                            };
			switch (b) {
			case "control":
				return a(this).data("selectBox-control");
			case "settings":
				if (!c) return a(this).data("selectBox-settings");
				a(this).each(function () {
					a(this).data("selectBox-settings", a.extend(true, a(this).data("selectBox-settings"), c))
				});
				break;
			case "options":
				if (c === undefined) return a(this).data("selectBox-control").data("selectBox-options");
				a(this).each(function () {
					A(this, c)
				});
				break;
			case "value":
				if (c === undefined) return a(this).val();
				a(this).each(function () {
					z(this, c)
				});
				break;
			case "refresh":
				a(this).each(function () {
					m(this)
				});
				break;
			case "enable":
				a(this).each(function () {
					x(this)
				});
				break;
			case "disable":
				a(this).each(function () {
					y(this)
				});
				break;
			case "destroy":
				a(this).each(function () {
					l(this)
				});
				break;
			case "hide":
				a(this).each(function () {
					n(this)
				});
				break;
			case "show":
				a(this).each(function () {
					o(this)
				});
				break;
			default:
				a(this).each(function () {
					g(this, b)
				});
				break
			}
			return a(this)
		}
	})
})(jQuery);


/* IFrame Loader Plugin for JQuery */

(function($) {

  var timer;

  $.fn.src = function(url, onLoad, options) {
    setIFrames($(this), onLoad, options, function() {
      this.src = url;
    });
    return $(this);
  }

  $.fn.squirt = function(content, onLoad, options) {

    setIFrames($(this), onLoad, options, function() {
      var doc = this.contentDocument || this.contentWindow.document;
      doc.open();
      doc.writeln(content);
      doc.close();
    });
    return this;

  }

  function setIFrames(iframes, onLoad, options, iFrameSetter) {
    iframes.each(function() {
      if (this.tagName=="IFRAME") setIFrame(this, onLoad, options, iFrameSetter);
    });
  }

  function setIFrame(iframe, onLoad, options, iFrameSetter) {

    var iframe;
    iframe.onload = null;
    if (timer) clearTimeout(timer);

    var defaults = {
      timeoutDuration: 0,
      timeout: null
    }
    var opts = $.extend(defaults, options);
    if (opts.timeout && !opts.timeoutDuration) opts.timeoutDuration = 60000;

    opts.frameactive = true;
    var startTime = (new Date()).getTime();
    if (opts.timeout) {
      var timer = setTimeout(function() {
        opts.frameactive=false; 
        iframe.onload=null;
        if (opts.timeout) opts.timeout(iframe, opts.timeout);
      }, opts.timeoutDuration);
    }

    var onloadHandler = function() {
      var duration=(new Date()).getTime()-startTime;
      if (timer) clearTimeout(timer);
      if (onLoad && opts.frameactive) onLoad.apply(iframe,[duration]);
      opts.frameactive=false;
    }
    iFrameSetter.apply(iframe);
    iframe.onload = onloadHandler;
    opts.completeReadyStateChanges=0;
    iframe.onreadystatechange = function() { // IE ftw
	    if (++(opts.completeReadyStateChanges)==3) onloadHandler();
    }

    return iframe;

  };

})(jQuery);