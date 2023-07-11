/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CTokenMock,
  CTokenMockInterface,
} from "../../../compound/mocks/CTokenMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
    name: "MINT_WINDOW",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "exchangeRateStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "extractTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "hasMintRestrictions",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintLimit",
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
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mintedAt",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "redeemTokens",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
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
  {
    inputs: [],
    name: "toggleRestrictions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlying",
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
        internalType: "uint256",
        name: "_newVal",
        type: "uint256",
      },
    ],
    name: "updateMintLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x61014034620005dd57601f90601f199062001cad388190038481018416830192916001600160401b039182851184861017620004ec5780849260409687528339602093849181010312620005dd57516001600160a01b03959092908684168403620005dd578451926200007284620005e2565b600a8452828401936943546f6b656e4d6f636b60b01b85528651946200009886620005e2565b6003918287526243544d60e81b86880152885199620000b78b620005e2565b6001808c52878c0194603160f81b86528351878111620004ec5781548381811c91168015620005d2575b8b821014620005bc5789811162000571575b50808a8a82116001146200050e5760009162000502575b5060001982841b1c191690831b1781555b895191878311620004ec5760049a8b548281811c91168015620004e1575b8c821014620004cc57808b8d92116200047f575b50508a908a851160011462000414578495509084929160009562000408575b50501b92600019911b1c19161787555b519020975190208760e05261010098818a524660a052875191858301907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f9a8b83528a85015260608401524660808401523060a084015260a0835260c083019383851090851117620003f357838952825190206080523060c0526101209889526200020733620005fe565b601260ff19600a541617600a55683635c9adc5dea0000060095533906007541603620003b2575050331562000360576200024133620005fe565b301562000320575060025469152d02c7e14af6800000928382018092116200030b57507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8794939260009260025530835282815286832084815401905586519384523093a3600a549062010000600160b01b039060101b1690610100600160b01b0319161717600a5551906116659283620006488439608051836112bc015260a05183611388015260c05183611286015260e0518361130b01525182611331015251816112e80152f35b601190634e487b7160e01b6000525260246000fd5b6064929185519262461bcd60e51b845283015260248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b845162461bcd60e51b8152808401839052602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b907f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726101046064938662461bcd60e51b85528060c483015260e48201520152fd5b604187634e487b7160e01b6000525260246000fd5b0151935038806200016c565b9291948416928c600052848c600020948d6000905b898383106200046657505050106200044b575b50505050811b0187556200017c565b01519060f884600019921b161c19169055388080806200043c565b8686015189559097019694850194889350018e62000429565b8d6000528b826000209181880160051c8301938810620004c2575b0160051c019083905b828110620004b557508c91506200014d565b60008155018390620004a3565b925081926200049a565b60228d634e487b7160e01b6000525260246000fd5b90607f169062000139565b634e487b7160e01b600052604160045260246000fd5b9050850151386200010a565b8585931690846000528c600020918d6000905b82821062000559575050831162000540575b5050811b0181556200011b565b87015160001983861b60f8161c19169055388062000533565b838b0151855588969094019392830192018e62000521565b826000528a6000208a80840160051c8201928d8510620005b2575b0160051c019084905b828110620005a5575050620000f3565b6000815501849062000595565b925081926200058c565b634e487b7160e01b600052602260045260246000fd5b90607f1690620000e1565b600080fd5b604081019081106001600160401b03821117620004ec57604052565b600780546001600160a01b039283166001600160a01b0319821681179092559091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a356fe60806040818152600480361015610021575b505050361561001f57600080fd5b005b600092833560e01c90816306fdde0314610c4757508063095ea7b314610c1d5780631249c58b14610bdd57806318160ddd14610bbe578063182df0f514610b9b5780631d0dc26714610b6357806321442ec914610b2b57806322ae81af14610b0d57806323b872dd14610a435780632e1a7d4d14610998578063313ce567146109765780633644e515146109525780633950935114610902578063449a52f8146108d55780636f307dc3146108a857806370a0823114610871578063715018a6146108145780637c928fe9146107f75780637ecebe00146107bf5780638da5cb5b1461079657806395d89b4114610692578063996517cf14610673578063a457c2d7146105cc578063a9059cbb1461059b578063d0e30db014610557578063d4a744ba14610530578063d505accf14610346578063d6b5a2db1461031c578063db006a75146102c7578063dd62ed3e1461027e578063e01d55c5146102585763f2fde38b036100115734610254576020366003190112610254576101a3610d86565b906101ac610db7565b6001600160a01b03918216928315610202575050600754826bffffffffffffffffffffffff60a01b821617600755167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b83823461027a57602036600319011261027a57610273610db7565b3560095580f35b5080fd5b50503461027a578060031936011261027a578060209261029c610d86565b6102a4610da1565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b50346102545760203660031901126102545735908280838015610312575b8280929181923390f115610307576020925061030182336113ae565b51908152f35b51913d9150823e3d90fd5b6108fc91506102e5565b83823461027a57602036600319011261027a576103439061033b610db7565b353330610e6a565b80f35b5082903461027a5760e036600319011261027a57610362610d86565b61036a610da1565b90604435926064356084359060ff8216820361052c578042116104e95760018060a01b03908185169283895260056020528989208054906001820190558a519260208401917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98352868d860152858a1660608601528a608086015260a085015260c084015260c0835260e083019267ffffffffffffffff93818110858211176104d6578c525190209061041b611283565b928b5192602084019461190160f01b865260228501526042840152604283526080830190838210908211176104c3579161046e9391610466938d5260c4359260a435925190206111f4565b9190916110da565b16036104805750610343939450610fd8565b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b634e487b7160e01b8b526041875260248bfd5b634e487b7160e01b8c526041885260248cfd5b875162461bcd60e51b8152602081850152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b8680fd5b50503461027a578160031936011261027a5760209060ff600a5460081c1690519015158152f35b50508160031936011261027a5761056e34336114b5565b513481527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60203392a280f35b50503461027a578060031936011261027a576020906105c56105bb610d86565b6024359033610e6a565b5160018152f35b5082346106705782600319360112610670576105e6610d86565b918360243592338152600160205281812060018060a01b038616825260205220549082821061061f576020856105c58585038733610fd8565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b50503461027a578160031936011261027a576020906009549051908152f35b5091903461027a578160031936011261027a57805191809380549160019083821c9282851694851561078c575b60209586861081146107795785895290811561075557506001146106fd575b6106f987876106ef828c0383610e0f565b5191829182610d3d565b0390f35b81529295507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b82841061074257505050826106f9946106ef928201019438806106de565b8054868501880152928601928101610724565b60ff19168887015250505050151560051b83010192506106ef826106f938806106de565b634e487b7160e01b845260228352602484fd5b93607f16936106bf565b50503461027a578160031936011261027a5760075490516001600160a01b039091168152602090f35b50503461027a57602036600319011261027a5760209181906001600160a01b036107e7610d86565b1681526005845220549051908152f35b83823461027a57602036600319011261027a576103439035611558565b833461067057806003193601126106705761082d610db7565b600780546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b50503461027a57602036600319011261027a5760209181906001600160a01b03610899610d86565b16815280845220549051908152f35b50503461027a578160031936011261027a57600a54905160109190911c6001600160a01b03168152602090f35b50503461027a57366003190112610670576103436108f1610d86565b6108f9610db7565b602435906114b5565b50503461027a578060031936011261027a576105c560209261094b610925610d86565b338352600186528483206001600160a01b03821684528652918490205460243590610e47565b9033610fd8565b50503461027a578160031936011261027a5760209061096f611283565b9051908152f35b50503461027a578160031936011261027a5760209060ff600a54169051908152f35b5090346102545760203660031901126102545781359133845283602052828285205410610a1957506109ca82336113ae565b8280838015610a0f575b8280929181923390f11561030757519081527f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b6560203392a280f35b6108fc91506109d4565b6020606492519162461bcd60e51b8352820152600560248201526422b93937b960d91b6044820152fd5b5082903461027a57606036600319011261027a57610a5f610d86565b610a67610da1565b91846044359460018060a01b038416815260016020528181203382526020522054906000198203610aa1575b6020866105c5878787610e6a565b848210610aca5750918391610abf602096956105c595033383610fd8565b919394819350610a93565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b50503461027a578160031936011261027a5760209051620151808152f35b50503461027a57602036600319011261027a5760209181906001600160a01b03610b53610d86565b1681526008845220549051908152f35b8334610670578060031936011261067057610b7c610db7565b600a5461ff0060ff8260081c161560081b169061ff00191617600a5580f35b50503461027a578160031936011261027a5760209051670de0b6b3a76400008152f35b50503461027a578160031936011261027a576020906002549051908152f35b508280600319360112610670576063193401348111610c0a5780610c0361034392611558565b3333610e6a565b506011602492634e487b7160e01b835252fd5b50503461027a578060031936011261027a576020906105c5610c3d610d86565b6024359033610fd8565b9291905034610d395783600319360112610d3957600354600181811c9186908281168015610d2f575b6020958686108214610d1c5750848852908115610cfa5750600114610ca1575b6106f986866106ef828b0383610e0f565b929550600383527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b828410610ce757505050826106f9946106ef928201019438610c90565b8054868501880152928601928101610cca565b60ff191687860152505050151560051b83010192506106ef826106f938610c90565b634e487b7160e01b845260229052602483fd5b93607f1693610c70565b8380fd5b6020808252825181830181905290939260005b828110610d7257505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610d50565b600435906001600160a01b0382168203610d9c57565b600080fd5b602435906001600160a01b0382168203610d9c57565b6007546001600160a01b03163303610dcb57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90601f8019910116810190811067ffffffffffffffff821117610e3157604052565b634e487b7160e01b600052604160045260246000fd5b91908201809211610e5457565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03908116918215610f855716918215610f3457600082815280602052604081205491808310610ee057604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b0390811691821561108957169182156110395760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b60058110156111de57806110eb5750565b600181036111385760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b600281036111855760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b60031461118e57565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116112775791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa1561126a5781516001600160a01b03811615611264579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161480611385575b156112de577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c0810181811067ffffffffffffffff821117610e315760405251902090565b507f000000000000000000000000000000000000000000000000000000000000000046146112b5565b6001600160a01b031680156114665760009181835282602052604083205481811061141657817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef926020928587528684520360408620558060025403600255604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fd5b6001600160a01b0316908115611513577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020826114f7600094600254610e47565b60025584845283825260408420818154019055604051908152a3565b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b60ff600a5460081c16611582575b6115809033600052600860205242604060002055336114b5565b565b60095481116115ea57336000526008602052604060002054620151808101809111610e54574210156115665760405162461bcd60e51b815260206004820152601460248201527345524332304d6f636b3a20746f6f206561726c7960601b6044820152606490fd5b60405162461bcd60e51b815260206004820152601960248201527f45524332304d6f636b3a20616d6f756e7420746f6f20626967000000000000006044820152606490fdfea26469706673582212203e812974c4a352764a8410d60ec8d3a21bdce1066fdfaaf0a52943f630793d6f64736f6c63430008120033";

type CTokenMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CTokenMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CTokenMock__factory extends ContractFactory {
  constructor(...args: CTokenMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CTokenMock";
  }

  override deploy(
    _underlying: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CTokenMock> {
    return super.deploy(_underlying, overrides || {}) as Promise<CTokenMock>;
  }
  override getDeployTransaction(
    _underlying: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_underlying, overrides || {});
  }
  override attach(address: string): CTokenMock {
    return super.attach(address) as CTokenMock;
  }
  override connect(signer: Signer): CTokenMock__factory {
    return super.connect(signer) as CTokenMock__factory;
  }
  static readonly contractName: "CTokenMock";

  public readonly contractName: "CTokenMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CTokenMockInterface {
    return new utils.Interface(_abi) as CTokenMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CTokenMock {
    return new Contract(address, _abi, signerOrProvider) as CTokenMock;
  }
}
