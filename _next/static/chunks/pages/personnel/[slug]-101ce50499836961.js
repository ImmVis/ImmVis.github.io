(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{1915:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/personnel/[slug]",function(){return t(3715)}])},7212:function(e,i,t){"use strict";function n(e){return{}}t.d(i,{X:function(){return n}}),t(5893),t(1864)},3715:function(e,i,t){"use strict";t.r(i),t.d(i,{__N_SSG:function(){return j},default:function(){return p}});var n=t(5893),s=t(9008),a=t.n(s),r=t(5675),c=t.n(r),l=t(3305),o=t(7212),u=t(7814),d=t(3024);function m(e){let{social:i}=e,t={facebook:d.pZl,github:d.pUg,gitlab:d.HKr,git:d.qe4,instagram:d.Xg5,linkedin:d.D9H,reddit:d.zsw,snapchat:d.CIg,steam:d.M6M,trello:d.lQH,tumblr:d.mF,twitter:d.sd1,youtube:d.NY9};if(!i)return(0,n.jsx)(n.Fragment,{});{let e=Object.keys(i);return(0,n.jsx)("div",{className:"flex flex-wrap gap-3",children:e.map(e=>i[e]&&(0,n.jsx)("a",{href:i[e],className:"text-zinc-500",target:"_blank",children:(0,n.jsx)(u.G,{icon:t[e],size:"2x"})},e))})}}var h=t(9461),x=t(1212),j=!0;function p(e){let{personnel:i,projects:t,publications:s}=e,{data:r,content:u,mdxPath:d}=i,{email:j,phone:p,address:f,orcid:g}=r.contact_info||{},b=r.personal_webpage,N=t.filter(e=>e.data.people.includes(r.id)),_=s.filter(e=>e.data.liu_authors.includes(r.id));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"".concat(r.name," - ImmVis")})}),(0,n.jsxs)("main",{className:"personnel-single",children:[(0,n.jsxs)("div",{className:"personnel-single-profile",children:[(0,n.jsx)("div",{className:"left",children:(0,n.jsx)(c(),{width:512,height:512,quality:100,alt:r.image,src:r.image})}),(0,n.jsxs)("div",{className:"right",children:[(0,n.jsx)("p",{role:"position",children:r.position.join(", ")}),(0,n.jsx)("p",{role:"name",children:r.name}),(0,n.jsx)("p",{children:"Id ad eiusmod qui non deserunt aliqua et ipsum voluptate reprehenderit dolor enim excepteur."}),(0,n.jsx)("div",{className:"flex flex-row items-center mb-3",children:(0,n.jsx)("span",{className:"text-lg font-bold mr-4",children:"Contact"})}),j&&(0,n.jsxs)("p",{className:"my-1",children:["Email: ",(0,n.jsx)("a",{href:"mailto:".concat(j),children:j})]}),p&&(0,n.jsxs)("p",{className:"my-1",children:["Phone: ",(0,n.jsx)("a",{href:"tel:".concat(p),children:p})]}),f&&(0,n.jsxs)("p",{className:"my-1",children:["Address: ",f]}),g&&(0,n.jsxs)("p",{className:"my-1",children:["Orcid: ",(0,n.jsx)("a",{href:"https://orcid.org/".concat(g),children:g})]}),b&&(0,n.jsxs)("p",{className:"my-1",children:["Webpage: ",(0,n.jsx)("a",{href:r.personal_webpage,children:b})]}),(0,n.jsx)("div",{className:"mt-8",children:(0,n.jsx)(m,{social:r.social})})]})]}),(0,n.jsxs)("div",{className:"personnel-single-markdown mdx-content",children:[(0,n.jsx)(l.R,{...u,components:(0,o.X)(d)}),N.length>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:"Projects"}),(0,n.jsx)(h.ProjectList,{projects:N})]}),_.length>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:"Publications"}),(0,n.jsx)(x.PublicationList,{publications:_})]})]})]})]})}},9461:function(e,i,t){"use strict";t.r(i),t.d(i,{ProjectItem:function(){return h},ProjectList:function(){return m},__N_SSG:function(){return u},default:function(){return d}});var n=t(5893),s=t(9008),a=t.n(s),r=t(1664),c=t.n(r),l=t(5675),o=t.n(l),u=!0;function d(e){let{projects:i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"Projects - ImmVis"})}),(0,n.jsxs)("main",{className:"project-page",children:[(0,n.jsx)("h1",{children:"Projects"}),(0,n.jsx)("p",{children:"Nostrud nisi consequat elit ex laborum culpa ipsum. Est sit amet voluptate et aute amet consectetur nulla occaecat do reprehenderit et consequat. Velit nisi id fugiat veniam exercitation fugiat est mollit sunt cillum eu. Consectetur pariatur pariatur fugiat laborum id magna sit laborum. Elit aute ullamco commodo nisi veniam laborum quis veniam ex mollit duis qui culpa. Sit minim ut minim ut commodo adipisicing fugiat cupidatat commodo eu adipisicing ad elit. Ex occaecat sunt elit id do occaecat excepteur nisi."}),(0,n.jsx)(m,{projects:i})]})]})}function m(e){let{projects:i}=e;return(0,n.jsx)("div",{className:"project-list",children:i.map(e=>(0,n.jsx)(h,{post:e},e.slug))})}function h(e){let{post:i}=e,{slug:t,data:s}=i;return(0,n.jsx)(c(),{href:"/projects/".concat(i.slug),className:"flex",children:(0,n.jsxs)("div",{className:"project-box",children:[(0,n.jsx)(o(),{width:512,height:256,alt:s.image,src:s.image}),(0,n.jsx)("p",{role:"name",children:s.name}),(0,n.jsx)("p",{role:"brief",children:"Something here?"}),(0,n.jsx)("p",{role:"description",children:s.description}),(0,n.jsx)("p",{role:"read-more",children:"Read more"})]})})}},1212:function(e,i,t){"use strict";t.r(i),t.d(i,{PublicationItem:function(){return h},PublicationList:function(){return m},__N_SSG:function(){return u},default:function(){return d}});var n=t(5893),s=t(9008),a=t.n(s),r=t(5675),c=t.n(r),l=t(7814),o=t(9417),u=!0;function d(e){let{publications:i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"Publications - ImmVis"})}),(0,n.jsxs)("main",{className:"publication-page",children:[(0,n.jsx)("h1",{children:"Publications"}),(0,n.jsx)("p",{children:"Nostrud nisi consequat elit ex laborum culpa ipsum. Est sit amet voluptate et aute amet consectetur nulla occaecat do reprehenderit et consequat. Velit nisi id fugiat veniam exercitation fugiat est mollit sunt cillum eu. Consectetur pariatur pariatur fugiat laborum id magna sit laborum. Elit aute ullamco commodo nisi veniam laborum quis veniam ex mollit duis qui culpa. Sit minim ut minim ut commodo adipisicing fugiat cupidatat commodo eu adipisicing ad elit. Ex occaecat sunt elit id do occaecat excepteur nisi."}),(0,n.jsx)(m,{publications:i})]})]})}function m(e){let{publications:i}=e;return(0,n.jsx)("div",{className:"publication-list",children:i.map(e=>(0,n.jsx)(h,{post:e},e.slug))})}function h(e){let{post:i}=e,{slug:t,data:s}=i;return(0,n.jsxs)("div",{className:"publication-box",children:[(0,n.jsx)(c(),{width:512,height:512,alt:s.thumbnail,src:s.thumbnail}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{role:"title",children:s.title}),(0,n.jsx)("p",{children:(0,n.jsxs)("i",{children:[s.venue,", ",s.year]})}),(0,n.jsx)("p",{children:(0,n.jsxs)("a",{href:s.doi,children:["doi:",s.doi]})}),(0,n.jsxs)("div",{className:"publication-box-links",children:[(0,n.jsxs)("a",{href:s.pdf,target:"_blank",children:[(0,n.jsx)(l.G,{icon:o.N2j}),(0,n.jsx)("span",{children:"Paper (PDF)"})]}),(0,n.jsxs)("a",{href:s.bib,target:"_blank",children:[(0,n.jsx)(l.G,{icon:o.nA6}),(0,n.jsx)("span",{children:"BibTex"})]}),(0,n.jsxs)("a",{href:s.code,target:"_blank",children:[(0,n.jsx)(l.G,{icon:o.dT$}),(0,n.jsx)("span",{children:"Source"})]}),(0,n.jsxs)("a",{href:s.video,target:"_blank",children:[(0,n.jsx)(l.G,{icon:o.IyC}),(0,n.jsx)("span",{children:"Video"})]})]})]})]})}}},function(e){e.O(0,[976,948,481,774,888,179],function(){return e(e.s=1915)}),_N_E=e.O()}]);