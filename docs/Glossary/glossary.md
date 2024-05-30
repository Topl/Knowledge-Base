---
id: glossary
title: "Glossary"
slug: "glossary"
excerpt: "Helpful terms and definitions relevant to the Apparatus protocol and web3 in general."
---
import apparatusCircle from '../../static/img/cropped-Circle_Original-1.png';

# Glossary
Here are a few terms and definitions relevant to both the Apparatus protocol and web3 in general.

**Items with a <img src={apparatusCircle} alt="(Apparatus-specific)" width="20" /> indicate a term that is specific to the Apparatus protocol.*

## Address
In the context of blockchain, an address is a unique digital location represented by a string of alphanumeric characters. It serves as a destination for sending or receiving cryptocurrency within the network. Each address is associated with a wallet, which is equivalent to an account in other blockchains. 

In the Apparatus protocol, addresses are single-use, meaning they are generated and used only once. This enhances security and privacy while maintaining the functionality of sending and receiving transactions.

## AES
Advanced Encryption Standard, it is a symmetric-key algorithm for encrypting and decrypting data, developed by the National Institute of Standards and Technology (NIST) and its use by the NSA led to it becoming one of the most widely used cryptographic algorithms.

## Application tiers
**Tier 0**: Traditional centralized application where verifiable claims are neither committed to nor posted to a public network. In this model, business logic is executed by the organization and wallets are not part of the application.

**Tier 1**: Traditional centralized application where verifiable claims are committed to and posted to a public network. In this model, organizations both execute business logic and administer multiple wallets to manage their on-chain assets.

**Tier 2**: Partially decentralized application where verifiable claims are committed to and posted to a public network. In this model, users become participants by maintaining their own wallets and interacting with organizations to sign transactions. Organizations are responsible for executed business logic and constructing unsigned blockchain transactions which are then sent to the user for their signature. Upon approving and signing the transaction, the user sends the signed transaction back to the organization for any further processing and broadcast to the public network.

**Tier 3**: Fully decentralized application where verifiable claims are committed to and posted to a public network. In this model, users become fully autonomous and no longer rely on the organization to construct transactions on their behalf. Organizations make available their business logic on the public network and users execute this logic to construct their own transactions, sign them, and broadcast them to the public network.

## Asset
An asset in the Apparatus Blockchain Protocol is a securely created, verified, and stored unit of value or information. It utilizes cryptography, peer-to-peer networking, and a public ledger to eliminate intermediaries. Generated through transactions, assets represent data or value stored on the blockchain.

## Asset Code
An Asset Code is a unique identifier for user issued Assets generated from the version, issuer address, and the name provided by the user.

## AST
An AST (Abstract Syntax Tree) is an abstract representation of code that captures its structure and semantics. It provides a hierarchical view of the code's syntax, breaking it down into individual nodes representing expressions, statements, and other language constructs. The AST serves as an intermediary step during compilation or interpretation, enabling analysis, optimization, and transformation of the code. By abstracting away the specific syntax details, the AST facilitates program understanding and manipulation. It is widely used in programming languages, compilers, and static analysis tools to perform tasks like code generation, refactoring, and code quality analysis.

## Bifrost <img src={apparatusCircle} alt="(Apparatus-specific)" width="20" />
Bifrost is the reference client implementation of the Apparatus protocol, written in Scala. It is designed to accomplish three primary objectives:

1. Enable the movement and investment of capital from investors in developed economies to businesses in developing economies.
2. Establish a commodity market that collateralizes a stable currency through storage and redemption mechanisms.
3. Create a reputation system and historical reference of business behavior.

With Bifrost, the Apparatus protocol aims to facilitate cross-border capital flow, foster economic growth in developing regions, provide stability through collateralized currency, and promote transparency and trust in business interactions. The Scala-based Bifrost client serves as an essential component in realizing these goals and advancing the mission of the Apparatus protocol.


