---
title: "Transaction Tutorial"
slug: "transactions"
hidden: false
createdAt: "2021-03-29T21:19:02.541Z"
updatedAt: "2021-04-05T15:45:20.512Z"
---
Transactions are cryptographically signed instructions from addresses. An address will initiate a transaction to update the state of the Topl network. The easiest transaction is transferring polys from one account to another. 
[block:callout]
{
  "type": "info",
  "title": "Prerequisites",
  "body": "To help you better understand this page, we recommend that you first read [Addresses](https://topl.readme.io/docs/addresses), [How to generate a Topl Address](https://topl.readme.io/docs/how-topl-addresses-are-generated) and our [Blockchain](https://topl.readme.io/docs/blockchain) reference."
}
[/block]
# What's a Transaction?

A Topl transaction refers to an action initiated by an externally-owned address, in other words, an address managed by a human. For example, if Gintaras sends Suresh 1 Poly, Gintaras' account must be debited and Suresh's must be credited. This state-changing action takes place within a transaction. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1cab138-Screen_Shot_2021-04-01_at_9.54.16_AM.png",
        "Screen Shot 2021-04-01 at 9.54.16 AM.png",
        988,
        302,
        "#f6f7fb"
      ]
    }
  ]
}
[/block]
 Transactions, which change the state of the Topl Network, need to be broadcast to the whole network. Any node can broadcast a request for a transaction to be executed on the Topl Network; after this happens, a forger will execute the transaction and propagate the resulting state change to the rest of the network. 

Transactions require a fee and must be forged to become valid. 

A submitted transaction includes the following information: 

* txType: Transaction Type
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "During our Beta Offering, only Asset Creation, AssetTransfer, and PolyTransfer transactions are enabled."
}
[/block]
* timestamp: creation time of the transaction in Epoch millis
* signature: The identifier of the sender. This is generated when the sender's private key signs the transaction and confirms the sender has authorized the transaction
* newBoxes: New boxes to create in the Topl Network as a result of this transaction
* data: Optional field to include arbitrary data
* from: The sending address
* to: The boxes owned by the recipient address to which value will be sent. 
* fee: the fee the sender pays in nanopolys 
* propositionType: The proposition that is used to encode the evidence and generate the public key
* txId: UUID for the transaction
* minting: Only for Assets, refers to whether you want to mint a new asset or to transfer an existing asset (boolean value) 
* boxesToRemove: Boxes that the nodes will remove as a result of the transaction. 

