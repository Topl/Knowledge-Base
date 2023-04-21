---
title: "Overview"
slug: "topl-overview"
excerpt: "Topl is a new interoperable blockchain protocol that aims to create a sustainable, inclusive economy."
hidden: false
createdAt: "2021-03-25T17:37:46.969Z"
updatedAt: "2021-10-12T19:57:13.249Z"
---

# Introduction
Topl believes in a better world. A world where economic growth lives in harmony with a flourishing environment. A world of positive-sum economics where systems of self-reinforcing inequity no longer undermine societies.
Topl is the infrastructure to power this new world.
To achieve this radical transformation, Topl has developed innovative web3 technology (a modular blockchain protocol) that enables the creation of new economic systems that are more sustainable and inclusive.


# Theory of Change

## Positive Sum Economics
Topl’s theory of change centers around enabling the monetization of positive impact or “building good” in the world. Our technological innovation is designed to unlock new economic systems that fully account for both the positive and negative impacts of our economic actions.
Terms like impact, sustainability, inclusivity, and social good have many interpretations. For some, these are narrow terms, firmly siloed in the realm of this or that non-profit and philanthropic endeavor or handled by a corporation’s ESG (Environmental, Social, Governance) department making net-zero commitments and increasing diversity and equity.

## Exemplary Pillars
To better understand the what and how of Topl, we first move from the lofty goal of establishing a new, more sustainable, and inclusive economic system to concrete examples.

### Supply Chain Transparency and Resiliency
Any economic system must pay close consideration to the physical supply chains that produce and move real goods for consumers around the world. 
As a first step to driving toward supply chains that are more inclusive and resilient (another way of thinking about sustainability), we must be able to reliably capture and relay relevant data around labor practices, including wages and working conditions, as well as potential environmental impacts such as deforestation, hazardous waste runoff, carbon emissions.

### Markets for Carbon, Markets for Impact
Climate change is considered by many to be among the most critical threats ever to face humanity as a species. Increased weather and environmental risks are already needing to be priced in, insured against, and considered in long-term business and government planning, despite the fact that carbon and other greenhouse gas (GHG) emissions are perhaps the quintessential economic externality, a byproduct that can no longer be ignored.


# Design Philosophy
## Defining “sustainable and inclusive”
There are many terms that can describe the sort of new economic reality that Topl will power with its infrastructure, but we choose to root ourselves incenter around two—sustainable and inclusive—as the most appropriate.

### Sustainable
A system is sustainable if (and only if) it  is designed tocan support itself indefinitely and on its own designs over many years, or, ideally, indefinitely. If a system diminishes something away (eg. natural capital), it must also be able to regenerate what is taken away for it to be considered sustainable. While we’re all familiar with the ideas of environmental sustainability, the idea of sustainability is just as important in socio-economic terms. An economic system is not sustainable if it continually creates and accelerates wealth inequality or perpetually shifts incentives for investment to the short term from the long. To be sustainable, a systemit mustneeds to actively provide the necessary support for both the environmental and social foundations on which it operates.

### Inclusive
To ensure inclusivity in a system, we must always pay careful attention to both barriers to entry and power dynamics.. Through our blockchain technology and community of builders and changemakers, Topl seeks to build a globally inclusive economic system that transcends borders. Our vision for inclusion comprises or entails? sees providing the tools necessary for full and free economic participation without regard to geography, technological access, or language.


## Why blockchain?
Considering Topl’s theory of change and vision for the future, we are faced with the natural question of “Why blockchain?” To answer, we must first understand what makes a problem well suited to blockchain.
In our view, a problem should have three characteristics to be well fit for this disruptive technology.
1. There is reliance on infrastructure that is outdated, under-resourced, or somehow insufficient—or a complete lack of infrastructure altogether.
2. The situation involves a diverse and dynamic set of stakeholders representing different geographies, priorities, and arrangements.
3. Interactions The problem are strained oris made more acute or challenging due to by a lack of trust between different participants.

