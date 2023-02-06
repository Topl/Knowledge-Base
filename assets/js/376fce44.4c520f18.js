"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"SDKs and API Libraries",slug:"sdks-and-api-libraries",hidden:!1,createdAt:"2021-08-31T18:33:22.917Z",updatedAt:"2022-09-20T14:23:10.107Z"},i=void 0,s={unversionedId:"v1.10.2/Getting Started/sdks-and-api-libraries",id:"v1.10.2/Getting Started/sdks-and-api-libraries",title:"SDKs and API Libraries",description:"[block:callout]",source:"@site/docs/v1.10.2/Getting Started/sdks-and-api-libraries.md",sourceDirName:"v1.10.2/Getting Started",slug:"/v1.10.2/Getting Started/sdks-and-api-libraries",permalink:"/docs/docs/v1.10.2/Getting Started/sdks-and-api-libraries",draft:!1,editUrl:"https://github.com/Topl/Developer-Portal/docs/v1.10.2/Getting Started/sdks-and-api-libraries.md",tags:[],version:"current",frontMatter:{title:"SDKs and API Libraries",slug:"sdks-and-api-libraries",hidden:!1,createdAt:"2021-08-31T18:33:22.917Z",updatedAt:"2022-09-20T14:23:10.107Z"},sidebar:"tutorialSidebar",previous:{title:"Running Bifrost",permalink:"/docs/docs/v1.10.2/Getting Started/sdks-and-api-libraries/running-bifrost"},next:{title:"Security and Authentication",permalink:"/docs/docs/v1.10.2/Getting Started/security-and-authentication"}},l={},c=[{value:"SDKs/ Open Source Libraries",id:"sdks-open-source-libraries",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[block:callout]",'\n{\n"type": "danger",\n"body": "Warning: The Topl SDK libraries for the Dion mainnet and testnet, Toplnet and Valhalla respectively, are currently deprecated in order to focus new development on the new version of the Topl blockchain, Tetra. The Dion SDK libraries are usable, but it is highly recommended to focus new development through the ',(0,a.kt)("a",{parentName:"p",href:"doc:daml"},"DAML"),' smart contract integration.",\n"title": "# Deprecated"\n}\n',"[/block]","\n#Overview "),(0,a.kt)("p",null,"Topl has a collection of tools which makes it easier to integrate with the Topl blockchain. Depending on the use-cases you have, you may use any of the components below."),(0,a.kt)("p",null,"#Getting Started\nTo get started, checkout the ",(0,a.kt)("a",{parentName:"p",href:"doc:introduction-2"},"\ud83d\udcd8 Topl User Guide")),(0,a.kt)("p",null,"#Components"),(0,a.kt)("h2",{id:"sdks-open-source-libraries"},"SDKs/ Open Source Libraries"),(0,a.kt)("p",null,"[block:parameters]",'\n{\n"data": {\n"h-0": "name/link",\n"h-1": "description",\n"0-0": "',(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/brambljs"},"BramblJs"),'",\n"0-1": "Contains everything that you need for addresses and creating transactions in Javascript.",\n"1-0": "',(0,a.kt)("a",{parentName:"p",href:"https://github.com/Topl/Bifrost/tree/main/brambl"},"BramblSc"),'",\n"1-1": "Contains everything that you need for addresses and creating transactions in Scala.",\n"2-0": "',(0,a.kt)("a",{parentName:"p",href:"https://github.com/Topl/BramblPy"},"BramblPy"),'",\n"2-1": "Contains everything that you need for addresses and creating transactions in Python.  Currently in pre-release (is not recommended for production environments)",\n"3-0": "',(0,a.kt)("a",{parentName:"p",href:"https://github.com/Topl/BramblDart"},"BramblDart"),'",\n"3-1": "Contains everything that you need to manage addresses and create transactions in Dart. Currently in pre-release (it is not recommended for production environments)"\n},\n"cols": 2,\n"rows": 4\n}\n',"[/block]"),(0,a.kt)("h1",{id:"recipes"},"Recipes"),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"https://topl.readme.io/recipes"},"Recipes")," for examples on how to use the above resources."),(0,a.kt)("h1",{id:"api-reference"},"API Reference"),(0,a.kt)("p",null,"If you are interested in seeing the low level JSON-RPC API to directly interact with the Topl Blockchain, please see the documentation located ",(0,a.kt)("a",{parentName:"p",href:"https://topl.readme.io/reference"},"here"),"."),(0,a.kt)("h1",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"doc:contributors"},"Contributors")))}d.isMDXComponent=!0}}]);