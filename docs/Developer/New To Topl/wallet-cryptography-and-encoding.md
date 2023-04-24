---
title: "Recovery Phrases"
slug: "wallet-cryptography-and-encoding"
hidden: false
createdAt: "2021-10-08T21:20:21.210Z"
updatedAt: "2021-10-08T21:35:29.141Z"
---
## Recovery Phrases

### Motivation

We define a way for easily entering and writing down arbitrary binary seeds using
a simple dictionary of known words (available in many different languages).

The motivation here is to have sentence of words easy to read and write for humans,
which map uniquely back and forth to a sized binary data (harder to remember).

### Encoding

The process describing how to encode recovery phrases is described in [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
section "Generating the mnemonic". Below is a reformulation of this specification.

We call _Entropy_ an arbitrary sequence of bytes that has been generated through high
quality randomness methods. The allowed size of _Entropy_ is 96-256 bits and is 
necessarily a multiple of 32 bits (4 bytes). 

A checksum is appended to the initial entropy by taking the first `ENT / 32` bits 
of the SHA256 hash of it, where `ENT` designates the _Entropy_ size in bits. 

Then, the concatenated result is split into groups of 11 bits, each encoding a number
from 0 to 2047 serving as an index into a known dictionary (see below).

| Sentence Length | Entropy Size        | Checksum Size |
| ------------    | ------------------- | ------        |
| 9 words         | 96  bits (12 bytes) | 3 bits        |
| 12 words        | 128 bits (16 bytes) | 4 bits        |
| 15 words        | 160 bits (20 bytes) | 5 bits        |
| 18 words        | 192 bits (24 bytes) | 6 bits        |
| 21 words        | 224 bits (28 bytes) | 7 bits        |
| 24 words        | 256 bits (32 bytes) | 8 bits        |

### Dictionaries

Topl uses the same dictionaries as defined in [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md).

---