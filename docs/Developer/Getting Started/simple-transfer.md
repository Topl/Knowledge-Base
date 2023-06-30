---
title: "Assets"
slug: "simple-transfer"
hidden: false
createdAt: "2021-03-30T15:10:50.375Z"
updatedAt: "2022-10-28T14:20:04.707Z"
---
Assets are a critical part of our blockchain technology. Assets are homogeneous tokens that can be transferred to other users and spent as currency (e.g. ERC-20 on Ethereum). In addition, users can store meta-data as part of the process of creating an asset, allowing users to store arbitrary information on the Topl Blockchain.

Usually, a central ledger keeps track of a user's token balances. Topl implements Assets in a way that avoids having a centralized account ledger.

We're going to take you through these steps to get comfortable with Assets:

* Mint an Asset and store it in your address
* Mint a collection of assets and store the collection of assets in your address
* Setup a second account using the previous steps
* Transfer an asset from one account to another
* Write a script to see what assets are stored in each account's collection.

The concepts involved in creating an Asset can be hard to grasp at first. For an in-depth explanation of the functionality and code, continue reading the next section.

Or if you'd like to go immediately into creating an asset and using it, you can skip to the **Interacting with Assets** section of this tutorial.

Assets have some of the following properties:

* Ownership is decentralized and does not rely on a central ledger
* Bugs and exploits present less risk for users and less opportunity for attackers
* Assets can not be double spent and it is very hard for them to be lost, stolen, or destroyed

## Intuiting Ownership with Asset Codes

An important concept in Topl are <<glossary:Asset Code>>s. An asset code is composed of the version, issuer address, and user provided name. Instead of representing asset ownership in a centralized ledger or db, each account owns a series of asset codes which represents the number of assets that they own and the type of each asset. This way, when users want to transact with each other, they can do so peer-to-peer without having to interact with any managed Topl resources. To transfer assets to one another, they call a `transfer` function on their own Brambl Request instance rather than having to go through Topl as an intermediary.

This simplifies access control because instead of having Topl check the sender of the function call, most function calls happen on Brambl Request instances referencing asset codes stored in the user's address, and the user controls who is able to call the functions for the asset codes in their addresses.

This approach also helps protect against potential bugs. If all of the logic was handled by Topl, an exploit is likely to affect all users. Now, if there is a bug in the Brambl logic, an attacker would have to exploit the bug for each asset code holder's account individually, which is much more complicated and time consuming than it is in a centralized ledger system.

## Ensuring Security in Public: Capability Security

Another important feature of Topl's blockchain is its utilization of Capability Security. This feature ensures that, while API used to transfer Assets is public, no one except the intended user and those they approve of can transfer assets from their account.

Topl's security model ensures that objects stored in an address can only be accessed by the user that owns them. If the user wants to give another user access to their assets, they would have to give that user the keyfile for that address.

## Create and send an Asset **MINTING** transaction

Now that you have read about how Assets work, we can mint an asset and add it to your address and also transact using the asset that you have minted.

:::tip

A helpful resource is the recipe at the bottom of the page which you can use to follow along interactively.\n\nIn addition, you must have an address that has Polys in order to form a valid transaction. Please look at the Adding Polys guide under the BaaS portal onboarding for more information about how to obtain Polys for your addresses.

:::

