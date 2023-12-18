---
sidebar_position: 8
---

# Simple Minting Mode

```
Command: simple-minting [create]
Simple minting mode
Command: simple-minting create [options]
Create minting transaction
  --from-fellowship <value>
                           Fellowship where we are sending the funds from
  --from-template <value>  Template where we are sending the funds from
  --from-interaction <value>
                           Interaction from where we are sending the funds from
  -n, --network <value>    Network name: Possible values: mainnet, testnet, private. (mandatory)
  -h, --host <value>       The host of the node. (mandatory)
  --port <value>           Port Bifrost node. (mandatory)
  -s, --secure <value>     Enables the secure connection to the node. (optional)
  -k, --keyfile <value>    The key file.
  -w, --password <value>   Password for the encrypted key. (mandatory)
  --walletdb <value>       Wallet DB file. (mandatory)
  -o, --output <value>     The output file. (mandatory)
  -i, --input <value>      The input file. (mandatory)
  --commitment <value>     The commitment to use, 32 bytes in hexadecimal formal. (optional)
  --ephemeralMetadata <value>
                           A file containing the JSON metadata for the ephemeral metadata of the asset. (optional)
  --mint-amount <value>    Amount to mint
  --fee <value>            Fee paid for the transaction
  --mint-token <value>     The token type. The valid token types are 'asset', 'group', 'series'.
```
