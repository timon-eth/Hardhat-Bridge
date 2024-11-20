import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  // const TestBscToken = await ethers.deployContract("TestBscToken"); //defining our contract

  // console.log('Contract deploying by:', TestBscToken.deploymentTransaction().from);
  // console.log('Contract deploying with tx hash:', TestBscToken.deploymentTransaction().hash);
  
  const BscTokenMigration = await ethers.getContractFactory("BscTokenMigration");
  const TokenMigration = await BscTokenMigration.deploy("0x8fe785dC49b4fF4F2b1E1Dfeba2914D776378e7e");
  await TokenMigration.waitForDeployment(); // deploying our contract on network
  console.log('Contract deployed 🎉')
  console.log('Contract address: ', TokenMigration.target) // writing contract address to the console
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
