import { ethers } from 'hardhat';

async function main() {
  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    'Deploying the contracts with the account:',
    await deployer.getAddress()
  );

  console.log('Account balance:', (await deployer.getBalance()).toString());

  const tokenContract = await ethers.getContractFactory('SSVToken');
  const token = await tokenContract.deploy();
  await token.deployed();

  console.log('SSVToken address:', token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });