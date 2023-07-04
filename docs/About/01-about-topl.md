---
title: "About Topl"
slug: "/"
excerpt: "Topl is a new interoperable blockchain protocol that aims to create a sustainable, inclusive economy."
---
# About Topl
Topl is a new interoperable blockchain protocol that aims to create a sustainable, inclusive economy. Its mission is to disrupt existing economic systems and empower changemakers worldwide to make lasting, positive impact. Topl's modular, permissionless proof-of-stake blockchain is transparent, secure, scalable, and energy-efficient. Its technical innovations, including interoperability and UTxO efficiency, pave the way for economic system innovation by connecting builders across the Topl network. The protocol's transparency, security, and flexibility make it suitable for track and trace applications, carbon and renewable energy credit exchanges, asset tokenization and infinite other use cases. Topl's goal is to achieve fully decentralized governance and currency through its unique dual-token protocol. 

Continue exploring this Topl Knowledge Base to learn more about the Topl technology and ecosystem.

<br />

# Introduction
### *What is Topl?*

<br />
Topl believes in a better world. A world where economic growth lives in harmony with a flourishing environment. A world of positive-sum economics where systems of self-reinforcing inequity no longer undermine societies.

Topl is the infrastructure to power this new world.

To achieve this radical transformation, Topl has developed innovative web3 technology (a modular blockchain protocol) that enables the creation of new economic systems that are more sustainable and inclusive.

As a technology, Topl is a layer 0 (L0) blockchain network—designed to be highly modular and composable, supporting not only interoperability with other web3 networks but also powering multiple ledgers via a singular, secure consensus layer. The development of the Topl protocol placed two questions at the center of every decision made. How can we align our technology with Topl’s vision for the next economic transformation? How can we provide the easiest experience for builders developing their applications, tools, and platforms atop our infrastructure and for their end-users?

As an infrastructure for economic innovation, Topl solves two key challenges: 1) aligning activities that are best for society and the environment with those that are most profitable and 2) working to increase access to economic opportunity. Topl has developed its technology to empower a community of builders and changemakers to disrupt the current exploitative economic systems and replace them with economies that #buildgood in the world.

[Read more](./4-introduction-to-topl.md)

<br />

# Topl's Theory of Change
### *Topl's vision for the world*
<br />
## Positive Sum Economics

Topl’s theory of change centers around enabling the monetization of positive impact or “building good” in the world. Our technological innovation is designed to unlock new economic systems that fully account for both the positive and negative impacts of our economic actions.

Our current economic systems tear holes in the environment and our societies, leaving under-resourced governments and philanthropic organizations to patch treat the symptoms, including destabilizing wealth inequality, an increasingly hostile and unpredictable climate, the collapse of vital natural ecosystems, and large-scale labor exploitation.

To understand Topl’s theory of change, we must first recognize that all of these symptoms are acknowledged as real and problematic in current economic and financial frameworks.

> For Topl, “building good” means building the rails to unlock new economic systems that consider not only an immediate share price or short-term profit margin but also fully recognize and embrace that we live in a collective and interdependent ecosystem. And whether that ecosystem flourishes or declines is something that has fundamental effects on every single one of us.

<br />

## Exemplary Pillars
To better understand the what and how of Topl, we first move from the lofty goal of establishing a new, more sustainable, and inclusive economic system to concrete examples.

Though not exhaustive, the following examples illustrate the broad scope of opportunity for economic change that Topl can facilitate.

**Supply Chain Transparency and Resiliency**

As a first step to driving toward supply chains that are more inclusive and resilient (another way of thinking about sustainability), we must be able to reliably capture and relay relevant data around labor practices, including wages and working conditions, as well as potential environmental impacts such as deforestation or carbon emissions.

**Markets for Carbon, Markets for Impact**

