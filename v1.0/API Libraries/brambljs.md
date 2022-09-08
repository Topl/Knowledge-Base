---
title: "Brambl"
slug: "brambljs"
excerpt: "*Brambl is Topl's API library and provides a streamlined method to integrate your application or platform onto the Topl blockchain.*"
hidden: false
createdAt: "2021-03-11T07:12:27.977Z"
updatedAt: "2021-03-11T22:14:45.878Z"
---
[block:api-header]
{
  "title": "BramblJS"
}
[/block]

At present we recommend leveraging BramblJS, Topl's JavaScript API library. BramblJS is accessible via the Node Package Manager (NPM) and can be installed by running:
[block:code]
{
  "codes": [
    {
      "code": "npm install --save brambljs",
      "language": "shell"
    }
  ]
}
[/block]
Alternatively, you can build from source from the associated Github repository ([link](https://github.com/topl/brambljs)):
[block:code]
{
  "codes": [
    {
      "code": "git clone https://github.com/topl/BramblJS",
      "language": "shell"
    }
  ]
}
[/block]
You can find complete documentation, including multiple examples and code snippets [here](https://brambljs.docs.topl.co/).
[block:api-header]
{
  "title": "BramblPy"
}
[/block]
Python 3 implementation of Topl's API library. Currently in pre-alpha release, and slated for public availability by late Q2 2020. Please contact us for early access.

[block:api-header]
{
  "title": "BramblSc"
}
[/block]
Scala implementation of Topl's API library. Currently in pre-alpha release, and slated for public availability by early Q2 2020. Please contact us for early access.


[block:api-header]
{
  "title": "Key Generation and Transaction Signing"
}
[/block]
While Topl provides full access to its blockchain network through our Blockchain-as-a-Service (BaaS) hosted API, there is certain functionality that must be executed off chain as part of your application itself.

Therefore, in addition to being able to call all routes comprising the BaaS API, Brambl enables you to both generate and mange your key files as well as sign transactions.