/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TapiocaOmnichainExtExec,
  TapiocaOmnichainExtExecInterface,
} from "../../../../tapioca-periph/tapiocaOmnichainEngine/extension/TapiocaOmnichainExtExec";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
    ],
    name: "InvalidApprovalTarget",
    type: "error",
  },
  {
    inputs: [],
    name: "CLUSTER_SLOT",
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
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "erc20PermitApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "erc721PermitApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "marketPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_srcChainSender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "pearlmitApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "yieldBoxPermitAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "yieldBoxPermitAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061202f806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a56263ff1161005b578063a56263ff146100bd578063a6ff8766146100d0578063c458a255146100e3578063d5572e251461011c57600080fd5b806342a212cb1461008257806370b3cb90146100975780638f6c7c62146100aa575b600080fd5b61009561009036600461181f565b61012f565b005b6100956100a536600461181f565b6102e2565b6100956100b836600461181f565b61033a565b6100956100cb36600461187e565b6104ff565b6100956100de36600461181f565b6105c5565b61010a7f7cdf5007585d1c7d3dfb23c59fcda5f9f02da78637d692495255a57630b7216281565b60405190815260200160405180910390f35b61009561012a36600461181f565b6105ff565b600061013a82610636565b805190915060005b818110156102dc5782818151811061015c5761015c6118ce565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff16637ac2ff7b848381518110610195576101956118ce565b6020026020010151602001518584815181106101b3576101b36118ce565b6020026020010151604001518685815181106101d1576101d16118ce565b6020026020010151606001518786815181106101ef576101ef6118ce565b60200260200101516080015188878151811061020d5761020d6118ce565b602002602001015160a0015189888151811061022b5761022b6118ce565b602090810291909101015160c001516040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff90961660048701526024860194909452604485019290925260ff166064840152608483015260a482015260c401600060405180830381600087803b1580156102c257600080fd5b505af19250505080156102d3575060015b50600101610142565b50505050565b60006102ed82610652565b805190915060005b8181101561032b57610323838281518110610312576103126118ce565b60200260200101516000015161076f565b6001016102f5565b5061033582610881565b505050565b600061034582610c07565b805190915060005b818110156102dc57828181518110610367576103676118ce565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1663d505accf8483815181106103a0576103a06118ce565b6020026020010151602001518584815181106103be576103be6118ce565b6020026020010151604001518685815181106103dc576103dc6118ce565b6020026020010151606001518786815181106103fa576103fa6118ce565b602002602001015160800151888781518110610418576104186118ce565b602002602001015160a00151898881518110610436576104366118ce565b602002602001015160c001518a8981518110610454576104546118ce565b602002602001015160e001516040518863ffffffff1660e01b81526004016104cb979695949392919073ffffffffffffffffffffffffffffffffffffffff97881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b600060405180830381600087803b1580156104e557600080fd5b505af19250505080156104f6575060015b5060010161034d565b60008061050b83610c1d565b73ffffffffffffffffffffffffffffffffffffffff868116602083810182905260408051808301939093528051808403830181528382019182905280519201919091207f543549fe0000000000000000000000000000000000000000000000000000000090915293955091935084169163543549fe9161058f91859160440161196b565b600060405180830381600087803b1580156105a957600080fd5b505af19250505080156105ba575060015b156102dc5750505050565b60006105d082610c71565b90506105df816000015161076f565b8060e00151156105f6576105f281610e65565b5050565b6105f281610f26565b600061060a82610fbf565b9050610619816000015161076f565b8061010001511561062d576105f2816111c8565b6105f28161126e565b60608180602001905181019061064c9190611b18565b92915050565b6060600060be83516106649190611c17565b905060008167ffffffffffffffff81111561068157610681611695565b60405190808252806020026020018201604052801561071657816020015b604080516101208101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c0820181905260e0820181905261010082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90920191018161069f5790505b5090506000805b8381101561076557610739610734878460be611314565b610fbf565b83828151811061074b5761074b6118ce565b602090810291909101015260be919091019060010161071d565b5090949350505050565b60007f7cdf5007585d1c7d3dfb23c59fcda5f9f02da78637d692495255a57630b72162546040517fe67e99080000000000000000000000000000000000000000000000000000000081526000600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301529091169150819063e67e990890604401602060405180830381865afa15801561080a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082e9190611c52565b6105f2576040517f896e69c000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024015b60405180910390fd5b805160005b81811015610335578281815181106108a0576108a06118ce565b60200260200101516101000151610a5c578281815181106108c3576108c36118ce565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff166372dcad7b8483815181106108fc576108fc6118ce565b60200260200101516020015185848151811061091a5761091a6118ce565b602002602001015160400151868581518110610938576109386118ce565b602002602001015160600151878681518110610956576109566118ce565b602002602001015160800151888781518110610974576109746118ce565b602002602001015160a00151898881518110610992576109926118ce565b602002602001015160c001518a89815181106109b0576109b06118ce565b602002602001015160e001516040518863ffffffff1660e01b8152600401610a27979695949392919073ffffffffffffffffffffffffffffffffffffffff97881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b600060405180830381600087803b158015610a4157600080fd5b505af1925050508015610a52575060015b15610bff57610bff565b828181518110610a6e57610a6e6118ce565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1663d505accf848381518110610aa757610aa76118ce565b602002602001015160200151858481518110610ac557610ac56118ce565b602002602001015160400151868581518110610ae357610ae36118ce565b602002602001015160600151878681518110610b0157610b016118ce565b602002602001015160800151888781518110610b1f57610b1f6118ce565b602002602001015160a00151898881518110610b3d57610b3d6118ce565b602002602001015160c001518a8981518110610b5b57610b5b6118ce565b602002602001015160e001516040518863ffffffff1660e01b8152600401610bd2979695949392919073ffffffffffffffffffffffffffffffffffffffff97881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b600060405180830381600087803b158015610bec57600080fd5b505af1925050508015610bfd575060015b505b600101610886565b60608180602001905181019061064c9190611c7b565b6040805160e0810182526060808252600060208301819052928201839052808201839052608082015260a0810182905260c0810182905282806020019051810190610c689190611ed1565b91509150915091565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091526040805160e081018252601480825260286020830152603c92820192909252605c6060820152605d6080820152607d60a0820152609d60c082015290600090610d0990610d029086908490611314565b600061148e565b90506000610d23610d0286856000015160ff166014611314565b90506000610d3d610d0287866020015160ff166014611314565b90506000610d5e610d5788876040015160ff166020611314565b600061151e565b90506000610d7f610d7889886060015160ff166001611314565b600061159e565b90506000610da0610d998a896080015160ff166020611314565b600061161e565b90506000610dba610d998b8a60a0015160ff166020611314565b905060008a8960c0015160ff1681518110610dd757610dd76118ce565b01602090810151604080516101008101825273ffffffffffffffffffffffffffffffffffffffff9b8c168152998b16928a01929092529690981697870197909752606086019390935260ff909116608085015260a084015260c08301527fff0000000000000000000000000000000000000000000000000000000000000016151560e0820152949350505050565b805160208201516040808401516060850151608086015160a087015160c088015194517faba0784700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff96871660048201529386166024850152604484019290925260ff166064830152608482015260a481019190915291169063aba078479060c4015b600060405180830381600087803b158015610f1457600080fd5b505af19250505080156105f257505b50565b805160208201516040808401516060850151608086015160a087015160c088015194517f65e2b81f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff96871660048201529386166024850152604484019290925260ff166064830152608482015260a48101919091529116906365e2b81f9060c401610efa565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091526040805161010081018252601480825260286020830152603c92820192909252605c6060820152607c6080820152607d60a0820152609d60c082015260bd60e08201529060009061106090610d029086908490611314565b9050600061107a610d0286856000015160ff166014611314565b90506000611094610d0287866020015160ff166014611314565b905060006110ae610d5788876040015160ff166020611314565b905060006110c8610d5789886060015160ff166020611314565b905060006110e2610d788a896080015160ff166001611314565b905060006110fc610d998b8a60a0015160ff166020611314565b90506000611116610d998c8b60c0015160ff166020611314565b905060008b8a60e0015160ff1681518110611133576111336118ce565b01602090810151604080516101208101825273ffffffffffffffffffffffffffffffffffffffff9c8d1681529a8c16928b019290925297909916988801989098526060870194909452608086019290925260ff1660a085015260c084015260e08301527fff00000000000000000000000000000000000000000000000000000000000000161515610100820152949350505050565b805160208201516040808401516060850151608086015160a087015160c088015160e089015195517fd505accf00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff978816600482015294871660248601526044850193909352606484019190915260ff16608483015260a482015260c481019190915291169063d505accf9060e401610efa565b805160208201516040808401516060850151608086015160a087015160c088015160e089015195517f1da8bf1000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff978816600482015294871660248601526044850193909352606484019190915260ff16608483015260a482015260c4810191909152911690631da8bf109060e401610efa565b60608161132281601f611fbf565b101561138a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f770000000000000000000000000000000000006044820152606401610878565b6113948284611fbf565b845110156113fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e64730000000000000000000000000000006044820152606401610878565b60608215801561141d5760405191506000825260208201604052611485565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561145657805183526020928301920161143e565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b600061149b826014611fbf565b83511015611505576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f746f416464726573735f6f75744f66426f756e647300000000000000000000006044820152606401610878565b5001602001516c01000000000000000000000000900490565b600061152b826020611fbf565b83511015611595576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f746f55696e743235365f6f75744f66426f756e647300000000000000000000006044820152606401610878565b50016020015190565b60006115ab826001611fbf565b83511015611615576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f746f55696e74385f6f75744f66426f756e6473000000000000000000000000006044820152606401610878565b50016001015190565b600061162b826020611fbf565b83511015611595576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f746f427974657333325f6f75744f66426f756e647300000000000000000000006044820152606401610878565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff811182821017156116e7576116e7611695565b60405290565b604051610100810167ffffffffffffffff811182821017156116e7576116e7611695565b60405160a0810167ffffffffffffffff811182821017156116e7576116e7611695565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561177b5761177b611695565b604052919050565b600067ffffffffffffffff82111561179d5761179d611695565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126117da57600080fd5b81356117ed6117e882611783565b611734565b81815284602083860101111561180257600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561183157600080fd5b813567ffffffffffffffff81111561184857600080fd5b611854848285016117c9565b949350505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610f2357600080fd5b6000806040838503121561189157600080fd5b823561189c8161185c565b9150602083013567ffffffffffffffff8111156118b857600080fd5b6118c4858286016117c9565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60005b83811015611918578181015183820152602001611900565b50506000910152565b600081518084526119398160208601602086016118fd565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6040808252835160e083830152805161012084018190526000929160209190820190610140860190855b81811015611a10578351805160ff1684528581015173ffffffffffffffffffffffffffffffffffffffff90811687860152878201518886015260608083015178ffffffffffffffffffffffffffffffffffffffffffffffffff169086015260809182015116908401529284019260a090920191600101611995565b50508783015173ffffffffffffffffffffffffffffffffffffffff81166060880152935060408801516080870152606088015165ffffffffffff811660a08801529350608088015193507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08682030160c0870152611a8e8185611921565b9350505060a0860151611ab960e086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c0959095015161010084015293909101919091525090565b600067ffffffffffffffff821115611aed57611aed611695565b5060051b60200190565b8051611b028161185c565b919050565b805160ff81168114611b0257600080fd5b60006020808385031215611b2b57600080fd5b825167ffffffffffffffff811115611b4257600080fd5b8301601f81018513611b5357600080fd5b8051611b616117e882611ad3565b81815260e09182028301840191848201919088841115611b8057600080fd5b938501935b83851015611c0b5780858a031215611b9d5760008081fd5b611ba56116c4565b8551611bb08161185c565b815285870151611bbf8161185c565b8188015260408681015190820152606080870151908201526080611be4818801611b07565b9082015260a0868101519082015260c0808701519082015283529384019391850191611b85565b50979650505050505050565b600082611c4d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600060208284031215611c6457600080fd5b81518015158114611c7457600080fd5b9392505050565b60006020808385031215611c8e57600080fd5b825167ffffffffffffffff811115611ca557600080fd5b8301601f81018513611cb657600080fd5b8051611cc46117e882611ad3565b81815260089190911b82018301908381019087831115611ce357600080fd5b928401925b82841015611d82576101008489031215611d025760008081fd5b611d0a6116ed565b8451611d158161185c565b8152611d22858701611af7565b868201526040611d33818701611af7565b90820152606085810151908201526080808601519082015260a0611d58818701611b07565b9082015260c0858101519082015260e0808601519082015282526101009093019290840190611ce8565b979650505050505050565b600082601f830112611d9e57600080fd5b81516020611dae6117e883611ad3565b82815260a09283028501820192828201919087851115611dcd57600080fd5b8387015b85811015611e695781818a031215611de95760008081fd5b611df1611711565b611dfa82611b07565b815285820151611e098161185c565b818701526040828101519082015260608083015178ffffffffffffffffffffffffffffffffffffffffffffffffff81168114611e455760008081fd5b90820152608082810151611e588161185c565b908201528452928401928101611dd1565b5090979650505050505050565b805165ffffffffffff81168114611b0257600080fd5b600082601f830112611e9d57600080fd5b8151611eab6117e882611783565b818152846020838601011115611ec057600080fd5b6118548260208301602087016118fd565b60008060408385031215611ee457600080fd5b8251611eef8161185c565b602084015190925067ffffffffffffffff80821115611f0d57600080fd5b9084019060e08287031215611f2157600080fd5b611f296116c4565b825182811115611f3857600080fd5b611f4488828601611d8d565b825250611f5360208401611af7565b602082015260408301516040820152611f6e60608401611e76565b6060820152608083015182811115611f8557600080fd5b611f9188828601611e8c565b608083015250611fa360a08401611af7565b60a082015260c083015160c08201528093505050509250929050565b8082018082111561064c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212202571d1329d5938441cf2411ece76e982f6123353b1fdc779c864e1d3779bace064736f6c63430008160033";

type TapiocaOmnichainExtExecConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TapiocaOmnichainExtExecConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TapiocaOmnichainExtExec__factory extends ContractFactory {
  constructor(...args: TapiocaOmnichainExtExecConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TapiocaOmnichainExtExec";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TapiocaOmnichainExtExec> {
    return super.deploy(overrides || {}) as Promise<TapiocaOmnichainExtExec>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TapiocaOmnichainExtExec {
    return super.attach(address) as TapiocaOmnichainExtExec;
  }
  override connect(signer: Signer): TapiocaOmnichainExtExec__factory {
    return super.connect(signer) as TapiocaOmnichainExtExec__factory;
  }
  static readonly contractName: "TapiocaOmnichainExtExec";

  public readonly contractName: "TapiocaOmnichainExtExec";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TapiocaOmnichainExtExecInterface {
    return new utils.Interface(_abi) as TapiocaOmnichainExtExecInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TapiocaOmnichainExtExec {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TapiocaOmnichainExtExec;
  }
}
