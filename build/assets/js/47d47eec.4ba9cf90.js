"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[3434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||g[d]||s;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={title:"gRPC Go",sidebar_position:3},a=void 0,c={unversionedId:"grpc/interact-grpc-go",id:"grpc/interact-grpc-go",title:"gRPC Go",description:"Interacting with Go",source:"@site/docs/apis/grpc/interact-grpc-go.mdx",sourceDirName:"grpc",slug:"/grpc/interact-grpc-go",permalink:"/apis/grpc/interact-grpc-go",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/apis/grpc/interact-grpc-go.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"gRPC Go",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"gRPCurl",permalink:"/apis/grpc/interact-grpc-curl"},next:{title:"RPC Gateway",permalink:"/apis/rpc/"}},i={},l=[{value:"Interacting with Go",id:"interacting-with-go",level:3},{value:"Install Cosmos SDK",id:"install-cosmos-sdk",level:4},{value:"Query for historical state using Go",id:"query-for-historical-state-using-go",level:4}],p={toc:l};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"interacting-with-go"},"Interacting with Go"),(0,o.kt)("p",null,"The following snippet shows how to query the state using gRPC inside a Go program. The idea is to create a gRPC connection, and use the Protobuf-generated client code to query the gRPC server."),(0,o.kt)("h4",{id:"install-cosmos-sdk"},"Install Cosmos SDK"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/cosmos/cosmos-sdk@main\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n\n    "google.golang.org/grpc"\n\n    "github.com/cosmos/cosmos-sdk/codec"\n    sdk "github.com/cosmos/cosmos-sdk/types"\n    banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"\n)\n\nfunc queryState() error {\n    myAddress, err := sdk.AccAddressFromBech32("cosmos1...")\n    if err != nil {\n        return err\n    }\n\n    // Create a connection to the gRPC server.\n    grpcConn, err := grpc.Dial(\n        "127.0.0.1:9090", // your gRPC server address.\n        grpc.WithInsecure(), // The Cosmos SDK doesn\'t support any transport security mechanism. \n        // This instantiates a general gRPC codec which handles proto bytes. We pass in a nil interface registry\n        // if the request/response types contain interface instead of \'nil\' you should pass the application specific codec.\n        grpc.WithDefaultCallOptions(grpc.ForceCodec(codec.NewProtoCodec(nil).GRPCCodec())),\n    )\n    if err != nil {\n        return err\n    }\n    defer grpcConn.Close()\n\n    // This creates a gRPC client to query the x/bank service.\n    bankClient := banktypes.NewQueryClient(grpcConn)\n    bankRes, err := bankClient.Balance(\n        context.Background(),\n        &banktypes.QueryBalanceRequest{Address: myAddress.String(), Denom: "atom"},\n    )\n    if err != nil {\n        return err\n    }\n\n    fmt.Println(bankRes.GetBalance()) // Prints the account balance\n\n    return nil\n}\n')),(0,o.kt)("p",null,"You can replace the query client (here we are using ",(0,o.kt)("inlineCode",{parentName:"p"},"x/bank"),"'s) with one generated from any other Protobuf service. The list of all available gRPC query endpoints is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/7786"},"coming soon"),"."),(0,o.kt)("h4",{id:"query-for-historical-state-using-go"},"Query for historical state using Go"),(0,o.kt)("p",null,"Querying for historical blocks is done by adding the block height metadata in the gRPC request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n\n    "google.golang.org/grpc"\n    "google.golang.org/grpc/metadata"\n\n    "github.com/cosmos/cosmos-sdk/codec"\n    sdk "github.com/cosmos/cosmos-sdk/types"\n    grpctypes "github.com/cosmos/cosmos-sdk/types/grpc"\n    banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"\n)\n\nfunc queryState() error {\n    // --snip--\n\n    var header metadata.MD\n    bankRes, err = bankClient.Balance(\n        metadata.AppendToOutgoingContext(context.Background(), grpctypes.GRPCBlockHeightHeader, "12"), // Add metadata to request\n        &banktypes.QueryBalanceRequest{Address: myAddress.String(), Denom: "atom"},\n        grpc.Header(&header), // Retrieve header from response\n    )\n    if err != nil {\n        return err\n    }\n    blockHeight := header.Get(grpctypes.GRPCBlockHeightHeader)\n\n    fmt.Println(blockHeight) // Prints the block height (12)\n\n    return nil\n}\n')))}g.isMDXComponent=!0}}]);