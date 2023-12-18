---
sidebar_position: 17
---

import CheckBalance from './_check-balance.mdx';

# Check balance of an address

<CheckBalance fellowship="$FELLOWSHIP" template="$LOCK_TEMPLATE" wallet="$WALLET" />

The output will look something like this:

```
Asset(0a205542a9a464ba60a155c28d55e9d084ce0b75eb8bd3a2ed5a27ee548e25f86616, 
0a2045d4601f88b8b51c91e45d5b88db2fb12d2e2beeb7d2a4160b424c633e5ae8e8): 1000
Series(0a2045d4601f88b8b51c91e45d5b88db2fb12d2e2beeb7d2a4160b424c633e5ae8e8): 1
Group(0a205542a9a464ba60a155c28d55e9d084ce0b75eb8bd3a2ed5a27ee548e25f86616): 1
```

This also supports the `--from address` parameter to check the balance of any address. For example:

```bash
brambl-cli wallet balance --from-address $ADDRESS --walletdb $WALLET --host $HOST --port $PORT
```