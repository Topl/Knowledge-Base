---
title: "Signing and Broadcasting Transactions"
slug: "signing-transactions"
hidden: false
createdAt: "2021-04-01T19:18:05.321Z"
updatedAt: "2021-08-11T20:11:34.722Z"
---
[block:callout]
{
  "type": "info",
  "title": "Prerequisites:",
  "body": "This guide assumes knowledge of signing. For more detail, see our signing documentation here: [Signing](https://topl.readme.io/docs/signing). In addition, you have to setup [BramblSC] (https://topl.readme.io/docs/bramblsc)"
}
[/block]
#Signing Transactions
Transactions to be used in an offline signing capacity with BramblSc should use the Raw Transfer functions for this purpose. The Raw Transfer is similar to the BramblJS transaction, however, it does require some more involved steps. 

In order to create and sign a raw transfer, the sequence of events is as follows: 
1.) Send a raw transfer request
2.) Sign the returned raw transfer object
3.) Send the raw transfer object to a node for broadcasting

## Step 1: Create your transaction object
[block:callout]
{
  "type": "info",
  "title": "Notes:",
  "body": "1. There are currently two types of raw transfers, RawPolyTransfer and RawAssetTransfer.\n2. You can create an address in BramblSc by following the [Key Management](https://topl.readme.io/docs/key-management) documentation"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "val quantity = 10\nval assetCode: AssetCode = AssetCode(1: Byte, senderAddress, \"name\")  \nval rawTransfer: RawAssetTransfer = RawAssetTransfer(Seq(senderAddress), Seq((recipientAddress, quantity), assetCode, fee = 1L, minting = true) ",
      "language": "scala"
    }
  ]
}
[/block]
## Step 2: Retrieve the message to sign from the Topl network 
[block:code]
{
  "codes": [
    {
      "code": "val rawAssetTxF = brambl.rpc.getRawAssetTransfer(rawTransfer)\nval rawAssetTx = Await.result(rawAssetTxF, 5.seconds).toOption.get.result.tx",
      "language": "scala"
    }
  ]
}
[/block]
where the key file has been loaded in per [Key Management](doc:key-management) 

## Step 3: Sign the message
[block:code]
{
  "codes": [
    {
      "code": "val signedTx = brambl.signTransaction(address)(rawAssetTx)",
      "language": "scala"
    }
  ]
}
[/block]
The transaction is then broadcasted using the `broadcastTx` function
[block:code]
{
  "codes": [
    {
      "code": "val broadcastTx = brambl.rpc.broadcastTx(signedTx)",
      "language": "scala"
    }
  ]
}
[/block]