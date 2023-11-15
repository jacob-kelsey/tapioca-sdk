/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UniswapV2Swapper,
  UniswapV2SwapperInterface,
} from "../../../contracts/Swapper/UniswapV2Swapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressNotValid",
    type: "error",
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
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawFromYb",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "depositToYb",
        type: "bool",
      },
    ],
    name: "buildSwapData",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenOutId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawFromYb",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "depositToYb",
        type: "bool",
      },
    ],
    name: "buildSwapData",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IUniswapV2Factory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDefaultDexOptions",
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
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getInputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getOutputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
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
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60e0346200015457601f62001af938819003918201601f19168301916001600160401b03831184841017620001595780849260609460405283398101031262000154576200004d816200016f565b60406200005d602084016200016f565b920151916001600160a01b038084169290838503620001545780620000e1926000543360018060a01b0319821617600055823391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3600180551692620000ca84151562000184565b1692620000d984151562000184565b151562000184565b60805260a05260c0526040516119279081620001d2823960805181818161027f015281816107c9015281816108dc0152610afb015260a05181610898015260c05181818161024a015281816104d50152818161057b0152818161061c01528181610753015281816108540152610aa20152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200015457565b156200018c57565b60405162461bcd60e51b815260206004820152601a60248201527f537761707065723a2061646472657373206e6f742076616c69640000000000006044820152606490fdfe6040608081526004908136101561001557600080fd5b600091823560e01c80631a16321014610bf15780633fa2ef5e14610b5d5780635bf66e4814610a8a578063715018a614610a3f5780637b2a8bd2146109335780638da5cb5b1461090b578063c31c9c07146108c7578063c45a015514610883578063de4065771461083f578063e3c711a01461073b578063efa84c6d146101585763f2fde38b146100a557600080fd5b34610154576020366003190112610154576100be610c5e565b906100c7610d77565b6001600160a01b0391821692831561010257505082546001600160a01b0319811683178455166000805160206118d28339815191528380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b50829036600319016101a0811261015457610140136107375761016435916001600160a01b03908184168085036107375761018435936001600160401b03851161015457366023860112156101545784810135936101b585610d5c565b956101c289519788610d39565b8587526024953687828401011161073357869392918187926020998a9301838c0137890101526002600154146106f25760026001558690859783358281168082036105ff57158015906106dd575b15610603579060443583811681036105ff5761022d905b836112a8565b9a6084358981158015816105f4575b15610488575050945b6102777f00000000000000000000000000000000000000000000000000000000000000009660a435908a35878a611509565b926102a684877f00000000000000000000000000000000000000000000000000000000000000001680976113c3565b511561047a575b8a8180518101031261047657928992838f8f96908b958f8a908d940151916102d36112f8565b1561046c575061030d30935b519a8b998a9889976338ed173960e01b8952880152610144359087015260a0604487015260a4860190610f27565b92166064840152608483015203925af19081156104625790610336918891610440575b50610f64565b51986103406112f8565b610357575b8a8a8a8a600180558351928352820152f35b8091929394959697985051600019810190811161042e57815181101561041c57926103978a848d9897958c8c9660a49960051b01015116931680936113c3565b85519687958694634d4d7cbd60e11b865260643590860152309085015260448401528960648401528160848401525af191821561041157916103e2575b509084808080808080610345565b6104029150843d861161040a575b6103fa8183610d39565b810190611308565b9050846103d4565b503d6103f0565b8551903d90823e3d90fd5b634e487b7160e01b8852603285528588fd5b634e487b7160e01b8852601185528588fd5b61045c91503d808a833e6104548183610d39565b810190610eac565b8c610330565b8b513d89823e3d90fd5b61030d90936102df565b8980fd5b50610483610e71565b6102ad565b9096918935918261054a575b5050508d60643590816104a9575b5050610245565b60c43561054357519063442c159960e01b82528882015260e435898201528a60448201528b81606481897f0000000000000000000000000000000000000000000000000000000000000000165afa801561053857908c9161050f575b50505b8e8e6104a2565b813d8311610531575b6105228183610d39565b81010312610476578a8f610505565b503d610518565b508e513d8c823e3d90fd5b5050610508565b9297509091156105ed57508d519063442c159960e01b82528782015260a435888201528960448201528a81606481887f0000000000000000000000000000000000000000000000000000000000000000165afa9081156105e3578a916105b6575b505b948e8080610494565b90508a81813d83116105dc575b6105cd8183610d39565b8101031261047657518e6105ab565b503d6105c3565b8e513d8c823e3d90fd5b90506105ad565b5060c435151561023c565b8880fd5b508a51630cf35bdd60e41b8082528635868301526080917f00000000000000000000000000000000000000000000000000000000000000008516919083818a81865afa90811561053857918f9594939284928b918e916106bc575b5096518094819382526064358c8301525afa9182156105e3579061022d92918b9261068b575b5050610227565b6106aa9250803d106106b5575b6106a28183610d39565b810190610fbf565b505090508e80610684565b503d610698565b6106d39150843d86116106b5576106a28183610d39565b505090503861065e565b506044358381168091036105ff571515610210565b50601f606492868a519362461bcd60e51b85528401528201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152fd5b8580fd5b5080fd5b5034610154578261074b36610c97565b50509161079a7f000000000000000000000000000000000000000000000000000000000000000061078561077f8287610ff8565b906112a8565b946060810135906080602082013591016110f8565b85516307c0329d60e21b815292830152506024810184905291829081906107c5906044830190610f27565b03817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156108335790610810918460209592610818575b5050610f8a565b519051908152f35b61082c92503d8091833e6104548183610d39565b3880610809565b505051903d90823e3d90fd5b505034610737578160031936011261073757517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b505034610737578160031936011261073757517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b505034610737578160031936011261073757517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b505034610737578160031936011261073757905490516001600160a01b039091168152602090f35b509190346107375760c036600319011261073757610a3b92610953610c79565b9061095c610c88565b93610965610e2d565b5061096e610e2d565b94610977610dcf565b926044358452606435602085015261098d610dcf565b928084528684015235602083015260243560608301526109ab610e04565b93151584521515602084015284526020840152818301525191829182919091610120602060406101408401956060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b0390f35b8334610a875780600319360112610a8757610a58610d77565b80546001600160a01b03198116825581906001600160a01b03166000805160206118d28339815191528280a380f35b80fd5b50346101545782610a9a36610c97565b505091610ace7f000000000000000000000000000000000000000000000000000000000000000061078561077f8287610ff8565b5090610af78551948593849363d06ca61f60e01b85528401528660248401526044830190610f27565b03817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156108335790610810918460209592610b42575b5050610f64565b610b5692503d8091833e6104548183610d39565b3880610b3b565b828434610a875760c0366003190112610a8757610b78610c5e565b916024356001600160a01b03818116939184900361073757610a3b94610b9c610c79565b92610ba5610c88565b90610bae610e2d565b50610bb7610e2d565b96610bc0610dcf565b9460443586526064356020870152610bd6610dcf565b941684528684015280602084015260608301526109ab610e04565b505034610737578160031936011261073757610a3b90610c0f610e71565b90519182916020835260208301905b919082519283825260005b848110610c4a575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610c29565b600435906001600160a01b0382168203610c7457565b600080fd5b608435908115158203610c7457565b60a435908115158203610c7457565b60031981016101608112610c745761014013610c74576004916001600160401b03916101443590838211610c745780602383011215610c745781850135938411610c745760248483010111610c74576024019190565b604081019081106001600160401b03821117610d0857604052565b634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b03821117610d0857604052565b601f909101601f19168101906001600160401b03821190821017610d0857604052565b6001600160401b038111610d0857601f01601f191660200190565b6000546001600160a01b03163303610d8b57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b60405190608082016001600160401b03811183821017610d085760405260006060838281528260208201528260408201520152565b60408051919082016001600160401b03811183821017610d085760405260006020838281520152565b60405190606082016001600160401b03811183821017610d085760405281610e53610dcf565b8152610e5d610dcf565b60208201526040610e6c610e04565b910152565b610e104201804211610e965760405190602082015260208152610e9381610ced565b90565b634e487b7160e01b600052601160045260246000fd5b906020908183820312610c745782516001600160401b0393848211610c74570181601f82011215610c74578051938411610d08578360051b9060405194610ef585840187610d39565b85528380860192820101928311610c74578301905b828210610f18575050505090565b81518152908301908301610f0a565b90815180825260208080930193019160005b828110610f47575050505090565b83516001600160a01b031685529381019392810192600101610f39565b805160011015610f745760400190565b634e487b7160e01b600052603260045260246000fd5b805115610f745760200190565b356001600160a01b0381168103610c745790565b51906001600160a01b0382168203610c7457565b9190826080910312610c745781516005811015610c745791610fe360208201610fab565b916060610ff260408401610fab565b92015190565b91906001600160a01b03908161100d85610f97565b16158015906110e2575b15611033575050610e93604061102c84610f97565b9301610f97565b1691604051630cf35bdd60e41b90818152602083013560048201526080928382602481895afa9182156110b55760609385936024926000916110c1575b509760405195869485938452013560048301525afa9182156110b55760009261109857505090565b6110ae9250803d106106b5576106a28183610d39565b5050905090565b6040513d6000823e3d90fd5b6110d89150853d87116106b5576106a28183610d39565b5050905038611070565b50816110f060408601610f97565b161515611017565b93928435926000928392839291861580158161129b575b15611124575050505050505060409092013590565b819293949699959897916111f9575b50505081611142575b50505050565b909192939450604083013580156000146111ef575060405163442c159960e01b8152600481019290925260609092013560248201526044810183905290602090829060649082906001600160a01b03165afa9182156111e35780926111af575b50505b903880808061113c565b9091506020823d82116111db575b816111ca60209383610d39565b81010312610a8757505138806111a2565b3d91506111bd565b604051903d90823e3d90fd5b93505050506111a5565b929850909115611294575060405163442c159960e01b81526004810191909152602083810135602483015260448201859052816064816001600160a01b038b165afa908115611289578491611254575b505b95388080611133565b90506020813d8211611281575b8161126e60209383610d39565b8101031261127d575138611249565b8380fd5b3d9150611261565b6040513d86823e3d90fd5b905061124b565b5060408a0135151561110f565b604051929190606084016001600160401b03811185821017610d08576040526002845260403660208601376112f2846112e081610f8a565b6001600160a01b039384169052610f64565b91169052565b610124358015158103610c745790565b9190826040910312610c74576020825192015190565b3d15611349573d9061132f82610d5c565b9161133d6040519384610d39565b82523d6000602084013e565b606090565b90816020910312610c7457518015158103610c745790565b1561136d57565b60405162461bcd60e51b815260206004820152602860248201527f42617365537761707065723a3a73616665417070726f76653a20617070726f76604482015267194819985a5b195960c21b6064820152608490fd5b803b156114cd576114699261142e91604051936020948581019363095ea7b360e01b9283865260018060a01b0316908160248401526000968780809886826044819901526044815261141481610d1e565b5190828a5af161142261131e565b8161149d575b50611366565b60405191888301948552602483015260448201526044815261144f81610d1e565b51925af19061145c61131e565b8261146b575b5050611366565b565b8091925051918215928315611485575b5050503880611462565b611495935082018101910161134e565b38808061147b565b8051801592508b9083156114b5575b50505038611428565b6114c5935082018101910161134e565b388a816114ac565b60405162461bcd60e51b815260206004820152601460248201527314ddd85c1c195c8e881b9bc818dbdb9d1c9858dd60621b6044820152606490fd5b9391909293610104358015158103610c74576117c35750505081156117875760018060a01b031690604080516370a0823160e01b8082526004923084840152602091602495838588818b5afa94851561177c5760009561174d575b5082516323b872dd60e01b858201908152338983015230604483015260648083019390935291815260a0810191906001600160401b0383118184101761173957916000808b6115f994828a9897868b526115bd87610ced565b8987527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460c082015251925af16115f261131e565b908b611834565b8051806116c5575b505086835180998193825230898301525afa9586156116ba5760009661168b575b508286111561164e575050830392831161163b57505090565b601190634e487b7160e01b600052526000fd5b5162461bcd60e51b8152808401919091526018818501527714ddd85c1c195c8e881d1c985b9cd9995c8819985a5b195960421b6044820152606490fd5b90958282813d83116116b3575b6116a28183610d39565b81010312610a875750519438611622565b503d611698565b50513d6000823e3d90fd5b92806116d69394830101910161134e565b156116e45782903880611601565b815162461bcd60e51b8152808601849052602a818801527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608490fd5b88604189634e487b7160e01b600052526000fd5b90948482813d8311611775575b6117648183610d39565b81010312610a875750519338611564565b503d61175a565b83513d6000823e3d90fd5b60405162461bcd60e51b81526020600482015260146024820152730537761707065723a20616d6f756e7420697320360641b6044820152606490fd5b6040935090600060a492859694965196879586946311a5cc7760e31b865260048601523060248601523060448601526064850152608484015260018060a01b03165af19081156110b557600091611818575090565b611830915060403d811161040a576103fa8183610d39565b5090565b919290156118965750815115611848575090565b3b156118515790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156118a95750805190602001fd5b60405162461bcd60e51b8152602060048201529081906118cd906024830190610c1e565b0390fdfe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220fc1c87c536210cc8676d96b56588969185bbbfd77f6b30a4415ffec639b380aa64736f6c63430008120033";

type UniswapV2SwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV2SwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV2Swapper__factory extends ContractFactory {
  constructor(...args: UniswapV2SwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UniswapV2Swapper";
  }

  override deploy(
    _router: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniswapV2Swapper> {
    return super.deploy(
      _router,
      _factory,
      _yieldBox,
      overrides || {}
    ) as Promise<UniswapV2Swapper>;
  }
  override getDeployTransaction(
    _router: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _router,
      _factory,
      _yieldBox,
      overrides || {}
    );
  }
  override attach(address: string): UniswapV2Swapper {
    return super.attach(address) as UniswapV2Swapper;
  }
  override connect(signer: Signer): UniswapV2Swapper__factory {
    return super.connect(signer) as UniswapV2Swapper__factory;
  }
  static readonly contractName: "UniswapV2Swapper";

  public readonly contractName: "UniswapV2Swapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2SwapperInterface {
    return new utils.Interface(_abi) as UniswapV2SwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Swapper {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Swapper;
  }
}
