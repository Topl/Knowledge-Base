"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6900],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),y=a,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Security and Authentication",slug:"security-and-authentication",hidden:!1,createdAt:"2021-03-24T16:43:22.629Z",updatedAt:"2021-11-04T17:06:52.342Z"},i=void 0,l={unversionedId:"Developer/Getting Started/security-and-authentication",id:"Developer/Getting Started/security-and-authentication",title:"Security and Authentication",description:"The Topl endpoints use API keys to allow access. You can obtain your API key through creating a project in the > developer portal (please view the guide for > Developer Portal Onboarding for the details on how to setup your first project).",source:"@site/docs/Developer/Getting Started/security-and-authentication.md",sourceDirName:"Developer/Getting Started",slug:"/Developer/Getting Started/security-and-authentication",permalink:"/Developer/Getting Started/security-and-authentication",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Developer/Getting Started/security-and-authentication.md",tags:[],version:"current",frontMatter:{title:"Security and Authentication",slug:"security-and-authentication",hidden:!1,createdAt:"2021-03-24T16:43:22.629Z",updatedAt:"2021-11-04T17:06:52.342Z"},sidebar:"developerSidebar",previous:{title:"SDKs and API Libraries",permalink:"/Developer/Getting Started/sdks-and-api-libraries"},next:{title:"Assets",permalink:"/Developer/Getting Started/simple-transfer"}},p={},s=[{value:"Examples",id:"examples",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Topl endpoints use API keys to allow access. You can obtain your API key through creating a project in the <<glossary:BaaS>> developer portal (please view the guide for <<glossary:BaaS>> Developer Portal Onboarding for the details on how to setup your first project)."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.readme.io/a314980-Screen_Shot_2021-03-24_at_9.46.56_AM.png",alt:"dev flow test"})),(0,a.kt)("p",null,"To access the APIs, include the API key in the HTTP Header of your HTTP request:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"x-api-key:yourapisecret")),(0,a.kt)("p",null,"Alternatively, you can add the API key into the Requests module object of a BramblJS instance (using our BramblJS library)."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You must replace ",(0,a.kt)("inlineCode",{parentName:"p"},"yourapisecret")," or YOUR_API_KEY in the examples with your actual API key provided by Topl. In addition, you must replace {{myProjectId}} with the actual projectId provided by Topl.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There are two BaaS network prefixes. If you want to use the main net, set networkPrefix = toplnet otherwise set networkPrefix = valhalla for using the test net.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const BramblJS = require(\'brambljs\');\nconst brambl = new BramblJS({\n    networkPrefix: "valhalla", // applies to Requests and KeyManager\n    password: "topl_the_world!",\n    Requests: {\n      url: "https://valhalla.torus.topl.network/{{myProjectId}}", // make sure that the project ID from the BaaS portal is included.\n      apiKey: "YOUR_API_KEY" // set api key for network\n    }\n});\n')),(0,a.kt)("p",null,"Additionally, you must provide a project ID for each request made. Your Project ID can also be found in the BaaS Portal.\n",(0,a.kt)("img",{parentName:"p",src:"https://files.readme.io/668d997-Screen_Shot_2021-03-25_at_3.27.33_PM.png",alt:"dev flow project id"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Note that our BaaS offering has a rate limit defined at 5 requests per second. Please contact us if that is not sufficient for your use case!")))}u.isMDXComponent=!0}}]);