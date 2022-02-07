import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { Token, Token__factory, Staking, Staking__factory } from "../typechain-types";

describe("Staking", function () {
  let accounts: SignerWithAddress[];
  let owner: SignerWithAddress;
  let tokenStaking: Token;
  let tokenReward: Token;
  let staking: Staking;

  before(async function () {
    accounts = await ethers.getSigners();
    owner = accounts[0];
  });

  beforeEach(async function () {
    tokenStaking = await getTokenContract(owner);
    tokenReward = await getTokenContract(owner);
    staking = await getStakingContract(owner, tokenStaking.address, tokenReward.address, ethers.utils.parseEther("100"));
  });

  it("Should stake", async function () {
    const amount = ethers.utils.parseEther("1000");
    const amountToAdd = ethers.utils.parseEther("100");
    const totalAmount = amount.add(amountToAdd);
    await tokenStaking.mint(owner.address, totalAmount);
    await tokenStaking.approve(staking.address, totalAmount);

    await expect(staking.stake(amount))
      .to.emit(tokenStaking, "Transfer")
      .withArgs(owner.address, staking.address, amount);

    expect(await staking.totalStaked())
      .equal(amount);

    expect((await staking.getStakeHolder(owner.address))["staked"])
      .equal(amount);

    await simulateTimePassed();
    await staking.updateValues();

    await expect(staking.stake(amountToAdd))
      .to.emit(tokenStaking, "Transfer")
      .withArgs(owner.address, staking.address, amountToAdd);

    expect(await staking.totalStaked())
      .equal(totalAmount);

    expect((await staking.getStakeHolder(owner.address))["staked"])
      .equal(totalAmount);
  });

  it("Should return tps", async function () {
    const stakeHolderFirstAmount = ethers.utils.parseEther("1000");
    const stakeHolderSecondAmount = ethers.utils.parseEther("2000");
    const stakeHolderThirdAmount = ethers.utils.parseEther("2500");

    // stake holder 1 mint and approve 
    await tokenStaking.mint(owner.address, stakeHolderFirstAmount);
    await tokenStaking.approve(staking.address, stakeHolderFirstAmount);
    // stake holder 2 mint and approve 
    await tokenStaking.mint(accounts[1].address, stakeHolderSecondAmount);
    await tokenStaking.connect(accounts[1]).approve(staking.address, stakeHolderSecondAmount);
    // stake holder 3 mint and approve 
    await tokenStaking.mint(accounts[2].address, stakeHolderThirdAmount);
    await tokenStaking.connect(accounts[2]).approve(staking.address, stakeHolderThirdAmount);

    // Day 1
    await staking.stake(stakeHolderFirstAmount);
    await simulateTimePassed();
    await staking.updateValues();
    expect(ethers.utils.formatEther(await staking.tps()))
      .equal("0.1");

    // Day 2
    await staking.connect(accounts[1]).stake(stakeHolderSecondAmount);
    await simulateTimePassed();
    await staking.updateValues();
    expect(ethers.utils.formatEther(await staking.tps()))
      .equal("0.133333333333333333");

    // Day 3
    await staking.connect(accounts[2]).stake(stakeHolderThirdAmount);
    await simulateTimePassed();
    await staking.updateValues();
    expect(ethers.utils.formatEther(await staking.tps()))
      .equal("0.151515151515151514");
  });

  it("Should return reward available", async function () {
    const stakeHolderFirstAmount = ethers.utils.parseEther("1000");
    const stakeHolderSecondAmount = ethers.utils.parseEther("2000");
    const stakeHolderThirdAmount = ethers.utils.parseEther("2500");

    // stake holder 1 mint and approve 
    await tokenStaking.mint(owner.address, stakeHolderFirstAmount);
    await tokenStaking.approve(staking.address, stakeHolderFirstAmount);
    // stake holder 2 mint and approve 
    await tokenStaking.mint(accounts[1].address, stakeHolderSecondAmount);
    await tokenStaking.connect(accounts[1]).approve(staking.address, stakeHolderSecondAmount);
    // stake holder 3 mint and approve 
    await tokenStaking.mint(accounts[2].address, stakeHolderThirdAmount);
    await tokenStaking.connect(accounts[2]).approve(staking.address, stakeHolderThirdAmount);

    // Day 1
    await staking.stake(stakeHolderFirstAmount);
    await simulateTimePassed();
    await staking.updateValues();
    expect(ethers.utils.formatEther(await staking.calculateAvailableRewards(owner.address)))
      .equal("100.0");

    // Day 2
    await staking.connect(accounts[1]).stake(stakeHolderSecondAmount);
    await simulateTimePassed();
    await staking.updateValues();
    expect(ethers.utils.formatEther(await staking.calculateAvailableRewards(owner.address)))
      .equal("133.333333333333333");
    expect(ethers.utils.formatEther(await staking.calculateAvailableRewards(accounts[1].address)))
      .equal("66.666666666666666");

    // Day 3
    await staking.connect(accounts[2]).stake(stakeHolderThirdAmount);
    await simulateTimePassed();
    await staking.updateValues();
    expect(ethers.utils.formatEther(await staking.calculateAvailableRewards(owner.address)))
      .equal("151.515151515151514");
    expect(ethers.utils.formatEther(await staking.calculateAvailableRewards(accounts[1].address)))
      .equal("103.030303030303028");
    expect(ethers.utils.formatEther(await staking.calculateAvailableRewards(accounts[2].address)))
      .equal("45.4545454545454525");
  });

  it("Should claim rewards", async function () {
    const stakeHolderFirstAmount = ethers.utils.parseEther("1000");
    const stakeHolderSecondAmount = ethers.utils.parseEther("2000");
    const stakeHolderThirdAmount = ethers.utils.parseEther("2500");

    // stake holder 1 mint and approve 
    await tokenStaking.mint(owner.address, stakeHolderFirstAmount);
    await tokenStaking.approve(staking.address, stakeHolderFirstAmount);
    // stake holder 2 mint and approve 
    await tokenStaking.mint(accounts[1].address, stakeHolderSecondAmount);
    await tokenStaking.connect(accounts[1]).approve(staking.address, stakeHolderSecondAmount);
    // stake holder 3 mint and approve 
    await tokenStaking.mint(accounts[2].address, stakeHolderThirdAmount);
    await tokenStaking.connect(accounts[2]).approve(staking.address, stakeHolderThirdAmount);
    // mint reward tokens
    await tokenReward.mint(staking.address, ethers.utils.parseEther("2500"));
    await tokenReward.approve(staking.address, ethers.utils.parseEther("2500"));


    // Day 1
    await staking.stake(stakeHolderFirstAmount);
    await simulateTimePassed();

    // Day 2
    await staking.connect(accounts[1]).stake(stakeHolderSecondAmount);
    await simulateTimePassed();

    // Day 3
    await staking.connect(accounts[2]).stake(stakeHolderThirdAmount);
    await simulateTimePassed();

    await expect(await staking.claimRewards())
      .to.emit(tokenReward, "Transfer")
      .withArgs(staking.address, owner.address, ethers.utils.parseEther("151.515151515151514"));
  });

  it("Should unstake", async function () {
    const stakeHolderFirstAmount = ethers.utils.parseEther("1000");

    // stake holder 1 mint and approve 
    await tokenStaking.mint(owner.address, stakeHolderFirstAmount);
    await tokenStaking.approve(staking.address, stakeHolderFirstAmount.mul(2)); // for unstake test

    await staking.stake(stakeHolderFirstAmount);

    await expect(staking.unstake(stakeHolderFirstAmount.mul(3)))
      .to.be.revertedWith("Amount exceeds the staked amount");

    await expect(await staking.unstake(stakeHolderFirstAmount.div(2)))
      .to.emit(tokenStaking, "Transfer")
      .withArgs(staking.address, owner.address, stakeHolderFirstAmount.div(2));
    await staking.unstake(stakeHolderFirstAmount.div(2));

    await staking.stake(stakeHolderFirstAmount);
    await simulateTimePassed();
    await staking.updateValues();
    expect(ethers.utils.formatEther(await staking.calculateAvailableRewards(owner.address)))
      .equal("100.0");
  });

  it("Should update daily reward", async function () {
    const dailyReward = ethers.utils.parseEther("200");

    expect(ethers.utils.formatEther(await staking.dailyReward()))
      .equal("100.0");

    await staking.setParameters(dailyReward);

    expect(ethers.utils.formatEther(await staking.dailyReward()))
      .equal("200.0");
  });
});


async function getTokenContract(owner: SignerWithAddress) {
  const factory = new Token__factory(owner);
  const contract = await factory.deploy();
  await contract.deployed();

  return contract;
}

async function getStakingContract(owner: SignerWithAddress, addressTokenStaking: string, addressTokenReward: string, dailyReward: BigNumber) {
  const factory = new Staking__factory(owner);
  const contract = await factory.deploy(addressTokenStaking, addressTokenReward, dailyReward);
  await contract.deployed();

  return contract;
}

async function simulateTimePassed() {
  const duration = 1 * (60 * 60 * 24); // 1days is standard
  await ethers.provider.send('evm_increaseTime', [duration]);
}