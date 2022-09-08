---
title: "Sending Polys"
slug: "sending-polys"
hidden: false
createdAt: "2021-04-05T15:04:23.454Z"
updatedAt: "2021-06-15T16:15:36.168Z"
---
# Content
* Creation of two addresses
* Acquirement of test polys
* Sending a transaction 
* Balance reading of the addresses

# Introduction
This tutorial aims to give you a brief introduction to how to send Polys utilizing our <<glossary:BaaS>> and will demonstrate some key features while working on the Topl blockchain network. 

This tutorial is beginner-friendly. We will be utilizing <<glossary:BaaS>>, therefore, you must already have access to an account. 
[block:callout]
{
  "type": "info",
  "title": "Prerequisites:",
  "body": "1.) BaaS Project: Please follow [this guide](https://topl.readme.io/docs/getting-started-with-topls-blockchain-as-a-service-baas-platform) end to end to create a BaaS project for your organization.\n\n2.) [Technical Prerequisites](https://topl.readme.io/docs/prerequisites): In addition to the prerequisites in the post, please also follow the instructions to install Brambl [here](https://topl.readme.io/docs/brambljs-installation-guide)"
}
[/block]
# Creating addresses

Let's first import two addresses from keyfiles. 
[block:callout]
{
  "type": "info",
  "title": "Helpful Link:",
  "body": "Please follow the instructions [here](https://topl.readme.io/docs/how-topl-addresses-are-generated) to generate and export a keyfile for use in our tutorial!\n\nPlease replace the specific key file and password variables below with the variables of the addresses that you have generated in this step."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "const myKeyPath1 = \"valhalla_.json\";\nconst myKeyPath2 = \"valhalla_key_file.json\";\n\nconst keyManager1 = BramblJS.KeyManager({\n    password: \"myPassword1\",\n    keyPath: myKeyPath1\n});\n\nconst keyManager2 = BramblJS.KeyManager({\n    password: \"myPassword2\",\n    keyPath: myKeyPath2\n})",
      "language": "javascript"
    },
    {
      "code": "object state {\n  type RpcErrorOr[T] = EitherT[Future, RpcClientFailure, T]\n\n  val provider: Provider = new PrivateTestNet(apiKey = \"topl_the_world!\")\n\n  implicit val system: ActorSystem = ActorSystem()\n  implicit val executionContext: ExecutionContext = system.dispatcher\n\n  val externalAddress: Seq[Address] = List(\n    \"AUAvJqLKc8Un3C6bC4aj8WgHZo74vamvX8Kdm6MhtdXgw51cGfix\",\n    \"AU9upSwu8MtmQz6EBMuv34bJ4G8i6Aw64xxRShJ3kpZRec5Ucp9Q\"\n  ).map(s => AddressEncoder.fromStringWithCheck(s, provider.networkPrefix).get)\n\n  val keyRing: KeyRing[PrivateKeyCurve25519, KeyfileCurve25519] =\n    KeyRing.empty[PrivateKeyCurve25519, KeyfileCurve25519]()(\n      provider.networkPrefix,\n      PrivateKeyCurve25519.secretGenerator,\n      KeyfileCurve25519Companion\n    )\n\n  val assetCode: AssetCode = AssetCode(1: Byte, externalAddress.head, \"test_1\")\n\n  def genKeys(): Unit = keyRing.generateNewKeyPairs(2, Some(\"test\"))\n  def clearKeyRing(): Unit = keyRing.addresses.map(keyRing.removeFromKeyring)\n  }\n\nobject CreateANewKeyInTheKeyRing {\n  import state._\n  import provider._\n\n  val genKeyfile: Either[RpcClientFailure, KeyfileCurve25519] = Brambl.generateNewCurve25519Keyfile(\"test\", keyRing)\n\n  def main(args: Array[String]): Unit =\n    genKeyfile match {\n      case Left(value)  => println(s\"Got some error: $value\")\n      case Right(value) => println(s\"Got a success response: ${value.asJson}\")\n    }\n}\n\nobject ReinstateAKeyFile {\n  import exampleState._\n  import provider._\n\n  val response: Either[RpcClientFailure, Address] = for {\n    keyfileJson <- CreateANewKeyInTheKeyRing.genKeyfile.map { keyfile =>\n      println(s\"keyRing after generating a new key: ${keyRing.addresses}\")\n      keyRing.removeFromKeyring(keyfile.address) // side effect mutation of keyRing\n      println(s\"keyRing after removing generated key: ${keyRing.addresses}\")\n      keyfile.asJson\n    }\n    address <- Brambl.importCurve25519JsonToKeyRing(keyfileJson, \"test\", keyRing)\n  } yield {\n    println(s\"keyRing after re-importing the generated key from Json: ${keyRing.addresses}\")\n    address\n  }\n\n  def main(args: Array[String]): Unit =\n    response match {\n      case Left(value)  => println(s\"Got some error: $value\")\n      case Right(value) => println(s\"Got a success response: $value\")\n    }\n}",
      "language": "scala"
    }
  ]
}
[/block]
As you can see, you do not need to create an address or keyfile through the Topl network, this can all be done by the Brambl library. 

