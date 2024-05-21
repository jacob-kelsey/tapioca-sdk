/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type RebaseStruct = {
  elastic: PromiseOrValue<BigNumberish>;
  base: PromiseOrValue<BigNumberish>;
};

export type RebaseStructOutput = [BigNumber, BigNumber] & {
  elastic: BigNumber;
  base: BigNumber;
};

export declare namespace ISingularity {
  export type AccrueInfoStruct = {
    interestPerSecond: PromiseOrValue<BigNumberish>;
    lastAccrued: PromiseOrValue<BigNumberish>;
    feesEarnedFraction: PromiseOrValue<BigNumberish>;
  };

  export type AccrueInfoStructOutput = [BigNumber, BigNumber, BigNumber] & {
    interestPerSecond: BigNumber;
    lastAccrued: BigNumber;
    feesEarnedFraction: BigNumber;
  };
}

export declare namespace ISGLInterestHelper {
  export type InterestRateCallStruct = {
    yieldBox: PromiseOrValue<string>;
    accrueInfo: ISingularity.AccrueInfoStruct;
    assetId: PromiseOrValue<BigNumberish>;
    totalAsset: RebaseStruct;
    totalBorrow: RebaseStruct;
    protocolFee: PromiseOrValue<BigNumberish>;
    interestElasticity: PromiseOrValue<BigNumberish>;
    minimumTargetUtilization: PromiseOrValue<BigNumberish>;
    maximumTargetUtilization: PromiseOrValue<BigNumberish>;
    minimumInterestPerSecond: PromiseOrValue<BigNumberish>;
    maximumInterestPerSecond: PromiseOrValue<BigNumberish>;
    startingInterestPerSecond: PromiseOrValue<BigNumberish>;
  };

  export type InterestRateCallStructOutput = [
    string,
    ISingularity.AccrueInfoStructOutput,
    BigNumber,
    RebaseStructOutput,
    RebaseStructOutput,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    yieldBox: string;
    accrueInfo: ISingularity.AccrueInfoStructOutput;
    assetId: BigNumber;
    totalAsset: RebaseStructOutput;
    totalBorrow: RebaseStructOutput;
    protocolFee: BigNumber;
    interestElasticity: BigNumber;
    minimumTargetUtilization: BigNumber;
    maximumTargetUtilization: BigNumber;
    minimumInterestPerSecond: BigNumber;
    maximumInterestPerSecond: BigNumber;
    startingInterestPerSecond: BigNumber;
  };
}

