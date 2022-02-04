/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface StakingInterface extends utils.Interface {
  contractName: "Staking";
  functions: {
    "calculateAvailableRewards(address)": FunctionFragment;
    "calculateTps(uint256)": FunctionFragment;
    "claimRewards()": FunctionFragment;
    "dailyReward()": FunctionFragment;
    "getStakeHolder(address)": FunctionFragment;
    "lastUpdateTime()": FunctionFragment;
    "mathConstant()": FunctionFragment;
    "rewardProduced()": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "tokenReward()": FunctionFragment;
    "tokenStaking()": FunctionFragment;
    "totalStaked()": FunctionFragment;
    "tps()": FunctionFragment;
    "updateValues()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateAvailableRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateTps",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dailyReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeHolder",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mathConstant",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardProduced",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "tokenReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenStaking",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalStaked",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tps", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateValues",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateAvailableRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateTps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dailyReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeHolder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mathConstant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardProduced",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateValues",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Staking extends BaseContract {
  contractName: "Staking";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakingInterface;

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
    calculateAvailableRewards(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateTps(
      dayCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dailyReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStakeHolder(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        staked: BigNumber;
        availableReward: BigNumber;
        rewardMissed: BigNumber;
      }
    >;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    mathConstant(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardProduced(overrides?: CallOverrides): Promise<[BigNumber]>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenReward(overrides?: CallOverrides): Promise<[string]>;

    tokenStaking(overrides?: CallOverrides): Promise<[string]>;

    totalStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    tps(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateValues(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calculateAvailableRewards(
    stakeHolderAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateTps(
    dayCount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dailyReward(overrides?: CallOverrides): Promise<BigNumber>;

  getStakeHolder(
    stakeHolderAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      staked: BigNumber;
      availableReward: BigNumber;
      rewardMissed: BigNumber;
    }
  >;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  mathConstant(overrides?: CallOverrides): Promise<BigNumber>;

  rewardProduced(overrides?: CallOverrides): Promise<BigNumber>;

  stake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenReward(overrides?: CallOverrides): Promise<string>;

  tokenStaking(overrides?: CallOverrides): Promise<string>;

  totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

  tps(overrides?: CallOverrides): Promise<BigNumber>;

  updateValues(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calculateAvailableRewards(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateTps(
      dayCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewards(overrides?: CallOverrides): Promise<void>;

    dailyReward(overrides?: CallOverrides): Promise<BigNumber>;

    getStakeHolder(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        staked: BigNumber;
        availableReward: BigNumber;
        rewardMissed: BigNumber;
      }
    >;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    mathConstant(overrides?: CallOverrides): Promise<BigNumber>;

    rewardProduced(overrides?: CallOverrides): Promise<BigNumber>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    tokenReward(overrides?: CallOverrides): Promise<string>;

    tokenStaking(overrides?: CallOverrides): Promise<string>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    tps(overrides?: CallOverrides): Promise<BigNumber>;

    updateValues(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    calculateAvailableRewards(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateTps(
      dayCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dailyReward(overrides?: CallOverrides): Promise<BigNumber>;

    getStakeHolder(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    mathConstant(overrides?: CallOverrides): Promise<BigNumber>;

    rewardProduced(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenReward(overrides?: CallOverrides): Promise<BigNumber>;

    tokenStaking(overrides?: CallOverrides): Promise<BigNumber>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    tps(overrides?: CallOverrides): Promise<BigNumber>;

    updateValues(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateAvailableRewards(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateTps(
      dayCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dailyReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStakeHolder(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mathConstant(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardProduced(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenStaking(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateValues(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}