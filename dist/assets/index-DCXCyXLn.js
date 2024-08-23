function qw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Kw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jg={exports:{}},eu={},Zg={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),Gw=Symbol.for("react.portal"),Qw=Symbol.for("react.fragment"),Yw=Symbol.for("react.strict_mode"),Xw=Symbol.for("react.profiler"),Jw=Symbol.for("react.provider"),Zw=Symbol.for("react.context"),eE=Symbol.for("react.forward_ref"),tE=Symbol.for("react.suspense"),nE=Symbol.for("react.memo"),rE=Symbol.for("react.lazy"),um=Symbol.iterator;function iE(t){return t===null||typeof t!="object"?null:(t=um&&t[um]||t["@@iterator"],typeof t=="function"?t:null)}var ey={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ty=Object.assign,ny={};function ts(t,e,n){this.props=t,this.context=e,this.refs=ny,this.updater=n||ey}ts.prototype.isReactComponent={};ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ry(){}ry.prototype=ts.prototype;function md(t,e,n){this.props=t,this.context=e,this.refs=ny,this.updater=n||ey}var gd=md.prototype=new ry;gd.constructor=md;ty(gd,ts.prototype);gd.isPureReactComponent=!0;var cm=Array.isArray,iy=Object.prototype.hasOwnProperty,yd={current:null},sy={key:!0,ref:!0,__self:!0,__source:!0};function oy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)iy.call(e,r)&&!sy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Fo,type:t,key:s,ref:o,props:i,_owner:yd.current}}function sE(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function oE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hm=/\/+/g;function sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oE(""+t.key):e.toString(36)}function za(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fo:case Gw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+sc(o,0):r,cm(i)?(n="",t!=null&&(n=t.replace(hm,"$&/")+"/"),za(i,e,n,"",function(h){return h})):i!=null&&(vd(i)&&(i=sE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",cm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+sc(s,l);o+=za(s,e,n,u,i)}else if(u=iE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+sc(s,l++),o+=za(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _a(t,e,n){if(t==null)return t;var r=[],i=0;return za(t,r,"","",function(s){return e.call(n,s,i++)}),r}function aE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},$a={transition:null},lE={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:$a,ReactCurrentOwner:yd};function ay(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:_a,forEach:function(t,e,n){_a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _a(t,function(){e++}),e},toArray:function(t){return _a(t,function(e){return e})||[]},only:function(t){if(!vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ts;ee.Fragment=Qw;ee.Profiler=Xw;ee.PureComponent=md;ee.StrictMode=Yw;ee.Suspense=tE;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lE;ee.act=ay;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ty({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)iy.call(e,u)&&!sy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Fo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:Zw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Jw,_context:t},t.Consumer=t};ee.createElement=oy;ee.createFactory=function(t){var e=oy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:eE,render:t}};ee.isValidElement=vd;ee.lazy=function(t){return{$$typeof:rE,_payload:{_status:-1,_result:t},_init:aE}};ee.memo=function(t,e){return{$$typeof:nE,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=$a.transition;$a.transition={};try{t()}finally{$a.transition=e}};ee.unstable_act=ay;ee.useCallback=function(t,e){return ct.current.useCallback(t,e)};ee.useContext=function(t){return ct.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ct.current.useEffect(t,e)};ee.useId=function(){return ct.current.useId()};ee.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ct.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};ee.useRef=function(t){return ct.current.useRef(t)};ee.useState=function(t){return ct.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ct.current.useTransition()};ee.version="18.3.1";Zg.exports=ee;var L=Zg.exports;const uE=Kw(L),cE=qw({__proto__:null,default:uE},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hE=L,dE=Symbol.for("react.element"),fE=Symbol.for("react.fragment"),pE=Object.prototype.hasOwnProperty,mE=hE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gE={key:!0,ref:!0,__self:!0,__source:!0};function ly(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pE.call(e,r)&&!gE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dE,type:t,key:s,ref:o,props:i,_owner:mE.current}}eu.Fragment=fE;eu.jsx=ly;eu.jsxs=ly;Jg.exports=eu;var O=Jg.exports,uy={exports:{}},St={},cy={exports:{}},hy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,H){var G=F.length;F.push(H);e:for(;0<G;){var ae=G-1>>>1,le=F[ae];if(0<i(le,H))F[ae]=H,F[G]=le,G=ae;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],G=F.pop();if(G!==H){F[0]=G;e:for(var ae=0,le=F.length,ve=le>>>1;ae<ve;){var Lt=2*(ae+1)-1,cn=F[Lt],hn=Lt+1,dn=F[hn];if(0>i(cn,G))hn<le&&0>i(dn,cn)?(F[ae]=dn,F[hn]=G,ae=hn):(F[ae]=cn,F[Lt]=G,ae=Lt);else if(hn<le&&0>i(dn,G))F[ae]=dn,F[hn]=G,ae=hn;else break e}}return H}function i(F,H){var G=F.sortIndex-H.sortIndex;return G!==0?G:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],d=1,p=null,m=3,I=!1,C=!1,P=!1,x=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(F){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=F)r(h),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(h)}}function D(F){if(P=!1,S(F),!C)if(n(u)!==null)C=!0,Un(M);else{var H=n(h);H!==null&&Ke(D,H.startTime-F)}}function M(F,H){C=!1,P&&(P=!1,T(y),y=-1),I=!0;var G=m;try{for(S(H),p=n(u);p!==null&&(!(p.expirationTime>H)||F&&!k());){var ae=p.callback;if(typeof ae=="function"){p.callback=null,m=p.priorityLevel;var le=ae(p.expirationTime<=H);H=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),S(H)}else r(u);p=n(u)}if(p!==null)var ve=!0;else{var Lt=n(h);Lt!==null&&Ke(D,Lt.startTime-H),ve=!1}return ve}finally{p=null,m=G,I=!1}}var B=!1,w=null,y=-1,_=5,E=-1;function k(){return!(t.unstable_now()-E<_)}function R(){if(w!==null){var F=t.unstable_now();E=F;var H=!0;try{H=w(!0,F)}finally{H?A():(B=!1,w=null)}}else B=!1}var A;if(typeof v=="function")A=function(){v(R)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,un=dt.port2;dt.port1.onmessage=R,A=function(){un.postMessage(null)}}else A=function(){x(R,0)};function Un(F){w=F,B||(B=!0,A())}function Ke(F,H){y=x(function(){F(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){C||I||(C=!0,Un(M))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(F){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var G=m;m=H;try{return F()}finally{m=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var G=m;m=F;try{return H()}finally{m=G}},t.unstable_scheduleCallback=function(F,H,G){var ae=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ae+G:ae):G=ae,F){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=G+le,F={id:d++,callback:H,priorityLevel:F,startTime:G,expirationTime:le,sortIndex:-1},G>ae?(F.sortIndex=G,e(h,F),n(u)===null&&F===n(h)&&(P?(T(y),y=-1):P=!0,Ke(D,G-ae))):(F.sortIndex=le,e(u,F),C||I||(C=!0,Un(M))),F},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(F){var H=m;return function(){var G=m;m=H;try{return F.apply(this,arguments)}finally{m=G}}}})(hy);cy.exports=hy;var yE=cy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vE=L,It=yE;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dy=new Set,so={};function ni(t,e){ji(t,e),ji(t+"Capture",e)}function ji(t,e){for(so[t]=e,t=0;t<e.length;t++)dy.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=Object.prototype.hasOwnProperty,_E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dm={},fm={};function wE(t){return Yc.call(fm,t)?!0:Yc.call(dm,t)?!1:_E.test(t)?fm[t]=!0:(dm[t]=!0,!1)}function EE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TE(t,e,n,r){if(e===null||typeof e>"u"||EE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_d,wd);He[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_d,wd);He[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_d,wd);He[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ed(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TE(e,n,i,r)&&(n=null),r||i===null?wE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vn=vE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),gi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),Td=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),fy=Symbol.for("react.provider"),py=Symbol.for("react.context"),Id=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),Zc=Symbol.for("react.suspense_list"),Sd=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),my=Symbol.for("react.offscreen"),pm=Symbol.iterator;function ks(t){return t===null||typeof t!="object"?null:(t=pm&&t[pm]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,oc;function Vs(t){if(oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);oc=e&&e[1]||""}return`
`+oc+t}var ac=!1;function lc(t,e){if(!t||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vs(t):""}function IE(t){switch(t.tag){case 5:return Vs(t.type);case 16:return Vs("Lazy");case 13:return Vs("Suspense");case 19:return Vs("SuspenseList");case 0:case 2:case 15:return t=lc(t.type,!1),t;case 11:return t=lc(t.type.render,!1),t;case 1:return t=lc(t.type,!0),t;default:return""}}function eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yi:return"Fragment";case gi:return"Portal";case Xc:return"Profiler";case Td:return"StrictMode";case Jc:return"Suspense";case Zc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case py:return(t.displayName||"Context")+".Consumer";case fy:return(t._context.displayName||"Context")+".Provider";case Id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sd:return e=t.displayName||null,e!==null?e:eh(t.type)||"Memo";case Kn:e=t._payload,t=t._init;try{return eh(t(e))}catch{}}return null}function SE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eh(e);case 8:return e===Td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AE(t){var e=gy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=AE(t))}function yy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function th(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vy(t,e){e=e.checked,e!=null&&Ed(t,"checked",e,!1)}function nh(t,e){vy(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rh(t,e.type,n):e.hasOwnProperty("defaultValue")&&rh(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rh(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ms=Array.isArray;function Ni(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Ms(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function _y(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ta,Ey=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kE=["Webkit","ms","Moz","O"];Object.keys(Hs).forEach(function(t){kE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hs[e]=Hs[t]})});function Ty(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hs.hasOwnProperty(t)&&Hs[t]?(""+e).trim():e+"px"}function Iy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ty(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var CE=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oh(t,e){if(e){if(CE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function ah(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lh=null;function Ad(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uh=null,xi=null,Oi=null;function _m(t){if(t=Bo(t)){if(typeof uh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=su(e),uh(t.stateNode,t.type,e))}}function Sy(t){xi?Oi?Oi.push(t):Oi=[t]:xi=t}function Ay(){if(xi){var t=xi,e=Oi;if(Oi=xi=null,_m(t),e)for(t=0;t<e.length;t++)_m(e[t])}}function ky(t,e){return t(e)}function Cy(){}var uc=!1;function Py(t,e,n){if(uc)return t(e,n);uc=!0;try{return ky(t,e,n)}finally{uc=!1,(xi!==null||Oi!==null)&&(Cy(),Ay())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var r=su(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var ch=!1;if(Pn)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){ch=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{ch=!1}function PE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(d){this.onError(d)}}var qs=!1,ul=null,cl=!1,hh=null,RE={onError:function(t){qs=!0,ul=t}};function NE(t,e,n,r,i,s,o,l,u){qs=!1,ul=null,PE.apply(RE,arguments)}function xE(t,e,n,r,i,s,o,l,u){if(NE.apply(this,arguments),qs){if(qs){var h=ul;qs=!1,ul=null}else throw Error(j(198));cl||(cl=!0,hh=h)}}function ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ry(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wm(t){if(ri(t)!==t)throw Error(j(188))}function OE(t){var e=t.alternate;if(!e){if(e=ri(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return wm(i),t;if(s===r)return wm(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Ny(t){return t=OE(t),t!==null?xy(t):null}function xy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xy(t);if(e!==null)return e;t=t.sibling}return null}var Oy=It.unstable_scheduleCallback,Em=It.unstable_cancelCallback,DE=It.unstable_shouldYield,bE=It.unstable_requestPaint,Pe=It.unstable_now,LE=It.unstable_getCurrentPriorityLevel,kd=It.unstable_ImmediatePriority,Dy=It.unstable_UserBlockingPriority,hl=It.unstable_NormalPriority,VE=It.unstable_LowPriority,by=It.unstable_IdlePriority,tu=null,Jt=null;function ME(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(tu,t,void 0,(t.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:jE,FE=Math.log,UE=Math.LN2;function jE(t){return t>>>=0,t===0?32:31-(FE(t)/UE|0)|0}var Ia=64,Sa=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Fs(l):(s&=o,s!==0&&(r=Fs(s)))}else o=n&~i,o!==0?r=Fs(o):s!==0&&(r=Fs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zt(e),i=1<<n,r|=t[n],e&=~i;return r}function BE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=BE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ly(){var t=Ia;return Ia<<=1,!(Ia&4194240)&&(Ia=64),t}function cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zt(e),t[e]=n}function $E(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function Vy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var My,Pd,Fy,Uy,jy,fh=!1,Aa=[],sr=null,or=null,ar=null,lo=new Map,uo=new Map,Qn=[],WE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tm(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function Ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Bo(e),e!==null&&Pd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HE(t,e,n,r,i){switch(e){case"focusin":return sr=Ps(sr,t,e,n,r,i),!0;case"dragenter":return or=Ps(or,t,e,n,r,i),!0;case"mouseover":return ar=Ps(ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return lo.set(s,Ps(lo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,uo.set(s,Ps(uo.get(s)||null,t,e,n,r,i)),!0}return!1}function By(t){var e=br(t.target);if(e!==null){var n=ri(e);if(n!==null){if(e=n.tag,e===13){if(e=Ry(n),e!==null){t.blockedOn=e,jy(t.priority,function(){Fy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ph(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);lh=r,n.target.dispatchEvent(r),lh=null}else return e=Bo(n),e!==null&&Pd(e),t.blockedOn=n,!1;e.shift()}return!0}function Im(t,e,n){Wa(t)&&n.delete(e)}function qE(){fh=!1,sr!==null&&Wa(sr)&&(sr=null),or!==null&&Wa(or)&&(or=null),ar!==null&&Wa(ar)&&(ar=null),lo.forEach(Im),uo.forEach(Im)}function Rs(t,e){t.blockedOn===e&&(t.blockedOn=null,fh||(fh=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,qE)))}function co(t){function e(i){return Rs(i,t)}if(0<Aa.length){Rs(Aa[0],t);for(var n=1;n<Aa.length;n++){var r=Aa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sr!==null&&Rs(sr,t),or!==null&&Rs(or,t),ar!==null&&Rs(ar,t),lo.forEach(e),uo.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)By(n),n.blockedOn===null&&Qn.shift()}var Di=Vn.ReactCurrentBatchConfig,fl=!0;function KE(t,e,n,r){var i=ue,s=Di.transition;Di.transition=null;try{ue=1,Rd(t,e,n,r)}finally{ue=i,Di.transition=s}}function GE(t,e,n,r){var i=ue,s=Di.transition;Di.transition=null;try{ue=4,Rd(t,e,n,r)}finally{ue=i,Di.transition=s}}function Rd(t,e,n,r){if(fl){var i=ph(t,e,n,r);if(i===null)wc(t,e,r,pl,n),Tm(t,r);else if(HE(i,t,e,n,r))r.stopPropagation();else if(Tm(t,r),e&4&&-1<WE.indexOf(t)){for(;i!==null;){var s=Bo(i);if(s!==null&&My(s),s=ph(t,e,n,r),s===null&&wc(t,e,r,pl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wc(t,e,r,null,n)}}var pl=null;function ph(t,e,n,r){if(pl=null,t=Ad(r),t=br(t),t!==null)if(e=ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ry(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pl=t,null}function zy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LE()){case kd:return 1;case Dy:return 4;case hl:case VE:return 16;case by:return 536870912;default:return 16}default:return 16}}var tr=null,Nd=null,Ha=null;function $y(){if(Ha)return Ha;var t,e=Nd,n=e.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ha=i.slice(t,1<r?1-r:void 0)}function qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ka(){return!0}function Sm(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ka:Sm,this.isPropagationStopped=Sm,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),e}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xd=At(ns),jo=Ee({},ns,{view:0,detail:0}),QE=At(jo),hc,dc,Ns,nu=Ee({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Od,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(hc=t.screenX-Ns.screenX,dc=t.screenY-Ns.screenY):dc=hc=0,Ns=t),hc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),Am=At(nu),YE=Ee({},nu,{dataTransfer:0}),XE=At(YE),JE=Ee({},jo,{relatedTarget:0}),fc=At(JE),ZE=Ee({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),eT=At(ZE),tT=Ee({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nT=At(tT),rT=Ee({},ns,{data:0}),km=At(rT),iT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oT[t])?!!e[t]:!1}function Od(){return aT}var lT=Ee({},jo,{key:function(t){if(t.key){var e=iT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Od,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uT=At(lT),cT=Ee({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cm=At(cT),hT=Ee({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Od}),dT=At(hT),fT=Ee({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),pT=At(fT),mT=Ee({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gT=At(mT),yT=[9,13,27,32],Dd=Pn&&"CompositionEvent"in window,Ks=null;Pn&&"documentMode"in document&&(Ks=document.documentMode);var vT=Pn&&"TextEvent"in window&&!Ks,Wy=Pn&&(!Dd||Ks&&8<Ks&&11>=Ks),Pm=" ",Rm=!1;function Hy(t,e){switch(t){case"keyup":return yT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vi=!1;function _T(t,e){switch(t){case"compositionend":return qy(e);case"keypress":return e.which!==32?null:(Rm=!0,Pm);case"textInput":return t=e.data,t===Pm&&Rm?null:t;default:return null}}function wT(t,e){if(vi)return t==="compositionend"||!Dd&&Hy(t,e)?(t=$y(),Ha=Nd=tr=null,vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wy&&e.locale!=="ko"?null:e.data;default:return null}}var ET={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ET[t.type]:e==="textarea"}function Ky(t,e,n,r){Sy(r),e=ml(e,"onChange"),0<e.length&&(n=new xd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Gs=null,ho=null;function TT(t){iv(t,0)}function ru(t){var e=Ei(t);if(yy(e))return t}function IT(t,e){if(t==="change")return e}var Gy=!1;if(Pn){var pc;if(Pn){var mc="oninput"in document;if(!mc){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),mc=typeof xm.oninput=="function"}pc=mc}else pc=!1;Gy=pc&&(!document.documentMode||9<document.documentMode)}function Om(){Gs&&(Gs.detachEvent("onpropertychange",Qy),ho=Gs=null)}function Qy(t){if(t.propertyName==="value"&&ru(ho)){var e=[];Ky(e,ho,t,Ad(t)),Py(TT,e)}}function ST(t,e,n){t==="focusin"?(Om(),Gs=e,ho=n,Gs.attachEvent("onpropertychange",Qy)):t==="focusout"&&Om()}function AT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(ho)}function kT(t,e){if(t==="click")return ru(e)}function CT(t,e){if(t==="input"||t==="change")return ru(e)}function PT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:PT;function fo(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yc.call(e,i)||!Wt(t[i],e[i]))return!1}return!0}function Dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bm(t,e){var n=Dm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function Yy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xy(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RT(t){var e=Xy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yy(n.ownerDocument.documentElement,n)){if(r!==null&&bd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bm(n,s);var o=bm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NT=Pn&&"documentMode"in document&&11>=document.documentMode,_i=null,mh=null,Qs=null,gh=!1;function Lm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gh||_i==null||_i!==ll(r)||(r=_i,"selectionStart"in r&&bd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qs&&fo(Qs,r)||(Qs=r,r=ml(mh,"onSelect"),0<r.length&&(e=new xd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_i)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wi={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},gc={},Jy={};Pn&&(Jy=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function iu(t){if(gc[t])return gc[t];if(!wi[t])return t;var e=wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jy)return gc[t]=e[n];return t}var Zy=iu("animationend"),ev=iu("animationiteration"),tv=iu("animationstart"),nv=iu("transitionend"),rv=new Map,Vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){rv.set(t,e),ni(e,[t])}for(var yc=0;yc<Vm.length;yc++){var vc=Vm[yc],xT=vc.toLowerCase(),OT=vc[0].toUpperCase()+vc.slice(1);Er(xT,"on"+OT)}Er(Zy,"onAnimationEnd");Er(ev,"onAnimationIteration");Er(tv,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(nv,"onTransitionEnd");ji("onMouseEnter",["mouseout","mouseover"]);ji("onMouseLeave",["mouseout","mouseover"]);ji("onPointerEnter",["pointerout","pointerover"]);ji("onPointerLeave",["pointerout","pointerover"]);ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function Mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,xE(r,e,void 0,t),t.currentTarget=null}function iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Mm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Mm(i,l,h),s=u}}}if(cl)throw t=hh,cl=!1,hh=null,t}function me(t,e){var n=e[Eh];n===void 0&&(n=e[Eh]=new Set);var r=t+"__bubble";n.has(r)||(sv(e,t,2,!1),n.add(r))}function _c(t,e,n){var r=0;e&&(r|=4),sv(n,t,r,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[Pa]){t[Pa]=!0,dy.forEach(function(n){n!=="selectionchange"&&(DT.has(n)||_c(n,!1,t),_c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,_c("selectionchange",!1,e))}}function sv(t,e,n,r){switch(zy(e)){case 1:var i=KE;break;case 4:i=GE;break;default:i=Rd}n=i.bind(null,e,n,t),i=void 0,!ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function wc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=br(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Py(function(){var h=s,d=Ad(n),p=[];e:{var m=rv.get(t);if(m!==void 0){var I=xd,C=t;switch(t){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":I=uT;break;case"focusin":C="focus",I=fc;break;case"focusout":C="blur",I=fc;break;case"beforeblur":case"afterblur":I=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=XE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=dT;break;case Zy:case ev:case tv:I=eT;break;case nv:I=pT;break;case"scroll":I=QE;break;case"wheel":I=gT;break;case"copy":case"cut":case"paste":I=nT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Cm}var P=(e&4)!==0,x=!P&&t==="scroll",T=P?m!==null?m+"Capture":null:m;P=[];for(var v=h,S;v!==null;){S=v;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,T!==null&&(D=ao(v,T),D!=null&&P.push(mo(v,D,S)))),x)break;v=v.return}0<P.length&&(m=new I(m,C,null,n,d),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==lh&&(C=n.relatedTarget||n.fromElement)&&(br(C)||C[Rn]))break e;if((I||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,I?(C=n.relatedTarget||n.toElement,I=h,C=C?br(C):null,C!==null&&(x=ri(C),C!==x||C.tag!==5&&C.tag!==6)&&(C=null)):(I=null,C=h),I!==C)){if(P=Am,D="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=Cm,D="onPointerLeave",T="onPointerEnter",v="pointer"),x=I==null?m:Ei(I),S=C==null?m:Ei(C),m=new P(D,v+"leave",I,n,d),m.target=x,m.relatedTarget=S,D=null,br(d)===h&&(P=new P(T,v+"enter",C,n,d),P.target=S,P.relatedTarget=x,D=P),x=D,I&&C)t:{for(P=I,T=C,v=0,S=P;S;S=di(S))v++;for(S=0,D=T;D;D=di(D))S++;for(;0<v-S;)P=di(P),v--;for(;0<S-v;)T=di(T),S--;for(;v--;){if(P===T||T!==null&&P===T.alternate)break t;P=di(P),T=di(T)}P=null}else P=null;I!==null&&Fm(p,m,I,P,!1),C!==null&&x!==null&&Fm(p,x,C,P,!0)}}e:{if(m=h?Ei(h):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var M=IT;else if(Nm(m))if(Gy)M=CT;else{M=AT;var B=ST}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=kT);if(M&&(M=M(t,h))){Ky(p,M,n,d);break e}B&&B(t,m,h),t==="focusout"&&(B=m._wrapperState)&&B.controlled&&m.type==="number"&&rh(m,"number",m.value)}switch(B=h?Ei(h):window,t){case"focusin":(Nm(B)||B.contentEditable==="true")&&(_i=B,mh=h,Qs=null);break;case"focusout":Qs=mh=_i=null;break;case"mousedown":gh=!0;break;case"contextmenu":case"mouseup":case"dragend":gh=!1,Lm(p,n,d);break;case"selectionchange":if(NT)break;case"keydown":case"keyup":Lm(p,n,d)}var w;if(Dd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else vi?Hy(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Wy&&n.locale!=="ko"&&(vi||y!=="onCompositionStart"?y==="onCompositionEnd"&&vi&&(w=$y()):(tr=d,Nd="value"in tr?tr.value:tr.textContent,vi=!0)),B=ml(h,y),0<B.length&&(y=new km(y,t,null,n,d),p.push({event:y,listeners:B}),w?y.data=w:(w=qy(n),w!==null&&(y.data=w)))),(w=vT?_T(t,n):wT(t,n))&&(h=ml(h,"onBeforeInput"),0<h.length&&(d=new km("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:h}),d.data=w))}iv(p,e)})}function mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ao(t,n),s!=null&&r.unshift(mo(t,s,i)),s=ao(t,e),s!=null&&r.push(mo(t,s,i))),t=t.return}return r}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=ao(n,s),u!=null&&o.unshift(mo(n,u,l))):i||(u=ao(n,s),u!=null&&o.push(mo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bT=/\r\n?/g,LT=/\u0000|\uFFFD/g;function Um(t){return(typeof t=="string"?t:""+t).replace(bT,`
`).replace(LT,"")}function Ra(t,e,n){if(e=Um(e),Um(t)!==e&&n)throw Error(j(425))}function gl(){}var yh=null,vh=null;function _h(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wh=typeof setTimeout=="function"?setTimeout:void 0,VT=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,MT=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(t){return jm.resolve(null).then(t).catch(FT)}:wh;function FT(t){setTimeout(function(){throw t})}function Ec(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),co(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);co(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),Yt="__reactFiber$"+rs,go="__reactProps$"+rs,Rn="__reactContainer$"+rs,Eh="__reactEvents$"+rs,UT="__reactListeners$"+rs,jT="__reactHandles$"+rs;function br(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bm(t);t!==null;){if(n=t[Yt])return n;t=Bm(t)}return e}t=n,n=t.parentNode}return null}function Bo(t){return t=t[Yt]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function su(t){return t[go]||null}var Th=[],Ti=-1;function Tr(t){return{current:t}}function ge(t){0>Ti||(t.current=Th[Ti],Th[Ti]=null,Ti--)}function fe(t,e){Ti++,Th[Ti]=t.current,t.current=e}var yr={},it=Tr(yr),mt=Tr(!1),Wr=yr;function Bi(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function yl(){ge(mt),ge(it)}function zm(t,e,n){if(it.current!==yr)throw Error(j(168));fe(it,e),fe(mt,n)}function ov(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,SE(t)||"Unknown",i));return Ee({},n,r)}function vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Wr=it.current,fe(it,t),fe(mt,mt.current),!0}function $m(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=ov(t,e,Wr),r.__reactInternalMemoizedMergedChildContext=t,ge(mt),ge(it),fe(it,t)):ge(mt),fe(mt,n)}var vn=null,ou=!1,Tc=!1;function av(t){vn===null?vn=[t]:vn.push(t)}function BT(t){ou=!0,av(t)}function Ir(){if(!Tc&&vn!==null){Tc=!0;var t=0,e=ue;try{var n=vn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,ou=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),Oy(kd,Ir),i}finally{ue=e,Tc=!1}}return null}var Ii=[],Si=0,_l=null,wl=0,kt=[],Ct=0,Hr=null,_n=1,wn="";function xr(t,e){Ii[Si++]=wl,Ii[Si++]=_l,_l=t,wl=e}function lv(t,e,n){kt[Ct++]=_n,kt[Ct++]=wn,kt[Ct++]=Hr,Hr=t;var r=_n;t=wn;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var s=32-zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_n=1<<32-zt(e)+i|n<<i|r,wn=s+t}else _n=1<<s|n<<i|r,wn=t}function Ld(t){t.return!==null&&(xr(t,1),lv(t,1,0))}function Vd(t){for(;t===_l;)_l=Ii[--Si],Ii[Si]=null,wl=Ii[--Si],Ii[Si]=null;for(;t===Hr;)Hr=kt[--Ct],kt[Ct]=null,wn=kt[--Ct],kt[Ct]=null,_n=kt[--Ct],kt[Ct]=null}var Tt=null,Et=null,ye=!1,jt=null;function uv(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,Et=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:_n,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,Et=null,!0):!1;default:return!1}}function Ih(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sh(t){if(ye){var e=Et;if(e){var n=e;if(!Wm(t,e)){if(Ih(t))throw Error(j(418));e=lr(n.nextSibling);var r=Tt;e&&Wm(t,e)?uv(r,n):(t.flags=t.flags&-4097|2,ye=!1,Tt=t)}}else{if(Ih(t))throw Error(j(418));t.flags=t.flags&-4097|2,ye=!1,Tt=t}}}function Hm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function Na(t){if(t!==Tt)return!1;if(!ye)return Hm(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_h(t.type,t.memoizedProps)),e&&(e=Et)){if(Ih(t))throw cv(),Error(j(418));for(;e;)uv(t,e),e=lr(e.nextSibling)}if(Hm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=Tt?lr(t.stateNode.nextSibling):null;return!0}function cv(){for(var t=Et;t;)t=lr(t.nextSibling)}function zi(){Et=Tt=null,ye=!1}function Md(t){jt===null?jt=[t]:jt.push(t)}var zT=Vn.ReactCurrentBatchConfig;function xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function xa(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qm(t){var e=t._init;return e(t._payload)}function hv(t){function e(T,v){if(t){var S=T.deletions;S===null?(T.deletions=[v],T.flags|=16):S.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=dr(T,v),T.index=0,T.sibling=null,T}function s(T,v,S){return T.index=S,t?(S=T.alternate,S!==null?(S=S.index,S<v?(T.flags|=2,v):S):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,v,S,D){return v===null||v.tag!==6?(v=Rc(S,T.mode,D),v.return=T,v):(v=i(v,S),v.return=T,v)}function u(T,v,S,D){var M=S.type;return M===yi?d(T,v,S.props.children,D,S.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Kn&&qm(M)===v.type)?(D=i(v,S.props),D.ref=xs(T,v,S),D.return=T,D):(D=Za(S.type,S.key,S.props,null,T.mode,D),D.ref=xs(T,v,S),D.return=T,D)}function h(T,v,S,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Nc(S,T.mode,D),v.return=T,v):(v=i(v,S.children||[]),v.return=T,v)}function d(T,v,S,D,M){return v===null||v.tag!==7?(v=jr(S,T.mode,D,M),v.return=T,v):(v=i(v,S),v.return=T,v)}function p(T,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Rc(""+v,T.mode,S),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wa:return S=Za(v.type,v.key,v.props,null,T.mode,S),S.ref=xs(T,null,v),S.return=T,S;case gi:return v=Nc(v,T.mode,S),v.return=T,v;case Kn:var D=v._init;return p(T,D(v._payload),S)}if(Ms(v)||ks(v))return v=jr(v,T.mode,S,null),v.return=T,v;xa(T,v)}return null}function m(T,v,S,D){var M=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:l(T,v,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case wa:return S.key===M?u(T,v,S,D):null;case gi:return S.key===M?h(T,v,S,D):null;case Kn:return M=S._init,m(T,v,M(S._payload),D)}if(Ms(S)||ks(S))return M!==null?null:d(T,v,S,D,null);xa(T,S)}return null}function I(T,v,S,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(S)||null,l(v,T,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case wa:return T=T.get(D.key===null?S:D.key)||null,u(v,T,D,M);case gi:return T=T.get(D.key===null?S:D.key)||null,h(v,T,D,M);case Kn:var B=D._init;return I(T,v,S,B(D._payload),M)}if(Ms(D)||ks(D))return T=T.get(S)||null,d(v,T,D,M,null);xa(v,D)}return null}function C(T,v,S,D){for(var M=null,B=null,w=v,y=v=0,_=null;w!==null&&y<S.length;y++){w.index>y?(_=w,w=null):_=w.sibling;var E=m(T,w,S[y],D);if(E===null){w===null&&(w=_);break}t&&w&&E.alternate===null&&e(T,w),v=s(E,v,y),B===null?M=E:B.sibling=E,B=E,w=_}if(y===S.length)return n(T,w),ye&&xr(T,y),M;if(w===null){for(;y<S.length;y++)w=p(T,S[y],D),w!==null&&(v=s(w,v,y),B===null?M=w:B.sibling=w,B=w);return ye&&xr(T,y),M}for(w=r(T,w);y<S.length;y++)_=I(w,T,y,S[y],D),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?y:_.key),v=s(_,v,y),B===null?M=_:B.sibling=_,B=_);return t&&w.forEach(function(k){return e(T,k)}),ye&&xr(T,y),M}function P(T,v,S,D){var M=ks(S);if(typeof M!="function")throw Error(j(150));if(S=M.call(S),S==null)throw Error(j(151));for(var B=M=null,w=v,y=v=0,_=null,E=S.next();w!==null&&!E.done;y++,E=S.next()){w.index>y?(_=w,w=null):_=w.sibling;var k=m(T,w,E.value,D);if(k===null){w===null&&(w=_);break}t&&w&&k.alternate===null&&e(T,w),v=s(k,v,y),B===null?M=k:B.sibling=k,B=k,w=_}if(E.done)return n(T,w),ye&&xr(T,y),M;if(w===null){for(;!E.done;y++,E=S.next())E=p(T,E.value,D),E!==null&&(v=s(E,v,y),B===null?M=E:B.sibling=E,B=E);return ye&&xr(T,y),M}for(w=r(T,w);!E.done;y++,E=S.next())E=I(w,T,y,E.value,D),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?y:E.key),v=s(E,v,y),B===null?M=E:B.sibling=E,B=E);return t&&w.forEach(function(R){return e(T,R)}),ye&&xr(T,y),M}function x(T,v,S,D){if(typeof S=="object"&&S!==null&&S.type===yi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case wa:e:{for(var M=S.key,B=v;B!==null;){if(B.key===M){if(M=S.type,M===yi){if(B.tag===7){n(T,B.sibling),v=i(B,S.props.children),v.return=T,T=v;break e}}else if(B.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Kn&&qm(M)===B.type){n(T,B.sibling),v=i(B,S.props),v.ref=xs(T,B,S),v.return=T,T=v;break e}n(T,B);break}else e(T,B);B=B.sibling}S.type===yi?(v=jr(S.props.children,T.mode,D,S.key),v.return=T,T=v):(D=Za(S.type,S.key,S.props,null,T.mode,D),D.ref=xs(T,v,S),D.return=T,T=D)}return o(T);case gi:e:{for(B=S.key;v!==null;){if(v.key===B)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(T,v.sibling),v=i(v,S.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=Nc(S,T.mode,D),v.return=T,T=v}return o(T);case Kn:return B=S._init,x(T,v,B(S._payload),D)}if(Ms(S))return C(T,v,S,D);if(ks(S))return P(T,v,S,D);xa(T,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,S),v.return=T,T=v):(n(T,v),v=Rc(S,T.mode,D),v.return=T,T=v),o(T)):n(T,v)}return x}var $i=hv(!0),dv=hv(!1),El=Tr(null),Tl=null,Ai=null,Fd=null;function Ud(){Fd=Ai=Tl=null}function jd(t){var e=El.current;ge(El),t._currentValue=e}function Ah(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bi(t,e){Tl=t,Fd=Ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Fd!==t)if(t={context:t,memoizedValue:e,next:null},Ai===null){if(Tl===null)throw Error(j(308));Ai=t,Tl.dependencies={lanes:0,firstContext:t}}else Ai=Ai.next=t;return e}var Lr=null;function Bd(t){Lr===null?Lr=[t]:Lr.push(t)}function fv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nn(t,r)}function Nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gn=!1;function zd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nn(t,n)}return i=r.interleaved,i===null?(e.next=e,Bd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nn(t,n)}function Ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cd(t,n)}}function Km(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,r){var i=t.updateQueue;Gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=h:l.next=h,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=h=u=null,l=s;do{var m=l.lane,I=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,P=l;switch(m=e,I=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){p=C.call(I,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,m=typeof C=="function"?C.call(I,p,m):C,m==null)break e;p=Ee({},p,m);break e;case 2:Gn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else I={eventTime:I,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(h=d=I,u=p):d=d.next=I,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=p}}function Gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var zo={},Zt=Tr(zo),yo=Tr(zo),vo=Tr(zo);function Vr(t){if(t===zo)throw Error(j(174));return t}function $d(t,e){switch(fe(vo,e),fe(yo,t),fe(Zt,zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sh(e,t)}ge(Zt),fe(Zt,e)}function Wi(){ge(Zt),ge(yo),ge(vo)}function mv(t){Vr(vo.current);var e=Vr(Zt.current),n=sh(e,t.type);e!==n&&(fe(yo,t),fe(Zt,n))}function Wd(t){yo.current===t&&(ge(Zt),ge(yo))}var _e=Tr(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function Hd(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var Ga=Vn.ReactCurrentDispatcher,Sc=Vn.ReactCurrentBatchConfig,qr=0,we=null,Oe=null,Me=null,Al=!1,Ys=!1,_o=0,$T=0;function Xe(){throw Error(j(321))}function qd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function Kd(t,e,n,r,i,s){if(qr=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ga.current=t===null||t.memoizedState===null?KT:GT,t=n(r,i),Ys){s=0;do{if(Ys=!1,_o=0,25<=s)throw Error(j(301));s+=1,Me=Oe=null,e.updateQueue=null,Ga.current=QT,t=n(r,i)}while(Ys)}if(Ga.current=kl,e=Oe!==null&&Oe.next!==null,qr=0,Me=Oe=we=null,Al=!1,e)throw Error(j(300));return t}function Gd(){var t=_o!==0;return _o=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?we.memoizedState=Me=t:Me=Me.next=t,Me}function bt(){if(Oe===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Me===null?we.memoizedState:Me.next;if(e!==null)Me=e,Oe=t;else{if(t===null)throw Error(j(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Me===null?we.memoizedState=Me=t:Me=Me.next=t}return Me}function wo(t,e){return typeof e=="function"?e(t):e}function Ac(t){var e=bt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var d=h.lane;if((qr&d)===d)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:d,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,we.lanes|=d,Kr|=d}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Wt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,Kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=bt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function gv(){}function yv(t,e){var n=we,r=bt(),i=e(),s=!Wt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,Qd(wv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Eo(9,_v.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(j(349));qr&30||vv(n,e,i)}return i}function vv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _v(t,e,n,r){e.value=n,e.getSnapshot=r,Ev(e)&&Tv(t)}function wv(t,e,n){return n(function(){Ev(e)&&Tv(t)})}function Ev(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function Tv(t){var e=Nn(t,1);e!==null&&$t(e,t,1,-1)}function Qm(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=t,t=t.dispatch=qT.bind(null,we,t),[e.memoizedState,t]}function Eo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Iv(){return bt().memoizedState}function Qa(t,e,n,r){var i=Qt();we.flags|=t,i.memoizedState=Eo(1|e,n,void 0,r===void 0?null:r)}function au(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&qd(r,o.deps)){i.memoizedState=Eo(e,n,s,r);return}}we.flags|=t,i.memoizedState=Eo(1|e,n,s,r)}function Ym(t,e){return Qa(8390656,8,t,e)}function Qd(t,e){return au(2048,8,t,e)}function Sv(t,e){return au(4,2,t,e)}function Av(t,e){return au(4,4,t,e)}function kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cv(t,e,n){return n=n!=null?n.concat([t]):null,au(4,4,kv.bind(null,e,t),n)}function Yd(){}function Pv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Rv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Nv(t,e,n){return qr&21?(Wt(n,e)||(n=Ly(),we.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function WT(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Sc.transition;Sc.transition={};try{t(!1),e()}finally{ue=n,Sc.transition=r}}function xv(){return bt().memoizedState}function HT(t,e,n){var r=hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ov(t))Dv(e,n);else if(n=fv(t,e,n,r),n!==null){var i=ut();$t(n,t,r,i),bv(n,e,r)}}function qT(t,e,n){var r=hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ov(t))Dv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Wt(l,o)){var u=e.interleaved;u===null?(i.next=i,Bd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=fv(t,e,i,r),n!==null&&(i=ut(),$t(n,t,r,i),bv(n,e,r))}}function Ov(t){var e=t.alternate;return t===we||e!==null&&e===we}function Dv(t,e){Ys=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function bv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cd(t,n)}}var kl={readContext:Dt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},KT={readContext:Dt,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:Ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4194308,4,kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qa(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=HT.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:Yd,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=WT.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=Qt();if(ye){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Fe===null)throw Error(j(349));qr&30||vv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ym(wv.bind(null,r,s,t),[t]),r.flags|=2048,Eo(9,_v.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qt(),e=Fe.identifierPrefix;if(ye){var n=wn,r=_n;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$T++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GT={readContext:Dt,useCallback:Pv,useContext:Dt,useEffect:Qd,useImperativeHandle:Cv,useInsertionEffect:Sv,useLayoutEffect:Av,useMemo:Rv,useReducer:Ac,useRef:Iv,useState:function(){return Ac(wo)},useDebugValue:Yd,useDeferredValue:function(t){var e=bt();return Nv(e,Oe.memoizedState,t)},useTransition:function(){var t=Ac(wo)[0],e=bt().memoizedState;return[t,e]},useMutableSource:gv,useSyncExternalStore:yv,useId:xv,unstable_isNewReconciler:!1},QT={readContext:Dt,useCallback:Pv,useContext:Dt,useEffect:Qd,useImperativeHandle:Cv,useInsertionEffect:Sv,useLayoutEffect:Av,useMemo:Rv,useReducer:kc,useRef:Iv,useState:function(){return kc(wo)},useDebugValue:Yd,useDeferredValue:function(t){var e=bt();return Oe===null?e.memoizedState=t:Nv(e,Oe.memoizedState,t)},useTransition:function(){var t=kc(wo)[0],e=bt().memoizedState;return[t,e]},useMutableSource:gv,useSyncExternalStore:yv,useId:xv,unstable_isNewReconciler:!1};function Ft(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lu={isMounted:function(t){return(t=t._reactInternals)?ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=hr(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&($t(e,t,i,r),Ka(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=hr(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&($t(e,t,i,r),Ka(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=hr(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ur(t,i,r),e!==null&&($t(e,t,r,n),Ka(e,t,r))}};function Xm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fo(n,r)||!fo(i,s):!0}function Lv(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=gt(e)?Wr:it.current,r=e.contextTypes,s=(r=r!=null)?Bi(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lu.enqueueReplaceState(e,e.state,null)}function Ch(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},zd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=gt(e)?Wr:it.current,i.context=Bi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lu.enqueueReplaceState(i,i.state,null),Il(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hi(t,e){try{var n="",r=e;do n+=IE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var YT=typeof WeakMap=="function"?WeakMap:Map;function Vv(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Pl||(Pl=!0,Fh=r),Ph(t,e)},n}function Mv(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ph(t,e),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new YT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=cI.bind(null,t,e,n),e.then(t,t))}function e0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function t0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var XT=Vn.ReactCurrentOwner,pt=!1;function lt(t,e,n,r){e.child=t===null?dv(e,null,n,r):$i(e,t.child,n,r)}function n0(t,e,n,r,i){n=n.render;var s=e.ref;return bi(e,i),r=Kd(t,e,n,r,s,i),n=Gd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(ye&&n&&Ld(e),e.flags|=1,lt(t,e,r,i),e.child)}function r0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Fv(t,e,s,r,i)):(t=Za(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(o,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Fv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fo(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,xn(t,e,i)}return Rh(t,e,n,r,i)}function Uv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Ci,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Ci,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(Ci,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(Ci,wt),wt|=r;return lt(t,e,i,n),e.child}function jv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rh(t,e,n,r,i){var s=gt(n)?Wr:it.current;return s=Bi(e,s),bi(e,i),n=Kd(t,e,n,r,s,i),r=Gd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(ye&&r&&Ld(e),e.flags|=1,lt(t,e,n,i),e.child)}function i0(t,e,n,r,i){if(gt(n)){var s=!0;vl(e)}else s=!1;if(bi(e,i),e.stateNode===null)Ya(t,e),Lv(e,n,r),Ch(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Dt(h):(h=gt(n)?Wr:it.current,h=Bi(e,h));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Jm(e,o,r,h),Gn=!1;var m=e.memoizedState;o.state=m,Il(e,r,o,i),u=e.memoizedState,l!==r||m!==u||mt.current||Gn?(typeof d=="function"&&(kh(e,n,d,r),u=e.memoizedState),(l=Gn||Xm(e,n,l,r,m,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,pv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ft(e.type,l),o.props=h,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=gt(n)?Wr:it.current,u=Bi(e,u));var I=n.getDerivedStateFromProps;(d=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Jm(e,o,r,u),Gn=!1,m=e.memoizedState,o.state=m,Il(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||mt.current||Gn?(typeof I=="function"&&(kh(e,n,I,r),C=e.memoizedState),(h=Gn||Xm(e,n,h,r,m,C,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Nh(t,e,n,r,s,i)}function Nh(t,e,n,r,i,s){jv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$m(e,n,!1),xn(t,e,s);r=e.stateNode,XT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$i(e,t.child,null,s),e.child=$i(e,null,l,s)):lt(t,e,l,s),e.memoizedState=r.state,i&&$m(e,n,!0),e.child}function Bv(t){var e=t.stateNode;e.pendingContext?zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zm(t,e.context,!1),$d(t,e.containerInfo)}function s0(t,e,n,r,i){return zi(),Md(i),e.flags|=256,lt(t,e,n,r),e.child}var xh={dehydrated:null,treeContext:null,retryLane:0};function Oh(t){return{baseLanes:t,cachePool:null,transitions:null}}function zv(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(_e,i&1),t===null)return Sh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hu(o,r,0,null),t=jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Oh(n),e.memoizedState=xh,t):Xd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return JT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=dr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=dr(l,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Oh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xh,r}return s=t.child,t=s.sibling,r=dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xd(t,e){return e=hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oa(t,e,n,r){return r!==null&&Md(r),$i(e,t.child,null,n),t=Xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function JT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Cc(Error(j(422))),Oa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=hu({mode:"visible",children:r.children},i,0,null),s=jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$i(e,t.child,null,o),e.child.memoizedState=Oh(o),e.memoizedState=xh,s);if(!(e.mode&1))return Oa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Cc(s,r,void 0),Oa(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nn(t,i),$t(r,t,i,-1))}return rf(),r=Cc(Error(j(421))),Oa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=lr(i.nextSibling),Tt=e,ye=!0,jt=null,t!==null&&(kt[Ct++]=_n,kt[Ct++]=wn,kt[Ct++]=Hr,_n=t.id,wn=t.overflow,Hr=e),e=Xd(e,r.children),e.flags|=4096,e)}function o0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ah(t.return,e,n)}function Pc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function $v(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&o0(t,n,e);else if(t.tag===19)o0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Pc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Pc(e,!0,n,null,s);break;case"together":Pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ya(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ZT(t,e,n){switch(e.tag){case 3:Bv(e),zi();break;case 5:mv(e);break;case 1:gt(e.type)&&vl(e);break;case 4:$d(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(El,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?zv(t,e,n):(fe(_e,_e.current&1),t=xn(t,e,n),t!==null?t.sibling:null);fe(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return $v(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,Uv(t,e,n)}return xn(t,e,n)}var Wv,Dh,Hv,qv;Wv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dh=function(){};Hv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vr(Zt.current);var s=null;switch(n){case"input":i=th(t,i),r=th(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=ih(t,i),r=ih(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=gl)}oh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(so.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(so.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};qv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Os(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eI(t,e,n){var r=e.pendingProps;switch(Vd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return gt(e.type)&&yl(),Je(e),null;case 3:return r=e.stateNode,Wi(),ge(mt),ge(it),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(Bh(jt),jt=null))),Dh(t,e),Je(e),null;case 5:Wd(e);var i=Vr(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)Hv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Je(e),null}if(t=Vr(Zt.current),Na(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yt]=e,r[go]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Us.length;i++)me(Us[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":mm(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":ym(r,s),me("invalid",r)}oh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ra(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ra(r.textContent,l,t),i=["children",""+l]):so.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Ea(r),gm(r,s,!0);break;case"textarea":Ea(r),vm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yt]=e,t[go]=r,Wv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ah(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Us.length;i++)me(Us[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":mm(t,r),i=th(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),me("invalid",t);break;case"textarea":ym(t,r),i=ih(t,r),me("invalid",t);break;default:i=r}oh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Iy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ey(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&oo(t,u):typeof u=="number"&&oo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(so.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Ed(t,s,u,o))}switch(n){case"input":Ea(t),gm(t,r,!1);break;case"textarea":Ea(t),vm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ni(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)qv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Vr(vo.current),Vr(Zt.current),Na(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:Ra(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ra(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=e,e.stateNode=r}return Je(e),null;case 13:if(ge(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&Et!==null&&e.mode&1&&!(e.flags&128))cv(),zi(),e.flags|=98560,s=!1;else if(s=Na(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Yt]=e}else zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else jt!==null&&(Bh(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?be===0&&(be=3):rf())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return Wi(),Dh(t,e),t===null&&po(e.stateNode.containerInfo),Je(e),null;case 10:return jd(e.type._context),Je(e),null;case 17:return gt(e.type)&&yl(),Je(e),null;case 19:if(ge(_e),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Os(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sl(t),o!==null){for(e.flags|=128,Os(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>qi&&(e.flags|=128,r=!0,Os(s,!1),e.lanes=4194304)}else{if(!r)if(t=Sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Je(e),null}else 2*Pe()-s.renderingStartTime>qi&&n!==1073741824&&(e.flags|=128,r=!0,Os(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=_e.current,fe(_e,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return nf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function tI(t,e){switch(Vd(e),e.tag){case 1:return gt(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wi(),ge(mt),ge(it),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wd(e),null;case 13:if(ge(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(_e),null;case 4:return Wi(),null;case 10:return jd(e.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var Da=!1,tt=!1,nI=typeof WeakSet=="function"?WeakSet:Set,$=null;function ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function bh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var a0=!1;function rI(t,e){if(yh=fl,t=Xy(),bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,d=0,p=t,m=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++d===r&&(u=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vh={focusedElem:t,selectionRange:n},fl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,x=C.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:Ft(e.type,P),x);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){Se(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return C=a0,a0=!1,C}function Xs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&bh(e,n,s)}i=i.next}while(i!==r)}}function uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Kv(t){var e=t.alternate;e!==null&&(t.alternate=null,Kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yt],delete e[go],delete e[Eh],delete e[UT],delete e[jT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gv(t){return t.tag===5||t.tag===3||t.tag===4}function l0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(r!==4&&(t=t.child,t!==null))for(Vh(t,e,n),t=t.sibling;t!==null;)Vh(t,e,n),t=t.sibling}function Mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}var je=null,Ut=!1;function $n(t,e,n){for(n=n.child;n!==null;)Qv(t,e,n),n=n.sibling}function Qv(t,e,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:tt||ki(n,e);case 6:var r=je,i=Ut;je=null,$n(t,e,n),je=r,Ut=i,je!==null&&(Ut?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Ut?(t=je,n=n.stateNode,t.nodeType===8?Ec(t.parentNode,n):t.nodeType===1&&Ec(t,n),co(t)):Ec(je,n.stateNode));break;case 4:r=je,i=Ut,je=n.stateNode.containerInfo,Ut=!0,$n(t,e,n),je=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bh(n,e,o),i=i.next}while(i!==r)}$n(t,e,n);break;case 1:if(!tt&&(ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}$n(t,e,n);break;case 21:$n(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,$n(t,e,n),tt=r):$n(t,e,n);break;default:$n(t,e,n)}}function u0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nI),e.forEach(function(r){var i=dI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,Ut=!1;break e;case 3:je=l.stateNode.containerInfo,Ut=!0;break e;case 4:je=l.stateNode.containerInfo,Ut=!0;break e}l=l.return}if(je===null)throw Error(j(160));Qv(s,o,i),je=null,Ut=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Se(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yv(e,t),e=e.sibling}function Yv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Kt(t),r&4){try{Xs(3,t,t.return),uu(3,t)}catch(P){Se(t,t.return,P)}try{Xs(5,t,t.return)}catch(P){Se(t,t.return,P)}}break;case 1:Mt(e,t),Kt(t),r&512&&n!==null&&ki(n,n.return);break;case 5:if(Mt(e,t),Kt(t),r&512&&n!==null&&ki(n,n.return),t.flags&32){var i=t.stateNode;try{oo(i,"")}catch(P){Se(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&vy(i,s),ah(l,o);var h=ah(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?Iy(i,p):d==="dangerouslySetInnerHTML"?Ey(i,p):d==="children"?oo(i,p):Ed(i,d,p,h)}switch(l){case"input":nh(i,s);break;case"textarea":_y(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Ni(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ni(i,!!s.multiple,s.defaultValue,!0):Ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[go]=s}catch(P){Se(t,t.return,P)}}break;case 6:if(Mt(e,t),Kt(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Se(t,t.return,P)}}break;case 3:if(Mt(e,t),Kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(P){Se(t,t.return,P)}break;case 4:Mt(e,t),Kt(t);break;case 13:Mt(e,t),Kt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ef=Pe())),r&4&&u0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(h=tt)||d,Mt(e,t),tt=h):Mt(e,t),Kt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(p=$=d;$!==null;){switch(m=$,I=m.child,m.tag){case 0:case 11:case 14:case 15:Xs(4,m,m.return);break;case 1:ki(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(P){Se(r,n,P)}}break;case 5:ki(m,m.return);break;case 22:if(m.memoizedState!==null){h0(p);continue}}I!==null?(I.return=m,$=I):h0(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ty("display",o))}catch(P){Se(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(P){Se(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mt(e,t),Kt(t),r&4&&u0(t);break;case 21:break;default:Mt(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gv(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oo(i,""),r.flags&=-33);var s=l0(t);Mh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=l0(t);Vh(t,l,o);break;default:throw Error(j(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iI(t,e,n){$=t,Xv(t)}function Xv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Da;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=Da;var h=tt;if(Da=o,(tt=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?d0(i):u!==null?(u.return=o,$=u):d0(i);for(;s!==null;)$=s,Xv(s),s=s.sibling;$=i,Da=l,tt=h}c0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):c0(t)}}function c0(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||uu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var d=h.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&co(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}tt||e.flags&512&&Lh(e)}catch(m){Se(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function h0(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function d0(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uu(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Se(e,i,u)}}var s=e.return;try{Lh(e)}catch(u){Se(e,s,u)}break;case 5:var o=e.return;try{Lh(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var sI=Math.ceil,Cl=Vn.ReactCurrentDispatcher,Jd=Vn.ReactCurrentOwner,Nt=Vn.ReactCurrentBatchConfig,ie=0,Fe=null,Ne=null,$e=0,wt=0,Ci=Tr(0),be=0,To=null,Kr=0,cu=0,Zd=0,Js=null,ft=null,ef=0,qi=1/0,gn=null,Pl=!1,Fh=null,cr=null,ba=!1,nr=null,Rl=0,Zs=0,Uh=null,Xa=-1,Ja=0;function ut(){return ie&6?Pe():Xa!==-1?Xa:Xa=Pe()}function hr(t){return t.mode&1?ie&2&&$e!==0?$e&-$e:zT.transition!==null?(Ja===0&&(Ja=Ly()),Ja):(t=ue,t!==0||(t=window.event,t=t===void 0?16:zy(t.type)),t):1}function $t(t,e,n,r){if(50<Zs)throw Zs=0,Uh=null,Error(j(185));Uo(t,n,r),(!(ie&2)||t!==Fe)&&(t===Fe&&(!(ie&2)&&(cu|=n),be===4&&Yn(t,$e)),yt(t,r),n===1&&ie===0&&!(e.mode&1)&&(qi=Pe()+500,ou&&Ir()))}function yt(t,e){var n=t.callbackNode;zE(t,e);var r=dl(t,t===Fe?$e:0);if(r===0)n!==null&&Em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Em(n),e===1)t.tag===0?BT(f0.bind(null,t)):av(f0.bind(null,t)),MT(function(){!(ie&6)&&Ir()}),n=null;else{switch(Vy(r)){case 1:n=kd;break;case 4:n=Dy;break;case 16:n=hl;break;case 536870912:n=by;break;default:n=hl}n=s2(n,Jv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jv(t,e){if(Xa=-1,Ja=0,ie&6)throw Error(j(327));var n=t.callbackNode;if(Li()&&t.callbackNode!==n)return null;var r=dl(t,t===Fe?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nl(t,r);else{e=r;var i=ie;ie|=2;var s=e2();(Fe!==t||$e!==e)&&(gn=null,qi=Pe()+500,Ur(t,e));do try{lI();break}catch(l){Zv(t,l)}while(!0);Ud(),Cl.current=s,ie=i,Ne!==null?e=0:(Fe=null,$e=0,e=be)}if(e!==0){if(e===2&&(i=dh(t),i!==0&&(r=i,e=jh(t,i))),e===1)throw n=To,Ur(t,0),Yn(t,r),yt(t,Pe()),n;if(e===6)Yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!oI(i)&&(e=Nl(t,r),e===2&&(s=dh(t),s!==0&&(r=s,e=jh(t,s))),e===1))throw n=To,Ur(t,0),Yn(t,r),yt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Or(t,ft,gn);break;case 3:if(Yn(t,r),(r&130023424)===r&&(e=ef+500-Pe(),10<e)){if(dl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wh(Or.bind(null,t,ft,gn),e);break}Or(t,ft,gn);break;case 4:if(Yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sI(r/1960))-r,10<r){t.timeoutHandle=wh(Or.bind(null,t,ft,gn),r);break}Or(t,ft,gn);break;case 5:Or(t,ft,gn);break;default:throw Error(j(329))}}}return yt(t,Pe()),t.callbackNode===n?Jv.bind(null,t):null}function jh(t,e){var n=Js;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=ft,ft=n,e!==null&&Bh(e)),t}function Bh(t){ft===null?ft=t:ft.push.apply(ft,t)}function oI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yn(t,e){for(e&=~Zd,e&=~cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zt(e),r=1<<n;t[n]=-1,e&=~r}}function f0(t){if(ie&6)throw Error(j(327));Li();var e=dl(t,0);if(!(e&1))return yt(t,Pe()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var r=dh(t);r!==0&&(e=r,n=jh(t,r))}if(n===1)throw n=To,Ur(t,0),Yn(t,e),yt(t,Pe()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,ft,gn),yt(t,Pe()),null}function tf(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(qi=Pe()+500,ou&&Ir())}}function Gr(t){nr!==null&&nr.tag===0&&!(ie&6)&&Li();var e=ie;ie|=1;var n=Nt.transition,r=ue;try{if(Nt.transition=null,ue=1,t)return t()}finally{ue=r,Nt.transition=n,ie=e,!(ie&6)&&Ir()}}function nf(){wt=Ci.current,ge(Ci)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VT(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Vd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yl();break;case 3:Wi(),ge(mt),ge(it),Hd();break;case 5:Wd(r);break;case 4:Wi();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:jd(r.type._context);break;case 22:case 23:nf()}n=n.return}if(Fe=t,Ne=t=dr(t.current,null),$e=wt=e,be=0,To=null,Zd=cu=Kr=0,ft=Js=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function Zv(t,e){do{var n=Ne;try{if(Ud(),Ga.current=kl,Al){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Al=!1}if(qr=0,Me=Oe=we=null,Ys=!1,_o=0,Jd.current=null,n===null||n.return===null){be=1,To=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=$e,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var I=e0(o);if(I!==null){I.flags&=-257,t0(I,o,l,s,e),I.mode&1&&Zm(s,h,e),e=I,u=h;var C=e.updateQueue;if(C===null){var P=new Set;P.add(u),e.updateQueue=P}else C.add(u);break e}else{if(!(e&1)){Zm(s,h,e),rf();break e}u=Error(j(426))}}else if(ye&&l.mode&1){var x=e0(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),t0(x,o,l,s,e),Md(Hi(u,l));break e}}s=u=Hi(u,l),be!==4&&(be=2),Js===null?Js=[s]:Js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=Vv(s,u,e);Km(s,T);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(cr===null||!cr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=Mv(s,l,e);Km(s,D);break e}}s=s.return}while(s!==null)}n2(n)}catch(M){e=M,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function e2(){var t=Cl.current;return Cl.current=kl,t===null?kl:t}function rf(){(be===0||be===3||be===2)&&(be=4),Fe===null||!(Kr&268435455)&&!(cu&268435455)||Yn(Fe,$e)}function Nl(t,e){var n=ie;ie|=2;var r=e2();(Fe!==t||$e!==e)&&(gn=null,Ur(t,e));do try{aI();break}catch(i){Zv(t,i)}while(!0);if(Ud(),ie=n,Cl.current=r,Ne!==null)throw Error(j(261));return Fe=null,$e=0,be}function aI(){for(;Ne!==null;)t2(Ne)}function lI(){for(;Ne!==null&&!DE();)t2(Ne)}function t2(t){var e=i2(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?n2(t):Ne=e,Jd.current=null}function n2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tI(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Ne=null;return}}else if(n=eI(n,e,wt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);be===0&&(be=5)}function Or(t,e,n){var r=ue,i=Nt.transition;try{Nt.transition=null,ue=1,uI(t,e,n,r)}finally{Nt.transition=i,ue=r}return null}function uI(t,e,n,r){do Li();while(nr!==null);if(ie&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($E(t,s),t===Fe&&(Ne=Fe=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,s2(hl,function(){return Li(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nt.transition,Nt.transition=null;var o=ue;ue=1;var l=ie;ie|=4,Jd.current=null,rI(t,n),Yv(n,t),RT(vh),fl=!!yh,vh=yh=null,t.current=n,iI(n),bE(),ie=l,ue=o,Nt.transition=s}else t.current=n;if(ba&&(ba=!1,nr=t,Rl=i),s=t.pendingLanes,s===0&&(cr=null),ME(n.stateNode),yt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pl)throw Pl=!1,t=Fh,Fh=null,t;return Rl&1&&t.tag!==0&&Li(),s=t.pendingLanes,s&1?t===Uh?Zs++:(Zs=0,Uh=t):Zs=0,Ir(),null}function Li(){if(nr!==null){var t=Vy(Rl),e=Nt.transition,n=ue;try{if(Nt.transition=null,ue=16>t?16:t,nr===null)var r=!1;else{if(t=nr,nr=null,Rl=0,ie&6)throw Error(j(331));var i=ie;for(ie|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:Xs(8,d,s)}var p=d.child;if(p!==null)p.return=d,$=p;else for(;$!==null;){d=$;var m=d.sibling,I=d.return;if(Kv(d),d===h){$=null;break}if(m!==null){m.return=I,$=m;break}$=I}}}var C=s.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var x=P.sibling;P.sibling=null,P=x}while(P!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xs(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,$=T;break e}$=s.return}}var v=t.current;for($=v;$!==null;){o=$;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,$=S;else e:for(o=v;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uu(9,l)}}catch(M){Se(l,l.return,M)}if(l===o){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(ie=i,Ir(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(tu,t)}catch{}r=!0}return r}finally{ue=n,Nt.transition=e}}return!1}function p0(t,e,n){e=Hi(n,e),e=Vv(t,e,1),t=ur(t,e,1),e=ut(),t!==null&&(Uo(t,1,e),yt(t,e))}function Se(t,e,n){if(t.tag===3)p0(t,t,n);else for(;e!==null;){if(e.tag===3){p0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){t=Hi(n,t),t=Mv(e,t,1),e=ur(e,t,1),t=ut(),e!==null&&(Uo(e,1,t),yt(e,t));break}}e=e.return}}function cI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&($e&n)===n&&(be===4||be===3&&($e&130023424)===$e&&500>Pe()-ef?Ur(t,0):Zd|=n),yt(t,e)}function r2(t,e){e===0&&(t.mode&1?(e=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):e=1);var n=ut();t=Nn(t,e),t!==null&&(Uo(t,e,n),yt(t,n))}function hI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),r2(t,n)}function dI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),r2(t,n)}var i2;i2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,ZT(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ye&&e.flags&1048576&&lv(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ya(t,e),t=e.pendingProps;var i=Bi(e,it.current);bi(e,n),i=Kd(null,e,r,t,i,n);var s=Gd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,vl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zd(e),i.updater=lu,e.stateNode=i,i._reactInternals=e,Ch(e,r,t,n),e=Nh(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&Ld(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ya(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pI(r),t=Ft(r,t),i){case 0:e=Rh(null,e,r,t,n);break e;case 1:e=i0(null,e,r,t,n);break e;case 11:e=n0(null,e,r,t,n);break e;case 14:e=r0(null,e,r,Ft(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Rh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),i0(t,e,r,i,n);case 3:e:{if(Bv(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,pv(t,e),Il(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hi(Error(j(423)),e),e=s0(t,e,r,n,i);break e}else if(r!==i){i=Hi(Error(j(424)),e),e=s0(t,e,r,n,i);break e}else for(Et=lr(e.stateNode.containerInfo.firstChild),Tt=e,ye=!0,jt=null,n=dv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===i){e=xn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return mv(e),t===null&&Sh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_h(r,i)?o=null:s!==null&&_h(r,s)&&(e.flags|=32),jv(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&Sh(e),null;case 13:return zv(t,e,n);case 4:return $d(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$i(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),n0(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(El,r._currentValue),r._currentValue=o,s!==null)if(Wt(s.value,o)){if(s.children===i.children&&!mt.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Sn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var d=h.pending;d===null?u.next=u:(u.next=d.next,d.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ah(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ah(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bi(e,n),i=Dt(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=Ft(r,e.pendingProps),i=Ft(r.type,i),r0(t,e,r,i,n);case 15:return Fv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Ya(t,e),e.tag=1,gt(r)?(t=!0,vl(e)):t=!1,bi(e,n),Lv(e,r,i),Ch(e,r,i,n),Nh(null,e,r,!0,t,n);case 19:return $v(t,e,n);case 22:return Uv(t,e,n)}throw Error(j(156,e.tag))};function s2(t,e){return Oy(t,e)}function fI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new fI(t,e,n,r)}function sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pI(t){if(typeof t=="function")return sf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Id)return 11;if(t===Sd)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Za(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yi:return jr(n.children,i,s,e);case Td:o=8,i|=8;break;case Xc:return t=Rt(12,n,e,i|2),t.elementType=Xc,t.lanes=s,t;case Jc:return t=Rt(13,n,e,i),t.elementType=Jc,t.lanes=s,t;case Zc:return t=Rt(19,n,e,i),t.elementType=Zc,t.lanes=s,t;case my:return hu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fy:o=10;break e;case py:o=9;break e;case Id:o=11;break e;case Sd:o=14;break e;case Kn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function jr(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function hu(t,e,n,r){return t=Rt(22,t,r,e),t.elementType=my,t.lanes=n,t.stateNode={isHidden:!1},t}function Rc(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function Nc(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cc(0),this.expirationTimes=cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function of(t,e,n,r,i,s,o,l,u){return t=new mI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zd(s),t}function gI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function o2(t){if(!t)return yr;t=t._reactInternals;e:{if(ri(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(gt(n))return ov(t,n,e)}return e}function a2(t,e,n,r,i,s,o,l,u){return t=of(n,r,!0,t,i,s,o,l,u),t.context=o2(null),n=t.current,r=ut(),i=hr(n),s=Sn(r,i),s.callback=e??null,ur(n,s,i),t.current.lanes=i,Uo(t,i,r),yt(t,r),t}function du(t,e,n,r){var i=e.current,s=ut(),o=hr(i);return n=o2(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ur(i,e,o),t!==null&&($t(t,i,o,s),Ka(t,i,o)),o}function xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function m0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function af(t,e){m0(t,e),(t=t.alternate)&&m0(t,e)}function yI(){return null}var l2=typeof reportError=="function"?reportError:function(t){console.error(t)};function lf(t){this._internalRoot=t}fu.prototype.render=lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));du(t,e,null,null)};fu.prototype.unmount=lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){du(null,t,null,null)}),e[Rn]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&By(t)}};function uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function g0(){}function vI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=xl(o);s.call(h)}}var o=a2(e,r,t,0,null,!1,!1,"",g0);return t._reactRootContainer=o,t[Rn]=o.current,po(t.nodeType===8?t.parentNode:t),Gr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=xl(u);l.call(h)}}var u=of(t,0,!1,null,null,!1,!1,"",g0);return t._reactRootContainer=u,t[Rn]=u.current,po(t.nodeType===8?t.parentNode:t),Gr(function(){du(e,u,n,r)}),u}function mu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=xl(o);l.call(u)}}du(e,o,t,i)}else o=vI(n,e,t,i,r);return xl(o)}My=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fs(e.pendingLanes);n!==0&&(Cd(e,n|1),yt(e,Pe()),!(ie&6)&&(qi=Pe()+500,Ir()))}break;case 13:Gr(function(){var r=Nn(t,1);if(r!==null){var i=ut();$t(r,t,1,i)}}),af(t,1)}};Pd=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var n=ut();$t(e,t,134217728,n)}af(t,134217728)}};Fy=function(t){if(t.tag===13){var e=hr(t),n=Nn(t,e);if(n!==null){var r=ut();$t(n,t,e,r)}af(t,e)}};Uy=function(){return ue};jy=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};uh=function(t,e,n){switch(e){case"input":if(nh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=su(r);if(!i)throw Error(j(90));yy(r),nh(r,i)}}}break;case"textarea":_y(t,n);break;case"select":e=n.value,e!=null&&Ni(t,!!n.multiple,e,!1)}};ky=tf;Cy=Gr;var _I={usingClientEntryPoint:!1,Events:[Bo,Ei,su,Sy,Ay,tf]},Ds={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wI={bundleType:Ds.bundleType,version:Ds.version,rendererPackageName:Ds.rendererPackageName,rendererConfig:Ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ny(t),t===null?null:t.stateNode},findFiberByHostInstance:Ds.findFiberByHostInstance||yI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{tu=La.inject(wI),Jt=La}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_I;St.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uf(e))throw Error(j(200));return gI(t,e,null,n)};St.createRoot=function(t,e){if(!uf(t))throw Error(j(299));var n=!1,r="",i=l2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=of(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,po(t.nodeType===8?t.parentNode:t),new lf(e)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Ny(e),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return Gr(t)};St.hydrate=function(t,e,n){if(!pu(e))throw Error(j(200));return mu(null,t,e,!0,n)};St.hydrateRoot=function(t,e,n){if(!uf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=l2;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=a2(e,null,t,1,n??null,i,!1,s,o),t[Rn]=e.current,po(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fu(e)};St.render=function(t,e,n){if(!pu(e))throw Error(j(200));return mu(null,t,e,!1,n)};St.unmountComponentAtNode=function(t){if(!pu(t))throw Error(j(40));return t._reactRootContainer?(Gr(function(){mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};St.unstable_batchedUpdates=tf;St.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return mu(t,e,n,!1,r)};St.version="18.3.1-next-f1338f8080-20240426";function u2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u2)}catch(t){console.error(t)}}u2(),uy.exports=St;var EI=uy.exports,c2,y0=EI;c2=y0.createRoot,y0.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Io.apply(this,arguments)}var rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rr||(rr={}));const v0="popstate";function TI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return zh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ol(i)}return SI(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function h2(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function II(){return Math.random().toString(36).substr(2,8)}function _0(t,e){return{usr:t.state,key:t.key,idx:e}}function zh(t,e,n,r){return n===void 0&&(n=null),Io({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?is(e):e,{state:n,key:e&&e.key||r||II()})}function Ol(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function SI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=rr.Pop,u=null,h=d();h==null&&(h=0,o.replaceState(Io({},o.state,{idx:h}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=rr.Pop;let x=d(),T=x==null?null:x-h;h=x,u&&u({action:l,location:P.location,delta:T})}function m(x,T){l=rr.Push;let v=zh(P.location,x,T);h=d()+1;let S=_0(v,h),D=P.createHref(v);try{o.pushState(S,"",D)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(D)}s&&u&&u({action:l,location:P.location,delta:1})}function I(x,T){l=rr.Replace;let v=zh(P.location,x,T);h=d();let S=_0(v,h),D=P.createHref(v);o.replaceState(S,"",D),s&&u&&u({action:l,location:P.location,delta:0})}function C(x){let T=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof x=="string"?x:Ol(x);return v=v.replace(/ $/,"%20"),ke(T,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,T)}let P={get action(){return l},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(v0,p),u=x,()=>{i.removeEventListener(v0,p),u=null}},createHref(x){return e(i,x)},createURL:C,encodeLocation(x){let T=C(x);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:I,go(x){return o.go(x)}};return P}var w0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(w0||(w0={}));function AI(t,e,n){return n===void 0&&(n="/"),kI(t,e,n,!1)}function kI(t,e,n,r){let i=typeof e=="string"?is(e):e,s=Ki(i.pathname||"/",n);if(s==null)return null;let o=d2(t);CI(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let h=FI(s);l=VI(o[u],h,r)}return l}function d2(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ke(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=fr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),d2(s.children,e,d,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:bI(h,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of f2(s.path))i(s,o,u)}),e}function f2(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=f2(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function CI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PI=/^:[\w-]+$/,RI=3,NI=2,xI=1,OI=10,DI=-2,E0=t=>t==="*";function bI(t,e){let n=t.split("/"),r=n.length;return n.some(E0)&&(r+=DI),e&&(r+=NI),n.filter(i=>!E0(i)).reduce((i,s)=>i+(PI.test(s)?RI:s===""?xI:OI),r)}function LI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function VI(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Dl({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},d),m=u.route;if(!p&&h&&n&&!r[r.length-1].route.index&&(p=Dl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:fr([s,p.pathname]),pathnameBase:zI(fr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=fr([s,p.pathnameBase]))}return o}function Dl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=MI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,d,p)=>{let{paramName:m,isOptional:I}=d;if(m==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const C=l[p];return I&&!C?h[m]=void 0:h[m]=(C||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function MI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),h2(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function FI(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return h2(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ki(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function UI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?is(t):t;return{pathname:n?n.startsWith("/")?n:jI(n,e):e,search:$I(r),hash:WI(i)}}function jI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function BI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function p2(t,e){let n=BI(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function m2(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=is(t):(i=Io({},t),ke(!i.pathname||!i.pathname.includes("?"),xc("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),xc("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),xc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=UI(i,l),h=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||d)&&(u.pathname+="/"),u}const fr=t=>t.join("/").replace(/\/\/+/g,"/"),zI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$I=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,WI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function HI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const g2=["post","put","patch","delete"];new Set(g2);const qI=["get",...g2];new Set(qI);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},So.apply(this,arguments)}const gu=L.createContext(null),y2=L.createContext(null),Sr=L.createContext(null),yu=L.createContext(null),ii=L.createContext({outlet:null,matches:[],isDataRoute:!1}),v2=L.createContext(null);function KI(t,e){let{relative:n}=e===void 0?{}:e;$o()||ke(!1);let{basename:r,navigator:i}=L.useContext(Sr),{hash:s,pathname:o,search:l}=vu(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:fr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function $o(){return L.useContext(yu)!=null}function Ar(){return $o()||ke(!1),L.useContext(yu).location}function _2(t){L.useContext(Sr).static||L.useLayoutEffect(t)}function Wo(){let{isDataRoute:t}=L.useContext(ii);return t?oS():GI()}function GI(){$o()||ke(!1);let t=L.useContext(gu),{basename:e,future:n,navigator:r}=L.useContext(Sr),{matches:i}=L.useContext(ii),{pathname:s}=Ar(),o=JSON.stringify(p2(i,n.v7_relativeSplatPath)),l=L.useRef(!1);return _2(()=>{l.current=!0}),L.useCallback(function(h,d){if(d===void 0&&(d={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let p=m2(h,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:fr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function vu(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=L.useContext(Sr),{matches:i}=L.useContext(ii),{pathname:s}=Ar(),o=JSON.stringify(p2(i,r.v7_relativeSplatPath));return L.useMemo(()=>m2(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function QI(t,e){return YI(t,e)}function YI(t,e,n,r){$o()||ke(!1);let{navigator:i}=L.useContext(Sr),{matches:s}=L.useContext(ii),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=Ar(),d;if(e){var p;let x=typeof e=="string"?is(e):e;u==="/"||(p=x.pathname)!=null&&p.startsWith(u)||ke(!1),d=x}else d=h;let m=d.pathname||"/",I=m;if(u!=="/"){let x=u.replace(/^\//,"").split("/");I="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let C=AI(t,{pathname:I}),P=tS(C&&C.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:fr([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:fr([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&P?L.createElement(yu.Provider,{value:{location:So({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:rr.Pop}},P):P}function XI(){let t=sS(),e=HI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}const JI=L.createElement(XI,null);class ZI extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(ii.Provider,{value:this.props.routeContext},L.createElement(v2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eS(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(gu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(ii.Provider,{value:e},r)}function tS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||ke(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=d),p.route.id){let{loaderData:m,errors:I}=n,C=p.route.loader&&m[p.route.id]===void 0&&(!I||I[p.route.id]===void 0);if(p.route.lazy||C){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let I,C=!1,P=null,x=null;n&&(I=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||JI,u&&(h<0&&m===0?(C=!0,x=null):h===m&&(C=!0,x=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),v=()=>{let S;return I?S=P:C?S=x:p.route.Component?S=L.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=d,L.createElement(eS,{match:p,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:S})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?L.createElement(ZI,{location:n.location,revalidation:n.revalidation,component:P,error:I,children:v(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):v()},null)}var w2=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(w2||{}),bl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(bl||{});function nS(t){let e=L.useContext(gu);return e||ke(!1),e}function rS(t){let e=L.useContext(y2);return e||ke(!1),e}function iS(t){let e=L.useContext(ii);return e||ke(!1),e}function E2(t){let e=iS(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function sS(){var t;let e=L.useContext(v2),n=rS(bl.UseRouteError),r=E2(bl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function oS(){let{router:t}=nS(w2.UseNavigateStable),e=E2(bl.UseNavigateStable),n=L.useRef(!1);return _2(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,So({fromRouteId:e},s)))},[t,e])}function mn(t){ke(!1)}function aS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rr.Pop,navigator:s,static:o=!1,future:l}=t;$o()&&ke(!1);let u=e.replace(/^\/*/,"/"),h=L.useMemo(()=>({basename:u,navigator:s,static:o,future:So({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=is(r));let{pathname:d="/",search:p="",hash:m="",state:I=null,key:C="default"}=r,P=L.useMemo(()=>{let x=Ki(d,u);return x==null?null:{location:{pathname:x,search:p,hash:m,state:I,key:C},navigationType:i}},[u,d,p,m,I,C,i]);return P==null?null:L.createElement(Sr.Provider,{value:h},L.createElement(yu.Provider,{children:n,value:P}))}function lS(t){let{children:e,location:n}=t;return QI($h(e),n)}new Promise(()=>{});function $h(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,$h(r.props.children,s));return}r.type!==mn&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$h(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ll(){return Ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ll.apply(this,arguments)}function T2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function uS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function cS(t,e){return t.button===0&&(!e||e==="_self")&&!uS(t)}const hS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],dS=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],fS="6";try{window.__reactRouterVersion=fS}catch{}const pS=L.createContext({isTransitioning:!1}),mS="startTransition",T0=cE[mS];function gS(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=TI({window:i,v5Compat:!0}));let o=s.current,[l,u]=L.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},d=L.useCallback(p=>{h&&T0?T0(()=>u(p)):u(p)},[u,h]);return L.useLayoutEffect(()=>o.listen(d),[o,d]),L.createElement(aS,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const yS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_S=L.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:h,preventScrollReset:d,unstable_viewTransition:p}=e,m=T2(e,hS),{basename:I}=L.useContext(Sr),C,P=!1;if(typeof h=="string"&&vS.test(h)&&(C=h,yS))try{let S=new URL(window.location.href),D=h.startsWith("//")?new URL(S.protocol+h):new URL(h),M=Ki(D.pathname,I);D.origin===S.origin&&M!=null?h=M+D.search+D.hash:P=!0}catch{}let x=KI(h,{relative:i}),T=ES(h,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:p});function v(S){r&&r(S),S.defaultPrevented||T(S)}return L.createElement("a",Ll({},m,{href:C||x,onClick:P||s?r:v,ref:n,target:u}))}),bs=L.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,unstable_viewTransition:h,children:d}=e,p=T2(e,dS),m=vu(u,{relative:p.relative}),I=Ar(),C=L.useContext(y2),{navigator:P,basename:x}=L.useContext(Sr),T=C!=null&&TS(m)&&h===!0,v=P.encodeLocation?P.encodeLocation(m).pathname:m.pathname,S=I.pathname,D=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(S=S.toLowerCase(),D=D?D.toLowerCase():null,v=v.toLowerCase()),D&&x&&(D=Ki(D,x)||D);const M=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let B=S===v||!o&&S.startsWith(v)&&S.charAt(M)==="/",w=D!=null&&(D===v||!o&&D.startsWith(v)&&D.charAt(v.length)==="/"),y={isActive:B,isPending:w,isTransitioning:T},_=B?r:void 0,E;typeof s=="function"?E=s(y):E=[s,B?"active":null,w?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(y):l;return L.createElement(_S,Ll({},p,{"aria-current":_,className:E,ref:n,style:k,to:u,unstable_viewTransition:h}),typeof d=="function"?d(y):d)});var Wh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Wh||(Wh={}));var I0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(I0||(I0={}));function wS(t){let e=L.useContext(gu);return e||ke(!1),e}function ES(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Wo(),h=Ar(),d=vu(t,{relative:o});return L.useCallback(p=>{if(cS(p,n)){p.preventDefault();let m=r!==void 0?r:Ol(h)===Ol(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[h,u,d,r,i,n,t,s,o,l])}function TS(t,e){e===void 0&&(e={});let n=L.useContext(pS);n==null&&ke(!1);let{basename:r}=wS(Wh.useViewTransitionState),i=vu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ki(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ki(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Dl(i.pathname,o)!=null||Dl(i.pathname,s)!=null}const IS="_dashboardContainer_1v5hi_1",SS="_content_1v5hi_9",AS="_bottomNav_1v5hi_16",kS="_navItem_1v5hi_28",CS="_active_1v5hi_45",PS="_sliderContainer_1v5hi_53",RS="_title_1v5hi_66",NS="_description_1v5hi_71",xS="_button_1v5hi_76",OS="_navigation_1v5hi_86",DS="_prev_1v5hi_95",bS="_next_1v5hi_96",LS="_indicators_1v5hi_106",VS="_indicator_1v5hi_106",Oc={dashboardContainer:IS,content:SS,bottomNav:AS,navItem:kS,active:CS,sliderContainer:PS,title:RS,description:NS,button:xS,navigation:OS,prev:DS,next:bS,indicators:LS,indicator:VS},MS="_header_1ogbw_1",FS="_logo_1ogbw_19",US="_iconsContainer_1ogbw_23",jS="_bellIcon_1ogbw_28",BS="_registerButton_1ogbw_35",zS="_userInfo_1ogbw_45",$S="_userIcon_1ogbw_52",WS="_userName_1ogbw_58",HS="_profileMenu_1ogbw_65",qS="_open_1ogbw_77",KS="_profileHeader_1ogbw_81",GS="_menuLogo_1ogbw_90",QS="_closeButton_1ogbw_94",YS="_profileContent_1ogbw_102",Wn={header:MS,logo:FS,iconsContainer:US,bellIcon:jS,registerButton:BS,userInfo:zS,userIcon:$S,userName:WS,profileMenu:HS,open:qS,profileHeader:KS,menuLogo:GS,closeButton:QS,profileContent:YS},cf="/my-app/assets/logo-CR5zDZBO.png",I2="data:image/svg+xml,%3csvg%20id='Layer_2'%20enable-background='new%200%200%20512%20512'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3cg%20fill='%23bdc9cd'%3e%3cpath%20d='m318.4%20181.6c11.4-18.3%2017.5-39.4%2017.7-61%20.2-31.1-11.8-60.5-33.8-82.8-22.1-22.3-51.3-34.6-82.4-34.8-.2%200-.4%200-.7%200-31.1%200-60.3%2012.1-82.4%2034-22.2%2022.1-34.4%2051.5-34.4%2082.8%200%2021.9%206.1%2043.3%2017.7%2061.8%2014.9%2023.8%2037.1%2041%2062.9%2049.3.5.2%201.1.3%201.6.5%205.5%201.7%2011.2%203%2016.9%203.9.2%200%20.4.1.5.1%201.2.2%202.3.3%203.5.5.4%200%20.7.1%201.1.1l3%20.3c.4%200%20.8.1%201.3.1%201%20.1%202%20.1%203%20.2.4%200%20.8%200%201.2.1%201.4%200%202.8.1%204.2.1s2.8%200%204.1-.1c.4%200%20.8%200%201.2-.1%201%200%202-.1%203-.2.4%200%20.9-.1%201.3-.1%201-.1%202-.2%203-.3.4%200%20.7-.1%201.1-.1%201.1-.1%202.3-.3%203.4-.5.2%200%20.4-.1.6-.1%205.7-.9%2011.4-2.2%2016.9-3.9.3-.1.6-.2%201-.3%2025.9-8.3%2048.5-25.5%2063.5-49.5z'/%3e%3cpath%20d='m336.7%20433c-.1-.2-.2-.4-.3-.7.1.3.2.5.3.7z'/%3e%3cpath%20d='m336.4%20420.9c.1-.2.2-.4.3-.7-.1.3-.2.5-.3.7z'/%3e%3cpath%20d='m335.9%20422.3c.1-.2.2-.5.3-.7-.1.2-.2.4-.3.7z'/%3e%3cpath%20d='m335.5%20428.8c0-.2-.1-.4-.1-.7%200%20.3%200%20.5.1.7z'/%3e%3cpath%20d='m336.2%20431.7c-.1-.2-.2-.5-.3-.7.1.2.2.5.3.7z'/%3e%3cpath%20d='m335.3%20426.6c0%20.1%200%20.1%200%200z'/%3e%3cpath%20d='m335.4%20425.2c0-.2.1-.5.1-.7-.1.2-.1.4-.1.7z'/%3e%3cpath%20d='m335.8%20430.3c-.1-.3-.1-.5-.2-.8%200%20.3.1.6.2.8z'/%3e%3cpath%20d='m335.6%20423.7c.1-.3.1-.5.2-.8-.1.3-.2.6-.2.8z'/%3e%3c/g%3e%3cpath%20d='m497%20411.6h-110.5l41.8-41.8c5.9-5.9%205.9-15.4%200-21.2-5.9-5.9-15.4-5.9-21.2%200l-67.4%2067.4c-.4.4-.7.7-1%201.1-.1.2-.3.3-.4.5-.2.2-.3.4-.5.7-.1.2-.3.4-.4.6s-.3.4-.4.6-.2.4-.3.7c-.1.2-.2.4-.3.7-.1.2-.2.4-.2.7-.1.2-.2.5-.3.7s-.1.4-.2.7-.1.5-.2.8-.1.5-.1.8c0%20.2-.1.4-.1.7%200%20.5-.1%201-.1%201.4v.1c0%20.5%200%201%20.1%201.4%200%20.2.1.5.1.7%200%20.3.1.5.1.8.1.3.1.5.2.8.1.2.1.4.2.7.1.2.2.5.3.7s.2.4.2.7c.1.2.2.4.3.7.1.2.2.5.3.7s.2.4.4.6c.1.2.3.4.4.6.2.2.3.4.5.7.1.2.3.4.4.5.3.4.6.7%201%201.1l67.4%2067.4c2.9%202.9%206.8%204.4%2010.6%204.4s7.7-1.5%2010.6-4.4c5.9-5.9%205.9-15.4%200-21.2l-41.8-41.8h110.5c8.3%200%2015-6.7%2015-15s-6.7-15.3-15-15.3z'%20fill='%2354d6a2'/%3e%3cpath%20d='m262.7%20260c-14%204.4-28.7%206.6-43.5%206.6s-29.5-2.2-43.5-6.6c-13.3-4.1-26.8-6.1-40.1-6.1-44.8%200-87.1%2022.6-110.7%2061.9-10.7%2017.9-19%2037.1-24.4%2057.2-1.5%205.4.5%2011.2%205%2014.4%2062.5%2045%20136.5%2068.7%20213.8%2068.7%2017.2%200%2034.5-1.2%2051.6-3.6-1.4-8.5-2.2-17.2-2.2-25.8%200-39%2014.5-76.2%2040.9-104.9%2019-20.7%2043-35.6%2069.4-43.5-32.8-23.6-75.9-30.8-116.3-18.3z'%20fill='%23bdc9cd'/%3e%3c/g%3e%3c/svg%3e",XS="data:image/svg+xml,%3csvg%20height='511pt'%20viewBox='-21%201%20511%20511.99998'%20width='511pt'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m311.628906%20435.773438c0%2035.046874-23.644531%2064.554687-55.839844%2073.46875-6.488281%201.796874-13.320312%202.757812-20.375%202.757812-42.097656%200-76.226562-34.125-76.226562-76.226562l76.347656-39.234376zm0%200'%20fill='%23e58e13'/%3e%3cpath%20d='m307.941406%20459.285156c-7.847656%2024.21875-27.492187%2043.132813-52.152344%2049.957032-15.503906-4.289063-29.023437-13.351563-38.875-25.503907-7.941406-9.800781-.777343-24.453125%2011.835938-24.453125zm0%200'%20fill='%23f7d360'/%3e%3cpath%20d='m432.210938%20359.558594-163.761719%2035.414062-229.84375-35.414062c18.035156%200%2028.234375-9.433594%2034.023437-25.078125%2028.003906-75.523438-46.582031-295.632813%20162.785156-295.632813%20209.367188%200%20134.769532%20220.109375%20162.773438%20295.632813%205.800781%2015.644531%2015.996094%2025.078125%2034.023438%2025.078125zm0%200'%20fill='%23f7d360'/%3e%3cpath%20d='m470.316406%20397.667969c0%2021.042969-17.0625%2038.105469-38.105468%2038.105469h-393.605469c-10.519531%200-20.050781-4.261719-26.945313-11.160157-6.898437-6.894531-11.160156-16.425781-11.160156-26.945312%200-21.046875%2017.0625-38.109375%2038.105469-38.109375h393.605469c10.519531%200%2020.050781%204.265625%2026.945312%2011.160156%206.898438%206.898438%2011.160156%2016.425781%2011.160156%2026.949219zm0%200'%20fill='%23e58e13'/%3e%3cpath%20d='m398.1875%20334.480469h-204.574219c-22.054687%200-39.691406-18.253907-39.007812-40.300781%202.882812-93.265626-11.992188-253.558594%2079.277343-255.320313-250.535156%201.296875-90.382812%20320.699219-195.269531%20320.699219h393.597657c-18.027344%200-28.222657-9.433594-34.023438-25.078125zm0%200'%20fill='%23e58e13'/%3e%3cpath%20d='m470.316406%20397.667969c0%2021.042969-17.0625%2038.105469-38.105468%2038.105469h-283.480469c-10.523438%200-20.054688-4.261719-26.949219-11.160157-6.894531-6.894531-11.160156-16.425781-11.160156-26.945312%200-21.046875%2017.0625-38.109375%2038.109375-38.109375h283.480469c10.519531%200%2020.050781%204.265625%2026.945312%2011.160156%206.898438%206.898438%2011.160156%2016.425781%2011.160156%2026.949219zm0%200'%20fill='%23f7d360'/%3e%3cpath%20d='m274.148438%2041.765625c.082031-.960937.113281-1.933594.113281-2.917969%200-21.449218-17.394531-38.847656-38.847657-38.847656-21.460937%200-38.847656%2017.398438-38.847656%2038.847656%200%20.984375.03125%201.957032.113282%202.917969'%20fill='%23e58e13'/%3e%3cg%20fill='%23e6e6e6'%3e%3cpath%20d='m424.613281%20167.71875c-4.328125%200-7.835937-3.511719-7.835937-7.835938%200-36.269531-9.324219-67.222656-27.710938-92-13.726562-18.496093-27.683594-26.457031-27.820312-26.539062-3.765625-2.113281-5.121094-6.878906-3.019532-10.652344%202.101563-3.769531%206.84375-5.136718%2010.621094-3.050781.667969.371094%2016.535156%209.277344%2032.25%2030.160156%2014.304688%2019.007813%2031.355469%2052.148438%2031.355469%20102.082031%200%204.324219-3.511719%207.835938-7.839844%207.835938zm0%200'/%3e%3cpath%20d='m459.09375%20122.789062c-4.328125%200-7.835938-3.507812-7.835938-7.835937%200-50.023437-29.625-69.910156-30.886718-70.730469-3.613282-2.355468-4.660156-7.195312-2.328125-10.820312%202.335937-3.625%207.140625-4.695313%2010.777343-2.378906%201.558594.988281%2038.109376%2024.929687%2038.109376%2083.929687%200%204.328125-3.507813%207.835937-7.835938%207.835937zm0%200'/%3e%3cpath%20d='m46.203125%20167.71875c-4.328125%200-7.835937-3.511719-7.835937-7.835938%200-49.933593%2017.050781-83.074218%2031.351562-102.082031%2015.71875-20.882812%2031.582031-29.792969%2032.25-30.160156%203.789062-2.09375%208.558594-.71875%2010.652344%203.070313%202.089844%203.78125.722656%208.539062-3.050782%2010.636718-.308593.175782-14.171874%208.15625-27.816406%2026.535156-18.390625%2024.777344-27.710937%2055.730469-27.710937%2092-.003907%204.324219-3.511719%207.835938-7.839844%207.835938zm0%200'/%3e%3cpath%20d='m11.722656%20122.789062c-4.328125%200-7.835937-3.507812-7.835937-7.835937%200-59%2036.554687-82.941406%2038.109375-83.929687%203.652344-2.324219%208.496094-1.246094%2010.820312%202.402343%202.316406%203.640625%201.253906%208.46875-2.375%2010.796875-1.300781.851563-30.882812%2020.746094-30.882812%2070.730469%200%204.328125-3.507813%207.835937-7.835938%207.835937zm0%200'/%3e%3c/g%3e%3c/svg%3e";var S0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},JS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},A2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,I=h&63;u||(I=64,o||(m=64)),r.push(n[d],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(S2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new ZS;const m=s<<2|l>>4;if(r.push(m),h!==64){const I=l<<4&240|h>>2;if(r.push(I),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const e3=function(t){const e=S2(t);return A2.encodeByteArray(e,!0)},Vl=function(t){return e3(t).replace(/\./g,"")},k2=function(t){try{return A2.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n3=()=>t3().__FIREBASE_DEFAULTS__,r3=()=>{if(typeof process>"u"||typeof S0>"u")return;const t=S0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},i3=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&k2(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return n3()||r3()||i3()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},C2=t=>{var e,n;return(n=(e=_u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},s3=t=>{const e=C2(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},P2=()=>{var t;return(t=_u())===null||t===void 0?void 0:t.config},R2=t=>{var e;return(e=_u())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a3(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vl(JSON.stringify(n)),Vl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function l3(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function u3(){var t;const e=(t=_u())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function c3(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function h3(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function d3(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function f3(){return!u3()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function N2(){try{return typeof indexedDB=="object"}catch{return!1}}function x2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function p3(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m3="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=m3,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?g3(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ln(i,l,r)}}function g3(t,e){return t.replace(y3,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const y3=/\{\$([^}]+)}/g;function v3(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ml(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(A0(s)&&A0(o)){if(!Ml(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function A0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Bs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _3(t,e){const n=new w3(t,e);return n.subscribe.bind(n)}class w3{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");E3(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Dc),i.error===void 0&&(i.error=Dc),i.complete===void 0&&(i.complete=Dc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E3(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return t&&t._delegate?t._delegate:t}class Ht{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T3{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new o3;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(S3(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:I3(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I3(t){return t===Dr?void 0:t}function S3(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A3{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new T3(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const k3={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},C3=ne.INFO,P3={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},R3=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=P3[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hf{constructor(e){this.name=e,this._logLevel=C3,this._logHandler=R3,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?k3[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const N3=(t,e)=>e.some(n=>t instanceof n);let k0,C0;function x3(){return k0||(k0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O3(){return C0||(C0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O2=new WeakMap,Hh=new WeakMap,D2=new WeakMap,bc=new WeakMap,df=new WeakMap;function D3(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(An(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&O2.set(n,t)}).catch(()=>{}),df.set(e,t),e}function b3(t){if(Hh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Hh.set(t,e)}let qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||D2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function L3(t){qh=t(qh)}function V3(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lc(this),e,...n);return D2.set(r,e.sort?e.sort():[e]),An(r)}:O3().includes(t)?function(...e){return t.apply(Lc(this),e),An(O2.get(this))}:function(...e){return An(t.apply(Lc(this),e))}}function M3(t){return typeof t=="function"?V3(t):(t instanceof IDBTransaction&&b3(t),N3(t,x3())?new Proxy(t,qh):t)}function An(t){if(t instanceof IDBRequest)return D3(t);if(bc.has(t))return bc.get(t);const e=M3(t);return e!==t&&(bc.set(t,e),df.set(e,t)),e}const Lc=t=>df.get(t);function wu(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=An(o);return r&&o.addEventListener("upgradeneeded",u=>{r(An(o.result),u.oldVersion,u.newVersion,An(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}function Vc(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),An(n).then(()=>{})}const F3=["get","getKey","getAll","getAllKeys","count"],U3=["put","add","delete","clear"],Mc=new Map;function P0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=U3.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||F3.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Mc.set(e,s),s}L3(t=>({...t,get:(e,n,r)=>P0(e,n)||t.get(e,n,r),has:(e,n)=>!!P0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(B3(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function B3(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kh="@firebase/app",R0="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new hf("@firebase/app"),z3="@firebase/app-compat",$3="@firebase/analytics-compat",W3="@firebase/analytics",H3="@firebase/app-check-compat",q3="@firebase/app-check",K3="@firebase/auth",G3="@firebase/auth-compat",Q3="@firebase/database",Y3="@firebase/database-compat",X3="@firebase/functions",J3="@firebase/functions-compat",Z3="@firebase/installations",eA="@firebase/installations-compat",tA="@firebase/messaging",nA="@firebase/messaging-compat",rA="@firebase/performance",iA="@firebase/performance-compat",sA="@firebase/remote-config",oA="@firebase/remote-config-compat",aA="@firebase/storage",lA="@firebase/storage-compat",uA="@firebase/firestore",cA="@firebase/vertexai-preview",hA="@firebase/firestore-compat",dA="firebase",fA="10.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="[DEFAULT]",pA={[Kh]:"fire-core",[z3]:"fire-core-compat",[W3]:"fire-analytics",[$3]:"fire-analytics-compat",[q3]:"fire-app-check",[H3]:"fire-app-check-compat",[K3]:"fire-auth",[G3]:"fire-auth-compat",[Q3]:"fire-rtdb",[Y3]:"fire-rtdb-compat",[X3]:"fire-fn",[J3]:"fire-fn-compat",[Z3]:"fire-iid",[eA]:"fire-iid-compat",[tA]:"fire-fcm",[nA]:"fire-fcm-compat",[rA]:"fire-perf",[iA]:"fire-perf-compat",[sA]:"fire-rc",[oA]:"fire-rc-compat",[aA]:"fire-gcs",[lA]:"fire-gcs-compat",[uA]:"fire-fst",[hA]:"fire-fst-compat",[cA]:"fire-vertex","fire-js":"fire-js",[dA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new Map,mA=new Map,Qh=new Map;function N0(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sn(t){const e=t.name;if(Qh.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;Qh.set(e,t);for(const n of Fl.values())N0(n,t);for(const n of mA.values())N0(n,t);return!0}function ss(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new si("app","Firebase",gA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=fA;function b2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pr.create("bad-app-name",{appName:String(i)});if(n||(n=P2()),!n)throw pr.create("no-options");const s=Fl.get(i);if(s){if(Ml(n,s.options)&&Ml(r,s.config))return s;throw pr.create("duplicate-app",{appName:i})}const o=new A3(i);for(const u of Qh.values())o.addComponent(u);const l=new yA(n,r,o);return Fl.set(i,l),l}function ff(t=Gh){const e=Fl.get(t);if(!e&&t===Gh&&P2())return b2();if(!e)throw pr.create("no-app",{appName:t});return e}function xt(t,e,n){var r;let i=(r=pA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(l.join(" "));return}sn(new Ht(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="firebase-heartbeat-database",_A=1,Ao="firebase-heartbeat-store";let Fc=null;function L2(){return Fc||(Fc=wu(vA,_A,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),Fc}async function wA(t){try{const n=(await L2()).transaction(Ao),r=await n.objectStore(Ao).get(V2(t));return await n.done,r}catch(e){if(e instanceof ln)On.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(n.message)}}}async function x0(t,e){try{const r=(await L2()).transaction(Ao,"readwrite");await r.objectStore(Ao).put(e,V2(t)),await r.done}catch(n){if(n instanceof ln)On.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});On.warn(r.message)}}}function V2(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=1024,TA=30*24*60*60*1e3;class IA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=O0();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=TA}),this._storage.overwrite(this._heartbeatsCache))}catch(i){On.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=O0(),{heartbeatsToSend:r,unsentEntries:i}=SA(this._heartbeatsCache.heartbeats),s=Vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return On.warn(n),""}}}function O0(){return new Date().toISOString().substring(0,10)}function SA(t,e=EA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),D0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),D0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return N2()?x2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function D0(t){return Vl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){sn(new Ht("platform-logger",e=>new j3(e),"PRIVATE")),sn(new Ht("heartbeat",e=>new IA(e),"PRIVATE")),xt(Kh,R0,t),xt(Kh,R0,"esm2017"),xt("fire-js","")}kA("");var CA="firebase",PA="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(CA,PA,"app");function pf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function M2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RA=M2,F2=new si("auth","Firebase",M2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new hf("@firebase/auth");function NA(t,...e){Ul.logLevel<=ne.WARN&&Ul.warn(`Auth (${os}): ${t}`,...e)}function el(t,...e){Ul.logLevel<=ne.ERROR&&Ul.error(`Auth (${os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw mf(t,...e)}function en(t,...e){return mf(t,...e)}function U2(t,e,n){const r=Object.assign(Object.assign({},RA()),{[e]:n});return new si("auth","Firebase",r).create(e,{appName:t.name})}function kn(t){return U2(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return F2.create(t,...e)}function Q(t,e,...n){if(!t)throw mf(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw el(e),new Error(e)}function Dn(t,e){t||En(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xA(){return b0()==="http:"||b0()==="https:"}function b0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xA()||c3()||"connection"in navigator)?navigator.onLine:!0}function DA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=l3()||h3()}get(){return OA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=new qo(3e4,6e4);function Mn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fn(t,e,n,r,i={}){return B2(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ho(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),j2.fetch()(z2(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function B2(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bA),e);try{const i=new MA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Va(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Va(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Va(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Va(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw U2(t,d,h);qt(t,d)}}catch(i){if(i instanceof ln)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function Ko(t,e,n,r,i={}){const s=await Fn(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function z2(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gf(t.config,i):`${t.config.apiScheme}://${i}`}function VA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),LA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}function L0(t){return t!==void 0&&t.enterprise!==void 0}class FA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return VA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function UA(t,e){return Fn(t,"GET","/v2/recaptchaConfig",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function $2(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BA(t,e=!1){const n=vt(t),r=await n.getIdToken(e),i=yf(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:eo(Uc(i.auth_time)),issuedAtTime:eo(Uc(i.iat)),expirationTime:eo(Uc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Uc(t){return Number(t)*1e3}function yf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return el("JWT malformed, contained fewer than 3 sections"),null;try{const i=k2(n);return i?JSON.parse(i):(el("Failed to decode base64 JWT payload"),null)}catch(i){return el("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function V0(t){const e=yf(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&zA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=eo(this.lastLoginAt),this.creationTime=eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ko(t,$2(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?W2(s.providerUserInfo):[],l=HA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Xh(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function WA(t){const e=vt(t);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function W2(t){return t.map(e=>{var{providerId:n}=e,r=pf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(t,e){const n=await B2(t,{},async()=>{const r=Ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=z2(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",j2.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function KA(t,e){return Fn(t,"POST","/v2/accounts:revokeToken",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):V0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=V0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Vi;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $A(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BA(this,e)}reload(){return WA(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await ko(this,jA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:D,isAnonymous:M,providerData:B,stsTokenManager:w}=n;Q(S&&w,e,"internal-error");const y=Vi.fromJSON(this.name,w);Q(typeof S=="string",e,"internal-error"),Hn(p,e.name),Hn(m,e.name),Q(typeof D=="boolean",e,"internal-error"),Q(typeof M=="boolean",e,"internal-error"),Hn(I,e.name),Hn(C,e.name),Hn(P,e.name),Hn(x,e.name),Hn(T,e.name),Hn(v,e.name);const _=new Tn({uid:S,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:M,photoURL:C,phoneNumber:I,tenantId:P,stsTokenManager:y,createdAt:T,lastLoginAt:v});return B&&Array.isArray(B)&&(_.providerData=B.map(E=>Object.assign({},E))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vi;i.updateFromServerResponse(n);const s=new Tn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?W2(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Vi;l.updateFromIdToken(r);const u=new Tn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Xh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new Map;function In(t){Dn(t instanceof Function,"Expected a class definition");let e=M0.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,M0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}H2.type="NONE";const F0=H2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tl(this.userKey,i.apiKey,s),this.fullPersistenceKey=tl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(In(F0),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||In(F0);const o=tl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=Tn._fromJSON(e,d);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Mi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Mi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Q2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(X2(e))return"Blackberry";if(J2(e))return"Webos";if(K2(e))return"Safari";if((e.includes("chrome/")||G2(e))&&!e.includes("edge/"))return"Chrome";if(Y2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function q2(t=st()){return/firefox\//i.test(t)}function K2(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G2(t=st()){return/crios\//i.test(t)}function Q2(t=st()){return/iemobile/i.test(t)}function Y2(t=st()){return/android/i.test(t)}function X2(t=st()){return/blackberry/i.test(t)}function J2(t=st()){return/webos/i.test(t)}function vf(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GA(t=st()){var e;return vf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QA(){return d3()&&document.documentMode===10}function Z2(t=st()){return vf(t)||Y2(t)||J2(t)||X2(t)||/windows phone/i.test(t)||Q2(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t,e=[]){let n;switch(t){case"Browser":n=U0(st());break;case"Worker":n=`${U0(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(t,e={}){return Fn(t,"GET","/v2/passwordPolicy",Mn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=6;class ZA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:JA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new j0(this),this.idTokenSubscription=new j0(this),this.beforeStateQueue=new YA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=F2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $2(this,{idToken:e}),r=await Tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(kn(this));const n=e?vt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XA(this),n=new ZA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await KA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=e_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kr(t){return vt(t)}class j0{constructor(e){this.auth=e,this.observer=null,this.addObserver=_3(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tk(t){Eu=t}function t_(t){return Eu.loadJS(t)}function nk(){return Eu.recaptchaEnterpriseScript}function rk(){return Eu.gapiScript}function ik(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sk="recaptcha-enterprise",ok="NO_RECAPTCHA";class ak{constructor(e){this.type=sk,this.auth=kr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{UA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new FA(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;L0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(ok)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&L0(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=nk();u.length!==0&&(u+=l),t_(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function B0(t,e,n,r=!1){const i=new ak(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Bl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await B0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await B0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t,e){const n=ss(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ml(s,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function uk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ck(t,e,n){const r=kr(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=n_(e),{host:o,port:l}=hk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),dk()}function n_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hk(t){const e=n_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:z0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:z0(o)}}}function z0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function fk(t,e){return Fn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e){return Ko(t,"POST","/v1/accounts:signInWithPassword",Mn(t,e))}async function mk(t,e){return Fn(t,"POST","/v1/accounts:sendOobCode",Mn(t,e))}async function gk(t,e){return mk(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yk(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",Mn(t,e))}async function vk(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends _f{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Co(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Co(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bl(e,n,"signInWithPassword",pk);case"emailLink":return yk(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bl(e,r,"signUpPassword",fk);case"emailLink":return vk(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e){return Ko(t,"POST","/v1/accounts:signInWithIdp",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k="http://localhost";class Qr extends _f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fi(e,n)}buildRequest(){const e={requestUri:_k,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ek(t){const e=js(Bs(t)).link,n=e?js(Bs(e)).deep_link_id:null,r=js(Bs(t)).deep_link_id;return(r?js(Bs(r)).link:null)||r||n||e||t}class wf{constructor(e){var n,r,i,s,o,l;const u=js(Bs(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=wk((i=u.mode)!==null&&i!==void 0?i:null);Q(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Ek(e);try{return new wf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.providerId=as.PROVIDER_ID}static credential(e,n){return Co._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wf.parseLink(n);return Q(r,"argument-error"),Co._fromEmailAndCode(e,r.code,r.tenantId)}}as.PROVIDER_ID="password";as.EMAIL_PASSWORD_SIGN_IN_METHOD="password";as.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends r_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Go{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Go{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Go{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(t,e){return Ko(t,"POST","/v1/accounts:signUp",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tn._fromIdTokenResponse(e,r,i),o=$0(r);return new Yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$0(r);return new Yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zl(e,n,r,i)}}function i_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zl._fromErrorAndOperation(t,s,e,r):s})}async function Ik(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(t,e,n=!1){const{auth:r}=t;if(Xt(r.app))return Promise.reject(kn(r));const i="reauthenticate";try{const s=await ko(t,i_(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=yf(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),Yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(t,e,n=!1){if(Xt(t.app))return Promise.reject(kn(t));const r="signIn",i=await i_(t,r,e),s=await Yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ak(t,e){return s_(kr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(t){const e=kr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kk(t,e,n){const r=kr(t);await Bl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",gk)}async function Ck(t,e,n){if(Xt(t.app))return Promise.reject(kn(t));const r=kr(t),o=await Bl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Tk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&o_(t),u}),l=await Yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Pk(t,e,n){return Xt(t.app)?Promise.reject(kn(t)):Ak(vt(t),as.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&o_(t),r})}function Rk(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function Nk(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}const $l="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($l,"1"),this.storage.removeItem($l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=1e3,Ok=10;class l_ extends a_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Z2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ok):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}l_.type="LOCAL";const Dk=l_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_ extends a_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}u_.type="SESSION";const c_=u_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await bk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Ef("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function Vk(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function Mk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Uk(){return h_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="firebaseLocalStorageDb",jk=1,Wl="firebaseLocalStorage",f_="fbase_key";class Qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Iu(t,e){return t.transaction([Wl],e?"readwrite":"readonly").objectStore(Wl)}function Bk(){const t=indexedDB.deleteDatabase(d_);return new Qo(t).toPromise()}function Jh(){const t=indexedDB.open(d_,jk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wl,{keyPath:f_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wl)?e(r):(r.close(),await Bk(),e(await Jh()))})})}async function W0(t,e,n){const r=Iu(t,!0).put({[f_]:e,value:n});return new Qo(r).toPromise()}async function zk(t,e){const n=Iu(t,!1).get(e),r=await new Qo(n).toPromise();return r===void 0?null:r.value}function H0(t,e){const n=Iu(t,!0).delete(e);return new Qo(n).toPromise()}const $k=800,Wk=3;class p_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Wk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return h_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tu._getInstance(Uk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mk(),!this.activeServiceWorker)return;this.sender=new Lk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jh();return await W0(e,$l,"1"),await H0(e,$l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>W0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>H0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Iu(i,!1).getAll();return new Qo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$k)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}p_.type="LOCAL";const Hk=p_;new qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t,e){return e?In(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends _f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kk(t){return s_(t.auth,new Tf(t),t.bypassAuthState)}function Gk(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Sk(n,new Tf(t),t.bypassAuthState)}async function Qk(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Ik(n,new Tf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kk;case"linkViaPopup":case"linkViaRedirect":return Qk;case"reauthViaPopup":case"reauthViaRedirect":return Gk;default:qt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=new qo(2e3,1e4);class Pi extends m_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pi.currentPopupAction&&Pi.currentPopupAction.cancel(),Pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Ef();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yk.get())};e()}}Pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk="pendingRedirect",nl=new Map;class Jk extends m_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nl.get(this.auth._key());if(!e){try{const r=await Zk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nl.set(this.auth._key(),e)}return this.bypassAuthState||nl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zk(t,e){const n=nC(e),r=tC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function eC(t,e){nl.set(t._key(),e)}function tC(t){return In(t._redirectPersistence)}function nC(t){return tl(Xk,t.config.apiKey,t.name)}async function rC(t,e,n=!1){if(Xt(t.app))return Promise.reject(kn(t));const r=kr(t),i=qk(r,e),o=await new Jk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=10*60*1e3;class sC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!g_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iC&&this.cachedEventUids.clear(),this.cachedEventUids.has(q0(e))}saveEventToCache(e){this.cachedEventUids.add(q0(e)),this.lastProcessedEventTime=Date.now()}}function q0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function g_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return g_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uC=/^https?/;async function cC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aC(t);for(const n of e)try{if(hC(n))return}catch{}qt(t,"unauthorized-domain")}function hC(t){const e=Yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uC.test(n))return!1;if(lC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=new qo(3e4,6e4);function K0(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fC(t){return new Promise((e,n)=>{var r,i,s;function o(){K0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{K0(),n(en(t,"network-request-failed"))},timeout:dC.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const l=ik("iframefcb");return tn()[l]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},t_(`${rk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw rl=null,e})}let rl=null;function pC(t){return rl=rl||fC(t),rl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=new qo(5e3,15e3),gC="__/auth/iframe",yC="emulator/auth/iframe",vC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_C=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wC(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gf(e,yC):`https://${t.config.authDomain}/${gC}`,r={apiKey:e.apiKey,appName:t.name,v:os},i=_C.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ho(r).slice(1)}`}async function EC(t){const e=await pC(t),n=tn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:wC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),l=tn().setTimeout(()=>{s(o)},mC.get());function u(){tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IC=500,SC=600,AC="_blank",kC="http://localhost";class G0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CC(t,e,n,r=IC,i=SC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},TC),{width:r.toString(),height:i.toString(),top:s,left:o}),h=st().toLowerCase();n&&(l=G2(h)?AC:n),q2(h)&&(e=e||kC,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[I,C])=>`${m}${I}=${C},`,"");if(GA(h)&&l!=="_self")return PC(e||"",l),new G0(null);const p=window.open(e||"",l,d);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new G0(p)}function PC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="__/auth/handler",NC="emulator/auth/handler",xC=encodeURIComponent("fac");async function Q0(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:os,eventId:i};if(e instanceof r_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",v3(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Go){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),h=u?`#${xC}=${encodeURIComponent(u)}`:"";return`${OC(t)}?${Ho(l).slice(1)}${h}`}function OC({config:t}){return t.emulator?gf(t,NC):`https://${t.authDomain}/${RC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="webStorageSupport";class DC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c_,this._completeRedirectFn=rC,this._overrideRedirectResult=eC}async _openPopup(e,n,r,i){var s;Dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Q0(e,n,r,Yh(),i);return CC(e,o,Ef())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Q0(e,n,r,Yh(),i);return Vk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await EC(e),r=new sC(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jc];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Z2()||K2()||vf()}}const bC=DC;var Y0="@firebase/auth",X0="1.7.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MC(t){sn(new Ht("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e_(t)},h=new ek(r,i,s,u);return uk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),sn(new Ht("auth-internal",e=>{const n=kr(e.getProvider("auth").getImmediate());return(r=>new LC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(Y0,X0,VC(t)),xt(Y0,X0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=5*60,UC=R2("authIdTokenMaxAge")||FC;let J0=null;const jC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UC)return;const i=n==null?void 0:n.token;J0!==i&&(J0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function BC(t=ff()){const e=ss(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lk(t,{popupRedirectResolver:bC,persistence:[Hk,Dk,c_]}),r=R2("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=jC(s.toString());Nk(n,o,()=>o(n.currentUser)),Rk(n,l=>o(l))}}const i=C2("auth");return i&&ck(n,`http://${i}`),n}function zC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",zC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MC("Browser");var Z0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,y_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.D=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(E,k,R){for(var A=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)A[dt-2]=arguments[dt];return y.prototype[k].apply(E,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,_){_||(_=0);var E=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)E[k]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(k=0;16>k;++k)E[k]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],k=w.g[2];var R=w.g[3],A=y+(R^_&(k^R))+E[0]+3614090360&4294967295;y=_+(A<<7&4294967295|A>>>25),A=R+(k^y&(_^k))+E[1]+3905402710&4294967295,R=y+(A<<12&4294967295|A>>>20),A=k+(_^R&(y^_))+E[2]+606105819&4294967295,k=R+(A<<17&4294967295|A>>>15),A=_+(y^k&(R^y))+E[3]+3250441966&4294967295,_=k+(A<<22&4294967295|A>>>10),A=y+(R^_&(k^R))+E[4]+4118548399&4294967295,y=_+(A<<7&4294967295|A>>>25),A=R+(k^y&(_^k))+E[5]+1200080426&4294967295,R=y+(A<<12&4294967295|A>>>20),A=k+(_^R&(y^_))+E[6]+2821735955&4294967295,k=R+(A<<17&4294967295|A>>>15),A=_+(y^k&(R^y))+E[7]+4249261313&4294967295,_=k+(A<<22&4294967295|A>>>10),A=y+(R^_&(k^R))+E[8]+1770035416&4294967295,y=_+(A<<7&4294967295|A>>>25),A=R+(k^y&(_^k))+E[9]+2336552879&4294967295,R=y+(A<<12&4294967295|A>>>20),A=k+(_^R&(y^_))+E[10]+4294925233&4294967295,k=R+(A<<17&4294967295|A>>>15),A=_+(y^k&(R^y))+E[11]+2304563134&4294967295,_=k+(A<<22&4294967295|A>>>10),A=y+(R^_&(k^R))+E[12]+1804603682&4294967295,y=_+(A<<7&4294967295|A>>>25),A=R+(k^y&(_^k))+E[13]+4254626195&4294967295,R=y+(A<<12&4294967295|A>>>20),A=k+(_^R&(y^_))+E[14]+2792965006&4294967295,k=R+(A<<17&4294967295|A>>>15),A=_+(y^k&(R^y))+E[15]+1236535329&4294967295,_=k+(A<<22&4294967295|A>>>10),A=y+(k^R&(_^k))+E[1]+4129170786&4294967295,y=_+(A<<5&4294967295|A>>>27),A=R+(_^k&(y^_))+E[6]+3225465664&4294967295,R=y+(A<<9&4294967295|A>>>23),A=k+(y^_&(R^y))+E[11]+643717713&4294967295,k=R+(A<<14&4294967295|A>>>18),A=_+(R^y&(k^R))+E[0]+3921069994&4294967295,_=k+(A<<20&4294967295|A>>>12),A=y+(k^R&(_^k))+E[5]+3593408605&4294967295,y=_+(A<<5&4294967295|A>>>27),A=R+(_^k&(y^_))+E[10]+38016083&4294967295,R=y+(A<<9&4294967295|A>>>23),A=k+(y^_&(R^y))+E[15]+3634488961&4294967295,k=R+(A<<14&4294967295|A>>>18),A=_+(R^y&(k^R))+E[4]+3889429448&4294967295,_=k+(A<<20&4294967295|A>>>12),A=y+(k^R&(_^k))+E[9]+568446438&4294967295,y=_+(A<<5&4294967295|A>>>27),A=R+(_^k&(y^_))+E[14]+3275163606&4294967295,R=y+(A<<9&4294967295|A>>>23),A=k+(y^_&(R^y))+E[3]+4107603335&4294967295,k=R+(A<<14&4294967295|A>>>18),A=_+(R^y&(k^R))+E[8]+1163531501&4294967295,_=k+(A<<20&4294967295|A>>>12),A=y+(k^R&(_^k))+E[13]+2850285829&4294967295,y=_+(A<<5&4294967295|A>>>27),A=R+(_^k&(y^_))+E[2]+4243563512&4294967295,R=y+(A<<9&4294967295|A>>>23),A=k+(y^_&(R^y))+E[7]+1735328473&4294967295,k=R+(A<<14&4294967295|A>>>18),A=_+(R^y&(k^R))+E[12]+2368359562&4294967295,_=k+(A<<20&4294967295|A>>>12),A=y+(_^k^R)+E[5]+4294588738&4294967295,y=_+(A<<4&4294967295|A>>>28),A=R+(y^_^k)+E[8]+2272392833&4294967295,R=y+(A<<11&4294967295|A>>>21),A=k+(R^y^_)+E[11]+1839030562&4294967295,k=R+(A<<16&4294967295|A>>>16),A=_+(k^R^y)+E[14]+4259657740&4294967295,_=k+(A<<23&4294967295|A>>>9),A=y+(_^k^R)+E[1]+2763975236&4294967295,y=_+(A<<4&4294967295|A>>>28),A=R+(y^_^k)+E[4]+1272893353&4294967295,R=y+(A<<11&4294967295|A>>>21),A=k+(R^y^_)+E[7]+4139469664&4294967295,k=R+(A<<16&4294967295|A>>>16),A=_+(k^R^y)+E[10]+3200236656&4294967295,_=k+(A<<23&4294967295|A>>>9),A=y+(_^k^R)+E[13]+681279174&4294967295,y=_+(A<<4&4294967295|A>>>28),A=R+(y^_^k)+E[0]+3936430074&4294967295,R=y+(A<<11&4294967295|A>>>21),A=k+(R^y^_)+E[3]+3572445317&4294967295,k=R+(A<<16&4294967295|A>>>16),A=_+(k^R^y)+E[6]+76029189&4294967295,_=k+(A<<23&4294967295|A>>>9),A=y+(_^k^R)+E[9]+3654602809&4294967295,y=_+(A<<4&4294967295|A>>>28),A=R+(y^_^k)+E[12]+3873151461&4294967295,R=y+(A<<11&4294967295|A>>>21),A=k+(R^y^_)+E[15]+530742520&4294967295,k=R+(A<<16&4294967295|A>>>16),A=_+(k^R^y)+E[2]+3299628645&4294967295,_=k+(A<<23&4294967295|A>>>9),A=y+(k^(_|~R))+E[0]+4096336452&4294967295,y=_+(A<<6&4294967295|A>>>26),A=R+(_^(y|~k))+E[7]+1126891415&4294967295,R=y+(A<<10&4294967295|A>>>22),A=k+(y^(R|~_))+E[14]+2878612391&4294967295,k=R+(A<<15&4294967295|A>>>17),A=_+(R^(k|~y))+E[5]+4237533241&4294967295,_=k+(A<<21&4294967295|A>>>11),A=y+(k^(_|~R))+E[12]+1700485571&4294967295,y=_+(A<<6&4294967295|A>>>26),A=R+(_^(y|~k))+E[3]+2399980690&4294967295,R=y+(A<<10&4294967295|A>>>22),A=k+(y^(R|~_))+E[10]+4293915773&4294967295,k=R+(A<<15&4294967295|A>>>17),A=_+(R^(k|~y))+E[1]+2240044497&4294967295,_=k+(A<<21&4294967295|A>>>11),A=y+(k^(_|~R))+E[8]+1873313359&4294967295,y=_+(A<<6&4294967295|A>>>26),A=R+(_^(y|~k))+E[15]+4264355552&4294967295,R=y+(A<<10&4294967295|A>>>22),A=k+(y^(R|~_))+E[6]+2734768916&4294967295,k=R+(A<<15&4294967295|A>>>17),A=_+(R^(k|~y))+E[13]+1309151649&4294967295,_=k+(A<<21&4294967295|A>>>11),A=y+(k^(_|~R))+E[4]+4149444226&4294967295,y=_+(A<<6&4294967295|A>>>26),A=R+(_^(y|~k))+E[11]+3174756917&4294967295,R=y+(A<<10&4294967295|A>>>22),A=k+(y^(R|~_))+E[2]+718787259&4294967295,k=R+(A<<15&4294967295|A>>>17),A=_+(R^(k|~y))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var _=y-this.blockSize,E=this.B,k=this.h,R=0;R<y;){if(k==0)for(;R<=_;)i(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<y;)if(E[k++]=w.charCodeAt(R++),k==this.blockSize){i(this,E),k=0;break}}else for(;R<y;)if(E[k++]=w[R++],k==this.blockSize){i(this,E),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var _=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.u(w),w=Array(16),y=_=0;4>y;++y)for(var E=0;32>E;E+=8)w[_++]=this.g[y]>>>E&255;return w};function s(w,y){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function o(w,y){this.h=y;for(var _=[],E=!0,k=w.length-1;0<=k;k--){var R=w[k]|0;E&&R==y||(_[k]=R,E=!1)}this.g=_}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return x(h(-w));for(var y=[],_=1,E=0;w>=_;E++)y[E]=w/_|0,_*=4294967296;return new o(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return x(d(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),E=p,k=0;k<w.length;k+=8){var R=Math.min(8,w.length-k),A=parseInt(w.substring(k,k+R),y);8>R?(R=h(Math.pow(y,R)),E=E.j(R).add(h(A))):(E=E.j(_),E=E.add(h(A)))}return E}var p=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-x(this).m();for(var w=0,y=1,_=0;_<this.g.length;_++){var E=this.i(_);w+=(0<=E?E:4294967296+E)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(P(this))return"-"+x(this).toString(w);for(var y=h(Math.pow(w,6)),_=this,E="";;){var k=D(_,y).g;_=T(_,k.j(y));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=k,C(_))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=T(this,w),P(w)?-1:C(w)?0:1};function x(w){for(var y=w.g.length,_=[],E=0;E<y;E++)_[E]=~w.g[E];return new o(_,~w.h).add(m)}t.abs=function(){return P(this)?x(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0,k=0;k<=y;k++){var R=E+(this.i(k)&65535)+(w.i(k)&65535),A=(R>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);E=A>>>16,R&=65535,A&=65535,_[k]=A<<16|R}return new o(_,_[_.length-1]&-2147483648?-1:0)};function T(w,y){return w.add(x(y))}t.j=function(w){if(C(this)||C(w))return p;if(P(this))return P(w)?x(this).j(x(w)):x(x(this).j(w));if(P(w))return x(this.j(x(w)));if(0>this.l(I)&&0>w.l(I))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,_=[],E=0;E<2*y;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var k=0;k<w.g.length;k++){var R=this.i(E)>>>16,A=this.i(E)&65535,dt=w.i(k)>>>16,un=w.i(k)&65535;_[2*E+2*k]+=A*un,v(_,2*E+2*k),_[2*E+2*k+1]+=R*un,v(_,2*E+2*k+1),_[2*E+2*k+1]+=A*dt,v(_,2*E+2*k+1),_[2*E+2*k+2]+=R*dt,v(_,2*E+2*k+2)}for(E=0;E<y;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=y;E<2*y;E++)_[E]=0;return new o(_,0)};function v(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function S(w,y){this.g=w,this.h=y}function D(w,y){if(C(y))throw Error("division by zero");if(C(w))return new S(p,p);if(P(w))return y=D(x(w),y),new S(x(y.g),x(y.h));if(P(y))return y=D(w,x(y)),new S(x(y.g),y.h);if(30<w.g.length){if(P(w)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,E=y;0>=E.l(w);)_=M(_),E=M(E);var k=B(_,1),R=B(E,1);for(E=B(E,2),_=B(_,2);!C(E);){var A=R.add(E);0>=A.l(w)&&(k=k.add(_),R=A),E=B(E,1),_=B(_,1)}return y=T(w,k.j(y)),new S(k,y)}for(k=p;0<=w.l(y);){for(_=Math.max(1,Math.floor(w.m()/y.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=h(_),A=R.j(y);P(A)||0<A.l(w);)_-=E,R=h(_),A=R.j(y);C(R)&&(R=m),k=k.add(R),w=T(w,A)}return new S(k,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)&w.i(E);return new o(_,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)|w.i(E);return new o(_,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],E=0;E<y;E++)_[E]=this.i(E)^w.i(E);return new o(_,this.h^w.h)};function M(w){for(var y=w.g.length+1,_=[],E=0;E<y;E++)_[E]=w.i(E)<<1|w.i(E-1)>>>31;return new o(_,w.h)}function B(w,y){var _=y>>5;y%=32;for(var E=w.g.length-_,k=[],R=0;R<E;R++)k[R]=0<y?w.i(R+_)>>>y|w.i(R+_+1)<<32-y:w.i(R+_);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,y_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Br=o}).apply(typeof Z0<"u"?Z0:typeof self<"u"?self:typeof window<"u"?window:{});var Ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var v_,__,zs,w_,il,Zh,E_,T_,I_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ma=="object"&&Ma];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in f))break e;f=f[N]}a=a[a.length-1],g=f[a],c=c(g),c!=g&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var f=0,g=!1,N={next:function(){if(!g&&f<a.length){var b=f++;return{value:c(b,a[b]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function d(a,c,f){return a.call.apply(a.bind,arguments)}function p(a,c,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function m(a,c,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function I(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,N,b){for(var z=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)z[ce-2]=arguments[ce];return c.prototype[N].apply(g,z)}}function P(a){const c=a.length;if(0<c){const f=Array(c);for(let g=0;g<c;g++)f[g]=a[g];return f}return[]}function x(a,c){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const N=a.length||0,b=g.length||0;a.length=N+b;for(let z=0;z<b;z++)a[N+z]=g[z]}else a.push(g)}}class T{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function B(a,c,f){for(const g in a)c.call(f,a[g],g,a)}function w(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function y(a){const c={};for(const f in a)c[f]=a[f];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,c){let f,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(f in g)a[f]=g[f];for(let b=0;b<_.length;b++)f=_[b],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function k(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function A(){var a=H;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class dt{constructor(){this.h=this.g=null}add(c,f){const g=un.get();g.set(c,f),this.h?this.h.next=g:this.g=g,this.h=g}}var un=new T(()=>new Un,a=>a.reset());class Un{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ke,F=!1,H=new dt,G=()=>{const a=l.Promise.resolve(void 0);Ke=()=>{a.then(ae)}};var ae=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(f){R(f)}var c=un;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}F=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var Lt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function cn(a,c){if(ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(M){e:{try{D(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:hn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&cn.aa.h.call(this)}}C(cn,ve);var hn={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),mw=0;function gw(a,c,f,g,N){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!g,this.ha=N,this.key=++mw,this.da=this.fa=!1}function na(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ra(a){this.src=a,this.g={},this.h=0}ra.prototype.add=function(a,c,f,g,N){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var z=Mu(a,c,g,N);return-1<z?(c=a[z],f||(c.fa=!1)):(c=new gw(c,this.src,b,!!g,N),c.fa=f,a.push(c)),c};function Vu(a,c){var f=c.type;if(f in a.g){var g=a.g[f],N=Array.prototype.indexOf.call(g,c,void 0),b;(b=0<=N)&&Array.prototype.splice.call(g,N,1),b&&(na(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Mu(a,c,f,g){for(var N=0;N<a.length;++N){var b=a[N];if(!b.da&&b.listener==c&&b.capture==!!f&&b.ha==g)return N}return-1}var Fu="closure_lm_"+(1e6*Math.random()|0),Uu={};function cp(a,c,f,g,N){if(Array.isArray(c)){for(var b=0;b<c.length;b++)cp(a,c[b],f,g,N);return null}return f=fp(f),a&&a[dn]?a.K(c,f,h(g)?!!g.capture:!!g,N):yw(a,c,f,!1,g,N)}function yw(a,c,f,g,N,b){if(!c)throw Error("Invalid event type");var z=h(N)?!!N.capture:!!N,ce=Bu(a);if(ce||(a[Fu]=ce=new ra(a)),f=ce.add(c,f,g,z,b),f.proxy)return f;if(g=vw(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Lt||(N=z),N===void 0&&(N=!1),a.addEventListener(c.toString(),g,N);else if(a.attachEvent)a.attachEvent(dp(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function vw(){function a(f){return c.call(a.src,a.listener,f)}const c=_w;return a}function hp(a,c,f,g,N){if(Array.isArray(c))for(var b=0;b<c.length;b++)hp(a,c[b],f,g,N);else g=h(g)?!!g.capture:!!g,f=fp(f),a&&a[dn]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],f=Mu(b,f,g,N),-1<f&&(na(b[f]),Array.prototype.splice.call(b,f,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=Bu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Mu(c,f,g,N)),(f=-1<a?c[a]:null)&&ju(f))}function ju(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[dn])Vu(c.i,a);else{var f=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(f,g,a.capture):c.detachEvent?c.detachEvent(dp(f),g):c.addListener&&c.removeListener&&c.removeListener(g),(f=Bu(c))?(Vu(f,a),f.h==0&&(f.src=null,c[Fu]=null)):na(a)}}}function dp(a){return a in Uu?Uu[a]:Uu[a]="on"+a}function _w(a,c){if(a.da)a=!0;else{c=new cn(c,this);var f=a.listener,g=a.ha||a.src;a.fa&&ju(a),a=f.call(g,c)}return a}function Bu(a){return a=a[Fu],a instanceof ra?a:null}var zu="__closure_events_fn_"+(1e9*Math.random()>>>0);function fp(a){return typeof a=="function"?a:(a[zu]||(a[zu]=function(c){return a.handleEvent(c)}),a[zu])}function Ge(){le.call(this),this.i=new ra(this),this.M=this,this.F=null}C(Ge,le),Ge.prototype[dn]=!0,Ge.prototype.removeEventListener=function(a,c,f,g){hp(this,a,c,f,g)};function ot(a,c){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new ve(c,a);else if(c instanceof ve)c.target=c.target||a;else{var N=c;c=new ve(g,a),E(c,N)}if(N=!0,f)for(var b=f.length-1;0<=b;b--){var z=c.g=f[b];N=ia(z,g,!0,c)&&N}if(z=c.g=a,N=ia(z,g,!0,c)&&N,N=ia(z,g,!1,c)&&N,f)for(b=0;b<f.length;b++)z=c.g=f[b],N=ia(z,g,!1,c)&&N}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],g=0;g<f.length;g++)na(f[g]);delete a.g[c],a.h--}}this.F=null},Ge.prototype.K=function(a,c,f,g){return this.i.add(String(a),c,!1,f,g)},Ge.prototype.L=function(a,c,f,g){return this.i.add(String(a),c,!0,f,g)};function ia(a,c,f,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,b=0;b<c.length;++b){var z=c[b];if(z&&!z.da&&z.capture==f){var ce=z.listener,Ue=z.ha||z.src;z.fa&&Vu(a.i,z),N=ce.call(Ue,g)!==!1&&N}}return N&&!g.defaultPrevented}function pp(a,c,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function mp(a){a.g=pp(()=>{a.g=null,a.i&&(a.i=!1,mp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class ww extends le{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:mp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ds(a){le.call(this),this.h=a,this.g={}}C(ds,le);var gp=[];function yp(a){B(a.g,function(c,f){this.g.hasOwnProperty(f)&&ju(c)},a),a.g={}}ds.prototype.N=function(){ds.aa.N.call(this),yp(this)},ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $u=l.JSON.stringify,Ew=l.JSON.parse,Tw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Wu(){}Wu.prototype.h=null;function vp(a){return a.h||(a.h=a.i())}function _p(){}var fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hu(){ve.call(this,"d")}C(Hu,ve);function qu(){ve.call(this,"c")}C(qu,ve);var Cr={},wp=null;function sa(){return wp=wp||new Ge}Cr.La="serverreachability";function Ep(a){ve.call(this,Cr.La,a)}C(Ep,ve);function ps(a){const c=sa();ot(c,new Ep(c))}Cr.STAT_EVENT="statevent";function Tp(a,c){ve.call(this,Cr.STAT_EVENT,a),this.stat=c}C(Tp,ve);function at(a){const c=sa();ot(c,new Tp(c,a))}Cr.Ma="timingevent";function Ip(a,c){ve.call(this,Cr.Ma,a),this.size=c}C(Ip,ve);function ms(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function gs(){this.g=!0}gs.prototype.xa=function(){this.g=!1};function Iw(a,c,f,g,N,b){a.info(function(){if(a.g)if(b)for(var z="",ce=b.split("&"),Ue=0;Ue<ce.length;Ue++){var se=ce[Ue].split("=");if(1<se.length){var Qe=se[0];se=se[1];var Ye=Qe.split("_");z=2<=Ye.length&&Ye[1]=="type"?z+(Qe+"="+se+"&"):z+(Qe+"=redacted&")}}else z=null;else z=b;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+c+`
`+f+`
`+z})}function Sw(a,c,f,g,N,b,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+c+`
`+f+`
`+b+" "+z})}function li(a,c,f,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+kw(a,f)+(g?" "+g:"")})}function Aw(a,c){a.info(function(){return"TIMEOUT: "+c})}gs.prototype.info=function(){};function kw(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var b=N[0];if(b!="noop"&&b!="stop"&&b!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return $u(f)}catch{return c}}var oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ku;function aa(){}C(aa,Wu),aa.prototype.g=function(){return new XMLHttpRequest},aa.prototype.i=function(){return{}},Ku=new aa;function jn(a,c,f,g){this.j=a,this.i=c,this.l=f,this.R=g||1,this.U=new ds(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ap}function Ap(){this.i=null,this.g="",this.h=!1}var kp={},Gu={};function Qu(a,c,f){a.L=1,a.v=ha(fn(c)),a.m=f,a.P=!0,Cp(a,null)}function Cp(a,c){a.F=Date.now(),la(a),a.A=fn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Bp(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Ap,a.g=sm(a.j,f?c:null,!a.m),0<a.O&&(a.M=new ww(m(a.Y,a,a.g),a.O)),c=a.U,f=a.g,g=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(gp[0]=N.toString()),N=gp);for(var b=0;b<N.length;b++){var z=cp(f,N[b],g||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),ps(),Iw(a.i,a.u,a.A,a.l,a.R,a.m)}jn.prototype.ca=function(a){a=a.target;const c=this.M;c&&pn(a)==3?c.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const Ye=pn(this.g);var c=this.g.Ba();const hi=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||Gp(this.g)))){this.J||Ye!=4||c==7||(c==8||0>=hi?ps(3):ps(2)),Yu(this);var f=this.g.Z();this.X=f;t:if(Pp(this)){var g=Gp(this.g);a="";var N=g.length,b=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),ys(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(b&&c==N-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,Sw(this.i,this.u,this.A,this.l,this.R,Ye,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,Ue=this.g;if((ce=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ce)){var se=ce;break t}}se=null}if(f=se)li(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xu(this,f);else{this.o=!1,this.s=3,at(12),Pr(this),ys(this);break e}}if(this.P){f=!0;let Vt;for(;!this.J&&this.C<z.length;)if(Vt=Cw(this,z),Vt==Gu){Ye==4&&(this.s=4,at(14),f=!1),li(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==kp){this.s=4,at(15),li(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else li(this.i,this.l,Vt,null),Xu(this,Vt);if(Pp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||z.length!=0||this.h.h||(this.s=1,at(16),f=!1),this.o=this.o&&f,!f)li(this.i,this.l,z,"[Invalid Chunked Response]"),Pr(this),ys(this);else if(0<z.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),rc(Qe),Qe.M=!0,at(11))}}else li(this.i,this.l,z,null),Xu(this,z);Ye==4&&Pr(this),this.o&&!this.J&&(Ye==4?tm(this.j,this):(this.o=!1,la(this)))}else Ww(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Pr(this),ys(this)}}}catch{}finally{}};function Pp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Cw(a,c){var f=a.C,g=c.indexOf(`
`,f);return g==-1?Gu:(f=Number(c.substring(f,g)),isNaN(f)?kp:(g+=1,g+f>c.length?Gu:(c=c.slice(g,g+f),a.C=g+f,c)))}jn.prototype.cancel=function(){this.J=!0,Pr(this)};function la(a){a.S=Date.now()+a.I,Rp(a,a.I)}function Rp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ms(m(a.ba,a),c)}function Yu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Aw(this.i,this.A),this.L!=2&&(ps(),at(17)),Pr(this),this.s=2,ys(this)):Rp(this,this.S-a)};function ys(a){a.j.G==0||a.J||tm(a.j,a)}function Pr(a){Yu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,yp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Xu(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||Ju(f.h,a))){if(!a.K&&Ju(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ga(f),pa(f);else break e;nc(f),at(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=ms(m(f.Za,f),6e3));if(1>=Op(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Nr(f,11)}else if((a.K||f.g==a)&&ga(f),!v(c))for(N=f.Da.g.parse(c),c=0;c<N.length;c++){let se=N[c];if(f.T=se[0],se=se[1],f.G==2)if(se[0]=="c"){f.K=se[1],f.ia=se[2];const Qe=se[3];Qe!=null&&(f.la=Qe,f.j.info("VER="+f.la));const Ye=se[4];Ye!=null&&(f.Aa=Ye,f.j.info("SVER="+f.Aa));const hi=se[5];hi!=null&&typeof hi=="number"&&0<hi&&(g=1.5*hi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Vt=a.g;if(Vt){const va=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(va){var b=g.h;b.g||va.indexOf("spdy")==-1&&va.indexOf("quic")==-1&&va.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Zu(b,b.h),b.h=null))}if(g.D){const ic=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;ic&&(g.ya=ic,pe(g.I,g.D,ic))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=im(g,g.J?g.ia:null,g.W),z.K){Dp(g.h,z);var ce=z,Ue=g.L;Ue&&(ce.I=Ue),ce.B&&(Yu(ce),la(ce)),g.g=z}else Zp(g);0<f.i.length&&ma(f)}else se[0]!="stop"&&se[0]!="close"||Nr(f,7);else f.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Nr(f,7):tc(f):se[0]!="noop"&&f.l&&f.l.ta(se),f.v=0)}}ps(4)}catch{}}var Pw=class{constructor(a,c){this.g=a,this.map=c}};function Np(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Op(a){return a.h?1:a.g?a.g.size:0}function Ju(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Zu(a,c){a.g?a.g.add(c):a.h=c}function Dp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Np.prototype.cancel=function(){if(this.i=bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return P(a.i)}function Rw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,g=0;g<f;g++)c.push(a[g]);return c}c=[],f=0;for(g in a)c[f++]=a[g];return c}function Nw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const g in a)c[f++]=g;return c}}}function Lp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=Nw(a),g=Rw(a),N=g.length,b=0;b<N;b++)c.call(void 0,g[b],f&&f[b],a)}var Vp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xw(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),N=null;if(0<=g){var b=a[f].substring(0,g);N=a[f].substring(g+1)}else b=a[f];c(b,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Rr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Rr){this.h=a.h,ua(this,a.j),this.o=a.o,this.g=a.g,ca(this,a.s),this.l=a.l;var c=a.i,f=new ws;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),Mp(this,f),this.m=a.m}else a&&(c=String(a).match(Vp))?(this.h=!1,ua(this,c[1]||"",!0),this.o=vs(c[2]||""),this.g=vs(c[3]||"",!0),ca(this,c[4]),this.l=vs(c[5]||"",!0),Mp(this,c[6]||"",!0),this.m=vs(c[7]||"")):(this.h=!1,this.i=new ws(null,this.h))}Rr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(_s(c,Fp,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(_s(c,Fp,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(_s(f,f.charAt(0)=="/"?bw:Dw,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",_s(f,Vw)),a.join("")};function fn(a){return new Rr(a)}function ua(a,c,f){a.j=f?vs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ca(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Mp(a,c,f){c instanceof ws?(a.i=c,Mw(a.i,a.h)):(f||(c=_s(c,Lw)),a.i=new ws(c,a.h))}function pe(a,c,f){a.i.set(c,f)}function ha(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function vs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function _s(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,Ow),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ow(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fp=/[#\/\?@]/g,Dw=/[#\?:]/g,bw=/[#\?]/g,Lw=/[#\?@]/g,Vw=/#/g;function ws(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Bn(a){a.g||(a.g=new Map,a.h=0,a.i&&xw(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=ws.prototype,t.add=function(a,c){Bn(this),this.i=null,a=ui(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function Up(a,c){Bn(a),c=ui(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function jp(a,c){return Bn(a),c=ui(a,c),a.g.has(c)}t.forEach=function(a,c){Bn(this),this.g.forEach(function(f,g){f.forEach(function(N){a.call(c,N,g,this)},this)},this)},t.na=function(){Bn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let g=0;g<c.length;g++){const N=a[g];for(let b=0;b<N.length;b++)f.push(c[g])}return f},t.V=function(a){Bn(this);let c=[];if(typeof a=="string")jp(this,a)&&(c=c.concat(this.g.get(ui(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return Bn(this),this.i=null,a=ui(this,a),jp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Bp(a,c,f){Up(a,c),0<f.length&&(a.i=null,a.g.set(ui(a,c),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var g=c[f];const b=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var N=b;z[g]!==""&&(N+="="+encodeURIComponent(String(z[g]))),a.push(N)}}return this.i=a.join("&")};function ui(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Mw(a,c){c&&!a.j&&(Bn(a),a.i=null,a.g.forEach(function(f,g){var N=g.toLowerCase();g!=N&&(Up(this,g),Bp(this,N,f))},a)),a.j=c}function Fw(a,c){const f=new gs;if(l.Image){const g=new Image;g.onload=I(zn,f,"TestLoadImage: loaded",!0,c,g),g.onerror=I(zn,f,"TestLoadImage: error",!1,c,g),g.onabort=I(zn,f,"TestLoadImage: abort",!1,c,g),g.ontimeout=I(zn,f,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function Uw(a,c){const f=new gs,g=new AbortController,N=setTimeout(()=>{g.abort(),zn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(b=>{clearTimeout(N),b.ok?zn(f,"TestPingServer: ok",!0,c):zn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),zn(f,"TestPingServer: error",!1,c)})}function zn(a,c,f,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(f)}catch{}}function jw(){this.g=new Tw}function Bw(a,c,f){const g=f||"";try{Lp(a,function(N,b){let z=N;h(N)&&(z=$u(N)),c.push(g+b+"="+encodeURIComponent(z))})}catch(N){throw c.push(g+"type="+encodeURIComponent("_badmap")),N}}function Es(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Es,Wu),Es.prototype.g=function(){return new da(this.l,this.j)},Es.prototype.i=function(a){return function(){return a}}({});function da(a,c){Ge.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(da,Ge),t=da.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Is(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ts(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Is(this)),this.g&&(this.readyState=3,Is(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function zp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ts(this):Is(this),this.readyState==3&&zp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ts(this))},t.Qa=function(a){this.g&&(this.response=a,Ts(this))},t.ga=function(){this.g&&Ts(this)};function Ts(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Is(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function Is(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $p(a){let c="";return B(a,function(f,g){c+=g,c+=":",c+=f,c+=`\r
`}),c}function ec(a,c,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=$p(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):pe(a,c,f))}function Ie(a){Ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ie,Ge);var zw=/^https?$/i,$w=["POST","PUT"];t=Ie.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ku.g(),this.v=this.o?vp(this.o):vp(Ku),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){Wp(this,b);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)f.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const b of g.keys())f.set(b,g.get(b));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(b=>b.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call($w,c,void 0))||g||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,z]of f)this.g.setRequestHeader(b,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kp(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){Wp(this,b)}};function Wp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Hp(a),fa(a)}function Hp(a){a.A||(a.A=!0,ot(a,"complete"),ot(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ot(this,"complete"),ot(this,"abort"),fa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fa(this,!0)),Ie.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qp(this):this.bb())},t.bb=function(){qp(this)};function qp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pn(a)!=4||a.Z()!=2)){if(a.u&&pn(a)==4)pp(a.Ea,0,a);else if(ot(a,"readystatechange"),pn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var g;if(g=z===0){var N=String(a.D).match(Vp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),g=!zw.test(N?N.toLowerCase():"")}f=g}if(f)ot(a,"complete"),ot(a,"success");else{a.m=6;try{var b=2<pn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",Hp(a)}}finally{fa(a)}}}}function fa(a,c){if(a.g){Kp(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ot(a,"ready");try{f.onreadystatechange=g}catch{}}}function Kp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Ew(c)}};function Gp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ww(a){const c={};a=(a.g&&2<=pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var f=k(a[g]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const b=c[N]||[];c[N]=b,b.push(f)}w(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ss(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function Qp(a){this.Aa=0,this.i=[],this.j=new gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ss("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ss("baseRetryDelayMs",5e3,a),this.cb=Ss("retryDelaySeedMs",1e4,a),this.Wa=Ss("forwardChannelMaxRetries",2,a),this.wa=Ss("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Np(a&&a.concurrentRequestLimit),this.Da=new jw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qp.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,g){at(0),this.W=a,this.H=c||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=im(this,null,this.W),ma(this)};function tc(a){if(Yp(a),a.G==3){var c=a.U++,f=fn(a.I);if(pe(f,"SID",a.K),pe(f,"RID",c),pe(f,"TYPE","terminate"),As(a,f),c=new jn(a,a.j,c),c.L=2,c.v=ha(fn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=sm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),la(c)}rm(a)}function pa(a){a.g&&(rc(a),a.g.cancel(),a.g=null)}function Yp(a){pa(a),a.u&&(l.clearTimeout(a.u),a.u=null),ga(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ma(a){if(!xp(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ke||G(),F||(Ke(),F=!0),H.add(c,a),a.B=0}}function Hw(a,c){return Op(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ms(m(a.Ga,a,c),nm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new jn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=y(b),E(b,this.S)):b=this.S),this.m!==null||this.O||(N.H=b,b=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=Jp(this,N,c),f=fn(this.I),pe(f,"RID",a),pe(f,"CVER",22),this.D&&pe(f,"X-HTTP-Session-Id",this.D),As(this,f),b&&(this.O?c="headers="+encodeURIComponent(String($p(b)))+"&"+c:this.m&&ec(f,this.m,b)),Zu(this.h,N),this.Ua&&pe(f,"TYPE","init"),this.P?(pe(f,"$req",c),pe(f,"SID","null"),N.T=!0,Qu(N,f,null)):Qu(N,f,c),this.G=2}}else this.G==3&&(a?Xp(this,a):this.i.length==0||xp(this.h)||Xp(this))};function Xp(a,c){var f;c?f=c.l:f=a.U++;const g=fn(a.I);pe(g,"SID",a.K),pe(g,"RID",f),pe(g,"AID",a.T),As(a,g),a.m&&a.o&&ec(g,a.m,a.o),f=new jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Jp(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Zu(a.h,f),Qu(f,g,c)}function As(a,c){a.H&&B(a.H,function(f,g){pe(c,g,f)}),a.l&&Lp({},function(f,g){pe(c,g,f)})}function Jp(a,c,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var N=a.i;let b=-1;for(;;){const z=["count="+f];b==-1?0<f?(b=N[0].g,z.push("ofs="+b)):b=0:z.push("ofs="+b);let ce=!0;for(let Ue=0;Ue<f;Ue++){let se=N[Ue].g;const Qe=N[Ue].map;if(se-=b,0>se)b=Math.max(0,N[Ue].g-100),ce=!1;else try{Bw(Qe,z,"req"+se+"_")}catch{g&&g(Qe)}}if(ce){g=z.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,g}function Zp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ke||G(),F||(Ke(),F=!0),H.add(c,a),a.v=0}}function nc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ms(m(a.Fa,a),nm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,em(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ms(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),pa(this),em(this))};function rc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function em(a){a.g=new jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=fn(a.qa);pe(c,"RID","rpc"),pe(c,"SID",a.K),pe(c,"AID",a.T),pe(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(c,"TO",a.ja),pe(c,"TYPE","xmlhttp"),As(a,c),a.m&&a.o&&ec(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ha(fn(c)),f.m=null,f.P=!0,Cp(f,a)}t.Za=function(){this.C!=null&&(this.C=null,pa(this),nc(this),at(19))};function ga(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function tm(a,c){var f=null;if(a.g==c){ga(a),rc(a),a.g=null;var g=2}else if(Ju(a.h,c))f=c.D,Dp(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;g=sa(),ot(g,new Ip(g,f)),ma(a)}else Zp(a);else if(N=c.s,N==3||N==0&&0<c.X||!(g==1&&Hw(a,c)||g==2&&nc(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),N){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function nm(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function Nr(a,c){if(a.j.info("Error code "+c),c==2){var f=m(a.fb,a),g=a.Xa;const N=!g;g=new Rr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ua(g,"https"),ha(g),N?Fw(g.toString(),f):Uw(g.toString(),f)}else at(2);a.G=0,a.l&&a.l.sa(c),rm(a),Yp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function rm(a){if(a.G=0,a.ka=[],a.l){const c=bp(a.h);(c.length!=0||a.i.length!=0)&&(x(a.ka,c),x(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function im(a,c,f){var g=f instanceof Rr?fn(f):new Rr(f);if(g.g!="")c&&(g.g=c+"."+g.g),ca(g,g.s);else{var N=l.location;g=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var b=new Rr(null);g&&ua(b,g),c&&(b.g=c),N&&ca(b,N),f&&(b.l=f),g=b}return f=a.D,c=a.ya,f&&c&&pe(g,f,c),pe(g,"VER",a.la),As(a,g),g}function sm(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ie(new Es({eb:f})):new Ie(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function om(){}t=om.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ya(){}ya.prototype.g=function(a,c){return new _t(a,c)};function _t(a,c){Ge.call(this),this.g=new Qp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ci(this)}C(_t,Ge),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){tc(this.g)},_t.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=$u(a),a=f);c.i.push(new Pw(c.Ya++,a)),c.G==3&&ma(c)},_t.prototype.N=function(){this.g.l=null,delete this.j,tc(this.g),delete this.g,_t.aa.N.call(this)};function am(a){Hu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(am,Hu);function lm(){qu.call(this),this.status=1}C(lm,qu);function ci(a){this.g=a}C(ci,om),ci.prototype.ua=function(){ot(this.g,"a")},ci.prototype.ta=function(a){ot(this.g,new am(a))},ci.prototype.sa=function(a){ot(this.g,new lm)},ci.prototype.ra=function(){ot(this.g,"b")},ya.prototype.createWebChannel=ya.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,I_=function(){return new ya},T_=function(){return sa()},E_=Cr,Zh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oa.NO_ERROR=0,oa.TIMEOUT=8,oa.HTTP_ERROR=6,il=oa,Sp.COMPLETE="complete",w_=Sp,_p.EventType=fs,fs.OPEN="a",fs.CLOSE="b",fs.ERROR="c",fs.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,zs=_p,__=Es,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,v_=Ie}).apply(typeof Ma<"u"?Ma:typeof self<"u"?self:typeof window<"u"?window:{});const eg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new hf("@firebase/firestore");function Ls(){return Xr.logLevel}function W(t,...e){if(Xr.logLevel<=ne.DEBUG){const n=e.map(If);Xr.debug(`Firestore (${ls}): ${t}`,...n)}}function bn(t,...e){if(Xr.logLevel<=ne.ERROR){const n=e.map(If);Xr.error(`Firestore (${ls}): ${t}`,...n)}}function Gi(t,...e){if(Xr.logLevel<=ne.WARN){const n=e.map(If);Xr.warn(`Firestore (${ls}): ${t}`,...n)}}function If(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function he(t,e){t||Y()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class WC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HC{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new S_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new et(e)}}class qC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class KC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new qC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new GC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=YC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Qi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Le(0,0))}static max(){return new X(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Po.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Po?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends Po{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const XC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Po{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return XC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ae.fromString(e))}static fromName(e){return new K(Ae.fromString(e).popFirst(5))}static empty(){return new K(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ae(e.slice()))}}function JC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new vr(i,K.empty(),e)}function ZC(t){return new vr(t.readTime,t.key,-1)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(X.min(),K.empty(),-1)}static max(){return new vr(X.max(),K.empty(),-1)}}function eP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==tP)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(d=>{o[h]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function rP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Sf.oe=-1;function Su(t){return t==null}function Hl(t){return t===0&&1/t==-1/0}function iP(t){return typeof t=="number"&&Number.isInteger(t)&&!Hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function k_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fa(this.root,e,this.comparator,!0)}}class Fa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ng(this.data.getIterator())}getIteratorFrom(e){return new ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new We(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new C_("Invalid base64 string: "+s):s}}(e);return new qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const sP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(he(!!t),typeof t=="string"){let e=0;const n=sP.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kf(t){const e=t.mapValue.fields.__previous_value__;return Af(e)?kf(e):e}function Ro(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class No{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new No("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof No&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Af(t)?4:lP(t)?9007199254740991:aP(t)?10:11:Y()}function on(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ro(t).isEqual(Ro(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=_r(i.timestampValue),l=_r(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Jr(i.bytesValue).isEqual(Jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?Hl(o)===Hl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Qi(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(tg(o)!==tg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!on(o[u],l[u])))return!1;return!0}(t,e);default:return Y()}}function xo(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function Yi(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return rg(t.timestampValue,e.timestampValue);case 4:return rg(Ro(t),Ro(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Jr(s),u=Jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const d=oe(l[h],u[h]);if(d!==0)return d}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(Ce(s.latitude),Ce(o.latitude));return l!==0?l:oe(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ig(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,d;const p=s.fields||{},m=o.fields||{},I=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=oe(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:ig(I,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ua.mapValue&&o===Ua.mapValue)return 0;if(s===Ua.mapValue)return 1;if(o===Ua.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=oe(u[p],d[p]);if(m!==0)return m;const I=Yi(l[u[p]],h[d[p]]);if(I!==0)return I}return oe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y()}}function rg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=_r(t),r=_r(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function ig(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Yi(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function Xi(t){return ed(t)}function ed(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ed(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ed(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function td(t){return!!t&&"integerValue"in t}function Cf(t){return!!t&&"arrayValue"in t}function sg(t){return!!t&&"nullValue"in t}function og(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sl(t){return!!t&&"mapValue"in t}function aP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function to(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return us(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=to(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=to(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=to(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=to(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());sl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];sl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){us(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(to(this.value))}}function P_(t){const e=[];return us(t.fields,(n,r)=>{const i=new ze([n]);if(sl(r)){const s=P_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,X.min(),X.min(),X.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,X.min(),X.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,X.min(),X.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n){this.position=e,this.inclusive=n}}function ag(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Yi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function lg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function uP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{}class De extends R_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hP(e,n,r):n==="array-contains"?new pP(e,r):n==="in"?new mP(e,r):n==="not-in"?new gP(e,r):n==="array-contains-any"?new yP(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dP(e,r):new fP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yi(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(Yi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends R_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new an(e,n)}matches(e){return N_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function N_(t){return t.op==="and"}function x_(t){return cP(t)&&N_(t)}function cP(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function nd(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Xi(t.value);if(x_(t))return t.filters.map(e=>nd(e)).join(",");{const e=t.filters.map(n=>nd(n)).join(",");return`${t.op}(${e})`}}function O_(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&on(r.value,i.value)}(t,e):t instanceof an?function(r,i){return i instanceof an&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&O_(o,i.filters[l]),!0):!1}(t,e):void Y()}function D_(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${Xi(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(D_).join(" ,")+"}"}(t):"Filter"}class hP extends De{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class dP extends De{constructor(e,n){super(e,"in",n),this.keys=b_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fP extends De{constructor(e,n){super(e,"not-in",n),this.keys=b_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function b_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class pP extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cf(n)&&xo(n.arrayValue,this.value)}}class mP extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xo(this.value.arrayValue,n)}}class gP extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(xo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xo(this.value.arrayValue,n)}}class yP extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function ug(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vP(t,e,n,r,i,s,o)}function Pf(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>nd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xi(r)).join(",")),e.ue=n}return e.ue}function Rf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!O_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lg(t.startAt,e.startAt)&&lg(t.endAt,e.endAt)}function rd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function _P(t,e,n,r,i,s,o,l){return new Au(t,e,n,r,i,s,o,l)}function Nf(t){return new Au(t)}function cg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wP(t){return t.collectionGroup!==null}function no(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new We(ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Kl(s,r))}),n.has(ze.keyField().canonicalString())||e.ce.push(new Kl(ze.keyField(),r))}return e.ce}function nn(t){const e=J(t);return e.le||(e.le=EP(e,no(t))),e.le}function EP(t,e){if(t.limitType==="F")return ug(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Kl(i.field,s)});const n=t.endAt?new ql(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ql(t.startAt.position,t.startAt.inclusive):null;return ug(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function id(t,e,n){return new Au(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ku(t,e){return Rf(nn(t),nn(e))&&t.limitType===e.limitType}function L_(t){return`${Pf(nn(t))}|lt:${t.limitType}`}function fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>D_(i)).join(", ")}]`),Su(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xi(i)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function Cu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of no(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=ag(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,no(r),i)||r.endAt&&!function(o,l,u){const h=ag(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,no(r),i))}(t,e)}function TP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function V_(t){return(e,n)=>{let r=!1;for(const i of no(t)){const s=IP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function IP(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Yi(u,h):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return k_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=new Te(K.comparator);function Ln(){return SP}const M_=new Te(K.comparator);function $s(...t){let e=M_;for(const n of t)e=e.insert(n.key,n);return e}function F_(t){let e=M_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mr(){return ro()}function U_(){return ro()}function ro(){return new cs(t=>t.toString(),(t,e)=>t.isEqual(e))}const AP=new Te(K.comparator),kP=new We(K.comparator);function te(...t){let e=kP;for(const n of t)e=e.add(n);return e}const CP=new We(oe);function PP(){return CP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hl(e)?"-0":e}}function j_(t){return{integerValue:""+t}}function RP(t,e){return iP(e)?j_(e):xf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this._=void 0}}function NP(t,e,n){return t instanceof Gl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Af(s)&&(s=kf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Oo?z_(t,e):t instanceof Do?$_(t,e):function(i,s){const o=B_(i,s),l=hg(o)+hg(i.Pe);return td(o)&&td(i.Pe)?j_(l):xf(i.serializer,l)}(t,e)}function xP(t,e,n){return t instanceof Oo?z_(t,e):t instanceof Do?$_(t,e):n}function B_(t,e){return t instanceof Ql?function(r){return td(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Gl extends Pu{}class Oo extends Pu{constructor(e){super(),this.elements=e}}function z_(t,e){const n=W_(e);for(const r of t.elements)n.some(i=>on(i,r))||n.push(r);return{arrayValue:{values:n}}}class Do extends Pu{constructor(e){super(),this.elements=e}}function $_(t,e){let n=W_(e);for(const r of t.elements)n=n.filter(i=>!on(i,r));return{arrayValue:{values:n}}}class Ql extends Pu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function hg(t){return Ce(t.integerValue||t.doubleValue)}function W_(t){return Cf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Oo&&i instanceof Oo||r instanceof Do&&i instanceof Do?Qi(r.elements,i.elements,on):r instanceof Ql&&i instanceof Ql?on(r.Pe,i.Pe):r instanceof Gl&&i instanceof Gl}(t.transform,e.transform)}class DP{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ol(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ru{}function H_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new K_(t.key,Cn.none()):new Jo(t.key,t.data,Cn.none());{const n=t.data,r=Pt.empty();let i=new We(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new oi(t.key,r,new Bt(i.toArray()),Cn.none())}}function bP(t,e,n){t instanceof Jo?function(i,s,o){const l=i.value.clone(),u=fg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof oi?function(i,s,o){if(!ol(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=fg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(q_(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function io(t,e,n,r){return t instanceof Jo?function(s,o,l,u){if(!ol(s.precondition,o))return l;const h=s.value.clone(),d=pg(s.fieldTransforms,u,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof oi?function(s,o,l,u){if(!ol(s.precondition,o))return l;const h=pg(s.fieldTransforms,u,o),d=o.data;return d.setAll(q_(s)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return ol(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function LP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=B_(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function dg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qi(r,i,(s,o)=>OP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jo extends Ru{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class oi extends Ru{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function q_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function fg(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,xP(o,l,n[i]))}return r}function pg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,NP(s,o,e))}return r}class K_ extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VP extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&bP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=U_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=H_(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Qi(this.mutations,e.mutations,(n,r)=>dg(n,r))&&Qi(this.baseMutations,e.baseMutations,(n,r)=>dg(n,r))}}class Of{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length);let i=function(){return AP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Of(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,re;function jP(t){switch(t){default:return Y();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function G_(t){if(t===void 0)return bn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Re.OK:return U.OK;case Re.CANCELLED:return U.CANCELLED;case Re.UNKNOWN:return U.UNKNOWN;case Re.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Re.INTERNAL:return U.INTERNAL;case Re.UNAVAILABLE:return U.UNAVAILABLE;case Re.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Re.NOT_FOUND:return U.NOT_FOUND;case Re.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Re.ABORTED:return U.ABORTED;case Re.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Re.DATA_LOSS:return U.DATA_LOSS;default:return Y()}}(re=Re||(Re={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=new Br([4294967295,4294967295],0);function mg(t){const e=BP().encode(t),n=new y_;return n.update(e),new Uint8Array(n.digest())}function gg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Br([n,r],0),new Br([i,s],0)]}class Df{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ws(`Invalid padding: ${n}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Br.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Br.fromNumber(r)));return i.compare(zP)===1&&(i=new Br([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=mg(e),[r,i]=gg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Df(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=mg(e),[r,i]=gg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Zo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Nu(X.min(),i,new Te(oe),Ln(),te())}}class Zo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zo(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Q_{constructor(e,n){this.targetId=e,this.me=n}}class Y_{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class yg{constructor(){this.fe=0,this.ge=_g(),this.pe=qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Zo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=_g()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $P{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ln(),this.qe=vg(),this.Qe=new Te(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(rd(s))if(r===0){const o=new K(s.path);this.Ue(n,o,nt.newNoDocument(o,X.min()))}else he(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Jr(r).toUint8Array()}catch(u){if(u instanceof C_)return Gi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Df(o,i,s)}catch(u){return Gi(u instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&rd(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,nt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Nu(e,n,this.Qe,this.ke,r);return this.ke=Ln(),this.qe=vg(),this.Qe=new Te(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new yg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new We(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new yg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function vg(){return new Te(K.comparator)}function _g(){return new Te(K.comparator)}const WP={asc:"ASCENDING",desc:"DESCENDING"},HP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qP={and:"AND",or:"OR"};class KP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sd(t,e){return t.useProto3Json||Su(e)?e:{value:e}}function Yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function X_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function GP(t,e){return Yl(t,e.toTimestamp())}function rn(t){return he(!!t),X.fromTimestamp(function(n){const r=_r(n);return new Le(r.seconds,r.nanos)}(t))}function bf(t,e){return od(t,e).canonicalString()}function od(t,e){const n=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function J_(t){const e=Ae.fromString(t);return he(r1(e)),e}function ad(t,e){return bf(t.databaseId,e.path)}function Bc(t,e){const n=J_(e);if(n.get(1)!==t.databaseId.projectId)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(e1(n))}function Z_(t,e){return bf(t.databaseId,e)}function QP(t){const e=J_(t);return e.length===4?Ae.emptyPath():e1(e)}function ld(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function e1(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wg(t,e,n){return{name:ad(t,e),fields:n.value.mapValue.fields}}function YP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,d){return h.useProto3Json?(he(d===void 0||typeof d=="string"),qe.fromBase64String(d||"")):(he(d===void 0||d instanceof Buffer||d instanceof Uint8Array),qe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?U.UNKNOWN:G_(h.code);return new q(d,h.message||"")}(o);n=new Y_(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bc(t,r.document.name),s=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):X.min(),l=new Pt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new al(h,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Bc(t,r.document),s=r.readTime?rn(r.readTime):X.min(),o=nt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new al([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Bc(t,r.document),s=r.removedTargetIds||[];n=new al([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new UP(i,s),l=r.targetId;n=new Q_(l,o)}}return n}function XP(t,e){let n;if(e instanceof Jo)n={update:wg(t,e.key,e.value)};else if(e instanceof K_)n={delete:ad(t,e.key)};else if(e instanceof oi)n={update:wg(t,e.key,e.data),updateMask:oR(e.fieldMask)};else{if(!(e instanceof VP))return Y();n={verify:ad(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Gl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Do)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ql)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:GP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function JP(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?rn(i.updateTime):rn(s);return o.isEqual(X.min())&&(o=rn(s)),new DP(o,i.transformResults||[])}(n,e))):[]}function ZP(t,e){return{documents:[Z_(t,e.path)]}}function eR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Z_(t,i);const s=function(h){if(h.length!==0)return n1(an.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:pi(m.field),direction:rR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=sd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function tR(t){let e=QP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=t1(p);return m instanceof an&&x_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Kl(mi(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Su(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,I=p.values||[];return new ql(I,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,I=p.values||[];return new ql(I,m)}(n.endAt)),_P(e,i,o,s,l,"F",u,h)}function nR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function t1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mi(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=mi(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mi(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mi(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return De.create(mi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>t1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function rR(t){return WP[t]}function iR(t){return HP[t]}function sR(t){return qP[t]}function pi(t){return{fieldPath:t.canonicalString()}}function mi(t){return ze.fromServerFormat(t.fieldPath)}function n1(t){return t instanceof De?function(n){if(n.op==="=="){if(og(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NAN"}};if(sg(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(og(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NAN"}};if(sg(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pi(n.field),op:iR(n.op),value:n.value}}}(t):t instanceof an?function(n){const r=n.getFilters().map(i=>n1(i));return r.length===1?r[0]:{compositeFilter:{op:sR(n.op),filters:r}}}(t):Y()}function oR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function r1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,r,i,s=X.min(),o=X.min(),l=qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.ct=e}}function lR(t){const e=tR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?id(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this.un=new cR}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(vr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class cR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new We(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ji(0)}static kn(){return new Ji(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.changes=new cs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&io(r.mutation,i,Bt.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Mr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=$s();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Ln();const o=ro(),l=function(){return ro()}();return n.forEach((u,h)=>{const d=r.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof oi)?s=s.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),io(d.mutation,h,d.mutation.getFieldMask(),Le.now())):o.set(h.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new dR(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ro();let i=new Te((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let d=r.get(u)||Bt.empty();d=l.applyToLocalView(h,d),r.set(u,d);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,d=u.value,p=U_();d.forEach(m=>{if(!s.has(m)){const I=H_(n.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Mr());let l=-1,u=s;return o.next(h=>V.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,te())).next(d=>({batchId:l,changes:F_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=$s();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=$s();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const h=function(p,m){return new Au(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,nt.newInvalidDocument(d)))});let l=$s();return o.forEach((u,h)=>{const d=s.get(u);d!==void 0&&io(d.mutation,h,Bt.empty(),Le.now()),Cu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:rn(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:lR(i.bundledQuery),readTime:rn(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(){this.overlays=new Te(K.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Mr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=s.get(h.largestBatchId);d===null&&(d=Mr(),s=s.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Mr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new FP(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.Tr=new We(Ve.Er),this.dr=new We(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Ae([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Ae([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new We(Ve.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(oe);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new K(s),0);let l=new We(oe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ve(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.Mr=e,this.docs=function(){return new Te(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Ln();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ln();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||eP(ZC(d),r)<=0||(i.has(d.key)||Cu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _R(this)}getSize(e){return V.resolve(this.size)}}class _R extends hR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.persistence=e,this.Nr=new cs(n=>Pf(n),Rf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lf,this.targetCount=0,this.kr=Ji.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ji(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Sf(0),this.Kr=!1,this.Kr=!0,this.$r=new gR,this.referenceDelegate=e(this),this.Ur=new wR(this),this.indexManager=new uR,this.remoteDocumentCache=function(i){return new vR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new aR(n),this.Gr=new pR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new yR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new TR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class TR extends nP{constructor(e){super(),this.currentSequenceNumber=e}}class Vf{constructor(e){this.persistence=e,this.Jr=new Lf,this.Yr=null}static Zr(e){return new Vf(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return f3()?8:rP(st())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new IR;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ls()<=ne.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Ls()<=ne.DEBUG&&W("QueryEngine","Query:",fi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ls()<=ne.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):V.resolve())}Yi(e,n){if(cg(n))return V.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=id(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,id(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return cg(n)||i.isEqual(X.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?V.resolve(null):(Ls()<=ne.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fi(n)),this.rs(e,o,n,JC(i,-1)).next(l=>l))})}ts(e,n){let r=new We(V_(e));return n.forEach((i,s)=>{Cu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ls()<=ne.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",fi(n)),this.Ji.getDocumentsMatchingQuery(e,n,vr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Te(oe),this._s=new cs(s=>Pf(s),Rf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function kR(t,e,n,r){return new AR(t,e,n,r)}async function i1(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const h of i){o.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of s){l.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function CR(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,d){const p=h.batch,m=p.keys();let I=V.resolve();return m.forEach(C=>{I=I.next(()=>d.getEntry(u,C)).next(P=>{const x=h.docVersions.get(C);he(x!==null),P.version.compareTo(x)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),d.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function s1(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function PR(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(qe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),i=i.insert(p,I),function(P,x,T){return P.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,I,d)&&l.push(n.Ur.updateTargetData(s,I))});let u=Ln(),h=te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(RR(s,o,e.documentUpdates).next(d=>{u=d.Ps,h=d.Is})),!r.isEqual(X.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function RR(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ln();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function NR(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xR(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ud(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Eg(t,e,n){const r=J(t);let i=X.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,d){const p=J(u),m=p._s.get(d);return m!==void 0?V.resolve(p.os.get(m)):p.Ur.getTargetData(h,d)}(r,o,nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:te())).next(l=>(OR(r,TP(e),l),{documents:l,Ts:s})))}function OR(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Tg{constructor(){this.activeTargetIds=PP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DR{constructor(){this.so=new Tg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Tg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja=null;function zc(){return ja===null?ja=function(){return 268435456+Math.round(2147483648*Math.random())}():ja++,"0x"+ja.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class MR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=zc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(d=>(W("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Gi("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ls}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=LR[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=zc();return new Promise((o,l)=>{const u=new v_;u.setWithCredentials(!0),u.listenOnce(w_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case il.NO_ERROR:const d=u.getResponseJson();W(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case il.TIMEOUT:W(Ze,`RPC '${e}' ${s} timed out`),l(new q(U.DEADLINE_EXCEEDED,"Request time out"));break;case il.HTTP_ERROR:const p=u.getStatus();if(W(Ze,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const C=function(x){const T=x.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(T)>=0?T:U.UNKNOWN}(I.status);l(new q(C,I.message))}else l(new q(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(U.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{W(Ze,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);W(Ze,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=zc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=I_(),l=T_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new __({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");W(Ze,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,I=!1;const C=new VR({Io:x=>{I?W(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(W(Ze,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(Ze,`RPC '${e}' stream ${i} sending:`,x),p.send(x))},To:()=>p.close()}),P=(x,T,v)=>{x.listen(T,S=>{try{v(S)}catch(D){setTimeout(()=>{throw D},0)}})};return P(p,zs.EventType.OPEN,()=>{I||(W(Ze,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),P(p,zs.EventType.CLOSE,()=>{I||(I=!0,W(Ze,`RPC '${e}' stream ${i} transport closed`),C.So())}),P(p,zs.EventType.ERROR,x=>{I||(I=!0,Gi(Ze,`RPC '${e}' stream ${i} transport errored:`,x),C.So(new q(U.UNAVAILABLE,"The operation could not be completed")))}),P(p,zs.EventType.MESSAGE,x=>{var T;if(!I){const v=x.data[0];he(!!v);const S=v,D=S.error||((T=S[0])===null||T===void 0?void 0:T.error);if(D){W(Ze,`RPC '${e}' stream ${i} received error:`,D);const M=D.status;let B=function(_){const E=Re[_];if(E!==void 0)return G_(E)}(M),w=D.message;B===void 0&&(B=U.INTERNAL,w="Unknown error status: "+M+" with message "+D.message),I=!0,C.So(new q(B,w)),p.close()}else W(Ze,`RPC '${e}' stream ${i} received:`,v),C.bo(v)}}),P(l,E_.STAT_EVENT,x=>{x.stat===Zh.PROXY?W(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Zh.NOPROXY&&W(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function $c(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t){return new KP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new o1(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FR extends a1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=YP(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?rn(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ld(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=rd(u)?{documents:ZP(s,u)}:{query:eR(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=X_(s,o.resumeToken);const h=sd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Yl(s,o.snapshotVersion.toTimestamp());const h=sd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=nR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ld(this.serializer),n.removeTarget=e,this.a_(n)}}class UR extends a1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=JP(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ld(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>XP(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,od(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(U.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,od(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class BR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(bn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ai(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=J(u);h.L_.add(4),await ea(h),h.q_.set("Unknown"),h.L_.delete(4),await Ou(h)}(this))})}),this.q_=new BR(r,i)}}async function Ou(t){if(ai(t))for(const e of t.B_)await e(!0)}async function ea(t){for(const e of t.B_)await e(!1)}function l1(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Bf(n)?jf(n):hs(n).r_()&&Uf(n,e))}function Ff(t,e){const n=J(t),r=hs(n);n.N_.delete(e),r.r_()&&u1(n,e),n.N_.size===0&&(r.r_()?r.o_():ai(n)&&n.q_.set("Unknown"))}function Uf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hs(t).A_(e)}function u1(t,e){t.Q_.xe(e),hs(t).R_(e)}function jf(t){t.Q_=new $P({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),hs(t).start(),t.q_.v_()}function Bf(t){return ai(t)&&!hs(t).n_()&&t.N_.size>0}function ai(t){return J(t).L_.size===0}function c1(t){t.Q_=void 0}async function $R(t){t.q_.set("Online")}async function WR(t){t.N_.forEach((e,n)=>{Uf(t,e)})}async function HR(t,e){c1(t),Bf(t)?(t.q_.M_(e),jf(t)):t.q_.set("Unknown")}async function qR(t,e,n){if(t.q_.set("Online"),e instanceof Y_&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xl(t,r)}else if(e instanceof al?t.Q_.Ke(e):e instanceof Q_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await s1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(h);d&&s.N_.set(h,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(qe.EMPTY_BYTE_STRING,d.snapshotVersion)),u1(s,u);const p=new ir(d.target,u,h,d.sequenceNumber);Uf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Xl(t,r)}}async function Xl(t,e,n){if(!Xo(e))throw e;t.L_.add(1),await ea(t),t.q_.set("Offline"),n||(n=()=>s1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ou(t)})}function h1(t,e){return e().catch(n=>Xl(t,n,e))}async function Du(t){const e=J(t),n=wr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;KR(e);)try{const i=await NR(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,GR(e,i)}catch(i){await Xl(e,i)}d1(e)&&f1(e)}function KR(t){return ai(t)&&t.O_.length<10}function GR(t,e){t.O_.push(e);const n=wr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function d1(t){return ai(t)&&!wr(t).n_()&&t.O_.length>0}function f1(t){wr(t).start()}async function QR(t){wr(t).p_()}async function YR(t){const e=wr(t);for(const n of t.O_)e.m_(n.mutations)}async function XR(t,e,n){const r=t.O_.shift(),i=Of.from(r,e,n);await h1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Du(t)}async function JR(t,e){e&&wr(t).V_&&await async function(r,i){if(function(o){return jP(o)&&o!==U.ABORTED}(i.code)){const s=r.O_.shift();wr(r).s_(),await h1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Du(r)}}(t,e),d1(t)&&f1(t)}async function Sg(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ai(n);n.L_.add(3),await ea(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ou(n)}async function ZR(t,e){const n=J(t);e?(n.L_.delete(2),await Ou(n)):e||(n.L_.add(2),await ea(n),n.q_.set("Unknown"))}function hs(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new FR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:$R.bind(null,t),Ro:WR.bind(null,t),mo:HR.bind(null,t),d_:qR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Bf(t)?jf(t):t.q_.set("Unknown")):(await t.K_.stop(),c1(t))})),t.K_}function wr(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new UR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:QR.bind(null,t),mo:JR.bind(null,t),f_:YR.bind(null,t),g_:XR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Du(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new zf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $f(t,e){if(bn("AsyncQueue",`${e}: ${t}`),Xo(t))return new q(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new Ui(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ui;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.W_=new Te(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Zi(e,n,Ui.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ku(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class t4{constructor(){this.queries=kg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=kg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(U.ABORTED,"Firestore shutting down"))}}function kg(){return new cs(t=>L_(t),ku)}async function n4(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new e4,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=$f(o,`Initialization of query '${fi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Wf(n)}async function r4(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function i4(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Wf(n)}function s4(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Wf(t){t.Y_.forEach(e=>{e.next()})}var cd,Cg;(Cg=cd||(cd={})).ea="default",Cg.Cache="cache";class o4{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==cd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.key=e}}class m1{constructor(e){this.key=e}}class a4{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=V_(e),this.Ra=new Ui(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ag,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),I=Cu(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let x=!1;m&&I?m.data.isEqual(I.data)?C!==P&&(r.track({type:3,doc:I}),x=!0):this.ga(m,I)||(r.track({type:2,doc:I}),x=!0,(u&&this.Aa(I,u)>0||h&&this.Aa(I,h)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),x=!0):m&&!I&&(r.track({type:1,doc:m}),x=!0,(u||h)&&(l=!0)),x&&(I?(o=o.add(I),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(I,C){const P=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return P(I)-P(C)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Zi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ag,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new m1(r))}),this.da.forEach(r=>{e.has(r)||n.push(new p1(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Zi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class l4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class u4{constructor(e){this.key=e,this.va=!1}}class c4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new cs(l=>L_(l),ku),this.Ma=new Map,this.xa=new Set,this.Oa=new Te(K.comparator),this.Na=new Map,this.La=new Lf,this.Ba={},this.ka=new Map,this.qa=Ji.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function h4(t,e,n=!0){const r=E1(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await g1(r,e,n,!0),i}async function d4(t,e){const n=E1(t);await g1(n,e,!0,!1)}async function g1(t,e,n,r){const i=await xR(t.localStore,nn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await f4(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&l1(t.remoteStore,i),l}async function f4(t,e,n,r,i){t.Ka=(p,m,I)=>async function(P,x,T,v){let S=x.view.ma(T);S.ns&&(S=await Eg(P.localStore,x.query,!1).then(({documents:w})=>x.view.ma(w,S)));const D=v&&v.targetChanges.get(x.targetId),M=v&&v.targetMismatches.get(x.targetId)!=null,B=x.view.applyChanges(S,P.isPrimaryClient,D,M);return Rg(P,x.targetId,B.wa),B.snapshot}(t,p,m,I);const s=await Eg(t.localStore,e,!0),o=new a4(e,s.Ts),l=o.ma(s.documents),u=Zo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Rg(t,n,h.wa);const d=new l4(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function p4(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ku(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ud(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ff(r.remoteStore,i.targetId),hd(r,i.targetId)}).catch(Yo)):(hd(r,i.targetId),await ud(r.localStore,i.targetId,!0))}async function m4(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ff(n.remoteStore,r.targetId))}async function g4(t,e,n){const r=I4(t);try{const i=await function(o,l){const u=J(o),h=Le.now(),d=l.reduce((I,C)=>I.add(C.key),te());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=Ln(),P=te();return u.cs.getEntries(I,d).next(x=>{C=x,C.forEach((T,v)=>{v.isValidDocument()||(P=P.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,C)).next(x=>{p=x;const T=[];for(const v of l){const S=LP(v,p.get(v.key).overlayedDocument);S!=null&&T.push(new oi(v.key,S,P_(S.value.mapValue),Cn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,T,l)}).next(x=>{m=x;const T=x.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(I,x.batchId,T)})}).then(()=>({batchId:m.batchId,changes:F_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Te(oe)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await ta(r,i.changes),await Du(r.remoteStore)}catch(i){const s=$f(i,"Failed to persist write");n.reject(s)}}async function y1(t,e){const n=J(t);try{const r=await PR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?he(o.va):i.removedDocuments.size>0&&(he(o.va),o.va=!1))}),await ta(n,r,e)}catch(r){await Yo(r)}}function Pg(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let h=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(h=!0)}),h&&Wf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y4(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Te(K.comparator);o=o.insert(s,nt.newNoDocument(s,X.min()));const l=te().add(s),u=new Nu(X.min(),new Map,new Te(oe),o,l);await y1(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Hf(r)}else await ud(r.localStore,e,!1).then(()=>hd(r,e,n)).catch(Yo)}async function v4(t,e){const n=J(t),r=e.batch.batchId;try{const i=await CR(n.localStore,e);_1(n,r,null),v1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ta(n,i)}catch(i){await Yo(i)}}async function _4(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(he(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>u.localDocuments.getDocuments(h,d))})}(r.localStore,e);_1(r,e,n),v1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ta(r,i)}catch(i){await Yo(i)}}function v1(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function _1(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function hd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||w1(t,r)})}function w1(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ff(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Hf(t))}function Rg(t,e,n){for(const r of n)r instanceof p1?(t.La.addReference(r.key,e),w4(t,r)):r instanceof m1?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||w1(t,r.key)):Y()}function w4(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Hf(t))}function Hf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Ae.fromString(e)),r=t.qa.next();t.Na.set(r,new u4(n)),t.Oa=t.Oa.insert(n,r),l1(t.remoteStore,new ir(nn(Nf(n.path)),r,"TargetPurposeLimboResolution",Sf.oe))}}async function ta(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Mf.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(h,m=>V.forEach(m.$i,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>V.forEach(m.Ui,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!Xo(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const I=d.os.get(m),C=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(C);d.os=d.os.insert(m,P)}}}(r.localStore,s))}async function E4(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await i1(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(U.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ta(n,r.hs)}}function T4(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function E1(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=y1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=T4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y4.bind(null,e),e.Ca.d_=i4.bind(null,e.eventManager),e.Ca.$a=s4.bind(null,e.eventManager),e}function I4(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_4.bind(null,e),e}class Ng{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return kR(this.persistence,new SR,e.initialUser,this.serializer)}createPersistence(e){return new ER(Vf.Zr,this.serializer)}createSharedClientState(e){return new DR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class S4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=E4.bind(null,this.syncEngine),await ZR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new t4}()}createDatastore(e){const n=xu(e.databaseInfo.databaseId),r=function(s){return new MR(s)}(e.databaseInfo);return function(s,o,l,u){return new jR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new zR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Pg(this.syncEngine,n,0),function(){return Ig.D()?new Ig:new bR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,d){const p=new c4(i,s,o,l,u,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ea(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=A_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{W("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(W("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$f(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await i1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await P4(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Sg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Sg(e.remoteStore,i)),t._onlineComponents=e}function C4(t){return t.name==="FirebaseError"?t.code===U.FAILED_PRECONDITION||t.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function P4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!C4(n))throw n;Gi("Error using user provided cache. Falling back to memory cache: "+n),await Wc(t,new Ng)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Wc(t,new Ng);return t._offlineComponents}async function T1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await xg(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await xg(t,new S4))),t._onlineComponents}function R4(t){return T1(t).then(e=>e.syncEngine)}async function N4(t){const e=await T1(t),n=e.eventManager;return n.onListen=h4.bind(null,e.syncEngine),n.onUnlisten=p4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=d4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=m4.bind(null,e.syncEngine),n}function x4(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const d=new A4({next:m=>{o.enqueueAndForget(()=>r4(s,p));const I=m.docs.has(l);!I&&m.fromCache?h.reject(new q(U.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?h.reject(new q(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new o4(Nf(l.path),d,{includeMetadataChanges:!0,_a:!0});return n4(s,p)}(await N4(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O4(t,e,n){if(!n)throw new q(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function D4(t,e,n,r){if(e===!0&&r===!0)throw new q(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dg(t){if(!K.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function bo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qf(t);throw new q(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}D4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=I1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $C;switch(r.type){case"firstParty":return new KC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Og.get(n);r&&(W("ComponentProvider","Removing Datastore"),Og.delete(n),r.terminate())}(this),Promise.resolve()}}function b4(t,e,n,r={}){var i;const s=(t=bo(t,Kf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=et.MOCK_USER;else{l=a3(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new q(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(h)}t._authCredentials=new WC(new S_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gf(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class Lo extends Gf{constructor(e,n,r){super(e,n,Nf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new K(e))}withConverter(e){return new Lo(this.firestore,e,this._path)}}function Qf(t,e,...n){if(t=vt(t),arguments.length===1&&(e=A_.newId()),O4("doc","path",e),t instanceof Kf){const r=Ae.fromString(e,...n);return Dg(r),new Ot(t,null,new K(r))}{if(!(t instanceof Ot||t instanceof Lo))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Dg(r),new Ot(t.firestore,t instanceof Lo?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new o1(this,"async_queue_retry"),this.Eu=()=>{const n=$c();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=$c();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=$c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new mr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Xo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw bn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=zf.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&Y()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class Yf extends Kf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new L4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||A1(this),this._firestoreClient.terminate()}}function V4(t,e){const n=typeof t=="object"?t:ff(),r=typeof t=="string"?t:"(default)",i=ss(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=s3("firestore");s&&b4(i,...s)}return i}function S1(t){return t._firestoreClient||A1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function A1(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,d){return new oP(l,u,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,I1(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new k4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new es(qe.fromBase64String(e))}catch(n){throw new q(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new es(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4=/^__.*__$/;class F4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new oi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jo(e,this.data,n,this.fieldTransforms)}}function C1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class ep{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Jl(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(C1(this.wu)&&M4.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class U4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xu(e)}Nu(e,n,r,i=!1){return new ep({wu:e,methodName:n,Ou:r,path:ze.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function j4(t){const e=t._freezeSettings(),n=xu(t._databaseId);return new U4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function B4(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);x1("Data must be an object, but it was:",o,r);const l=R1(r,o);let u,h;if(s.merge)u=new Bt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=z4(e,p,n);if(!o.contains(m))throw new q(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);W4(d,m)||d.push(m)}u=new Bt(d),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new F4(new Pt(l),u,h)}function P1(t,e){if(N1(t=vt(t)))return x1("Unsupported field value:",e,t),R1(t,e);if(t instanceof k1)return function(r,i){if(!C1(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=P1(l,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:Yl(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yl(i.serializer,s)}}if(r instanceof Jf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof es)return{bytesValue:X_(i.serializer,r._byteString)};if(r instanceof Ot){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:bf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Zf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Mu("VectorValues must only contain numeric values.");return xf(l.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${qf(r)}`)}(t,e)}function R1(t,e){const n={};return k_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(t,(r,i)=>{const s=P1(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function N1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Jf||t instanceof es||t instanceof Ot||t instanceof k1||t instanceof Zf)}function x1(t,e,n){if(!N1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=qf(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function z4(t,e,n){if((e=vt(e))instanceof Xf)return e._internalPath;if(typeof e=="string")return O1(t,e);throw Jl("Field path arguments must be of type string or ",t,!1,void 0,n)}const $4=new RegExp("[~\\*/\\[\\]]");function O1(t,e,n){if(e.search($4)>=0)throw Jl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xf(...e.split("."))._internalPath}catch{throw Jl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Jl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(U.INVALID_ARGUMENT,l+t+u)}function W4(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new H4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(b1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class H4 extends D1{data(){return super.data()}}function b1(t,e){return typeof e=="string"?O1(t,e):e instanceof Xf?e._internalPath:e._delegate._internalPath}class q4{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return us(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ce(o.doubleValue));return new Zf(s)}convertGeoPoint(e){return new Jf(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ro(e));default:return null}}convertTimestamp(e){const n=_r(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);he(r1(r));const i=new No(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||bn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class L1 extends D1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Q4(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(b1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Q4 extends L1{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t){t=bo(t,Ot);const e=bo(t.firestore,Yf);return x4(S1(e),t._key).then(n=>Z4(e,t,n))}class Y4 extends q4{constructor(e){super(),this.firestore=e}convertBytes(e){return new es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function X4(t,e,n){t=bo(t,Ot);const r=bo(t.firestore,Yf),i=K4(t.converter,e);return J4(r,[B4(j4(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Cn.none())])}function J4(t,e){return function(r,i){const s=new mr;return r.asyncQueue.enqueueAndForget(async()=>g4(await R4(r),i,s)),s.promise}(S1(t),e)}function Z4(t,e,n){const r=n.docs.get(e._key),i=new Y4(t);return new L1(t,i,e._key,r,new G4(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ls=i})(os),sn(new Ht("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Yf(new HC(r.getProvider("auth-internal")),new QC(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new No(h.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),xt(eg,"4.7.0",e),xt(eg,"4.7.0","esm2017")})();const M1="@firebase/installations",tp="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=1e4,U1=`w:${tp}`,j1="FIS_v2",e5="https://firebaseinstallations.googleapis.com/v1",t5=60*60*1e3,n5="installations",r5="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ei=new si(n5,r5,i5);function B1(t){return t instanceof ln&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1({projectId:t}){return`${e5}/projects/${t}/installations`}function $1(t){return{token:t.token,requestStatus:2,expiresIn:o5(t.expiresIn),creationTime:Date.now()}}async function W1(t,e){const r=(await e.json()).error;return ei.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function H1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function s5(t,{refreshToken:e}){const n=H1(t);return n.append("Authorization",a5(e)),n}async function q1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function o5(t){return Number(t.replace("s","000"))}function a5(t){return`${j1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l5({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=z1(t),i=H1(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:j1,appId:t.appId,sdkVersion:U1},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await q1(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:$1(h.authToken)}}else throw await W1("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u5(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c5=/^[cdef][\w-]{21}$/,dd="";function h5(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=d5(t);return c5.test(n)?n:dd}catch{return dd}}function d5(t){return u5(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=new Map;function Q1(t,e){const n=bu(t);Y1(n,e),f5(n,e)}function Y1(t,e){const n=G1.get(t);if(n)for(const r of n)r(e)}function f5(t,e){const n=p5();n&&n.postMessage({key:t,fid:e}),m5()}let Fr=null;function p5(){return!Fr&&"BroadcastChannel"in self&&(Fr=new BroadcastChannel("[Firebase] FID Change"),Fr.onmessage=t=>{Y1(t.data.key,t.data.fid)}),Fr}function m5(){G1.size===0&&Fr&&(Fr.close(),Fr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g5="firebase-installations-database",y5=1,ti="firebase-installations-store";let Hc=null;function np(){return Hc||(Hc=wu(g5,y5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ti)}}})),Hc}async function Zl(t,e){const n=bu(t),i=(await np()).transaction(ti,"readwrite"),s=i.objectStore(ti),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Q1(t,e.fid),e}async function X1(t){const e=bu(t),r=(await np()).transaction(ti,"readwrite");await r.objectStore(ti).delete(e),await r.done}async function Lu(t,e){const n=bu(t),i=(await np()).transaction(ti,"readwrite"),s=i.objectStore(ti),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Q1(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(t){let e;const n=await Lu(t.appConfig,r=>{const i=v5(r),s=_5(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===dd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function v5(t){const e=t||{fid:h5(),registrationStatus:0};return J1(e)}function _5(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ei.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=w5(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:E5(t)}:{installationEntry:e}}async function w5(t,e){try{const n=await l5(t,e);return Zl(t.appConfig,n)}catch(n){throw B1(n)&&n.customData.serverCode===409?await X1(t.appConfig):await Zl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function E5(t){let e=await Lg(t.appConfig);for(;e.registrationStatus===1;)await K1(100),e=await Lg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await rp(t);return r||n}return e}function Lg(t){return Lu(t,e=>{if(!e)throw ei.create("installation-not-found");return J1(e)})}function J1(t){return T5(t)?{fid:t.fid,registrationStatus:0}:t}function T5(t){return t.registrationStatus===1&&t.registrationTime+F1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I5({appConfig:t,heartbeatServiceProvider:e},n){const r=S5(t,n),i=s5(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:U1,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await q1(()=>fetch(r,l));if(u.ok){const h=await u.json();return $1(h)}else throw await W1("Generate Auth Token",u)}function S5(t,{fid:e}){return`${z1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ip(t,e=!1){let n;const r=await Lu(t.appConfig,s=>{if(!Z1(s))throw ei.create("not-registered");const o=s.authToken;if(!e&&C5(o))return s;if(o.requestStatus===1)return n=A5(t,e),s;{if(!navigator.onLine)throw ei.create("app-offline");const l=R5(s);return n=k5(t,l),l}});return n?await n:r.authToken}async function A5(t,e){let n=await Vg(t.appConfig);for(;n.authToken.requestStatus===1;)await K1(100),n=await Vg(t.appConfig);const r=n.authToken;return r.requestStatus===0?ip(t,e):r}function Vg(t){return Lu(t,e=>{if(!Z1(e))throw ei.create("not-registered");const n=e.authToken;return N5(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function k5(t,e){try{const n=await I5(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Zl(t.appConfig,r),n}catch(n){if(B1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await X1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zl(t.appConfig,r)}throw n}}function Z1(t){return t!==void 0&&t.registrationStatus===2}function C5(t){return t.requestStatus===2&&!P5(t)}function P5(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+t5}function R5(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function N5(t){return t.requestStatus===1&&t.requestTime+F1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x5(t){const e=t,{installationEntry:n,registrationPromise:r}=await rp(e);return r?r.catch(console.error):ip(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O5(t,e=!1){const n=t;return await D5(n),(await ip(n,e)).token}async function D5(t){const{registrationPromise:e}=await rp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b5(t){if(!t||!t.options)throw qc("App Configuration");if(!t.name)throw qc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw qc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function qc(t){return ei.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="installations",L5="installations-internal",V5=t=>{const e=t.getProvider("app").getImmediate(),n=b5(e),r=ss(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},M5=t=>{const e=t.getProvider("app").getImmediate(),n=ss(e,ew).getImmediate();return{getId:()=>x5(n),getToken:i=>O5(n,i)}};function F5(){sn(new Ht(ew,V5,"PUBLIC")),sn(new Ht(L5,M5,"PRIVATE"))}F5();xt(M1,tp);xt(M1,tp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U5="/firebase-messaging-sw.js",j5="/firebase-cloud-messaging-push-scope",tw="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",B5="https://fcmregistrations.googleapis.com/v1",nw="google.c.a.c_id",z5="google.c.a.c_l",$5="google.c.a.ts",W5="google.c.a.e";var Mg;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Mg||(Mg={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Vo;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Vo||(Vo={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function H5(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="fcm_token_details_db",q5=5,Fg="fcm_token_object_Store";async function K5(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Kc))return null;let e=null;return(await wu(Kc,q5,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(Fg))return;const u=o.objectStore(Fg),h=await u.index("fcmSenderId").get(t);if(await u.clear(),!!h){if(i===2){const d=h;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:(l=d.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:yn(d.vapidKey)}}}else if(i===3){const d=h;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:yn(d.auth),p256dh:yn(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:yn(d.vapidKey)}}}else if(i===4){const d=h;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:yn(d.auth),p256dh:yn(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:yn(d.vapidKey)}}}}}})).close(),await Vc(Kc),await Vc("fcm_vapid_details_db"),await Vc("undefined"),G5(e)?e:null}function G5(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q5="firebase-messaging-database",Y5=1,Mo="firebase-messaging-store";let Gc=null;function rw(){return Gc||(Gc=wu(Q5,Y5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mo)}}})),Gc}async function X5(t){const e=iw(t),r=await(await rw()).transaction(Mo).objectStore(Mo).get(e);if(r)return r;{const i=await K5(t.appConfig.senderId);if(i)return await sp(t,i),i}}async function sp(t,e){const n=iw(t),i=(await rw()).transaction(Mo,"readwrite");return await i.objectStore(Mo).put(e,n),await i.done,e}function iw({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},rt=new si("messaging","Messaging",J5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z5(t,e){const n=await ap(t),r=sw(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(op(t.appConfig),i)).json()}catch(o){throw rt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw rt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw rt.create("token-subscribe-no-token");return s.token}async function eN(t,e){const n=await ap(t),r=sw(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${op(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw rt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw rt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw rt.create("token-update-no-token");return s.token}async function tN(t,e){const r={method:"DELETE",headers:await ap(t)};try{const s=await(await fetch(`${op(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw rt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw rt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function op({projectId:t}){return`${B5}/projects/${t}/registrations`}async function ap({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function sw({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==tw&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=7*24*60*60*1e3;async function rN(t){const e=await sN(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:yn(e.getKey("auth")),p256dh:yn(e.getKey("p256dh"))},r=await X5(t.firebaseDependencies);if(r){if(oN(r.subscriptionOptions,n))return Date.now()>=r.createTime+nN?iN(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await tN(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Ug(t.firebaseDependencies,n)}else return Ug(t.firebaseDependencies,n)}async function iN(t,e){try{const n=await eN(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await sp(t.firebaseDependencies,r),n}catch(n){throw n}}async function Ug(t,e){const r={token:await Z5(t,e),createTime:Date.now(),subscriptionOptions:e};return await sp(t,r),r.token}async function sN(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:H5(e)})}function oN(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return aN(e,t),lN(e,t),uN(e,t),e}function aN(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function lN(t,e){e.data&&(t.data=e.data)}function uN(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t){return typeof t=="object"&&!!t&&nw in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ow("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");ow("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function ow(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(t){if(!t||!t.options)throw Qc("App Configuration Object");if(!t.name)throw Qc("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Qc(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Qc(t){return rt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=hN(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(t){try{t.swRegistration=await navigator.serviceWorker.register(U5,{scope:j5}),t.swRegistration.update().catch(()=>{})}catch(e){throw rt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e){if(!e&&!t.swRegistration&&await fN(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw rt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=tw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(t,e){if(!navigator)throw rt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw rt.create("permission-blocked");return await mN(t,e==null?void 0:e.vapidKey),await pN(t,e==null?void 0:e.serviceWorkerRegistration),rN(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t,e,n){const r=yN(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[nw],message_name:n[z5],message_time:n[$5],message_device_time:Math.floor(Date.now()/1e3)})}function yN(t){switch(t){case Vo.NOTIFICATION_CLICKED:return"notification_open";case Vo.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vN(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Vo.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(jg(n)):t.onMessageHandler.next(jg(n)));const r=n.data;cN(r)&&r[W5]==="1"&&await gN(t,n.messageType,r)}const Bg="@firebase/messaging",zg="0.12.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=t=>{const e=new dN(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>vN(e,n)),e},wN=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>aw(e,r)}};function EN(){sn(new Ht("messaging",_N,"PUBLIC")),sn(new Ht("messaging-internal",wN,"PRIVATE")),xt(Bg,zg),xt(Bg,zg,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TN(){try{await x2()}catch{return!1}return typeof window<"u"&&N2()&&p3()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(t,e){if(!navigator)throw rt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(t=ff()){return TN().then(e=>{if(!e)throw rt.create("unsupported-browser")},e=>{throw rt.create("indexed-db-unsupported")}),ss(vt(t),"messaging").getImmediate()}async function AN(t,e){return t=vt(t),aw(t,e)}function kN(t,e){return t=vt(t),IN(t,e)}EN();const CN={apiKey:"AIzaSyAgkl94QmYAAfz4xGRdyQNCWMOBU5ZYhQk",authDomain:"appsuperbet-33e39.firebaseapp.com",projectId:"appsuperbet-33e39",storageBucket:"appsuperbet-33e39.appspot.com",messagingSenderId:"313043480351",appId:"1:313043480351:web:79f63add28ae0ccc984a2a",measurementId:"G-JZKH24GDLT"},lp=b2(CN),zr=BC(lp),up=V4(lp),lw=SN(lp),PN=async()=>{try{const t=await AN(lw,{vapidKey:"BEk6nBtXhbzwYRpHJbNAchNpA2NO8eMXRIVc_B1ZnPYy10jP8dWXOLLBv0Dh_35KfrzhqJPydsOmhb5UuZ1mRxg"});t?console.log("Token received: ",t):console.log("No registration token available. Request permission to generate one.")}catch(t){console.log("An error occurred while retrieving token. ",t)}},RN=()=>new Promise(t=>{kN(lw,e=>{console.log("Message received. ",e),t(e)})}),uw=({onProfileClick:t,onUserLoaded:e,isAuthenticated:n})=>{const[r,i]=L.useState(null),[s,o]=L.useState(!0),l=Ar(),u=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone,h=()=>{switch(l.pathname){case"/support":return"Support";case"/sports":return"Sports";case"/coupons":return"Coupons";case"/menu":return"Menu";default:return null}};L.useEffect(()=>{const I=zr.onAuthStateChanged(async C=>{if(C){const P=Qf(up,"users",C.uid),x=await V1(P),T=x.exists()?x.data():null;T&&T.username&&(C.displayName=T.username),i(C),e&&e(C)}else i(null),e&&e(null);o(!1)});return()=>I()},[e]);const d=Wo(),p=()=>{d("/auth")};if(s)return null;const m=u&&n;return O.jsxs("header",{className:Wn.header,children:[O.jsx("img",{src:cf,alt:"Logo",className:Wn.logo}),h()&&O.jsx("h1",{children:h()}),!m&&O.jsxs("div",{className:Wn.iconsContainer,children:[O.jsx("img",{src:XS,alt:"Notifications",className:Wn.bellIcon}),r?O.jsxs("div",{className:Wn.userInfo,onClick:t,children:[O.jsx("img",{src:I2,alt:"User Icon",className:Wn.userIcon}),O.jsx("span",{className:Wn.userName,children:r.displayName||r.email})]}):O.jsx("button",{className:Wn.registerButton,onClick:p,children:"Log In"})]})]})},NN="_profileMenu_1mkb6_1",xN="_open_1mkb6_15",ON="_profileHeader_1mkb6_19",DN="_logo_1mkb6_28",bN="_closeButton_1mkb6_32",LN="_profileContent_1mkb6_40",VN="_profileSection_1mkb6_50",MN="_userIcon_1mkb6_55",FN="_profileName_1mkb6_61",UN="_profileEmail_1mkb6_66",jN="_divider_1mkb6_72",BN="_premiumStatus_1mkb6_79",zN="_status_1mkb6_86",$N="_active_1mkb6_92",WN="_premiumGlow_1mkb6_1",HN="_getPremiumButton_1mkb6_97",qN="_disabled_1mkb6_110",KN="_logoutButton_1mkb6_116",GN="_daysLeftInfo_1mkb6_134",QN="_daysLeftHighlight_1mkb6_1",xe={profileMenu:NN,open:xN,profileHeader:ON,logo:DN,closeButton:bN,profileContent:LN,profileSection:VN,userIcon:MN,profileName:FN,profileEmail:UN,divider:jN,premiumStatus:BN,status:zN,active:$N,premiumGlow:WN,getPremiumButton:HN,disabled:qN,logoutButton:KN,daysLeftInfo:GN,daysLeftHighlight:QN},YN=({isOpen:t,onClose:e,user:n})=>{const[r,i]=L.useState(!1),[s,o]=L.useState(0),l=Wo();L.useEffect(()=>{n&&(async()=>{try{const p=Qf(up,"users",n.uid),m=await V1(p);if(m.exists()){const I=m.data(),C=Date.now();I.premium&&I.premiumExpiresAt>C?(i(!0),o(Math.ceil((I.premiumExpiresAt-C)/864e5))):(i(!1),o(0))}}catch(p){console.error("Error fetching user data:",p)}})()},[n]);const u=()=>{zr.signOut().then(()=>{e(),l("/")}).catch(d=>{console.error("Error signing out:",d)})},h=()=>{alert("Redirect to Get Premium Page")};return O.jsxs("div",{className:`${xe.profileMenu} ${t?xe.open:""}`,children:[O.jsxs("div",{className:xe.profileHeader,children:[O.jsx("img",{src:cf,alt:"Logo",className:xe.logo}),O.jsx("h2",{children:"My Profile"}),O.jsx("button",{className:xe.closeButton,onClick:e,children:"×"})]}),O.jsxs("div",{className:xe.profileContent,children:[O.jsxs("div",{className:xe.profileSection,children:[O.jsx("img",{src:I2,alt:"User Icon",className:xe.userIcon}),O.jsx("div",{className:xe.profileName,children:n?n.displayName:"User Name"}),O.jsx("div",{className:xe.profileEmail,children:n?n.email:"example@example.com"})]}),O.jsx("hr",{className:xe.divider}),O.jsxs("div",{className:xe.premiumStatus,children:[O.jsx("span",{children:"Profile"}),O.jsx("span",{className:`${xe.status} ${r?xe.active:""}`,children:r?"PREMIUM":"STANDARD"})]}),!r&&O.jsx("button",{className:xe.getPremiumButton,onClick:h,children:"Get Premium"}),O.jsx("hr",{className:xe.divider}),r&&O.jsxs("div",{className:xe.premiumInfo,children:["Your Premium subscription is active.",O.jsx("br",{}),"Days left: ",O.jsxs("span",{className:xe.daysLeft,children:[s," day(s)"]})]})]}),O.jsx("button",{className:xe.logoutButton,onClick:u,children:"Log Out"})]})},XN="Left",JN="Right",ZN="Up",e6="Down",Ri={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},fd={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},$g="mousemove",Wg="mouseup",t6="touchend",n6="touchmove",r6="touchstart";function i6(t,e,n,r){return t>e?n>0?JN:XN:r>0?e6:ZN}function Hg(t,e){if(e===0)return t;const n=Math.PI/180*e,r=t[0]*Math.cos(n)+t[1]*Math.sin(n),i=t[1]*Math.cos(n)-t[0]*Math.sin(n);return[r,i]}function s6(t,e){const n=d=>{const p="touches"in d;p&&d.touches.length>1||t((m,I)=>{I.trackMouse&&!p&&(document.addEventListener($g,r),document.addEventListener(Wg,o));const{clientX:C,clientY:P}=p?d.touches[0]:d,x=Hg([C,P],I.rotationAngle);return I.onTouchStartOrOnMouseDown&&I.onTouchStartOrOnMouseDown({event:d}),Object.assign(Object.assign(Object.assign({},m),fd),{initial:x.slice(),xy:x,start:d.timeStamp||0})})},r=d=>{t((p,m)=>{const I="touches"in d;if(I&&d.touches.length>1)return p;if(d.timeStamp-p.start>m.swipeDuration)return p.swiping?Object.assign(Object.assign({},p),{swiping:!1}):p;const{clientX:C,clientY:P}=I?d.touches[0]:d,[x,T]=Hg([C,P],m.rotationAngle),v=x-p.xy[0],S=T-p.xy[1],D=Math.abs(v),M=Math.abs(S),B=(d.timeStamp||0)-p.start,w=Math.sqrt(D*D+M*M)/(B||1),y=[v/(B||1),S/(B||1)],_=i6(D,M,v,S),E=typeof m.delta=="number"?m.delta:m.delta[_.toLowerCase()]||Ri.delta;if(D<E&&M<E&&!p.swiping)return p;const k={absX:D,absY:M,deltaX:v,deltaY:S,dir:_,event:d,first:p.first,initial:p.initial,velocity:w,vxvy:y};k.first&&m.onSwipeStart&&m.onSwipeStart(k),m.onSwiping&&m.onSwiping(k);let R=!1;return(m.onSwiping||m.onSwiped||m[`onSwiped${_}`])&&(R=!0),R&&m.preventScrollOnSwipe&&m.trackTouch&&d.cancelable&&d.preventDefault(),Object.assign(Object.assign({},p),{first:!1,eventData:k,swiping:!0})})},i=d=>{t((p,m)=>{let I;if(p.swiping&&p.eventData){if(d.timeStamp-p.start<m.swipeDuration){I=Object.assign(Object.assign({},p.eventData),{event:d}),m.onSwiped&&m.onSwiped(I);const C=m[`onSwiped${I.dir}`];C&&C(I)}}else m.onTap&&m.onTap({event:d});return m.onTouchEndOrOnMouseUp&&m.onTouchEndOrOnMouseUp({event:d}),Object.assign(Object.assign(Object.assign({},p),fd),{eventData:I})})},s=()=>{document.removeEventListener($g,r),document.removeEventListener(Wg,o)},o=d=>{s(),i(d)},l=(d,p)=>{let m=()=>{};if(d&&d.addEventListener){const I=Object.assign(Object.assign({},Ri.touchEventOptions),p.touchEventOptions),C=[[r6,n,I],[n6,r,Object.assign(Object.assign({},I),p.preventScrollOnSwipe?{passive:!1}:{})],[t6,i,I]];C.forEach(([P,x,T])=>d.addEventListener(P,x,T)),m=()=>C.forEach(([P,x])=>d.removeEventListener(P,x))}return m},h={ref:d=>{d!==null&&t((p,m)=>{if(p.el===d)return p;const I={};return p.el&&p.el!==d&&p.cleanUpTouch&&(p.cleanUpTouch(),I.cleanUpTouch=void 0),m.trackTouch&&d&&(I.cleanUpTouch=l(d,m)),Object.assign(Object.assign(Object.assign({},p),{el:d}),I)})}};return e.trackMouse&&(h.onMouseDown=n),[h,l]}function o6(t,e,n,r){return!e.trackTouch||!t.el?(t.cleanUpTouch&&t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:void 0})):t.cleanUpTouch?e.preventScrollOnSwipe!==n.preventScrollOnSwipe||e.touchEventOptions.passive!==n.touchEventOptions.passive?(t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:r(t.el,e)})):t:Object.assign(Object.assign({},t),{cleanUpTouch:r(t.el,e)})}function a6(t){const{trackMouse:e}=t,n=L.useRef(Object.assign({},fd)),r=L.useRef(Object.assign({},Ri)),i=L.useRef(Object.assign({},r.current));i.current=Object.assign({},r.current),r.current=Object.assign(Object.assign({},Ri),t);let s;for(s in Ri)r.current[s]===void 0&&(r.current[s]=Ri[s]);const[o,l]=L.useMemo(()=>s6(u=>n.current=u(n.current,r.current),{trackMouse:e}),[e]);return n.current=o6(n.current,r.current,i.current,l),o}const l6="_sliderContainer_1vr2f_1",u6="_slider_1vr2f_1",c6="_slide_1vr2f_1",h6="_content_1vr2f_28",d6="_title_1vr2f_35",f6="_description_1vr2f_42",p6="_button_1vr2f_48",m6="_navigationDots_1vr2f_58",g6="_dot_1vr2f_66",y6="_active_1vr2f_76",Gt={sliderContainer:l6,slider:u6,slide:c6,content:h6,title:d6,description:f6,button:p6,navigationDots:m6,dot:g6,active:y6},qg="/my-app/assets/slide1-D6cVATcJ.png",v6="/my-app/assets/slide2-DznjrgJw.png",_6="/my-app/assets/slide3-DoE1JK4T.png",w6="/my-app/assets/slide4-QItOLj0O.png",Ba=[{imageUrl:qg,title:"First Slide Title",description:"This is the first slide description.",buttonText:"Learn More",buttonLink:"#"},{imageUrl:v6,title:"Second Slide Title",description:"This is the second slide description.",buttonText:"Learn More",buttonLink:"#"},{imageUrl:_6,title:"Third Slide Title",description:"This is the third slide description.",buttonText:"Learn More",buttonLink:"#"},{imageUrl:w6,title:"Fourth Slide Title",description:"This is the fourth slide description.",buttonText:"Learn More",buttonLink:"#"},{imageUrl:qg,title:"Fifth Slide Title",description:"This is the fifth slide description.",buttonText:"Learn More",buttonLink:"#"}],E6=()=>{const[t,e]=L.useState(0),n=()=>{e(s=>s===Ba.length-1?0:s+1)},r=()=>{e(s=>s===0?Ba.length-1:s-1)},i=a6({onSwipedLeft:()=>n(),onSwipedRight:()=>r()});return L.useEffect(()=>{const s=setInterval(()=>{n()},3e3);return()=>clearInterval(s)},[t]),O.jsxs("div",{className:Gt.sliderContainer,...i,children:[O.jsx("div",{className:Gt.slider,style:{transform:`translateX(-${t*100}%)`},children:Ba.map((s,o)=>O.jsx("div",{className:Gt.slide,style:{backgroundImage:`url(${s.imageUrl})`},children:O.jsxs("div",{className:Gt.content,children:[O.jsx("h2",{className:Gt.title,children:s.title}),O.jsx("p",{className:Gt.description,children:s.description}),O.jsx("a",{href:s.buttonLink,className:Gt.button,children:s.buttonText})]})},o))}),O.jsx("div",{className:Gt.navigationDots,children:Ba.map((s,o)=>O.jsx("span",{className:`${Gt.dot} ${o===t?Gt.active:""}`,onClick:()=>e(o)},o))})]})},T6="_ageWarningBanner_k4oce_1",I6="_icon_k4oce_18",Kg={ageWarningBanner:T6,icon:I6},cw="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%20x='0'%20y='0'%20viewBox='0%200%20512%20512'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%20class=''%3e%3cg%3e%3cpath%20fill='%23838383'%20d='M152.842%20359.583c-9.77%200-17.691-7.921-17.691-17.691V187.799h-19.026c-9.77%200-17.691-7.921-17.691-17.691s7.921-17.691%2017.691-17.691h36.717c9.77%200%2017.691%207.921%2017.691%2017.691v171.785c0%209.77-7.921%2017.69-17.691%2017.69zM311.344%20239.778c7.304-9.2%2011.683-20.822%2011.683-33.454%200-29.725-24.183-53.908-53.908-53.908s-53.906%2024.183-53.906%2053.908c0%2012.632%204.379%2024.254%2011.683%2033.454-15.319%2012.359-25.143%2031.269-25.143%2052.439%200%2037.146%2030.221%2067.367%2067.367%2067.367s67.367-30.221%2067.367-67.367c-.001-21.17-9.825-40.08-25.143-52.439zm-60.749-33.454c0-10.214%208.31-18.525%2018.524-18.525%2010.215%200%2018.525%208.311%2018.525%2018.525s-8.31%2018.525-18.525%2018.525c-10.214.001-18.524-8.31-18.524-18.525zm18.524%20117.877c-17.636%200-31.985-14.349-31.985-31.985s14.349-31.985%2031.985-31.985%2031.985%2014.349%2031.985%2031.985c0%2017.637-14.348%2031.985-31.985%2031.985z'%20opacity='1'%20data-original='%23838383'%20class=''%3e%3c/path%3e%3cpath%20fill='%235a5a5a'%20d='M311.343%20239.778c7.304-9.2%2011.683-20.822%2011.683-33.454a53.614%2053.614%200%200%200-3.593-19.317c-9.732%2025.461-23.57%2050.681-41.346%2074.514%2013.283%203.888%2023.016%2016.173%2023.016%2030.696%200%2017.636-14.349%2031.985-31.985%2031.985-13.187%200-24.533-8.023-29.42-19.443a341.217%20341.217%200%200%201-27.444%2023.512c11.964%2018.803%2032.974%2031.314%2056.864%2031.314%2037.146%200%2067.367-30.221%2067.367-67.367.001-21.171-9.823-40.081-25.142-52.44zM137.99%20298.807c-.94.94-1.891%201.859-2.839%202.786v40.3c0%209.77%207.921%2017.691%2017.691%2017.691s17.691-7.921%2017.691-17.691V261.16a341.43%20341.43%200%200%201-32.543%2037.647z'%20opacity='1'%20data-original='%235a5a5a'%3e%3c/path%3e%3cpath%20fill='%23fd8087'%20d='M395.698%20366.718c-35.676%2052.392-95.907%2086.785-164.001%2086.483-108.68-.481-197.952-91.59-196.292-200.259%201.64-107.334%2089.463-194.146%20197.18-194.146%2067.732%200%20127.598%2034.324%20163.117%2086.492a10.412%2010.412%200%200%200%208.603%204.565h24.837c4.791%200%207.816-5.183%205.432-9.339-10.152-17.697-22.712-34.163-37.527-48.977-43.929-43.93-102.336-68.123-164.462-68.123S112.052%2047.608%2068.123%2091.538C24.193%20135.466%200%20193.874%200%20256s24.193%20120.534%2068.123%20164.462c43.929%2043.93%20102.336%2068.123%20164.462%2068.123s120.534-24.193%20164.462-68.123c14.815-14.815%2027.375-31.281%2037.527-48.977%202.384-4.156-.641-9.339-5.432-9.339h-24.836a10.42%2010.42%200%200%200-8.608%204.572z'%20opacity='1'%20data-original='%23fd8087'%20class=''%3e%3c/path%3e%3cg%20fill='%23fe646f'%3e%3cpath%20d='M373.645%20118.335a198.657%20198.657%200%200%201%2022.058%2026.954%2010.412%2010.412%200%200%200%208.603%204.565h24.836c4.791%200%207.816-5.183%205.432-9.339-10.151-17.697-22.712-34.163-37.526-48.977a235.465%20235.465%200%200%200-28.579-24.346c3.983%2016.24%205.684%2033.432%205.176%2051.143zM429.143%20362.146h-24.836a10.418%2010.418%200%200%200-8.608%204.571c-35.676%2052.392-95.907%2086.785-164.001%2086.483-50.215-.222-96.277-19.802-131.15-51.512-17.597%201.38-34.773.631-51.125-2.302a236.471%20236.471%200%200%200%2018.7%2021.075c43.929%2043.93%20102.336%2068.123%20164.462%2068.123s120.534-24.193%20164.462-68.123c14.815-14.815%2027.375-31.28%2037.526-48.977%202.385-4.155-.64-9.338-5.43-9.338zM501.593%20238.309h-38.504a6.244%206.244%200%200%201-6.244-6.244v-38.504c0-5.747-4.659-10.407-10.406-10.407H431.87c-5.747%200-10.406%204.659-10.406%2010.407v38.504a6.245%206.245%200%200%201-6.244%206.244h-38.504c-5.747%200-10.406%204.659-10.406%2010.407v14.569c0%205.747%204.659%2010.406%2010.406%2010.406h38.504a6.245%206.245%200%200%201%206.244%206.244v38.504c0%205.747%204.659%2010.406%2010.406%2010.406h14.569c5.747%200%2010.406-4.659%2010.406-10.406v-38.504a6.244%206.244%200%200%201%206.244-6.244h38.504c5.747%200%2010.406-4.659%2010.406-10.406v-14.569c.001-5.748-4.658-10.407-10.406-10.407z'%20fill='%23e90011'%20opacity='1'%20data-original='%23fe646f'%20class=''%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",S6=()=>O.jsx("div",{className:Kg.ageWarningBanner,children:O.jsxs("p",{children:["This service is for adults only ",O.jsx("img",{src:cw,alt:"18+",className:Kg.icon})]})}),A6=()=>{const[t,e]=L.useState(!1),[n,r]=L.useState(null),i=()=>{e(!t)},s=o=>{r(o)};return O.jsxs("div",{className:Oc.dashboardContainer,children:[O.jsx(uw,{onProfileClick:i,onUserLoaded:s}),O.jsx(S6,{}),O.jsx("div",{className:Oc.sliderContainer,children:O.jsx(E6,{})}),O.jsx("div",{className:Oc.content,children:O.jsx("p",{children:"Welcome to the Dashboard Sport Ua"})}),O.jsx(YN,{isOpen:t,onClose:i,user:n})]})},k6={},C6=()=>O.jsx("div",{className:k6.content,children:O.jsx("p",{children:"Welcome to Support"})}),P6={},R6=()=>O.jsxs("div",{className:P6.sportsPage,children:[O.jsx("h1",{children:"Sports Page"}),O.jsx("p",{children:"Welcome to the Sports Page!"})]}),N6={},x6=()=>O.jsxs("div",{className:N6.couponsPage,children:[O.jsx("h1",{children:"Coupons Page"}),O.jsx("p",{children:"Welcome to the Coupons Page!"})]}),O6={},D6=()=>O.jsxs("div",{className:O6.menuPage,children:[O.jsx("h1",{children:"Menu Page"}),O.jsx("p",{children:"Welcome to the Menu Page!"})]}),b6="_container_ymc3z_3",L6="_logo_ymc3z_15",V6="_biometricButton_ymc3z_20",M6="_biometricText_ymc3z_42",F6="_tabs_ymc3z_57",U6="_active_ymc3z_73",j6="_form_ymc3z_77",B6="_passwordContainer_ymc3z_94",z6="_passwordToggle_ymc3z_98",$6="_checkboxContainer_ymc3z_106",W6="_submitButton_ymc3z_117",H6="_forgotPassword_ymc3z_133",q6="_backToHome_ymc3z_134",K6="_error_ymc3z_141",G6="_loadingSpinner_ymc3z_1",Q6="_spin_ymc3z_1",Y6="_errorPopup_ymc3z_207",X6="_errorMessage_ymc3z_221",J6="_okButton_ymc3z_236",Z6="_resetPasswordButton_ymc3z_236",ex="_cancelButton_ymc3z_236",Z={container:b6,logo:L6,biometricButton:V6,biometricText:M6,tabs:F6,active:U6,form:j6,passwordContainer:B6,passwordToggle:z6,checkboxContainer:$6,submitButton:W6,forgotPassword:H6,backToHome:q6,error:K6,"success-checkmark":"_success-checkmark_ymc3z_149","checkmark-icon":"_checkmark-icon_ymc3z_167","show-checkmark":"_show-checkmark_ymc3z_183",loadingSpinner:G6,spin:Q6,errorPopup:Y6,errorMessage:X6,okButton:J6,resetPasswordButton:Z6,cancelButton:ex},tx="data:image/svg+xml,%3csvg%20height='512'%20viewBox='0%200%2024%2024'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m2%205v3a1%201%200%200%200%202%200v-3a1%201%200%200%201%201-1h3a1%201%200%200%200%200-2h-3a3%203%200%200%200%20-3%203z'/%3e%3cpath%20d='m2%2019a3%203%200%200%200%203%203h3a1%201%200%200%200%200-2h-3a1%201%200%200%201%20-1-1v-3a1%201%200%200%200%20-2%200z'/%3e%3cpath%20d='m21%2015a1%201%200%200%200%20-1%201v3a1%201%200%200%201%20-1%201h-3a1%201%200%200%200%200%202h3a3%203%200%200%200%203-3v-3a1%201%200%200%200%20-1-1z'/%3e%3cpath%20d='m19%202h-3a1%201%200%200%200%200%202h3a1%201%200%200%201%201%201v3a1%201%200%200%200%202%200v-3a3%203%200%200%200%20-3-3z'/%3e%3cpath%20d='m8%209v-1a1%201%200%200%200%20-2%200v1a1%201%200%200%200%202%200z'/%3e%3cpath%20d='m18%209v-1a1%201%200%200%200%20-2%200v1a1%201%200%200%200%202%200z'/%3e%3cpath%20d='m15.225%2014.368a4%204%200%200%201%20-6.45%200%201%201%200%200%200%20-1.55%201.264%206%206%200%200%200%209.55%200%201%201%200%201%200%20-1.55-1.264z'/%3e%3cpath%20d='m10%208v3.01a3%203%200%200%200%203%202.99%201%201%200%200%200%20-.01-2%20.991.991%200%200%201%20-.99-.99v-3.01a1%201%200%200%200%20-2%200z'/%3e%3c/svg%3e",nx=(...t)=>{console!=null&&console.warn&&($r(t[0])&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t))},Gg={},pd=(...t)=>{$r(t[0])&&Gg[t[0]]||($r(t[0])&&(Gg[t[0]]=new Date),nx(...t))},hw=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},Qg=(t,e,n)=>{t.loadNamespaces(e,hw(t,n))},Yg=(t,e,n,r)=>{$r(n)&&(n=[n]),n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,hw(t,r))},rx=(t,e,n={})=>!e.languages||!e.languages.length?(pd("i18n.languages were undefined or empty",e.languages),!0):e.hasLoadedNamespace(t,{lng:n.lng,precheck:(r,i)=>{var s;if(((s=n.bindI18n)==null?void 0:s.indexOf("languageChanging"))>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!i(r.isLanguageChangingTo,t))return!1}}),$r=t=>typeof t=="string",ix=t=>typeof t=="object"&&t!==null,sx=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,ox={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ax=t=>ox[t],lx=t=>t.replace(sx,ax);let ux={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:lx};const cx=()=>ux;let hx;const dx=()=>hx,fx=L.createContext();class px{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{var r;(r=this.usedNamespaces)[n]??(r[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const mx=(t,e)=>{const n=L.useRef();return L.useEffect(()=>{n.current=t},[t,e]),n.current},dw=(t,e,n,r)=>t.getFixedT(e,n,r),gx=(t,e,n,r)=>L.useCallback(dw(t,e,n,r),[t,e,n,r]),yx=(t,e={})=>{var D,M,B,w;const{i18n:n}=e,{i18n:r,defaultNS:i}=L.useContext(fx)||{},s=n||r||dx();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new px),!s){pd("You will need to pass in an i18next instance by using initReactI18next");const y=(E,k)=>$r(k)?k:ix(k)&&$r(k.defaultValue)?k.defaultValue:Array.isArray(E)?E[E.length-1]:E,_=[y,{},!1];return _.t=y,_.i18n={},_.ready=!1,_}(D=s.options.react)!=null&&D.wait&&pd("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...cx(),...s.options.react,...e},{useSuspense:l,keyPrefix:u}=o;let h=i||((M=s.options)==null?void 0:M.defaultNS);h=$r(h)?[h]:h||["translation"],(w=(B=s.reportNamespaces).addUsedNamespaces)==null||w.call(B,h);const d=(s.isInitialized||s.initializedStoreOnce)&&h.every(y=>rx(y,s,o)),p=gx(s,e.lng||null,o.nsMode==="fallback"?h:h[0],u),m=()=>p,I=()=>dw(s,e.lng||null,o.nsMode==="fallback"?h:h[0],u),[C,P]=L.useState(m);let x=h.join();e.lng&&(x=`${e.lng}${x}`);const T=mx(x),v=L.useRef(!0);L.useEffect(()=>{const{bindI18n:y,bindI18nStore:_}=o;v.current=!0,!d&&!l&&(e.lng?Yg(s,e.lng,h,()=>{v.current&&P(I)}):Qg(s,h,()=>{v.current&&P(I)})),d&&T&&T!==x&&v.current&&P(I);const E=()=>{v.current&&P(I)};return y&&(s==null||s.on(y,E)),_&&(s==null||s.store.on(_,E)),()=>{v.current=!1,s&&(y==null||y.split(" ").forEach(k=>s.off(k,E))),_&&s&&_.split(" ").forEach(k=>s.store.off(k,E))}},[s,x]),L.useEffect(()=>{v.current&&d&&P(m)},[s,u,d]);const S=[C,s,d];if(S.t=C,S.i18n=s,S.ready=d,d||!d&&!l)return S;throw new Promise(y=>{e.lng?Yg(s,e.lng,h,()=>y()):Qg(s,h,()=>y())})},vx=()=>{const{t}=yx(),[e,n]=L.useState(!0),[r,i]=L.useState(!1),[s,o]=L.useState(!1),[l,u]=L.useState(""),[h,d]=L.useState(""),[p,m]=L.useState(""),[I,C]=L.useState(""),[P,x]=L.useState(!1),[T,v]=L.useState(!1);L.useState(0);const[S,D]=L.useState(!1),[M,B]=L.useState(!1),w=Wo(),y=()=>{n(!e),u(""),d(""),m("")},_=()=>{i(!r)},E=()=>{o(!s)},k=F=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(F),R=F=>F.length<8||!/[A-Z]/.test(F)||!/[0-9]/.test(F)?(d(t("passwordRequirements")),!1):(d(""),!0),A=async F=>{F.preventDefault();const H=document.getElementById("signUpUsername").value,G=document.getElementById("signUpEmail").value,ae=document.getElementById("signUpPassword").value,le=document.getElementById("confirmPassword").value;if(!k(G)){u(t("invalidEmail"));return}if(ae!==le){d(t("passwordsDoNotMatch"));return}if(R(ae)){Ke(!0);try{const Lt=(await Ck(zr,G,ae)).user;await X4(Qf(up,"users",Lt.uid),{username:H,email:G,premium:!0,premiumExpiresAt:Date.now()+864e5}),Ke(!1),Un(),setTimeout(()=>{w("/dashboard")},500)}catch{Ke(!1),m(t("registrationFailed"))}}},dt=async F=>{F.preventDefault();const H=document.getElementById("signInUsername").value,G=document.getElementById("signInPassword").value;if(!k(H)){u(t("invalidEmail"));return}if(!G){d(t("enterPassword"));return}if(S){m(t("accountLocked"));return}Ke(!0);try{await Pk(zr,H,G),Ke(!1),Un(),setTimeout(()=>{w("/dashboard")},500)}catch(ae){switch(Ke(!1),ae.code){case"auth/user-not-found":m(t("noAccountFound"));break;case"auth/wrong-password":m(t("incorrectPassword"));break;default:m(t("loginFailed"))}}},un=()=>{const F=I;F?kk(zr,F).then(()=>{x(!0),m(t("passwordResetSent")),v(!1)}).catch(()=>{m(t("passwordResetFailed"))}):m(t("enterEmailForReset"))};L.useEffect(()=>{const F=sessionStorage.getItem("rememberMe"),H=sessionStorage.getItem("password");F&&H&&(document.getElementById("signInUsername").value=atob(F),document.getElementById("signInPassword").value=atob(H),document.getElementById("rememberMe").checked=!0)},[]);const Un=()=>{const F=document.querySelector(`.${Z["success-checkmark"]}`);F.classList.add(Z["show-checkmark"]),setTimeout(()=>{F.classList.remove(Z["show-checkmark"])},1e3)},Ke=F=>{const H=document.getElementById("loadingSpinner");F?H.style.display="block":H.style.display="none"};return O.jsxs("div",{className:Z.container,children:[O.jsx("img",{src:cf,alt:t("logoAltText"),className:Z.logo}),O.jsxs("form",{children:[O.jsxs("div",{className:Z.biometricButton,children:[O.jsx("img",{src:tx,alt:t("biometricLogin"),className:Z.biometricIcon}),O.jsxs("div",{className:Z.biometricText,children:[O.jsx("div",{children:t("biometricLogin")}),O.jsx("small",{children:t("biometricLoginText")})]})]}),O.jsxs("div",{className:Z.tabs,children:[O.jsx("button",{type:"button",onClick:y,className:e?Z.active:"",children:t("signIn")}),O.jsx("button",{type:"button",onClick:y,className:e?"":Z.active,children:t("signUp")})]}),e?O.jsxs("div",{className:Z.form,children:[O.jsx("input",{type:"email",id:"signInUsername",placeholder:t("email"),autoComplete:"username",value:I,onChange:F=>{C(F.target.value),u(""),m("")}}),l&&O.jsx("p",{className:Z.error,children:l}),O.jsxs("div",{className:Z.passwordContainer,children:[O.jsx("input",{type:r?"text":"password",id:"signInPassword",placeholder:t("password"),autoComplete:"current-password",onChange:()=>d("")}),O.jsx("span",{className:Z.passwordToggle,onClick:_,children:r?"👁️":"👁️‍🗨️"})]}),h&&O.jsx("p",{className:Z.error,children:h}),O.jsxs("div",{className:Z.checkboxContainer,children:[O.jsx("input",{type:"checkbox",id:"rememberMe"}),O.jsx("label",{htmlFor:"rememberMe",children:t("rememberMe")})]}),O.jsx("button",{type:"submit",className:Z.submitButton,onClick:dt,children:t("signIn")}),O.jsx("a",{href:"#",className:Z.forgotPassword,onClick:()=>v(!0),children:t("forgotPassword")}),O.jsx("a",{href:"/my-app/",className:Z.backToHome,children:t("backToHome")})]}):O.jsxs("div",{className:Z.form,children:[O.jsx("input",{type:"text",id:"signUpUsername",placeholder:t("username"),autoComplete:"username"}),O.jsx("input",{type:"email",id:"signUpEmail",placeholder:t("email"),autoComplete:"email"}),l&&O.jsx("p",{className:Z.error,children:l}),O.jsxs("div",{className:Z.passwordContainer,children:[O.jsx("input",{type:r?"text":"password",id:"signUpPassword",placeholder:t("password"),onChange:F=>R(F.target.value),autoComplete:"new-password"}),O.jsx("span",{className:Z.passwordToggle,onClick:_,children:r?"👁️":"👁️‍🗨️"})]}),O.jsxs("div",{className:Z.passwordContainer,children:[O.jsx("input",{type:s?"text":"password",id:"confirmPassword",placeholder:t("confirmPassword"),autoComplete:"new-password"}),O.jsx("span",{className:Z.passwordToggle,onClick:E,children:s?"👁️":"👁️‍🗨️"})]}),h&&O.jsx("p",{className:Z.error,children:h}),O.jsx("button",{type:"submit",className:Z.submitButton,onClick:A,children:t("signUp")})]})]}),T&&O.jsx("div",{className:Z.errorPopup,children:O.jsxs("div",{className:Z.errorMessage,children:[O.jsx("p",{children:t("enterEmailForReset")}),O.jsx("input",{type:"email",value:I,onChange:F=>C(F.target.value)}),O.jsx("button",{className:Z.resetPasswordButton,onClick:un,children:t("resetPassword")}),O.jsx("button",{className:Z.cancelButton,onClick:()=>v(!1),children:t("cancel")})]})}),M&&O.jsx("div",{className:Z.errorPopup,children:O.jsxs("div",{className:Z.errorMessage,children:[O.jsx("p",{children:t("accountLockedMessage")}),O.jsx("button",{className:Z.okButton,onClick:()=>B(!1),children:t("ok")})]})}),O.jsx("div",{id:"loadingSpinner",className:Z.loadingSpinner}),O.jsx("div",{className:Z["success-checkmark"],children:O.jsx("div",{className:Z["checkmark-icon"]})})]})},_x="_pageContainer_1e0ij_1",wx="_textContainer_1e0ij_13",Ex="_highlightWhite_1e0ij_25",Tx="_highlightYellow_1e0ij_29",Ix="_footer_1e0ij_33",Sx="_registerButton_1e0ij_40",Ax="_ageRestriction_1e0ij_51",qn={pageContainer:_x,textContainer:wx,highlightWhite:Ex,highlightYellow:Tx,footer:Ix,registerButton:Sx,ageRestriction:Ax},kx="/my-app/assets/background-BU3nghe6.jpg",Xg=()=>{const t=Wo(),[e,n]=L.useState(!1),[r,i]=L.useState(!0);L.useEffect(()=>{const o=zr.onAuthStateChanged(l=>{n(!!l),i(!1)});return()=>o()},[]);const s=()=>{t("/auth")};return r?null:O.jsxs("div",{className:qn.pageContainer,style:{backgroundImage:`url(${kx})`},children:[O.jsx(uw,{onProfileClick:s,isAuthenticated:e})," ",O.jsx("div",{className:qn.textContainer,children:O.jsxs("h1",{children:[O.jsx("span",{className:qn.highlightWhite,children:"5"}),O.jsx("span",{className:qn.highlightYellow,children:" FREE FORECASTS "}),O.jsx("span",{className:qn.highlightWhite,children:"FOR NEW REGISTRATION"})]})}),O.jsxs("div",{className:qn.footer,children:[O.jsx("button",{className:qn.registerButton,onClick:s,children:"Register"}),O.jsxs("div",{className:qn.ageRestriction,children:[O.jsx("img",{src:cw,alt:"18+"}),O.jsx("p",{children:"Registration is prohibited for persons under 18 years of age"})]})]})]})},Cx="_bottomNav_1l74l_1",Px="_hidden_1l74l_16",Rx="_navItem_1l74l_20",Nx="_active_1l74l_39",de={bottomNav:Cx,hidden:Px,navItem:Rx,active:Nx},xx="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%20x='0'%20y='0'%20viewBox='0%200%2024%2024'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%20class=''%3e%3cg%3e%3cpath%20d='M20%2022.75h-2.5A2.753%202.753%200%200%201%2014.75%2020v-3.5a.75.75%200%200%200-.75-.75h-4a.75.75%200%200%200-.75.75V20a2.753%202.753%200%200%201-2.75%202.75H4A2.753%202.753%200%200%201%201.25%2020V9.042a2.75%202.75%200%200%201%201.173-2.253l8-5.6a2.76%202.76%200%200%201%203.154%200l8%205.6a2.75%202.75%200%200%201%201.173%202.253V20A2.753%202.753%200%200%201%2020%2022.75zm-10-8.5h4a2.252%202.252%200%200%201%202.25%202.25V20a1.252%201.252%200%200%200%201.25%201.25H20A1.252%201.252%200%200%200%2021.25%2020V9.042a1.252%201.252%200%200%200-.533-1.025l-8-5.6a1.255%201.255%200%200%200-1.434%200l-8%205.6a1.252%201.252%200%200%200-.533%201.025V20A1.252%201.252%200%200%200%204%2021.25h2.5A1.252%201.252%200%200%200%207.75%2020v-3.5A2.252%202.252%200%200%201%2010%2014.25z'%20data-name='Layer%202'%20fill='%23ffffff'%20opacity='1'%20data-original='%23000000'%20class=''%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Ox="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%20x='0'%20y='0'%20viewBox='0%200%20512%20512'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%20fill-rule='evenodd'%20class=''%3e%3cg%3e%3cpath%20d='M115%20473c-20%200-35-16-35-35v-88c0-3%203-6%206-6h57c4%200%206%203%206%206v88c0%2019-15%2035-34%2035zM95%20332V209l-6-12c-1-2-1-4-1-6l16-30c1-2%203-3%205-3h11c2%200%204%201%205%203l16%2031c1%201%201%204%200%205l-7%2012v123z'%20fill='%23fefefe'%20opacity='1'%20data-original='%23000000'%20class=''%3e%3c/path%3e%3cpath%20d='M68%20384H20c-6%200-12-3-16-7-3-4-5-9-4-13l34-238c2-10%2010-18%2020-18h409c6%200%2012%203%2016%207%203%204%205%209%204%2013l-15%20103c-1-1-1-2-2-3-6-5-13-10-22-10-7%200-13%204-19%209-4%203-8%207-12%2011-1-1-3-2-5-2%201-13%201-27-8-37-5-5-12-7-19-7-11%200-23-1-34%200-8%200-16%201-23%208-5%205-6%2012-7%2019v17c-2%200-4%201-5%202-9-10-19-20-32-20-7%200-14%203-19%208-8%208-16%2016-23%2024-6%206-11%2013-11%2022%200%207%204%2013%208%2019l12%2012c-1%201-2%203-2%205-13-1-27-1-37%208-5%205-7%2012-7%2019%200%2011-1%2022%200%2033%200%206%201%2011%203%2016h-43v-34c0-9-6-17-15-18V213l5-10c3-5%203-11%200-17l-15-30c-3-6-9-10-16-10h-11c-7%200-13%203-16%2010l-15%2030c-3%205-3%2011%200%2016l5%2010v120c-8%201-15%209-15%2018zm286-235H209c-3%200-6-2-6-6%200-3%203-6%206-6h145c3%200%206%203%206%206%200%204-3%206-6%206zm-22%2025H188c-4%200-6-2-6-6%200-3%202-6%206-6h144c3%200%206%203%206%206%200%204-3%206-6%206z'%20fill='%23fefefe'%20opacity='1'%20data-original='%23000000'%20class=''%3e%3c/path%3e%3cpath%20d='M5%20245V29C5%2018%2014%209%2026%209h172c12%200%2018%2010%2022%2019%201%201%201%202%202%203l14%2027h195c11%200%2020%2010%2020%2021v17H54c-16%200-29%2013-31%2029zM363%20443c-9%200-18-1-27-4-2-1-4-3-4-6v-33c-34-23-35-73-2-97%204-3%209%200%209%205v46h51v-46c0-5%205-8%209-5%2033%2024%2032%2074-2%2097v32c0%202-2%205-4%205-10%204-20%206-30%206z'%20fill='%23fefefe'%20opacity='1'%20data-original='%23000000'%20class=''%3e%3c/path%3e%3cpath%20d='M381%20503c-55%200-52%205-52-40-7-3-14-5-20-9-32%2032-26%2031-65-8-14-14%206-27%2017-39-3-7-6-13-8-20-45%200-40%203-40-52%200-19%2024-15%2040-15%202-7%205-14%208-20-32-32-30-27%209-65%2014-14%2028%206%2039%2017%206-3%2013-6%2020-8%200-45-3-40%2052-40%2019%200%2015%2024%2015%2040%207%202%2013%205%2020%208%2032-32%2026-30%2065%209%2014%2013-6%2027-18%2039%204%206%206%2013%209%2020%2045%200%2040-3%2040%2052%200%2019-24%2015-40%2015-3%207-5%2013-9%2020%2032%2032%2031%2026-8%2065-14%2014-28-7-39-18-7%204-13%206-20%209%200%2016%204%2040-15%2040zm-19-73c-42%200-76-35-76-77s34-76%2076-76%2077%2034%2077%2076-35%2077-77%2077z'%20fill='%23fefefe'%20opacity='1'%20data-original='%23000000'%20class=''%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Dx="/my-app/assets/ball-YK_BBv-1.svg",bx="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%20x='0'%20y='0'%20viewBox='0%200%2066%2066'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%20class=''%3e%3cg%3e%3cpath%20d='M40.53%2039.05c.44-.59.66-1.35.66-2.28s-.22-1.69-.66-2.28c-.43-.58-1.02-.86-1.8-.86s-1.37.28-1.8.86c-.44.59-.66%201.35-.66%202.28s.22%201.69.66%202.28c.43.58%201.02.86%201.8.86s1.37-.28%201.8-.86zM50.61%2044.6c-.78%200-1.37.28-1.8.86-.44.59-.66%201.35-.66%202.28s.22%201.69.66%202.28c.43.58%201.02.86%201.8.86s1.37-.28%201.8-.86c.44-.59.66-1.35.66-2.28s-.22-1.69-.66-2.28c-.43-.58-1.02-.86-1.8-.86zM20.2%2021.53c.55%200%201%20.45%201%201a2.88%202.88%200%200%200%205.76%200c0-.55.45-1%201-1h33.95c.84%200%201.63.19%202.33.53L60.93%208.62a3.471%203.471%200%200%200-4.18-2.54l-32.1%207.9c.08%202.26-1.43%204.36-3.71%204.91-1.27.31-2.58.11-3.69-.56a4.85%204.85%200%200%201-1.88-2.06L3.26%2019.24a3.468%203.468%200%200%200-2.53%204.19l.69%202.8c.37-2.65%202.65-4.7%205.4-4.7z'%20fill='%23ffffff'%20opacity='1'%20data-original='%23000000'%20class=''%3e%3c/path%3e%3cpath%20d='M61.91%2023.53H28.85c-.46%202.21-2.43%203.88-4.78%203.88s-4.31-1.67-4.78-3.88H6.83c-1.91%200-3.46%201.55-3.46%203.46v29.56c0%201.91%201.55%203.46%203.46%203.46H19.3c.46-2.21%202.43-3.88%204.78-3.88s4.31%201.67%204.78%203.88h33.05c1.91%200%203.46-1.55%203.46-3.46V26.99c0-1.9-1.56-3.46-3.46-3.46zM16.24%2054.42H9.28c-.55%200-1-.45-1-1s.45-1%201-1h6.96c.55%200%201%20.45%201%201s-.45%201-1%201zm0-5.82H9.28c-.55%200-1-.45-1-1s.45-1%201-1h6.96c.55%200%201%20.45%201%201s-.45%201-1%201zm0-5.83H9.28c-.55%200-1-.45-1-1s.45-1%201-1h6.96c.55%200%201%20.45%201%201s-.45%201-1%201zm0-5.82H9.28c-.55%200-1-.45-1-1s.45-1%201-1h6.96c.55%200%201%20.45%201%201s-.45%201-1%201zm0-5.82H9.28c-.55%200-1-.45-1-1s.45-1%201-1h6.96c.55%200%201%20.45%201%201s-.45%201-1%201zm8.73%2021.08c0%20.55-.45%201-1%201s-1-.45-1-1v-2.25c0-.55.45-1%201-1s1%20.45%201%201zm0-6.21c0%20.55-.45%201-1%201s-1-.45-1-1v-2.25c0-.55.45-1%201-1s1%20.45%201%201zm0-6.21c0%20.55-.45%201-1%201s-1-.45-1-1v-2.25c0-.55.45-1%201-1s1%20.45%201%201zm0-6.21c0%20.55-.45%201-1%201s-1-.45-1-1v-2.25c0-.55.45-1%201-1s1%20.45%201%201zm8.85%203.19c0-1.56.43-2.87%201.27-3.88.85-1.03%202.08-1.55%203.63-1.55%201.56%200%202.78.52%203.63%201.55.85%201.02%201.27%202.32%201.27%203.88s-.43%202.87-1.27%203.88c-.85%201.03-2.07%201.55-3.63%201.55s-2.78-.52-3.63-1.55c-.84-1.01-1.27-2.32-1.27-3.88zm5.51%2015.99a1.134%201.134%200%200%201-1.41-.15c-.24-.22-.35-.5-.35-.83%200-.21.06-.41.18-.6l11.91-19.05c.23-.37.57-.56.99-.56.34%200%20.62.09.84.28.23.2.35.46.35.79%200%20.25-.08.5-.24.75L39.77%2052.32c-.11.18-.26.33-.44.44zm14.91-1.14c-.85%201.03-2.08%201.55-3.63%201.55s-2.78-.52-3.63-1.55c-.85-1.02-1.27-2.32-1.27-3.88s.43-2.87%201.27-3.88c.85-1.03%202.08-1.55%203.63-1.55%201.56%200%202.78.52%203.63%201.55.85%201.02%201.27%202.32%201.27%203.88s-.43%202.87-1.27%203.88z'%20fill='%23ffffff'%20opacity='1'%20data-original='%23000000'%20class=''%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Lx="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%20x='0'%20y='0'%20viewBox='0%200%2064%2064'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%20class=''%3e%3cg%3e%3cpath%20d='M53%2021H11c-1.7%200-3-1.3-3-3s1.3-3%203-3h42c1.7%200%203%201.3%203%203s-1.3%203-3%203zM53%2035H11c-1.7%200-3-1.3-3-3s1.3-3%203-3h42c1.7%200%203%201.3%203%203s-1.3%203-3%203zM53%2049H11c-1.7%200-3-1.3-3-3s1.3-3%203-3h42c1.7%200%203%201.3%203%203s-1.3%203-3%203z'%20fill='%23ffffff'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Vx=()=>{const t=Ar(),[e,n]=L.useState(!1);return L.useEffect(()=>{const r=zr.onAuthStateChanged(i=>{n(!!i)});return()=>r()},[]),t.pathname==="/"||t.pathname==="/home"||!e?null:O.jsxs("nav",{className:de.bottomNav,"aria-label":"Bottom navigation",children:[O.jsxs(bs,{to:"/dashboard",className:({isActive:r})=>r?`${de.navItem} ${de.active}`:de.navItem,"aria-label":"Home",children:[O.jsx("img",{src:xx,alt:"Home",className:de.icon}),O.jsx("span",{className:de.text,children:"Home"})]}),O.jsxs(bs,{to:"/support",className:({isActive:r})=>r?`${de.navItem} ${de.active}`:de.navItem,"aria-label":"Support",children:[O.jsx("img",{src:Ox,alt:"Support",className:de.icon}),O.jsx("span",{className:de.text,children:"Support"})]}),O.jsxs(bs,{to:"/sports",className:({isActive:r})=>r?`${de.navItem} ${de.active}`:de.navItem,"aria-label":"Sports",children:[O.jsx("img",{src:Dx,alt:"Sports",className:de.icon}),O.jsx("span",{className:de.text,children:"Sports"})]}),O.jsxs(bs,{to:"/coupons",className:({isActive:r})=>r?`${de.navItem} ${de.active}`:de.navItem,"aria-label":"Coupons",children:[O.jsx("img",{src:bx,alt:"Coupons",className:de.icon}),O.jsx("span",{className:de.text,children:"Coupons"})]}),O.jsxs(bs,{to:"/menu",className:({isActive:r})=>r?`${de.navItem} ${de.active}`:de.navItem,"aria-label":"Menu",children:[O.jsx("img",{src:Lx,alt:"Menu",className:de.icon}),O.jsx("span",{className:de.text,children:"Menu"})]})]})};function Mx(){const t=Ar(),e=["/auth","/"].includes(t.pathname);return L.useEffect(()=>{PN();const n=RN().then(r=>{console.log("Received foreground message: ",r)}).catch(r=>console.log("Failed to receive message: ",r));return()=>n},[]),O.jsxs("div",{className:"appContainer",children:[O.jsxs(lS,{children:[O.jsx(mn,{path:"/",element:O.jsx(Xg,{})}),O.jsx(mn,{path:"/support",element:O.jsx(C6,{})}),O.jsx(mn,{path:"/sports",element:O.jsx(R6,{})}),O.jsx(mn,{path:"/coupons",element:O.jsx(x6,{})}),O.jsx(mn,{path:"/menu",element:O.jsx(D6,{})}),O.jsx(mn,{path:"/auth",element:O.jsx(vx,{})}),O.jsx(mn,{path:"/dashboard",element:O.jsx(A6,{})}),O.jsx(mn,{path:"*",element:O.jsx(Xg,{})})]}),!e&&O.jsx(Vx,{})]})}var Fx={};const Ux=!!(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.[0-9]+){0,2}\.[0-9]+$/));function jx(t){if("serviceWorker"in navigator){if(new URL(Fx.PUBLIC_URL||"/my-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const n=`${window.location.origin}/service-worker.js`;Ux?(Bx(n,t),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):fw(n,t)})}}function fw(t,e){navigator.serviceWorker.register(t).then(n=>{n.onupdatefound=()=>{const r=n.installing;r!=null&&(r.onstatechange=()=>{r.state==="installed"&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(n=>{console.error("Error during service worker registration:",n)})}function Bx(t,e){fetch(t).then(n=>{const r=n.headers.get("content-type");n.status===404||r!=null&&r.indexOf("javascript")===-1?navigator.serviceWorker.ready.then(i=>{i.unregister().then(()=>{window.location.reload()})}):fw(t,e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}const pw="/my-app";c2(document.getElementById("root")).render(O.jsx(L.StrictMode,{children:O.jsx(gS,{basename:pw,children:O.jsx(Mx,{})})}));const zx=`${pw}/serviceWorker.js`;jx({swUrl:zx});
//# sourceMappingURL=index-DCXCyXLn.js.map