```js
const BramblJS = require('brambljs');

const myKeyPath = "myKeyPath"
const keyManager = BramblJS.KeyManager({
    networkPrefix: "valhalla", // network prefix is required
    password: "my_key_password",
    keyPath: myKeyPath
});

const brambl = new BramblJS({
    networkPrefix: "valhalla",
    KeyManager: keyManager, //applies to Requests and KeyManager
    Requests: {
        url: "https://vertx.topl.services/valhalla/{{myProjectId}}", // set url
        apiKey: "{{myApiKey}}"
    }
});

const assetCode = brambl.createAssetCode("name1234");

const rawAssetParams = {
    "propositionType": "PublicKeyCurve25519",
    "recipients": [
      // basic: [address, quantity]
      [brambl.keyManager.address, 4]
  ],
  "assetCode": assetCode,
  "sender": [brambl.keyManager.address],
  "changeAddress": brambl.keyManager.address,
  "consolidationAddress": brambl.keyManager.address,
  "minting": true,
  "fee": 100
};

const pollParams = {
  "timeout": 90,
  "interval": 3,
  "maxFailedQueries": 10
}

brambl.transaction('createRawAssetTransfer', rawAssetParams)
  .then(res => { console.log('Unconfirmed transaction'); console.log(res); return res })
  .then(res => brambl.pollTx(res.result.txHash, pollParams))
  .then(res => { console.log('\\nConfirmed transaction'); console.log(res) })
  .catch(console.log);
```

```scala
object CreateAnDSendRawAssetMintingTransfer {
  import exampleState._
  import provider._
  
  val params: RawAssetTransfer.Params = ToplRpc.Transaction.RawAssetTransfer.Params(
    propositionType = PublicKeyPropositionCurve25519.typeString,
    sender = NonEmptyChain(externalAddress.head),
    recipients = NonEmptyChain((externalAddress.head, AssetValue(4, assetCode))),
    fee = 0,
    changeAddress = externalAddress.head,
    consolidationAddress = externalAddress.head,
    minting = true,
    data = None
  )
  
  val response: RpcErrorOr[BroadcastTx.Response] = for {
    rawTx <- ToplRpc.Transaction.RawAssetTransfer.rpc(params).map(_.rawTx)
    signTx <- EitherT.right {
      clearKeyRing()
      genKeys()
      val msg2Sign = rawTx.messageToSign
      val signFunc = (addr: Address) => keyRing.generateAttestation(addr)(msg2Sign)
      val signatures = keyRing.addresses.map(signFunc).reduce(_ ++ _)
      Future(rawTx.copy(attestation = signatures))
    }
    broadcastTx <- ToplRpc.Transaction.BroadcastTx.rpc(ToplRpc.Transaction.BroadcastTx.Params(signTx))
  } yield broadcastTx
  
  def main(args: Array[String]): Unit =
    response.value.foreach {
      case Left(value)  => println(s"Got some error: $value")
      case Right(value) => println(s"Got a success response: $value")
    }
}
```

This script stores the assetCode for the asset in your address so that you can use them in future transactions. In this example, the script mints 4 assets and stores them in your address. You can use the unique assetCode to mint more assets of the same type.

On line 31 in the JS code and line 13 in the SC code, we set minting to true to tell the Topl network that we are creating a new asset. If the value was set to false, then the network would attempt to transfer an existing asset.

Addresses are like pointers. They are a link to a collection of boxes and can be used to retrieve balances, or transfer tokens to/from the boxes they reference. Addresses do not move, or modify the boxes directly.

:::tip

