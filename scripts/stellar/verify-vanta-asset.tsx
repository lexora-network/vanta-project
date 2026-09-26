import {Horizon} from "@stellar/stellar-sdk";
import {stellar} from "../../config/stellar";

const server=new Horizon.Server(stellar.horizonUrl);

async function main(){
  const [issuer,assetPage]=await Promise.all([
    server.loadAccount(stellar.issuer),
    server.assets().forCode(stellar.asset).forIssuer(stellar.issuer).limit(1).call(),
  ]);
  const record=assetPage.records[0];
  // Horizon's AssetRecord type changed in newer stellar-sdk versions.
  // Keep the verifier tolerant of the legacy Horizon JSON field names.
  const legacyRecord=record as unknown as {
    amount?:string;
    num_accounts?:string;
    num_trustlines?:string;
    flags?:Record<string,boolean>;
  };
  console.log(JSON.stringify({
    asset:stellar.asset,
    issuer:stellar.issuer,
    issuerAccountExists:Boolean(issuer),
    amount:legacyRecord?.amount??null,
    numAccounts:legacyRecord?.num_accounts??null,
    numTrustlines:legacyRecord?.num_trustlines??null,
    flags:legacyRecord?.flags??null,
  },null,2));
}
main().catch(error=>{console.error(error instanceof Error?error.message:error);process.exit(1);});
