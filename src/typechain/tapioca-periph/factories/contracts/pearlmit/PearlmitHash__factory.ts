/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PearlmitHash,
  PearlmitHashInterface,
} from "../../../contracts/pearlmit/PearlmitHash";

const _abi = [
  {
    inputs: [],
    name: "_PERMIT_BATCH_TRANSFER_FROM_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_PERMIT_SIGNATURE_APPROVAL_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60d6610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c80633eb8b8fd1460425780639b07609814607a575b600080fd5b60687fd5d7a259ad9503199f90b7ab0f3666a023407b882a97e7cbb0ca90a4169f0bf881565b60405190815260200160405180910390f35b60687f9907ae0a8b239bb7feef50f64ab23ff79fe790ab79bf66ed21a188dbd846e2688156fea26469706673582212206fb73012398b7db092449969b9684888bad4c4da721f8f070257da904d7d896364736f6c63430008160033";

type PearlmitHashConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PearlmitHashConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PearlmitHash__factory extends ContractFactory {
  constructor(...args: PearlmitHashConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PearlmitHash";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PearlmitHash> {
    return super.deploy(overrides || {}) as Promise<PearlmitHash>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PearlmitHash {
    return super.attach(address) as PearlmitHash;
  }
  override connect(signer: Signer): PearlmitHash__factory {
    return super.connect(signer) as PearlmitHash__factory;
  }
  static readonly contractName: "PearlmitHash";

  public readonly contractName: "PearlmitHash";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PearlmitHashInterface {
    return new utils.Interface(_abi) as PearlmitHashInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PearlmitHash {
    return new Contract(address, _abi, signerOrProvider) as PearlmitHash;
  }
}
