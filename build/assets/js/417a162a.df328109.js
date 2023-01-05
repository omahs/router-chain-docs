"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[6825,1752,2154,2871,5281,1544,2738,2861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,y=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43362:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),i=r(32282);r(39960);const a={title:"Router Public APIs",sidebar_position:1},c="Router Public APIs",l={unversionedId:"README",id:"README",title:"Router Public APIs",description:"There are currently 3 public APIs provided by Router: LCD, RPC and the historical data API.",source:"@site/docs/apis/README.mdx",sourceDirName:".",slug:"/",permalink:"/apis/",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/apis/README.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Router Public APIs",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Interact with Router CLI",permalink:"/apis/interact-cli"}},s={},u=[],f=(p="Tscodegen",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const d={toc:u};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"router-public-apis"},"Router Public APIs"),(0,o.kt)("p",null,"There are currently 3 public APIs provided by Router: LCD, RPC and the historical data API.  "),(0,o.kt)(i._,{title:"APIs",id:"apis",mdxType:"Section"},(0,o.kt)(i.w,{title:"RPC endpoints",description:"Router RPC endpoints",to:"/api/?v=RPC",icon:(0,o.kt)(f,{mdxType:"Tscodegen"}),svgFile:"/icons/api.svg",mdxType:"Card"}),(0,o.kt)(i.w,{title:"gRPC",description:"Router high performance, universal RPC framework",to:"/apis/grpc",icon:(0,o.kt)(f,{mdxType:"Tscodegen"}),svgFile:"/icons/api.svg",mdxType:"Card"}),(0,o.kt)(i.w,{title:"LCD",description:"State queries, legacy transactions endpoints",to:"/api/?v=LCD",icon:(0,o.kt)(f,{mdxType:"Tscodegen"}),svgFile:"/icons/api.svg",mdxType:"Card"}),(0,o.kt)(i.w,{title:"Historical Data",description:"Historical data API",to:"/api/?v=DATA",icon:(0,o.kt)(f,{mdxType:"Tscodegen"}),svgFile:"/icons/api.svg",mdxType:"Card"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please note that for maximun reliability and speed, LCD or RPC can be hosted by anyone by simple running a node and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/core/grpc_rest.html"},"configuring the API service"),".")))}y.isMDXComponent=!0},32282:(e,t,r)=>{r.d(t,{_:()=>c,w:()=>l});var n=r(67294),o=r(9566),i=r(39960),a=r(86010);function c(e){let{id:t,title:r,children:i,description:c,className:l,hasSubSections:s=!1,HeadingTag:u="h3"}=e;return n.createElement("div",{className:(0,a.Z)("homepage-section",s&&"has-sub-sections",l)},r&&n.createElement(u,{id:t??(0,o.o)(r)},r),c&&n.createElement("p",{className:"section-description"},c),n.createElement("div",{className:"section-content"},i))}function l(e){let{id:t,icon:r,svgFile:a,title:c,description:l,to:s}=e;return n.createElement(i.Z,{to:s,className:"homepage-card"},a?n.createElement("div",{className:"icon"},n.createElement("img",{src:a})):r&&n.createElement("div",{className:"icon"},r),n.createElement("div",{className:"card-content"},n.createElement("div",{className:"title",id:t&&(0,o.o)(c)},c),n.createElement("div",{className:"description"},l)))}},9566:(e,t,r)=>{r.d(t,{o:()=>s});var n=r(70655);function o(e){return e.toLowerCase()}var i=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],a=/[^A-Z0-9]+/gi;function c(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce((function(e,t){return e.replace(t,r)}),e)}function l(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var r=t.splitRegexp,n=void 0===r?i:r,l=t.stripRegexp,s=void 0===l?a:l,u=t.transform,f=void 0===u?o:u,p=t.delimiter,d=void 0===p?" ":p,y=c(c(e,n,"$1\0$2"),s,"\0"),m=0,v=y.length;"\0"===y.charAt(m);)m++;for(;"\0"===y.charAt(v-1);)v--;return y.slice(m,v).split("\0").map(f).join(d)}(e,(0,n.__assign)({delimiter:"."},t))}function s(e,t){return void 0===t&&(t={}),l(e,(0,n.__assign)({delimiter:"-"},t))}},70655:(e,t,r)=>{r.r(t),r.d(t,{__assign:()=>i,__asyncDelegator:()=>_,__asyncGenerator:()=>w,__asyncValues:()=>P,__await:()=>g,__awaiter:()=>u,__classPrivateFieldGet:()=>T,__classPrivateFieldIn:()=>R,__classPrivateFieldSet:()=>k,__createBinding:()=>p,__decorate:()=>c,__exportStar:()=>d,__extends:()=>o,__generator:()=>f,__importDefault:()=>E,__importStar:()=>x,__makeTemplateObject:()=>O,__metadata:()=>s,__param:()=>l,__read:()=>m,__rest:()=>a,__spread:()=>v,__spreadArray:()=>h,__spreadArrays:()=>b,__values:()=>y});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function c(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function l(e,t){return function(r,n){t(r,n,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(t){i(t)}}function c(e){try{l(n.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}l((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var p=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function d(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||p(t,e,r)}function y(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(c){o={error:c}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function b(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)n[o]=i[a];return n}function h(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function w(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||c(e,t)}))})}function c(e,t){try{(r=o[e](t)).value instanceof g?Promise.resolve(r.value.v).then(l,s):u(i[0][2],r)}catch(n){u(i[0][3],n)}var r}function l(e){c("next",e)}function s(e){c("throw",e)}function u(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function _(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:g(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function P(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=y(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var j=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&p(t,e,r);return j(t,e),t}function E(e){return e&&e.__esModule?e:{default:e}}function T(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function k(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function R(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}}}]);