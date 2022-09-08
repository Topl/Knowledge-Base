---
title: "BramblSC Examples"
slug: "bramblsc-examples"
hidden: true
createdAt: "2021-06-15T15:46:40.834Z"
updatedAt: "2021-06-15T15:47:58.828Z"
---
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