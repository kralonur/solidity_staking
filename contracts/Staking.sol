//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";

contract Staking {
    uint256 public totalStaked;
    uint256 public rewardProduced;
    uint256 public dailyReward = 100;
    uint256 public lastUpdateTime;
    uint256 public tps;

    uint256 public constant mathConstant = 1e18;

    IERC20 public tokenStaking;
    IERC20 public tokenReward;

    struct StakeHolder {
        uint256 staked;
        uint256 availableReward;
        uint256 rewardMissed;
    }

    mapping(address => StakeHolder) private stakeHolders;

    constructor(address addressTokenStaking, address addressTokenReward) {
        tokenStaking = IERC20(addressTokenStaking);
        tokenReward = IERC20(addressTokenReward);
        lastUpdateTime = block.timestamp;
    }

    function stake(uint256 amount) external {
        tokenStaking.transferFrom(msg.sender, address(this), amount);
        updateValues();
        totalStaked += amount;
        stakeHolders[msg.sender].rewardMissed += calculateMissedRewards(amount);
        stakeHolders[msg.sender].staked += amount;
    }

    function unstake(uint256 amount) external {
        StakeHolder storage stakeHolder = stakeHolders[msg.sender];
        require(
            amount <= stakeHolder.staked,
            "Amount exceeds the staked amount"
        );
        updateValues();
        stakeHolder.availableReward +=
            tps *
            stakeHolder.staked -
            stakeHolder.rewardMissed;
        stakeHolder.staked -= amount;
        stakeHolder.rewardMissed = calculateMissedRewards(stakeHolder.staked);
        totalStaked -= amount;
        tokenStaking.transfer(msg.sender, amount); //for reentrancy
    }

    function claimRewards() external {
        updateValues();
        StakeHolder storage stakeHolder = stakeHolders[msg.sender];
        uint256 awardToClaim = calculateAvailableRewards(msg.sender);

        tokenReward.transfer(msg.sender, awardToClaim);

        stakeHolder.rewardMissed += awardToClaim * mathConstant;
    }

    function updateValues() public {
        uint256 dayCount = (block.timestamp - lastUpdateTime) / 1 days;
        lastUpdateTime += dayCount * 1 days;
        tps = calculateTps(dayCount);
    }

    function calculateTps(uint256 dayCount) public view returns (uint256) {
        if (totalStaked == 0) return 0;

        return tps + ((dailyReward * mathConstant) / totalStaked) * dayCount;
    }

    function calculateMissedRewards(uint256 amount)
        private
        view
        returns (uint256)
    {
        console.log("Amount: %s, Tps: %s", amount, tps);
        return amount * tps;
    }

    function calculateAvailableRewards(address stakeHolderAddress)
        public
        view
        returns (uint256)
    {
        StakeHolder storage stakeHolder = stakeHolders[stakeHolderAddress];
        return
            tps *
            stakeHolder.staked -
            stakeHolder.rewardMissed +
            stakeHolder.availableReward /
            mathConstant;
    }

    function getStakeHolder(address stakeHolderAddress)
        external
        view
        returns (
            uint256 staked,
            uint256 availableReward,
            uint256 rewardMissed
        )
    {
        StakeHolder memory stakeHolder = stakeHolders[stakeHolderAddress];
        return (
            stakeHolder.staked,
            stakeHolder.availableReward,
            stakeHolder.rewardMissed
        );
    }
}
