---
title: "Running Bifrost"
slug: "running-bifrost"
excerpt: "How to run a Bifrost node"
hidden: false
createdAt: "2021-10-04T20:51:56.618Z"
updatedAt: "2021-10-06T20:47:40.015Z"
---
### Overview

This guide will show you how to run a `bifrost node` on your system and some simple examples of how you can interact with the **Topl** blockchain.

:::info

This guide assumes that you have installed `bifrost` onto your system. If not, you can refer to [Installing Bifrost](https://docs.topl.co/Developer/Getting%20Started/sdks-and-api-libraries/installing-bifrost) guide for instructions on how to do that.

:::

### Network Configuration

The `bifrost` application has 3 network configurations to run as of writing this article.

- **Mainnet**: The settings that are used on the main Topl network.
- **Valhalla**: The settings that are used on the main public Topl testnet.
- **Private**: The settings that are used by Bifrost developers while working on improving Bifrost functionality

You might be asking what the difference is between `mainnet` and `valhalla` and why there are two networks? To put it simply, **Topl** is an open-source blockchain and anyone is free to spin up a network based on **Topl's** software components. The `mainnet` network was the first one and currently contains all of the real value of **Topl**.

Testing the network's features and capabilities can be expensive and will consume real value. So we have spun up a sandbox or testnet version of the network. Instead of using real `poly` tokens for transactions, you use test polys. Alternatively, you can spin up your own custom **Topl** network, but that is outside the scope of this guide.

To run `bifrost` you enter something like this into the terminal (given that you are in the directory containing the bifrost jar file):

```bash
java -jar bifrost-2.x.x.jar \
  --config path/to/config.json \
  --seed "test" \
  --forge \
  --disableAuth
```

To get the complete list of available options, use `java -jar bifrost-1.x.x.jar --help

```sh
 -c --config <str>       file path to a user defined config file
 -d --debug              Turn on debugging information
 -n --network <network>  specify preset network by name
 -s --seed <str>         string to deterministically generate keys on private and local networks
 -f --forge              enable forging as soon as the node starts
 --disableAuth           Allow the node to receive API requests without an API key
 --apiKeyHash <str>      hash of API key
 --help					 prints this command list
```

## Bifrost node parameters

:::tip

In this section, we will use the path `/home/user/topl` to store all the `bifrost` related configuration files as an example, and please replace it with the directory you have chosen to store the files.

:::

We will focus on the 7 key command-line parameters for running a node:
**`--config`**: This requires the path of the `<CUSTOM>.conf` file.

> For example, if you have created a `<CUSTOM>.conf` file to the path `/home/user/topl/custom.conf`, then the argument would look like this

```sh
--config /home/user/topl/custom.conf
```

**`--debug`**: This command line parameter turns on the debugging information for the Bifrost node.

**`--network`**: This expects one of the predefined config networks as an argument.
> Here is an example `--network` argument:

```sh
--network valhalla
```

This will begin the Bifrost node running with the Valhalla parameters.

**`--seed`**: This expects a string to deterministically generate the keys for the genesis addresses on private and local networks. This is used primarily so that the user will have access to the polys and arbits that are attributed upon the genesis of the network.

**`--forge`** :  This does not expect an argument and will start the node forging immediately after it starts.

**`--disableAuth`** : This command line argument disables the api_key authentication allowing you to connect with your node over HTTP without configuring an API key

**`--apiKeyHash`** : With this command you can provide a Base58 encoded hash of the value that you want to use for the apiKey. This allows for you to construct a more secure node that will require the apiKey for successful HTTP connections.

In addition, let's look at some of the more important parameters that you can modify using a custom configuration file:

**`bifrost.application.dataDir`**: This expects the path to the directory where we will store the actual blockchain data like **blocks**, **transactions**, and other datatypes that can be stored on the **Topl** blockchain.

> For example, if we decided that all of the files required by the `bifrost` node will be in the path `/home/user/topl/`. Then we could create a database directory like this `mkdir -p /home/user/topl/db`.
> The directory structure would then be something like this:

```sh
/home/user/topl/
├── db
├── config.conf
1 directory, 2 files
```

**`bifrost.application.rpcApi.bindAddress`**: In this case, this expects the `local address` of the machine to which to bind to.
> Here is an example `bifrost.application.rpcApi.bindAddress` argument:

```sh
bindAddress = "0.0.0.0:9085"
```

> In this case, we expect http clients in your network to connect via `0.0.0.0:9085`. In conjunction with providing the `local address` this command also sets the port that your `bifrost` node will use to listen to any incoming connections.

Here is a realistic example for running `bifrost` node:

```bash
java -jar bifrost-1.3.3.jar \
 --config /home/user/topl/customtestnet.conf \
 --debug \
 --seed "test" \
 --forge \
 --disableAuth
```

If you have everything set correctly, you should see something similar to the following

```sh
20:44:17.131| INFO  co.topl.settings.AppSettings$ - No network specified, running as private testnet.
20:44:17.748| INFO  co.topl.network.NetworkController - Declared address: None
20:44:17.805| INFO  co.topl.network.NetworkController - Registered Actor[akka://bifrost/user/peerSynchronizer#341653336] as the handler for List((2,Peers message), (1,GetPeers message))
20:44:17.975| INFO  co.topl.db.LDBFactory$ - Loaded org.fusesource.leveldbjni.JniDBFactory with leveldbjni version 1.8
20:44:18.154| INFO  co.topl.nodeView.CleanupWorker - Cleanup worker started
20:44:18.161| INFO  co.topl.network.NetworkController - Registered Actor[akka://bifrost/user/nodeViewSynchronizer#-403724455] as the handler for List((65,Sync), (55,Inv), (22,RequestModifier), (33,Modifier))
20:44:18.371| INFO  co.topl.nodeView.history.History -  Block 28XxAtDYfdCkEr8UyzT9f2fDWdn3Uqdu29V58qCiT8y5g appended to parent tksQdfioySWXrLbm7prosYBKze9Augu71ZXde9KuJC4Y at height 1 with score Some(100000000).
20:44:18.392| INFO  co.topl.nodeView.state.State$ - Initializing state to watch for all public keys
20:44:18.393| INFO  c.t.n.state.ProgramBoxRegistry$ - Initializing state with Program Box Registry
20:44:18.404| INFO  c.t.nodeView.state.TokenBoxRegistry$ - Initializing state with Token Box Registry
20:44:18.449| INFO  co.topl.nodeView.NodeViewHolder - NodeViewHolder publishing ready signal
20:44:18.450| INFO  co.topl.consensus.Forger - Forger transitioning to the operational state
20:44:18.450| INFO  co.topl.nodeView.MempoolAuditor - MemPool Auditor transitioning to the operational state
20:44:18.450| INFO  co.topl.network.NodeViewSynchronizer - NodeViewSynchronizer transitioning to the operational state
20:44:18.450| INFO  co.topl.network.PeerSynchronizer - PeerSynchronizer transitioning to the operational state
20:44:18.450| INFO  co.topl.network.PeerManager - PeerManager transitioning to the operational state
20:44:18.453| INFO  co.topl.consensus.Forger - Received a START signal, forging will commence shortly.
java.vm.version = 11.0.11+8-jvmci-21.1-b05
jvmci.Compiler = null
20:44:18.593| INFO  co.topl.network.NetworkController - No declared address was provided. Skipping address validation.
20:44:18.600| INFO  co.topl.network.NetworkController - Network Controller transitioning to the operational state
20:44:18.619| INFO  co.topl.BifrostApp - P2P protocol bound to /0.0.0.0:9084
20:44:19.273| INFO  co.topl.BifrostApp - HTTP server bound to /0.0.0.0:9085
```
