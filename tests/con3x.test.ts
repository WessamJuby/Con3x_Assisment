describe("commons.ts test cases", () => {
  const commons = require("../npm_package/commons");
  //global variable shared among functions
  const contractAddress: string = "0xdac17f958d2ee523a2206206994597c13d831ec7";
  const myWalletAddress: string = "0x2623a6D3036E1f02a7c710C00cA3fE45CbacCf5E";

  //etherscan api key
  const etherscanApiKey: string = "R7GP4CB5HTMBQ1R6F9X53D3TPY2J7DJQQ8";

  //mainnet infura web3
  const infuraApiKey: string = "71180ef082ea48e28abc43c83f3a1256";
  const providerUrl: string = "https://mainnet.infura.io/v3/";

  describe("right parameters cases", () => {
    it("get Latest Block Via Etherscan API", async () => {
      let latestBlock1: number = await commons.getLatestBlockViaEtherscanAPI(etherscanApiKey);
      expect(latestBlock1).not.toBeNull();
      expect(latestBlock1).toBeGreaterThan(1);
    }, 60000);
    it("get Usdt Balance Via Etherscan API", async () => {
      let usdtBalance1: string = await commons.getUsdtBalanceEtherscanAPI(
        myWalletAddress,
        contractAddress,
        etherscanApiKey
      );
      expect(usdtBalance1).not.toBeNull();
      expect(usdtBalance1).toEqual("0");
    });
    it("get Latest BlockNumber Via Web3JS", async () => {
      let latestBlock2: bigint = await commons.getLatestBlockNumberViaWeb3JS(
        providerUrl,
        infuraApiKey
      );
      expect(latestBlock2).not.toBeNull();
      expect(latestBlock2).toBeGreaterThan(1);
    });
    it("get Usdt Balance Via Web3JS", async () => {
      let usdtBalance2: string = await commons.getUsdtBalanceViaWeb3JS(
        myWalletAddress,
        contractAddress,
        providerUrl,
        infuraApiKey
      );
      expect(usdtBalance2).not.toBeNull();
      expect(usdtBalance2).toEqual("0");
    });
  });

  describe("wrong parameters cases", () => {
    describe("Etherscan API cases", () => {
      it("Pass a wrong ehterscan API key", async () => {
        let usdtBalance1: string = await commons.getUsdtBalanceEtherscanAPI(
          myWalletAddress,
          contractAddress,
          "wrongApiKey"
        );
        expect(usdtBalance1).toEqual("Invalid API Key");
      });
      it("Pass a wrong wallet address", async () => {
        let usdtBalance1: string = await commons.getUsdtBalanceEtherscanAPI(
          "wrongWalletAddress",
          contractAddress,
          etherscanApiKey
        );
        expect(usdtBalance1).toEqual("Error! Invalid address format");
      });
      it("Pass a wrong contract address", async () => {
        let usdtBalance1: string = await commons.getUsdtBalanceEtherscanAPI(
          myWalletAddress,
          "wrongContractAddress",
          etherscanApiKey
        );
        expect(usdtBalance1).toEqual("Invalid contractAddress format");
      });
    });
    describe("Web3JS cases", () => {
      it("Pass a wrong infura API key", async () => {
        let usdtBalance2: string = await commons.getUsdtBalanceViaWeb3JS(
          myWalletAddress,
          contractAddress,
          providerUrl,
          "wrongApiKey"
        );
        expect(usdtBalance2).toEqual(
          "FetchError: invalid json response body at https://mainnet.infura.io/v3/wrongApiKey reason: Unexpected token i in JSON at position 0"
        );
      });
      it("Pass a wrong provider Url", async () => {
        let usdtBalance2: string = await commons.getUsdtBalanceViaWeb3JS(
          myWalletAddress,
          contractAddress,
          "wrongProviderUrl",
          infuraApiKey
        );
        expect(usdtBalance2).toEqual(
          'InvalidClientError: Client URL "wrongProviderUrl71180ef082ea48e28abc43c83f3a1256" is invalid.'
        );
      });
      it("Pass a wrong wallet address", async () => {
        let usdtBalance2: string = await commons.getUsdtBalanceViaWeb3JS(
          "wrongWalletAddress",
          contractAddress,
          providerUrl,
          infuraApiKey
        );
        expect(usdtBalance2).toEqual(
          `Web3ValidatorError: Web3 validator found 1 error[s]:\nvalue "wrongWalletAddress" at "/0" must pass "address" validation`
        );
      });
      it("Pass a wrong contract address", async () => {
        let usdtBalance2: string = await commons.getUsdtBalanceViaWeb3JS(
          myWalletAddress,
          "wrongContractAddress",
          providerUrl,
          infuraApiKey
        );
        expect(usdtBalance2).toEqual(
          'InvalidAddressError: Invalid value given "wrongContractAddress". Error: invalid ethereum address.'
        );
      });
    });
  });
});
