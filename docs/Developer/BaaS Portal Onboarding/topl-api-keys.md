---
title: "Topl API Keys"
slug: "topl-api-keys"
hidden: false
createdAt: "2021-04-01T21:43:27.915Z"
updatedAt: "2022-03-29T14:33:28.295Z"
---
All requests submitted through BaaS require an API key. This allows our service to authenticate your account to enforce API quotas.

It is mandatory that you sign up for a free API key which allows for many advantages:

* a **high request rate** and concurrent request limit
* **fast** responses with few retries and timeouts
* useful **metric tracking** for performance tuning and to analyze your customer behavior
* Access to our Genus offerings including the ability to query archived data and advanced logging capabilities (not yet released)

:::info

To sign up for API keys, create a project as detailed in the guide below.

:::

## Authenticating using a Project Id

BaaS Vertx API  requires a valid `Project Id` to be included with your request traffic. This identifier should be appended to the request URL.

```curl
https://vertx.topl.services/${network}/YOUR-PROJECT-ID
```

## Authenticating using a ProjectId and API Key

As additional protection for your request traffic, an API key is required to access our API. Please ensure that you keep your `API KEY` a secret!

```curl
curl --header `x-api-key:YOUR-API-KEY` \\\nhttps://vertx.topl.services/${network}/YOUR-PROJECT-ID
```
