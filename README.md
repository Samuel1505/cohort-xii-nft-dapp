# NFT DApp

This **NFT DApp** allows users to connect their wallets, view their owned tokens, and transfer NFTs to other users seamlessly. Built with **Web3.js/Ethers.js**, the platform interacts with an **ERC-721** smart contract to enable token management.

## Features
- **Wallet Connection**: Supports MetaMask and WalletConnect.
- **NFT Management**: View and transfer owned tokens.
- **Blockchain Interaction**: Uses OpenZeppelin's ERC-721 implementation.
- **Secure Ownership**: Transactions require wallet signatures.

## Smart Contract
This dApp interacts with an **ERC-721 NFT contract**, using the following dependencies:

```solidity
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
```

## Installation

### Prerequisites
- Node.js (>= 16.x)
- Hardhat (for smart contract deployment)
- MetaMask extension installed

### Clone the Repository
```bash
git clone https://github.com/Samuel1505/cohort-xii-dapp.git
cd ohort-xii-dapp
```

### Install Dependencies
```bash
npm install
```

## Running the Application
### 1. Start a Local Blockchain (Optional for Testing)
```bash
npx hardhat node
```

### 2. Deploy the Smart Contract
Modify `hardhat.config.js` with your network details and deploy:
```bash
npx hardhat run scripts/deploy.js --network your_network
```

### 3. Start the Frontend
```bash
npm run dev
```

## Usage
1. Connect your wallet.
2. View owned NFTs.
3. Select an NFT and transfer it to another user by entering their wallet address.
4. Confirm the transaction via MetaMask.

## License
This project is licensed under the MIT License.

