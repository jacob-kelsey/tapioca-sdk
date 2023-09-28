/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MagnetarV2Storage,
  MagnetarV2StorageInterface,
} from "../../../contracts/Magnetar/MagnetarV2Storage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldCluster",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCluster",
        type: "address",
      },
    ],
    name: "ClusterSet",
    type: "event",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60808060405234601457608b908161001a8239f35b600080fdfe6080806040526004361015601b575b503615601957600080fd5b005b600090813560e01c63dbd01de11460315750600e565b346051578160031936011260515790546001600160a01b03168152602090f35b5080fdfea26469706673582212200f126c8097d4b191f825441b843023c6373e5a25428a34f5db57db2d31a9aa2f64736f6c63430008120033";

type MagnetarV2StorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MagnetarV2StorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MagnetarV2Storage__factory extends ContractFactory {
  constructor(...args: MagnetarV2StorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MagnetarV2Storage";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MagnetarV2Storage> {
    return super.deploy(overrides || {}) as Promise<MagnetarV2Storage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MagnetarV2Storage {
    return super.attach(address) as MagnetarV2Storage;
  }
  override connect(signer: Signer): MagnetarV2Storage__factory {
    return super.connect(signer) as MagnetarV2Storage__factory;
  }
  static readonly contractName: "MagnetarV2Storage";

  public readonly contractName: "MagnetarV2Storage";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MagnetarV2StorageInterface {
    return new utils.Interface(_abi) as MagnetarV2StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MagnetarV2Storage {
    return new Contract(address, _abi, signerOrProvider) as MagnetarV2Storage;
  }
}
