/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  YieldBoxRebaseMock,
  YieldBoxRebaseMockInterface,
} from "../YieldBoxRebaseMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "gain",
    outputs: [],
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
    name: "lose",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "toAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "toShare",
    outputs: [
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAmount",
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
    name: "totalShares",
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
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061048f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80633a98ef391161005b5780633a98ef39146100e4578063441a3e70146100ed5780636832a26614610115578063e2bbb1581461012857600080fd5b8063022e6df61461008d5780630588ede4146100a25780631a39d8ef146100c85780631c711610146100d1575b600080fd5b6100a061009b366004610348565b61013b565b005b6100b56100b0366004610361565b610154565b6040519081526020015b60405180910390f35b6100b560005481565b6100b56100df366004610361565b610178565b6100b560015481565b6101006100fb366004610396565b610195565b604080519283526020830191909152016100bf565b6100a0610123366004610348565b61020e565b610100610136366004610396565b61021f565b8060008082825461014c91906103ce565b909155505050565b6000610171600154600054848661028b909392919063ffffffff16565b9392505050565b600061017160015460005484866102fd909392919063ffffffff16565b600080836101b857600180546000546101b1928692919061028b565b93506101d7565b6101d46001546000546000876102fd909392919063ffffffff16565b92505b826000808282546101e891906103e6565b92505081905550836001600082825461020191906103e6565b9091555093949293505050565b8060008082825461014c91906103e6565b6000808361024a5761024360015460005460008661028b909392919063ffffffff16565b9350610261565b6001805460005461025e92879291906102fd565b92505b8260008082825461027291906103ce565b92505081905550836001600082825461020191906103ce565b600082610297816103fd565b93506102a990506305f5e100856103ce565b9350826102b68587610418565b6102c09190610437565b90508180156102e2575084846102d68584610418565b6102e09190610437565b105b156102f557806102f1816103fd565b9150505b949350505050565b600082610309816103fd565b935061031b90506305f5e100856103ce565b9350836103288487610418565b6103329190610437565b90508180156102e2575084836102d68684610418565b60006020828403121561035a57600080fd5b5035919050565b6000806040838503121561037457600080fd5b823591506020830135801515811461038b57600080fd5b809150509250929050565b600080604083850312156103a957600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b600082198211156103e1576103e16103b8565b500190565b6000828210156103f8576103f86103b8565b500390565b6000600019821415610411576104116103b8565b5060010190565b6000816000190483118215151615610432576104326103b8565b500290565b60008261045457634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212206ddc2dda97b5a12efdbbbef56a1b90412bd3a25675b96a421471c78e3b14e3ac64736f6c63430008090033";

type YieldBoxRebaseMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YieldBoxRebaseMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YieldBoxRebaseMock__factory extends ContractFactory {
  constructor(...args: YieldBoxRebaseMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "YieldBoxRebaseMock";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YieldBoxRebaseMock> {
    return super.deploy(overrides || {}) as Promise<YieldBoxRebaseMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): YieldBoxRebaseMock {
    return super.attach(address) as YieldBoxRebaseMock;
  }
  connect(signer: Signer): YieldBoxRebaseMock__factory {
    return super.connect(signer) as YieldBoxRebaseMock__factory;
  }
  static readonly contractName: "YieldBoxRebaseMock";
  public readonly contractName: "YieldBoxRebaseMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldBoxRebaseMockInterface {
    return new utils.Interface(_abi) as YieldBoxRebaseMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldBoxRebaseMock {
    return new Contract(address, _abi, signerOrProvider) as YieldBoxRebaseMock;
  }
}
