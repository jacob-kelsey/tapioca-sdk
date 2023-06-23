/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BoringOwnableData,
  BoringOwnableDataInterface,
} from "../BoringOwnableData";

const _abi = [
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
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060ad8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80638da5cb5b146037578063e30c3978146065575b600080fd5b6000546049906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6001546049906001600160a01b03168156fea2646970667358221220bd6bef5e3c71fb9424cedf2a0404268fb7be01c6813f876dd735746f8c7c243264736f6c63430008090033";

type BoringOwnableDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoringOwnableDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoringOwnableData__factory extends ContractFactory {
  constructor(...args: BoringOwnableDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "BoringOwnableData";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BoringOwnableData> {
    return super.deploy(overrides || {}) as Promise<BoringOwnableData>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoringOwnableData {
    return super.attach(address) as BoringOwnableData;
  }
  connect(signer: Signer): BoringOwnableData__factory {
    return super.connect(signer) as BoringOwnableData__factory;
  }
  static readonly contractName: "BoringOwnableData";
  public readonly contractName: "BoringOwnableData";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoringOwnableDataInterface {
    return new utils.Interface(_abi) as BoringOwnableDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringOwnableData {
    return new Contract(address, _abi, signerOrProvider) as BoringOwnableData;
  }
}