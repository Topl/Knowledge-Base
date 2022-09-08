---
title: "Cryptography Primer"
slug: "cryptography-primer"
hidden: false
createdAt: "2021-11-19T15:37:21.535Z"
updatedAt: "2021-11-19T15:50:04.795Z"
---
Cryptocurrencies uniquely combine pieces of cryptography and game theory to create a distributed, decentralized peer to peer payment network.

# Alice and Bob

It’s imperative when talking about crypto to use the correct naming for example people. At minimum the first two participants should be named Alice and Bob. Any attacker must be called Eve. From there continue from C down the alphabet. For example: Charlie, Dawn, Frank, Gilbert, Jill, etc.

# Cryptographic Primitives and Data Structures

Like every other field in existence, cryptography is just applied math. Expressing data as sequences of numbers allows for simple, yet powerful applications of mathematical formulas to accomplish a wide range of goals.

## Hash Functions

A hash function maps an arbitrary amount of data to a value of fixed size. It is deterministic, the same key as input will always return the same value as output.

**Example**:  A function H that takes characters, words, or sentences and returns the first character. 
• H(a) -> a 
• H(alphabet) -> a 
• H(The light at the end of the tunnel.) -> T

This isn’t considered a “good” hash function, because if used in practice there will probably be many collisions where two keys map to the same value. A perfect hash function maps every key to a different value. Perfect hash functions don’t exist unless the range of keys is constrained to a fixed number of possibilities.

An example of a non-perfect, but still very good hash function is [BLAKE2](https://www.blake2.net/). Multiple variants exist such as BLAKE2b and BLAKE2s which produce different sized digests depending on the input. Because hash function can have collisions, they also function as *one-way functions* because there is no way to retrieve the original keys from the value. At the same time 256 is enough bits of entropy that collisions are practically not worth considering, as there are an estimated 2^272 atoms in the entire universe. 256 bits of entropy is also secure enough, and 512 bits is for sure enough, to deter attempts to brute force determine keys from the value. Because of that, at Topl we use a Blake2B256 hashing function to ensure the speed and security of our hashing function.