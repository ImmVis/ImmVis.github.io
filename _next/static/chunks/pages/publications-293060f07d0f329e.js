(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{7814:function(e,t,n){"use strict";n.d(t,{G:function(){return x}});var r=n(3636),i=n(5697),o=n.n(i),a=n(7294);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function b(e){var t;return(t=e-0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var d=["style"],m=!1;try{m=!0}catch(e){}function y(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:r.Qc.icon?r.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var x=a.forwardRef(function(e,t){var n,i,o,a,s,c,p,b,d,v,O,g,k,P,w,_,N,I,S,E=e.icon,T=e.mask,A=e.symbol,C=e.className,R=e.title,D=e.titleId,F=e.maskId,G=y(E),W=h("classes",[].concat(f((i=e.beat,o=e.fade,a=e.beatFade,s=e.bounce,c=e.shake,p=e.flash,b=e.spin,d=e.spinPulse,v=e.spinReverse,O=e.pulse,g=e.fixedWidth,k=e.inverse,P=e.border,w=e.listItem,_=e.flip,N=e.size,I=e.rotation,S=e.pull,Object.keys((u(n={"fa-beat":i,"fa-fade":o,"fa-beat-fade":a,"fa-bounce":s,"fa-shake":c,"fa-flash":p,"fa-spin":b,"fa-spin-reverse":v,"fa-spin-pulse":d,"fa-pulse":O,"fa-fw":g,"fa-inverse":k,"fa-border":P,"fa-li":w,"fa-flip":!0===_,"fa-flip-horizontal":"horizontal"===_||"both"===_,"fa-flip-vertical":"vertical"===_||"both"===_},"fa-".concat(N),null!=N),u(n,"fa-rotate-".concat(I),null!=I&&0!==I),u(n,"fa-pull-".concat(S),null!=S),u(n,"fa-swap-opacity",e.swapOpacity),n)).map(function(e){return n[e]?e:null}).filter(function(e){return e}))),f(C.split(" ")))),q=h("transform","string"==typeof e.transform?r.Qc.transform(e.transform):e.transform),z=h("mask",y(T)),L=(0,r.qv)(G,l(l(l(l({},W),q),z),{},{symbol:A,title:R,titleId:D,maskId:F}));if(!L)return!function(){if(!m&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",G),null;var U=L.abstract,V={ref:t};return Object.keys(e).forEach(function(t){x.defaultProps.hasOwnProperty(t)||(V[t]=e[t])}),j(U[0],V)});x.displayName="FontAwesomeIcon",x.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},x.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var j=(function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var i=(n.children||[]).map(function(n){return e(t,n)}),o=Object.keys(n.attributes||{}).reduce(function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=r.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n,r=t.indexOf(":"),i=b(t.slice(0,r)),o=t.slice(r+1).trim();return i.startsWith("webkit")?e[(n=i).charAt(0).toUpperCase()+n.slice(1)]=o:e[i]=o,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[b(t)]=r}return e},{attrs:{}}),a=r.style,s=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(r,d);return o.attrs.style=l(l({},o.attrs.style),void 0===a?{}:a),t.apply(void 0,[n.tag,l(l({},o.attrs),s)].concat(f(i)))}).bind(null,a.createElement)},7589:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/publications",function(){return n(1212)}])},1212:function(e,t,n){"use strict";n.r(t),n.d(t,{PublicationItem:function(){return b},PublicationList:function(){return p},__N_SSG:function(){return u},default:function(){return f}});var r=n(5893),i=n(9008),o=n.n(i),a=n(5675),s=n.n(a),l=n(7814),c=n(9417),u=!0;function f(e){let{publications:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:"Publications - ImmVis"})}),(0,r.jsxs)("main",{className:"publication-page",children:[(0,r.jsx)("h1",{children:"Publications"}),(0,r.jsx)("p",{children:"Nostrud nisi consequat elit ex laborum culpa ipsum. Est sit amet voluptate et aute amet consectetur nulla occaecat do reprehenderit et consequat. Velit nisi id fugiat veniam exercitation fugiat est mollit sunt cillum eu. Consectetur pariatur pariatur fugiat laborum id magna sit laborum. Elit aute ullamco commodo nisi veniam laborum quis veniam ex mollit duis qui culpa. Sit minim ut minim ut commodo adipisicing fugiat cupidatat commodo eu adipisicing ad elit. Ex occaecat sunt elit id do occaecat excepteur nisi."}),(0,r.jsx)("hr",{}),(0,r.jsx)(p,{publications:t})]})]})}function p(e){let{publications:t}=e;return(0,r.jsx)("div",{className:"publication-list",children:t.map(e=>(0,r.jsx)(b,{post:e},e.slug))})}function b(e){let{post:t}=e,{slug:n,data:i}=t;return(0,r.jsxs)("div",{className:"publication-box",children:[(0,r.jsx)(s(),{width:512,height:512,alt:i.thumbnail,src:i.thumbnail}),(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("p",{role:"title",children:i.title}),(0,r.jsx)("p",{children:i.authors}),(0,r.jsx)("p",{children:(0,r.jsxs)("i",{children:[i.venue,", ",i.year]})}),(0,r.jsx)("p",{children:i.doi&&(0,r.jsxs)("a",{href:i.doi,children:["doi:",i.doi]})}),(0,r.jsxs)("div",{className:"publication-box-links",children:[i.pdf&&(0,r.jsxs)("a",{href:i.pdf,target:"_blank",children:[(0,r.jsx)(l.G,{icon:c.N2j}),(0,r.jsx)("span",{children:"Paper (PDF)"})]}),i.bib&&(0,r.jsxs)("a",{href:i.bib,target:"_blank",children:[(0,r.jsx)(l.G,{icon:c.nA6}),(0,r.jsx)("span",{children:"BibTex"})]}),i.code&&(0,r.jsxs)("a",{href:i.code,target:"_blank",children:[(0,r.jsx)(l.G,{icon:c.dT$}),(0,r.jsx)("span",{children:"Source"})]}),i.video&&(0,r.jsxs)("a",{href:i.video,target:"_blank",children:[(0,r.jsx)(l.G,{icon:c.IyC}),(0,r.jsx)("span",{children:"Video"})]}),i.annotation&&(0,r.jsxs)("div",{children:[(0,r.jsx)(l.G,{icon:c.LEN}),(0,r.jsx)("span",{children:i.annotation})]})]})]})]})}},2703:function(e,t,n){"use strict";var r=n(414);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[976,774,888,179],function(){return e(e.s=7589)}),_N_E=e.O()}]);