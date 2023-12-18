"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5293:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To sync the wallet run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brambl-cli wallet sync --template-name $LOCK_TEMPLATE_NAME --fellowship-name $FELLOWSHIP_NAME --walletdb $WALLET -n $NETWORK -h $HOST --port $PORT --keyfile $KEYFILE -w $PASSWORD\n")),(0,a.kt)("p",null,"This will sync the wallet for the fellowship ",(0,a.kt)("inlineCode",{parentName:"p"},"$FELLOWSHIP_NAME")," and template ",(0,a.kt)("inlineCode",{parentName:"p"},"$LOCK_TEMPLATE_NAME")," with the bifrost node running on ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOST")," on port ",(0,a.kt)("inlineCode",{parentName:"p"},"$PORT"),". The keyfile ",(0,a.kt)("inlineCode",{parentName:"p"},"$KEYFILE")," is used to derive keys. The password for the wallet is ",(0,a.kt)("inlineCode",{parentName:"p"},"$PASSWORD"),". "),(0,a.kt)("p",null,"The procedure for the sync is the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"we first derive the next address for the fellowship and template"),(0,a.kt)("li",{parentName:"ul"},"we query the node to see if the UTXOs in that address are spent"),(0,a.kt)("li",{parentName:"ul"},"if the UTXOs are spent, then we derive the next address and repeat the process")))}i.isMDXComponent=!0},6705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(5293);const i={sidebar_position:11},l="Manage Keys",p={unversionedId:"Developers/CLI/How-tos/manage-keys",id:"Developers/CLI/How-tos/manage-keys",title:"Manage Keys",description:"To interact with other fellowships and templates you need to import their public",source:"@site/docs/Developers/04-CLI/03-How-tos/manage-keys.md",sourceDirName:"Developers/04-CLI/03-How-tos",slug:"/Developers/CLI/How-tos/manage-keys",permalink:"/Developers/CLI/How-tos/manage-keys",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Developers/04-CLI/03-How-tos/manage-keys.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"developersSidebar",previous:{title:"Manage Templates",permalink:"/Developers/CLI/How-tos/manage-contracts"},next:{title:"Create a Complex Transaction",permalink:"/Developers/CLI/How-tos/complex-tx"}},s={},c=[{value:"Export a base verification key",id:"export-a-base-verification-key",level:2},{value:"Import a base verification key",id:"import-a-base-verification-key",level:2},{value:"Sync the wallet",id:"sync-the-wallet",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manage-keys"},"Manage Keys"),(0,a.kt)("p",null,"To interact with other fellowships and templates you need to import their public\nkeys into your wallet. This allows to derive the right keys to derive the next\naddress where to send the funds."),(0,a.kt)("h2",{id:"export-a-base-verification-key"},"Export a base verification key"),(0,a.kt)("p",null,"To export a base verification key run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brambl-cli wallet export-vk -w $PASSWORD -o $OUTPUT_FILE --walletdb $WALLET --fellowship-name $FELLOWSHIP_NAME --template-name $LOCK_TEMPLATE_NAME --keyfile $KEYFILE -n $NETWORK\n")),(0,a.kt)("p",null,"This will export the base verification key for the fellowship ",(0,a.kt)("inlineCode",{parentName:"p"},"$FELLOWSHIP_NAME")," and template ",(0,a.kt)("inlineCode",{parentName:"p"},"$LOCK_TEMPLATE_NAME")," to the file ",(0,a.kt)("inlineCode",{parentName:"p"},"$OUTPUT_FILE"),". The keyfile ",(0,a.kt)("inlineCode",{parentName:"p"},"$KEYFILE")," is used to derive the exported key."),(0,a.kt)("p",null,"This command is also used to export a final verification key. To do this, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--interaction")," option to specify the\ninteraction from which to export the key."),(0,a.kt)("h2",{id:"import-a-base-verification-key"},"Import a base verification key"),(0,a.kt)("p",null,"To import one or many base verification keys run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brambl-cli wallet import-vks --input-vks $BASE_VK_1,$BASE_VK_2 --fellowship-name $FELLOWSHIP_NAME --template-name $LOCK_TEMPLATE_NAME -n $NETWORK --walletdb $WALLET\n")),(0,a.kt)("h2",{id:"sync-the-wallet"},"Sync the wallet"),(0,a.kt)(o.ZP,{mdxType:"SyncWallet"}))}d.isMDXComponent=!0}}]);