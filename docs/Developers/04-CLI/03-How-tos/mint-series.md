---
sidebar_position: 14
---

# Mint a Series Constructor Token

To create a simple minting transaction of series constructor tokens we run the 
following command:

```bash
brambl-cli simple-minting create --from-fellowship $FELLOWSHIP --from-template $LOCK_TEMPLATE  -h $HOST --port $PORT -n private --keyfile $KEYFILE -w $PASSWORD -o $MINTING_TX -i $SERIES_POLICY  -a $AMOUN_TOKENS_TO_MINT --fee $FEE_AMOUNT --walletdb $WALLET_DB --mint-token series
```

This will create a minting transaction for the fellowship `$FELLOWSHIP` and template `$LOCK_TEMPLATE` and store the result in the file `$MINTING_TX`. The keyfile `$KEYFILE` is used to derive keys. The password for the wallet is `$PASSWORD`. The series policy file is `$SERIES_POLICY`. The amount of tokens to mint is `$AMOUN_TOKENS_TO_MINT`. The fee amount is `$FEE_AMOUNT`.

## Example of series policy file format

A simple series policy looks like this:

```yaml
label: Alice Series
registrationUtxo: 33HxStncsrptPB3ffkGpJNmoYwkkURvhiw92afWzjV3B#0
fungibility: group-and-series
quantityDescriptor: liquid
```

A series policy with metadata looks like this:

```yaml
label: Alice Series
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
