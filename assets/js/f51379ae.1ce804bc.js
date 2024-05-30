"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[977],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(a),b=n,d=u["".concat(p,".").concat(b)]||u[b]||m[b]||l;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const l={id:"BramblSc",title:"BramblSc",slug:"BramblSc",tags:["brambl","scala","sdk"]},o="BramblSc",s={unversionedId:"Developers/Software Development Kits/BramblSc",id:"Developers/Software Development Kits/BramblSc",title:"BramblSc",description:"Apparatus' Brambl SDK implemented in Scala",source:"@site/docs/Developers/06-Software Development Kits/02-BramblSc.md",sourceDirName:"Developers/06-Software Development Kits",slug:"/Developers/Software Development Kits/BramblSc",permalink:"/Developers/Software Development Kits/BramblSc",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Developers/06-Software Development Kits/02-BramblSc.md",tags:[{label:"brambl",permalink:"/tags/brambl"},{label:"scala",permalink:"/tags/scala"},{label:"sdk",permalink:"/tags/sdk"}],version:"current",sidebarPosition:2,frontMatter:{id:"BramblSc",title:"BramblSc",slug:"BramblSc",tags:["brambl","scala","sdk"]},sidebar:"developersSidebar",previous:{title:"BramblDart",permalink:"/Developers/Software Development Kits/brambldart"},next:{title:"Maven Releases",permalink:"/Developers/Maven Packages/maven"}},p={},i=[{value:"Consume with JitPack",id:"consume-with-jitpack",level:2},{value:"Consume Maven Release",id:"consume-maven-release",level:2},{value:"Develop",id:"develop",level:2},{value:"Contributing",id:"contributing",level:2}],c={toc:i};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bramblsc"},"BramblSc"),(0,n.kt)("p",null,"Apparatus' Brambl SDK implemented in Scala"),(0,n.kt)("p",null,"Multiple artifacts will be built from this repo. Some will be just for Apparatus clients and some will be shared. "),(0,n.kt)("p",null,"The artifacts generated from this repo are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"brambl-sdk"),(0,n.kt)("li",{parentName:"ul"},"crypto"),(0,n.kt)("li",{parentName:"ul"},"service-kit"),(0,n.kt)("li",{parentName:"ul"},"quivr4s")),(0,n.kt)("h2",{id:"consume-with-jitpack"},"Consume with JitPack"),(0,n.kt)("p",null,"This repo can be consumed using jitpack. Here is how:"),(0,n.kt)("p",null,"First, be sure to add jitpack to the end of the resolvers list in build.sbt. It should look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sbt"},'  resolvers ++= Seq(\n    "Typesafe Repository" at "https://repo.typesafe.com/typesafe/releases/",\n    "Sonatype Staging" at "https://s01.oss.sonatype.org/content/repositories/staging",\n    "Sonatype Snapshots" at "https://s01.oss.sonatype.org/content/repositories/snapshots/",\n    "Bintray" at "https://jcenter.bintray.com/",\n    "jitpack" at "https://jitpack.io"\n  )\n')),(0,n.kt)("p",null,"Then just add the dependency like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sbt"},'  val bramblSc =\n    "com.github.Apparatus" % "BramblSc" % "1bdc895"\n')),(0,n.kt)("p",null,"Where ",(0,n.kt)("inlineCode",{parentName:"p"},"1bdc895")," refers to a commit on this repo's main branch. This will add the artifacts for both ",(0,n.kt)("inlineCode",{parentName:"p"},"brambl-sdk")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"crypto"),".\nThen just use the dependencies like you would any other."),(0,n.kt)("h2",{id:"consume-maven-release"},"Consume Maven Release"),(0,n.kt)("p",null,"First, be sure to add Sonatype s01 releases to the end of the resolvers list in build.sbt. It should look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sbt"},'  resolvers ++= Seq(\n    "Typesafe Repository" at "https://repo.typesafe.com/typesafe/releases/",\n    "Sonatype Staging" at "https://s01.oss.sonatype.org/content/repositories/staging",\n    "Sonatype Snapshots" at "https://s01.oss.sonatype.org/content/repositories/snapshots/",\n    "Bintray" at "https://jcenter.bintray.com/",\n    "jitpack" at "https://jitpack.io",\n    "Sonatype Releases" at "https://s01.oss.sonatype.org/content/repositories/releases/"\n  )\n')),(0,n.kt)("p",null,"Then just add the dependencies for ",(0,n.kt)("inlineCode",{parentName:"p"},"brambl-sdk")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"crypto")," like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sbt"},'  val brambl-sdk =\n    "co.topl" %% "brambl-sdk" % "2.0.0-alpha1"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sbt"},'  val crypto =\n    "co.topl" %% "crypto" % "2.0.0-alpha1"\n')),(0,n.kt)("p",null,"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"2.0.0-alpha1")," with the latest released version. Then just use the dependencies like you would any other."),(0,n.kt)("h2",{id:"develop"},"Develop"),(0,n.kt)("p",null,"BramblSC is open source and can be found at: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Topl/BramblSc"},"https://github.com/Topl/BramblSc"),"."),(0,n.kt)("p",null,"To start using BramblSc, add a dependency to your Scala project."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'libraryDependencies += "co.topl" % "brambl_2.12" % "1.10.2"\n')),(0,n.kt)("p",null,":::"),(0,n.kt)("h2",{id:"contributing"},"Contributing"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Topl/BramblSc"},"Open a PR here!")))}m.isMDXComponent=!0}}]);