A blockchain’s consensus algorithm plays a crucial role in its overall design, directly governing the rules of transaction confirmation and indirectly determining a chain’s energy footprint and level of decentralization. The importance of blockchain consensus leads protocol designers to endeavor tolook to closely balance solid fundamentals with promising advances. This is exactly what Topl’s team has achieved with the creation of its proof- of- stake (POS) protocol:, Taktikos, the first regularized Nakamoto consensus protocol.

### Background
There are several advantages to Nakamoto-style consensus protocols compared to those built atop of BFT (Byzantine Fault Tolerant) modelsmodesl:
- Fully dynamic. BFT protocols require stake lockup periods and explicit registration of participants, making them inherently less dynamic and open. In contrast, Nakamoto protocols, named after the creator of Bitcoin as the first such protocol, do not require stake lookup periods and can function with fully open and dynamic sets of participants.
- Reduced overhead. BFT protocols contrast with Nakamoto protocols in that they require explicit voting on each new block by a large number of participants–each individual’s vote mustmuch be shared with every other voting participant individually for every new block added. Meanwhile, Nakamoto protocols provide a secure mechanism for rotating leader election whereby each new block needs only be confirmed by the randomly chosen block producer for that round. This change in design substantially reduces the number of messages needing to be passed around merely for voting, providing more bandwidth for increased transaction throughput.
- Improved resilience. Nakamoto protocols require a minimum of 50% + 1 honest participation to remain secure and active. As long as just over half of the stake in the system is participating honestly and not attempting to stall or corrupt the network, the system will work as designed. However, BFT protocols have a higher requirement and can be halted if, instead of 50%, a mere 33% of the system’s stake decides to act dishonestly.

Embracing the ideas of open and collaborative innovation, Topl developed Taktikos from a common research framework first used by IOG in Ouroboros Praos. As such, Taktikos inherits a strong and well-researched foundation upon which to build.


## Long tails and slot-based consensus
In order to solve the problem of network stalls and block irregularity inherent in any Nakamoto consensus protocol, Topl developed Taktikos. One of the key drawbacks of Nakamoto consensus has been high variability in the timing of block production—such consensus protocols can be considered non-regular. While the average block time for Bitcoin is set at 10 minutes, this is only an average, and there is a long tail where a new block may not arrive for hours. While the below plot below shows the block time distribution specifically for the Bitcoin chain, this form of exponential distribution for block times is a feature of all blockchains leveraging Nakamoto-style consensus.

Block predictability. First, and perhaps most simply, Taktikos provides greater predictability in block production. By weighting block production into the forging window, Topl’s consensus protocol concentrates the average time it takes for a block to be produced, giving the network greater predictability and preventing network stalls.

Increased throughput. Turning to the matter of throughput, the consideration becomes efficiency. First, as can be seen in the above-left figure, there is increased efficiency because of the increased proportion of non-empty blocks. Additionally, introducing a slot gap or artificial delay placed before the active forging window produces more manageable block propagation, reducing the number of network reorgs.

Transaction speed and finality. As can be seen in the right side of the above figure, both theoretically and experimentally, Taktikos provides notably better block confirmation times when compared with similar POS protocols. Out of 100 blocks, the slowest block (99th percentile) in Taktikos will still be confirmed before even the average block (50th percentile) in competing protocols with the same security assumptions.

Reduced adversarial advantage. Finally, and perhaps most interestingly, when compared to other PoOS algorithms, Taktikos minimizes the power of a network adversary. If we consider that all consensus attacks can be reduced to selfish mining attacks, we again see the benefit of the slot gap as an artificial network delay together with a dedicated forging window. Put simply, the artificial network delay removes any potential advantage that an adversary may have as a single party not usually subject to the network delay of honest actors, and the forging window produces a protocol in which the honest majority is provided a perpetual advantage in forging power as blocks trigger blocks supercharging the block production of honest actors.