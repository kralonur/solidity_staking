//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";

/**
 * @title A staking contract that uses different tokens for staking and reward
 * @author Me
 */
contract Staking {
    /// Total staked to the contract
    uint256 public totalStaked;
    /// Total reward produced
    uint256 public rewardProduced;
    /// Daily reward to share between stake holders
    uint256 public dailyReward = 100 * precision;
    /// Last update time
    uint256 public lastUpdateTime;
    /// Token per stake
    uint256 public tps;

    uint256 public constant precision = 1e18;

    /// Staked token
    IERC20 public tokenStaking;
    /// Reward token
    IERC20 public tokenReward;

    /**
     * @dev This struct holds information about the stake holder
     * @param staked Staked amount by stake holder
     * @param availableReward Available reward for the stake holder
     * @param rewardMissed Missed reward for the stake holder
     */
    struct StakeHolder {
        uint256 staked;
        uint256 availableReward;
        uint256 rewardMissed;
    }

    /// A mapping for storing stake holders
    mapping(address => StakeHolder) private _stakeHolders;

    constructor(address addressTokenStaking, address addressTokenReward) {
        tokenStaking = IERC20(addressTokenStaking);
        tokenReward = IERC20(addressTokenReward);
        lastUpdateTime = block.timestamp;
    }

    /**
     * @dev Stakes the amount for the behalf of the stake holder
     * @param amount The amount to stake
     */
    function stake(uint256 amount) external {
        tokenStaking.transferFrom(msg.sender, address(this), amount);
        updateValues();
        totalStaked += amount;
        _stakeHolders[msg.sender].rewardMissed += _calculateMissedRewards(
            amount
        );
        _stakeHolders[msg.sender].staked += amount;
    }

    /**
     * @dev Unstakes the amount for the behalf of the stake holder
     * @param amount The amount to unstake
     */
    function unstake(uint256 amount) external {
        StakeHolder storage stakeHolder = _stakeHolders[msg.sender];
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
        stakeHolder.rewardMissed = _calculateMissedRewards(stakeHolder.staked);
        totalStaked -= amount;
        tokenStaking.transfer(msg.sender, amount); //for reentrancy
    }

    /**
     * @dev Claims the rewards for the stake holder
     */
    function claimRewards() external {
        updateValues();
        StakeHolder storage stakeHolder = _stakeHolders[msg.sender];
        uint256 awardToClaim = calculateAvailableRewards(msg.sender);

        tokenReward.transfer(msg.sender, awardToClaim);

        stakeHolder.rewardMissed += awardToClaim * precision;
    }

    /// See {StakeHolder}
    function getStakeHolder(address stakeHolderAddress)
        external
        view
        returns (
            uint256 staked,
            uint256 availableReward,
            uint256 rewardMissed
        )
    {
        StakeHolder memory stakeHolder = _stakeHolders[stakeHolderAddress];
        return (
            stakeHolder.staked,
            stakeHolder.availableReward,
            stakeHolder.rewardMissed
        );
    }

    /**
     * @dev Updates necessary values to calculate stake
     */
    function updateValues() public {
        uint256 dayCount = (block.timestamp - lastUpdateTime) / 1 days;
        lastUpdateTime += dayCount * 1 days;
        tps = calculateTps(dayCount);
    }

    /**
     * @dev Calculates the tps, see{tps}
     * @param dayCount The day count to calculate tps
     */
    function calculateTps(uint256 dayCount) public view returns (uint256) {
        if (totalStaked == 0) return 0;

        return tps + ((dailyReward * precision) / totalStaked) * dayCount;
    }

    /**
     * @dev Calculates the available rewards for the stake holder
     * @param stakeHolderAddress The address of the stake holder
     */
    function calculateAvailableRewards(address stakeHolderAddress)
        public
        view
        returns (uint256)
    {
        StakeHolder storage stakeHolder = _stakeHolders[stakeHolderAddress];

        uint256 dayCount = (block.timestamp - lastUpdateTime) / 1 days;
        console.log(dayCount);
        uint256 currentTps = tps +
            ((dailyReward * precision) / totalStaked) *
            dayCount;

        console.log("OldTps: %s, NewTps: %s", tps, currentTps);

        return
            (currentTps *
                stakeHolder.staked -
                stakeHolder.rewardMissed +
                stakeHolder.availableReward) / precision;
    }

    /**
     * @dev Calculates the missed rewards for the stake holder
     * @param amount The amount of tokens
     */
    function _calculateMissedRewards(uint256 amount)
        private
        view
        returns (uint256)
    {
        return amount * tps;
    }
}
