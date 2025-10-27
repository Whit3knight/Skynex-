# Vercel Deployment Configuration

## Environment Variables

Set the following environment variable in your Vercel dashboard:

- **VITE_SOLANA_RPC_ENDPOINT**: Your Solana RPC endpoint
  - For production: https://api.mainnet-beta.solana.com
  - For development: https://api.devnet.solana.com
  - Or use a custom RPC provider (Helius, QuickNode, etc.)

## Steps to Deploy

1. Push your code to GitHub
2. Connect your repository to Vercel
3. In Vercel dashboard, go to Settings > Environment Variables
4. Add VITE_SOLANA_RPC_ENDPOINT with your desired RPC endpoint
5. Deploy!

## Local Development

Copy .env.example to .env.local and update the values as needed.