Fees are a reference to the incentive device for the forger to stake arbits to process the transaction. Users have to pay a fee to incentivize forgers to stake arbits. The `fee` determine the maximum transaction fee paid to the forger. [More on Transaction Fees](https://topl.readme.io/docs/what-are-transaction-fees)

The transaction object will look like the following
[block:code]
{
  "codes": [
    {
      "code": "{\n        \"txType\":\"AssetTransfer\",\n        \"timestamp\":1615230376349,\n        \"signatures\":{\n          \"aansHqDUHRhD7kztDfQXXZkcGLL4KD8VcEDzQB9fjBPM\":\"6jG3t8n32w2JEy2B8Dr2GThMagezyK7doeU1GNSKp1azBUWqNbrcQ2Kd8EwwoRMiABkaWbYUK17qtwPS761dTH6S\"\n        },\n        \"newBoxes\":[\n          {\n            \"nonce\":\"-586686527903758527\",\n            \"id\":\"58e5WCs5DvgYPQUsyzEVLkoAHRJBL5LgsPX8vxRcBDig\",\n            \"evidence\":\"YbEfzvNJ9YeaejXvhV1G4TdBrdYg1mBgzZNAwQ5TYssm\",\n            \"type\":\"PolyBox\",\n            \"value\":{\n              \"type\":\"Simple\",\n              \"quantity\":\"999999\"\n            }\n          },\n          {\n            \"nonce\":\"-3014872930640019408\",\n            \"id\":\"8VYM18ZuYAJREk46VvMEtsN4kdC1xauURp86RdFpMaLR\",\n            \"evidence\":\"YbEfzvNJ9YeaejXvhV1G4TdBrdYg1mBgzZNAwQ5TYssm\",\n            \"type\":\"AssetBox\",\n            \"value\":{\n              \"quantity\":\"1\",\n              \"assetCode\":\"6LmJMpzsvn74GzwwCxDtk1dH8oJ98p6rmesGhJRAdXq6CjuBm2mDxAoVc3\",\n              \"metadata\":null,\n              \"type\":\"Asset\",\n              \"securityRoot\":\"11111111111111111111111111111111\"\n            }\n          }\n        ],\n        \"data\":null,\n        \"from\":[\n          [\n            \"AUAvJqLKc8Un3C6bC4aj8WgHZo74vamvX8Kdm6MhtdXgw51cGfix\",\n            640575933084298873\n          ]\n        ],\n        \"minting\":true,\n        \"txId\":\"nMV59QJZ69Aj1B8JipvYKwC9L85664Re9AQgbJ9XpnZd\",\n        \"boxesToRemove\":[\n          \"3vp93QXc2rpBRUKWVNYKo8DEMSqcCv4b26aXTbHZr18z\"\n        ],\n        \"fee\":\"1000000000\",\n        \"to\":[\n          [\n            \"AUAvJqLKc8Un3C6bC4aj8WgHZo74vamvX8Kdm6MhtdXgw51cGfix\",\n            {\n              \"type\":\"Simple\",\n              \"quantity\":\"999999\"\n            }\n          ],\n          [\n            \"AUAvJqLKc8Un3C6bC4aj8WgHZo74vamvX8Kdm6MhtdXgw51cGfix\",\n            {\n              \"quantity\":\"1\",\n              \"assetCode\":\"6LmJMpzsvn74GzwwCxDtk1dH8oJ98p6rmesGhJRAdXq6CjuBm2mDxAoVc3\",\n              \"metadata\":null,\n              \"type\":\"Asset\",\n              \"securityRoot\":\"11111111111111111111111111111111\"\n            }\n          ]\n        ],\n        \"propositionType\":\"PublicKeyCurve25519\"\n      }",
      "language": "json"
    }
  ]
}
[/block]
Note that the transaction object needs to be signed using the sender's private key. This proves that the transaction could only have come from the sender and was not send fraudulently. 

Topl's Brambl library will handle the signing process. 

Example <<glossary:JSON-RPC>> call: 
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": \"1\",\n  \"method\": \"topl_broadcastTx\",\n  \"params\": [\n    {\n      \"tx\": {\n        \"txType\":\"AssetTransfer\",\n        \"timestamp\":1615230376349,\n        \"signatures\":{\n          \"aansHqDUHRhD7kztDfQXXZkcGLL4KD8VcEDzQB9fjBPM\":\"6jG3t8n32w2JEy2B8Dr2GThMagezyK7doeU1GNSKp1azBUWqNbrcQ2Kd8EwwoRMiABkaWbYUK17qtwPS761dTH6S\"\n        },\n        \"newBoxes\":[\n          {\n            \"nonce\":\"-586686527903758527\",\n            \"id\":\"58e5WCs5DvgYPQUsyzEVLkoAHRJBL5LgsPX8vxRcBDig\",\n            \"evidence\":\"YbEfzvNJ9YeaejXvhV1G4TdBrdYg1mBgzZNAwQ5TYssm\",\n            \"type\":\"PolyBox\",\n            \"value\":{\n              \"type\":\"Simple\",\n              \"quantity\":\"999999\"\n            }\n          },\n          {\n            \"nonce\":\"-3014872930640019408\",\n            \"id\":\"8VYM18ZuYAJREk46VvMEtsN4kdC1xauURp86RdFpMaLR\",\n            \"evidence\":\"YbEfzvNJ9YeaejXvhV1G4TdBrdYg1mBgzZNAwQ5TYssm\",\n            \"type\":\"AssetBox\",\n            \"value\":{\n              \"quantity\":\"1\",\n              \"assetCode\":\"6LmJMpzsvn74GzwwCxDtk1dH8oJ98p6rmesGhJRAdXq6CjuBm2mDxAoVc3\",\n              \"metadata\":null,\n              \"type\":\"Asset\",\n              \"securityRoot\":\"11111111111111111111111111111111\"\n            }\n          }\n        ],\n        \"data\":null,\n        \"from\":[\n          [\n            \"AUAvJqLKc8Un3C6bC4aj8WgHZo74vamvX8Kdm6MhtdXgw51cGfix\",\n            640575933084298873\n          ]\n        ],\n        \"minting\":true,\n        \"txId\":\"nMV59QJZ69Aj1B8JipvYKwC9L85664Re9AQgbJ9XpnZd\",\n        \"boxesToRemove\":[\n          \"3vp93QXc2rpBRUKWVNYKo8DEMSqcCv4b26aXTbHZr18z\"\n        ],\n        \"fee\":\"1000000000\",\n        \"to\":[\n          [\n            \"AUAvJqLKc8Un3C6bC4aj8WgHZo74vamvX8Kdm6MhtdXgw51cGfix\",\n            {\n              \"type\":\"Simple\",\n              \"quantity\":\"999999\"\n            }\n          ],\n          [\n            \"AUAvJqLKc8Un3C6bC4aj8WgHZo74vamvX8Kdm6MhtdXgw51cGfix\",\n            {\n              \"quantity\":\"1\",\n              \"assetCode\":\"6LmJMpzsvn74GzwwCxDtk1dH8oJ98p6rmesGhJRAdXq6CjuBm2mDxAoVc3\",\n              \"metadata\":null,\n              \"type\":\"Asset\",\n              \"securityRoot\":\"11111111111111111111111111111111\"\n            }\n          ]\n        ],\n        \"propositionType\":\"PublicKeyCurve25519\"\n      }\n    }\n  ]\n}",
      "language": "json"
    }
  ]
}
[/block]
Example Response: 
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": \"1\",\n  \"result\": {\n    \"txType\": \"AssetTransfer\",\n    \"timestamp\": 1615230376349,\n    \"signatures\": {\n      \"aansHqDUHRhD7kztDfQXXZkcGLL4KD8VcEDzQB9fjBPM\": \"6jG3t8n32w2JEy2B8Dr2GThMagezyK7doeU1GNSKp1azBUWqNbrcQ2Kd8EwwoRMiABkaWbYUK17qtwPS761dTH6S\"\n    },\n    \"newBoxes\": [\n      {\n        \"nonce\": \"-586686527903758527\",\n        \"id\": \"58e5WCs5DvgYPQUsyzEVLkoAHRJBL5LgsPX8vxRcBDig\",\n        \"evidence\": \"YbEfzvNJ9YeaejXvhV1G4TdBrdYg1mBgzZNAwQ5TYssm\",\n        \"type\": \"PolyBox\",\n        \"value\": {\n          \"type\": \"Simple\",\n          \"quantity\": \"999999\"\n        }\n      },\n      {\n        \"nonce\": \"-3014872930640019408\",\n        \"id\": \"8VYM18ZuYAJREk46VvMEtsN4kdC1xauURp86RdFpMaLR\",\n        \"evidence\": \"YbEfzvNJ9YeaejXvhV1G4TdBrdYg1mBgzZNAwQ5TYssm\",\n        \"type\": \"AssetBox\",\n        \"value\": {\n          \"quantity\": \"1\",\n          \"assetCode\": \"6LmJMpzsvn74GzwwCxDtk1dH8oJ98p6rmesGhJRAdXq6CjuBm2mDxAoVc3\",\n          \"metadata\": null,\n          \"type\": \"Asset\",\n          \"securityRoot\": \"11111111111111111111111111111111\"\n        }\n      }\n    ],\n    \"data\": null,\n    \"to\": [\n      [\n        \"AUAvJqLKc8Un3C6bC4aj8WgHZo74vamvX8Kdm6MhtdXgw51cGfix\",\n        {\n          \"type\": \"Simple\",\n          \"quantity\": \"999999\"\n        }\n      ],\n      [\n        \"AUAvJqLKc8Un3C6bC4aj8WgHZo74vamvX8Kdm6MhtdXgw51cGfix\",\n        {\n          \"quantity\": \"1\",\n          \"assetCode\": \"6LmJMpzsvn74GzwwCxDtk1dH8oJ98p6rmesGhJRAdXq6CjuBm2mDxAoVc3\",\n          \"metadata\": null,\n          \"type\": \"Asset\",\n          \"securityRoot\": \"11111111111111111111111111111111\"\n        }\n      ]\n    ],\n    \"propositionType\": \"PublicKeyCurve25519\",\n    \"from\": [\n      [\n        \"AUAvJqLKc8Un3C6bC4aj8WgHZo74vamvX8Kdm6MhtdXgw51cGfix\",\n        640575933084298900\n      ]\n    ],\n    \"minting\": true,\n    \"txId\": \"nMV59QJZ69Aj1B8JipvYKwC9L85664Re9AQgbJ9XpnZd\",\n    \"boxesToRemove\": [\n      \"3vp93QXc2rpBRUKWVNYKo8DEMSqcCv4b26aXTbHZr18z\"\n    ],\n    \"fee\": \"1000000000\"\n  }\n}",
      "language": "json"
    }
  ]
}
[/block]
With the signature hash, the transaction can be cryptographically proven that it came from the sender and submitted to the network. 

