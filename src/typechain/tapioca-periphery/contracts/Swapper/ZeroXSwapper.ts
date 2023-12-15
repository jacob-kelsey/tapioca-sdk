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
  PayableOverrides,
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

export type SZeroXSwapDataStruct = {
  sellToken: PromiseOrValue<string>;
  buyToken: PromiseOrValue<string>;
  swapTarget: PromiseOrValue<string>;
  swapCallData: PromiseOrValue<BytesLike>;
};

export type SZeroXSwapDataStructOutput = [string, string, string, string] & {
  sellToken: string;
  buyToken: string;
  swapTarget: string;
  swapCallData: string;
};

export interface ZeroXSwapperInterface extends utils.Interface {
  functions: {
    "swap((address,address,address,bytes),uint256,uint256)": FunctionFragment;
    "zeroXProxy()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "swap"
      | "swap((address,address,address,bytes),uint256,uint256)"
      | "zeroXProxy"
      | "zeroXProxy()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "swap",
    values: [
      SZeroXSwapDataStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap((address,address,address,bytes),uint256,uint256)",
    values: [
      SZeroXSwapDataStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zeroXProxy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "zeroXProxy()",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swap((address,address,address,bytes),uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zeroXProxy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "zeroXProxy()",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ZeroXSwapper extends BaseContract {
  contractName: "ZeroXSwapper";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZeroXSwapperInterface;

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
    swap(
      swapData: SZeroXSwapDataStruct,
      amountIn: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "swap((address,address,address,bytes),uint256,uint256)"(
      swapData: SZeroXSwapDataStruct,
      amountIn: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    zeroXProxy(overrides?: CallOverrides): Promise<[string]>;

    "zeroXProxy()"(overrides?: CallOverrides): Promise<[string]>;
  };

  swap(
    swapData: SZeroXSwapDataStruct,
    amountIn: PromiseOrValue<BigNumberish>,
    minAmountOut: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "swap((address,address,address,bytes),uint256,uint256)"(
    swapData: SZeroXSwapDataStruct,
    amountIn: PromiseOrValue<BigNumberish>,
    minAmountOut: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  zeroXProxy(overrides?: CallOverrides): Promise<string>;

  "zeroXProxy()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    swap(
      swapData: SZeroXSwapDataStruct,
      amountIn: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "swap((address,address,address,bytes),uint256,uint256)"(
      swapData: SZeroXSwapDataStruct,
      amountIn: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    zeroXProxy(overrides?: CallOverrides): Promise<string>;

    "zeroXProxy()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    swap(
      swapData: SZeroXSwapDataStruct,
      amountIn: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "swap((address,address,address,bytes),uint256,uint256)"(
      swapData: SZeroXSwapDataStruct,
      amountIn: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    zeroXProxy(overrides?: CallOverrides): Promise<BigNumber>;

    "zeroXProxy()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    swap(
      swapData: SZeroXSwapDataStruct,
      amountIn: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "swap((address,address,address,bytes),uint256,uint256)"(
      swapData: SZeroXSwapDataStruct,
      amountIn: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    zeroXProxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "zeroXProxy()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
