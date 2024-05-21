/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  DualETHOracle,
  DualETHOracleInterface,
} from "../../../../../contracts/oracle/implementation/Arbitrum/DualETHOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ITapiocaOracle",
        name: "_seerClEthOracle",
        type: "address",
      },
      {
        internalType: "contract ITapiocaOracle",
        name: "_seerUniEthOracle",
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
        name: "data",
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
    stateMutability: "pure",
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
        name: "data",
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
    inputs: [],
    name: "seerClEthOracle",
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
    inputs: [],
    name: "seerUniEthOracle",
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
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040526000805463ffffffff1916610e101790553480156200002257600080fd5b5060405162001f4638038062001f46833981016040819052620000459162000241565b6001600160a01b038083166080526203f48090829081166200008157604051636116401160e11b81526000600482015260240160405180910390fd5b600280546001600160d01b0316600160d01b65ffffffffffff851602179055620000ad6000826200011c565b5050600160045550600580546001600160a01b038087166001600160a01b0319928316179092556006805492861692909116919091179055620001117fac4f1890dc96c9a02330d1fa696648a38f3b282d2449c2d8e6f10507488c84c8826200011c565b5050505050620002a9565b6000826200017d576000620001396003546001600160a01b031690565b6001600160a01b0316146200016157604051631fe1e13d60e11b815260040160405180910390fd5b600380546001600160a01b0319166001600160a01b0384161790555b62000189838362000192565b90505b92915050565b60008281526001602090815260408083206001600160a01b038516845290915281205460ff166200021f5760008381526001602081815260408084206001600160a01b0387168086529252808420805460ff19169093179092559051339286917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45060016200018c565b5060006200018c565b6001600160a01b03811681146200023e57600080fd5b50565b600080600080608085870312156200025857600080fd5b8451620002658162000228565b6020860151909450620002788162000228565b60408601519093506200028b8162000228565b60608601519092506200029e8162000228565b939692955090935050565b608051611c73620002d3600039600081816103f90152818161111b015261115b0152611c736000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c8063a1eda53c11610104578063cf6eefb7116100a2578063d602b9fd11610071578063d602b9fd14610538578063d6d7d52514610540578063ed2f86031461056a578063eeb8a8d31461058f57600080fd5b8063cf6eefb71461047f578063d39bbef0146104cb578063d547741f146104de578063d568866c146104f157600080fd5b8063c5980182116100de578063c5980182146103f4578063c699c4d61461041b578063cc8463c81461046f578063cefc14291461047757600080fd5b8063a1eda53c146103a5578063a217fddf146103cc578063b5cb5721146103d457600080fd5b806336568abe1161017c578063649a5ec71161014b578063649a5ec71461032657806384ef8ffc146103395780638da5cb5b1461035757806391d148541461035f57600080fd5b806336568abe146102c6578063408b0546146102d95780634842855c146102ec578063634e93da1461031357600080fd5b806316def907116101b857806316def9071461022d578063248a9ca3146102725780632f2ff15d146102a4578063313ce567146102b757600080fd5b806301ffc9a7146101df578063022d63fb146102075780630aa6220b14610223575b600080fd5b6101f26101ed3660046118a5565b6105a2565b60405190151581526020015b60405180910390f35b620697805b60405165ffffffffffff90911681526020016101fe565b61022b6105fe565b005b60055461024d9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101fe565b6102966102803660046118e7565b6000908152600160208190526040909120015490565b6040519081526020016101fe565b61022b6102b2366004611929565b610614565b604051601281526020016101fe565b61022b6102d4366004611929565b610659565b61022b6102e7366004611955565b610763565b6102967fac4f1890dc96c9a02330d1fa696648a38f3b282d2449c2d8e6f10507488c84c881565b61022b61032136600461197b565b6107c5565b61022b610334366004611996565b6107d9565b60035473ffffffffffffffffffffffffffffffffffffffff1661024d565b61024d6107ed565b6101f261036d366004611929565b600091825260016020908152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6103ad610813565b6040805165ffffffffffff9384168152929091166020830152016101fe565b610296600081565b60065461024d9073ffffffffffffffffffffffffffffffffffffffff1681565b61024d7f000000000000000000000000000000000000000000000000000000000000000081565b6104626104293660046119be565b505060408051808201909152600781527f4554482f55534400000000000000000000000000000000000000000000000000602082015290565b6040516101fe9190611a30565b61020c61088f565b61022b61092d565b6002546040805173ffffffffffffffffffffffffffffffffffffffff831681527401000000000000000000000000000000000000000090920465ffffffffffff166020830152016101fe565b6102966104d93660046119be565b610989565b61022b6104ec366004611929565b61099d565b6104626104ff3660046119be565b505060408051808201909152600c81527f4455414c204554482f5553440000000000000000000000000000000000000000602082015290565b61022b6109de565b61055361054e3660046119be565b6109f1565b6040805192151583526020830191909152016101fe565b60005461057a9063ffffffff1681565b60405163ffffffff90911681526020016101fe565b61055361059d3660046119be565b610ba9565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f314987860000000000000000000000000000000000000000000000000000000014806105f857506105f882610bc1565b92915050565b600061060981610c58565b610611610c62565b50565b8161064b576040517f3fc3c27a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106558282610c6f565b5050565b81158015610681575060035473ffffffffffffffffffffffffffffffffffffffff8281169116145b156107595760025473ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900465ffffffffffff16811515806106d5575065ffffffffffff8116155b806106e857504265ffffffffffff821610155b1561072e576040517f19ca5ebb00000000000000000000000000000000000000000000000000000000815265ffffffffffff821660048201526024015b60405180910390fd5b5050600280547fffffffffffff000000000000ffffffffffffffffffffffffffffffffffffffff1690555b6106558282610c9b565b7fac4f1890dc96c9a02330d1fa696648a38f3b282d2449c2d8e6f10507488c84c861078d81610c58565b50600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff92909216919091179055565b60006107d081610c58565b61065582610cf9565b60006107e481610c58565b61065582610d79565b600061080e60035473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6003546000907a010000000000000000000000000000000000000000000000000000900465ffffffffffff16801515801561085657504265ffffffffffff821610155b61086257600080610887565b60035474010000000000000000000000000000000000000000900465ffffffffffff16815b915091509091565b6003546000907a010000000000000000000000000000000000000000000000000000900465ffffffffffff1680151580156108d157504265ffffffffffff8216105b610903576002547a010000000000000000000000000000000000000000000000000000900465ffffffffffff16610927565b60035474010000000000000000000000000000000000000000900465ffffffffffff165b91505090565b60025473ffffffffffffffffffffffffffffffffffffffff16338114610981576040517fc22c8022000000000000000000000000000000000000000000000000000000008152336004820152602401610725565b610611610de9565b60006109958383610edc565b949350505050565b816109d4576040517f3fc3c27a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106558282611075565b60006109e981610c58565b61061161109b565b6000806109fc6110a6565b610a04611119565b6005546040517fd6d7d525000000000000000000000000000000000000000000000000000000008152602060048201526000602482018190529173ffffffffffffffffffffffffffffffffffffffff169063d6d7d5259060440160408051808303816000875af1158015610a7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa09190611aab565b6006546040517fd6d7d5250000000000000000000000000000000000000000000000000000000081526020600482015260006024820181905292945091925073ffffffffffffffffffffffffffffffffffffffff169063d6d7d5259060440160408051808303816000875af1158015610b1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b419190611aab565b915050600080828411610b55578284610b58565b83835b90925090508615610b8e576000610b71888a018a611ad9565b805190915015610b8c57600183965096505050505050610b98565b505b6001955093505050505b610ba26001600455565b9250929050565b600080610bb68484610edc565b915091509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806105f857507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146105f8565b610611813361127a565b610c6d600080611302565b565b60008281526001602081905260409091200154610c8b81610c58565b610c95838361145c565b50505050565b73ffffffffffffffffffffffffffffffffffffffff81163314610cea576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cf48282611523565b505050565b6000610d0361088f565b610d0c42611585565b610d169190611b7b565b9050610d228282611621565b60405165ffffffffffff8216815273ffffffffffffffffffffffffffffffffffffffff8316907f3377dc44241e779dd06afab5b788a35ca5f3b778836e2990bdb26a2a4b2e5ed69060200160405180910390a25050565b6000610d84826116bd565b610d8d42611585565b610d979190611b7b565b9050610da38282611302565b6040805165ffffffffffff8085168252831660208201527ff1038c18cf84a56e432fdbfaf746924b7ea511dfe03a6506a0ceba4888788d9b910160405180910390a15050565b60025473ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900465ffffffffffff16801580610e3957504265ffffffffffff821610155b15610e7a576040517f19ca5ebb00000000000000000000000000000000000000000000000000000000815265ffffffffffff82166004820152602401610725565b610ea36000610e9e60035473ffffffffffffffffffffffffffffffffffffffff1690565b611523565b50610eaf60008361145c565b5050600280547fffffffffffff000000000000000000000000000000000000000000000000000016905550565b6005546040517feeb8a8d300000000000000000000000000000000000000000000000000000000815260206004820152600060248201819052918291829173ffffffffffffffffffffffffffffffffffffffff169063eeb8a8d3906044016040805180830381865afa158015610f56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7a9190611aab565b6006546040517feeb8a8d30000000000000000000000000000000000000000000000000000000081526020600482015260006024820181905292945091925073ffffffffffffffffffffffffffffffffffffffff169063eeb8a8d3906044016040805180830381865afa158015610ff5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110199190611aab565b91505060008082841161102d578284611030565b83835b90925090508615611066576000611049888a018a611ad9565b80519091501561106457600183965096505050505050610ba2565b505b60019890975095505050505050565b6000828152600160208190526040909120015461109181610c58565b610c958383611523565b610c6d600080611621565b600260045403611112576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610725565b6002600455565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661115657565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156111c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e89190611bbb565b50919450925050821590508061122a576040517f032b3d0000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006112368342611c0b565b60005490915063ffffffff168111610c95576040517fd15f73b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610655576040517fe2517d3f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8216600482015260248101839052604401610725565b6003547a010000000000000000000000000000000000000000000000000000900465ffffffffffff1680156113d7574265ffffffffffff821610156113ad576003546002805479ffffffffffffffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000090920465ffffffffffff167a010000000000000000000000000000000000000000000000000000029190911790556113d7565b6040517f2b1fa2edafe6f7b9e97c1a9e0c3660e645beb2dcaa2d45bdbf9beaf5472e1ec590600090a15b506003805473ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000065ffffffffffff9485160279ffffffffffffffffffffffffffffffffffffffffffffffffffff16177a0100000000000000000000000000000000000000000000000000009290931691909102919091179055565b60008261151257600061148460035473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146114d1576040517f3fc3c27a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84161790555b61151c8383611705565b9392505050565b60008215801561154d575060035473ffffffffffffffffffffffffffffffffffffffff8381169116145b1561157b57600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555b61151c83836117d0565b600065ffffffffffff82111561161d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203460448201527f38206269747300000000000000000000000000000000000000000000000000006064820152608401610725565b5090565b600280547401000000000000000000000000000000000000000065ffffffffffff84811682027fffffffffffff0000000000000000000000000000000000000000000000000000841673ffffffffffffffffffffffffffffffffffffffff881617179093559004168015610cf4576040517f8886ebfc4259abdbc16601dd8fb5678e54878f47b3c34836cfc51154a960510990600090a1505050565b6000806116c861088f565b90508065ffffffffffff168365ffffffffffff16116116f0576116eb8382611c1e565b61151c565b61151c65ffffffffffff84166206978061188f565b600082815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205460ff166117c857600083815260016020818152604080842073ffffffffffffffffffffffffffffffffffffffff8716808652925280842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169093179092559051339286917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45060016105f8565b5060006105f8565b600082815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205460ff16156117c857600083815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016105f8565b600081831061189e578161151c565b5090919050565b6000602082840312156118b757600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461151c57600080fd5b6000602082840312156118f957600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461192457600080fd5b919050565b6000806040838503121561193c57600080fd5b8235915061194c60208401611900565b90509250929050565b60006020828403121561196757600080fd5b813563ffffffff8116811461151c57600080fd5b60006020828403121561198d57600080fd5b61151c82611900565b6000602082840312156119a857600080fd5b813565ffffffffffff8116811461151c57600080fd5b600080602083850312156119d157600080fd5b823567ffffffffffffffff808211156119e957600080fd5b818501915085601f8301126119fd57600080fd5b813581811115611a0c57600080fd5b866020828501011115611a1e57600080fd5b60209290920196919550909350505050565b60006020808352835180602085015260005b81811015611a5e57858101830151858201604001528201611a42565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b801515811461061157600080fd5b60008060408385031215611abe57600080fd5b8251611ac981611a9d565b6020939093015192949293505050565b600060208284031215611aeb57600080fd5b6040516020810181811067ffffffffffffffff82111715611b35577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040528235611b4381611a9d565b81529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b65ffffffffffff818116838216019080821115611b9a57611b9a611b4c565b5092915050565b805169ffffffffffffffffffff8116811461192457600080fd5b600080600080600060a08688031215611bd357600080fd5b611bdc86611ba1565b9450602086015193506040860151925060608601519150611bff60808701611ba1565b90509295509295909350565b818103818111156105f8576105f8611b4c565b65ffffffffffff828116828216039080821115611b9a57611b9a611b4c56fea26469706673582212209fd6ab72214bce4203fdf0f42aaa0f0246163dacfa9c10986adfe77dd2b2cc8064736f6c63430008160033";

type DualETHOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DualETHOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DualETHOracle__factory extends ContractFactory {
  constructor(...args: DualETHOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "DualETHOracle";
  }

  override deploy(
    _seerClEthOracle: PromiseOrValue<string>,
    _seerUniEthOracle: PromiseOrValue<string>,
    _sequencerUptimeFeed: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DualETHOracle> {
    return super.deploy(
      _seerClEthOracle,
      _seerUniEthOracle,
      _sequencerUptimeFeed,
      _admin,
      overrides || {}
    ) as Promise<DualETHOracle>;
  }
  override getDeployTransaction(
    _seerClEthOracle: PromiseOrValue<string>,
    _seerUniEthOracle: PromiseOrValue<string>,
    _sequencerUptimeFeed: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _seerClEthOracle,
      _seerUniEthOracle,
      _sequencerUptimeFeed,
      _admin,
      overrides || {}
    );
  }
  override attach(address: string): DualETHOracle {
    return super.attach(address) as DualETHOracle;
  }
  override connect(signer: Signer): DualETHOracle__factory {
    return super.connect(signer) as DualETHOracle__factory;
  }
  static readonly contractName: "DualETHOracle";

  public readonly contractName: "DualETHOracle";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DualETHOracleInterface {
    return new utils.Interface(_abi) as DualETHOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DualETHOracle {
    return new Contract(address, _abi, signerOrProvider) as DualETHOracle;
  }
}
