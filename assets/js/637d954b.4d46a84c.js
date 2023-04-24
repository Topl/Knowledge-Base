"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(y,o(o({ref:t},d),{},{components:n})):r.createElement(y,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"Install",slug:"install",hidden:!1,createdAt:"2021-08-27T19:57:21.680Z",updatedAt:"2021-10-18T20:07:14.034Z"},o="Command Line",i={unversionedId:"Developer/Topl Addresses/install",id:"Developer/Topl Addresses/install",title:"Install",description:"[block:image]",source:"@site/docs/Developer/Topl Addresses/install.md",sourceDirName:"Developer/Topl Addresses",slug:"/Developer/Topl Addresses/install",permalink:"/Knowledge-Base/docs/Developer/Topl Addresses/install",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/docs/Developer/Topl Addresses/install.md",tags:[],version:"current",frontMatter:{title:"Install",slug:"install",hidden:!1,createdAt:"2021-08-27T19:57:21.680Z",updatedAt:"2021-10-18T20:07:14.034Z"},sidebar:"developerSidebar",previous:{title:"Bibliography",permalink:"/Knowledge-Base/docs/Developer/Still have questions-/bibliography"}},s={},p=[{value:"Install Anywhere (npm)",id:"install-anywhere-npm",level:2},{value:"Dart Library",id:"dart-library",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-line"},"Command Line"),(0,a.kt)("p",null,"[block:image]",'\n{\n"images": [\n{\n"image": ','[\n"https://files.readme.io/16d2ea9-keyboard-4d5a3e1a.svg",\n"keyboard-4d5a3e1a.svg",\n320,\n320,\n"#998099"\n]',"\n}\n]\n}\n","[/block]"),(0,a.kt)("h2",{id:"install-anywhere-npm"},"Install Anywhere (npm)"),(0,a.kt)("p",null,"If you use Node.js, you can install Topl Addresses using ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install -g bip_topl")),(0,a.kt)("p",null,"However, please note that this will install the pure JavaScript implementation of Topl Addresses, which runs somewhat slower than the other options listed here. But it has the same interface, so it'll be easy to swap in another implementation later if you need a bit more speed! "),(0,a.kt)("p",null,"Once you have run the above command, don't forget to ",(0,a.kt)("inlineCode",{parentName:"p"},"require()")," it as a library! "),(0,a.kt)("p",null,"When install via npm, Topl Addresses supports a Javascript API that aims to be compatible with Node. Full compatibility is a work in progress."),(0,a.kt)("h2",{id:"dart-library"},"Dart Library"),(0,a.kt)("p",null,"You can also use Dart Bip for Topl to get the speed of the Dart VM plus the ability to extend functions. To add it to an existing project: "),(0,a.kt)("p",null,"1.) ",(0,a.kt)("a",{parentName:"p",href:"https://dart.dev/get-dart#automated-installation-and-updates"},"Install the Dart SDK"),". Make sure that its bin directory is ",(0,a.kt)("a",{parentName:"p",href:"https://katiek2.github.io/path-doc/"},"on your path"),".\n2.) Create a pubspec.yaml file like this: "),(0,a.kt)("p",null,"[block:code]",'\n{\n"codes": ','[\n{\n"code": "name: my_project\\ndev_dependencies:\\n\\tbip_topl: ^x.y.z",\n"language": "yaml"\n}\n]',"\n}\n","[/block]","\n3.) Run dart pub get"),(0,a.kt)("p",null,"5.) Learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://dart.dev/guides/language/language-tour"},"writing Dart code")," (it's easy!)"))}c.isMDXComponent=!0}}]);