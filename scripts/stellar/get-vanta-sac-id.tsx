import {execFileSync} from "node:child_process";
import {stellar} from "../../config/stellar";

const args=["contract","id","asset","--network","mainnet","--asset",stellar.assetString];
try{console.log(execFileSync("stellar",args,{encoding:"utf8"}).trim());}
catch(error){
  console.error("Could not derive the deterministic VANTA SAC id. Ensure stellar-cli is installed and mainnet is configured.");
  console.error(error instanceof Error?error.message:error);
  process.exit(1);
}
