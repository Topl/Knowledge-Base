---
title: "Installing"
slug: "installing"
hidden: false
createdAt: "2021-10-08T19:06:23.744Z"
updatedAt: "2021-10-12T14:15:33.049Z"
---
## Install Anywhere (npm) 
If you use Node.js, you can install BramblDart using [npm](https://www.npmjs.com/) by running `npm install -g brambldart`

However, please note that this will install the pure JavaScript implementation of BramblDart, which runs somewhat slower than the other options listed here. But it has the same interface, so it'll be easy to swap in another implementation later if you need a bit more speed! 

Once you have run the above command, don't forget to `require()` it as a library! 

When install via npm, BramblDart supports a Javascript API that aims to be compatible with Node. Full compatibility is a work in progress.

## Dart Library
You can also use BramblDart as a Dart package to get the speed of the Dart VM plus the ability to extend functions. To add it to an existing project: 

1.) [Install the Dart SDK](https://dart.dev/get-dart#automated-installation-and-updates). Make sure that its bin directory is [on your path](https://katiek2.github.io/path-doc/).
2.) Create a pubspec.yaml file like this: 



[block:code]
{
  "codes": [
    {
      "code": "name: my_project\ndev_dependencies:\n\tbrambldart: ^x.y.z",
      "language": "text",
      "name": "yaml"
    }
  ]
}
[/block]
3.) Run dart pub get

4.) Learn more about [writing Dart code](doc:overview) (it's easy!)