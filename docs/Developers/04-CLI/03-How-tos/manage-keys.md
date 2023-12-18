---
sidebar_position: 11
---

import SyncWallet from './_sync-wallet.mdx';

# Manage Keys

To interact with other fellowships and templates you need to import their public
keys into your wallet. This allows to derive the right keys to derive the next
address where to send the funds.

## Export a base verification key

To export a base verification key run the following command:

```bash
brambl-cli wallet export-vk -w $PASSWORD -o $OUTPUT_FILE --walletdb $WALLET --fellowship-name $FELLOWSHIP_NAME --template-name $LOCK_TEMPLATE_NAME --keyfile $KEYFILE -n $NETWORK
```

This will export the base verification key for the fellowship `$FELLOWSHIP_NAME` and template `$LOCK_TEMPLATE_NAME` to the file `$OUTPUT_FILE`. The keyfile `$KEYFILE` is used to derive the exported key.

This command is also used to export a final verification key. To do this, use the `--interaction` option to specify the 
interaction from which to export the key.

## Import a base verification key

To import one or many base verification keys run the following command:

```bash
brambl-cli wallet import-vks --input-vks $BASE_VK_1,$BASE_VK_2 --fellowship-name $FELLOWSHIP_NAME --template-name $LOCK_TEMPLATE_NAME -n $NETWORK --walletdb $WALLET
```

## Sync the wallet

<SyncWallet />