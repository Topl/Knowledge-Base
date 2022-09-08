---
title: "Local Development Environment"
slug: "deploying-a-local-test-network"
hidden: false
createdAt: "2021-03-29T20:05:56.920Z"
updatedAt: "2021-06-15T15:45:47.550Z"
---
To make it simpler to test and debut your Topl software, we provide a local Topl network designed for development. It's functionality focuses around debugging, featuring stack traces, console.log() and explicit error messages when transactions fail. 

# Quick Start

This guide will explore the basics of creating a local Topl project. 

A barebones installation allows you to create your own assets locally and run tests on a local development network.

# Docker Setup

# For Mac:
### Install Docker: 
    -  https://docs.docker.com/docker-for-mac/install/

# For Windows
### Install Docker
     - https://docs.docker.com/docker-for-windows/install/

# Run inside a docker container
  First, you need to pull the image: 
    
[block:callout]
{
  "type": "info",
  "title": "Most recent version",
  "body": "Please replace x.x.x with the most recent release found here: [Topl Release Notes](https://topl.readme.io/docs/topl-protocol-release-notes)"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "docker pull toplprotocol/bifrost:x.x.x",
      "language": "shell"
    }
  ]
}
[/block]
Next, you can run the image like so
[block:code]
{
  "codes": [
    {
      "code": "docker run -it --rm -p 9084:9084 -p 9085:9085 toplprotocol/bifrost:1.x.x",
      "language": "shell"
    }
  ]
}
[/block]
Command-line arguments can be passed in as follows:
[block:code]
{
  "codes": [
    {
      "code": "docker run -it --rm -p 9084:9084 -p 9085:9085 toplprotocol/bifrost:1.x.x \\\njava -jar bifrost-1.x.x.jar --apiKeyHash your_key_hash_here",
      "language": "shell"
    }
  ]
}
[/block]
This will automatically start a local node of the Topl Network with the apiKey = "topl_the_world!" with the following ports exposed: 
* `9085` TCP, used by the HTTP based JSON_RPC API
* `9084` TCP and UDP, used by the P2P protocol running the network
[block:callout]
{
  "type": "info",
  "title": "NOTE 1:",
  "body": "If you are running an Bifrost inside a Docker container, you may find it useful to mount a data volume as the client's data directory (located at /root/.bifrost inside the container) to ensure that block data is preserved between restarts and/or container life-cycles."
}
[/block]
In addition, it will start you with 10 genesis keyfiles with a default password of "test".  These keyfiles can be found [here](https://repo.topl.network/private_testnet_default.tar.gz). 

These genesis keyfiles should be stored in your development application, where they can be read using Brambl (see here for more details) [Key Management](doc:key-management)

# Jar Setup

Once you have downloaded a Bifrost jar (which can be found [here](https://github.com/Topl/Bifrost/releases/)), navigate to the location of the jar and execute the following. 


[block:code]
{
  "codes": [
    {
      "code": "java -jar <BIFROST-FILENAME>.jar --seed test --apiKeyHash 6ju8SfmsrZbjCRJ8FXH8Bgygb7L3sNo3jCfcsYeDSrC2",
      "language": "shell"
    }
  ]
}
[/block]
Note that in order to have the correct genesis keyfiles and to make JSON-RPC requests, you have to include the command line arguments. the seed will generate the genesis keyfiles provided above, while the apiKeyHash corresponds to the api-key = "topl_the_world". The api-key must be included in requests that are made to the private Bifrost node.

#Setup from Bifrost source code

To run this configuration from the Bifrost source code, navigate to your Bifrost directory and execute

[block:code]
{
  "codes": [
    {
      "code": "sbt \"runMain co.topl.BifrostApp --seed test --apiKeyHash 6ju8SfmsrZbjCRJ8FXH8Bgygb7L3sNo3jCfcsYeDSrC2\"\n",
      "language": "shell"
    }
  ]
}
[/block]