Climate change is considered by many to be among the most critical threats ever to face humanity as a species. Increased weather and environmental risks are already needing to be priced in, insured against, and considered in long-term business and government planning, despite the fact that carbon and other greenhouse gas (GHG) emissions are perhaps the quintessential economic externality, a byproduct that can no longer be ignored.

Topl derives inspiration from early work done turning carbon into a tradable, monetizable asset and maintains that this model can be extended to support investment into other forms of social and environmental impact. Today, businesses and investors put money into carbon reduction and avoidance not only because it is necessary to help mitigate climate change but also because there are financial returns to be gained. Therefore, such a model can help power economically sustainable investment into areas like clean water access, biodiversity, and even gender equity.

[Read more](./5-theory-of-change.md)

<br />

# Design Philosophy
### *How did Topl design its protocol?*
<br />

## Defining “sustainable and inclusive”
There are many terms that can describe the sort of new economic reality that Topl will power with its infrastructure, but we choose root ourselves in two—sustainable and inclusive—as the most appropriate.

**Sustainable.** A system is sustainable if (and only if) it can support itself indefinitely and on its own designs. If a system diminishes something (e.g. natural capital) away, it must also be able to regenerate what is taken away for it to be considered sustainable.

**Inclusive.** To ensure inclusivity in a system, we must always pay careful attention to both barriers to entry and power dynamics. Through our blockchain technology and community of builders and changemakers, Topl seeks to build a globally inclusive economic system that transcends borders.

## Why blockchain?

Considering Topl’s theory of change and vision for the future, we are faced with the natural question of “Why blockchain?” To answer, we must first understand what makes a problem well-suited to blockchain.

In our view, a problem should have three characteristics to be well fit for this disruptive technology.

1. There is reliance on infrastructure that is outdated, under-resourced, or somehow insufficient—or a complete lack of infrastructure altogether.
2. The situation involves a diverse and dynamic set of stakeholders representing different geographies, priorities, and arrangements.
3. Interactions are strained or challenging due to a lack of trust between different participants.

[Read more](./6-protocol-design/index.md)

<br />


# Taktikos Consensus

### *How is the Topl protocol secured?*
<br />
A blockchain’s consensus algorithm plays a crucial role in its overall design, directly governing the rules of transaction confirmation and indirectly determining a chain’s energy footprint and level of decentralization. The importance of blockchain consensus leads protocol designers to endeavor to closely balance solid fundamentals with promising advances. This is exactly what Topl’s team has achieved with the creation of its proof of stake (POS) protocol, Taktikos, the first regularized Nakamoto consensus protocol.

**Block predictability.** First, and perhaps most simply, Taktikos provides greater predictability in block production. By weighting block production into the forging window, Topl’s consensus protocol concentrates the average time it takes for a block to be produced, giving the network greater predictability and preventing network stalls.

**Increased throughput.** Turning to the matter of throughput, the consideration becomes efficiency. First, there is increased efficiency because of the increased proportion of non-empty blocks. Additionally, introducing a slot gap or artificial delay placed before the active forging window produces more manageable block propagation, reducing the number of network reorgs.

**Transaction speed and finality.** Both theoretically and experimentally, Taktikos provides notably better block confirmation times when compared with similar POS protocols. Out of 100 blocks, the slowest block (99th percentile) in Taktikos will still be confirmed before even the average block (50th percentile) in competing protocols with the same security assumptions.

**Reduced adversarial advantage.** Finally, and perhaps most interestingly, when compared to other PoS algorithms, Taktikos minimizes the power of a network adversary. Put simply, the artificial network delay removes any potential advantage an adversary may have as a single party not usually subject to the network delay of honest actors, and the forging window produces a protocol in which the honest majority is provided a perpetual advantage in forging power as blocks trigger blocks supercharging the block production of honest actors.


[Read more](./6-protocol-design/8-taktikos-consensus.md)

<br />

# Transacting with Topl
### *How to build atop and interact with the Topl protocol*
<br />

