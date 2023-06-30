---
title: "Security and Authentication"
slug: "security-and-authentication"
hidden: false
createdAt: "2021-03-24T16:43:22.629Z"
updatedAt: "2021-11-04T17:06:52.342Z"
---
The Topl endpoints use API keys to allow access. You can obtain your API key through creating a project in the <<glossary:BaaS>> developer portal (please view the guide for <<glossary:BaaS>> Developer Portal Onboarding for the details on how to setup your first project).

![dev flow test](https://files.readme.io/a314980-Screen_Shot_2021-03-24_at_9.46.56_AM.png)

To access the APIs, include the API key in the HTTP Header of your HTTP request:

`x-api-key:yourapisecret`

Alternatively, you can add the API key into the Requests module object of a BramblJS instance (using our BramblJS library).

## Examples

:::info

You must replace `yourapisecret` or YOUR_API_KEY in the examples with your actual API key provided by Topl. In addition, you must replace {{myProjectId}} with the actual projectId provided by Topl.


:::

:::info

There are two BaaS network prefixes. If you want to use the main net, set networkPrefix = toplnet otherwise set networkPrefix = valhalla for using the test net.

:::

```js
const BramblJS = require('brambljs');
const brambl = new BramblJS({
    networkPrefix: "valhalla", // applies to Requests and KeyManager
    password: "topl_the_world!",
    Requests: {
      url: "https://valhalla.torus.topl.network/{{myProjectId}}", // make sure that the project ID from the BaaS portal is included.
      apiKey: "YOUR_API_KEY" // set api key for network
    }
});
```

Additionally, you must provide a project ID for each request made. Your Project ID can also be found in the BaaS Portal.
![dev flow project id](https://files.readme.io/668d997-Screen_Shot_2021-03-25_at_3.27.33_PM.png)

:::caution

Note that our BaaS offering has a rate limit defined at 5 requests per second. Please contact us if that is not sufficient for your use case!

:::

