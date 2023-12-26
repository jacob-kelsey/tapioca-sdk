/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ConvexRewardPoolMock,
  ConvexRewardPoolMockInterface,
} from "../../../../deprecated/convex/mocks/ConvexRewardPoolMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardToken",
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
        name: "",
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
    name: "lpToken",
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
    name: "pid",
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
    inputs: [],
    name: "rewardToken",
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
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stakeFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "withdrawAndUnwrap",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161076738038061076783398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b6106a9806100be6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806370a082311161005b57806370a08231146100e8578063c32e7202146100fb578063f10684541461011e578063f7c618c11461012557600080fd5b80630700037d146100825780632ee40908146100a85780635fcbd285146100bd575b600080fd5b610095610090366004610544565b610138565b6040519081526020015b60405180910390f35b6100bb6100b636600461055f565b610167565b005b6000546100d0906001600160a01b031681565b6040516001600160a01b03909116815260200161009f565b6100956100f6366004610544565b610183565b61010e61010936600461059a565b6101f7565b604051901515815260200161009f565b6001610095565b6001546100d0906001600160a01b031681565b60008061014430610183565b9050806000036101575750600092915050565b50678ac7230489e8000092915050565b60005461017f906001600160a01b0316333084610218565b5050565b600080546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa1580156101cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f091906105ca565b9392505050565b6000805461020f906001600160a01b03163385610289565b50600192915050565b6040516001600160a01b03808516602483015283166044820152606481018290526102839085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526102be565b50505050565b6040516001600160a01b0383166024820152604481018290526102b990849063a9059cbb60e01b9060640161024c565b505050565b6000610313826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166103989092919063ffffffff16565b905080516000148061033457508080602001905181019061033491906105e3565b6102b95760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b60606103a784846000856103af565b949350505050565b6060824710156104105760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161038f565b600080866001600160a01b0316858760405161042c9190610624565b60006040518083038185875af1925050503d8060008114610469576040519150601f19603f3d011682016040523d82523d6000602084013e61046e565b606091505b509150915061047f8783838761048a565b979650505050505050565b606083156104f95782516000036104f2576001600160a01b0385163b6104f25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161038f565b50816103a7565b6103a7838381511561050e5781518083602001fd5b8060405162461bcd60e51b815260040161038f9190610640565b80356001600160a01b038116811461053f57600080fd5b919050565b60006020828403121561055657600080fd5b6101f082610528565b6000806040838503121561057257600080fd5b61057b83610528565b946020939093013593505050565b801515811461059757600080fd5b50565b600080604083850312156105ad57600080fd5b8235915060208301356105bf81610589565b809150509250929050565b6000602082840312156105dc57600080fd5b5051919050565b6000602082840312156105f557600080fd5b81516101f081610589565b60005b8381101561061b578181015183820152602001610603565b50506000910152565b60008251610636818460208701610600565b9190910192915050565b602081526000825180602084015261065f816040850160208701610600565b601f01601f1916919091016040019291505056fea26469706673582212204dfb673c1618db46fb848efa0cbdff8561397d6f4c056f54fc79e5ddbb48803864736f6c63430008120033";

type ConvexRewardPoolMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConvexRewardPoolMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConvexRewardPoolMock__factory extends ContractFactory {
  constructor(...args: ConvexRewardPoolMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ConvexRewardPoolMock";
  }

  override deploy(
    _lpToken: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConvexRewardPoolMock> {
    return super.deploy(
      _lpToken,
      _rewardToken,
      overrides || {}
    ) as Promise<ConvexRewardPoolMock>;
  }
  override getDeployTransaction(
    _lpToken: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_lpToken, _rewardToken, overrides || {});
  }
  override attach(address: string): ConvexRewardPoolMock {
    return super.attach(address) as ConvexRewardPoolMock;
  }
  override connect(signer: Signer): ConvexRewardPoolMock__factory {
    return super.connect(signer) as ConvexRewardPoolMock__factory;
  }
  static readonly contractName: "ConvexRewardPoolMock";

  public readonly contractName: "ConvexRewardPoolMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConvexRewardPoolMockInterface {
    return new utils.Interface(_abi) as ConvexRewardPoolMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConvexRewardPoolMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConvexRewardPoolMock;
  }
}