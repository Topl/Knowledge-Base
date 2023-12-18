---
sidebar_position: 6
---

# Transaction Mode

```  
Command: simple-transaction [create]
Simple transaction mode
Command: simple-transaction create [options]
Create transaction
  --from-fellowship <value>
                           Fellowship where we are sending the funds from
  --from-template <value>  Template where we are sending the funds from
  --from-interaction <value>
                           Interaction from where we are sending the funds from
  --change-fellowship <value>
                           Fellowship where we are sending the change to
  --change-template <value>
                           Template where we are sending the change to
  --change-interaction <value>
                           Interaction where we are sending the change to
  -n, --network <value>    Network name: Possible values: mainnet, testnet, private. (mandatory)
  -h, --host <value>       The host of the node. (mandatory)
  --port <value>           Port Bifrost node. (mandatory)
  -s, --secure <value>     Enables the secure connection to the node. (optional)
  -k, --keyfile <value>    The key file.
  -w, --password <value>   Password for the encrypted key. (mandatory)
  --walletdb <value>       Wallet DB file. (mandatory)
  -o, --output <value>     The output file. (mandatory)
  --fee <value>            Fee paid for the transaction
  -t, --to <value>         Address to send LVLs to. (mandatory if to-fellowship and to-template are not provided)
  --to-fellowship <value>  Fellowship to send LVLs to. (mandatory if to is not provided)
  --to-template <value>    Template to send LVLs to. (mandatory if to is not provided)
  -a, --amount <value>     Amount to send
  --transfer-token <value>
                           The token type. The valid token types are 'lvl', 'asset', 'group', 'series'.
  --group-id <value>       Group id.
  --series-id <value>      Series id.
```
