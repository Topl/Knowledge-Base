---
title: "TOPLs"
slug: "topls"
excerpt: "TOPLs"
---

# TOPLs
### Understanding Topl’s staking and governance token, the TOPL

TOPL is the staking and governance token of the Topl protocol. The ability to participate in block production via staking and the right to vote in the protocol’s governance are both gated by ownership of the TOPL.

## Staking Participation
TOPL is the native staking token for the Topl blockchain, powering our Taktikos consensus protocol. In line with the breakthroughs of Taktikos, the tokenomic design of TOPL is intended to support Topl’s vision for a community-driven, inclusive, and fully compliant protocol.

**Liquid staking.** As a fully dynamic consensus mechanism, Taktikos does not depend on token lockups or the threat of slashing for its security guarantees. Because of this design choice, Topl natively supports liquid staking without the need for service providers or a separate derivative or synthetic asset. Staking TOPL is inherently liquid.

**No staking minimum.** The existence of staking and sometimes even delegation minimum, means that most PoS blockchains are preventing a sizeable fraction of their potential token base from being able to participate in securing the network and, therefore, compromising the security of the entire protocol as well as its accessibility. For example, if a blockchain’s staking token has a total market cap of $100MM, but only $60MM of those tokens are actively staking, the cost to compromise the network is not $50MM (plus $0.01), but rather only $30MM (again plus $0.01).

**Implicit Pools.** Delegation is the conventional answer to how to enable smaller token holders to participate in staking rewards for a protocol. While certainly the simplest solution, delegation does greatly increase the level of centralization and, therefore, the risk of centralized modes of failure, as it’s not uncommon to see 20-30% of a token’s total supply in a single pool. Instead of focusing on delegation, Topl once again takes advantage of its unique consensus protocol to enable a more robust and decentralized solution. The Topl Protocol has the ability to verifiably monitor whether or not a staker is active. At the conclusion of each epoch, block rewards are distributed on a proportional basis, ensuring that while active participation is required to receive block rewards, large holdings or centralizing stake pools are not.

## Supply Dynamics
Designed to support continued growth and adoption of the Topl ecosystem and  to incentivize active network participation by holders, the TOPL is an inflationary token with no supply cap, powered by two complementary mechanisms in its design to align incentives positively across the Topl economy.

**Growth Inflation.** TOPL’s first inflation mechanism is intended to fund the continued operation of the Topl Foundation and Cooperative, the stewards of the Topl protocol and overall ecosystem. The mechanism is originally inspired by the block reward design found in Zcash, in which a portion of the block rewards is assigned to a Zcash development fund. While in Zcash, the share of block rewards to the development fund is a fixed 20%, the rate of new tokens produced to fund the Topl stewards via this block reward is variable and controlled via a TOPL holder vote within certain proposed ranges (see table below).

**TOPL Market Capitalization**|**Growth Inflation Rate**
:-----:|:-----:
<$250MM|8% - 16%
$250MM to $500MM|4% - 8%
$500MM to $1bn|2% - 4%
>$1bn|<2%

:::info

To determine the relevant rate of rate of _growth inflation_ for any period, **fully unlocked current supply** is used. Fully unlocked current supply includes all tokens presently issued regardless of any lock up or transfer restrictions but does not include tokens planned to be minted through future block rewards or governance.

:::

In the subsquent section detailing [block rewards](./12-incentivizing-network-participation.md#block-rewards) in the Topl protocol, we will see how this allocation to the protocol stewards functions in practice. Additionally the goals and mechanisms for distributing the stewardship treasury is explored in our introduction to Topl's [governance design](./15-governance.md)

**Security Adjustment.** Complementary to TOPL’s growth inflation, the security adjustment is a secondary, **non-dilutive** inflationary (or deflationary) mechanism. In effect, this second mechanism of supply change inputs any positive price change of TOPL in LVLs from one epoch to the next and based on this change, mints and distributes new TOPL proportionally to all active TOPL holders. If in _epoch n-1_, the price of TOPL increases by a percentage $\delta$ from the price in _epoch n-2_, then $\Delta$ new additional TOPL will be distributed proportionally in _epoch n+1_ to all active stakers from _epoch n-1_. On the other hand, if the price of TOPL decreases from the prior epoch, the security adjustment will burn tokens held by stakers who are neglecting to honestly participate in consensus and block production.

$\Delta = {\delta}^2 \cdot {P}^\frac{1}{2}$

:::note

The staggering of changes in the rate of TOPL emission, e.g. an input change in _epoch n-1_ adjusting the output only by _epoch n+1_ mirrors the function of Topl's consensus protocol Taktikos and is used to ensure that the network parameters cannot be manipulated while still enabling fully liquid staking. 
:::

While growth inflation is individually dilutive but collectively beneficial-as it ensure continued robust investment in the ecosystem, the security adjustment when inflationary is both non-dilutive and collectively beneficial. First, since this block reward is distributed proportionally to all TOPL holders active over the previous period, the proportional share of all TOPLs that an honest and active participant will have never decrease due to the security adjustment.

Second, this security adjustment is named as such because its constructive purpose is to increase the security of the Topl protocol. While the economic security of a PoS blockchain is often discused in terms of the protocol's market cap, it is more accurate to correlate only the actively staked portion of a protocol's total native token with its economic security in the following way:

$$
Cost_{attack} = \begin{cases}
        Stake_{total} \cdot C_{active} \cdot (50\%+1) &\text{for Nakaomoto consensus} \\
        Stake_{total} \cdot C_{active} \cdot (33\%+1) &\text{for BFT consensus}
    \end{cases}
$$

Expressed in this way, we can see that for a given value of total stake, Topl is maximizing the cost of attacking its protocol by designing a mechanism in which any value appreciation in the TOPL is realized only to those who are actively participating in securing the network.

## Emissions Model

At launch, the Topl protocol will have 200 million TOPL in its genesis block distributed to the initial team, early backers, various community and ecosystem initiatives, and a protocol endowment.

From this initial 200MM we can model future token emissions based on the two inflation mechanims introduced above.

_plot of TOPL emissions to be inserted_