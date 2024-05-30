"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2858],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),h=n,f=d["".concat(i,".").concat(h)]||d[h]||u[h]||l;return o?r.createElement(f,a(a({ref:t},c),{},{components:o})):r.createElement(f,a({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<l;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4924:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const l={sidebar_position:2},a="Locks",s={unversionedId:"Developers/CLI/concepts/locks",id:"Developers/CLI/concepts/locks",title:"Locks",description:"All funds in the Apparatus blockchain are protected by a lock proposition. The lock",source:"@site/docs/Developers/04-CLI/02-concepts/locks.md",sourceDirName:"Developers/04-CLI/02-concepts",slug:"/Developers/CLI/concepts/locks",permalink:"/Developers/CLI/concepts/locks",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Developers/04-CLI/02-concepts/locks.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developersSidebar",previous:{title:"Fellowships",permalink:"/Developers/CLI/concepts/fellowships"},next:{title:"Conversation",permalink:"/Developers/CLI/concepts/conversations"}},i={},p=[{value:"Lock Templates",id:"lock-templates",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"locks"},"Locks"),(0,n.kt)("p",null,"All funds in the Apparatus blockchain are protected by a lock proposition. The lock\nproposition is not available to the users, only the lock address is."),(0,n.kt)("p",null,"To prove that they may use the funds in an address, users must provide both\nthe original lock proposition that was used to lock the funds and a proof that\nthey are the owners of the address."),(0,n.kt)("h2",{id:"lock-templates"},"Lock Templates"),(0,n.kt)("p",null,"A lock template is a Quivr expression where there are placeholders instead\nof the public keys of the fellows. The fellows fill the placeholders with\ntheir public keys to create a lock proposition."),(0,n.kt)("p",null,"For example, let us suppose that Alice and Bob want to lock funds together\nand they have already formed a fellowship. They can create a lock template\nwith the following Quivr expression:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"and(sign(0), sign(1))\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"sign(n)")," expression means that the ",(0,n.kt)("inlineCode",{parentName:"p"},"nth")," participan of the fellowship\nmust provide a public key to create the lock proposition. In this case,\nAlice must provide the public key to fill the placeholder ",(0,n.kt)("inlineCode",{parentName:"p"},"sign(0)")," and Bob must\nprovide the public key to fill the placeholder ",(0,n.kt)("inlineCode",{parentName:"p"},"sign(1)"),"."))}u.isMDXComponent=!0}}]);