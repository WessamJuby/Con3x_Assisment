var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var commons = require("./npm_package/commons");
//global variable shared among functions
var contractAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
var myWalletAddress = "0x2623a6D3036E1f02a7c710C00cA3fE45CbacCf5E";
//etherscan api key
var etherscanApiKey = "R7GP4CB5HTMBQ1R6F9X53D3TPY2J7DJQQ8";
//mainnet infura web3
var infuraApiKey = "71180ef082ea48e28abc43c83f3a1256";
var providerUrl = "https://mainnet.infura.io/v3/";
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var latestBlock1, latestBlock2, usdtBalance1, usdtBalance2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, commons.getLatestBlockViaEtherscanAPI(etherscanApiKey)];
                case 1:
                    latestBlock1 = _a.sent();
                    return [4 /*yield*/, commons.getLatestBlockNumberViaWeb3JS(providerUrl, infuraApiKey)];
                case 2:
                    latestBlock2 = _a.sent();
                    return [4 /*yield*/, commons.getUsdtBalanceEtherscanAPI(myWalletAddress, contractAddress, etherscanApiKey)];
                case 3:
                    usdtBalance1 = _a.sent();
                    return [4 /*yield*/, commons.getUsdtBalanceViaWeb3JS(myWalletAddress, contractAddress, providerUrl, infuraApiKey)];
                case 4:
                    usdtBalance2 = _a.sent();
                    console.log("Latest Mainnet block via ethereumscan api is :", latestBlock1);
                    console.log("Latest Mainnet block via mainnet.infura and web3.js is :", latestBlock2);
                    console.log("USDT Balance for my wallet address via ethereumscan api is :", usdtBalance1);
                    console.log("USDT Balance for my wallet address via mainnet.infura and web3.js is :", usdtBalance2);
                    return [2 /*return*/];
            }
        });
    });
}
main();
