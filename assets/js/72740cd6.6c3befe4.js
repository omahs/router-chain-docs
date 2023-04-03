"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[4855],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i="Usage",l={unversionedId:"router-robot/usage/README",id:"router-robot/usage/README",title:"Usage",description:"How to use Router Robot?",source:"@site/docs/infra/router-robot/usage/README.md",sourceDirName:"router-robot/usage",slug:"/router-robot/usage/",permalink:"/infra/router-robot/usage/",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/infra/router-robot/usage/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/infra/router-robot/"},next:{title:"Relayer",permalink:"/infra/category/relayer"}},s={},c=[{value:"Installing the Latest Release",id:"installing-the-latest-release",level:3},{value:"Generate Code",id:"generate-code",level:2},{value:"Testing",id:"testing",level:2},{value:"Steps to setup cross-chain testing:",id:"steps-to-setup-cross-chain-testing",level:3},{value:"Track a Transaction",id:"track-a-transaction",level:2},{value:"Logging and debugging",id:"logging-and-debugging",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"How to use Router Robot?"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To leverage the capabilities of the Router Robot framework, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"router-robot")," CLI."),(0,o.kt)("h3",{id:"installing-the-latest-release"},"Installing the Latest Release"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/router-protocol/router-robot@latest\n")),(0,o.kt)("h2",{id:"generate-code"},"Generate Code"),(0,o.kt)("p",null,"Generate a ",(0,o.kt)("a",{parentName:"p",href:"https://go.dev/"},"GoLang")," boilerplate code for cross-chain testing through Router Chain."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"router-robot codegen --project-name <project name>")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Directory structure"),"  ",(0,o.kt)("img",{parentName:"li",src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1fbc3473-afde-4c8a-ace3-7247cbfc4449/Screenshot_2023-02-17_at_1.05.01_AM.png",alt:"Here, `helloworld` is your project-name."}),"  Here, ",(0,o.kt)("inlineCode",{parentName:"li"},"helloworld")," is your project-name.\n")),(0,o.kt)("p",null,"Starting point of the project is ",(0,o.kt)("inlineCode",{parentName:"p"},"robot_suite_test.go")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"You can write test cases with the help of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onsi/ginkgo"},"Ginkgo framework"),"."),(0,o.kt)("p",null,"Ginkgo is a popular BDD-style testing framework for the Go programming language. Here are some common CLI commands that you can use to run tests with Ginkgo:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ginkgo"),": This command runs all the tests in the current directory and its subdirectories. By default, Ginkgo looks for test files with the suffix ",(0,o.kt)("inlineCode",{parentName:"p"},"_test.go")," and executes all the tests in those files.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ginkgo -r"),": This command recursively runs all the tests in the current directory and its subdirectories."),(0,o.kt)("p",{parentName:"li"},"Please refer to Ginkgo ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/onsi/ginkgo/ginkgo"},"docs")," for more commands."))),(0,o.kt)("h3",{id:"steps-to-setup-cross-chain-testing"},"Steps to setup cross-chain testing:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate boilerplate code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/router-protocol/router-robot@latest\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add private keys in ",(0,o.kt)("inlineCode",{parentName:"li"},"networkconfig.json")," (This file is added in .gitignore)"),(0,o.kt)("li",{parentName:"ol"},"Add artifacts for Router chain and other third party chains.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"For Router chain: Get the artifacts (.wasm files) generated during contract deployment on Router chain."),(0,o.kt)("li",{parentName:"ol"},"For EVM chain: Generate artifacts.\nCopy these artifacts into ",(0,o.kt)("inlineCode",{parentName:"li"},"contract-wrapper")," folder\n"))),(0,o.kt)("li",{parentName:"ol"},"Write your test cases with Ginkgo testing framework and test.\nAdd test cases in ",(0,o.kt)("inlineCode",{parentName:"li"},"robot_test.go")," or create new files suffixed with ",(0,o.kt)("inlineCode",{parentName:"li"},"_test.go"),"."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"go build")," command to build the project. Then use Ginkgo commands to run test cases."),(0,o.kt)("li",{parentName:"ol"},"To track any inbound or outbound request you can use:\n",(0,o.kt)("inlineCode",{parentName:"li"},"TrackInboundRequest()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"TrackOutboundRequest()")," methods provided via Robot instance.")),(0,o.kt)("aside",null,"\u2b50 Make sure you have deployed your contracts on required chains. You can use these deployed contracts\u2019 addresses during testing."),(0,o.kt)("h2",{id:"track-a-transaction"},"Track a Transaction"),(0,o.kt)("p",null,"Provide a transaction hash to track its status from source chain."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"router-robot track --chainId <source chain id> --chainType <source chain type> --txhash <source transaction hash>")),(0,o.kt)("p",null,"Here, "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"chainId"),": source chain ID"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"chainType"),": source chain type"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"txHash"),": source tx hash"),(0,o.kt)("h2",{id:"logging-and-debugging"},"Logging and debugging"),(0,o.kt)("p",null,"For adding logs ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/sirupsen/logrus#section-readme"},"logrus")," library is configured inside router-robot itself."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," via Robot instance, initialized in ",(0,o.kt)("inlineCode",{parentName:"p"},"robot_suite_test.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"Logger.Info(\u201dThis is an information\u201d)\n\nLogger.Warn(\u201dThis is a warning\u201d)\n\nLogger.Fatal(\u201dFatal error occured\u201d)\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Sample repository created with router-robot tool can be found here."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/router-protocol/Sample-cross-chain-tests"},"https://github.com/router-protocol/Sample-cross-chain-tests")))}p.isMDXComponent=!0}}]);