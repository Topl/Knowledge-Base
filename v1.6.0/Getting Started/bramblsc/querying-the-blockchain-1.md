---
title: "Querying the Blockchain"
slug: "querying-the-blockchain-1"
hidden: false
createdAt: "2021-10-12T19:26:11.283Z"
updatedAt: "2021-10-12T19:43:34.376Z"
---
Once you have imported Brambl, you can do many read-only requests without needing to import any other modules which you can use to query the current state, fetch historical information, and so on.

## Get Latest Block: Requests the latest block from the chain provider
[block:code]
{
  "codes": [
    {
      "code": "val params: Head.Params = ToplRpc.NodeView.Head.Params()\nval response: RpcErrorOr[Head.Response] = ToplRpc.NodeView.Head.rpc(params)",
      "language": "scala"
    }
  ]
}
[/block]
## Get a particular block by height
[block:code]
{
  "codes": [
    {
      "code": "val params: BlockByHeight.Params = ToplRpc.NodeView.BlockByHeight.Params(height)\n  val response: RpcErrorOr[BlockByHeight.Response] = ToplRpc.NodeView.BlockByHeight.rpc(params)",
      "language": "scala"
    }
  ]
}
[/block]
## Get the balance on addresses
[block:code]
{
  "codes": [
    {
      "code": "val params: Balances.Params = ToplRpc.NodeView.Balances.Params(externalAddress.toList)\nval response: RpcErrorOr[Balances.Response] = ToplRpc.NodeView.Balances.rpc(params)",
      "language": "scala"
    }
  ]
}
[/block]
## Get the latest 100 transactions from the Mempool
[block:code]
{
  "codes": [
    {
      "code": "val params: Mempool.Params = ToplRpc.NodeView.Mempool.Params()",
      "language": "scala"
    }
  ]
}
[/block]
## Lookup an **UNCONFIRMED** transaction by id (a transaction in the mempool)
[block:code]
{
  "codes": [
    {
      "code": "val response: RpcErrorOr[TransactionFromMempool.Response] = for {\n    params <- GetHeadOfChain.response.map { head =>\n      ToplRpc.NodeView.TransactionFromMempool.Params(head.bestBlock.transactions.head.id)\n    }\n    transaction <- ToplRpc.NodeView.TransactionFromMempool.rpc(params)\n  } yield transaction",
      "language": "scala"
    }
  ]
}
[/block]
## Lookup a **CONFIRMED** transaction by id (a transaction in a block)
[block:code]
{
  "codes": [
    {
      "code": "val response: RpcErrorOr[TransactionById.Response] = for {\n    params <- GetHeadOfChain.response.map { head =>\n      ToplRpc.NodeView.TransactionById.Params(head.bestBlock.transactions.head.id)\n    }\n    transaction <- ToplRpc.NodeView.TransactionById.rpc(params)\n  } yield transaction",
      "language": "scala"
    }
  ]
}
[/block]
## Lookup Block by Id
[block:code]
{
  "codes": [
    {
      "code": "val response: RpcErrorOr[BlockById.Response] = for {\n    params <- GetHeadOfChain.response.map(head => ToplRpc.NodeView.BlockById.Params(head.bestBlockId))\n    block  <- ToplRpc.NodeView.BlockById.rpc(params)\n  } yield block",
      "language": "scala"
    }
  ]
}
[/block]