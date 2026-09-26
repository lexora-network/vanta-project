import {execFileSync} from "node:child_process";
import {stellar} from "../../config/stellar";

const sacId=process.env.VANTA_SAC_ID;
if(!sacId) throw new Error("Set VANTA_SAC_ID to the deployed VANTA SAC contract address.");

const invoke=(method:string)=>execFileSync("stellar",["contract","invoke","--id",sacId,"--network","mainnet","--",method],{encoding:"utf8"}).trim();

console.log(JSON.stringify({
  asset:stellar.assetString,
  sac:sacId,
  symbol:invoke("symbol"),
  name:invoke("name"),
  decimals:invoke("decimals"),
  admin:invoke("admin"),
},null,2));
