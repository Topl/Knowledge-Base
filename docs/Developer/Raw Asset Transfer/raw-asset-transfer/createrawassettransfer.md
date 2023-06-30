---
title: "Create raw asset transfer"
slug: "createrawassettransfer"
hidden: false
createdAt: "2021-04-06T16:50:34.984Z"
updatedAt: "2021-07-09T20:54:07.470Z"
---
#### Summary

Transfer Assets from an account to a specified recipient

#### Type

Remote -- Transaction must be used in conjunction with an external key manager service.

#### Description

Default behavior of the wallet is to find the first unlocked address which hold the targetted Asset.
The protocols default behavior is to combine multiple UTXOs of the same type into a single UTXO when it can.

#### Notes

- `AssetCode` in `AssetValue` can be generated using `util_generateAssetCode`
- `fee` and `quantity` in `AssetValue` need to be strings, they will be converted into Int128 which can go up 
to 178 undecillion(2^127-1)

#### Params

| Fields               | Data type              | Required / Optional | Description                                                                                                          |
| -------------------- | ---------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| propositionType      | String                 | Required            | Type of proposition, eg., PublicKeyCurve25519, ThresholdCurve25519                                                   |
| recipients           | [[String, AssetValue]] | Required            | Array of addresses and assetValues for the transfer recipients(check table below)                                    |
| sender               | [String]               | Required            | Array of addresses from which Assets should be sent                                                                  |
| changeAddress        | String                 | Required            | Address for recipient of unspent Polys                                                                               |
| consolidationAddress | String                 | Optional            | Address for recipient of unspent Assets                                                                              |
| fee                  | String                 | Required            | Fee for the transfer. Minting AssetTransfer requires fee to be greater than 0                                        |
| minting              | Boolean                | Required            | If this is a minting AssetTransfer or not                                                                            |
| data                 | String                 | Optional            | Data string which can be associated with this transaction(may be empty). Data has a maximum value of 127 characters. |

#### AssetValue

| Fields       | Data type | Required / Optional | Description                                                                                     |
| ------------ | --------- | ------------------- | ----------------------------------------------------------------------------------------------- |
| type         | String    | Required            | Type of transfer, should be "Asset" for AssetTransfer                                           |
| quantity     | String    | Required            | Number of tokens in String                                                                      |
| assetCode    | String    | Required            | Unique identifier for user issued Assets, generated from version, issuer address, and shortName |
| securityRoot | String    | Optional            | Optional 32 byte commitment to instance of the AssetBox                                         |
| metadata     | String    | Optional            | Metadata has a maximum value of 127 characters                                                  |
