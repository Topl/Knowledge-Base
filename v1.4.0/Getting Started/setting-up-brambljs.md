---
title: "BramblJS"
slug: "setting-up-brambljs"
hidden: false
createdAt: "2021-10-07T17:33:26.277Z"
updatedAt: "2021-10-07T17:45:08.238Z"
---
### Overview 
[block:callout]
{
  "type": "danger",
  "title": "Windows Support",
  "body": "Windows support for BramblJS and BramblSc are currently experimental. Please reach out to our support team if you have any issues with getting your environment setup in Windows."
}
[/block]
In this guide, we will show you how to install `brambljs` into your operating system of choice using a package manager. `brambljs` provides the ability to connect to a Topl network using JSON-RPC routes. In addition `brambljs` can be used for creating multiple **Topl** Addresses, sending transactions, getting blockchain history details, balances for addresses, and more!

### BramblJS Prerequisites

#### Install Git (to compile from source) 

Download the latest version of [git](https://git-scm.com/downloads) if it is not already installed.

#### Install cURL

Download the latest version of the [cURL](https://curl.haxx.se/download.html) if it is not already installed or if you get errors running the curl commands from the documentation.

#### Downloading and installing Node.js and npm

** We strongly recommend using a Node Version manager such as [nvm](https://github.com/nvm-sh/nvm) to install Node.js and npm.** We do not recommend using a Node installer, since the Node installation process installs npm in a directory with local permissions and can cause permission errors when you run npm packages globally. 

#### Checking your version of npm and Node.js
 To see if you already have Node.js and npm installed and to check the installed version, run the following commands 


[block:code]
{
  "codes": [
    {
      "code": "node -v\nnpm -v",
      "language": "shell"
    }
  ]
}
[/block]
Currently, we are only supporting the stable maintained LTS of Node.JS (Node 12, Node 14, Node16). Older legacy versions of Node are currently not supported.

## Using a Node version manager to install Node.js and npm

Node version managers allow you to install and switch between multiple versions of Node.js and npm on your system so you can test your applications on multiple versions of npm to ensure that they work for users on different versions. 

* [nvm] (https://github.com/creationix/nvm)
* [n](https://github.com/tj/n)

## Using a Node installer to install Node.js and npm
If you are unable to use a Node version manager, you can use a Node installer to install both Node.js and npm on your system. 


[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "If you are using one of the installers from the Node.js download page, be sure to install the version labelled LTS. Newer versions of Node have not yet been thoroughly tested."
}
[/block]
* [Node.js installer](https://nodejs.org/en/download/)
* [NodeSource installer](https://github.com/nodesource/distributions)

If you use Linux, we recommend that you use a NodeSource installer. 

## Python installation (for node-gyp compiler)
### Install Python 2.7

Download and install Python 2.7 for your environment here: https://www.python.org/download/releases/2.7/

Then, configure NPM's python path via the following command


[block:code]
{
  "codes": [
    {
      "code": "npm config set python path\\to\\python",
      "language": "shell",
      "name": "NPM Python Setup"
    }
  ]
}
[/block]
Note that in this case, `path\to\python` should be replaced with the path to your Python installation directory

## More information
For more information about installing Node.js on a variety of operating systems, see [this page](https://nodejs.org/en/download/package-manager/).

## Windows Extras

If you are running Windows, please install one of the following

* [nodist](https://github.com/marcelklehr/nodist)
* [nvm-windows](https://github.com/coreybutler/nvm-windows)

Congratulations, you have successfully install `brambljs` into your OS 🎉🎉🎉