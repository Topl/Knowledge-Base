---
sidebar_position: 2
---

# Locks

All funds in the Topl blockchain are protected by a lock proposition. The lock
proposition is not available to the users, only the lock address is.

To prove that they may use the funds in an address, users must provide both
the original lock proposition that was used to lock the funds and a proof that
they are the owners of the address.


## Lock Templates

A lock template is a Quivr expression where there are placeholders instead
of the public keys of the fellows. The fellows fill the placeholders with
their public keys to create a lock proposition.

For example, let us suppose that Alice and Bob want to lock funds together
and they have already formed a fellowship. They can create a lock template
with the following Quivr expression:

```
and(sign(0), sign(1))
```

The `sign(n)` expression means that the `nth` participan of the fellowship
must provide a public key to create the lock proposition. In this case,
Alice must provide the public key to fill the placeholder `sign(0)` and Bob must
provide the public key to fill the placeholder `sign(1)`.