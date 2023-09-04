/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ClusterInterface extends utils.Interface {
  functions: {
    "isEditor(address)": FunctionFragment;
    "isWhitelisted(uint8,uint16,address)": FunctionFragment;
    "lzChainId()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateContract(uint8,uint16,address,bool)": FunctionFragment;
    "updateEditor(address,bool)": FunctionFragment;
    "updateLzChain(uint16)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "isEditor"
      | "isEditor(address)"
      | "isWhitelisted"
      | "isWhitelisted(uint8,uint16,address)"
      | "lzChainId"
      | "lzChainId()"
      | "owner"
      | "owner()"
      | "renounceOwnership"
      | "renounceOwnership()"
      | "transferOwnership"
      | "transferOwnership(address)"
      | "updateContract"
      | "updateContract(uint8,uint16,address,bool)"
      | "updateEditor"
      | "updateEditor(address,bool)"
      | "updateLzChain"
      | "updateLzChain(uint16)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isEditor",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isEditor(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted(uint8,uint16,address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "lzChainId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lzChainId()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateContract",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateContract(uint8,uint16,address,bool)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEditor",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEditor(address,bool)",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLzChain",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLzChain(uint16)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "isEditor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isEditor(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted(uint8,uint16,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lzChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lzChainId()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateContract(uint8,uint16,address,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateEditor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateEditor(address,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLzChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLzChain(uint16)",
    data: BytesLike
  ): Result;

  events: {
    "ContractUpdated(address,uint16,uint8,bool,bool)": EventFragment;
    "EditorUpdated(address,bool,bool)": EventFragment;
    "LzChainUpdate(uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ContractUpdated(address,uint16,uint8,bool,bool)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EditorUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "EditorUpdated(address,bool,bool)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LzChainUpdate"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LzChainUpdate(uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
}

export interface ContractUpdatedEventObject {
  _contract: string;
  _lzChainId: number;
  _type: number;
  _oldStatus: boolean;
  _newStatus: boolean;
}
export type ContractUpdatedEvent = TypedEvent<
  [string, number, number, boolean, boolean],
  ContractUpdatedEventObject
>;

export type ContractUpdatedEventFilter = TypedEventFilter<ContractUpdatedEvent>;

export interface EditorUpdatedEventObject {
  _editor: string;
  _oldStatus: boolean;
  _newStatus: boolean;
}
export type EditorUpdatedEvent = TypedEvent<
  [string, boolean, boolean],
  EditorUpdatedEventObject
>;

export type EditorUpdatedEventFilter = TypedEventFilter<EditorUpdatedEvent>;

export interface LzChainUpdateEventObject {
  _oldChain: BigNumber;
  _newChain: BigNumber;
}
export type LzChainUpdateEvent = TypedEvent<
  [BigNumber, BigNumber],
  LzChainUpdateEventObject
>;

export type LzChainUpdateEventFilter = TypedEventFilter<LzChainUpdateEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Cluster extends BaseContract {
  contractName: "Cluster";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ClusterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    isEditor(
      editor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { status: boolean }>;

    "isEditor(address)"(
      editor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { status: boolean }>;

    isWhitelisted(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isWhitelisted(uint8,uint16,address)"(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lzChainId(overrides?: CallOverrides): Promise<[number]>;

    "lzChainId()"(overrides?: CallOverrides): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateContract(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "updateContract(uint8,uint16,address,bool)"(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateEditor(
      _editor: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "updateEditor(address,bool)"(
      _editor: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateLzChain(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "updateLzChain(uint16)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  isEditor(
    editor: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isEditor(address)"(
    editor: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isWhitelisted(
    _whitelistType: PromiseOrValue<BigNumberish>,
    _lzChainId: PromiseOrValue<BigNumberish>,
    _addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isWhitelisted(uint8,uint16,address)"(
    _whitelistType: PromiseOrValue<BigNumberish>,
    _lzChainId: PromiseOrValue<BigNumberish>,
    _addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lzChainId(overrides?: CallOverrides): Promise<number>;

  "lzChainId()"(overrides?: CallOverrides): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateContract(
    _whitelistType: PromiseOrValue<BigNumberish>,
    _lzChainId: PromiseOrValue<BigNumberish>,
    _addr: PromiseOrValue<string>,
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "updateContract(uint8,uint16,address,bool)"(
    _whitelistType: PromiseOrValue<BigNumberish>,
    _lzChainId: PromiseOrValue<BigNumberish>,
    _addr: PromiseOrValue<string>,
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateEditor(
    _editor: PromiseOrValue<string>,
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "updateEditor(address,bool)"(
    _editor: PromiseOrValue<string>,
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateLzChain(
    _lzChainId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "updateLzChain(uint16)"(
    _lzChainId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    isEditor(
      editor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isEditor(address)"(
      editor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isWhitelisted(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isWhitelisted(uint8,uint16,address)"(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lzChainId(overrides?: CallOverrides): Promise<number>;

    "lzChainId()"(overrides?: CallOverrides): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateContract(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateContract(uint8,uint16,address,bool)"(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateEditor(
      _editor: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateEditor(address,bool)"(
      _editor: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateLzChain(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateLzChain(uint16)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ContractUpdated(address,uint16,uint8,bool,bool)"(
      _contract?: PromiseOrValue<string> | null,
      _lzChainId?: PromiseOrValue<BigNumberish> | null,
      _type?: null,
      _oldStatus?: null,
      _newStatus?: null
    ): ContractUpdatedEventFilter;
    ContractUpdated(
      _contract?: PromiseOrValue<string> | null,
      _lzChainId?: PromiseOrValue<BigNumberish> | null,
      _type?: null,
      _oldStatus?: null,
      _newStatus?: null
    ): ContractUpdatedEventFilter;

    "EditorUpdated(address,bool,bool)"(
      _editor?: PromiseOrValue<string> | null,
      _oldStatus?: null,
      _newStatus?: null
    ): EditorUpdatedEventFilter;
    EditorUpdated(
      _editor?: PromiseOrValue<string> | null,
      _oldStatus?: null,
      _newStatus?: null
    ): EditorUpdatedEventFilter;

    "LzChainUpdate(uint256,uint256)"(
      _oldChain?: null,
      _newChain?: null
    ): LzChainUpdateEventFilter;
    LzChainUpdate(_oldChain?: null, _newChain?: null): LzChainUpdateEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    isEditor(
      editor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isEditor(address)"(
      editor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isWhitelisted(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isWhitelisted(uint8,uint16,address)"(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lzChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "lzChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateContract(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "updateContract(uint8,uint16,address,bool)"(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateEditor(
      _editor: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "updateEditor(address,bool)"(
      _editor: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateLzChain(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "updateLzChain(uint16)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isEditor(
      editor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isEditor(address)"(
      editor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWhitelisted(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isWhitelisted(uint8,uint16,address)"(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lzChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lzChainId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateContract(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "updateContract(uint8,uint16,address,bool)"(
      _whitelistType: PromiseOrValue<BigNumberish>,
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateEditor(
      _editor: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "updateEditor(address,bool)"(
      _editor: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateLzChain(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "updateLzChain(uint16)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
