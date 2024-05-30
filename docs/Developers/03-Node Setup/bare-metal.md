---
id: install-bare-metal
title: "Bare Metal"
slug: install-bare-metal
tags:
  - Install
  - Getting started
  - sdkman
  - scala
  - jar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Definitions to know

<Tabs>
  <TabItem value="Bifrost" label="Bifrost">Bifrost is the reference client implementation of the Apparatus protocol node, written in Scala.</TabItem>
  <TabItem value="Genus" label="Genus">A service that provides a data layer between the Apparatus Blockchain and wallets, block explorers, or other dApps that require easy and well structured access to chain data.</TabItem>
</Tabs>

:::

## Linux

While Apparatus' Bifrost node can be run across any distribution or flavor of Linux the below instructions have been tested for any distros using apt as a package manager such as **Ubuntu** or any **Debian-based** distro.

### Installing Dependencies

Before getting started there are a few dependencies needed--`curl`, `zip`, and `unzip`.

If you don't have these dependencies already you can install them through:

```sh
sudo apt install curl zip unzip
```

### Installing Java

Detailed instructions for installing Java onto your device can be found directly from the main Java [site](https://www.java.com/en/download/help/linux_install.html).

However, we recommend installing the package [SDKMan](https://sdkman.io/) to simplyify both the installation of your Java environment as well as any updates for the future.

You can install SDKMan and Java by using the below.

```sh
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install java
```

### Download and Run Jar

Once you've installed Java, find the latest version of the Bifrost node via our Github, https://github.com/Topl/Project-Bifrost/releases/latest 

You can then download the latest version with `wget`, simply switching out the URL to that of your desired release.

```sh
wget https://github.com/Topl/Bifrost/releases/download/vX.X.X-alpha6/bifrost-node-2.0.0-alpha6.jar 
```
With the Jar downloaded, the node can be launched with a single line.

```sh
java -jar bifrost-node-2.0.0-alpha2.jar
```

At this point you should see your node live in the terminal. To see additional options, use --help.

```sh
--config <str>              Zero or more config files (.conf, .json, .yaml) to apply to the node.
                            Config files stack such that the last config file takes precedence. To
                            specify an internal resource, prefix the value with "resource://".
--dataDir <str>             The directory to use when saving/reading blockchain data
--debug                     An optional flag to enable debug mode on this node.
--disableGenus              Disables the Genus server and Genus gRPC services
--knownPeers <str>          A comma-delimited list of host:port values to connect to at launch
                            (i.e. 1.2.3.4:9084,5.6.7.8:9084)
--logbackFile <str>         An optional path to a logback.xml file to override the logging
                            configuration of the node.
--orientDbDir <str>         The directory to use when saving/reading graph data
--orientDbPassword <str>    The password to use when connecting to OrientDB
--p2pBindHost <str>         The hostname to bind to for the P2P layer (i.e. localhost or 0.0.0.0)
--p2pBindPort <int>         The port to bind to for the P2P layer (i.e. 9084)
--rpcBindHost <str>         The hostname to bind to for the RPC layer (i.e. localhost or 0.0.0.0)
--rpcBindPort <int>         The port to bind to for the RPC layer (i.e. 9085)
--stakingDir <str>          The directory of the block producer's staking keys
--testnetStakerCount <int>  The number of stakers to initialize.
--testnetStakerIndex <int>  The index of the staker to launch.
--testnetTimestamp <long>   A UTC Unix epoch timestamp (ms) to use when seeding a private testnet.
```

## Compiling from Source

Alterntiavely, if you need greater control over your node environment or are interested in contributing to the development of Bifrist, you can compile the node directly from source.

The Bifrost repository can be cloned from https://github.com/Topl/Bifrost and compiled by running ``sbt complile`` after all dependencies have been installed.

## Windows

While Apparatus' node cannot yet be run natively on Windows devices. Bifrost can be installed and run using the Windows Subsystem for Linux (WSL).

Detailed instructions for installing and configuring WSL [here](https://learn.microsoft.com/en-us/windows/wsl/install).

Once you have completed setting up your WSL environment, you can simply follow the instructions for Linux above inside your Linux subsystem.