# Congratulations :confetti-ball: 
You have now successfully loaded two addresses. 

# Create and send a Poly Transfer
In the first transaction example, we'll create a raw poly transfer request. The RPC interface then allows us to target a Bifrost instance through the provider (in Scala) and through the Requests module in Javascript. 

The response of this raw poly transfer request is a raw poly transaction (an unsigned PolyTransfer). Bifrost by default will assume that all input boxes of the same type should be used for the inputs of a transaction. (NOTE: Usually this is alright but be aware of this behavior when designing asset systems that will require granular control over asset instances).

Following the receipt of the raw PolyTransfer, we now need to generate a signature for the transaction. This signature serves as proof that we have knowledge of the private keys that lock the input boxes that are included in this transaction. Practically, this means using the keyRing (SC) or keyManager (JS) to generate a signed version of the transaction that was received from Bifrost. 

After signing the message, the transaction can be sent back to the Bifrost node to be broadcast amongst the clients and its peers. (**NOTE**: A successful response, Status: 200, **DOES NOT** indicate that your transaction has or will be confirmed into the blockchain ledger state. You must periodically poll or schedule a job to determine the status of pending transactions using the unique txId property to address the transaction. Future work on the Bifrost client will integrate event sourcing in a "push" notification style rather than requiring users to pull.)
[block:code]
{
  "codes": [
    {
      "code": "const brambl = new BramblJS({\n        networkPrefix: \"valhalla\",\n        KeyManager: keyManager,\n        Requests: {\n            url: \"https://staging.vertx.topl.services/valhalla/{{yourProjectId}}\", // set url\n            apiKey: \"your_valhalla_api_key\"\n        }\n})\n\nconst address = brambl.keyManager.address;\n\nconst rawAssetParams = {\n  \"propositionType\": \"PublicKeyCurve25519\",\n  \"recipients\": [\n    [address, 2]\n  ],\n  \"sender\": [address],\n  \"changeAddress\": address,\n  \"fee\": \"100000000\"\n};\n\nconst pollParams = {\n    \"timeout\": 90,\n    \"interval\": 3,\n    \"maxFailedQueries\": 10\n};\n\nbrambl.transaction('createRawPolyTransfer', rawAssetParams)\n.catch((e) => console.error(e))\n.then(res => {console.log('Unconfirmed transaction'); console.log(res); return res })\n.then(res => brambl.pollTx(res.result.txId, pollParams))\n.then(res => console.log(res))\n.catch((e) => console.error(e))",
      "language": "javascript"
    },
    {
      "code": "object CreateAnDSendRawPolyTransfer {\n\n  /** import starter state */\n  import exampleState._\n\n  /** bring application specific network and credential provider into scope */\n  import provider._\n\n  /** Required arguments to request a Poly transfer from Bifrost (as opposed to building the Transaction directly yourself) */\n  val params: RawPolyTransfer.Params = ToplRpc.Transaction.RawPolyTransfer.Params(\n    propositionType = PublicKeyPropositionCurve25519.typeString, // required fixed string for now, exciting possibilities in the future!\n    sender = NonEmptyChain.fromSeq(externalAddress).get, // Set of addresses whose state you want to use for the transaction\n    recipients = NonEmptyChain((externalAddress.head, 10)), // Chain of (Recipients, Value) tuples that represent the output boxes\n    fee = 0, // fee to be paid to the network for the transaction (unit is nanoPoly)\n    changeAddress = externalAddress.head, // who will get ALL the change from the transaction?\n    data = None // upto 128 Latin-1 encoded characters of optional data\n  )\n\n  /** Here we construct the BraodcastTx.Response which is the final response after\n    * 1. Request the raw transaction from Bifrost\n    * 2. Generate a signed copy of the transaction using all addresses in the keyRing\n    * 3. Send the newly signed transaction back to Bifrost\n    *\n    * NOTE: The ToplRpc client implicits `import co.topl.rpc.implicits.client._` must be in scope to bring all of the\n    * implicit Topl codecs into scope.\n    */\n  val response: RpcErrorOr[BroadcastTx.Response] = for {\n    rawTx <- ToplRpc.Transaction.RawPolyTransfer.rpc(params).map(_.rawTx)\n//    signTx <- EitherT(Future(Brambl.signTransaction(keyRing.addresses, rawTx)(keyRing.generateAttestation)))\n    signTx <- EitherT.right {\n      clearKeyRing()\n      genKeys()\n      val msg2Sign = rawTx.messageToSign\n      val signFunc = (addr: Address) => keyRing.generateAttestation(addr)(msg2Sign)\n      val signatures = keyRing.addresses.map(signFunc).reduce(_ ++ _)\n      Future(rawTx.copy(attestation = signatures))\n    }\n    broadcastTx <- ToplRpc.Transaction.BroadcastTx.rpc(ToplRpc.Transaction.BroadcastTx.Params(signTx))\n  } yield broadcastTx\n\n  def main(args: Array[String]): Unit =\n    response.value.foreach {\n      case Left(value)  => println(s\"Got some error: $value\")\n      case Right(value) => println(s\"Got a success response: $value\")\n    }\n\n}",
      "language": "scala"
    }
  ]
}
[/block]
Once you have run this script, Brambl will take care of a lot of things for you. First, Brambl will validate your transaction parameters. Then your address will be checked to make sure there are sufficient funds. After checking, it will sign your transaction and broadcast it to the Topl network. 

