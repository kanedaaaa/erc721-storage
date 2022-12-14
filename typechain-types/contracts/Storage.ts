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
  PayableOverrides,
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
} from "../common";

export interface StorageInterface extends utils.Interface {
  functions: {
    "getUser(address,address,uint256)": FunctionFragment;
    "store(address,uint256[])": FunctionFragment;
    "withdraw(address,uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getUser" | "store" | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getUser",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "store",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string;

  decodeFunctionResult(functionFragment: "getUser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Store(address,uint256[],address)": EventFragment;
    "Withdraw(address,uint256[],address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Store"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface StoreEventObject {
  _contract: string;
  _id: BigNumber[];
  _staker: string;
}
export type StoreEvent = TypedEvent<
  [string, BigNumber[], string],
  StoreEventObject
>;

export type StoreEventFilter = TypedEventFilter<StoreEvent>;

export interface WithdrawEventObject {
  _contract: string;
  _id: BigNumber[];
  _unstaker: string;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber[], string],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface Storage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StorageInterface;

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
    getUser(
      _contract: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber, BigNumber]>;

    store(
      _contract: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _contract: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getUser(
    _contract: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber[], BigNumber, BigNumber]>;

  store(
    _contract: PromiseOrValue<string>,
    _id: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _contract: PromiseOrValue<string>,
    _id: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getUser(
      _contract: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber, BigNumber]>;

    store(
      _contract: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _contract: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Store(address,uint256[],address)"(
      _contract?: null,
      _id?: null,
      _staker?: null
    ): StoreEventFilter;
    Store(_contract?: null, _id?: null, _staker?: null): StoreEventFilter;

    "Withdraw(address,uint256[],address)"(
      _contract?: null,
      _id?: null,
      _unstaker?: null
    ): WithdrawEventFilter;
    Withdraw(
      _contract?: null,
      _id?: null,
      _unstaker?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    getUser(
      _contract: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    store(
      _contract: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      _contract: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getUser(
      _contract: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    store(
      _contract: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _contract: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
