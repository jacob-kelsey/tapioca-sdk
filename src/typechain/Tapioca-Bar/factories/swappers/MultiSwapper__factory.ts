/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MultiSwapper,
  MultiSwapperInterface,
} from "../../swappers/MultiSwapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "contract IPenrose",
        name: "_tapiocaBar",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_pairCodeHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenOutId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "dexData",
        type: "bytes",
      },
    ],
    name: "getInputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
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
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "dexData",
        type: "bytes",
      },
    ],
    name: "getOutputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
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
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenOutId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "dexData",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e080604052346200016d576060816200147f803803809162000023828562000172565b8339810103126200016d578051906001600160a01b039081831683036200016d576020810151908282168092036200016d5760049160406020920151946080526040519283809263de40657760e01b82525afa908115620001615760009162000119575b501660a05260c0526040516112d29081620001ad823960805181818160c601528181610416015281816104d401528181610667015281816106b10152610b00015260a0518181816092015281816103bc0152818161083d015281816108cf0152610aa6015260c05181818160e8015281816103f3015281816104a3015281816106350152818161068f0152610ade0152f35b6020813d821162000158575b81620001346020938362000172565b810103126200015457519082821682036200015157503862000087565b80fd5b5080fd5b3d915062000125565b6040513d6000823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b038211908210176200019657604052565b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001257600080fd5b60003560e01c8063532bb19214610a6557806355a68e101461032a5763c6fe95491461003d57600080fd5b346103125761005a61004e36610ba2565b81949293940190610c13565b6040519263442c159960e01b84526004840152602491828401526044906000828501526020926064926001600160a01b0385878681847f0000000000000000000000000000000000000000000000000000000000000000165afa96871561031e576000976102ea575b507f0000000000000000000000000000000000000000000000000000000000000000947f0000000000000000000000000000000000000000000000000000000000000000610115600287511015610cbe565b61011f8651610d0a565b968751996000199a8b81019081116102d55761013b908a610caa565b5286518a810190811161021057805b61016157896101588a610c9d565b51604051908152f35b8a81018181116102d557610191848a8861018886826101808886610caa565b511693610caa565b51169086610efb565b61019b848d610caa565b5191821561027c576101c283826101c793151580610273575b6101bd90611131565b611231565b6111ae565b91810390811161025e57906101de6101e492611212565b9061118e565b90600182019182811161025e57821061022557610201908b610caa565b528015610210578a018061014a565b86634e487b7160e01b60005260116004526000fd5b60405162461bcd60e51b8152600481018d90526014818b01527364732d6d6174682d6164642d6f766572666c6f7760601b818a01528690fd5b89634e487b7160e01b60005260116004526000fd5b508415156101b4565b505060405162461bcd60e51b8152600481018d9052602c818b01527f556e697377617056324c6962726172793a20494e53554646494349454e545f4f818a01526b155514155517d05353d5539560a21b81880152608490fd5b87634e487b7160e01b60005260116004526000fd5b9096508581813d8311610317575b6103028183610bd9565b81010312610312575195386100c3565b600080fd5b503d6102f8565b6040513d6000823e3d90fd5b346103125760c0366003190112610312576064356001600160a01b03811681036103125760a43567ffffffffffffffff811161031257610371610379913690600401610b74565b810190610c13565b604051906311a5cc7760e31b8252600435600483015230602483015230604483015260006064830152604435608483015260408260a48160006001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165af191821561031e57600092610a43575b5061043a7f000000000000000000000000000000000000000000000000000000000000000082847f0000000000000000000000000000000000000000000000000000000000000000610d4b565b928351806000198101116107d057610456906000190185610caa565b519260843584106109fe576001600160a01b0361047284610c9d565b51166001600160a01b0361048585610c9d565b5116908451600110156109e8576000928361052d61053b6104f883967f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b0360408d015116907f000000000000000000000000000000000000000000000000000000000000000061108f565b60405163a9059cbb60e01b602082019081526001600160a01b0390921660248201526044810195909552939182906064820190565b03601f198101835282610bd9565b51925af13d156109e1573d67ffffffffffffffff81116107a2576040519061056d601f8201601f191660200183610bd9565b81523d6000602083013e5b816109b2575b501561096d5760005b825160001981019081116107d057811015610801576001600160a01b036105ae8285610caa565b5116906001810181116107d0576001600160a01b036105d06001830186610caa565b5116916105dd8382610fc8565b50926001600160a01b036105f4600185018a610caa565b51941682036107f957600093915b8651806001198101116107d057600119018410156107e6576002840184116107d0576106d56001600160a01b039161068b7f00000000000000000000000000000000000000000000000000000000000000008461066260028a018d610caa565b5116867f000000000000000000000000000000000000000000000000000000000000000061108f565b935b7f0000000000000000000000000000000000000000000000000000000000000000917f000000000000000000000000000000000000000000000000000000000000000061108f565b16916040519182602081011067ffffffffffffffff6020850111176107a2576020830160405260008352833b156103125760405163022c0d9f60e01b8152600481019690965260248601919091526001600160a01b0316604485015260806064850152805160848501819052849160005b8281106107b85750509181600060a482868383819984010152601f801991011681010301925af1801561031e57610787575b6107829150610d3c565b610587565b67ffffffffffffffff82116107a25761078291604052610778565b634e487b7160e01b600052604160045260246000fd5b602082820181015160a4898401015287945001610746565b634e487b7160e01b600052601160045260246000fd5b6106d56001600160a01b0391309361068d565b600091610602565b50925080519060001982019182116107d0576001600160a01b039161082591610caa565b5160405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166004820152602481018490529160209183916044918391600091165af1801561031e5761093e575b506001600160a01b0360405192634d4d7cbd60e11b845260243560048501523060248501521660448301528060648301526000608483015260408260a48160006001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165af1801561031e5760409260009161090f575b5082519182526020820152f35b61092f9150833d8511610937575b6109278183610bd9565b81019061126e565b905083610902565b503d61091d565b61095f9060203d602011610966575b6109578183610bd9565b810190611284565b5082610885565b503d61094d565b60405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152606490fd5b80518015925082156109c7575b50508561057e565b6109da9250602080918301019101611284565b85806109bf565b6060610578565b634e487b7160e01b600052603260045260246000fd5b60405162461bcd60e51b815260206004820152601760248201527f696e73756666696369656e742d616d6f756e742d6f75740000000000000000006044820152606490fd5b610a5d91925060403d604011610937576109278183610bd9565b5090836103ed565b3461031257610a7661004e36610ba2565b906040519263442c159960e01b845260048401526024830152600060448301526020826064816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa90811561031e57600091610b3f575b610b2492507f0000000000000000000000000000000000000000000000000000000000000000917f0000000000000000000000000000000000000000000000000000000000000000610d4b565b80516000198101919082116107d05760209161015891610caa565b90506020823d8211610b6c575b81610b5960209383610bd9565b8101031261031257610b24915190610ad7565b3d9150610b4c565b9181601f840112156103125782359167ffffffffffffffff8311610312576020838186019501011161031257565b60606003198201126103125760043591602435916044359067ffffffffffffffff821161031257610bd591600401610b74565b9091565b90601f8019910116810190811067ffffffffffffffff8211176107a257604052565b67ffffffffffffffff81116107a25760051b60200190565b60209081818403126103125780359067ffffffffffffffff821161031257019180601f84011215610312578235610c4981610bfb565b93610c576040519586610bd9565b818552838086019260051b820101928311610312578301905b828210610c7e575050505090565b81356001600160a01b0381168103610312578152908301908301610c70565b8051156109e85760200190565b80518210156109e85760209160051b010190565b15610cc557565b60405162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f5041544800006044820152606490fd5b90610d1482610bfb565b610d216040519182610bd9565b8281528092610d32601f1991610bfb565b0190602036910137565b60001981146107d05760010190565b9392919091610d5e600283511015610cbe565b610d688251610d0a565b92610d7284610c9d565b5260005b825160001981019081116107d057811015610ed9576001600160a01b039081610d9f8286610caa565b511660018201928383116107d057610dc6918591610dbd8689610caa565b5116908a610efb565b610dd38388959395610caa565b518015610e8057610e02610dfb610e089287151580610e77575b610df690611131565b611212565b9283611231565b946111ae565b908101908181116107d0578110610e3b57610e29610e3091610e369561118e565b9187610caa565b52610d3c565b610d76565b60405162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b6044820152606490fd5b50841515610ded565b60405162461bcd60e51b815260206004820152602b60248201527f556e697377617056324c6962726172793a20494e53554646494349454e545f4960448201526a1394155517d05353d5539560aa1b6064820152608490fd5b5050509150565b51906dffffffffffffffffffffffffffff8216820361031257565b60608291610f2260049596610f108886610fc8565b50976001600160a01b0395869461108f565b1660405194858092630240bc6b60e21b82525afa92831561031e576000908194610f6d575b5081906dffffffffffffffffffffffffffff80911694169416911614600014610bd55791565b93506060843d8211610fc0575b81610f8760609383610bd9565b81010312610fbd57610f9884610ee0565b906040610fa760208701610ee0565b95015163ffffffff811603610fbd575081610f47565b80fd5b3d9150610f7a565b90916001600160a01b039182841683821681811461103c57101561103757925b91831615610ff257565b60405162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f4144445245535300006044820152606490fd5b610fe8565b60405162461bcd60e51b815260206004820152602560248201527f556e697377617056324c6962726172793a204944454e544943414c5f41444452604482015264455353455360d81b6064820152608490fd5b9161109991610fc8565b929060405160208101916bffffffffffffffffffffffff199586809260601b16845260601b16603482015260288152606081019267ffffffffffffffff95828510878611176107a25760e093856040528351902090608084019660ff60f81b885260601b166081840152609583015260b5820152605583520192818410908411176107a2576001600160a01b03926040525190201690565b1561113857565b60405162461bcd60e51b815260206004820152602860248201527f556e697377617056324c6962726172793a20494e53554646494349454e545f4c604482015267495155494449545960c01b6064820152608490fd5b8115611198570490565b634e487b7160e01b600052601260045260246000fd5b906103e891828102928184048114821517156107d0578304036111cd57565b60405162461bcd60e51b815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f770000000000000000000000006044820152606490fd5b906103e591828102928184048114821517156107d0578304036111cd57565b600092918015918215611248575b5050156111cd57565b808202945091508115828504821417156107d057611266908461118e565b14388061123f565b9190826040910312610312576020825192015190565b9081602091031261031257518015158103610312579056fea26469706673582212200beaf92971b6e3cefaa1f5057d910b00e6acf19a49661a36935a03265f77709664736f6c63430008120033";

type MultiSwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultiSwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultiSwapper__factory extends ContractFactory {
  constructor(...args: MultiSwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MultiSwapper";
  }

  override deploy(
    _factory: PromiseOrValue<string>,
    _tapiocaBar: PromiseOrValue<string>,
    _pairCodeHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MultiSwapper> {
    return super.deploy(
      _factory,
      _tapiocaBar,
      _pairCodeHash,
      overrides || {}
    ) as Promise<MultiSwapper>;
  }
  override getDeployTransaction(
    _factory: PromiseOrValue<string>,
    _tapiocaBar: PromiseOrValue<string>,
    _pairCodeHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _tapiocaBar,
      _pairCodeHash,
      overrides || {}
    );
  }
  override attach(address: string): MultiSwapper {
    return super.attach(address) as MultiSwapper;
  }
  override connect(signer: Signer): MultiSwapper__factory {
    return super.connect(signer) as MultiSwapper__factory;
  }
  static readonly contractName: "MultiSwapper";

  public readonly contractName: "MultiSwapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiSwapperInterface {
    return new utils.Interface(_abi) as MultiSwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiSwapper {
    return new Contract(address, _abi, signerOrProvider) as MultiSwapper;
  }
}
