# ERC721 Storage

![b](https://github.com/kanedaaaa/erc721-storage/actions/workflows/main.yml/badge.svg)
[![codecov](https://codecov.io/gh/kanedaaaa/erc721-storage/branch/main/graph/badge.svg?token=Q4TUVGIMAM)](https://codecov.io/gh/kanedaaaa/erc721-storage)
![mit](https://img.shields.io/badge/LICENSE-MIT-green)

Contract was previously made for NFT staking project, but it can be generic implementation of "NFT Database" that can be modified, or
used as it is for other offchain or even onchain implementations. 

Idea is to properlly send NFTs, from any collection and contract will manage them, their owners, staked timestamp, etc. This info can be
accessed with very flexible getter functions. 

**NOBODY but the NFT owner has the access to their NFT. Meaning, nobody else can withdraw or use it.**
