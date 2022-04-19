import { ethers } from 'hardhat';
const fs = require('fs');
import { parse } from 'csv-parse';
import { parseBalanceMap } from './merkle-tree/parse-balance-map';
import { utils } from "ethers";

async function fetchRewards() {
  const rewardsFile = `${__dirname}/rewards-example.csv`;

  const rewards = [] as any;
  const rewardsParser = fs.createReadStream(rewardsFile).pipe(parse({ columns: true }));

  for await (const record of rewardsParser) {
    rewards.push({
      address: record.address,
      earnings: utils.parseEther(record.amount).toHexString(),
      reasons: record.reasons || ''
    });
  }
  return rewards;
}

async function main() {
  const rewards = await fetchRewards();
  const result = parseBalanceMap(rewards);
  await fs.promises.writeFile('result.json', JSON.stringify(result, null, 4));
  const MerkleDistributorFactory = await ethers.getContractFactory('MerkleDistributor');
  const contract = await MerkleDistributorFactory.deploy(process.env.SSV_TOKEN_ADDRESS, result.merkleRoot);
  console.log('MerkleDistributor deployed to:', contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });