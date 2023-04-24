---
title: "Transactions View"
slug: "transactions-view"
hidden: false
createdAt: "2021-08-23T18:32:25.766Z"
updatedAt: "2021-08-23T20:17:20.313Z"
---
#Transactions View
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ef637eb-Screen_Shot_2021-08-23_at_2.32.39_PM.png",
        "Screen Shot 2021-08-23 at 2.32.39 PM.png",
        2566,
        1652,
        "#edf2f2"
      ]
    }
  ]
}
[/block]
To take a closer look at data on the Topl Blockchain, select the "Transactions" tab to see the individual transactions within their associated block. <<glossary:Transaction>>s refer to the act of sending or receiving crypto-tokens. Each transaction ID (also known as TxHash or TxId) is generated by a hashing algorithm according to the information contained in that particular transaction. This transaction ID can be used as a digital proof of payment/transfer. Altering that info in any way causes the transaction ID to change and alerts users that the data has been tampered with. Recipients of a Topl transaction may also look up the transaction by its transaction ID to see its status and confirm whether tokens have arrived in their addresses. 

Sending tokens requires a transaction fee in the same way that it costs money to make a bank transfer. The key difference is that crypto fees are very minimal compared to traditional bank fees. In fact, whether you send 6 million polys or 6 polys, the fee remains constant.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cac392c-Screen_Shot_2021-08-23_at_2.42.23_PM.png",
        "Screen Shot 2021-08-23 at 2.42.23 PM.png",
        3358,
        2090,
        "#fbfbfb"
      ]
    }
  ]
}
[/block]
Clicking on any TxId on the Transactions page brings you to a dedicated page for that specific transaction. On this transaction page, you will be able to see whether the transaction has been successfully confirmed or is still pending (under Status). 

As a general rule, a secure transaction requires 30 blocks to be confirmed above the block in which the transaction was included, which takes about 7.5 minutes on the Topl Blockchain (one block is generated every 15 seconds or so). 

#Topl Transactions: UTXO's

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f2f8128-Screen_Shot_2021-08-23_at_2.51.11_PM.png",
        "Screen Shot 2021-08-23 at 2.51.11 PM.png",
        2308,
        770,
        "#f8f9f9"
      ]
    }
  ]
}
[/block]
In this Topl transaction, you'll notice two outputs that contain two different amounts under the "Outputs" sections. A Topl address does not only contain one balance per token, but is rather made up of multiple, smaller balances known as unspent transaction outputs, or UTXO's which create a lump sum that makes up an overall balance. These UTXO's remain intact until a transaction is initiated and then are randomly selected one by one until it meets or exceeds the transaction amount for the given token. At this moment, unspent transaction outputs are broken up so that the correct amount, including fees, are distributed while the remaining value of the tokens are returned to the sender as change or consolidation.