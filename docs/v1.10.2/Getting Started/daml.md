---
title: "DAML Smart Contracts"
slug: "daml"
excerpt: "Interacting with the Topl blockchain using DAML smart contracts"
hidden: false
createdAt: "2022-09-20T12:25:10.499Z"
updatedAt: "2022-09-20T14:16:02.510Z"
---
[block:api-header]
{
  "title": "Smart Contracts on the Topl Blockchain"
}
[/block]
Topl has integrated the [Digital Asset modeling Language (DAML)](https://docs.daml.com/) as its first smart contract platform for creating and using native assets on the blockchain. As a public and permissionless blockchain, we are utilized the open-source implementation of DAML to bring a secure way to create and deploy off-chain smart contracts that still maintain the same level of cryptographic proofs and asset management that you would find in on-chain smart contracts like Solidity and Rust.

[block:api-header]
{
  "title": "First Steps"
}
[/block]
### Setting up DAML

&emsp; **[Install](https://docs.daml.com/getting-started/installation.html)** the DAML SDK and VSCode editor integration.

After successfully installing the DAML SDK, the Participant Node built for facilitating transactions needs to be installed to interact with the Topl Blockchain nodes.

### Setting up a Participant Node

&emsp; The **[Daml Bifrost Module](https://github.com/Topl/daml-bifrost-module)** installs a Bifrost Participant Node and example deployable smart contract.

After installation, the participant node and example smart contract need to be compiled in order to run an instance of the off-chain contract.

### Deploying a smart contract

&emsp; **[Deploy](https://github.com/Topl/daml-bifrost-module#2-compile)** by compiling and starting the participant node.

Compiling and starting the DAML sandbox will deploy the smart contract to the participant node and allow users to interact with the smart contract. Using the DAML Navigator tool provides an easy-to-use interface for interacting with deployed contracts.