# Using Brambl

Submitting a transaction through Brambl will require the instantiation of the AssetParams. These are used to set the parameters of the transaction locally, and then generate the parameters above necessary for the JSON-RPC call
[block:code]
{
  "codes": [
    {
      "code": "const AssetParams = {\n  \"propositionType\": \"PublicKeyCurve25519\",\n  \"recipients\": [\n    // basic: [address, quantity]\n    [recipientAddress, 30]\n  ],\n  \"assetCode\": assetCode,\n  \"sender\": [senderAddress],\n  \"changeAddress\": senderAddress\n  \"fee\": 1000000000\n};",
      "language": "javascript"
    }
  ]
}
[/block]
propositionType: Methodology used to create the public key.
recipients: List of recipients that will be receiving the Topl crypto-assets. The recipient quantity must be specified for each recipient. 
senderAddresses: The default behavior is to find the first unlocked address which holds Polys, then combine multiple UTXOs of the same type into a single UTXO to make up the balance of the transfer.
fee: the maximum amount that the user is willing to pay for that transaction. It can be either a string or an integer type. In addition, any polys that are not used for the transaction fee will be debited back to your account. 
 
# On transaction fees
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Currently, during our Beta release, transaction fees are set by the network at 100 nanopolys per transaction."
}
[/block]
As mentioned, transactions cost <<glossary:Poly>>s to execute. Simple transferral of assets require 1 Poly. 

