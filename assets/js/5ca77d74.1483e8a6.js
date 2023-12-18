"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9762],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,y=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:4},a="Bifrost Query Mode",c={unversionedId:"Developers/CLI/cli-reference/bifrost-query-mode",id:"Developers/CLI/cli-reference/bifrost-query-mode",title:"Bifrost Query Mode",description:"",source:"@site/docs/Developers/04-CLI/04-cli-reference/bifrost-query-mode.md",sourceDirName:"Developers/04-CLI/04-cli-reference",slug:"/Developers/CLI/cli-reference/bifrost-query-mode",permalink:"/Developers/CLI/cli-reference/bifrost-query-mode",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Developers/04-CLI/04-cli-reference/bifrost-query-mode.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"developersSidebar",previous:{title:"Genus Query Mode",permalink:"/Developers/CLI/cli-reference/genus-query-mode"},next:{title:"Wallet Mode",permalink:"/Developers/CLI/cli-reference/wallet-mode"}},l={},s=[],u={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bifrost-query-mode"},"Bifrost Query Mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Command: bifrost-query [block-by-height|block-by-id|transaction-by-id]\nBifrost query mode\nCommand: bifrost-query block-by-height [options]\nGet the block at a given height\n  -h, --host <value>       The host of the node. (mandatory)\n  --port <value>           Port Bifrost node. (mandatory)\n  -s, --secure <value>     Enables the secure connection to the node. (optional)\n  --height <value>         The height of the block. (mandatory)\nCommand: bifrost-query block-by-id [options]\nGet the block with a given id\n  -h, --host <value>       The host of the node. (mandatory)\n  --port <value>           Port Bifrost node. (mandatory)\n  -s, --secure <value>     Enables the secure connection to the node. (optional)\n  --block-id <value>       The id of the block in base 58. (mandatory)\nCommand: bifrost-query transaction-by-id [options]\nGet the transaction with a given id\n  -h, --host <value>       The host of the node. (mandatory)\n  --port <value>           Port Bifrost node. (mandatory)\n  -s, --secure <value>     Enables the secure connection to the node. (optional)\n  --transaction-id <value>\n                           The id of the transaction in base 58. (mandatory)                  \n")))}d.isMDXComponent=!0}}]);