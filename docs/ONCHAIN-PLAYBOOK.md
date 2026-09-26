# VANTA On-Chain Playbook

## 1. Verify the classic asset

```bash
npm run stellar:asset
```

The canonical VANTA identity is the pair:

```text
VANTA:GABER3CCXQ44LCM5CBHKCPRNLMJFEKN2QKBQHQPJD6TFV3WXU63PKXRP
```

Known mainnet supply: 922,000,000,000 VANTA at 7 decimals.

## 2. Verify the distribution account

Known distribution account:

```text
GCIBP63HOCB6WRL6EF6WBXYMH3PZ4EAWDXH7KUU5AUOZAX3Q4OOFI5NI
```

Prior audit recorded the issuer match, balance and limit as PASS, with an
issuance transaction of `ae81ac1d3cbd8e118e5f0bd2fa42a808b772fd7803c145cabe056707c8bbd68e`.

## 3. Derive the deterministic SAC address

```bash
npm run stellar:sac:id
```

Every Stellar asset has a reserved Stellar Asset Contract address. The address
is deterministic from the asset identity.

## 4. Deploy the SAC

Deployment is a signed mainnet transaction:

```bash
export STELLAR_SOURCE_ACCOUNT="G..."
export STELLAR_SIGNING_KEY="..."
npm run stellar:sac:deploy
```

The Stellar protocol allows anyone to deploy the SAC. The issuer becomes the
initial administrator after deployment.

## 5. Verify the deployed SAC

```bash
export VANTA_SAC_ID="C..."
npm run stellar:sac:verify
```

This reads the SAC's standard identity and administrator fields.

## 6. Transfer SAC administration

Only after the intended administrator is explicitly selected:

```bash
export VANTA_SAC_ID="C..."
export VANTA_SAC_ADMIN="C..."
export STELLAR_SOURCE_ACCOUNT="G..."
export STELLAR_SIGNING_KEY="..."
npm run stellar:sac:admin
```

## 7. Publish and bind stellar.toml

The repository includes `public/.well-known/stellar.toml`.

After the final public domain is deployed and reachable, bind it to the issuer:

```bash
export VANTA_HOME_DOMAIN="your-domain.example"
export STELLAR_SOURCE_ACCOUNT="G..."
export STELLAR_SIGNING_KEY="..."
npm run stellar:home-domain
```

## 8. Known VANTA market layer

The project records the previously established VANTA pools:

- XLM/VANTA: `0883c9…a3bc`
- FARM/VANTA: `7ca950…bd4f`
- SIKE/VANTA: `45755…dd21`

These are historical operational references, not a claim about current reserves.

## What this repository does not automate

No secret key is stored in Git. No mainnet transaction is signed or submitted by
a Git push. Minting, burning, trustline operations, issuer flags, SAC deployment
and SAC administration remain explicit network actions.
