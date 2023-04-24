"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4037],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(t),h=o,m=f["".concat(l,".").concat(h)]||f[h]||u[h]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={title:"Overview Page",slug:"overview-page",hidden:!1,createdAt:"2021-08-23T17:41:05.303Z",updatedAt:"2021-11-10T19:03:43.293Z"},i=void 0,c={unversionedId:"Developer/Annulus/overview-page",id:"Developer/Annulus/overview-page",title:"Overview Page",description:"[block:image]",source:"@site/docs/Developer/Annulus/overview-page.md",sourceDirName:"Developer/Annulus",slug:"/Developer/Annulus/overview-page",permalink:"/docs/Developer/Annulus/overview-page",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/docs/Developer/Annulus/overview-page.md",tags:[],version:"current",frontMatter:{title:"Overview Page",slug:"overview-page",hidden:!1,createdAt:"2021-08-23T17:41:05.303Z",updatedAt:"2021-11-10T19:03:43.293Z"},sidebar:"developerSidebar",previous:{title:"Main Search Bar",permalink:"/docs/Developer/Annulus/main-search-bar"},next:{title:"Recent Blocks",permalink:"/docs/Developer/Annulus/recent-blocks"}},l={},s=[],p={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"#Overview Page\n","[block:image]",'\n{\n"images": [\n{\n"image": ','[\n"https://files.readme.io/9ff1fab-Screen_Shot_2021-08-23_at_1.41.54_PM.png",\n"Screen Shot 2021-08-23 at 1.41.54 PM.png",\n3356,\n2094,\n"#c2e5df"\n]',"\n}\n]\n}\n","[/block]","\nUpon landing on the Annulus site, you'll be greeted by the overview and a few important elements. On the left side of the header, you'll see the Topl logo which takes you back to this overview screen at any time! "),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"average block time")," refers to the average time to forge a new block over a 24-hour period. This number changes depending on difficulty parameters of a given network."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Unconfirmed Transactions")," are transactions that have been broadcast but are yet to be confirmed by forgers. Since transactions are confirmed in blocks (batches), every transaction will at first be unconfirmed. However, if a transaction remains unconfirmed for more than a few minutes, it may mean that the transaction fee paid with the transaction was too low. Transaction fees act as an incentive for forgers to process a transaction, so a fee below the network minimum would result in the transaction never being confirmed into a block. "),(0,o.kt)("p",null,'Beginning with the first column in the Blocks section, "Block Height" refers to the index of a given block, which number block is it in the chain. The next column provides the number of transaction present in each block. The last column records the date and time it was completed (in YYYY/MM/DD hh:mm:ss format).'),(0,o.kt)("p",null,"Should you want to view more details on a specific block, clicking on the block height will take you to all the transactions contained in that specific block.\n","[block:image]",'\n{\n"images": [\n{\n"image": ','[\n"https://files.readme.io/d1a983b-Screen_Shot_2021-08-23_at_1.42.48_PM.png",\n"Screen Shot 2021-08-23 at 1.42.48 PM.png",\n3356,\n172,\n"#fcfdfc"\n]',"\n}\n]\n}\n","[/block]"),(0,o.kt)("p",null,"[block:image]",'\n{\n"images": [\n{\n"image": ','[\n"https://files.readme.io/e0459c0-Screen_Shot_2021-08-23_at_2.28.00_PM.png",\n"Screen Shot 2021-08-23 at 2.28.00 PM.png",\n2392,\n1722,\n"#f7f8f8"\n]',"\n}\n]\n}\n","[/block]","\nAs an example, we have clicked on block ",(0,o.kt)("a",{parentName:"p",href:"https://toplnet.annulus.topl.services/#/block/234AsNJz29kQzRpemokJi6ANDHbCxcS4Nv6iDC16B9TTt"},"62855"),' to gain more information. The first part shows the block header and its summary, In the "Transactions" subheader below, alphanumeric transaction IDs will be listed. The first two transactions in a Topl block are the block reward sent to the forger or set of forgers who generated the block.  This is why you will see that those transactions have 0 in fees.'))}u.isMDXComponent=!0}}]);