(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[393],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return h}});var n=r(3636),o=r(5697),i=r.n(o),a=r(7294);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function b(e){var t;return(t=e-0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var d=["style"],m=!1;try{m=!0}catch(e){}function y(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function x(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var h=a.forwardRef(function(e,t){var r,o,i,a,s,c,p,b,d,v,O,g,w,k,_,P,N,I,E,S=e.icon,T=e.mask,A=e.symbol,q=e.className,C=e.title,R=e.titleId,D=e.maskId,L=y(S),W=x("classes",[].concat(f((o=e.beat,i=e.fade,a=e.beatFade,s=e.bounce,c=e.shake,p=e.flash,b=e.spin,d=e.spinPulse,v=e.spinReverse,O=e.pulse,g=e.fixedWidth,w=e.inverse,k=e.border,_=e.listItem,P=e.flip,N=e.size,I=e.rotation,E=e.pull,Object.keys((u(r={"fa-beat":o,"fa-fade":i,"fa-beat-fade":a,"fa-bounce":s,"fa-shake":c,"fa-flash":p,"fa-spin":b,"fa-spin-reverse":v,"fa-spin-pulse":d,"fa-pulse":O,"fa-fw":g,"fa-inverse":w,"fa-border":k,"fa-li":_,"fa-flip":!0===P,"fa-flip-horizontal":"horizontal"===P||"both"===P,"fa-flip-vertical":"vertical"===P||"both"===P},"fa-".concat(N),null!=N),u(r,"fa-rotate-".concat(I),null!=I&&0!==I),u(r,"fa-pull-".concat(E),null!=E),u(r,"fa-swap-opacity",e.swapOpacity),r)).map(function(e){return r[e]?e:null}).filter(function(e){return e}))),f(q.split(" ")))),F=x("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),z=x("mask",y(T)),U=(0,n.qv)(L,l(l(l(l({},W),F),z),{},{symbol:A,title:C,titleId:R,maskId:D}));if(!U)return!function(){if(!m&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",L),null;var G=U.abstract,Q={ref:t};return Object.keys(e).forEach(function(t){h.defaultProps.hasOwnProperty(t)||(Q[t]=e[t])}),j(G[0],Q)});h.displayName="FontAwesomeIcon",h.propTypes={beat:i().bool,border:i().bool,beatFade:i().bool,bounce:i().bool,className:i().string,fade:i().bool,flash:i().bool,mask:i().oneOfType([i().object,i().array,i().string]),maskId:i().string,fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf([!0,!1,"horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),shake:i().bool,size:i().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,spinPulse:i().bool,spinReverse:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,titleId:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},h.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var j=(function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map(function(r){return e(t,r)}),i=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r,n=t.indexOf(":"),o=b(t.slice(0,n)),i=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o).charAt(0).toUpperCase()+r.slice(1)]=i:e[o]=i,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e},{attrs:{}}),a=n.style,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(n,d);return i.attrs.style=l(l({},i.attrs.style),void 0===a?{}:a),t.apply(void 0,[r.tag,l(l({},i.attrs),s)].concat(f(o)))}).bind(null,a.createElement)},8262:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exjobbs",function(){return r(1856)}])},1856:function(e,t,r){"use strict";r.r(t),r.d(t,{ExjobbItem:function(){return b},ExjobbList:function(){return p},__N_SSG:function(){return u},default:function(){return f}});var n=r(5893),o=r(9008),i=r.n(o),a=r(1664),s=r.n(a),l=r(7814),c=r(9417),u=!0;function f(e){let{exjobbs:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:"Exjobbs - ImmVis"})}),(0,n.jsxs)("main",{className:"exjobb-page",children:[(0,n.jsx)("h1",{children:"Latest exjobbs"}),(0,n.jsx)("p",{children:"Do eu exercitation ea id ullamco dolor in non pariatur consequat. Ea voluptate aliquip fugiat magna aliquip fugiat incididunt proident esse nulla velit tempor cillum dolor. Qui ad ipsum sint reprehenderit quis esse ipsum. Minim aliquip anim nulla pariatur id ut Lorem do dolor amet nostrud irure. Duis ipsum tempor enim quis consectetur aliqua do in nostrud fugiat nostrud cillum aliqua. Pariatur est aliquip eu sit elit veniam. Aliqua et excepteur eiusmod proident velit excepteur excepteur deserunt magna pariatur."}),(0,n.jsx)("hr",{}),(0,n.jsx)(p,{exjobbs:t})]})]})}function p(e){let{exjobbs:t}=e;return(0,n.jsx)("div",{className:"exjobb-list",children:t.map(e=>(0,n.jsx)(b,{post:e},e.slug))})}function b(e){var t;let{post:r}=e,{slug:o,data:i}=r;return(0,n.jsxs)(s(),{href:"exjobbs/".concat(o),className:"exjobb-box",children:[(0,n.jsx)("p",{role:"name",children:i.name}),(0,n.jsx)("p",{role:"description",children:i.description}),(0,n.jsxs)("div",{className:"exjobb-box-details",children:[(0,n.jsxs)("div",{className:"exjobb-box-details-list",children:[(0,n.jsxs)("div",{className:"exjobb-box-details-info mr-3",title:"The number of students for this exjobb",children:[(0,n.jsx)(l.G,{icon:c.ILF}),i.number_of_students]}),(0,n.jsxs)("div",{className:"exjobb-box-details-info",title:"The date when the exjobb is to be carried out",children:[(0,n.jsx)(l.G,{icon:c.WRo}),i.period]})]}),(0,n.jsx)("div",{className:"exjobb-box-details-list",children:null===(t=i.skills)||void 0===t?void 0:t.map(e=>(0,n.jsx)("span",{className:"exjobb-box-details-tag",children:e},e))})]})]})}},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[976,774,888,179],function(){return e(e.s=8262)}),_N_E=e.O()}]);