# SSV Rewards distributor contract deployment script
This script allows users to fetch, compile, and deploy the 1inch CumulativeMerkleDrop contract from its [github repository](https://github.com/1inch/merkle-distribution/tree/1f8b2a6ed27d1b2d18cf8475e42eece60f41c896) to an Ethereum network.

## Prerequisites
Node.js
npm

## Installation
Clone this repository:
```bash
git clone [REPOSITORY_LINK]
cd [REPOSITORY_DIRECTORY]
```

Install the required dependencies:
```bash
npm install
```

## Usage
To deploy the contract, run:

```bash
npm run deploy-ssv-distributor -- -k [OWNER_PRIVATE_KEY] -u [PROVIDER_URL] -t [SSV_TOKEN_ADDRESS]
```

Replace [OWNER_PRIVATE_KEY], [PROVIDER_URL], and [SSV_TOKEN_ADDRESS] with the private key of owner of the contract, provider URL, and the SSV token address, respectively.

Options:
* -k, --privateKey <string>: Your Ethereum private key.
* -u, --providerUrl <string>: Ethereum provider URL (e.g., http://localhost:8545).
* -t, --tokenAddress <string>: SSV token address.

## Contract Details
The script fetches and compiles the 1inch [CumulativeMerkleDrop]((https://github.com/1inch/merkle-distribution/blob/1f8b2a6ed27d1b2d18cf8475e42eece60f41c896/contracts/CumulativeMerkleDrop.sol)) contract at this specific [commit](https://github.com/1inch/merkle-distribution/tree/1f8b2a6ed27d1b2d18cf8475e42eece60f41c896) and its associated interface [ICumulativeMerkleDrop](https://github.com/1inch/merkle-distribution/blob/1f8b2a6ed27d1b2d18cf8475e42eece60f41c896/contracts/interfaces/ICumulativeMerkleDrop.sol) from the 1inch merkle-distribution GitHub repository. The contract is then deployed to the specified Ethereum network using the provided private key.

## Dependencies
* axios: For fetching contract content from GitHub.
* solc: Solidity compiler for compiling the contract.
* ethers: Ethereum library for contract deployment and interaction.
* commander: For parsing command-line arguments.

## TODOs
 - [ ] NPM private package, so that users don't have to clone the repository.
 - [ ] Improve logging (output to file, etc.)
 - [ ] Auto verification of the deployed contract on Etherscan.
 - [ ] Add unit tests.
 - [ ] CHANGELOG.md