/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  OracleChainlinkSingle,
  OracleChainlinkSingleInterface,
} from "../../../contracts/oracle/OracleChainlinkSingle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolChainlink",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_isChainlinkMultiplied",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_inBase",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "stalePeriod",
        type: "uint32",
      },
      {
        internalType: "address[]",
        name: "guardians",
        type: "address[]",
      },
      {
        internalType: "bytes32",
        name: "_description",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidChainlinkRate",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE",
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
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "GUARDIAN_ROLE_CHAINLINK",
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
    name: "chainlinkDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_stalePeriod",
        type: "uint32",
      },
    ],
    name: "changeStalePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "inBase",
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
    inputs: [],
    name: "isChainlinkMultiplied",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolChainlink",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "read",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "readAll",
    outputs: [
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
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "readLower",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
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
        name: "quoteAmount",
        type: "uint256",
      },
    ],
    name: "readQuote",
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
        internalType: "uint256",
        name: "quoteAmount",
        type: "uint256",
      },
    ],
    name: "readQuoteLower",
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
    inputs: [],
    name: "readUpper",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stalePeriod",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e0604090808252346200039f57620013fe8038038091620000228285620003ba565b833981019160c0828403126200039f576200003d82620003de565b906020916200004e838501620003f3565b948285015160608601519563ffffffff87168097036200039f5760808101516001600160401b0393908481116200039f57820181601f820112156200039f578051948511620003a4578460051b90875195620000ad8a840188620003ba565b865288808701928201019283116200039f5788809101915b83831062000384575050505060a001516001600160a01b039384169790919088156200035a578887989960805286519889809263313ce56760e01b825260049b8c915afa9081156200034f576000916200030f575b5060c052835115620002e65760005b84518110156200022b578562000140828762000402565b51161562000204578562000155828762000402565b5116600080516020620013de83398151915290816000526002808b5289600020826000528b5260ff8a600020541615620001b5575b5050506000198114620001a05760010162000129565b601189634e487b7160e01b6000525260246000fd5b826000528a5288600020816000528a5288600020600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d600080a43880806200018a565b865162461bcd60e51b8152808a0189905260016024820152600360fc1b6044820152606490fd5b5085935088876002600080516020620013de83398151915291826000525260018660002001818154975197817fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff600080a45563ffffffff19600354161760035560a052600055600155610fb090816200042e82396080518181816104f60152818161087901526109f6015260a051818181610548015281816108b70152610a4a015260c0518181816104af015281816106ac01526109b60152f35b855162461bcd60e51b8152808901889052600360248201526231303160e81b6044820152606490fd5b908882813d831162000347575b620003288183620003ba565b810103126200034457506200033d90620003f3565b386200011a565b80fd5b503d6200031c565b87513d6000823e3d90fd5b855162461bcd60e51b815260048101889052600360248201526231303560e81b6044820152606490fd5b81906200039184620003de565b8152019101908890620000c5565b600080fd5b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b03821190821017620003a457604052565b51906001600160a01b03821682036200039f57565b519060ff821682036200039f57565b8051821015620004175760209160051b010190565b634e487b7160e01b600052603260045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c9182630942d09a146108db575081631d1ff6751461089d578163210d5a2914610859578163240fd5ab1461076c578163248a9ca31461082e5781632f2ff15d1461078c5781633593ba7b1461076c57816336568abe1461071757816341f654f7146106ee578163442133bd146106d057816351e643731461069257816357de26a414610499578163630914d11461023c575080637284e4161461021e57806391d14854146101e557806392611e33146101c15780639aefb5c3146101a5578063a217fddf1461018b578063a5b36a3614610167578063d547741f146101315763ec342ad01461010c57600080fd5b3461012d578160031936011261012d5760209051670de0b6b3a76400008152f35b5080fd5b503461012d5760016101649161015f61014936610915565b9390928387526002602052862001543390610bdd565b610ede565b80f35b503461012d578160031936011261012d5760209063ffffffff600354169051908152f35b503461012d578160031936011261012d5751908152602090f35b503461012d578160031936011261012d57602091549051908152f35b503461012d578160031936011261012d576101de60209254610989565b9051908152f35b503461012d5760ff816020936101fa36610915565b908252600286526001600160a01b0383832091168252855220541690519015158152f35b503461012d578160031936011261012d576020906001549051908152f35b90503461049557602090816003193601126104915780359263ffffffff841680940361048d577f55435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a504180865260028452818620338752845260ff8287205416156102b157858563ffffffff19600354161760035580f35b856102bb33610dcf565b918351906102c882610b89565b6042825286820192606036853782511561047a57603084538251906001918210156104675790607860218501536041915b8183116103fc575050506103bb578361038b604888956103ad9561037c9560449a99519687936103538b86019b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8d528251928391603789019101610b66565b8401917001034b99036b4b9b9b4b733903937b6329607d1b603784015251809386840190610b66565b01036028810185520183610bbb565b5195869462461bcd60e51b865285015251809281602486015285850190610b66565b601f01601f19168101030190fd5b606485878087519262461bcd60e51b845283015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f81166010811015610454576f181899199a1a9b1b9c1cb0b131b232b360811b901a61042c8587610da8565b53881c928015610441576000190191906102f9565b634e487b7160e01b825260118952602482fd5b634e487b7160e01b835260328a52602483fd5b634e487b7160e01b815260328852602490fd5b634e487b7160e01b815260328752602490fd5b8480fd5b8380fd5b8280fd5b82843461067b578060031936011261067b5760ff7f00000000000000000000000000000000000000000000000000000000000000001692670de0b6b3a764000090835192633fabe5a360e21b845260a08483816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa801561068657819482958391849361062d575b5083871392831593610613575b505081156105e5575b506105d6577f000000000000000000000000000000000000000000000000000000000000000060ff166001036105985750509261058c6105866101de93602096610940565b91610f6c565b90610969565b51908152f35b90946105a390610f6c565b808302928304036105c3575060209350906105bd91610969565b90610592565b634e487b7160e01b815260118552602490fd5b50835163ae19356360e01b8152fd5b905042034281116106005763ffffffff600354161087610541565b506011602492634e487b7160e01b835252fd5b69ffffffffffffffffffff90811691161191508880610538565b965050505060a0843d821161067e575b8161064a60a09383610bbb565b8101031261067b5761065b84610f55565b602085015190610672608060608801519701610f55565b9195908961052b565b80fd5b3d915061063d565b508451903d90823e3d90fd5b50503461012d578160031936011261012d576020905160ff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50503461012d578160031936011261012d576101de60209254610989565b82843461067b578060031936011261067b5761070a9054610989565b8151908082526020820152f35b8391503461012d5761072836610915565b91336001600160a01b0384160361074457509061016491610ede565b606490602086519162461bcd60e51b83528201526002602482015261373160f01b6044820152fd5b82843461067b57602036600319011261067b57506101de60209235610989565b50503461012d5761079c36610915565b909182845260026020526107b7600182862001543390610bdd565b82845260026020526001600160a01b0381852092169182855260205260ff8185205416156107e3578380f35b82845260026020528084208285526020528320600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8480a43880808380f35b9050346104955760203660031901126104955781602093600192358152600285522001549051908152f35b50503461012d578160031936011261012d57602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b50503461012d578160031936011261012d576020905160ff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b84903461012d578160031936011261012d57807f55435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a504160209252f35b604090600319011261093b57600435906024356001600160a01b038116810361093b5790565b600080fd5b8181029291811591840414171561095357565b634e487b7160e01b600052601160045260246000fd5b8115610973570490565b634e487b7160e01b600052601260045260246000fd5b670de0b6b3a764000090818102918183041490151715610953576109b1600091825490610969565b9060ff7f000000000000000000000000000000000000000000000000000000000000000016918060405192633fabe5a360e21b845260a0846004816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa908115610b5a578094819582918394610b02575b5082871393841594610ae8575b50508215610ab6575b5050610aa4577f000000000000000000000000000000000000000000000000000000000000000060ff16600103610a885750610586610a85939261058c92610940565b90565b610a9f9150610a99610a8594610f6c565b90610940565b610969565b60405163ae19356360e01b8152600490fd5b4290810392508211610ad4575063ffffffff60035416103880610a42565b634e487b7160e01b81526011600452602490fd5b69ffffffffffffffffffff90811691161192503880610a39565b96505050905060a0843d8211610b52575b81610b2060a09383610bbb565b8101031261067b57610b3184610f55565b90602085015191610b49608060608801519701610f55565b92959038610a2c565b3d9150610b13565b604051903d90823e3d90fd5b60005b838110610b795750506000910152565b8181015183820152602001610b69565b6080810190811067ffffffffffffffff821117610ba557604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610ba557604052565b600090808252602090600282526040936001600160a01b03858520911690818552835260ff858520541615610c13575050505050565b610c1c90610dcf565b90845190610c2982610b89565b60428252838201946060368737825115610d945760308653825190600191821015610d945790607860218501536041915b818311610d2657505050610ce45784610cc060486103ad936044979851988991610cb18984019876020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8a52610353815180928d603789019101610b66565b01036028810189520187610bbb565b5194859362461bcd60e51b8552600485015251809281602486015285850190610b66565b60648386519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f81166010811015610d80576f181899199a1a9b1b9c1cb0b131b232b360811b901a610d568587610da8565b5360041c928015610d6c57600019019190610c5a565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b908151811015610db9570160200190565b634e487b7160e01b600052603260045260246000fd5b604051906060820182811067ffffffffffffffff821117610ba557604052602a8252602082016040368237825115610db957603090538151600190811015610db957607860218401536029905b808211610e70575050610e2c5790565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f81166010811015610ec9576f181899199a1a9b1b9c1cb0b131b232b360811b901a610e9f8486610da8565b5360041c918015610eb4576000190190610e1c565b60246000634e487b7160e01b81526011600452fd5b60246000634e487b7160e01b81526032600452fd5b9060009180835260026020526001600160a01b036040842092169182845260205260ff604084205416610f1057505050565b8083526002602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4565b519069ffffffffffffffffffff8216820361093b57565b604d811161095357600a0a9056fea2646970667358221220101255af690a710ba9ce7bb19e5eb86950bcd3f53080812e38ba7aaf5e411dbe64736f6c6343000812003355435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a5041";

type OracleChainlinkSingleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleChainlinkSingleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleChainlinkSingle__factory extends ContractFactory {
  constructor(...args: OracleChainlinkSingleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "OracleChainlinkSingle";
  }

  override deploy(
    _poolChainlink: PromiseOrValue<string>,
    _isChainlinkMultiplied: PromiseOrValue<BigNumberish>,
    _inBase: PromiseOrValue<BigNumberish>,
    stalePeriod: PromiseOrValue<BigNumberish>,
    guardians: PromiseOrValue<string>[],
    _description: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OracleChainlinkSingle> {
    return super.deploy(
      _poolChainlink,
      _isChainlinkMultiplied,
      _inBase,
      stalePeriod,
      guardians,
      _description,
      overrides || {}
    ) as Promise<OracleChainlinkSingle>;
  }
  override getDeployTransaction(
    _poolChainlink: PromiseOrValue<string>,
    _isChainlinkMultiplied: PromiseOrValue<BigNumberish>,
    _inBase: PromiseOrValue<BigNumberish>,
    stalePeriod: PromiseOrValue<BigNumberish>,
    guardians: PromiseOrValue<string>[],
    _description: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _poolChainlink,
      _isChainlinkMultiplied,
      _inBase,
      stalePeriod,
      guardians,
      _description,
      overrides || {}
    );
  }
  override attach(address: string): OracleChainlinkSingle {
    return super.attach(address) as OracleChainlinkSingle;
  }
  override connect(signer: Signer): OracleChainlinkSingle__factory {
    return super.connect(signer) as OracleChainlinkSingle__factory;
  }
  static readonly contractName: "OracleChainlinkSingle";

  public readonly contractName: "OracleChainlinkSingle";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleChainlinkSingleInterface {
    return new utils.Interface(_abi) as OracleChainlinkSingleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleChainlinkSingle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OracleChainlinkSingle;
  }
}