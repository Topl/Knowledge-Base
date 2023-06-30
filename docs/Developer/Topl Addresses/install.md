---
title: "Install"
slug: "install"
hidden: false
createdAt: "2021-08-27T19:57:21.680Z"
updatedAt: "2021-10-18T20:07:14.034Z"
---

## Install Anywhere (npm)

If you use Node.js, you can install Topl Addresses using [npm](https://www.npmjs.com/) by running `npm install -g bip_topl`

However, please note that this will install the pure JavaScript implementation of Topl Addresses, which runs somewhat slower than the other options listed here. But it has the same interface, so it'll be easy to swap in another implementation later if you need a bit more speed!

Once you have run the above command, don't forget to `require()` it as a library!

When install via npm, Topl Addresses supports a Javascript API that aims to be compatible with Node. Full compatibility is a work in progress.

## Dart Library

You can also use Dart Bip for Topl to get the speed of the Dart VM plus the ability to extend functions. To add it to an existing project:

1. [Install the Dart SDK](https://dart.dev/get-dart#automated-installation-and-updates). Make sure that its bin directory is [on your path](https://katiek2.github.io/path-doc/).
2. Create a pubspec.yaml file like this:

```yaml
name: my_project\ndev_dependencies:\n\tbip_topl: ^x.y.z
```

3. Run dart pub get

Learn more about [writing Dart code](https://dart.dev/guides/language/language-tour) (it's easy!)
