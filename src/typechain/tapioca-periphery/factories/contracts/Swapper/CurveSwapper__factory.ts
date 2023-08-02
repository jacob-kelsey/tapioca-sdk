/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CurveSwapper,
  CurveSwapperInterface,
} from "../../../contracts/Swapper/CurveSwapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICurvePool",
        name: "_curvePool",
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
    name: "curvePool",
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
    name: "getDefaultDexOptions",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
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
        name: "",
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
        name: "dexOptions",
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
] as const;

const _bytecode =
  "0x60a0346200010957601f62001a4d38819003918201601f19168301916001600160401b038311848410176200010e578084926040948552833981010312620001095780516001600160a01b039182821691829003620001095760200151918083168084036200010957620000c29060005460018060a01b03199333858316176000553391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a360018055620000ba84151562000124565b151562000124565b60025416176002556080526040516118db90816200017282396080518181816103090152818161050d015281816108920152818161094e01528181610ab80152610d070152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b156200012c57565b60405162461bcd60e51b815260206004820152601a60248201527f537761707065723a2061646472657373206e6f742076616c69640000000000006044820152606490fdfe608080604052600436101561001357600080fd5b600090813560e01c9081631a1632101461102757508063218751b214610ffe5780633fa2ef5e14610f6a5780635bf66e4814610c76578063715018a614610c1c5780637b2a8bd214610b0e5780638da5cb5b14610ae7578063de40657714610aa2578063e3c711a014610a72578063efa84c6d1461015f5763f2fde38b1461009a57600080fd5b3461015c57602036600319011261015c576100b361104f565b6100bb61112a565b6001600160a01b03908116908115610108576000548260018060a01b0319821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b80fd5b503461015c5736600319016101a08112610a6e576101401361015c57610164356001600160a01b038116900361015c57610184356001600160401b038111610a6e5736602382011215610a6e578060040135826101bb8261110f565b926101c960405194856110d8565b82845260208401923660248284010111610a6a5780602460209301853784010152600260015414610a255760026001558291805181019160208281850194031261074a5751906001600160401b03821161074a57019080603f830112156107185760208201516102388161125c565b9261024660405194856110d8565b8184526040602085019260051b8201019283116108f757604001905b828210610a155750506002546001600160a01b031691905061028381611273565b516040519063c661065760e01b82526004820152602081602481865afa9081156106d25785916109f6575b5060206102ba83611296565b5160246040518096819363c661065760e01b835260048301525afa9283156106d25785936109d5575b50849060843580158015816109ca575b1561083e575061032d92505b60a43591602435907f0000000000000000000000000000000000000000000000000000000000000000611659565b9061034161033a82611273565b5191611296565b5160025460405163c661065760e01b81526001600160801b038416600482015293916001600160a01b0390911690602085602481855afa948515610833578895610812575b5060405163c661065760e01b81526001600160801b038216600482015293602085602481865afa9485156108075789956107d6575b50604051635e0d443f60e01b8152602081806103e28887600f0b87600f0b600485016112a6565b0381875afa9081156107cb578a91610795575b506101443511610756576040516370a0823160e01b8152306004820152958993906020886024816001600160a01b038b165afa9788156106d257859861071c575b50610442918691611519565b6002546001600160a01b031690813b1561071857836084926040519687958694630f7c084960e21b8652600f0b6004860152600f0b602485015260448401526101443560648401525af1801561070d576106dd575b506040516370a0823160e01b81523060048201529190602090839060249082906001600160a01b03165afa9182156106d257859261069e575b508082111561066b576104e291611636565b9182156106275761012435801515810361062257156105d35750604083916105348460018060a01b037f0000000000000000000000000000000000000000000000000000000000000000168093611519565b8151634d4d7cbd60e11b8152606480356004830152306024830152610164356001600160a01b0316604483015281018590526084810184905292839160a49183915af19081156105c85760409391610599575b505b6001805582519182526020820152f35b6105b99150833d85116105c1575b6105b181836110d8565b8101906112e1565b905038610587565b503d6105a7565b6040513d85823e3d90fd5b906040935061061d9084519063a9059cbb60e01b602083015261060f826106018761016435602484016112f7565b03601f1981018452836110d8565b6001600160a01b031661132a565b610589565b600080fd5b60405162461bcd60e51b815260206004820152601c60248201527b04375727665537761707065723a20616d6f756e744f757420697320360241b6044820152606490fd5b60405162461bcd60e51b815260206004820152600b60248201526a1cddd85c0819985a5b195960aa1b6044820152606490fd5b9091506020813d6020116106ca575b816106ba602093836110d8565b81010312610622575190386104d0565b3d91506106ad565b6040513d87823e3d90fd5b6001600160401b0381969296116106f957604052936020610497565b634e487b7160e01b82526041600452602482fd5b6040513d88823e3d90fd5b8380fd5b9097506020813d60201161074e575b81610738602093836110d8565b8101031261074a575196610442610436565b8480fd5b3d915061072b565b60405162461bcd60e51b81526020600482015260176024820152761a5b9cdd59999a58da595b9d0b585b5bdd5b9d0b5bdd5d604a1b6044820152606490fd5b90506020813d6020116107c3575b816107b0602093836110d8565b810103126107bf5751386103f5565b8980fd5b3d91506107a3565b6040513d8c823e3d90fd5b6107f991955060203d602011610800575b6107f181836110d8565b8101906112c2565b93386103bb565b503d6107e7565b6040513d8b823e3d90fd5b61082c91955060203d602011610800576107f181836110d8565b9338610386565b6040513d8a823e3d90fd5b906024359182610917575b5050506064358061085f575b5061032d916102ff565b60c43561090d5760405163442c159960e01b8152600481019190915260e4356024820152604481018790526020816064817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610902576108d3575b5061032d915b91610855565b602090813d83116108fb575b6108e981836110d8565b810103126108f757386108c7565b8580fd5b503d6108df565b6040513d89823e3d90fd5b5061032d916108cd565b9293509091156109c3575060405163442c159960e01b8152600481019190915260a4356024820152604481018690526020816064817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561070d578691610991575b505b90388080610849565b90506020813d6020116109bb575b816109ac602093836110d8565b810103126108f7575138610986565b3d915061099f565b9050610988565b5060c43515156102f3565b6109ef91935060203d602011610800576107f181836110d8565b91386102e3565b610a0f915060203d602011610800576107f181836110d8565b386102ae565b8151815260209182019101610262565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b8280fd5b5080fd5b503461015c57610a8136611083565b505060405162461bcd60e51b8152905080610a9e60048201611224565b0390fd5b503461015c578060031936011261015c576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b503461015c578060031936011261015c57546040516001600160a01b039091168152602090f35b503461015c5760c036600319011261015c57610c1890610b2c611065565b610b34611074565b610b3c6111e0565b50610b456111e0565b92610b4e611182565b9160443583526064356020840152610b64611182565b91808352604083015260043560208301526024356060830152610b856111b7565b93151584521515602084015283526020830152604082015260405191829182919091610120602060406101408401956060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b0390f35b503461015c578060031936011261015c57610c3561112a565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b503461015c57610c8536611083565b81939291016020938481830312610718578035906001600160401b03821161074a57019080601f83011215610718578135610cbf8161125c565b92610ccd60405194856110d8565b818452868085019260051b8201019283116108f7579086808095949301915b838310610f5a575060608601359560808101359350879250907f0000000000000000000000000000000000000000000000000000000000000000908201358415801581610f4d575b15610ddb575050505050610d839350905b6002546001600160a01b031690610d5e61033a82611273565b5160405195869485938493635e0d443f60e01b8552600f0b90600f0b600485016112a6565b03915afa918215610dcf578092610d9f575b5050604051908152f35b9091508282813d8311610dc8575b610db781836110d8565b8101031261015c5750513880610d95565b503d610dad565b604051903d90823e3d90fd5b81929394969591610ea5575b50505085610dfc575b5050610d839350610d45565b9293919260c0820135610e975760405163442c159960e01b8152600481019690965260e09190910135602486015260448501869052849060649082906001600160a01b03165afa8015610e8c5790859291610e5f575b610d8393505b3880610df0565b919092813d8311610e85575b610e7581836110d8565b81010312610a6a57818491610e52565b503d610e6b565b6040513d86823e3d90fd5b50509190610d839350610e58565b929694955092939092909115610f4257505060405163442c159960e01b8152600481019190915260a082013560248201526044810186905286816064816001600160a01b0388165afa90811561070d579087949392918791610f0d575b505b92388080610de7565b85819394959692503d8311610f3b575b610f2781836110d8565b810103126108f75790869392915138610f02565b503d610f1d565b909493929150610f04565b5060c08401351515610d34565b8235815291810191859101610cec565b503461015c5760c036600319011261015c57610f8461104f565b906024356001600160a01b038181169291839003610a6e57610c1893610fa8611065565b92610fb1611074565b90610fba6111e0565b50610fc36111e0565b95610fcc611182565b9460443586526064356020870152610fe2611182565b9416845260408401528060208401526060830152610b856111b7565b503461015c578060031936011261015c576002546040516001600160a01b039091168152602090f35b823461015c578060031936011261015c575062461bcd60e51b815280610a9e60048201611224565b600435906001600160a01b038216820361062257565b60843590811515820361062257565b60a43590811515820361062257565b60031981016101608112610622576101401361062257600491610144356001600160401b0392838211610622578060238301121561062257818501359384116106225760248483010111610622576024019190565b90601f801991011681019081106001600160401b038211176110f957604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b0381116110f957601f01601f191660200190565b6000546001600160a01b0316330361113e57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b60405190608082018281106001600160401b038211176110f95760405260006060838281528260208201528260408201520152565b60405190604082018281106001600160401b038211176110f95760405260006020838281520152565b60405190606082018281106001600160401b038211176110f95760405281611206611182565b8152611210611182565b6020820152604061121f6111b7565b910152565b60609060208152601d60208201527f4375727665537761707065723a206e6f7420696d706c656d656e74656400000060408201520190565b6001600160401b0381116110f95760051b60200190565b8051156112805760200190565b634e487b7160e01b600052603260045260246000fd5b8051600110156112805760400190565b6040919493926060820195600f0b8252600f0b60208201520152565b9081602091031261062257516001600160a01b03811681036106225790565b9190826040910312610622576020825192015190565b6001600160a01b039091168152602081019190915260400190565b90816020910312610622575180151581036106225790565b60408051908101916001600160a01b03166001600160401b038311828410176110f957611399926040526000806020958685527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487860152868151910182855af1611393611415565b91611445565b805190816113a657505050565b82806113b6938301019101611312565b156113be5750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b3d15611440573d906114268261110f565b9161143460405193846110d8565b82523d6000602084013e565b606090565b919290156114a75750815115611459575090565b3b156114625790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156114ba5750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b828510611500575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506114dd565b919091803b156115fa576000928361154d61155b8295604051928391602083019663095ea7b360e01b8852602484016112f7565b03601f1981018352826110d8565b51925af1611567611415565b816115cb575b501561157557565b60405162461bcd60e51b815260206004820152602860248201527f42617365537761707065723a3a73616665417070726f76653a20617070726f76604482015267194819985a5b195960c21b6064820152608490fd5b80518015925082156115e0575b50503861156d565b6115f39250602080918301019101611312565b38806115d8565b60405162461bcd60e51b815260206004820152601460248201527314ddd85c1c195c8e881b9bc818dbdb9d1c9858dd60621b6044820152606490fd5b9190820391821161164357565b634e487b7160e01b600052601160045260246000fd5b949391909294610104358015158103610622576118275750505082156117eb57604080516370a0823160e01b808252306004830152919490926001600160a01b031691602091908285602481875afa9485156117e0576000956117b1575b508651916323b872dd60e01b8484015233602484015230604484015260648301526064825260a082018281106001600160401b038211176110f95783926117009189528561132a565b602487518095819382523060048301525afa9182156117a657600092611777575b50828211156117395750611736929350611636565b90565b60649085519062461bcd60e51b82526004820152601860248201527714ddd85c1c195c8e881d1c985b9cd9995c8819985a5b195960421b6044820152fd5b90918282813d831161179f575b61178e81836110d8565b8101031261015c5750519038611721565b503d611784565b85513d6000823e3d90fd5b90948382813d83116117d9575b6117c881836110d8565b8101031261015c57505193386116b7565b503d6117be565b87513d6000823e3d90fd5b60405162461bcd60e51b81526020600482015260146024820152730537761707065723a20616d6f756e7420697320360641b6044820152606490fd5b6040935090600060a49285979496975196879586946311a5cc7760e31b865260048601523060248601523060448601526064850152608484015260018060a01b03165af19081156118995760009161187d575090565b611895915060403d81116105c1576105b181836110d8565b5090565b6040513d6000823e3d90fdfea26469706673582212201aa3bfa3b5174a3fab15b065ca70b971b0167b8638b7af9f7a5b27463d5c0e0364736f6c63430008120033";

type CurveSwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveSwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveSwapper__factory extends ContractFactory {
  constructor(...args: CurveSwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CurveSwapper";
  }

  override deploy(
    _curvePool: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurveSwapper> {
    return super.deploy(
      _curvePool,
      _yieldBox,
      overrides || {}
    ) as Promise<CurveSwapper>;
  }
  override getDeployTransaction(
    _curvePool: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_curvePool, _yieldBox, overrides || {});
  }
  override attach(address: string): CurveSwapper {
    return super.attach(address) as CurveSwapper;
  }
  override connect(signer: Signer): CurveSwapper__factory {
    return super.connect(signer) as CurveSwapper__factory;
  }
  static readonly contractName: "CurveSwapper";

  public readonly contractName: "CurveSwapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveSwapperInterface {
    return new utils.Interface(_abi) as CurveSwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveSwapper {
    return new Contract(address, _abi, signerOrProvider) as CurveSwapper;
  }
}
