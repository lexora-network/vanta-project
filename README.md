# VANTA

VANTA asset website and Stellar operations workspace for the Lexora ecosystem.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Stellar JavaScript SDK
- Stellar CLI

## Structure

```text
app/                    routing, layout and global styles
components/
  brand/                VANTA visual identity
  layout/               global navigation
  sections/             page sections
config/                 product and Stellar constants
docs/                   on-chain operational playbooks
public/
  .well-known/          Stellar TOML metadata
scripts/
  stellar/              reproducible verification and SAC helpers
```

## Development

```bash
npm install
npm run dev
```

## Stellar identity

```text
VANTA:GABER3CCXQ44LCM5CBHKCPRNLMJFEKN2QKBQHQPJD6TFV3WXU63PKXRP
```

Known supply: 922,000,000,000 VANTA.

The repository prepares the same asset/SAC verification workflow used for
Lexora's other Stellar assets. It does not store private keys or submit signed
mainnet transactions during Git operations.
