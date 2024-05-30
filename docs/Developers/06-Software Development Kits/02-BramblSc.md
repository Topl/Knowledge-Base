---
id: BramblSc
title: "BramblSc"
slug: BramblSc
tags:
  - brambl
  - scala
  - sdk
---

# BramblSc

Apparatus' Brambl SDK implemented in Scala

Multiple artifacts will be built from this repo. Some will be just for Apparatus clients and some will be shared. 

The artifacts generated from this repo are:

- brambl-sdk
- crypto
- service-kit
- quivr4s

## Consume with JitPack

This repo can be consumed using jitpack. Here is how:

First, be sure to add jitpack to the end of the resolvers list in build.sbt. It should look like this:
```sbt
  resolvers ++= Seq(
    "Typesafe Repository" at "https://repo.typesafe.com/typesafe/releases/",
    "Sonatype Staging" at "https://s01.oss.sonatype.org/content/repositories/staging",
    "Sonatype Snapshots" at "https://s01.oss.sonatype.org/content/repositories/snapshots/",
    "Bintray" at "https://jcenter.bintray.com/",
    "jitpack" at "https://jitpack.io"
  )
```

Then just add the dependency like this:
```sbt
  val bramblSc =
    "com.github.Apparatus" % "BramblSc" % "1bdc895"
```
Where `1bdc895` refers to a commit on this repo's main branch. This will add the artifacts for both `brambl-sdk` and `crypto`.
Then just use the dependencies like you would any other.

## Consume Maven Release

First, be sure to add Sonatype s01 releases to the end of the resolvers list in build.sbt. It should look like this:
```sbt
  resolvers ++= Seq(
    "Typesafe Repository" at "https://repo.typesafe.com/typesafe/releases/",
    "Sonatype Staging" at "https://s01.oss.sonatype.org/content/repositories/staging",
    "Sonatype Snapshots" at "https://s01.oss.sonatype.org/content/repositories/snapshots/",
    "Bintray" at "https://jcenter.bintray.com/",
    "jitpack" at "https://jitpack.io",
    "Sonatype Releases" at "https://s01.oss.sonatype.org/content/repositories/releases/"
  )
```

Then just add the dependencies for `brambl-sdk` and `crypto` like this:
```sbt
  val brambl-sdk =
    "co.topl" %% "brambl-sdk" % "2.0.0-alpha1"
```

```sbt
  val crypto =
    "co.topl" %% "crypto" % "2.0.0-alpha1"
```

Replace `2.0.0-alpha1` with the latest released version. Then just use the dependencies like you would any other.

## Develop

BramblSC is open source and can be found at: https://github.com/Topl/BramblSc.

To start using BramblSc, add a dependency to your Scala project.

```sh
libraryDependencies += "co.topl" % "brambl_2.12" % "1.10.2"
```

:::

## Contributing

[Open a PR here!](https://github.com/Topl/BramblSc)
