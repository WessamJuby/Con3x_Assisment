const commons = require("./npm_package/commons");

//global variable shared among functions
const contractAddress: string = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const myWalletAddress: string = "0x2623a6D3036E1f02a7c710C00cA3fE45CbacCf5E";

//etherscan api key
const etherscanApiKey: string = "R7GP4CB5HTMBQ1R6F9X53D3TPY2J7DJQQ8";

//mainnet infura web3
const infuraApiKey: string = "71180ef082ea48e28abc43c83f3a1256";
const providerUrl: string = "https://mainnet.infura.io/v3/";

async function main() {
  let latestBlock1: number = await commons.getLatestBlockViaEtherscanAPI(etherscanApiKey);
  let latestBlock2: bigint = await commons.getLatestBlockNumberViaWeb3JS(providerUrl, infuraApiKey);
  let usdtBalance1: string = await commons.getUsdtBalanceEtherscanAPI(
    myWalletAddress,
    contractAddress,
    etherscanApiKey
  );
  let usdtBalance2: string = await commons.getUsdtBalanceViaWeb3JS(
    myWalletAddress,
    contractAddress,
    providerUrl,
    infuraApiKey
  );

  console.log("Latest Mainnet block via ethereumscan api is :", latestBlock1);
  console.log("Latest Mainnet block via mainnet.infura and web3.js is :", latestBlock2);
  console.log("USDT Balance for my wallet address via ethereumscan api is :", usdtBalance1);
  console.log(
    "USDT Balance for my wallet address via mainnet.infura and web3.js is :",
    usdtBalance2
  );
}

main();
