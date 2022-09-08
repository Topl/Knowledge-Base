---
title: "Topl Blockchain Address"
slug: "how-topl-addresses-are-generated"
hidden: false
createdAt: "2021-03-25T20:26:06.337Z"
updatedAt: "2021-04-15T14:27:00.123Z"
---
The Topl blockchain address is a unique sequence of numbers and letters that functions similarly to an email address. In particular, the numbers and letters are [Base58](https://tools.ietf.org/id/draft-msporny-base58-01.html) encoded.  The Topl blockchain address refers to a specific destination on the network to which assets can. For example, imagine that you want to make a transaction on the Topl network with your friend Bob. Bob will share his address with you and you will be able to transact with him via this address.

# Generate an Address 

Our public and private keys are generated using the <<glossary:Curve25519>> algorithm. You get a reference for your address in the following way: 

### Step 1: Add the network prefix
 - The network prefix allows nodes on the Topl network to verify which network the address is on 
[block:parameters]
{
  "data": {
    "h-0": "Network Prefix",
    "h-1": "Network",
    "h-2": "Notes",
    "0-0": "0x01",
    "0-1": "Topl Public Mainnet",
    "0-2": "Not yet available in Beta",
    "1-0": "0x10",
    "1-1": "Valhalla public testnet",
    "1-2": "Live in Beta",
    "2-0": "0x30",
    "2-1": "Local Developer Network",
    "2-2": "Used for <<glossary:Bifrost>>  Developers"
  },
  "cols": 3,
  "rows": 3
}
[/block]
 ### Step 2: Append the propositionType prefix
- Topl supports addresses with public/private key pairs that are generated using two different algorithms. 
[block:parameters]
{
  "data": {
    "h-0": "Prefix",
    "h-1": "propositionType",
    "0-0": "0x01",
    "0-1": "Curve25519 Public Key Hash",
    "h-2": "Notes",
    "0-2": "Default Implementation by Brambl KeyManager",
    "1-0": "0x02",
    "1-1": "Curve25519 Threshold Hash",
    "1-2": "Another implementation accepted by the Topl Network"
  },
  "cols": 3,
  "rows": 2
}
[/block]
### Step 3: Append the evidence content

The evident content is a 32 byte commitment to the proposition that must be supplied and satisfied by the transaction issuer. 
[block:parameters]
{
  "data": {
    "h-0": "propositionType",
    "0-0": "0x01",
    "h-1": "Generation Method",
    "h-2": "Notes",
    "0-1": "Blake2b-256 Hash of the Public Key",
    "0-2": "For Curve25519 Public Key Hash",
    "1-0": "0x02",
    "1-1": "Blake2b-256 Hash of all public keys in the threshold proposition",
    "1-2": "For Threshold Hash"
  },
  "cols": 3,
  "rows": 2
}
[/block]
### Step 4: Append the address checksum

Finally, add the first 4 bytes of the Blake2b-256 hash of the preceding 34 bytes. 

### Step 5: Convert into Base58
The last step is to convert the address that you get after appending the four pieces of information into Base58. 


# Generate an address using the BramblJS KeyManager module

The easiest way to generate an address is using the Brambl KeyManager Module. An example of this is shown in the **recipe **below. 

The KeyManager module is compliant with Bifrost's Gjallarhorn Key Manager service and provides an straightforward interface for creating new keyfiles as well as creating and verifying signatures on transactions. New encrypted keyfiles are generated using Curve25519 key pairs and are encrypted using an AES-256 cipher with a user-specified password. All data within the keyfile is encoded using Base58.
[block:tutorial-tile]
{
  "title": "Create Topl Address using BramblJS",
  "emoji": "💐",
  "backgroundColor": "#2c5572",
  "slug": "create-topl-address-using-brambljs",
  "_id": "618c17174fc9e20077218253",
  "id": "618c17174fc9e20077218253",
  "link": "https://topl.readme.io/v1.3.0/recipes/create-topl-address-using-brambljs"
}
[/block]
#Generate an address using the BramblSc KeyRing 

If you are using BramblSc, it is also simple to generate and address. An example is shown below

[block:code]
{
  "codes": [
    {
      "code": "val address = brambl.keyRing.DiskOps.generateKeyFile(\"password\").get",
      "language": "scala"
    }
  ]
}
[/block]
# Generate multiple addresses using the BramblSC KeyRing

First, let's initialize our BramblSC instance, then create 3 addresses using the KeyRing.
[block:callout]
{
  "type": "info",
  "title": "Note:",
  "body": "The password to encrypt the keyfile used must be encoded in Latin-1. In addition, please replace {{myProjectId}} with your projectID."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "val provider: Provider = ValhallaTestNet(apiKey = \"myApiKey\", uri = \"https://staging.vertx.topl.services/valhalla/{{myProjectId}}\")\nval brambl: Brambl = Brambl.standalone(\"./my_key_directory\",Some( provider))\n  \nval addrs: Set[Address] = brambl.keyRing.generateNewKeyPairs(3) match {\n  case Failure(exception) => throw exception\n  case Success(value) => value.map(_.publicImage.address(brambl.networkPrefix))\n  }",
      "language": "scala"
    }
  ]
}
[/block]
# Import Bifrost Keyfile

If you are a Bifrost Developer, you can also import keys generated by Bifrost's Gjallarhorn KeyManager. An example is shown in the recipe below. 
[block:tutorial-tile]
{
  "title": "Create Topl Address from Curve25519 KeyFile",
  "emoji": "🍥",
  "backgroundColor": "#331f51",
  "slug": "create-topl-address-from-curve25519-keyfile",
  "_id": "618c17174fc9e20077218254",
  "id": "618c17174fc9e20077218254",
  "link": "https://topl.readme.io/v1.3.0/recipes/create-topl-address-from-curve25519-keyfile"
}
[/block]
# Import Keyfile BramblSC

In addition, you can also import keys generated by BramblSC's KeyRing. An example is shown below. 
[block:code]
{
  "codes": [
    {
      "code": "val provider: Provider = ValhallaTestNet(apiKey = \"myApiKey\", uri = \"https://staging.vertx.topl.services/valhalla/{{myProjectId}}\")\nval brambl: Brambl = Brambl.standalone(\"./my_key_directory\",Some( provider))\n  \n  val address1 = brambl.keyRing.DiskOps.unlockKeyFile(\"base58_encoded_address\", \"password\") match {\n            case Failure(exception) => throw exception\n            case Success(value) => value\n        }",
      "language": "scala"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Note",
  "body": "The string for the address has to be the same as the address generated by BramblSC and the naming convention for the keyfile has to include \\<address\\>.json. \n\nIn addition, BramblSC checks the whole directory for valid keyfiles so if there are other files in your key file directory that are not valid keys, or that are from different networks, then BramblSC will throw a validation error."
}
[/block]