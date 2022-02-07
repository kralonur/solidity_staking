//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

/**
 * @title A staking contract that uses different tokens for staking and reward
 * @author Me
 */
contract Staking is Ownable {
    using SafeERC20 for IERC20;

    /// Total staked to the contract
    uint256 public totalStaked;
    /// Total reward produced
    uint256 public rewardProduced;
    /// Reward to share between stake holders
    uint256 public reward; // default value
    /// Last update time
    uint256 public lastUpdateTime;
    /// Period for claiming {reward}, ex: 1 hour (hourly)
    uint256 public tokenClaimPeriod;
    /// Duration of given {reward}, ex: 200 token for 2 days
    uint256 public duration;
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

    constructor(
        address addressTokenStaking,
        address addressTokenReward,
        uint256 _reward,
        uint256 _tokenClaimPeriod,
        uint256 _duration
    ) {
        tokenStaking = IERC20(addressTokenStaking);
        tokenReward = IERC20(addressTokenReward);
        reward = _reward;
        tokenClaimPeriod = _tokenClaimPeriod;
        duration = _duration;
        lastUpdateTime = block.timestamp;
    }

    /**
     * @dev Emitted when stake holder staked tokens
     * @param stakeHolder The address of the stake holder
     * @param amount The amount of tokens staked
     */
    event Stake(address indexed stakeHolder, uint256 amount);
    /**
     * @dev Emitted when stake holder unstaked tokens
     * @param stakeHolder The address of the stake holder
     * @param amount The amount of tokens unstaked
     */
    event Unstake(address indexed stakeHolder, uint256 amount);
    /**
     * @dev Emitted when stake holder claimed reward tokens
     * @param stakeHolder The address of the stake holder
     * @param amount The amount of reward tokens claimed
     */
    event Claim(address indexed stakeHolder, uint256 amount);

    /**
     * @dev Stakes the amount for the behalf of the stake holder
     * @param amount The amount to stake
     */
    function stake(uint256 amount) external {
        tokenStaking.safeTransferFrom(msg.sender, address(this), amount);
        updateValues();
        totalStaked += amount;
        _stakeHolders[msg.sender].rewardMissed += _calculateMissedRewards(
            amount
        );
        _stakeHolders[msg.sender].staked += amount;

        emit Stake(msg.sender, amount);
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
        tokenStaking.safeTransfer(msg.sender, amount); //for reentrancy

        emit Unstake(msg.sender, amount);
    }

    /**
     * @dev Claims the rewards for the stake holder
     */
    function claimRewards() external {
        updateValues();
        StakeHolder storage stakeHolder = _stakeHolders[msg.sender];
        uint256 awardToClaim = calculateAvailableRewards(msg.sender);

        tokenReward.safeTransfer(msg.sender, awardToClaim);

        stakeHolder.rewardMissed += awardToClaim * precision;

        rewardProduced += awardToClaim;

        emit Claim(msg.sender, awardToClaim);
    }

    /**
     * @dev Sets the parameters for contract
     * @param _reward See {reward}
     * @param _tokenClaimPeriod See {tokenClaimPeriod}
     * @param _duration See {duration}
     */
    function setParameters(
        uint256 _reward,
        uint256 _tokenClaimPeriod,
        uint256 _duration
    ) external onlyOwner {
        reward = _reward;
        tokenClaimPeriod = _tokenClaimPeriod;
        duration = _duration;
    }

    /// See {StakeHolder}
    function getStakeHolder(address stakeHolderAddress)
        external
        view
        returns (StakeHolder memory)
    {
        StakeHolder memory stakeHolder = _stakeHolders[stakeHolderAddress];
        stakeHolder.availableReward = calculateAvailableRewards(
            stakeHolderAddress
        );
        return (stakeHolder);
    }

    /**
     * @dev Updates necessary values to calculate stake
     */
    function updateValues() public {
        uint256 passedTime = (block.timestamp - lastUpdateTime) /
            tokenClaimPeriod;
        lastUpdateTime += passedTime * tokenClaimPeriod;
        tps = calculateTps(passedTime);
    }

    /**
     * @dev Calculates the tps, see{tps}
     * @param passedTime The passed time to calculate tps
     */
    function calculateTps(uint256 passedTime) public view returns (uint256) {
        if (totalStaked == 0) return 0;

        return
            tps +
            ((reward * precision * tokenClaimPeriod) /
                (totalStaked * duration)) *
            passedTime;
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

        return
            (tps *
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
