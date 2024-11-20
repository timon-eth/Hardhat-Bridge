// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BscTokenMigration {
    IERC20 public token;
    address public teamTreasuryAddr = 0x44f54A506330573FDc7B7e99AFdDEEd728eE089A;

    constructor(address tokenAddress) {
        token = IERC20(tokenAddress);
    }

    event TokensMigrated(address indexed userEthAddr, string userSolAddr, uint256 amount);

    function migrate(uint256 amount, string memory solanaAddr) external {
        require(amount <= token.allowance(msg.sender, address(this)), "Allowance not sufficient");
        require(amount <= token.balanceOf(msg.sender), "Balance not sufficient");
        
        token.transferFrom(msg.sender, teamTreasuryAddr, amount);
        emit TokensMigrated(msg.sender, solanaAddr, amount);
    }
}