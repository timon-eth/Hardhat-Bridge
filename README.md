# Bsc Test Smart Contract

# deployed bsc migration contract address
0x0d472a0f1e79dCBcFF749321EE387f356BF60310

# deploy
npx hardhat run --network testnet scripts/deploy.ts 

# verify
npx hardhat verify --contract contracts/BscTokenMigration.sol:BscTokenMigration --network testnet 0x0d472a0f1e79dCBcFF749321EE387f356BF60310 0x8fe785dC49b4fF4F2b1E1Dfeba2914D776378e7e
