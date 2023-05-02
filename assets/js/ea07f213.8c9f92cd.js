"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[440],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),h=i,k=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return o?n.createElement(k,r(r({ref:t},d),{},{components:o})):n.createElement(k,r({ref:t},d))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2397:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7462),i=(o(7294),o(3905));const a={title:"Taktikos Consensus",slug:"taktikos",excerpt:"Taktikos Consensus"},r="Taktikos Consensus",s={unversionedId:"About/protocol-design/taktikos-consensus",id:"About/protocol-design/taktikos-consensus",title:"Taktikos Consensus",description:"How is the Topl protocol secured?",source:"@site/docs/About/6-protocol-design/8-taktikos-consensus.md",sourceDirName:"About/6-protocol-design",slug:"/About/protocol-design/taktikos",permalink:"/About/protocol-design/taktikos",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/About/6-protocol-design/8-taktikos-consensus.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Taktikos Consensus",slug:"taktikos",excerpt:"Taktikos Consensus"},sidebar:"aboutSidebar",previous:{title:"Protocol Design",permalink:"/About/protocol-design/protocol-design"},next:{title:"Transacting with Topl",permalink:"/About/protocol-design/transacting-with-topl"}},l={},c=[{value:"How is the Topl protocol secured?",id:"how-is-the-topl-protocol-secured",level:3},{value:"Background",id:"background",level:2},{value:"Long tails and slot-based consensus",id:"long-tails-and-slot-based-consensus",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"taktikos-consensus"},"Taktikos Consensus"),(0,i.kt)("h3",{id:"how-is-the-topl-protocol-secured"},"How is the Topl protocol secured?"),(0,i.kt)("p",null,"A blockchain\u2019s consensus algorithm plays a crucial role in its overall design, directly governing the rules of transaction confirmation and indirectly determining a chain\u2019s energy footprint and level of decentralization. The importance of blockchain consensus leads protocol designers to endeavor to closely balance solid fundamentals with promising advances. This is exactly what Topl\u2019s team has achieved with the creation of its proof of stake (POS) protocol, Taktikos, the first regularized Nakamoto consensus protocol."),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"There are several advantages to Nakamoto-style consensus protocols compared to those built atop of BFT (Byzantine Fault Tolerant) models:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fully dynamic.")," BFT protocols require stake lockup periods and explicit registration of participants, making them inherently less dynamic and open. In contrast, Nakamoto protocols, named after the creator of Bitcoin as the first such protocol, do not require stake lookup periods and can function with fully open and dynamic sets of participants."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reduced overhead.")," BFT protocols contrast with Nakamoto protocols in that they require explicit voting on each new block by a large number of participants\u2013each individual\u2019s vote must be shared with every other voting participant individually for every new block added. Meanwhile, Nakamoto protocols provide a secure mechanism for rotating leader election whereby each new block needs only be confirmed by the randomly chosen block producer for that round. This change in design substantially reduces the number of messages needing to be passed around merely for voting, providing more bandwidth for increased transaction throughput."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Improved resilience.")," Nakamoto protocols require a minimum of 50% + 1 honest participation to remain secure and active. As long as just over half of the stake in the system is participating honestly and not attempting to stall or corrupt the network, the system will work as designed. However, BFT protocols have a higher requirement and can be halted if, instead of 50%, a mere 33% of the system\u2019s stake decides to act dishonestly."),(0,i.kt)("p",null,"Embracing the ideas of open and collaborative innovation, Topl developed Taktikos from a common research framework first used by IOG in . As such, Taktikos inherits a strong and well-researched foundation upon which to build."),(0,i.kt)("h2",{id:"long-tails-and-slot-based-consensus"},"Long tails and slot-based consensus"),(0,i.kt)("p",null,"In order to solve the problem of network stalls and block irregularity inherent in any Nakamoto consensus protocol, Topl developed Taktikos. One of the key drawbacks of Nakamoto consensus has been high variability in the timing of block production\u2014such consensus protocols can be considered non-regular. While block time for Bitcoin is set at 10 minutes, this is only an average, and there is a long tail where a new block may not arrive for hours. While the plot below shows the block time distribution specifically for the Bitcoin chain, this form of exponential distribution for block times is a feature of all blockchains leveraging Nakamoto-style consensus."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:o(6085).Z,width:"1063",height:"729"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Probability Density Function (PDF) of block time intervals in the Bitcoin network, showing that while the average block time may only be 10 minutes (600 seconds), it is not uncommon for stalls in block production to last significantly longer.")),(0,i.kt)("p",null,"The innovation of Taktikos is the introduction of what we have dubbed local dynamic difficulty. Like other proof-of-stake consensus protocols, Taktikos is round-based, meaning that blocks are created and added in set rounds, with forgers each having a stake-dependent probability of producing a valid block to extend the chain. However, Taktikos is unique in that the probability of block creation is not constant and uses slots to act as a clock to evolve the difficulty of producing a block over time. This perturbation aims to regularize the production of new blocks so that blockchain stalls are minimized."),(0,i.kt)("p",null,"While many potential difficulty curves were considered and simulated, one curve, in particular, stands out for the chain growth and security properties it produces, the snowplow curve (below).\n",(0,i.kt)("img",{alt:"alt text",src:o(7855).Z,width:"997",height:"536"}),"\n",(0,i.kt)("em",{parentName:"p"},"The time between blocks is shown on the x-axis; the y-axis corresponds to the value of the active slot coefficient, or difficulty, at a given slot interval.")),(0,i.kt)("p",null,'The snowplow curve allows for blocks to be produced across two distinct periods, the "forging window" and the "recovery phase". The effect of this curve, with a notable discontinuity between the two periods (the cutoff), is to transform the distribution of new block production from the exponential distribution found in other protocols to a tight bell curve(-like) distribution, named the Taktikos distribution, centered on the average block time (below, right). As is explored further in Topl\u2019s technical paper on Taktikos (in submission), usage of the snowplow curve and the resulting Taktikos distribution produces four primary benefits.\n',(0,i.kt)("img",{alt:"alt text",src:o(6288).Z,width:"1757",height:"633"}),"\n",(0,i.kt)("em",{parentName:"p"},"(Left) The proportion of slots filled with at least one block as a function of network delay for both Taktikos and its primary alternative, Ouroboros Praos. (Right) Probability of block production as a function of time in seconds for Taktikos and Ouroboros Praos.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Block predictability.")," First, and perhaps most simply, Taktikos provides greater predictability in block production. By weighting block production into the forging window, Topl\u2019s consensus protocol concentrates the average time it takes for a block to be produced, giving the network greater predictability and preventing network stalls."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Increased throughput.")," Turning to the matter of throughput, the consideration becomes efficiency. First, as can be seen in the above-left figure, there is increased efficiency because of the increased proportion of non-empty blocks. Additionally, introducing a slot gap or artificial delay placed before the active forging window produces more manageable block propagation, reducing the number of network reorgs."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transaction speed and finality.")," As can be seen in the right side of the above figure, both theoretically and experimentally, Taktikos provides notably better block confirmation times when compared with similar POS protocols. Out of 100 blocks, the slowest block (99th percentile) in Taktikos will still be confirmed before even the average block (50th percentile) in competing protocols with the same security assumptions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reduced adversarial advantage.")," Finally, and perhaps most interestingly, when compared to other PoS algorithms, Taktikos minimizes the power of a network adversary. If we consider that all consensus attacks , we again see the benefit of the slot gap as an artificial network delay together with a dedicated forging window. Put simply, the artificial network delay removes any potential advantage an adversary may have as a single party not usually subject to the network delay of honest actors, and the forging window produces a protocol in which the honest majority is provided a perpetual advantage in forging power as blocks trigger blocks supercharging the block production of honest actors."))}p.isMDXComponent=!0},6085:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/block-vs-time-2771e07ecd6f0cef0ddf21a477517d68.png"},7855:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/forging-window-17cbefc111adc6b2faf5fe8450794ed8.png"},6288:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/network-delay-86ecda99cc545caa562039e46ea01299.png"}}]);