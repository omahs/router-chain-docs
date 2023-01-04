"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[4892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},s="Understanding CrossTalk",i={unversionedId:"understanding-crosstalk/README",id:"understanding-crosstalk/README",title:"Understanding CrossTalk",description:"Router\u2019s Gateway contracts have a function named requestToDest that facilitates the transmission of a cross-chain message. Whenever users want to execute a cross-chain request, they can call this function by passing the payload to be transferred from the source to the destination chain along with the required parameters.",source:"@site/docs/crosstalk/understanding-crosstalk/README.md",sourceDirName:"understanding-crosstalk",slug:"/understanding-crosstalk/",permalink:"/crosstalk/understanding-crosstalk/",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/crosstalk/understanding-crosstalk/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/crosstalk/overview"},next:{title:"requestToDest",permalink:"/crosstalk/understanding-crosstalk/requestToDest"}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"understanding-crosstalk"},"Understanding CrossTalk"),(0,o.kt)("p",null,"Router\u2019s Gateway contracts have a function named ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"requestToDest"))," that facilitates the transmission of a cross-chain message. Whenever users want to execute a cross-chain request, they can call this function by passing the payload to be transferred from the source to the destination chain along with the required parameters."),(0,o.kt)("p",null,"In addition to calling the aforementioned function, CrossTalk users will also have to implement two functions on their contracts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To handle a cross-chain request on the destination chain, users are required to include a ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"handleRequestFromSource"))," function on their destination chain contracts."),(0,o.kt)("li",{parentName:"ol"},"To process the acknowledgment of their requests on the source chain, user will have to implement a ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"handleCrossTalkAck"))," function on their source chain contracts.")))}d.isMDXComponent=!0}}]);