So for Torny to send Hector 1 Asset, they'll need to pay the transaction fee of 1 Poly. 

Torny's account will be debited 1 Asset and 1 Poly

Alice's account will be credited 1 Asset 

The forger processing the transaction will get 1 Poly. 

Any polys not used in a transaction is refunded to the user account. 

# Transaction Lifecycle
1.) Once you send a transaction, it is broadcasted to the network and included in a pool with lots of other transactions. 
2.) A forger must pick your transaction and include it in a block in order to verify the transaction and consider it "successful".
* You may end up waiting at this stage if the network is busy and forgers aren't able to keep up. 
3.) Your transaction will also get a block number and blockId

#Safe Transactions

The default behavior of the `transaction`  function is to broadcast the transaction. It does not necessarily mean that the transaction gets added to the block by the time the execution flow returns. In addition, finalization of transactions in Topl is probabilistic. For this reason waiting for some number of blocks to be created on top of the block in which your transaction was placed is a good practice for safe transaction sending. 



# Creating Transactions

Creating transactions is something that most Topl applications do. This section describes how to use BramblJS interface to create transactions with various attributes. 

Your applications may use something besides the BramblJS library to create transactions, but in any system, you will need to provide the same kinds of data to create transactions with the same properties as those described below. 

In order to use this tutorial, you will need to have setup [BramblJS](https://topl.readme.io/v1.3.0/docs/brambljs-installation-guide) and loaded 500 polys into your address.