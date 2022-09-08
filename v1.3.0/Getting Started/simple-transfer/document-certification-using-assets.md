---
title: "Document Certification using Assets"
slug: "document-certification-using-assets"
hidden: false
createdAt: "2021-05-10T20:20:36.532Z"
updatedAt: "2021-05-11T15:54:35.859Z"
---
# Introduction

This tutorial constitutes a guided walk-through of the Topl development ecosystem explaining one of the major use cases, namely document certification. 

Document certification, also known as time-stamping or proof of existence, is one of the most intuitive use cases for blockchain technology beyond digital currencies. Document certification consists in saving a tamper-proof timestamped fingerprint of a document (or other file) on the blockchain. This basically serves as proof that the document existed in a certain version at a certain time and can be used to prove the integrity of the file. That is, you can prove that a document has not been modified since its certification, protecting copyright, sealing log files for supply chains, and any other use case where file integrity is important. 

In this tutorial, we will look at how to create a Topl asset transaction that stores and reads document commitments and other data on the blockchain. To do so, we will create a simple transaction that saves a [Blake2b-256](https://en.wikipedia.org/wiki/BLAKE_(hash_function)) of arbitrary data on the blockchain together with metadata. BLAKE hashes uniquely identify sets of data by means of a cryptographic hash function. We will not go into detail on hash functions and cryptography here, but you should know that a Blake2b-256 hash is a 32-byte fingerprint derived from the input data. The reverse operation, i.e. calculating the data from the hash value, is not feasible, so data protection is a welcome side-effect.

Document certification is easy to implement, which means that it is an ideal introduction for explaining Topl concepts and techniques without too much unnecessary complexity. 
[block:callout]
{
  "type": "info",
  "title": "Prerequisites",
  "body": "This tutorial will assume that you are using our BramblJS library. Please see the Brambl Prerequisites page to make sure that your environment is setup properly."
}
[/block]
# Learning outcomes
After following this tutorial you will know how to: 
* Store and retrieve data on the blockchain
* Use basic functionality of a professional Topl development framework. 
* Run your own Bifrost Node
* Use Brambl to connect to your Bifrost Node.

# Developing a documentation certificate

Given that you have followed the prerequisites to setup BramblJS, let's create a module to create and interact with our asset with the following code. . 
[block:code]
{
  "codes": [
    {
      "code": "const BramblJS = require(\"brambljs\");\n\nconst getSenderKeyManagers = (senders, networkPrefix) {\n  let keyManagers = [];\n    if (Array.isArray(senders)) {\n      for (var i = 0; i < senders.length; i++) {\n        keyManagers.push(\n          BramblJS.KeyManager({\n            networkPrefix: networkPrefix,\n            password: senders[i][1],\n            keyPath: senders[i][0]\n          })\n        );\n      }\n    }\n    return keyManagers;\n}\n\nconst signTransaction = async(txObject) {\n  \tlet obj = {};\n    return await self.brambljs\n      .addSigToTx(txObject.messageToSign.result, txObject.keys)\n      .catch(function(err) {\n        console.error(err);\n        obj.error = err.message;\n        return obj;\n      });\n}\n\nconst sendSignedTransaction = async(txObject, brambljs) {\n    let obj = {};\n    return new Promise((resolve, reject) => {\n      let e = brambljs.requests\n        .broadcastTx({ tx: txObject })\n        .then(function(result) {\n          obj.txId = result.result.txId;\n          resolve(obj);\n        })\n        .catch(function(err) {\n          obj.error = err.message;\n          reject(err);\n        });\n      return e;\n    });\n}\n\nconst signAndSendTransaction = async(txObject, brambljs) {\n  let obj = {};\n  return signTransaction(txObject).then(function(value) {\n   \tif (value.error) {\n      obj.error = value.error;\n      return obj;\n  } else {\n   \treturn brambljs.sendSignedTransaction(value).then(function(value) {\n      if (value.error) {\n        obj.error = value.error;\n        return obj;\n      } else {\n        return value;\n      }\n    });\n  }\n  });\n}\n\nconst sendRawAssetTransaction = async(txObject, brambljs) {\n  let obj = {};\n    let params = {};\n    const formattedRecipients = [];\n    obj.keys = getSenderKeyManagers(\n          txObject.senders,\n          private\n        );\n    params.minting = true;\n    params.assetCode = txObject.assetCode;\n    for (let i = 0; i < txObject.recipients.length; i++) {\n          const [address, quantity, data, metadata] = txObject.recipients[\n            i\n          ];\n          if (data) {\n            const securityRoot = BramblJS.Hash(\"string\", data);\n            formattedRecipients.push([\n              address,\n              quantity,\n              securityRoot,\n              metadata\n            ]);\n          } else {\n            formattedRecipients.push([address, quantity]);\n          }\n     }\n     params.recipients = formattedRecipients;\n     return brambljs.requests\n          .createRawAssetTransfer(result.params)\n  \t\t\t\t.then(function(result) {\n         \t\tobj.messageToSign = result;\n          \treturn obj;\n    \t\t\t })\n  \t\t\t\t.catch(function(err) {\n       \t\t\tconsole.error(err);\n       \t\t\tobj.error = err.message;\n       \t\t\treturn obj;\n     \t\t\t});                \n}\n\nconst createAsset = async (args) {\n  \tconst brambljs = new BramblJS({\n      networkPrefix: private, // valhalla, toplnet, private\n      Requests: {\n        url: \"http://localhost:9085\", // default port for Bifrost node in private\n        apiKey: \"topl_the_world!\" // default Dockerized Bifrost apiKey\n\t\t\t}\n\t\t});\n  \n    var assetCode = brambljs.createAssetCode(\"myAssetName\");\n  \targs.assetCode = assetCode;\n  \treturn sendRawAssetTransaction(args, brambljs).then(function(value) {\n      if (value.error) {\n        // Exception handling here\n      } else {\n       \t return signAndSendTransaction(value, brambljs);\n      }\n    });\n }",
      "language": "javascript"
    }
  ]
}
[/block]
The first part of this code imports the library modules we need, and declares two variables to hold references to the `brambljs` instance and the parameters used for the asset transaction. 

We initialize the Bifrost node connection in the first part of the function. First of all, we connect to the node:

[block:code]
{
  "codes": [
    {
      "code": "Requests: {\n        url: \"http://localhost:9085\", // default port for Bifrost node in private\n        apiKey: \"topl_the_world!\" // default Dockerized Bifrost apiKey\n\t\t\t}",
      "language": "javascript"
    }
  ]
}
[/block]
Next, in order to create an asset for our certificate, we need to know the address which we will use to mint the asset. 
[block:code]
{
  "codes": [
    {
      "code": "const getSenderKeyManagers = (senders, networkPrefix) {\n  let keyManagers = [];\n    if (Array.isArray(senders)) {\n      for (var i = 0; i < senders.length; i++) {\n        keyManagers.push(\n          BramblJS.KeyManager({\n            networkPrefix: networkPrefix,\n            password: senders[i][1],\n            keyPath: senders[i][0]\n          })\n        );\n      }\n    }\n    return keyManagers;\n}",
      "language": "javascript"
    }
  ]
}
[/block]
In the above code, if we know the path of our keyfile for each sender, we can use that to instantiate a KeyManager for our addresses in the code. Under the hood, BramblJS is simply reading the relevant information from a json file stored at the keyfilePath location. 
[block:callout]
{
  "type": "warning",
  "body": "Remember to replace `txObject.keyfilePath` with the correct path for your local development environment!",
  "title": "Note:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "const securityRoot = BramblJS.Hash(\"string\", data);",
      "language": "javascript"
    }
  ]
}
[/block]
The above code uses the BramblJS library to calculate a Blake2b-256 hash value, which is provided in the Base58 string representation. 

