(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{2013:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[slug]",function(){return i(1191)}])},7173:function(n,e,i){"use strict";i.d(e,{Z:function(){return o}});var t=i(5893),s=i(5675),r=i.n(s),l=i(1664),c=i.n(l),a=i(6150),d=i.n(a);function o(n){let{personnel:e,liuidList:i}=n,s={};return i.forEach(n=>{let i=e.find(e=>e.data.id==n);i&&(s[n]=i)}),(0,t.jsx)("div",{className:d().list,children:i.map(n=>(0,t.jsx)("div",{className:d().item,children:s[n]?(0,t.jsx)(c(),{href:"/personnel/".concat(s[n].slug),title:s[n].data.name,children:(0,t.jsx)(r(),{width:"256",height:"256",alt:n,src:s[n].data.image})}):(0,t.jsx)("div",{title:n,children:(0,t.jsxs)("span",{children:[n[0],n[3]]})})},n))})}},1191:function(n,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return m},default:function(){return p}});var t=i(5893),s=i(9008),r=i.n(s),l=i(5675),c=i.n(l),a=i(3305),d=i(1212),o=i(7173),u=i(2577),h=i.n(u);function x(n){let{fundings:e,fundingIdList:i}=n,s={};return i.forEach(n=>{let i=e.find(e=>e.data.id==n);i&&(s[n]=i)}),(0,t.jsx)("div",{className:h().list,children:i.map(n=>(0,t.jsx)("div",{className:h().item,children:s[n]?(0,t.jsx)("a",{href:s[n].data.link,title:s[n].data.name,target:"_blank",children:(0,t.jsx)(c(),{width:"256",height:"256",alt:n,src:s[n].data.icon})}):(0,t.jsx)("div",{title:n,children:(0,t.jsx)("span",{children:n})})},n))})}var j=i(7814),f=i(9417),m=!0;function p(n){let{project:e,fundings:i,personnel:s,publications:l}=n,{data:u,content:h,mdxPath:m}=e,p=l.filter(n=>{var e;return null===(e=n.data.projects)||void 0===e?void 0:e.includes(u.id)});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r(),{children:(0,t.jsx)("title",{children:"".concat(u.name," - ImmVis")})}),(0,t.jsxs)("main",{className:"project-single",children:[(0,t.jsxs)("div",{className:"project-single-profile",children:[(0,t.jsx)("div",{className:"left",children:(0,t.jsx)(c(),{width:512,height:512,quality:100,alt:u.image,src:u.image})}),(0,t.jsxs)("div",{className:"right",children:[(0,t.jsx)("p",{role:"name",children:u.name}),(0,t.jsxs)("div",{className:"contributors",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Contributors"}),(0,t.jsx)(o.Z,{personnel:s,liuidList:u.people})]}),(0,t.jsx)("div",{children:u.funding.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{children:"Funding"}),(0,t.jsx)(x,{fundings:i,fundingIdList:u.funding})]})}),(0,t.jsx)("div",{children:u.homepage&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{children:"Homepage"}),(0,t.jsxs)("div",{className:"homepage",children:[(0,t.jsx)(j.G,{icon:f.nNP,fixedWidth:!0}),(0,t.jsx)("a",{href:u.homepage,children:u.homepage})]})]})})]})]})]}),(0,t.jsxs)("div",{className:"project-single-markdown mdx-content",children:[(0,t.jsx)(a.R,{...h}),p.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{children:"Publications"}),(0,t.jsx)(d.PublicationList,{publications:p})]})]})]})]})}},1212:function(n,e,i){"use strict";i.r(e),i.d(e,{PublicationItem:function(){return x},PublicationList:function(){return h},__N_SSG:function(){return o},default:function(){return u}});var t=i(5893),s=i(9008),r=i.n(s),l=i(5675),c=i.n(l),a=i(7814),d=i(9417),o=!0;function u(n){let{publications:e}=n;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r(),{children:(0,t.jsx)("title",{children:"Publications - ImmVis"})}),(0,t.jsxs)("main",{className:"publication-page",children:[(0,t.jsx)("h1",{children:"Publications"}),(0,t.jsx)("p",{children:"Here is a list of the academic publications that members of our group are involved in as co-authors."}),(0,t.jsx)("hr",{}),(0,t.jsx)(h,{publications:e})]})]})}function h(n){let{publications:e}=n;return(0,t.jsx)("div",{className:"publication-list",children:e.map(n=>(0,t.jsx)(x,{post:n},n.slug))})}function x(n){let{post:e}=n,{slug:i,data:s}=e;return(0,t.jsxs)("div",{className:"publication-box",children:[(0,t.jsx)(c(),{width:512,height:512,alt:s.thumbnail,src:s.thumbnail}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("p",{role:"title",children:s.title}),(0,t.jsx)("p",{children:s.authors}),(0,t.jsx)("p",{children:(0,t.jsxs)("i",{children:[s.venue,", ",s.year]})}),(0,t.jsx)("p",{children:s.doi&&(0,t.jsxs)("a",{href:s.doi,children:["doi:",s.doi]})}),(0,t.jsxs)("div",{className:"publication-box-links",children:[s.pdf&&(0,t.jsxs)("a",{href:s.pdf,target:"_blank",children:[(0,t.jsx)(a.G,{icon:d.N2j}),(0,t.jsx)("span",{children:"Paper (PDF)"})]}),s.bib&&(0,t.jsxs)("a",{href:s.bib,target:"_blank",children:[(0,t.jsx)(a.G,{icon:d.nA6}),(0,t.jsx)("span",{children:"BibTex"})]}),s.code&&(0,t.jsxs)("a",{href:s.code,target:"_blank",children:[(0,t.jsx)(a.G,{icon:d.dT$}),(0,t.jsx)("span",{children:"Source"})]}),s.video&&(0,t.jsxs)("a",{href:s.video,target:"_blank",children:[(0,t.jsx)(a.G,{icon:d.IyC}),(0,t.jsx)("span",{children:"Video"})]}),s.annotation&&(0,t.jsxs)("div",{children:[(0,t.jsx)(a.G,{icon:d.LEN}),(0,t.jsx)("span",{children:s.annotation})]})]})]})]})}},2577:function(n){n.exports={list:"MiniFundingList_list__dATdF",item:"MiniFundingList_item__DX495"}},6150:function(n){n.exports={list:"MiniPersonnelList_list__PIhVC",item:"MiniPersonnelList_item__WJI8x"}},2746:function(n,e,i){n.exports.jsxRuntime=i(5893)},3305:function(n,e,i){"use strict";i.d(e,{R:function(){return u}});var t={};i.r(t),i.d(t,{MDXContext:function(){return l},MDXProvider:function(){return o},useMDXComponents:function(){return a},withMDXComponents:function(){return c}});var s=i(7294),r=i(2746);let l=s.createContext({});function c(n){return function(e){let i=a(e.components);return s.createElement(n,{...e,allComponents:i})}}function a(n){let e=s.useContext(l);return s.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}let d={};function o({components:n,children:e,disableParentContext:i}){let t;return t=i?"function"==typeof n?n({}):n||d:a(n),s.createElement(l.Provider,{value:t},e)}function u({compiledSource:n,frontmatter:e,scope:i,components:l={},lazy:c}){let[a,d]=(0,s.useState)(!c||"undefined"==typeof window);(0,s.useEffect)(()=>{if(c){let n=window.requestIdleCallback(()=>{d(!0)});return()=>window.cancelIdleCallback(n)}},[]);let u=(0,s.useMemo)(()=>{let s=Object.assign({opts:{...t,...r.jsxRuntime}},{frontmatter:e},i),l=Object.keys(s),c=Object.values(s),a=Reflect.construct(Function,l.concat(`${n}`));return a.apply(a,c).default},[i,n]);if(!a)return s.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let h=s.createElement(o,{components:l},s.createElement(u,null));return c?s.createElement("div",null,h):h}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(n){var e=Date.now();return setTimeout(function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(n){clearTimeout(n)})}},function(n){n.O(0,[675,774,888,179],function(){return n(n.s=2013)}),_N_E=n.O()}]);