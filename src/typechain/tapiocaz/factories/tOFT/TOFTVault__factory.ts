/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TOFTVault, TOFTVaultInterface } from "../../tOFT/TOFTVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "depositNative",
    outputs: [],
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
    name: "renounceOwnership",
    outputs: [],
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
    name: "viewSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080346100be57601f61068938819003918201601f19168301916001600160401b038311848410176100c3578084926020946040528339810103126100be57516001600160a01b0390818116908190036100be576000543360018060a01b0319821617600055604051923391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3600180546001600160a81b0319168217911560a01b60ff60a01b169190911790556105af90816100da8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260048036101561001f575b5050361561001d57600080fd5b005b600091823560e01c8063715018a6146103ea5780638da5cb5b146103c2578063b08ff1051461039a578063db6b5246146102ed578063f2fde38b1461022a5763f3fef3a31461006e5750610010565b3461022657806003193601126102265782610087610447565b60243590610093610462565b60015460ff8160a01c16600014610151575082809281925af13d1561014c573d6001600160401b038111610139578251906100d8601f8201601f1916602001836104ba565b81528460203d92013e5b156100ec57505080f35b906020608492519162461bcd60e51b8352820152602160248201527f544f46545661756c743a206e6174697665207472616e73666572206661696c656044820152601960fa1b6064820152fd5b634e487b7160e01b855260418452602485fd5b6100e2565b845163a9059cbb60e01b81526001600160a01b039283168782015260248101939093529192602092849260449284929091165af190811561021c5784916101de575b501561019e57505080f35b906020606492519162461bcd60e51b8352820152601a6024820152791513d19515985d5b1d0e881d1c985b9cd9995c8819985a5b195960321b6044820152fd5b90506020813d8211610214575b816101f8602093836104ba565b81010312610210575180151581036102105738610193565b8380fd5b3d91506101eb565b82513d86823e3d90fd5b8280fd5b50903461022657602036600319011261022657610245610447565b9061024e610462565b6001600160a01b0391821692831561029b57505082546001600160a01b0319811683178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b508260031936011261022657610301610462565b60ff60015460a01c161561035a573415610319578280f35b906020606492519162461bcd60e51b8352820152601b60248201527a1513d19515985d5b1d0e88185b5bdd5b9d081b9bdd081d985b1a59602a1b6044820152fd5b906020606492519162461bcd60e51b8352820152601a6024820152792a27a32a2b30bab63a1d103234b33332b932b73a103a37b5b2b760311b6044820152fd5b8382346103be57816003193601126103be576020906103b76104f1565b9051908152f35b5080fd5b8382346103be57816003193601126103be57905490516001600160a01b039091168152602090f35b8334610444578060031936011261044457610403610462565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b600435906001600160a01b038216820361045d57565b600080fd5b6000546001600160a01b0316330361047657565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90601f801991011681019081106001600160401b038211176104db57604052565b634e487b7160e01b600052604160045260246000fd5b60015460ff8160a01c16610574576040516370a0823160e01b815230600482015290602090829060249082906001600160a01b03165afa9081156105685760009161053a575090565b906020823d8211610560575b81610553602093836104ba565b8101031261044457505190565b3d9150610546565b6040513d6000823e3d90fd5b50479056fea2646970667358221220a15c4cd7f6ce0de67588b73fc3ce1eac1550b75a3319219a61a6e1d0b7fd676864736f6c63430008120033";

type TOFTVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TOFTVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TOFTVault__factory extends ContractFactory {
  constructor(...args: TOFTVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TOFTVault";
  }

  override deploy(
    token_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TOFTVault> {
    return super.deploy(token_, overrides || {}) as Promise<TOFTVault>;
  }
  override getDeployTransaction(
    token_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token_, overrides || {});
  }
  override attach(address: string): TOFTVault {
    return super.attach(address) as TOFTVault;
  }
  override connect(signer: Signer): TOFTVault__factory {
    return super.connect(signer) as TOFTVault__factory;
  }
  static readonly contractName: "TOFTVault";

  public readonly contractName: "TOFTVault";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TOFTVaultInterface {
    return new utils.Interface(_abi) as TOFTVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TOFTVault {
    return new Contract(address, _abi, signerOrProvider) as TOFTVault;
  }
}
