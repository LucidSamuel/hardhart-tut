import { formatEther, parseEther } from "viem";
import hre from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);     
  const currentTimestampInSeconds;
  
  const unlockTime = BigInt(currentTimestampInSeconds + 60); 
   
  const lockedAmount = parseEther("0.001");

  const lock = await hre.viem.deployContract("Lock", [unlockTime], {      
    value: lockedAmount,  input: 24,
  }); 

  
  console.log(  
    `Lock with ${formatEther(    
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}` 
  );


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.exit(());
});
