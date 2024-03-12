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

export interface VestingInterface extends utils.Interface {
  functions: {
    "claim()": FunctionFragment;
    "claimable(address)": FunctionFragment;
    "claimable()": FunctionFragment;
    "cliff()": FunctionFragment;
    "computeTimeFromAmount(uint256,uint256,uint256,uint256)": FunctionFragment;
    "duration()": FunctionFragment;
    "init(address,uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "registerUser(address,uint256)": FunctionFragment;
    "registerUsers(address[],uint256[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "seeded()": FunctionFragment;
    "start()": FunctionFragment;
    "token()": FunctionFragment;
    "totalClaimed()": FunctionFragment;
    "totalRegisteredAmount()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "users(address)": FunctionFragment;
    "vested(address)": FunctionFragment;
    "vested()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claim"
      | "claim()"
      | "claimable(address)"
      | "claimable()"
      | "cliff"
      | "cliff()"
      | "computeTimeFromAmount"
      | "computeTimeFromAmount(uint256,uint256,uint256,uint256)"
      | "duration"
      | "duration()"
      | "init"
      | "init(address,uint256,uint256)"
      | "owner"
      | "owner()"
      | "registerUser"
      | "registerUser(address,uint256)"
      | "registerUsers"
      | "registerUsers(address[],uint256[])"
      | "renounceOwnership"
      | "renounceOwnership()"
      | "seeded"
      | "seeded()"
      | "start"
      | "start()"
      | "token"
      | "token()"
      | "totalClaimed"
      | "totalClaimed()"
      | "totalRegisteredAmount"
      | "totalRegisteredAmount()"
      | "transferOwnership"
      | "transferOwnership(address)"
      | "users"
      | "users(address)"
      | "vested(address)"
      | "vested()"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "claim()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimable(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimable()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cliff", values?: undefined): string;
  encodeFunctionData(functionFragment: "cliff()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "computeTimeFromAmount",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computeTimeFromAmount(uint256,uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "duration()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "init(address,uint256,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerUser",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerUser(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerUsers",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "registerUsers(address[],uint256[])",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "seeded", values?: undefined): string;
  encodeFunctionData(functionFragment: "seeded()", values?: undefined): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(functionFragment: "start()", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(functionFragment: "token()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalClaimed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalClaimed()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalRegisteredAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalRegisteredAmount()",
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
    functionFragment: "users",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "users(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "vested(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "vested()", values?: undefined): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimable(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimable()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cliff", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cliff()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "computeTimeFromAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeTimeFromAmount(uint256,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "duration()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "init(address,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerUser(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerUsers(address[],uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seeded", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "seeded()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "start()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalClaimed()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRegisteredAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRegisteredAmount()",
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
  decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "users(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vested(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vested()", data: BytesLike): Result;

  events: {
    "Claimed(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "UserRegistered(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed(address,uint256)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserRegistered"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "UserRegistered(address,uint256)"
  ): EventFragment;
}

export interface ClaimedEventObject {
  user: string;
  amount: BigNumber;
}
export type ClaimedEvent = TypedEvent<[string, BigNumber], ClaimedEventObject>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

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

export interface UserRegisteredEventObject {
  user: string;
  amount: BigNumber;
}
export type UserRegisteredEvent = TypedEvent<
  [string, BigNumber],
  UserRegisteredEventObject
>;

export type UserRegisteredEventFilter = TypedEventFilter<UserRegisteredEvent>;

export interface Vesting extends BaseContract {
  contractName: "Vesting";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VestingInterface;

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
    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "claim()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "claimable(address)"(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "claimable()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    cliff(overrides?: CallOverrides): Promise<[BigNumber]>;

    "cliff()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    computeTimeFromAmount(
      _start: PromiseOrValue<BigNumberish>,
      _totalAmount: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "computeTimeFromAmount(uint256,uint256,uint256,uint256)"(
      _start: PromiseOrValue<BigNumberish>,
      _totalAmount: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    "duration()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    init(
      _token: PromiseOrValue<string>,
      _seededAmount: PromiseOrValue<BigNumberish>,
      _initialUnlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "init(address,uint256,uint256)"(
      _token: PromiseOrValue<string>,
      _seededAmount: PromiseOrValue<BigNumberish>,
      _initialUnlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    registerUser(
      _user: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "registerUser(address,uint256)"(
      _user: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerUsers(
      _users: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "registerUsers(address[],uint256[])"(
      _users: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    seeded(overrides?: CallOverrides): Promise<[BigNumber]>;

    "seeded()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    start(overrides?: CallOverrides): Promise<[BigNumber]>;

    "start()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;

    totalClaimed(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalClaimed()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalRegisteredAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalRegisteredAmount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        amount: BigNumber;
        claimed: BigNumber;
        latestClaimTimestamp: BigNumber;
        revoked: boolean;
      }
    >;

    "users(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        amount: BigNumber;
        claimed: BigNumber;
        latestClaimTimestamp: BigNumber;
        revoked: boolean;
      }
    >;

    "vested(address)"(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "vested()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  claim(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "claim()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "claimable(address)"(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "claimable()"(overrides?: CallOverrides): Promise<BigNumber>;

  cliff(overrides?: CallOverrides): Promise<BigNumber>;

  "cliff()"(overrides?: CallOverrides): Promise<BigNumber>;

  computeTimeFromAmount(
    _start: PromiseOrValue<BigNumberish>,
    _totalAmount: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    _duration: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "computeTimeFromAmount(uint256,uint256,uint256,uint256)"(
    _start: PromiseOrValue<BigNumberish>,
    _totalAmount: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    _duration: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  "duration()"(overrides?: CallOverrides): Promise<BigNumber>;

  init(
    _token: PromiseOrValue<string>,
    _seededAmount: PromiseOrValue<BigNumberish>,
    _initialUnlock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "init(address,uint256,uint256)"(
    _token: PromiseOrValue<string>,
    _seededAmount: PromiseOrValue<BigNumberish>,
    _initialUnlock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  registerUser(
    _user: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "registerUser(address,uint256)"(
    _user: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerUsers(
    _users: PromiseOrValue<string>[],
    _amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "registerUsers(address[],uint256[])"(
    _users: PromiseOrValue<string>[],
    _amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  seeded(overrides?: CallOverrides): Promise<BigNumber>;

  "seeded()"(overrides?: CallOverrides): Promise<BigNumber>;

  start(overrides?: CallOverrides): Promise<BigNumber>;

  "start()"(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  totalClaimed(overrides?: CallOverrides): Promise<BigNumber>;

  "totalClaimed()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalRegisteredAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "totalRegisteredAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  users(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, boolean] & {
      amount: BigNumber;
      claimed: BigNumber;
      latestClaimTimestamp: BigNumber;
      revoked: boolean;
    }
  >;

  "users(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, boolean] & {
      amount: BigNumber;
      claimed: BigNumber;
      latestClaimTimestamp: BigNumber;
      revoked: boolean;
    }
  >;

  "vested(address)"(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "vested()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    claim(overrides?: CallOverrides): Promise<void>;

    "claim()"(overrides?: CallOverrides): Promise<void>;

    "claimable(address)"(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimable()"(overrides?: CallOverrides): Promise<BigNumber>;

    cliff(overrides?: CallOverrides): Promise<BigNumber>;

    "cliff()"(overrides?: CallOverrides): Promise<BigNumber>;

    computeTimeFromAmount(
      _start: PromiseOrValue<BigNumberish>,
      _totalAmount: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "computeTimeFromAmount(uint256,uint256,uint256,uint256)"(
      _start: PromiseOrValue<BigNumberish>,
      _totalAmount: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    "duration()"(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      _token: PromiseOrValue<string>,
      _seededAmount: PromiseOrValue<BigNumberish>,
      _initialUnlock: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "init(address,uint256,uint256)"(
      _token: PromiseOrValue<string>,
      _seededAmount: PromiseOrValue<BigNumberish>,
      _initialUnlock: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    registerUser(
      _user: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "registerUser(address,uint256)"(
      _user: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    registerUsers(
      _users: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "registerUsers(address[],uint256[])"(
      _users: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    seeded(overrides?: CallOverrides): Promise<BigNumber>;

    "seeded()"(overrides?: CallOverrides): Promise<BigNumber>;

    start(overrides?: CallOverrides): Promise<BigNumber>;

    "start()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    totalClaimed(overrides?: CallOverrides): Promise<BigNumber>;

    "totalClaimed()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalRegisteredAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "totalRegisteredAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        amount: BigNumber;
        claimed: BigNumber;
        latestClaimTimestamp: BigNumber;
        revoked: boolean;
      }
    >;

    "users(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        amount: BigNumber;
        claimed: BigNumber;
        latestClaimTimestamp: BigNumber;
        revoked: boolean;
      }
    >;

    "vested(address)"(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vested()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Claimed(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): ClaimedEventFilter;
    Claimed(
      user?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): ClaimedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "UserRegistered(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): UserRegisteredEventFilter;
    UserRegistered(
      user?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): UserRegisteredEventFilter;
  };

  estimateGas: {
    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "claim()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "claimable(address)"(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimable()"(overrides?: CallOverrides): Promise<BigNumber>;

    cliff(overrides?: CallOverrides): Promise<BigNumber>;

    "cliff()"(overrides?: CallOverrides): Promise<BigNumber>;

    computeTimeFromAmount(
      _start: PromiseOrValue<BigNumberish>,
      _totalAmount: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "computeTimeFromAmount(uint256,uint256,uint256,uint256)"(
      _start: PromiseOrValue<BigNumberish>,
      _totalAmount: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    "duration()"(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      _token: PromiseOrValue<string>,
      _seededAmount: PromiseOrValue<BigNumberish>,
      _initialUnlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "init(address,uint256,uint256)"(
      _token: PromiseOrValue<string>,
      _seededAmount: PromiseOrValue<BigNumberish>,
      _initialUnlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    registerUser(
      _user: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "registerUser(address,uint256)"(
      _user: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerUsers(
      _users: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "registerUsers(address[],uint256[])"(
      _users: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    seeded(overrides?: CallOverrides): Promise<BigNumber>;

    "seeded()"(overrides?: CallOverrides): Promise<BigNumber>;

    start(overrides?: CallOverrides): Promise<BigNumber>;

    "start()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalClaimed(overrides?: CallOverrides): Promise<BigNumber>;

    "totalClaimed()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalRegisteredAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "totalRegisteredAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "users(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vested(address)"(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vested()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "claim()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "claimable(address)"(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimable()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cliff(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cliff()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    computeTimeFromAmount(
      _start: PromiseOrValue<BigNumberish>,
      _totalAmount: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "computeTimeFromAmount(uint256,uint256,uint256,uint256)"(
      _start: PromiseOrValue<BigNumberish>,
      _totalAmount: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "duration()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(
      _token: PromiseOrValue<string>,
      _seededAmount: PromiseOrValue<BigNumberish>,
      _initialUnlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "init(address,uint256,uint256)"(
      _token: PromiseOrValue<string>,
      _seededAmount: PromiseOrValue<BigNumberish>,
      _initialUnlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerUser(
      _user: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "registerUser(address,uint256)"(
      _user: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerUsers(
      _users: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "registerUsers(address[],uint256[])"(
      _users: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    seeded(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "seeded()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    start(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "start()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalClaimed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalClaimed()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalRegisteredAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalRegisteredAmount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "users(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vested(address)"(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vested()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}