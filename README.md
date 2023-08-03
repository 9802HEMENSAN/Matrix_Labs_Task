# Matrix Labs Dexscreener Website Readme

This readme provides an overview of the functionalities added to the Matrix Labs Dexscreener website. The website is designed to allow users to explore decentralized exchange (DEX) information using data from the Dexscreener API.  

## Screenshots 

Desktop View 
![Screenshot (565)](https://github.com/9802HEMENSAN/Matrix_Labs_Task/assets/111531676/ddc06b06-c711-49e1-9d5d-3b6e839f9825)

Pair Address Result 

![Screenshot (566)](https://github.com/9802HEMENSAN/Matrix_Labs_Task/assets/111531676/23091754-6c3d-4e5b-9220-5b7d58402cf3)

Mobile View

![WhatsApp Image 2023-08-03 at 09 57 37 (2)](https://github.com/9802HEMENSAN/Matrix_Labs_Task/assets/111531676/aa28c283-e803-4fbc-80fa-7f14c393599c)


![WhatsApp Image 2023-08-03 at 09 57 37](https://github.com/9802HEMENSAN/Matrix_Labs_Task/assets/111531676/432400a9-309f-428e-84d1-4270c6608587)

## Functionalities Added

### 1. DEX Token Information Retrieval

The website leverages the Dexscreener API endpoints to fetch data related to DEX tokens. Specifically, the following endpoints are utilized:
- `https://api.dexscreener.com/latest/dex/tokens/:tokenAddresses`
- `https://api.dexscreener.com/latest/dex/search/?q=:q`

### 2. UI Interface Design

The UI interface of the website adheres closely to the design instructions provided in the Figma design reference. The design is implemented using ReactJS for the frontend and  Chakra-UI for styling. 

### 3. Token Pair Search

The search bar on the website allows users to input pair/token addresses. The website then fetches and displays data for the corresponding pairs using asynchronous calls to the Dexscreener API.

### 4. Displaying Token Pair Data

Upon searching for a token address, the website retrieves data for up to 10 pairs from the Dexscreener API. The displayed data follows the pattern outlined in the Figma design. The pairs are ordered in descending order of price in USD.

## Tech Stack

The Matrix Labs Dexscreener website is built using the following tech stack:

- ReactJS: Frontend framework for building user interfaces.
- Chakra-UI :  Chakra UI is a popular open-source design system and component library for building user interfaces (UIs) in React applications.
## Deployment

The website is deployed using Vercel, ensuring accessibility and ease of use for users.

## Usage Instructions

1. Visit the deployed website link.
2. Use the search bar to enter a pair/token address.
3. View the displayed results for the token pair, including relevant data.

## Important Links

- [Figma Design Reference](https://www.figma.com/file/OSXt7MaFS4uxKIrlJqlvjC/task1?node-id=23%3A2696&mode=dev)
- [Dexscreener API Reference](https://docs.dexscreener.com/api/reference)
- [Web3 Modal for Wallet Connection](https://docs.walletconnect.com/2.0/web/web3modal/react/wagmi/installation)
- [GitHub Repository](https://github.com/9802HEMENSAN/Matrix_Labs_Task)
- [Deployed Site (Vercel)](https://blockchain-app-task.vercel.app/)

 
 
 
