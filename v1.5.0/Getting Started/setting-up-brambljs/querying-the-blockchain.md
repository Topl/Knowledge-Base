---
title: "Querying the Blockchain"
slug: "querying-the-blockchain"
hidden: false
createdAt: "2021-04-01T16:01:49.385Z"
updatedAt: "2021-10-12T19:43:56.535Z"
---
Once you have imported Brambl, you can do many read-only requests without needing to import any other modules which you can use to query the current state, fetch historical information, and so on.

#Requests Available in Both JS and SC

## Get Latest Block: Requests the latest block from the chain provider (SC) or network (JS) 
[block:code]
{
  "codes": [
    {
      "code": "brambl.requests.getLatestBlock();",
      "language": "javascript"
    }
  ]
}
[/block]
## Get a particular block by height
[block:code]
{
  "codes": [
    {
      "code": "// Get Block by Height\n\nbrambl.requests.getBlockByHeight({\"height\": 3});\n",
      "language": "javascript"
    }
  ]
}
[/block]
## Get the balance on addresses
[block:code]
{
  "codes": [
    {
      "code": "val params: Balances.Params = ToplRpc.NodeView.Balances.Params(externalAddress.toList)\nval response: RpcErrorOr[Balances.Response] = ToplRpc.NodeView.Balances.rpc(params)\n    \n",
      "language": "javascript"
    }
  ]
}
[/block]
## Get the latest 100 transactions from the Mempool
[block:code]
{
  "codes": [
    {
      "code": "brambl.requests.getMempool();",
      "language": "javascript"
    }
  ]
}
[/block]
## Lookup an **UNCONFIRMED** transaction by id (a transaction in the mempool)
[block:code]
{
  "codes": [
    {
      "code": "brambl.requests.getTransactionFromMempool({transactionId: \"txId\"})\nval response: RpcErrorOr[Mempool.Response] = ToplRpc.NodeView.Mempool.rpc(params)",
      "language": "javascript"
    }
  ]
}
[/block]
## Lookup a **CONFIRMED** transaction by id (a transaction in a block)
[block:code]
{
  "codes": [
    {
      "code": "brambl.requests.getTransactionById({transactionId: txId});",
      "language": "javascript"
    }
  ]
}
[/block]
## Lookup Block by Id
[block:code]
{
  "codes": [
    {
      "code": "brambl.requests.getBlockById({blockId: \"blockId\"})",
      "language": "javascript"
    }
  ]
}
[/block]