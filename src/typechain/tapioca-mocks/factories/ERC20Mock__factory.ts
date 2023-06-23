/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC20Mock, ERC20MockInterface } from "../ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_initialAmount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_owner",
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
] as const;

const _bytecode =
  "0x610140604081815234620006785762001c9a80380380916200002282866200067d565b843982019060a083830312620006785782516001600160401b03811162000678578262000051918501620006a1565b602084015190926001600160401b038211620006785762000074918501620006a1565b818401519060608501519460ff8616809603620006785760800151906001600160a01b038216820362000678578351948585016001600160401b038111878210176200042757855260018652603160f81b6020870190815281519092906001600160401b0381116200042757600354600181811c911680156200066d575b60208210146200054d57601f811162000603575b50806020601f82116001146200057a576000916200056e575b508160011b916000199060031b1c1916176003555b8051906001600160401b038211620004275760045490600182811c9216801562000563575b60208310146200054d5781601f849311620004d8575b50602090601f831160011462000449576000926200043d575b50508160011b916000199060031b1c1916176004555b60208151910120945190208460e052610100958187524660a05284519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f978885528784015260608301524660808301523060a083015260a0825260c082019282841060018060401b038511176200042757838752825190206080523060c052610120968752620002343362000718565b8060ff19600a541617600a55604d81116200033757600a0a6103e890808202918204036200033757600955600754336001600160a01b0390911603620003e45750506001600160a01b038116156200039157620002919062000718565b30156200034d57600254818101809111620003375760025530600052600060205281600020818154019055815190815260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60203093a38261ff0019600a541617600a55519061153892836200076284396080518361136d015260a05183611439015260c0518361133e015260e051836113bc015251826113e2015251816113990152f35b634e487b7160e01b600052601160045260246000fd5b815162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b825162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b907f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657261010460649362461bcd60e51b8452602060c4820152602060e48201520152fd5b634e487b7160e01b600052604160045260246000fd5b01519050388062000188565b6004600090815293507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b91905b601f1984168510620004bc576001945083601f19811610620004a2575b505050811b016004556200019e565b015160001960f88460031b161c1916905538808062000493565b8181015183556020948501946001909301929091019062000476565b60046000529091507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f840160051c8101916020851062000542575b90601f859493920160051c01905b8181106200053257506200016f565b6000815584935060010162000523565b909150819062000515565b634e487b7160e01b600052602260045260246000fd5b91607f169162000159565b9050830151386200011f565b600360009081527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b9250601f198416905b818110620005ea57509083600194939210620005d0575b5050811b0160035562000134565b85015160001960f88460031b161c191690553880620005c2565b9192602060018192868a015181550194019201620005ab565b60036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c8101916020841062000662575b601f0160051c01905b81811062000655575062000106565b6000815560010162000646565b90915081906200063d565b90607f1690620000f2565b600080fd5b601f909101601f19168101906001600160401b038211908210176200042757604052565b919080601f8401121562000678578251906001600160401b038211620004275760405191602091620006dd601f8301601f19168401856200067d565b818452828287010111620006785760005b8181106200070457508260009394955001015290565b8581018301518482018401528201620006ee565b600780546001600160a01b039283166001600160a01b0319821681179092559091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a356fe60806040818152600480361015610021575b505050361561001f57600080fd5b005b600092833560e01c90816306fdde0314610cfc57508063095ea7b314610cd257806318160ddd14610cb35780631d0dc26714610c7b57806321442ec914610c4457806322ae81af14610c2657806323b872dd14610b5b5780632e1a7d4d146109bb578063313ce567146109995780633644e515146109755780633950935114610926578063449a52f8146108f957806370a08231146108c3578063715018a61461086f5780637c928fe91461076f5780637ecebe00146107385780638da5cb5b1461071057806395d89b411461060c578063996517cf146105ed578063a457c2d714610545578063a9059cbb14610514578063d0e30db0146104d0578063d4a744ba146104a9578063d505accf146102be578063d6b5a2db14610294578063dd62ed3e1461024b578063e01d55c5146102255763f2fde38b03610011573461022157602036600319011261022157610177610e37565b90610180610e68565b6001600160a01b038092169283156101cf575050600754826001600160a01b0319821617600755167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b83823461024757602036600319011261024757610240610e68565b3560095580f35b5080fd5b50503461024757806003193601126102475780602092610269610e37565b610271610e52565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b838234610247576020366003190112610247576102bb906102b3610e68565b353330610f1b565b80f35b508290346102475760e0366003190112610247576102da610e37565b6102e2610e52565b90604435926064356084359060ff821682036104a557804211610462576001600160a01b03908185169283895260056020528989208054906001820190558a519260208401917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98352868d860152858a1660608601528a608086015260a085015260c084015260c0835260e083019267ffffffffffffffff938181108582111761044f578c5251902090610394611334565b928b5192602084019461190160f01b8652602285015260428401526042835260808301908382109082111761043c57916103e793916103df938d5260c4359260a435925190206112a5565b91909161118b565b16036103f957506102bb939450611089565b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b634e487b7160e01b8b526041875260248bfd5b634e487b7160e01b8c526041885260248cfd5b875162461bcd60e51b8152602081850152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b8680fd5b50503461024757816003193601126102475760209060ff600a5460081c1690519015158152f35b505081600319360112610247576104e7343361145f565b513481527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60203392a280f35b50503461024757806003193601126102475760209061053e610534610e37565b6024359033610f1b565b5160018152f35b5082346105ea57826003193601126105ea5761055f610e37565b91836024359233815260016020528181206001600160a01b03861682526020522054908282106105995760208561053e8585038733611089565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b5050346102475781600319360112610247576020906009549051908152f35b50919034610247578160031936011261024757805191809380549160019083821c92828516948515610706575b60209586861081146106f3578589529081156106cf5750600114610677575b6106738787610669828c0383610ec0565b5191829182610dee565b0390f35b81529295507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8284106106bc57505050826106739461066992820101943880610658565b805486850188015292860192810161069e565b60ff19168887015250505050151560051b8301019250610669826106733880610658565b634e487b7160e01b845260228352602484fd5b93607f1693610639565b5050346102475781600319360112610247576020906001600160a01b03600754169051908152f35b50503461024757602036600319011261024757806020926001600160a01b0361075f610e37565b1681526005845220549051908152f35b508290346102475760203660031901126102475780359060ff600a5460081c166107ad575b506102bb9192338452600860205242908420553361145f565b600954821161082c573383526008602052838320546201518081018091116108195742101561079457606490602085519162461bcd60e51b8352820152601460248201527f45524332304d6f636b3a20746f6f206561726c790000000000000000000000006044820152fd5b634e487b7160e01b845260118252602484fd5b606490602085519162461bcd60e51b8352820152601960248201527f45524332304d6f636b3a20616d6f756e7420746f6f20626967000000000000006044820152fd5b83346105ea57806003193601126105ea57610888610e68565b806001600160a01b0360075481198116600755167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b50503461024757602036600319011261024757806020926001600160a01b036108ea610e37565b16815280845220549051908152f35b505034610247573660031901126105ea576102bb610915610e37565b61091d610e68565b6024359061145f565b50503461024757806003193601126102475761053e60209261096e610949610e37565b91338152600186528481206001600160a01b0384168252865284602435912054610ef8565b9033611089565b505034610247578160031936011261024757602090610992611334565b9051908152f35b50503461024757816003193601126102475760209060ff600a54169051908152f35b503461022157602080600319360112610b5757813591338552848252828486205410610b2e573315610ae3573385528482528385205490838210610a9557508290338652858352038385205581600254036002558383518381527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef833392a38380838015610a8b575b8280929181923390f115610a7f577f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659192519283523392a280f35b505051903d90823e3d90fd5b6108fc9150610a44565b845162461bcd60e51b8152908101839052602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60849184519162461bcd60e51b8352820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152fd5b60649184519162461bcd60e51b8352820152600560248201526422b93937b960d91b6044820152fd5b8380fd5b5082903461024757606036600319011261024757610b77610e37565b610b7f610e52565b9184604435946001600160a01b038416815260016020528181203382526020522054906000198203610bba575b60208661053e878787610f1b565b848210610be35750918391610bd86020969561053e95033383611089565b919394819350610bac565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b50503461024757816003193601126102475760209051620151808152f35b50503461024757602036600319011261024757806020926001600160a01b03610c6b610e37565b1681526008845220549051908152f35b83346105ea57806003193601126105ea57610c94610e68565b600a5461ff0060ff8260081c161560081b169061ff00191617600a5580f35b5050346102475781600319360112610247576020906002549051908152f35b50503461024757806003193601126102475760209061053e610cf2610e37565b6024359033611089565b9291905034610b575783600319360112610b5757600354600181811c9186908281168015610de4575b6020958686108214610dd15750848852908115610daf5750600114610d56575b6106738686610669828b0383610ec0565b929550600383527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b828410610d9c575050508261067394610669928201019438610d45565b8054868501880152928601928101610d7f565b60ff191687860152505050151560051b83010192506106698261067338610d45565b634e487b7160e01b845260229052602483fd5b93607f1693610d25565b6020808252825181830181905290939260005b828110610e2357505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610e01565b600435906001600160a01b0382168203610e4d57565b600080fd5b602435906001600160a01b0382168203610e4d57565b6001600160a01b03600754163303610e7c57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90601f8019910116810190811067ffffffffffffffff821117610ee257604052565b634e487b7160e01b600052604160045260246000fd5b91908201809211610f0557565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038091169182156110365716918215610fe557600082815280602052604081205491808310610f9157604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b0380911691821561113a57169182156110ea5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b600581101561128f578061119c5750565b600181036111e95760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b600281036112365760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b60031461123f57565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116113285791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa1561131b5781516001600160a01b03811615611315579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016301480611436575b1561138f577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c0810181811067ffffffffffffffff821117610ee25760405251902090565b507f00000000000000000000000000000000000000000000000000000000000000004614611366565b6001600160a01b03169081156114bd577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020826114a1600094600254610ef8565b60025584845283825260408420818154019055604051908152a3565b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fdfea2646970667358221220f6c0bd3c03db55ac00fb93744d4fdc7e141d5a3e68f362d567a87f5088244a0164736f6c63430008120033";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Mock";
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _initialAmount: PromiseOrValue<BigNumberish>,
    decimals_: PromiseOrValue<BigNumberish>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(
      _name,
      _symbol,
      _initialAmount,
      decimals_,
      _owner,
      overrides || {}
    ) as Promise<ERC20Mock>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _initialAmount: PromiseOrValue<BigNumberish>,
    decimals_: PromiseOrValue<BigNumberish>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _initialAmount,
      decimals_,
      _owner,
      overrides || {}
    );
  }
  override attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  override connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }
  static readonly contractName: "ERC20Mock";

  public readonly contractName: "ERC20Mock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}