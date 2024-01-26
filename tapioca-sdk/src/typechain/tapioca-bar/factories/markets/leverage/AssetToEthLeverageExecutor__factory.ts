/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AssetToEthLeverageExecutor,
  AssetToEthLeverageExecutorInterface,
} from "../../../markets/leverage/AssetToEthLeverageExecutor";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
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
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NotEnough",
    type: "error",
  },
  {
    inputs: [],
    name: "SenderNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapperNotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapperNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenNotValid",
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
        name: "to",
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
        name: "to",
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
  "0x60a06040523480156200001157600080fd5b5060405162001dc838038062001dc88339810160408190526200003491620000da565b600080546001600160a01b0319163390811782556040518592859285929091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160a01b03928316608052600380549284166001600160a01b03199384161790556002805491909316908216179091556000805490911633179055506200012e915050565b6001600160a01b0381168114620000d757600080fd5b50565b600080600060608486031215620000f057600080fd5b8351620000fd81620000c1565b60208501519093506200011081620000c1565b60408501519092506200012381620000c1565b809150509250925092565b608051611c70620001586000396000818161025201528181610fcd01526110540152611c706000f3fe6080604052600436106100cb5760003560e01c80639c82f2a411610074578063de4065771161004e578063de40657714610240578063e221165814610274578063e30c3978146102a157600080fd5b80639c82f2a4146101e0578063c990ad1c14610200578063dbd01de11461021357600080fd5b8063437be622116100a5578063437be6221461017e5780634e71e0c81461019e5780638da5cb5b146101b357600080fd5b8063078dfbe7146100d75780630fb5d60d146100f95780632b3297f91461012c57600080fd5b366100d257005b600080fd5b3480156100e357600080fd5b506100f76100f23660046115d6565b6102ce565b005b34801561010557600080fd5b50610119610114366004611621565b6104bd565b6040519081526020015b60405180910390f35b34801561013857600080fd5b506003546101599073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610123565b34801561018a57600080fd5b506100f76101993660046116df565b610755565b3480156101aa57600080fd5b506100f761081d565b3480156101bf57600080fd5b506000546101599073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101ec57600080fd5b506100f76101fb3660046116df565b610933565b61011961020e366004611621565b6109fb565b34801561021f57600080fd5b506002546101599073ffffffffffffffffffffffffffffffffffffffff1681565b34801561024c57600080fd5b506101597f000000000000000000000000000000000000000000000000000000000000000081565b34801561028057600080fd5b5061029461028f366004611703565b610ca1565b6040516101239190611794565b3480156102ad57600080fd5b506001546101599073ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff163314610354576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b81156104785773ffffffffffffffffffffffffffffffffffffffff831615158061037b5750805b6103e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4f776e61626c653a207a65726f20616464726573730000000000000000000000604482015260640161034b565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff85167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600180549091169055505050565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8516179055505050565b6002546040517fe67e99080000000000000000000000000000000000000000000000000000000081526000600482018190523360248301529173ffffffffffffffffffffffffffffffffffffffff169063e67e990890604401602060405180830381865afa158015610533573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055791906117a7565b61058d576040517f0d20b1c400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610595610cec565b6000806105a48486018661184d565b9150915060008973ffffffffffffffffffffffffffffffffffffffff1663785e9e866040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061991906118ec565b905073ffffffffffffffffffffffffffffffffffffffff811615610669576040517fb0e0140200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f39f476930000000000000000000000000000000000000000000000000000000081523060048201526024810189905273ffffffffffffffffffffffffffffffffffffffff8b16906339f4769390604401600060405180830381600087803b1580156106d757600080fd5b505af11580156106eb573d6000803e3d6000fd5b505050506106fe60008a8a86868d610e10565b93508284101561073a576040517fd0b32bf400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107478b8a308a88610fb1565b505050979650505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161034b565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461089f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604482015260640161034b565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146109b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161034b565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6002546040517fe67e99080000000000000000000000000000000000000000000000000000000081526000600482018190523360248301529173ffffffffffffffffffffffffffffffffffffffff169063e67e990890604401602060405180830381865afa158015610a71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9591906117a7565b610acb576040517f0d20b1c400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ad3610cec565b600080610ae28486018661184d565b9150915060008873ffffffffffffffffffffffffffffffffffffffff1663785e9e866040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5791906118ec565b905073ffffffffffffffffffffffffffffffffffffffff811615610ba7576040517fb0e0140200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bb78a60008a86866000610e10565b935082841015610bf3576040517fd0b32bf400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f62355638000000000000000000000000000000000000000000000000000000008152306004820181905260248201526044810185905273ffffffffffffffffffffffffffffffffffffffff8a1690636235563890869060640160206040518083038185885af1158015610c6e573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610c939190611909565b506107478b8a308a88610fb1565b6060610ce48484846040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152506110c9565b949350505050565b60035473ffffffffffffffffffffffffffffffffffffffff16610d3b576040517f1da137b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002546003546040517fe67e99080000000000000000000000000000000000000000000000000000000081526000600482015273ffffffffffffffffffffffffffffffffffffffff918216602482015291169063e67e990890604401602060405180830381865afa158015610db4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd891906117a7565b610e0e576040517f21aa578400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6003546040517fcf144a4e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff888116600483015287811660248301526044820187905260006064830181905292839291169063cf144a4e9060840161014060405180830381865afa158015610e9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ebf91906119cb565b905073ffffffffffffffffffffffffffffffffffffffff881615610f0457600354610f049073ffffffffffffffffffffffffffffffffffffffff8a8116911688611249565b6003546040517fefa84c6d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063efa84c6d908590610f629085908a9030908b90600401611a81565b604080518083038185885af1158015610f7f573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610fa49190611b44565b5098975050505050505050565b610ff273ffffffffffffffffffffffffffffffffffffffff85167f000000000000000000000000000000000000000000000000000000000000000083611249565b6040517f9a9af97a0000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff8481166024830152838116604483015260648201839052600060848301527f00000000000000000000000000000000000000000000000000000000000000001690639a9af97a9060a40160408051808303816000875af115801561109c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c09190611b44565b50505050505050565b6003546040517fcf144a4e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152858116602483015260448201859052600060648301819052606093909291169063cf144a4e9060840161014060405180830381865afa158015611156573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117a91906119cb565b6003546040517f5bf66e4800000000000000000000000000000000000000000000000000000000815291925060009173ffffffffffffffffffffffffffffffffffffffff90911690635bf66e48906111d89085908890600401611b68565b602060405180830381865afa1580156111f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112199190611909565b9050808460405160200161122e929190611c05565b60405160208183030381529060405292505050949350505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b116112ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f53616665417070726f76653a206e6f20636f6e74726163740000000000000000604482015260640161034b565b60405173ffffffffffffffffffffffffffffffffffffffff83811660248301526000604483018190529160609186169060640160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052516113609190611c1e565b6000604051808303816000865af19150503d806000811461139d576040519150601f19603f3d011682016040523d82523d6000602084013e6113a2565b606091505b5090925090508180156113cd5750805115806113cd5750808060200190518101906113cd91906117a7565b611433576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c65640000000000604482015260640161034b565b821561159c5760405173ffffffffffffffffffffffffffffffffffffffff85811660248301526044820185905286169060640160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052516114c99190611c1e565b6000604051808303816000865af19150503d8060008114611506576040519150601f19603f3d011682016040523d82523d6000602084013e61150b565b606091505b50909250905081801561153657508051158061153657508080602001905181019061153691906117a7565b61159c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c65640000000000604482015260640161034b565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff811681146115c557600080fd5b50565b80151581146115c557600080fd5b6000806000606084860312156115eb57600080fd5b83356115f6816115a3565b92506020840135611606816115c8565b91506040840135611616816115c8565b809150509250925092565b600080600080600080600060c0888a03121561163c57600080fd5b87359650602088013561164e816115a3565b9550604088013561165e816115a3565b9450606088013593506080880135611675816115a3565b925060a088013567ffffffffffffffff8082111561169257600080fd5b818a0191508a601f8301126116a657600080fd5b8135818111156116b557600080fd5b8b60208285010111156116c757600080fd5b60208301945080935050505092959891949750929550565b6000602082840312156116f157600080fd5b81356116fc816115a3565b9392505050565b60008060006060848603121561171857600080fd5b8335611723816115a3565b92506020840135611733816115a3565b929592945050506040919091013590565b60005b8381101561175f578181015183820152602001611747565b50506000910152565b60008151808452611780816020860160208601611744565b601f01601f19169290920160200192915050565b6020815260006116fc6020830184611768565b6000602082840312156117b957600080fd5b81516116fc816115c8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715611816576118166117c4565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611845576118456117c4565b604052919050565b6000806040838503121561186057600080fd5b8235915060208084013567ffffffffffffffff8082111561188057600080fd5b818601915086601f83011261189457600080fd5b8135818111156118a6576118a66117c4565b6118b884601f19601f8401160161181c565b915080825287848285010111156118ce57600080fd5b80848401858401376000848284010152508093505050509250929050565b6000602082840312156118fe57600080fd5b81516116fc816115a3565b60006020828403121561191b57600080fd5b5051919050565b60006080828403121561193457600080fd5b61193c6117f3565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b60006040828403121561197857600080fd5b6040516040810181811067ffffffffffffffff8211171561199b5761199b6117c4565b806040525080915082516119ae816115c8565b815260208301516119be816115c8565b6020919091015292915050565b60008183036101408112156119df57600080fd5b6040516060810181811067ffffffffffffffff82111715611a0257611a026117c4565b6040526080821215611a1357600080fd5b611a1b6117f3565b91508351611a28816115a3565b8252602084810151908301526040840151611a42816115a3565b604083015260608481015190830152818152611a618560808601611922565b6020820152611a74856101008601611966565b6040820152949350505050565b8451805173ffffffffffffffffffffffffffffffffffffffff908116835260208083015181850152604080840151909216828501526060928301518385015280880151805160808601528082015160a08601528083015160c08601529092015160e0840152860151805115156101008401520151151561012082015260006101a08561014084015273ffffffffffffffffffffffffffffffffffffffff851661016084015280610180840152611b3981840185611768565b979650505050505050565b60008060408385031215611b5757600080fd5b505080516020909101519092909150565b8251805173ffffffffffffffffffffffffffffffffffffffff908116835260208083015181850152604080840151909216828501526060928301518385015280860151805160808601528082015160a08601528083015160c08601529092015160e08401528401518051151561010084015201511515610120820152600061016080610140840152611bfc81840185611768565b95945050505050565b828152604060208201526000610ce46040830184611768565b60008251611c30818460208701611744565b919091019291505056fea26469706673582212200161d5be02ec3f2445df4d634e55e1af76e39d0b8f83eec49eb69e67174a34ae64736f6c63430008160033";

type AssetToEthLeverageExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetToEthLeverageExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetToEthLeverageExecutor__factory extends ContractFactory {
  constructor(...args: AssetToEthLeverageExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetToEthLeverageExecutor";
  }

  override deploy(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetToEthLeverageExecutor> {
    return super.deploy(
      _yb,
      _swapper,
      _cluster,
      overrides || {}
    ) as Promise<AssetToEthLeverageExecutor>;
  }
  override getDeployTransaction(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yb, _swapper, _cluster, overrides || {});
  }
  override attach(address: string): AssetToEthLeverageExecutor {
    return super.attach(address) as AssetToEthLeverageExecutor;
  }
  override connect(signer: Signer): AssetToEthLeverageExecutor__factory {
    return super.connect(signer) as AssetToEthLeverageExecutor__factory;
  }
  static readonly contractName: "AssetToEthLeverageExecutor";

  public readonly contractName: "AssetToEthLeverageExecutor";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetToEthLeverageExecutorInterface {
    return new utils.Interface(_abi) as AssetToEthLeverageExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetToEthLeverageExecutor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetToEthLeverageExecutor;
  }
}