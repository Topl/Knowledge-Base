---
sidebar_position: 13
---

# Mint a Group Constructor Token

To create a simple minting transaction of group constructor tokens we run the 
following command:

```bash
brambl-cli simple-minting create --from-fellowship $FELLOWSHIP --from-template $LOCK_TEMPLATE  -h $HOST --port $PORT -n private --keyfile $KEYFILE -w $PASSWORD -o $MINTING_TX -i $GROUP_POLICY  -a $AMOUN_TOKENS_TO_MINT --fee $FEE_AMOUNT --walletdb $WALLET_DB --mint-token group
```

This will create a minting transaction for the fellowship `$FELLOWSHIP` and template `$LOCK_TEMPLATE` and store the result in the file `$MINTING_TX`. The keyfile `$KEYFILE` is used to derive keys. The password for the wallet is `$PASSWORD`. The group policy file is `$GROUP_POLICY`. The amount of tokens to mint is `$AMOUN_TOKENS_TO_MINT`. The fee amount is `$FEE_AMOUNT`.

## Example of group policy file format

A group simple policy looks like this:

```yaml
label: MyGroupPolicy
registrationUtxo: tv4zwbVos3RCB2x3r2PNbMU4PJANU7rGpine8dcjvZr#0
```

A group policy with a fixed series identifier looks like this:

```yaml
label: MyGroupPolicy
fixedSeries: 928b20366943e2afd11ebc0eae2e53a93bf177a4fcf35bcc64d503704e65e202
registrationUtxo: tv4zwbVos3RCB2x3r2PNbMU4PJANU7rGpine8dcjvZr#0
```