"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Introduction",slug:"introduction-2",hidden:!1,createdAt:"2021-03-30T14:36:47.065Z",updatedAt:"2022-09-20T14:18:07.496Z"},i="What you need to bring",s={unversionedId:"Developer/Getting Started/introduction",id:"Developer/Getting Started/introduction",title:"Introduction",description:"To get the most out of the Topl Developer Portal, you should have programming experience and a basic understanding of blockchain concepts of Topl such as UTxO, transactions, addresses, key derivation, and networking.",source:"@site/docs/Developer/Getting Started/introduction.md",sourceDirName:"Developer/Getting Started",slug:"/Developer/Getting Started/introduction-2",permalink:"/docs/Developer/Getting Started/introduction-2",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/docs/Developer/Getting Started/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"introduction-2",hidden:!1,createdAt:"2021-03-30T14:36:47.065Z",updatedAt:"2022-09-20T14:18:07.496Z"},sidebar:"developerSidebar",previous:{title:"DAML Smart Contracts",permalink:"/docs/Developer/Getting Started/daml"},next:{title:"Docker",permalink:"/docs/Developer/Getting Started/sdks-and-api-libraries/docker"}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-you-need-to-bring"},"What you need to bring"),(0,o.kt)("p",null,"To get the most out of the Topl Developer Portal, you should have programming experience and a basic understanding of blockchain concepts of Topl such as UTxO, transactions, addresses, key derivation, and networking."),(0,o.kt)("p",null,"If you are unfamiliar with these terms, start with technical concepts, and you can complete the getting started course afterward. "),(0,o.kt)("h1",{id:"topl-is-different"},"Topl is different"),(0,o.kt)("p",null,"If you have experience with other blockchain platforms and want to start building on Topl, it is vital to know its differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It makes sense to get your head around the concept of an UTxO"),(0,o.kt)("li",{parentName:"ul"},"Assets on Topl are not built with smart contracts. Instead, assets are native and live on the ledger. The protocol treats them as first-class citizens, similar to our cryptocurrency <<glossary:Poly>>s. It is quite different from our peers that don\u2019t have native assets and need to use a smart contract to send assets.")),(0,o.kt)("p",null,"#What you can do on Topl today\nYou can mint, send, and receive native assets, in addition to polys."),(0,o.kt)("p",null,"#Why build on Topl?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Topl offers a better infrastructure to build products because it is faster, more secure, and cost-effective."),(0,o.kt)("li",{parentName:"ul"},"Topl offers accurate cost predictability when it comes to transactions. There are no auctions for transaction fees."),(0,o.kt)("li",{parentName:"ul"},"Topl has an energetic community. If you stick to specific standards, we are keen to try out and engage with new products. Participating now makes you a first mover."),(0,o.kt)("li",{parentName:"ul"},"Topl is a proof-of-stake blockchain. By design, it consumes much less energy and computational power."),(0,o.kt)("li",{parentName:"ul"},"Topl is built with the rigor of high-assurance formal development methods. The consensus mechanism Ouroboros (currently under development) was delivered with several peer-reviewed papers presented in top-tier conferences and publications in cybersecurity and cryptography. If you build on Topl, you build on this foundation.")),(0,o.kt)("p",null,"#What you can build on Topl today"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can integrate Topl into existing websites and services."),(0,o.kt)("li",{parentName:"ul"},"You can issue native assets and mint unique assets to be used as NFTs."),(0,o.kt)("li",{parentName:"ul"},"You can add metadata to transactions to give transactions a story, a background or even an identity."),(0,o.kt)("li",{parentName:"ul"},"You can prove the existence of a file, text or any other data at a specific point in time with asset metadata. You can even use asset metadata to validate and verify external physical products and genuine articles.")),(0,o.kt)("h1",{id:"where-to-start"},"Where to Start"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Begin by deploying your first ",(0,o.kt)("a",{parentName:"li",href:"doc:daml"},"DAML")," smart contract and interacting with native assets directly on the chain!")))}d.isMDXComponent=!0}}]);