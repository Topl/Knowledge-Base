---
sidebar_position: 3
---

# Conversation

To understand the concept of conversation, we first need to understand the
concept of interaction.

## Interaction

A interaction is when a set of fellows agree on a set of terms. The terms are
defined by a lock template. The interaction is the result of the fellows providing
each a public key to fill the placeholders in the template. A lock template
where all the placeholders are filled is called a lock proposition. All interactions
have a lock proposition. However, not all lock propositions are interactions.

As a side effect of having a lock proposition associated to them, 
interactions also have an address. This address is derived from the 
interaction's lock proposition.

## Conversation

A conversation is a sequence of interactions initiated by the members of a 
fellowship (the fellows). In a conversation, when the fellows want to spend
the funds in an interaction, they provide a proof that they are the owners
of the address of the interaction.

If they don't want to spend all the funds in an interaction, they need to put 
the _change_ of the transaction in a new interaction.

## Conversations in the brambl-cli wallet

The brambl-cli wallet is designed to make it easy to create conversations.
By default each user has a fellowship with themselves. This fellowship is
called `self`. In the wallet, each fellowship has a unique name (like `self`) and a
unique number.

There is also a default template included in the wallet, the `default` template.	
The `default` template uses the `sign(0)` expression. This means that the
it only works with fellowships of one fellow.

In a conversation, each interaction has a number. The number of the first
interaction is `1`. The number of the second interaction is `2`, and so on.

We have then, by default the interaction of the fellowship `self` with the
template `default` and interaction number `1`. When the user wants to spend
some funds in the initial interaction, the wallet will create a new interaction
with the same template and the number `2`. 

Combining the number associated with the fellowship, the template and the
interaction, we have a unique triple for each interaction in the wallet.
The wallet uses this triple to derive the right public and private keys to
both lock the interactions and spend them.

Each user has a wallet database. The wallet database stores the fellowships,
the templates and the interactions. Normally, each wallet will assign different 
numbers to each fellowship, template and interaction.

For example, if alice has a fellowship with bob, where they are both fellows called
`alice_and_bob` with number `3`. Bob might have a fellowship with alice, but 
both the name and the number in Bob's wallet database might be different.

The same happens with templates and interactions. The wallet database of each
user will assign different numbers to each template and interaction.

Given a fellowship and a template, `brambl-cli` allows to export a base verification
key to be shared with another wallet. This base verification key is used to derive
the right keys to lock and spend the interactions in the shared fellowships and templates.

`brambl-cli` also allows to import the base verification keys of other fellows
in a given fellowship in a new conversation. The conversation is identified 
by both the name of the fellowship and the name of the template that it uses.