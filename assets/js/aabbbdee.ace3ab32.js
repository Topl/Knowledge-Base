"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Recovery Phrases",slug:"wallet-cryptography-and-encoding",hidden:!1,createdAt:"2021-10-08T21:20:21.210Z",updatedAt:"2021-10-08T21:35:29.141Z"},i=void 0,l={unversionedId:"Developer/New To Topl/wallet-cryptography-and-encoding",id:"Developer/New To Topl/wallet-cryptography-and-encoding",title:"Recovery Phrases",description:"Recovery Phrases",source:"@site/docs/Developer/New To Topl/wallet-cryptography-and-encoding.md",sourceDirName:"Developer/New To Topl",slug:"/Developer/New To Topl/wallet-cryptography-and-encoding",permalink:"/Developer/New To Topl/wallet-cryptography-and-encoding",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/docs/Developer/New To Topl/wallet-cryptography-and-encoding.md",tags:[],version:"current",frontMatter:{title:"Recovery Phrases",slug:"wallet-cryptography-and-encoding",hidden:!1,createdAt:"2021-10-08T21:20:21.210Z",updatedAt:"2021-10-08T21:35:29.141Z"},sidebar:"developerSidebar",previous:{title:"Transactions",permalink:"/Developer/New To Topl/transactions-1"},next:{title:"What are Polys?",permalink:"/Developer/New To Topl/what-are-polys"}},p={},s=[{value:"Recovery Phrases",id:"recovery-phrases",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Encoding",id:"encoding",level:3},{value:"Dictionaries",id:"dictionaries",level:3}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"recovery-phrases"},"Recovery Phrases"),(0,a.kt)("h3",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"We define a way for easily entering and writing down arbitrary binary seeds using\na simple dictionary of known words (available in many different languages)."),(0,a.kt)("p",null,"The motivation here is to have sentence of words easy to read and write for humans,\nwhich map uniquely back and forth to a sized binary data (harder to remember)."),(0,a.kt)("h3",{id:"encoding"},"Encoding"),(0,a.kt)("p",null,"The process describing how to encode recovery phrases is described in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"},"BIP-0039"),'\nsection "Generating the mnemonic". Below is a reformulation of this specification.'),(0,a.kt)("p",null,"We call ",(0,a.kt)("em",{parentName:"p"},"Entropy")," an arbitrary sequence of bytes that has been generated through high\nquality randomness methods. The allowed size of ",(0,a.kt)("em",{parentName:"p"},"Entropy")," is 96-256 bits and is\nnecessarily a multiple of 32 bits (4 bytes). "),(0,a.kt)("p",null,"A checksum is appended to the initial entropy by taking the first ",(0,a.kt)("inlineCode",{parentName:"p"},"ENT / 32")," bits\nof the SHA256 hash of it, where ",(0,a.kt)("inlineCode",{parentName:"p"},"ENT")," designates the ",(0,a.kt)("em",{parentName:"p"},"Entropy")," size in bits. "),(0,a.kt)("p",null,"Then, the concatenated result is split into groups of 11 bits, each encoding a number\nfrom 0 to 2047 serving as an index into a known dictionary (see below)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Sentence Length"),(0,a.kt)("th",{parentName:"tr",align:null},"Entropy Size"),(0,a.kt)("th",{parentName:"tr",align:null},"Checksum Size"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9 words"),(0,a.kt)("td",{parentName:"tr",align:null},"96  bits (12 bytes)"),(0,a.kt)("td",{parentName:"tr",align:null},"3 bits")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"12 words"),(0,a.kt)("td",{parentName:"tr",align:null},"128 bits (16 bytes)"),(0,a.kt)("td",{parentName:"tr",align:null},"4 bits")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"15 words"),(0,a.kt)("td",{parentName:"tr",align:null},"160 bits (20 bytes)"),(0,a.kt)("td",{parentName:"tr",align:null},"5 bits")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"18 words"),(0,a.kt)("td",{parentName:"tr",align:null},"192 bits (24 bytes)"),(0,a.kt)("td",{parentName:"tr",align:null},"6 bits")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"21 words"),(0,a.kt)("td",{parentName:"tr",align:null},"224 bits (28 bytes)"),(0,a.kt)("td",{parentName:"tr",align:null},"7 bits")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"24 words"),(0,a.kt)("td",{parentName:"tr",align:null},"256 bits (32 bytes)"),(0,a.kt)("td",{parentName:"tr",align:null},"8 bits")))),(0,a.kt)("h3",{id:"dictionaries"},"Dictionaries"),(0,a.kt)("p",null,"Topl uses the same dictionaries as defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md"},"BIP-0039"),"."),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);