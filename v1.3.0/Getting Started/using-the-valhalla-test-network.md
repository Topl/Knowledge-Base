---
title: "Testing Applications"
slug: "using-the-valhalla-test-network"
hidden: false
createdAt: "2021-03-29T20:54:31.580Z"
updatedAt: "2021-07-01T14:28:28.277Z"
---
#Before you begin

Before you can interact with the test network, you need to install Brambl
[block:callout]
{
  "type": "warning",
  "title": "Important",
  "body": "This tutorial is compatible with BramblJS 1.3.x. After you have installed the [prerequisites](https://topl.readme.io/v1.3.0/docs/prerequisites), ** you must install [BramblJS](https://topl.readme.io/v1.3.0/docs/brambljs-installation-guide)**\n\nThis tutorial is also compatible with BramblSC. The steps to installing and importing are also above."
}
[/block]
# <<glossary:Valhalla>>
When imported with no arguments, BramblJS defaults to point at a private node running on your localhost. While this is an option, it is easier to use Topl's test network (<<glossary:Valhalla>>) where <<glossary:Poly>>s have no real-world value. 

Using BramblSc, the quickest and easiest way to experiment and begin developing on Topl is to use the ValhallaTestNet provider found [here](doc:providers) 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "The Topl development team pushes new updates and features to Valhalla before they are pushed to the main Toplnet. This may cause some behavior differences for a short period between the two networks."
}
[/block]
## Interacting with the network

You can use Brambl to interact with the Valhalla network. BramblJS allows you to make transactions, view blocks on the chain, and other functionality! 

At the bottom of this page, you can view this tutorial as a recipe, with an interactive flow to help you to visualize how to get connected. 

### Step 1. Importing the Brambl Module

To create a minimal instance of Brambl in your application, include the following lines in your application
[block:code]
{
  "codes": [
    {
      "code": "const BramblJS = require('brambljs');",
      "language": "javascript"
    },
    {
      "code": "val brambl: Brambl = Brambl.standalone(\"my_key_file_directory\", Some(ValhallaTestNet(apiKey = \"myApiKey\", , uri = \"https://staging.vertx.topl.services/valhalla/{{myProjectId}}\")))",
      "language": "scala"
    }
  ]
}
[/block]

To use Valhalla, use the network prefix `valhalla` when creating a new instance of BramblJS or use the ValhallaTestNet provider when using BramblSC
[block:code]
{
  "codes": [
    {
      "code": "const brambl = new BramblJS({\n   networkPrefix : \"valhalla\"\n\t}\n)",
      "language": "javascript"
    },
    {
      "code": "val provider: Provider = ValhallaTestNet(apiKey = \"myApiKey\")\nval brambl: Brambl = Brambl.standalone(\"myKeyFileDirectory\", provider)",
      "language": "scala"
    }
  ]
}
[/block]
To get free polys for testing, please follow the instructions [here](https://topl.readme.io/v1.3.0/docs/adding-polys) to get polys from our Development Team