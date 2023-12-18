---
sidebar_position: 15
---

# Mint a Asset Tokens

To create a simple minting transaction of asset tokens we run the following
command:

```bash
brambl-cli simple-minting create --from-fellowship $FELLOWSHIP --from-template $LOCK_TEMPLATE  -h $HOST --port $PORT -n private --keyfile $KEYFILE -w $PASSWORD -o $MINTING_TX -i $AMS --fee $FEE_AMOUNT --walletdb $WALLET_DB --mint-token asset
```

This will create a minting transaction for the fellowship `$FELLOWSHIP` and template `$LOCK_TEMPLATE` and store the result in the file `$MINTING_TX`. The keyfile `$KEYFILE` is used to derive keys. The password for the wallet is `$PASSWORD`. The asset minting statement file is `$AMS`. The fee amount is `$FEE_AMOUNT`. Please note that the amount of tokens to mint is specified in the asset minting statement file.

The asset minting also supports a commitment and metadata. These can be added to the statement as follows.

```bash
brambl-cli simple-minting create --from-fellowship $FELLOWSHIP --from-template $LOCK_TEMPLATE  -h $HOST --port $PORT -n private --keyfile $KEYFILE -w $PASSWORD -o $MINTING_TX -i $AMS --fee $FEE_AMOUNT --walletdb $WALLET_DB --mint-token asset
--commitment $COMMITMENT --ephemeralMetadata $EPHEMERAL_METADATA_FILE
```

The commitment is a 32 byte hexadecimal string. The ephemeral metadata is a JSON file containing the metadata for the ephemeral metadata of the asset.

## Example of asset minting statement file format

An asset minting statement looks like this:

```yaml
groupTokenUtxo: FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#2
seriesTokenUtxo: FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#1
quantity: 1000
```

The `groupTokenUtxo` is where the group minting token comes from. The `seriesTokenUtxo` is where the series minting token comes from. The `quantity` is the amount of tokens to mint. This statement also
supports metadata. The metadata is optional and can be added to the statement
as follows.

```yaml
groupTokenUtxo: FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#2
seriesTokenUtxo: FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#1
quantity: 1000
permanentMetadata:
  tickerName: TST
  name: Test Token
  description: Test Token Description
```
