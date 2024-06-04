"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3907],{1692:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(4848),r=t(8453);const s={id:"brambldart",title:"BramblDart",slug:"brambldart",tags:["brambl","dart","sdk"]},i="BramblDart",o={id:"Developers/Software Development Kits/brambldart",title:"BramblDart",description:"A Dart library that supports the Apparatus blockchain.",source:"@site/docs/Developers/06-Software Development Kits/01-BramblDart.md",sourceDirName:"Developers/06-Software Development Kits",slug:"/Developers/Software Development Kits/brambldart",permalink:"/Developers/Software Development Kits/brambldart",draft:!1,unlisted:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Developers/06-Software Development Kits/01-BramblDart.md",tags:[{label:"brambl",permalink:"/tags/brambl"},{label:"dart",permalink:"/tags/dart"},{label:"sdk",permalink:"/tags/sdk"}],version:"current",sidebarPosition:1,frontMatter:{id:"brambldart",title:"BramblDart",slug:"brambldart",tags:["brambl","dart","sdk"]},sidebar:"developersSidebar",previous:{title:"Private Network",permalink:"/Developers/Networks/private-network"},next:{title:"Getting Started",permalink:"/Developers/Software Development Kits/getting-started"}},l={},d=[{value:"Features",id:"features",level:3},{value:"Usage",id:"usage",level:2},{value:"Credentials and Wallets",id:"credentials-and-wallets",level:3},{value:"Custom credentials",id:"custom-credentials",level:4},{value:"Connecting to an RPC server",id:"connecting-to-an-rpc-server",level:3},{value:"Sending transactions",id:"sending-transactions",level:2},{value:"Feature requests and bugs",id:"feature-requests-and-bugs",level:2},{value:"Develop",id:"develop",level:2},{value:"Contribute",id:"contribute",level:2},{value:"Additional Examples",id:"additional-examples",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.a,{href:"https://www.dartlang.org",children:"Dart"})," library that supports the ",(0,a.jsx)(n.a,{href:"https://apparatus.live",children:"Apparatus"})," blockchain."]}),"\n",(0,a.jsx)(n.h1,{id:"brambldart",children:"BramblDart"}),"\n",(0,a.jsx)(n.p,{children:"A dart library that connects via gRPC to interact with the Thunder protocol. It connects\nto a Bifrost node to send transactions, interact with addresses and much\nmore!"}),"\n",(0,a.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Connect to an Thunder node with the rpc-api, call common methods"}),"\n",(0,a.jsx)(n.li,{children:"Send signed transactions"}),"\n",(0,a.jsx)(n.li,{children:"Generate private keys, setup new blockchain addresses"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h1,{id:"running-the-code-generator",children:"Running the code generator"}),"\n",(0,a.jsxs)(n.p,{children:["Run ",(0,a.jsx)(n.code,{children:"dart run build_runner build"})," in the package directory to generate the missing ",(0,a.jsx)(n.code,{children:".g.dart"}),"generated dart files"]}),"\n",(0,a.jsx)(n.h3,{id:"credentials-and-wallets",children:"Credentials and Wallets"}),"\n",(0,a.jsx)(n.p,{children:"In order to send transactions on the Thunder network, some credentials\nare required. The library supports raw private keys and v1 encrypted key-files.\nIn addition, it also supports the generation of keys via a HD wallet."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"\nimport 'package:brambldart/brambldart.dart';\n\n// You can create credentials from private keys\nCredentials credentials = ToplSigningKey.fromString(\"base58EncodedPrivateKeyHere\");\n\n// Or generate a new key randomly\nvar networkId = 0x40;\nvar propositionType = PropositionType.ed25519();\nCredentials random = ToplSigningKey.createRandom(networkId, propositionType);\n\n// In either way, the library can derive the public key and the address\n// from a private key:\n\nvar address = await credentials.extractAddress();\nprint(address.toBase58());\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Another way to obtain ",(0,a.jsx)(n.code,{children:"Credentials"})," which the library uses to sign\ntransactions is the usage of an encrypted keyfile. Wallets store a private\nkey securely and require a password to unlock. The library has experimental\nsupport for version 1 keyfiles which are generated by this client and support Extended ED25519 Signing Keys:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'dart:io';\nimport 'package:brambldart/brambldart.dart';\n\nString content = new File(\"wallet.json\").readAsStringSync();\nKeyStore keystore = KeyStore.fromV1Json(content, \"testPassword\");\n\nCredentials unlocked = ToplSigningKey.fromString(keystore.privateKey);\n// You can now use these credentials to sign transactions\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can also create Keystore files with this library. To do so, you first need\nthe private key you want to encrypt and a desired password. Then, create\nyour wallet with"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"Keystore keystore = KeyStore.createNew(credentials, 'password', random);\nprint(keystore.toJson());\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can also write ",(0,a.jsx)(n.code,{children:"keystore.toJson()"})," to file which you can later open with ",(0,a.jsx)(n.a,{href:"https://github.com/Topl/Bifrost/wiki/BramblSc-examples",children:"BramblSC"})," and potentially other Apparatus API libraries in the future."]}),"\n",(0,a.jsx)(n.h4,{id:"custom-credentials",children:"Custom credentials"}),"\n",(0,a.jsxs)(n.p,{children:["If you want to integrate ",(0,a.jsx)(n.code,{children:"brambldart"})," with other wallet providers, you can implement\n",(0,a.jsx)(n.code,{children:"Credentials"})," and override the appropriate methods."]}),"\n",(0,a.jsx)(n.h3,{id:"connecting-to-an-rpc-server",children:"Connecting to an RPC server"}),"\n",(0,a.jsxs)(n.p,{children:["The library won't send signed transactions to forgers itself. Instead,\nit relies on an RPC client to do that. You can use a public RPC API like\n",(0,a.jsx)(n.a,{href:"https://beta.topl.services",children:"baas"}),", or, if you just want to test things out, use a private testnet with\n",(0,a.jsx)(n.a,{href:"https://docs.apparatus.live/v1.4.0/docs/installing-bifrost",children:"bifrost"}),". All of these options will give you\nan RPC endpoint to which the library can connect."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:dio/dio.dart'; //You can also import the browser version\nimport 'package:brambldart/brambldart.dart';\n\nvar networkId = 0x40;\nvar propositionType = PropositionType.ed25519();\nvar privateKey = 'base58EncodedPrivateKey';\n\nvar apiUrl = \"http://localhost:9085\"; //Replace with your API\nvar httpClient = Dio(BaseOptions(\n                    baseUrl: basePathOverride ?? basePath,\n                    contentType: 'application/json',\n                    connectTimeout: 5000,\n                    receiveTimeout: 3000)\nvar bramblClient = BramblClient(httpClient: httpClient, basePathOverride: apiUrl);\nvar credentials = bramblClient.credentialsFromPrivateKey(privateKey, networkId, propositionType);\n\n// You can now call rpc methods. This one will query the amount of Apparatus tokens you own\nBalance balance = bramblClient.getBalance(credentials.address);\nprint(balance.toString());\n"})}),"\n",(0,a.jsx)(n.h2,{id:"sending-transactions",children:"Sending transactions"}),"\n",(0,a.jsx)(n.p,{children:"Of course, this library supports creating, signing and sending Apparatus\ntransactions:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:brambldart/brambldart.dart';\n\n/// [...], you need to specify the url and your client, see example above\nvar bramblClient = BramblClient(basePathOverride: apiUrl, httpClient: httpClient);\n\nvar credentials = bramblClient.credentialsFromPrivateKey(\"0x...\");\n\nconst value = 1;\n\nfinal assetCode =\n    AssetCode.initialize(1, senderAddress, 'testy', 'valhalla');\n\nfinal securityRoot = SecurityRoot.fromBase58(\n    Base58Data.validated('11111111111111111111111111111111'));\n\nfinal assetValue = AssetValue(\n    value.toString(), assetCode, securityRoot, 'metadata', 'Asset');\n\nfinal recipient = AssetRecipient(senderAddress, assetValue);\n\nfinal data = Latin1Data.validated('data');\n\nfinal assetTransaction = AssetTransaction(\n    recipients: [recipient],\n    sender: [senderAddress],\n    changeAddress: senderAddress,\n    consolidationAddress: senderAddress,\n    propositionType: PropositionType.ed25519().propositionName,\n    minting: true,\n    assetCode: assetCode,\n    data: data);\n\nfinal rawTransaction =\n          await client.sendRawAssetTransfer(assetTransaction: assetTransaction);\n\nexpect(rawTransaction['rawTx'], isA<TransactionReceipt>());\n\nprint(rawTransaction);\n\nfinal txId = await client.sendTransaction(\n    [first],\n    rawTransaction['rawTx'] as TransactionReceipt,\n    rawTransaction['messageToSign'] as Uint8List);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Missing data, like the fee, the sender or a change/consolidation address will be\ninferred by the BramblClient when not explicitly specified. If you only need\nthe signed transaction but don't intend to send it, you can use\n",(0,a.jsx)(n.code,{children:"client.signTransaction"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"feature-requests-and-bugs",children:"Feature requests and bugs"}),"\n",(0,a.jsxs)(n.p,{children:["Please file feature requests and bugs at the ",(0,a.jsx)(n.a,{href:"https://github.com/Topl/BramblDart/issues",children:"issue tracker"}),".\nIf you want to contribute to this library, please submit a Pull Request."]}),"\n",(0,a.jsx)(n.h2,{id:"develop",children:"Develop"}),"\n",(0,a.jsxs)(n.p,{children:["View the documentation at ",(0,a.jsx)(n.a,{href:"https://pub.dev/documentation/topl_common/latest/",children:"pub.dev"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"contribute",children:"Contribute"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/Topl/dart_topl_common",children:"Open a PR here!"})}),"\n",(0,a.jsx)(n.h2,{id:"additional-examples",children:"Additional Examples"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/Topl/bifrost-client-sample-dart",children:"View an example here!"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(6540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);