"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3603],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},l="Recover a Wallet Keyfile",i={unversionedId:"Developers/CLI/How-tos/recover-wallet",id:"Developers/CLI/How-tos/recover-wallet",title:"Recover a Wallet Keyfile",description:"The command to recover a wallet's main key is:",source:"@site/docs/Developers/04-CLI/03-How-tos/recover-wallet.md",sourceDirName:"Developers/04-CLI/03-How-tos",slug:"/Developers/CLI/How-tos/recover-wallet",permalink:"/Developers/CLI/How-tos/recover-wallet",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Developers/04-CLI/03-How-tos/recover-wallet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developersSidebar",previous:{title:"Initialize a Wallet",permalink:"/Developers/CLI/How-tos/initialize-wallet"},next:{title:"Get the Current Address",permalink:"/Developers/CLI/How-tos/current-address"}},s={},p=[],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"recover-a-wallet-keyfile"},"Recover a Wallet Keyfile"),(0,o.kt)("p",null,"The command to recover a wallet's main key is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brambl-cli wallet recover-keys -w $PASSWORD --passphrase $PASSPHRASE -n $NETWORK -o $KEY_FILE --newwalletdb $WALLET_DB --mnemonic this,is,an,example,of,a,mnemonic,string,that,contains,12,words\n")),(0,o.kt)("p",null,"This will use the the mnemonic specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"--mnemonic")," option to recover the main key of the wallet. The main key will be stored in the file specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"-o")," option and protected by the password. The valid values for the ",(0,o.kt)("inlineCode",{parentName:"p"},"-n")," option are ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"private"),". A new wallet database will be created and stored in the file specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"--newwalletdb")," option."),(0,o.kt)("p",null,"Note that the passphrase ",(0,o.kt)("strong",{parentName:"p"},"MUST")," be the same passphrase used to initially generate the mnemonic. The password can be different."))}d.isMDXComponent=!0}}]);