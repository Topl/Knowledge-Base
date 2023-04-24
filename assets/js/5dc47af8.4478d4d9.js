"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),y=r,f=u["".concat(s,".").concat(y)]||u[y]||p[y]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={title:"Adding Polys",slug:"adding-polys",hidden:!1,createdAt:"2021-03-23T17:52:21.694Z",updatedAt:"2021-07-06T19:09:37.056Z"},l=void 0,i={unversionedId:"Developer/BaaS Portal Onboarding/adding-polys",id:"Developer/BaaS Portal Onboarding/adding-polys",title:"Adding Polys",description:"As discussed previously, polys are required in order to submit transactions to the Topl blockchain.",source:"@site/docs/Developer/BaaS Portal Onboarding/adding-polys.md",sourceDirName:"Developer/BaaS Portal Onboarding",slug:"/Developer/BaaS Portal Onboarding/adding-polys",permalink:"/docs/Developer/BaaS Portal Onboarding/adding-polys",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/docs/Developer/BaaS Portal Onboarding/adding-polys.md",tags:[],version:"current",frontMatter:{title:"Adding Polys",slug:"adding-polys",hidden:!1,createdAt:"2021-03-23T17:52:21.694Z",updatedAt:"2021-07-06T19:09:37.056Z"},sidebar:"developerSidebar",previous:{title:"Transactions View",permalink:"/docs/Developer/Annulus/transactions-view"},next:{title:"Choosing a Network",permalink:"/docs/Developer/BaaS Portal Onboarding/choosing-a-network"}},s={},d=[],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As discussed previously, polys are required in order to submit transactions to the Topl blockchain."),(0,r.kt)("p",null,"[block:callout]",'\n{\n"type": "danger",\n"title": "Note:",\n"body": "You must have an address in order to add polys to your address. You can follow our documentation to generate an address using one of our Brambl libraries (see the Topl Blockchain Address page)"\n}\n',"[/block]"),(0,r.kt)("h1",{id:"how-can-i-get-polys"},"How can I get Polys?"),(0,r.kt)("p",null,"It's actually pretty easy, follow these steps: "),(0,r.kt)("p",null,"#First Step\nAfter logging into the BaaS Portal, go to Settings and find the Purchase Polys section on the page. From there, you can transfer funds to the address directly through the UI! "),(0,r.kt)("p",null,"[block:image]",'\n{\n"images": [\n{\n"image": ','[\n"https://files.readme.io/3a0e7a6-Topl_-_API_Console.gif",\n"Topl - API Console.gif",\n640,\n400,\n"#e1ecea"\n]',"\n}\n]\n}\n","[/block]","\nYou will need to wait until the funds are confirmed to use them. The confirmation status will look something like this:\n","[block:image]",'\n{\n"images": [\n{\n"image": ','[\n"https://files.readme.io/885bf20-Screen_Shot_2021-07-06_at_12.55.27_PM.png",\n"Screen Shot 2021-07-06 at 12.55.27 PM.png",\n2296,\n354,\n"#fafafa"\n]',"\n}\n]\n}\n","[/block]"),(0,r.kt)("p",null,"[block:callout]",'\n{\n"type": "info",\n"title": "Note:",\n"body": "Polys used on our testing network our free, however, you will have to pay to acquire polys on our main network. In addition, you can only request one faucet transaction on the testnet for every 6 hours. This ensures that there will be enough test polys for all of our users."\n}\n',"[/block]","\nIf you are wanting to add polys to an account on our mainnet (toplnet), please follow the steps above but use the mainnet dropdown instead of the valhalla dropdown. You should be redirected to stripe where you can purchase polys on the main network."))}p.isMDXComponent=!0}}]);