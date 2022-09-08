---
title: "Key Management"
slug: "key-management"
hidden: false
createdAt: "2021-03-25T20:16:16.240Z"
updatedAt: "2021-06-15T15:56:53.684Z"
---
Key Management as it currently exists in blockchains is unfamiliar to the vast majority of the population. It is not as simple as signing up for an address with your email and password and can be intimidating at first blush.

If not understood properly, poor key management can result in loss of access to your address and any assets held there.

Let's take a look at how Topl's makes key management more developer friendly. 

# BramblJS KeyManager 
The <<glossary:KeyManager>> object is the primary API for interacting with Topl keyfiles in BramblJS. The object takes four arguments in its constructor, which defines different properties of the keyfiles. 
[block:tutorial-tile]
{
  "title": "Get Various KeyManagement Attributes",
  "emoji": "🌪️",
  "backgroundColor": "#a0a867",
  "slug": "get-various-keymanagement-attributes",
  "_id": "605cff55de3c310042341685",
  "id": "605cff55de3c310042341685",
  "link": "https://topl.readme.io/v1.3.0/recipes/get-various-keymanagement-attributes"
}
[/block]

[block:tutorial-tile]
{
  "title": "Lock and Unlock Keys",
  "emoji": "💿",
  "backgroundColor": "#4b2f75",
  "slug": "lock-and-unlock-keys",
  "_id": "605cfe7dc052a70079ec4d89",
  "id": "605cfe7dc052a70079ec4d89",
  "link": "https://topl.readme.io/v1.3.0/recipes/lock-and-unlock-keys"
}
[/block]

[block:tutorial-tile]
{
  "title": "Retrieve Keyfile information from KeyManager",
  "emoji": "⏲️",
  "backgroundColor": "#b1e1a8",
  "slug": "retrieve-keyfile-information-from-keymanager",
  "_id": "605cfce18a6ded005d97e255",
  "id": "605cfce18a6ded005d97e255",
  "link": "https://topl.readme.io/v1.3.0/recipes/retrieve-keyfile-information-from-keymanager"
}
[/block]
#BramblSC Key Ring

The BramblSC Key Ring allows you to manage multiple addresses at a time including reading your balance, sending transactions, and more! 

The Key Ring is only a tool for managing your Topl addresses. That means you can switch between BramblSC Key Ring and BramblJS Key Manager at any time. The advantage of using the Key Ring is that you can manage several addresses from one application.

It can be thought of in terms of a cold wallet that stores your keys offline and only uses the keys to sign transactions locally. This makes it very secure and less prone to hacker attacks. 

In addition, you can use the Key Ring to sign transactions using your private key file.

The Key Ring is created automatically when instantiating a Brambl instance, and uses the key_file_directory parameter as the export location for the key-file that is generated when instantiating a Brambl instance. 

The Key Ring is able to create a new secure Topl Keyfile for you, or work with an existing Keyfile. 

# Initial Setup

In each of the following examples, we'll start with the following objects in scope


[block:code]
{
  "codes": [
    {
      "code": "import akka.actor.ActorSystem\nimport cats.data.{EitherT, NonEmptyChain}\nimport cats.implicits._\nimport co.topl.akkahttprpc.RpcClientFailure\nimport co.topl.akkahttprpc.implicits.client.rpcToClient\nimport co.topl.attestation.keyManagement.{KeyRing, KeyfileCurve25519, PrivateKeyCurve25519}\nimport co.topl.attestation.{Address, AddressEncoder, PublicKeyPropositionCurve25519}\nimport co.topl.client.Provider.PrivateTestNet\nimport co.topl.modifier.box.{AssetCode, AssetValue}\nimport co.topl.rpc.ToplRpc\nimport co.topl.rpc.ToplRpc.NodeView._\nimport co.topl.rpc.ToplRpc.Transaction.{BroadcastTx, RawArbitTransfer, RawAssetTransfer, RawPolyTransfer}\nimport co.topl.rpc.implicits.client._\nimport io.circe.syntax.EncoderOps\n\nimport scala.concurrent.{ExecutionContext, Future}\n\nobject exampleState {\n  type RpcErrorOr[T] = EitherT[Future, RpcClientFailure, T]\n\n  val provider: Provider = new PrivateTestNet(apiKey = \"topl_the_world!\")\n\n  implicit val system: ActorSystem = ActorSystem()\n  implicit val executionContext: ExecutionContext = system.dispatcher\n\n  val externalAddress: Seq[Address] = List(\n    \"AUAvJqLKc8Un3C6bC4aj8WgHZo74vamvX8Kdm6MhtdXgw51cGfix\",\n    \"AU9upSwu8MtmQz6EBMuv34bJ4G8i6Aw64xxRShJ3kpZRec5Ucp9Q\",\n    \"AU9NkZmX5Pch2kUA28GUtv9m4bNaLNtKLoFXphcAAc9PUQXinXRm\",\n    \"AU9avKWiVVPKyU9LoMqDpduS4knoLDMdPEK54qKDNBpdnAMwQZcS\",\n    \"AU9Xs4B5HnsTiYGb7D71CCxg5mYhaQv1WH3ptfiGbV4LUGb87W54\",\n    \"AUA3RmKwr39nVQFFTV1BQFELbFhJQVWfFDdS5YDx7r1om5UCbqef\",\n    \"AU9dn9YhqL1YWxfemMfS97zjVXR6G9QX74XRq1jVLtP3snQtuuVk\",\n    \"AUANVY6RqbJtTnQS1AFTQBjXMFYDknhV8NEixHFLmeZynMxVbp64\",\n    \"AU9sKKy7MN7U9G6QeasZUMTirD6SeGQx8Sngmb9jmDgNB2EzA3rq\",\n    \"AUAbSWQxzfoCN4FizrKKf6E1qCSRffHhjrvo2v7L6q8xFZ7pxKqh\"\n  ).map(s => AddressEncoder.fromStringWithCheck(s, provider.networkPrefix).get)\n\n  val keyRing: KeyRing[PrivateKeyCurve25519, KeyfileCurve25519] =\n    KeyRing.empty[PrivateKeyCurve25519, KeyfileCurve25519]()(\n      provider.networkPrefix,\n      PrivateKeyCurve25519.secretGenerator,\n      KeyfileCurve25519Companion\n    )\n\n  val assetCode: AssetCode = AssetCode(1: Byte, externalAddress.head, \"test_1\")\n\n  def genKeys(): Unit = keyRing.generateNewKeyPairs(10, Some(\"test\"))\n  def clearKeyRing(): Unit = keyRing.addresses.map(keyRing.removeFromKeyring)\n\n}",
      "language": "scala"
    }
  ]
}
[/block]
#Create a new key and add it to the keyRing

