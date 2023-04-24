---
title: "Rate and Quota Limits"
slug: "rate-limits"
excerpt: "You can call the Topl API as much as you need to make, sign, and verify transactions. However, there are limits to the number of calls that you can make."
hidden: false
createdAt: "2021-03-25T20:08:20.466Z"
updatedAt: "2021-03-29T14:48:01.326Z"
---
All of Topl's blockchain [API endpoints](https://documenter.getpostman.com/view/2571679/Tz5p5HfD) require [authentication](https://topl.readme.io/v1.3.0/docs/security-and-authentication). Topl BaaS API allows performing requests according to your [subscription](https://www.topl.co/solutions)

#Rate Limiting

Rate limiting of the API is based on the client basis and apply to any API call. The rate limit is currently set at 25 requests per five second interval. 

The Topl BaaS API quota limit window is one day. See below how each of our three plans offers different rate limiting per day window 

# Rate Limiting Overview
  
[block:parameters]
{
  "data": {
    "h-0": "Plan Name",
    "h-1": "API Quota Limit",
    "0-0": "Startup",
    "0-1": "20000 Requests per Day per Project per Network",
    "1-0": "Professional",
    "1-1": "100000 Requests per Day Per Project Per Network",
    "2-0": "Enterprise",
    "2-1": "1000000 Requests per Day Per Project Per Network"
  },
  "cols": 2,
  "rows": 3
}
[/block]
# How to avoid being quota limited
If you're reaching the quota limit, options to improve performance include restructuring the architecture of the integration, and/or upgrading to Professional or Enterprise Tier.

Clients that exceed the aforementioned rates will cause the API to return a HTTP 429 response.