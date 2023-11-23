/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ERC721Mock, ERC721MockInterface } from "../../mocks/ERC721Mock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080346200030e576001600160401b039060409080820183811182821017620002f8578252600a8152602092694552433732314d6f636b60b01b84830152825183810181811083821117620002f857845260048152634552434d60e01b85820152825190828211620002f85760008054926001958685811c95168015620002ed575b89861014620002d9578190601f9586811162000286575b5089908683116001146200022257849262000216575b5050600019600383901b1c191690861b1781555b8151938411620002025784548581811c91168015620001f7575b88821014620001e3578381116200019b575b5086928411600114620001355783949596509262000129575b5050600019600383901b1c191690821b1790555b51610f6b9081620003148239f35b01519050388062000107565b9190601f1984169685845280842093905b88821062000183575050838596971062000169575b505050811b0190556200011b565b015160001960f88460031b161c191690553880806200015b565b80878596829496860151815501950193019062000146565b8582528782208480870160051c8201928a8810620001d9575b0160051c019086905b828110620001cd575050620000ee565b838155018690620001bd565b92508192620001b4565b634e487b7160e01b82526022600452602482fd5b90607f1690620000dc565b634e487b7160e01b81526041600452602490fd5b015190503880620000ae565b8480528a85208994509190601f198416865b8d8282106200026f575050841162000255575b505050811b018155620000c2565b015160001960f88460031b161c1916905538808062000247565b8385015186558c9790950194938401930162000234565b9091508380528984208680850160051c8201928c8610620002cf575b918a91869594930160051c01915b828110620002c057505062000098565b8681558594508a9101620002b0565b92508192620002a2565b634e487b7160e01b83526022600452602483fd5b94607f169462000081565b634e487b7160e01b600052604160045260246000fd5b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a71461088d5750816306fdde03146107c2578163081812fc1461079a578163095ea7b31461062157816323b872dd146105f757816340c10f19146104e557816342842e0e146104bc5781636352211e1461048c57816370a08231146103f657816395d89b41146102dd578163a22cb4651461020d578163b88d4fde1461017f578163c87b56dd1461010f575063e985e9c5146100bf57600080fd5b3461010b578060031936011261010b5760ff816020936100dd610938565b6100e5610953565b6001600160a01b0391821683526005875283832091168252855220549151911615158152f35b5080fd5b83833461010b57602036600319011261010b5761014e61014961017b943560005260026020526001600160a01b0360406000205416151590565b610a0e565b81815161015a8161099e565b528051916101678361099e565b8252519182916020835260208301906108f8565b0390f35b919050346102095760803660031901126102095761019b610938565b6101a3610953565b846064359467ffffffffffffffff861161010b573660238701121561010b57850135946101db6101d2876109f2565b955195866109d0565b858552366024878301011161010b578561020696602460209301838801378501015260443591610b1e565b80f35b8280fd5b91905034610209578060031936011261020957610228610938565b90602435918215158093036102d9576001600160a01b0316928333146102975750338452600560205280842083855260205280842060ff1981541660ff8416179055519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b6020606492519162461bcd60e51b8352820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152fd5b8480fd5b8284346103f357806003193601126103f3578151918160019283549384811c918186169586156103e9575b60209687851081146103d6578899509688969785829a5291826000146103af575050600114610354575b50505061017b92916103459103856109d0565b519282849384528301906108f8565b91908693508083527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b828410610397575050508201018161034561017b610332565b8054848a01860152889550879490930192810161037e565b60ff19168782015293151560051b86019093019350849250610345915061017b9050610332565b634e487b7160e01b835260228a52602483fd5b92607f1692610308565b80fd5b8391503461010b57602036600319011261010b576001600160a01b0361041a610938565b169081156104375760208480858581526003845220549051908152f35b608490602085519162461bcd60e51b8352820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152fd5b8284346103f35760203660031901126103f357506001600160a01b036104b460209335610a5a565b915191168152f35b50503461010b57610206906104d036610969565b919251926104dd8461099e565b858452610b1e565b9050346102095781600319360112610209576104ff610938565b916001600160a01b0360243593169182156105b5575061053e6105388460005260026020526001600160a01b0360406000205416151590565b15610ee9565b6105616105388460005260026020526001600160a01b0360406000205416151590565b81845260036020528084206001815401905582845260026020528320816001600160a01b0319825416179055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8180a480f35b6020606492519162461bcd60e51b8352820152602060248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152fd5b83346103f35761020661060936610969565b9161061c6106178433610ba9565b610abc565b610c71565b90503461020957816003193601126102095761063b610938565b90602435926001600160a01b0391828061065487610a5a565b1694169380851461074d5780331490811561072e575b50156106c6578486526020528420805473ffffffffffffffffffffffffffffffffffffffff19168317905561069e83610a5a565b167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258480a480f35b6020608492519162461bcd60e51b8352820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152fd5b90508652600560205281862033875260205260ff82872054163861066a565b506020608492519162461bcd60e51b8352820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152fd5b8284346103f35760203660031901126103f357506001600160a01b036104b460209335610a7f565b8284346103f357806003193601126103f35781519181825492600184811c91818616958615610883575b60209687851081146103d6578899509688969785829a5291826000146103af5750506001146108285750505061017b92916103459103856109d0565b91908693508280527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b82841061086b575050508201018161034561017b610332565b8054848a018601528895508794909301928101610852565b92607f16926107ec565b849134610209576020366003190112610209573563ffffffff60e01b811680910361020957602092506380ac58cd60e01b81149081156108e7575b81156108d6575b5015158152f35b6301ffc9a760e01b149050836108cf565b635b5e139f60e01b811491506108c8565b919082519283825260005b848110610924575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610903565b600435906001600160a01b038216820361094e57565b600080fd5b602435906001600160a01b038216820361094e57565b606090600319011261094e576001600160a01b0390600435828116810361094e5791602435908116810361094e579060443590565b6020810190811067ffffffffffffffff8211176109ba57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176109ba57604052565b67ffffffffffffffff81116109ba57601f01601f191660200190565b15610a1557565b60405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606490fd5b60005260026020526001600160a01b0360406000205416610a7c811515610a0e565b90565b610aa26101498260005260026020526001600160a01b0360406000205416151590565b60005260046020526001600160a01b036040600020541690565b15610ac357565b60405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b6064820152608490fd5b90610b42939291610b326106178433610ba9565b610b3d838383610c71565b610d80565b15610b4957565b60405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608490fd5b906001600160a01b038080610bbd84610a5a565b16931691838314938415610bf0575b508315610bda575b50505090565b610be691929350610a7f565b1614388080610bd4565b909350600052600560205260406000208260005260205260ff604060002054169238610bcc565b15610c1e57565b60405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608490fd5b90610c9991610c7f84610a5a565b916001600160a01b03938493848094169485911614610c17565b16918215610d2f5781610cb691610caf86610a5a565b1614610c17565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60008481526004602052604081206001600160a01b03199081815416905583825260036020526040822060001981540190558482526040822060018154019055858252600260205284604083209182541617905580a4565b60405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b9293600093909291803b15610ede57948491610ddb9660405180948193630a85bd0160e11b978884523360048501526001600160a01b0380921660248501526044840152608060648401528260209b8c9760848301906108f8565b0393165af1849181610e9e575b50610e8d575050503d600014610e85573d610e02816109f2565b90610e1060405192836109d0565b81528091833d92013e5b80519182610e825760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608490fd5b01fd5b506060610e1a565b6001600160e01b0319161492509050565b9091508581813d8311610ed7575b610eb681836109d0565b810103126102d957516001600160e01b0319811681036102d9579038610de8565b503d610eac565b505050915050600190565b15610ef057565b60405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606490fdfea264697066735822122044ac6af85356a4be3c78906b191805869371e661711390b1a8430e7e9269008664736f6c63430008120033";

type ERC721MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Mock__factory extends ContractFactory {
  constructor(...args: ERC721MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721Mock";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721Mock> {
    return super.deploy(overrides || {}) as Promise<ERC721Mock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721Mock {
    return super.attach(address) as ERC721Mock;
  }
  override connect(signer: Signer): ERC721Mock__factory {
    return super.connect(signer) as ERC721Mock__factory;
  }
  static readonly contractName: "ERC721Mock";

  public readonly contractName: "ERC721Mock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721MockInterface {
    return new utils.Interface(_abi) as ERC721MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC721Mock;
  }
}
