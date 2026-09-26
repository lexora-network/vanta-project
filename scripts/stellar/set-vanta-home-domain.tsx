import {execFileSync} from "node:child_process";

const homeDomain=process.env.VANTA_HOME_DOMAIN;
const source=process.env.STELLAR_SOURCE_ACCOUNT;
const signingKey=process.env.STELLAR_SIGNING_KEY;

if(!homeDomain||!source||!signingKey) throw new Error("Set VANTA_HOME_DOMAIN, STELLAR_SOURCE_ACCOUNT and STELLAR_SIGNING_KEY.");

const args=["tx","new","set-options","--source-account",source,"--sign-with-key",signingKey,"--network","mainnet","--home-domain",homeDomain];
console.log(execFileSync("stellar",args,{encoding:"utf8"}));
