---
title: "Installing"
slug: "installing-1"
hidden: false
createdAt: "2021-10-12T15:59:06.168Z"
updatedAt: "2021-11-29T17:54:45.888Z"
---
#Installation Guide 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Please read the section in the SDKs and Library module around [Installing Bifrost](doc:installing-bifrost) which includes BramblSC as one of the packages included in this library."
}
[/block]
* Add the following to your build.sbt
[block:callout]
{
  "type": "info",
  "body": "Please replace x.x.x with the most recent [BramblSC release version](doc:topl-protocol-release-notes)",
  "title": "Note:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "resolvers +=  \"Sonatype OSS Staging\" at \"https://s01.oss.sonatype.org/content/repositories/staging\"\nlibraryDependencies ++= Seq(\n  \"co.topl\" %% \"brambl\" % \"x.x.x\"\n)",
      "language": "scala",
      "name": "SBT Task Install"
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
      "language": "shell",
      "name": "Download from source control"
    }
  ]
}
[/block]