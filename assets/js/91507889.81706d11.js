"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(n),d=i,h=g["".concat(l,".").concat(d)]||g[d]||u[d]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"Signing",slug:"signing",hidden:!1,createdAt:"2021-04-01T19:19:32.850Z",updatedAt:"2021-04-01T19:30:53.035Z"},o="What is Signing?",s={unversionedId:"Developer/New To Topl/signing",id:"Developer/New To Topl/signing",title:"Signing",description:'Signing is the act of user A "signing" data that anyone can validate came from user A. This is used in transactions to check if they are real.',source:"@site/docs/Developer/New To Topl/signing.md",sourceDirName:"Developer/New To Topl",slug:"/Developer/New To Topl/signing",permalink:"/Developer/New To Topl/signing",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/docs/Developer/New To Topl/signing.md",tags:[],version:"current",frontMatter:{title:"Signing",slug:"signing",hidden:!1,createdAt:"2021-04-01T19:19:32.850Z",updatedAt:"2021-04-01T19:30:53.035Z"},sidebar:"developerSidebar",previous:{title:"Networks",permalink:"/Developer/New To Topl/networks"},next:{title:"Transactions",permalink:"/Developer/New To Topl/transactions-1"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-signing"},"What is Signing?"),(0,i.kt)("p",null,'Signing is the act of user A "signing" data that anyone can validate came from user A. This is used in transactions to check if they are real. '),(0,i.kt)("p",null,'A common question is "how can you validate transactions are real?". The short answer is public-key cryptography. It\'s an algorithm with 3 parts.'),(0,i.kt)("p",null,"1.) Key Creation\n2.) Encryption/Signing\n3.) Decryption/Validation"),(0,i.kt)("p",null,'Encryption is generally used to hide data in other data. If you encrypt a string like "hello world" you get something like "dqE3gJz/+5CQHfSJwMP2nQ". It\'s purpose is to hide the message "hello world". Signing is used to create a different output string, but you also publicize the original message. '),(0,i.kt)("p",null,"The key creation will output two strings, a public and private key. It links them through an algorithm that has the signing and validation properties. A signature will take in a public key, private key, and a message. The output will be another string that is the signature. "),(0,i.kt)("p",null,"1.) Signature = F(public key, private key, message)\n2.) Validation = F(signature, message)\n3.) Is Valid if: Validation = public key"),(0,i.kt)("p",null,"Notice how validation does not require knowledge of the private key. This is what allows 3rd parties to validate information. If the output of the validation function (at Topl, we use the parlance <<glossary:Proposition>>) is equal to the public key then the signature is real, otherwise, it is fake. "),(0,i.kt)("p",null,"The signature is made up of 3 variables. Topl employs <<glossary:Elliptic Curve Cryptography>> and those variables are simply part of the underlying math. "),(0,i.kt)("h1",{id:"why-sign"},"Why Sign?"),(0,i.kt)("p",null,"Signing is a nice way to know something is being done by the correct person. This means we can trust that someone is actually doing what they say they are. "),(0,i.kt)("p",null,"Instead of real world signatures, which can be faked, the digital ones can not. If you want to know user A did something, make them sign it before moving forward. Then if a dispute arises, check the signature."))}u.isMDXComponent=!0}}]);