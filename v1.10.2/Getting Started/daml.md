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

### Demo
Here is a demo of deploying and running an example contract to create native assets on Topl's Valhalla testnet:
[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F750042766%3Fh%3De1ddad16a3%26app_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F750042766%2Fe1ddad16a3&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1508085374-048c236ed30d60c0b435216349d11c80087fdb185d490a51da8b7237f4a2a617-d_1280&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=vimeo\" width=\"1920\" height=\"1080\" scrolling=\"no\" title=\"Vimeo embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
  "url": "https://vimeo.com/750042766/e1ddad16a3",
  "title": "Topl DAML Demo",
  "favicon": "https://f.vimeocdn.com/images_v6/favicon.ico?d76fa82b876c7ef1afa682b34073f20c726032fa",
  "image": "https://i.vimeocdn.com/video/1508085374-048c236ed30d60c0b435216349d11c80087fdb185d490a51da8b7237f4a2a617-d_1280"
}
[/block]