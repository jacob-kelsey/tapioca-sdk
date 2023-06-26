/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MagnetarMarketModule,
  MagnetarMarketModuleInterface,
} from "../../../../contracts/Magnetar/modules/MagnetarMarketModule";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "extractFromSender",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "deposit",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "withdraw",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "withdrawData",
        type: "bytes",
      },
    ],
    name: "depositAddCollateralAndBorrow",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarket",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "deposit_",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "extractFromSender",
        type: "bool",
      },
    ],
    name: "depositAndAddAsset",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "deposit",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "extractFromSender",
        type: "bool",
      },
    ],
    name: "depositAndRepay",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "deposit",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "withdraw",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "extractFromSender",
        type: "bool",
      },
    ],
    name: "depositRepayAndRemoveCollateral",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "contract IMarket",
        name: "bingBang",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "deposit",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "extractFromSender",
        type: "bool",
      },
    ],
    name: "mintAndLend",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "contract IMarket",
        name: "bingBang",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "removeShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralShare",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdraw",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "withdrawData",
        type: "bytes",
      },
    ],
    name: "removeAssetAndRepay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IYieldBoxBase",
        name: "yieldBox",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "dstChainId",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "receiver",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "adapterParams",
        type: "bytes",
      },
      {
        internalType: "address payable",
        name: "refundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657612a83908161001c8239f35b600080fdfe6080604052600436101561001b575b361561001957600080fd5b005b6000803560e01c8063411628d9146114a0578063664653ac14610ec7578063815c12ea1461088f5780639cc6ef1414610802578063cc5e3163146107c3578063dedd6b80146103fb578063e9212b72146100d55763e985e9c51461007f575061000e565b346100d25760403660031901126100d257610098611a7f565b60406100a2611a95565b926001600160a01b03809316815280602052209116600052602052602060ff604060002054166040519015158152f35b80fd5b506101003660031901126100d2576100eb611a7f565b6100f3611a95565b9060843590610100611ad0565b610108611adf565b9060e435801515810361030f5786926001600160a01b0392838616926040519163de40657760e01b83526020958684600481895afa80156103f05761015f9489916103c3575b501697606435908b60443591611c9b565b85610168578380f35b80156103bc5730905b6040516377607a1760e11b808252928582600481885afa91821561037f57879261038a575b5060405191638eb22cdd60e01b8352600483015288602483015286604483015285826064818b5afa91821561037f57879261034d575b50843b156103495760405163cce19f8160e01b81526001600160a01b038b811660048301529190911660248201526044810191909152858160648183885af190811561033e578691610326575b5050610223578380f35b829060046040518094819382525afa91821561031b5783926102dd575b5050604080516311a5cc7760e31b815260048101929092523060248301526001600160a01b03909516604482015260648101939093526000608484015291929183919082908160a481015b03925af180156102d2576102a4575b8080838180808380f35b6102c59060403d6040116102cb575b6102bd8183611b18565b810190611c24565b5061029a565b503d6102b3565b6040513d84823e3d90fd5b81959493508092503d8311610314575b6102f78183611b18565b8101031261030f57915190919084908161028b610240565b600080fd5b503d6102ed565b6040513d85823e3d90fd5b61032f90611aee565b61033a578438610219565b8480fd5b6040513d88823e3d90fd5b8680fd5b965090508486813d8111610378575b6103668183611b18565b8101031261030f5789955190386101cc565b503d61035c565b6040513d89823e3d90fd5b965090508486813d81116103b5575b6103a38183611b18565b8101031261030f578995519038610196565b503d610399565b8690610171565b6103e39150883d8a116103e9575b6103db8183611b18565b810190611bab565b3861014e565b503d6103d1565b6040513d8a823e3d90fd5b5060a03660031901126100d257610410611a7f565b610418611a95565b60443590606435801515810361030f57610430611ac1565b906001600160a01b038086166040519463226f120560e11b86526020958681600481865afa9081156107b8578a9161078b575b5060405163de40657760e01b81528781600481875afa80156107805785918c91610763575b501697604051630cf35bdd60e41b81528260048201526080816024818d5afa908115610758578c91610726575b50604051638eb22cdd60e01b81526004810184905260248101839052604481018d90528c8a826064818f5afa978815610719578b998d93839a6106e2575b506105a3575b5050915050610552965061050e9150896126db565b604051630cb0f5b760e31b81523060048201526001600160a01b03909116602482015260006044820152606481019290925290928391908290899082906084820190565b03925af180156105985761056f575b505061056c916126db565b80f35b813d8311610591575b6105828183611b18565b8101031261030f573880610561565b503d610578565b6040513d87823e3d90fd5b8a6105f3979a969b156106d4575b156106c9576105c185853361285b565b60405180978196829563095ea7b360e01b845260048401602090939291936001600160a01b0360408201951681520152565b0393165af180156106be5761067c575b5060408051634d4d7cbd60e11b81526004810195909552306024860181905260448601526000606486015260848501839052848060a481015b03818b8a5af19283156103f05761055294869461065e575b8080898c826104f9565b6106769060403d6040116102cb576102bd8183611b18565b50610654565b938585813d83116106b7575b6106928183611b18565b810103126106b357826040916106aa61063c97611c17565b50955050610603565b8880fd5b503d610688565b6040513d8b823e3d90fd5b6105c185858c61285b565b6106dd8b611c3a565b6105b1565b9a92509850915088813d8311610712575b6106fd8183611b18565b8101031261030f578c8b918b995198386104f3565b503d6106f3565b50604051903d90823e3d90fd5b610747915060803d8111610751575b61073f8183611b18565b810190611bde565b50509050386104b5565b503d610735565b6040513d8e823e3d90fd5b61077a9150893d8b116103e9576103db8183611b18565b38610488565b6040513d8d823e3d90fd5b90508681813d83116107b1575b6107a28183611b18565b8101031261030f575138610463565b503d610798565b6040513d8c823e3d90fd5b5060c03660031901126100d25761056c6107db611a7f565b6107e3611a95565b6107eb611ac1565b906107f4611ad0565b926064359160443591611c9b565b506101403660031901126100d2576004356001600160a01b03808216820361088b5761082c611a95565b9060643561ffff8116810361033a5760e43567ffffffffffffffff81116108875761085b903690600401611b8d565b906101043592831683036108875761056c94610124359460c4359260a4359260843592604435916125e9565b8580fd5b8280fd5b506101003660031901126100d2576108a5611a7f565b6108ad611a95565b906108b6611aab565b906108bf611adf565b9167ffffffffffffffff60e4351161033a5736602360e43501121561033a5767ffffffffffffffff60e435600401351161033a5736602460e4356004013560e43501011161033a5760405163de40657760e01b8152926020846004816001600160a01b0387165afa93841561033e578694610ea6575b5060405163226f120560e11b81526020816004816001600160a01b038a165afa90811561037f578791610e74575b5060405163442c159960e01b815281600482015260643560248201528760448201526020816064816001600160a01b038a165afa9081156103f0578891610e42575b5060405163f4d9375360e01b81526001600160a01b03858116600483015230602483015260648035604484015260209183919082908d908b165af180156106be57610e17575b506109ff6001600160a01b038716886126db565b60405163cd0211eb60e01b81523060048201526001600160a01b0385811660248301526000604483015260848035606484015260209183919082908d908d165af19081156106be578991610de5575b50818110610cdc575b5050508560a4359283610a79575b5061056c6001600160a01b0386168761279c565b8215610cd65730905b6001600160a01b0388163b1561088b5760405163cce19f8160e01b81526001600160a01b0391821660048201529116602482015260448101849052818180606481010381836001600160a01b038c165af180156102d257610cc2575b5050610aed575b808581610a65565b610b033660e43560040135602460e43501611b56565b90815115610c735781518201906080836020840193031261030f57610b2a60208401611c17565b92604081015161ffff8116810361030f5760608201519160808101519067ffffffffffffffff821161030f57019484603f8701121561030f57602086015195610b7287611b3a565b95610b806040519788611b18565b8787526040888301011161030f576001600160a01b0396610ba8916040602089019101611fc1565b3415610c6a57602034975b6004604051809981936377607a1760e11b8352165afa958615610c5e57600096610c23575b509261056c98979592610c0e95926001600160a01b039895600090600014610c1c57505b8515610c155733945b308a8a1661232b565b9192610ae5565b3094610c05565b9050610bfc565b90956020823d602011610c56575b81610c3e60209383611b18565b810103126100d2575051946001600160a01b03610bd8565b3d9150610c31565b6040513d6000823e3d90fd5b60204797610bb3565b60405162461bcd60e51b815260206004820152602160248201527f4d61676e6574617256323a2077697468647261774461746120697320656d70746044820152607960f81b6064820152608490fd5b610ccb90611aee565b610887578538610ade565b80610a82565b8103908111610dd15790879160405190638eb22cdd60e01b825282600483015260248201528260448201526020816064816001600160a01b038b165afa90811561031b578391610d9c575b506001600160a01b0387163b1561088b5760405191630208d92960e11b83523060048401526001600160a01b0386166024840152604483015260648201528181608481836001600160a01b038b165af180156102d257610d88575b80610a57565b610d9190611aee565b610887578538610d82565b9250506020823d602011610dc9575b81610db860209383611b18565b8101031261030f5787915138610d27565b3d9150610dab565b634e487b7160e01b88526011600452602488fd5b90506020813d602011610e0f575b81610e0060209383611b18565b8101031261030f575138610a4e565b3d9150610df3565b602090813d8311610e3b575b610e2d8183611b18565b8101031261030f57386109eb565b503d610e23565b90506020813d602011610e6c575b81610e5d60209383611b18565b8101031261030f5751386109a5565b3d9150610e50565b90506020813d602011610e9e575b81610e8f60209383611b18565b8101031261030f575138610963565b3d9150610e82565b610ec091945060203d6020116103e9576103db8183611b18565b9238610935565b5060e03660031901126100d257610edc611a7f565b610ee4611a95565b610eec611aab565b91610ef5611ad0565b9284610eff611adf565b6040516377607a1760e11b815295906020876004816001600160a01b038a165afa96871561031b578397611469575b5060405163de40657760e01b8152966020886004816001600160a01b038a165afa9788156113d9578498611448575b50604051630cf35bdd60e41b815260048101829052926080846024816001600160a01b038d165afa908115610598576001600160a01b03948692611424575b5060208a606460405180988193638eb22cdd60e01b8352886004840152833560248401528b6044840152165afa94851561033e5786956113ed575b506112a9575b505050606435611214575b505060843580611009575b5050506001600160a01b0361056c92169061279c565b604080516314890dcb60e21b81526001600160a01b038416600482018190526024820152604481018390529081806064810103818a6001600160a01b038a165af1801561037f576111f6575b5060405163226f120560e11b8152906020826004816001600160a01b0388165afa91821561037f5787926111c2575b5060405191638eb22cdd60e01b8352600483015260248201528560448201526020816064816001600160a01b0389165afa90811561033e57869161118e575b50602090611126926110e76001600160a01b0388166001600160a01b0387166126db565b604051630cb0f5b760e31b81526001600160a01b0390911660048201819052602482015260006044820152606481019190915291829081906084820190565b0381886001600160a01b0387165af1801561059857611163575b508261115c6001600160a01b0392838061056c9716911661279c565b9238610ff3565b602090813d8311611187575b6111798183611b18565b8101031261030f5738611140565b503d61116f565b90506020813d6020116111ba575b816111a960209383611b18565b8101031261030f57516111266110c3565b3d915061119c565b9091506020813d6020116111ee575b816111de60209383611b18565b8101031261030f57519038611084565b3d91506111d1565b61120e9060403d6040116102cb576102bd8183611b18565b50611055565b6112276001600160a01b038716866126db565b6001600160a01b0385163b156112a5576040516374d2492960e11b81523060048201526001600160a01b0384166024820152600060448201526064803590820152608481019190915281818060a481010381836001600160a01b038a165af180156102d25715610fe85761129a90611aee565b61033a578438610fe8565b5080fd5b6113046020916001600160a01b03946000146113e4576112ce335b826064359161285b565b60405163095ea7b360e01b81526001600160a01b03868d1616600482015260643560248201529485928391899183906044820190565b0393165af19182156113d9578392611391575b5060408051634d4d7cbd60e11b815260048101929092523060248301819052604483015260006064830152608482019290925290818060a481015b0381866001600160a01b038c165af1801561031b57611373575b8080610fdd565b61138b9060403d6040116102cb576102bd8183611b18565b5061136c565b91506020823d6020116113d1575b816113ac60209383611b18565b810103126113cd57826040916113c461135294611c17565b50915091611317565b8380fd5b3d915061139f565b6040513d86823e3d90fd5b6112ce886112c4565b955093506020853d60201161141c575b8161140a60209383611b18565b8101031261030f578994519338610fd7565b3d91506113fd565b61143d91925060803d81116107515761073f8183611b18565b505090509038610f9c565b61146291985060203d6020116103e9576103db8183611b18565b9638610f5d565b925095506020823d602011611498575b8161148660209383611b18565b8101031261030f578691519538610f2e565b3d9150611479565b506101003660031901126100d2576114b6611a7f565b6114be611a95565b6114c6611ac1565b906114cf611ad0565b906114d8611adf565b60e43567ffffffffffffffff8111610349576114f8903690600401611b8d565b906040519463de40657760e01b86526001600160a01b03871694602087600481895afa9687156106be578997611a5e575b506040516377607a1760e11b8152906020826004818a5afa80156107b8578a90611a21575b604051630cf35bdd60e41b81526004810182905292508a6080846024816001600160a01b038e165afa9384156107195781946119f4575b506001600160a01b0392939460208b606460405180978193638eb22cdd60e01b83528860048401526044356024840152876044840152165afa9586156102d2578b9483976119bb575b508561186c575b50505050506044356117da575b50506064359081611602575b8761056c6001600160a01b0388168961279c565b80156117d0578160403080965b82516314890dcb60e21b81526001600160a01b039182166004820152911660248201526044810192909252816064818c8a5af180156106be576117b2575b50611659575b806115ee565b815115610c735781518201916080816020850194031261030f5761167f60208201611c17565b604082015161ffff8116810361030f5760608301519260808101519067ffffffffffffffff821161030f57019185603f8401121561030f576020830151926116c684611b3a565b966116d46040519889611b18565b8488526040858301011161030f576004936116f691604060208a019101611fc1565b34156117a957602034985b60405163226f120560e11b815294859182905afa928315610c5e57600093611773575b509261175b95926001600160a01b0398959261056c9b9a989560009060001461176b5750905b86156117645733955b8a8a16612009565b91923880611653565b3095611753565b90509061174a565b90926020823d6020116117a1575b8161178e60209383611b18565b810103126100d25750519161056c611724565b3d9150611781565b60204798611701565b6117ca9060403d6040116102cb576102bd8183611b18565b5061164d565b816040858061160f565b6117ed6001600160a01b038816896126db565b15611864578730915b863b156112a5576040516374d2492960e11b81526001600160a01b0393841660048201529286166024840152600060448085019190915235606484015260848301528160a48183895af180156103f057611851575b806115e2565b61185d90979197611aee565b953861184b565b8784916117f6565b6001600160a01b0394602093836118cc94156119ad575b156119a457611897335b846044359161285b565b60405163095ea7b360e01b81529187166001600160a01b03166004830152604480356024840152919687948593849190820190565b0393165af191821561078057849261195c575b5060408051634d4d7cbd60e11b815260048101929092523060248301819052604483015260006064830152608482019290925290818060a481015b03818d6001600160a01b038d165af180156107b85761193e575b808a818a936115d5565b6119569060403d6040116102cb576102bd8183611b18565b50611934565b91506020823d60201161199c575b8161197760209383611b18565b81010312611998578360409161198f61191a94611c17565b509150916118df565b8a80fd5b3d915061196a565b6118978c61188d565b6119b68d611c3a565b611883565b94509495506020843d6020116119ec575b816119d960209383611b18565b810103126112a55785948b9451966115ce565b3d91506119cc565b6001600160a01b03939450611a169060803d81116107515761073f8183611b18565b505090509392611585565b506020823d602011611a56575b81611a3b60209383611b18565b81010312611a52576001600160a01b03915161154e565b8980fd5b3d9150611a2e565b611a7891975060203d6020116103e9576103db8183611b18565b9538611529565b600435906001600160a01b038216820361030f57565b602435906001600160a01b038216820361030f57565b604435906001600160a01b038216820361030f57565b60843590811515820361030f57565b60a43590811515820361030f57565b60c43590811515820361030f57565b67ffffffffffffffff8111611b0257604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117611b0257604052565b67ffffffffffffffff8111611b0257601f01601f191660200190565b929192611b6282611b3a565b91611b706040519384611b18565b82948184528183011161030f578281602093846000960137010152565b9080601f8301121561030f57816020611ba893359101611b56565b90565b9081602091031261030f57516001600160a01b038116810361030f5790565b51906001600160a01b038216820361030f57565b919082608091031261030f578151600581101561030f5791611c0260208201611bca565b916060611c1160408401611bca565b92015190565b5190811515820361030f57565b919082604091031261030f576020825192015190565b6001600160a01b0333911603611c4c57565b60405162461bcd60e51b815260206004820152602160248201527f4d61676e6574617256323a206f70657261746f72206e6f7420617070726f76656044820152601960fa1b6064820152608490fd5b94939291926001600160a01b0391828716604093845163226f120560e11b815260209760049289838581885afa928315611f2757600093611f92575b50875163de40657760e01b81528a818681895afa908115611f87576024918391600091611f6a575b50169b60808d8b5193848092630cf35bdd60e41b8252898b8301525afa918215611f5f57918d89928b8f95600094611f3b575b50611e0f575b505050505050505085611d51575b505050505050505050565b8693611d5d898b6126db565b15611e0657600030915b611da987519889968795869463cd0211eb60e01b865285016060919493929460808201956001600160a01b038092168352166020820152600060408201520152565b03925af1908115611dfc5750611dd3575b5050611dc59161279c565b388080808080808080611d46565b813d8311611df5575b611de68183611b18565b8101031261030f573880611dba565b503d611ddc565b513d6000823e3d90fd5b60008391611d67565b611e5b95879485856000948514611f3257611e2b92503361285b565b8d5180978196829563095ea7b360e01b84528d8401602090939291936001600160a01b0360408201951681520152565b0393165af18015611f275790889291611eec575b508151634d4d7cbd60e11b815284810193845230602085018190526040850152606084019190915260006080840152918290819060a0015b038160008d5af18015611ee157611ec5575b80808986828d81611d38565b611edb90863d88116102cb576102bd8183611b18565b50611eb9565b86513d6000823e3d90fd5b91508982813d8311611f20575b611f038183611b18565b8101031261030f57611ea792611f198993611c17565b5092611e6f565b503d611ef9565b88513d6000823e3d90fd5b611e2b9261285b565b611f5491945060803d81116107515761073f8183611b18565b505090509238611d32565b8a513d6000823e3d90fd5b611f8191508d803d106103e9576103db8183611b18565b38611cff565b89513d6000823e3d90fd5b90928a82813d8311611fba575b611fa98183611b18565b810103126100d25750519138611cd7565b503d611f9f565b60005b838110611fd45750506000910152565b8181015183820152602001611fc4565b90602091611ffd81518092818552858086019101611fc1565b601f01601f1916010190565b959261ffff90989291949598169283156122b7576001600160a01b0380971691604098895193630cf35bdd60e41b85526004948386820152608081602481855afa9081156122ac57908b9160009161228a575b508c516301ffc9a760e01b815263843c6ae360e01b88820152911698602094909185816024818e5afa9081612256575b506120a1575050505050505050505050505050565b8c516311a5cc7760e31b81528088019182526001600160a01b039092166020820152306040820152606081018e905260006080820181905291928d928492839190829060a00103925af180156122275761223a575b50341561223257915b8951633b58a71760e21b8152828186818b5afa908115612227576000916121f2575b50156121e957905b8951926060840184811067ffffffffffffffff8211176121d457908a918c5216835282019760008952898301918252863b1561030f57600098816121b6948c519d8e9b8c9a8b9963695ef6bf60e01b8b5230908b015260248a01526044890152606488015260a06084880152511660a4860152511660c484015251606060e4840152610104830190611fe4565b03925af1908115611dfc57506121c95750565b6121d290611aee565b565b604186634e487b7160e01b6000525260246000fd5b50606090612129565b908382813d8311612220575b6122088183611b18565b810103126100d2575061221a90611c17565b38612121565b503d6121fe565b8b513d6000823e3d90fd5b5030916120ff565b612250908b3d8d116102cb576102bd8183611b18565b506120f6565b8681813d8311612283575b61226b8183611b18565b8101031261030f5761227c90611c17565b503861208c565b503d612261565b6122a2915060803d81116107515761073f8183611b18565b505090503861205c565b8c513d6000823e3d90fd5b50929460408097506000935060a49592505197889687956311a5cc7760e31b875260048701526001600160a01b03938480921660248801521660448601526064850152826084850152165af18015610c5e576123105750565b6123279060403d81116102cb576102bd8183611b18565b5050565b95979193949261ffff1692831561259057506001600160a01b0380961690604097885192630cf35bdd60e41b84526004938785820152608081602481855afa90811561222757908a9160009161256e575b508b516301ffc9a760e01b815263843c6ae360e01b87820152911697602094909185816024818d5afa908161253a575b506123c05750505050505050505050505050565b60a48c9260008d95855196879586946311a5cc7760e31b86528c8601521660248401523060448401528160648401528160848401525af18015611f5f5761251e575b50341561251657985b8851633b58a71760e21b8152828185818a5afa908115611f5f576000916124e1575b50156124d857905b88519960608b018b811067ffffffffffffffff8211176124c3579089918b52168a5289019060008252888a01908152853b1561030f57876121b6926000998b519c8d9a8b998a9863695ef6bf60e01b8a5230908a0152602489015260448801528b606488015260a06084880152511660a4860152511660c484015251606060e4840152610104830190611fe4565b604185634e487b7160e01b6000525260246000fd5b50606090612435565b908382813d831161250f575b6124f78183611b18565b810103126100d2575061250990611c17565b3861242d565b503d6124ed565b50309861240b565b612534908a3d8c116102cb576102bd8183611b18565b50612402565b8681813d8311612567575b61254f8183611b18565b8101031261030f5761256090611c17565b50386123ac565b503d612545565b612586915060803d81116107515761073f8183611b18565b505090503861237c565b97509460408097506000935060a49592505197889687956311a5cc7760e31b875260048701526001600160a01b03938480921660248801521660448601528360648601526084850152165af18015610c5e576123105750565b969094989261ffff909694961693841561268057506001600160a01b0380971691604098895193630cf35bdd60e41b85526004948386820152608081602481855afa9081156122ac57908b9160009161228a57508c516301ffc9a760e01b815263843c6ae360e01b88820152911698602094909185816024818e5afa908161225657506120a1575050505050505050505050505050565b905060408098506000945060a4969350969194965198899788966311a5cc7760e31b885260048801526001600160a01b039485809216602489015216604487015260648601526084850152165af18015610c5e576123105750565b60405163e985e9c560e01b81523060048201526001600160a01b0391821660248201819052929091169190602081604481865afa908115610c5e57600091612763575b5015612728575050565b813b1561030f5760009160448392604051948593849263a22cb46560e01b84526004840152600160248401525af18015610c5e576121c95750565b906020823d8211612794575b8161277c60209383611b18565b810103126100d2575061278e90611c17565b3861271e565b3d915061276f565b60405163e985e9c560e01b81523060048201526001600160a01b0391821660248201819052929091169190602081604481865afa908115610c5e57600091612822575b506127e8575050565b813b1561030f5760009160448392604051948593849263a22cb46560e01b845260048401528160248401525af18015610c5e576121c95750565b906020823d8211612853575b8161283b60209383611b18565b810103126100d2575061284d90611c17565b386127df565b3d915061282e565b604080516323b872dd60e01b60208083019182526001600160a01b039485166024840152306044840152606480840197909752958252919391929091166128a3608483611b18565b8351908482019282841067ffffffffffffffff851117611b02576129229386528683527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487840152600080958192519082855af13d156129ac573d9161290883611b3a565b9261291588519485611b18565b83523d868985013e6129b0565b90815180612932575b5050505050565b828591810103126100d25750826129499101611c17565b156129565780808061292b565b60849250519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b6060915b91929015612a1257508151156129c4575090565b3b156129cd5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b825190915015612a255750805190602001fd5b60405162461bcd60e51b815260206004820152908190612a49906024830190611fe4565b0390fdfea2646970667358221220218eee362eb0de325b8bd67a16d1f789c9fd477f23d66b7d964b199c98848ae564736f6c63430008120033";

type MagnetarMarketModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MagnetarMarketModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MagnetarMarketModule__factory extends ContractFactory {
  constructor(...args: MagnetarMarketModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MagnetarMarketModule";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MagnetarMarketModule> {
    return super.deploy(overrides || {}) as Promise<MagnetarMarketModule>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MagnetarMarketModule {
    return super.attach(address) as MagnetarMarketModule;
  }
  override connect(signer: Signer): MagnetarMarketModule__factory {
    return super.connect(signer) as MagnetarMarketModule__factory;
  }
  static readonly contractName: "MagnetarMarketModule";

  public readonly contractName: "MagnetarMarketModule";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MagnetarMarketModuleInterface {
    return new utils.Interface(_abi) as MagnetarMarketModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MagnetarMarketModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MagnetarMarketModule;
  }
}
