/*! For license information please see main.6257a0c2.js.LICENSE.txt */
!function(){"use strict";var t={374:function(t,e,r){var n=r(791),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,r){var n,a={},l=null,s=null;for(n in void 0!==r&&(l=""+r),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(s=e.ref),e)i.call(e,n)&&!c.hasOwnProperty(n)&&(a[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===a[n]&&(a[n]=e[n]);return{$$typeof:o,type:t,key:l,ref:s,props:a,_owner:u.current}}e.jsx=l,e.jsxs=l},117:function(t,e){var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d=Object.assign,v={};function m(t,e,r){this.props=t,this.context=e,this.refs=v,this.updater=r||y}function g(){}function b(t,e,r){this.props=t,this.context=e,this.refs=v,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(t,e){if("object"!==typeof t&&"function"!==typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},m.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},g.prototype=m.prototype;var w=b.prototype=new g;w.constructor=b,d(w,m.prototype),w.isPureReactComponent=!0;var _=Array.isArray,S=Object.prototype.hasOwnProperty,x={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(t,e,n){var o,a={},i=null,u=null;if(null!=e)for(o in void 0!==e.ref&&(u=e.ref),void 0!==e.key&&(i=""+e.key),e)S.call(e,o)&&!E.hasOwnProperty(o)&&(a[o]=e[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];a.children=l}if(t&&t.defaultProps)for(o in c=t.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:t,key:i,ref:u,props:a,_owner:x.current}}function O(t){return"object"===typeof t&&null!==t&&t.$$typeof===r}var P=/\/+/g;function k(t,e){return"object"===typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function L(t,e,o,a,i){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case r:case n:c=!0}}if(c)return i=i(c=t),t=""===a?"."+k(c,0):a,_(i)?(o="",null!=t&&(o=t.replace(P,"$&/")+"/"),L(i,e,o,"",(function(t){return t}))):null!=i&&(O(i)&&(i=function(t,e){return{$$typeof:r,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+t)),e.push(i)),1;if(c=0,a=""===a?".":a+":",_(t))for(var l=0;l<t.length;l++){var s=a+k(u=t[l],l);c+=L(u,e,o,s,i)}else if(s=function(t){return null===t||"object"!==typeof t?null:"function"===typeof(t=h&&t[h]||t["@@iterator"])?t:null}(t),"function"===typeof s)for(t=s.call(t),l=0;!(u=t.next()).done;)c+=L(u=u.value,e,o,s=a+k(u,l++),i);else if("object"===u)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return c}function C(t,e,r){if(null==t)return t;var n=[],o=0;return L(t,n,"","",(function(t){return e.call(r,t,o++)})),n}function N(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var T={current:null},I={transition:null},R={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:x};e.Children={map:C,forEach:function(t,e,r){C(t,(function(){e.apply(this,arguments)}),r)},count:function(t){var e=0;return C(t,(function(){e++})),e},toArray:function(t){return C(t,(function(t){return t}))||[]},only:function(t){if(!O(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},e.Component=m,e.Fragment=o,e.Profiler=i,e.PureComponent=b,e.StrictMode=a,e.Suspense=s,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,e.cloneElement=function(t,e,n){if(null===t||void 0===t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=d({},t.props),a=t.key,i=t.ref,u=t._owner;if(null!=e){if(void 0!==e.ref&&(i=e.ref,u=x.current),void 0!==e.key&&(a=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(l in e)S.call(e,l)&&!E.hasOwnProperty(l)&&(o[l]=void 0===e[l]&&void 0!==c?c[l]:e[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:r,type:t.type,key:a,ref:i,props:o,_owner:u}},e.createContext=function(t){return(t={$$typeof:c,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:t},t.Consumer=t},e.createElement=j,e.createFactory=function(t){var e=j.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:l,render:t}},e.isValidElement=O,e.lazy=function(t){return{$$typeof:p,_payload:{_status:-1,_result:t},_init:N}},e.memo=function(t,e){return{$$typeof:f,type:t,compare:void 0===e?null:e}},e.startTransition=function(t){var e=I.transition;I.transition={};try{t()}finally{I.transition=e}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(t,e){return T.current.useCallback(t,e)},e.useContext=function(t){return T.current.useContext(t)},e.useDebugValue=function(){},e.useDeferredValue=function(t){return T.current.useDeferredValue(t)},e.useEffect=function(t,e){return T.current.useEffect(t,e)},e.useId=function(){return T.current.useId()},e.useImperativeHandle=function(t,e,r){return T.current.useImperativeHandle(t,e,r)},e.useInsertionEffect=function(t,e){return T.current.useInsertionEffect(t,e)},e.useLayoutEffect=function(t,e){return T.current.useLayoutEffect(t,e)},e.useMemo=function(t,e){return T.current.useMemo(t,e)},e.useReducer=function(t,e,r){return T.current.useReducer(t,e,r)},e.useRef=function(t){return T.current.useRef(t)},e.useState=function(t){return T.current.useState(t)},e.useSyncExternalStore=function(t,e,r){return T.current.useSyncExternalStore(t,e,r)},e.useTransition=function(){return T.current.useTransition()},e.version="18.2.0"},791:function(t,e,r){t.exports=r(117)},184:function(t,e,r){t.exports=r(374)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(k){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=S(i,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}r.wrap=s;var p={};function h(){}function y(){}function d(){}var v={};l(v,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(O([])));g&&g!==n&&o.call(g,i)&&(v=g);var b=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(e,r){function n(a,i,u,c){var l=f(e[a],e,i);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==t(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(p).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var a;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}}function S(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=d,l(b,"constructor",d),l(d,"constructor",y),y.displayName=l(d,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},w(_.prototype),l(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new _(s(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),l(b,c,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},r}function n(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"","type":"object","version":1,"comments":"Configuration schema for view geojson data package","additionalProperties":false,"properties":{"isOpen":{"type":"boolean","description":"Specifies whether the view geojson data panel is initially open or closed","default":false},"enablePanel":{"type":"boolean","description":"Specifies whether a panel will open on feature click","default":false},"enableTooltip":{"type":"boolean","description":"Specifies whether a tooltip will be displayed on feature hover","default":true},"geoJsonPath":{"type":"string","description":"Path to the geojson file"}},"required":["geoJsonPath","enablePanel","enableTooltip"]}'),i=JSON.parse('{"isOpen":false,"geoJsonPath":"https://yass0016.github.io/GeoView/geojson/historical_flood_0.geojson","enablePanel":false,"enableTooltip":true}');function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"===typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=r(184);function s(t){var e=t.panel,r=t.mapId,n=window.cgpv,o=n.react,a=n.api,i=n.ui.elements.ArrowBackIcon,u=o.useEffect,s=o.useState,f=c(s([]),2),p=f[0],h=f[1],y=c(s({}),2),d=y[0],v=y[1],m=c(s(!1),2),g=m[0],b=m[1];function w(t){var r=t.map.getFeaturesAtPixel(t.pixel);h(r),b(!0),e.open()}function _(){e.removeActionButton("backButton"),v({}),b(!0)}return u((function(){var t=a.map(r).map;return t.on("click",w),function(){t.un("click",w)}}),[]),(0,l.jsx)("div",{children:g?p.map((function(t){return(0,l.jsx)("div",{onClick:function(r){return function(t,r){var n=r.getProperties();delete n.geometry,b(!1),v(n),e.addActionButton("backButton","Back",(0,l.jsx)(i,{}),_)}(0,t)},className:"feature-list-item",children:(0,l.jsx)("div",{className:"feature-list-item-value",children:t.ol_uid})},t.ol_uid)})):Object.keys(d).map((function(t,e){return(0,l.jsxs)("div",{className:"tooltip-value",style:{backgroundColor:e%2===0?"#202020":"#000",whiteSpace:"normal",height:"auto"},children:[(0,l.jsxs)("strong",{children:[t,":"]})," ",d[t]]},t)}))})}var f=window,p=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.buttonPanel=null,this.schema=function(){return a},this.defaultConfig=function(){return i},this.translations={"en-CA":{viewGeoJSONDataPanel:"View GeoJSON Data"},"fr-CA":{viewGeoJSONDataPanel:"Afficher les donn\xe9es GeoJSON"}},this.added=function(){var t=e.configObj,r=e.props.mapId,n=f.cgpv;if(n){var o=n.api,a=n.ui.elements.DetailsIcon,i=o.map(r).language;if(e.loadGeoJsonDataOnMap(),null!==t&&void 0!==t&&t.enablePanel){var u,c,p,h={id:"viewGeoJsonDataPanelButton",tooltip:e.translations[i].viewGeoJSONDataPanel,tooltipPlacement:"right",children:(0,l.jsx)(a,{}),visible:!0},y={title:e.translations[i].viewGeoJSONDataPanel,icon:(0,l.jsx)(a,{}),width:200,status:null===t||void 0===t?void 0:t.isOpen};e.buttonPanel=o.map(r).appBarButtons.createAppbarPanel(h,y,null),null===(u=e.buttonPanel)||void 0===u||null===(c=u.panel)||void 0===c||c.changeContent((0,l.jsx)(s,{panel:null===(p=e.buttonPanel)||void 0===p?void 0:p.panel,mapId:r}))}if(t.enableTooltip){var d=o.map(r).map;e.createTooltipContainer(),d.on("pointermove",e.displayDetails)}}},this.removed=function(){var t=e.configObj,r=e.pluginProps.mapId,n=f.cgpv;if(n){var o=n.api;if(e.buttonPanel&&o.map(r).appBarButtons.removeAppbarPanel(e.buttonPanel.id),t.enableTooltip)o.map(r).map.un("pointermove",e.displayDetails)}}}var r,u,c;return r=t,u=[{key:"displayDetails",value:function(t){var e=t.pixel,r=t.map,n=r.forEachFeatureAtPixel(e,(function(t){return t})),o=r.getTargetElement().getElementsByClassName("tooltip");if(o&&o.length>0&&(o[0].style.display="none",o[0].innerHTML="",n)){o[0].style.display="block",o[0].style.top=e[1]+"px",o[0].style.left=e[0]+"px";var a=n.getProperties();delete a.geometry,Object.keys(a).forEach((function(t,e){var r=document.createElement("div");r.innerHTML="<strong>".concat(t,":</strong> ").concat(a[t]),r.className="tooltip-value",r.style.backgroundColor=e%2===0?"#f2f2f2":"#fff",o[0].innerHTML+=r.outerHTML}))}}},{key:"createTooltipContainer",value:function(){var t=this.props,e=f.cgpv,r=t.mapId,n=e.api.map(r).map.getTargetElement(),o=document.createElement("div");o.className="tooltip",n&&n.append(o)}},{key:"loadGeoJsonDataOnMap",value:function(){var t,r=(t=e().mark((function t(){var r,n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=this.configObj,n=this.props,o=n.mapId,f.cgpv.api.map(o).layer.addLayer({id:"viewGeoJsonDataLyer",name:{en:"GeoJSON Data",fr:"Donn\xe9es GeoJSON"},url:{en:r.geoJsonPath,fr:r.geoJsonPath},layerType:"geojson"});case 5:case"end":return t.stop()}}),t,this)})),function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function u(t){n(i,o,a,u,c,"next",t)}function c(t){n(i,o,a,u,c,"throw",t)}u(void 0)}))});return function(){return r.apply(this,arguments)}}()}],u&&o(r.prototype,u),c&&o(r,c),Object.defineProperty(r,"prototype",{writable:!1}),t}();f.plugins=f.plugins||{},f.plugins["view-geojson-data"]=p}()}();
//# sourceMappingURL=main.6257a0c2.js.map