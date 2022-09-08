---
title: "Brambl"
slug: "brambl"
hidden: false
createdAt: "2021-11-29T18:31:48.960Z"
updatedAt: "2021-11-29T19:01:29.275Z"
---
# Brambl

This is the main class of the BramblSC library. Note that it is a static object class and does not have to be instantiated to use the methods. 

## importCurve25519JsonToKeyRing
Helper function to import a keyfile from JSON format into the keyring

### Parameters
1.) `Json` - `keyfile`: json representation of the keyfile to be imported
2.) `String` - `password`: the password used to decrypt the private key from the keyfile
3.) `KeyRing_PK25519` - `keyRing`: a valid keyring

### Returns
* if successful, the address will be returned and the key is now available in the keyring

### Example: Reinstating a KeyFile

Step 1: Create a KeyRing
[block:code]
{
  "codes": [
    {
      "code": "val provider: Provider = new PrivateTestNet(apiKey = \"topl_the_world!\")\n\nval keyRing: KeyRing[PrivateKeyCurve25519, KeyfileCurve25519] =\n    KeyRing.empty[PrivateKeyCurve25519, KeyfileCurve25519]()(\n      provider.networkPrefix,\n      PrivateKeyCurve25519.secretGenerator,\n      KeyfileCurve25519Companion\n    )",
      "language": "scala"
    }
  ]
}
[/block]
Step 2: Load keyfile from disk or memory like the one below.
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"crypto\" : {\n    \"mac\" : \"2vwsKc1Rb6ZAwxHMkTmvWoDXrrRU82P8NDVT71Lvrcsx\",\n    \"kdf\" : \"scrypt\",\n    \"cipherText\" : \"4PkZDBVsFdZZ1E1HNZpsdD2bb41CdzuUrHPrEptMPGA9JnaK2irQMba4oGDkQFb4JvxMf7NQFt2YokXtRvcTxHmb\",\n    \"kdfSalt\" : \"BdDxetdXtKf7STFnZSN4DAcLpyQ3AfXMgpkDkGwSzeTr\",\n    \"cipher\" : \"aes-256-ctr\",\n    \"cipherParams\" : {\n      \"iv\" : \"NZuSiXoMFqKUhEQfsb2Mbw\"\n    }\n  },\n  \"address\" : \"AUA152Lgv81Z1mAmAGNftHj98CpKtD398dXCgLNkdnf3rLhGShp1\"\n}",
      "language": "json",
      "name": "Example Private Keyfile"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Important",
  "body": "Remember to store the password for your keyfile in a secure place that you will be able to access later. If you lost the password to your keyfile, it will be very challenging to retrieve the private key that will be needed to sign transactions."
}
[/block]
Step 3: Retrieve your password from secure location (in this example, we will be using the password "test")


Step 4: Add keyfile to keyring using the Brambl static object. Note that `keyRing` is the keyRing that you generated in Step 1, the `keyfileJson` is the keyfile that was given in Step 2 (or a keyfile of your choice), and finally that`test` is the password to the keyfile from Step 2
[block:code]
{
  "codes": [
    {
      "code": "address <- Brambl.importCurve25519JsonToKeyRing(keyfileJson, \"test\", keyRing)",
      "language": "scala"
    }
  ]
}
[/block]
## importMultipleCurve25519JsonToKeyRing
Helper function to import multiple keyfiles from JSON format into the keyring

### Parameters
1.) `Seq[(Json, String)]` - `keyfilePasswordPairs`: tuples of json keyfiles and passwords to be imported
2.) `KeyRing_PK25519` - `keyRing`: a valid keyring

### Returns
* if successful, the addresses will be returned and the key is now available in the keyring

### Example

Step 1: Create a KeyRing
[block:code]
{
  "codes": [
    {
      "code": "val provider: Provider = new PrivateTestNet(apiKey = \"topl_the_world!\")\n\nval keyRing: KeyRing[PrivateKeyCurve25519, KeyfileCurve25519] =\n    KeyRing.empty[PrivateKeyCurve25519, KeyfileCurve25519]()(\n      provider.networkPrefix,\n      PrivateKeyCurve25519.secretGenerator,\n      KeyfileCurve25519Companion\n    )",
      "language": "scala",
      "name": "Create Keyring Example"
    }
  ]
}
[/block]