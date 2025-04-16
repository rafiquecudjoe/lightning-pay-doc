"use strict";(self.webpackChunkapi_doc=self.webpackChunkapi_doc||[]).push([[453],{4377:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"rate-limiting","title":"Rate Limiting","description":"To prevent abuse and protect our services and customers, we have placed a maximum rate limit on requests. When the rate limit has been exceeded, a 429 Error will be thrown.","source":"@site/docs/rate-limiting.md","sourceDirName":".","slug":"/rate-limiting","permalink":"/docs/rate-limiting","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"rate-limiting","title":"Rate Limiting","sidebar_label":"Rate Limiting"},"sidebar":"docs","previous":{"title":"IP Whitelisting","permalink":"/docs/ip-whitelisting"},"next":{"title":"Pagination","permalink":"/docs/pagination"}}');var r=t(4848),s=t(8453);const a={id:"rate-limiting",title:"Rate Limiting",sidebar_label:"Rate Limiting"},l="Rate Limiting",o={},c=[{value:"Understanding Rate Limits",id:"understanding-rate-limits",level:2},{value:"Best Practices",id:"best-practices",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"rate-limiting",children:"Rate Limiting"})}),"\n",(0,r.jsx)(i.p,{children:"To prevent abuse and protect our services and customers, we have placed a maximum rate limit on requests. When the rate limit has been exceeded, a 429 Error will be thrown."}),"\n",(0,r.jsx)(i.h2,{id:"understanding-rate-limits",children:"Understanding Rate Limits"}),"\n",(0,r.jsx)(i.p,{children:"API requests are rate-limited to ensure fair usage. The current rate limit is set to 100 requests per 2 minutes."}),"\n",(0,r.jsx)(i.p,{children:"You can check the response headers for rate limit information:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"X-RateLimit-Limit"}),": The maximum number of requests you're permitted to make per hour"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"X-RateLimit-Remaining"}),": The number of requests remaining in the current rate limit window"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"X-RateLimit-Reset"}),": The time at which the current rate limit window resets in UTC epoch seconds"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Implement exponential backoff or request throttling in your applications"}),"\n",(0,r.jsx)(i.li,{children:"Cache responses when possible to reduce the number of API calls"}),"\n",(0,r.jsx)(i.li,{children:"Monitor your API usage regularly to avoid hitting rate limits"}),"\n",(0,r.jsx)(i.li,{children:"Handle 429 errors gracefully with appropriate retry mechanisms"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"This will be updated and reflected here when it changes."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>l});var n=t(6540);const r={},s=n.createContext(r);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);