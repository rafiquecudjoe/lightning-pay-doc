"use strict";(self.webpackChunkapi_doc=self.webpackChunkapi_doc||[]).push([[782],{3709:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"webhook","title":"Handling Webhooks","description":"Webhooks allow your application to receive real-time notifications about events that occur in your account. This guide explains how to set up and use webhooks.","source":"@site/docs/webhooks.md","sourceDirName":".","slug":"/webhook","permalink":"/docs/webhook","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"webhook","title":"Handling Webhooks","sidebar_label":"Webhooks"},"sidebar":"docs","previous":{"title":"Errors","permalink":"/docs/errors"},"next":{"title":"IP Whitelisting","permalink":"/docs/ip-whitelisting"}}');var i=t(4848),r=t(8453);const s={id:"webhook",title:"Handling Webhooks",sidebar_label:"Webhooks"},c="Webhook Reference",a={},d=[{value:"Overview",id:"overview",level:2},{value:"Setting Up Webhooks",id:"setting-up-webhooks",level:2},{value:"Webhook Events",id:"webhook-events",level:2},{value:"Webhook Payload",id:"webhook-payload",level:2},{value:"Security",id:"security",level:2},{value:"Retry Policy",id:"retry-policy",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"webhook-reference",children:"Webhook Reference"})}),"\n",(0,i.jsx)(n.p,{children:"Webhooks allow your application to receive real-time notifications about events that occur in your account. This guide explains how to set up and use webhooks."}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Webhooks are HTTP callbacks that are triggered when specific events occur in our system. When an event happens, we'll send an HTTP POST request to the URL you've configured to receive webhooks."}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-webhooks",children:"Setting Up Webhooks"}),"\n",(0,i.jsx)(n.p,{children:"To set up a webhook:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Go to your account settings"}),"\n",(0,i.jsx)(n.li,{children:"Navigate to the Webhooks section"}),"\n",(0,i.jsx)(n.li,{children:"Enter the URL where you want to receive webhook notifications"}),"\n",(0,i.jsx)(n.li,{children:"Select the events you want to subscribe to"}),"\n",(0,i.jsx)(n.li,{children:"Save your settings"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"webhook-events",children:"Webhook Events"}),"\n",(0,i.jsx)(n.p,{children:"Our API can send notifications for the following event types:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Event Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"transaction.created"})}),(0,i.jsx)(n.td,{children:"Triggered when a new transaction is created"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"transaction.updated"})}),(0,i.jsx)(n.td,{children:"Triggered when a transaction's status changes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"invoice.paid"})}),(0,i.jsx)(n.td,{children:"Triggered when an invoice is marked as paid"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"account.updated"})}),(0,i.jsx)(n.td,{children:"Triggered when account information is updated"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"webhook-payload",children:"Webhook Payload"}),"\n",(0,i.jsx)(n.p,{children:"Each webhook request contains a JSON payload with information about the event that occurred:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "evt_123456789",\n  "type": "transaction.created",\n  "created": "2025-04-16T12:00:00Z",\n  "data": {\n    "id": "txn_987654321",\n    "amount": 1000,\n    "currency": "XAF",\n    "status": "completed"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"security",children:"Security"}),"\n",(0,i.jsx)(n.p,{children:"For security purposes, all webhook requests are signed with a signature that you can use to verify that the request came from our servers."}),"\n",(0,i.jsx)(n.h2,{id:"retry-policy",children:"Retry Policy"}),"\n",(0,i.jsx)(n.p,{children:"If your endpoint returns a non-2xx response code, we'll retry the webhook delivery using an exponential backoff strategy."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);