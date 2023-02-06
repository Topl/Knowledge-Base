"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[867],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9565:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"DAML Smart Contracts",slug:"daml",excerpt:"Interacting with the Topl blockchain using DAML smart contracts",hidden:!1,createdAt:"2022-09-20T12:25:10.499Z",updatedAt:"2022-09-20T14:16:02.510Z"},i=void 0,l={unversionedId:"v1.10.2/Getting Started/daml",id:"v1.10.2/Getting Started/daml",title:"DAML Smart Contracts",description:"[block:api-header]",source:"@site/docs/v1.10.2/Getting Started/daml.md",sourceDirName:"v1.10.2/Getting Started",slug:"/v1.10.2/Getting Started/daml",permalink:"/docs/docs/v1.10.2/Getting Started/daml",draft:!1,editUrl:"https://github.com/Topl/Developer-Portal/docs/v1.10.2/Getting Started/daml.md",tags:[],version:"current",frontMatter:{title:"DAML Smart Contracts",slug:"daml",excerpt:"Interacting with the Topl blockchain using DAML smart contracts",hidden:!1,createdAt:"2022-09-20T12:25:10.499Z",updatedAt:"2022-09-20T14:16:02.510Z"},sidebar:"tutorialSidebar",previous:{title:"Brambl FAQs and Future Developments",permalink:"/docs/docs/v1.10.2/Getting Started/brambl-faqs-and-more-information"},next:{title:"Introduction",permalink:"/docs/docs/v1.10.2/Getting Started/introduction-2"}},c={},s=[{value:"Setting up DAML",id:"setting-up-daml",level:3},{value:"Setting up a Participant Node",id:"setting-up-a-participant-node",level:3},{value:"Deploying a smart contract",id:"deploying-a-smart-contract",level:3}],p={toc:s};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[block:api-header]",'\n{\n"title": "Smart Contracts on the Topl Blockchain"\n}\n',"[/block]","\nTopl has integrated the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.daml.com/"},"Digital Asset modeling Language (DAML)")," as its first smart contract platform for creating and using native assets on the blockchain. As a public and permissionless blockchain, we are utilized the open-source implementation of DAML to bring a secure way to create and deploy off-chain smart contracts that still maintain the same level of cryptographic proofs and asset management that you would find in on-chain smart contracts like Solidity and Rust."),(0,r.kt)("p",null,"[block:api-header]",'\n{\n"title": "First Steps"\n}\n',"[/block]"),(0,r.kt)("h3",{id:"setting-up-daml"},"Setting up DAML"),(0,r.kt)("p",null,"\u2003"," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.daml.com/getting-started/installation.html"},"Install"))," the DAML SDK and VSCode editor integration."),(0,r.kt)("p",null,"After successfully installing the DAML SDK, the Participant Node built for facilitating transactions needs to be installed to interact with the Topl Blockchain nodes."),(0,r.kt)("h3",{id:"setting-up-a-participant-node"},"Setting up a Participant Node"),(0,r.kt)("p",null,"\u2003"," The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/Topl/daml-bifrost-module"},"Daml Bifrost Module"))," installs a Bifrost Participant Node and example deployable smart contract."),(0,r.kt)("p",null,"After installation, the participant node and example smart contract need to be compiled in order to run an instance of the off-chain contract."),(0,r.kt)("h3",{id:"deploying-a-smart-contract"},"Deploying a smart contract"),(0,r.kt)("p",null,"\u2003"," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/Topl/daml-bifrost-module#2-compile"},"Deploy"))," by compiling and starting the participant node."),(0,r.kt)("p",null,"Compiling and starting the DAML sandbox will deploy the smart contract to the participant node and allow users to interact with the smart contract. Using the DAML Navigator tool provides an easy-to-use interface for interacting with deployed contracts."))}d.isMDXComponent=!0}}]);