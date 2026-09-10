var gl=Object.defineProperty;var vl=(s,t,e)=>t in s?gl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var ma=(s,t,e)=>vl(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yr="172",_l=0,ga=1,xl=2,Ao=1,wo=2,nn=3,vn=0,be=1,Ye=2,mn=0,ri=1,va=2,_a=3,xa=4,yl=5,Pn=100,Ml=101,Sl=102,El=103,bl=104,Tl=200,Al=201,wl=202,Rl=203,rr=204,ar=205,Cl=206,Dl=207,Ll=208,Pl=209,Il=210,Ul=211,Nl=212,Fl=213,Ol=214,or=0,lr=1,cr=2,li=3,hr=4,ur=5,dr=6,fr=7,Ro=0,Bl=1,zl=2,gn=0,kl=1,Hl=2,Vl=3,Gl=4,Wl=5,Xl=6,ql=7,Co=300,ci=301,hi=302,pr=303,mr=304,ys=306,gr=1e3,Nn=1001,vr=1002,Ge=1003,Yl=1004,Bi=1005,Ke=1006,As=1007,Fn=1008,on=1009,Do=1010,Lo=1011,Di=1012,$r=1013,Bn=1014,sn=1015,Pi=1016,Kr=1017,Zr=1018,ui=1020,Po=35902,Io=1021,Uo=1022,Ve=1023,No=1024,Fo=1025,ai=1026,di=1027,Oo=1028,jr=1029,Bo=1030,Jr=1031,Qr=1033,cs=33776,hs=33777,us=33778,ds=33779,_r=35840,xr=35841,yr=35842,Mr=35843,Sr=36196,Er=37492,br=37496,Tr=37808,Ar=37809,wr=37810,Rr=37811,Cr=37812,Dr=37813,Lr=37814,Pr=37815,Ir=37816,Ur=37817,Nr=37818,Fr=37819,Or=37820,Br=37821,fs=36492,zr=36494,kr=36495,zo=36283,Hr=36284,Vr=36285,Gr=36286,$l=3200,Kl=3201,ko=0,Zl=1,pn="",Ne="srgb",fi="srgb-linear",ms="linear",Kt="srgb",Vn=7680,ya=519,jl=512,Jl=513,Ql=514,Ho=515,tc=516,ec=517,nc=518,ic=519,Ma=35044,Sa="300 es",rn=2e3,gs=2001;class mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ea=1234567;const Ri=Math.PI/180,Li=180/Math.PI;function gi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[s&255]+ve[s>>8&255]+ve[s>>16&255]+ve[s>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function Ft(s,t,e){return Math.max(t,Math.min(e,s))}function ta(s,t){return(s%t+t)%t}function sc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function rc(s,t,e){return s!==t?(e-s)/(t-s):0}function Ci(s,t,e){return(1-e)*s+e*t}function ac(s,t,e,n){return Ci(s,t,1-Math.exp(-e*n))}function oc(s,t=1){return t-Math.abs(ta(s,t*2)-t)}function lc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function cc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function hc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function uc(s,t){return s+Math.random()*(t-s)}function dc(s){return s*(.5-Math.random())}function fc(s){s!==void 0&&(Ea=s);let t=Ea+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pc(s){return s*Ri}function mc(s){return s*Li}function gc(s){return(s&s-1)===0&&s!==0}function vc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _c(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function xc(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*f,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ni(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ye(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ws={DEG2RAD:Ri,RAD2DEG:Li,generateUUID:gi,clamp:Ft,euclideanModulo:ta,mapLinear:sc,inverseLerp:rc,lerp:Ci,damp:ac,pingpong:oc,smoothstep:lc,smootherstep:cc,randInt:hc,randFloat:uc,randFloatSpread:dc,seededRandom:fc,degToRad:pc,radToDeg:mc,isPowerOfTwo:gc,ceilPowerOfTwo:vc,floorPowerOfTwo:_c,setQuaternionFromProperEuler:xc,normalize:ye,denormalize:ni};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(t,e,n,i,r,a,o,l,c){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],v=i[0],m=i[3],u=i[6],T=i[1],E=i[4],M=i[7],w=i[2],A=i[5],C=i[8];return r[0]=a*v+o*T+l*w,r[3]=a*m+o*E+l*A,r[6]=a*u+o*M+l*C,r[1]=c*v+h*T+f*w,r[4]=c*m+h*E+f*A,r[7]=c*u+h*M+f*C,r[2]=d*v+p*T+g*w,r[5]=d*m+p*E+g*A,r[8]=d*u+p*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*f+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=d*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Rs.makeScale(t,e)),this}rotate(t){return this.premultiply(Rs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rs=new Dt;function Vo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yc(){const s=vs("canvas");return s.style.display="block",s}const ba={};function ii(s){s in ba||(ba[s]=!0,console.warn(s))}function Mc(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Sc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ec(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ta=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Aa=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bc(){const s={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Kt&&(i.r=an(i.r),i.g=an(i.g),i.b=an(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pn?ms:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[fi]:{primaries:t,whitePoint:n,transfer:ms,toXYZ:Ta,fromXYZ:Aa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:Kt,toXYZ:Ta,fromXYZ:Aa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),s}const Xt=bc();function an(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gn;class Tc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gn===void 0&&(Gn=vs("canvas")),Gn.width=t.width,Gn.height=t.height;const n=Gn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=an(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(an(e[n]/255)*255):e[n]=an(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ac=0;class Go{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Cs(i[a].image)):r.push(Cs(i[a]))}else r=Cs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Cs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Tc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wc=0;class Te extends mi{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Nn,i=Nn,r=Ke,a=Fn,o=Ve,l=on,c=Te.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=gi(),this.name="",this.source=new Go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Co)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case vr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case vr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Co;Te.DEFAULT_ANISOTROPY=1;class Zt{constructor(t=0,e=0,n=0,i=1){Zt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,M=(p+1)/2,w=(u+1)/2,A=(h+d)/4,C=(f+v)/4,U=(g+m)/4;return E>M&&E>w?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=A/n,r=C/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=U/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=C/r,i=U/r),this.set(n,i,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-v)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this.w=Ft(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this.w=Ft(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rc extends mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Zt(0,0,t,e),this.scissorTest=!1,this.viewport=new Zt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Go(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Rc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wo extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cc extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(f!==v||l!==d||c!==p||h!==g){let m=1-o;const u=l*d+c*p+h*g+f*v,T=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const w=Math.sqrt(E),A=Math.atan2(w,u*T);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}const M=o*T;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,f=f*m+v*M,m===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=w,c*=w,h*=w,f*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*p-c*d,t[e+1]=l*g+h*d+c*f-o*p,t[e+2]=c*g+h*p+o*d-l*f,t[e+3]=h*g-o*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"YZX":this._x=d*h*f+c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f-d*p*g;break;case"XZY":this._x=d*h*f-c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ds.copy(this).projectOnVector(t),this.sub(Ds)}reflect(t){return this.sub(Ds.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new R,wa=new Ii;class Ui{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Be):Be.fromBufferAttribute(r,a),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(t.matrixWorld),this.union(zi)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yi),ki.subVectors(this.max,yi),Wn.subVectors(t.a,yi),Xn.subVectors(t.b,yi),qn.subVectors(t.c,yi),ln.subVectors(Xn,Wn),cn.subVectors(qn,Xn),Sn.subVectors(Wn,qn);let e=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-Sn.z,Sn.y,ln.z,0,-ln.x,cn.z,0,-cn.x,Sn.z,0,-Sn.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-Sn.y,Sn.x,0];return!Ls(e,Wn,Xn,qn,ki)||(e=[1,0,0,0,1,0,0,0,1],!Ls(e,Wn,Xn,qn,ki))?!1:(Hi.crossVectors(ln,cn),e=[Hi.x,Hi.y,Hi.z],Ls(e,Wn,Xn,qn,ki))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const je=[new R,new R,new R,new R,new R,new R,new R,new R],Be=new R,zi=new Ui,Wn=new R,Xn=new R,qn=new R,ln=new R,cn=new R,Sn=new R,yi=new R,ki=new R,Hi=new R,En=new R;function Ls(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){En.fromArray(s,r);const o=i.x*Math.abs(En.x)+i.y*Math.abs(En.y)+i.z*Math.abs(En.z),l=t.dot(En),c=e.dot(En),h=n.dot(En);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Dc=new Ui,Mi=new R,Ps=new R;class Ni{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mi.subVectors(t,this.center);const e=Mi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Mi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ps.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mi.copy(t.center).add(Ps)),this.expandByPoint(Mi.copy(t.center).sub(Ps))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new R,Is=new R,Vi=new R,hn=new R,Us=new R,Gi=new R,Ns=new R;class Ms{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Is.copy(t).add(e).multiplyScalar(.5),Vi.copy(e).sub(t).normalize(),hn.copy(this.origin).sub(Is);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Vi),o=hn.dot(this.direction),l=-hn.dot(Vi),c=hn.lengthSq(),h=Math.abs(1-a*a);let f,d,p,g;if(h>0)if(f=a*l-o,d=a*o-l,g=r*h,f>=0)if(d>=-g)if(d<=g){const v=1/h;f*=v,d*=v,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Is).addScaledVector(Vi,d),p}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const n=Je.dot(this.direction),i=Je.dot(Je)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,n,i,r){Us.subVectors(e,t),Gi.subVectors(n,t),Ns.crossVectors(Us,Gi);let a=this.direction.dot(Ns),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hn.subVectors(this.origin,t);const l=o*this.direction.dot(Gi.crossVectors(hn,Gi));if(l<0)return null;const c=o*this.direction.dot(Us.cross(hn));if(c<0||l+c>a)return null;const h=-o*hn.dot(Ns);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,i,r,a,o,l,c,h,f,d,p,g,v,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,d,p,g,v,m)}set(t,e,n,i,r,a,o,l,c,h,f,d,p,g,v,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Yn.setFromMatrixColumn(t,0).length(),r=1/Yn.setFromMatrixColumn(t,1).length(),a=1/Yn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*f,g=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*f,g=c*h,v=c*f;e[0]=d+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*f,g=c*h,v=c*f;e[0]=d-v*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*f,g=o*h,v=o*f;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*f,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*f,e[8]=g*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*f+g,e[10]=d-v*f}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+v,e[5]=a*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*h,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lc,t,Pc)}lookAt(t,e,n){const i=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),un.crossVectors(n,Re),un.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),un.crossVectors(n,Re)),un.normalize(),Wi.crossVectors(Re,un),i[0]=un.x,i[4]=Wi.x,i[8]=Re.x,i[1]=un.y,i[5]=Wi.y,i[9]=Re.y,i[2]=un.z,i[6]=Wi.z,i[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],u=n[14],T=n[3],E=n[7],M=n[11],w=n[15],A=i[0],C=i[4],U=i[8],S=i[12],y=i[1],L=i[5],O=i[9],F=i[13],G=i[2],X=i[6],V=i[10],$=i[14],H=i[3],tt=i[7],ot=i[11],_t=i[15];return r[0]=a*A+o*y+l*G+c*H,r[4]=a*C+o*L+l*X+c*tt,r[8]=a*U+o*O+l*V+c*ot,r[12]=a*S+o*F+l*$+c*_t,r[1]=h*A+f*y+d*G+p*H,r[5]=h*C+f*L+d*X+p*tt,r[9]=h*U+f*O+d*V+p*ot,r[13]=h*S+f*F+d*$+p*_t,r[2]=g*A+v*y+m*G+u*H,r[6]=g*C+v*L+m*X+u*tt,r[10]=g*U+v*O+m*V+u*ot,r[14]=g*S+v*F+m*$+u*_t,r[3]=T*A+E*y+M*G+w*H,r[7]=T*C+E*L+M*X+w*tt,r[11]=T*U+E*O+M*V+w*ot,r[15]=T*S+E*F+M*$+w*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],u=t[15];return g*(+r*l*f-i*c*f-r*o*d+n*c*d+i*o*p-n*l*p)+v*(+e*l*p-e*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+m*(+e*c*f-e*o*p-r*a*f+n*a*p+r*o*h-n*c*h)+u*(-i*o*h-e*l*f+e*o*d+i*a*f-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],u=t[15],T=f*m*c-v*d*c+v*l*p-o*m*p-f*l*u+o*d*u,E=g*d*c-h*m*c-g*l*p+a*m*p+h*l*u-a*d*u,M=h*v*c-g*f*c+g*o*p-a*v*p-h*o*u+a*f*u,w=g*f*l-h*v*l-g*o*d+a*v*d+h*o*m-a*f*m,A=e*T+n*E+i*M+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=T*C,t[1]=(v*d*r-f*m*r-v*i*p+n*m*p+f*i*u-n*d*u)*C,t[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*u+n*l*u)*C,t[3]=(f*l*r-o*d*r-f*i*c+n*d*c+o*i*p-n*l*p)*C,t[4]=E*C,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*u+e*d*u)*C,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*u-e*l*u)*C,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*p+e*l*p)*C,t[8]=M*C,t[9]=(g*f*r-h*v*r-g*n*p+e*v*p+h*n*u-e*f*u)*C,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*u+e*o*u)*C,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*p-e*o*p)*C,t[12]=w*C,t[13]=(h*v*i-g*f*i+g*n*d-e*v*d-h*n*m+e*f*m)*C,t[14]=(g*o*i-a*v*i-g*n*l+e*v*l+a*n*m-e*o*m)*C,t[15]=(a*f*i-h*o*i+h*n*l-e*f*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,p=r*h,g=r*f,v=a*h,m=a*f,u=o*f,T=l*c,E=l*h,M=l*f,w=n.x,A=n.y,C=n.z;return i[0]=(1-(v+u))*w,i[1]=(p+M)*w,i[2]=(g-E)*w,i[3]=0,i[4]=(p-M)*A,i[5]=(1-(d+u))*A,i[6]=(m+T)*A,i[7]=0,i[8]=(g+E)*C,i[9]=(m-T)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Yn.set(i[0],i[1],i[2]).length();const a=Yn.set(i[4],i[5],i[6]).length(),o=Yn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ze.copy(this);const c=1/r,h=1/a,f=1/o;return ze.elements[0]*=c,ze.elements[1]*=c,ze.elements[2]*=c,ze.elements[4]*=h,ze.elements[5]*=h,ze.elements[6]*=h,ze.elements[8]*=f,ze.elements[9]*=f,ze.elements[10]*=f,e.setFromRotationMatrix(ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=rn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(o===rn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===gs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=rn){const l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(a-r),d=(e+t)*c,p=(n+i)*h;let g,v;if(o===rn)g=(a+r)*f,v=-2*f;else if(o===gs)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yn=new R,ze=new te,Lc=new R(0,0,0),Pc=new R(1,1,1),un=new R,Wi=new R,Re=new R,Ra=new te,Ca=new Ii;class Xe{constructor(t=0,e=0,n=0,i=Xe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ra.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ra,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ca.setFromEuler(this),this.setFromQuaternion(Ca,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xe.DEFAULT_ORDER="XYZ";class ea{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ic=0;const Da=new R,$n=new Ii,Qe=new te,Xi=new R,Si=new R,Uc=new R,Nc=new Ii,La=new R(1,0,0),Pa=new R(0,1,0),Ia=new R(0,0,1),Ua={type:"added"},Fc={type:"removed"},Kn={type:"childadded",child:null},Fs={type:"childremoved",child:null};class fe extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new R,e=new Xe,n=new Ii,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new Dt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(La,t)}rotateY(t){return this.rotateOnAxis(Pa,t)}rotateZ(t){return this.rotateOnAxis(Ia,t)}translateOnAxis(t,e){return Da.copy(t).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(La,t)}translateY(t){return this.translateOnAxis(Pa,t)}translateZ(t){return this.translateOnAxis(Ia,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xi.copy(t):Xi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(Si,Xi,this.up):Qe.lookAt(Xi,Si,this.up),this.quaternion.setFromRotationMatrix(Qe),i&&(Qe.extractRotation(i.matrixWorld),$n.setFromRotationMatrix(Qe),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ua),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fc),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ua),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,t,Uc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,Nc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new R(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ke=new R,tn=new R,Os=new R,en=new R,Zn=new R,jn=new R,Na=new R,Bs=new R,zs=new R,ks=new R,Hs=new Zt,Vs=new Zt,Gs=new Zt;class He{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ke.subVectors(t,e),i.cross(ke);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ke.subVectors(i,e),tn.subVectors(n,e),Os.subVectors(t,e);const a=ke.dot(ke),o=ke.dot(tn),l=ke.dot(Os),c=tn.dot(tn),h=tn.dot(Os),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,en.x),l.addScaledVector(a,en.y),l.addScaledVector(o,en.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Hs.setScalar(0),Vs.setScalar(0),Gs.setScalar(0),Hs.fromBufferAttribute(t,e),Vs.fromBufferAttribute(t,n),Gs.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Hs,r.x),a.addScaledVector(Vs,r.y),a.addScaledVector(Gs,r.z),a}static isFrontFacing(t,e,n,i){return ke.subVectors(n,e),tn.subVectors(t,e),ke.cross(tn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),ke.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Zn.subVectors(i,n),jn.subVectors(r,n),Bs.subVectors(t,n);const l=Zn.dot(Bs),c=jn.dot(Bs);if(l<=0&&c<=0)return e.copy(n);zs.subVectors(t,i);const h=Zn.dot(zs),f=jn.dot(zs);if(h>=0&&f<=h)return e.copy(i);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Zn,a);ks.subVectors(t,r);const p=Zn.dot(ks),g=jn.dot(ks);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(jn,o);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return Na.subVectors(r,i),o=(f-h)/(f-h+(p-g)),e.copy(i).addScaledVector(Na,o);const u=1/(m+v+d);return a=v*u,o=d*u,e.copy(n).addScaledVector(Zn,a).addScaledVector(jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},qi={h:0,s:0,l:0};function Ws(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=ta(t,1),e=Ft(e,0,1),n=Ft(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ws(a,r,t+1/3),this.g=Ws(a,r,t),this.b=Ws(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=Xo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=an(t.r),this.g=an(t.g),this.b=an(t.b),this}copyLinearToSRGB(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Xt.fromWorkingColorSpace(_e.copy(this),t),Math.round(Ft(_e.r*255,0,255))*65536+Math.round(Ft(_e.g*255,0,255))*256+Math.round(Ft(_e.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(_e.copy(this),e);const n=_e.r,i=_e.g,r=_e.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=Ne){Xt.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,n=_e.g,i=_e.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(dn),this.setHSL(dn.h+t,dn.s+e,dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(dn),t.getHSL(qi);const n=Ci(dn.h,qi.h,e),i=Ci(dn.s,qi.s,e),r=Ci(dn.l,qi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new It;It.NAMES=Xo;let Oc=0;class kn extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=ri,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rr,this.blendDst=ar,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rr&&(n.blendSrc=this.blendSrc),this.blendDst!==ar&&(n.blendDst=this.blendDst),this.blendEquation!==Pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xn extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new R,Yi=new Gt;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ma,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yi.fromBufferAttribute(this,e),Yi.applyMatrix3(t),this.setXY(e,Yi.x,Yi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ma&&(t.usage=this.usage),t}}class qo extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yo extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bc=0;const Ue=new te,Xs=new fe,Jn=new R,Ce=new Ui,Ei=new Ui,de=new R;class Ae extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vo(t)?Yo:qo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return Xs.lookAt(t),Xs.updateMatrix(),this.applyMatrix4(Xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ce.setFromBufferAttribute(r),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Ce.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Ce.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Ce.min),this.boundingBox.expandByPoint(Ce.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ce.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ei.setFromBufferAttribute(o),this.morphTargetsRelative?(de.addVectors(Ce.min,Ei.min),Ce.expandByPoint(de),de.addVectors(Ce.max,Ei.max),Ce.expandByPoint(de)):(Ce.expandByPoint(Ei.min),Ce.expandByPoint(Ei.max))}Ce.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)de.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(de));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)de.fromBufferAttribute(o,c),l&&(Jn.fromBufferAttribute(t,c),de.add(Jn)),i=Math.max(i,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new R,l[U]=new R;const c=new R,h=new R,f=new R,d=new Gt,p=new Gt,g=new Gt,v=new R,m=new R;function u(U,S,y){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,y),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),f.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[U].add(v),o[S].add(v),o[y].add(v),l[U].add(m),l[S].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let U=0,S=T.length;U<S;++U){const y=T[U],L=y.start,O=y.count;for(let F=L,G=L+O;F<G;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new R,M=new R,w=new R,A=new R;function C(U){w.fromBufferAttribute(i,U),A.copy(w);const S=o[U];E.copy(S),E.sub(w.multiplyScalar(w.dot(S))).normalize(),M.crossVectors(A,S);const L=M.dot(l[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,L)}for(let U=0,S=T.length;U<S;++U){const y=T[U],L=y.start,O=y.count;for(let F=L,G=L+O;F<G;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,f=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let u=0;u<h;u++)d[g++]=c[p++]}return new We(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fa=new te,bn=new Ms,$i=new Ni,Oa=new R,Ki=new R,Zi=new R,ji=new R,qs=new R,Ji=new R,Ba=new R,Qi=new R;class Rt extends fe{constructor(t=new Ae,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ji.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(qs.fromBufferAttribute(f,t),a?Ji.addScaledVector(qs,h):Ji.addScaledVector(qs.sub(e),h))}e.add(Ji)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),bn.copy(t.ray).recast(t.near),!($i.containsPoint(bn.origin)===!1&&(bn.intersectSphere($i,Oa)===null||bn.origin.distanceToSquared(Oa)>(t.far-t.near)**2))&&(Fa.copy(r).invert(),bn.copy(t.ray).applyMatrix4(Fa),!(n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],u=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,w=E;M<w;M+=3){const A=o.getX(M),C=o.getX(M+1),U=o.getX(M+2);i=ts(this,u,t,n,c,h,f,A,C,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const T=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);i=ts(this,a,t,n,c,h,f,T,E,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],u=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,w=E;M<w;M+=3){const A=M,C=M+1,U=M+2;i=ts(this,u,t,n,c,h,f,A,C,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const T=m,E=m+1,M=m+2;i=ts(this,a,t,n,c,h,f,T,E,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function zc(s,t,e,n,i,r,a,o){let l;if(t.side===be?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===vn,o),l===null)return null;Qi.copy(o),Qi.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Qi);return c<e.near||c>e.far?null:{distance:c,point:Qi.clone(),object:s}}function ts(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Ki),s.getVertexPosition(l,Zi),s.getVertexPosition(c,ji);const h=zc(s,t,e,n,Ki,Zi,ji,Ba);if(h){const f=new R;He.getBarycoord(Ba,Ki,Zi,ji,f),i&&(h.uv=He.getInterpolatedAttribute(i,o,l,c,f,new Gt)),r&&(h.uv1=He.getInterpolatedAttribute(r,o,l,c,f,new Gt)),a&&(h.normal=He.getInterpolatedAttribute(a,o,l,c,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new R,materialIndex:0};He.getNormal(Ki,Zi,ji,d.normal),h.face=d,h.barycoord=f}return h}class ie extends Ae{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(f,2));function g(v,m,u,T,E,M,w,A,C,U,S){const y=M/C,L=w/U,O=M/2,F=w/2,G=A/2,X=C+1,V=U+1;let $=0,H=0;const tt=new R;for(let ot=0;ot<V;ot++){const _t=ot*L-F;for(let Ut=0;Ut<X;Ut++){const jt=Ut*y-O;tt[v]=jt*T,tt[m]=_t*E,tt[u]=G,c.push(tt.x,tt.y,tt.z),tt[v]=0,tt[m]=0,tt[u]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),f.push(Ut/C),f.push(1-ot/U),$+=1}}for(let ot=0;ot<U;ot++)for(let _t=0;_t<C;_t++){const Ut=d+_t+X*ot,jt=d+_t+X*(ot+1),Y=d+(_t+1)+X*(ot+1),et=d+(_t+1)+X*ot;l.push(Ut,jt,et),l.push(jt,Y,et),H+=6}o.addGroup(p,H,S),p+=H,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Me(s){const t={};for(let e=0;e<s.length;e++){const n=pi(s[e]);for(const i in n)t[i]=n[i]}return t}function kc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function $o(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Hc={clone:pi,merge:Me};var Vc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vc,this.fragmentShader=Gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pi(t.uniforms),this.uniformsGroups=kc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ko extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fn=new R,za=new Gt,ka=new Gt;class De extends Ko{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Li*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ri*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Li*2*Math.atan(Math.tan(Ri*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fn.x,fn.y).multiplyScalar(-t/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fn.x,fn.y).multiplyScalar(-t/fn.z)}getViewSize(t,e){return this.getViewBounds(t,za,ka),e.subVectors(ka,za)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ri*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qn=-90,ti=1;class Wc extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new De(Qn,ti,t,e);i.layers=this.layers,this.add(i);const r=new De(Qn,ti,t,e);r.layers=this.layers,this.add(r);const a=new De(Qn,ti,t,e);a.layers=this.layers,this.add(a);const o=new De(Qn,ti,t,e);o.layers=this.layers,this.add(o);const l=new De(Qn,ti,t,e);l.layers=this.layers,this.add(l);const c=new De(Qn,ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zo extends Te{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ci,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xc extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Zo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ie(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:mn});r.uniforms.tEquirect.value=e;const a=new Rt(i,r),o=e.minFilter;return e.minFilter===Fn&&(e.minFilter=Ke),new Wc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class Ss{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new Ss(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qc extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ys=new R,Yc=new R,$c=new Dt;class Dn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ys.subVectors(n,e).cross(Yc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ys),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$c.getNormalMatrix(t),i=this.coplanarPoint(Ys).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new Ni,es=new R;class na{constructor(t=new Dn,e=new Dn,n=new Dn,i=new Dn,r=new Dn,a=new Dn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],p=i[8],g=i[9],v=i[10],m=i[11],u=i[12],T=i[13],E=i[14],M=i[15];if(n[0].setComponents(l-r,d-c,m-p,M-u).normalize(),n[1].setComponents(l+r,d+c,m+p,M+u).normalize(),n[2].setComponents(l+a,d+h,m+g,M+T).normalize(),n[3].setComponents(l-a,d-h,m-g,M-T).normalize(),n[4].setComponents(l-o,d-f,m-v,M-E).normalize(),e===rn)n[5].setComponents(l+o,d+f,m+v,M+E).normalize();else if(e===gs)n[5].setComponents(o,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(t){return Tn.center.set(0,0,0),Tn.radius=.7071067811865476,Tn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(es.x=i.normal.x>0?t.max.x:t.min.x,es.y=i.normal.y>0?t.max.y:t.min.y,es.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(es)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jo extends kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _s=new R,xs=new R,Ha=new te,bi=new Ms,ns=new Ni,$s=new R,Va=new R;class Kc extends fe{constructor(t=new Ae,e=new jo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)_s.fromBufferAttribute(e,i-1),xs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=_s.distanceTo(xs);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(i),ns.radius+=r,t.ray.intersectsSphere(ns)===!1)return;Ha.copy(i).invert(),bi.copy(t.ray).applyMatrix4(Ha);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const u=h.getX(v),T=h.getX(v+1),E=is(this,t,bi,l,u,T);E&&e.push(E)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),u=is(this,t,bi,l,v,m);u&&e.push(u)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const u=is(this,t,bi,l,v,v+1);u&&e.push(u)}if(this.isLineLoop){const v=is(this,t,bi,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function is(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(_s.fromBufferAttribute(a,i),xs.fromBufferAttribute(a,r),e.distanceSqToSegment(_s,xs,$s,Va)>n)return;$s.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo($s);if(!(l<t.near||l>t.far))return{distance:l,point:Va.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Ga=new R,Wa=new R;class Zc extends Kc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ga.fromBufferAttribute(e,i),Wa.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ga.distanceTo(Wa);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jo extends kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xa=new te,Wr=new Ms,ss=new Ni,rs=new R;class jc extends fe{constructor(t=new Ae,e=new Jo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(i),ss.radius+=r,t.ray.intersectsSphere(ss)===!1)return;Xa.copy(i).invert(),Wr.copy(t.ray).applyMatrix4(Xa);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);rs.fromBufferAttribute(f,m),qa(rs,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,v=p;g<v;g++)rs.fromBufferAttribute(f,g),qa(rs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qa(s,t,e,n,i,r,a){const o=Wr.distanceSqToPoint(s);if(o<e){const l=new R;Wr.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class On extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Qo extends Te{constructor(t,e,n,i,r,a,o,l,c,h=ai){if(h!==ai&&h!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ai&&(n=Bn),n===void 0&&h===di&&(n=ui),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $e extends Ae{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],d=[],p=[];let g=0;const v=[],m=n/2;let u=0;T(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new me(f,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(p,2));function T(){const M=new R,w=new R;let A=0;const C=(e-t)/n;for(let U=0;U<=r;U++){const S=[],y=U/r,L=y*(e-t)+t;for(let O=0;O<=i;O++){const F=O/i,G=F*l+o,X=Math.sin(G),V=Math.cos(G);w.x=L*X,w.y=-y*n+m,w.z=L*V,f.push(w.x,w.y,w.z),M.set(X,C,V).normalize(),d.push(M.x,M.y,M.z),p.push(F,1-y),S.push(g++)}v.push(S)}for(let U=0;U<i;U++)for(let S=0;S<r;S++){const y=v[S][U],L=v[S+1][U],O=v[S+1][U+1],F=v[S][U+1];(t>0||S!==0)&&(h.push(y,L,F),A+=3),(e>0||S!==r-1)&&(h.push(L,O,F),A+=3)}c.addGroup(u,A,0),u+=A}function E(M){const w=g,A=new Gt,C=new R;let U=0;const S=M===!0?t:e,y=M===!0?1:-1;for(let O=1;O<=i;O++)f.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const L=g;for(let O=0;O<=i;O++){const G=O/i*l+o,X=Math.cos(G),V=Math.sin(G);C.x=S*V,C.y=m*y,C.z=S*X,f.push(C.x,C.y,C.z),d.push(0,y,0),A.x=X*.5+.5,A.y=V*.5*y+.5,p.push(A.x,A.y),g++}for(let O=0;O<i;O++){const F=w+O,G=L+O;M===!0?h.push(G,G+1,F):h.push(G+1,G,F),U+=3}c.addGroup(u,U,M===!0?1:2),u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vi extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,d=e/l,p=[],g=[],v=[],m=[];for(let u=0;u<h;u++){const T=u*d-a;for(let E=0;E<c;E++){const M=E*f-r;g.push(M,-T,0),v.push(0,0,1),m.push(E/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<o;T++){const E=T+c*u,M=T+c*(u+1),w=T+1+c*(u+1),A=T+1+c*u;p.push(E,M,A),p.push(M,w,A)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ia extends Ae{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new R,d=new R,p=[],g=[],v=[],m=[];for(let u=0;u<=n;u++){const T=[],E=u/n;let M=0;u===0&&a===0?M=.5/e:u===n&&l===Math.PI&&(M=-.5/e);for(let w=0;w<=e;w++){const A=w/e;f.x=-t*Math.cos(i+A*r)*Math.sin(a+E*o),f.y=t*Math.cos(a+E*o),f.z=t*Math.sin(i+A*r)*Math.sin(a+E*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(A+M,1-E),T.push(c++)}h.push(T)}for(let u=0;u<n;u++)for(let T=0;T<e;T++){const E=h[u][T+1],M=h[u][T],w=h[u+1][T],A=h[u+1][T+1];(u!==0||a>0)&&p.push(E,M,A),(u!==n-1||l<Math.PI)&&p.push(M,w,A)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ee extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ko,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jc extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qc extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class sa extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ks=new te,Ya=new R,$a=new R;class tl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ya.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ya),$a.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($a),e.updateMatrixWorld(),Ks.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ks),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ks)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ka=new te,Ti=new R,Zs=new R;class th extends tl{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Gt(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ti.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ti),Zs.copy(n.position),Zs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zs),n.updateMatrixWorld(),i.makeTranslation(-Ti.x,-Ti.y,-Ti.z),Ka.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka)}}class eh extends sa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new th}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class el extends Ko{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class nh extends tl{constructor(){super(new el(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ih extends sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new nh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sh extends sa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rh extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ah{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Za(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Za();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Za(){return performance.now()}const ja=new te;class oh{constructor(t,e,n=0,i=1/0){this.ray=new Ms(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ja.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ja),this}intersectObject(t,e=!0,n=[]){return Xr(t,this,n,e),n.sort(Ja),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Xr(t[i],this,n,e);return n.sort(Ja),n}}function Ja(s,t){return s.distance-t.distance}function Xr(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Xr(r[a],t,e,!0)}}class nl extends Zc{constructor(t=10,e=10,n=4473924,i=8947848){n=new It(n),i=new It(i);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=e;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=d===r?n:i;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const h=new Ae;h.setAttribute("position",new me(l,3)),h.setAttribute("color",new me(c,3));const f=new jo({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Qa(s,t,e,n){const i=lh(n);switch(e){case Io:return s*t;case No:return s*t;case Fo:return s*t*2;case Oo:return s*t/i.components*i.byteLength;case jr:return s*t/i.components*i.byteLength;case Bo:return s*t*2/i.components*i.byteLength;case Jr:return s*t*2/i.components*i.byteLength;case Uo:return s*t*3/i.components*i.byteLength;case Ve:return s*t*4/i.components*i.byteLength;case Qr:return s*t*4/i.components*i.byteLength;case cs:case hs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case us:case ds:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xr:case Mr:return Math.max(s,16)*Math.max(t,8)/4;case _r:case yr:return Math.max(s,8)*Math.max(t,8)/2;case Sr:case Er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case br:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ar:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case wr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Rr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Cr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Dr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Lr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Pr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ir:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Nr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Fr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Or:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Br:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case fs:case zr:case kr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case zo:case Hr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Vr:case Gr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lh(s){switch(s){case on:case Do:return{byteLength:1,components:1};case Di:case Lo:case Pi:return{byteLength:2,components:1};case Kr:case Zr:return{byteLength:2,components:4};case Bn:case $r:case sn:return{byteLength:4,components:1};case Po:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yr);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function il(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ch(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ph=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_h=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ih=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,su=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ru=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ou=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,du=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Su=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Au=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ru=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ou=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ku=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$u=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ju=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,id=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,md=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ed=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ad=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ld=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ud=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pt={alphahash_fragment:hh,alphahash_pars_fragment:uh,alphamap_fragment:dh,alphamap_pars_fragment:fh,alphatest_fragment:ph,alphatest_pars_fragment:mh,aomap_fragment:gh,aomap_pars_fragment:vh,batching_pars_vertex:_h,batching_vertex:xh,begin_vertex:yh,beginnormal_vertex:Mh,bsdfs:Sh,iridescence_fragment:Eh,bumpmap_pars_fragment:bh,clipping_planes_fragment:Th,clipping_planes_pars_fragment:Ah,clipping_planes_pars_vertex:wh,clipping_planes_vertex:Rh,color_fragment:Ch,color_pars_fragment:Dh,color_pars_vertex:Lh,color_vertex:Ph,common:Ih,cube_uv_reflection_fragment:Uh,defaultnormal_vertex:Nh,displacementmap_pars_vertex:Fh,displacementmap_vertex:Oh,emissivemap_fragment:Bh,emissivemap_pars_fragment:zh,colorspace_fragment:kh,colorspace_pars_fragment:Hh,envmap_fragment:Vh,envmap_common_pars_fragment:Gh,envmap_pars_fragment:Wh,envmap_pars_vertex:Xh,envmap_physical_pars_fragment:nu,envmap_vertex:qh,fog_vertex:Yh,fog_pars_vertex:$h,fog_fragment:Kh,fog_pars_fragment:Zh,gradientmap_pars_fragment:jh,lightmap_pars_fragment:Jh,lights_lambert_fragment:Qh,lights_lambert_pars_fragment:tu,lights_pars_begin:eu,lights_toon_fragment:iu,lights_toon_pars_fragment:su,lights_phong_fragment:ru,lights_phong_pars_fragment:au,lights_physical_fragment:ou,lights_physical_pars_fragment:lu,lights_fragment_begin:cu,lights_fragment_maps:hu,lights_fragment_end:uu,logdepthbuf_fragment:du,logdepthbuf_pars_fragment:fu,logdepthbuf_pars_vertex:pu,logdepthbuf_vertex:mu,map_fragment:gu,map_pars_fragment:vu,map_particle_fragment:_u,map_particle_pars_fragment:xu,metalnessmap_fragment:yu,metalnessmap_pars_fragment:Mu,morphinstance_vertex:Su,morphcolor_vertex:Eu,morphnormal_vertex:bu,morphtarget_pars_vertex:Tu,morphtarget_vertex:Au,normal_fragment_begin:wu,normal_fragment_maps:Ru,normal_pars_fragment:Cu,normal_pars_vertex:Du,normal_vertex:Lu,normalmap_pars_fragment:Pu,clearcoat_normal_fragment_begin:Iu,clearcoat_normal_fragment_maps:Uu,clearcoat_pars_fragment:Nu,iridescence_pars_fragment:Fu,opaque_fragment:Ou,packing:Bu,premultiplied_alpha_fragment:zu,project_vertex:ku,dithering_fragment:Hu,dithering_pars_fragment:Vu,roughnessmap_fragment:Gu,roughnessmap_pars_fragment:Wu,shadowmap_pars_fragment:Xu,shadowmap_pars_vertex:qu,shadowmap_vertex:Yu,shadowmask_pars_fragment:$u,skinbase_vertex:Ku,skinning_pars_vertex:Zu,skinning_vertex:ju,skinnormal_vertex:Ju,specularmap_fragment:Qu,specularmap_pars_fragment:td,tonemapping_fragment:ed,tonemapping_pars_fragment:nd,transmission_fragment:id,transmission_pars_fragment:sd,uv_pars_fragment:rd,uv_pars_vertex:ad,uv_vertex:od,worldpos_vertex:ld,background_vert:cd,background_frag:hd,backgroundCube_vert:ud,backgroundCube_frag:dd,cube_vert:fd,cube_frag:pd,depth_vert:md,depth_frag:gd,distanceRGBA_vert:vd,distanceRGBA_frag:_d,equirect_vert:xd,equirect_frag:yd,linedashed_vert:Md,linedashed_frag:Sd,meshbasic_vert:Ed,meshbasic_frag:bd,meshlambert_vert:Td,meshlambert_frag:Ad,meshmatcap_vert:wd,meshmatcap_frag:Rd,meshnormal_vert:Cd,meshnormal_frag:Dd,meshphong_vert:Ld,meshphong_frag:Pd,meshphysical_vert:Id,meshphysical_frag:Ud,meshtoon_vert:Nd,meshtoon_frag:Fd,points_vert:Od,points_frag:Bd,shadow_vert:zd,shadow_frag:kd,sprite_vert:Hd,sprite_frag:Vd},nt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},qe={basic:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new It(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Me([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Me([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new It(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Me([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Me([nt.points,nt.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Me([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Me([nt.common,nt.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Me([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Me([nt.sprite,nt.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Me([nt.common,nt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Me([nt.lights,nt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};qe.physical={uniforms:Me([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const as={r:0,b:0,g:0},An=new Xe,Gd=new te;function Wd(s,t,e,n,i,r,a){const o=new It(0);let l=r===!0?0:1,c,h,f=null,d=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function v(E){let M=!1;const w=g(E);w===null?u(o,l):w&&w.isColor&&(u(w,1),M=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,M){const w=g(M);w&&(w.isCubeTexture||w.mapping===ys)?(h===void 0&&(h=new Rt(new ie(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:pi(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),An.copy(M.backgroundRotation),An.x*=-1,An.y*=-1,An.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gd.makeRotationFromEuler(An)),h.material.toneMapped=Xt.getTransfer(w.colorSpace)!==Kt,(f!==w||d!==w.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,f=w,d=w.version,p=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Rt(new vi(2,2),new _n({name:"BackgroundMaterial",uniforms:pi(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(w.colorSpace)!==Kt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,p=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,M){E.getRGB(as,$o(s)),n.buffers.color.setClear(as.r,as.g,as.b,M,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(o,l)},render:v,addToRenderList:m,dispose:T}}function Xd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(y,L,O,F,G){let X=!1;const V=f(F,O,L);r!==V&&(r=V,c(r.object)),X=p(y,F,O,G),X&&g(y,F,O,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(y,L,O,F),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function f(y,L,O){const F=O.wireframe===!0;let G=n[y.id];G===void 0&&(G={},n[y.id]=G);let X=G[L.id];X===void 0&&(X={},G[L.id]=X);let V=X[F];return V===void 0&&(V=d(l()),X[F]=V),V}function d(y){const L=[],O=[],F=[];for(let G=0;G<e;G++)L[G]=0,O[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,L,O,F){const G=r.attributes,X=L.attributes;let V=0;const $=O.getAttributes();for(const H in $)if($[H].location>=0){const ot=G[H];let _t=X[H];if(_t===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),ot===void 0||ot.attribute!==_t||_t&&ot.data!==_t.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(y,L,O,F){const G={},X=L.attributes;let V=0;const $=O.getAttributes();for(const H in $)if($[H].location>=0){let ot=X[H];ot===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor));const _t={};_t.attribute=ot,ot&&ot.data&&(_t.data=ot.data),G[H]=_t,V++}r.attributes=G,r.attributesNum=V,r.index=F}function v(){const y=r.newAttributes;for(let L=0,O=y.length;L<O;L++)y[L]=0}function m(y){u(y,0)}function u(y,L){const O=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;O[y]=1,F[y]===0&&(s.enableVertexAttribArray(y),F[y]=1),G[y]!==L&&(s.vertexAttribDivisor(y,L),G[y]=L)}function T(){const y=r.newAttributes,L=r.enabledAttributes;for(let O=0,F=L.length;O<F;O++)L[O]!==y[O]&&(s.disableVertexAttribArray(O),L[O]=0)}function E(y,L,O,F,G,X,V){V===!0?s.vertexAttribIPointer(y,L,O,G,X):s.vertexAttribPointer(y,L,O,F,G,X)}function M(y,L,O,F){v();const G=F.attributes,X=O.getAttributes(),V=L.defaultAttributeValues;for(const $ in X){const H=X[$];if(H.location>=0){let tt=G[$];if(tt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){const ot=tt.normalized,_t=tt.itemSize,Ut=t.get(tt);if(Ut===void 0)continue;const jt=Ut.buffer,Y=Ut.type,et=Ut.bytesPerElement,mt=Y===s.INT||Y===s.UNSIGNED_INT||tt.gpuType===$r;if(tt.isInterleavedBufferAttribute){const rt=tt.data,Et=rt.stride,At=tt.offset;if(rt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<H.locationSize;Nt++)u(H.location+Nt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Nt=0;Nt<H.locationSize;Nt++)m(H.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Nt=0;Nt<H.locationSize;Nt++)E(H.location+Nt,_t/H.locationSize,Y,ot,Et*et,(At+_t/H.locationSize*Nt)*et,mt)}else{if(tt.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)u(H.location+rt,tt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let rt=0;rt<H.locationSize;rt++)E(H.location+rt,_t/H.locationSize,Y,ot,_t*et,_t/H.locationSize*rt*et,mt)}}else if(V!==void 0){const ot=V[$];if(ot!==void 0)switch(ot.length){case 2:s.vertexAttrib2fv(H.location,ot);break;case 3:s.vertexAttrib3fv(H.location,ot);break;case 4:s.vertexAttrib4fv(H.location,ot);break;default:s.vertexAttrib1fv(H.location,ot)}}}}T()}function w(){U();for(const y in n){const L=n[y];for(const O in L){const F=L[O];for(const G in F)h(F[G].object),delete F[G];delete L[O]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const O in L){const F=L[O];for(const G in F)h(F[G].object),delete F[G];delete L[O]}delete n[y.id]}function C(y){for(const L in n){const O=n[L];if(O[y.id]===void 0)continue;const F=O[y.id];for(const G in F)h(F[G].object),delete F[G];delete O[y.id]}}function U(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function qd(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(s.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function l(c,h,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Yd(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Ve&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==on&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==sn&&!U)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:w,maxSamples:A}}function $d(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Dn,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||i;return i=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:n,E=T*4;let M=u.clippingState||null;l.value=M,M=h(g,d,E,p);for(let w=0;w!==E;++w)M[w]=e[w];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=p+v*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,M=p;E!==v;++E,M+=4)a.copy(f[E]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Kd(s){let t=new WeakMap;function e(a,o){return o===pr?a.mapping=ci:o===mr&&(a.mapping=hi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===pr||o===mr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xc(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const si=4,to=[.125,.215,.35,.446,.526,.582],In=20,js=new el,eo=new It;let Js=null,Qs=0,tr=0,er=!1;const Ln=(1+Math.sqrt(5))/2,ei=1/Ln,no=[new R(-Ln,ei,0),new R(Ln,ei,0),new R(-ei,0,Ln),new R(ei,0,Ln),new R(0,Ln,-ei),new R(0,Ln,ei),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class io{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),tr=this._renderer.getActiveMipmapLevel(),er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ro(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Js,Qs,tr),this._renderer.xr.enabled=er,t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),tr=this._renderer.getActiveMipmapLevel(),er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Pi,format:Ve,colorSpace:fi,depthBuffer:!1},i=so(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=so(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zd(r)),this._blurMaterial=jd(r,t,e)}return i}_compileMaterial(t){const e=new Rt(this._lodPlanes[0],t);this._renderer.compile(e,js)}_sceneToCubeUV(t,e,n,i){const o=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(eo),h.toneMapping=gn,h.autoClear=!1;const p=new xn({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new Rt(new ie,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(eo),v=!0);for(let u=0;u<6;u++){const T=u%3;T===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):T===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const E=this._cubeSize;os(i,T*E,u>2?E:0,E,E),h.setRenderTarget(i),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ci||t.mapping===hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ro());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;os(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=no[(i-r-1)%no.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Rt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*In-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):In;m>In&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${In}`);const u=[];let T=0;for(let C=0;C<In;++C){const U=C/v,S=Math.exp(-U*U/2);u.push(S),C===0?T+=S:C<m&&(T+=2*S)}for(let C=0;C<u.length;C++)u[C]=u[C]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const M=this._sizeLods[i],w=3*M*(i>E-si?i-E+si:0),A=4*(this._cubeSize-M);os(e,w,A,3*M,2*M),l.setRenderTarget(e),l.render(f,js)}}function Zd(s){const t=[],e=[],n=[];let i=s;const r=s-si+1+to.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-si?l=to[a-s+si-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,v=3,m=2,u=1,T=new Float32Array(v*g*p),E=new Float32Array(m*g*p),M=new Float32Array(u*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,U=A>2?0:-1,S=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];T.set(S,v*g*A),E.set(d,m*g*A);const y=[A,A,A,A,A,A];M.set(y,u*g*A)}const w=new Ae;w.setAttribute("position",new We(T,v)),w.setAttribute("uv",new We(E,m)),w.setAttribute("faceIndex",new We(M,u)),t.push(w),i>si&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function so(s,t,e){const n=new zn(s,t,e);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function jd(s,t,e){const n=new Float32Array(In),i=new R(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ro(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ao(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jd(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===pr||l===mr,h=l===ci||l===hi;if(c||h){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new io(s)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new io(s)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Qd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ii("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function tf(s,t,e,n){const i={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let E=0,M=T.length;E<M;E+=3){const w=T[E+0],A=T[E+1],C=T[E+2];d.push(w,A,A,C,C,w)}}else if(g!==void 0){const T=g.array;v=g.version;for(let E=0,M=T.length/3-1;E<M;E+=3){const w=E+0,A=E+1,C=E+2;d.push(w,A,A,C,C,w)}}else return;const m=new(Vo(d)?Yo:qo)(d,1);m.version=v;const u=r.get(f);u&&t.remove(u),r.set(f,m)}function h(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function ef(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function f(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/a,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let u=0;for(let T=0;T<g;T++)u+=p[T]*v[T];e.update(u,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function nf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function sf(s,t,e){const n=new WeakMap,i=new Zt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let y=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let w=o.attributes.position.count*M,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const C=new Float32Array(w*A*4*f),U=new Wo(C,w,A,f);U.type=sn,U.needsUpdate=!0;const S=M*4;for(let L=0;L<f;L++){const O=u[L],F=T[L],G=E[L],X=w*A*4*L;for(let V=0;V<O.count;V++){const $=V*S;g===!0&&(i.fromBufferAttribute(O,V),C[X+$+0]=i.x,C[X+$+1]=i.y,C[X+$+2]=i.z,C[X+$+3]=0),v===!0&&(i.fromBufferAttribute(F,V),C[X+$+4]=i.x,C[X+$+5]=i.y,C[X+$+6]=i.z,C[X+$+7]=0),m===!0&&(i.fromBufferAttribute(G,V),C[X+$+8]=i.x,C[X+$+9]=i.y,C[X+$+10]=i.z,C[X+$+11]=G.itemSize===4?i.w:1)}}d={count:f,texture:U,size:new Gt(w,A)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function rf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const sl=new Te,oo=new Qo(1,1),rl=new Wo,al=new Cc,ol=new Zo,lo=[],co=[],ho=new Float32Array(16),uo=new Float32Array(9),fo=new Float32Array(4);function _i(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=lo[i];if(r===void 0&&(r=new Float32Array(i),lo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function he(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Es(s,t){let e=co[t];e===void 0&&(e=new Int32Array(t),co[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function af(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2fv(this.addr,t),ue(e,t)}}function lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;s.uniform3fv(this.addr,t),ue(e,t)}}function cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4fv(this.addr,t),ue(e,t)}}function hf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;fo.set(n),s.uniformMatrix2fv(this.addr,!1,fo),ue(e,n)}}function uf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;uo.set(n),s.uniformMatrix3fv(this.addr,!1,uo),ue(e,n)}}function df(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;ho.set(n),s.uniformMatrix4fv(this.addr,!1,ho),ue(e,n)}}function ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2iv(this.addr,t),ue(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3iv(this.addr,t),ue(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4iv(this.addr,t),ue(e,t)}}function vf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2uiv(this.addr,t),ue(e,t)}}function xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3uiv(this.addr,t),ue(e,t)}}function yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4uiv(this.addr,t),ue(e,t)}}function Mf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(oo.compareFunction=Ho,r=oo):r=sl,e.setTexture2D(t||r,i)}function Sf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||al,i)}function Ef(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ol,i)}function bf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rl,i)}function Tf(s){switch(s){case 5126:return af;case 35664:return of;case 35665:return lf;case 35666:return cf;case 35674:return hf;case 35675:return uf;case 35676:return df;case 5124:case 35670:return ff;case 35667:case 35671:return pf;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return vf;case 36294:return _f;case 36295:return xf;case 36296:return yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Sf;case 35680:case 36300:case 36308:case 36293:return Ef;case 36289:case 36303:case 36311:case 36292:return bf}}function Af(s,t){s.uniform1fv(this.addr,t)}function wf(s,t){const e=_i(t,this.size,2);s.uniform2fv(this.addr,e)}function Rf(s,t){const e=_i(t,this.size,3);s.uniform3fv(this.addr,e)}function Cf(s,t){const e=_i(t,this.size,4);s.uniform4fv(this.addr,e)}function Df(s,t){const e=_i(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Lf(s,t){const e=_i(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Pf(s,t){const e=_i(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function If(s,t){s.uniform1iv(this.addr,t)}function Uf(s,t){s.uniform2iv(this.addr,t)}function Nf(s,t){s.uniform3iv(this.addr,t)}function Ff(s,t){s.uniform4iv(this.addr,t)}function Of(s,t){s.uniform1uiv(this.addr,t)}function Bf(s,t){s.uniform2uiv(this.addr,t)}function zf(s,t){s.uniform3uiv(this.addr,t)}function kf(s,t){s.uniform4uiv(this.addr,t)}function Hf(s,t,e){const n=this.cache,i=t.length,r=Es(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||sl,r[a])}function Vf(s,t,e){const n=this.cache,i=t.length,r=Es(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||al,r[a])}function Gf(s,t,e){const n=this.cache,i=t.length,r=Es(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ol,r[a])}function Wf(s,t,e){const n=this.cache,i=t.length,r=Es(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||rl,r[a])}function Xf(s){switch(s){case 5126:return Af;case 35664:return wf;case 35665:return Rf;case 35666:return Cf;case 35674:return Df;case 35675:return Lf;case 35676:return Pf;case 5124:case 35670:return If;case 35667:case 35671:return Uf;case 35668:case 35672:return Nf;case 35669:case 35673:return Ff;case 5125:return Of;case 36294:return Bf;case 36295:return zf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return Wf}}class qf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tf(e.type)}}class Yf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xf(e.type)}}class $f{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const nr=/(\w+)(\])?(\[|\.)?/g;function po(s,t){s.seq.push(t),s.map[t.id]=t}function Kf(s,t,e){const n=s.name,i=n.length;for(nr.lastIndex=0;;){const r=nr.exec(n),a=nr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){po(e,c===void 0?new qf(o,s,t):new Yf(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new $f(o),po(e,f)),e=f}}}class ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Kf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function mo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Zf=37297;let jf=0;function Jf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const go=new Dt;function Qf(s){Xt._getMatrix(go,Xt.workingColorSpace,s);const t=`mat3( ${go.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(s)){case ms:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function vo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Jf(s.getShaderSource(t),a)}else return i}function tp(s,t){const e=Qf(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ep(s,t){let e;switch(t){case kl:e="Linear";break;case Hl:e="Reinhard";break;case Vl:e="Cineon";break;case Gl:e="ACESFilmic";break;case Xl:e="AgX";break;case ql:e="Neutral";break;case Wl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ls=new R;function np(){Xt.getLuminanceCoefficients(ls);const s=ls.x.toFixed(4),t=ls.y.toFixed(4),e=ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ip(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wi).join(`
`)}function sp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function wi(s){return s!==""}function _o(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function qr(s){return s.replace(ap,lp)}const op=new Map;function lp(s,t){let e=Pt[t];if(e===void 0){const n=op.get(t);if(n!==void 0)e=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qr(e)}const cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yo(s){return s.replace(cp,hp)}function hp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mo(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function up(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ao?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===wo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function dp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ci:case hi:t="ENVMAP_TYPE_CUBE";break;case ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hi:t="ENVMAP_MODE_REFRACTION";break}return t}function pp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ro:t="ENVMAP_BLENDING_MULTIPLY";break;case Bl:t="ENVMAP_BLENDING_MIX";break;case zl:t="ENVMAP_BLENDING_ADD";break}return t}function mp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=up(e),c=dp(e),h=fp(e),f=pp(e),d=mp(e),p=ip(e),g=sp(r),v=i.createProgram();let m,u,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wi).join(`
`),u.length>0&&(u+=`
`)):(m=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),u=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gn?"#define TONE_MAPPING":"",e.toneMapping!==gn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==gn?ep("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,tp("linearToOutputTexel",e.outputColorSpace),np(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wi).join(`
`)),a=qr(a),a=_o(a,e),a=xo(a,e),o=qr(o),o=_o(o,e),o=xo(o,e),a=yo(a),o=yo(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=T+m+a,M=T+u+o,w=mo(i,i.VERTEX_SHADER,E),A=mo(i,i.FRAGMENT_SHADER,M);i.attachShader(v,w),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(L){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(w).trim(),G=i.getShaderInfoLog(A).trim();let X=!0,V=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,w,A);else{const $=vo(i,w,"vertex"),H=vo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+$+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||G==="")&&(V=!1);V&&(L.diagnostics={runnable:X,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:u}})}i.deleteShader(w),i.deleteShader(A),U=new ps(i,v),S=rp(i,v)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,Zf)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jf++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=A,this}let vp=0;class _p{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xp(t),e.set(t,n)),n}}class xp{constructor(t){this.id=vp++,this.code=t,this.usedTimes=0}}function yp(s,t,e,n,i,r,a){const o=new ea,l=new _p,c=new Set,h=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,L,O,F){const G=O.fog,X=F.geometry,V=S.isMeshStandardMaterial?O.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),H=$&&$.mapping===ys?$.image.height:null,tt=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=ot!==void 0?ot.length:0;let Ut=0;X.morphAttributes.position!==void 0&&(Ut=1),X.morphAttributes.normal!==void 0&&(Ut=2),X.morphAttributes.color!==void 0&&(Ut=3);let jt,Y,et,mt;if(tt){const $t=qe[tt];jt=$t.vertexShader,Y=$t.fragmentShader}else jt=S.vertexShader,Y=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),mt=l.getFragmentShaderID(S);const rt=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),At=F.isInstancedMesh===!0,Nt=F.isBatchedMesh===!0,se=!!S.map,kt=!!S.matcap,oe=!!$,D=!!S.aoMap,Le=!!S.lightMap,Ot=!!S.bumpMap,Bt=!!S.normalMap,xt=!!S.displacementMap,ee=!!S.emissiveMap,vt=!!S.metalnessMap,b=!!S.roughnessMap,_=S.anisotropy>0,B=S.clearcoat>0,K=S.dispersion>0,j=S.iridescence>0,q=S.sheen>0,gt=S.transmission>0,at=_&&!!S.anisotropyMap,ut=B&&!!S.clearcoatMap,Ht=B&&!!S.clearcoatNormalMap,Q=B&&!!S.clearcoatRoughnessMap,dt=j&&!!S.iridescenceMap,St=j&&!!S.iridescenceThicknessMap,bt=q&&!!S.sheenColorMap,ft=q&&!!S.sheenRoughnessMap,zt=!!S.specularMap,Lt=!!S.specularColorMap,Qt=!!S.specularIntensityMap,P=gt&&!!S.transmissionMap,it=gt&&!!S.thicknessMap,W=!!S.gradientMap,Z=!!S.alphaMap,ct=S.alphaTest>0,lt=!!S.alphaHash,Ct=!!S.extensions;let re=gn;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(re=s.toneMapping);const ge={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:jt,fragmentShader:Y,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&F._colorsTexture!==null,instancing:At,instancingColor:At&&F.instanceColor!==null,instancingMorph:At&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:fi,alphaToCoverage:!!S.alphaToCoverage,map:se,matcap:kt,envMap:oe,envMapMode:oe&&$.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:Le,bumpMap:Ot,normalMap:Bt,displacementMap:d&&xt,emissiveMap:ee,normalMapObjectSpace:Bt&&S.normalMapType===Zl,normalMapTangentSpace:Bt&&S.normalMapType===ko,metalnessMap:vt,roughnessMap:b,anisotropy:_,anisotropyMap:at,clearcoat:B,clearcoatMap:ut,clearcoatNormalMap:Ht,clearcoatRoughnessMap:Q,dispersion:K,iridescence:j,iridescenceMap:dt,iridescenceThicknessMap:St,sheen:q,sheenColorMap:bt,sheenRoughnessMap:ft,specularMap:zt,specularColorMap:Lt,specularIntensityMap:Qt,transmission:gt,transmissionMap:P,thicknessMap:it,gradientMap:W,opaque:S.transparent===!1&&S.blending===ri&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:lt,combine:S.combine,mapUv:se&&v(S.map.channel),aoMapUv:D&&v(S.aoMap.channel),lightMapUv:Le&&v(S.lightMap.channel),bumpMapUv:Ot&&v(S.bumpMap.channel),normalMapUv:Bt&&v(S.normalMap.channel),displacementMapUv:xt&&v(S.displacementMap.channel),emissiveMapUv:ee&&v(S.emissiveMap.channel),metalnessMapUv:vt&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:at&&v(S.anisotropyMap.channel),clearcoatMapUv:ut&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:St&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ft&&v(S.sheenRoughnessMap.channel),specularMapUv:zt&&v(S.specularMap.channel),specularColorMapUv:Lt&&v(S.specularColorMap.channel),specularIntensityMapUv:Qt&&v(S.specularIntensityMap.channel),transmissionMapUv:P&&v(S.transmissionMap.channel),thicknessMapUv:it&&v(S.thicknessMap.channel),alphaMapUv:Z&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Bt||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(se||Z),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Et,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Ut,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:se&&S.map.isVideoTexture===!0&&Xt.getTransfer(S.map.colorSpace)===Kt,decodeVideoTextureEmissive:ee&&S.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(S.emissiveMap.colorSpace)===Kt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ye,flipSided:S.side===be,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ct&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&S.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function u(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)y.push(L),y.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(T(y,S),E(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function T(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function E(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const y=g[S.type];let L;if(y){const O=qe[y];L=Hc.clone(O.uniforms)}else L=S.uniforms;return L}function w(S,y){let L;for(let O=0,F=h.length;O<F;O++){const G=h[O];if(G.cacheKey===y){L=G,++L.usedTimes;break}}return L===void 0&&(L=new gp(s,y,S,r),h.push(L)),L}function A(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:w,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:U}}function Mp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Sp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function So(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Eo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f,d,p,g,v,m){let u=s[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},s[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=v,u.group=m),t++,u}function o(f,d,p,g,v,m){const u=a(f,d,p,g,v,m);p.transmission>0?n.push(u):p.transparent===!0?i.push(u):e.push(u)}function l(f,d,p,g,v,m){const u=a(f,d,p,g,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?i.unshift(u):e.unshift(u)}function c(f,d){e.length>1&&e.sort(f||Sp),n.length>1&&n.sort(d||So),i.length>1&&i.sort(d||So)}function h(){for(let f=t,d=s.length;f<d;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Ep(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Eo,s.set(n,[a])):i>=r.length?(a=new Eo,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function bp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new It};break;case"SpotLight":e={position:new R,direction:new R,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Tp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Ap=0;function wp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Rp(s){const t=new bp,e=Tp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new te,a=new te;function o(c){let h=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,u=0,T=0,E=0,M=0,w=0,A=0,C=0;c.sort(wp);for(let S=0,y=c.length;S<y;S++){const L=c[S],O=L.color,F=L.intensity,G=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*F,f+=O.g*F,d+=O.b*F;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],F);C++}else if(L.isDirectionalLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,H=e.get(L);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=V,p++}else if(L.isSpotLight){const V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(O).multiplyScalar(F),V.distance=G,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[v]=V;const $=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,$.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[v]=$.matrix,L.castShadow){const H=e.get(L);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=X,M++}v++}else if(L.isRectAreaLight){const V=t.get(L);V.color.copy(O).multiplyScalar(F),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const $=L.shadow,H=e.get(L);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=V,g++}else if(L.isHemisphereLight){const V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(F),V.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[u]=V,u++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==T||U.numPointShadows!==E||U.numSpotShadows!==M||U.numSpotMaps!==w||U.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=T,U.numPointShadows=E,U.numSpotShadows=M,U.numSpotMaps=w,U.numLightProbes=C,n.version=Ap++)}function l(c,h){let f=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let u=0,T=c.length;u<T;u++){const E=c[u];if(E.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(E.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function bo(s){const t=new Rp(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Cp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new bo(s),t.set(i,[o])):r>=a.length?(o=new bo(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pp(s,t,e){let n=new na;const i=new Gt,r=new Gt,a=new Zt,o=new Jc({depthPacking:Kl}),l=new Qc,c={},h=e.maxTextureSize,f={[vn]:be,[be]:vn,[Ye]:Ye},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Dp,fragmentShader:Lp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let u=this.type;this.render=function(A,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),y=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),O=s.state;O.setBlending(mn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=u!==nn&&this.type===nn,G=u===nn&&this.type!==nn;for(let X=0,V=A.length;X<V;X++){const $=A[X],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const tt=H.getFrameExtents();if(i.multiply(tt),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,H.mapSize.y=r.y)),H.map===null||F===!0||G===!0){const _t=this.type!==nn?{minFilter:Ge,magFilter:Ge}:{};H.map!==null&&H.map.dispose(),H.map=new zn(i.x,i.y,_t),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ot=H.getViewportCount();for(let _t=0;_t<ot;_t++){const Ut=H.getViewport(_t);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),O.viewport(a),H.updateMatrices($,_t),n=H.getFrustum(),M(C,U,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===nn&&T(H,U),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(S,y,L)};function T(A,C){const U=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,U,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,U,p,v,null)}function E(A,C,U,S){let y=null;const L=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)y=L;else if(y=U.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=y.uuid,F=C.uuid;let G=c[O];G===void 0&&(G={},c[O]=G);let X=G[F];X===void 0&&(X=y.clone(),G[F]=X,C.addEventListener("dispose",w)),y=X}if(y.visible=C.visible,y.wireframe=C.wireframe,S===nn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=s.properties.get(y);O.light=U}return y}function M(A,C,U,S,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===nn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const F=t.update(A),G=A.material;if(Array.isArray(G)){const X=F.groups;for(let V=0,$=X.length;V<$;V++){const H=X[V],tt=G[H.materialIndex];if(tt&&tt.visible){const ot=E(A,tt,S,y);A.onBeforeShadow(s,A,C,U,F,ot,H),s.renderBufferDirect(U,null,F,ot,A,H),A.onAfterShadow(s,A,C,U,F,ot,H)}}}else if(G.visible){const X=E(A,G,S,y);A.onBeforeShadow(s,A,C,U,F,X,null),s.renderBufferDirect(U,null,F,X,A,null),A.onAfterShadow(s,A,C,U,F,X,null)}}const O=A.children;for(let F=0,G=O.length;F<G;F++)M(O[F],C,U,S,y)}function w(A){A.target.removeEventListener("dispose",w);for(const U in c){const S=c[U],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Ip={[or]:lr,[cr]:dr,[hr]:fr,[li]:ur,[lr]:or,[dr]:cr,[fr]:hr,[ur]:li};function Up(s,t){function e(){let P=!1;const it=new Zt;let W=null;const Z=new Zt(0,0,0,0);return{setMask:function(ct){W!==ct&&!P&&(s.colorMask(ct,ct,ct,ct),W=ct)},setLocked:function(ct){P=ct},setClear:function(ct,lt,Ct,re,ge){ge===!0&&(ct*=re,lt*=re,Ct*=re),it.set(ct,lt,Ct,re),Z.equals(it)===!1&&(s.clearColor(ct,lt,Ct,re),Z.copy(it))},reset:function(){P=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let P=!1,it=!1,W=null,Z=null,ct=null;return{setReversed:function(lt){if(it!==lt){const Ct=t.get("EXT_clip_control");it?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT);const re=ct;ct=null,this.setClear(re)}it=lt},getReversed:function(){return it},setTest:function(lt){lt?rt(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(lt){W!==lt&&!P&&(s.depthMask(lt),W=lt)},setFunc:function(lt){if(it&&(lt=Ip[lt]),Z!==lt){switch(lt){case or:s.depthFunc(s.NEVER);break;case lr:s.depthFunc(s.ALWAYS);break;case cr:s.depthFunc(s.LESS);break;case li:s.depthFunc(s.LEQUAL);break;case hr:s.depthFunc(s.EQUAL);break;case ur:s.depthFunc(s.GEQUAL);break;case dr:s.depthFunc(s.GREATER);break;case fr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=lt}},setLocked:function(lt){P=lt},setClear:function(lt){ct!==lt&&(it&&(lt=1-lt),s.clearDepth(lt),ct=lt)},reset:function(){P=!1,W=null,Z=null,ct=null,it=!1}}}function i(){let P=!1,it=null,W=null,Z=null,ct=null,lt=null,Ct=null,re=null,ge=null;return{setTest:function($t){P||($t?rt(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function($t){it!==$t&&!P&&(s.stencilMask($t),it=$t)},setFunc:function($t,Fe,Ze){(W!==$t||Z!==Fe||ct!==Ze)&&(s.stencilFunc($t,Fe,Ze),W=$t,Z=Fe,ct=Ze)},setOp:function($t,Fe,Ze){(lt!==$t||Ct!==Fe||re!==Ze)&&(s.stencilOp($t,Fe,Ze),lt=$t,Ct=Fe,re=Ze)},setLocked:function($t){P=$t},setClear:function($t){ge!==$t&&(s.clearStencil($t),ge=$t)},reset:function(){P=!1,it=null,W=null,Z=null,ct=null,lt=null,Ct=null,re=null,ge=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,u=null,T=null,E=null,M=null,w=null,A=null,C=new It(0,0,0),U=0,S=!1,y=null,L=null,O=null,F=null,G=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=$>=2);let tt=null,ot={};const _t=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),jt=new Zt().fromArray(_t),Y=new Zt().fromArray(Ut);function et(P,it,W,Z){const ct=new Uint8Array(4),lt=s.createTexture();s.bindTexture(P,lt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ct=0;Ct<W;Ct++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(it+Ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return lt}const mt={};mt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(li),Ot(!1),Bt(ga),rt(s.CULL_FACE),D(mn);function rt(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function Et(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function At(P,it){return f[P]!==it?(s.bindFramebuffer(P,it),f[P]=it,P===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=it),P===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=it),!0):!1}function Nt(P,it){let W=p,Z=!1;if(P){W=d.get(it),W===void 0&&(W=[],d.set(it,W));const ct=P.textures;if(W.length!==ct.length||W[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Ct=ct.length;lt<Ct;lt++)W[lt]=s.COLOR_ATTACHMENT0+lt;W.length=ct.length,Z=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,Z=!0);Z&&s.drawBuffers(W)}function se(P){return g!==P?(s.useProgram(P),g=P,!0):!1}const kt={[Pn]:s.FUNC_ADD,[Ml]:s.FUNC_SUBTRACT,[Sl]:s.FUNC_REVERSE_SUBTRACT};kt[El]=s.MIN,kt[bl]=s.MAX;const oe={[Tl]:s.ZERO,[Al]:s.ONE,[wl]:s.SRC_COLOR,[rr]:s.SRC_ALPHA,[Il]:s.SRC_ALPHA_SATURATE,[Ll]:s.DST_COLOR,[Cl]:s.DST_ALPHA,[Rl]:s.ONE_MINUS_SRC_COLOR,[ar]:s.ONE_MINUS_SRC_ALPHA,[Pl]:s.ONE_MINUS_DST_COLOR,[Dl]:s.ONE_MINUS_DST_ALPHA,[Ul]:s.CONSTANT_COLOR,[Nl]:s.ONE_MINUS_CONSTANT_COLOR,[Fl]:s.CONSTANT_ALPHA,[Ol]:s.ONE_MINUS_CONSTANT_ALPHA};function D(P,it,W,Z,ct,lt,Ct,re,ge,$t){if(P===mn){v===!0&&(Et(s.BLEND),v=!1);return}if(v===!1&&(rt(s.BLEND),v=!0),P!==yl){if(P!==m||$t!==S){if((u!==Pn||M!==Pn)&&(s.blendEquation(s.FUNC_ADD),u=Pn,M=Pn),$t)switch(P){case ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case va:s.blendFunc(s.ONE,s.ONE);break;case _a:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case va:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _a:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,E=null,w=null,A=null,C.set(0,0,0),U=0,m=P,S=$t}return}ct=ct||it,lt=lt||W,Ct=Ct||Z,(it!==u||ct!==M)&&(s.blendEquationSeparate(kt[it],kt[ct]),u=it,M=ct),(W!==T||Z!==E||lt!==w||Ct!==A)&&(s.blendFuncSeparate(oe[W],oe[Z],oe[lt],oe[Ct]),T=W,E=Z,w=lt,A=Ct),(re.equals(C)===!1||ge!==U)&&(s.blendColor(re.r,re.g,re.b,ge),C.copy(re),U=ge),m=P,S=!1}function Le(P,it){P.side===Ye?Et(s.CULL_FACE):rt(s.CULL_FACE);let W=P.side===be;it&&(W=!W),Ot(W),P.blending===ri&&P.transparent===!1?D(mn):D(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const Z=P.stencilWrite;o.setTest(Z),Z&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ee(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(P){y!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),y=P)}function Bt(P){P!==_l?(rt(s.CULL_FACE),P!==L&&(P===ga?s.cullFace(s.BACK):P===xl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),L=P}function xt(P){P!==O&&(V&&s.lineWidth(P),O=P)}function ee(P,it,W){P?(rt(s.POLYGON_OFFSET_FILL),(F!==it||G!==W)&&(s.polygonOffset(it,W),F=it,G=W)):Et(s.POLYGON_OFFSET_FILL)}function vt(P){P?rt(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function b(P){P===void 0&&(P=s.TEXTURE0+X-1),tt!==P&&(s.activeTexture(P),tt=P)}function _(P,it,W){W===void 0&&(tt===null?W=s.TEXTURE0+X-1:W=tt);let Z=ot[W];Z===void 0&&(Z={type:void 0,texture:void 0},ot[W]=Z),(Z.type!==P||Z.texture!==it)&&(tt!==W&&(s.activeTexture(W),tt=W),s.bindTexture(P,it||mt[P]),Z.type=P,Z.texture=it)}function B(){const P=ot[tt];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ht(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(P){jt.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),jt.copy(P))}function ft(P){Y.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function zt(P,it){let W=c.get(it);W===void 0&&(W=new WeakMap,c.set(it,W));let Z=W.get(P);Z===void 0&&(Z=s.getUniformBlockIndex(it,P.name),W.set(P,Z))}function Lt(P,it){const Z=c.get(it).get(P);l.get(it)!==Z&&(s.uniformBlockBinding(it,Z,P.__bindingPointIndex),l.set(it,Z))}function Qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,ot={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,u=null,T=null,E=null,M=null,w=null,A=null,C=new It(0,0,0),U=0,S=!1,y=null,L=null,O=null,F=null,G=null,jt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Et,bindFramebuffer:At,drawBuffers:Nt,useProgram:se,setBlending:D,setMaterial:Le,setFlipSided:Ot,setCullFace:Bt,setLineWidth:xt,setPolygonOffset:ee,setScissorTest:vt,activeTexture:b,bindTexture:_,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:dt,texImage3D:St,updateUBOMapping:zt,uniformBlockBinding:Lt,texStorage2D:Ht,texStorage3D:Q,texSubImage2D:q,texSubImage3D:gt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:bt,viewport:ft,reset:Qt}}function Np(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):vs("canvas")}function v(b,_,B){let K=1;const j=vt(b);if((j.width>B||j.height>B)&&(K=B/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(K*j.width),gt=Math.floor(K*j.height);f===void 0&&(f=g(q,gt));const at=_?g(q,gt):f;return at.width=q,at.height=gt,at.getContext("2d").drawImage(b,0,0,q,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+gt+")."),at}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps}function u(b){s.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(b,_,B,K,j=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=_;if(_===s.RED&&(B===s.FLOAT&&(q=s.R32F),B===s.HALF_FLOAT&&(q=s.R16F),B===s.UNSIGNED_BYTE&&(q=s.R8)),_===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.R8UI),B===s.UNSIGNED_SHORT&&(q=s.R16UI),B===s.UNSIGNED_INT&&(q=s.R32UI),B===s.BYTE&&(q=s.R8I),B===s.SHORT&&(q=s.R16I),B===s.INT&&(q=s.R32I)),_===s.RG&&(B===s.FLOAT&&(q=s.RG32F),B===s.HALF_FLOAT&&(q=s.RG16F),B===s.UNSIGNED_BYTE&&(q=s.RG8)),_===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RG8UI),B===s.UNSIGNED_SHORT&&(q=s.RG16UI),B===s.UNSIGNED_INT&&(q=s.RG32UI),B===s.BYTE&&(q=s.RG8I),B===s.SHORT&&(q=s.RG16I),B===s.INT&&(q=s.RG32I)),_===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(q=s.RGB16UI),B===s.UNSIGNED_INT&&(q=s.RGB32UI),B===s.BYTE&&(q=s.RGB8I),B===s.SHORT&&(q=s.RGB16I),B===s.INT&&(q=s.RGB32I)),_===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),B===s.UNSIGNED_INT&&(q=s.RGBA32UI),B===s.BYTE&&(q=s.RGBA8I),B===s.SHORT&&(q=s.RGBA16I),B===s.INT&&(q=s.RGBA32I)),_===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),_===s.RGBA){const gt=j?ms:Xt.getTransfer(K);B===s.FLOAT&&(q=s.RGBA32F),B===s.HALF_FLOAT&&(q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(q=gt===Kt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function M(b,_){let B;return b?_===null||_===Bn||_===ui?B=s.DEPTH24_STENCIL8:_===sn?B=s.DEPTH32F_STENCIL8:_===Di&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Bn||_===ui?B=s.DEPTH_COMPONENT24:_===sn?B=s.DEPTH_COMPONENT32F:_===Di&&(B=s.DEPTH_COMPONENT16),B}function w(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ge&&b.minFilter!==Ke?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function A(b){const _=b.target;_.removeEventListener("dispose",A),U(_),_.isVideoTexture&&h.delete(_)}function C(b){const _=b.target;_.removeEventListener("dispose",C),y(_)}function U(b){const _=n.get(b);if(_.__webglInit===void 0)return;const B=b.source,K=d.get(B);if(K){const j=K[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(b),Object.keys(K).length===0&&d.delete(B)}n.remove(b)}function S(b){const _=n.get(b);s.deleteTexture(_.__webglTexture);const B=b.source,K=d.get(B);delete K[_.__cacheKey],a.memory.textures--}function y(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let j=0;j<_.__webglFramebuffer[K].length;j++)s.deleteFramebuffer(_.__webglFramebuffer[K][j]);else s.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)s.deleteFramebuffer(_.__webglFramebuffer[K]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=b.textures;for(let K=0,j=B.length;K<j;K++){const q=n.get(B[K]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(b)}let L=0;function O(){L=0}function F(){const b=L;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),L+=1,b}function G(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function X(b,_){const B=n.get(b);if(b.isVideoTexture&&xt(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,b,_);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+_)}function V(b,_){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Y(B,b,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+_)}function $(b,_){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Y(B,b,_);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+_)}function H(b,_){const B=n.get(b);if(b.version>0&&B.__version!==b.version){et(B,b,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+_)}const tt={[gr]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[vr]:s.MIRRORED_REPEAT},ot={[Ge]:s.NEAREST,[Yl]:s.NEAREST_MIPMAP_NEAREST,[Bi]:s.NEAREST_MIPMAP_LINEAR,[Ke]:s.LINEAR,[As]:s.LINEAR_MIPMAP_NEAREST,[Fn]:s.LINEAR_MIPMAP_LINEAR},_t={[jl]:s.NEVER,[ic]:s.ALWAYS,[Jl]:s.LESS,[Ho]:s.LEQUAL,[Ql]:s.EQUAL,[nc]:s.GEQUAL,[tc]:s.GREATER,[ec]:s.NOTEQUAL};function Ut(b,_){if(_.type===sn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ke||_.magFilter===As||_.magFilter===Bi||_.magFilter===Fn||_.minFilter===Ke||_.minFilter===As||_.minFilter===Bi||_.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,tt[_.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,tt[_.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,tt[_.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ot[_.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ot[_.minFilter]),_.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,_t[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ge||_.minFilter!==Bi&&_.minFilter!==Fn||_.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function jt(b,_){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",A));const K=_.source;let j=d.get(K);j===void 0&&(j={},d.set(K,j));const q=G(_);if(q!==b.__cacheKey){j[q]===void 0&&(j[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[q].usedTimes++;const gt=j[b.__cacheKey];gt!==void 0&&(j[b.__cacheKey].usedTimes--,gt.usedTimes===0&&S(_)),b.__cacheKey=q,b.__webglTexture=j[q].texture}return B}function Y(b,_,B){let K=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=s.TEXTURE_3D);const j=jt(b,_),q=_.source;e.bindTexture(K,b.__webglTexture,s.TEXTURE0+B);const gt=n.get(q);if(q.version!==gt.__version||j===!0){e.activeTexture(s.TEXTURE0+B);const at=Xt.getPrimaries(Xt.workingColorSpace),ut=_.colorSpace===pn?null:Xt.getPrimaries(_.colorSpace),Ht=_.colorSpace===pn||at===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Q=v(_.image,!1,i.maxTextureSize);Q=ee(_,Q);const dt=r.convert(_.format,_.colorSpace),St=r.convert(_.type);let bt=E(_.internalFormat,dt,St,_.colorSpace,_.isVideoTexture);Ut(K,_);let ft;const zt=_.mipmaps,Lt=_.isVideoTexture!==!0,Qt=gt.__version===void 0||j===!0,P=q.dataReady,it=w(_,Q);if(_.isDepthTexture)bt=M(_.format===di,_.type),Qt&&(Lt?e.texStorage2D(s.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,bt,Q.width,Q.height,0,dt,St,null));else if(_.isDataTexture)if(zt.length>0){Lt&&Qt&&e.texStorage2D(s.TEXTURE_2D,it,bt,zt[0].width,zt[0].height);for(let W=0,Z=zt.length;W<Z;W++)ft=zt[W],Lt?P&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,ft.width,ft.height,dt,St,ft.data):e.texImage2D(s.TEXTURE_2D,W,bt,ft.width,ft.height,0,dt,St,ft.data);_.generateMipmaps=!1}else Lt?(Qt&&e.texStorage2D(s.TEXTURE_2D,it,bt,Q.width,Q.height),P&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,St,Q.data)):e.texImage2D(s.TEXTURE_2D,0,bt,Q.width,Q.height,0,dt,St,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Lt&&Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,bt,zt[0].width,zt[0].height,Q.depth);for(let W=0,Z=zt.length;W<Z;W++)if(ft=zt[W],_.format!==Ve)if(dt!==null)if(Lt){if(P)if(_.layerUpdates.size>0){const ct=Qa(ft.width,ft.height,_.format,_.type);for(const lt of _.layerUpdates){const Ct=ft.data.subarray(lt*ct/ft.data.BYTES_PER_ELEMENT,(lt+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,lt,ft.width,ft.height,1,dt,Ct)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,ft.width,ft.height,Q.depth,dt,ft.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,bt,ft.width,ft.height,Q.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?P&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,ft.width,ft.height,Q.depth,dt,St,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,bt,ft.width,ft.height,Q.depth,0,dt,St,ft.data)}else{Lt&&Qt&&e.texStorage2D(s.TEXTURE_2D,it,bt,zt[0].width,zt[0].height);for(let W=0,Z=zt.length;W<Z;W++)ft=zt[W],_.format!==Ve?dt!==null?Lt?P&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,W,bt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?P&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,ft.width,ft.height,dt,St,ft.data):e.texImage2D(s.TEXTURE_2D,W,bt,ft.width,ft.height,0,dt,St,ft.data)}else if(_.isDataArrayTexture)if(Lt){if(Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,bt,Q.width,Q.height,Q.depth),P)if(_.layerUpdates.size>0){const W=Qa(Q.width,Q.height,_.format,_.type);for(const Z of _.layerUpdates){const ct=Q.data.subarray(Z*W/Q.data.BYTES_PER_ELEMENT,(Z+1)*W/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,dt,St,ct)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,St,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,dt,St,Q.data);else if(_.isData3DTexture)Lt?(Qt&&e.texStorage3D(s.TEXTURE_3D,it,bt,Q.width,Q.height,Q.depth),P&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,St,Q.data)):e.texImage3D(s.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,dt,St,Q.data);else if(_.isFramebufferTexture){if(Qt)if(Lt)e.texStorage2D(s.TEXTURE_2D,it,bt,Q.width,Q.height);else{let W=Q.width,Z=Q.height;for(let ct=0;ct<it;ct++)e.texImage2D(s.TEXTURE_2D,ct,bt,W,Z,0,dt,St,null),W>>=1,Z>>=1}}else if(zt.length>0){if(Lt&&Qt){const W=vt(zt[0]);e.texStorage2D(s.TEXTURE_2D,it,bt,W.width,W.height)}for(let W=0,Z=zt.length;W<Z;W++)ft=zt[W],Lt?P&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,dt,St,ft):e.texImage2D(s.TEXTURE_2D,W,bt,dt,St,ft);_.generateMipmaps=!1}else if(Lt){if(Qt){const W=vt(Q);e.texStorage2D(s.TEXTURE_2D,it,bt,W.width,W.height)}P&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,St,Q)}else e.texImage2D(s.TEXTURE_2D,0,bt,dt,St,Q);m(_)&&u(K),gt.__version=q.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function et(b,_,B){if(_.image.length!==6)return;const K=jt(b,_),j=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+B);const q=n.get(j);if(j.version!==q.__version||K===!0){e.activeTexture(s.TEXTURE0+B);const gt=Xt.getPrimaries(Xt.workingColorSpace),at=_.colorSpace===pn?null:Xt.getPrimaries(_.colorSpace),ut=_.colorSpace===pn||gt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Ht=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!Ht&&!Q?dt[Z]=v(_.image[Z],!0,i.maxCubemapSize):dt[Z]=Q?_.image[Z].image:_.image[Z],dt[Z]=ee(_,dt[Z]);const St=dt[0],bt=r.convert(_.format,_.colorSpace),ft=r.convert(_.type),zt=E(_.internalFormat,bt,ft,_.colorSpace),Lt=_.isVideoTexture!==!0,Qt=q.__version===void 0||K===!0,P=j.dataReady;let it=w(_,St);Ut(s.TEXTURE_CUBE_MAP,_);let W;if(Ht){Lt&&Qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,it,zt,St.width,St.height);for(let Z=0;Z<6;Z++){W=dt[Z].mipmaps;for(let ct=0;ct<W.length;ct++){const lt=W[ct];_.format!==Ve?bt!==null?Lt?P&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,lt.width,lt.height,bt,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,zt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,lt.width,lt.height,bt,ft,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,zt,lt.width,lt.height,0,bt,ft,lt.data)}}}else{if(W=_.mipmaps,Lt&&Qt){W.length>0&&it++;const Z=vt(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,it,zt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Lt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,bt,ft,dt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,dt[Z].width,dt[Z].height,0,bt,ft,dt[Z].data);for(let ct=0;ct<W.length;ct++){const Ct=W[ct].image[Z].image;Lt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Ct.width,Ct.height,bt,ft,Ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,zt,Ct.width,Ct.height,0,bt,ft,Ct.data)}}else{Lt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,bt,ft,dt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,bt,ft,dt[Z]);for(let ct=0;ct<W.length;ct++){const lt=W[ct];Lt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,bt,ft,lt.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,zt,bt,ft,lt.image[Z])}}}m(_)&&u(s.TEXTURE_CUBE_MAP),q.__version=j.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function mt(b,_,B,K,j,q){const gt=r.convert(B.format,B.colorSpace),at=r.convert(B.type),ut=E(B.internalFormat,gt,at,B.colorSpace),Ht=n.get(_),Q=n.get(B);if(Q.__renderTarget=_,!Ht.__hasExternalTextures){const dt=Math.max(1,_.width>>q),St=Math.max(1,_.height>>q);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,q,ut,dt,St,_.depth,0,gt,at,null):e.texImage2D(j,q,ut,dt,St,0,gt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),Bt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,j,Q.__webglTexture,0,Ot(_)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,j,Q.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(b,_,B){if(s.bindRenderbuffer(s.RENDERBUFFER,b),_.depthBuffer){const K=_.depthTexture,j=K&&K.isDepthTexture?K.type:null,q=M(_.stencilBuffer,j),gt=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=Ot(_);Bt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,q,_.width,_.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,q,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,q,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,b)}else{const K=_.textures;for(let j=0;j<K.length;j++){const q=K[j],gt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),ut=E(q.internalFormat,gt,at,q.colorSpace),Ht=Ot(_);B&&Bt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,ut,_.width,_.height):Bt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht,ut,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ut,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Et(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const j=K.__webglTexture,q=Ot(_);if(_.depthTexture.format===ai)Bt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(_.depthTexture.format===di)Bt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function At(b){const _=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=K}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Et(_.__webglFramebuffer,b)}else if(B){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=s.createRenderbuffer(),rt(_.__webglDepthbuffer[K],b,!1);else{const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),rt(_.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(b,_,B){const K=n.get(b);_!==void 0&&mt(K.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&At(b)}function se(b){const _=b.texture,B=n.get(b),K=n.get(_);b.addEventListener("dispose",C);const j=b.textures,q=b.isWebGLCubeRenderTarget===!0,gt=j.length>1;if(gt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=_.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let ut=0;ut<_.mipmaps.length;ut++)B.__webglFramebuffer[at][ut]=s.createFramebuffer()}else B.__webglFramebuffer[at]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)B.__webglFramebuffer[at]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(gt)for(let at=0,ut=j.length;at<ut;at++){const Ht=n.get(j[at]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&Bt(b)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const ut=j[at];B.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const Ht=r.convert(ut.format,ut.colorSpace),Q=r.convert(ut.type),dt=E(ut.internalFormat,Ht,Q,ut.colorSpace,b.isXRRenderTarget===!0),St=Ot(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,St,dt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,B.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)mt(B.__webglFramebuffer[at][ut],b,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else mt(B.__webglFramebuffer[at],b,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(_)&&u(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let at=0,ut=j.length;at<ut;at++){const Ht=j[at],Q=n.get(Ht);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Ut(s.TEXTURE_2D,Ht),mt(B.__webglFramebuffer,b,Ht,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),m(Ht)&&u(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(at=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),Ut(at,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)mt(B.__webglFramebuffer[ut],b,_,s.COLOR_ATTACHMENT0,at,ut);else mt(B.__webglFramebuffer,b,_,s.COLOR_ATTACHMENT0,at,0);m(_)&&u(at),e.unbindTexture()}b.depthBuffer&&At(b)}function kt(b){const _=b.textures;for(let B=0,K=_.length;B<K;B++){const j=_[B];if(m(j)){const q=T(b),gt=n.get(j).__webglTexture;e.bindTexture(q,gt),u(q),e.unbindTexture()}}}const oe=[],D=[];function Le(b){if(b.samples>0){if(Bt(b)===!1){const _=b.textures,B=b.width,K=b.height;let j=s.COLOR_BUFFER_BIT;const q=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(b),at=_.length>1;if(at)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);const Ht=n.get(_[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ht,0)}s.blitFramebuffer(0,0,B,K,0,0,B,K,j,s.NEAREST),l===!0&&(oe.length=0,D.length=0,oe.push(s.COLOR_ATTACHMENT0+ut),b.depthBuffer&&b.resolveDepthBuffer===!1&&(oe.push(q),D.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);const Ht=n.get(_[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,Ht,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Ot(b){return Math.min(i.maxSamples,b.samples)}function Bt(b){const _=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xt(b){const _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function ee(b,_){const B=b.colorSpace,K=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==fi&&B!==pn&&(Xt.getTransfer(B)===Kt?(K!==Ve||j!==on)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function vt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Nt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Bt}function Fp(s,t){function e(n,i=pn){let r;const a=Xt.getTransfer(i);if(n===on)return s.UNSIGNED_BYTE;if(n===Kr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Po)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Do)return s.BYTE;if(n===Lo)return s.SHORT;if(n===Di)return s.UNSIGNED_SHORT;if(n===$r)return s.INT;if(n===Bn)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===Pi)return s.HALF_FLOAT;if(n===Io)return s.ALPHA;if(n===Uo)return s.RGB;if(n===Ve)return s.RGBA;if(n===No)return s.LUMINANCE;if(n===Fo)return s.LUMINANCE_ALPHA;if(n===ai)return s.DEPTH_COMPONENT;if(n===di)return s.DEPTH_STENCIL;if(n===Oo)return s.RED;if(n===jr)return s.RED_INTEGER;if(n===Bo)return s.RG;if(n===Jr)return s.RG_INTEGER;if(n===Qr)return s.RGBA_INTEGER;if(n===cs||n===hs||n===us||n===ds)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_r||n===xr||n===yr||n===Mr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sr||n===Er||n===br)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sr||n===Er)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===br)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tr||n===Ar||n===wr||n===Rr||n===Cr||n===Dr||n===Lr||n===Pr||n===Ir||n===Ur||n===Nr||n===Fr||n===Or||n===Br)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ar)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ir)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ur)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Or)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Br)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fs||n===zr||n===kr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fs)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zo||n===Hr||n===Vr||n===Gr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ui?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Op={type:"move"};class ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new On;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Bp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Te,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _n({vertexShader:Bp,fragmentShader:zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hp extends mi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,g=null;const v=new kp,m=e.getContextAttributes();let u=null,T=null;const E=[],M=[],w=new Gt;let A=null;const C=new De;C.viewport=new Zt;const U=new De;U.viewport=new Zt;const S=[C,U],y=new rh;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=E[Y];return et===void 0&&(et=new ir,E[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=E[Y];return et===void 0&&(et=new ir,E[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=E[Y];return et===void 0&&(et=new ir,E[Y]=et),et.getHandSpace()};function F(Y){const et=M.indexOf(Y.inputSource);if(et===-1)return;const mt=E[et];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,c||a),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<E.length;Y++){const et=M[Y];et!==null&&(M[Y]=null,E[Y].disconnect(et))}L=null,O=null,v.reset(),t.setRenderTarget(u),p=null,d=null,f=null,i=null,T=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(u=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",G),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(w),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let mt=null,rt=null,Et=null;m.depth&&(Et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=m.stencil?di:ai,rt=m.stencil?ui:Bn);const At={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};f=new XRWebGLBinding(i,e),d=f.createProjectionLayer(At),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new zn(d.textureWidth,d.textureHeight,{format:Ve,type:on,depthTexture:new Qo(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new zn(p.framebufferWidth,p.framebufferHeight,{format:Ve,type:on,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(Y){for(let et=0;et<Y.removed.length;et++){const mt=Y.removed[et],rt=M.indexOf(mt);rt>=0&&(M[rt]=null,E[rt].disconnect(mt))}for(let et=0;et<Y.added.length;et++){const mt=Y.added[et];let rt=M.indexOf(mt);if(rt===-1){for(let At=0;At<E.length;At++)if(At>=M.length){M.push(mt),rt=At;break}else if(M[At]===null){M[At]=mt,rt=At;break}if(rt===-1)break}const Et=E[rt];Et&&Et.connect(mt)}}const V=new R,$=new R;function H(Y,et,mt){V.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(mt.matrixWorld);const rt=V.distanceTo($),Et=et.projectionMatrix.elements,At=mt.projectionMatrix.elements,Nt=Et[14]/(Et[10]-1),se=Et[14]/(Et[10]+1),kt=(Et[9]+1)/Et[5],oe=(Et[9]-1)/Et[5],D=(Et[8]-1)/Et[0],Le=(At[8]+1)/At[0],Ot=Nt*D,Bt=Nt*Le,xt=rt/(-D+Le),ee=xt*-D;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ee),Y.translateZ(xt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const vt=Nt+xt,b=se+xt,_=Ot-ee,B=Bt+(rt-ee),K=kt*se/b*vt,j=oe*se/b*vt;Y.projectionMatrix.makePerspective(_,B,K,j,vt,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function tt(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let et=Y.near,mt=Y.far;v.texture!==null&&(v.depthNear>0&&(et=v.depthNear),v.depthFar>0&&(mt=v.depthFar)),y.near=U.near=C.near=et,y.far=U.far=C.far=mt,(L!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,O=y.far),C.layers.mask=Y.layers.mask|2,U.layers.mask=Y.layers.mask|4,y.layers.mask=C.layers.mask|U.layers.mask;const rt=Y.parent,Et=y.cameras;tt(y,rt);for(let At=0;At<Et.length;At++)tt(Et[At],rt);Et.length===2?H(y,C,U):y.projectionMatrix.copy(C.projectionMatrix),ot(Y,y,rt)};function ot(Y,et,mt){mt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Li*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let _t=null;function Ut(Y,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let rt=!1;mt.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let At=0;At<mt.length;At++){const Nt=mt[At];let se=null;if(p!==null)se=p.getViewport(Nt);else{const oe=f.getViewSubImage(d,Nt);se=oe.viewport,At===0&&(t.setRenderTargetTextures(T,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),t.setRenderTarget(T))}let kt=S[At];kt===void 0&&(kt=new De,kt.layers.enable(At),kt.viewport=new Zt,S[At]=kt),kt.matrix.fromArray(Nt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Nt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(se.x,se.y,se.width,se.height),At===0&&(y.matrix.copy(kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(kt)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const At=f.getDepthInformation(mt[0]);At&&At.isValid&&At.texture&&v.init(t,At,i.renderState)}}for(let mt=0;mt<E.length;mt++){const rt=M[mt],Et=E[mt];rt!==null&&Et!==void 0&&Et.update(rt,et,c||a)}_t&&_t(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const jt=new il;jt.setAnimationLoop(Ut),this.setAnimationLoop=function(Y){_t=Y},this.dispose=function(){}}}const wn=new Xe,Vp=new te;function Gp(s,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,$o(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,T,E,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,T,E):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===be&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===be&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const T=t.get(u),E=T.envMap,M=T.envMapRotation;E&&(m.envMap.value=E,wn.copy(M),wn.x*=-1,wn.y*=-1,wn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(wn.y*=-1,wn.z*=-1),m.envMapRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(wn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,T,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*T,m.scale.value=E*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,T){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===be&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const T=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wp(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const M=E.program;n.uniformBlockBinding(T,M)}function c(T,E){let M=i[T.id];M===void 0&&(g(T),M=h(T),i[T.id]=M,T.addEventListener("dispose",m));const w=E.program;n.updateUBOMapping(T,w);const A=t.render.frame;r[T.id]!==A&&(d(T),r[T.id]=A)}function h(T){const E=f();T.__bindingPointIndex=E;const M=s.createBuffer(),w=T.__size,A=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,M),M}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=i[T.id],M=T.uniforms,w=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,C=M.length;A<C;A++){const U=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,y=U.length;S<y;S++){const L=U[S];if(p(L,A,S,w)===!0){const O=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let X=0;X<F.length;X++){const V=F[X],$=v(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,O+G,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,E,M,w){const A=T.value,C=E+"_"+M;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const U=w[C];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return w[C]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(T){const E=T.uniforms;let M=0;const w=16;for(let C=0,U=E.length;C<U;C++){const S=Array.isArray(E[C])?E[C]:[E[C]];for(let y=0,L=S.length;y<L;y++){const O=S[y],F=Array.isArray(O.value)?O.value:[O.value];for(let G=0,X=F.length;G<X;G++){const V=F[G],$=v(V),H=M%w,tt=H%$.boundary,ot=H+tt;M+=tt,ot!==0&&w-ot<$.storage&&(M+=w-ot),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=$.storage}}}const A=M%w;return A>0&&(M+=w-A),T.__size=M,T.__cache={},this}function v(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function u(){for(const T in i)s.deleteBuffer(i[T]);a=[],i={},r={}}return{bind:l,update:c,dispose:u}}class Xp{constructor(t={}){const{canvas:e=yc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=gn,this.toneMappingExposure=1;const M=this;let w=!1,A=0,C=0,U=null,S=-1,y=null;const L=new Zt,O=new Zt;let F=null;const G=new It(0);let X=0,V=e.width,$=e.height,H=1,tt=null,ot=null;const _t=new Zt(0,0,V,$),Ut=new Zt(0,0,V,$);let jt=!1;const Y=new na;let et=!1,mt=!1;this.transmissionResolutionScale=1;const rt=new te,Et=new te,At=new R,Nt=new Zt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function oe(){return U===null?H:1}let D=n;function Le(x,I){return e.getContext(x,I)}try{const x={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yr}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),D===null){const I="webgl2";if(D=Le(I,x),D===null)throw Le(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ot,Bt,xt,ee,vt,b,_,B,K,j,q,gt,at,ut,Ht,Q,dt,St,bt,ft,zt,Lt,Qt,P;function it(){Ot=new Qd(D),Ot.init(),Lt=new Fp(D,Ot),Bt=new Yd(D,Ot,t,Lt),xt=new Up(D,Ot),Bt.reverseDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),ee=new nf(D),vt=new Mp,b=new Np(D,Ot,xt,vt,Bt,Lt,ee),_=new Kd(M),B=new Jd(M),K=new ch(D),Qt=new Xd(D,K),j=new tf(D,K,ee,Qt),q=new rf(D,j,K,ee),bt=new sf(D,Bt,b),Q=new $d(vt),gt=new yp(M,_,B,Ot,Bt,Qt,Q),at=new Gp(M,vt),ut=new Ep,Ht=new Cp(Ot),St=new Wd(M,_,B,xt,q,p,l),dt=new Pp(M,q,Bt),P=new Wp(D,ee,Bt,xt),ft=new qd(D,Ot,ee),zt=new ef(D,Ot,ee),ee.programs=gt.programs,M.capabilities=Bt,M.extensions=Ot,M.properties=vt,M.renderLists=ut,M.shadowMap=dt,M.state=xt,M.info=ee}it();const W=new Hp(M,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=Ot.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ot.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(V,$,!1))},this.getSize=function(x){return x.set(V,$)},this.setSize=function(x,I,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=x,$=I,e.width=Math.floor(x*H),e.height=Math.floor(I*H),z===!0&&(e.style.width=x+"px",e.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(V*H,$*H).floor()},this.setDrawingBufferSize=function(x,I,z){V=x,$=I,H=z,e.width=Math.floor(x*z),e.height=Math.floor(I*z),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(L)},this.getViewport=function(x){return x.copy(_t)},this.setViewport=function(x,I,z,k){x.isVector4?_t.set(x.x,x.y,x.z,x.w):_t.set(x,I,z,k),xt.viewport(L.copy(_t).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(Ut)},this.setScissor=function(x,I,z,k){x.isVector4?Ut.set(x.x,x.y,x.z,x.w):Ut.set(x,I,z,k),xt.scissor(O.copy(Ut).multiplyScalar(H).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(x){xt.setScissorTest(jt=x)},this.setOpaqueSort=function(x){tt=x},this.setTransparentSort=function(x){ot=x},this.getClearColor=function(x){return x.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(x=!0,I=!0,z=!0){let k=0;if(x){let N=!1;if(U!==null){const J=U.texture.format;N=J===Qr||J===Jr||J===jr}if(N){const J=U.texture.type,st=J===on||J===Bn||J===Di||J===ui||J===Kr||J===Zr,ht=St.getClearColor(),pt=St.getClearAlpha(),Tt=ht.r,wt=ht.g,yt=ht.b;st?(g[0]=Tt,g[1]=wt,g[2]=yt,g[3]=pt,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Tt,v[1]=wt,v[2]=yt,v[3]=pt,D.clearBufferiv(D.COLOR,0,v))}else k|=D.COLOR_BUFFER_BIT}I&&(k|=D.DEPTH_BUFFER_BIT),z&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),St.dispose(),ut.dispose(),Ht.dispose(),vt.dispose(),_.dispose(),B.dispose(),q.dispose(),Qt.dispose(),P.dispose(),gt.dispose(),W.dispose(),W.removeEventListener("sessionstart",la),W.removeEventListener("sessionend",ca),yn.stop()};function Z(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const x=ee.autoReset,I=dt.enabled,z=dt.autoUpdate,k=dt.needsUpdate,N=dt.type;it(),ee.autoReset=x,dt.enabled=I,dt.autoUpdate=z,dt.needsUpdate=k,dt.type=N}function lt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ct(x){const I=x.target;I.removeEventListener("dispose",Ct),re(I)}function re(x){ge(x),vt.remove(x)}function ge(x){const I=vt.get(x).programs;I!==void 0&&(I.forEach(function(z){gt.releaseProgram(z)}),x.isShaderMaterial&&gt.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,z,k,N,J){I===null&&(I=se);const st=N.isMesh&&N.matrixWorld.determinant()<0,ht=hl(x,I,z,k,N);xt.setMaterial(k,st);let pt=z.index,Tt=1;if(k.wireframe===!0){if(pt=j.getWireframeAttribute(z),pt===void 0)return;Tt=2}const wt=z.drawRange,yt=z.attributes.position;let Vt=wt.start*Tt,qt=(wt.start+wt.count)*Tt;J!==null&&(Vt=Math.max(Vt,J.start*Tt),qt=Math.min(qt,(J.start+J.count)*Tt)),pt!==null?(Vt=Math.max(Vt,0),qt=Math.min(qt,pt.count)):yt!=null&&(Vt=Math.max(Vt,0),qt=Math.min(qt,yt.count));const le=qt-Vt;if(le<0||le===1/0)return;Qt.setup(N,k,ht,z,pt);let ae,Wt=ft;if(pt!==null&&(ae=K.get(pt),Wt=zt,Wt.setIndex(ae)),N.isMesh)k.wireframe===!0?(xt.setLineWidth(k.wireframeLinewidth*oe()),Wt.setMode(D.LINES)):Wt.setMode(D.TRIANGLES);else if(N.isLine){let Mt=k.linewidth;Mt===void 0&&(Mt=1),xt.setLineWidth(Mt*oe()),N.isLineSegments?Wt.setMode(D.LINES):N.isLineLoop?Wt.setMode(D.LINE_LOOP):Wt.setMode(D.LINE_STRIP)}else N.isPoints?Wt.setMode(D.POINTS):N.isSprite&&Wt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Wt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Wt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Mt=N._multiDrawStarts,pe=N._multiDrawCounts,Yt=N._multiDrawCount,Oe=pt?K.get(pt).bytesPerElement:1,Hn=vt.get(k).currentProgram.getUniforms();for(let we=0;we<Yt;we++)Hn.setValue(D,"_gl_DrawID",we),Wt.render(Mt[we]/Oe,pe[we])}else if(N.isInstancedMesh)Wt.renderInstances(Vt,le,N.count);else if(z.isInstancedBufferGeometry){const Mt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,pe=Math.min(z.instanceCount,Mt);Wt.renderInstances(Vt,le,pe)}else Wt.render(Vt,le)};function $t(x,I,z){x.transparent===!0&&x.side===Ye&&x.forceSinglePass===!1?(x.side=be,x.needsUpdate=!0,Oi(x,I,z),x.side=vn,x.needsUpdate=!0,Oi(x,I,z),x.side=Ye):Oi(x,I,z)}this.compile=function(x,I,z=null){z===null&&(z=x),u=Ht.get(z),u.init(I),E.push(u),z.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),x!==z&&x.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const k=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const J=N.material;if(J)if(Array.isArray(J))for(let st=0;st<J.length;st++){const ht=J[st];$t(ht,z,N),k.add(ht)}else $t(J,z,N),k.add(J)}),E.pop(),u=null,k},this.compileAsync=function(x,I,z=null){const k=this.compile(x,I,z);return new Promise(N=>{function J(){if(k.forEach(function(st){vt.get(st).currentProgram.isReady()&&k.delete(st)}),k.size===0){N(x);return}setTimeout(J,10)}Ot.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Fe=null;function Ze(x){Fe&&Fe(x)}function la(){yn.stop()}function ca(){yn.start()}const yn=new il;yn.setAnimationLoop(Ze),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(x){Fe=x,W.setAnimationLoop(x),x===null?yn.stop():yn.start()},W.addEventListener("sessionstart",la),W.addEventListener("sessionend",ca),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,I,U),u=Ht.get(x,E.length),u.init(I),E.push(u),Et.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Y.setFromProjectionMatrix(Et),mt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,mt),m=ut.get(x,T.length),m.init(),T.push(m),W.enabled===!0&&W.isPresenting===!0){const J=M.xr.getDepthSensingMesh();J!==null&&bs(J,I,-1/0,M.sortObjects)}bs(x,I,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(tt,ot),kt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,kt&&St.addToRenderList(m,x),this.info.render.frame++,et===!0&&Q.beginShadows();const z=u.state.shadowsArray;dt.render(z,x,I),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(u.setupLights(),I.isArrayCamera){const J=I.cameras;if(N.length>0)for(let st=0,ht=J.length;st<ht;st++){const pt=J[st];ua(k,N,x,pt)}kt&&St.render(x);for(let st=0,ht=J.length;st<ht;st++){const pt=J[st];ha(m,x,pt,pt.viewport)}}else N.length>0&&ua(k,N,x,I),kt&&St.render(x),ha(m,x,I);U!==null&&C===0&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(M,x,I),Qt.resetDefaultState(),S=-1,y=null,E.pop(),E.length>0?(u=E[E.length-1],et===!0&&Q.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function bs(x,I,z,k){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Y.intersectsSprite(x)){k&&Nt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Et);const st=q.update(x),ht=x.material;ht.visible&&m.push(x,st,ht,z,Nt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Y.intersectsObject(x))){const st=q.update(x),ht=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Nt.copy(x.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Nt.copy(st.boundingSphere.center)),Nt.applyMatrix4(x.matrixWorld).applyMatrix4(Et)),Array.isArray(ht)){const pt=st.groups;for(let Tt=0,wt=pt.length;Tt<wt;Tt++){const yt=pt[Tt],Vt=ht[yt.materialIndex];Vt&&Vt.visible&&m.push(x,st,Vt,z,Nt.z,yt)}}else ht.visible&&m.push(x,st,ht,z,Nt.z,null)}}const J=x.children;for(let st=0,ht=J.length;st<ht;st++)bs(J[st],I,z,k)}function ha(x,I,z,k){const N=x.opaque,J=x.transmissive,st=x.transparent;u.setupLightsView(z),et===!0&&Q.setGlobalState(M.clippingPlanes,z),k&&xt.viewport(L.copy(k)),N.length>0&&Fi(N,I,z),J.length>0&&Fi(J,I,z),st.length>0&&Fi(st,I,z),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function ua(x,I,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[k.id]===void 0&&(u.state.transmissionRenderTarget[k.id]=new zn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Pi:on,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const J=u.state.transmissionRenderTarget[k.id],st=k.viewport||L;J.setSize(st.z*M.transmissionResolutionScale,st.w*M.transmissionResolutionScale);const ht=M.getRenderTarget();M.setRenderTarget(J),M.getClearColor(G),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),kt&&St.render(z);const pt=M.toneMapping;M.toneMapping=gn;const Tt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),u.setupLightsView(k),et===!0&&Q.setGlobalState(M.clippingPlanes,k),Fi(x,z,k),b.updateMultisampleRenderTarget(J),b.updateRenderTargetMipmap(J),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let yt=0,Vt=I.length;yt<Vt;yt++){const qt=I[yt],le=qt.object,ae=qt.geometry,Wt=qt.material,Mt=qt.group;if(Wt.side===Ye&&le.layers.test(k.layers)){const pe=Wt.side;Wt.side=be,Wt.needsUpdate=!0,da(le,z,k,ae,Wt,Mt),Wt.side=pe,Wt.needsUpdate=!0,wt=!0}}wt===!0&&(b.updateMultisampleRenderTarget(J),b.updateRenderTargetMipmap(J))}M.setRenderTarget(ht),M.setClearColor(G,X),Tt!==void 0&&(k.viewport=Tt),M.toneMapping=pt}function Fi(x,I,z){const k=I.isScene===!0?I.overrideMaterial:null;for(let N=0,J=x.length;N<J;N++){const st=x[N],ht=st.object,pt=st.geometry,Tt=k===null?st.material:k,wt=st.group;ht.layers.test(z.layers)&&da(ht,I,z,pt,Tt,wt)}}function da(x,I,z,k,N,J){x.onBeforeRender(M,I,z,k,N,J),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(M,I,z,k,x,J),N.transparent===!0&&N.side===Ye&&N.forceSinglePass===!1?(N.side=be,N.needsUpdate=!0,M.renderBufferDirect(z,I,k,N,x,J),N.side=vn,N.needsUpdate=!0,M.renderBufferDirect(z,I,k,N,x,J),N.side=Ye):M.renderBufferDirect(z,I,k,N,x,J),x.onAfterRender(M,I,z,k,N,J)}function Oi(x,I,z){I.isScene!==!0&&(I=se);const k=vt.get(x),N=u.state.lights,J=u.state.shadowsArray,st=N.state.version,ht=gt.getParameters(x,N.state,J,I,z),pt=gt.getProgramCacheKey(ht);let Tt=k.programs;k.environment=x.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(x.isMeshStandardMaterial?B:_).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Tt===void 0&&(x.addEventListener("dispose",Ct),Tt=new Map,k.programs=Tt);let wt=Tt.get(pt);if(wt!==void 0){if(k.currentProgram===wt&&k.lightsStateVersion===st)return pa(x,ht),wt}else ht.uniforms=gt.getUniforms(x),x.onBeforeCompile(ht,M),wt=gt.acquireProgram(ht,pt),Tt.set(pt,wt),k.uniforms=ht.uniforms;const yt=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(yt.clippingPlanes=Q.uniform),pa(x,ht),k.needsLights=dl(x),k.lightsStateVersion=st,k.needsLights&&(yt.ambientLightColor.value=N.state.ambient,yt.lightProbe.value=N.state.probe,yt.directionalLights.value=N.state.directional,yt.directionalLightShadows.value=N.state.directionalShadow,yt.spotLights.value=N.state.spot,yt.spotLightShadows.value=N.state.spotShadow,yt.rectAreaLights.value=N.state.rectArea,yt.ltc_1.value=N.state.rectAreaLTC1,yt.ltc_2.value=N.state.rectAreaLTC2,yt.pointLights.value=N.state.point,yt.pointLightShadows.value=N.state.pointShadow,yt.hemisphereLights.value=N.state.hemi,yt.directionalShadowMap.value=N.state.directionalShadowMap,yt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,yt.spotShadowMap.value=N.state.spotShadowMap,yt.spotLightMatrix.value=N.state.spotLightMatrix,yt.spotLightMap.value=N.state.spotLightMap,yt.pointShadowMap.value=N.state.pointShadowMap,yt.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=wt,k.uniformsList=null,wt}function fa(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=ps.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function pa(x,I){const z=vt.get(x);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function hl(x,I,z,k,N){I.isScene!==!0&&(I=se),b.resetTextureUnits();const J=I.fog,st=k.isMeshStandardMaterial?I.environment:null,ht=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:fi,pt=(k.isMeshStandardMaterial?B:_).get(k.envMap||st),Tt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,wt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),yt=!!z.morphAttributes.position,Vt=!!z.morphAttributes.normal,qt=!!z.morphAttributes.color;let le=gn;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(le=M.toneMapping);const ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Wt=ae!==void 0?ae.length:0,Mt=vt.get(k),pe=u.state.lights;if(et===!0&&(mt===!0||x!==y)){const xe=x===y&&k.id===S;Q.setState(k,x,xe)}let Yt=!1;k.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==pe.state.version||Mt.outputColorSpace!==ht||N.isBatchedMesh&&Mt.batching===!1||!N.isBatchedMesh&&Mt.batching===!0||N.isBatchedMesh&&Mt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Mt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Mt.instancing===!1||!N.isInstancedMesh&&Mt.instancing===!0||N.isSkinnedMesh&&Mt.skinning===!1||!N.isSkinnedMesh&&Mt.skinning===!0||N.isInstancedMesh&&Mt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Mt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Mt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Mt.instancingMorph===!1&&N.morphTexture!==null||Mt.envMap!==pt||k.fog===!0&&Mt.fog!==J||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==Tt||Mt.vertexTangents!==wt||Mt.morphTargets!==yt||Mt.morphNormals!==Vt||Mt.morphColors!==qt||Mt.toneMapping!==le||Mt.morphTargetsCount!==Wt)&&(Yt=!0):(Yt=!0,Mt.__version=k.version);let Oe=Mt.currentProgram;Yt===!0&&(Oe=Oi(k,I,N));let Hn=!1,we=!1,xi=!1;const ne=Oe.getUniforms(),Pe=Mt.uniforms;if(xt.useProgram(Oe.program)&&(Hn=!0,we=!0,xi=!0),k.id!==S&&(S=k.id,we=!0),Hn||y!==x){xt.buffers.depth.getReversed()?(rt.copy(x.projectionMatrix),Sc(rt),Ec(rt),ne.setValue(D,"projectionMatrix",rt)):ne.setValue(D,"projectionMatrix",x.projectionMatrix),ne.setValue(D,"viewMatrix",x.matrixWorldInverse);const Se=ne.map.cameraPosition;Se!==void 0&&Se.setValue(D,At.setFromMatrixPosition(x.matrixWorld)),Bt.logarithmicDepthBuffer&&ne.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ne.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,we=!0,xi=!0)}if(N.isSkinnedMesh){ne.setOptional(D,N,"bindMatrix"),ne.setOptional(D,N,"bindMatrixInverse");const xe=N.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),ne.setValue(D,"boneTexture",xe.boneTexture,b))}N.isBatchedMesh&&(ne.setOptional(D,N,"batchingTexture"),ne.setValue(D,"batchingTexture",N._matricesTexture,b),ne.setOptional(D,N,"batchingIdTexture"),ne.setValue(D,"batchingIdTexture",N._indirectTexture,b),ne.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&ne.setValue(D,"batchingColorTexture",N._colorsTexture,b));const Ie=z.morphAttributes;if((Ie.position!==void 0||Ie.normal!==void 0||Ie.color!==void 0)&&bt.update(N,z,Oe),(we||Mt.receiveShadow!==N.receiveShadow)&&(Mt.receiveShadow=N.receiveShadow,ne.setValue(D,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Pe.envMap.value=pt,Pe.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(Pe.envMapIntensity.value=I.environmentIntensity),we&&(ne.setValue(D,"toneMappingExposure",M.toneMappingExposure),Mt.needsLights&&ul(Pe,xi),J&&k.fog===!0&&at.refreshFogUniforms(Pe,J),at.refreshMaterialUniforms(Pe,k,H,$,u.state.transmissionRenderTarget[x.id]),ps.upload(D,fa(Mt),Pe,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ps.upload(D,fa(Mt),Pe,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ne.setValue(D,"center",N.center),ne.setValue(D,"modelViewMatrix",N.modelViewMatrix),ne.setValue(D,"normalMatrix",N.normalMatrix),ne.setValue(D,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const xe=k.uniformsGroups;for(let Se=0,Ts=xe.length;Se<Ts;Se++){const Mn=xe[Se];P.update(Mn,Oe),P.bind(Mn,Oe)}}return Oe}function ul(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function dl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,I,z){vt.get(x.texture).__webglTexture=I,vt.get(x.depthTexture).__webglTexture=z;const k=vt.get(x);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,I){const z=vt.get(x);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0};const fl=D.createFramebuffer();this.setRenderTarget=function(x,I=0,z=0){U=x,A=I,C=z;let k=!0,N=null,J=!1,st=!1;if(x){const pt=vt.get(x);if(pt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(pt.__webglFramebuffer===void 0)b.setupRenderTarget(x);else if(pt.__hasExternalTextures)b.rebindTextures(x,vt.get(x.texture).__webglTexture,vt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const yt=x.depthTexture;if(pt.__boundDepthTexture!==yt){if(yt!==null&&vt.has(yt)&&(x.width!==yt.image.width||x.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(x)}}const Tt=x.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(st=!0);const wt=vt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?N=wt[I][z]:N=wt[I],J=!0):x.samples>0&&b.useMultisampledRTT(x)===!1?N=vt.get(x).__webglMultisampledFramebuffer:Array.isArray(wt)?N=wt[z]:N=wt,L.copy(x.viewport),O.copy(x.scissor),F=x.scissorTest}else L.copy(_t).multiplyScalar(H).floor(),O.copy(Ut).multiplyScalar(H).floor(),F=jt;if(z!==0&&(N=fl),xt.bindFramebuffer(D.FRAMEBUFFER,N)&&k&&xt.drawBuffers(x,N),xt.viewport(L),xt.scissor(O),xt.setScissorTest(F),J){const pt=vt.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,z)}else if(st){const pt=vt.get(x.texture),Tt=I;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.__webglTexture,z,Tt)}else if(x!==null&&z!==0){const pt=vt.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pt.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(x,I,z,k,N,J,st){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=vt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&st!==void 0&&(ht=ht[st]),ht){xt.bindFramebuffer(D.FRAMEBUFFER,ht);try{const pt=x.texture,Tt=pt.format,wt=pt.type;if(!Bt.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-k&&z>=0&&z<=x.height-N&&D.readPixels(I,z,k,N,Lt.convert(Tt),Lt.convert(wt),J)}finally{const pt=U!==null?vt.get(U).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(x,I,z,k,N,J,st){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=vt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&st!==void 0&&(ht=ht[st]),ht){const pt=x.texture,Tt=pt.format,wt=pt.type;if(!Bt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=x.width-k&&z>=0&&z<=x.height-N){xt.bindFramebuffer(D.FRAMEBUFFER,ht);const yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.bufferData(D.PIXEL_PACK_BUFFER,J.byteLength,D.STREAM_READ),D.readPixels(I,z,k,N,Lt.convert(Tt),Lt.convert(wt),0);const Vt=U!==null?vt.get(U).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Vt);const qt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Mc(D,qt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,J),D.deleteBuffer(yt),D.deleteSync(qt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,I=null,z=0){x.isTexture!==!0&&(ii("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,x=arguments[1]);const k=Math.pow(2,-z),N=Math.floor(x.image.width*k),J=Math.floor(x.image.height*k),st=I!==null?I.x:0,ht=I!==null?I.y:0;b.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,st,ht,N,J),xt.unbindTexture()};const pl=D.createFramebuffer(),ml=D.createFramebuffer();this.copyTextureToTexture=function(x,I,z=null,k=null,N=0,J=null){x.isTexture!==!0&&(ii("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1],I=arguments[2],J=arguments[3]||0,z=null),J===null&&(N!==0?(ii("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=N,N=0):J=0);let st,ht,pt,Tt,wt,yt,Vt,qt,le;const ae=x.isCompressedTexture?x.mipmaps[J]:x.image;if(z!==null)st=z.max.x-z.min.x,ht=z.max.y-z.min.y,pt=z.isBox3?z.max.z-z.min.z:1,Tt=z.min.x,wt=z.min.y,yt=z.isBox3?z.min.z:0;else{const Ie=Math.pow(2,-N);st=Math.floor(ae.width*Ie),ht=Math.floor(ae.height*Ie),x.isDataArrayTexture?pt=ae.depth:x.isData3DTexture?pt=Math.floor(ae.depth*Ie):pt=1,Tt=0,wt=0,yt=0}k!==null?(Vt=k.x,qt=k.y,le=k.z):(Vt=0,qt=0,le=0);const Wt=Lt.convert(I.format),Mt=Lt.convert(I.type);let pe;I.isData3DTexture?(b.setTexture3D(I,0),pe=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(b.setTexture2DArray(I,0),pe=D.TEXTURE_2D_ARRAY):(b.setTexture2D(I,0),pe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Yt=D.getParameter(D.UNPACK_ROW_LENGTH),Oe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Hn=D.getParameter(D.UNPACK_SKIP_PIXELS),we=D.getParameter(D.UNPACK_SKIP_ROWS),xi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tt),D.pixelStorei(D.UNPACK_SKIP_ROWS,wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,yt);const ne=x.isDataArrayTexture||x.isData3DTexture,Pe=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const Ie=vt.get(x),xe=vt.get(I),Se=vt.get(Ie.__renderTarget),Ts=vt.get(xe.__renderTarget);xt.bindFramebuffer(D.READ_FRAMEBUFFER,Se.__webglFramebuffer),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let Mn=0;Mn<pt;Mn++)ne&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(x).__webglTexture,N,yt+Mn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(I).__webglTexture,J,le+Mn)),D.blitFramebuffer(Tt,wt,st,ht,Vt,qt,st,ht,D.DEPTH_BUFFER_BIT,D.NEAREST);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||vt.has(x)){const Ie=vt.get(x),xe=vt.get(I);xt.bindFramebuffer(D.READ_FRAMEBUFFER,pl),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ml);for(let Se=0;Se<pt;Se++)ne?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.__webglTexture,N,yt+Se):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ie.__webglTexture,N),Pe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.__webglTexture,J,le+Se):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xe.__webglTexture,J),N!==0?D.blitFramebuffer(Tt,wt,st,ht,Vt,qt,st,ht,D.COLOR_BUFFER_BIT,D.NEAREST):Pe?D.copyTexSubImage3D(pe,J,Vt,qt,le+Se,Tt,wt,st,ht):D.copyTexSubImage2D(pe,J,Vt,qt,Tt,wt,st,ht);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Pe?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(pe,J,Vt,qt,le,st,ht,pt,Wt,Mt,ae.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(pe,J,Vt,qt,le,st,ht,pt,Wt,ae.data):D.texSubImage3D(pe,J,Vt,qt,le,st,ht,pt,Wt,Mt,ae):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,J,Vt,qt,st,ht,Wt,Mt,ae.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,J,Vt,qt,ae.width,ae.height,Wt,ae.data):D.texSubImage2D(D.TEXTURE_2D,J,Vt,qt,st,ht,Wt,Mt,ae);D.pixelStorei(D.UNPACK_ROW_LENGTH,Yt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Oe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Hn),D.pixelStorei(D.UNPACK_SKIP_ROWS,we),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xi),J===0&&I.generateMipmaps&&D.generateMipmap(pe),xt.unbindTexture()},this.copyTextureToTexture3D=function(x,I,z=null,k=null,N=0){return x.isTexture!==!0&&(ii("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,x=arguments[2],I=arguments[3],N=arguments[4]||0),ii('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,I,z,k,N)},this.initRenderTarget=function(x){vt.get(x).__webglFramebuffer===void 0&&b.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?b.setTextureCube(x,0):x.isData3DTexture?b.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?b.setTexture2DArray(x,0):b.setTexture2D(x,0),xt.unbindTexture()},this.resetState=function(){A=0,C=0,U=null,xt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class qp{constructor(t,e="auto"){this.renderer=t,this.preset=e,this.activeTier="medium",this.frameCount=0,this.lastTime=performance.now(),this.currentFPS=60,this.avgFPS=60,this.fpsHistory=[],this.historyMax=60,this.lastTierCheck=performance.now(),this.consecutiveLowFPS=0,this.consecutiveHighFPS=0,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.applyPreset(this.preset)}detectInitialTier(){return this.isMobile?"medium":(navigator.hardwareConcurrency||4)>=8?"high":"medium"}applyPreset(t){this.preset=t;let e=t;t==="auto"&&(e=this.detectInitialTier()),this.applyTier(e)}applyTier(t){if(this.activeTier=t,!!this.renderer)switch(t){case"low":this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,.85)),this.renderer.shadowMap.enabled=!1,this.maxParticles=30,this.viewDistance=90;break;case"medium":this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1)),this.renderer.shadowMap.enabled=!0,this.maxParticles=75,this.viewDistance=150;break;case"high":this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.35)),this.renderer.shadowMap.enabled=!0,this.maxParticles=150,this.viewDistance=220;break;case"ultra":this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.maxParticles=300,this.viewDistance=320;break}}update(t=performance.now()){this.frameCount++;const e=t-this.lastTime;if(e>=500){this.currentFPS=Math.round(this.frameCount*1e3/e),this.frameCount=0,this.lastTime=t,this.fpsHistory.push(this.currentFPS),this.fpsHistory.length>this.historyMax&&this.fpsHistory.shift();const n=this.fpsHistory.reduce((i,r)=>i+r,0);this.avgFPS=Math.round(n/this.fpsHistory.length),this.preset==="auto"&&t-this.lastTierCheck>4e3&&(this.lastTierCheck=t,this.avgFPS<28?(this.consecutiveLowFPS++,this.consecutiveHighFPS=0,this.consecutiveLowFPS>=2&&(this.stepDownTier(),this.consecutiveLowFPS=0)):this.avgFPS>55&&(this.consecutiveHighFPS++,this.consecutiveLowFPS=0,this.consecutiveHighFPS>=4&&(this.stepUpTier(),this.consecutiveHighFPS=0)))}}stepDownTier(){this.activeTier==="ultra"?this.applyTier("high"):this.activeTier==="high"?this.applyTier("medium"):this.activeTier==="medium"&&this.applyTier("low")}stepUpTier(){this.activeTier==="low"?this.applyTier("medium"):this.activeTier==="medium"&&!this.isMobile?this.applyTier("high"):this.activeTier==="high"&&!this.isMobile&&this.applyTier("ultra")}getMetrics(){const t=performance.memory?Math.round(performance.memory.usedJSHeapSize/1048576)+"MB":"N/A";return{fps:this.currentFPS,avgFps:this.avgFPS,tier:this.activeTier,preset:this.preset,memory:t}}}class Yp{constructor(){this.ctx=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null,this.isMuted=!1,this.musicPlaying=!1,this.musicInterval=null,this.settings={masterVolume:.8,sfxVolume:.9,musicVolume:.35}}init(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.settings.masterVolume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(this.settings.sfxVolume,this.ctx.currentTime),this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.setValueAtTime(this.settings.musicVolume,this.ctx.currentTime),this.musicGain.connect(this.masterGain)}catch(t){console.warn("Web Audio API initialization failed:",t)}}ensureContext(){this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolumes(t,e,n){if(this.settings.masterVolume=t,this.settings.sfxVolume=e,this.settings.musicVolume=n,!this.ctx)return;const i=this.ctx.currentTime;this.masterGain&&this.masterGain.gain.setTargetAtTime(t,i,.05),this.sfxGain&&this.sfxGain.gain.setTargetAtTime(e,i,.05),this.musicGain&&this.musicGain.gain.setTargetAtTime(n,i,.05)}createNoiseBuffer(t=.2){if(!this.ctx)return null;const e=this.ctx.sampleRate*t,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;return n}playGunshot(t="rifle"){if(this.ensureContext(),!this.ctx)return;const e=this.ctx.currentTime;let n=.25,i=160,r=.15;t==="sniper"?(n=.55,i=90,r=.35):t==="shotgun"?(n=.4,i=110,r=.28):t==="smg"?(n=.16,i=220,r=.09):t==="pistol"?(n=.2,i=190,r=.12):t==="silenced"?(n=.1,i=280,r=.05):t==="melee"&&(n=.12,i=210,r=.08);const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(i*2.2,e),a.frequency.exponentialRampToValueAtTime(35,e+r),o.gain.setValueAtTime(.8,e),o.gain.exponentialRampToValueAtTime(.001,e+r),a.connect(o),o.connect(this.sfxGain),a.start(e),a.stop(e+r);const l=this.createNoiseBuffer(n);if(l){const c=this.ctx.createBufferSource();c.buffer=l;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(4500,e),h.frequency.exponentialRampToValueAtTime(400,e+n);const f=this.ctx.createGain();f.gain.setValueAtTime(.7,e),f.gain.exponentialRampToValueAtTime(.001,e+n),c.connect(h),h.connect(f),f.connect(this.sfxGain),c.start(e),c.stop(e+n)}}playHitmarker(t=!1){if(this.ensureContext(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type=t?"sawtooth":"sine";const r=t?2400:1600;n.frequency.setValueAtTime(r,e),n.frequency.exponentialRampToValueAtTime(r*.7,e+.08),i.gain.setValueAtTime(t?.6:.35,e),i.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(i),i.connect(this.sfxGain),n.start(e),n.stop(e+.08)}playReload(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime;this.playClick(t,1200,.04),this.playClick(t+.35,800,.06),this.playClick(t+.7,1600,.08)}playClick(t,e,n){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(e,t),r.gain.setValueAtTime(.3,t),r.gain.exponentialRampToValueAtTime(.001,t+n),i.connect(r),r.connect(this.sfxGain),i.start(t),i.stop(t+n)}playFootstep(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(90+Math.random()*20,t),e.frequency.exponentialRampToValueAtTime(30,t+.06),n.gain.setValueAtTime(.18,t),n.gain.exponentialRampToValueAtTime(.001,t+.06),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.06)}playHurt(){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(140,t),e.frequency.linearRampToValueAtTime(60,t+.2),n.gain.setValueAtTime(.5,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.2)}playVictory(){if(this.ensureContext(),!this.ctx)return;[440,554,659,880].forEach((e,n)=>{const i=this.ctx.currentTime+n*.12,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(e,i),a.gain.setValueAtTime(.4,i),a.gain.exponentialRampToValueAtTime(.001,i+.4),r.connect(a),a.connect(this.sfxGain),r.start(i),r.stop(i+.4)})}playDefeat(){if(this.ensureContext(),!this.ctx)return;[330,311,293,220].forEach((e,n)=>{const i=this.ctx.currentTime+n*.2,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(e,i),a.gain.setValueAtTime(.35,i),a.gain.exponentialRampToValueAtTime(.001,i+.35),r.connect(a),a.connect(this.sfxGain),r.start(i),r.stop(i+.35)})}startCombatMusic(){if(this.musicPlaying||(this.ensureContext(),!this.ctx))return;this.musicPlaying=!0;const t=[110,110,130.8,146.8,110,110,164.8,146.8];let e=0;this.musicInterval=setInterval(()=>{if(!this.musicPlaying||!this.ctx)return;const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain(),a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(600,n),i.type="sawtooth",i.frequency.setValueAtTime(t[e%t.length]*.5,n),r.gain.setValueAtTime(.18,n),r.gain.exponentialRampToValueAtTime(.001,n+.22),i.connect(a),a.connect(r),r.connect(this.musicGain),i.start(n),i.stop(n+.25),e++},240)}stopCombatMusic(){this.musicPlaying=!1,this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null)}}const $p="PROJECT_STRIKE_SAVE_V1",Rn="VK_TRAP_SAVE_V1",Ai={schemaVersion:2,profile:{username:"Operative",playerLevel:1,xp:0,xpRequired:1e3,credits:2500,matchesPlayed:0,matchesWon:0,totalKills:0,headshots:0,brWins:0,accuracy:0,totalShots:0,totalHits:0,favoriteWeapon:"ARX_45",avatarId:0,playtime:0,lastLogin:null},campaign:{unlockedLevel:1,currentLevel:1,completedLevels:{},highScores:{}},loadout:{primary:"ARX_45",secondary:"VX_9",melee:"COMBAT_BLADE",unlockedWeapons:["ARX_45","VX_9","COMBAT_BLADE","VIPER_9"],attachments:{}},settings:{quality:"auto",sensitivityDesktop:1.5,sensitivityMobile:1.8,sensitivityADS:1,sensitivityScope2x:.9,sensitivityScope4x:.75,sensitivityScope8x:.55,gyroEnabled:!1,gyroSensitivity:1,masterVolume:.8,sfxVolume:.9,musicVolume:.4,showFPS:!0,invertY:!1,fov:75,colorblindMode:"none",uiScale:1,reducedMotion:!1,leftHandedMode:!1,vibration:!0,showDamageNumbers:!0,showHitMarker:!0,autoSprint:!1},hudLayout:{preset:"default",customized:!1,positions:{}},missions:{daily:{lastReset:null,tasks:[]},weekly:{lastReset:null,tasks:[]},loginStreak:0,lastLoginDate:null,loginRewards:{}},achievements:{FIRST_BLOOD:{name:"First Blood",desc:"Eliminate your first enemy",unlocked:!1},HEADSHOT_HUNT:{name:"Headhunter",desc:"Land 25 headshot eliminations",unlocked:!1},SQUAD_WIPE:{name:"Squad Wipe",desc:"Eliminate all enemies in a level",unlocked:!1},LEVEL_10:{name:"Combat Ready",desc:"Complete Campaign Level 10",unlocked:!1},LEVEL_25:{name:"Field Operative",desc:"Defeat Commander Krait (Level 25)",unlocked:!1},LEVEL_50:{name:"Veteran Operator",desc:"Reach Campaign Level 50",unlocked:!1},LEVEL_100:{name:"VK TRAP LEGEND",desc:"Complete Level 100 — Final Reckoning",unlocked:!1},SURVIVOR:{name:"Lone Survivor",desc:"Win a Battle Royale match",unlocked:!1},ARSENAL_KING:{name:"Armory Master",desc:"Unlock 5 different weapon categories",unlocked:!1},SHARPSHOOTER:{name:"Sharpshooter",desc:"Land 500 total headshots",unlocked:!1},THOUSAND_KILLS:{name:"Reaper",desc:"Accumulate 1,000 total kills",unlocked:!1},LOADOUT_MAX:{name:"Fully Loaded",desc:"Equip all 3 attachment slots on a weapon",unlocked:!1}}};class Jt{static load(){try{const t=localStorage.getItem($p);if(t&&!localStorage.getItem(Rn)){console.log("[SaveSystem] Migrating from PROJECT_STRIKE_SAVE_V1 → VK_TRAP_SAVE_V1");const n=JSON.parse(t),i=this.deepMerge(JSON.parse(JSON.stringify(Ai)),{profile:n.profile||{},campaign:n.campaign||{},loadout:n.loadout||{},settings:n.settings||{}});return i.schemaVersion=2,localStorage.setItem(Rn,JSON.stringify(i)),i}const e=localStorage.getItem(Rn);if(e){const n=JSON.parse(e);return this.deepMerge(JSON.parse(JSON.stringify(Ai)),n)}}catch(t){console.warn("[SaveSystem] Load error, using default:",t)}return JSON.parse(JSON.stringify(Ai))}static save(t){try{return t.schemaVersion=2,localStorage.setItem(Rn,JSON.stringify(t)),!0}catch(e){return console.error("[SaveSystem] Save failed:",e),!1}}static exportSave(){const t=localStorage.getItem(Rn)||JSON.stringify(Ai);return btoa(unescape(encodeURIComponent(t)))}static importSave(t){try{const e=decodeURIComponent(escape(atob(t))),n=JSON.parse(e);if(n&&n.profile&&n.campaign)return localStorage.setItem(Rn,JSON.stringify(n)),!0}catch(e){console.error("[SaveSystem] Import failed:",e)}return!1}static reset(){return localStorage.removeItem(Rn),JSON.parse(JSON.stringify(Ai))}static deepMerge(t,e){for(const n of Object.keys(e))e[n]instanceof Object&&!Array.isArray(e[n])&&n in t&&t[n]instanceof Object&&!Array.isArray(t[n])&&Object.assign(e[n],this.deepMerge(t[n],e[n]));return Object.assign(t||{},e),t}static checkDailyReset(t){const e=new Date().toDateString();if(t.missions.daily.lastReset!==e&&(t.missions.daily.lastReset=e,t.missions.daily.tasks=this._generateDailyMissions(),this.save(t)),t.profile.lastLogin!==e){const n=new Date(Date.now()-864e5).toDateString();t.profile.lastLogin===n?t.missions.loginStreak=(t.missions.loginStreak||0)+1:t.profile.lastLogin!==e&&(t.missions.loginStreak=1),t.profile.lastLogin=e,this.save(t)}return t}static _generateDailyMissions(){return[{id:"dm1",desc:"Get 10 kills in Campaign",target:10,reward:200},{id:"dm2",desc:"Complete 2 Campaign levels",target:2,reward:300},{id:"dm3",desc:"Land 5 headshots",target:5,reward:250},{id:"dm4",desc:"Win a Battle Royale match",target:1,reward:500},{id:"dm5",desc:"Play 3 matches (any mode)",target:3,reward:150}].slice(0,3).map(e=>({...e,progress:0,completed:!1}))}}class Kp{constructor(t){this.scene=t,this.bullets=[],this.sparks=[],this.damagePopups=[],this.tracerGeo=new $e(.02,.02,1.2,4),this.tracerGeo.rotateX(Math.PI/2),this.tracerMat=new xn({color:16769126}),this.sparkGeo=new Ae,this.sparkMat=new Jo({color:16755251,size:.15,transparent:!0,opacity:.9}),this.muzzleLight=new eh(16755268,0,10),this.scene.add(this.muzzleLight),this.muzzleTimer=0,this.raycaster=new oh}createTracer(t,e){const n=t.distanceTo(e),i=new Rt(this.tracerGeo,this.tracerMat);i.position.copy(t).lerp(e,.5),i.scale.set(1,1,Math.max(.5,n*.4)),i.lookAt(e),this.scene.add(i),this.bullets.push({mesh:i,life:.08})}triggerMuzzleFlash(t){this.muzzleLight.position.copy(t),this.muzzleLight.intensity=4,this.muzzleTimer=.06}createImpact(t,e=new R(0,1,0)){const i=new Float32Array(36),r=[];for(let l=0;l<12;l++){i[l*3]=t.x,i[l*3+1]=t.y,i[l*3+2]=t.z;const c=new R((Math.random()-.5)*4,Math.random()*4+1,(Math.random()-.5)*4).add(e.clone().multiplyScalar(2));r.push(c)}const a=new Ae;a.setAttribute("position",new We(i,3));const o=new jc(a,this.sparkMat.clone());this.scene.add(o),this.sparks.push({mesh:o,geo:a,velocities:r,life:.35,maxLife:.35})}addDamageNumber(t,e,n=!1){const i=document.createElement("div");i.className="damage-popup"+(n?" headshot":""),i.textContent=Math.round(t)+(n?" CRIT!":""),document.body.appendChild(i),this.damagePopups.push({el:i,pos:e.clone().add(new R((Math.random()-.5)*.4,.5,(Math.random()-.5)*.4)),life:.8,maxLife:.8})}update(t,e){this.muzzleTimer>0&&(this.muzzleTimer-=t,this.muzzleTimer<=0&&(this.muzzleLight.intensity=0));for(let n=this.bullets.length-1;n>=0;n--){const i=this.bullets[n];i.life-=t,i.life<=0&&(this.scene.remove(i.mesh),this.bullets.splice(n,1))}for(let n=this.sparks.length-1;n>=0;n--){const i=this.sparks[n];if(i.life-=t,i.life<=0){this.scene.remove(i.mesh),i.geo.dispose(),i.mesh.material.dispose(),this.sparks.splice(n,1);continue}const r=i.life/i.maxLife;i.mesh.material.opacity=r;const a=i.geo.attributes.position;for(let o=0;o<i.velocities.length;o++){const l=i.velocities[o];l.y-=9.8*t,a.setXYZ(o,a.getX(o)+l.x*t,a.getY(o)+l.y*t,a.getZ(o)+l.z*t)}a.needsUpdate=!0}if(e){const n=window.innerWidth/2,i=window.innerHeight/2,r=new R;for(let a=this.damagePopups.length-1;a>=0;a--){const o=this.damagePopups[a];if(o.life-=t,o.life<=0){o.el.parentNode&&o.el.parentNode.removeChild(o.el),this.damagePopups.splice(a,1);continue}if(o.pos.y+=t*1.2,r.copy(o.pos).project(e),r.z>1){o.el.style.display="none";continue}o.el.style.display="block";const l=r.x*n+n,c=-(r.y*i)+i;o.el.style.transform=`translate(-50%, -50%) translate(${l}px, ${c}px) scale(${.8+o.life/o.maxLife*.4})`,o.el.style.opacity=Math.min(1,o.life*2)}}}clear(){this.bullets.forEach(t=>this.scene.remove(t.mesh)),this.bullets=[],this.sparks.forEach(t=>{this.scene.remove(t.mesh),t.geo.dispose(),t.mesh.material.dispose()}),this.sparks=[],this.damagePopups.forEach(t=>{t.el.parentNode&&t.el.parentNode.removeChild(t.el)}),this.damagePopups=[],this.muzzleLight.intensity=0}}const Un={ARX_45:{id:"ARX_45",name:"ARX-45",category:"Assault Rifle",damage:36,fireRate:620,magSize:30,reserveAmmo:180,reloadTime:2.1,recoilV:.032,recoilH:.014,spreadHip:.044,spreadADS:.007,range:125,headshotMult:2.2,isAuto:!0,soundType:"rifle",zoomFOV:55,adsSpeed:.22,color:2765376,accentColor:16729685,price:0,description:"Balanced assault rifle. Reliable in any engagement.",unlockLevel:1},M4X:{id:"M4X",name:"M4X Carbine",category:"Assault Rifle",damage:32,fireRate:750,magSize:32,reserveAmmo:192,reloadTime:2,recoilV:.026,recoilH:.016,spreadHip:.038,spreadADS:.006,range:135,headshotMult:2.1,isAuto:!0,soundType:"rifle",zoomFOV:52,adsSpeed:.2,color:1976352,accentColor:58998,price:2800,description:"High fire rate carbine with excellent mobility.",unlockLevel:15},VIPER_9:{id:"VIPER_9",name:"Viper-9",category:"SMG",damage:22,fireRate:920,magSize:34,reserveAmmo:238,reloadTime:1.5,recoilV:.018,recoilH:.013,spreadHip:.033,spreadADS:.011,range:72,headshotMult:1.85,isAuto:!0,soundType:"smg",zoomFOV:64,adsSpeed:.18,color:1579292,accentColor:4244735,price:1800,description:"Blazing close-range SMG. Shreds at short distance.",unlockLevel:8},VX_RUSH:{id:"VX_RUSH",name:"VX Rush",category:"SMG",damage:19,fireRate:1100,magSize:40,reserveAmmo:280,reloadTime:1.7,recoilV:.021,recoilH:.018,spreadHip:.04,spreadADS:.014,range:60,headshotMult:1.75,isAuto:!0,soundType:"smg",zoomFOV:66,adsSpeed:.16,color:1315862,accentColor:16739584,price:3200,description:"Ultra-rapid fire SMG. Extremely aggressive CQB.",unlockLevel:30},VX_9:{id:"VX_9",name:"VX-9 Tactical",category:"Pistol",damage:28,fireRate:380,magSize:15,reserveAmmo:90,reloadTime:1.3,recoilV:.022,recoilH:.01,spreadHip:.028,spreadADS:.007,range:65,headshotMult:2,isAuto:!1,soundType:"pistol",zoomFOV:68,adsSpeed:.15,color:1710622,accentColor:7798531,price:0,description:"Standard sidearm. Always reliable as backup.",unlockLevel:1},RAVEN_12:{id:"RAVEN_12",name:"Raven-12",category:"Shotgun",damage:18,pellets:8,fireRate:78,magSize:8,reserveAmmo:48,reloadTime:2.6,recoilV:.1,recoilH:.032,spreadHip:.13,spreadADS:.065,range:42,headshotMult:1.65,isAuto:!1,soundType:"shotgun",zoomFOV:65,adsSpeed:.28,color:3943970,accentColor:16755200,price:2600,description:"Devastating pump shotgun. Lethal at close range.",unlockLevel:20},SR_71:{id:"SR_71",name:"SR-71 DMR",category:"DMR",damage:58,fireRate:310,magSize:15,reserveAmmo:90,reloadTime:2.2,recoilV:.048,recoilH:.013,spreadHip:.065,spreadADS:.004,range:210,headshotMult:2.45,isAuto:!1,soundType:"rifle",zoomFOV:40,adsSpeed:.3,color:2107958,accentColor:10179040,price:4200,description:"Precision marksman rifle. Dominant in mid-range.",unlockLevel:40},SPECTER_8:{id:"SPECTER_8",name:"Specter-8",category:"Sniper Rifle",damage:130,fireRate:42,magSize:5,reserveAmmo:25,reloadTime:3,recoilV:.15,recoilH:.018,spreadHip:.22,spreadADS:.001,range:320,headshotMult:2.9,isAuto:!1,soundType:"sniper",zoomFOV:22,adsSpeed:.4,color:1054236,accentColor:58879,price:5500,description:"Anti-materiel sniper. One shot, one kill.",unlockLevel:55},THUNDERBOLT_L:{id:"THUNDERBOLT_L",name:"Thunderbolt-L",category:"LMG",damage:38,fireRate:560,magSize:100,reserveAmmo:200,reloadTime:4.8,recoilV:.04,recoilH:.032,spreadHip:.076,spreadADS:.014,range:155,headshotMult:2,isAuto:!0,soundType:"rifle",zoomFOV:58,adsSpeed:.38,color:2631706,accentColor:13938487,price:6500,description:"Suppressive LMG. 100-round drum for sustained dominance.",unlockLevel:70},COMBAT_BLADE:{id:"COMBAT_BLADE",name:"Combat Blade",category:"Melee",damage:80,fireRate:130,magSize:1,reserveAmmo:0,reloadTime:.1,recoilV:0,recoilH:0,spreadHip:0,spreadADS:0,range:3.5,headshotMult:2.5,isAuto:!1,soundType:"melee",zoomFOV:75,adsSpeed:.1,color:1118481,accentColor:16717636,price:0,description:"Silent and lethal. No noise, no warning.",unlockLevel:1}},ll={SUPPRESSOR:{id:"SUPPRESSOR",slot:"muzzle",name:"Suppressor",icon:"🔇",statMods:{soundType:"silenced",spreadHip:-.005,spreadADS:-.003},price:800},MUZZLE_BRAKE:{id:"MUZZLE_BRAKE",slot:"muzzle",name:"Muzzle Brake",icon:"💨",statMods:{recoilV:-.01,recoilH:-.005},price:600},FLASH_HIDER:{id:"FLASH_HIDER",slot:"muzzle",name:"Flash Hider",icon:"✦",statMods:{recoilH:-.008},price:500},EXT_MAG_SM:{id:"EXT_MAG_SM",slot:"magazine",name:"Ext. Mag (S)",icon:"📦",statMods:{magSizeBonus:10},price:700},EXT_MAG_LG:{id:"EXT_MAG_LG",slot:"magazine",name:"Ext. Mag (L)",icon:"📫",statMods:{magSizeBonus:20,reloadTime:.3},price:1200},QUICK_LOAD:{id:"QUICK_LOAD",slot:"magazine",name:"Quick-Load Mag",icon:"⚡",statMods:{reloadTime:-.4},price:900},RED_DOT:{id:"RED_DOT",slot:"scope",name:"Red Dot",icon:"🔴",statMods:{zoomFOVBonus:8,adsSpeed:.04},price:400},HOLOGRAPHIC:{id:"HOLOGRAPHIC",slot:"scope",name:"Holographic",icon:"🔷",statMods:{zoomFOVBonus:10,spreadADS:-.002},price:700},SCOPE_2X:{id:"SCOPE_2X",slot:"scope",name:"2x Scope",icon:"🔭",statMods:{zoomFOVBonus:18},price:1e3},SCOPE_4X:{id:"SCOPE_4X",slot:"scope",name:"4x Scope",icon:"🔭",statMods:{zoomFOVBonus:32},price:1800},SCOPE_8X:{id:"SCOPE_8X",slot:"scope",name:"8x Scope",icon:"🔭",statMods:{zoomFOVBonus:50},price:3200},ANGLED_GRIP:{id:"ANGLED_GRIP",slot:"grip",name:"Angled Foregrip",icon:"🤛",statMods:{recoilV:-.012,spreadADS:-.004},price:650},VERTICAL_GRIP:{id:"VERTICAL_GRIP",slot:"grip",name:"Vertical Grip",icon:"🤝",statMods:{recoilH:-.015},price:550},THUMB_GRIP:{id:"THUMB_GRIP",slot:"grip",name:"Thumb Grip",icon:"👍",statMods:{spreadHip:-.01,adsSpeed:.03},price:500},TACTICAL_STOCK:{id:"TACTICAL_STOCK",slot:"stock",name:"Tactical Stock",icon:"🔒",statMods:{recoilV:-.008,recoilH:-.008},price:750},LIGHT_STOCK:{id:"LIGHT_STOCK",slot:"stock",name:"Lightweight Stock",icon:"⚖️",statMods:{adsSpeed:.06,recoilV:.005},price:600}};function Zp(s,t={}){const e={...s};for(const[n,i]of Object.entries(t)){const r=ll[i];if(!r)continue;const a=r.statMods;a.magSizeBonus&&(e.magSize=(e.magSize||0)+a.magSizeBonus),a.reloadTime&&(e.reloadTime=(e.reloadTime||0)+a.reloadTime),a.recoilV&&(e.recoilV=Math.max(0,(e.recoilV||0)+a.recoilV)),a.recoilH&&(e.recoilH=Math.max(0,(e.recoilH||0)+a.recoilH)),a.spreadHip&&(e.spreadHip=Math.max(0,(e.spreadHip||0)+a.spreadHip)),a.spreadADS&&(e.spreadADS=Math.max(0,(e.spreadADS||0)+a.spreadADS)),a.zoomFOVBonus&&(e.zoomFOV=Math.max(15,(e.zoomFOV||55)-a.zoomFOVBonus)),a.adsSpeed&&(e.adsSpeed=Math.max(.05,(e.adsSpeed||.22)-a.adsSpeed)),a.soundType&&(e.soundType=a.soundType)}return e}class jp{constructor(t,e,n,i={}){this.camera=t,this.soundManager=e,this.bulletSystem=n,this.attachments=i||{},this.equippedSlots=["ARX_45","VX_9","COMBAT_BLADE"],this.currentSlotIndex=0,this.currentWeaponData=this.getWeaponWithAttachments(this.equippedSlots[0]),this.ammoState={};for(const r of Object.keys(Un))this.ammoState[r]={mag:Un[r].magSize,reserve:Un[r].reserveAmmo};this.weaponRoot=new On,this.camera.add(this.weaponRoot),this.weaponMesh=null,this.hipPos=new R(.28,-.28,-.55),this.adsPos=new R(0,-.19,-.38),this.targetPos=this.hipPos.clone(),this.currentPos=this.hipPos.clone(),this.recoilOffset=new R,this.recoilRotation=new Xe,this.isADS=!1,this.isReloading=!1,this.isSwitching=!1,this.reloadProgress=0,this.lastFireTime=0,this.bobTimer=0,this.switchWeapon(0,!0)}getCurrentWeapon(){return this.currentWeaponData}getCurrentAmmo(){return this.ammoState[this.currentWeaponData.id]}setADS(t){if(this.isReloading||this.isSwitching){this.isADS=!1;return}this.isADS=t}getWeaponWithAttachments(t){const e=Un[t];if(!e)return null;const n=this.attachments[t]||{};return Zp(e,n)}setAttachments(t){this.attachments=t||{};const e=this.equippedSlots[this.currentSlotIndex];this.currentWeaponData=this.getWeaponWithAttachments(e)}switchWeapon(t,e=!1){var i;if(t<0||t>=this.equippedSlots.length||this.currentSlotIndex===t&&!e)return;this.currentSlotIndex=t;const n=this.equippedSlots[t];this.currentWeaponData=this.getWeaponWithAttachments(n),this.isADS=!1,this.isReloading=!1,this.buildWeaponMesh(this.currentWeaponData),e||(this.currentPos.y=-.7,this.soundManager.playClick(((i=this.soundManager.ctx)==null?void 0:i.currentTime)||0,1e3,.05))}equipWeaponInSlot(t,e){Un[e]&&(this.equippedSlots[t]=e,this.currentSlotIndex===t&&this.switchWeapon(t,!0))}buildWeaponMesh(t){this.weaponMesh&&(this.weaponRoot.remove(this.weaponMesh),this.weaponMesh.traverse(r=>{r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(a=>a.dispose()):r.material.dispose())})),this.weaponMesh=new On;const e=new Ee({color:t.color||2236962,roughness:.35,metalness:.75}),n=new Ee({color:t.accentColor||16729685,roughness:.2,metalness:.8}),i=new Ee({color:1118481,roughness:.6,metalness:.2});if(t.category==="Melee"){const r=new ie(.04,.24,.015),a=new Rt(r,n);a.position.set(0,.1,0);const o=new $e(.02,.025,.14,8),l=new Rt(o,i);l.position.set(0,-.06,0),this.weaponMesh.add(a),this.weaponMesh.add(l),this.barrelTip=new R(0,.2,0)}else{const r=new ie(.07,.12,.45),a=new Rt(r,e);this.weaponMesh.add(a);const o=t.category==="Sniper Rifle"?.6:t.category==="Pistol"?.2:.42,l=new $e(.018,.02,o,8);l.rotateX(Math.PI/2);const c=new Rt(l,i);c.position.set(0,.02,-.22-o/2),this.weaponMesh.add(c);const h=new $e(.026,.024,.08,8);h.rotateX(Math.PI/2);const f=new Rt(h,n);f.position.set(0,.02,-.22-o-.04),this.weaponMesh.add(f);const d=new ie(.05,.16,.08);d.rotateX(.25);const p=new Rt(d,i);if(p.position.set(0,-.12,.08),this.weaponMesh.add(p),t.category!=="Pistol"){const g=new ie(.045,.2,.07);g.rotateX(-.15);const v=new Rt(g,n);v.position.set(0,-.12,-.06),this.weaponMesh.add(v)}if(t.category==="Sniper Rifle"){const g=new $e(.035,.035,.28,12);g.rotateX(Math.PI/2);const v=new Rt(g,e);v.position.set(0,.11,-.05);const m=new $e(.03,.03,.01,12);m.rotateX(Math.PI/2);const u=new xn({color:58879}),T=new Rt(m,u);T.position.set(0,.11,-.19),this.weaponMesh.add(v),this.weaponMesh.add(T)}else{const g=new ie(.015,.03,.02),v=new Rt(g,n);v.position.set(0,.075,-.2);const m=new Rt(g,n);m.position.set(0,.075,.18),this.weaponMesh.add(v),this.weaponMesh.add(m)}this.barrelTip=new R(0,.02,-.22-o-.08)}this.weaponRoot.add(this.weaponMesh)}reload(){const t=this.getCurrentAmmo();return this.isReloading||t.mag>=this.currentWeaponData.magSize||t.reserve<=0?!1:(this.isReloading=!0,this.isADS=!1,this.reloadProgress=0,this.soundManager.playReload(),!0)}canShoot(t=performance.now()/1e3){if(this.isReloading||this.isSwitching||this.getCurrentAmmo().mag<=0)return!1;const n=60/this.currentWeaponData.fireRate;return t-this.lastFireTime>=n}shoot(t=[],e=[]){var c;const n=performance.now()/1e3;if(!this.canShoot(n))return this.getCurrentAmmo().mag<=0&&!this.isReloading&&this.reload(),null;this.lastFireTime=n;const i=this.getCurrentAmmo();i.mag--;const r=this.currentWeaponData;this.soundManager.playGunshot(r.soundType);const a=new R;this.weaponMesh&&this.barrelTip?(this.barrelTip.clone().applyMatrix4(this.weaponMesh.matrixWorld),this.weaponMesh.localToWorld(a.copy(this.barrelTip))):this.camera.getWorldPosition(a),this.bulletSystem.triggerMuzzleFlash(a),this.recoilOffset.z=.09,this.recoilOffset.y=.03,this.recoilRotation.x=r.recoilV,this.recoilRotation.y=(Math.random()-.5)*r.recoilH;const o=r.pellets||1,l=[];for(let h=0;h<o;h++){const f=this.isADS?r.spreadADS:r.spreadHip,d=(Math.random()-.5)*f*2,p=(Math.random()-.5)*f*2,g=new R(d,p,-1).normalize();g.applyQuaternion(this.camera.quaternion);const v=this.camera.position.clone();this.bulletSystem.raycaster.set(v,g),this.bulletSystem.raycaster.far=r.range;const m=[...t.map(E=>E.hitMesh||E.mesh),...e],u=this.bulletSystem.raycaster.intersectObjects(m,!0);let T=v.clone().add(g.clone().multiplyScalar(r.range));if(u.length>0){const E=u[0];T.copy(E.point);let M=null,w=!1;for(const A of t)if(A.containsMesh(E.object)){M=A,(E.object.name==="head"||E.point.y-A.position.y>1.35)&&(w=!0);break}if(M&&M.isAlive){const A=Math.round(r.damage*(w?r.headshotMult:1));M.takeDamage(A,w),this.bulletSystem.addDamageNumber(A,E.point,w),this.soundManager.playHitmarker(w),l.push({enemy:M,damage:A,isHeadshot:w})}else this.bulletSystem.createImpact(E.point,((c=E.face)==null?void 0:c.normal)||new R(0,1,0))}this.bulletSystem.createTracer(a,T)}return l}update(t,e=!1,n=!1){const i=this.currentWeaponData;if(this.isReloading){this.reloadProgress+=t/i.reloadTime;const o=Math.sin(this.reloadProgress*Math.PI)*.35;if(this.targetPos.set(this.hipPos.x,this.hipPos.y-o,this.hipPos.z),this.reloadProgress>=1){this.isReloading=!1;const l=this.getCurrentAmmo(),c=i.magSize-l.mag,h=Math.min(c,l.reserve);l.mag+=h,l.reserve-=h}}else this.targetPos.copy(this.isADS?this.adsPos:this.hipPos);if(e&&!this.isADS&&!this.isReloading){const o=n?14:9,l=n?.04:.018;this.bobTimer+=t*o,this.targetPos.x+=Math.cos(this.bobTimer*.5)*l,this.targetPos.y+=Math.abs(Math.sin(this.bobTimer))*l}const r=this.isADS?18:12;this.currentPos.lerp(this.targetPos,t*r),this.recoilOffset.lerp(new R(0,0,0),t*10),this.recoilRotation.x=ws.lerp(this.recoilRotation.x,0,t*12),this.recoilRotation.y=ws.lerp(this.recoilRotation.y,0,t*12),this.weaponMesh&&(this.weaponMesh.position.copy(this.currentPos).add(this.recoilOffset),this.weaponMesh.rotation.set(this.recoilRotation.x,this.recoilRotation.y,0));const a=this.isADS?i.zoomFOV||55:75;this.camera.fov=ws.lerp(this.camera.fov,a,t*14),this.camera.updateProjectionMatrix()}}class Jp{constructor(t=null){this.maxHealth=100,this.health=100,this.maxArmor=100,this.armor=50,this.maxStamina=100,this.stamina=100,this.isAlive=!0,this.medkits=2,this.level=(t==null?void 0:t.playerLevel)||1,this.xp=(t==null?void 0:t.xp)||0,this.xpRequired=(t==null?void 0:t.xpRequired)||1e3,this.credits=(t==null?void 0:t.credits)||0,this.kills=0,this.headshots=0,this.damageDealt=0,this.damageTaken=0,this.onHurt=null,this.onDeath=null}takeDamage(t){if(!this.isAlive)return;let e=t;if(this.armor>0){const n=Math.min(this.armor,Math.round(t*.65));this.armor-=n,e-=n}this.health=Math.max(0,this.health-e),this.damageTaken+=t,this.onHurt&&this.onHurt(t),this.health<=0&&(this.isAlive=!1,this.health=0,this.onDeath&&this.onDeath())}useMedkit(){return!this.isAlive||this.medkits<=0||this.health>=this.maxHealth?!1:(this.medkits--,this.health=Math.min(this.maxHealth,this.health+50),!0)}addArmor(t){this.armor=Math.min(this.maxArmor,this.armor+t)}addXP(t){this.xp+=t;let e=!1;for(;this.xp>=this.xpRequired;)this.xp-=this.xpRequired,this.level++,this.xpRequired=Math.round(this.xpRequired*1.35),this.credits+=500,e=!0;return e}update(t,e){e?this.stamina=Math.max(0,this.stamina-t*25):this.stamina=Math.min(this.maxStamina,this.stamina+t*20)}resetForMatch(){this.health=this.maxHealth,this.armor=50,this.stamina=this.maxStamina,this.isAlive=!0,this.medkits=2,this.kills=0,this.headshots=0,this.damageDealt=0}}class Qp{constructor(t,e,n){this.camera=t,this.domElement=e,this.soundManager=n,this.position=new R(0,1.6,0),this.velocity=new R,this.isGrounded=!0,this.isCrouched=!1,this.isProne=!1,this.isSprinting=!1,this.walkSpeed=7,this.sprintSpeed=12,this.crouchSpeed=3.5,this.proneSpeed=1.8,this.jumpForce=8.5,this.gravity=22,this.yaw=0,this.pitch=0,this.sensitivityDesktop=.0022,this.sensitivityMobile=.0035,this.sensitivityADS=1,this.gyroEnabled=!1,this.gyroSensitivity=1,this.isPointerLocked=!1,this.stepDistance=0,this.nextStepThreshold=2.4,this.keys={forward:!1,backward:!1,left:!1,right:!1,sprint:!1,crouch:!1,jump:!1},this.virtualJoystick={x:0,y:0},this.virtualSprint=!1,this.virtualCrouch=!1,this.virtualProne=!1,this.virtualJump=!1,this.setupDesktopInputs(),this.setupGyroscope()}setupGyroscope(){typeof window<"u"&&"DeviceOrientationEvent"in window&&window.addEventListener("deviceorientation",t=>{if(this.gyroEnabled&&t.gamma!==null&&t.beta!==null){const e=(t.gamma||0)*35e-5*this.gyroSensitivity,n=(t.beta||0)*35e-5*this.gyroSensitivity;this.applyLookDelta(e,n)}})}setupDesktopInputs(){window.addEventListener("keydown",t=>{switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!0;break;case"KeyS":case"ArrowDown":this.keys.backward=!0;break;case"KeyA":case"ArrowLeft":this.keys.left=!0;break;case"KeyD":case"ArrowRight":this.keys.right=!0;break;case"ShiftLeft":case"ShiftRight":this.keys.sprint=!0;break;case"KeyC":case"ControlLeft":this.keys.crouch=!this.keys.crouch;break;case"Space":this.keys.jump=!0;break}}),window.addEventListener("keyup",t=>{switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!1;break;case"KeyS":case"ArrowDown":this.keys.backward=!1;break;case"KeyA":case"ArrowLeft":this.keys.left=!1;break;case"KeyD":case"ArrowRight":this.keys.right=!1;break;case"ShiftLeft":case"ShiftRight":this.keys.sprint=!1;break;case"Space":this.keys.jump=!1;break}}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===this.domElement}),this.domElement.addEventListener("mousemove",t=>{this.isPointerLocked&&this.applyLookDelta(t.movementX*this.sensitivityDesktop,t.movementY*this.sensitivityDesktop)})}lockPointer(){!this.isPointerLocked&&this.domElement.requestPointerLock&&this.domElement.requestPointerLock()}unlockPointer(){document.exitPointerLock&&document.exitPointerLock()}applyLookDelta(t,e){this.yaw-=t,this.pitch-=e;const n=Math.PI/2*.94;this.pitch=Math.max(-n,Math.min(n,this.pitch)),this.camera.rotation.set(0,0,0),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}setPosition(t,e,n){this.position.set(t,e,n),this.camera.position.set(t,e,n)}update(t,e=[],n=100){let i=(this.keys.forward?1:0)-(this.keys.backward?1:0),r=(this.keys.right?1:0)-(this.keys.left?1:0);(Math.abs(this.virtualJoystick.y)>.1||Math.abs(this.virtualJoystick.x)>.1)&&(i=-this.virtualJoystick.y,r=this.virtualJoystick.x);const a=Math.abs(i)>.05||Math.abs(r)>.05;this.isProne=this.virtualProne,this.isCrouched=!this.isProne&&(this.keys.crouch||this.virtualCrouch);let o=1.65;this.isProne?o=.55:this.isCrouched&&(o=1.05);const l=(this.keys.sprint||this.virtualSprint)&&i>.2&&!this.isCrouched&&!this.isProne;this.isSprinting=l&&n>5;let c=this.walkSpeed;this.isProne?c=this.proneSpeed:this.isCrouched?c=this.crouchSpeed:this.isSprinting&&(c=this.sprintSpeed);const h=new R;if(a){const u=new R(0,0,-1).applyAxisAngle(new R(0,1,0),this.yaw),T=new R(1,0,0).applyAxisAngle(new R(0,1,0),this.yaw);h.addScaledVector(u,i),h.addScaledVector(T,r),h.normalize()}this.velocity.x=h.x*c,this.velocity.z=h.z*c,(this.keys.jump||this.virtualJump)&&this.isGrounded&&!this.isCrouched&&(this.velocity.y=this.jumpForce,this.isGrounded=!1,this.keys.jump=!1,this.virtualJump=!1),this.isGrounded||(this.velocity.y-=this.gravity*t);const d=new R(this.velocity.x*t,0,this.velocity.z*t),p=this.position.clone().add(d),g=.45;let v=!1,m=!1;for(const u of e){if(!u.box)continue;const T=u.box;p.x+g>T.minX&&p.x-g<T.maxX&&this.position.z+g>T.minZ&&this.position.z-g<T.maxZ&&this.position.y<T.maxY&&this.position.y+1.8>T.minY&&(v=!0),this.position.x+g>T.minX&&this.position.x-g<T.maxX&&p.z+g>T.minZ&&p.z-g<T.maxZ&&this.position.y<T.maxY&&this.position.y+1.8>T.minY&&(m=!0)}if(v||(this.position.x=p.x),m||(this.position.z=p.z),this.position.y+=this.velocity.y*t,this.position.y<=o?(this.position.y=o,this.velocity.y=0,this.isGrounded=!0):this.isGrounded=!1,this.camera.position.copy(this.position),a&&this.isGrounded){const u=Math.hypot(this.velocity.x*t,this.velocity.z*t);this.stepDistance+=u;const T=this.isSprinting?1.8:2.5;this.stepDistance>=T&&(this.stepDistance=0,this.soundManager.playFootstep())}return{isMoving:a,isSprinting:this.isSprinting,isCrouched:this.isCrouched}}}class cl{constructor(t=123456789){this.seed=(t^3735928559)>>>0}next(){let t=this.seed+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}rangeInt(t,e){return Math.floor(this.range(t,e+1))}choice(t){return!t||t.length===0?null:t[Math.floor(this.next()*t.length)]}boolean(t=.5){return this.next()<t}}class aa{static getTierInfo(t){const e=Math.max(1,Math.min(100,t));return e===100?{tier:"ULTIMATE",name:"FINAL RECKONING",color:"#ff0033",bg:"#1a0005"}:e>=96?{tier:"BRUTAL",name:"BLOOD MERIDIAN",color:"#ff1a1a",bg:"#180000"}:e>=86?{tier:"NIGHTMARE",name:"ABYSS PROTOCOL",color:"#d500f9",bg:"#120016"}:e>=71?{tier:"EXTREME",name:"IRON TEMPEST",color:"#f50057",bg:"#14000a"}:e>=56?{tier:"VERY HARD",name:"SIEGE BREAKER",color:"#ff6d00",bg:"#150700"}:e>=41?{tier:"HARD",name:"COMBAT VETERAN",color:"#ffd600",bg:"#141000"}:e>=26?{tier:"MEDIUM",name:"FIELD OPERATIVE",color:"#00e676",bg:"#001410"}:e>=11?{tier:"EASY",name:"RECRUIT ADVANCE",color:"#40c4ff",bg:"#001520"}:{tier:"BEGINNER",name:"BOOT CAMP",color:"#00e5ff",bg:"#001018"}}static isBossLevel(t){return[10,25,40,55,70,85,95,100].includes(t)}static getMissionType(t){if(t===100)return{type:"FINAL_BOSS",desc:"Eliminate the Supreme Commander. This is the end."};if(this.isBossLevel(t))return{type:"BOSS_HUNT",desc:"Defeat the sector warlord. Prepare for a fight."};const e=[{type:"ELIMINATE_ALL",desc:"Neutralize all enemy hostiles in the sector."},{type:"EXTRACTION",desc:"Retrieve the intel package and reach extraction."},{type:"SURVIVAL",desc:"Hold the position against enemy assault waves."},{type:"ELIMINATE_ALL",desc:"Clear the sector. No witnesses."},{type:"TIMED_ASSAULT",desc:"Breach and clear within the time limit."}],n=(t-1)%5;return e[n]}static getEnvironment(t){const e=Math.ceil(t/15),n=[{theme:"TRAINING BASE",fogColor:790552,floorColor:1712690,wallColor:2371648},{theme:"URBAN OUTSKIRTS",fogColor:922896,floorColor:1712664,wallColor:2437154},{theme:"ABANDONED FACTORY",fogColor:1314824,floorColor:2366992,wallColor:3419160},{theme:"WARZONE CITY",fogColor:1312776,floorColor:2363920,wallColor:3414552},{theme:"UNDERGROUND VAULT",fogColor:526356,floorColor:1052714,wallColor:1579056},{theme:"HELLFIRE RIDGE",fogColor:1574916,floorColor:2624518,wallColor:3674634},{theme:"CYBER FORTRESS",fogColor:264212,floorColor:397342,wallColor:923696}];return n[Math.min(e-1,n.length-1)]}static calculate(t){const e=Math.max(1,Math.min(100,t)),n=(e-1)/99,i=this.isBossLevel(e),r=this.getTierInfo(e),a=this.getMissionType(e),o=this.getEnvironment(e);let l;e===100?l=20:i?l=Math.floor(2+n*10):l=Math.floor(2+Math.pow(n,.7)*12);const c=Math.round(45+Math.pow(n,.8)*280),h=Math.round(8+Math.pow(n,.9)*36),f=parseFloat((.28+Math.pow(n,.65)*.62).toFixed(3)),d=parseFloat((3+Math.pow(n,.8)*4).toFixed(2)),p=parseFloat((1-Math.pow(n,.7)*.82).toFixed(3)),g=parseFloat((.2+n*.75).toFixed(3)),v=Math.round(45+n*45),m=Math.round(12+n*30),u=e>=30,T=e>=45,E=e>=60;let M=null;if(i){const w=e===100?8e3:Math.round(400+n*3200),A=e===100?55:Math.round(18+n*30);M={name:{10:"SERGEANT VOSS",25:"COMMANDER KRAIT",40:"WARLORD DECIMAX",55:"GENERAL NEXUS",70:"OVERLORD INFERNUS",85:"PHANTOM WARDEN",95:"DREAD SOVEREIGN",100:"SUPREME ARCHON — THE FINAL TRAP"}[e]||`WARLORD MK-${e}`,health:w,damage:A,speed:3.5+n*3,phases:e===100?3:e>=85?2:1}}return{level:e,tierInfo:r,isBoss:i,bossStats:M,mission:a,environment:o,enemyCount:l,enemyHealth:c,enemyDamage:h,enemyAccuracy:f,enemySpeed:d,enemyReactionTime:p,enemyAggression:g,hasArmored:u,hasSnipers:T,hasElites:E,mapSize:v,obstacleCount:m,rewardXP:Math.round(100+n*2800),rewardCredits:Math.round(80+n*1920),objectiveDesc:a.desc,objective:a.type}}}ma(aa,"MAX_LEVEL",100);class oa{constructor(t,e={}){this.scene=t,this.maxHealth=e.health||60,this.health=this.maxHealth,this.damage=e.damage||12,this.accuracy=e.accuracy||.6,this.reactionTime=e.reactionTime||.6,this.moveSpeed=e.speed||4.2,this.isBoss=e.isBoss||!1,this.name=e.name||"Strike Mercenary",this.state="PATROL",this.isAlive=!0,this.position=new R,this.velocity=new R,this.target=null,this.stateTimer=0,this.fireTimer=0,this.fireInterval=e.fireInterval||.45,this.reactionTimer=0,this.burstCount=0,this.maxBurst=e.maxBurst||3,this.patrolPoints=[],this.currentPatrolIdx=0,this.flankAngle=(Math.random()-.5)*Math.PI*.8,this.mesh=this.createSoldierMesh(e.color||13382451,this.isBoss),this.scene.add(this.mesh),e.spawnPos&&this.setPosition(e.spawnPos.x,e.spawnPos.y,e.spawnPos.z)}createSoldierMesh(t,e){const n=new On,i=e?2.4:1,r=new Ee({color:t,roughness:.5,metalness:.5}),a=new Ee({color:2237993,roughness:.4,metalness:.7}),o=new xn({color:e?16711748:58879}),l=new ie(.55*i,.75*i,.35*i),c=new Rt(l,r);c.position.y=1.15*i,n.add(c);const h=new ie(.6*i,.5*i,.4*i),f=new Rt(h,a);f.position.y=1.2*i,n.add(f);const d=new ie(.32*i,.35*i,.32*i),p=new Rt(d,a);p.name="head",p.position.y=1.72*i,n.add(p);const g=new ie(.24*i,.08*i,.06*i),v=new Rt(g,o);v.position.set(0,1.72*i,.16*i),n.add(v);const m=new ie(.2*i,.75*i,.22*i),u=new Rt(m,r);u.position.set(-.16*i,.4*i,0);const T=new Rt(m,r);T.position.set(.16*i,.4*i,0),n.add(u),n.add(T);const E=new ie(.12*i,.14*i,.55*i),M=new Rt(E,a);return M.position.set(.32*i,1.1*i,.25*i),n.add(M),this.hitMesh=c,this.headMesh=p,this.groupMesh=n,n}containsMesh(t){let e=!1;return this.mesh.traverse(n=>{n===t&&(e=!0)}),e}setPosition(t,e,n){this.position.set(t,e,n),this.mesh.position.set(t,e,n)}setPatrolPoints(t){this.patrolPoints=t}takeDamage(t,e=!1){this.isAlive&&(this.health-=t,this.state="CHASE",this.mesh.traverse(n=>{if(n.material&&n.material.color){const i=n.material.color.getHex();n.material.color.setHex(16777215),setTimeout(()=>{n.material&&n.material.color.setHex(i)},60)}}),this.health<=0&&this.die())}die(){this.isAlive=!1,this.state="DEAD";let t=0;const e=setInterval(()=>{t+=.1,this.mesh.rotation.x=-Math.PI/2*Math.min(1,t*2),this.mesh.position.y=Math.max(.2,this.position.y-t*.5),t>=.8&&clearInterval(e)},30)}update(t,e,n=[],i,r){if(!this.isAlive)return;this.target=e;const a=e.position,o=this.position.distanceTo(a),l=new R().subVectors(a,this.position).normalize(),c=o<45;if(this.state!=="PATROL"&&this.state!=="IDLE"){const h=new R(a.x,this.position.y,a.z);this.mesh.lookAt(h)}switch(this.state){case"IDLE":case"PATROL":if(c&&o<25)this.state="DETECT",this.reactionTimer=this.reactionTime;else if(this.patrolPoints.length>0){const f=this.patrolPoints[this.currentPatrolIdx];if(this.position.distanceTo(f)<1.5)this.currentPatrolIdx=(this.currentPatrolIdx+1)%this.patrolPoints.length;else{const p=new R().subVectors(f,this.position).normalize();this.mesh.lookAt(new R(f.x,this.position.y,f.z)),this.position.addScaledVector(p,this.moveSpeed*.5*t),this.mesh.position.copy(this.position)}}break;case"DETECT":this.reactionTimer-=t,this.reactionTimer<=0&&(this.state="SHOOT",this.burstCount=0);break;case"CHASE":o>12?(this.position.addScaledVector(l,this.moveSpeed*t),this.mesh.position.copy(this.position)):this.state="SHOOT";break;case"SHOOT":if(o>30){this.state="CHASE";break}this.fireTimer-=t,this.fireTimer<=0&&(this.fireTimer=this.fireInterval,this.fireAtPlayer(e,i,r),this.burstCount++,this.burstCount>=this.maxBurst&&(this.burstCount=0,this.fireTimer=1+Math.random()*.8,Math.random()<.4&&(this.state="FLANK",this.stateTimer=2)));break;case"FLANK":this.stateTimer-=t;const h=new R(-l.z,0,l.x).normalize();this.position.addScaledVector(h,this.moveSpeed*.8*t),this.mesh.position.copy(this.position),this.stateTimer<=0&&(this.state="SHOOT");break}}fireAtPlayer(t,e,n){if(!this.isAlive||!t.isAlive)return;e.playGunshot("smg");const i=this.position.clone().add(new R(0,1.2,0)),r=t.position.clone().add(new R(0,1,0)),a=(1-this.accuracy)*1.8;r.x+=(Math.random()-.5)*a,r.y+=(Math.random()-.5)*a,r.z+=(Math.random()-.5)*a,n.createTracer(i,r);const o=i.distanceTo(r),l=this.accuracy*(o<15?.9:.6);Math.random()<l&&(t.takeDamage(this.damage),e.playHurt())}dispose(){this.scene.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())})}}class tm extends oa{constructor(t,e={}){e.isBoss=!0,e.health=e.health||1500,e.damage=e.damage||25,e.speed=e.speed||3.8,e.accuracy=.75,super(t,e),this.bossName=e.bossName||"Apex Dreadnought",this.phase=1,this.maxPhases=3,this.shieldActive=!0,this.shieldHealth=400,this.maxShield=400,this.specialAttackTimer=0,this.specialCooldown=6;const n=new ia(3.2,16,16),i=new xn({color:58879,transparent:!0,opacity:.35,wireframe:!0});this.shieldMesh=new Rt(n,i),this.mesh.add(this.shieldMesh)}takeDamage(t,e=!1){if(!this.isAlive)return;if(this.shieldActive){this.shieldHealth-=t,this.shieldHealth<=0&&(this.shieldActive=!1,this.shieldMesh.visible=!1);return}super.takeDamage(t,e);const n=this.health/this.maxHealth;n<.35&&this.phase===2?this.enterPhase(3):n<.7&&this.phase===1&&this.enterPhase(2)}enterPhase(t){this.phase=t,t===2?(this.moveSpeed*=1.3,this.fireInterval=.25,this.maxBurst=6,this.shieldHealth=250,this.shieldActive=!0,this.shieldMesh.visible=!0,this.shieldMesh.material.color.setHex(16755200)):t===3&&(this.moveSpeed*=1.5,this.damage*=1.4,this.fireInterval=.15,this.maxBurst=10,this.shieldMesh.visible=!0,this.shieldMesh.material.color.setHex(16711748),this.shieldMesh.material.opacity=.6)}update(t,e,n,i,r){super.update(t,e,n,i,r),this.isAlive&&(this.specialAttackTimer+=t,this.specialAttackTimer>=this.specialCooldown&&(this.specialAttackTimer=0,this.triggerShockwave(e,i)))}triggerShockwave(t,e){e.playGunshot("sniper"),this.position.distanceTo(t.position)<18&&(t.takeDamage(35),e.playHurt())}}class em{constructor(t){this.scene=t,this.currentMeshes=[],this.obstacles=[],this.enemies=[],this.pickups=[],this.extractionZone=null,this.levelConfig=null}generate(t,e){this.cleanup();const n=aa.calculate(t);this.levelConfig=n;const i=(t*9301+49297)%233280>>>0,r=new cl(i),a=n.environment||{};let o=a.floorColor||1579551,l=a.wallColor||2238513,c=a.fogColor||789776;this.scene.fog=new Ss(c,.012),this.scene.background=new It(c);const h=n.mapSize,f=h/2,d=new vi(h,h,8,8);d.rotateX(-Math.PI/2);const p=new Ee({color:o,roughness:.8,metalness:.2}),g=new Rt(d,p);g.receiveShadow=!0,this.scene.add(g),this.currentMeshes.push(g);const v=new nl(h,Math.round(h/3),58879,2897216);v.position.y=.02,this.scene.add(v),this.currentMeshes.push(v);const m=new ie(h,8,2),u=new ie(2,8,h),T=new Ee({color:l,roughness:.6,metalness:.4}),E=new Rt(m,T);E.position.set(0,4,-f);const M=new Rt(m,T);M.position.set(0,4,f);const w=new Rt(u,T);w.position.set(-f,4,0);const A=new Rt(u,T);A.position.set(f,4,0);const C=[E,M,w,A];for(const O of C)this.scene.add(O),this.currentMeshes.push(O),this.addObstacleBox(O,O.geometry.parameters.width||2,O.geometry.parameters.height||8,O.geometry.parameters.depth||2);const U=n.obstacleCount,S=new Ee({color:r.choice([2834e3,10697013,4873550,9073208]),roughness:.5,metalness:.6}),y=new Ee({color:4339759,roughness:.7,metalness:.2});for(let O=0;O<U;O++){const F=r.rangeInt(0,2),G=r.range(-f+8,f-8),X=r.range(-f+8,f-8);if(Math.hypot(G,X)<8)continue;let V=null,$=2,H=2,tt=2;if(F===0){$=3.5,H=2.8,tt=7;const ot=new ie($,H,tt);V=new Rt(ot,S),V.position.set(G,H/2,X),r.boolean()&&(V.rotation.y=Math.PI/2)}else if(F===1){$=4,H=1.6,tt=1;const ot=new ie($,H,tt);V=new Rt(ot,T),V.position.set(G,H/2,X),V.rotation.y=r.range(0,Math.PI)}else{$=2,H=2,tt=2;const ot=new ie($,H,tt);V=new Rt(ot,y),V.position.set(G,H/2,X)}V.castShadow=!0,V.receiveShadow=!0,this.scene.add(V),this.currentMeshes.push(V),this.addObstacleBox(V,$,H,tt)}if(e.setPosition(0,1.65,0),n.objective==="EXTRACTION"){const O=new $e(4.5,4.5,.2,16),F=new xn({color:65416,wireframe:!0}),G=new Rt(O,F),X=f-10,V=-f+10;G.position.set(X,.1,V),this.scene.add(G),this.currentMeshes.push(G),this.extractionZone={pos:new R(X,0,V),radius:5,reached:!1}}if(n.isBoss){const O=new tm(this.scene,{bossName:n.bossStats.name,health:n.bossStats.health,damage:n.bossStats.damage,speed:n.bossStats.speed,spawnPos:new R(0,0,-f+14)});this.enemies.push(O)}for(let O=0;O<n.enemyCount;O++){let F=r.range(-f+8,f-8),G=r.range(-f+8,f-8);for(;Math.hypot(F,G)<14;)F=r.range(-f+8,f-8),G=r.range(-f+8,f-8);const X=new oa(this.scene,{health:n.enemyHealth,damage:n.enemyDamage,accuracy:n.enemyAccuracy,speed:n.enemySpeed,reactionTime:n.enemyReactionTime,color:n.level>5e3?16720452:n.level>2e3?16746496:48127,spawnPos:new R(F,0,G)});X.setPatrolPoints([new R(F+r.range(-6,6),0,G+r.range(-6,6)),new R(F+r.range(-6,6),0,G+r.range(-6,6))]),this.enemies.push(X)}const L=Math.max(2,Math.floor(6-t/2500));for(let O=0;O<L;O++){const F=r.range(-f+10,f-10),G=r.range(-f+10,f-10),X=O%2===0,V=new ie(.8,.8,.8),$=new Ee({color:X?65416:16759552,emissive:X?13073:3351040,metalness:.8}),H=new Rt(V,$);H.position.set(F,.5,G),this.scene.add(H),this.currentMeshes.push(H),this.pickups.push({mesh:H,type:X?"MEDKIT":"AMMO",pos:new R(F,.5,G),active:!0})}return{config:n,enemies:this.enemies,obstacles:this.obstacles,pickups:this.pickups}}addObstacleBox(t,e,n,i){const r=t.position.x-e/2,a=t.position.x+e/2,o=t.position.y-n/2,l=t.position.y+n/2,c=t.position.z-i/2,h=t.position.z+i/2;this.obstacles.push({mesh:t,box:{minX:r,maxX:a,minY:o,maxY:l,minZ:c,maxZ:h}})}updatePickups(t,e){var i;const n=t.position;for(const r of this.pickups)r.active&&(r.mesh.rotation.y+=.03,r.pos.distanceTo(n)<2&&(r.active=!1,r.mesh.visible=!1,e.playClick(((i=e.ctx)==null?void 0:i.currentTime)||0,1400,.08),r.type==="MEDKIT"?(t.medkits=Math.min(5,t.medkits+1),t.health=Math.min(t.maxHealth,t.health+35)):t.addArmor(30)))}checkCompletion(t){return this.levelConfig?this.levelConfig.objective==="EXTRACTION"&&this.extractionZone&&t.position.distanceTo(this.extractionZone.pos)<=this.extractionZone.radius?!0:this.enemies.filter(n=>n.isAlive).length===0:!1}cleanup(){for(const t of this.currentMeshes)this.scene.remove(t),t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose());this.currentMeshes=[],this.obstacles=[];for(const t of this.enemies)t.dispose();this.enemies=[],this.pickups=[],this.extractionZone=null}}class nm{constructor(t){this.scene=t,this.rng=new cl(998877),this.mapSize=240,this.currentMeshes=[],this.obstacles=[],this.bots=[],this.lootCrates=[],this.safeZoneCenter=new Gt(0,0),this.currentRadius=115,this.targetRadius=75,this.minRadius=15,this.shrinkSpeed=1.6,this.phase=1,this.maxPhases=4,this.phaseTimer=45,this.isShrinking=!1,this.stormDamageRate=8,this.stormCylinder=null,this.aliveCount=25,this.matchActive=!1,this.matchTime=0}startMatch(t){this.cleanup(),this.matchActive=!0,this.matchTime=0,this.phase=1,this.currentRadius=115,this.targetRadius=75,this.phaseTimer=40,this.isShrinking=!1,this.safeZoneCenter.set(0,0);const e=this.mapSize/2;this.scene.fog=new Ss(660768,.008),this.scene.background=new It(528410);const n=new vi(this.mapSize,this.mapSize,16,16);n.rotateX(-Math.PI/2);const i=new Ee({color:1715746,roughness:.85,metalness:.1}),r=new Rt(n,i);r.receiveShadow=!0,this.scene.add(r),this.currentMeshes.push(r);const a=new nl(this.mapSize,60,65416,2048047);a.position.y=.05,this.scene.add(a),this.currentMeshes.push(a);const o=new $e(this.currentRadius,this.currentRadius,35,32,1,!0),l=new xn({color:43775,transparent:!0,opacity:.25,side:Ye,wireframe:!0});this.stormCylinder=new Rt(o,l),this.stormCylinder.position.set(0,17.5,0),this.scene.add(this.stormCylinder),this.currentMeshes.push(this.stormCylinder);const c=new Ee({color:3357506,roughness:.6,metalness:.4});new Ee({color:5916728,roughness:.7});for(let p=0;p<32;p++){const g=this.rng.range(-e+20,e-20),v=this.rng.range(-e+20,e-20),m=p%4===0,u=m?14:5,T=m?6:3,E=m?18:5,M=new ie(u,T,E),w=new Rt(M,c);w.position.set(g,T/2,v),w.castShadow=!0,w.receiveShadow=!0,this.scene.add(w),this.currentMeshes.push(w),this.obstacles.push({mesh:w,box:{minX:g-u/2,maxX:g+u/2,minY:0,maxY:T,minZ:v-E/2,maxZ:v+E/2}})}const h=[{name:"Common",color:65416,roughness:.6},{name:"Rare",color:58879,roughness:.4},{name:"Epic",color:10179040,roughness:.3},{name:"Legendary",color:16758784,roughness:.2}];for(let p=0;p<24;p++){const g=this.rng.range(-e+15,e-15),v=this.rng.range(-e+15,e-15),m=p<10?0:p<18?1:p<22?2:3,u=h[m],T=new Ee({color:u.color,roughness:u.roughness,metalness:.5}),E=new ie(1.3,.9,1.3),M=new Rt(E,T);M.position.set(g,.45,v),M.castShadow=!0,this.scene.add(M),this.currentMeshes.push(M),this.lootCrates.push({mesh:M,pos:new R(g,.45,v),rarity:u.name,active:!0})}const f=this.rng.range(-40,40),d=this.rng.range(-40,40);t.setPosition(f,1.65,d),this.bots=[];for(let p=0;p<24;p++){const g=this.rng.range(-e+25,e-25),v=this.rng.range(-e+25,e-25),m=new oa(this.scene,{health:80,damage:14,accuracy:.55,speed:4.8,reactionTime:.5,color:15619362,spawnPos:new R(g,0,v),name:`Operative-${100+p}`});m.setPatrolPoints([new R(g+this.rng.range(-15,15),0,v+this.rng.range(-15,15)),new R(g+this.rng.range(-15,15),0,v+this.rng.range(-15,15))]),this.bots.push(m)}this.aliveCount=25}update(t,e,n,i,r){var c;if(!this.matchActive)return;this.matchTime+=t,this.isShrinking?(this.currentRadius-=this.shrinkSpeed*t,this.currentRadius<=this.targetRadius&&(this.currentRadius=this.targetRadius,this.isShrinking=!1,this.phase++,this.phase<=this.maxPhases&&(this.phaseTimer=35,this.targetRadius=Math.max(this.minRadius,this.targetRadius*.55),this.safeZoneCenter.x+=(Math.random()-.5)*15,this.safeZoneCenter.y+=(Math.random()-.5)*15)),this.stormCylinder&&(this.stormCylinder.scale.set(this.currentRadius/115,1,this.currentRadius/115),this.stormCylinder.position.x=this.safeZoneCenter.x,this.stormCylinder.position.z=this.safeZoneCenter.y)):(this.phaseTimer-=t,this.phaseTimer<=0&&(this.isShrinking=!0)),Math.hypot(e.position.x-this.safeZoneCenter.x,e.position.z-this.safeZoneCenter.y)>this.currentRadius&&n&&(n.takeDamage(this.stormDamageRate*t),i.playHurt());let o=0;for(const h of this.bots){if(!h.isAlive)continue;o++,Math.hypot(h.position.x-this.safeZoneCenter.x,h.position.z-this.safeZoneCenter.y)>this.currentRadius&&h.takeDamage(this.stormDamageRate*t),Math.random()<.002&&h.takeDamage(30),h.update(t,e,this.obstacles,i,r)}const l=n?n.isAlive:!0;this.aliveCount=(l?1:0)+o;for(const h of this.lootCrates)if(h.active&&h.pos.distanceTo(e.position)<2.4){if(h.active=!1,h.mesh.visible=!1,n){const f=h.rarity==="Legendary"?100:h.rarity==="Epic"?75:50;n.addArmor(f),n.medkits=Math.min(5,n.medkits+1)}i.playClick(((c=i.ctx)==null?void 0:c.currentTime)||0,1500,.08)}}isVictory(t){const e=t?t.isAlive:!0;return this.matchActive&&e&&this.aliveCount<=1}cleanup(){for(const t of this.currentMeshes)this.scene.remove(t),t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose());this.currentMeshes=[],this.obstacles=[];for(const t of this.bots)t.dispose();this.bots=[],this.lootCrates=[],this.stormCylinder=null,this.matchActive=!1}}class im{constructor(){this.container=null,this.minimapCanvas=null,this.minimapCtx=null,this.createHUD()}createHUD(){this.container=document.createElement("div"),this.container.id="game-hud",this.container.innerHTML=`
      <!-- Top Compass -->
      <div id="hud-top">
        <div id="compass-container">
          <div id="compass-needle"></div>
          <div id="compass-text">180° S</div>
        </div>

        <div id="match-info-badge">
          <span id="hud-level-badge">LEVEL 1</span>
          <span id="hud-objective-desc">ELIMINATE ALL HOSTILES</span>
        </div>

        <div id="br-info-badge" style="display: none;">
          <div class="br-stat"><span class="label">ALIVE</span><span id="br-alive-val" class="val">25</span></div>
          <div class="br-stat"><span class="label">ZONE</span><span id="br-zone-timer" class="val">00:40</span></div>
        </div>
      </div>

      <!-- Boss Bar -->
      <div id="boss-hud-container" style="display: none;">
        <div id="boss-name">APEX DREADNOUGHT</div>
        <div class="boss-bar-bg">
          <div id="boss-hp-fill"></div>
          <div id="boss-shield-fill"></div>
        </div>
      </div>

      <!-- Kill Feed -->
      <div id="kill-feed-container"></div>

      <!-- Crosshair -->
      <div id="crosshair">
        <div class="ch-part ch-top"></div>
        <div class="ch-part ch-bottom"></div>
        <div class="ch-part ch-left"></div>
        <div class="ch-part ch-right"></div>
        <div class="ch-part ch-dot"></div>
        <div id="hitmarker" class="hitmarker-x"></div>
      </div>

      <!-- Damage Vignette Flash -->
      <div id="damage-vignette"></div>

      <!-- Bottom Status -->
      <div id="hud-bottom">
        <!-- Vitals -->
        <div id="hud-vitals">
          <div class="bar-group">
            <span class="bar-icon">🛡️</span>
            <div class="meter-bg"><div id="armor-fill" class="meter-fill armor"></div></div>
            <span id="armor-text" class="meter-num">50</span>
          </div>
          <div class="bar-group">
            <span class="bar-icon">❤️</span>
            <div class="meter-bg"><div id="health-fill" class="meter-fill health"></div></div>
            <span id="health-text" class="meter-num">100</span>
          </div>
          <div class="bar-group">
            <span class="bar-icon">⚡</span>
            <div class="meter-bg"><div id="stamina-fill" class="meter-fill stamina"></div></div>
          </div>
        </div>

        <!-- Weapon & Ammo -->
        <div id="hud-weapon">
          <div id="weapon-name-display">APEX-47</div>
          <div id="ammo-display">
            <span id="ammo-mag">30</span>
            <span class="ammo-slash">/</span>
            <span id="ammo-reserve">180</span>
          </div>
          <div id="medkit-counter">💉 <span id="medkit-val">2</span></div>
        </div>

        <!-- Minimap Radar -->
        <div id="minimap-wrapper">
          <canvas id="minimap-canvas" width="120" height="120"></canvas>
        </div>
      </div>

      <!-- Victory / Defeat Overlay -->
      <div id="game-over-overlay" style="display: none;">
        <div class="overlay-card">
          <h1 id="game-over-title">SECTOR SECURED</h1>
          <p id="game-over-sub">All enemy hostiles eliminated.</p>
          <div id="game-over-rewards">
            <div>+<span id="reward-xp-val">250</span> XP</div>
            <div>+<span id="reward-credits-val">150</span> Credits</div>
          </div>
          <div class="overlay-buttons">
            <button id="btn-next-level" class="cyber-btn primary">NEXT LEVEL</button>
            <button id="btn-retry-level" class="cyber-btn">RETRY</button>
            <button id="btn-return-menu" class="cyber-btn">MAIN MENU</button>
          </div>
        </div>
      </div>

      <!-- Performance Monitor -->
      <div id="perf-monitor" style="display: none;">
        <div>FPS: <span id="perf-fps">60</span></div>
        <div>Tier: <span id="perf-tier">High</span></div>
        <div>RAM: <span id="perf-ram">--</span></div>
      </div>
    `,document.body.appendChild(this.container),this.minimapCanvas=document.getElementById("minimap-canvas"),this.minimapCtx=this.minimapCanvas.getContext("2d")}showHitmarker(t=!1){const e=document.getElementById("hitmarker");e.className="hitmarker-x active"+(t?" headshot":""),setTimeout(()=>{e.className="hitmarker-x"+(t?" headshot":"")},120)}flashDamage(){const t=document.getElementById("damage-vignette");t.style.opacity="0.75",setTimeout(()=>{t.style.opacity="0"},180)}addKillFeedMessage(t,e,n=!1){const i=document.getElementById("kill-feed-container"),r=document.createElement("div");r.className="kill-feed-item",r.innerHTML=`<span class="killer">${t}</span> [eliminated] <span class="victim">${e}</span> ${n?"🎯":""}`,i.appendChild(r),setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},3500)}update(t,e,n,i=[],r=null,a=null,o=null){const l=Math.max(0,t.health/t.maxHealth),c=Math.max(0,t.armor/t.maxArmor),h=Math.max(0,t.stamina/t.maxStamina);document.getElementById("health-fill").style.width=`${l*100}%`,document.getElementById("health-text").textContent=Math.round(t.health),document.getElementById("armor-fill").style.width=`${c*100}%`,document.getElementById("armor-text").textContent=Math.round(t.armor),document.getElementById("stamina-fill").style.width=`${h*100}%`;const f=e.getCurrentWeapon(),d=e.getCurrentAmmo();document.getElementById("weapon-name-display").textContent=f.name,document.getElementById("ammo-mag").textContent=d.mag,document.getElementById("ammo-reserve").textContent=d.reserve,document.getElementById("medkit-val").textContent=t.medkits;const p=document.getElementById("crosshair"),g=Math.hypot(n.velocity.x,n.velocity.z)>.5;p.className=e.isADS?"ads-active":g?"moving":"";let v=Math.round(-n.yaw*(180/Math.PI)%360);v<0&&(v+=360);const m=["N","NE","E","SE","S","SW","W","NW"],u=Math.round(v/45)%8;document.getElementById("compass-text").textContent=`${v}° ${m[u]}`;const T=document.getElementById("boss-hud-container"),E=i.find(w=>w.isBoss&&w.isAlive);if(E){T.style.display="block",document.getElementById("boss-name").textContent=E.bossName,document.getElementById("boss-hp-fill").style.width=`${E.health/E.maxHealth*100}%`;const w=document.getElementById("boss-shield-fill");E.shieldActive?(w.style.display="block",w.style.width=`${E.shieldHealth/E.maxShield*100}%`):w.style.display="none"}else T.style.display="none";const M=document.getElementById("br-info-badge");if(r&&r.matchActive){M.style.display="flex",document.getElementById("br-alive-val").textContent=r.aliveCount;const w=Math.floor(r.phaseTimer/60).toString().padStart(2,"0"),A=Math.floor(r.phaseTimer%60).toString().padStart(2,"0");document.getElementById("br-zone-timer").textContent=`${w}:${A}`}else M.style.display="none";if(a&&(document.getElementById("hud-level-badge").textContent=`LEVEL ${a.level} • ${a.tierInfo.tier}`,document.getElementById("hud-objective-desc").textContent=a.objectiveDesc),o){const w=document.getElementById("perf-monitor");w.style.display="block",document.getElementById("perf-fps").textContent=o.fps,document.getElementById("perf-tier").textContent=o.tier.toUpperCase(),document.getElementById("perf-ram").textContent=o.memory}this.renderMinimap(n,i,r)}renderMinimap(t,e,n){if(!this.minimapCtx)return;const i=this.minimapCtx,r=this.minimapCanvas.width,a=this.minimapCanvas.height,o=r/2,l=55;if(i.clearRect(0,0,r,a),i.fillStyle="rgba(10, 15, 20, 0.75)",i.beginPath(),i.arc(o,o,o-2,0,Math.PI*2),i.fill(),i.strokeStyle="#00e5ff33",i.lineWidth=1,i.stroke(),i.beginPath(),i.arc(o,o,o*.5,0,Math.PI*2),i.stroke(),n&&n.matchActive){const c=o/l,h=(n.safeZoneCenter.x-t.position.x)*c,f=(n.safeZoneCenter.y-t.position.z)*c,d=n.currentRadius*c;i.save(),i.translate(o,o),i.rotate(t.yaw),i.strokeStyle="#00aaff",i.lineWidth=2,i.beginPath(),i.arc(h,f,Math.max(2,d),0,Math.PI*2),i.stroke(),i.restore()}i.save(),i.translate(o,o),i.rotate(t.yaw);for(const c of e){if(!c.isAlive)continue;const h=c.position.x-t.position.x,f=c.position.z-t.position.z;if(Math.hypot(h,f)<=l){const p=o/l,g=h*p,v=f*p;i.fillStyle=c.isBoss?"#ff0033":"#ff3344",i.beginPath(),i.arc(g,v,c.isBoss?4.5:2.5,0,Math.PI*2),i.fill()}}i.restore(),i.fillStyle="#00ff88",i.beginPath(),i.moveTo(o,o-6),i.lineTo(o-4,o+5),i.lineTo(o+4,o+5),i.closePath(),i.fill()}showGameOver(t,e=0,n=0,i,r,a){const o=document.getElementById("game-over-overlay");o.style.display="flex";const l=document.getElementById("game-over-title"),c=document.getElementById("game-over-sub"),h=document.getElementById("btn-next-level");t?(l.textContent="MISSION ACCOMPLISHED",l.style.color="#00ff88",c.textContent="Sector secured. Enemy forces neutralized.",h.style.display="inline-block"):(l.textContent="MISSION FAILED",l.style.color="#ff3344",c.textContent="Operative KIA. Re-engage when ready.",h.style.display="none"),document.getElementById("reward-xp-val").textContent=e,document.getElementById("reward-credits-val").textContent=n,h.onclick=()=>{o.style.display="none",i&&i()},document.getElementById("btn-retry-level").onclick=()=>{o.style.display="none",r&&r()},document.getElementById("btn-return-menu").onclick=()=>{o.style.display="none",a&&a()}}hideGameOver(){document.getElementById("game-over-overlay").style.display="none"}show(){this.container.style.display="block"}hide(){this.container.style.display="none"}}const To={"two-finger":{name:"Two-Finger (Classic)",positions:{"btn-touch-fire":{right:"20px",bottom:"90px",size:66,opacity:.9},"btn-touch-ads":{right:"96px",bottom:"90px",size:54,opacity:.8},"btn-touch-jump":{right:"20px",bottom:"22px",size:52,opacity:.8},"btn-touch-crouch":{right:"82px",bottom:"22px",size:52,opacity:.8},"btn-touch-prone":{right:"144px",bottom:"22px",size:48,opacity:.75},"btn-touch-reload":{right:"160px",bottom:"90px",size:52,opacity:.8},"btn-touch-switch":{right:"96px",bottom:"154px",size:50,opacity:.8},"btn-touch-heal":{right:"20px",bottom:"168px",size:50,opacity:.85},"btn-touch-melee":{right:"160px",bottom:"154px",size:48,opacity:.75},"btn-touch-sprint":{left:"20px",bottom:"180px",size:46,opacity:.8}}},"three-finger":{name:"Three-Finger (Upper Fire)",positions:{"btn-touch-fire":{left:"20px",top:"70px",size:70,opacity:.9},"btn-touch-ads":{right:"20px",bottom:"90px",size:60,opacity:.85},"btn-touch-jump":{right:"20px",bottom:"22px",size:54,opacity:.8},"btn-touch-crouch":{right:"84px",bottom:"22px",size:52,opacity:.8},"btn-touch-prone":{right:"146px",bottom:"22px",size:48,opacity:.75},"btn-touch-reload":{right:"90px",bottom:"90px",size:52,opacity:.8},"btn-touch-switch":{right:"20px",bottom:"160px",size:50,opacity:.8},"btn-touch-heal":{right:"80px",bottom:"160px",size:48,opacity:.85},"btn-touch-melee":{right:"140px",bottom:"160px",size:46,opacity:.75},"btn-touch-sprint":{left:"100px",bottom:"180px",size:46,opacity:.8}}},"four-finger":{name:"Four-Finger (Claw)",positions:{"btn-touch-fire":{left:"18px",top:"65px",size:72,opacity:.92},"btn-touch-ads":{right:"18px",top:"65px",size:66,opacity:.9},"btn-touch-jump":{right:"18px",bottom:"22px",size:54,opacity:.85},"btn-touch-crouch":{right:"82px",bottom:"22px",size:52,opacity:.8},"btn-touch-prone":{right:"144px",bottom:"22px",size:48,opacity:.75},"btn-touch-reload":{right:"90px",bottom:"84px",size:52,opacity:.8},"btn-touch-switch":{right:"18px",bottom:"90px",size:52,opacity:.85},"btn-touch-heal":{right:"80px",bottom:"150px",size:48,opacity:.85},"btn-touch-melee":{right:"18px",bottom:"154px",size:48,opacity:.75},"btn-touch-sprint":{left:"18px",bottom:"190px",size:46,opacity:.8}}},casual:{name:"Casual",positions:{"btn-touch-fire":{right:"24px",bottom:"80px",size:68,opacity:.88},"btn-touch-ads":{right:"102px",bottom:"80px",size:56,opacity:.8},"btn-touch-jump":{right:"24px",bottom:"16px",size:54,opacity:.8},"btn-touch-crouch":{right:"88px",bottom:"16px",size:52,opacity:.8},"btn-touch-prone":{right:"150px",bottom:"16px",size:48,opacity:.75},"btn-touch-reload":{right:"168px",bottom:"80px",size:52,opacity:.8},"btn-touch-switch":{right:"102px",bottom:"148px",size:50,opacity:.8},"btn-touch-heal":{right:"24px",bottom:"160px",size:50,opacity:.85},"btn-touch-melee":{right:"168px",bottom:"148px",size:48,opacity:.75},"btn-touch-sprint":{left:"20px",bottom:"175px",size:46,opacity:.8}}},competitive:{name:"Competitive (Compact)",positions:{"btn-touch-fire":{right:"20px",bottom:"85px",size:70,opacity:.95},"btn-touch-ads":{right:"100px",bottom:"85px",size:58,opacity:.85},"btn-touch-jump":{right:"20px",bottom:"18px",size:54,opacity:.85},"btn-touch-crouch":{right:"84px",bottom:"18px",size:52,opacity:.85},"btn-touch-prone":{right:"146px",bottom:"18px",size:48,opacity:.8},"btn-touch-reload":{right:"168px",bottom:"85px",size:54,opacity:.85},"btn-touch-switch":{right:"100px",bottom:"152px",size:52,opacity:.85},"btn-touch-heal":{right:"20px",bottom:"166px",size:50,opacity:.9},"btn-touch-melee":{right:"168px",bottom:"152px",size:50,opacity:.8},"btn-touch-sprint":{left:"24px",bottom:"185px",size:48,opacity:.85}}}};class sm{constructor(t,e,n,i=null){var r;this.playerController=t,this.weaponManager=e,this.playerStats=n,this.saveData=i||Jt.load(),this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||window.innerWidth<=1024,this.container=null,this.isFiring=!1,this.fireInterval=null,this.joystickTouchId=null,this.joystickOrigin={x:0,y:0},this.joystickVector={x:0,y:0},this.maxRadius=52,this.lookTouchId=null,this.lastLookPos={x:0,y:0},this.autoSprintActive=!1,this.isCustomizing=!1,this.selectedElement=null,this.dragOffset={x:0,y:0},this.createUI(),this.bindEvents(),this.applyLayout(((r=this.saveData.hudLayout)==null?void 0:r.preset)||"two-finger")}createUI(){this.container=document.createElement("div"),this.container.id="touch-controls-container",this.container.innerHTML=`
      <!-- Left Joystick Zone -->
      <div id="joystick-zone">
        <div id="joystick-base">
          <div id="joystick-stick"></div>
        </div>
      </div>

      <!-- Left Sprint Lock Button -->
      <button id="btn-touch-sprint" class="touch-btn" title="Sprint Lock">🏃</button>

      <!-- Action Buttons Cluster -->
      <div id="touch-actions-wrapper">
        <button id="btn-touch-fire" class="touch-btn fire-btn" title="Fire">🔥</button>
        <button id="btn-touch-ads" class="touch-btn ads-btn" title="Aim Down Sights">🎯</button>
        <button id="btn-touch-jump" class="touch-btn" title="Jump">⬆️</button>
        <button id="btn-touch-crouch" class="touch-btn" title="Crouch">⬇️</button>
        <button id="btn-touch-prone" class="touch-btn" title="Prone">🧎</button>
        <button id="btn-touch-reload" class="touch-btn reload-btn" title="Reload">🔄</button>
        <button id="btn-touch-switch" class="touch-btn" title="Switch Weapon">🔫</button>
        <button id="btn-touch-heal" class="touch-btn heal-btn" title="Use Medkit">💉</button>
        <button id="btn-touch-melee" class="touch-btn" title="Quick Melee">🗡️</button>
      </div>

      <!-- HUD Customizer Modal -->
      <div id="hud-customizer-modal">
        <div class="hud-cust-header">
          <h3 style="color:var(--accent-cyan);letter-spacing:2px;font-size:0.95rem;">CUSTOMIZE HUD LAYOUT</h3>
          <div class="hud-cust-presets">
            <button class="cyber-btn" data-preset="two-finger">Two-Finger</button>
            <button class="cyber-btn" data-preset="three-finger">Three-Finger</button>
            <button class="cyber-btn" data-preset="four-finger">Four-Finger</button>
            <button class="cyber-btn" data-preset="casual">Casual</button>
            <button class="cyber-btn" data-preset="competitive">Competitive</button>
          </div>
          <button id="btn-close-hud-cust" class="cyber-btn danger" style="padding:6px 14px;">✕ EXIT</button>
        </div>

        <div id="hud-cust-canvas" class="hud-cust-canvas">
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:rgba(255,255,255,0.25);font-weight:900;letter-spacing:4px;font-size:1.4rem;pointer-events:none;">
            DRAG CONTROLS TO REPOSITION
          </div>
        </div>

        <div class="hud-cust-controls">
          <label style="font-size:0.8rem;color:var(--text-muted);">
            Size: <input type="range" id="hud-cust-size" min="36" max="90" value="54" style="vertical-align:middle;">
          </label>
          <label style="font-size:0.8rem;color:var(--text-muted);margin-left:12px;">
            Opacity: <input type="range" id="hud-cust-opacity" min="0.2" max="1.0" step="0.05" value="0.8" style="vertical-align:middle;">
          </label>
          <button id="btn-save-hud-layout" class="cyber-btn primary" style="margin-left:auto;">💾 SAVE LAYOUT</button>
          <button id="btn-reset-hud-layout" class="cyber-btn">↺ RESET DEFAULT</button>
        </div>
      </div>
    `,document.body.appendChild(this.container),this.joystickBase=document.getElementById("joystick-base"),this.joystickStick=document.getElementById("joystick-stick")}applyLayout(t="two-finger"){var r;const e=To[t]||To["two-finger"],n=((r=this.saveData.hudLayout)==null?void 0:r.positions)||{},i={...e.positions,...n};for(const[a,o]of Object.entries(i)){const l=document.getElementById(a);l&&(l.style.position="absolute",o.left!==void 0&&(l.style.left=o.left,l.style.right="auto"),o.right!==void 0&&(l.style.right=o.right,l.style.left="auto"),o.top!==void 0&&(l.style.top=o.top,l.style.bottom="auto"),o.bottom!==void 0&&(l.style.bottom=o.bottom,l.style.top="auto"),o.size&&(l.style.width=`${o.size}px`,l.style.height=`${o.size}px`,l.style.fontSize=`${Math.round(o.size*.42)}px`),o.opacity&&(l.style.opacity=o.opacity))}}bindEvents(){const t=document.getElementById("joystick-zone");if(!t)return;t.addEventListener("touchstart",p=>{if(p.preventDefault(),this.isCustomizing||this.joystickTouchId!==null)return;const g=p.changedTouches[0];this.joystickTouchId=g.identifier;const v=t.getBoundingClientRect();this.joystickOrigin={x:g.clientX,y:g.clientY},this.joystickBase.style.left=`${g.clientX-v.left}px`,this.joystickBase.style.top=`${g.clientY-v.top}px`,this.joystickBase.style.display="block",this.joystickStick.style.transform="translate(-50%, -50%) translate(0px, 0px)"},{passive:!1}),window.addEventListener("touchmove",p=>{if(!this.isCustomizing)for(let g=0;g<p.changedTouches.length;g++){const v=p.changedTouches[g];if(v.identifier===this.joystickTouchId){const m=v.clientX-this.joystickOrigin.x,u=v.clientY-this.joystickOrigin.y,T=Math.hypot(m,u),E=Math.atan2(u,m),M=Math.min(this.maxRadius,T),w=Math.cos(E)*M,A=Math.sin(E)*M;this.joystickStick.style.transform=`translate(-50%, -50%) translate(${w}px, ${A}px)`,this.joystickVector.x=w/this.maxRadius,this.joystickVector.y=A/this.maxRadius,this.playerController.virtualJoystick.x=this.joystickVector.x,this.playerController.virtualJoystick.y=this.joystickVector.y,this.playerController.virtualSprint=this.autoSprintActive||this.joystickVector.y<-.85}else if(v.identifier===this.lookTouchId){const m=v.clientX-this.lastLookPos.x,u=v.clientY-this.lastLookPos.y;this.lastLookPos={x:v.clientX,y:v.clientY};const T=this.playerController.sensitivityMobile||.0035;this.playerController.applyLookDelta(m*T,u*T)}}},{passive:!1});const e=p=>{p===this.joystickTouchId&&(this.joystickTouchId=null,this.joystickVector={x:0,y:0},this.playerController.virtualJoystick.x=0,this.playerController.virtualJoystick.y=0,this.autoSprintActive||(this.playerController.virtualSprint=!1),this.joystickBase.style.display="none")};window.addEventListener("touchend",p=>{for(let g=0;g<p.changedTouches.length;g++){const v=p.changedTouches[g];e(v.identifier),v.identifier===this.lookTouchId&&(this.lookTouchId=null)}}),window.addEventListener("touchcancel",p=>{for(let g=0;g<p.changedTouches.length;g++)e(p.changedTouches[g].identifier);this.lookTouchId=null}),window.addEventListener("touchstart",p=>{if(!this.isCustomizing)for(let g=0;g<p.changedTouches.length;g++){const v=p.changedTouches[g];v.clientX>window.innerWidth*.44&&!p.target.closest(".touch-btn")&&!p.target.closest("#hud-customizer-modal")&&this.lookTouchId===null&&(this.lookTouchId=v.identifier,this.lastLookPos={x:v.clientX,y:v.clientY})}});const n=document.getElementById("btn-touch-fire");if(n){n.addEventListener("touchstart",g=>{g.preventDefault(),this.isFiring=!0,this.onFireStart&&this.onFireStart(),this.fireInterval&&clearInterval(this.fireInterval),this.fireInterval=setInterval(()=>{this.isFiring&&this.onFireStart&&this.onFireStart()},75)},{passive:!1});const p=()=>{this.isFiring=!1,this.fireInterval&&(clearInterval(this.fireInterval),this.fireInterval=null)};n.addEventListener("touchend",p),n.addEventListener("touchcancel",p)}const i=document.getElementById("btn-touch-ads");i&&i.addEventListener("touchstart",p=>{p.preventDefault(),this.weaponManager.setADS(!this.weaponManager.isADS),i.style.borderColor=this.weaponManager.isADS?"var(--accent-cyan)":""},{passive:!1});const r=document.getElementById("btn-touch-jump");r&&r.addEventListener("touchstart",p=>{p.preventDefault(),this.playerController.virtualJump=!0,setTimeout(()=>{this.playerController.virtualJump=!1},100)},{passive:!1});const a=document.getElementById("btn-touch-crouch");a&&a.addEventListener("touchstart",p=>{p.preventDefault(),this.playerController.virtualCrouch=!this.playerController.virtualCrouch,a.style.borderColor=this.playerController.virtualCrouch?"var(--accent-gold)":""},{passive:!1});const o=document.getElementById("btn-touch-prone");o&&o.addEventListener("touchstart",p=>{p.preventDefault(),this.playerController.virtualProne=!this.playerController.virtualProne,o.style.borderColor=this.playerController.virtualProne?"var(--accent-red)":""},{passive:!1});const l=document.getElementById("btn-touch-reload");l&&l.addEventListener("touchstart",p=>{p.preventDefault(),this.weaponManager.reload()},{passive:!1});const c=document.getElementById("btn-touch-switch");c&&c.addEventListener("touchstart",p=>{p.preventDefault();const g=(this.weaponManager.currentSlotIndex+1)%this.weaponManager.equippedSlots.length;this.weaponManager.switchWeapon(g)},{passive:!1});const h=document.getElementById("btn-touch-heal");h&&h.addEventListener("touchstart",p=>{p.preventDefault(),this.playerStats.useMedkit()},{passive:!1});const f=document.getElementById("btn-touch-melee");f&&f.addEventListener("touchstart",p=>{p.preventDefault(),this.weaponManager.switchWeapon(2),setTimeout(()=>{this.onFireStart&&this.onFireStart()},60)},{passive:!1});const d=document.getElementById("btn-touch-sprint");d&&d.addEventListener("touchstart",p=>{p.preventDefault(),this.autoSprintActive=!this.autoSprintActive,d.classList.toggle("active",this.autoSprintActive),this.playerController.virtualSprint=this.autoSprintActive},{passive:!1}),this.setupHUDCustomizer()}setupHUDCustomizer(){const t=document.getElementById("hud-customizer-modal");if(!t)return;t.querySelectorAll(".hud-cust-presets button").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.preset;this.applyLayout(a),this.saveData.hudLayout=this.saveData.hudLayout||{},this.saveData.hudLayout.preset=a,this.saveData.hudLayout.positions={},Jt.save(this.saveData)})});const e=document.getElementById("btn-close-hud-cust");e&&e.addEventListener("click",()=>this.closeHUDCustomizer());const n=document.getElementById("btn-reset-hud-layout");n&&n.addEventListener("click",()=>{this.saveData.hudLayout={preset:"two-finger",positions:{}},Jt.save(this.saveData),this.applyLayout("two-finger")});const i=document.getElementById("btn-save-hud-layout");i&&i.addEventListener("click",()=>{Jt.save(this.saveData),this.closeHUDCustomizer(),alert("HUD Layout saved successfully!")})}openHUDCustomizer(){this.isCustomizing=!0;const t=document.getElementById("hud-customizer-modal");t&&(t.style.display="flex")}closeHUDCustomizer(){this.isCustomizing=!1;const t=document.getElementById("hud-customizer-modal");t&&(t.style.display="none")}show(){this.container&&(this.container.style.display="block")}hide(){this.container&&(this.container.style.display="none")}}class rm{constructor(t,e,n,i,r,a){this.saveData=t,this.onStartCampaign=e,this.onStartBR=n,this.onEquipWeapon=i,this.onSettingsChange=r,this.authManager=a,this.container=null,this.currentTab="home",this.selectedWeapon=null,this._missionTimer=null,this.createUI()}createUI(){var t;this.container=document.getElementById("main-menu"),this.container||(this.container=document.createElement("div"),this.container.id="main-menu",document.body.appendChild(this.container)),this.container.innerHTML=`
      <!-- Top Header Nav -->
      <header id="menu-header">
        <div class="brand">
          <div class="logo-symbol">⚡</div>
          <div class="logo-text">VK<span class="accent"> TRAP</span></div>
        </div>

        <nav class="nav-tabs">
          <button class="nav-btn active" data-tab="home">HOME</button>
          <button class="nav-btn" data-tab="campaign">CAMPAIGN</button>
          <button class="nav-btn" data-tab="loadout">LOADOUT</button>
          <button class="nav-btn" data-tab="missions">MISSIONS</button>
          <button class="nav-btn" data-tab="profile">PROFILE</button>
          <button class="nav-btn" data-tab="settings">SETTINGS</button>
        </nav>

        <div class="header-user-badge">
          <span class="currency">💰 <span id="menu-credits">${this.saveData.profile.credits}</span></span>
          <span class="user-lvl">LVL <span id="menu-user-lvl">${this.saveData.profile.playerLevel}</span></span>
          <span class="user-name" id="menu-username">${this.saveData.profile.username}</span>
        </div>
      </header>

      <!-- Main Content Area -->
      <main id="menu-content">

        <!-- HOME TAB -->
        <section id="tab-home" class="menu-tab-pane active">
          <div class="hero-banner">
            <div class="hero-badge">COMPETITIVE SHOOTER • MOBILE & DESKTOP</div>
            <h1 class="hero-title">VK <span class="accent-red">TRAP</span></h1>
            <p class="hero-desc">100 campaign levels of escalating warfare. Solo Battle Royale. 12 original weapons. Built for mobile supremacy.</p>

            <div class="mode-cards">
              <div class="mode-card featured" id="btn-play-campaign">
                <div class="card-tag">OFFLINE READY</div>
                <h3>100-LEVEL CAMPAIGN</h3>
                <p>Escalating difficulty from Boot Camp to Final Reckoning. Resume at Level <span id="home-resume-lvl">${this.saveData.campaign.currentLevel}</span>.</p>
                <button class="cyber-btn primary large">DEPLOY CAMPAIGN</button>
              </div>

              <div class="mode-card featured br-card" id="btn-play-br">
                <div class="card-tag br-tag">SURVIVAL</div>
                <h3>BATTLE ROYALE</h3>
                <p>25-combatant island warfare with shrinking storm, tactical loot, and last-one-standing survival.</p>
                <button class="cyber-btn accent large">DROP INTO MATCH</button>
              </div>
            </div>
          </div>
        </section>

        <!-- CAMPAIGN TAB -->
        <section id="tab-campaign" class="menu-tab-pane">
          <div class="campaign-header">
            <h2>CAMPAIGN — 100 LEVELS</h2>
            <p>8 difficulty tiers. Boss encounters at Levels 10, 25, 40, 55, 70, 85, 95, and 100. Level 100 is the Final Reckoning.</p>
          </div>

          <div class="level-jump-bar">
            <span style="font-size:0.8rem;color:var(--text-muted);">LEVEL:</span>
            <input type="number" id="level-input" min="1" max="100" value="${this.saveData.campaign.currentLevel}">
            <button id="btn-jump-level" class="cyber-btn primary">▶ LAUNCH</button>
            <button id="btn-boss-10"  class="cyber-btn">👑 LVL 10</button>
            <button id="btn-boss-25"  class="cyber-btn">👑 LVL 25</button>
            <button id="btn-boss-55"  class="cyber-btn">👑 LVL 55</button>
            <button id="btn-boss-85"  class="cyber-btn">👑 LVL 85</button>
            <button id="btn-boss-100" class="cyber-btn primary">🔥 LVL 100 FINAL</button>
          </div>

          <div id="level-preview-card" class="preview-card">
            <div class="tier-pill" id="preview-tier-pill">Tier: Beginner</div>
            <h3 id="preview-level-title">LEVEL 1 — BOOT CAMP</h3>
            <div class="preview-stats-grid">
              <div>Enemies: <span id="prev-enemies">2</span></div>
              <div>Enemy HP: <span id="prev-hp">45</span></div>
              <div>Enemy Dmg: <span id="prev-dmg">8</span></div>
              <div>Accuracy: <span id="prev-acc">28%</span></div>
              <div>Map Size: <span id="prev-map">45m</span></div>
              <div>Reward XP: <span id="prev-xp">100</span></div>
            </div>
            <p id="prev-objective">Objective: Neutralize all enemy hostiles in the sector.</p>
            <p id="prev-env" style="font-size:0.8rem;color:var(--text-muted);margin-top:6px;">Environment: Training Base</p>
          </div>
        </section>

        <!-- LOADOUT TAB -->
        <section id="tab-loadout" class="menu-tab-pane">
          <div class="armory-layout">
            <div class="weapons-sidebar" id="armory-list"></div>
            <div class="weapon-details-pane" id="armory-details">
              <h2 id="armory-name">ARX-45</h2>
              <div class="armory-cat" id="armory-cat">Assault Rifle</div>
              <div id="armory-desc" style="font-size:0.8rem;color:var(--text-muted);margin-bottom:12px;"></div>
              <div class="stat-bars">
                <div class="stat-row"><span>Damage</span><div class="bar-bg"><div id="stat-bar-dmg" class="bar-fill"></div></div></div>
                <div class="stat-row"><span>Fire Rate</span><div class="bar-bg"><div id="stat-bar-fr" class="bar-fill"></div></div></div>
                <div class="stat-row"><span>Magazine</span><div class="bar-bg"><div id="stat-bar-mag" class="bar-fill"></div></div></div>
                <div class="stat-row"><span>Range</span><div class="bar-bg"><div id="stat-bar-range" class="bar-fill"></div></div></div>
              </div>

              <div class="attachment-slots" id="attachment-slots">
                <h4 style="margin-bottom:10px;font-size:0.8rem;letter-spacing:2px;color:var(--accent-cyan);">ATTACHMENTS</h4>
                <div class="att-slot" data-slot="muzzle">
                  <span class="att-slot-icon">🔇</span>
                  <span class="att-slot-name">MUZZLE</span>
                  <span class="att-slot-equipped" id="att-muzzle">—</span>
                </div>
                <div class="att-slot" data-slot="scope">
                  <span class="att-slot-icon">🔭</span>
                  <span class="att-slot-name">SCOPE</span>
                  <span class="att-slot-equipped" id="att-scope">—</span>
                </div>
                <div class="att-slot" data-slot="grip">
                  <span class="att-slot-icon">🤛</span>
                  <span class="att-slot-name">GRIP</span>
                  <span class="att-slot-equipped" id="att-grip">—</span>
                </div>
                <div class="att-slot" data-slot="magazine">
                  <span class="att-slot-icon">📦</span>
                  <span class="att-slot-name">MAGAZINE</span>
                  <span class="att-slot-equipped" id="att-magazine">—</span>
                </div>
                <div class="att-slot" data-slot="stock">
                  <span class="att-slot-icon">🔒</span>
                  <span class="att-slot-name">STOCK</span>
                  <span class="att-slot-equipped" id="att-stock">—</span>
                </div>
              </div>

              <div class="armory-actions" style="margin-top:16px;">
                <button id="btn-equip-primary" class="cyber-btn primary">EQUIP PRIMARY</button>
                <button id="btn-equip-secondary" class="cyber-btn">EQUIP SECONDARY</button>
                <button id="btn-buy-weapon" class="cyber-btn accent" style="display:none;">UNLOCK 💰</button>
              </div>
            </div>
          </div>
        </section>

        <!-- MISSIONS TAB -->
        <section id="tab-missions" class="menu-tab-pane">
          <div class="missions-section">
            <div class="section-header">
              <h3>DAILY MISSIONS</h3>
              <span class="reset-timer" id="daily-reset-timer">Resets in: --:--:--</span>
            </div>
            <div id="daily-missions-list" class="missions-list">
              <div style="color:var(--text-muted);text-align:center;padding:24px;">Loading missions...</div>
            </div>
          </div>

          <div class="missions-section" style="margin-top:20px;">
            <div class="section-header">
              <h3>LOGIN STREAK</h3>
            </div>
            <div class="login-streak-card">
              <div class="streak-days" id="login-streak-count">${((t=this.saveData.missions)==null?void 0:t.loginStreak)||0}</div>
              <div class="streak-label">DAY STREAK</div>
              <div class="streak-rewards">
                <div class="streak-day" data-day="1">Day 1<br><small>+100 CR</small></div>
                <div class="streak-day" data-day="3">Day 3<br><small>+300 CR</small></div>
                <div class="streak-day" data-day="7">Day 7<br><small>+1000 CR</small></div>
                <div class="streak-day" data-day="14">Day 14<br><small>Weapon Crate</small></div>
                <div class="streak-day" data-day="30">Day 30<br><small>🔥 LEGENDARY</small></div>
              </div>
            </div>
          </div>

          <div class="missions-section" style="margin-top:20px;">
            <div class="section-header">
              <h3>ACHIEVEMENTS</h3>
            </div>
            <div class="achievements-list" id="achievements-grid"></div>
          </div>
        </section>

        <!-- PROFILE TAB -->
        <section id="tab-profile" class="menu-tab-pane">
          <div class="profile-layout">
            <div class="profile-identity-card">
              <div class="profile-avatar-ring">
                <div class="profile-avatar" id="profile-avatar-display">🎯</div>
                <div class="profile-rank-badge" id="profile-rank-badge">LVL ${this.saveData.profile.playerLevel}</div>
              </div>
              <div class="profile-name-section">
                <div class="profile-username" id="profile-username-display">${this.saveData.profile.username}</div>
                <div class="profile-tag">VK TRAP OPERATIVE</div>
                <div class="xp-bar-section">
                  <div class="xp-bar-bg"><div id="xp-bar-fill" class="xp-bar-fill"></div></div>
                  <div class="xp-text" id="xp-text-display">${this.saveData.profile.xp} / ${this.saveData.profile.xpRequired} XP</div>
                </div>
                <button class="cyber-btn" id="btn-edit-username" style="margin-top:10px;">✏️ EDIT NAME</button>
              </div>
            </div>

            <div class="profile-stats-grid">
              <div class="pstat-card">
                <div class="pstat-icon">💀</div>
                <div class="pstat-val" id="stat-total-kills">${this.saveData.profile.totalKills}</div>
                <div class="pstat-lbl">TOTAL KILLS</div>
              </div>
              <div class="pstat-card">
                <div class="pstat-icon">🎯</div>
                <div class="pstat-val" id="stat-accuracy">0%</div>
                <div class="pstat-lbl">ACCURACY</div>
              </div>
              <div class="pstat-card">
                <div class="pstat-icon">🔴</div>
                <div class="pstat-val" id="stat-headshot-pct">0%</div>
                <div class="pstat-lbl">HEADSHOT %</div>
              </div>
              <div class="pstat-card">
                <div class="pstat-icon">🏆</div>
                <div class="pstat-val" id="stat-br-wins">${this.saveData.profile.brWins}</div>
                <div class="pstat-lbl">BR WINS</div>
              </div>
              <div class="pstat-card">
                <div class="pstat-icon">🎮</div>
                <div class="pstat-val" id="stat-matches">${this.saveData.profile.matchesPlayed}</div>
                <div class="pstat-lbl">MATCHES PLAYED</div>
              </div>
              <div class="pstat-card">
                <div class="pstat-icon">⚔️</div>
                <div class="pstat-val" id="stat-fav-weapon">ARX-45</div>
                <div class="pstat-lbl">FAV WEAPON</div>
              </div>
              <div class="pstat-card">
                <div class="pstat-icon">📊</div>
                <div class="pstat-val" id="stat-campaign-lvl">${this.saveData.campaign.currentLevel}/100</div>
                <div class="pstat-lbl">CAMPAIGN</div>
              </div>
              <div class="pstat-card">
                <div class="pstat-icon">💰</div>
                <div class="pstat-val" id="stat-credits">${this.saveData.profile.credits}</div>
                <div class="pstat-lbl">CREDITS</div>
              </div>
            </div>

            <div class="save-management">
              <h3 style="margin-bottom:12px;font-size:0.85rem;letter-spacing:2px;">SAVE DATA</h3>
              <div class="save-buttons">
                <button class="cyber-btn" id="btn-export-save">📤 EXPORT SAVE</button>
                <button class="cyber-btn" id="btn-import-save">📥 IMPORT SAVE</button>
                <button class="cyber-btn danger" id="btn-reset-save">⚠️ RESET ALL DATA</button>
              </div>
            </div>
          </div>
        </section>

        <!-- SETTINGS TAB -->
        <section id="tab-settings" class="menu-tab-pane">

          <div class="settings-section">
            <h4 class="settings-section-title">GRAPHICS</h4>
            <div class="setting-group">
              <label>Quality</label>
              <select id="setting-quality" class="cyber-select">
                <option value="auto">Auto (Adaptive FPS)</option>
                <option value="low">Low (Max Performance)</option>
                <option value="medium">Medium (Standard)</option>
                <option value="high">High (Enhanced)</option>
                <option value="ultra">Ultra (Uncapped)</option>
              </select>
            </div>
            <div class="setting-group">
              <label>Field of View: <span id="fov-val">${this.saveData.settings.fov}</span></label>
              <input type="range" id="setting-fov" min="55" max="110" step="5" value="${this.saveData.settings.fov}">
            </div>
          </div>

          <div class="settings-section">
            <h4 class="settings-section-title">SENSITIVITY</h4>
            <div class="setting-group">
              <label>Desktop Mouse: <span id="sens-desktop-val">${this.saveData.settings.sensitivityDesktop}</span></label>
              <input type="range" id="setting-sens-desktop" min="0.1" max="5" step="0.1" value="${this.saveData.settings.sensitivityDesktop}">
            </div>
            <div class="setting-group">
              <label>Mobile Look: <span id="sens-mobile-val">${this.saveData.settings.sensitivityMobile}</span></label>
              <input type="range" id="setting-sens-mobile" min="0.1" max="5" step="0.1" value="${this.saveData.settings.sensitivityMobile}">
            </div>
            <div class="setting-group">
              <label>ADS Sensitivity: <span id="sens-ads-val">${this.saveData.settings.sensitivityADS||1}</span></label>
              <input type="range" id="setting-sens-ads" min="0.1" max="3" step="0.1" value="${this.saveData.settings.sensitivityADS||1}">
            </div>
            <div class="setting-group">
              <label>2x Scope: <span id="sens-scope2x-val">${this.saveData.settings.sensitivityScope2x||.9}</span></label>
              <input type="range" id="setting-sens-scope2x" min="0.1" max="3" step="0.1" value="${this.saveData.settings.sensitivityScope2x||.9}">
            </div>
            <div class="setting-group">
              <label>4x Scope: <span id="sens-scope4x-val">${this.saveData.settings.sensitivityScope4x||.75}</span></label>
              <input type="range" id="setting-sens-scope4x" min="0.1" max="3" step="0.1" value="${this.saveData.settings.sensitivityScope4x||.75}">
            </div>
          </div>

          <div class="settings-section">
            <h4 class="settings-section-title">CONTROLS & CUSTOM HUD</h4>
            <div style="margin-bottom:12px;">
              <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:10px;">
                Customize button positions, button sizes, and select presets for Two-Finger, Three-Finger, or Claw layout.
              </p>
              <button id="btn-open-hud-cust" class="cyber-btn primary">📱 CUSTOMIZE HUD</button>
            </div>
            <div class="setting-group toggle-group">
              <label>Gyroscope Aiming</label>
              <label class="toggle-switch">
                <input type="checkbox" id="setting-gyro" ${this.saveData.settings.gyroEnabled?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="setting-group">
              <label>Gyro Sensitivity: <span id="gyro-sens-val">${this.saveData.settings.gyroSensitivity||1}</span></label>
              <input type="range" id="setting-gyro-sens" min="0.2" max="3.0" step="0.1" value="${this.saveData.settings.gyroSensitivity||1}">
            </div>
          </div>

          <div class="settings-section">
            <h4 class="settings-section-title">AUDIO</h4>
            <div class="setting-group">
              <label>Master Volume: <span id="vol-master-val">${Math.round(this.saveData.settings.masterVolume*100)}%</span></label>
              <input type="range" id="setting-vol-master" min="0" max="1" step="0.05" value="${this.saveData.settings.masterVolume}">
            </div>
            <div class="setting-group">
              <label>SFX Volume: <span id="vol-sfx-val">${Math.round(this.saveData.settings.sfxVolume*100)}%</span></label>
              <input type="range" id="setting-vol-sfx" min="0" max="1" step="0.05" value="${this.saveData.settings.sfxVolume}">
            </div>
            <div class="setting-group">
              <label>Music Volume: <span id="vol-music-val">${Math.round(this.saveData.settings.musicVolume*100)}%</span></label>
              <input type="range" id="setting-vol-music" min="0" max="1" step="0.05" value="${this.saveData.settings.musicVolume}">
            </div>
          </div>

          <div class="settings-section">
            <h4 class="settings-section-title">ACCESSIBILITY</h4>
            <div class="setting-group">
              <label>Colorblind Mode</label>
              <select class="cyber-select" id="setting-colorblind">
                <option value="none">None</option>
                <option value="deuteranopia">Deuteranopia (Red-Green)</option>
                <option value="protanopia">Protanopia (Red-Green)</option>
                <option value="tritanopia">Tritanopia (Blue-Yellow)</option>
              </select>
            </div>
            <div class="setting-group toggle-group">
              <label>Damage Numbers</label>
              <label class="toggle-switch">
                <input type="checkbox" id="setting-damage-numbers" ${this.saveData.settings.showDamageNumbers!==!1?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="setting-group toggle-group">
              <label>Hit Marker</label>
              <label class="toggle-switch">
                <input type="checkbox" id="setting-hit-marker" ${this.saveData.settings.showHitMarker!==!1?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="setting-group toggle-group">
              <label>Vibration (Mobile)</label>
              <label class="toggle-switch">
                <input type="checkbox" id="setting-vibration" ${this.saveData.settings.vibration!==!1?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="setting-group toggle-group">
              <label>Left-Handed Layout</label>
              <label class="toggle-switch">
                <input type="checkbox" id="setting-left-handed" ${this.saveData.settings.leftHandedMode?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>

        </section>
      </main>
    `,this.setupEvents(),this.renderArmory(),this.renderAchievements(),this.renderMissions(),this.updateCampaignPreview(this.saveData.campaign.currentLevel),this.updateProfileStats(),this.startMissionTimer()}setupEvents(){const t=this.container.querySelectorAll(".nav-btn");t.forEach(d=>{d.addEventListener("click",()=>{t.forEach(p=>p.classList.remove("active")),d.classList.add("active"),this.switchTab(d.dataset.tab)})});const e=document.getElementById("btn-play-campaign");e&&e.addEventListener("click",()=>{this.hide(),this.onStartCampaign&&this.onStartCampaign(this.saveData.campaign.currentLevel)});const n=document.getElementById("btn-play-br");n&&n.addEventListener("click",()=>{this.hide(),this.onStartBR&&this.onStartBR()});const i=document.getElementById("level-input");i&&i.addEventListener("input",d=>{const p=Math.max(1,Math.min(100,parseInt(d.target.value)||1));this.updateCampaignPreview(p)});const r=document.getElementById("btn-jump-level");r&&r.addEventListener("click",()=>{const d=Math.max(1,Math.min(100,parseInt(i==null?void 0:i.value)||1));this.hide(),this.onStartCampaign&&this.onStartCampaign(d)}),[{id:"btn-boss-10",lvl:10},{id:"btn-boss-25",lvl:25},{id:"btn-boss-55",lvl:55},{id:"btn-boss-85",lvl:85},{id:"btn-boss-100",lvl:100}].forEach(({id:d,lvl:p})=>{const g=document.getElementById(d);g&&g.addEventListener("click",()=>{this.hide(),this.onStartCampaign&&this.onStartCampaign(p)})}),this._bindSetting("setting-quality","quality","value"),this._bindRange("setting-fov","fov","fov-val",d=>d),this._bindRange("setting-sens-desktop","sensitivityDesktop","sens-desktop-val",d=>parseFloat(d).toFixed(1)),this._bindRange("setting-sens-mobile","sensitivityMobile","sens-mobile-val",d=>parseFloat(d).toFixed(1)),this._bindRange("setting-sens-ads","sensitivityADS","sens-ads-val",d=>parseFloat(d).toFixed(1)),this._bindRange("setting-sens-scope2x","sensitivityScope2x","sens-scope2x-val",d=>parseFloat(d).toFixed(2)),this._bindRange("setting-sens-scope4x","sensitivityScope4x","sens-scope4x-val",d=>parseFloat(d).toFixed(2)),this._bindRange("setting-vol-master","masterVolume","vol-master-val",d=>`${Math.round(d*100)}%`),this._bindRange("setting-vol-sfx","sfxVolume","vol-sfx-val",d=>`${Math.round(d*100)}%`),this._bindRange("setting-vol-music","musicVolume","vol-music-val",d=>`${Math.round(d*100)}%`),this._bindToggle("setting-damage-numbers","showDamageNumbers"),this._bindToggle("setting-hit-marker","showHitMarker"),this._bindToggle("setting-vibration","vibration"),this._bindToggle("setting-left-handed","leftHandedMode"),this._bindSetting("setting-colorblind","colorblindMode","value");const o=document.getElementById("btn-open-hud-cust");o&&o.addEventListener("click",()=>{var d;(d=window.gameEngine)!=null&&d.touchControls&&window.gameEngine.touchControls.openHUDCustomizer()}),this._bindToggle("setting-gyro","gyroEnabled"),this._bindRange("setting-gyro-sens","gyroSensitivity","gyro-sens-val",d=>parseFloat(d).toFixed(1));const l=document.getElementById("btn-edit-username");l&&l.addEventListener("click",()=>{const d=prompt("Enter your callsign (max 16 characters):",this.saveData.profile.username);d&&d.trim().length>0&&(this.saveData.profile.username=d.trim().slice(0,16),Jt.save(this.saveData),this.updateProfileStats())});const c=document.getElementById("btn-export-save");c&&c.addEventListener("click",()=>{const d=Jt.exportSave();prompt("Copy your VK TRAP Save Code:",d)});const h=document.getElementById("btn-import-save");h&&h.addEventListener("click",()=>{const d=prompt("Paste your VK TRAP Save Code:");d&&Jt.importSave(d)?(alert("Save imported! Reloading..."),window.location.reload()):d&&alert("Invalid save code!")});const f=document.getElementById("btn-reset-save");f&&f.addEventListener("click",()=>{confirm("Reset ALL VK TRAP progress? This cannot be undone!")&&(Jt.reset(),window.location.reload())})}_bindRange(t,e,n,i){const r=document.getElementById(t),a=document.getElementById(n);r&&r.addEventListener("input",o=>{const l=parseFloat(o.target.value);this.saveData.settings[e]=l,a&&(a.textContent=i?i(l):l),Jt.save(this.saveData),this.onSettingsChange&&this.onSettingsChange(this.saveData.settings)})}_bindSetting(t,e,n){const i=document.getElementById(t);i&&(i.value=this.saveData.settings[e]||i.value,i.addEventListener("change",r=>{this.saveData.settings[e]=r.target[n],Jt.save(this.saveData),this.onSettingsChange&&this.onSettingsChange(this.saveData.settings)}))}_bindToggle(t,e){const n=document.getElementById(t);n&&n.addEventListener("change",i=>{this.saveData.settings[e]=i.target.checked,Jt.save(this.saveData),this.onSettingsChange&&this.onSettingsChange(this.saveData.settings)})}switchTab(t){this.currentTab=t,this.container.querySelectorAll(".menu-tab-pane").forEach(n=>n.classList.remove("active"));const e=document.getElementById(`tab-${t}`);e&&e.classList.add("active")}updateCampaignPreview(t){var r,a,o,l;t=Math.max(1,Math.min(100,t));const e=aa.calculate(t),n=document.getElementById("preview-tier-pill");n&&(n.textContent=`${e.tierInfo.tier} — ${e.tierInfo.name}`,n.style.color=e.tierInfo.color);const i=document.getElementById("preview-level-title");i&&(i.textContent=e.isBoss?`LEVEL ${t} 👑 BOSS — ${(r=e.bossStats)==null?void 0:r.name}`:`LEVEL ${t} — ${e.tierInfo.name}`),this._setText("prev-enemies",e.isBoss?`${e.enemyCount} + BOSS`:e.enemyCount),this._setText("prev-hp",e.isBoss?`${(a=e.bossStats)==null?void 0:a.health} (Boss)`:e.enemyHealth),this._setText("prev-dmg",e.isBoss?`${(o=e.bossStats)==null?void 0:o.damage} (Boss)`:e.enemyDamage),this._setText("prev-acc",`${Math.round(e.enemyAccuracy*100)}%`),this._setText("prev-map",`${e.mapSize}m`),this._setText("prev-xp",e.rewardXP),this._setText("prev-objective",`Objective: ${e.objectiveDesc}`),this._setText("prev-env",`Environment: ${((l=e.environment)==null?void 0:l.theme)||"Training Base"}`)}renderArmory(){const t=document.getElementById("armory-list");if(!t)return;t.innerHTML="";const e=Object.values(Un);this.selectedWeapon=e[0],e.forEach(n=>{const i=this.saveData.loadout.unlockedWeapons.includes(n.id),r=document.createElement("div");r.className="armory-item"+(n.id===this.selectedWeapon.id?" active":""),r.innerHTML=`
        <div class="w-name">${n.name} ${i?"":"🔒"}</div>
        <div class="w-cat">${n.category} • Lvl ${n.unlockLevel||1}+</div>
      `,r.onclick=()=>{t.querySelectorAll(".armory-item").forEach(a=>a.classList.remove("active")),r.classList.add("active"),this.selectedWeapon=n,this.showWeaponDetails(n)},t.appendChild(r)}),this.showWeaponDetails(this.selectedWeapon)}showWeaponDetails(t){var l;this._setText("armory-name",t.name),this._setText("armory-cat",t.category),this._setText("armory-desc",t.description||"");const e=(c,h)=>{const f=document.getElementById(c);f&&(f.style.width=`${Math.min(100,h)}%`)};e("stat-bar-dmg",Math.min(100,t.damage/130*100)),e("stat-bar-fr",Math.min(100,t.fireRate/1100*100)),e("stat-bar-mag",Math.min(100,t.magSize/100*100)),e("stat-bar-range",Math.min(100,t.range/320*100));const n=((l=this.saveData.loadout.attachments)==null?void 0:l[t.id])||{};["muzzle","scope","grip","magazine","stock"].forEach(c=>{var d;const h=n[c],f=document.getElementById(`att-${c}`);f&&(f.textContent=h?((d=ll[h])==null?void 0:d.name)||h:"—")});const i=this.saveData.loadout.unlockedWeapons.includes(t.id),r=document.getElementById("btn-equip-primary"),a=document.getElementById("btn-equip-secondary"),o=document.getElementById("btn-buy-weapon");!r||!a||!o||(i?(r.style.display="inline-block",a.style.display=t.category!=="Melee"?"inline-block":"none",o.style.display="none",r.onclick=()=>{this.saveData.loadout.primary=t.id,Jt.save(this.saveData),this.onEquipWeapon&&this.onEquipWeapon(0,t.id),this._toast(`${t.name} equipped as Primary`)},a.onclick=()=>{this.saveData.loadout.secondary=t.id,Jt.save(this.saveData),this.onEquipWeapon&&this.onEquipWeapon(1,t.id),this._toast(`${t.name} equipped as Secondary`)}):(r.style.display="none",a.style.display="none",o.style.display="inline-block",o.textContent=`UNLOCK — ${t.price} 💰`,o.onclick=()=>{this.saveData.profile.credits>=t.price?(this.saveData.profile.credits-=t.price,this.saveData.loadout.unlockedWeapons.push(t.id),Jt.save(this.saveData),document.getElementById("menu-credits").textContent=this.saveData.profile.credits,this.renderArmory()):this._toast(`Insufficient credits! Need ${t.price} CR.`)}))}renderAchievements(){const t=document.getElementById("achievements-grid");t&&(t.innerHTML="",Object.values(this.saveData.achievements).forEach(e=>{const n=document.createElement("div");n.className="achievement-card"+(e.unlocked?" unlocked":""),n.innerHTML=`
        <div class="ach-icon">${e.unlocked?"🏆":"🔒"}</div>
        <div class="ach-info">
          <h4>${e.name}</h4>
          <p>${e.desc}</p>
        </div>
        <div class="ach-status">${e.unlocked?"DONE":"LOCKED"}</div>
      `,t.appendChild(n)}))}renderMissions(){var i,r,a;const t=document.getElementById("daily-missions-list");if(!t)return;const e=((r=(i=this.saveData.missions)==null?void 0:i.daily)==null?void 0:r.tasks)||[];if(e.length===0){t.innerHTML='<div style="color:var(--text-muted);text-align:center;padding:24px;">Play a match to unlock daily missions!</div>';return}t.innerHTML=e.map(o=>`
      <div class="mission-item${o.completed?" completed":""}">
        <div class="mission-desc">${o.completed?"✅ ":""}${o.desc}</div>
        <div class="mission-progress-bar">
          <div class="mission-progress-fill" style="width:${Math.min(100,o.progress/o.target*100)}%"></div>
        </div>
        <div style="font-size:0.75rem;color:var(--text-muted);">${o.progress}/${o.target}</div>
        <div class="mission-reward">+${o.reward} CR</div>
      </div>
    `).join("");const n=((a=this.saveData.missions)==null?void 0:a.loginStreak)||0;this._setText("login-streak-count",n),document.querySelectorAll(".streak-day").forEach(o=>{const l=parseInt(o.dataset.day);n>=l&&o.classList.add("earned")})}startMissionTimer(){const t=()=>{const e=document.getElementById("daily-reset-timer");if(!e)return;const n=new Date,i=new Date;i.setHours(24,0,0,0);const r=i-n,a=String(Math.floor(r/36e5)).padStart(2,"0"),o=String(Math.floor(r%36e5/6e4)).padStart(2,"0"),l=String(Math.floor(r%6e4/1e3)).padStart(2,"0");e.textContent=`Resets in: ${a}:${o}:${l}`};t(),this._missionTimer=setInterval(t,1e3)}updateProfileStats(){var a;const t=this.saveData.profile,e=t.totalShots>0?Math.round(t.totalHits/t.totalShots*100):0,n=t.totalKills>0?Math.round(t.headshots/t.totalKills*100):0,i=((a=Un[t.favoriteWeapon])==null?void 0:a.name)||"ARX-45";this._setText("profile-username-display",t.username),this._setText("menu-username",t.username),this._setText("profile-rank-badge",`LVL ${t.playerLevel}`),this._setText("xp-text-display",`${t.xp} / ${t.xpRequired} XP`);const r=document.getElementById("xp-bar-fill");r&&(r.style.width=`${Math.min(100,t.xp/t.xpRequired*100)}%`),this._setText("stat-total-kills",t.totalKills),this._setText("stat-accuracy",`${e}%`),this._setText("stat-headshot-pct",`${n}%`),this._setText("stat-br-wins",t.brWins),this._setText("stat-matches",t.matchesPlayed),this._setText("stat-fav-weapon",i),this._setText("stat-campaign-lvl",`${this.saveData.campaign.currentLevel}/100`),this._setText("stat-credits",t.credits),this._setText("menu-credits",t.credits),this._setText("menu-user-lvl",t.playerLevel),this._setText("home-resume-lvl",this.saveData.campaign.currentLevel)}_setText(t,e){const n=document.getElementById(t);n&&(n.textContent=e)}_toast(t){const e=document.createElement("div");e.style.cssText=`
      position:fixed;bottom:80px;left:50%;transform:translateX(-50%);
      background:rgba(14,18,26,0.95);border:1px solid rgba(0,229,255,0.4);
      color:#fff;padding:10px 20px;border-radius:6px;z-index:9999;
      font-size:0.85rem;font-weight:700;letter-spacing:1px;
      animation:fadeIn 0.2s ease;
    `,e.textContent=t,document.body.appendChild(e),setTimeout(()=>e.remove(),2500)}show(){Jt.checkDailyReset(this.saveData),this.updateProfileStats(),this.renderAchievements(),this.renderMissions(),this.container.style.display="flex"}hide(){this.container.style.display="none"}destroy(){this._missionTimer&&clearInterval(this._missionTimer)}}const Cn={ROOM_JOIN:"ROOM_JOIN",ROOM_STATE:"ROOM_STATE",PLAYER_STATE:"PLAYER_STATE",SHOOT_EVENT:"SHOOT_EVENT",PING:"PING",PONG:"PONG"};class am{constructor(){this.isConnected=!1,this.clientId=null,this.roomId=null,this.messageHandlers=new Map}on(t,e){this.messageHandlers.has(t)||this.messageHandlers.set(t,[]),this.messageHandlers.get(t).push(e)}emit(t,e){const n=this.messageHandlers.get(t);n&&n.forEach(i=>i(e))}send(t,e){console.log(`[Network] Outgoing ${t}:`,e)}}class om{constructor(){this.playerLastFireTime=new Map,this.playerLastPos=new Map}validateFireRate(t,e,n){const i=performance.now()/1e3;if(!this.playerLastFireTime.has(t))return this.playerLastFireTime.set(t,i),!0;const r=this.playerLastFireTime.get(t),a=i-r;return a<n*.85?(console.warn(`[AntiCheat] Rate-of-fire violation: Player ${t} fired ${e} too fast (${a.toFixed(3)}s)`),!1):(this.playerLastFireTime.set(t,i),!0)}validateMovement(t,e,n,i=14){const r=this.playerLastPos.get(t);if(!r)return this.playerLastPos.set(t,{x:e.x,y:e.y,z:e.z,time:performance.now()}),!0;const o=Math.hypot(e.x-r.x,e.z-r.z)/Math.max(.01,n);return o>i*1.3?(console.warn(`[AntiCheat] Speed-hack violation: Player ${t} moved at ${o.toFixed(1)} m/s`),!1):(this.playerLastPos.set(t,{x:e.x,y:e.y,z:e.z,time:performance.now()}),!0)}validateHitDistance(t,e,n){return Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z)<=n*1.1}}class lm extends am{constructor(t=35){super(),this.latency=t,this.antiCheat=new om,this.isConnected=!0,this.clientId="player_"+Math.floor(Math.random()*8999+1e3),this.remotePlayers=new Map}send(t,e){setTimeout(()=>{this.handleServerMessage(t,e)},this.latency)}handleServerMessage(t,e){switch(t){case Cn.PING:setTimeout(()=>{this.emit(Cn.PONG,{time:performance.now()})},this.latency);break;case Cn.PLAYER_STATE:this.antiCheat.validateMovement(this.clientId,e.pos,.05);break;case Cn.SHOOT_EVENT:this.emit(Cn.SHOOT_EVENT,e);break;case Cn.ROOM_JOIN:this.roomId=e.roomId,this.emit(Cn.ROOM_STATE,{roomId:this.roomId,status:"JOINED",players:[this.clientId,"Operative_99","Ghost_44"]});break}}}class cm{constructor(t=null,e=null){var n;this.authManager=t,this.cloudSave=e,this.saveData=Jt.load(),this.mode="MENU",this.isPaused=!1,this.currentLevelNumber=this.saveData.campaign.currentLevel||1,this.scene=new qc,this.camera=new De(75,window.innerWidth/window.innerHeight,.1,400),this.renderer=new Xp({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wo,document.body.appendChild(this.renderer.domElement),this.qualityManager=new qp(this.renderer,this.saveData.settings.quality),this.soundManager=new Yp,this.soundManager.setVolumes(this.saveData.settings.masterVolume,this.saveData.settings.sfxVolume,this.saveData.settings.musicVolume),this.bulletSystem=new Kp(this.scene),this.weaponManager=new jp(this.camera,this.soundManager,this.bulletSystem,((n=this.saveData.loadout)==null?void 0:n.attachments)||{}),this.playerStats=new Jp(this.saveData.profile),this.playerController=new Qp(this.camera,this.renderer.domElement,this.soundManager),this.weaponManager.equipWeaponInSlot(0,this.saveData.loadout.primary),this.weaponManager.equipWeaponInSlot(1,this.saveData.loadout.secondary),this.levelGenerator=new em(this.scene),this.battleRoyale=new nm(this.scene),this.hud=new im,this.hud.hide(),this.touchControls=new sm(this.playerController,this.weaponManager,this.playerStats),this.menuUI=new rm(this.saveData,i=>this.startCampaign(i),()=>this.startBattleRoyale(),(i,r)=>this.weaponManager.equipWeaponInSlot(i,r),i=>this.applySettings(i),this.authManager),this.networkClient=new lm,this.setupLighting(),this.setupShootingInputs(),this.setupWindowResize(),this.clock=new ah,this.playerStats.onHurt=()=>{this.hud.flashDamage()},this.playerStats.onDeath=()=>{this.soundManager.playDefeat(),this.hud.showGameOver(!1,0,0,null,()=>this.restartCurrentMode(),()=>this.returnToMenu())},this.touchControls.onFireStart=()=>{this.handleFire()},this.applySettings(this.saveData.settings),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}applySettings(t){var e;t&&(this.saveData.settings={...this.saveData.settings,...t},this.soundManager&&this.soundManager.setVolumes(t.masterVolume??.8,t.sfxVolume??.9,t.musicVolume??.4),this.qualityManager&&t.quality&&this.qualityManager.setProfile(t.quality),t.fov&&this.camera&&(this.camera.fov=t.fov,this.camera.updateProjectionMatrix()),this.playerController&&(t.sensitivityDesktop!==void 0&&(this.playerController.sensitivityDesktop=t.sensitivityDesktop*.0015),t.sensitivityMobile!==void 0&&(this.playerController.sensitivityMobile=t.sensitivityMobile*.002),t.sensitivityADS!==void 0&&(this.playerController.sensitivityADS=t.sensitivityADS),t.gyroEnabled!==void 0&&(this.playerController.gyroEnabled=t.gyroEnabled),t.gyroSensitivity!==void 0&&(this.playerController.gyroSensitivity=t.gyroSensitivity)),this.touchControls&&((e=this.saveData.hudLayout)!=null&&e.preset)&&this.touchControls.applyLayout(this.saveData.hudLayout.preset))}setupLighting(){this.ambientLight=new sh(14544639,.6),this.scene.add(this.ambientLight),this.sunLight=new ih(16774634,1.2),this.sunLight.position.set(40,60,30),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=150;const t=50;this.sunLight.shadow.camera.left=-t,this.sunLight.shadow.camera.right=t,this.sunLight.shadow.camera.top=t,this.sunLight.shadow.camera.bottom=-t,this.scene.add(this.sunLight)}setupShootingInputs(){this.isMouseDown=!1,window.addEventListener("mousedown",t=>{if(this.mode!=="MENU"&&t.target===this.renderer.domElement){if(!this.playerController.isPointerLocked){this.playerController.lockPointer();return}t.button===0?(this.isMouseDown=!0,this.handleFire()):t.button===2&&this.weaponManager.setADS(!0)}}),window.addEventListener("mouseup",t=>{t.button===0?this.isMouseDown=!1:t.button===2&&this.weaponManager.setADS(!1)}),window.addEventListener("contextmenu",t=>t.preventDefault()),window.addEventListener("keydown",t=>{this.mode!=="MENU"&&(t.code==="Digit1"&&this.weaponManager.switchWeapon(0),t.code==="Digit2"&&this.weaponManager.switchWeapon(1),t.code==="Digit3"&&this.weaponManager.switchWeapon(2),t.code==="KeyR"&&this.weaponManager.reload(),t.code==="KeyH"&&this.playerStats.useMedkit(),(t.code==="KeyP"||t.code==="Escape")&&this.togglePause())})}handleFire(){if(this.mode==="MENU"||!this.playerStats.isAlive)return;let t=[],e=[];this.mode==="CAMPAIGN"?(t=this.levelGenerator.enemies,e=this.levelGenerator.obstacles.map(i=>i.mesh)):this.mode==="BATTLE_ROYALE"&&(t=this.battleRoyale.bots,e=this.battleRoyale.obstacles.map(i=>i.mesh));const n=this.weaponManager.shoot(t,e);n&&n.length>0&&n.forEach(i=>{this.hud.showHitmarker(i.isHeadshot),i.enemy.isAlive||(this.playerStats.kills++,i.isHeadshot&&this.playerStats.headshots++,this.hud.addKillFeedMessage("YOU",i.enemy.name||"Operative",i.isHeadshot),this.checkAchievements())})}startCampaign(t){this.mode="CAMPAIGN",this.currentLevelNumber=t,this.saveData.campaign.currentLevel=t,Jt.save(this.saveData),this.hud.show(),this.hud.hideGameOver(),this.menuUI.hide(),this.touchControls.show(),this.playerStats.resetForMatch(),this.bulletSystem.clear(),this.levelGenerator.generate(t,this.playerController),this.soundManager.startCombatMusic()}startBattleRoyale(){this.mode="BATTLE_ROYALE",this.hud.show(),this.hud.hideGameOver(),this.menuUI.hide(),this.touchControls.show(),this.playerStats.resetForMatch(),this.bulletSystem.clear(),this.battleRoyale.startMatch(this.playerController),this.soundManager.startCombatMusic()}restartCurrentMode(){this.mode==="CAMPAIGN"?this.startCampaign(this.currentLevelNumber):this.mode==="BATTLE_ROYALE"&&this.startBattleRoyale()}returnToMenu(){this.mode="MENU",this.hud.hide(),this.hud.hideGameOver(),this.touchControls.hide(),this.levelGenerator.cleanup(),this.battleRoyale.cleanup(),this.soundManager.stopCombatMusic(),this.playerController.unlockPointer(),this.menuUI.show()}togglePause(){this.returnToMenu()}applySettings(t){this.qualityManager.applyPreset(t.quality),this.soundManager.setVolumes(t.masterVolume,t.sfxVolume,t.musicVolume),this.playerController.sensitivityDesktop=t.sensitivityDesktop*.0015,this.playerController.sensitivityMobile=t.sensitivityMobile*.002}checkAchievements(){var n,i;const t=this.saveData.achievements;let e=!1;!t.FIRST_BLOOD.unlocked&&this.playerStats.kills>=1&&(t.FIRST_BLOOD.unlocked=!0,e=!0),!t.LEVEL_10.unlocked&&this.currentLevelNumber>=10&&(t.LEVEL_10.unlocked=!0,e=!0),!t.LEVEL_100.unlocked&&this.currentLevelNumber>=100&&(t.LEVEL_100.unlocked=!0,e=!0),!((n=t.HEADSHOT_HUNT)!=null&&n.unlocked)&&this.saveData.profile.headshots+this.playerStats.headshots>=25&&t.HEADSHOT_HUNT&&(t.HEADSHOT_HUNT.unlocked=!0,e=!0),!((i=t.THOUSAND_KILLS)!=null&&i.unlocked)&&this.saveData.profile.totalKills+this.playerStats.kills>=1e3&&t.THOUSAND_KILLS&&(t.THOUSAND_KILLS.unlocked=!0,e=!0),e&&Jt.save(this.saveData)}onCampaignVictory(){const t=this.levelGenerator.levelConfig,e=(t==null?void 0:t.rewardXP)||100,n=(t==null?void 0:t.rewardCredits)||80;this.playerStats.addXP(e),this.playerStats.credits+=n,this.saveData.profile.xp=this.playerStats.xp,this.saveData.profile.playerLevel=this.playerStats.level,this.saveData.profile.credits+=n,this.saveData.profile.totalKills+=this.playerStats.kills,this.saveData.profile.headshots+=this.playerStats.headshots,this.saveData.profile.matchesPlayed++,this.saveData.profile.matchesWon++;const i=Math.min(100,this.currentLevelNumber+1);this.currentLevelNumber>=this.saveData.campaign.unlockedLevel&&(this.saveData.campaign.unlockedLevel=i),this.saveData.campaign.currentLevel=i,Jt.save(this.saveData),this.soundManager.playVictory(),this.checkAchievements(),this.hud.showGameOver(!0,e,n,()=>this.startCampaign(this.currentLevelNumber+1),()=>this.startCampaign(this.currentLevelNumber),()=>this.returnToMenu())}onBattleRoyaleVictory(){this.saveData.profile.brWins++,this.saveData.profile.credits+=1e3,this.saveData.achievements.SURVIVOR.unlocked=!0,Jt.save(this.saveData),this.soundManager.playVictory(),this.hud.showGameOver(!0,800,1e3,null,()=>this.startBattleRoyale(),()=>this.returnToMenu())}setupWindowResize(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}animate(){requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1),e=performance.now();if(this.qualityManager.update(e),this.isMouseDown&&this.weaponManager.getCurrentWeapon().isAuto&&this.handleFire(),this.mode==="CAMPAIGN"){const n=this.levelGenerator.obstacles,i=this.playerController.update(t,n,this.playerStats.stamina);this.playerStats.update(t,i.isSprinting),this.weaponManager.update(t,i.isMoving,i.isSprinting);const r=this.levelGenerator.enemies;r.forEach(a=>{a.update(t,this.playerController,n,this.soundManager,this.bulletSystem)}),this.levelGenerator.updatePickups(this.playerController,this.soundManager),this.levelGenerator.checkCompletion(this.playerController)&&this.playerStats.isAlive&&this.onCampaignVictory(),this.hud.update(this.playerStats,this.weaponManager,this.playerController,r,null,this.levelGenerator.levelConfig,this.saveData.settings.showFPS?this.qualityManager.getMetrics():null)}else if(this.mode==="BATTLE_ROYALE"){const n=this.battleRoyale.obstacles,i=this.playerController.update(t,n,this.playerStats.stamina);this.playerStats.update(t,i.isSprinting),this.weaponManager.update(t,i.isMoving,i.isSprinting),this.battleRoyale.update(t,this.playerController,this.playerStats,this.soundManager,this.bulletSystem),this.battleRoyale.isVictory(this.playerStats)&&this.onBattleRoyaleVictory(),this.hud.update(this.playerStats,this.weaponManager,this.playerController,this.battleRoyale.bots,this.battleRoyale,null,this.saveData.settings.showFPS?this.qualityManager.getMetrics():null)}this.bulletSystem.update(t,this.camera),this.renderer.render(this.scene,this.camera)}}const sr="VKTRAP_AUTH_V1",hm={GUEST:"guest"};class um{constructor(){this.currentUser=null,this.isGuest=!1,this.authBackend=null,this._onAuthChange=null}onAuthChange(t){this._onAuthChange=t}_notifyChange(){this._onAuthChange&&this._onAuthChange(this.currentUser)}continueAsGuest(t=""){const e=this._getOrCreateGuestId();return this.currentUser={uid:e,displayName:t||"Operative_"+e.slice(-6).toUpperCase(),email:null,provider:hm.GUEST,isGuest:!0,avatarUrl:null,createdAt:Date.now()},this.isGuest=!0,this._saveLocal(),this._notifyChange(),this.currentUser}_getOrCreateGuestId(){let t=localStorage.getItem("VKTRAP_GUEST_ID");return t||(t="guest_"+Math.random().toString(36).slice(2,18),localStorage.setItem("VKTRAP_GUEST_ID",t)),t}async loginWithGoogle(){return{error:"GOOGLE_AUTH_NOT_CONFIGURED",message:"Google sign-in requires Firebase configuration. See AuthManager.js for setup instructions."}}async loginWithFacebook(){return{error:"FACEBOOK_AUTH_NOT_CONFIGURED",message:"Facebook sign-in requires Facebook App + Firebase configuration."}}async loginWithEmail(t,e){return{error:"EMAIL_AUTH_NOT_CONFIGURED",message:"Email sign-in requires Firebase configuration."}}restoreSession(){try{const t=localStorage.getItem(sr);if(t){const e=JSON.parse(t);if(e&&e.uid)return this.currentUser=e,this.isGuest=e.isGuest,this._notifyChange(),!0}}catch(t){console.warn("[Auth] Session restore failed:",t)}return!1}logout(){this.currentUser=null,this.isGuest=!1,localStorage.removeItem(sr),this._notifyChange()}isLoggedIn(){return this.currentUser!==null}_saveLocal(){this.currentUser&&localStorage.setItem(sr,JSON.stringify(this.currentUser))}}const dm=60*1e3;class fm{constructor(t){this.auth=t,this.isConfigured=!1,this.lastSyncAt=null,this.pendingSync=!1,this._syncTimer=null,this.isConfigured=!1}start(){this.isConfigured&&(this._syncTimer=setInterval(()=>this.trySyncToCloud(),dm))}stop(){this._syncTimer&&clearInterval(this._syncTimer)}async trySyncToCloud(){var t,e;if(!this.isConfigured||!((t=this.auth)!=null&&t.isLoggedIn())||(e=this.auth)!=null&&e.isGuest)return!1;if(!navigator.onLine)return this.pendingSync=!0,!1;try{const n=Jt.load(),i=this.auth.currentUser.uid;return console.log("[CloudSave] Would sync to cloud for user:",i,"(backend not configured)"),this.lastSyncAt=Date.now(),this.pendingSync=!1,!0}catch(n){return console.warn("[CloudSave] Sync failed:",n),this.pendingSync=!0,!1}}async tryLoadFromCloud(){var t,e;if(!this.isConfigured||!((t=this.auth)!=null&&t.isLoggedIn())||(e=this.auth)!=null&&e.isGuest||!navigator.onLine)return null;try{const n=this.auth.currentUser.uid;return console.log("[CloudSave] Would load from cloud for user:",n,"(backend not configured)"),null}catch(n){return console.warn("[CloudSave] Load failed:",n),null}}mergeWithLocal(t){var i,r,a,o,l;if(!t)return Jt.load();const e=Jt.load(),n={...e};((i=t.profile)==null?void 0:i.xp)>((r=e.profile)==null?void 0:r.xp)&&(n.profile=t.profile),((a=t.campaign)==null?void 0:a.unlockedLevel)>((o=e.campaign)==null?void 0:o.unlockedLevel)&&(n.campaign=t.campaign);for(const c in t.achievements)(l=t.achievements[c])!=null&&l.unlocked&&(n.achievements[c].unlocked=!0);return Jt.save(n),n}setupOnlineSync(){window.addEventListener("online",async()=>{this.pendingSync&&(console.log("[CloudSave] Back online — attempting pending sync..."),await this.trySyncToCloud())})}getStatus(){return{configured:this.isConfigured,lastSync:this.lastSyncAt,pending:this.pendingSync,online:navigator.onLine}}}window.addEventListener("DOMContentLoaded",()=>{"serviceWorker"in navigator&&window.location.protocol.startsWith("http")&&navigator.serviceWorker.register("./sw.js").then(d=>console.log("[PWA] SW registered:",d.scope)).catch(d=>console.warn("[PWA] SW error:",d));const s=document.getElementById("loading-bar-fill"),t=document.getElementById("loading-screen"),e=document.getElementById("loading-status-text"),n=[[20,"LOADING WEAPON SYSTEMS..."],[40,"CALIBRATING AI COMBAT ENGINE..."],[60,"GENERATING SECTOR TERRAIN..."],[80,"INITIALIZING AUDIO SUBSYSTEMS..."],[100,"READY TO DEPLOY"]];let i=0;const r=setInterval(()=>{if(i>=n.length){clearInterval(r);return}const[d,p]=n[i++];s&&(s.style.width=`${d}%`),e&&(e.textContent=p),d>=100&&(clearInterval(r),setTimeout(()=>{t&&(t.style.opacity="0",setTimeout(()=>{t.style.display="none",l()},400))},300))},75),a=new um,o=new fm(a);window.authManager=a,window.cloudSave=o;function l(){var T;if(a.restoreSession()){console.log("[Auth] Session restored for:",(T=a.currentUser)==null?void 0:T.displayName),c();return}const d=document.getElementById("login-screen");if(!d){c();return}d.style.display="flex";const p=document.getElementById("btn-guest");p&&p.addEventListener("click",()=>{a.continueAsGuest(),d.style.opacity="0",setTimeout(()=>{d.style.display="none",c()},300)});const g=document.getElementById("btn-google");g&&g.addEventListener("click",async()=>{const E=await a.loginWithGoogle();E!=null&&E.error&&alert(`Google sign-in is not yet configured. Use Guest mode to play.

To enable: See src/network/AuthManager.js for Firebase setup.`)});const v=document.getElementById("btn-facebook");v&&v.addEventListener("click",async()=>{const E=await a.loginWithFacebook();E!=null&&E.error&&alert("Facebook sign-in is not yet configured. Use Guest mode to play.")});const m=document.getElementById("btn-email-login");m&&m.addEventListener("click",async()=>{var A,C;const E=(A=document.getElementById("login-email"))==null?void 0:A.value,M=(C=document.getElementById("login-password"))==null?void 0:C.value;if(!E||!M){alert("Please enter email and password.");return}const w=await a.loginWithEmail(E,M);w!=null&&w.error&&alert(`Email sign-in is not yet configured. Use Guest mode to play.

To enable: See src/network/AuthManager.js for Firebase setup.`)});const u=document.getElementById("btn-email-register");u&&u.addEventListener("click",()=>{alert(`Account creation requires Firebase configuration.
See src/network/AuthManager.js for setup instructions.`)})}function c(){let d=Jt.load();d=Jt.checkDailyReset(d),Jt.save(d),o.setupOnlineSync(),o.start();try{window.gameEngine=new cm(a,o)}catch(p){console.error("[VK TRAP] GameEngine initialization failed:",p);const g=document.getElementById("loading-screen");g&&(g.style.display="flex",g.style.opacity="1",g.innerHTML=`
          <div style="color:#ff3344;font-family:sans-serif;text-align:center;padding:20px;">
            <h2>VK TRAP — SYSTEM ERROR</h2>
            <p>WebGL initialization failed or device unsupported.</p>
            <pre style="text-align:left;background:#0a0c10;padding:12px;border:1px solid #333;max-width:90vw;overflow:auto;font-size:0.75rem;">${p.message}</pre>
            <button onclick="window.location.reload()" style="padding:12px 24px;margin-top:20px;background:#ff3e55;color:#fff;border:none;border-radius:6px;font-size:1rem;cursor:pointer;">⟳ RELOAD</button>
          </div>
        `)}}const h=()=>{var d;try{const p=document.documentElement;p.requestFullscreen?p.requestFullscreen().catch(()=>{}):p.webkitRequestFullscreen&&p.webkitRequestFullscreen().catch(()=>{}),(d=screen.orientation)!=null&&d.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}},f=document.getElementById("btn-force-landscape");f&&(f.addEventListener("click",h),f.addEventListener("touchstart",h)),window.addEventListener("touchstart",()=>{var d;(d=screen.orientation)!=null&&d.lock&&screen.orientation.lock("landscape").catch(()=>{})},{once:!0})});
