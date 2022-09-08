---
title: "Installation and Importing Brambl"
slug: "brambljs-installation-guide"
hidden: false
createdAt: "2021-03-24T17:01:53.425Z"
updatedAt: "2021-09-20T20:02:16.673Z"
---
#Installation and Importing Guide

#BramblJS

## Node.js

Once you are ready and in the directory into which you will install BramblJS, go ahead and execute the following command to pull down BramblJS
[block:code]
{
  "codes": [
    {
      "code": "npm install --save brambljs",
      "language": "shell"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "If you want the latest production release, omit all version identifiers\nIf you want a specific release, pass a version identifier for BramblJS. The command below demonstrates how to download a specific version of BramblJS (please replace x.x.x with the most recent version of [BramblJS](https://github.com/Topl/BramblJS/releases)"
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "Windows Support",
  "body": "Windows support is currently in experimental mode. We are using a library that depends on node-gyp so please follow these steps here to setup your environment to be compatible with node-gyp: https://gist.github.com/jtrefry/fd0ea70a89e2c3b7779c"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "npm install --save brambljs@x.x.x",
      "language": "text"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "If you get an error running the above NPM command, you may have too old of a version of NPM.\n\nPlease visit the [Prerequisites](https://topl.readme.io/v1.3.0/docs/prerequisites) age for additional information on where to find the latest version of npm and to setup the correct environment."
}
[/block]
## Importing Brambl 
[block:code]
{
  "codes": [
    {
      "code": "const BramblJS = require('./brambljs');",
      "language": "javascript"
    }
  ]
}
[/block]
## Troubleshooting 

- **BramblJS** If you are running into a compilation error where the error message says that you need to require with NODE_MODULE_VERSION = 88, then please follow the steps above to upgrade to node.js > 15.1.0

## Compiling from Source Code: 
-  Please note that BramblJS is only compatible with Node.js version > 15.0.1
Please do the following to update your version of Node.js

### Step 1: Install NVM 
- ### Windows 
 ` wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash `
  
- ### Linux + MacOS
  ` curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash `

### Step 2: Install updated version of Node.js
 ` nvm install 15.1.0 (or most recent version of Node.js) `

### Step 3: Clone the Brambl github repository at the root level of your project
[block:code]
{
  "codes": [
    {
      "code": "git clone https://github.com/topl/BramblJS",
      "language": "shell"
    }
  ]
}
[/block]
# BramblSC
* Add the following to your build.sbt
[block:callout]
{
  "type": "info",
  "title": "Note:",
  "body": "Please replace x.x.x with the most recent [BramblSC release version](https://dash.readme.com/project/topl/v1.3.0/docs/topl-protocol-release-notes)"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "resolvers +=  \"Sonatype OSS Staging\" at \"https://s01.oss.sonatype.org/content/repositories/staging\"\nlibraryDependencies ++= Seq(\n  \"co.topl\" %% \"bramblsc\" % \"x.x.x\"\n)\n\nlibraryDependencies ++= Seq(\"co.topl\" %% \"bramblsc\" % \"x.x.x\")",
      "language": "scala"
    }
  ]
}
[/block]
## Description

Bifrost implements an JSON-RPC API layer that is accessible via HTTP using AkkA-Http. The dependency above will provide access to several Topl packages including client, topl-rpc, akka-http-rpc, and common. These packages provide needed codecs for encoding requests and decoding the response. These decoders leverage the common package heavily. This package is where all shared data types are located for the Topl protocol (definitions for Blocks, Transactions, Keyfiles, etc.).

The Rpc requests are executed using HttpRequests via the akka-http-rpc package which is a generic interface for implementing an RPC sevrer using Akka-Http that conforms to the OpenRPC standard defined at https://spec.open-rpc.org/. The client package defines a convenience Provider trait that defines the network prefix, URI, and api-key needed to access a specific provider.

## Compiling from Source Code: 
[block:code]
{
  "codes": [
    {
      "code": "git clone git@github.com:Topl/BramblSc.git",
      "language": "shell"
    }
  ]
}
[/block]