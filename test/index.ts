import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
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
    staking = await getStakingContract(owner, tokenStaking.address, tokenReward.address);
  });

  it("Should stake", async function () {
    const amount = 1000;
    const amountToAdd = 100;
    const totalAmount = amount + amountToAdd;
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
    const stakeHolderFirstAmount = 1000;
    const stakeHolderSecondAmount = 2000;
    const stakeHolderThirdAmount = 2500;

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

  it("Should return reward missed", async function () {
    const stakeHolderFirstAmount = 1000;
    const stakeHolderFirstNewAmount = 2500;
    const stakeHolderSecondAmount = 2000;
    const stakeHolderThirdAmount = 2500;
    const stakeHolderFourthAmount = 5000;

    // stake holder 1 mint and approve 
    await tokenStaking.mint(owner.address, stakeHolderFirstNewAmount);
    await tokenStaking.approve(staking.address, stakeHolderFirstNewAmount);
    // stake holder 2 mint and approve 
    await tokenStaking.mint(accounts[1].address, stakeHolderSecondAmount);
    await tokenStaking.connect(accounts[1]).approve(staking.address, stakeHolderSecondAmount);
    // stake holder 3 mint and approve 
    await tokenStaking.mint(accounts[2].address, stakeHolderThirdAmount);
    await tokenStaking.connect(accounts[2]).approve(staking.address, stakeHolderThirdAmount);
    // stake holder 4 mint and approve 
    await tokenStaking.mint(accounts[3].address, stakeHolderFourthAmount);
    await tokenStaking.connect(accounts[3]).approve(staking.address, stakeHolderFourthAmount);

    // Day 1
    await staking.stake(stakeHolderFirstAmount);
    await simulateTimePassed();
    await staking.updateValues();
    expect(ethers.utils.formatEther((await staking.getStakeHolder(owner.address))["rewardMissed"]))
      .equal("0.0");

    // Day 2
    await staking.connect(accounts[1]).stake(stakeHolderSecondAmount);
    await simulateTimePassed();
    await staking.updateValues();
    expect(ethers.utils.formatEther((await staking.getStakeHolder(owner.address))["rewardMissed"]))
      .equal("0.0");
    expect(ethers.utils.formatEther((await staking.getStakeHolder(accounts[1].address))["rewardMissed"]))
      .equal("200.0");

    // Day 3
    await staking.connect(accounts[2]).stake(stakeHolderThirdAmount);
    await simulateTimePassed();
    await staking.updateValues();
    expect(ethers.utils.formatEther((await staking.getStakeHolder(owner.address))["rewardMissed"]))
      .equal("0.0");
    expect(ethers.utils.formatEther((await staking.getStakeHolder(accounts[1].address))["rewardMissed"]))
      .equal("200.0");
    expect(ethers.utils.formatEther((await staking.getStakeHolder(accounts[2].address))["rewardMissed"]))
      .equal("333.3333333333333325");

    // Day 4
    await staking.stake(stakeHolderFirstNewAmount - stakeHolderFirstAmount);
    await staking.connect(accounts[3]).stake(stakeHolderFourthAmount);
    await simulateTimePassed();
    await staking.updateValues();
    expect(ethers.utils.formatEther((await staking.getStakeHolder(owner.address))["rewardMissed"]))
      .equal("227.272727272727271");
    expect(ethers.utils.formatEther((await staking.getStakeHolder(accounts[1].address))["rewardMissed"]))
      .equal("200.0");
    expect(ethers.utils.formatEther((await staking.getStakeHolder(accounts[2].address))["rewardMissed"]))
      .equal("333.3333333333333325");
    expect(ethers.utils.formatEther((await staking.getStakeHolder(accounts[3].address))["rewardMissed"]))
      .equal("757.57575757575757");
  });

  it("Should return reward available", async function () {
    const stakeHolderFirstAmount = 1000;
    const stakeHolderSecondAmount = 2000;
    const stakeHolderThirdAmount = 2500;

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
});


async function getTokenContract(owner: SignerWithAddress) {
  const factory = new Token__factory(owner);
  const contract = await factory.deploy();
  await contract.deployed();

  return contract;
}

async function getStakingContract(owner: SignerWithAddress, addressTokenStaking: string, addressTokenReward: string) {
  const factory = new Staking__factory(owner);
  const contract = await factory.deploy(addressTokenStaking, addressTokenReward);
  await contract.deployed();

  return contract;
}

async function simulateTimePassed() {
  const duration = 1 * (60 * 60 * 24); // 1days is standard
  await ethers.provider.send('evm_increaseTime', [duration]);
}