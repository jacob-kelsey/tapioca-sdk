/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  FlashMaliciousBorrowerMock,
  FlashMaliciousBorrowerMockInterface,
} from "../../FlashBorrowerMock.sol/FlashMaliciousBorrowerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC3156FlashLenderMock",
        name: "_lender",
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "flashBorrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initiator",
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
    name: "onFlashLoan",
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
  "0x60803461007457601f61034a38819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600080546001600160a01b0319169190911790556040516102ba90816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060408181526004908136101561001657600080fd5b600092833560e01c90816323e30c8b1461012b575063b53e48851461003a57600080fd5b3461012757806003193601126101275761005261025c565b91602073ffffffffffffffffffffffffffffffffffffffff60a481875416958786519788948593632e7ff4ef60e11b855230898601521660248401526024356044840152608060648401528160848401525af1801561011d576100b3578380f35b6020913d8311610115575b601f8301601f191684019167ffffffffffffffff8311858410176101025750526020908201829003126100fe5751801515036100fb573880808380f35b80fd5b5080fd5b634e487b7160e01b865260419052602485fd5b3d92506100be565b82513d86823e3d90fd5b8280fd5b91939050346100fb5760a03660031901126100fb5761014861025c565b9173ffffffffffffffffffffffffffffffffffffffff91602435838116036100fb5760843567ffffffffffffffff8082116101275736602383011215610127578187013590811161012757369101602401116100fb57548216330361021b5750309116036101d957602082517f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd98152f35b6020606492519162461bcd60e51b8352820152602060248201527f466c617368426f72726f7765723a206e6f742074686520696e69746961746f726044820152fd5b62461bcd60e51b8152602084820152601860248201527f466c617368426f72726f7765723a20756e7472757374656400000000000000006044820152606490fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361027f57565b600080fdfea264697066735822122036225d952a22ec116a703bc5319502aca477c8a021c5434fc9bf384169e8ad3764736f6c63430008120033";

type FlashMaliciousBorrowerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FlashMaliciousBorrowerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FlashMaliciousBorrowerMock__factory extends ContractFactory {
  constructor(...args: FlashMaliciousBorrowerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FlashMaliciousBorrowerMock";
  }

  override deploy(
    _lender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FlashMaliciousBorrowerMock> {
    return super.deploy(
      _lender,
      overrides || {}
    ) as Promise<FlashMaliciousBorrowerMock>;
  }
  override getDeployTransaction(
    _lender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_lender, overrides || {});
  }
  override attach(address: string): FlashMaliciousBorrowerMock {
    return super.attach(address) as FlashMaliciousBorrowerMock;
  }
  override connect(signer: Signer): FlashMaliciousBorrowerMock__factory {
    return super.connect(signer) as FlashMaliciousBorrowerMock__factory;
  }
  static readonly contractName: "FlashMaliciousBorrowerMock";

  public readonly contractName: "FlashMaliciousBorrowerMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlashMaliciousBorrowerMockInterface {
    return new utils.Interface(_abi) as FlashMaliciousBorrowerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashMaliciousBorrowerMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FlashMaliciousBorrowerMock;
  }
}
