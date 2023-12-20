"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1037],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),k=n,m=d["".concat(i,".").concat(k)]||d[k]||u[k]||a;return r?o.createElement(m,l(l({ref:t},c),{},{components:r})):o.createElement(m,l({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={id:"install-docker",title:"Run with Docker",tags:["Install","Getting started","docker","run"]},l=void 0,s={unversionedId:"Developers/Node Setup/install-docker",id:"Developers/Node Setup/install-docker",title:"Run with Docker",description:"Quickstart",source:"@site/docs/Developers/03-Node Setup/docker.md",sourceDirName:"Developers/03-Node Setup",slug:"/Developers/Node Setup/install-docker",permalink:"/Developers/Node Setup/install-docker",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Developers/03-Node Setup/docker.md",tags:[{label:"Install",permalink:"/tags/install"},{label:"Getting started",permalink:"/tags/getting-started"},{label:"docker",permalink:"/tags/docker"},{label:"run",permalink:"/tags/run"}],version:"current",frontMatter:{id:"install-docker",title:"Run with Docker",tags:["Install","Getting started","docker","run"]},sidebar:"developersSidebar",previous:{title:"Bare Metal",permalink:"/Developers/Node Setup/install-bare-metal"},next:{title:"Run with Helm/Kubernetes",permalink:"/Developers/Node Setup/install-k8s"}},i={},p=[{value:"Quickstart",id:"quickstart",level:2},{value:"Ubuntu",id:"ubuntu",level:2},{value:"Windows",id:"windows",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"quickstart"},"Quickstart"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir ./bifrost-data\nsudo chown  1001 ./bifrost-data\ndocker run -d --name bifrost-tetra $(pwd)/bifrost-data:/tmp/bifrost -p 9084:9084 -p 9085:9085 toplprotocol/bifrost-node:2.0.0-alpha2\ndocker ps\n")),(0,n.kt)("h2",{id:"ubuntu"},"Ubuntu"),(0,n.kt)("p",null,"Follow Docker\u2019s install instructions: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"https://docs.docker.com/engine/install/ubuntu/")," "),(0,n.kt)("p",null,"Also do the post install commands to add your user to the docker group to allow running docker commands without sudo. ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/"},"https://docs.docker.com/engine/install/linux-postinstall/")," "),(0,n.kt)("p",null,"Restart or log out and back in."),(0,n.kt)("h2",{id:"windows"},"Windows"),(0,n.kt)("p",null,"Follow Docker Desktop installation instructions: ",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"https://www.docker.com/products/docker-desktop/"),"\nI recommend using the WSL2 backend. Instructions are here: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/windows/wsl/"},"https://docs.docker.com/desktop/windows/wsl/")," "),(0,n.kt)("p",null,"Run Bifrost Docker Image Directly"),(0,n.kt)("p",null,"Find the latest Tetra image from ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/toplprotocol/bifrost-node/tags"},"https://hub.docker.com/r/toplprotocol/bifrost-node/tags")," "),(0,n.kt)("p",null,"Note: Latest is currently tagged to Dion, our previous version of Bifrost. To use Tetra, use the bifrost-node:2.x.x images."),(0,n.kt)("p",null,"Run in terminal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm -p 9084:9084 -p 9085:9085 toplprotocol/bifrost-node:2.0.0-alpha2\n")),(0,n.kt)("p",null,"Run in background"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -d --name bifrost-tetra -p 9084:9084 -p 9085:9085 toplprotocol/bifrost-node:2.0.0-alpha2\n")),(0,n.kt)("p",null,"Run with volume to persist data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir ./bifrost-data\nsudo chown  1001 ./bifrost-data\ndocker run -d --name bifrost-tetra $(pwd)/bifrost-data:/tmp/bifrost -p 9084:9084 -p 9085:9085 toplprotocol/bifrost-node:2.0.0-alpha2\n")),(0,n.kt)("p",null,"Interact with the node"),(0,n.kt)("p",null,"You can use gRPC to query the node at http://localhost:9084."))}u.isMDXComponent=!0}}]);