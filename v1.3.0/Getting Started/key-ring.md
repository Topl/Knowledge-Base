---
title: "Key Ring"
slug: "key-ring"
hidden: false
createdAt: "2021-04-05T20:43:51.819Z"
updatedAt: "2021-04-05T20:43:51.819Z"
---
[block:callout]
{
  "type": "info",
  "title": "Note:",
  "body": "This functionality is only available with BramblSC. Please see [here](https://topl.readme.io/docs/bramblsc) for steps to setup BramblSC"
}
[/block]
# What's a Topl Key Ring? 

Topl Key Rings allow you to interact with your Topl keyfiles. Before the Key Ring was introduced, the barrier to entry to manage your Topl private keyfiles was high, mostly because the Bifrost client requires a lot of cryptographic complexity. 

# Encrypting your key file
* It is simple to save a secret key file, but there are security issues with that approach. If someone were to steal that secret key file, then everything in that address would be stolen. Thus, when storing a secret key in a hard disk, you normally encrypt it with a passphrase. 


[block:code]
{
  "codes": [
    {
      "code": "val keyFile = brambl.generateNewKeyFile(\"myPassphrase\")",
      "language": "scala"
    }
  ]
}
[/block]
You only have to type one word to create a new keyfile!