import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { Staking__factory, Token__factory } from "../typechain-types";

async function main() {
  const [owner] = await ethers.getSigners();
  const tokenStaking = await getTokenContract(owner);
  const tokenReward = await getTokenContract(owner);
  const staking = await getStakingContract(owner, tokenStaking.address, tokenReward.address);

  console.log("Token Staking deployed to:", tokenStaking.address);
  console.log("Token Reward deployed to:", tokenReward.address);
  console.log("Staking deployed to:", staking.address);
}

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

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
