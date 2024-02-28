/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UsdoExtExec,
  UsdoExtExecInterface,
} from "../../../usdo/extensions/UsdoExtExec";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "actionType",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "bool",
            name: "permitAsset",
            type: "bool",
          },
        ],
        internalType: "struct MarketPermitActionMsg",
        name: "_approval",
        type: "tuple",
      },
    ],
    name: "marketPermitAssetApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "actionType",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "bool",
            name: "permitAsset",
            type: "bool",
          },
        ],
        internalType: "struct MarketPermitActionMsg",
        name: "_approval",
        type: "tuple",
      },
    ],
    name: "marketPermitCollateralApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "bool",
            name: "permit",
            type: "bool",
          },
        ],
        internalType: "struct YieldBoxApproveAllMsg",
        name: "_approval",
        type: "tuple",
      },
    ],
    name: "yieldBoxPermitApproveAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "assetId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "bool",
            name: "permit",
            type: "bool",
          },
        ],
        internalType: "struct YieldBoxApproveAssetMsg[]",
        name: "_approvals",
        type: "tuple[]",
      },
    ],
    name: "yieldBoxPermitApproveAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "bool",
            name: "permit",
            type: "bool",
          },
        ],
        internalType: "struct YieldBoxApproveAllMsg",
        name: "_approval",
        type: "tuple",
      },
    ],
    name: "yieldBoxPermitRevokeAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610883806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063063ae1f61461005c5780636d00892e14610071578063a6e5d09a14610084578063bd069a0514610097578063c1951c20146100aa575b600080fd5b61006f61006a3660046106a3565b6100bd565b005b61006f61007f366004610719565b610471565b61006f610092366004610719565b61058e565b61006f6100a5366004610732565b6105a2565b61006f6100b8366004610732565b610678565b8060005b8181101561046b578383828181106100db576100db610745565b905061012002016101000160208101906100f5919061075b565b6102b05783838281811061010b5761010b610745565b610122926020610120909202019081019150610784565b6001600160a01b03166372dcad7b85858481811061014257610142610745565b90506101200201602001602081019061015b9190610784565b86868581811061016d5761016d610745565b9050610120020160400160208101906101869190610784565b87878681811061019857610198610745565b90506101200201606001358888878181106101b5576101b5610745565b90506101200201608001358989888181106101d2576101d2610745565b9050610120020160a00160208101906101eb91906107ad565b8a8a898181106101fd576101fd610745565b9050610120020160c001358b8b8a81811061021a5761021a610745565b60405160e08b811b6001600160e01b03191682526001600160a01b039a8b1660048301529890991660248a0152604489019690965250606487019390935260ff91909116608486015260a485015261012090910201013560c482015260e401600060405180830381600087803b15801561029357600080fd5b505af11580156102a7573d6000803e3d6000fd5b50505050610463565b8383828181106102c2576102c2610745565b6102d9926020610120909202019081019150610784565b6001600160a01b031663d505accf8585848181106102f9576102f9610745565b9050610120020160200160208101906103129190610784565b86868581811061032457610324610745565b90506101200201604001602081019061033d9190610784565b87878681811061034f5761034f610745565b905061012002016060013588888781811061036c5761036c610745565b905061012002016080013589898881811061038957610389610745565b9050610120020160a00160208101906103a291906107ad565b8a8a898181106103b4576103b4610745565b9050610120020160c001358b8b8a8181106103d1576103d1610745565b60405160e08b811b6001600160e01b03191682526001600160a01b039a8b1660048301529890991660248a0152604489019690965250606487019390935260ff91909116608486015260a485015261012090910201013560c482015260e401600060405180830381600087803b15801561044a57600080fd5b505af115801561045e573d6000803e3d6000fd5b505050505b6001016100c1565b50505050565b6000806104846060840160408501610784565b6104946080850160608601610784565b608085013560a08601356104ae60e0880160c089016107ad565b6040805196151560208801526001600160a01b0395861690870152939092166060850152608084015260a083015260ff1660c082015260e0808401359082015261010080840135908201526101200160408051601f19818403018152919052905061051c6020830183610784565b6001600160a01b031663910dd7c88261053b60408601602087016107d0565b6040518363ffffffff1660e01b81526004016105589291906107f4565b600060405180830381600087803b15801561057257600080fd5b505af1158015610586573d6000803e3d6000fd5b505050505050565b600060016104846060840160408501610784565b6105af6020820182610784565b6001600160a01b031663aba078476105cd6040840160208501610784565b6105dd6060850160408601610784565b60608501356105f260a08701608088016107ad565b6040516001600160e01b031960e087901b1681526001600160a01b039485166004820152939092166024840152604483015260ff16606482015260a0840135608482015260c084013560a482015260c401600060405180830381600087803b15801561065d57600080fd5b505af1158015610671573d6000803e3d6000fd5b5050505050565b6106856020820182610784565b6001600160a01b03166365e2b81f6105cd6040840160208501610784565b600080602083850312156106b657600080fd5b823567ffffffffffffffff808211156106ce57600080fd5b818501915085601f8301126106e257600080fd5b8135818111156106f157600080fd5b8660206101208302850101111561070757600080fd5b60209290920196919550909350505050565b6000610140828403121561072c57600080fd5b50919050565b6000610100828403121561072c57600080fd5b634e487b7160e01b600052603260045260246000fd5b60006020828403121561076d57600080fd5b8135801515811461077d57600080fd5b9392505050565b60006020828403121561079657600080fd5b81356001600160a01b038116811461077d57600080fd5b6000602082840312156107bf57600080fd5b813560ff8116811461077d57600080fd5b6000602082840312156107e257600080fd5b813561ffff8116811461077d57600080fd5b604081526000835180604084015260005b818110156108225760208187018101516060868401015201610805565b506000606082850101526060601f19601f83011684010191505061ffff83166020830152939250505056fea26469706673582212204ce0ccaeacc6f1115cb05e8cf9569839425eb9829b6bc48c97e73b202f94aa8264736f6c63430008160033";

type UsdoExtExecConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UsdoExtExecConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UsdoExtExec__factory extends ContractFactory {
  constructor(...args: UsdoExtExecConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UsdoExtExec";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UsdoExtExec> {
    return super.deploy(overrides || {}) as Promise<UsdoExtExec>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UsdoExtExec {
    return super.attach(address) as UsdoExtExec;
  }
  override connect(signer: Signer): UsdoExtExec__factory {
    return super.connect(signer) as UsdoExtExec__factory;
  }
  static readonly contractName: "UsdoExtExec";

  public readonly contractName: "UsdoExtExec";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UsdoExtExecInterface {
    return new utils.Interface(_abi) as UsdoExtExecInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UsdoExtExec {
    return new Contract(address, _abi, signerOrProvider) as UsdoExtExec;
  }
}