/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  FlashBorrowerMock,
  FlashBorrowerMockInterface,
} from "../../../../usd0/mocks/FlashBorrowerMock.sol/FlashBorrowerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC3156FlashLender",
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
    name: "approveRepayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
  "0x60803461007457601f61052e38819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600080546001600160a01b03191691909117905560405161049e90816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040818152600436101561001457600080fd5b600091823560e01c90816323e30c8b1461011f57508063736ddf3b146100f55763b53e48851461004357600080fd5b346100f157806003193601126100f15761005b610249565b9060206024359261006c84826102d7565b60a46001600160a01b0391868381541686519788958694632e7ff4ef60e11b86523060048701521660248501526044840152608060648401528160848401525af19081156100e857506100bd575080f35b6100dd9060203d81116100e1575b6100d58183610264565b81019061029c565b5080f35b503d6100cb565b513d84823e3d90fd5b5080fd5b50346100f15736600319011261011c57610119610110610249565b602435906102d7565b80f35b80fd5b9050823461011c5760a036600319011261011c5761013b610249565b916001600160a01b03916024358381160361011c5760843567ffffffffffffffff8082116102455736602383011215610245578160040135908111610245573691016024011161011c5754821633036102035750309116036101c057602090517f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd98152f35b5162461bcd60e51b815260206004820181905260248201527f466c617368426f72726f7765723a206e6f742074686520696e69746961746f726044820152606490fd5b62461bcd60e51b815260206004820152601860248201527f466c617368426f72726f7765723a20756e7472757374656400000000000000006044820152606490fd5b8280fd5b600435906001600160a01b038216820361025f57565b600080fd5b90601f8019910116810190811067ffffffffffffffff82111761028657604052565b634e487b7160e01b600052604160045260246000fd5b9081602091031261025f5751801515810361025f5790565b919082018092116102c157565b634e487b7160e01b600052601160045260246000fd5b91906001600160a01b03808416906000908154166040928351636eb1769f60e11b81523060048201528260248201526020958682604481865afa918215610429578592610433575b508551633676633960e21b81526001600160a01b039990991660048a015260248901819052969795968787604481875afa9687156104295790889493929186986103e7575b50906103766103af9861037c936102b4565b906102b4565b855163095ea7b360e01b81526001600160a01b039093166004840152602483015290948591908290859082906044820190565b03925af19182156103dd5750506103c4575050565b816103da92903d106100e1576100d58183610264565b50565b51903d90823e3d90fd5b80929496979850859193953d8311610422575b6104048183610264565b8101031261041e5751959493879390929091610376610364565b8580fd5b503d6103fa565b86513d87823e3d90fd5b9891508689813d8311610461575b61044b8183610264565b8101031261045d57975190978661031f565b8480fd5b503d61044156fea2646970667358221220c1f2676e1c4e29796c77f49ce8530ef1d1e4542a35ce87d3a3396a5d044c9da264736f6c63430008120033";

type FlashBorrowerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FlashBorrowerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FlashBorrowerMock__factory extends ContractFactory {
  constructor(...args: FlashBorrowerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FlashBorrowerMock";
  }

  override deploy(
    _lender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FlashBorrowerMock> {
    return super.deploy(_lender, overrides || {}) as Promise<FlashBorrowerMock>;
  }
  override getDeployTransaction(
    _lender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_lender, overrides || {});
  }
  override attach(address: string): FlashBorrowerMock {
    return super.attach(address) as FlashBorrowerMock;
  }
  override connect(signer: Signer): FlashBorrowerMock__factory {
    return super.connect(signer) as FlashBorrowerMock__factory;
  }
  static readonly contractName: "FlashBorrowerMock";

  public readonly contractName: "FlashBorrowerMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlashBorrowerMockInterface {
    return new utils.Interface(_abi) as FlashBorrowerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashBorrowerMock {
    return new Contract(address, _abi, signerOrProvider) as FlashBorrowerMock;
  }
}
