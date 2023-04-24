---
title: "Signing"
slug: "signing"
hidden: false
createdAt: "2021-04-01T19:19:32.850Z"
updatedAt: "2021-04-01T19:30:53.035Z"
---
# What is Signing? 

Signing is the act of user A "signing" data that anyone can validate came from user A. This is used in transactions to check if they are real. 

A common question is "how can you validate transactions are real?". The short answer is public-key cryptography. It's an algorithm with 3 parts.

1.) Key Creation
2.) Encryption/Signing
3.) Decryption/Validation

Encryption is generally used to hide data in other data. If you encrypt a string like "hello world" you get something like "dqE3gJz/+5CQHfSJwMP2nQ". It's purpose is to hide the message "hello world". Signing is used to create a different output string, but you also publicize the original message. 

The key creation will output two strings, a public and private key. It links them through an algorithm that has the signing and validation properties. A signature will take in a public key, private key, and a message. The output will be another string that is the signature. 

1.) Signature = F(public key, private key, message) 
2.) Validation = F(signature, message) 
3.) Is Valid if: Validation = public key

Notice how validation does not require knowledge of the private key. This is what allows 3rd parties to validate information. If the output of the validation function (at Topl, we use the parlance <<glossary:Proposition>>) is equal to the public key then the signature is real, otherwise, it is fake. 

The signature is made up of 3 variables. Topl employs <<glossary:Elliptic Curve Cryptography>> and those variables are simply part of the underlying math. 

# Why Sign? 
Signing is a nice way to know something is being done by the correct person. This means we can trust that someone is actually doing what they say they are. 

Instead of real world signatures, which can be faked, the digital ones can not. If you want to know user A did something, make them sign it before moving forward. Then if a dispute arises, check the signature.