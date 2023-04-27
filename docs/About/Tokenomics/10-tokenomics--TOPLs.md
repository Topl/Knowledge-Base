---
title: "TOPLs"
slug: "/about/tokenomics/topls"
excerpt: "TOPLs"
hidden: false
createdAt: "2021-03-25T17:37:46.969Z"
updatedAt: "2021-10-12T19:57:13.249Z"
---

# TOPLs
### Understanding Topl’s staking and governance token, the TOPL

TOPL is the staking and governance token of the Topl protocol. The ability to participate in block production via staking and the right to vote in the protocol’s governance are both gated by ownership of the TOPL.

## Staking Participation
TOPL is the native staking token for the Topl blockchain, powering our Taktikos consensus protocol. In line with the breakthroughs of Taktikos, the tokenomic design of TOPL is intended to support Topl’s vision for a community-driven, inclusive, and (as much as possible) fully compliant protocol.

**Liquid staking.** As a fully dynamic consensus mechanism, Taktikos does not depend on token lockups or the threat of slashing for its security guarantees. Because of this design choice, Topl natively supports liquid staking without the need for service providers or a separate derivative asset. Staking TOPL is inherently liquid.

**No staking minimum.** The existence of staking and sometimes even delegation minimum, means that most PoS blockchains are preventing a sizeable fraction of their potential token base from being able to participate in securing the network and, therefore, compromising the security of the entire protocol. For example, if a blockchain’s staking token has a total market cap of $100MM, but only $60MM of those tokens are actively staking, the cost to compromise the network is not $50MM (plus $0.01), but rather only $30MM.

**Emergent Pools.** Delegation is the conventional answer to how to enable smaller token holders to participate in staking rewards for a protocol. While certainly the simplest solution, delegation does greatly increase the level of centralization and, therefore, the risk of centralized modes of failure, as it’s not uncommon to see 20-30% of a token’s total supply in a single pool. Instead of focusing on delegation, Topl once again takes advantage of its unique consensus protocol to enable a novel solution. Block production in Taktikos is divided into slots or rounds (much as it may be in a BFT protocol); during each round, each staker will be assigned one or more eligibilities to produce a block for that round. While only one staker will be able to produce a block in a round, each honest staker who is not chosen can still cryptographically publish their eligibilities to be included in the block and subsequently earn a share of the block’s rewards. This way, Topl can ensure smoother and more predictable payouts to smaller token holders without relying on the centralization offered by delegation.

## Supply Dynamics
Designed to support continued growth and adoption of the Topl ecosystem and  to incentivize active network participation by holders, the $TOPL is an inflationary token with no supply cap, powered by two complementary mechanisms in its design to align incentives positively across the Topl economy.

**Growth Inflation.** The $TOPL’s first inflation mechanism is intended to fund the continued operation of the Topl Foundation and Cooperative, the stewards of the Topl protocol and overall ecosystem. The mechanism is originally inspired by the block reward design found in Zcash, in which a portion of the block rewards is assigned to a Zcash development fund. While in Zcash, the share of block rewards to the development fund is a fixed 20%, the rate of new tokens produced to fund the Topl stewards is variable and controlled via a $TOPL holder vote (see table below).

**$TOPL Market Capitalization**|**Growth Inflation Rate**
:-----:|:-----:
<$250MM|8% - 16%
$250MM to $500MM|4% - 8%
$500MM to $1bn|2% - 4%
>$1bn|<2%

**Throughput Inflation.** Complementary to the $TOPL’s growth, inflation is a secondary, non-dilutive inflation mechanism. In effect, this second mechanism of inflation looks at the change between two epochs in blockchain’s total transaction throughput and, based on that delta, mints and distributes new $TOPL proportionally to all active $TOPL holders. If between periods n+1 has δ% more transactions than in period n, then sqrt(δ)% $TOPLs are minted and distributed through block rewards. Since this block reward is distributed proportionally to all $TOPL holders active over the previous period, we consider this inflation non-dilutive as the proportional share of all $TOPLs that an honest and active participant will have never decreases due to throughput inflation. The purpose is to further incentivize active staking on the network and discourage passive free-riding on the token’s price appreciation.
	