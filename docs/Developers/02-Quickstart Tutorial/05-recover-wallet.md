---
id: recover-wallet
title: "Wallet Recovery"
slug: "recover-wallet"
---

import SyncWallet from '../04-CLI/03-How-tos/_sync-wallet.mdx';
import ListInteractions from '../04-CLI/03-How-tos/_list-interactions.mdx';
import ResetInteraction from '../04-CLI/03-How-tos/_reset-interaction.mdx';

# Wallet Recovery

In this tutorial, we learn how to recover the wallet after there was an
error submitting it. This happens for example if you try to submit a
transaction and it fails at broadcast time or at the node.

When this happens, the wallet might be in a state where the current interaction
locally is not the same as the current interaction on the node. `brambl-cli`
offers several ways to diagnose and recover the wallet.

## Diagnosing the Problem

The first step is to diagnose the problem. A symptom that your wallet is
not in sync with the node is that checking the balance on an address
does not match the expected balance.

For example, if you check the balance of an address and it shows 0, but
you know that the address has funds, then the wallet is not in sync with
the node. This can happen because the lock template of that address is shared
with another wallet and the other wallet has already spent the funds. If this
happens, you can sync the wallet with the node using the `sync` command.
The sync command will update the wallet with the current state of the node.

Another symptom is that you try to submit a transaction and it fails
with an error that no UTXOs are available. This can happen if you created a
transaction and never submitted it. What happened here, is that the wallet
moved to the next interaction internally, and thus is not checking the correct
address. You can check list of interactions using the `wallet list-interactions`
command. You can then use the `wallet set-interaction` command to set the
current interaction to the correct one.

## Syncing the Wallet

<SyncWallet />

## Listing Interactions

<ListInteractions />

Using this feature you can get the addresses at each interaction and check
if the address you are trying to use is the correct one.

## Setting the Current Interaction

<ResetInteraction />

## Conclusion

Using these commands you can recover your wallet and continue using it.