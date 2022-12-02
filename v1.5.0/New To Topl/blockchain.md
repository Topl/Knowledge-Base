---
title: "Blockchain and Commitments"
slug: "blockchain"
hidden: false
createdAt: "2021-03-30T14:40:21.822Z"
updatedAt: "2022-12-02T20:41:49.583Z"
---
A broad view of Topl might divide the world into two major parts: the blockchain and commitments

A <<glossary:Blockchain>>  is best described as an append only public ledger or database that is distributed across many computers in a network. The blockchain logs the network's state at specific times after transactions have altered the state. 

The term "block" refers to the fact that data and state are stored in sequential batches or "blocks".  "Chain" refers to the fact that each block cryptographically references its parent through a (hashed) linked-list. Each block does not store all the data in the blockchain network (it would be far too large).

The state data is stored in an abstraction called a Box. User Address data and <<glossary:Commitment>> data are stored within these Boxes. 

Each new block must be agreed upon by every node in the network. This is so everyone has the same data. For this to work, <<glossary:Blockchain>> s need a consensus mechanism. 

Topl uses a proof-of-stake <<glossary:Consensus Mechanism>> , which unlike proof-of-work <<glossary:Consensus>>  does not require large amounts of energy consumption to remain secure.

New blocks are broadcast to the nodes on the network, checked and verified, updating the state for everyone. The blockchain is Topl's public ledger, an ordered and timestamped record of transactions. This system is designed to protect against double spending and modification of previous transaction records.

Topl can handle proof of a wide range of different types of data using <<glossary:Commitment>>s. Commitments are hashed versions of the data which act as one part of a proof of data integrity since the owner must provide the original data in order to get the hashed value.