During our beta offering, asset minting and transfers have a min-fee of 100 nano-polys on Valhalla (1 poly = 10^9 nano-polys). Please see [this page](https://topl.readme.io/v1.3.0/docs/adding-polys) for loading your address with polys.

:::

You are now ready to run transactions that use Assets!

## Transfer Assets to another User

Now we are going to run a transaction that sends 10 Assets to another address. We will do this by using the transfer function and turning minting off. That will deposit tokens into the second address.

:::info

In a previous section, we have walked through how to create a [Topl Blockchain Address](https://topl.readme.io/v1.3.0/docs/how-topl-addresses-are-generated).

Please create a second address now.

:::

Now the second account is ready to start building its fortune! We can check that that our account is currently empty by calling the `lookupBalancesByAddresses` method in Brambl function.

```js
brambl.requests.lookupBalancesByAddresses({addresses: [address]})
```

```scala
object LookupBalance {
  import exampleState._
  import provider._
  
  val params: Balances.Params = ToplRpc.NodeView.Balances.Params(externalAddress.toList)
  val response: RpcErrorOr[Balances.Response] = ToplRpc.NodeView.Balances.rpc(params)
  
  def main(args: Array[String]): Unit =
    response.value.foreach {
      case Left(value)  => println(s"Got some error: $value")
      case Right(value) => println(s"Got a success response: $value")
    }
}
```

Asset creation (for the asset that we minted in the last step) is restricted to the address which originally minted the asset, so the asset code ensures that nobody is able to create a duplicate of that asset out of thin air.

As part of the initial minting process for an Asset, the first address created an <<glossary:Asset Code>>. By using this code, the address that owns it can mint new assets. Right now, the first address owns it, so it has the sole power to mint new Assets.

As we have explained before, the resource model plus capability security handles this access control for us as a built-in property of the block-chain.

In the next transaction, address 1 will mint 10 new assets and deposit them into the second account.

:::caution

The variables will refer to your own addresses so you may have to replace the stand-in variables in the example with the values of your address details.

:::

:::caution

The Change Address (for the left-over polys) and Consolidation Address (for left-over assets) are required as of Bifrost Version 1.4.3.

:::

```js
const myKeyPath1 = "valhalla_.json";
const myKeyPath2 = "valhalla_key_file.json";

const keyManager1 = BramblJS.KeyManager({
  password: "{{myFirstPassword}}",
  keyPath: myKeyPath1
});

const keyManager2 = BramblJS.KeyManager({
  password: "{{myPassword}}",
  keyPath: myKeyPath2
})
  
const brambl1 = new BramblJS({
  networkPrefix: "valhalla",
  KeyManager: keyManager1,
  Requests: {
    url: "https://vertx.topl.services/valhalla/{{yourProjectIdHere}}",
    apiKey: "{{yourApiKeyHere}}"
    }
})
  
const brambl2 = new BramblJS({
  networkPrefix: "valhalla",
  KeyManager: keyManager2,
  Requests: {
    url: "https://vertx.topl.services/valhalla/{{yourProjectIdHere}}", // set url
    apiKey: "{{yourApiKeyHere}}"
    }
})
  
  // Create an new AssetCode to be used in Create Raw Asset Transactions
  const assetCode1 = brambl1.createAssetCode("asset1");
  const address1 = brambl1.keyManager.address;
  const address2 = brambl2.keyManager.address;
  const rawAssetParams1 = {
    "propositionType": "PublicKeyCurve25519",
    "recipients": [
      // basic: [address, quantity]
      // advance: [address, quantity, securityRoot, metadata]
      [address2, 10]
    ],
    "assetCode": assetCode1,
    "sender": [address1],
    "changeAddress": address1,
    "consolidationAddress" : address1
    "minting": true,
    "fee": 1000000001
  };
  
  const pollParams = {
    "timeout": 90,
    "interval": 3,
    "maxFailedQueries": 10
  };
  
  brambl1.transaction('createRawAssetTransfer', rawAssetParams1)
    .catch((e) => console.error(e))
    .then(res => { console.log('Unconfirmed transaction'); console.log(res); return res })
    .then(res => brambl1.pollTx(res.result.txId, pollParams))
    .then(res => console.log(res))
    .catch((e) => console.error(e))
```

```scala
object CreateAndSendRawAssetMintingTransfer {

  import exampleState._
  import provider._

  val params: RawAssetTransfer.Params = ToplRpc.Transaction.RawAssetTransfer.Params(
    propositionType = PublicKeyPropositionCurve25519.typeString,
    sender = NonEmptyChain(externalAddress.head),
    recipients = NonEmptyChain((externalAddress(1), AssetValue(10, assetCode))),
    fee = 0,
    changeAddress = externalAddress.head,
    consolidationAddress = externalAddress(1),
    minting = true,
    data = None
  )

  val response: RpcErrorOr[BroadcastTx.Response] = for {
    rawTx <- ToplRpc.Transaction.RawAssetTransfer.rpc(params).map(_.rawTx)
    signTx <- EitherT.right {
      clearKeyRing()
      genKeys()
      val msg2Sign = rawTx.messageToSign
      val signFunc = (addr: Address) => keyRing.generateAttestation(addr)(msg2Sign)
      val signatures = keyRing.addresses.map(signFunc).reduce(_ ++ _)
      Future(rawTx.copy(attestation = signatures))
    }
    broadcastTx <- ToplRpc.Transaction.BroadcastTx.rpc(ToplRpc.Transaction.BroadcastTx.Params(signTx))
  } yield broadcastTx

  def main(args: Array[String]): Unit =
    response.value.foreach {
      case Left(value)  => println(s"Got some error: $value")
      case Right(value) => println(s"Got a success response: $value")
    }
}
```

## Checking account balances

Now address 2 should have an asset box with 10 assets while address 1 has no assets.

In this example, we will query the balance of each address's assets. The following will print out the balance of each account.

```js
brambl1.requests.lookupBalancesByAddresses({addresses: [address1, address2]}
  .then(res => {console.log(res.result[address1].Boxes.AssetBox); return res;})
  .then(res => console.log(res.result[address2].Boxes.AssetBox))
  .catch((e) => console.error(e))
```

```scala
object LookupBalance {

  import exampleState._
  import provider._

  val params: Balances.Params = ToplRpc.NodeView.Balances.Params(externalAddress.toList)
  val response: RpcErrorOr[Balances.Response] = ToplRpc.NodeView.Balances.rpc(params)

  def main(args: Array[String]): Unit =
    response.value.foreach {
      case Left(value)  => println(s"Got some error: $value")
      case Right(value) => println(s"Got a success response: $value")
    }
}
```

After running this script, it should ensure the following:
Address 1's asset balance is 0
Address 2's asset balance is 10

If correct, you should see something similar to the following lines for address 2

```json
{
  "nonce": "-8730299170071731040",
  "id": "CJNEBJEUjbuz8xt4YFgJt5bUAFUDnTw2tmUt4ah5BFxZ",
  "evidence": "LQ9nmM1uiThbsgEU4bVk95SKwkxpffW4E3kdGT8hY5oE",
  "type": "AssetBox",
  "value": {
      "quantity": "10",
      "assetCode": "5onZ9zqoVAtqQju5i8apy9v7WsDZ6fMqc31P9Qnbwv3z2gERL31eZnoTcj",
      "metadata": null,
      "type": "Asset",
      "securityRoot": "11111111111111111111111111111111"
  }
}

```

Now that we have two addresses each loaded with their own assets, we can see how they transfer tokens to each other!

In this example, the signer withdraws assets from their address. Then the transaction moves those resources to another user's address.

:::tip

After completing the first tutorial with a value > 10, complete the second tutorial, this time turning minting to "false" so that assets are not created, but rather pulled from the first address' balance.

:::

If correct, you should see that the 10 assets that were minted in step one have been added to the asset balance for address 2!

You now know how a basic Asset is used in Topl's Blockchain!

From here, you can try to extend the functionality of assets by making:

* a faucet for these assets
* an <<glossary:Escrow>>  that can be deposited to
* Of course, minting new Assets!
[block:tutorial-tile]
{
  "title": "Transfer Assets between Addresses in Valhalla",
  "emoji": "🐳",
  "backgroundColor": "#018FF4",
  "slug": "transfer-assets-between-addresses-in-valhalla",
  "_id": "62e99eede9a6470167b86ed6",
  "id": "62e99eede9a6470167b86ed6",
  "link": "https://topl.readme.io/v1.3.0/recipes/transfer-assets-between-addresses-in-valhalla"
}
[/block]