## Bitcoin
Bitcoin is a cryptocurrency that was created in January 2009. It follows the ideas set out in a whitepaper (https://bitcoin.org/bitcoin.pdf) by the mysterious and pseudonymous Satoshi Nakamoto. The identity of the person or persons who created the technology is still a mystery. Bitcoin has lower transaction fees than traditional online payment mechanisms and unlike government issued currencies, it is operated by a decentralized authority. Since Bitcoin is a cryptocurrency, there are no physical bitcoins only balances kept on a public ledger that everyone has transparent access to. All bitcoin transactions are verified by a massive amount of computing power. Bitcoins are not issued or backed by any banks or governments, nor are individual bitcoins valuable as a commodity. Despite it not being legal tender, Bitcoin is very popular and has triggered the launch of hundreds of other cryptocurrencies, collectively referred to as altcoins. Bitcoin is commonly abbreviated as "BTC"

## Blockchain
In general terms, a blockchain is an immutable transaction ledger, maintained within a distributed network of peer nodes. These nodes each maintain a copy of the ledger by applying transactions that have been validated by a consensus protocol, grouped into blocks that include a hash that binds each block to the preceding block.

## Blockchain trilemma
The Blockchain Trilemma refers to the challenge in designing a blockchain protocol that simultaneously achieves decentralization, security, and scalability. It's widely believed that any two can be achieved at the expense of the third.

## Bonding Curve
A bonding curve is a mathematical function used in DeFi to establish a relationship between the price of a digital asset relative to its supply. Bonding curves adjust a token’s price based on market demand, typically in a nonlinear pattern. As more tokens are bought, the price of an asset with a limited quantity increases for each subsequent buyer.

## Brambl <img src={apparatusCircle} alt="(Apparatus-specific)" width="20" />
The Apparatus SDK. Brambl enables users to perform certain tasks, such as generating keys and mnemonics, load wallets, minting assets, and broadcasting transactions – amongst others.

## Brambl-CLI <img src={apparatusCircle} alt="(Apparatus-specific)" width="20" />
Command Line Interface (CLI) for Brambl, the Apparatus SDK.

## Burning
Burning refers to permanently removing tokens from circulation. Often used to control a token’s inflation, burning reduces supply and typically has a positive impact on a token’s value. While technically not possible in UTXO chains like Apparatus, a similar effect can be achieved by making tokens “unspendable”. In account-based blockchains like Ethereum, tokens can be destroyed through smart contracts, effectively removing them from circulation.

## Byte
The byte is a unit of digital information that most commonly consists of eight bits. 

## Byzantine Fault Tolerance (BFT)
Byzantine Fault Tolerance is the characteristic which defines a system that tolerates the class of failures that belong to the Byzantine Generals' problem. Byzantine Failure is the most difficult class of failure. It implies no restrictions, and makes no assumptions about the kind of behavior a node can have (e.g. a node can generate any kind of arbitrary data while posing as an honest actor) Byzantine Faults are the most severe and difficult to deal with. Even SpaceX was considering it as a potential requirement for their systems.

## Cartesian indexing
Cartesian indexing is a method used to map multidimensional data onto a linear array or memory space. It involves assigning unique indices to each element in a multidimensional structure based on its position in the Cartesian coordinate system. By using Cartesian indexing, the elements of the data structure can be easily accessed and manipulated using a single linear index. This approach is commonly used in various computational tasks, such as image processing, matrix operations, and data storage, where efficient and direct access to multidimensional data is required. Cartesian indexing enables efficient memory utilization, simplifies data manipulation algorithms, and facilitates operations on multidimensional data structures in a straightforward and intuitive manner.

## Command Line Interface (CLI)
A Command Line Interface (CLI) is a text-based interface used to interact with software and operating systems by inputting commands directly. In the blockchain context, it's often used to interact with nodes and execute blockchain operations.

## Consensus
Blockchains are inherently decentralized systems which consist of different actors who act differently depending on their incentives and on the information that is available to them. Whenever a new transaction gets broadcasted to the network, nodes have the option to include that transaction to their copy of their ledger or to ignore it. When the majority of the actors which comprise the network decide on a single state, consensus is achieved.

## Consensus mechanism
A consensus mechanism is a fault-tolerant mechanism that is used in blockchain systems to achieve the necessary agreement on a single data value or a single state of the network among distributed processes or multi-agent systems, such as with cryptocurrency. It is useful in record-keeping, among other things

## Cryptocurrency
A cryptocurrency is a digital or virtual currency that is secured by cryptography which makes it virtually impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on Blockchain technology. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them immune to government interference or manipulation.

## Curve25519
Curve25519 is an elliptic curve cryptography algorithm adopted by Apparatus for generating public and private key pairs and signing transactions. It provides robust security and efficient performance, making it suitable for cryptographic operations within the Apparatus blockchain. By utilizing Curve25519, Apparatus ensures the integrity and confidentiality of transactions, enabling secure communication and authentication between network participants.

## Daml
DAML (Digital Asset Modeling Language) is a higher-order contract language used to write business logic in a chain-agnostic manner. It focuses on assets, individual user definitions, and built-in privacy features. DAML provides a versatile framework for expressing complex contractual relationships and automating workflows within distributed ledger systems. It comes with pre-made front-end interfaces that can be extended to enhance the functionality of platforms like Lattice and RaaS. Similar to Cardano's Marlowe and Plutus, DAML enables the development of smart contracts and applications with a strong emphasis on security, privacy, and interoperability across different blockchain networks.

## Dion <img src={apparatusCircle} alt="(Apparatus-specific)" width="20" />
Previous version of the Apparatus protocol implemented in Bifrost.

## E2E
E2E (End-to-End) testing validates the entire software system, checking its functionality and interactions across different components and layers.

## Elliptic Curve Cryptography
Elliptic Curve Cryptography (ECC) is a powerful cryptography algorithm that utilizes the mathematics of elliptic curves for secure communication, encryption, and digital signatures. Elliptic curves are mathematical curves defined by an equation, known for their symmetry and non-linearity. ECC provides strong security with shorter key lengths compared to traditional cryptographic methods, making it efficient for applications such as secure messaging and digital payments. By leveraging the properties of elliptic curves, ECC ensures secure and efficient cryptographic operations, offering confidentiality, integrity, and authenticity in data transmission and storage.

## Emissions
Emissions in blockchains are the creation and distribution of new tokens. In Proof-of-Work, mining generates tokens through solving puzzles. Proof-of-Stake emits tokens through staking. Emissions affect supply, inflation, and value. The emission schedule is determined by protocol rules or community governance.

## Epoch
An epoch represents a predefined interval of time where specific events, actions, or updates occur. The duration and purpose of an epoch vary across blockchain protocols but commonly include activities like validator rotations, parameter adjustments, or consensus changes. By organizing actions into epochs, blockchain systems can ensure efficient coordination and facilitate the progression of events within the network. Epochs play a significant role in consensus algorithms, governance mechanisms, and protocol-specific operations, contributing to the overall functioning and stability of the decentralized system.

## Escrow
An escrow acts as a trusted intermediary for a designated account. It has the ability to fulfill financial obligations by utilizing allocated funds that are specifically set aside for such payments. The primary responsibility of an escrow is to facilitate the disbursement of funds or documents as an impartial third party in various transactions. They ensure that the contents they hold are not released until all agreed-upon conditions are met. In the context of blockchain, their role extends beyond merely transferring and holding funds for subsequent payments; instead, they engage in the exchange of public and private keys as part of a bartering process.

## ESG
Environmental, Social, and Governance criteria are a set of standards for a company’s operations that socially conscious investors use to screen potential investments. Environmental criteria consider how a company performs as a steward of nature. Social criteria examine how it manages relationships with employees, suppliers, customers, and the communities where it operates. Governance deals with a company’s leadership, executive pay, audits, internal controls, and shareholder rights.

## Ethereum
Launched in 2015, Ethereum is an open-source, blockchain-based, decentralized software platform used for its own cryptocurrency: ether. It enables Smart Contracts and Distributed Applications (ĐApps) to be built and run without any downtime, fraud, control, or interference from a third party. In addition, Ethereum is also a programming language (Turing complete) running on the blockchain, helping developers to build and publish distributed applications.

## Genesis Block
The Genesis Block is the first block in any blockchain. It is the foundation on which all other blocks are built, and it usually contains a unique message or data.

## GCP
Google cloud platform; a cloud compute platform for running servers and accessing other services

## Genus
A service that provides a data layer between analytics tools (dApps) and the Apparatus Blockchain to be used for data analytics and other use cases where querying the blockchain is necessary.

## Hash
A hash refers to a unique fixed-size output generated by a hash function. It plays a crucial role in blockchain technology by providing a digital fingerprint of blocks, transactions, and other data stored on the blockchain. Hashes ensure the integrity of blockchain data, as even a small change in the input data would produce a completely different hash output. This property makes hashes useful for verifying the integrity of blocks, detecting any tampering attempts, and linking blocks together in a secure and immutable manner. By including hashes in the blockchain, it becomes practically impossible to modify past data without detection, enhancing the security and trustworthiness of the distributed ledger.

## HD-KES
HD-KES (Hierarchical Deterministic Key Evolving Signature) is a mechanism designed to extend the time-to-live of an underlying Key Evolving Signature (KES) scheme. It addresses the challenge of balancing header size and network latency. By utilizing a hierarchical deterministic approach, HD-KES ensures the generation of new and secure keys over time, enhancing the security and longevity of the underlying KES scheme. This mechanism is particularly relevant in blockchain systems where the efficient management of cryptographic keys is essential for maintaining network security and performance.

## HD Wallet 
Hierarchical Deterministic (HD) Wallet is a type of digital wallet that generates a hierarchical tree-like structure of private/public keys (addresses) from a single, master seed. This allows the creation of multiple addresses for transactions, improving privacy and organization.

## Hexadecimal
Hexadecimal refers to a base-16 numbering system commonly used to represent data such as addresses, transaction hashes, and other cryptographic values. It provides a concise and readable format for expressing and manipulating binary information within blockchain networks.

## JSON-RPC
JSON-RPC is a remote procedure call protocol encoded in JSON. It is similar to the XML-RPC protocol, defining only a few types and commands. JSON-RPC allows for notifications (data sent to the server that does not require a response) and for multiple calls to be sent to the server which may be answered asynchronously. 

## KES
KES (Key-Evolving Signature) is a mechanism utilized in the Ouroboros proof-of-stake blockchain protocol to secure the chain selection process. It involves the generation and periodic update of cryptographic key pairs, consisting of a public key and a corresponding private key. The key pairs are used for signing and verifying blocks within the protocol. The KES mechanism ensures that the keys evolve over time, making it computationally infeasible for an attacker to forge signatures after a certain period. By regularly updating the keys, the security of the blockchain network is enhanced, preventing long-term attacks and ensuring the integrity of the chain selection process in a proof-of-stake consensus algorithm.

## LDD
LDD (Local Dynamic Difficulty) is a mechanism that adjusts the block production eligibility threshold in real-time based on network conditions. It ensures a stable and efficient block production process by adapting to changes in computing power and network congestion.

## Measurement, Reporting, and Verification (MRV)
Measurement, Reporting, and Verification (MRV) is a process used in various fields, including environmental sustainability and finance. It involves measuring and quantifying data, reporting the results, and verifying the accuracy of the information. MRV ensures transparency, accountability, and trust by providing a standardized framework for monitoring and assessing performance, compliance, and impact. This systematic approach enables organizations and stakeholders to track progress, make informed decisions, and demonstrate their commitment to responsible practices.

## Merkle Trees
In cryptography and computer science, a hash tree or Merkle tree is a tree in which every "leaf" (node) is labeled with the cryptographic hash of a data block, and every node that is not a leaf (called a branch, inner node, or inode) is labeled with the cryptographic hash of the labels of its child nodes. A hash tree allows efficient and secure verification of the contents of a large data structure. A hash tree is a generalization of a hash list and a hash chain.

## Nakamoto Consensus
An incentive-driven, probabilistic consensus algorithm where chain extension eligibility is determined via a race condition, originally presented in the Bitcoin whitepaper.

## Nodes
Nodes are the machines that store and maintain the state of the Apparatus Blockchain. They play a crucial role in the decentralized network by communicating with each other to share information about the blockchain state and any new updates. The collective network formed by these nodes is what constitutes the Apparatus network. Nodes collaborate to validate transactions, propagate data across the network, and ensure the integrity and consensus of the blockchain. By participating in the network, nodes contribute to the security and decentralization of the Apparatus Blockchain, creating a robust and resilient system for storing and processing data.

## P2PKH
P2PKH (Pay to Public Key Hash) is a basic instruction on the blockchain that signifies "pay to this Apparatus address." It is a commonly used transaction script in blockchain systems. When initiating a transfer of assets, P2PKH specifies the destination address where the assets should be sent. It involves the creation of a hash of the recipient's public key, which serves as the address for receiving the assets. P2PKH provides a secure and convenient way for users to transfer assets to each other within the blockchain network, ensuring the correct allocation of funds while preserving the privacy of the recipient's public key.

## Payment Key
Cryptographic key, needed by all, responsible for authorizing moving coins (or tokens)A payment key is a cryptographic key required by all users to authorize the movement of coins or tokens within a blockchain network. It serves as a form of digital signature that proves ownership and provides the necessary permission to initiate transactions. When a user wants to send coins or tokens, they use their payment key to sign the transaction, demonstrating their authority to transfer the funds. This key plays a critical role in securing and validating transactions, ensuring that only authorized individuals can move coins within the blockchain network.

## Permissionless blockchain
Permissionless blockchains are blockchains that require no permission to join and interact with. They are also known as public blockchains. Most of the time, permissionless blockchain is ideal for running and managing digital currencies. In a permissionless blockchain, a user can create a personal address and then interact with the network by either helping the network to validate transactions or simply send transactions to another user on the network. The very first type of permissionless blockchain is Bitcoin. Ethereum is also permissionless.

## POC
POC (Proof of Concept) is a simplified implementation that demonstrates the feasibility of an idea. It serves as a basic working model to validate the concept before investing further resources.

## Positive-sum economics
Positive-sum economics refers to an economic system in which overall value and wealth can increase, benefiting all participants involved. Unlike zero-sum economics, where one person's gain is another person's loss, with positive-sum economics, cooperation, innovation, and mutually beneficial transactions create opportunities for growth and shared prosperity.

## Proof-of-Stake (PoS)
Proof-of-Stake (PoS) is a consensus algorithm used in blockchain networks to achieve agreement and validate transactions. Unlike Proof-of-Work (PoW), which relies on computational power, PoS selects validators to create new blocks and secure the network based on the number of tokens they hold and "stake" as collateral. Validators are chosen to forge blocks in a deterministic manner, proportional to their stake, and typically earn rewards in the form of additional tokens for their participation. PoS is known for its energy efficiency compared to PoW, as it doesn't require extensive computational calculations. It aims to ensure network security and decentralization while providing an incentive for token holders to actively participate in the consensus process and maintain the integrity of the blockchain.

## Proof-of-Work (PoW)
Proof-of-Work (PoW) is a consensus algorithm used in blockchain networks to validate and secure transactions. In PoW, miners compete to solve complex mathematical puzzles through computational power. The first miner to find a valid solution broadcasts it to the network, which verifies the correctness of the solution. Once validated, the miner adds a new block of transactions to the blockchain and is rewarded with newly minted tokens or transaction fees. PoW is characterized by its resource-intensive nature, requiring significant computational power and energy consumption. This ensures the integrity of the blockchain by making it economically costly to manipulate or alter past transactions. PoW has been widely used in cryptocurrencies like Bitcoin and serves as a foundation for decentralized and trustless consensus mechanisms.

## Proposition
On Apparatus, the term "proposition" refers to the methodology employed to generate the public key used for signing transactions.

## Provider
A **provider** is an abstraction of a connection to a Apparatus network, providing a concise, consistent interface to standard Apparatus node functionality.

## Quadratic funding
Quadratic Funding is a mechanism for public goods funding, where community-determined match funding amplifies the contribution towards a project. The more contributors, rather than the amount contributed, results in higher match funding, balancing majority and minority interests.

## Quadratic voting
Quadratic Voting is a method of collective decision-making where participants have an allotment of votes they can distribute among options. The cost of casting votes increases quadratically, promoting a more balanced representation of preferences.

## Regenerative Finance (ReFi)
Regenerative Finance (ReFi) combines financial models with sustainability and social impact. ReFi seeks to align investments with ecological restoration and community well-being, emphasizing investments in renewable energy, regenerative agriculture, and social enterprises. It aims to generate financial returns while fostering positive change and a sustainable and inclusive economy.

## Rewards address
A rewards address is specifically when someone forges a new block, the rewards for forging that new block will go to the rewards address. Any normal address can be used, it is just a normal address that is declared by the Bifrost node that is forging blocks.

## Rollups
Rollups are Layer 2 scaling solutions that bundle multiple transactions together and submit them as a single batch to the main blockchain. By aggregating transactions off-chain, rollups enhance scalability, reduce costs, and improve transaction speeds. They leverage a separate data structure to process and validate transactions before submitting a summary to the main chain. This approach increases blockchain throughput while maintaining security and decentralization. Rollups are widely used to address scalability challenges in blockchain networks like Ethereum.

## Slashing
Slashing refers to a penalty mechanism in blockchain networks, particularly in Proof-of-Stake (PoS) consensus algorithms. It is designed to discourage malicious or negligent behavior by validators. If a validator is found to have violated the protocol rules, such as attempting double-spending or going offline for an extended period, they may face slashing. Slashing typically involves a reduction in the validator's stake or the confiscation of a portion of their tokens as a penalty. This mechanism ensures the security and integrity of the blockchain network by deterring validators from engaging in harmful actions and incentivizing them to act honestly and responsibly.

## Slot
A "slot" is the atomic time unit used for coordinating activities within an epoch. An epoch represents a larger time period composed of multiple slots. Each slot within an epoch has a fixed duration, such as 1 second for Apparatus and 2 seconds for Cardano. Slots serve as the fundamental building blocks within an epoch, providing a consistent time reference for block production, transaction validation, and network synchronization. By organizing time into slots and epochs, the Ouroboros protocol ensures the orderly progression of blockchain activities while allowing for efficient consensus and network management. Slots and epochs are key components that contribute to the secure and reliable operation of the blockchain network, enabling participants to coordinate their actions and maintain the integrity of the system over extended periods of time.

## Smart contract
A smart contract is a self-executing contract with the terms of agreement between buyer and seller being directly written into lines of code. The code and the agreements contained therein exist across a distributed, decentralized Blockchain network. The code controls the execution, and transactions are trackable and irreversible. Smart contracts permit trusted transactions and agreements to be carried out among disparate anonymous parties without the need for a central authority, legal system, or external enforcement mechanism.

## Software Developer Kit (SDK)
An SDK (Software Development Kit) is a set of tools and resources that developers use to create applications for a specific platform or framework. It includes pre-built components, APIs, and documentation to simplify the development process.

## Solarpunk
Solarpunk is an emerging cultural and aesthetic movement envisioning a future where renewable energy, sustainability, and nature intertwine. It embraces optimistic and utopian ideals, emphasizing community, green technologies, and vibrant, nature-inspired designs. Solarpunk encourages creative solutions to environmental challenges, promoting a world that thrives on decentralized renewable energy, eco-friendly infrastructure, and harmonious coexistence with nature.

## Staking
Staking refers to the process of participating in a Proof-of-Stake (PoS) blockchain network by holding and "staking" a certain amount of tokens. Stakers contribute their tokens as collateral to support network operations, such as block validation and consensus. In return for staking, participants have the opportunity to earn rewards, typically in the form of additional tokens, for their contribution to the network's security and stability. Staking involves locking up funds for a specific period, during which stakers are actively involved in validating transactions and maintaining the blockchain's integrity. Staking provides an alternative to traditional mining, offering a more energy-efficient and environmentally friendly approach to securing blockchain networks.

## Staking Key
A "staking key" is a cryptographic key used by stakers to securely extend the blockchain. It enables stakers to participate in block production and validation, ensuring the integrity and security of the network.

## Taktikos <img src={apparatusCircle} alt="(Apparatus-specific)" width="20" />
The regularized Nakamoto-style proof-of-stake consensus algorithm that powers the Apparatus protocol. The Taktikos staking mechanism reduces variance in the distribution of time intervals between blocks by means of a time-varying leader election process. This quality of regularization significant improvements for transaction throughput and finality guarantees in a proof-of-stake protocol.

## Tetra <img src={apparatusCircle} alt="(Apparatus-specific)" width="20" />
Next major release of Apparatus protocol. Introduces Taktikos and additional features (exUTxO, event sourcing, CPE refactor)

## Token Generation Event (TGE)
The Token Generation Event, or TGE, is synonymous with the genesis block creation and represents the launch of the chain’s mainnet.

## Apparatus blockchain address <img src={apparatusCircle} alt="(Apparatus-specific)" width="20" />
A unique alphanumeric sequence used in the Apparatus blockchain network, similar to an email address. It is encoded using the Base58 encoding scheme. The Apparatus address serves as a specific destination on the network where Apparatus cryptocurrency can be sent. When making transactions on the Apparatus network, individuals share their Apparatus addresses to send and receive funds. For instance, if you want to transact with your friend Bob on the Apparatus network, Bob will provide you with his Apparatus address, enabling you to send cryptocurrency to him using that address. Apparatus addresses facilitate secure and convenient transactions within the Apparatus blockchain ecosystem.

## Transaction
A "transaction" refers to the exchange of crypto-assets recorded on the blockchain. It relies on the blockchain's state for validity and offers security and transparency. On-chain transactions are immutable once verified and recorded but may involve fees and slower processing times.

## Transaction fees
Transaction fees on the Apparatus network are charges incurred by users when they perform transactions on the blockchain. Forgers, who validate and bundle transactions into blocks, receive a block reward and the accumulated transaction fees as compensation for their services. The current transaction fee is set at 1 LVL, but as decentralization progresses, the fee will be determined by the market value of the transaction. Transaction fees play a vital role in incentivizing forgers and maintaining the security and integrity of the Apparatus blockchain network.

## Treasury
A treasury is a fund controlled by a blockchain protocol. It holds native tokens for various purposes like funding development, marketing, and community initiatives. Decisions on fund allocation are made through community governance mechanisms. It promotes self-sustainability and decentralized decision-making.

## TTL
TTL stands for "time to live" and refers to the duration during which a piece of data remains valid or active. It represents the lifespan or expiration period of data within a system or network. Once the TTL of data expires, it is considered outdated or no longer valid. The concept of TTL is commonly used in various contexts, including caching mechanisms, network protocols, and data management systems. By setting a specific TTL value, administrators can control how long data remains in circulation before it needs to be refreshed or updated. TTL ensures the efficient management of data and helps maintain the accuracy and timeliness of information within a system.

## UTxO
UTxO stands for "Unspent Transaction Output" and refers to an accounting mechanism used in blockchains to enforce transaction uniqueness and track the ownership of digital assets. In the UTxO model, each transaction output represents a specific amount of cryptocurrency that has been assigned to a recipient. These outputs serve as inputs for future transactions, where they are spent or consumed.

When a transaction is created, it references one or more UTxOs as its inputs, specifying which outputs from previous transactions will be spent. The sum of the spent UTxOs must be equal to or greater than the desired transaction amount. Once a transaction is validated and included in a block, the referenced UTxOs are marked as spent and cannot be used again in subsequent transactions.

The UTxO model provides a transparent and efficient way to verify the authenticity and ownership of digital assets on the blockchain. It ensures that each transaction input refers to valid and unspent outputs, preventing double spending and maintaining the integrity of the blockchain's transaction history.

## VM
A virtual machine (VM) is an execution environment where code runs. It emulates a computer system and provides resources for program execution, such as memory and processing power. VMs offer isolation and flexibility for running code in various scenarios.

## VRF
Verifiable Random Function (VRF) is a cryptographic mechanism used for leader election in Ouroboros proof-of-stake. It generates a random value and provides a proof of correctness. VRF ensures fairness in leader selection and allows independent verification.

## Wallet
A wallet in the context of blockchain is a digital tool that allows users to store, manage, and transact their digital currency. It interacts with the user's blockchain of choice and provides ownership of the assets through private keys.
