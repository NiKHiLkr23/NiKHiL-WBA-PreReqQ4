import { Keypair } from "@solana/web3.js";
import * as fs from "fs";

//Generate a new keypair
const kp = Keypair.generate();
console.log(
  `You've generated a new Solana wallet: ${kp.publicKey.toBase58()} To save your wallet, copy and paste the following into a JSON file: [${
    kp.secretKey
  }]`
);

const secretKeyArray = Array.from(kp.secretKey);

console.log(secretKeyArray);
// Create a new JSON file and save the private key
const filename = "dev-wallet.json";
fs.writeFileSync(filename, JSON.stringify(secretKeyArray, null, 2));