export interface SGLInterestHelperInterface extends utils.Interface {
  functions: {
    "getInterestRate((address,(uint64,uint64,uint128),uint256,(uint128,uint128),(uint128,uint128),uint256,uint256,uint256,uint256,uint64,uint64,uint64))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getInterestRate"
      | "getInterestRate((address,(uint64,uint64,uint128),uint256,(uint128,uint128),(uint128,uint128),uint256,uint256,uint256,uint256,uint64,uint64,uint64))"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getInterestRate",
    values: [ISGLInterestHelper.InterestRateCallStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getInterestRate((address,(uint64,uint64,uint128),uint256,(uint128,uint128),(uint128,uint128),uint256,uint256,uint256,uint256,uint64,uint64,uint64))",
    values: [ISGLInterestHelper.InterestRateCallStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "getInterestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInterestRate((address,(uint64,uint64,uint128),uint256,(uint128,uint128),(uint128,uint128),uint256,uint256,uint256,uint256,uint64,uint64,uint64))",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SGLInterestHelper extends BaseContract {
  contractName: "SGLInterestHelper";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SGLInterestHelperInterface;

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
    getInterestRate(
      data: ISGLInterestHelper.InterestRateCallStruct,
      overrides?: CallOverrides
    ): Promise<
      [
        ISingularity.AccrueInfoStructOutput,
        RebaseStructOutput,
        RebaseStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        _accrueInfo: ISingularity.AccrueInfoStructOutput;
        _totalBorrow: RebaseStructOutput;
        _totalAsset: RebaseStructOutput;
        extraAmount: BigNumber;
        feeFraction: BigNumber;
        utilization: BigNumber;
      }
    >;

    "getInterestRate((address,(uint64,uint64,uint128),uint256,(uint128,uint128),(uint128,uint128),uint256,uint256,uint256,uint256,uint64,uint64,uint64))"(
      data: ISGLInterestHelper.InterestRateCallStruct,
      overrides?: CallOverrides
    ): Promise<
      [
        ISingularity.AccrueInfoStructOutput,
        RebaseStructOutput,
        RebaseStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        _accrueInfo: ISingularity.AccrueInfoStructOutput;
        _totalBorrow: RebaseStructOutput;
        _totalAsset: RebaseStructOutput;
        extraAmount: BigNumber;
        feeFraction: BigNumber;
        utilization: BigNumber;
      }
    >;
  };

  getInterestRate(
    data: ISGLInterestHelper.InterestRateCallStruct,
    overrides?: CallOverrides
  ): Promise<
    [
      ISingularity.AccrueInfoStructOutput,
      RebaseStructOutput,
      RebaseStructOutput,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      _accrueInfo: ISingularity.AccrueInfoStructOutput;
      _totalBorrow: RebaseStructOutput;
      _totalAsset: RebaseStructOutput;
      extraAmount: BigNumber;
      feeFraction: BigNumber;
      utilization: BigNumber;
    }
  >;

  "getInterestRate((address,(uint64,uint64,uint128),uint256,(uint128,uint128),(uint128,uint128),uint256,uint256,uint256,uint256,uint64,uint64,uint64))"(
    data: ISGLInterestHelper.InterestRateCallStruct,
    overrides?: CallOverrides
  ): Promise<
    [
      ISingularity.AccrueInfoStructOutput,
      RebaseStructOutput,
      RebaseStructOutput,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      _accrueInfo: ISingularity.AccrueInfoStructOutput;
      _totalBorrow: RebaseStructOutput;
      _totalAsset: RebaseStructOutput;
      extraAmount: BigNumber;
      feeFraction: BigNumber;
      utilization: BigNumber;
    }
  >;

  callStatic: {
    getInterestRate(
      data: ISGLInterestHelper.InterestRateCallStruct,
      overrides?: CallOverrides
    ): Promise<
      [
        ISingularity.AccrueInfoStructOutput,
        RebaseStructOutput,
        RebaseStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        _accrueInfo: ISingularity.AccrueInfoStructOutput;
        _totalBorrow: RebaseStructOutput;
        _totalAsset: RebaseStructOutput;
        extraAmount: BigNumber;
        feeFraction: BigNumber;
        utilization: BigNumber;
      }
    >;

    "getInterestRate((address,(uint64,uint64,uint128),uint256,(uint128,uint128),(uint128,uint128),uint256,uint256,uint256,uint256,uint64,uint64,uint64))"(
      data: ISGLInterestHelper.InterestRateCallStruct,
      overrides?: CallOverrides
    ): Promise<
      [
        ISingularity.AccrueInfoStructOutput,
        RebaseStructOutput,
        RebaseStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        _accrueInfo: ISingularity.AccrueInfoStructOutput;
        _totalBorrow: RebaseStructOutput;
        _totalAsset: RebaseStructOutput;
        extraAmount: BigNumber;
        feeFraction: BigNumber;
        utilization: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getInterestRate(
      data: ISGLInterestHelper.InterestRateCallStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getInterestRate((address,(uint64,uint64,uint128),uint256,(uint128,uint128),(uint128,uint128),uint256,uint256,uint256,uint256,uint64,uint64,uint64))"(
      data: ISGLInterestHelper.InterestRateCallStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getInterestRate(
      data: ISGLInterestHelper.InterestRateCallStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getInterestRate((address,(uint64,uint64,uint128),uint256,(uint128,uint128),(uint128,uint128),uint256,uint256,uint256,uint256,uint64,uint64,uint64))"(
      data: ISGLInterestHelper.InterestRateCallStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
