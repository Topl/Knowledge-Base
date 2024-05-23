---
sidebar_position: 16
---

# Inspecting a Transaction

To inspect a transaction run the following command:

```bash
brambl-cli tx inspect -i $TX_FILE
```

This will inspect the transaction in the file `$TX_FILE` and output the result to the console. The output will look something like this:

```
TransactionId              : 11111111111111111111111111111111

Group Policies
==============


Series Policies
===============


Asset Minting Statements
========================
Group-Token-Utxo           : FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#2
Series-Token-Utxo          : FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#1
Quantity                   : 1000
Permanent-Metadata         : 
No permanent metadata
      
Inputs
======
TxoAddress                 : FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#0
Attestation                : Not implemented
Type                       : LVL
Value                      : 9998800
-----------
TxoAddress                 : FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#2
Attestation                : Not implemented
Type                       : Group Constructor
Id                         : cabf98baf365915d2282eca423bfae4a6425bad6064b8d97f2c39ba6e9fceafb
Fixed-Series               : NO FIXED SERIES
Value                      : 1
-----------
TxoAddress                 : FYX4xtEh9vvXjSwKvXczqa9TCjgyTCawvfnL6L5M2P5N#1
Attestation                : Not implemented
Type                       : Series Constructor
Id                         : 094c5a3acf338bcca90c91c9adcae5f4b59dec385740e80660111a3d6b10a8ce
Fungibility                : group-and-series
Token-Supply               : UNLIMITED
Quant-Descr.               : liquid
Value                      : 1

Outputs
=======
LockAddress                : ptetP7jshHUHx1621p51SSQekgpXzKLaYudhmz5FKMSUDThccGj274Y1P89n
Type                       : LVL
Value                      : 9998700
-----------
LockAddress                : ptetP7jshHUHx1621p51SSQekgpXzKLaYudhmz5FKMSUDThccGj274Y1P89n
Type                       : Group Constructor
Id                         : cabf98baf365915d2282eca423bfae4a6425bad6064b8d97f2c39ba6e9fceafb
Fixed-Series               : NO FIXED SERIES
Value                      : 1
-----------
LockAddress                : ptetP7jshHUHx1621p51SSQekgpXzKLaYudhmz5FKMSUDThccGj274Y1P89n
Type                       : Series Constructor
Id                         : 094c5a3acf338bcca90c91c9adcae5f4b59dec385740e80660111a3d6b10a8ce
Fungibility                : group-and-series
Token-Supply               : UNLIMITED
Quant-Descr.               : liquid
Value                      : 1
-----------
LockAddress                : ptetP7jshHUHx1621p51SSQekgpXzKLaYudhmz5FKMSUDThccGj274Y1P89n
Type                       : Asset
GroupId                    : cabf98baf365915d2282eca423bfae4a6425bad6064b8d97f2c39ba6e9fceafb
SeriesId                   : 094c5a3acf338bcca90c91c9adcae5f4b59dec385740e80660111a3d6b10a8ce
Commitment                 : 3e8fd1ed52e0c8107f3265da13a42b323a492d334b6da23b0f1ef279b988a225
Ephemeral-Metadata         : 
  url: http://apparatus.live
  image: http://apparatus.live/image.png
  number: 42.0
Value                      : 1000

Datum
=====
Value                      : KJHK1EAZuVA
```