Here we will generate a new keyfile and add the newly generated key to the KeyRing as a side effect. Note: Anytime a new address is generated, it is added to the keyRing.
[block:code]
{
  "codes": [
    {
      "code": "object CreateANewKeyInTheKeyRing {\n  \n  import exampleState._\n  import provider._\n  \n  val genKeyfile: Either[RpcClientFailure, KeyfileCurve25519] = Brambl.generateNewCurve25519Keyfile(\"password\", keyRing)\n  \n  def main(args: Array[String]): Unit =\n    genKeyfile match {\n      case Left(value)  => println(s\"Got some error: $value\")\n      case Right(value) => println(s\"Got a success response: ${value.asJson}\")\n    }\n}\n  ",
      "language": "scala"
    }
  ]
}
[/block]
#How to reinstate a keyfile and get its Json.

Keyfiles are most easily transported using encrypted JSON files. These key files are encrypted using a symmetric "password" key to generate the ciphertext. 
[block:code]
{
  "codes": [
    {
      "code": "object ReinstateAKeyFile {\n  import exampleState._\n  import provider._\n\n  val response: Either[RpcClientFailure, Address] = for {\n    keyfileJson <- CreateANewKeyInTheKeyRing.genKeyfile.map { keyfile =>\n      println(s\"keyRing after generating a new key: ${keyRing.addresses}\")\n      keyRing.removeFromKeyring(keyfile.address) // side effect mutation of keyRing\n      println(s\"keyRing after removing generated key: ${keyRing.addresses}\")\n      keyfile.asJson\n    }\n    address <- Brambl.importCurve25519JsonToKeyRing(keyfileJson, \"test\", keyRing)\n  } yield {\n    println(s\"keyRing after re-importing the generated key from Json: ${keyRing.addresses}\")\n    address\n  }\n\n  def main(args: Array[String]): Unit =\n    response match {\n      case Left(value)  => println(s\"Got some error: $value\")\n      case Right(value) => println(s\"Got a success response: $value\")\n    }\n}",
      "language": "scala"
    }
  ]
}
[/block]
# Example of failing to reinstate a keyfile from Json

An example response when an invalid password is provided at decryption time.
[block:code]
{
  "codes": [
    {
      "code": "object FailedToReinstateAKeyFile {\n  import exampleState._\n  import provider._\n\n  val response: Either[RpcClientFailure, Address] = for {\n    keyfileJson <- CreateANewKeyInTheKeyRing.genKeyfile.map { keyfile =>\n      println(s\"keyRing after generating a new key: ${keyRing.addresses}\")\n      keyRing.removeFromKeyring(keyfile.address) // side effect mutation of keyRing\n      println(s\"keyRing after removing generated key: ${keyRing.addresses}\")\n      keyfile.asJson\n    }\n    address <- Brambl.importCurve25519JsonToKeyRing(keyfileJson, \"someOtherPassword\", keyRing)\n  } yield {\n    println(s\"keyRing after re-importing the generated key from Json: ${keyRing.addresses}\")\n    address\n  }\n\n  def main(args: Array[String]): Unit =\n    response match {\n      case Left(value)  => println(s\"Got some error: $value\")\n      case Right(value) => println(s\"Got a success response: $value\")\n    }\n}",
      "language": "scala"
    }
  ]
}
[/block]