"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[21],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(y,i(i({ref:r},l),{},{components:t})):n.createElement(y,i({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41452:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={title:"Transfer of LP Tokens with Arbitrary Instruction",sidebar_position:7},i=void 0,s={unversionedId:"understanding-voyager/transfer-lp-token-arbitrary-instruction",id:"understanding-voyager/transfer-lp-token-arbitrary-instruction",title:"Transfer of LP Tokens with Arbitrary Instruction",description:"The flow is just the same as that of the LP token transfer explained above. The only difference here is the arbitrary data that you need to pass for which the details can be found here.",source:"@site/docs/voyager/understanding-voyager/transfer-lp-token-arbitrary-instruction.md",sourceDirName:"understanding-voyager",slug:"/understanding-voyager/transfer-lp-token-arbitrary-instruction",permalink:"/voyager/understanding-voyager/transfer-lp-token-arbitrary-instruction",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/voyager/understanding-voyager/transfer-lp-token-arbitrary-instruction.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Transfer of LP Tokens with Arbitrary Instruction",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Transfer of LP Tokens",permalink:"/voyager/understanding-voyager/transfer-lp-token"},next:{title:"List of Reserve and LP Tokens",permalink:"/voyager/understanding-voyager/list-reserve-lp-tokens"}},c={},u=[],l={toc:u};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function depositLPTokenAndExecute(\n    bytes memory swapData,\n    bytes memory executeData,\n    bytes memory arbitraryData\n) external\n")),(0,a.kt)("p",null,"The flow is just the same as that of the LP token transfer explained above. The only difference here is the arbitrary data that you need to pass for which the details can be found ",(0,a.kt)("a",{parentName:"p",href:"./transfer-reserve-token-arbitrary-instruction#arbitrary-data"},"here"),"."))}p.isMDXComponent=!0}}]);