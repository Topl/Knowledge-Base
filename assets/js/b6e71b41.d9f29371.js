"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,k=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1939:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={id:"private-network",title:"Private Network",tags:["Install","Getting started","docker"]},i=void 0,l={unversionedId:"Validators/Networks/private-network",id:"Validators/Networks/private-network",title:"Private Network",description:"There is no specific requirement to run a private network, you just need to run a node or connect add another privately run node as a peer.",source:"@site/docs/Validators/Networks/private-network.md",sourceDirName:"Validators/Networks",slug:"/Validators/Networks/private-network",permalink:"/Validators/Networks/private-network",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Validators/Networks/private-network.md",tags:[{label:"Install",permalink:"/tags/install"},{label:"Getting started",permalink:"/tags/getting-started"},{label:"docker",permalink:"/tags/docker"}],version:"current",frontMatter:{id:"private-network",title:"Private Network",tags:["Install","Getting started","docker"]},sidebar:"validatorSidebar",previous:{title:"Run with Helm/Kubernetes",permalink:"/Validators/Installing Your Node/install-k8s"},next:{title:"Public Mainnet (Coming Soon!)",permalink:"/Validators/Networks/public-mainnet"}},p={},c=[{value:"gRPC Endpoint",id:"grpc-endpoint",level:2},{value:"P2P",id:"p2p",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There is no specific requirement to run a private network, you just need to run a node or connect add another privately run node as a peer."),(0,o.kt)("p",null,"If you are running the private network locally, you will interact with it at ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,o.kt)("h2",{id:"grpc-endpoint"},"gRPC Endpoint"),(0,o.kt)("p",null,"localhost:9084"),(0,o.kt)("h2",{id:"p2p"},"P2P"),(0,o.kt)("p",null,"localhost:9085"))}u.isMDXComponent=!0}}]);