/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  AccessControlledOffchainAggregatorMock,
  AccessControlledOffchainAggregatorMockInterface,
} from "../../ChainlinkFeedMock.sol/AccessControlledOffchainAggregatorMock";

const _abi = [
  {
    inputs: [],
    name: "maxAnswer",
    outputs: [
      {
        internalType: "int192",
        name: "",
        type: "int192",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minAnswer",
    outputs: [
      {
        internalType: "int192",
        name: "",
        type: "int192",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600080546001600160c01b03199081166001600160bf1b0317909155600180549091169055348015603457600080fd5b50609c806100436000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806322adbc7814603757806370da2f6714605a575b600080fd5b60015460439060170b81565b60405160179190910b815260200160405180910390f35b60005460439060170b8156fea264697066735822122044404f87200ad44d059e7796a23b373e69702a100b072bf87024fbf98bc50b9b64736f6c63430008160033";

type AccessControlledOffchainAggregatorMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccessControlledOffchainAggregatorMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccessControlledOffchainAggregatorMock__factory extends ContractFactory {
  constructor(
    ...args: AccessControlledOffchainAggregatorMockConstructorParams
  ) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AccessControlledOffchainAggregatorMock";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AccessControlledOffchainAggregatorMock> {
    return super.deploy(
      overrides || {}
    ) as Promise<AccessControlledOffchainAggregatorMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AccessControlledOffchainAggregatorMock {
    return super.attach(address) as AccessControlledOffchainAggregatorMock;
  }
  override connect(
    signer: Signer
  ): AccessControlledOffchainAggregatorMock__factory {
    return super.connect(
      signer
    ) as AccessControlledOffchainAggregatorMock__factory;
  }
  static readonly contractName: "AccessControlledOffchainAggregatorMock";

  public readonly contractName: "AccessControlledOffchainAggregatorMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccessControlledOffchainAggregatorMockInterface {
    return new utils.Interface(
      _abi
    ) as AccessControlledOffchainAggregatorMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessControlledOffchainAggregatorMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AccessControlledOffchainAggregatorMock;
  }
}
