---
sidebar_position: 3
---

# Genus Query Mode

```
Command: genus-query [utxo-by-address]
Genus query mode
Command: genus-query utxo-by-address [options]
Query utxo
  --from-fellowship <value>
                           Fellowship where we are sending the funds from
  --from-template <value>  Template where we are sending the funds from
  --from-interaction <value>
                           Interaction from where we are sending the funds from
  -h, --host <value>       The host of the node. (mandatory)
  --port <value>           Port Bifrost node. (mandatory)
  -s, --secure <value>     Enables the secure connection to the node. (optional)
  --from-address <value>   Address where we are sending the funds from
  --walletdb <value>       Wallet DB file. (mandatory)
  --token <value>          The token type. The valid token types are 'lvl', 'topl', 'asset', 'group', 'series', and 'all'
```
