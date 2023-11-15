/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AssetToGmxEthUsdcLpLeverageExecutor,
  AssetToGmxEthUsdcLpLeverageExecutorInterface,
} from "../../../markets/leverage/AssetToGmxEthUsdcLpLeverageExecutor";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YieldBox",
        name: "_yb",
        type: "address",
      },
      {
        internalType: "contract ISwapper",
        name: "_swapper",
        type: "address",
      },
      {
        internalType: "contract ICluster",
        name: "_cluster",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_usdc",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "contract IGmxExchangeRouter",
        name: "_exchangeRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gmMarket",
        type: "address",
      },
      {
        internalType: "address",
        name: "_withdrawalVault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_depositVault",
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
    inputs: [],
    name: "FEE",
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
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "buildSwapDefaultData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
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
    name: "cluster",
    outputs: [
      {
        internalType: "contract ICluster",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositVault",
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
    name: "exchangeRouter",
    outputs: [
      {
        internalType: "contract IGmxExchangeRouter",
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
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "collateralAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralAmountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getAsset",
    outputs: [
      {
        internalType: "uint256",
        name: "assetAmountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "collateralId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetAmountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "collateralAmountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "gmMarket",
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
    inputs: [],
    name: "router",
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
        internalType: "contract ICluster",
        name: "_cluster",
        type: "address",
      },
    ],
    name: "setCluster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISwapper",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapper",
    outputs: [
      {
        internalType: "contract ISwapper",
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
  {
    inputs: [],
    name: "usdc",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawalVault",
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
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract YieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61018034620002545762002a8938819003601f8101601f191683016001600160401b03811184821017620002595783928291604052833961014092839181010312620002545780516001600160a01b0392909190838316830362000254576020820151918483168093036200025457604081015185811680910362000254576200008c606083016200026f565b956200009b608084016200026f565b90620000aa60a085016200026f565b60c085015191821682036200025457620000c760e086016200026f565b9261010099620000d98b88016200026f565b95620000ea6101208099016200026f565b9960018060a01b0319918260005416916040519d3360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360805283600354161760035582600254161760025533913316171760005560a05260c0528852835260e0528252610160928352612804948562000285863960805185818161034201528181610aa4015261193c015260a051858181610477015281816105790152818161069401528181610881015281816108f5015281816111b1015281816116d6015281816117dd0152818161189301526118f1015260c0518581816106660152818161116c0152818161172d0152818161183d01526118b7015260e05185818161063801528181610f7501526114aa01525184818161010e01528181610846015281816108c801528181611615015261167a01525183818161094f0152818161121f015261178b01525182818161102e015261139f0152518181816103b001526105110152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620002545756fe6080604052600436101561001257600080fd5b6000803560e01c8063078dfbe714611c855780630fb5d60d1461124e5780631cb85818146112095780632b3297f9146111e05780633e413bee1461119b5780633fc8cef314611156578063437be622146111095780634e71e0c81461105d57806369d42148146110185780638da5cb5b14610ff15780639c82f2a414610fa4578063c48e0a7014610f5f578063c57981b514610f3d578063c990ad1c146103df578063d7cd39491461039a578063dbd01de114610371578063de4065771461032c578063e221165814610169578063e30c3978146101405763f887ea40146100f957600080fd5b3461013d578060031936011261013d576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b80fd5b503461013d578060031936011261013d576001546040516001600160a01b039091168152602090f35b503461013d57606036600319011261013d57610183611d89565b602435916001600160a01b039182841684036102c45760405193604085018581106001600160401b03821117610316576040526002855260209361060f60f31b85870152600354169060405190631fd177af60e11b825281806101f261014096879460443591600485016123ac565b0381855afa92831561030b5791849391869361022a96936102dc575b5050604051630b7ecdc960e31b815294859260048401906123e3565b610160610144830152818061024361016482018a611e42565b03915afa9081156102d0579061029c575b6102849150610276604051948592858401526040808401526060830190611e42565b03601f198101845283611efb565b610298604051928284938452830190611e42565b0390f35b508181813d83116102c9575b6102b28183611efb565b810103126102c4576102849051610254565b600080fd5b503d6102a8565b604051903d90823e3d90fd5b6102fc929350803d10610304575b6102f48183611efb565b8101906122b8565b90388061020e565b503d6102ea565b6040513d86823e3d90fd5b634e487b7160e01b600052604160045260246000fd5b503461013d578060031936011261013d576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b503461013d578060031936011261013d576002546040516001600160a01b039091168152602090f35b503461013d578060031936011261013d576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b506103e936611d9f565b600254604051633a304d8b60e21b8152600481018a9052336024820152939794929390602090829060449082906001600160a01b03165afa8015610f32578990610ef3575b6104389150611f29565b61044061266d565b820194606083870312610eef578235956020840135926001600160401b038411610eeb5761047488926104a5958701611f9b565b927f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169061244f565b938410610e9b57604051633c2f4f4360e11b8152936020856004816001600160a01b0388165afa948515610d69578795610e5b575b506104ef6001600160a01b0386161515611ff6565b6104f76120aa565b91604051637d39aaf160e01b602082015260018060a01b037f00000000000000000000000000000000000000000000000000000000000000001690816024820152670de0b6b3a764000060448201526044815261055381611ec5565b61055c856120e1565b52610566846120e1565b50604051631cdacd5960e31b60208201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031660248201526044810191909152606480820184905281526001600160401b0360a08201908111908211176103165760a081016040526105df84612104565b526105e983612104565b506040516105f681611ee0565b88815260405191826101808101106001600160401b036101808501111761031657604091610180840183523084528a60208501528a8385015260018060a01b037f000000000000000000000000000000000000000000000000000000000000000016606085015260018060a01b037f000000000000000000000000000000000000000000000000000000000000000016608085015260018060a01b037f00000000000000000000000000000000000000000000000000000000000000001660a08501528060c085015260e0840152013561010082015287610120820152670de0b6b3a7640000610140820152876101608201526107e46040518092635b4e956160e01b60208301526020602483015260018060a01b03815116604483015260018060a01b03602082015116606483015260018060a01b03604082015116608483015260018060a01b0360608201511660a483015260018060a01b0360808201511660c483015260018060a01b0360a08201511660e48301526101606107a761079060c08401516101806101048701526101c4860190612124565b60e084015185820360431901610124870152612124565b61010083015161014485015261012083015115156101648501526101408301516101848501529101516101a483015203601f198101835282611efb565b6107ed83612114565b526107f782612114565b506040516370a0823160e01b81523060048201529187906020846024816001600160a01b038b165afa938415610dd5578294610e24575b5060405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018490526020908290604490829087907f0000000000000000000000000000000000000000000000000000000000000000165af18015610bad57610de0575b5060206108f0936040518095819263095ea7b360e01b83527f00000000000000000000000000000000000000000000000000000000000000006004840161204a565b0381857f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af18015610dd557610d96575b604051631592ca1b60e31b815292508290819061094a9060048301612233565b0381347f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af18015610d6957610d74575b506040516370a0823160e01b8152306004820152906020826024816001600160a01b0389165afa8015610d69578790610d35575b6109c29250612295565b938415610ce45760405163095ea7b360e01b81526001600160a01b0384811660048301526024820188905287959190602090829060449082908a9087165af18015610c4f57610cab575b506020604051809263095ea7b360e01b8252818881610a2f8c8b6004840161204a565b03926001600160a01b03165af18015610c0757610c72575b506001600160a01b0383163b15610c6e57604051630c46aac760e31b815230600482018190526024820152604481018690528481606481836001600160a01b0389165af1908115610c07578591610c5a575b505060018060a01b037f0000000000000000000000000000000000000000000000000000000000000000169160405163095ea7b360e01b81528360048201528560248201526020816044818960018060a01b038a165af18015610c4f57610c12575b506020604051809563095ea7b360e01b8252818881610b1e8c8a6004840161204a565b03926001600160a01b03165af1938415610c07578694610bb8575b5060408051634d4d7cbd60e11b815295909486949385938492610b6392909130906004860161207b565b03925af18015610bad5760209350610b7f575b50604051908152f35b610ba09060403d604011610ba6575b610b988183611efb565b810190612065565b50610b76565b503d610b8e565b6040513d85823e3d90fd5b92919093506020833d602011610bff575b81610bd660209383611efb565b81010312610bfb57610b6394604094610bef8895611f1c565b50919293945094610b39565b8480fd5b3d9150610bc9565b6040513d87823e3d90fd5b6020813d602011610c47575b81610c2b60209383611efb565b81010312610c4357610c3c90611f1c565b5038610afb565b8580fd5b3d9150610c1e565b6040513d88823e3d90fd5b610c6390611eb2565b610c6e578338610a99565b8380fd5b6020813d602011610ca3575b81610c8b60209383611efb565b81010312610bfb57610c9c90611f1c565b5038610a47565b3d9150610c7e565b6020813d602011610cdc575b81610cc460209383611efb565b81010312610c4357610cd590611f1c565b5038610a0c565b3d9150610cb7565b60405162461bcd60e51b815260206004820152603560248201526000805160206127af8339815191526044820152741d1bdc8e881b5d5b1d1a58d85b1b0819985a5b1959605a1b6064820152608490fd5b506020823d602011610d61575b81610d4f60209383611efb565b810103126102c4576109c291516109b8565b3d9150610d42565b6040513d89823e3d90fd5b610d8f903d8089833e610d878183611efb565b810190612161565b5038610984565b6020833d602011610dcd575b81610daf60209383611efb565b81010312610dc957610dc361094a93611f1c565b5061092a565b5080fd5b3d9150610da2565b6040513d84823e3d90fd5b6020813d602011610e1c575b81610df960209383611efb565b81010312610e18576108f093610e10602092611f1c565b5093506108ae565b8280fd5b3d9150610dec565b915092506020813d602011610e53575b81610e4160209383611efb565b810103126102c457879051923861082e565b3d9150610e34565b9094506020813d602011610e93575b81610e7760209383611efb565b81010312610e8f57610e8890611fe2565b93386104da565b8680fd5b3d9150610e6a565b60405162461bcd60e51b815260206004820152603460248201526000805160206127af833981519152604482015273746f723a206e6f7420656e6f756768205553444360601b6064820152608490fd5b8980fd5b8780fd5b506020813d602011610f2a575b81610f0d60209383611efb565b81010312610f2657610f2161043891611f1c565b61042e565b8880fd5b3d9150610f00565b6040513d8b823e3d90fd5b503461013d578060031936011261013d5760206040516602a84d524ac0008152f35b503461013d578060031936011261013d576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b503461013d57602036600319011261013d576004356001600160a01b0381811691829003610e1857610fda908354163314611e67565b600380546001600160a01b03191691909117905580f35b503461013d578060031936011261013d57546040516001600160a01b039091168152602090f35b503461013d578060031936011261013d576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b503461013d578060031936011261013d576001546001600160a01b0390818116338190036110c5578084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b503461013d57602036600319011261013d576004356001600160a01b0381811691829003610e185761113f908354163314611e67565b600280546001600160a01b03191691909117905580f35b503461013d578060031936011261013d576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b503461013d578060031936011261013d576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b503461013d578060031936011261013d576003546040516001600160a01b039091168152602090f35b503461013d578060031936011261013d576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b503461013d5761125d36611d9f565b91939495926044602060018060a01b036002541660405192838092633a304d8b60e21b82528d60048301523360248301525afa8015610f32578990611c4a575b6112a79150611f29565b6112af61266d565b60c0828481010312610eef5760208201356001600160401b038111610f26576112dd90848401908401611f9b565b926001600160401b0360a084013511610f265761130290830160a08401358401611f9b565b604051633c2f4f4360e11b815290976020826004816001600160a01b0385165afa918215611abc578a92611c0e575b506113466001600160a01b0383161515611ff6565b6001600160a01b0381163b15610eeb578960405180926339f4769360e01b825281838161137789306004840161204a565b03926001600160a01b03165af18015611abc57611bfb575b506113986120aa565b91806114477f0000000000000000000000000000000000000000000000000000000000000000604051637d39aaf160e01b602082015260018060a01b03821660248201526602a84d524ac0006044820152604481526113f681611ec5565b6113ff876120e1565b52611409866120e1565b50604051631cdacd5960e31b60208201526001600160a01b038681166024830152919091166044820152606480820193909352918252608482611efb565b61145084612104565b5261145a83612104565b506040519161146883611ee0565b8a8352604051806101608101106001600160401b0361016083011117610316578b93610160820160405230825284602083015284604083015260018060a01b037f000000000000000000000000000000000000000000000000000000000000000016606083015280608083015260a0820152604086013560c0820152606086013560e082015260016101008201526602a84d524ac000610120820152836101408201526115ea604051809263ad23c5a160e01b60208301526020602483015260018060a01b03815116604483015260018060a01b03602082015116606483015260018060a01b03604082015116608483015260018060a01b0360608201511660a48301526101406115a361158d608084015161016060c48701526101a4860190612124565b60a08401518582036043190160e4870152612124565b60c083015161010485015260e0830151610124850152610100830151151561014485015261012083015161016485015291015161018483015203601f198101835282611efb565b6115f385612114565b526115fd84612114565b5060405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820185905260209082906044908290889087165af1801561030b57611bb9575b506116a29060209260405194858094819363095ea7b360e01b83527f00000000000000000000000000000000000000000000000000000000000000006004840161204a565b03926001600160a01b03165af18015610f3257611b80575b506040516370a0823160e01b81523060048201526020816024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa908115610f32578991611b4e575b506040516370a0823160e01b81523060048201529189906020846024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa938415610dd5578294611b15575b50604051631592ca1b60e31b81529190829081906117869060048301612233565b0381837f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af18015611abc57611afb575b506040516370a0823160e01b8152306004820152906020826024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015611abc578a90611ac7575b61181e9250612295565b6040516370a0823160e01b8152306004820152909790916020836024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa928315611abc578a93611a86575b50916118896118dc93608086013592612295565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116907f00000000000000000000000000000000000000000000000000000000000000001661244f565b8601809611611a7257359461191e91908690867f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661244f565b938410611a215760405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301819052602483018890528795909116939092909160208160448189895af18015610c4f576119e8575b506020604051809563095ea7b360e01b82528188816119ad8c8a6004840161204a565b03925af1938415610c07578694610bb8575060408051634d4d7cbd60e11b815295909486949385938492610b6392909130906004860161207b565b6020813d602011611a19575b81611a0160209383611efb565b81010312610c4357611a1290611f1c565b503861198a565b3d91506119f4565b60405162461bcd60e51b815260206004820152603560248201526000805160206127af8339815191526044820152741d1bdc8e881b9bdd08195b9bdd59da08105cdcd95d605a1b6064820152608490fd5b634e487b7160e01b87526011600452602487fd5b92506020833d602011611ab4575b81611aa160209383611efb565b810103126102c457915191611889611875565b3d9150611a94565b6040513d8c823e3d90fd5b506020823d602011611af3575b81611ae160209383611efb565b810103126102c45761181e9151611814565b3d9150611ad4565b611b0e903d808c833e610d878183611efb565b50386117c0565b915092506020813d602011611b46575b81611b3260209383611efb565b810103126102c45751918990611786611765565b3d9150611b25565b90506020813d602011611b78575b81611b6960209383611efb565b810103126102c457513861170e565b3d9150611b5c565b6020813d602011611bb1575b81611b9960209383611efb565b81010312610f2657611baa90611f1c565b50386116ba565b3d9150611b8c565b906020823d602011611bf3575b81611bd360209383611efb565b81010312610c6e57602092611bea6116a293611f1c565b5092509061165d565b3d9150611bc6565b611c0790999199611eb2565b973861138f565b9091506020813d602011611c42575b81611c2a60209383611efb565b81010312610eeb57611c3b90611fe2565b9038611331565b3d9150611c1d565b506020813d602011611c7d575b81611c6460209383611efb565b81010312610f2657611c786112a791611f1c565b61129d565b3d9150611c57565b503461013d57606036600319011261013d57611c9f611d89565b6024358015158103610e1857604435908115158203610c6e5760018060a01b03928391611cd0838754163314611e67565b15611d72571690811590811591611d6a575b5015611d2d578083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b031991821617825560018054909116905580f35b60405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152606490fd5b905038611ce2565b9150501660018060a01b0319600154161760015580f35b600435906001600160a01b03821682036102c457565b9060c06003198301126102c457600435916001600160a01b0360243581811681036102c4579260443582811681036102c457926064359260843590811681036102c4579160a4356001600160401b03928382116102c457806023830112156102c45781600401359384116102c457602484830101116102c4576024019190565b60005b838110611e325750506000910152565b8181015183820152602001611e22565b90602091611e5b81518092818552858086019101611e1f565b601f01601f1916010190565b15611e6e57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6001600160401b03811161031657604052565b608081019081106001600160401b0382111761031657604052565b602081019081106001600160401b0382111761031657604052565b90601f801991011681019081106001600160401b0382111761031657604052565b519081151582036102c457565b15611f3057565b60405162461bcd60e51b815260206004820152602260248201527f4c657665726167654578656375746f723a2073656e646572206e6f742076616c6044820152611a5960f21b6064820152608490fd5b6001600160401b03811161031657601f01601f191660200190565b81601f820112156102c457803590611fb282611f80565b92611fc06040519485611efb565b828452602083830101116102c457816000926020809301838601378301015290565b51906001600160a01b03821682036102c457565b15611ffd57565b60405162461bcd60e51b815260206004820152603160248201526000805160206127af8339815191526044820152701d1bdc8e881314081b9bdd081d985b1a59607a1b6064820152608490fd5b6001600160a01b039091168152602081019190915260400190565b91908260409103126102c4576020825192015190565b9081526001600160a01b0391821660208201529116604082015260608101919091526000608082015260a00190565b604051906120b782611ec5565b60038252819060005b6060808210156120da5790602091828287010152016120c0565b5050909150565b8051156120ee5760200190565b634e487b7160e01b600052603260045260246000fd5b8051600110156120ee5760400190565b8051600210156120ee5760600190565b90815180825260208080930193019160005b828110612144575050505090565b83516001600160a01b031685529381019392810192600101612136565b60209081818403126102c45780516001600160401b03918282116102c457019083601f830112156102c457815193818511610316578460051b906040928351966121ad87850189611efb565b87528580880193860101948286116102c457868101935b8685106121d657505050505050505090565b84518381116102c45782019084603f830112156102c45788820151906121fb82611f80565b61220789519182611efb565b828152868984860101116102c4576122288b949385948b8685019101611e1f565b8152019401936121c4565b602080820190808352835180925260408301928160408460051b8301019501936000915b8483106122675750505050505090565b9091929394958480612285600193603f198682030187528a51611e42565b9801930193019194939290612257565b919082039182116122a257565b634e487b7160e01b600052601160045260246000fd5b80910361014081126102c45760408051926001600160401b0392606085018481118682101761031657808452608082126102c4576122f581611ec5565b6122fe83611fe2565b815260208301516080870152612315848401611fe2565b60a0870152606083015160c087015285526080607f198201126102c4578290815161233f81611ec5565b6080840151815260a0840151602082015260c08401518382015260e08401516060820152602087015260ff1901126102c45781519283830190811184821017610316576123a1916101209184526123996101008201611f1c565b855201611f1c565b602083015282015290565b6001600160a01b0391821681529116602082015260408101919091526000606082018190526080820181905260a082015260c00190565b60206040610120926060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b918095949293919360018060a01b0390816003541690604096875190631fd177af60e11b8252818061248a61014098899487600485016123ac565b0381865afa9485156126625760009561263f575b505082169788612539575b50508495965060006124dd9160039695965416926124fe86519788968795869463efa84c6d60e01b865260048601906123e3565b610144840152306101648401526101a06101848401526101a4830190611e42565b03925af191821561252f5760009261251557505090565b61252b9250803d10610ba657610b988183611efb565b5090565b513d6000823e3d90fd5b86519863095ea7b360e01b92838b5260048b0152600060248b01526020998a816044816000865af1801561263457908b9392916125fb575b506125929360008660035416918b519687958694859384526004840161204a565b03925af19788156125f0578697989695966125b3575b8897509594956124a9565b90809550813d83116125e9575b6125ca8183611efb565b810103126102c45760006124dd916125e28896611f1c565b50916125a8565b503d6125c0565b86513d6000823e3d90fd5b9283813d831161262d575b6126108183611efb565b810103126102c457612592936126268c94611f1c565b5093612571565b503d612606565b89513d6000823e3d90fd5b84929550908161265a92903d10610304576102f48183611efb565b93903861249e565b88513d6000823e3d90fd5b6003546001600160a01b0390811690811561275d576020906002541691604460405180948193633a304d8b60e21b83526000600484015260248301525afa90811561275157600091612718575b50156126c257565b60405162461bcd60e51b815260206004820152602860248201527f4c657665726167654578656375746f723a2073776170706572206e6f742061756044820152671d1a1bdc9a5e995960c21b6064820152608490fd5b906020823d8211612749575b8161273160209383611efb565b8101031261013d575061274390611f1c565b386126ba565b3d9150612724565b6040513d6000823e3d90fd5b60405162461bcd60e51b815260206004820152602360248201527f4c657665726167654578656375746f723a2073776170706572206e6f742076616044820152621b1a5960ea1b6064820152608490fdfe4173736574546f476d78457468557364634c704c657665726167654578656375a2646970667358221220357821dcbe3dfca0525ac0264a288197c7804e7d4d2d2283482facd4629ea34c64736f6c63430008120033";

type AssetToGmxEthUsdcLpLeverageExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetToGmxEthUsdcLpLeverageExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetToGmxEthUsdcLpLeverageExecutor__factory extends ContractFactory {
  constructor(...args: AssetToGmxEthUsdcLpLeverageExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetToGmxEthUsdcLpLeverageExecutor";
  }

  override deploy(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _usdc: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _router: PromiseOrValue<string>,
    _exchangeRouter: PromiseOrValue<string>,
    _gmMarket: PromiseOrValue<string>,
    _withdrawalVault: PromiseOrValue<string>,
    _depositVault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetToGmxEthUsdcLpLeverageExecutor> {
    return super.deploy(
      _yb,
      _swapper,
      _cluster,
      _usdc,
      _weth,
      _router,
      _exchangeRouter,
      _gmMarket,
      _withdrawalVault,
      _depositVault,
      overrides || {}
    ) as Promise<AssetToGmxEthUsdcLpLeverageExecutor>;
  }
  override getDeployTransaction(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _usdc: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _router: PromiseOrValue<string>,
    _exchangeRouter: PromiseOrValue<string>,
    _gmMarket: PromiseOrValue<string>,
    _withdrawalVault: PromiseOrValue<string>,
    _depositVault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yb,
      _swapper,
      _cluster,
      _usdc,
      _weth,
      _router,
      _exchangeRouter,
      _gmMarket,
      _withdrawalVault,
      _depositVault,
      overrides || {}
    );
  }
  override attach(address: string): AssetToGmxEthUsdcLpLeverageExecutor {
    return super.attach(address) as AssetToGmxEthUsdcLpLeverageExecutor;
  }
  override connect(
    signer: Signer
  ): AssetToGmxEthUsdcLpLeverageExecutor__factory {
    return super.connect(
      signer
    ) as AssetToGmxEthUsdcLpLeverageExecutor__factory;
  }
  static readonly contractName: "AssetToGmxEthUsdcLpLeverageExecutor";

  public readonly contractName: "AssetToGmxEthUsdcLpLeverageExecutor";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetToGmxEthUsdcLpLeverageExecutorInterface {
    return new utils.Interface(
      _abi
    ) as AssetToGmxEthUsdcLpLeverageExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetToGmxEthUsdcLpLeverageExecutor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetToGmxEthUsdcLpLeverageExecutor;
  }
}
