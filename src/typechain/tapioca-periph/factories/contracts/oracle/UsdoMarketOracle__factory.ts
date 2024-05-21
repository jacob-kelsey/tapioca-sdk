/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UsdoMarketOracle,
  UsdoMarketOracleInterface,
} from "../../../contracts/oracle/UsdoMarketOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ITapiocaOracle",
        name: "_oracle",
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
    inputs: [],
    name: "marketAssetOracle",
    outputs: [
      {
        internalType: "contract ITapiocaOracle",
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
        name: "data",
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
  "0x60a06040523480156200001157600080fd5b5060405162001dfb38038062001dfb8339810160408190526200003491620002be565b6203f480816001600160a01b0381166200006957604051636116401160e11b8152600060048201526024015b60405180910390fd5b600180546001600160d01b0316600160d01b65ffffffffffff8516021790556200009560008262000181565b50506001600355506001600160a01b03821660808190526040805163313ce56760e01b8152905163313ce567916004808201926020929091908290030181865afa158015620000e8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200010e9190620002fd565b60ff16601214620001795760405162461bcd60e51b815260206004820152602e60248201527f5573646f4d61726b65744f7261636c653a204f7261636c65206d75737420686160448201526d766520313820646563696d616c7360901b606482015260840162000060565b505062000329565b600082620001e25760006200019e6002546001600160a01b031690565b6001600160a01b031614620001c657604051631fe1e13d60e11b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0384161790555b620001ee8383620001f7565b90505b92915050565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166200029c576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055620002533390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001620001f1565b506000620001f1565b6001600160a01b0381168114620002bb57600080fd5b50565b60008060408385031215620002d257600080fd5b8251620002df81620002a5565b6020840151909250620002f281620002a5565b809150509250929050565b6000602082840312156200031057600080fd5b815160ff811681146200032257600080fd5b9392505050565b608051611a9a6200036160003960008181610341015281816107210152818161097201528181610a7b0152610b720152611a9a6000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c8063a1eda53c116100ee578063cf6eefb711610097578063d568866c11610071578063d568866c14610405578063d602b9fd14610418578063d6d7d52514610420578063eeb8a8d31461044a57600080fd5b8063cf6eefb714610393578063d39bbef0146103df578063d547741f146103f257600080fd5b8063c699c4d6116100c8578063c699c4d614610363578063cc8463c814610383578063cefc14291461038b57600080fd5b8063a1eda53c1461030d578063a217fddf14610334578063ab75e1521461033c57600080fd5b806336568abe1161015057806384ef8ffc1161012a57806384ef8ffc146102825780638da5cb5b146102c157806391d14854146102c957600080fd5b806336568abe14610249578063634e93da1461025c578063649a5ec71461026f57600080fd5b8063248a9ca311610181578063248a9ca3146101f65780632f2ff15d14610227578063313ce5671461023a57600080fd5b806301ffc9a7146101a8578063022d63fb146101d05780630aa6220b146101ec575b600080fd5b6101bb6101b6366004611624565b61045d565b60405190151581526020015b60405180910390f35b620697805b60405165ffffffffffff90911681526020016101c7565b6101f46104b9565b005b610219610204366004611666565b60009081526020819052604090206001015490565b6040519081526020016101c7565b6101f46102353660046116a8565b6104cf565b604051601281526020016101c7565b6101f46102573660046116a8565b610514565b6101f461026a3660046116d4565b61061e565b6101f461027d3660046116ef565b610632565b60025473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101c7565b61029c610646565b6101bb6102d73660046116a8565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b61031561066c565b6040805165ffffffffffff9384168152929091166020830152016101c7565b610219600081565b61029c7f000000000000000000000000000000000000000000000000000000000000000081565b610376610371366004611717565b6106e8565b6040516101c791906117ad565b6101d56107ea565b6101f4610888565b6001546040805173ffffffffffffffffffffffffffffffffffffffff831681527401000000000000000000000000000000000000000090920465ffffffffffff166020830152016101c7565b6102196103ed366004611717565b6108e4565b6101f46104003660046116a8565b6108f8565b610376610413366004611717565b610939565b6101f4610a24565b61043361042e366004611717565b610a37565b6040805192151583526020830191909152016101c7565b610433610458366004611717565b610b20565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f314987860000000000000000000000000000000000000000000000000000000014806104b357506104b382610bf6565b92915050565b60006104c481610c8d565b6104cc610c97565b50565b81610506576040517f3fc3c27a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105108282610ca4565b5050565b8115801561053c575060025473ffffffffffffffffffffffffffffffffffffffff8281169116145b156106145760015473ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900465ffffffffffff1681151580610590575065ffffffffffff8116155b806105a357504265ffffffffffff821610155b156105e9576040517f19ca5ebb00000000000000000000000000000000000000000000000000000000815265ffffffffffff821660048201526024015b60405180910390fd5b5050600180547fffffffffffff000000000000ffffffffffffffffffffffffffffffffffffffff1690555b6105108282610ccf565b600061062981610c8d565b61051082610d2d565b600061063d81610c8d565b61051082610dad565b600061066760025473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6002546000907a010000000000000000000000000000000000000000000000000000900465ffffffffffff1680151580156106af57504265ffffffffffff821610155b6106bb576000806106e0565b60025474010000000000000000000000000000000000000000900465ffffffffffff16815b915091509091565b6040517fc699c4d600000000000000000000000000000000000000000000000000000000815260206004820152600060248201526060907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063c699c4d690604401600060405180830381865afa15801561077d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107c3919081019061182d565b6040516020016107d391906118f8565b604051602081830303815290604052905092915050565b6002546000907a010000000000000000000000000000000000000000000000000000900465ffffffffffff16801515801561082c57504265ffffffffffff8216105b61085e576001547a010000000000000000000000000000000000000000000000000000900465ffffffffffff16610882565b60025474010000000000000000000000000000000000000000900465ffffffffffff165b91505090565b60015473ffffffffffffffffffffffffffffffffffffffff163381146108dc576040517fc22c80220000000000000000000000000000000000000000000000000000000081523360048201526024016105e0565b6104cc610e1d565b60006108f08383610b20565b949350505050565b8161092f576040517f3fc3c27a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105108282610f10565b6040517fd568866c00000000000000000000000000000000000000000000000000000000815260206004820152600060248201526060907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d568866c90604401600060405180830381865afa1580156109ce573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a14919081019061182d565b6040516020016107d3919061193d565b6000610a2f81610c8d565b6104cc610f35565b600080610a42610f40565b6040517fd6d7d52500000000000000000000000000000000000000000000000000000000815260206004820152600060248201819052907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d6d7d5259060440160408051808303816000875af1158015610ad8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afc9190611982565b9150506001610b0a82610fb3565b9250925050610b196001600355565b9250929050565b6040517feeb8a8d300000000000000000000000000000000000000000000000000000000815260206004820152600060248201819052908190819073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063eeb8a8d3906044016040805180830381865afa158015610bb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bdc9190611982565b9150506001610bea82610fb3565b92509250509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806104b357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146104b3565b6104cc8133610fce565b610ca2600080611054565b565b600082815260208190526040902060010154610cbf81610c8d565b610cc983836111ae565b50505050565b73ffffffffffffffffffffffffffffffffffffffff81163314610d1e576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d288282611275565b505050565b6000610d376107ea565b610d40426112d7565b610d4a91906119e4565b9050610d568282611373565b60405165ffffffffffff8216815273ffffffffffffffffffffffffffffffffffffffff8316907f3377dc44241e779dd06afab5b788a35ca5f3b778836e2990bdb26a2a4b2e5ed69060200160405180910390a25050565b6000610db88261140f565b610dc1426112d7565b610dcb91906119e4565b9050610dd78282611054565b6040805165ffffffffffff8085168252831660208201527ff1038c18cf84a56e432fdbfaf746924b7ea511dfe03a6506a0ceba4888788d9b910160405180910390a15050565b60015473ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900465ffffffffffff16801580610e6d57504265ffffffffffff821610155b15610eae576040517f19ca5ebb00000000000000000000000000000000000000000000000000000000815265ffffffffffff821660048201526024016105e0565b610ed76000610ed260025473ffffffffffffffffffffffffffffffffffffffff1690565b611275565b50610ee36000836111ae565b5050600180547fffffffffffff000000000000000000000000000000000000000000000000000016905550565b600082815260208190526040902060010154610f2b81610c8d565b610cc98383611275565b610ca2600080611373565b600260035403610fac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105e0565b6002600355565b60006104b3826ec097ce7bc90715b34b9f1000000000611a0a565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610510576040517fe2517d3f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82166004820152602481018390526044016105e0565b6002547a010000000000000000000000000000000000000000000000000000900465ffffffffffff168015611129574265ffffffffffff821610156110ff576002546001805479ffffffffffffffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000090920465ffffffffffff167a01000000000000000000000000000000000000000000000000000002919091179055611129565b6040517f2b1fa2edafe6f7b9e97c1a9e0c3660e645beb2dcaa2d45bdbf9beaf5472e1ec590600090a15b506002805473ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000065ffffffffffff9485160279ffffffffffffffffffffffffffffffffffffffffffffffffffff16177a0100000000000000000000000000000000000000000000000000009290931691909102919091179055565b6000826112645760006111d660025473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614611223576040517f3fc3c27a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84161790555b61126e8383611457565b9392505050565b60008215801561129f575060025473ffffffffffffffffffffffffffffffffffffffff8381169116145b156112cd57600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555b61126e8383611553565b600065ffffffffffff82111561136f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203460448201527f382062697473000000000000000000000000000000000000000000000000000060648201526084016105e0565b5090565b600180547401000000000000000000000000000000000000000065ffffffffffff84811682027fffffffffffff0000000000000000000000000000000000000000000000000000841673ffffffffffffffffffffffffffffffffffffffff881617179093559004168015610d28576040517f8886ebfc4259abdbc16601dd8fb5678e54878f47b3c34836cfc51154a960510990600090a1505050565b60008061141a6107ea565b90508065ffffffffffff168365ffffffffffff16116114425761143d8382611a45565b61126e565b61126e65ffffffffffff84166206978061160e565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205460ff1661154b5760008381526020818152604080832073ffffffffffffffffffffffffffffffffffffffff86168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556114e93390565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016104b3565b5060006104b3565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205460ff161561154b5760008381526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8616808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016104b3565b600081831061161d578161126e565b5090919050565b60006020828403121561163657600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461126e57600080fd5b60006020828403121561167857600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146116a357600080fd5b919050565b600080604083850312156116bb57600080fd5b823591506116cb6020840161167f565b90509250929050565b6000602082840312156116e657600080fd5b61126e8261167f565b60006020828403121561170157600080fd5b813565ffffffffffff8116811461126e57600080fd5b6000806020838503121561172a57600080fd5b823567ffffffffffffffff8082111561174257600080fd5b818501915085601f83011261175657600080fd5b81358181111561176557600080fd5b86602082850101111561177757600080fd5b60209290920196919550909350505050565b60005b838110156117a457818101518382015260200161178c565b50506000910152565b60208152600082518060208401526117cc816040850160208701611789565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561183f57600080fd5b815167ffffffffffffffff8082111561185757600080fd5b818401915084601f83011261186b57600080fd5b81518181111561187d5761187d6117fe565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156118c3576118c36117fe565b816040528281528760208487010111156118dc57600080fd5b6118ed836020830160208801611789565b979650505050505050565b7f496e762000000000000000000000000000000000000000000000000000000000815260008251611930816004850160208701611789565b9190910160040192915050565b7f496e766572736520000000000000000000000000000000000000000000000000815260008251611975816008850160208701611789565b9190910160080192915050565b6000806040838503121561199557600080fd5b825180151581146119a557600080fd5b6020939093015192949293505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b65ffffffffffff818116838216019080821115611a0357611a036119b5565b5092915050565b600082611a40577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b65ffffffffffff828116828216039080821115611a0357611a036119b556fea2646970667358221220258f2a6d53a56c24d1010b1874a6e435e7082a581d4db2b9b39f919cf78a401464736f6c63430008160033";

type UsdoMarketOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UsdoMarketOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UsdoMarketOracle__factory extends ContractFactory {
  constructor(...args: UsdoMarketOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UsdoMarketOracle";
  }

  override deploy(
    _oracle: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UsdoMarketOracle> {
    return super.deploy(
      _oracle,
      _admin,
      overrides || {}
    ) as Promise<UsdoMarketOracle>;
  }
  override getDeployTransaction(
    _oracle: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_oracle, _admin, overrides || {});
  }
  override attach(address: string): UsdoMarketOracle {
    return super.attach(address) as UsdoMarketOracle;
  }
  override connect(signer: Signer): UsdoMarketOracle__factory {
    return super.connect(signer) as UsdoMarketOracle__factory;
  }
  static readonly contractName: "UsdoMarketOracle";

  public readonly contractName: "UsdoMarketOracle";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UsdoMarketOracleInterface {
    return new utils.Interface(_abi) as UsdoMarketOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UsdoMarketOracle {
    return new Contract(address, _abi, signerOrProvider) as UsdoMarketOracle;
  }
}