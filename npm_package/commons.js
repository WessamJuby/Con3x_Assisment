"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var web3_1 = __importDefault(require("web3"));
function getLatestBlockViaEtherscanAPI(etherscanApiKey) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, latestBlock, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get("https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&etherscanApiKey=".concat(etherscanApiKey))];
                case 1:
                    response = _a.sent();
                    result = response.data.result;
                    latestBlock = parseInt(result, 16);
                    return [2 /*return*/, latestBlock];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error getting latest block:", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getUsdtBalanceEtherscanAPI(address, contractAddress, etherscanApiKey) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get("https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=".concat(contractAddress, "&address=").concat(address, "&apikey=").concat(etherscanApiKey))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.result];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error fetching USDT balance:", error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getLatestBlockNumberViaWeb3JS(providerUrl, infuraApiKey) {
    return __awaiter(this, void 0, void 0, function () {
        var provider, web3, latestBlock, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    provider = new web3_1.default.providers.HttpProvider("".concat(providerUrl).concat(infuraApiKey));
                    web3 = new web3_1.default(provider);
                    return [4 /*yield*/, web3.eth.getBlockNumber()];
                case 1:
                    latestBlock = _a.sent();
                    return [2 /*return*/, latestBlock];
                case 2:
                    error_3 = _a.sent();
                    console.error("Error fetching latest block number:", error_3);
                    return [2 /*return*/, error_3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getUsdtBalanceViaWeb3JS(address, contractAddress, providerUrl, infuraApiKey) {
    return __awaiter(this, void 0, void 0, function () {
        var provider, web3, abi, contract, balance, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    provider = new web3_1.default.providers.HttpProvider("".concat(providerUrl).concat(infuraApiKey));
                    web3 = new web3_1.default(provider);
                    abi = [
                        {
                            constant: true,
                            inputs: [],
                            name: "name",
                            outputs: [{ name: "", type: "string" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: false,
                            inputs: [{ name: "_upgradedAddress", type: "address" }],
                            name: "deprecate",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function",
                        },
                        {
                            constant: false,
                            inputs: [
                                { name: "_spender", type: "address" },
                                { name: "_value", type: "uint256" },
                            ],
                            name: "approve",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [],
                            name: "deprecated",
                            outputs: [{ name: "", type: "bool" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: false,
                            inputs: [{ name: "_evilUser", type: "address" }],
                            name: "addBlackList",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [],
                            name: "totalSupply",
                            outputs: [{ name: "", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: false,
                            inputs: [
                                { name: "_from", type: "address" },
                                { name: "_to", type: "address" },
                                { name: "_value", type: "uint256" },
                            ],
                            name: "transferFrom",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [],
                            name: "upgradedAddress",
                            outputs: [{ name: "", type: "address" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [{ name: "", type: "address" }],
                            name: "balances",
                            outputs: [{ name: "", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [],
                            name: "decimals",
                            outputs: [{ name: "", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [],
                            name: "maximumFee",
                            outputs: [{ name: "", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [],
                            name: "_totalSupply",
                            outputs: [{ name: "", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: false,
                            inputs: [],
                            name: "unpause",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [{ name: "_maker", type: "address" }],
                            name: "getBlackListStatus",
                            outputs: [{ name: "", type: "bool" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [
                                { name: "", type: "address" },
                                { name: "", type: "address" },
                            ],
                            name: "allowed",
                            outputs: [{ name: "", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [],
                            name: "paused",
                            outputs: [{ name: "", type: "bool" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [{ name: "who", type: "address" }],
                            name: "balanceOf",
                            outputs: [{ name: "", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: false,
                            inputs: [],
                            name: "pause",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [],
                            name: "getOwner",
                            outputs: [{ name: "", type: "address" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [],
                            name: "owner",
                            outputs: [{ name: "", type: "address" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [],
                            name: "symbol",
                            outputs: [{ name: "", type: "string" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: false,
                            inputs: [
                                { name: "_to", type: "address" },
                                { name: "_value", type: "uint256" },
                            ],
                            name: "transfer",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function",
                        },
                        {
                            constant: false,
                            inputs: [
                                { name: "newBasisPoints", type: "uint256" },
                                { name: "newMaxFee", type: "uint256" },
                            ],
                            name: "setParams",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function",
                        },
                        {
                            constant: false,
                            inputs: [{ name: "amount", type: "uint256" }],
                            name: "issue",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function",
                        },
                        {
                            constant: false,
                            inputs: [{ name: "amount", type: "uint256" }],
                            name: "redeem",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [
                                { name: "_owner", type: "address" },
                                { name: "_spender", type: "address" },
                            ],
                            name: "allowance",
                            outputs: [{ name: "remaining", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [],
                            name: "basisPointsRate",
                            outputs: [{ name: "", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [{ name: "", type: "address" }],
                            name: "isBlackListed",
                            outputs: [{ name: "", type: "bool" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: false,
                            inputs: [{ name: "_clearedUser", type: "address" }],
                            name: "removeBlackList",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function",
                        },
                        {
                            constant: true,
                            inputs: [],
                            name: "MAX_UINT",
                            outputs: [{ name: "", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        {
                            constant: false,
                            inputs: [{ name: "newOwner", type: "address" }],
                            name: "transferOwnership",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function",
                        },
                        {
                            constant: false,
                            inputs: [{ name: "_blackListedUser", type: "address" }],
                            name: "destroyBlackFunds",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function",
                        },
                        {
                            inputs: [
                                { name: "_initialSupply", type: "uint256" },
                                { name: "_name", type: "string" },
                                { name: "_symbol", type: "string" },
                                { name: "_decimals", type: "uint256" },
                            ],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "constructor",
                        },
                        {
                            anonymous: false,
                            inputs: [{ indexed: false, name: "amount", type: "uint256" }],
                            name: "Issue",
                            type: "event",
                        },
                        {
                            anonymous: false,
                            inputs: [{ indexed: false, name: "amount", type: "uint256" }],
                            name: "Redeem",
                            type: "event",
                        },
                        {
                            anonymous: false,
                            inputs: [{ indexed: false, name: "newAddress", type: "address" }],
                            name: "Deprecate",
                            type: "event",
                        },
                        {
                            anonymous: false,
                            inputs: [
                                { indexed: false, name: "feeBasisPoints", type: "uint256" },
                                { indexed: false, name: "maxFee", type: "uint256" },
                            ],
                            name: "Params",
                            type: "event",
                        },
                        {
                            anonymous: false,
                            inputs: [
                                { indexed: false, name: "_blackListedUser", type: "address" },
                                { indexed: false, name: "_balance", type: "uint256" },
                            ],
                            name: "DestroyedBlackFunds",
                            type: "event",
                        },
                        {
                            anonymous: false,
                            inputs: [{ indexed: false, name: "_user", type: "address" }],
                            name: "AddedBlackList",
                            type: "event",
                        },
                        {
                            anonymous: false,
                            inputs: [{ indexed: false, name: "_user", type: "address" }],
                            name: "RemovedBlackList",
                            type: "event",
                        },
                        {
                            anonymous: false,
                            inputs: [
                                { indexed: true, name: "owner", type: "address" },
                                { indexed: true, name: "spender", type: "address" },
                                { indexed: false, name: "value", type: "uint256" },
                            ],
                            name: "Approval",
                            type: "event",
                        },
                        {
                            anonymous: false,
                            inputs: [
                                { indexed: true, name: "from", type: "address" },
                                { indexed: true, name: "to", type: "address" },
                                { indexed: false, name: "value", type: "uint256" },
                            ],
                            name: "Transfer",
                            type: "event",
                        },
                        { anonymous: false, inputs: [], name: "Pause", type: "event" },
                        { anonymous: false, inputs: [], name: "Unpause", type: "event" },
                    ];
                    contract = new web3.eth.Contract(abi, contractAddress);
                    return [4 /*yield*/, contract.methods.balanceOf(address).call()];
                case 1:
                    balance = _a.sent();
                    return [2 /*return*/, String(balance)];
                case 2:
                    error_4 = _a.sent();
                    console.error("Error fetching USDT balance:", error_4);
                    return [2 /*return*/, String(error_4)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
module.exports = {
    getLatestBlockViaEtherscanAPI: getLatestBlockViaEtherscanAPI,
    getUsdtBalanceEtherscanAPI: getUsdtBalanceEtherscanAPI,
    getLatestBlockNumberViaWeb3JS: getLatestBlockNumberViaWeb3JS,
    getUsdtBalanceViaWeb3JS: getUsdtBalanceViaWeb3JS,
};
