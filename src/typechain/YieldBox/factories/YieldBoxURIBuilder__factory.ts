/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  YieldBoxURIBuilder,
  YieldBoxURIBuilderInterface,
} from "../YieldBoxURIBuilder";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "contract IStrategy",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct Asset",
        name: "asset",
        type: "tuple",
      },
      {
        internalType: "uint8",
        name: "nativeDecimals",
        type: "uint8",
      },
    ],
    name: "decimals",
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
        components: [
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "contract IStrategy",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct Asset",
        name: "asset",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "nativeName",
        type: "string",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "contract IStrategy",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct Asset",
        name: "asset",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "nativeSymbol",
        type: "string",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "contract IStrategy",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct Asset",
        name: "asset",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct NativeToken",
        name: "nativeToken",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576114c8908161001c8239f35b600080fdfe604060808152600436101561001357600080fd5b6000803560e01c9182635c6d84351461005c57505080636d7cd0371461005757806384b1017d146100525763aa1163b91461004d57600080fd5b6106da565b6106b4565b610625565b346105925760e03660031901126105925761007636610596565b9160843567ffffffffffffffff8111610592576100979036906004016105ac565b9260c4356100a4816105ba565b6100ac6111f7565b9460036100b884610721565b6100c181610701565b036104c657506100cf6112ad565b85526101376101526100fd6100f86100ec6100ec602088016106f4565b6001600160a01b031690565b610f5e565b61014461010d6060870135610d77565b6101318951958694610131602087016008906722a92198989a9a9d60c11b81520190565b9061083c565b602f60f81b815260010190565b03601f198101835282610765565b602086015261015f6112ad565b848601525b61016d82610721565b61017681610701565b1561042457506101d06101dd6101976100f86100ec6100ec602087016106f4565b6101448651938492610131602085016011907f2c22746f6b656e41646472657373223a2200000000000000000000000000000081520190565b601160f91b815260010190565b602085015192848601519560036101f385610721565b6101fc81610701565b0361041657610209610aff565b935b600361021682610721565b61021f81610701565b036104035761022c610aff565b905b60036102476100f86100ec6100ec6100ec8d87016106f4565b93519461025383610721565b9061025d82610701565b50036103f4576102986102766060610144930135610d77565b89516a16113a37b5b2b724b2111d60a91b6020820152928391602b8301610131565b945b8751683d913730b6b2911d1160b91b6020820152988997602989016102be9161083c565b6b11161139bcb6b137b6111d1160a11b8152600c016102dc9161083c565b601160f91b81526001016102ef9161083c565b6102f89161083c565b7f2c2270726f70657274696573223a7b227374726174656779223a2200000000008152601b016103279161083c565b7f222c22746f6b656e54797065223a2200000000000000000000000000000000008152600f016103569161083c565b601160f91b81526001016103699161083c565b6103729161083c565b617d7d60f01b81526002010391601f199283810182526103929082610765565b61039b906113a9565b81517f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000602082015292908390603d82016103d49161083c565b0390810183526103e49083610765565b516103f08192826105ee565b0390f35b506103fd610aff565b9461029a565b6104106060830151610d77565b9061022e565b61041e611311565b9361020b565b6104b1610488916001600160a01b0361043e60a435610d77565b91166104b65761014461044f6112f1565b610131885195869461013160208701600f907f2c22746f74616c537570706c79223a000000000000000000000000000000000081520190565b7f2c226669786564537570706c79223a00000000000000000000000000000000008152600f0190565b6101dd565b6101446104c16112d0565b61044f565b60016104d484979397610721565b6104dd81610701565b0361053a5750506104f36100ec602083016106f4565b60ff6104fe82610b72565b9161051161050b826110fe565b91611188565b9061051a610787565b9361052361128c565b855260208501528684015216606082015293610164565b610582856105889261054d98949861122d565b895261056361055c828061124f565b3691610853565b60208a015261057861055c602083018361124f565b828a015201611282565b60ff1690565b6060860152610164565b5080fd5b60809060031901126105a757600490565b600080fd5b908160809103126105a75790565b6001600160a01b038116036105a757565b60005b8381106105de5750506000910152565b81810151838201526020016105ce565b6040916020825261060e81518092816020860152602086860191016105cb565b601f01601f1916010190565b60ff8116036105a757565b346105a75760a03660031901126105a757602061065661064436610596565b608435906106518261061a565b611129565b60ff60405191168152f35b600319810160a081126105a7576080136105a75760049160843567ffffffffffffffff928382116105a757806023830112156105a757818501359384116105a757602484830101116105a7576024019190565b346105a7576103f06106ce6106c836610661565b91610fe3565b604051918291826105ee565b346105a7576103f06106ce6106ee36610661565b9161088a565b356106fe816105ba565b90565b6005111561070b57565b634e487b7160e01b600052602160045260246000fd5b3560058110156105a75790565b634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761076057604052565b61072e565b90601f8019910116810190811067ffffffffffffffff82111761076057604052565b604051906080820182811067ffffffffffffffff82111761076057604052565b67ffffffffffffffff811161076057601f01601f191660200190565b6020818303126105a75780519067ffffffffffffffff82116105a7570181601f820112156105a75780516107f6816107a7565b926108046040519485610765565b818452602082840101116105a7576106fe91602080850191016105cb565b6040513d6000823e3d90fd5b908092918237016000815290565b9061084f602092828151948592016105cb565b0190565b92919261085f826107a7565b9161086d6040519384610765565b8294818452818301116105a7578281602093846000960137010152565b91604092838101906001600160a01b036108a3836106f4565b166108b65750506106fe92503691610853565b9160016108c584959395610721565b6108ce81610701565b036109895750509060006108fe6100ec6108f86108f36100ec602060049998016106f4565b610b72565b936106f4565b83516306fdde0360e01b815294859182905afa918215610984576109506106fe93610144926109429660009261095d575b506101319051968795602087019061083c565b61040560f31b815260020190565b602960f81b815260010190565b61097d9061013192933d8091833e6109758183610765565b8101906107c3565b919061092f565b610822565b600361099484610721565b61099d81610701565b03610a85575050906101376000610a166100ec856109fd6109d960606109d16100f86100ec6100ec602060049f9e016106f4565b930135610d77565b6101318951978894610131602087016008906722a92198989a9a9d60c11b81520190565b0394610a11601f1996878101875286610765565b6106f4565b84516306fdde0360e01b815295869182905afa928315610984576109506106fe94610a5a9261094297600092610a66575b506101319051978895602087019061083c565b03908101835282610765565b610a7e9061013192933d8091833e6109758183610765565b9190610a47565b9150926000610a986100ec6004956106f4565b82516306fdde0360e01b815294859182905afa928315610984576106fe936101449261095092600092610adc575b506109426101319151978896602088019161082e565b610af76109429161013193943d8091833e6109758183610765565b929150610ac6565b604051906020820182811067ffffffffffffffff8211176107605760405260008252565b3d15610b4e573d90610b34826107a7565b91610b426040519384610765565b82523d6000602084013e565b606090565b60405190610b6082610744565b60038252623f3f3f60e81b6020830152565b600080916040516001600160a01b0360208201916306fdde0360e01b835260048152610b9d81610744565b5192165afa610baa610b23565b9015610bb9576106fe90610c79565b506106fe610b53565b634e487b7160e01b600052603260045260246000fd5b908151811015610be9570160200190565b610bc2565b634e487b7160e01b600052601160045260246000fd5b60ff1660ff8114610c155760010190565b610bee565b604051906060820182811067ffffffffffffffff82111761076057604052602a8252604082602036910137565b90610c51826107a7565b610c5e6040519182610765565b8281528092610c6f601f19916107a7565b0190602036910137565b805160408110610c975750806020806106fe935183010191016107c3565b602092908303610d6c576000805b60ff81168581109081610d4a575b5015610cc757610cc290610c04565b610ca5565b92610cd560ff809516610c47565b92825b85811687811080610d2b575b15610d20579081610d15610d0c610cfe610d1b9588610bd8565b516001600160f81b03191690565b871a9188610bd8565b53610c04565b610cd8565b505094505050905090565b506001600160f81b0319610d42610cfe8387610bd8565b161515610ce4565b6001600160f81b03199150610d6390610cfe9087610bd8565b16151538610cb3565b9150506106fe610b53565b806000917a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000080821015610eac575b506d04ee2d6d415b85acef810000000080831015610e9d575b50662386f26fc1000080831015610e8e575b506305f5e10080831015610e7f575b5061271080831015610e70575b506064821015610e60575b600a80921015610e56575b600190816021610e0e828701610c47565b95860101905b610e20575b5050505090565b600019019083906f181899199a1a9b1b9c1cb0b131b232b360811b8282061a835304918215610e5157919082610e14565b610e19565b9160010191610dfd565b9190606460029104910191610df2565b60049193920491019138610de7565b60089193920491019138610dda565b60109193920491019138610dcb565b60209193920491019138610db9565b604093508104915038610da0565b908160021b917f3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811603610c1557565b9060028201809211610c1557565b9060208201809211610c1557565b8015610c15576000190190565b15610f1a57565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b610f66610c1a565b90815115610be957603060208301538151600190811015610be95790607860218401536029915b808311610fa057506106fe915015610f13565b90600f8116906010821015610be9576f181899199a1a9b1b9c1cb0b131b232b360811b610fdc921a610fd28587610bd8565b5360041c92610f06565b9190610f8d565b91604092838101906001600160a01b03610ffc836106f4565b1661100f5750506106fe92503691610853565b91600161101e84959395610721565b61102781610701565b036110515750509060006108fe6100ec6108f861104c6100ec602060049998016106f4565b6110fe565b909161105e600391610721565b61106781610701565b036110ec575050600061107e6100ec6004936106f4565b83516306fdde0360e01b815292839182905afa801561098457610950926106fe926000926110cd575b5051664552433131353560c81b6020820152928391610144919061013160278501610942565b6110e59061014492933d8091833e6109758183610765565b91906110a7565b90926000610a986100ec6004956106f4565b600080916040516001600160a01b0360208201916395d89b4160e01b835260048152610b9d81610744565b9061113382610721565b600581101561070b5760030361114a575050600090565b600161115583610721565b61115e81610701565b0361118357506001600160a01b0360206106fe92013561117d816105ba565b16611188565b905090565b600080916040516001600160a01b03602082019163313ce56760e01b8352600481526111b381610744565b5192165afa6111c0610b23565b90806111ec575b156111e6576020818051810103126105a757602001516106fe8161061a565b50601290565b5060208151146111c7565b604051906080820182811067ffffffffffffffff8211176107605760405260006060838181528160208201528160408201520152565b6040519061123a82610744565b60068252654e617469766560d01b6020830152565b903590601e19813603018212156105a7570180359067ffffffffffffffff82116105a7576020019181360383136105a757565b356106fe8161061a565b6040519061129982610744565b6005825264045524332360dc1b6020830152565b604051906112ba82610744565b60078252664552433131353560c81b6020830152565b604051906112dd82610744565b600582526466616c736560d81b6020830152565b604051906112fe82610744565b60048252637472756560e01b6020830152565b6040519061131e82610744565b600c82526b16113232b1b4b6b0b639911d60a11b6020830152565b604051906060820182811067ffffffffffffffff82111761076057604052604082527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f6040837f4142434445464748494a4b4c4d4e4f505152535455565758595a61626364656660208201520152565b805115611489576113b8611339565b6113d46113cf6113c88451610eea565b6003900490565b610eba565b916113e66113e184610ef8565b610c47565b92835280815182019060208501935b8282106114375750505060039051068060011461142657600214611417575090565b603d60f81b6000199091015290565b50613d3d60f01b6001199091015290565b9091936004906003809401938451600190603f9082828260121c16880101518553828282600c1c16880101518386015382828260061c16880101516002860153168501015190820153019391906113f5565b506106fe610aff56fea26469706673582212203eb015a0391c04dfb7457d9933402286379f87b27a3746b7e11eebd20a285d3b64736f6c63430008120033";

type YieldBoxURIBuilderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YieldBoxURIBuilderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YieldBoxURIBuilder__factory extends ContractFactory {
  constructor(...args: YieldBoxURIBuilderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "YieldBoxURIBuilder";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<YieldBoxURIBuilder> {
    return super.deploy(overrides || {}) as Promise<YieldBoxURIBuilder>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): YieldBoxURIBuilder {
    return super.attach(address) as YieldBoxURIBuilder;
  }
  override connect(signer: Signer): YieldBoxURIBuilder__factory {
    return super.connect(signer) as YieldBoxURIBuilder__factory;
  }
  static readonly contractName: "YieldBoxURIBuilder";

  public readonly contractName: "YieldBoxURIBuilder";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldBoxURIBuilderInterface {
    return new utils.Interface(_abi) as YieldBoxURIBuilderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldBoxURIBuilder {
    return new Contract(address, _abi, signerOrProvider) as YieldBoxURIBuilder;
  }
}
