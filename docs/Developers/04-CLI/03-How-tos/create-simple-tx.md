---
sidebar_position: 4
---

import SimpleLvlTx from './_simple-lvl-tx.mdx';

# Create a Simple Transaction

## Transfering LVLs

<SimpleLvlTx fellowship="$FROM_FELLOWSHIP" template="$LOCK_TEMPLATE" interaction="$INTERACTION_NR" token="$TOKEN_TYPE" wallet="$WALLET" keyfile="$MAIN_KEY" txFile="$TX_FILE" />

The `--from-interaction` parameter is only required if the fellowship is `nofellowship`. If the fellowship is `self`, or any template where there is at least one fellowship, then the `--from-interaction` parameter is not required.

We can pass the parameters `--change-fellowship`, `--change-template`, and `--change-interaction`
if we want to send the change to a different fellowship, template and interaction. If these parameters are not provided, the change will be sent to the same fellowship, template and the next interaction
of the template/fellowship pair. The transfers starting from the `nofellowship` fellowship require the change parameters to be provided.

Alternatively, instead of providing an output address, the fellowship and template of the output can be used instead. To do this, run the following command:

```bash
brambl-cli simple-transaction create --from-fellowship $FROM_FELLOWSHIP --from-template $FROM_LOCK_TEMPLATE --from-interaction $INTERACTION_NR --to-fellowship $TO_FELLOWSHIP --to-template $TO_LOCK_TEMPLATE -w $PASSWORD --port $PORT -o $TX_FILE -n $NETWORK -a $SEND_AMOUNT -h $HOST -i $MAIN_KEY --walletdb $WALLET
```

This will create a transaction that spends the interaction `$INTERACTION_NR` of the template `$FROM_LOCK_TEMPLATE` of the fellowship `$FROM_FELLOWSHIP` and sends `$SEND_AMOUNT` polys to the template `$TO_LOCK_TEMPLATE` of the fellowship `$TO_FELLOWSHIP`. The transaction will be stored in the file `$TX_FILE`. If no interaction is provided, the next interaction will be used
as defined in the cartesian indexing.

## Transfering Group Tokens

To transfer group tokens, you need to run the following command:

```bash
brambl-cli simple-transaction create --from-fellowship $FELLOWSHIP --from-template $LOCK_TEMPLATE --from-interaction $INTERACTION_NR -t $TO_ADDRESS -w $PASSWORD --port $PORT -o $TX_FILE -n $NETWORK -a $SEND_AMOUNT -h $HOST -i $MAIN_KEY --walletdb $WALLET --fee $FEE --transfer-token group --group-id $GROUP_ID
```

This will create a transaction that spends the interaction `$INTERACTION_NR` of the template `$LOCK_TEMPLATE` of the fellowship `$FELLOWSHIP` and sends `$SEND_AMOUNT` group tokens to the address `$TO_ADDRESS`. The transaction will be stored in the file `$TX_FILE`. The `--group-id` parameter is required to specify the group token to transfer.	

# Transfering Series Tokens

To transfer series tokens, you need to run the following command:

```bash
brambl-cli simple-transaction create --from-fellowship $FELLOWSHIP --from-template $LOCK_TEMPLATE --from-interaction $INTERACTION_NR -t $TO_ADDRESS -w $PASSWORD --port $PORT -o $TX_FILE -n $NETWORK -a $SEND_AMOUNT -h $HOST -i $MAIN_KEY --walletdb $WALLET --fee $FEE --transfer-token series --series-id $SERIES_ID
```

This will create a transaction that spends the interaction `$INTERACTION_NR` of the template `$LOCK_TEMPLATE` of the fellowship `$FELLOWSHIP` and sends `$SEND_AMOUNT` series tokens to the address `$TO_ADDRESS`. The transaction will be stored in the file `$TX_FILE`. The `--series-id` parameter is required to specify the series token to transfer.

# Transfering Asset Tokens

To transfer asset tokens, you need to run the following command:

```bash
brambl-cli simple-transaction create --from-fellowship $FELLOWSHIP --from-template $LOCK_TEMPLATE --from-interaction $INTERACTION_NR -t $TO_ADDRESS -w $PASSWORD --port $PORT -o $TX_FILE -n $NETWORK -a $SEND_AMOUNT -h $HOST -i $MAIN_KEY --walletdb $WALLET --fee $FEE --transfer-token asset --group-id $GROUP_ID --series-id $SERIES_ID
```

This will create a transaction that spends the interaction `$INTERACTION_NR` of the template `$LOCK_TEMPLATE` of the fellowship `$FELLOWSHIP` and sends `$SEND_AMOUNT` asset tokens to the address `$TO_ADDRESS`. The transaction will be stored in the file `$TX_FILE`. The `--group-id` and `--series-id` parameters are required to specify the group and series tokens to transfer. The asset is described by the pair `(group_id, series_id)`.