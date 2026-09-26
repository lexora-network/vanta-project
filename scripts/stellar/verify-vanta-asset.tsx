import {Horizon} from "@stellar/stellar-sdk";
import {stellar} from "../../config/stellar";

const server=new Horizon.Server(stellar.horizonUrl);

async function main(){
  const [issuer,assetPage]=await Promise.all([
    server.loadAccount(stellar.issuer),
    server.assets().forCode(stellar.asset).forIssuer(stellar.issuer).limit(1).call(),
  ]);
  const record=assetPage.records[0];
  console.log(JSON.stringify({
    asset:stellar.asset,
    issuer:stellar.issuer,
    issuerAccountExists:Boolean(issuer),
    amount:record?.amount??null,
    numAccounts:record?.num_accounts??null,
    numTrustlines:record?.num_trustlines??null,
    flags:record?.flags??null,
  },null,2));
}
main().catch(error=>{console.error(error instanceof Error?error.message:error);process.exit(1);});
