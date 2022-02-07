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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace Staking {
  export type StakeHolderStruct = {
    staked: BigNumberish;
    availableReward: BigNumberish;
    rewardMissed: BigNumberish;
  };

  export type StakeHolderStructOutput = [BigNumber, BigNumber, BigNumber] & {
    staked: BigNumber;
    availableReward: BigNumber;
    rewardMissed: BigNumber;
  };
}

export interface StakingInterface extends utils.Interface {
  contractName: "Staking";
  functions: {
    "calculateAvailableRewards(address)": FunctionFragment;
    "calculateTps(uint256)": FunctionFragment;
    "claimRewards()": FunctionFragment;
    "dailyReward()": FunctionFragment;
    "getStakeHolder(address)": FunctionFragment;
    "lastUpdateTime()": FunctionFragment;
    "owner()": FunctionFragment;
    "precision()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardProduced()": FunctionFragment;
    "setParameters(uint256)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "tokenReward()": FunctionFragment;
    "tokenStaking()": FunctionFragment;
    "totalStaked()": FunctionFragment;
    "tps()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unstake(uint256)": FunctionFragment;
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
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "precision", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardProduced",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setParameters",
    values: [BigNumberish]
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
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish]
  ): string;
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
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "precision", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardProduced",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setParameters",
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
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateValues",
    data: BytesLike
  ): Result;

  events: {
    "Claim(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Stake(address,uint256)": EventFragment;
    "Unstake(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unstake"): EventFragment;
}

export type ClaimEvent = TypedEvent<
  [string, BigNumber],
  { stakeHolder: string; amount: BigNumber }
>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type StakeEvent = TypedEvent<
  [string, BigNumber],
  { stakeHolder: string; amount: BigNumber }
>;

export type StakeEventFilter = TypedEventFilter<StakeEvent>;

export type UnstakeEvent = TypedEvent<
  [string, BigNumber],
  { stakeHolder: string; amount: BigNumber }
>;

export type UnstakeEventFilter = TypedEventFilter<UnstakeEvent>;

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
    ): Promise<[Staking.StakeHolderStructOutput]>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    precision(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardProduced(overrides?: CallOverrides): Promise<[BigNumber]>;

    setParameters(
      _dailyReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenReward(overrides?: CallOverrides): Promise<[string]>;

    tokenStaking(overrides?: CallOverrides): Promise<[string]>;

    totalStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    tps(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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
  ): Promise<Staking.StakeHolderStructOutput>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  precision(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardProduced(overrides?: CallOverrides): Promise<BigNumber>;

  setParameters(
    _dailyReward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenReward(overrides?: CallOverrides): Promise<string>;

  tokenStaking(overrides?: CallOverrides): Promise<string>;

  totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

  tps(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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
    ): Promise<Staking.StakeHolderStructOutput>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    precision(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardProduced(overrides?: CallOverrides): Promise<BigNumber>;

    setParameters(
      _dailyReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    tokenReward(overrides?: CallOverrides): Promise<string>;

    tokenStaking(overrides?: CallOverrides): Promise<string>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    tps(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unstake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    updateValues(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Claim(address,uint256)"(
      stakeHolder?: string | null,
      amount?: null
    ): ClaimEventFilter;
    Claim(stakeHolder?: string | null, amount?: null): ClaimEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Stake(address,uint256)"(
      stakeHolder?: string | null,
      amount?: null
    ): StakeEventFilter;
    Stake(stakeHolder?: string | null, amount?: null): StakeEventFilter;

    "Unstake(address,uint256)"(
      stakeHolder?: string | null,
      amount?: null
    ): UnstakeEventFilter;
    Unstake(stakeHolder?: string | null, amount?: null): UnstakeEventFilter;
  };

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

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    precision(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardProduced(overrides?: CallOverrides): Promise<BigNumber>;

    setParameters(
      _dailyReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenReward(overrides?: CallOverrides): Promise<BigNumber>;

    tokenStaking(overrides?: CallOverrides): Promise<BigNumber>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    tps(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    precision(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardProduced(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setParameters(
      _dailyReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenStaking(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateValues(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
