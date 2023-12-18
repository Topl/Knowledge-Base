---
id: create-tx
title: "Creating Transactions"
slug: "create-tx"
---

# Creating Transactions

In this tutorial we are creating a transaction using the brambl-cli and
sending it to the network.

The process of creating a transaction is the following:

- First, we need to create the actual transaction.
- Then, we need to prove the transaction.
- Finally, we need to send the transaction to the network.

## Create an LVL transaction

To create a simple transaction you need to run the following command:

```bash
brambl-cli simple-transaction create --from-fellowship $FELLOWSHIP --from-template $LOCK_TEMPLATE --from-interaction $INTERACTION_NR -t $TO_ADDRESS -w $PASSWORD --port $PORT -o $TX_FILE -n $NETWORK -a $SEND_AMOUNT -h $HOST -i $MAIN_KEY --walletdb $WALLET --fee $FEE --transfer-token $TOKEN_TYPE
```

This will create a transaction that spends the interaction `$INTERACTION_NR` of the template `$LOCK_TEMPLATE` of the fellowship `$FELLOWSHIP` and sends `$SEND_AMOUNT` polys to the address `$TO_ADDRESS`. The transaction will be stored in the file `$TX_FILE`.

The `--from-interaction` parameter is only required if the fellowship is `nofellowship`. If the fellowship is `self`, or any template where there is at least one fellowship, then the `--from-interaction` parameter is not required.


## Prove the Transaction

To prove the transaction run the following command:

```bash
brambl-cli tx prove -w $PASSWORD --keyfile $MAIN_KEY -n $NETWORK -i $TX_FILE -o $TX_PROVED_FILE --walletdb $WALLET
```

This will prove the transaction in the file `$TX_FILE` and store the result in the file `$TX_PROVED_FILE`. The right indexes to derive the keys are taken from the wallet database.

## Send the Transaction to the Network

To send the transaction to the network you need to run the following command:

```bash
brambl-cli tx broadcast -n $NETWORK -i $TX_PROVED_FILE -h $HOST --port $PORT --walletdb $WALLET
```

This will broadcast the transaction in the file `$TX_PROVED_FILE` to the network.

Do not forget to use the `--secure` parameter if you are using the testnet.

## Check the Balance

You can check the balance of the address `$TO_ADDRESS` using the following command:

```bash
brambl-cli wallet balance --from-address $TO_ADDRESS --walletdb $WALLET_DB --host $HOST --port $PORT
```

Do not forget to use the `--secure` parameter if you are using the testnet.