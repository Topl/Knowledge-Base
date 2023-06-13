---
title: "Installing Bifrost"
slug: "installing-bifrost"
hidden: false
createdAt: "2021-10-04T20:22:18.615Z"
updatedAt: "2021-10-05T14:17:33.658Z"
---
### Overview

This guide will show you how to compile and install `bifrost` into your operating system of choice, directly from the source code. It will enable you to interact with the **Topl** blockchain, including but not limited to sending/receiving **transactions**, minting/burning customizable **assets**, posting verifiable **metadata** into the blockchain, and so much more!

:::tip

If you want to avoid compiling the binaries yourself, you can download the latest version of Bifrost from the links below:

- [Bifrost](https://github.com/Topl/Bifrost/releases/latest/)

Bifrost can be built and run on **Windows** and **MacOS**, but we recommend that node operators use **Linux** to take advantage of associated performance advantages.

:::

### Prerequisites

To set up the components, you will need:

- **Windows**, **MacOS**, or **Linux** for your operating system
- **CPU** with at least **2** cores (recommended **4**)
- **4GB** of RAM (recommended RAM: **8GB**) and at least **20GB** of free disk space (Recommended **80GB** of free disk space

### Choose your Platform

- [Linux | MacOS](#linux--macos)
- [Windows](#windows)

## Linux & MacOS

In this section, we will walk you through the process of downloading, compiling, and installing `bifrost` into your **Linux-based** or **Mac-OS** operating system.

### Installing Operating System Dependencies

To download the source code and build it, you need the following packages and tools on your Linux system:

- the version control system `git`
- curl
- unzip
- zip
- GraalVM compatible Java SDK (GraalVM 21+)
- the SBT Scala Compiler (version `1.5.5` or above)
- Java 11

In Redhat, Fedora, and Centos:

```sh
sudo yum update -y
sudo yum install git curl unzip zip -y
```

For Debian/Ubuntu, use the following instead:

```sh
sudo apt-get update -y
sudo apt-get install git curl unzip zip -y
```

For MacOS, all necessary tools should be installed with the following packages and tools for your MacOS system:

- [Xcode](https://developer.apple.com/xcode) - The Apple Development IDE and SDK/Tools
- [Xcode Command Line Tools](https://developer.apple.com/xcode/features/), you can install it by typing `xcode-select --install` in the terminal.
- [Homebrew](https://brew.sh) - The Missing Package Manager for MacOS (or Linux)

#### Installing GraalVM and SBT

The fastest way to install **SBT** and **GraalVM** is to use  [SDKMAN](https://sdkman.io/)

Use the following command to install `SDKMAN`

```sh
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

Please follow the instructions and provide the necessary input to the installer if required. Once complete, you should have `SDKMAN` installed to your system.

:::info

`SDKMAN` will try to detect your shell and add itself to the environment variables. Please restart your shell/terminal after installing `SDKMAN`

:::

 You can check if `SDKMAN` has been installed correctly by typing `sdk version` into the terminal. You should see something similar to the following:

```sh
sdkman 5.0.0+51
```

#### Install GraalVM

- Install Graalvm using SDKMAN
```sdk install java 21.1.0.r11-gr1```

#### Install SBT

- `sbt` is required to build Bifrost from source and may be installed by running the following commands
```sdk install sbt```

Note that any version of sbt < `1.5.5` should be able to install and switch to the required version.

Finally, we check if we have the correct `sbt` and `java` versions installed.

Check `sbt` version:

```sh
sbt sbtVersion
```

You should see something like this

```sh
$ sbt 'inspect sbtVersion'
[info] Set current project to my_user (in build file:/Users/my_user/)
[info] Setting: java.lang.String = 0.11.1
[info] Description:
[info]  Provides the version of sbt.  This setting should be not be modified.
[info] Provided by:
[info]  */*:sbtVersion
[info] Defined at:
[info]  (sbt.Defaults) Defaults.scala:68
[info] Delegates:
[info]  *:sbtVersion
[info]  {.}/*:sbtVersion
[info]  */*:sbtVersion
[info] Related:
[info]  */*:sbtVersion
```

Check `java` version:

```sh
java --version
```

You should see something like this

```sh
java version "1.11.0_55"
Java(TM) SE Runtime Environment (build 1.7.0_55-b13)
Java HotSpot(TM) 64-Bit Server VM (build 24.55-b03, mixed mode)
```

:::caution

Please confirm that the versions you have installed match the recommended versions above. If not, check if you have missed any of the previous steps.

:::

#### Downloading and Compiling

First, download Bifrost from Github

```sh
git clone git@github.com:Topl/Bifrost.git
cd Bifrost
git fetch --all --recurse-submodules --tags
```

Switch the repository to the latest tagged commit:

```sh
git checkout tags/1.8.0
```

:::caution

You can check the latest available version/tag by visiting the `bifrost` [Github-Release](https://github.com/Topl/Bifrost/releases) page. At the time of writing this, the current version is `1.8.0`.

:::

#### Compiling the node

We can now build the `Scala-based` `bifrost-node` to produce executables.

```bash
sbt compile
```

Congratulations, you have successfully installed Topl `bifrost` into your Linux or MacOS system! 🎉🎉🎉

## Windows

:::caution

Currently, the **Windows** installation guide is still in progress. In the meantime, we recommend using [WSL (Windows Subsystem for Linux)](https://docs.microsoft.com/en-us/windows/wsl/) to get a Linux environment on top of Windows. Once installed, you can use the [Linux](#linux) guide to install and run `bifrost` within **WSL**.

:::
