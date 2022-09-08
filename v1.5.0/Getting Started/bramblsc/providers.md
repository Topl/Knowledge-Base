---
title: "Providers"
slug: "providers"
hidden: false
createdAt: "2021-04-05T18:20:37.041Z"
updatedAt: "2021-11-29T18:03:51.654Z"
---
# Providers
A <<glossary:Provider>> is an abstraction of a connection to a Topl network, providing a concise, consistent interface to standard Topl network functionality. 

The BramblSC library provides several options which should cover the vast majority of use-cases but also includes the necessary functions and classes for creating a custom provider if more custom configuration is necessary. 

Most users while testing should use the **PrivateTestNet** provider. 

# PrivateTestNet Provider
The PrivateTestNet provider is the safest, easiest way to begin developing using Topl, and it is also robust enough to provide accurate data for an eventual shift into a production environment using the ToplMainNet provider. 

*PrivateTestNet*( [uri, apiKey]) ⇒ **Provider**
   * Returns a new Provider, connected to *uri*. If no *uri* is provided, it will attempt to connect to localhost on port 9085. 
   * The *apikey* is a string designating the API Key for a developer's project. 
   

[block:callout]
{
  "type": "info",
  "title": "Note: API Keys",
  "body": "In order to access a service you must include an appropriate API key. \n\nIf API keys are shared across services, services may throttle other services that are using the same API Keys during periods of load without realizing it. \n\nMany services have monitoring and usage metrics, which are only available if an API key is specified. This allows tracking how many requests are being sent and which methods are being used (in our Genus rollout). \n\nGenus will provide additional functionality, which is also tied to an API key."
}
[/block]