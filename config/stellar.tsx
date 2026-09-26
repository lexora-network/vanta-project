export const stellar={
  network:"public",
  asset:"VANTA",
  issuer:"GABER3CCXQ44LCM5CBHKCPRNLMJFEKN2QKBQHQPJD6TFV3WXU63PKXRP",
  decimals:7,
  supply:"922,000,000,000",
  distribution:"GCIBP63HOCB6WRL6EF6WBXYMH3PZ4EAWDXH7KUU5AUOZAX3Q4OOFI5NI",
  assetId:"VANTA-GABER3CCXQ44LCM5CBHKCPRNLMJFEKN2QKBQHQPJD6TFV3WXU63PKXRP",
  assetString:"VANTA:GABER3CCXQ44LCM5CBHKCPRNLMJFEKN2QKBQHQPJD6TFV3WXU63PKXRP",
  stellarExpertUrl:"https://stellar.expert/explorer/public/asset/VANTA-GABER3CCXQ44LCM5CBHKCPRNLMJFEKN2QKBQHQPJD6TFV3WXU63PKXRP",
  horizonUrl:"https://horizon.stellar.org",
  rpcUrl:"https://mainnet.sorobanrpc.com",
} as const;

export const markets=[
  {pair:"XLM / VANTA",pool:"0883c9…a3bc",initialReserve:"10 XLM + 1,000,000,000 VANTA"},
  {pair:"FARM / VANTA",pool:"7ca950…bd4f",initialReserve:"4,000,000 FARM + 400,000,000 VANTA"},
  {pair:"SIKE / VANTA",pool:"45755…dd21",initialReserve:"2,000,000 SIKE + 200,000,000 VANTA"},
] as const;
