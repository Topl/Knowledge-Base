---
id: mint-asset
title: "Minting an Asset"
slug: "mint-asset"
---

# Minting an Asset

In this tutorial we are going to mint an asset using the brambl-cli.

The process of minting a new asset is the following:

- First, we need to create a group constructor token.
- Then, we need to create a series constructor token.
- Finally, we need to create an asset constructor token using the group and series constructor tokens.

Each one of these operations requires creating, proving and broadcasting 
a transaction.

## Create the Group Constructor Token

The first step is to create the group constructor token. Before doing that,
we need to create a group policy. A group policy is a document that describes
the rules of the group. The group policy specifies the name of the group, and 
if the group is fixed or not. If the group is fixed, then the group constructor
tokens can only be used with the series constructor tokens that have the same
series identifier that is fixed.

Group policies are simple text files in YAML format. The group policy file
for this tutorial looks like this:

```yaml
label: MyGroupPolicy
registrationUtxo: tv4zwbVos3RCB2x3r2PNbMU4PJANU7rGpine8dcjvZr#0
```

The `label` field is the name of the group. The `fixedSeries` field is the
series identifier of the series constructor token that will be used to mint
the asset constructor token. The data in the `fixedSeries` field is
32 byte encoded in hexadecimal format. This field is optional.

The `registrationUtxo` field is the utxo that will be used to register the
group constructor token. This UTXO must contain at least 1 LVL and needs to
be spent in the minting transaction. Since each UTXO can only be spent once,
the group constructor token can only be registered once. The group contructor
token identifier is the hash of the group policy file. To get the UTXO from an address we need to run the following command:

```bash
brambl-cli genus-query utxo-by-address --from-fellowship $FELLOWSHIP --from-template $LOCK_TEMPLATE -h $HOST --port $PORT --walletdb $WALLET
```

This will query the UXTOs for the address in the genus node. It uses the wallet to derive the right address to query.

The output will look something like this:

```
TxoAddress : 9xuuz3GWYWtFPxYWUg1v5KHpeCuhJfyZ2x2KzuxsVRLN#0
LockAddress: ptetP7jshHTwEg9Fz9Xa1AmmzhYHDHo1zZRde7mnw3fddcXPjV14RPcgVgy7
Type       : LVL
Value      : 10000000
```

The TxoAddress is the UTXO that we need to use in the group policy file.

Once we have the group policy file, we can create the group constructor token
using the following command:

```bash
brambl-cli simple-minting create --from-fellowship $FELLOWSHIP --from-template $LOCK_TEMPLATE  -h $HOST --port $PORT -n private --keyfile $KEYFILE -w $PASSWORD -o $MINTING_TX -i $GROUP_POLICY  -a $AMOUNT_TOKENS_TO_MINT --fee $FEE_AMOUNT --walletdb $WALLET_DB --mint-token group
```

Then we need to prove and broadcast the transaction. This is the same procedure that is used for all transaction and is showin in the how-tos [Prove Transaction](../CLI/How-tos/prove-simple-tx) and [Broadcast Transaction](../CLI/How-tos/broadcast-tx).

Do not forget to use the `--secure` parameter if you are using the testnet.

## Create the Series Constructor Token

The next step is to create the series constructor token. To do that we need
to create a series policy. A series policy is a document that describes the
rules of the series. The series policy specifies:

- the name of the series
- the `registrationUtxo` that will be used to register the series constructor token
- the `fungibility` of the series
- the `quantityDescriptor` of the series
- the permanent metadata schema of the series
- the ephemeral metadata schema of the series

Series policies are simple text files in YAML format. The series policy file
for this tutorial looks like this (you need to replace the `registrationUtxo`
for the actual value):

```yaml
label: MySeriesPolicy
registrationUtxo: 33HxStncsrptPB3ffkGpJNmoYwkkURvhiw92afWzjV3B#0
fungibility: group-and-series
quantityDescriptor: liquid
permanentMetadata:
  type: object
  properties:
    name:
      type: string
    tickerName:
      type: string
    description:
      type: string
ephemeralMetadata:
  type: object
  properties:
    url:
      type: string
    image:
      type: string
```

To create a simple minting transaction of series constructor tokens we run the 
following command:

```bash
brambl-cli simple-minting create --from-fellowship $FELLOWSHIP --from-template $LOCK_TEMPLATE  -h 
$HOST --port $PORT -n private --keyfile $KEYFILE -w $PASSWORD -o $MINTING_TX -i $SERIES_POLICY  -a $AMOUNT_TOKENS_TO_MINT --fee $FEE_AMOUNT --walletdb $WALLET_DB --mint-token series
```

Then we need to prove and broadcast the transaction. This is the same procedure that is used for all transaction and is showin in the how-tos [Prove Transaction](../CLI/How-tos/prove-simple-tx) and [Broadcast Transaction](../CLI/How-tos/broadcast-tx).

Do not forget to use the `--secure` parameter if you are using the testnet.

## Create the Asset Token

The next step is to create the actual asset. To do that we need to create an
asset minting statement. An asset minting statement is a document that describes
the asset. The asset minting statement specifies:

- the UTXO that contains the group constructor token.
- the UTXO that contains the series constructor token.
- the quantity of tokens to mint.

Asset minting statements are simple text files in YAML format. The asset minting
statement file for this tutorial looks like this (you need to replace the `groupTokenUtxo` and `seriesTokenUtxo` for the actual values):

```yaml
groupTokenUtxo: 33HxStncsrptPB3ffkGpJNmoYwkkURvhiw92afWzjV3B#1
seriesTokenUtxo: 33HxStncsrptPB3ffkGpJNmoYwkkURvhiw92afWzjV3B#2
quantity: 1000
permanentMetadata:
  tickerName: TST
  name: Test Token
  description: Test Token Description
```

To create a simple minting transaction of asset tokens we run the following
command:

```bash
brambl-cli simple-minting create --from-fellowship $FELLOWSHIP --from-template $LOCK_TEMPLATE  -h $HOST --port $PORT -n private --keyfile $KEYFILE -w $PASSWORD -o $MINTING_TX -i $AMS --fee $FEE_AMOUNT --walletdb $WALLET_DB --mint-token asset --commitment $COMMITMENT --ephemeralMetadata $EPHEMERAL_METADATA_FILE
```

Then we need to prove and broadcast the transaction. This is the same procedure that is used for all transaction and is showin in the how-tos [Prove Transaction](../CLI/How-tos/prove-simple-tx) and [Broadcast Transaction](../CLI/How-tos/broadcast-tx).

Do not forget to use the `--secure` parameter if you are using the testnet.

## Check the Balance

You can check the balance of the address `$TO_ADDRESS` using the following command:

```bash
brambl-cli wallet balance --from-address $TO_ADDRESS --walletdb $WALLET_DB --host $HOST --port $PORT
```

You will see the asset, the group token and the series token.

Do not forget to use the `--secure` parameter if you are using the testnet.