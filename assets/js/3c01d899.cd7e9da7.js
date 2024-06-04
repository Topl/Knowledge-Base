"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7230],{4635:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=i(4848),n=i(8453),a=(i(6540),i(8774));function o(e){let{children:t,path:i}=e;return(0,r.jsx)(a.A,{to:`https://topl.github.io/BramblSc/scaladoc/current/${i}`,target:"_blank",children:t})}const s={sidebar_position:1,title:"Getting Started",description:"Get started with the Scala Brambl SDK."},l=void 0,c={id:"Developers/Software Development Kits/getting-started",title:"Getting Started",description:"Get started with the Scala Brambl SDK.",source:"@site/docs/Developers/06-Software Development Kits/getting-started.mdx",sourceDirName:"Developers/06-Software Development Kits",slug:"/Developers/Software Development Kits/getting-started",permalink:"/Developers/Software Development Kits/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Developers/06-Software Development Kits/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started",description:"Get started with the Scala Brambl SDK."},sidebar:"developersSidebar",previous:{title:"BramblDart",permalink:"/Developers/Software Development Kits/brambldart"},next:{title:"Maven Releases",permalink:"/Developers/Maven Packages/maven"}},d={},h=[{value:"Installation",id:"installation",level:2},{value:"Quick Start",id:"quick-start",level:3},{value:"Service Kit",id:"service-kit",level:3},{value:"Other Libraries",id:"other-libraries",level:3},{value:"Contributing",id:"contributing",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.h3,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsxs)(t.p,{children:["The Scala Brambl SDK is published to ",(0,r.jsx)(t.a,{href:"https://search.maven.org/artifact/co.topl/brambl-sdk_2.13",children:"Maven Central"})," and is\nbuilt for Scala 2.13. To use it in your project, add the following to your ",(0,r.jsx)(t.code,{children:"build.sbt"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scala",metastring:'title="build.sbt"',children:'val bramblVersion = "2.0.0" // replace with the latest version\n\nlibraryDependencies += "co.topl" %% "brambl-sdk" % bramblVersion\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The list of versions can be found ",(0,r.jsx)(t.a,{href:"https://central.sonatype.com/artifact/co.topl/brambl-sdk_2.13/versions",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"service-kit",children:"Service Kit"}),"\n",(0,r.jsxs)(t.p,{children:["Wallet functionality in the Brambl SDK requires an implementation of a ",(0,r.jsx)(t.code,{children:"ServiceKit"})," which is responsible for implementing\nany un-implemented, application-specific, traits in\nthe ",(0,r.jsx)(o,{path:"co/topl/brambl/dataApi/index.html",children:(0,r.jsx)("code",{children:"DataApi"})}),"\npackage. Specifically, it handles data persistence. The SDK provides a default implementation of\nthe ",(0,r.jsx)(o,{path:"co/topl/brambl/servicekit/index.html",children:(0,r.jsx)("code",{children:"ServiceKit"})}),"\nthat is published to ",(0,r.jsx)(t.a,{href:"https://search.maven.org/artifact/co.topl/service-kit_2.13",children:"Maven Central"})," for your convenience.\nThis default implementation uses local storage and SQLite. To learn more, see ",(0,r.jsx)(t.a,{href:"https://topl.github.io/BramblSc/docs/current/service-kit/big-picture",children:"Overview of Service Kit"}),".\nTo use it in your project, add the following to your ",(0,r.jsx)(t.code,{children:"build.sbt"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scala",metastring:'title="build.sbt"',children:'val bramblVersion = "2.0.0" // replace with the latest version\n\nlibraryDependencies += "co.topl" %% "service-kit" % bramblVersion\n'})}),"\n",(0,r.jsx)(t.h3,{id:"other-libraries",children:"Other Libraries"}),"\n",(0,r.jsxs)(t.p,{children:["There are 3 other libraries relevant to the SDK; ",(0,r.jsx)(t.a,{href:"https://search.maven.org/artifact/co.topl/crypto_2.13",children:(0,r.jsx)(t.code,{children:"crypto"})}),",\n",(0,r.jsx)(t.a,{href:"https://search.maven.org/artifact/co.topl/quivr4s_2.13",children:(0,r.jsx)(t.code,{children:"quivr4s"})}),",\nand ",(0,r.jsx)(t.a,{href:"https://search.maven.org/artifact/co.topl/protobuf-fs2_2.13",children:(0,r.jsx)(t.code,{children:"protobuf"})}),". These libraries are not required to be added\nto a project since they are mainly meant to be used internally by the SDK. However, advanced users may find them useful\nto use to implement their own custom functionality in their application."]}),"\n",(0,r.jsx)(t.h2,{id:"contributing",children:"Contributing"}),"\n",(0,r.jsxs)(t.p,{children:["The Brambl SDK is completely open source and we welcome contributions. To get started, check out\nthe ",(0,r.jsx)(t.a,{href:"https://github.com/Topl/BramblSc",children:"GitHub repository"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Find more information here! ",(0,r.jsx)(t.a,{href:"https://topl.github.io/BramblSc/",children:"BramblSc Documentation"})]})})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>s});var r=i(6540);const n={},a=r.createContext(n);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);