Then, we simply iterate through each recipient to which we would like to send an asset, and use this method to create the security root for our data
[block:code]
{
  "codes": [
    {
      "code": "for (let i = 0; i < result.params.recipients.length; i++) {\n          const [address, quantity, data, metadata] = params.recipients[\n            i\n          ];\n          if (data) {\n            const securityRoot = BramblJS.Hash(\"string\", data);\n            formattedRecipients.push([\n              address,\n              quantity,\n              securityRoot,\n              metadata\n            ]);\n          } else {\n            formattedRecipients.push([address, quantity]);\n          }\n     }",
      "language": "javascript"
    }
  ]
}
[/block]
Now that we have derived the securityRoot and have our keys, it is time to send the parameters to the Bifrost node to get the rawParameters and the messageToSign.
[block:code]
{
  "codes": [
    {
      "code": "return brambljs.requests\n          .createRawAssetTransfer(result.params)\n  \t\t\t\t.then(function(result) {\n         \t\tobj.messageToSign = result;\n          \treturn obj;\n    \t\t\t })\n  \t\t\t\t.catch(function(err) {\n       \t\t\tconsole.error(err);\n       \t\t\tobj.error = err.message;\n       \t\t\treturn obj;\n     \t\t\t});    ",
      "language": "javascript"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "A few things to note:",
  "body": "1.) createRawAssetTransfer is asynchronous\n2.) Calling the Javascript version of createRawAssetTransfer returns a rawTransaction object\n3.) createRawAssetTransfer requires a `parameters` object as an argument, in which we specify the account/s to use for the senders and other parameters."
}
[/block]
The two functions `signTransaction` and `sendSignedTransaction` are executed sequentially after we have the rawTransaction object from the steps described above. 

Once those two functions have executed, we are presented with a response similar to this

[block:code]
{
  "codes": [
    {
      "code": "{\n    \"jsonrpc\": \"string\"\n    \"id\": \"string\"\n    \"result\": {\n        \"txType\": \"string\"\n        \"timestamp\": 0\n        \"signatures\": {\n            \"aansHqDUHRhD7kztDfQXXZkcGLL4KD8VcEDzQB9fjBPM\": \"string\"\n        }\n        \"newBoxes\": [{\n                \"nonce\": \"string\"\n                \"id\": \"string\"\n                \"evidence\": \"string\"\n                \"type\": \"string\"\n                \"value\": {\n                    \"type\": \"string\"\n                    \"quantity\": \"string\"\n                    \"assetCode\": \"string\"\n                    \"metadata\": \"string\"\n                    \"securityRoot\": \"string\"\n                }\n            }\n        ]\n        \"data\": \"string\"\n        \"to\": [\n            [{\n                    \"type\": \"string\"\n                    \"quantity\": \"string\"\n                    \"assetCode\": \"string\"\n                    \"metadata\": \"string\"\n                    \"securityRoot\": \"string\"\n                }\n            ]\n        ]\n        \"propositionType\": \"string\"\n        \"from\": [\n            [\n                \"string\"\n            ]\n        ]\n        \"minting\": true\n        \"txId\": \"string\"\n        \"boxesToRemove\": [\n            \"string\"\n        ],\n        \"fee\": \"string\"\n    }\n}",
      "language": "json"
    }
  ]
}
[/block]
We now have to wait a short period for the transaction to be forged (you should be able to confirm this by using the `topl_transactionById` RPC method through Postman)

Once the transaction has been forged, you can verify that the output of the transaction is similar to the one that you received after broadcasting the transaction. 

# Conclusion

In this guide, we have shown the process of developing a Topl certificate based program using document certification as a simple but useful example. We have developed and tested locally in this tutorial, but it is fairly straightforward to deploy it to one of the real Topl networks as well (either Valhalla or the Toplnet).