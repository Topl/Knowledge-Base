---
id: setup
title: "Setup"
slug: setup
---
# Setup

In this tutorial we learn how to setup your environment to use the brambl-cli.
This tutorial covers how to setup a wallet and how to launch a private node or
use a public testnet node.

## Setup Wallet and Funds

To create a transaction, you need to have a wallet with some funds. You can 
create a wallet following the instructions in the
[Initialize Wallet](https://topl.github.io/brambl-cli/docs/current/how-tos/initialize-wallet) how to. For people
to send you funds, you need to share your address with them. You can see how
to get your current address using the 
[Get the Current Address](https://topl.github.io/brambl-cli/docs/current/how-tos/current-address). You can check you balance
using the [Check Balance](https://topl.github.io/brambl-cli/docs/current/how-tos/check-balance) how to.

## Launch a Private Node or use a Public Testnet Node

### Launch a Private Node

For this quickstart guide we recommend having Docker installed on your machine. Once
Docker is installed, you can launch a node using the following command:

```
docker run --rm -p 9085:9085 -p 9084:9084 docker.io/toplprotocol/bifrost-node:$NODE_VERSION
```

The latest available version right now is `2.0.0-alpha10`.

### Use a Public Testnet Node

To use the public test net you need to call the different methods using the 
`--host` and `--port` parameters. The host is `testnet.topl.co` and the port
is `443`. You also need to use the `--secure` or `-s` parameter to use TLS over the
connection.

For example, to check the balance of the address `ptetP7jshHTwEg9Fz9Xa1AmmzhYHDHo1zZRde7mnw3fddcXPjV14RPcgVgy7`
on the testnet you need to run the following command:

```bash
brambl-cli wallet balance --from-address ptetP7jshHTwEg9Fz9Xa1AmmzhYHDHo1zZRde7mnw3fddcXPjV14RPcgVgy7 --walletdb $WALLET --host testnet.topl.tech --port 443 -s true
```