## Ledger Logic
To provide a blockchain protocol capable of being both performant and featureful, Topl offers a dual-layer ledger logic system consisting of its optimized domain-specific language (DSL), Quivr, along with support for layer 2 Turing-complete smart contracts.
Beyond its functionality for Topl’s modular protocol composition, Quivr, is designed to support the most common functions required for blockchain applications without the need for fully generalized (and more complex) smart contracts.
For the limited cases where Quivr proves to be too limiting, the second half of Topl’s ledger logic system comes into play. Topl has elected to integrate the fully Turing-complete Digital Asset Modeling Language (DAML) into its protocol as a layer 2 solution.

## Quivr DSL
Paired with Topl’s UTXO ledger, the Quivr DSL can be thought of as a system of composable locks that developers can use to power the most common models of dApp functionality without needing to resort to more complex development. At launch, Quivr will support transaction locks composed of any of a dozen of the most important functions for a blockchain to provide. Support for additional functions may be added in the future based on the community's needs.

## Layer 2 Smart Contracts
In order to provide even greater flexibility and use case coverage than offered by Quivr, the Topl protocol supports a Layer 2 smart contract solution using the Turing-complete [Digital Asset Modeling Language (DAML)](https://docs.daml.com/). This open-source smart contract language is based on Haskell and, as such, is a typed, functional language. This design decision makes DAML exceptionally well suited to encouraging safer and more predictable development patterns, as well as improved code audits and analysis.

Through Topl's DAML integration, users can achieve the following:
- Write and deploy Turing-complete contracts without the substantial gas fees found in EVM-style protocols;
- Achieve privacy domain separation between the public (Layer 1) Topl Blockchain and private (Layer 2) DAML contracts;
- Support bi-directional conditionality with DAML smart contracts capable of being triggered by on-chain transactions and vice versa.

Finally, in addition to the above benefits, separating its Turing-complete smart contract layer into its own domain enables the Topl blockchain to achieve greater scalability.


## Topl Asset Model
Tokenizing non-blockchain assets, whether physical assets, financial contracts, or digital information, is a major opportunity for web3 infrastructures like Topl.

Typically, a blockchain protocol includes no guidance or support on methods of tokenization and token management, relying entirely on ad hoc smart contract implementation. Topl choose a different approach and elected to include a robust yet flexible asset model into the protocol itself.

### Asset Lifecycle
To create assets with TAM, a user must first register two distinct policies on chain, a Group Policy and a Series Policy. Through the process of registration, a user commits to certain off-chain data that will govern the properties and behaviors of associated asset tokens on-chain. These properties might include things like supply, restrictions on additional minting, or off-chain metadata These commitments to off-chain data are realized through the creation of two tokens, a Group Token and Series Token respectively, that contain verifiable evidence of the associated off-chain commitments.

### Levels of Fungibility
Because every token is linked to both a Group and a Series, Topl assets have the ability to express two levels of fungibility. Tokens can be specified to be fungible if they share a common Group Policy, if they share a common Series Policy, or if they share both a common Group Policy and Series Policy. The advantage of such a system is to enable a great level of behavioral capture by Topl’s system. Not only does TAM support standards equivalent to well known EVM standards such as ERC-20, ERC-721, and ERC-1155, but it also supports many additional behaviors beyond this.

## dApp Tooling
An SDK gives application developers an easy-to-integrate library that will both enable their application to communicate with the blockchain and carry out all necessary cryptographic functions, including hashing data and signing transactions. Paired with code samples and thorough documentation, Topl’s SDK, Brambl, offers a strong example of how to ensure a blockchain is accessible to developers.

[Read more](./6-protocol-design/9-transacting-with-topl.md)

<br />

# Tokenomics
### *An overview of Topl’s two token system, the TOPL and the LVL*
<br />
As a blockchain protocol, Topl is one of a select few chains utilizing a dual token model. The abilities to participate in block production (staking) and governance are gated by the TOPL, while transaction fees throughout the system are denominated and paid in LVLs (pronounced “levels”).

Topl’s choice to develop our own blockchain protocol allows us to correct the mistake inherent in nearly all other blockchain systems—forcing users to think about and use something as a currency without any currency properties to it. Exchange and payment are different from staking and governance, so the token design must be different too.

<br />

## TOPLs
### *Understanding Topl’s staking and governance token, TOPL*
<br />
TOPL is the staking and governance token of the Topl protocol. The ability to participate in block production via staking and the right to vote in the protocol’s governance are both gated by ownership of TOPLs.

## Staking Participation
TOPL is the native staking token for the Topl blockchain, powering our Taktikos consensus protocol. In line with the breakthroughs of Taktikos, the tokenomic design of TOPL is intended to support Topl’s vision for a community-driven, inclusive, and (as much as possible) fully compliant protocol.

**Liquid staking.** As a fully dynamic consensus mechanism, Taktikos does not depend on token lockups or the threat of slashing for its security guarantees. Because of this design choice, Topl natively supports liquid staking without the need for service providers or a separate derivative asset. Staking TOPLs is inherently liquid.

**No staking minimum.** The existence of staking and sometimes even delegation minimum, means that most PoS blockchains are preventing a sizeable fraction of their potential token base from being able to participate in securing the network and, therefore, compromising the security of the entire protocol. For example, if a blockchain’s staking token has a total market cap of $100MM, but only $60MM of those tokens are actively staking, the cost to compromise the network is not $50MM (plus $0.01), but rather only $30MM.

**Emergent Pools.** Delegation is the conventional answer to how to enable smaller token holders to participate in staking rewards for a protocol. While certainly the simplest solution, delegation does greatly increase the level of centralization and, therefore, the risk of centralized modes of failure, as it’s not uncommon to see 20-30% of a token’s total supply in a single pool. Instead of focusing on delegation, Topl once again takes advantage of its unique consensus protocol to enable a novel solution. Block production in Taktikos is divided into slots or rounds (much as it may be in a BFT protocol); during each round, each staker will be assigned one or more eligibilities to produce a block for that round. While only one staker will be able to produce a block in a round, each honest staker who is not chosen can still cryptographically publish their eligibilities to be included in the block and subsequently earn a share of the block’s rewards. This way, Topl can ensure smoother and more predictable payouts to smaller token holders without relying on the centralization offered by delegation.

## Supply Dynamics
Designed to support continued growth and adoption of the Topl ecosystem and  to incentivize active network participation by holders, $TOPL is an inflationary token with no supply cap, powered by two complementary mechanisms in its design to align incentives positively across the Topl economy.

**Growth Inflation.** TOPL’s first inflation mechanism is intended to fund the continued operation of the Topl Foundation and Cooperative, the stewards of the Topl protocol and overall ecosystem. The mechanism is originally inspired by the block reward design found in Zcash, in which a portion of the block rewards is assigned to a Zcash development fund. While in Zcash, the share of block rewards to the development fund is a fixed 20%, the rate of new tokens produced to fund the Topl stewards is variable and controlled via a TOPL holder vote (see table below).

**Throughput Inflation.** Complementary to TOPL’s growth inflation is a secondary, non-dilutive inflation mechanism. In effect, this second mechanism of inflation looks at the change between two epochs in blockchain’s total transaction throughput and, based on that delta, mints and distributes new TOPLs proportionally to all active TOPL holders. If between periods n+1 has δ% more transactions than in period n, then sqrt(δ)% TOPLs are minted and distributed through block rewards. Since this block reward is distributed proportionally to all $TOPL holders active over the previous period, we consider this inflation non-dilutive as the proportional share of all TOPLs that an honest and active participant will have never decreases due to throughput inflation. The purpose is to further incentivize active staking on the network and discourage passive free-riding on the token’s price appreciation.


[Read more](./10-tokenomics/11-TOPLs.md)