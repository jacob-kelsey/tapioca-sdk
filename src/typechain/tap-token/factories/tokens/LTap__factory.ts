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
import type { PromiseOrValue } from "../../common";
import type { LTap, LTapInterface } from "../../tokens/LTap";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_tapToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxLockedUntil",
        type: "uint256",
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
    name: "claimOwnership",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "lockedUntil",
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
    name: "maxLockedUntil",
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
    inputs: [],
    name: "pendingOwner",
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
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lockedUntil",
        type: "uint256",
      },
    ],
    name: "setLockedUntil",
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
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610140346200052057601f62001b4138819003918201601f19168301916001600160401b038311848410176200052557808492604094855283398101031262000520578051906001600160a01b038216820362000520576020015160405162000068816200053b565b6004918282526304c5441560e41b91826020820152604051926200008c846200053b565b84845280602085015260405190620000a4826200053b565b858252602082015260405193620000bb856200053b565b60018552603160f81b6020860152600080546001600160a01b031916339081178255907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a38051906001600160401b0382116200050b57600554600181811c9116801562000500575b6020821014620004eb579081601f84931162000495575b50602090601f83116001146200040657600092620003fa575b50508160011b916000199060031b1c1916176005555b8051906001600160401b038211620003e557600654600181811c91168015620003da575b6020821014620003c5579081601f84931162000361575b50602090601f8311600114620002e757600092620002db575b50508160011b916000199060031b1c1916176006555b602081519101209160208151910120938260e052610100948086524660a05260405160208101917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f95868452604083015260608201524660808201523060a082015260a0815260c081019581871060018060401b03881117620002c65750856040525190206080523060c05261012092835260018060a01b031660018060a01b0319600954161760095580600a55600b556115c9928362000558843960805183611489015260a05183611555015260c0518361145a015260e051836114d8015251826114fe015251816114b50152f35b604190634e487b7160e01b6000525260246000fd5b015190503880620001c0565b6006600090815260008051602062001b218339815191529350601f198516905b8181106200034857509084600195949392106200032e575b505050811b01600655620001d6565b015160001960f88460031b161c191690553880806200031f565b9293602060018192878601518155019501930162000307565b600660005290915060008051602062001b21833981519152601f840160051c81019160208510620003ba575b90601f859493920160051c01905b818110620003aa5750620001a7565b600081558493506001016200039b565b90915081906200038d565b602287634e487b7160e01b6000525260246000fd5b90607f169062000190565b604186634e487b7160e01b6000525260246000fd5b01519050388062000156565b6005600090815293507f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db091905b601f198416851062000479576001945083601f198116106200045f575b505050811b016005556200016c565b015160001960f88460031b161c1916905538808062000450565b8181015183556020948501946001909301929091019062000433565b90915060056000526020600020601f840160051c810160208510620004e3575b90849392915b601f830160051c82018110620004d35750506200013d565b60008155859450600101620004bb565b5080620004b5565b602288634e487b7160e01b6000525260246000fd5b90607f169062000126565b604187634e487b7160e01b6000525260246000fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117620005255760405256fe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde0314610dca57508163078dfbe714610c96578163095ea7b314610c6c57816318160ddd14610c4e57816323b872dd14610b835781632cb60e9214610b04578163313ce56714610ae85781633391165214610ac95781633644e51514610aa55781633950935114610a565781634e71e0c81461099957816370a08231146109625781637ecebe001461092b5781638da5cb5b1461090557816395d89b4114610802578163a457c2d714610741578163a9059cbb14610710578163b6b55f25146105e1578163be040fb0146103bc578163ce0617ec1461039d578163d505accf1461019457508063dd62ed3e1461014c5763e30c39781461012257600080fd5b346101485781600319360112610148576020906001600160a01b03600154169051908152f35b5080fd5b503461014857806003193601126101485780602092610169610ece565b610171610ee9565b6001600160a01b0391821683526003865283832091168252845220549051908152f35b839150346101485760e0366003190112610148576101b0610ece565b6101b8610ee9565b90604435926064356084359060ff8216820361039957804211610356576001600160a01b03908185169283895260076020528989208054906001820190558a519260208401917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98352868d860152858a1660608601528a608086015260a085015260c084015260c0835260e083019267ffffffffffffffff9381811085821117610343578c525190209061026a611450565b928b519260208401947f19010000000000000000000000000000000000000000000000000000000000008652602285015260428401526042835260808301908382109082111761033057916102d893916102d0938d5260c4359260a435925190206113c1565b91909161128f565b16036102ed57506102ea93945061115b565b80f35b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b60248b604189634e487b7160e01b835252fd5b60248c60418a634e487b7160e01b835252fd5b60648360208a519162461bcd60e51b8352820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152fd5b8680fd5b505034610148578160031936011261014857602090600a549051908152f35b9050346105dd57826003193601126105dd57600a5442111561059b57338352602091600283528084205433156105335733855260028452818520548181106104cb57908085923388526002845203838720558084540384558583518281527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef843392a360446001600160a01b03600954169487855196879485937fa9059cbb000000000000000000000000000000000000000000000000000000008552339085015260248401525af19081156104c25750610495578280f35b816104b492903d106104bb575b6104ac8183610f4a565b81019061157b565b5038808280f35b503d6104a2565b513d85823e3d90fd5b6084848685519162461bcd60e51b8352820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152fd5b5091608492519162461bcd60e51b8352820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152fd5b6020606492519162461bcd60e51b8352820152600c60248201527f5374696c6c206c6f636b656400000000000000000000000000000000000000006044820152fd5b8280fd5b919050346105dd576020908160031936011261070c5782359284836001600160a01b036009541660648551809481937f23b872dd00000000000000000000000000000000000000000000000000000000835233888401523060248401528a60448401525af18015610702576106e5575b5033156106a457917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef918361068886889654610f82565b905533845260028252808420858154019055519384523393a380f35b82606492519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b6106fb90843d86116104bb576104ac8183610f4a565b5038610651565b83513d88823e3d90fd5b8380fd5b50503461014857806003193601126101485760209061073a610730610ece565b6024359033610fa5565b5160018152f35b905082346107ff57826003193601126107ff5761075c610ece565b91836024359233815260036020528181206001600160a01b03861682526020522054908282106107965760208561073a858503873361115b565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152fd5b80fd5b919050346105dd57826003193601126105dd57805191836006549060019082821c9282811680156108fb575b60209586861082146108e857508488529081156108c6575060011461086d575b610869868661085f828b0383610f4a565b5191829182610e85565b0390f35b929550600683527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f5b8284106108b357505050826108699461085f92820101943861084e565b8054868501880152928601928101610896565b60ff191687860152505050151560051b830101925061085f826108693861084e565b836022602492634e487b7160e01b835252fd5b93607f169361082e565b5050346101485781600319360112610148576001600160a01b0360209254169051908152f35b50503461014857602036600319011261014857806020926001600160a01b03610952610ece565b1681526007845220549051908152f35b50503461014857602036600319011261014857806020926001600160a01b03610989610ece565b1681526002845220549051908152f35b919050346105dd57826003193601126105dd57600154906001600160a01b039283831691823303610a135750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a373ffffffffffffffffffffffffffffffffffffffff198093161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b50503461014857806003193601126101485761073a602092610a9e610a79610ece565b91338152600386528481206001600160a01b0384168252865284602435912054610f82565b903361115b565b505034610148578160031936011261014857602090610ac2611450565b9051908152f35b505034610148578160031936011261014857602090600b549051908152f35b5050346101485781600319360112610148576020905160128152f35b9050346105dd5760203660031901126105dd57803591610b2f6001600160a01b038554163314610eff565b600b548311610b40575050600a5580f35b906020606492519162461bcd60e51b8352820152600860248201527f546f6f206c6174650000000000000000000000000000000000000000000000006044820152fd5b8391503461014857606036600319011261014857610b9f610ece565b610ba7610ee9565b9184604435946001600160a01b038416815260036020528181203382526020522054906000198203610be2575b60208661073a878787610fa5565b848210610c0b5750918391610c006020969561073a9503338361115b565b919394819350610bd4565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b9050346105dd57826003193601126105dd5760209250549051908152f35b50503461014857806003193601126101485760209061073a610c8c610ece565b602435903361115b565b919050346105dd5760603660031901126105dd57610cb2610ece565b91602435918215158303610dc657604435928315158403610dc2576001600160a01b03948591610ce6838954163314610eff565b15610d9b571692831590811591610d93575b5015610d505750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a373ffffffffffffffffffffffffffffffffffffffff198092161782556001541660015580f35b906020606492519162461bcd60e51b8352820152601560248201527f4f776e61626c653a207a65726f206164647265737300000000000000000000006044820152fd5b905038610cf8565b93505050501673ffffffffffffffffffffffffffffffffffffffff19600154161760015580f35b8580fd5b8480fd5b9291503461070c578360031936011261070c57600554600181811c9186908281168015610e7b575b60209586861082146108e857508488529081156108c65750600114610e2257610869868661085f828b0383610f4a565b929550600583527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db05b828410610e6857505050826108699461085f92820101943861084e565b8054868501880152928601928101610e4b565b93607f1693610df2565b6020808252825181830181905290939260005b828110610eba57505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610e98565b600435906001600160a01b0382168203610ee457565b600080fd5b602435906001600160a01b0382168203610ee457565b15610f0657565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90601f8019910116810190811067ffffffffffffffff821117610f6c57604052565b634e487b7160e01b600052604160045260246000fd5b91908201809211610f8f57565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038091169182156110f15716918215611087576000828152600260205260408120549180831061101d57604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef95876020965260028652038282205586815220818154019055604051908152a3565b608460405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152fd5b608460405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152fd5b608460405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152fd5b6001600160a01b0380911691821561122657169182156111bc5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260038252604060002085600052825280604060002055604051908152a3565b608460405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152fd5b608460405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152fd5b60058110156113ab57806112a05750565b600181036112ec57606460405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152fd5b6002810361133857606460405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152fd5b60031461134157565b608460405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152fd5b634e487b7160e01b600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116114445791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156114375781516001600160a01b03811615611431579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016301480611552575b156114ab577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c0810181811067ffffffffffffffff821117610f6c5760405251902090565b507f00000000000000000000000000000000000000000000000000000000000000004614611482565b90816020910312610ee457518015158103610ee4579056fea2646970667358221220b76d7f894bf9a744db114f0de2b2a5fffad2b212b2c2aff29ac56d37bce1231764736f6c63430008120033f652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f";

type LTapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LTapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LTap__factory extends ContractFactory {
  constructor(...args: LTapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LTap";
  }

  override deploy(
    _tapToken: PromiseOrValue<string>,
    _maxLockedUntil: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LTap> {
    return super.deploy(
      _tapToken,
      _maxLockedUntil,
      overrides || {}
    ) as Promise<LTap>;
  }
  override getDeployTransaction(
    _tapToken: PromiseOrValue<string>,
    _maxLockedUntil: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tapToken,
      _maxLockedUntil,
      overrides || {}
    );
  }
  override attach(address: string): LTap {
    return super.attach(address) as LTap;
  }
  override connect(signer: Signer): LTap__factory {
    return super.connect(signer) as LTap__factory;
  }
  static readonly contractName: "LTap";

  public readonly contractName: "LTap";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LTapInterface {
    return new utils.Interface(_abi) as LTapInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): LTap {
    return new Contract(address, _abi, signerOrProvider) as LTap;
  }
}
