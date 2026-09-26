import {execFileSync} from "node:child_process";

const sacId=process.env.VANTA_SAC_ID;
const newAdmin=process.env.VANTA_SAC_ADMIN;
const source=process.env.STELLAR_SOURCE_ACCOUNT;
const signingKey=process.env.STELLAR_SIGNING_KEY;

if(!sacId||!newAdmin||!source||!signingKey) throw new Error("Set VANTA_SAC_ID, VANTA_SAC_ADMIN, STELLAR_SOURCE_ACCOUNT and STELLAR_SIGNING_KEY.");

const args=["contract","invoke","--source-account",source,"--sign-with-key",signingKey,"--network","mainnet","--id",sacId,"--","set_admin","--new_admin",newAdmin];
console.log(execFileSync("stellar",args,{encoding:"utf8"}));
