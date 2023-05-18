/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155RevertingReceiverMock,
  ERC1155RevertingReceiverMockInterface,
} from "../ERC1155RevertingReceiverMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102c8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063bc197c811461003b578063f23a6e611461006b575b600080fd5b61004e61004936600461015f565b610079565b6040516001600160e01b0319909116815260200160405180910390f35b61004e61004936600461021a565b600060405162461bcd60e51b81526004016100ac906020808252600490820152634f6f707360e01b604082015260600190565b60405180910390fd5b80356001600160a01b03811681146100cc57600080fd5b919050565b60008083601f8401126100e357600080fd5b50813567ffffffffffffffff8111156100fb57600080fd5b6020830191508360208260051b850101111561011657600080fd5b9250929050565b60008083601f84011261012f57600080fd5b50813567ffffffffffffffff81111561014757600080fd5b60208301915083602082850101111561011657600080fd5b60008060008060008060008060a0898b03121561017b57600080fd5b610184896100b5565b975061019260208a016100b5565b9650604089013567ffffffffffffffff808211156101af57600080fd5b6101bb8c838d016100d1565b909850965060608b01359150808211156101d457600080fd5b6101e08c838d016100d1565b909650945060808b01359150808211156101f957600080fd5b506102068b828c0161011d565b999c989b5096995094979396929594505050565b60008060008060008060a0878903121561023357600080fd5b61023c876100b5565b955061024a602088016100b5565b94506040870135935060608701359250608087013567ffffffffffffffff81111561027457600080fd5b61028089828a0161011d565b979a969950949750929593949250505056fea26469706673582212208b427747aef37259480608a7cd78b7e92ab78bb70735d2c87e3796d0176f248764736f6c63430008090033";

type ERC1155RevertingReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155RevertingReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155RevertingReceiverMock__factory extends ContractFactory {
  constructor(...args: ERC1155RevertingReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC1155RevertingReceiverMock";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155RevertingReceiverMock> {
    return super.deploy(
      overrides || {}
    ) as Promise<ERC1155RevertingReceiverMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155RevertingReceiverMock {
    return super.attach(address) as ERC1155RevertingReceiverMock;
  }
  connect(signer: Signer): ERC1155RevertingReceiverMock__factory {
    return super.connect(signer) as ERC1155RevertingReceiverMock__factory;
  }
  static readonly contractName: "ERC1155RevertingReceiverMock";
  public readonly contractName: "ERC1155RevertingReceiverMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155RevertingReceiverMockInterface {
    return new utils.Interface(_abi) as ERC1155RevertingReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155RevertingReceiverMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155RevertingReceiverMock;
  }
}
