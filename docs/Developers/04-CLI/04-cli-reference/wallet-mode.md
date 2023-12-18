---
sidebar_position: 5
---

# Wallet Mode

```                           
Command: wallet [balance|set-interaction|list-interactions|sync|init|recover-keys|current-address|export-vk|import-vks]
Wallet mode
Command: wallet balance [options]
Get balance of wallet
  -n, --network <value>    Network name: Possible values: mainnet, testnet, private. (mandatory)
  -h, --host <value>       The host of the node. (mandatory)
  --port <value>           Port Bifrost node. (mandatory)
  -s, --secure <value>     Enables the secure connection to the node. (optional)
  --from-fellowship <value>
                           Fellowship where we are sending the funds from
  --from-template <value>  Template where we are sending the funds from
  --from-interaction <value>
                           Interaction from where we are sending the funds from
  --from-address <value>   Address where we are sending the funds from
  --walletdb <value>       Wallet DB file. (mandatory)
Command: wallet set-interaction [options]
Set the current interaction
  --from-fellowship <value>
                           Fellowship where we are sending the funds from
  --from-template <value>  Template where we are sending the funds from
  --from-interaction <value>
                           Interaction from where we are sending the funds from
  --walletdb <value>       Wallet DB file. (mandatory)
Command: wallet list-interactions [options]
List the interactions for a given fellowship and template
  --fellowship-name <value>
                           Name of the fellowship. (mandatory)
  --template-name <value>  Name of the template. (mandatory)
  --walletdb <value>       Wallet DB file. (mandatory)
Command: wallet sync [options]
Sync wallet
  -n, --network <value>    Network name: Possible values: mainnet, testnet, private. (mandatory)
  -h, --host <value>       The host of the node. (mandatory)
  --port <value>           Port Bifrost node. (mandatory)
  -s, --secure <value>     Enables the secure connection to the node. (optional)
  -k, --keyfile <value>    The key file.
  -w, --password <value>   Password for the encrypted key. (mandatory)
  --fellowship-name <value>
                           Name of the fellowship. (mandatory)
  --template-name <value>  Name of the template. (mandatory)
  --walletdb <value>       Wallet DB file. (mandatory)
Command: wallet init [options]
Initialize wallet
  -n, --network <value>    Network name: Possible values: mainnet, testnet, private. (mandatory)
  -w, --password <value>   Password for the encrypted key. (mandatory)
  -o, --output <value>     The output file. (mandatory)
  --newwalletdb <value>    Wallet DB file. (mandatory)
  -P, --passphrase <value>
                           Passphrase for the encrypted key. (optional))
  --mnemonicfile <value>   Mnemonic output file. (mandatory)
Command: wallet recover-keys [options]
Recover Wallet Main Key
  -n, --network <value>    Network name: Possible values: mainnet, testnet, private. (mandatory)
  -m, --mnemonic <value>   Mnemonic for the key. (mandatory)
  -w, --password <value>   Password for the encrypted key. (mandatory)
  -o, --output <value>     The output file. (mandatory)
  --newwalletdb <value>    Wallet DB file. (mandatory)
  -P, --passphrase <value>
                           Passphrase for the encrypted key. (optional))
Command: wallet current-address [options]
Obtain current address
  --walletdb <value>       Wallet DB file. (mandatory)
  --from-fellowship <value>
                           Fellowship where we are sending the funds from
  --from-template <value>  Template where we are sending the funds from
  --from-interaction <value>
                           Interaction from where we are sending the funds from
Command: wallet export-vk [options]
Export verification key
  -k, --keyfile <value>    The key file.
  -w, --password <value>   Password for the encrypted key. (mandatory)
  -o, --output <value>     The output file. (mandatory)
  --walletdb <value>       Wallet DB file. (mandatory)
  --fellowship-name <value>
                           Name of the fellowship. (mandatory)
  --template-name <value>  Name of the template. (mandatory)
  --interaction <value>    Interaction from where we are sending the funds from
Command: wallet import-vks [options]
Import verification key
  -k, --keyfile <value>    The key file.
  -w, --password <value>   Password for the encrypted key. (mandatory)
  --walletdb <value>       Wallet DB file. (mandatory)
  --fellowship-name <value>
                           Name of the fellowship. (mandatory)
  --template-name <value>  Name of the template. (mandatory)
  --input-vks <value>      The keys to import. (mandatory)
```