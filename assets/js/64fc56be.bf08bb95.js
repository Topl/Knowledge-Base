"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={title:"Installing Bifrost",slug:"installing-bifrost",hidden:!1,createdAt:"2021-10-04T20:22:18.615Z",updatedAt:"2021-10-05T14:17:33.658Z"},o=void 0,r={unversionedId:"Developer/Getting Started/sdks-and-api-libraries/installing-bifrost",id:"Developer/Getting Started/sdks-and-api-libraries/installing-bifrost",title:"Installing Bifrost",description:"Overview",source:"@site/docs/Developer/Getting Started/sdks-and-api-libraries/installing-bifrost.md",sourceDirName:"Developer/Getting Started/sdks-and-api-libraries",slug:"/Developer/Getting Started/sdks-and-api-libraries/installing-bifrost",permalink:"/Knowledge-Base/docs/Developer/Getting Started/sdks-and-api-libraries/installing-bifrost",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/docs/Developer/Getting Started/sdks-and-api-libraries/installing-bifrost.md",tags:[],version:"current",frontMatter:{title:"Installing Bifrost",slug:"installing-bifrost",hidden:!1,createdAt:"2021-10-04T20:22:18.615Z",updatedAt:"2021-10-05T14:17:33.658Z"},sidebar:"developerSidebar",previous:{title:"Docker",permalink:"/Knowledge-Base/docs/Developer/Getting Started/sdks-and-api-libraries/docker"},next:{title:"Overview",permalink:"/Knowledge-Base/docs/Developer/Getting Started/sdks-and-api-libraries/overview"}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Choose your Platform",id:"choose-your-platform",level:3},{value:"Linux &amp; MacOS",id:"linux--macos",level:2},{value:"Installing Operating System Dependencies",id:"installing-operating-system-dependencies",level:4},{value:"Installing GraalVM and SBT",id:"installing-graalvm-and-sbt",level:4},{value:"Install GraalVM&#39;",id:"install-graalvm",level:4},{value:"Install SBT",id:"install-sbt",level:4},{value:"Downloading and Compiling",id:"downloading-and-compiling",level:4},{value:"Compiling the node",id:"compiling-the-node",level:4},{value:"Windows",id:"windows",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This guide will show you how to compile and install ",(0,i.kt)("inlineCode",{parentName:"p"},"bifrost")," into your operating system of choice, directly from the source code. It will enable you to interact with the ",(0,i.kt)("strong",{parentName:"p"},"Topl")," blockchain, including but not limited to sending/receiving ",(0,i.kt)("strong",{parentName:"p"},"transactions"),", minting/burning customizable ",(0,i.kt)("strong",{parentName:"p"},"assets"),", posting verifiable ",(0,i.kt)("strong",{parentName:"p"},"metadata")," into the blockchain, and so much more! "),(0,i.kt)("p",null,"[block:callout]",'\n{\n"type": "info",\n"title": "Note",\n"body": "If you want to avoid compiling the binaries yourself, you can download the latest version of Bifrost from the links below:\\n- ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/Topl/Bifrost/releases/download/v1.8.0/bifrost-1.8.0.jar"},"Bifrost"),"\\n\\nThere are newer source code available: \\n* ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Topl/Bifrost/releases/tag/v1.8.4"},"latest release"),"\\n\\nBifrost can be built and run on ",(0,i.kt)("strong",{parentName:"p"},"Windows")," and ",(0,i.kt)("strong",{parentName:"p"},"MacOS"),", but we recommend that node operators use ",(0,i.kt)("strong",{parentName:"p"},"Linux"),' to take advantage of associated performance advantages."\n}\n',"[/block]"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To set up the components, you will need: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Windows"),", ",(0,i.kt)("strong",{parentName:"li"},"MacOS"),", or ",(0,i.kt)("strong",{parentName:"li"},"Linux")," for your operating system"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"CPU")," with at least ",(0,i.kt)("strong",{parentName:"li"},"2")," cores (recommended ",(0,i.kt)("strong",{parentName:"li"},"4"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"4GB")," of RAM (recommended RAM: ",(0,i.kt)("strong",{parentName:"li"},"8GB"),") and at least ",(0,i.kt)("strong",{parentName:"li"},"20GB")," of free disk space (Recommended ",(0,i.kt)("strong",{parentName:"li"},"80GB")," of free disk space")),(0,i.kt)("h3",{id:"choose-your-platform"},"Choose your Platform"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#linux"},"Linux | MacOS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#windows"},"Windows"))),(0,i.kt)("h2",{id:"linux--macos"},"Linux & MacOS"),(0,i.kt)("p",null,"In this section, we will walk you through the process of downloading, compiling, and installing ",(0,i.kt)("inlineCode",{parentName:"p"},"bifrost")," into your ",(0,i.kt)("strong",{parentName:"p"},"Linux-based")," or ",(0,i.kt)("strong",{parentName:"p"},"Mac-OS")," operating system."),(0,i.kt)("h4",{id:"installing-operating-system-dependencies"},"Installing Operating System Dependencies"),(0,i.kt)("p",null,"To download the source code and build it, you need the following packages and tools on your Linux system: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the version control system ",(0,i.kt)("inlineCode",{parentName:"li"},"git")),(0,i.kt)("li",{parentName:"ul"},"curl"),(0,i.kt)("li",{parentName:"ul"},"unzip"),(0,i.kt)("li",{parentName:"ul"},"zip"),(0,i.kt)("li",{parentName:"ul"},"GraalVM compatible Java SDK (GraalVM 21+)"),(0,i.kt)("li",{parentName:"ul"},"the SBT Scala Compiler (version ",(0,i.kt)("inlineCode",{parentName:"li"},"1.5.5")," or above)"),(0,i.kt)("li",{parentName:"ul"},"Java 11")),(0,i.kt)("p",null,"In Redhat, Fedora, and Centos: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum update -y\nsudo yum install git curl unzip zip -y\n")),(0,i.kt)("p",null,"For Debian/Ubuntu, use the following instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update -y\nsudo apt-get install git curl unzip zip -y\n")),(0,i.kt)("p",null,"For MacOS, all necessary tools should be installed with the following packages and tools for your MacOS system:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/xcode"},"Xcode")," - The Apple Development IDE and SDK/Tools"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/xcode/features/"},"Xcode Command Line Tools"),", you can install it by typing ",(0,i.kt)("inlineCode",{parentName:"li"},"xcode-select --install")," in the terminal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://brew.sh"},"Homebrew")," - The Missing Package Manager for MacOS (or Linux)")),(0,i.kt)("h4",{id:"installing-graalvm-and-sbt"},"Installing GraalVM and SBT"),(0,i.kt)("p",null,"The fastest way to install ",(0,i.kt)("strong",{parentName:"p"},"SBT")," and ",(0,i.kt)("strong",{parentName:"p"},"GraalVM")," is to use  ",(0,i.kt)("a",{parentName:"p",href:"https://sdkman.io/"},"SDKMAN")),(0,i.kt)("p",null,"Use the following command to install ",(0,i.kt)("inlineCode",{parentName:"p"},"SDKMAN")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s "https://get.sdkman.io" | bash\nsource "$HOME/.sdkman/bin/sdkman-init.sh"\n')),(0,i.kt)("p",null,"Please follow the instructions and provide the necessary input to the installer if required. Once complete, you should have ",(0,i.kt)("inlineCode",{parentName:"p"},"SDKMAN")," installed to your system. "),(0,i.kt)("p",null,"[block:callout]",'\n{\n"type": "info",\n"title": "Note",\n"body": "',(0,i.kt)("inlineCode",{parentName:"p"},"SDKMAN")," will try to detect your shell and add itself to the environment variables. Please restart your shell/terminal after installing ",(0,i.kt)("inlineCode",{parentName:"p"},"SDKMAN"),'"\n}\n',"[/block]","\nYou can check if ",(0,i.kt)("inlineCode",{parentName:"p"},"SDKMAN")," has been installed correctly by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk version")," into the terminal. You should see something similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sdkman 5.0.0+51\n")),(0,i.kt)("h4",{id:"install-graalvm"},"Install GraalVM'"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install Graalvm using SDKMAN\n",(0,i.kt)("inlineCode",{parentName:"li"},"sdk install java 21.1.0.r11-gr1"))),(0,i.kt)("h4",{id:"install-sbt"},"Install SBT"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sbt")," is required to build Bifrost from source and may be installed by running the following commands\n",(0,i.kt)("inlineCode",{parentName:"li"},"sdk install sbt"))),(0,i.kt)("p",null,"Note that any version of sbt < ",(0,i.kt)("inlineCode",{parentName:"p"},"1.5.5")," should be able to install and switch to the required version."),(0,i.kt)("p",null,"Finally, we check if we have the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"java")," versions installed."),(0,i.kt)("p",null,"Check ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt")," version: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sbt sbtVersion\n")),(0,i.kt)("p",null,"You should see something like this "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sbt 'inspect sbtVersion'\n[info] Set current project to my_user (in build file:/Users/my_user/)\n[info] Setting: java.lang.String = 0.11.1\n[info] Description:\n[info]  Provides the version of sbt.  This setting should be not be modified.\n[info] Provided by:\n[info]  */*:sbtVersion\n[info] Defined at:\n[info]  (sbt.Defaults) Defaults.scala:68\n[info] Delegates:\n[info]  *:sbtVersion\n[info]  {.}/*:sbtVersion\n[info]  */*:sbtVersion\n[info] Related:\n[info]  */*:sbtVersion\n")),(0,i.kt)("p",null,"Check ",(0,i.kt)("inlineCode",{parentName:"p"},"java")," version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"java --version\n")),(0,i.kt)("p",null,"You should see something like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'java version "1.11.0_55"\nJava(TM) SE Runtime Environment (build 1.7.0_55-b13)\nJava HotSpot(TM) 64-Bit Server VM (build 24.55-b03, mixed mode)\n')),(0,i.kt)("p",null,"[block:callout]",'\n{\n"type": "warning",\n"title": "Important",\n"body": "Please confirm that the versions you have installed match the recommended versions above. If not, check if you have missed any of the previous steps."\n}\n',"[/block]"),(0,i.kt)("h4",{id:"downloading-and-compiling"},"Downloading and Compiling"),(0,i.kt)("p",null,"First, download Bifrost from Github"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:Topl/Bifrost.git\ncd Bifrost\ngit fetch --all --recurse-submodules --tags\n")),(0,i.kt)("p",null,"Switch the repository to the latest tagged commit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout tags/1.8.0\n")),(0,i.kt)("p",null,"[block:callout]",'\n{\n"type": "warning",\n"title": "Important",\n"body": "You can check the latest available version/tag by visiting the ',(0,i.kt)("inlineCode",{parentName:"p"},"bifrost")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Topl/Bifrost/releases"},"Github-Release")," page. At the time of writing this, the current version is ",(0,i.kt)("inlineCode",{parentName:"p"},"1.8.0"),'."\n}\n',"[/block]"),(0,i.kt)("h4",{id:"compiling-the-node"},"Compiling the node"),(0,i.kt)("p",null,"We can now build the ",(0,i.kt)("inlineCode",{parentName:"p"},"Scala-based")," ",(0,i.kt)("inlineCode",{parentName:"p"},"bifrost-node")," to produce executables. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sbt compile\n")),(0,i.kt)("p",null,"Congratulations, you have successfully installed Topl ",(0,i.kt)("inlineCode",{parentName:"p"},"bifrost")," into your Linux or MacOS system! \ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,i.kt)("h2",{id:"windows"},"Windows"),(0,i.kt)("p",null,"[block:callout]",'\n{\n"type": "warning",\n"title": "Important",\n"body": "Currently, the ',(0,i.kt)("strong",{parentName:"p"},"Windows")," installation guide is still in progress. In the meantime, we recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/"},"WSL (Windows Subsystem for Linux)")," to get a Linux environment on top of Windows. Once installed, you can use the ",(0,i.kt)("a",{parentName:"p",href:"#linux"},"Linux")," guide to install and run ",(0,i.kt)("inlineCode",{parentName:"p"},"bifrost")," within ",(0,i.kt)("strong",{parentName:"p"},"WSL"),'."\n}\n',"[/block]"))}u.isMDXComponent=!0}}]);