/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ARBTriCryptoOracle,
  ARBTriCryptoOracleInterface,
} from "../../../../../contracts/oracle/implementations/deprecated/ARBTriCryptoOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "__name",
        type: "string",
      },
      {
        internalType: "string",
        name: "__symbol",
        type: "string",
      },
      {
        internalType: "contract ICurvePool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "contract AggregatorV3Interface",
        name: "btcFeed",
        type: "address",
      },
      {
        internalType: "contract AggregatorV3Interface",
        name: "ethFeed",
        type: "address",
      },
      {
        internalType: "contract AggregatorV3Interface",
        name: "usdtFeed",
        type: "address",
      },
      {
        internalType: "contract AggregatorV3Interface",
        name: "wbtcFeed",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sequencerUptimeFeed",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "schedule",
        type: "uint48",
      },
    ],
    name: "AccessControlEnforcedDefaultAdminDelay",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessControlEnforcedDefaultAdminRules",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "defaultAdmin",
        type: "address",
      },
    ],
    name: "AccessControlInvalidDefaultAdmin",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "GracePeriodNotOver",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidChainlinkRate",
    type: "error",
  },
  {
    inputs: [],
    name: "SequencerDown",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DefaultAdminDelayChangeCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint48",
        name: "newDelay",
        type: "uint48",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "effectSchedule",
        type: "uint48",
      },
    ],
    name: "DefaultAdminDelayChangeScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DefaultAdminTransferCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "acceptSchedule",
        type: "uint48",
      },
    ],
    name: "DefaultAdminTransferScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "A0",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BTC_FEED",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DISCOUNT0",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ETH_FEED",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GAMMA0",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD_TIME",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GUARDIAN_ROLE_CHAINLINK",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEQUENCER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEQUENCER_UPTIME_FEED",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TRI_CRYPTO",
    outputs: [
      {
        internalType: "contract ICurvePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDT_FEED",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WBTC_FEED",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptDefaultAdminTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "beginDefaultAdminTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelDefaultAdminTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "newDelay",
        type: "uint48",
      },
    ],
    name: "changeDefaultAdminDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_gracePeriod",
        type: "uint32",
      },
    ],
    name: "changeGracePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_stalePeriod",
        type: "uint32",
      },
    ],
    name: "changeStalePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultAdminDelay",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultAdminDelayIncreaseWait",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "peekSpot",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingDefaultAdmin",
    outputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "schedule",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingDefaultAdminDelay",
    outputs: [
      {
        internalType: "uint48",
        name: "newDelay",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "schedule",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rollbackDefaultAdminDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stalePeriod",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61014060405234620004f35762002552803803806200001e81620004f8565b92833981019061012081830312620004f35780516001600160401b038111620004f357826200004f9183016200051e565b602082015190926001600160401b038211620004f357620000729183016200051e565b604082015190926001600160a01b03918281168103620004f3576200009a6060850162000590565b620000a86080860162000590565b91620000b760a0870162000590565b93620000c660c0880162000590565b95620000e4610100620000dc60e08b0162000590565b990162000590565b978189168015620004da57600180546001600160d01b03166107e960d71b179055600254838116620004c8576001600160a01b031916176002556200012989620005a5565b50600380546001600160401b031916650e10000151801790551660805260016004558051906001600160401b038211620003b65760055490600182811c92168015620004bd575b6020831014620003955781601f84931162000467575b50602090601f8311600114620003d857600092620003cc575b50508160011b916000199060031b1c1916176005555b86516001600160401b038111620003b657600654600181811c91168015620003ab575b60208210146200039557601f81116200032b575b506020601f8211600114620002b75781906200023899600092620002ab575b50508160011b916000199060031b1c1916176006555b60a05260c05260e052610100526101205262000625565b50604051611e6a9081620006c8823960805181818161059e0152611c64015260a0518181816107770152611508015260c051818181610cfe015261154d015260e051818181610cba01526115c80152610100518181816102520152611603015261012051818181610733015261158e0152f35b0151905038806200020b565b600660005260206000209860005b601f1984168110620003125750988291620002389a600194601f19811610620002f8575b505050811b0160065562000221565b015160001960f88460031b161c19169055388080620002e9565b828201518b556001909a019960209283019201620002c5565b60066000527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f601f830160051c810191602084106200038a575b601f0160051c01905b8181106200037d5750620001ec565b600081556001016200036e565b909150819062000365565b634e487b7160e01b600052602260045260246000fd5b90607f1690620001d8565b634e487b7160e01b600052604160045260246000fd5b0151905038806200019f565b6005600090815293507f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db091905b601f19841685106200044b576001945083601f1981161062000431575b505050811b01600555620001b5565b015160001960f88460031b161c1916905538808062000422565b8181015183556020948501946001909301929091019062000405565b90915060056000526020600020601f840160051c810160208510620004b5575b90849392915b601f830160051c82018110620004a557505062000186565b600081558594506001016200048d565b508062000487565b91607f169162000170565b604051631fe1e13d60e11b8152600490fd5b604051636116401160e11b815260006004820152602490fd5b600080fd5b6040519190601f01601f191682016001600160401b03811183821017620003b657604052565b919080601f84011215620004f35782516001600160401b038111620003b65760209062000554601f8201601f19168301620004f8565b92818452828287010111620004f35760005b8181106200057c57508260009394955001015290565b858101830151848201840152820162000566565b51906001600160a01b0382168203620004f357565b6001600160a01b031660008181527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604081205490919060ff166200062157818052816020526040822081835260205260408220600160ff198254161790553391600080516020620025328339815191528180a4600190565b5090565b6001600160a01b031660008181527fc7868db9b77be23a26db2238a21e501442afa107fc8ec39322567982117e803660205260408120549091907fac4f1890dc96c9a02330d1fa696648a38f3b282d2449c2d8e6f10507488c84c89060ff16620006c257808352826020526040832082845260205260408320600160ff1982541617905560008051602062002532833981519152339380a4600190565b50509056fe60806040908082526004908136101561001757600080fd5b600091823560e01c91826301ffc9a714610df757508163022d63fb14610dd95781630942d09a14610db05781630aa6220b14610d2d578163128b8f6514610ce95781632460990614610ca5578163248a9ca314610c7a5781632f2ff15d14610c37578163313ce56714610c1b57816336568abe14610b32578163408b054614610abc5781634842855c14610a935781635cc23f7d14610a75578163630914d1146109f0578163634e93da14610925578163649a5ec7146107c757816366060ada146107a65781636812fa991461076257816370d0d0761461071e57816384ef8ffc146106f55781638da5cb5b146106f557816391d14854146106aa578163a1eda53c1461064d578163a217fddf14610632578163a5b36a361461060d578163b09f1266146105ef578163c4fda2f5146105cd578163c598018214610589578163c699c4d61461056b578163cc8463c81461053f578163cefc142914610457578163cf6eefb71461041c578163d28d8852146103fe578163d39bbef0146103da578163d547741f14610385578163d568866c14610358578163d602b9fd146102fe578163d6d7d5251461028157508063d90fdff11461023d578063ed2f8603146102135763eeb8a8d3146101e957600080fd5b3461021057506101f83661107f565b50506102026114e8565b815190600182526020820152f35b80fd5b5090346102395781600319360112610239576003549051602091821c63ffffffff168152f35b5080fd5b509034610239578160031936011261023957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b9190503461021057506102933661107f565b505060028154146102bc576002815560016102ac6114e8565b9155815190600182526020820152f35b6020606492519162461bcd60e51b8352820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152fd5b82346102105780600319360112610210576103176110c9565b65ffffffffffff61032661131b565b600180546001600160d01b03191690559190911690506103435780f35b600080516020611d958339815191528180a180f35b828434610239576103819061036c3661107f565b5050610376610f9f565b905191829182611036565b0390f35b90503461023957826003193601126102395780356103a1610e64565b9181156103cc57506103c360018495836103c89652866020528620015461110f565b61120d565b5080f35b8451631fe1e13d60e11b8152fd5b828434610239576020906103ed3661107f565b50506103f76114e8565b9051908152f35b82843461023957816003193601126102395761038190610376610f9f565b5050346102105780600319360112610210575065ffffffffffff61043e61131b565b83516001600160a01b0390921682529091166020820152f35b82843461023957816003193601126102395761047161131b565b506001600160a01b039081163303610529579065ffffffffffff9161049461131b565b9093168015801561051f575b6105095750600280546001600160a01b03198082169092559091906104c6908216611252565b50600254928184166104fa57506104e69495508316911617600255611135565b50600180546001600160d01b031916905580f35b51631fe1e13d60e11b81528690fd5b856024918451916319ca5ebb60e01b8352820152fd5b50428110156104a0565b8151636116401160e11b81523381860152602490fd5b82843461023957816003193601126102395760209065ffffffffffff61056361133a565b915191168152f35b828434610239576103819061057f3661107f565b5050610376610ed1565b828434610239578160031936011261023957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b828434610239578160031936011261023957602090516603dd0a0301e8008152f35b82843461023957816003193601126102395761038190610376610ed1565b82843461023957816003193601126102395760209063ffffffff600354169051908152f35b82843461023957816003193601126102395751908152602090f35b5050346102105780600319360112610210576002548060d01c91821515806106a0575b15610692575065ffffffffffff6103819160a01c1691925b5192839283610e7f565b928392506103819150610688565b5042831015610670565b839150346106f157816003193601126106f1578160209360ff926106cc610e64565b903582528186528282206001600160a01b039091168252855220549151911615158152f35b8280fd5b82843461023957816003193601126102395760025490516001600160a01b039091168152602090f35b828434610239578160031936011261023957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b828434610239578160031936011261023957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b82843461023957816003193601126102395760209051651977420dc0008152f35b82843461023957602036600319011261023957823565ffffffffffff80821690818303610921576107f66110c9565b6107ff426113a3565b918161080961133a565b16808211156108e65750949550600080516020611dd58339815191529461088f9261084592909162069780808210156108df57505b1690611373565b926002548060d01c80610895575b5050600280546001600160a01b031660a085901b65ffffffffffff60a01b161760d086901b6001600160d01b0319161790555192839283610e7f565b0390a180f35b4211156108c757600180546001600160d01b031660309290921b6001600160d01b0319169190911790555b8680610853565b50600080516020611d758339815191528680a16108c0565b905061083e565b0390811161090e57600080516020611dd583398151915294955061088f916108459190611373565b634e487b7160e01b855260118652602485fd5b8480fd5b839150346106f15760203660031901126106f157356001600160a01b03811691908290036106f15760207f3377dc44241e779dd06afab5b788a35ca5f3b778836e2990bdb26a2a4b2e5ed6916109796110c9565b610993610985426113a3565b61098d61133a565b90611373565b9061099c61131b565b600180546001600160d01b031916881760a086901b65ffffffffffff60a01b1617905565ffffffffffff92915082166109d9575b5191168152a280f35b600080516020611d958339815191528780a16109d0565b839150346106f15760203660031901126106f15780359163ffffffff8316809303610a7157600080516020611e15833981519152908185528460205280852033865260205260ff818620541615610a555750505063ffffffff19600354161760035580f35b60449350519163e2517d3f60e01b835233908301526024820152fd5b8380fd5b8284346102395781600319360112610239576020905162083d608152f35b82843461023957816003193601126102395760209051600080516020611d558339815191528152f35b839150346106f15760203660031901126106f15780359163ffffffff83168303610a7157600080516020611d55833981519152908185528460205280852033865260205260ff818620541615610a55575050506003549063ffffffff60201b9060201b169063ffffffff60201b19161760035580f35b8284346102395780600319360112610239578235610b4e610e64565b91811580610c04575b610b86575b336001600160a01b03841603610b775750906103c89161120d565b5163334bd91960e11b81528490fd5b610b8e61131b565b906001600160a01b031615801590610bf4575b8015610be2575b610bc457506001805465ffffffffffff60a01b19169055610b5c565b8565ffffffffffff60249351926319ca5ebb60e01b84521690820152fd5b504265ffffffffffff82161015610ba8565b5065ffffffffffff811615610ba1565b506002546001600160a01b03848116911614610b57565b8284346102395781600319360112610239576020905160128152f35b9050346102395782600319360112610239578035610c53610e64565b9181156103cc5750610c7560018495836103c89652866020528620015461110f565b6111a1565b839150346106f15760203660031901126106f157816020936001923581528085522001549051908152f35b828434610239578160031936011261023957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b828434610239578160031936011261023957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b8234610210578060031936011261021057610d466110c9565b6002548060d01c80610d66575b600280546001600160a01b031690558280f35b421115610d9857600180546001600160d01b031660309290921b6001600160d01b0319169190911790555b8180610d53565b50600080516020611d758339815191528180a1610d91565b82843461023957816003193601126102395760209051600080516020611e158339815191528152f35b82843461023957816003193601126102395760209051620697808152f35b9150346106f15760203660031901126106f1573563ffffffff60e01b81168091036106f157602092506318a4c3c360e11b8114908115610e39575b5015158152f35b637965db0b60e01b811491508115610e53575b5083610e32565b6301ffc9a760e01b14905083610e4c565b602435906001600160a01b0382168203610e7a57565b600080fd5b65ffffffffffff91821681529116602082015260400190565b601f909101601f19168101906001600160401b03821190821017610ebb57604052565b634e487b7160e01b600052604160045260246000fd5b60405190600060065490600182811c90808416938415610f95575b6020948584108114610f815783885287949392918115610f615750600114610f1f575b5050610f1d92500383610e98565b565b90939150600660005281600020936000915b818310610f49575050610f1d93508201013880610f0f565b85548884018501529485019487945091830191610f31565b915050610f1d94925060ff191682840152151560051b8201013880610f0f565b634e487b7160e01b85526022600452602485fd5b91607f1691610eec565b60405190600060055490600182811c9080841693841561102c575b6020948584108114610f815783885287949392918115610f615750600114610fea575050610f1d92500383610e98565b90939150600560005281600020936000915b818310611014575050610f1d93508201013880610f0f565b85548884018501529485019487945091830191610ffc565b91607f1691610fba565b6020808252825181830181905290939260005b82811061106b57505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501611049565b906020600319830112610e7a576001600160401b039160043590838211610e7a5780602383011215610e7a578160040135938411610e7a5760248483010111610e7a576024019190565b336000908152600080516020611df5833981519152602052604081205460ff16156110f15750565b6044906040519063e2517d3f60e01b82523360048301526024820152fd5b80600052600060205260406000203360005260205260ff60406000205416156110f15750565b6001600160a01b03166000818152600080516020611df5833981519152602052604081205490919060ff1661119d57818052816020526040822081835260205260408220600160ff198254161790553391600080516020611d358339815191528180a4600190565b5090565b9060009180835282602052604083209160018060a01b03169182845260205260ff6040842054161560001461120857808352826020526040832082845260205260408320600160ff19825416179055600080516020611d35833981519152339380a4600190565b505090565b906112239180158061123b575b611226576112b8565b90565b600280546001600160a01b03191690556112b8565b506002546001600160a01b0383811691161461121a565b6001600160a01b03166000818152600080516020611df5833981519152602052604081205490919060ff161561119d5781805281602052604082208183526020526040822060ff1981541690553391600080516020611db58339815191528180a4600190565b9060009180835282602052604083209160018060a01b03169182845260205260ff6040842054166000146112085780835282602052604083208284526020526040832060ff198154169055600080516020611db5833981519152339380a4600190565b6001546001600160a01b0381169160a09190911c65ffffffffffff1690565b6002548060d01c8015159081611369575b501561135f5760a01c65ffffffffffff1690565b5060015460d01c90565b905042113861134b565b91909165ffffffffffff8080941691160191821161138d57565b634e487b7160e01b600052601160045260246000fd5b65ffffffffffff908181116113b6571690565b60405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203460448201526538206269747360d01b6064820152608490fd5b8181029291811591840414171561138d57565b600090801561119d5780806001146114d3576002146114cb576001918261013383101683600b841016176114bb5760028392935b80821161147e5750508260001904821161146a57500290565b634e487b7160e01b81526011600452602490fd5b9093806000190481116114a75781851661149e575b800293811c90611451565b80930292611493565b634e487b7160e01b83526011600452602483fd5b929150600283910a9261146a5750565b509060049150565b505050600190565b9190820391821161138d57565b6114f0611c62565b60408051630176f71760e71b815260049291602091907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169083838781855afa92831561199757600093611968575b506115717f0000000000000000000000000000000000000000000000000000000000000000611a20565b926402540be400808502948086048214901517156118e7576115b27f0000000000000000000000000000000000000000000000000000000000000000611a20565b81810290808204831490151715611936576115ec7f0000000000000000000000000000000000000000000000000000000000000000611a20565b9082820291808304841490151715611953576116277f0000000000000000000000000000000000000000000000000000000000000000611a20565b8381029381850414901517156119535761166b929161166691670de0b6b3a764000098818a80931060001461194b57906116609161140a565b0461140a565b61140a565b600382810292818404036119365791818380808080808f998d9a61172d9a60018060801b031060071b89811c60018060401b031060061b1789811c63ffffffff1060051b179089821c61ffff10901b1788811c60ff10821b1760ff627f624b60e81b8383061a91838b821c600f109104011b04808080028a04010104808080028904010104808080028804010104808080028704010104808080028604010104808080028504010104808080028404010104809181800290041090039061140a565b049381519263b137392960e01b845281848981845afa93841561192b576000946118fc575b50848402938085048614901517156118e7579080839289945194858092630f446c1d60e41b82525afa9182156118dd57506000916118b1575b50838102915080159082048414171561189c579082611660651977420dc00062083d606117ba9504930461141d565b697b426fab61f00de3639960221b808211156118945750935b8460018060881b031060071b85811c60018060481b031060061b1785811c64ffffffffff1060051b1785811c62ffffff10821b1760019060b56201000088831c0191831c1b0260121c80870401811c80870401811c80870401811c80870401811c80870401811c80870401811c80870401901c808096041094858103956603dd0a0301e800808802978804149114171561187f5750611878816112239495048361140a565b04906114db565b601190634e487b7160e01b6000525260246000fd5b9050936117d3565b601186634e487b7160e01b6000525260246000fd5b82813d83116118d6575b6118c58183610e98565b81010312610210575051803861178b565b503d6118bb565b513d6000823e3d90fd5b601188634e487b7160e01b6000525260246000fd5b90938282813d8311611924575b6119138183610e98565b810103126102105750519238611752565b503d611909565b83513d6000823e3d90fd5b601189634e487b7160e01b6000525260246000fd5b50905061140a565b60118a634e487b7160e01b6000525260246000fd5b90928482813d8311611990575b61197f8183610e98565b810103126102105750519138611547565b503d611975565b50513d6000823e3d90fd5b51906001600160501b0382168203610e7a57565b908160a0910312610e7a576119ca816119a2565b916020820151916040810151916112236080606084015193016119a2565b90816020910312610e7a57516001600160a01b0381168103610e7a5790565b90816020910312610e7a57518060170b8103610e7a5790565b60408051633fabe5a360e21b81526001600160a01b0392600492919084169060a0818581855afa801561192b57600090819682938392611c28575b5085516309169eff60e21b808252956020929183818b81855afa908115611c005783918591600091611c0b575b508b8b5180948193630455b78f60e31b8352165afa908115611c0057600091611be3575b5060170b8a1396871597611b18575b505050508315611b01575b50508115611ae6575b50611ad957505090565b5163ae19356360e01b8152fd5b611af19150426114db565b63ffffffff600354161038611acf565b6001600160501b0390811691161191503880611ac6565b83949750898994929394518094819382525afa908115611bd857908391600091611bab575b50888851809481936370da2f6760e01b8352165afa918215611ba057600092611b73575b505060170b8612159238808080611abb565b611b929250803d10611b99575b611b8a8183610e98565b810190611a07565b3880611b61565b503d611b80565b86513d6000823e3d90fd5b611bcb9150823d8411611bd1575b611bc38183610e98565b8101906119e8565b38611b3d565b503d611bb9565b87513d6000823e3d90fd5b611bfa9150843d8611611b9957611b8a8183610e98565b38611aac565b89513d6000823e3d90fd5b611c229150823d8411611bd157611bc38183610e98565b38611a88565b9250965050611c4e915060a03d8111611c5b575b611c468183610e98565b8101906119b6565b9297909392915038611a5b565b503d611c3c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168015611d315760a060049160405192838092633fabe5a360e21b82525afa908115611d25576000908192611d01575b50611cf057611cca90426114db565b63ffffffff60035460201c161015611cde57565b60405163d15f73b560e01b8152600490fd5b60405162032b3d60e81b8152600490fd5b9050611d1b915060a03d8111611c5b57611c468183610e98565b5050915038611cbb565b6040513d6000823e3d90fd5b5056fe2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0dac4f1890dc96c9a02330d1fa696648a38f3b282d2449c2d8e6f10507488c84c82b1fa2edafe6f7b9e97c1a9e0c3660e645beb2dcaa2d45bdbf9beaf5472e1ec58886ebfc4259abdbc16601dd8fb5678e54878f47b3c34836cfc51154a9605109f6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171bf1038c18cf84a56e432fdbfaf746924b7ea511dfe03a6506a0ceba4888788d9bad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb555435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a5041a264697066735822122036fe49323f7f962fd04e229f045519e4dee74302442b40ddbdef7f2560da0a4c64736f6c634300081300332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d";

type ARBTriCryptoOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ARBTriCryptoOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ARBTriCryptoOracle__factory extends ContractFactory {
  constructor(...args: ARBTriCryptoOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ARBTriCryptoOracle";
  }

  override deploy(
    __name: PromiseOrValue<string>,
    __symbol: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    btcFeed: PromiseOrValue<string>,
    ethFeed: PromiseOrValue<string>,
    usdtFeed: PromiseOrValue<string>,
    wbtcFeed: PromiseOrValue<string>,
    _sequencerUptimeFeed: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ARBTriCryptoOracle> {
    return super.deploy(
      __name,
      __symbol,
      pool,
      btcFeed,
      ethFeed,
      usdtFeed,
      wbtcFeed,
      _sequencerUptimeFeed,
      _admin,
      overrides || {}
    ) as Promise<ARBTriCryptoOracle>;
  }
  override getDeployTransaction(
    __name: PromiseOrValue<string>,
    __symbol: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    btcFeed: PromiseOrValue<string>,
    ethFeed: PromiseOrValue<string>,
    usdtFeed: PromiseOrValue<string>,
    wbtcFeed: PromiseOrValue<string>,
    _sequencerUptimeFeed: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      __name,
      __symbol,
      pool,
      btcFeed,
      ethFeed,
      usdtFeed,
      wbtcFeed,
      _sequencerUptimeFeed,
      _admin,
      overrides || {}
    );
  }
  override attach(address: string): ARBTriCryptoOracle {
    return super.attach(address) as ARBTriCryptoOracle;
  }
  override connect(signer: Signer): ARBTriCryptoOracle__factory {
    return super.connect(signer) as ARBTriCryptoOracle__factory;
  }
  static readonly contractName: "ARBTriCryptoOracle";

  public readonly contractName: "ARBTriCryptoOracle";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ARBTriCryptoOracleInterface {
    return new utils.Interface(_abi) as ARBTriCryptoOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ARBTriCryptoOracle {
    return new Contract(address, _abi, signerOrProvider) as ARBTriCryptoOracle;
  }
}
