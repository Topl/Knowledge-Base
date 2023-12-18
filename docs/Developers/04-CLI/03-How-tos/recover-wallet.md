---
sidebar_position: 2
---

# Recover a Wallet Keyfile

The command to recover a wallet's main key is:

```bash
brambl-cli wallet recover-keys -w $PASSWORD --passphrase $PASSPHRASE -n $NETWORK -o $KEY_FILE --newwalletdb $WALLET_DB --mnemonic this,is,an,example,of,a,mnemonic,string,that,contains,12,words
```

This will use the the mnemonic specified by the `--mnemonic` option to recover the main key of the wallet. The main key will be stored in the file specified by the `-o` option and protected by the password. The valid values for the `-n` option are `mainnet`, `testnet`, and `private`. A new wallet database will be created and stored in the file specified by the `--newwalletdb` option.

Note that the passphrase **MUST** be the same passphrase used to initially generate the mnemonic. The password can be different.
