---
title: "Complex Asset Transfers"
slug: "complex-asset-transfers"
hidden: false
createdAt: "2021-07-01T13:57:25.440Z"
updatedAt: "2021-07-01T19:53:09.605Z"
---
# Overview

Inside each address, there are two parts associated with assets as part of their state: 
 1. A public key: to control access of the assets
 2. A balance: consisting of multiple boxes, the sum of the amounts contained in those boxes is the number of assets in this address

Assets in an address are transferred by signing using the private key corresponding to the public key as we have explored in the first asset tutorial. 

# Split Boxes

One asset box can be split into multiple asset boxes. This is mostly used to send assets to others while returning the change. Below is an example of splitting it into two. The total number of assets are conserved after the split i.e. x0 + x1 + y0 + y1 = x + y


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a0082fc-utxo_split.png",
        "utxo_split.png",
        1270,
        684,
        "#edebea"
      ]
    }
  ]
}
[/block]
The relevant code is listed below with self-explanatory comments inline
[block:code]
{
  "codes": [
    {
      "code": "const BramblJS = require(\"brambljs);\n\n/**\n\t* Sends a signed transaction\n  *\n  */\nasync function sendSignedTransaction(signedTransactionData, brambljs) {\n    let obj = {};\n    return new Promise((resolve, reject) => {\n        let e = brambljs.requests\n            .broadcastTx({ tx: signedTransactionData })\n            .then(function (result) {\n                obj.txId = result.result.txId;\n                obj.result = result.result;\n                resolve(obj);\n            })\n            .catch(function (err) {\n                console.error(err);\n                obj.error = err.message;\n                reject(err);\n            });\n        return e;\n    });\n}\n\n/**\n     * Sign transaction with tx object and private key\n     * @param {Object} txObject is the transaction object\n     * @return {(Promise|Object)} signed object with rawTransaction data to be uused for sending transaction\n     */\n    async function signTransaction(txObject, brambljs) {\n        let obj = {};\n        return await brambljs.addSigToTx(txObject.messageToSign.result, txObject.keys).catch(function (err) {\n            console.error(err);\n            obj.error = err.message;\n            return obj;\n        });\n    }\n\n/**\n \t* First signs a transaction, then sends the signedTransaction to the network to be confirmed into a block\n  *\n  */\nasync function signAndSendTransaction(txObject, brambljs) {\n    let obj = {};\n    return signTransaction(txObject, brambljs).then(function (value) {\n        if (value.error) {\n            obj.error = value.error;\n            return obj;\n        } else {\n            return sendSignedTransaction(value, brambljs).then(function (value) {\n                if (value.error) {\n                    obj.error = value.error;\n                    return obj;\n                } else {\n                    return value;\n                }\n            });\n        }\n    });\n}\n\n /**\n     * Gets the raw transaction object on the asset transaction you plan on signing before sending.\n     * Allows verification of the asset transaction is correct as well as providing the message to sign\n     * @param {Object} txObject is the req.body from the service that has passed validation\n     * @return {Object} is the completed object that contains data about poly transactions and the message to sign.\n     */\n    async function sendRawAssetTransaction(txObject, brambljs) {\n        let obj = {};\n        const formattedRecipients = [];\n        obj.keys = [txObject.senderKeyManager, txObject.issuerKeyManager]\n        const params = {\n            propositionType: txObject.propositionType,\n            recipients: txObject.recipients,\n            fee: txObject.fee,\n            sender: [txObject.senderKeyManager.address],\n            changeAddress: txObject.changeAddress,\n            data: txObject.data,\n            consolidationAddress: txObject.consolidationAddress,\n            minting: txObject.minting,\n            assetCode: txObject.assetCode,\n        };\n        return brambljs.requests\n            .createRawAssetTransfer(params)\n            .then(function (result) {\n                obj.messageToSign = result;\n                return obj;\n            })\n            .catch(function (err) {\n                console.error(err);\n                obj.err = err.message;\n                return obj;\n            });\n    }\n\nasync function assetTransaction(txObject, brambljs) {\n    // first create the rawAssetTransfer transaction\n    return sendRawAssetTransaction(txObject, brambljs).then(function(rpcResponse) {\n        if (rpcResponse.err) {\n            throw Error(rpcResponse.err);\n        }\n        // then sign and send the transaction\n        return signAndSendTransaction(rpcResponse, brambljs)\n    });\n}\n\nasync function split(senderKeyManager,assetIssuerKeyManager, recipientAddress, assetAmount, consolidationKeyManager, consolidationAmount, fee, securityRoot, metadata, assetCode, brambljs) {\n   \n  // send assetAmount of your asset to the recipient, then consolidationAmount to the consolidationAddress\n  const txObject = {\n        senderKeyManager: senderKeyManager,\n        issuerKeyManager: assetIssuerKeyManager,\n        recipients: [[\n            recipientAddress,\n            assetAmount,\n            securityRoot,\n            metadata\n        ]],\n        propositionType: \"PublicKeyCurve25519\",\n        changeAddress: senderKeyManager.address,\n        consolidationAddress: consolidationKeyManager.address,\n        minting: false,\n        fee: fee,\n        assetCode: assetCode\n    }\n\n    const pollParams = {\n        \"timeout\": 90,\n        \"interval\": 3,\n        \"maxFailedQueries\": 10\n    };\n\n    // first create the rawAssetTransfer transaction\n    await assetTransaction(txObject, brambljs).then(res => brambljs.pollTx(res.txId, pollParams));\n\n    txObject.senderKeyManager = consolidationKeyManager\n    txObject.recipients = [\n        [\n            consolidationKeyManager.address,\n            consolidationAmount,\n            securityRoot,\n            metadata\n        ]]\n    txObject.changeAddress = consolidationKeyManager.address\n\n    txObject.consolidationAddress = consolidationKeyManager.address\n  \n  // second, update the securityRoot and metadata on the assets that were sent to the consolidationAddress\n\n    return await assetTransaction(txObject, brambljs).then(res => brambljs.pollTx(res.txId, pollParams));\n}\n\n// Above are helper functions, main js logic here\n// please replace \"yourProjectId\" with your project id\nconst networkUrl = \"https://staging.vertx.topl.services/valhalla/{{yourProjectId}}\";\n// please replace \"yourApiKey\" with your apiKey\nconst apiKey = \"yourApiKey\";\n\nconst password = \"test\";\nconst networkPrefix = \"valhalla\";\n\n// please replace with your encrypted keyfile and password\nconst recipientKeyManager = BramblJS.KeyManager.importKeyFileFromDisk(\"src/valhalla_keyfiles/your_valhalla_key_file\", \"yourPassword\")\n\nconst brambljs = new BramblJS({\n    networkPrefix: networkPrefix,\n    password: password,\n    Requests: {\n        url: `${networkUrl}`,\n        apiKey: `${apiKey}`,\n    },\n    KeyManager: recipientKeyManager\n});\n\nconst assetCode = brambljs.createAssetCode(\"covfefe\");\n\n\nconst txObject = {\n    senderKeyManager: brambljs.keyManager,\n    issuerKeyManager: brambljs.keyManager,\n    recipients: [[\n        brambljs.keyManager.address,\n        10\n    ]],\n    propositionType: \"PublicKeyCurve25519\",\n    changeAddress: brambljs.keyManager.address,\n    consolidationAddress: brambljs.keyManager.address,\n    minting: true,\n    fee: 100,\n    assetCode: assetCode\n}\n\nconst pollParams = {\n    \"timeout\": 90,\n    \"interval\": 3,\n    \"maxFailedQueries\": 10\n};\n\nconst securityRoot = \"11111111111111111111111111111111\"\n\nconst metadata = \"metadata\"\n\nassetTransaction(txObject, brambljs).then(res => brambljs.pollTx(res.txId, pollParams)).then(res => console.log(split(brambljs.keyManager, brambljs.keyManager, \"3NK4UGDB1b1E9eYfPtRKwpMXoSCQFctwq2ptkwxjCRDHgxK9nt4P\", 5, brambljs.keyManager, 5,100,\n    securityRoot, metadata, assetCode, brambljs\n    )).then(function(result) {\n  \treturn result;\n\t});\n\n\n",
      "language": "javascript"
    }
  ]
}
[/block]
#Demo
Above we have the code to generate the asset, then split the assets.

#Step 1: Issue Polys
* Polys need to be added to the sending account of the transaction, there will need to be at least 300 nanopolys in your address in order for the code above to work properly. You can find out how to load your address with polys [at the Adding Polys page](doc:adding-polys) 

#Step 2: Issue Assets
* 10 Assets are issued in the code above

#Step 3: Split Asset Box
* The Asset Box of 10 assets are split into two asset boxes: one containing 5 assets, and the other box containing 5 assets. Those boxes are owned by the recipientAddress and the consolidationAddress respectively

#Step 4: Make sure that the securityRoot and metadata are attached to the box owned by the consolidationAddress
 - By default, there is no securityRoot and metadata attached to the boxes that are sent to the consolidationAddress. Thus, we need to make another transaction to add that information back to the box.