import {execFileSync} from "node:child_process";
import {stellar} from "../../config/stellar";

const source=process.env.STELLAR_SOURCE_ACCOUNT;
const signingKey=process.env.STELLAR_SIGNING_KEY;

if(!source||!signingKey) throw new Error("Set STELLAR_SOURCE_ACCOUNT and STELLAR_SIGNING_KEY before deploying the VANTA SAC.");

const args=["contract","asset","deploy","--source-account",source,"--sign-with-key",signingKey,"--network","mainnet","--asset",stellar.assetString,"--alias","vanta-sac"];
console.log("Deploying deterministic VANTA Stellar Asset Contract...");
console.log(execFileSync("stellar",args,{encoding:"utf8"}));
