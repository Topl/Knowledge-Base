---
title: "Merkel Trees"
slug: "merkel-trees"
hidden: false
createdAt: "2021-11-19T15:55:05.754Z"
updatedAt: "2021-11-19T15:56:59.759Z"
---
Merkel Trees are a type of trie data structure where every non leaf element contains a hash of its children. There are no other constraints on its formation. Topl uses these in multiple ways, for example: the entire blockchain forms a Merkle Tree with each block linking to the block that came before it enforcing block chronology.

In addition, the most efficient way to store a fingerprint of verifiable information on the blockchain is to use a Merkel tree. You can find a link to an explainer around verifying information using the Topl Blockchain at the bottom of this page. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7f4eb75-Screen_Shot_2021-11-19_at_9.54.40_AM.png",
        "Screen Shot 2021-11-19 at 9.54.40 AM.png",
        1456,
        892,
        "#f9f8f2"
      ]
    }
  ]
}
[/block]