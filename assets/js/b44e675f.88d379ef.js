"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:8},a="Simple Minting Mode",l={unversionedId:"Developers/CLI/cli-reference/simple-minting.mode",id:"Developers/CLI/cli-reference/simple-minting.mode",title:"Simple Minting Mode",description:"",source:"@site/docs/Developers/04-CLI/04-cli-reference/simple-minting.mode.md",sourceDirName:"Developers/04-CLI/04-cli-reference",slug:"/Developers/CLI/cli-reference/simple-minting.mode",permalink:"/Developers/CLI/cli-reference/simple-minting.mode",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Developers/04-CLI/04-cli-reference/simple-minting.mode.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"developersSidebar",previous:{title:"Simple Transaction Mode",permalink:"/Developers/CLI/cli-reference/simple-tx-mode"},next:{title:"Server Mode",permalink:"/Developers/CLI/cli-reference/server"}},p={},m=[],s={toc:m};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"simple-minting-mode"},"Simple Minting Mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Command: simple-minting [create]\nSimple minting mode\nCommand: simple-minting create [options]\nCreate minting transaction\n  --from-fellowship <value>\n                           Fellowship where we are sending the funds from\n  --from-template <value>  Template where we are sending the funds from\n  --from-interaction <value>\n                           Interaction from where we are sending the funds from\n  -n, --network <value>    Network name: Possible values: mainnet, testnet, private. (mandatory)\n  -h, --host <value>       The host of the node. (mandatory)\n  --port <value>           Port Bifrost node. (mandatory)\n  -s, --secure <value>     Enables the secure connection to the node. (optional)\n  -k, --keyfile <value>    The key file.\n  -w, --password <value>   Password for the encrypted key. (mandatory)\n  --walletdb <value>       Wallet DB file. (mandatory)\n  -o, --output <value>     The output file. (mandatory)\n  -i, --input <value>      The input file. (mandatory)\n  --commitment <value>     The commitment to use, 32 bytes in hexadecimal formal. (optional)\n  --ephemeralMetadata <value>\n                           A file containing the JSON metadata for the ephemeral metadata of the asset. (optional)\n  --mint-amount <value>    Amount to mint\n  --fee <value>            Fee paid for the transaction\n  --mint-token <value>     The token type. The valid token types are 'asset', 'group', 'series'.\n")))}c.isMDXComponent=!0}}]);