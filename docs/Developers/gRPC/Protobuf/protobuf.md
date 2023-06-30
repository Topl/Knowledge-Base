---
id: protobuf
title: Protobuf
tags:
  - grpc
  - protobuf
---

Topl uses gRPC and Protobuf to handle communication channel formatting. Protobut specs can be compiled into their respective languages via [protoc-installation](https://grpc.io/docs/protoc-installation/).

A few examples:

### Scala

1. `cd build/scala`
1. `sbt publishLocal`
1. Check the logs to see the org/package/version that was published, and use as a normal SBT dependency in a different project

- i.e. `"co.topl" %% "protobuf-fs2" % "b56d2815"`

### Dart

1. Install Dart [protoc_plugin](https://pub.dev/packages/protoc_plugin)
1. `cd build/dart`
1. `sh compile_protos.sh`
1. Reference the `protobuf-specs/build/dart` directory as a pubspec file dependency

```sh
dependencies:
topl_protobuf:
  path: /path/to/protobuf-specs/build/dart
```

:::info

[Browse the protobuf schema here](https://buf.build/seanattopl/topl-protobuf-specs)

:::
