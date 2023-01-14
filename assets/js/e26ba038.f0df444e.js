"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[8685],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>s});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),c=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=c(r),s=o,f=m["".concat(i,".").concat(s)]||m[s]||u[s]||a;return r?n.createElement(f,p(p({ref:e},d),{},{components:r})):n.createElement(f,p({ref:e},d))}));function s(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,p=new Array(a);p[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:o,p[1]=l;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26218:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1},p="Public Endpoints",l={unversionedId:"README",id:"README",title:"Public Endpoints",description:"These following API's are recommended for development purposes. For maximun control and reliability it's recommended to run your own Router node. This can be easily accomplished by following the intstruction given in this git repository.",source:"@site/docs/networks/README.md",sourceDirName:".",slug:"/",permalink:"/networks/",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/networks/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Supported Chains",permalink:"/networks/supported-chains"}},i={},c=[{value:"Official Public Endpoints",id:"official-public-endpoints",level:2}],d={toc:c};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"public-endpoints"},"Public Endpoints"),(0,o.kt)("p",null,"These following API's are recommended for development purposes. For maximun control and reliability it's recommended to run your own Router node. This can be easily accomplished by following the intstruction given in this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/router-protocol/router-chain"},"git repository"),"."),(0,o.kt)("h2",{id:"official-public-endpoints"},"Official Public Endpoints"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Network"),(0,o.kt)("th",{parentName:"tr",align:null},"Devnet"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Chain ID")),(0,o.kt)("td",{parentName:"tr",align:null},"router-1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"gRPC endpoint")),(0,o.kt)("td",{parentName:"tr",align:null},"devnet.grpc.routerprotocol.com:443")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"gRPC-gateway")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://devnet.grpc.routerprotocol.com"},"https://devnet.grpc.routerprotocol.com"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"TM endpoint")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://devnet.tm.routerprotocol.com"},"https://devnet.tm.routerprotocol.com"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"LCD endpoint")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://devnet.lcd.routerprotocol.com"},"https://devnet.lcd.routerprotocol.com"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Faucet UI")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://devnet-faucet.routerprotocol.com"},"https://devnet-faucet.routerprotocol.com"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Faucet endpoint")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://devnet-faucet-api.routerprotocol.com"},"https://devnet-faucet-api.routerprotocol.com"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Explorer UI")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://devnet-explorer.routerprotocol.com"},"https://devnet-explorer.routerprotocol.com"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Explorer endpoint")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://devnet-explorer-api.routerprotocol.com"},"https://devnet-explorer-api.routerprotocol.com"))))))}u.isMDXComponent=!0}}]);