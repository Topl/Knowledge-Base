"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={id:"public-testnet",title:"Public Testnet",slug:"public-testnet"},a=void 0,l={unversionedId:"Validators/Networks/public-testnet",id:"Validators/Networks/public-testnet",title:"Public Testnet",description:"Topl maintains a public testnet to enable developers and community memebers to become familiar with the Thunder protocol in a cost free environment. After setting up your node, simply connect through the gRPC or P2P endpoints listed below.",source:"@site/docs/Validators/02-Networks/02-public-testnet.md",sourceDirName:"Validators/02-Networks",slug:"/Validators/Networks/public-testnet",permalink:"/Validators/Networks/public-testnet",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Validators/02-Networks/02-public-testnet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"public-testnet",title:"Public Testnet",slug:"public-testnet"},sidebar:"validatorSidebar",previous:{title:"Private Network",permalink:"/Validators/Networks/private-network"},next:{title:"Public Mainnet (beta)",permalink:"/Validators/Networks/public-mainnet"}},p={},s=[{value:"gRPC Endpoint",id:"grpc-endpoint",level:2},{value:"P2P",id:"p2p",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Topl maintains a public testnet to enable developers and community memebers to become familiar with the Thunder protocol in a cost free environment. After setting up your node, simply connect through the gRPC or P2P endpoints listed below."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The Thunder testnet is periodically refreshed so any data or transactions stored via the testnet will not be immutable or permanent.")),(0,o.kt)("h2",{id:"grpc-endpoint"},"gRPC Endpoint"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://testnet.topl.co:443"},"https://testnet.topl.co:443")," (secure connection)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://testnet.topl.co:9084"},"https://testnet.topl.co:9084")," (unsecured connection)"),(0,o.kt)("h2",{id:"p2p"},"P2P"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://testnet.topl.co:9085"},"https://testnet.topl.co:9085")," (unsecured connection)"))}u.isMDXComponent=!0}}]);