Your transaction will run through multiple stages. Initially, the transaction gets put into the mempool which indicates that a transaction is in progress. 

This stage may take some seconds as a Topl forger will have to add the transaction to a block. After the transaction has been sent, BramblJS will poll Topl and wait until it has been added to the chain to return a response. You have control over the parameters for the polling through the pollParams. 
[block:callout]
{
  "type": "info",
  "title": "BramblSC Note",
  "body": "Note that in BramblSC there is no polling functionality built-in. You can write your own polling logic using `brambl.rpc.lookupTransaction(tx1)` which will return a result once your transaction has been added to a block."
}
[/block]
The final output provides all the information about the successfully added transaction. 
[block:code]
{
  "codes": [
    {
      "code": "{\n  blockNumber: '5854',\n  blockId: '26fpY9VLSuqR3wFGdNHJo3hSYrFcB9j3nmY4NFdggDCCZ',\n  txType: 'PolyTransfer',\n  timestamp: 1617637050038,\n  signatures: {\n    R1JPiKpiLkzxa2PaUmUGgWsfk5qhp6H3pDXt7mwa38rs: '9wN6UoBVa5kd87hwb8u7MUHq9a5L3DKnHwQPxRyaetbWxEaQzMb1ztD5DGy7M6U6cuUpHezU7JcWhp7YvQWpEFUP'\n  },\n  newBoxes: [\n    {\n      nonce: '-1286694638831798534',\n      id: 'AyCFgvZM3jwN9kQJt5GPFBZAfBLH7iDc1oEmSd71gSUC',\n      evidence: 'LQ9nmM1uiThbsgEU4bVk95SKwkxpffW4E3kdGT8hY5oE',\n      type: 'PolyBox',\n      value: [Object]\n    },\n    {\n      nonce: '-1413590519895954081',\n      id: '39LesuALQpEZELP7vKnJNHksTVjfThhtgwMG4pbYeWF7',\n      evidence: 'LQ9nmM1uiThbsgEU4bVk95SKwkxpffW4E3kdGT8hY5oE',\n      type: 'PolyBox',\n      value: [Object]\n    }\n  ],\n  data: null,\n  to: [\n    [\n      '5jbNEm3Js83e7kNpbpsTVv7rbFnT8P6mszgcrZqYWrmQKqSQtiZh',\n      [Object]\n    ],\n    [\n      '5jbNEm3Js83e7kNpbpsTVv7rbFnT8P6mszgcrZqYWrmQKqSQtiZh',\n      [Object]\n    ]\n  ],\n  propositionType: 'PublicKeyCurve25519',\n  from: [\n    [\n      '5jbNEm3Js83e7kNpbpsTVv7rbFnT8P6mszgcrZqYWrmQKqSQtiZh',\n      '7626736458330490283'\n    ],\n    [\n      '5jbNEm3Js83e7kNpbpsTVv7rbFnT8P6mszgcrZqYWrmQKqSQtiZh',\n      '-34701561361497174'\n    ]\n  ],\n  minting: false,\n  txId: 'mfra3X4m2ESfSma2tR7yNv5NGb2c2iTyQ2YYbjEonjjG',\n  boxesToRemove: [\n    '72df5JpJoUMr9yWLpQHGBWYQMEzw1Wepon1UnEaq3Voh',\n    'HQmR65rUghdzHptx8dPj4vw2m1DYYUKc9ooPurQAXBZP'\n  ],\n  fee: '100000000'\n}",
      "language": "json"
    }
  ]
}
[/block]
#Done :confetti-ball: 
You can't believe it? You can use Brambl to search for your transaction given your transactionId. You can find your transactionId in the body that is returned after broadcasting your transaction. After you have found your transaction through Brambl, you can utilize the information that it returns and find the data for that transaction. 
[block:code]
{
  "codes": [
    {
      "code": "brambl.requests.getTransactionById({transactionId: txId});",
      "language": "javascript"
    },
    {
      "code": "brambl.rpc.lookupTransaction(txId)",
      "language": "scala"
    }
  ]
}
[/block]