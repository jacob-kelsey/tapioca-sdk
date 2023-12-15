/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MagnetarHelper,
  MagnetarHelperInterface,
} from "../../../contracts/Magnetar/MagnetarHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        internalType: "contract IBigBang[]",
        name: "markets",
        type: "address[]",
      },
    ],
    name: "bigBangMarketInfo",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "collateral",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "collateralId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "asset",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "assetId",
                type: "uint256",
              },
              {
                internalType: "contract IOracle",
                name: "oracle",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "oracleData",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "totalCollateralShare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "userCollateralShare",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint128",
                    name: "elastic",
                    type: "uint128",
                  },
                  {
                    internalType: "uint128",
                    name: "base",
                    type: "uint128",
                  },
                ],
                internalType: "struct Rebase",
                name: "totalBorrow",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "userBorrowPart",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "currentExchangeRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "spotExchangeRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "oracleExchangeRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalBorrowCap",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalYieldBoxCollateralShare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalYieldBoxCollateralAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalYieldBoxAssetShare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalYieldBoxAssetAmount",
                type: "uint256",
              },
              {
                internalType: "enum TokenType",
                name: "yieldBoxCollateralTokenType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "yieldBoxCollateralContractAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "yieldBoxCollateralStrategyAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "yieldBoxCollateralTokenId",
                type: "uint256",
              },
              {
                internalType: "enum TokenType",
                name: "yieldBoxAssetTokenType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "yieldBoxAssetContractAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "yieldBoxAssetStrategyAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "yieldBoxAssetTokenId",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "collateralizationRate",
                type: "uint256",
              },
            ],
            internalType: "struct MagnetarHelper.MarketInfo",
            name: "market",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint64",
                name: "debtRate",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "lastAccrued",
                type: "uint64",
              },
            ],
            internalType: "struct IBigBang.AccrueInfo",
            name: "accrueInfo",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "minDebtRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxDebtRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtRateAgainstEthMarket",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "mainBBMarket",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "mainBBDebtRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentDebtRate",
            type: "uint256",
          },
        ],
        internalType: "struct MagnetarHelper.BigBangInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fraction",
        type: "uint256",
      },
    ],
    name: "getAmountForAssetFraction",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "borrowPart",
        type: "uint256",
      },
    ],
    name: "getAmountForBorrowPart",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getBorrowPartForAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "part",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    name: "getCollateralAmountForShare",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "borrowPart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralizationRatePrecision",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "exchangeRatePrecision",
        type: "uint256",
      },
    ],
    name: "getCollateralSharesForBorrowPart",
    outputs: [
      {
        internalType: "uint256",
        name: "collateralShares",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getFractionForAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "fraction",
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
        name: "who",
        type: "address",
      },
      {
        internalType: "contract ISingularity[]",
        name: "markets",
        type: "address[]",
      },
    ],
    name: "singularityMarketInfo",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "collateral",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "collateralId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "asset",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "assetId",
                type: "uint256",
              },
              {
                internalType: "contract IOracle",
                name: "oracle",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "oracleData",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "totalCollateralShare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "userCollateralShare",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint128",
                    name: "elastic",
                    type: "uint128",
                  },
                  {
                    internalType: "uint128",
                    name: "base",
                    type: "uint128",
                  },
                ],
                internalType: "struct Rebase",
                name: "totalBorrow",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "userBorrowPart",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "currentExchangeRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "spotExchangeRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "oracleExchangeRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalBorrowCap",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalYieldBoxCollateralShare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalYieldBoxCollateralAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalYieldBoxAssetShare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalYieldBoxAssetAmount",
                type: "uint256",
              },
              {
                internalType: "enum TokenType",
                name: "yieldBoxCollateralTokenType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "yieldBoxCollateralContractAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "yieldBoxCollateralStrategyAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "yieldBoxCollateralTokenId",
                type: "uint256",
              },
              {
                internalType: "enum TokenType",
                name: "yieldBoxAssetTokenType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "yieldBoxAssetContractAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "yieldBoxAssetStrategyAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "yieldBoxAssetTokenId",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "collateralizationRate",
                type: "uint256",
              },
            ],
            internalType: "struct MagnetarHelper.MarketInfo",
            name: "market",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint128",
                name: "elastic",
                type: "uint128",
              },
              {
                internalType: "uint128",
                name: "base",
                type: "uint128",
              },
            ],
            internalType: "struct Rebase",
            name: "totalAsset",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "userAssetFraction",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint64",
                name: "interestPerSecond",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "lastAccrued",
                type: "uint64",
              },
              {
                internalType: "uint128",
                name: "feesEarnedFraction",
                type: "uint128",
              },
            ],
            internalType: "struct ISingularity.AccrueInfo",
            name: "accrueInfo",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "utilization",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minimumTargetUtilization",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maximumTargetUtilization",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minimumInterestPerSecond",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maximumInterestPerSecond",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interestElasticity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startingInterestPerSecond",
            type: "uint256",
          },
        ],
        internalType: "struct MagnetarHelper.SingularityInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100165761274a908161001c8239f35b600080fdfe60806040908082526004918236101561001757600080fd5b60009160e08335811c9182630e8fd73b1461155f5750816314ecf5a8146112cb5781632ed48e48146111e9578163443c73a714610f615781636dd55c0b14610999578163a306dfd5146108dc578163e4e802e8146101ea575063ea881c181461007f57600080fd5b346101e657806003193601126101e6576001600160a01b0392836100a16117e6565b169082519063de40657760e01b825260209586838381875afa9283156101ad57879087946101b7575b5085516377607a1760e11b815293948490849082905afa9283156101ad5790879392918793610174575b50906064918651958694859363442c159960e01b85528401526024356024840152886044840152165afa928315610169578093610134575b505051908152f35b909192508382813d8311610162575b61014d8183611a90565b8101031261015f57505190388061012c565b80fd5b503d610143565b8251903d90823e3d90fd5b809293508491943d83116101a6575b61018d8183611a90565b810103126101a25751869290919060646100f4565b8580fd5b503d610183565b85513d88823e3d90fd5b8394506101d990823d84116101df575b6101d18183611a90565b810190611aca565b936100ca565b503d6101c7565b5080fd5b83858492346108d8576101fc36611801565b91909361020883611ab3565b9461021588519687611a90565b8386526020938487019060051b8201913683116108d45797959497905b8282106108ad5750505084519161024883611ab3565b9561025589519788611a90565b838752601f1961026485611ab3565b01865b8181106107f857505085888a5161027d81611a44565b8281520152855b8481106103925750505050508451938085019181865284518093528686019082888560051b890101960194975b8489106102be5787870388f35b9091929394958480600192603f198b82030187528951906101a06102eb83516101c08085528401906118e7565b926102fc85820151868501906118a9565b878101516060908185015281015190878060401b039182815116926080938487015287820151169060a091828701528a8a8060801b03910151169260c093848701528201518b86015281015191610100928386015281015161012090818601528a8201519261014093848701528201516101608601528101516101808501520151910152980194019801979190949392946102b1565b959794956001600160a01b03806103a98385611c9d565b5116906103b68286611db2565b6103c0848c611c9d565b51528b5163f9557ccb60e01b81528c818881865afa908115610791578c908d926107c8575b508d51916103f283611a44565b6001600160801b03918216835216898201528861040f858d611c9d565b5101528b516370a0823160e01b8152908516868201528781602481855afa90811561064d578b9161079b575b508b610447848c611c9d565b5101528a51630bbfc09d60e31b8152608080828881865afa91821561079157848c8e92839561070b575b5060609161047e91611c9d565b51015261048b848c611c9d565b5101528a516001620fd9cd60e11b0319815287818781855afa90811561064d578b916106de575b5060a06104bf848c611c9d565b5101528a5163f42760b760e01b815287818781855afa90811561064d578b916106b1575b5060c06104f0848c611c9d565b5101528a51632a8a011960e11b815287818781855afa90811561064d578b91610684575b5088610520848c611c9d565b5101528a51631570aae560e21b815287818781855afa90811561064d578b91610657575b50610100610552848c611c9d565b5101528a5163104244dd60e31b815287818781855afa90811561064d579188918b8895948e92610610575b5061058b8561012092611c9d565b5101528c516352f353eb60e01b815293849182905afa8015610606578a906105d1575b6105c892506101406105c0838c611c9d565b510152611b6a565b97959497610284565b50908681813d83116105ff575b6105e88183611a90565b810103126105fb57906105c891516105ae565b8980fd5b503d6105de565b8b513d8c823e3d90fd5b9392949550505081813d8311610646575b61062b8183611a90565b81010312610642575185929188918b61058b61057d565b8a80fd5b503d610621565b8c513d8d823e3d90fd5b90508781813d831161067d575b61066e8183611a90565b8101031261064257518c610544565b503d610664565b90508781813d83116106aa575b61069b8183611a90565b8101031261064257518c610514565b503d610691565b90508781813d83116106d7575b6106c88183611a90565b8101031261064257518c6104e3565b503d6106be565b90508781813d8311610704575b6106f58183611a90565b8101031261064257518c6104b2565b503d6106eb565b93945050505080823d841161078a575b6107258183611a90565b8101039082821261078657606080921261078657606061047e8f8e95948d94828a93519661075288611a75565b61075b83611cc7565b8852610768818401611cc7565b90880152610777818301611ae9565b90870152015195915091610471565b8c80fd5b503d61071b565b8d513d8e823e3d90fd5b90508781813d83116107c1575b6107b28183611a90565b8101031261064257518c61043b565b503d6107a8565b90506107ea91508d803d106107f1575b6107e28183611a90565b810190611afd565b908e6103e5565b503d6107d8565b8a519799969761016081016001600160401b0381118282101761089a578c52879190610822611bb4565b81528c5161082f81611a44565b8c81528c84820152838201528b8d8201528c8c81519161084e83611a75565b818352818684015282015260608201528b60808201528b60a08201528b60c08201528b8a8201528b6101008201528b6101208201528b61014082015282828c0101520198969598610267565b634e487b7160e01b8c526041875260248cfd5b9597949581356001600160a01b03811681036105fb57815294979594908801908801610232565b8880fd5b8280fd5b505082346108d857816003193601126108d857816108f86117e6565b846020835161090681611a44565b8281520152815163020a17bd60e61b815292839182906001600160a01b03165afa90811561098d57908361096692602095919261096d575b5083519161094b83611a44565b6001600160801b039182168352168482015260243590611b79565b9051908152f35b90506109869150833d85116107f1576107e28183611a90565b908561093e565b505051903d90823e3d90fd5b838584346108d8576109aa36611801565b9190936109b683611ab3565b946109c385519687611a90565b8386526020938487019060051b8201913683116108d45797959497905b828210610f3a575050508451916109f683611ab3565b95610a0385519788611a90565b838752601f19610a1285611ab3565b01865b818110610ec557505085888651610a2b81611a44565b8281520152855b848110610b055750505050508051938085019181865284518093528086019082818560051b890101960194975b848910610a6c5787870388f35b9091929394958480600192603f198b820301875289519061010086610a9a84516101208086528501906118e7565b938581015186898060401b039182815116828801520151168a85015289810151606090818601528101516080908186015281015160a09081860152888060a01b03908201511660c0908186015281015182850152015191015298019401980197919094939294610a5f565b959794956001600160a01b0380610b1c8385611c9d565b5116610b288186611db2565b610b32848c611c9d565b51528851632c9f039d60e21b815289818881855afa908115610d74578c908d92610e82575b508a5191610b6483611a44565b6001600160401b039182168352168982015288610b81858d611c9d565b510152885163f791395d60e01b815288818881855afa908115610d74578c91610e55575b5089610bb1858d611c9d565b510152885163358cd68b60e11b815288818881855afa908115610d74578c91610e28575b506060610be2858d611c9d565b510152885163bde39c5d60e01b815288818881855afa908115610d74578c91610dfb575b506080610c13858d611c9d565b510152885163c1ad5c8d60e01b815288818881855afa908115610d74579189918e868f8f90968c9794610dc0575b5090610c4c91611c9d565b5101528a51636c3d8b8f60e01b815292839182905afa908115610db6579082918c91610d7e575b508951631848f2bf60e31b815291169188828881865afa918215610d745791879493918c8b948f93610d27575b50610cad8660a092611c9d565b51019116905289519384809263e6abad4960e01b82525afa8015610d1d578a90610cec575b610ce3925060c06105c0838c611c9d565b97959497610a32565b50908681813d8311610d16575b610d038183611a90565b810103126105fb5790610ce39151610cd2565b503d610cf9565b88513d8c823e3d90fd5b939596505092905081813d8311610d6d575b610d438183611a90565b81010312610d6957918a899260a0610cad87610d608c9998611cdb565b94925050610ca0565b8b80fd5b503d610d39565b8a513d8e823e3d90fd5b809250898092503d8311610daf575b610d978183611a90565b8101031261064257610da98291611cdb565b8d610c73565b503d610d8d565b89513d8d823e3d90fd5b959496505050505081813d8311610df4575b610ddc8183611a90565b81010312610d695751869189918e868e610c4c610c41565b503d610dd2565b90508881813d8311610e21575b610e128183611a90565b81010312610d6957518d610c06565b503d610e08565b90508881813d8311610e4e575b610e3f8183611a90565b81010312610d6957518d610bd5565b503d610e35565b90508881813d8311610e7b575b610e6c8183611a90565b81010312610d6957518d610ba5565b503d610e62565b8092508b8092503d8311610ebe575b610e9b8183611a90565b81010312610d6957610eb789610eb083611cc7565b9201611cc7565b908e610b57565b503d610e91565b86519799969761010081016001600160401b0381118282101761089a578952879190610eef611bb4565b81528951610efc81611a44565b8c81528c84820152838201528b8a8201528b60608201528b60808201528b60a08201528b60c08201528b8d82015282828c0101520198969598610a15565b9597949581356001600160a01b03811681036105fb578152949795949088019088016109e0565b5050346101e65760803660031901126101e657610f7c6117e6565b92815193610f8985611a44565b8385526020948501849052825163020a17bd60e61b81526001600160a01b0391821692909184838381875afa9283156101ad57869087946111c7575b50855193610fd285611a44565b6001600160801b0391821685521687840152845163de40657760e01b81529287848481885afa9384156111255787946111a4575b506110209061101b6044359160243590611b79565b611b21565b8551633ba0b9a960e01b815288818581895afa90811561116b578891611175575b5061104b91611b21565b855163bb4cfe3b60e01b815288818581895afa90811561116b579189918594938a9161112f575b509061108461108a9260643590611b21565b90611b4a565b958751948580926377607a1760e11b82525afa92831561112557908893929188936110ed575b50606492939487519687958694638eb22cdd60e01b86528501526024840152886044840152165afa92831561016957809361013457505051908152f35b848193959294503d831161111e575b6111068183611a90565b8101031261111a57518792909160646110b0565b8680fd5b503d6110fc565b86513d89823e3d90fd5b9280929495508391503d8311611164575b61114a8183611a90565b8101031261116057518392918991611084611072565b8780fd5b503d611140565b87513d8a823e3d90fd5b90508881813d831161119d575b61118c8183611a90565b81010312611160575161104b611041565b503d611182565b6110209194506111c090893d8b116101df576101d18183611a90565b9390611006565b90506111e1919350853d87116107f1576107e28183611a90565b929038610fc5565b505082346108d857816003193601126108d8576112046117e6565b908260243592856020835161121881611a44565b8281520152815163020a17bd60e61b815292839182906001600160a01b03165afa9081156112be578460209591819361129d575b5084519261125984611a44565b6001600160801b03928316808552908316878501819052915061128157505050905b51908152f35b61128e9061129794611b21565b91511690611b4a565b9061127b565b9092506112b79150843d86116107f1576107e28183611a90565b918661124c565b50505051903d90823e3d90fd5b5050346101e657806003193601126101e6576001600160a01b0392836112ef6117e6565b1682519163f9557ccb60e01b835283838281855afa80156115555785938691611532575b50845163020a17bd60e61b815285818481875afa908115611125578791611514575b50855163de40657760e01b81526020989089818681895afa90811561150a5789916114ed575b50169486519063226f120560e11b918281528a8187818a5afa9081156114b6578a916114c0575b508851638eb22cdd60e01b8152868101919091526001600160801b039384166024820152600160448201528a816064818b5afa9081156114b65790848c928c92611482575b506113d3929316611ba7565b918589518098819382525afa94851561116b57908995949392918995611448575b50916114119161140960649594602435611b21565b911690611b4a565b948651958694859363442c159960e01b855284015260248301528760448301525afa92831561016957809361013457505051908152f35b8092939495508691963d831161147b575b6114638183611a90565b810103126111605751889490939291906114116113f4565b503d611459565b928092508391503d83116114af575b61149b8183611a90565b810103126105fb57518a90846113d36113c7565b503d611491565b89513d8c823e3d90fd5b90508a81813d83116114e6575b6114d78183611a90565b810103126105fb575138611382565b503d6114cd565b61150491508a3d8c116101df576101d18183611a90565b3861135b565b88513d8b823e3d90fd5b61152b9150863d88116107f1576107e28183611a90565b5038611335565b905061154c919350843d86116107f1576107e28183611a90565b92909238611313565b84513d87823e3d90fd5b8386863461015f578260031936011261015f576001600160a01b03806115836117e6565b63f9557ccb60e01b8752169484818581895afa9081156117dc57839084926117bc575b50855163020a17bd60e61b815292868487818b5afa9384156116f957859461179c575b5086519063226f120560e11b825260209889838981845afa9283156117605788918b91899561176a575b508a5163de40657760e01b815292839182905afa908115611760578791611743575b501695875196638eb22cdd60e01b9081895283838a015260243560248a01528760448a01528a89606481845afa98891561173957908b939291899a611703575b508a51918252918101939093526001600160801b03958616602484015260016044840152829060649082905afa9081156116f957849086926116c3575b5061169d9216611ba7565b9250826116ae575050509051908152f35b926116be91611297941690611b21565b611b4a565b809250898092503d83116116f2575b6116dc8183611a90565b810103126116ee57518361169d611692565b8480fd5b503d6116d2565b87513d87823e3d90fd5b8481939495929b503d8311611732575b61171d8183611a90565b810103126111605751978a9291906064611655565b503d611713565b8a513d8a823e3d90fd5b61175a91508a3d8c116101df576101d18183611a90565b8a611615565b89513d89823e3d90fd5b9250935081813d8311611795575b6117828183611a90565b8101031261111a5789889151938c6115f3565b503d611778565b6117b4919450873d89116107f1576107e28183611a90565b5092886115c9565b90506117d59150853d87116107f1576107e28183611a90565b90876115a6565b85513d85823e3d90fd5b600435906001600160a01b03821682036117fc57565b600080fd5b60406003198201126117fc576004356001600160a01b03811681036117fc57916001600160401b0391602435908382116117fc57806023830112156117fc5781600401359384116117fc5760248460051b830101116117fc576024019190565b60005b8381106118745750506000910152565b8181015183820152602001611864565b9060209161189d81518092818552858086019101611861565b601f01601f1916010190565b80516001600160801b03908116835260209182015116910152565b9060058210156118d15752565b634e487b7160e01b600052602160045260246000fd5b9061036060018060a01b0392838151168352602081015160208401528360408201511660408401526060810151606084015283608082015116608084015261193e60a08201516103808060a0870152850190611884565b9360c082015160c085015260e082015160e085015261196661010080840151908601906118a9565b8080806101208501516101409081890152850151610160908189015285015161018090818901528501516101a090818901528501516101c090818901528501516101e090818901528501516102009081890152850151610220908189015285015161024090818901528501516119e261026091828a01906118c4565b850151166102809081880152840151166102a090818701528301516102c09081870152830151611a186102e091828801906118c4565b830151166103009081860152820151166103209081850152810151906103409182850152015191015290565b604081019081106001600160401b03821117611a5f57604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b03821117611a5f57604052565b601f909101601f19168101906001600160401b03821190821017611a5f57604052565b6001600160401b038111611a5f5760051b60200190565b908160209103126117fc57516001600160a01b03811681036117fc5790565b51906001600160801b03821682036117fc57565b91908260409103126117fc57611b1e6020611b1784611ae9565b9301611ae9565b90565b81810292918115918404141715611b3457565b634e487b7160e01b600052601160045260246000fd5b8115611b54570490565b634e487b7160e01b600052601260045260246000fd5b6000198114611b345760010190565b60208101805190916001600160801b03918216611b965750505090565b611b1e938261128e92511690611b21565b91908201809211611b3457565b6040519061036082016001600160401b03811183821017611a5f5760405281610340600091828152826020820152826040820152826060820152826080820152606060a08201528260c08201528260e0820152604051611c1381611a44565b83815283602082015261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015282610220820152826102408201528261026082015282610280820152826102a0820152826102c0820152826102e082015282610300820152826103208201520152565b8051821015611cb15760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b51906001600160401b03821682036117fc57565b51906001600160a01b03821682036117fc57565b6020818303126117fc5780516001600160401b03918282116117fc57019082601f830112156117fc578151908111611a5f5760405192611d39601f8301601f191660200185611a90565b818452602082840101116117fc57611b1e9160208085019101611861565b91908260409103126117fc576020825192015190565b91908260809103126117fc57815160058110156117fc5791611d9160208201611cdb565b916060611da060408401611cdb565b92015190565b60058210156118d15752565b919091611dbd611bb4565b50604090815193611dcd85611a44565b60009485815285602080920152611de2611bb4565b845163d8dfeb4560e01b815290946001600160a01b0393841694909160049190848184818a5afa9081156126d2579086918b916126dc575b5016875282516338d52e0f60e01b8152848184818a5afa9081156126d2579086918b9161269a575b5016838801528251936307dc0d1d60e41b808652818685818b5afa958615612407578b96612663575b508660809616868a015284516374645ff360e01b908181528c8187818d5afa9081156124fe578d91612649575b5060a08b0152855163473e3ce760e01b8152838187818d5afa9081156124fe578d9161261c575b5060c08b01528551631c9e379b60e01b81529388168585018190526024948d90858188818f5afa91821561252557916125eb575b5060e08c0152865163020a17bd60e61b81528d888289818f5afa9182156125df5781926125bf575b50885191611f2883611a44565b6001600160801b03918216835216858201526101008c015286516324720b1f60e11b815286810191909152838186818d5afa9081156124fe578d91612592575b506101208b01528551633ba0b9a960e01b8152838187818d5afa9081156124fe578d91612565575b506101408b015285518281528c90848188818e5afa908115612343578291612530575b508751838152828189818f5afa9283156125255791611ffa9391838b9493612508575b5050868c8a85519687958694859363eeb8a8d360e01b85528401528c830190611884565b0392165afa9081156124fe578d916124c5575b506101808b01528551918252828286818c5afa91821561231a578c9261248e575b5085519081528b8186818c5afa908c82156122e05792849261207592858c969261246b575b50508851948580948193630d39bbef60e41b8352878c8401528a830190611884565b0392165afa908115612407578b9161243e575b5061016089015283516340626d8b60e01b8152818185818b5afa908115612407578b91612411575b506101a0890152835163226f120560e11b815290808285818b5afa918215612407578b926123d8575b506060890191825284516377607a1760e11b81529781898681845afa98891561231a578c996123a9575b50898201988952855163bb4cfe3b60e01b815282818781855afa908d821561239e579187939185939161236a575b506103408d0152875163de40657760e01b815292839182905afa91821561231a57908892918d9261234d575b5050169680518b84878b81519283809263092ada2b60e31b978883528c8301525afa908115612343578291612324575b506101e08c01526101c08b01528251865191825285820152858185818c5afa801561231a578c918d916122eb575b506102208b01526102008a015251908451630cf35bdd60e41b9283825285820152868185818c5afa908c82156122e0579189612225928d858c9a9998979694819382916122b2575b506102809185916102a085015216910152166102608d01526102408c01611da6565b51978551988994859384528301525afa9081156122a9575095611b1e949596819482938392612270575b50506103208701528216610300860152166102e08401526102c08301611da6565b915091508394506122969250803d106122a2575b61228e8183611a90565b810190611d6d565b9092949192913861224f565b503d612284565b513d88823e3d90fd5b905084955061028093506122d391508b3d8d116122a25761228e8183611a90565b9296509093909190612203565b8751903d90823e3d90fd5b905061230d9150863d8811612313575b6123058183611a90565b810190611d57565b386121bb565b503d6122fb565b86513d8e823e3d90fd5b905061233d9150873d8911612313576123058183611a90565b3861218d565b88513d84823e3d90fd5b6123639250803d106101df576101d18183611a90565b388061215d565b92809294508391503d8311612397575b6123848183611a90565b8101031261078657859183915138612131565b503d61237a565b8851903d90823e3d90fd5b9098508181813d83116123d1575b6123c18183611a90565b81010312610d6957519738612103565b503d6123b7565b9080925081813d8311612400575b6123f08183611a90565b81010312610642575190386120d9565b503d6123e6565b85513d8d823e3d90fd5b90508181813d8311612437575b6124288183611a90565b810103126106425751386120b0565b503d61241e565b90508181813d8311612464575b6124558183611a90565b81010312610642575138612088565b503d61244b565b61248792503d8091833e61247f8183611a90565b810190611cef565b388f612053565b9091508281813d83116124be575b6124a68183611a90565b81010312610d69576124b790611cdb565b903861202e565b503d61249c565b90508681813d83116124f7575b6124dc8183611a90565b8101031261078657805180151503610786578301513861200d565b503d6124d2565b87513d8f823e3d90fd5b61251d9293503d8091833e61247f8183611a90565b908f80611fd6565b8951903d90823e3d90fd5b90508481813d831161255e575b6125478183611a90565b810103126101e65761255890611cdb565b38611fb3565b503d61253d565b90508381813d831161258b575b61257c8183611a90565b81010312610786575138611f90565b503d612572565b90508381813d83116125b8575b6125a98183611a90565b81010312610786575138611f68565b503d61259f565b90506125d89150883d8a116107f1576107e28183611a90565b9038611f1b565b508851903d90823e3d90fd5b90508481813d8311612615575b6126028183611a90565b81010312612611575138611ef3565b8d80fd5b503d6125f8565b90508381813d8311612642575b6126338183611a90565b81010312610786575138611ebf565b503d612629565b61265d91503d808f833e61247f8183611a90565b38611e98565b9095508181813d8311612693575b61267b8183611a90565b810103126106425761268c90611cdb565b9438611e6b565b503d612671565b809250868092503d83116126cb575b6126b38183611a90565b810103126105fb576126c58691611cdb565b38611e42565b503d6126a9565b84513d8c823e3d90fd5b809250868092503d831161270d575b6126f58183611a90565b810103126105fb576127078691611cdb565b38611e1a565b503d6126eb56fea26469706673582212209283ea87f9ee058472b22a8cef1239a04581acd9bdbfa640a36abef0578643bb64736f6c63430008130033";

type MagnetarHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MagnetarHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MagnetarHelper__factory extends ContractFactory {
  constructor(...args: MagnetarHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MagnetarHelper";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MagnetarHelper> {
    return super.deploy(overrides || {}) as Promise<MagnetarHelper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MagnetarHelper {
    return super.attach(address) as MagnetarHelper;
  }
  override connect(signer: Signer): MagnetarHelper__factory {
    return super.connect(signer) as MagnetarHelper__factory;
  }
  static readonly contractName: "MagnetarHelper";

  public readonly contractName: "MagnetarHelper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MagnetarHelperInterface {
    return new utils.Interface(_abi) as MagnetarHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MagnetarHelper {
    return new Contract(address, _abi, signerOrProvider) as MagnetarHelper;
  }
}
