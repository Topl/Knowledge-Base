---
sidebar_position: 4
---

# Bifrost Query Mode

``` 
Command: bifrost-query [block-by-height|block-by-id|transaction-by-id]
Bifrost query mode
Command: bifrost-query block-by-height [options]
Get the block at a given height
  -h, --host <value>       The host of the node. (mandatory)
  --port <value>           Port Bifrost node. (mandatory)
  -s, --secure <value>     Enables the secure connection to the node. (optional)
  --height <value>         The height of the block. (mandatory)
Command: bifrost-query block-by-id [options]
Get the block with a given id
  -h, --host <value>       The host of the node. (mandatory)
  --port <value>           Port Bifrost node. (mandatory)
  -s, --secure <value>     Enables the secure connection to the node. (optional)
  --block-id <value>       The id of the block in base 58. (mandatory)
Command: bifrost-query transaction-by-id [options]
Get the transaction with a given id
  -h, --host <value>       The host of the node. (mandatory)
  --port <value>           Port Bifrost node. (mandatory)
  -s, --secure <value>     Enables the secure connection to the node. (optional)
  --transaction-id <value>
                           The id of the transaction in base 58. (mandatory)                  
```