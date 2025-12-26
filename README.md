# Base Social Bounties

A decentralized task-and-reward engine built on Base. It allows anyone to create incentivized social tasks that are settled instantly on-chain.

## Unique Value Proposition
- **Social Onboarding**: Leverages **Reown AppKit** to allow "Bounty Hunters" to sign up with X or Google, creating a seamless bridge between social platforms and Base L2.
- **Escrow Security**: Funds are held in a smart contract and released only upon task completion, preventing "ghosting" by bounty creators.
- **Base Efficiency**: Extremely low gas fees make micro-bounties ($1 - $5) economically viable for the first time.

## Integration Details
- **Wallet Connection**: Supports all EIP-155 wallets via Reown AppKit.
- **Email/Social Wallets**: Enabled via WalletKit for users without existing crypto wallets.
- **Network**: Deployment target is **Base Mainnet**.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install @reown/appkit @reown/appkit-adapter-ethers ethers
