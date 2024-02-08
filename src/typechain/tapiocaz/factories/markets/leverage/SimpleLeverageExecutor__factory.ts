/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleLeverageExecutor,
  SimpleLeverageExecutorInterface,
} from "../../../markets/leverage/SimpleLeverageExecutor";

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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
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
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051620014fa380380620014fa833981016040819052610031916100d5565b600080546001600160a01b0319163390811782556040518592859285929091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160a01b03928316608052600380549284166001600160a01b0319938416179055600280549190931690821617909155600080549091163317905550610122915050565b6001600160a01b03811681146100d257600080fd5b50565b6000806000606084860312156100ea57600080fd5b83516100f5816100bd565b6020850151909350610106816100bd565b6040850151909250610117816100bd565b809150509250925092565b6080516113ae6200014c6000396000818161020e015281816108b8015261091901526113ae6000f3fe6080604052600436106100c75760003560e01c80639c82f2a411610074578063de4065771161004e578063de406577146101fc578063e221165814610230578063e30c39781461025d57600080fd5b80639c82f2a4146101ae578063c990ad1c146101ce578063dbd01de1146101dc57600080fd5b8063437be622116100a5578063437be622146101595780634e71e0c8146101795780638da5cb5b1461018e57600080fd5b8063078dfbe7146100cc5780630fb5d60d146100ee5780632b3297f914610121575b600080fd5b3480156100d857600080fd5b506100ec6100e7366004610d71565b61027d565b005b3480156100fa57600080fd5b5061010e610109366004610dbc565b6103c7565b6040519081526020015b60405180910390f35b34801561012d57600080fd5b50600354610141906001600160a01b031681565b6040516001600160a01b039091168152602001610118565b34801561016557600080fd5b506100ec610174366004610e7a565b6104ca565b34801561018557600080fd5b506100ec610546565b34801561019a57600080fd5b50600054610141906001600160a01b031681565b3480156101ba57600080fd5b506100ec6101c9366004610e7a565b610603565b61010e610109366004610dbc565b3480156101e857600080fd5b50600254610141906001600160a01b031681565b34801561020857600080fd5b506101417f000000000000000000000000000000000000000000000000000000000000000081565b34801561023c57600080fd5b5061025061024b366004610e9e565b61067f565b6040516101189190610f2f565b34801561026957600080fd5b50600154610141906001600160a01b031681565b6000546001600160a01b031633146102dc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b81156103a7576001600160a01b0383161515806102f65750805b6103425760405162461bcd60e51b815260206004820152601560248201527f4f776e61626c653a207a65726f2061646472657373000000000000000000000060448201526064016102d3565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055505050565b600180546001600160a01b0319166001600160a01b038516179055505050565b600254604051631ccfd32160e31b8152600060048201819052336024830152916001600160a01b03169063e67e990890604401602060405180830381865afa158015610417573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043b9190610f42565b610458576040516303482c7160e21b815260040160405180910390fd5b6104606106af565b60008061046f84860186610fcf565b915091506104828989898585600061076e565b9250818310156104b0576040516328e217f560e01b81526001600160a01b03891660048201526024016102d3565b6104bd8a893089876108a9565b5050979650505050505050565b6000546001600160a01b031633146105245760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102d3565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b03163381146105a15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e657260448201526064016102d3565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b6000546001600160a01b0316331461065d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102d3565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60606106a784848460405180604001604052806002815260200161060f60f31b81525061098e565b949350505050565b6003546001600160a01b03166106d857604051631da137b560e01b815260040160405180910390fd5b600254600354604051631ccfd32160e31b8152600060048201526001600160a01b03918216602482015291169063e67e990890604401602060405180830381865afa15801561072b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074f9190610f42565b61076c5760405163086a95e160e21b815260040160405180910390fd5b565b60035460405163678a252760e11b81526001600160a01b03888116600483015287811660248301526044820187905260006064830181905292839291169063cf144a4e9060840161014060405180830381865afa1580156107d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f79190611117565b90506001600160a01b0388161561082257600354610822906001600160a01b038a8116911688610ac2565b60035460405163efa84c6d60e01b81526001600160a01b039091169063efa84c6d90859061085a9085908a9030908b906004016111cd565b604080518083038185885af1158015610877573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061089c9190611276565b5098975050505050505050565b6108dd6001600160a01b0385167f000000000000000000000000000000000000000000000000000000000000000083610ac2565b604051634d4d7cbd60e11b8152600481018690526001600160a01b038481166024830152838116604483015260648201839052600060848301527f00000000000000000000000000000000000000000000000000000000000000001690639a9af97a9060a40160408051808303816000875af1158015610961573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109859190611276565b50505050505050565b60035460405163678a252760e11b81526001600160a01b038681166004830152858116602483015260448201859052600060648301819052606093909291169063cf144a4e9060840161014060405180830381865afa1580156109f5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a199190611117565b600354604051630b7ecdc960e31b81529192506000916001600160a01b0390911690635bf66e4890610a51908590889060040161129a565b602060405180830381865afa158015610a6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a92919061132a565b90508084604051602001610aa7929190611343565b60405160208183030381529060405292505050949350505050565b6000836001600160a01b03163b11610b1c5760405162461bcd60e51b815260206004820152601860248201527f53616665417070726f76653a206e6f20636f6e7472616374000000000000000060448201526064016102d3565b6040516001600160a01b0383811660248301526000604483018190529160609186169060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b17905251610b77919061135c565b6000604051808303816000865af19150503d8060008114610bb4576040519150601f19603f3d011682016040523d82523d6000602084013e610bb9565b606091505b509092509050818015610be4575080511580610be4575080806020019051810190610be49190610f42565b610c305760405162461bcd60e51b815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c6564000000000060448201526064016102d3565b8215610d44576040516001600160a01b0385811660248301526044820185905286169060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b17905251610c8b919061135c565b6000604051808303816000865af19150503d8060008114610cc8576040519150601f19603f3d011682016040523d82523d6000602084013e610ccd565b606091505b509092509050818015610cf8575080511580610cf8575080806020019051810190610cf89190610f42565b610d445760405162461bcd60e51b815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c6564000000000060448201526064016102d3565b5050505050565b6001600160a01b0381168114610d6057600080fd5b50565b8015158114610d6057600080fd5b600080600060608486031215610d8657600080fd5b8335610d9181610d4b565b92506020840135610da181610d63565b91506040840135610db181610d63565b809150509250925092565b600080600080600080600060c0888a031215610dd757600080fd5b873596506020880135610de981610d4b565b95506040880135610df981610d4b565b9450606088013593506080880135610e1081610d4b565b925060a088013567ffffffffffffffff80821115610e2d57600080fd5b818a0191508a601f830112610e4157600080fd5b813581811115610e5057600080fd5b8b6020828501011115610e6257600080fd5b60208301945080935050505092959891949750929550565b600060208284031215610e8c57600080fd5b8135610e9781610d4b565b9392505050565b600080600060608486031215610eb357600080fd5b8335610ebe81610d4b565b92506020840135610ece81610d4b565b929592945050506040919091013590565b60005b83811015610efa578181015183820152602001610ee2565b50506000910152565b60008151808452610f1b816020860160208601610edf565b601f01601f19169290920160200192915050565b602081526000610e976020830184610f03565b600060208284031215610f5457600080fd5b8151610e9781610d63565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715610f9857610f98610f5f565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610fc757610fc7610f5f565b604052919050565b60008060408385031215610fe257600080fd5b8235915060208084013567ffffffffffffffff8082111561100257600080fd5b818601915086601f83011261101657600080fd5b81358181111561102857611028610f5f565b61103a601f8201601f19168501610f9e565b9150808252878482850101111561105057600080fd5b80848401858401376000848284010152508093505050509250929050565b60006080828403121561108057600080fd5b611088610f75565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b6000604082840312156110c457600080fd5b6040516040810181811067ffffffffffffffff821117156110e7576110e7610f5f565b806040525080915082516110fa81610d63565b8152602083015161110a81610d63565b6020919091015292915050565b600081830361014081121561112b57600080fd5b6040516060810181811067ffffffffffffffff8211171561114e5761114e610f5f565b604052608082121561115f57600080fd5b611167610f75565b9150835161117481610d4b565b825260208481015190830152604084015161118e81610d4b565b6040830152606084810151908301528181526111ad856080860161106e565b60208201526111c08561010086016110b2565b6040820152949350505050565b845180516001600160a01b03908116835260208083015181850152604080840151909216828501526060928301518385015280880151805160808601528082015160a08601528083015160c08601529092015160e0840152860151805115156101008401520151151561012082015260006101a0856101408401526001600160a01b0385166101608401528061018084015261126b81840185610f03565b979650505050505050565b6000806040838503121561128957600080fd5b505080516020909101519092909150565b825180516001600160a01b03908116835260208083015181850152604080840151909216828501526060928301518385015280860151805160808601528082015160a08601528083015160c08601529092015160e0840152840151805115156101008401520151151561012082015260006101608061014084015261132181840185610f03565b95945050505050565b60006020828403121561133c57600080fd5b5051919050565b8281526040602082015260006106a76040830184610f03565b6000825161136e818460208701610edf565b919091019291505056fea2646970667358221220bb07060b617e8d64849e39b42f9ca3b480bc3a1525b7658a1590e3d299fcceb764736f6c63430008160033";

type SimpleLeverageExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleLeverageExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleLeverageExecutor__factory extends ContractFactory {
  constructor(...args: SimpleLeverageExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SimpleLeverageExecutor";
  }

  override deploy(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleLeverageExecutor> {
    return super.deploy(
      _yb,
      _swapper,
      _cluster,
      overrides || {}
    ) as Promise<SimpleLeverageExecutor>;
  }
  override getDeployTransaction(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yb, _swapper, _cluster, overrides || {});
  }
  override attach(address: string): SimpleLeverageExecutor {
    return super.attach(address) as SimpleLeverageExecutor;
  }
  override connect(signer: Signer): SimpleLeverageExecutor__factory {
    return super.connect(signer) as SimpleLeverageExecutor__factory;
  }
  static readonly contractName: "SimpleLeverageExecutor";

  public readonly contractName: "SimpleLeverageExecutor";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleLeverageExecutorInterface {
    return new utils.Interface(_abi) as SimpleLeverageExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleLeverageExecutor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleLeverageExecutor;
  }
}
