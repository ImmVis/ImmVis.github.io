(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{2013:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[slug]",function(){return i(1191)}])},7173:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var t=i(5893),s=i(5675),r=i.n(s),l=i(1664),c=i.n(l),a=i(6150),d=i.n(a);function o(e){let{personnel:n,liuidList:i}=e,s={};return i.forEach(e=>{let i=n.find(n=>n.data.id==e);i&&(s[e]=i)}),(0,t.jsx)("div",{className:d().list,children:i.map(e=>{var n;return(console.assert(void 0===(n=s[e])||n.data.id===e),void 0!==n)?(0,t.jsx)("div",{className:d().item,children:(0,t.jsx)(c(),{href:"/personnel/".concat(n.slug),title:n.data.name,children:(0,t.jsx)(r(),{width:"256",height:"256",alt:e,src:n.data.image})})},e):(0,t.jsx)("div",{className:d().item,children:(0,t.jsx)("div",{title:e,children:(0,t.jsxs)("span",{children:[e[0],e[3]]})})},e)})})}},1191:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSG:function(){return f},default:function(){return p}});var t=i(5893),s=i(9008),r=i.n(s),l=i(5675),c=i.n(l),a=i(3305),d=i(1212),o=i(7173),u=i(2577),h=i.n(u);function x(e){let{fundings:n,fundingIdList:i}=e,s={};return i.forEach(e=>{let i=n.find(n=>n.data.id==e);i&&(s[e]=i)}),(0,t.jsx)("div",{className:h().list,children:i.map(e=>{var n;return(console.assert(void 0===(n=s[e])||n.data.id===e),void 0!==n)?(0,t.jsx)("div",{className:h().item,children:(0,t.jsx)("a",{href:n.data.link,title:n.data.name,target:"_blank",children:(0,t.jsx)(c(),{width:"256",height:"256",alt:n.data.id,src:n.data.icon})})},e):(0,t.jsx)("div",{className:h().item,children:(0,t.jsx)("div",{title:e,children:(0,t.jsx)("span",{children:e})})},e)})})}var j=i(7814),m=i(9417),f=!0;function p(e){let{project:n,fundings:i,personnel:s,publications:l}=e,{data:u,content:h,mdxPath:f}=n,p=l.filter(e=>{var n;return null===(n=e.data.projects)||void 0===n?void 0:n.includes(u.id)});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r(),{children:(0,t.jsx)("title",{children:"".concat(u.name," - ImmVis")})}),(0,t.jsxs)("main",{className:"project-single",children:[(0,t.jsxs)("div",{className:"project-single-profile",children:[(0,t.jsx)("div",{className:"left",children:(0,t.jsx)(c(),{width:512,height:512,quality:100,alt:u.image,src:u.image})}),(0,t.jsxs)("div",{className:"right",children:[(0,t.jsx)("p",{role:"name",children:u.name}),(0,t.jsxs)("div",{className:"contributors",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Contributors"}),(0,t.jsx)(o.Z,{personnel:s,liuidList:u.people})]}),(0,t.jsx)("div",{children:u.funding.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{children:"Funding"}),(0,t.jsx)(x,{fundings:i,fundingIdList:u.funding})]})}),(0,t.jsx)("div",{children:u.homepage&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{children:"Homepage"}),(0,t.jsxs)("div",{className:"homepage",children:[(0,t.jsx)(j.G,{icon:m.nNP,fixedWidth:!0}),(0,t.jsx)("a",{href:u.homepage,children:u.homepage})]})]})})]})]})]}),(0,t.jsxs)("div",{className:"project-single-markdown mdx-content",children:[(0,t.jsx)(a.R,{...h}),p.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{children:"Publications"}),(0,t.jsx)(d.PublicationList,{publications:p})]})]})]})]})}},1212:function(e,n,i){"use strict";i.r(n),i.d(n,{PublicationList:function(){return h},__N_SSG:function(){return u},default:function(){return x}});var t=i(5893),s=i(9008),r=i.n(s),l=i(5675),c=i.n(l),a=i(7814),d=i(9417);function o(e){let{post:n}=e,{slug:i,data:s}=n;return(0,t.jsxs)("div",{className:"publication-box",children:[(0,t.jsx)(c(),{width:512,height:512,alt:s.thumbnail,src:s.thumbnail}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("p",{role:"title",children:s.title}),(0,t.jsx)("p",{children:s.authors}),(0,t.jsx)("p",{children:(0,t.jsxs)("i",{children:[s.venue,", ",s.year]})}),(0,t.jsx)("p",{children:s.doi&&(0,t.jsxs)("a",{href:s.doi,children:["doi:",s.doi]})}),(0,t.jsxs)("div",{className:"publication-box-links",children:[s.pdf&&(0,t.jsxs)("a",{href:s.pdf,target:"_blank",children:[(0,t.jsx)(a.G,{icon:d.N2j}),(0,t.jsx)("span",{children:"Paper (PDF)"})]}),s.bib&&(0,t.jsxs)("a",{href:s.bib,target:"_blank",children:[(0,t.jsx)(a.G,{icon:d.nA6}),(0,t.jsx)("span",{children:"BibTex"})]}),s.code&&(0,t.jsxs)("a",{href:s.code,target:"_blank",children:[(0,t.jsx)(a.G,{icon:d.dT$}),(0,t.jsx)("span",{children:"Source"})]}),s.video&&(0,t.jsxs)("a",{href:s.video,target:"_blank",children:[(0,t.jsx)(a.G,{icon:d.IyC}),(0,t.jsx)("span",{children:"Video"})]}),s.annotation&&(0,t.jsxs)("div",{children:[(0,t.jsx)(a.G,{icon:d.LEN}),(0,t.jsx)("span",{children:s.annotation})]})]})]})]})}var u=!0;function h(e){let{publications:n}=e;return(0,t.jsx)("div",{className:"publication-list",children:n.map(e=>(0,t.jsx)(o,{post:e},e.slug))})}function x(e){let{publications:n}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r(),{children:(0,t.jsx)("title",{children:"Publications - ImmVis"})}),(0,t.jsxs)("main",{className:"publication-page",children:[(0,t.jsx)("h1",{children:"Publications"}),(0,t.jsx)("p",{children:"Here is a list of the academic publications that members of our group are involved in as co-authors."}),(0,t.jsx)("hr",{}),(0,t.jsx)(h,{publications:n})]})]})}},2577:function(e){e.exports={list:"MiniFundingList_list__dATdF",item:"MiniFundingList_item__DX495"}},6150:function(e){e.exports={list:"MiniPersonnelList_list__PIhVC",item:"MiniPersonnelList_item__WJI8x"}},2746:function(e,n,i){e.exports.jsxRuntime=i(5893)},3305:function(e,n,i){"use strict";i.d(n,{R:function(){return u}});var t={};i.r(t),i.d(t,{MDXContext:function(){return l},MDXProvider:function(){return o},useMDXComponents:function(){return a},withMDXComponents:function(){return c}});var s=i(7294),r=i(2746);let l=s.createContext({});function c(e){return function(n){let i=a(n.components);return s.createElement(e,{...n,allComponents:i})}}function a(e){let n=s.useContext(l);return s.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let d={};function o({components:e,children:n,disableParentContext:i}){let t;return t=i?"function"==typeof e?e({}):e||d:a(e),s.createElement(l.Provider,{value:t},n)}function u({compiledSource:e,frontmatter:n,scope:i,components:l={},lazy:c}){let[a,d]=(0,s.useState)(!c||"undefined"==typeof window);(0,s.useEffect)(()=>{if(c){let e=window.requestIdleCallback(()=>{d(!0)});return()=>window.cancelIdleCallback(e)}},[]);let u=(0,s.useMemo)(()=>{let s=Object.assign({opts:{...t,...r.jsxRuntime}},{frontmatter:n},i),l=Object.keys(s),c=Object.values(s),a=Reflect.construct(Function,l.concat(`${e}`));return a.apply(a,c).default},[i,e]);if(!a)return s.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let h=s.createElement(o,{components:l},s.createElement(u,null));return c?s.createElement("div",null,h):h}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=2013)}),_N_E=e.O()}]);