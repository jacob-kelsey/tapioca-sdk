/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Vesting,
  VestingInterface,
} from "../../../contracts/tokens/Vesting";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cliff",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceTooLow",
    type: "error",
  },
  {
    inputs: [],
    name: "Initialized",
    type: "error",
  },
  {
    inputs: [],
    name: "NoTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnough",
    type: "error",
  },
  {
    inputs: [],
    name: "NotStarted",
    type: "error",
  },
  {
    inputs: [],
    name: "NothingToClaim",
    type: "error",
  },
  {
    inputs: [],
    name: "Overflow",
    type: "error",
  },
  {
    inputs: [],
    name: "VestingDurationNotValid",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "UserRegistered",
    type: "event",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "claimable",
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
    name: "claimable",
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
    name: "cliff",
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
        name: "_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "computeTimeFromAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "duration",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_seededAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initialUnlock",
        type: "uint256",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "registerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_users",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "registerUsers",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "seeded",
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
    name: "start",
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
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalClaimed",
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
    name: "totalRegisteredAmount",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "latestClaimTimestamp",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "revoked",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "vested",
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
    name: "vested",
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
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620018a9380380620018a98339810160408190526200003491620000d4565b6200003f3362000084565b60018055600082900362000066576040516301d6ee2f60e71b815260040160405180910390fd5b608083905260a08290526200007b8162000084565b5050506200011c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600060608486031215620000ea57600080fd5b83516020850151604086015191945092506001600160a01b03811681146200011157600080fd5b809150509250925092565b60805160a051611752620001576000396000818161017601528181610b3c0152610e9d0152600081816101b00152610e7b01526117526000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c8063a4a2a9f6116100cd578063e37f0bae11610081578063fa0b5e5511610066578063fa0b5e551461031a578063fc0c546a1461032d578063fea5657c1461034d57600080fd5b8063e37f0bae146102fe578063f2fde38b1461030757600080fd5b8063af38d757116100b2578063af38d757146102e5578063be9a6555146102ed578063d54ad2a1146102f657600080fd5b8063a4a2a9f614610278578063a87430ba1461028b57600080fd5b80637102b7281161012457806384cba6da1161010957806384cba6da146102135780638da5cb5b146102265780639ae42fc11461026557600080fd5b80637102b728146101f8578063715018a61461020b57600080fd5b8063334041a611610155578063334041a6146101d2578063402914f5146101db5780634e71d92d146101ee57600080fd5b80630fb5a6b41461017157806313d033c0146101ab575b600080fd5b6101987f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6101987f000000000000000000000000000000000000000000000000000000000000000081565b61019860045481565b6101986101e936600461140b565b610355565b6101f661039a565b005b61019861020636600461140b565b6104d6565b6101f6610505565b6101f661022136600461147b565b610517565b60005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a2565b6101986102733660046114e7565b610904565b6101f6610286366004611519565b61091d565b6102c361029936600461140b565b60076020526000908152604090208054600182015460028301546003909301549192909160ff1684565b60408051948552602085019390935291830152151560608201526080016101a2565b610198610b6b565b61019860035481565b600854610198565b61019860055481565b6101f661031536600461140b565b610b8a565b6101f661032836600461154e565b610c41565b6002546102409073ffffffffffffffffffffffffffffffffffffffff1681565b610198610e6a565b73ffffffffffffffffffffffffffffffffffffffff811660009081526007602052604081206001810154905461038a90610e73565b61039491906115a9565b92915050565b6103a2610f43565b6003546000036103de576040517f6f312cbd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006103e933610355565b905080600003610425576040517f969bf72800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806008600082825461043791906115bc565b9091555050336000908152600760205260408120600101805483929061045e9084906115bc565b9091555050336000818152600760205260409020426002918201555461049d9173ffffffffffffffffffffffffffffffffffffffff9091169083610fb6565b604051819033907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a90600090a3506104d460018055565b565b73ffffffffffffffffffffffffffffffffffffffff811660009081526007602052604081205461039490610e73565b61050d611048565b6104d460006110c9565b61051f611048565b60035415610559576040517f5daa87a000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8281146105c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4c656e67746873206e6f7420657175616c00000000000000000000000000000060448201526064015b60405180910390fd5b6005546040805160808101825260008082526020820181905291810182905260608101829052829186905b818110156108bd57600089898381811061060e5761060e6115cf565b9050602002016020810190610623919061140b565b73ffffffffffffffffffffffffffffffffffffffff1603610670576040517fd23f952100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868682818110610682576106826115cf565b905060200201356000036106c2576040517fc915eb6400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600760008b8b858181106106da576106da6115cf565b90506020020160208101906106ef919061140b565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054111561074e576040517f3a81d6fc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868682818110610760576107606115cf565b602002919091013584525082600760008b8b85818110610782576107826115cf565b9050602002016020810190610797919061140b565b73ffffffffffffffffffffffffffffffffffffffff1681526020808201929092526040908101600020835181559183015160018301558201516002820155606090910151600390910180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905586868281811061081f5761081f6115cf565b90506020020135898983818110610838576108386115cf565b905060200201602081019061084d919061140b565b73ffffffffffffffffffffffffffffffffffffffff167fe29d35093005f4d575e1003753426b57a7f64378ba73332eef9c6ccc2b8decd660405160405180910390a38686828181106108a1576108a16115cf565b90506020020135856108b391906115bc565b94506001016105f2565b50838311156108f8576040517f35278d1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505060055550505050565b60006109128585858561113e565b90505b949350505050565b610925611048565b6003541561095f576040517f5daa87a000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81600003610999576040517fdf95788300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8160055411156109d5576040517fd0b32bf400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85169081179091556040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600091906370a0823190602401602060405180830381865afa158015610a6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9291906115fe565b905082811015610ace576040517fa328167200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600483905542600355612710821115610b13576040517fc915eb6400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8115610b65576000612710610b288486611617565b610b32919061162e565b9050610b604285837f000000000000000000000000000000000000000000000000000000000000000061113e565b600655505b50505050565b6000600854610b7b600454610e73565b610b8591906115a9565b905090565b610b92611048565b73ffffffffffffffffffffffffffffffffffffffff8116610c35576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016105be565b610c3e816110c9565b50565b610c49611048565b60035415610c83576040517f5daa87a000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cd0576040517fd23f952100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003610d0a576040517fc915eb6400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526007602052604090205415610d67576040517f3a81d6fc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d9460405180608001604052806000815260200160008152602001600081526020016000151581525090565b81815273ffffffffffffffffffffffffffffffffffffffff831660009081526007602090815260408083208451815591840151600183015583015160028201556060830151600390910180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905560058054849290610e1d9084906115bc565b9091555050604051829073ffffffffffffffffffffffffffffffffffffffff8516907fe29d35093005f4d575e1003753426b57a7f64378ba73332eef9c6ccc2b8decd690600090a3505050565b6000610b856004545b6003546000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000818403610ece57506000949350505050565b8215610ef357610ede83836115bc565b915081421015610ef357506000949350505050565b610efd81836115bc565b4210610f0c5750929392505050565b600654610f1990836115a9565b915080610f2683426115a9565b610f309087611617565b610f3a919061162e565b95945050505050565b600260015403610faf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105be565b6002600155565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052611043908490611169565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105be565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008361114b8385611617565b611155919061162e565b61115f90866115a9565b61091290866115a9565b60006111cb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166112789092919063ffffffff16565b90508051600014806111ec5750808060200190518101906111ec9190611669565b611043576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105be565b60606109158484600085856000808673ffffffffffffffffffffffffffffffffffffffff1685876040516112ac91906116af565b60006040518083038185875af1925050503d80600081146112e9576040519150601f19603f3d011682016040523d82523d6000602084013e6112ee565b606091505b50915091506112ff8783838761130a565b979650505050505050565b606083156113a05782516000036113995773ffffffffffffffffffffffffffffffffffffffff85163b611399576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105be565b5081610915565b61091583838151156113b55781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105be91906116cb565b73ffffffffffffffffffffffffffffffffffffffff81168114610c3e57600080fd5b60006020828403121561141d57600080fd5b8135611428816113e9565b9392505050565b60008083601f84011261144157600080fd5b50813567ffffffffffffffff81111561145957600080fd5b6020830191508360208260051b850101111561147457600080fd5b9250929050565b6000806000806040858703121561149157600080fd5b843567ffffffffffffffff808211156114a957600080fd5b6114b58883890161142f565b909650945060208701359150808211156114ce57600080fd5b506114db8782880161142f565b95989497509550505050565b600080600080608085870312156114fd57600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561152e57600080fd5b8335611539816113e9565b95602085013595506040909401359392505050565b6000806040838503121561156157600080fd5b823561156c816113e9565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156103945761039461157a565b808201808211156103945761039461157a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561161057600080fd5b5051919050565b80820281158282048414176103945761039461157a565b600082611664577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60006020828403121561167b57600080fd5b8151801515811461142857600080fd5b60005b838110156116a657818101518382015260200161168e565b50506000910152565b600082516116c181846020870161168b565b9190910192915050565b60208152600082518060208401526116ea81604085016020870161168b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220aa250435ab88f346c8c52952de0e1c9c2e80d27dbe2e3d073834ffb8b938421764736f6c63430008160033";

type VestingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VestingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vesting__factory extends ContractFactory {
  constructor(...args: VestingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Vesting";
  }

  override deploy(
    _cliff: PromiseOrValue<BigNumberish>,
    _duration: PromiseOrValue<BigNumberish>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Vesting> {
    return super.deploy(
      _cliff,
      _duration,
      _owner,
      overrides || {}
    ) as Promise<Vesting>;
  }
  override getDeployTransaction(
    _cliff: PromiseOrValue<BigNumberish>,
    _duration: PromiseOrValue<BigNumberish>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _cliff,
      _duration,
      _owner,
      overrides || {}
    );
  }
  override attach(address: string): Vesting {
    return super.attach(address) as Vesting;
  }
  override connect(signer: Signer): Vesting__factory {
    return super.connect(signer) as Vesting__factory;
  }
  static readonly contractName: "Vesting";

  public readonly contractName: "Vesting";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VestingInterface {
    return new utils.Interface(_abi) as VestingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Vesting {
    return new Contract(address, _abi, signerOrProvider) as Vesting;
  }
}