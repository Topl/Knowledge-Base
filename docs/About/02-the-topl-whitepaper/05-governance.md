---
title: "Governance"
slug: "governance"
excerpt: "Governance"
---

# Governance

## The Topl Cooperative

Central to Topl’s vision of creating a robust impact economy that prioritizes productive contribution is a firm foundation for governance. Without well-designed governance, the long-term vision and purpose of the project cannot be guaranteed.

Most crypto projects seeking to implement such a governance foundation adopt some combination of on-chain and off-chain voting. They then plan for all voting procedures and any associated fund dispersal to eventually be handled by a DAO.

To understand why we will introduce a new governance model, we must first address the shortcomings of traditional DAO-style setups for layer 1 protocols.

DAOs, or Decentralized Autonomous Organizations, come in three primary varieties (with the potential for hybridization):

* Smart-contract fund custodian: “The DAO” is perhaps the purest example of this DAO variety. In this variety, stakeholders pool capital into a smart contract in exchange for voting tokens. Voting tokens entitle them to vote (directly) on what to do with pooled funds and to participate in the potential returns of such investments on a pro rata basis.
* Variable tuning mechanism: Most commonly found in DeFi protocols such as Maker or Aave, a DAO-style setup can allow for the tuning of various parameters that are central to how these protocols operate, such as liquidation ratios and stability fees.
* Consensus rule validator: While DAOs are least commonly found in layer 1 protocols, a notable and long-running exception to this is Decred. The Decred blockchain uses a well-developed on-chain process of voting to approve changes to the consensus-level rules of the protocol.

Although any Topl DAO would draw from all three DAO varieties, it is not this combined functionality that has shortcomings. Rather, it is the simplicity with which they must necessarily operate. Exploring the above DAO varieties further, we see that they are consistently paired with substantially less developed off-chain procedures, such as admin-moderated discussion forums, to handle everything except final execution. The challenge for the governance of blockchains like Topl stems from the long development cycles and the repeated rounds of approval for any substantial development effort.

As is apparent from examples like Eth2 or Cosmos Stargate upgrages, the critical compromises, decisions, and work of an upgrade is done long before network validators activate a new protocol version at a predetermined block number. Both in theory and in practice, the design of DAOs as presently conceived relegates any community governance to a mere rubber stamp for decisions that have already been made and often carry too much momentum to halt without harming the project.

## The Topl Cooperative (Coop)

As an alternative to the DAO, we propose a new model of governance that we believe better addresses the realities faced by blockchain projects and more accurately solves the principal-agent problem. Upon Topl's public token launch, the Topl protocol will be governed and led through its coop.

The first and most critical difference between a coop and a DAO is that the former is intended to recognize the reality of long-term involvement by a legal entity in project custodianship and execution. By accepting this reality, the coop can implement rigorous and well-founded protocols for its own governance and relationship with the project ecosystem rather than allowing such protocols and relationships to be relegated to a footnote and unrealistically dismissed.

The Topl Coop will involve a foundation in one of several jurisdictions. While the jurisdiction chosen may affect formation and reporting requirements, the chosen jurisdiction will allow the following:

* The entity will be an "orphan", not having any capital stock or other form of capital ownership. There will be no shareholders or stockholders of the entity, only a governing board.

* The governing board of the legal entity must be able to be defined as identical to the current Executive Council of the coop, which is in turn elected by the TOPL holders.

### Coop Governance

The coop will be governed through a single-tier structure with a directly elected Governing Delegation along with a secondary Executive Council elected by and composed of members of the Governing Delegation. The purpose of this two-tier structure is to capture the viewpoint diversity that the Topl ecosystem hopes to foster while still allowing the coop to provide effective and efficient guidance to the project.

The Governing Delegation will be variable in size depending on the number of monthly active addresses on the Topl protocol, with a minimum size of 10. Growth is governed by the following equation:

$$governingDelegation= \max(10, \lceil monthlyActiveAddresses^{0.25} \rceil)$$

Meanwhile, the Executive Council will initially consist of five members: a Managing Director, plus one Director for each established Committee. At inception, the four inaugural Committees will include Protocol Design, Research, Ecosystem Growth, and Tokeneconomic Policy. Committees can be added or removed at the election of TOPL holders.

### Election Process

Voting for the Governing Delegation will be conducted off-chain but with cryptographic guarantees made available by verifiable token ownership.

Votes for the Governing Delegation will be regularly scheduled at two-year intervals, with the added possibility for snap votes to be called if necessary. A snap vote may be called by submission of a request supported by a pre-determined percentage of TOPL ownership. In the event of a snap vote, the subsequent regular vote will occur two years from the date of the snap vote (provided there is no subsequent intervening snap vote).

### Voting

In order to combat the tendency of blockchain systems to show signs of plutocratic governance, the Topl protocol will implement a form of quadratic voting in all matters.

First, those who wish to vote with their TOPLs must passs through a KYC process and register. This is a necessity because any non-linear voting process is otherwise vulnerable to Sybil attacks. Once a TOPL holder has registered their identiy and balance, they may temporarily lock up their TOPLs in exchange for a number of assignable votes according to the below formula:

$$votes=TOPLs^{1/2}$$

In this way, small token holders are given a larger vote share relative to those with larger holdings. While not fully egalitarian in the sense of achieving the standard of "one person, one vote", this system yields a hybrid between traditional state voting systems and standard tokenomic models.

## Coop and Token Holder Control

Many blockchain projects seek to eliminate (or minimize) the role of any organizational entity beyond the full set of token holders. The goal here is to resolve the potentially conflicting interests that result from the principal-agent dichotomy simply by eliminating the agent. While appealing, such an argument neglects that the realities of governance for complex projects will in one way or another produce agents. The only question is how well these agents are governed and aligned.

The Topl Coop will propose and discuss priorities for ecosystem growth and protocol development, as well as work to formulate standards and potential revisions to the project’s architecture, tokenomics, and monetary policy. The coop will be controlled by TOPL holders through annual budget submissions and approvals.

A second key activity of the coop will be to act as a supervisory body on any and all contributors and developers who receive project funds. As research and software development efforts can require extended periods of work, benefiting from multiple steps of review and reporting, such oversight will be greatly beneficial to the quality and consistency of work funded by the project.