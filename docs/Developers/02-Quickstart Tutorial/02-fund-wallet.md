---
id: fund-wallet
title: "Funding Your Wallet"
slug: "fund-wallet"
---

import CurrentAddress from '../04-CLI/03-How-tos/_current-address.mdx';
import InitializeWallet from '../04-CLI/03-How-tos/_initialize-wallet.mdx';
import ProveSimpleLvlTx from '../04-CLI/03-How-tos/_prove-simple-tx.mdx';
import SimpleLvlTx from '../04-CLI/03-How-tos/_simple-lvl-tx.mdx';
import BroadcastTx from '../04-CLI/03-How-tos/_broadcast-tx.mdx';
import CheckBalance from '../04-CLI/03-How-tos/_check-balance.mdx';
export const wallet = "wallet.db";
export const keyfile = "keyfile.json";
export const txFile = "genesisTx.pbuf";
export const txFileProved = "genesisTxProved.pbuf";

# Funding Your Wallet

In this tutorial we learn how to fund your wallet using the brambl-cli. We
assume here that the wallet is already initialized and the funds are locked
by a height lock `threshold(1, height(1, 9223372036854775807))`.

## Initialize a Wallet

<InitializeWallet wallet={wallet} keyfile={keyfile} mnemonic="mnemonic.txt" />

## Getting Your Address

<CurrentAddress wallet={wallet} fellowship="self" template="default" interaction="1"/>

We are using the fellowship `self` which is included in the wallet by default
and the template `default` which is also included in the wallet by default.
`self` is a fellowship that only contains one fellow, the owner of the wallet.
`default` is a template that correspond to the quivr contract `threshold(1, sign(0))`. 

The interaction `1` is the first interaction of the template `default`. If you
have several interactions already in your wallet, you can just omit the `--from-interaction`
parameter and the CLI will use the last interaction of the template `default`.

We use the address we get to create the transaction as `$TO_ADDRESS`.

## Create the Transaction

<SimpleLvlTx fellowship="nofellowship" template="genesis" interaction="1" wallet={wallet} token="lvl" keyfile={keyfile} txFile={txFile} />

## Prove the Transaction

<ProveSimpleLvlTx txFile={txFile} keyfile={keyfile} txFileProved={txFileProved} txFile={txFile} wallet={wallet} />

## Broadcast the Transaction

<BroadcastTx txFileProved={txFileProved} />

## Check the Balance

<CheckBalance fellowship="self" template="default" wallet={wallet} />

The result should be:

```
LVL: 1000
```