---
sidebar_position: 7
---

# Query the Bifrost Node

There are several ways to query the bifrost node. You can query blocks, transactions, utxos, etc.

## Query a block by id

To query a block by id run the following command:

```bash
brambl-cli bifrost-query block-by-id --block-id $BLOCK_ID -h $HOST --port $PORT
```

This will query the block with id `$BLOCK_ID` from the bifrost node running on `$HOST` on port `$PORT`.

## Query a block by height

To query a block by height run the following command:

```bash
brambl-cli bifrost-query block-by-height --height $HEIGHT -h $HOST --port $PORT
```

This will query the block with height `$HEIGHT` from the bifrost node running on `$HOST` on port `$PORT`.

## Query a transaction by id

To query a transaction by id run the following command:

```bash
brambl-cli bifrost-query transaction-by-id --transaction-id $TX_ID -h $HOST --port $PORT
```

This will query the transaction with id `$TX_ID` from the bifrost node running on `$HOST` on port `$PORT`.
