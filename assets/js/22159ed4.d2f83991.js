"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1557],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var a=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),h=i,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||n;return o?a.createElement(m,r(r({ref:t},p),{},{components:o})):a.createElement(m,r({ref:t},p))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,r=new Array(n);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<n;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7378:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=o(7462),i=(o(7294),o(3905));const n={title:"Transacting with Topl",slug:"transacting-with-topl",excerpt:"Transacting with Topl",hidden:!1,createdAt:"2021-03-25T17:37:46.969Z",updatedAt:"2021-10-12T19:57:13.249Z"},r="Transacting with Topl",l={unversionedId:"About/new--transacting-with-topl",id:"About/new--transacting-with-topl",title:"Transacting with Topl",description:"How to build atop and interact with the Topl protocol",source:"@site/docs/About/8-new--transacting-with-topl.md",sourceDirName:"About",slug:"/About/transacting-with-topl",permalink:"/docs/About/transacting-with-topl",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/docs/About/8-new--transacting-with-topl.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Transacting with Topl",slug:"transacting-with-topl",excerpt:"Transacting with Topl",hidden:!1,createdAt:"2021-03-25T17:37:46.969Z",updatedAt:"2021-10-12T19:57:13.249Z"},sidebar:"aboutSidebar",previous:{title:"Taktikos Consensus",permalink:"/docs/About/taktikos"},next:{title:"Tokenomics",permalink:"/docs/About/tokenomics"}},s={},c=[{value:"How to build atop and interact with the Topl protocol",id:"how-to-build-atop-and-interact-with-the-topl-protocol",level:3},{value:"Ledger Logic",id:"ledger-logic",level:2},{value:"Quivr DSL",id:"quivr-dsl",level:2},{value:"Layer 2 Smart Contracts",id:"layer-2-smart-contracts",level:2},{value:"Topl Asset Model",id:"topl-asset-model",level:2},{value:"Asset Lifecycle",id:"asset-lifecycle",level:3},{value:"Levels of Fungibility",id:"levels-of-fungibility",level:3},{value:"dApp Tooling",id:"dapp-tooling",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transacting-with-topl"},"Transacting with Topl"),(0,i.kt)("h3",{id:"how-to-build-atop-and-interact-with-the-topl-protocol"},"How to build atop and interact with the Topl protocol"),(0,i.kt)("h2",{id:"ledger-logic"},"Ledger Logic"),(0,i.kt)("p",null,"To provide a blockchain protocol capable of being both performant and featureful, Topl offers a dual-layer ledger logic system consisting of its optimized domain-specific language (DSL), Quivr, along with support for layer 2 Turing-complete smart contracts.\nBeyond its functionality for Topl\u2019s modular protocol composition, Quivr, is designed to support the most common functions required for blockchain applications without the need for fully generalized (and more complex) smart contracts.\nFor the limited cases where Quivr proves to be too limiting, the second half of Topl\u2019s ledger logic system comes into play. Topl has elected to integrate the fully Turing-complete Digital Asset Modeling Language (DAML) into its protocol as a layer 2 solution."),(0,i.kt)("h2",{id:"quivr-dsl"},"Quivr DSL"),(0,i.kt)("p",null,"Paired with Topl\u2019s UTXO ledger, the Quivr DSL can be thought of as a system of composable locks that developers can use to power the most common models of dApp functionality without needing to resort to more complex development. At launch, Quivr will support transaction locks composed of any of the following functions. Support for additional functions may be added in the future based on the community's needs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AND - used to create locks that are only satisfied if all input conditions are met."),(0,i.kt)("li",{parentName:"ul"},"OR - used to create locks that can be satisfied if any of the input conditions are met."),(0,i.kt)("li",{parentName:"ul"},"NOT - used to create locks satisfiable if the input conditions are false or not met."),(0,i.kt)("li",{parentName:"ul"},"LESS THAN / GREATER THAN / EQUAL TO - used to verify numerical values as a locking and unlocking condition."),(0,i.kt)("li",{parentName:"ul"},"EXACT MATCH - used to create locks that can only be satisfied with an exact byte match."),(0,i.kt)("li",{parentName:"ul"},"HEIGHT / TICK - used to create locks that can be satisfied only once a certain block height or slot number is reached."),(0,i.kt)("li",{parentName:"ul"},"LOCKED - provides support for permanent locking of assets as an alternative to the idea of a burn address."),(0,i.kt)("li",{parentName:"ul"},"SIGNATURE - standard private key lock whereby assets can only be spent (unlocked) with a specified private key."),(0,i.kt)("li",{parentName:"ul"},"THRESHOLD - provides support of m of n threshold signatures.")),(0,i.kt)("h2",{id:"layer-2-smart-contracts"},"Layer 2 Smart Contracts"),(0,i.kt)("p",null,"In order to provide even greater flexibility and use case coverage than offered by Quivr, the Topl protocol supports a Layer 2 smart contract solution using the Turing-complete ",(0,i.kt)("a",{parentName:"p",href:"https://docs.daml.com/"},"Digital Asset Modeling Language (DAML)"),". This open-source smart contract language is based on Haskell and, as such, is a typed, functional language. This design decision makes DAML exceptionally well suited to encouraging safer and more predictable development patterns, as well as improved code audits and analysis."),(0,i.kt)("p",null,"In 2014, the crypto space shifted from a focus on UTxO-ledger blockchains (Unspent Transaction Output), such as Bitcoin, to account-ledger blockchains, such as Ethereum. This transition was largely driven by the development of the Ethereum Virtual Machine (EVM) and by the model of smart contract execution chosen by the Ethereum team."),(0,i.kt)("p",null,"While DAML has found strong adoption in private enterprise deployments, it has not yet been integrated with any major public chains, despite numerous improvements over Solidity and other smart contract languages."),(0,i.kt)("p",null,"Through Topl's DAML integration, users can achieve the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Write and deploy Turing-complete contracts without the substantial gas fees found in EVM-style protocols;"),(0,i.kt)("li",{parentName:"ul"},"Achieve privacy domain separation between the public (Layer 1) Topl Blockchain and private (Layer 2) DAML contracts;"),(0,i.kt)("li",{parentName:"ul"},"Support bi-directional conditionality with DAML smart contracts capable of being triggered by on-chain transactions and vice versa.")),(0,i.kt)("p",null,"Finally, in addition to the above benefits, separating its Turing-complete smart contract layer into its own domain enables the Topl blockchain to achieve greater scalability."),(0,i.kt)("h2",{id:"topl-asset-model"},"Topl Asset Model"),(0,i.kt)("p",null,"Tokenizing non-blockchain assets, whether physical assets, financial contracts, or digital information, is a major opportunity for web3 infrastructures like Topl. Among the most common manner one hears blockchain being applied is to create and track digital twins of X. This idea has become so common around blockchain that it has begun to obscure the hidden complexities in accomplishing this task effectively."),(0,i.kt)("p",null,"While it may seem trivial to digitize an asset, there are a myriad of hidden assumptions regarding how such tokenization should be accomplished. We expect some things to be divisible and interchangeable while others ought to be fixed and unique, or we assume that there exist some items that can be separated and recombined while there are others whose entropy is irreversible."),(0,i.kt)("p",null,"Typically, a blockchain protocol includes no guidance or support on methods of tokenization and token management, relying entirely on ad hoc smart contract implementation. Topl choose a different approach and elected to include a robust yet flexible asset model into the protocol itself."),(0,i.kt)("h3",{id:"asset-lifecycle"},"Asset Lifecycle"),(0,i.kt)("p",null,"To create assets with TAM, a user must first register two distinct policies on chain, a Group Policy and a Series Policy. Through the process of registration, a user commits to certain off-chain data that will govern the properties and behaviors of associated asset tokens on-chain. These properties might include things like supply, restrictions on additional minting, or off-chain metadata These commitments to off-chain data are realized through the creation of two tokens, a Group Token and Series Token respectively, that contain verifiable evidence of the associated off-chain commitments.\n",(0,i.kt)("img",{parentName:"p",src:"https://1863756668-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FscvgXvB2xT3YUT8UYrBK%2Fuploads%2Fg3AOajIry5IThumA6Tee%2Fimage-20220816-025429.png?alt=media&token=e3f3e3c0-dad9-4060-83c6-737235615243",alt:"alt text"}),"\n",(0,i.kt)("em",{parentName:"p"},"View of TAM assets on the ledger. Each token bundle is owned by either Alice or Bob and each asset token references a Group Policy and a Series Policy.")),(0,i.kt)("h3",{id:"levels-of-fungibility"},"Levels of Fungibility"),(0,i.kt)("p",null,"Because every token is linked to both a Group and a Series, Topl assets have the ability to express two levels of fungibility. Tokens can be specified to be fungible if they share a common Group Policy, if they share a common Series Policy, or if they share both a common Group Policy and Series Policy. The advantage of such a system is to enable a great level of behavioral capture by Topl\u2019s system. Not only does TAM support standards equivalent to well known EVM standards such as ERC-20, ERC-721, and ERC-1155, but it also supports many additional behaviors beyond this."),(0,i.kt)("h2",{id:"dapp-tooling"},"dApp Tooling"),(0,i.kt)("p",null,"Brambl gives application developers an easy-to-integrate library that will both enable their application to communicate with the blockchain and carry out all necessary cryptographic functions, including hashing data and signing transactions. Paired with code samples and thorough documentation, Brambl offers a strong example of how to ensure a blockchain is accessible to developers."),(0,i.kt)("p",null,"To maximize the number of developers and potential dApps that can leverage Brambl, Topl will be releasing this API library for multiple development languages aiming to support 60% of mobile and web development frameworks within a year of token launch. Compared with many other blockchains teams that have only put in the effort to develop a single library (most often in JavaScript), we believe this is a strong testament to our mission of inclusivity and accessibility. "),(0,i.kt)("p",null,"As the suite of Brambl libraries was developed for the community of Topl developers, it is only appropriate that these developers have the opportunity to contribute to and modify these libraries to better fit their own requirements. As with all software comprising the Topl protocol, Brambl libraries are available as open-source under the Mozilla Public License 2.0."))}d.isMDXComponent=!0}}]);