"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,k=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={title:"Running Bifrost",slug:"running-bifrost",excerpt:"How to run a Bifrost node",hidden:!1,createdAt:"2021-10-04T20:51:56.618Z",updatedAt:"2021-10-06T20:47:40.015Z"},i=void 0,s={unversionedId:"Developer/Getting Started/sdks-and-api-libraries/running-bifrost",id:"Developer/Getting Started/sdks-and-api-libraries/running-bifrost",title:"Running Bifrost",description:"Overview",source:"@site/docs/Developer/Getting Started/sdks-and-api-libraries/running-bifrost.md",sourceDirName:"Developer/Getting Started/sdks-and-api-libraries",slug:"/Developer/Getting Started/sdks-and-api-libraries/running-bifrost",permalink:"/Developer/Getting Started/sdks-and-api-libraries/running-bifrost",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Developer/Getting Started/sdks-and-api-libraries/running-bifrost.md",tags:[],version:"current",frontMatter:{title:"Running Bifrost",slug:"running-bifrost",excerpt:"How to run a Bifrost node",hidden:!1,createdAt:"2021-10-04T20:51:56.618Z",updatedAt:"2021-10-06T20:47:40.015Z"},sidebar:"developerSidebar",previous:{title:"Overview",permalink:"/Developer/Getting Started/sdks-and-api-libraries/overview"},next:{title:"SDKs and API Libraries",permalink:"/Developer/Getting Started/sdks-and-api-libraries"}},l={},p=[{value:"Overview",id:"overview",level:3},{value:"Network Configuration",id:"network-configuration",level:3},{value:"Bifrost node parameters",id:"bifrost-node-parameters",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This guide will show you how to run a ",(0,r.kt)("inlineCode",{parentName:"p"},"bifrost node")," on your system and some simple examples of how you can interact with the ",(0,r.kt)("strong",{parentName:"p"},"Topl")," blockchain."),(0,r.kt)("p",null,"[block:callout]",'\n{\n"type": "info",\n"title": "Note",\n"body": "This guide assumes that you have installed ',(0,r.kt)("inlineCode",{parentName:"p"},"bifrost")," onto your system. If not, you can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.topl.co/v1.4.0/docs/installing-bifrost"},"Installing Bifrost"),' guide for instructions on how to do that."\n}\n',"[/block]"),(0,r.kt)("h3",{id:"network-configuration"},"Network Configuration"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bifrost")," application has 3 network configurations to run as of writing this article."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mainnet"),": The settings that are used on the main Topl network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Valhalla"),": The settings that are used on the main public Topl testnet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Private"),": The settings that are used by Bifrost developers while working on improving Bifrost functionality")),(0,r.kt)("p",null,"You might be asking what the difference is between ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"valhalla")," and why there are two networks? To put it simply, ",(0,r.kt)("strong",{parentName:"p"},"Topl")," is an open-source blockchain and anyone is free to spin up a network based on ",(0,r.kt)("strong",{parentName:"p"},"Topl's")," software components. The ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet")," network was the first one and currently contains all of the real value of ",(0,r.kt)("strong",{parentName:"p"},"Topl"),". "),(0,r.kt)("p",null,"Testing the network's features and capabilities can be expensive and will consume real value. So we have spun up a sandbox or testnet version of the network. Instead of using real ",(0,r.kt)("inlineCode",{parentName:"p"},"poly")," tokens for transactions, you use test polys. Alternatively, you can spin up your own custom ",(0,r.kt)("strong",{parentName:"p"},"Topl")," network, but that is outside the scope of this guide."),(0,r.kt)("p",null,"To run ",(0,r.kt)("inlineCode",{parentName:"p"},"bifrost")," you enter something like this into the terminal (given that you are in the directory containing the bifrost jar file):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'java -jar bifrost-1.x.x.jar \\\n     --config path/to/config.json \\\n     --seed "test" \\\n     --forge \\ \n     --disableAuth\n')),(0,r.kt)("p",null,"To get the complete list of available options, use `java -jar bifrost-1.x.x.jar --help"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bifrost",metastring:"(v1.8.4) command line arguements","(v1.8.4)":!0,command:!0,line:!0,arguements:!0}," -c --config <str>       file path to a user defined config file\n -d --debug              Turn on debugging information\n -n --network <network>  specify preset network by name\n -s --seed <str>         string to deterministically generate keys on private and local networks\n -f --forge              enable forging as soon as the node starts\n --disableAuth           Allow the node to receive API requests without an API key\n --apiKeyHash <str>      hash of API key\n --help                  prints this command list\n")),(0,r.kt)("h2",{id:"bifrost-node-parameters"},"Bifrost node parameters"),(0,r.kt)("p",null,"[block:callout]",'\n{\n"type": "info",\n"title": "Note:",\n"body": "In this section, we will use the path ',(0,r.kt)("inlineCode",{parentName:"p"},"/home/user/topl")," to store all the ",(0,r.kt)("inlineCode",{parentName:"p"},"bifrost"),' related configuration files as an example, and please replace it with the directory you have chosen to store the files."\n}\n',"[/block]","\nWe will focus on the 7 key command-line parameters for running a node:\n",(0,r.kt)("strong",{parentName:"p"}," ",(0,r.kt)("inlineCode",{parentName:"strong"},"--config")," "),": This requires the path of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<CUSTOM>.conf")," file. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For example, if you have created a ",(0,r.kt)("inlineCode",{parentName:"p"},"<CUSTOM>.conf")," file to the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/user/topl/custom.conf"),", then the argument would look like this "),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"--config /home/user/topl/custom.conf\n"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"--debug")),": This command line parameter turns on the debugging information for the Bifrost node."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"--network")),": This expects one of the predefined config networks as an argument. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Here is an example ",(0,r.kt)("inlineCode",{parentName:"p"},"--network")," argument: "),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"--network valhalla\n")),(0,r.kt)("p",{parentName:"blockquote"},"This will begin the Bifrost node running with the Valhalla parameters. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"--seed")," "),": This expects a string to deterministically generate the keys for the genesis addresses on private and local networks. This is used primarily so that the user will have access to the polys and arbits that are attributed upon the genesis of the network. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"--forge"))," :  This does not expect an argument and will start the node forging immediately after it starts. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"--disableAuth"))," : This command line argument disables the api_key authentication allowing you to connect with your node over HTTP without configuring an API key"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"--apiKeyHash"))," : With this command you can provide a Base58 encoded hash of the value that you want to use for the apiKey. This allows for you to construct a more secure node that will require the apiKey for successful HTTP connections. "),(0,r.kt)("p",null,"In addition, let's look at some of the more important parameters that you can modify using a custom configuration file: "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"bifrost.application.dataDir")),": This expects the path to the directory where we will store the actual blockchain data like ",(0,r.kt)("strong",{parentName:"p"},"blocks"),", ",(0,r.kt)("strong",{parentName:"p"},"transactions"),", and other datatypes that can be stored on the ",(0,r.kt)("strong",{parentName:"p"},"Topl")," blockchain. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For example, if we decided that all of the files required by the ",(0,r.kt)("inlineCode",{parentName:"p"},"bifrost")," node will be in the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/user/topl/"),". Then we could create a database directory like this ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir -p /home/user/topl/db"),".\nThe directory structure would then be something like this: "),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"/home/user/topl/\n\u251c\u2500\u2500 db\n\u251c\u2500\u2500 config.conf\n1 directory, 2 files\n"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"bifrost.application.rpcApi.bindAddress")),": In this case, this expects the ",(0,r.kt)("inlineCode",{parentName:"p"},"local address")," of the machine to which to bind to. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Here is an example ",(0,r.kt)("inlineCode",{parentName:"p"},"bifrost.application.rpcApi.bindAddress")," argument:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},'bindAddress = "0.0.0.0:9085"\n')),(0,r.kt)("p",{parentName:"blockquote"},"In this case, we expect http clients in your network to connect via ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0:9085"),". In conjunction with providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"local address")," this command also sets the port that your ",(0,r.kt)("inlineCode",{parentName:"p"},"bifrost")," node will use to listen to any incoming connections. ")),(0,r.kt)("p",null,"Here is a realistic example for running ",(0,r.kt)("inlineCode",{parentName:"p"},"bifrost")," node: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'java -jar bifrost-1.3.3.jar \\\n --config /home/user/topl/customtestnet.conf \\\n --debug \\ \n -- seed "test" \\\n -- forge \\ \n -- disableAuth\n')),(0,r.kt)("p",null,"If you have everything set correctly, you should see something similar to the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"20:44:17.131| INFO  co.topl.settings.AppSettings$ - No network specified, running as private testnet.\n20:44:17.748| INFO  co.topl.network.NetworkController - Declared address: None\n20:44:17.805| INFO  co.topl.network.NetworkController - Registered Actor[akka://bifrost/user/peerSynchronizer#341653336] as the handler for List((2,Peers message), (1,GetPeers message))\n20:44:17.975| INFO  co.topl.db.LDBFactory$ - Loaded org.fusesource.leveldbjni.JniDBFactory with leveldbjni version 1.8\n20:44:18.154| INFO  co.topl.nodeView.CleanupWorker - Cleanup worker started\n20:44:18.161| INFO  co.topl.network.NetworkController - Registered Actor[akka://bifrost/user/nodeViewSynchronizer#-403724455] as the handler for List((65,Sync), (55,Inv), (22,RequestModifier), (33,Modifier))\n20:44:18.371| INFO  co.topl.nodeView.history.History -  Block 28XxAtDYfdCkEr8UyzT9f2fDWdn3Uqdu29V58qCiT8y5g appended to parent tksQdfioySWXrLbm7prosYBKze9Augu71ZXde9KuJC4Y at height 1 with score Some(100000000).\n20:44:18.392| INFO  co.topl.nodeView.state.State$ - Initializing state to watch for all public keys\n20:44:18.393| INFO  c.t.n.state.ProgramBoxRegistry$ - Initializing state with Program Box Registry\n20:44:18.404| INFO  c.t.nodeView.state.TokenBoxRegistry$ - Initializing state with Token Box Registry\n20:44:18.449| INFO  co.topl.nodeView.NodeViewHolder - NodeViewHolder publishing ready signal\n20:44:18.450| INFO  co.topl.consensus.Forger - Forger transitioning to the operational state\n20:44:18.450| INFO  co.topl.nodeView.MempoolAuditor - MemPool Auditor transitioning to the operational state\n20:44:18.450| INFO  co.topl.network.NodeViewSynchronizer - NodeViewSynchronizer transitioning to the operational state\n20:44:18.450| INFO  co.topl.network.PeerSynchronizer - PeerSynchronizer transitioning to the operational state\n20:44:18.450| INFO  co.topl.network.PeerManager - PeerManager transitioning to the operational state\n20:44:18.453| INFO  co.topl.consensus.Forger - Received a START signal, forging will commence shortly.\njava.vm.version = 11.0.11+8-jvmci-21.1-b05\njvmci.Compiler = null\n20:44:18.593| INFO  co.topl.network.NetworkController - No declared address was provided. Skipping address validation.\n20:44:18.600| INFO  co.topl.network.NetworkController - Network Controller transitioning to the operational state\n20:44:18.619| INFO  co.topl.BifrostApp - P2P protocol bound to /0.0.0.0:9084\n20:44:19.273| INFO  co.topl.BifrostApp - HTTP server bound to /0.0.0.0:9085\n")))}c.isMDXComponent=!0}}]);