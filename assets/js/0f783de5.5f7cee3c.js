"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4128],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return t?a.createElement(b,c(c({ref:n},l),{},{components:t})):a.createElement(b,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:16},c="Inspecting a Transaction",s={unversionedId:"Developers/CLI/How-tos/inspect-tx",id:"Developers/CLI/How-tos/inspect-tx",title:"Inspecting a Transaction",description:"To inspect a transaction run the following command:",source:"@site/docs/Developers/04-CLI/03-How-tos/inspect-tx.md",sourceDirName:"Developers/04-CLI/03-How-tos",slug:"/Developers/CLI/How-tos/inspect-tx",permalink:"/Developers/CLI/How-tos/inspect-tx",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Developers/04-CLI/03-How-tos/inspect-tx.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"developersSidebar",previous:{title:"Mint a Asset Tokens",permalink:"/Developers/CLI/How-tos/mint-assets"},next:{title:"Check balance of an address",permalink:"/Developers/CLI/How-tos/check-balance"}},i={},p=[],l={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inspecting-a-transaction"},"Inspecting a Transaction"),(0,r.kt)("p",null,"To inspect a transaction run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brambl-cli tx inspect -i $TX_FILE\n")),(0,r.kt)("p",null,"This will inspect the transaction in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"$TX_FILE")," and output the result to the console. The output will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TransactionId              : 11111111111111111111111111111111\n\nGroup Policies\n==============\n\n\nSeries Policies\n===============\n\n\nAsset Minting Statements\n========================\nGroup-Token-Utxo           : FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#2\nSeries-Token-Utxo          : FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#1\nQuantity                   : 1000\nPermanent-Metadata         : \nNo permanent metadata\n      \nInputs\n======\nTxoAddress                 : FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#0\nAttestation                : Not implemented\nType                       : LVL\nValue                      : 9998800\n-----------\nTxoAddress                 : FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#2\nAttestation                : Not implemented\nType                       : Group Constructor\nId                         : cabf98baf365915d2282eca423bfae4a6425bad6064b8d97f2c39ba6e9fceafb\nFixed-Series               : NO FIXED SERIES\nValue                      : 1\n-----------\nTxoAddress                 : FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#1\nAttestation                : Not implemented\nType                       : Series Constructor\nId                         : 094c5a3acf338bcca90c91c9adcae5f4b59dec385740e80660111a3d6b10a8ce\nFungibility                : group-and-series\nToken-Supply               : UNLIMITED\nQuant-Descr.               : liquid\nValue                      : 1\n\nOutputs\n=======\nLockAddress                : ptetP7jshHUHx1621p51SSQekgpXzKLaYudhmz5FKMSUDThccGj274Y1P89n\nType                       : LVL\nValue                      : 9998700\n-----------\nLockAddress                : ptetP7jshHUHx1621p51SSQekgpXzKLaYudhmz5FKMSUDThccGj274Y1P89n\nType                       : Group Constructor\nId                         : cabf98baf365915d2282eca423bfae4a6425bad6064b8d97f2c39ba6e9fceafb\nFixed-Series               : NO FIXED SERIES\nValue                      : 1\n-----------\nLockAddress                : ptetP7jshHUHx1621p51SSQekgpXzKLaYudhmz5FKMSUDThccGj274Y1P89n\nType                       : Series Constructor\nId                         : 094c5a3acf338bcca90c91c9adcae5f4b59dec385740e80660111a3d6b10a8ce\nFungibility                : group-and-series\nToken-Supply               : UNLIMITED\nQuant-Descr.               : liquid\nValue                      : 1\n-----------\nLockAddress                : ptetP7jshHUHx1621p51SSQekgpXzKLaYudhmz5FKMSUDThccGj274Y1P89n\nType                       : Asset\nGroupId                    : cabf98baf365915d2282eca423bfae4a6425bad6064b8d97f2c39ba6e9fceafb\nSeriesId                   : 094c5a3acf338bcca90c91c9adcae5f4b59dec385740e80660111a3d6b10a8ce\nCommitment                 : 3e8fd1ed52e0c8107f3265da13a42b323a492d334b6da23b0f1ef279b988a225\nEphemeral-Metadata         : \n  url: http://topl.co\n  image: http://topl.co/image.png\n  number: 42.0\nValue                      : 1000\n\nDatum\n=====\nValue                      : KJHK1EAZuVA\n")))}d.isMDXComponent=!0}}]);