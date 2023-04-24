"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7193],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(t),u=a,y=f["".concat(l,".").concat(u)]||f[u]||d[u]||o;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6908:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={title:"Create raw poly transfer",slug:"createrawpolytransfer",excerpt:"#### Summary\nTransfer Polys from an account to a specified recipient.\n\n#### Type\nRemote -- Transaction must be used in conjunction with an external key manager service.\n\n#### Description\nDefault behavior of the wallet is to find the first unlocked address which hold Polys.\nThe protocols default behavior is to combine multiple UTXOs of the same type into a single UTXO when it can.\n\n#### Notes\n- `fee` and Poly amounts in `recipients` need to be strings, they will be converted into Int128 which can go up\nto 178 undecillion(2^127-1)\n\n#### Params\n| Fields          | Data type          | Required / Optional | Description                                                              |\n|-----------------|--------------------|---------------------|--------------------------------------------------------------------------|\n| propositionType | String             | Required            | Type of proposition, eg., PublicKeyCurve25519, ThresholdCurve25519       |\n| recipients      | [[String, String]] | Required            | Array of addresses and Poly amounts for the corresponding recipients     |\n| sender          | [String]           | Required            | Array of addresses from which Poly should be sent                        |\n| changeAddress   | String             | Required            | Address for recipient of unspent Polys                                   |\n| fee             | String             | Required            | Fee for the transfer                                                     |\n| data            | String             | Optional            | Data string which can be associated with this transaction (may be empty). Data has a maximum value of 127 Latin-1 encoded characters |",hidden:!1,createdAt:"2021-07-09T20:50:41.563Z",updatedAt:"2021-07-09T20:50:41.563Z"},i=void 0,s={unversionedId:"Developer/Raw Poly Transfer/raw-poly-transfer/createrawpolytransfer",id:"Developer/Raw Poly Transfer/raw-poly-transfer/createrawpolytransfer",title:"Create raw poly transfer",description:"",source:"@site/docs/Developer/Raw Poly Transfer/raw-poly-transfer/createrawpolytransfer.md",sourceDirName:"Developer/Raw Poly Transfer/raw-poly-transfer",slug:"/Developer/Raw Poly Transfer/raw-poly-transfer/createrawpolytransfer",permalink:"/knowledge-base/docs/Developer/Raw Poly Transfer/raw-poly-transfer/createrawpolytransfer",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/docs/Developer/Raw Poly Transfer/raw-poly-transfer/createrawpolytransfer.md",tags:[],version:"current",frontMatter:{title:"Create raw poly transfer",slug:"createrawpolytransfer",excerpt:"#### Summary\nTransfer Polys from an account to a specified recipient.\n\n#### Type\nRemote -- Transaction must be used in conjunction with an external key manager service.\n\n#### Description\nDefault behavior of the wallet is to find the first unlocked address which hold Polys.\nThe protocols default behavior is to combine multiple UTXOs of the same type into a single UTXO when it can.\n\n#### Notes\n- `fee` and Poly amounts in `recipients` need to be strings, they will be converted into Int128 which can go up\nto 178 undecillion(2^127-1)\n\n#### Params\n| Fields          | Data type          | Required / Optional | Description                                                              |\n|-----------------|--------------------|---------------------|--------------------------------------------------------------------------|\n| propositionType | String             | Required            | Type of proposition, eg., PublicKeyCurve25519, ThresholdCurve25519       |\n| recipients      | [[String, String]] | Required            | Array of addresses and Poly amounts for the corresponding recipients     |\n| sender          | [String]           | Required            | Array of addresses from which Poly should be sent                        |\n| changeAddress   | String             | Required            | Address for recipient of unspent Polys                                   |\n| fee             | String             | Required            | Fee for the transfer                                                     |\n| data            | String             | Optional            | Data string which can be associated with this transaction (may be empty). Data has a maximum value of 127 Latin-1 encoded characters |",hidden:!1,createdAt:"2021-07-09T20:50:41.563Z",updatedAt:"2021-07-09T20:50:41.563Z"},sidebar:"developerSidebar",previous:{title:"Raw Asset Transfer",permalink:"/knowledge-base/docs/Developer/Raw Asset Transfer/raw-asset-transfer"},next:{title:"Raw Poly Transfer",permalink:"/knowledge-base/docs/Developer/Raw Poly Transfer/raw-poly-transfer"}},l={},c=[],p={toc:c};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}))}d.isMDXComponent=!0}}]);