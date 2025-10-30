# Skynex Universal Trade

A Web3 gaming marketplace on the Solana blockchain that enables cross‑game item trading with secure wallet integration and a modern UX.

## ✨ Highlights
- **Real Wallet Support**: Phantom and Solflare via Solana Wallet Adapter
- **Devnet Ready**: Defaults to Helius Devnet RPC for fast development
- **Modern Stack**: React 18, TypeScript, Vite, Tailwind, shadcn/ui
- **Responsive UI**: Beautiful, accessible, and mobile‑friendly

## 🧱 Tech Stack
- Frontend: React + TypeScript + Vite
- UI: Tailwind CSS + shadcn/ui
- Web3: `@solana/web3.js`, `@solana/wallet-adapter`
- Wallets: Phantom, Solflare
- Deploy: Vercel (SPA rewrites via `vercel.json`)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Phantom or Solflare wallet installed

### Install & Run
```bash
# Clone the repository
git clone https://github.com/Whit3knight/skynex-universal-trade.git
cd skynex-universal-trade

# Install dependencies
npm install

# Start the dev server
npm run dev
```

## 🔗 RPC Configuration
By default, the app uses a Helius Devnet RPC endpoint for convenience:

```
https://devnet.helius-rpc.com/?api-key=bc7fe6cf-7c24-4554-aada-85dd07631947
```

You can override this by setting an environment variable (recommended for your own key):

```env
VITE_SOLANA_RPC_ENDPOINT=https://devnet.helius-rpc.com/?api-key=<your-helius-api-key>
```

> Note: Do not commit local environment files to version control.

## 🧭 Project Structure
```
src/
├─ components/          # Reusable UI components
├─ contexts/            # React context for wallet state (adapts wallet‑adapter)
├─ hooks/               # Custom React hooks
├─ lib/                 # Utilities
├─ pages/               # Page components (routes)
└─ main.tsx             # Entry; sets up ConnectionProvider & Wallets
```

## 🔒 Security Notes
- Private keys and seed phrases are never requested by the app.
- Always verify transactions in your wallet before approving.
- For production, use a project‑scoped Helius key and rotate as needed.

## 🌐 Deployment (Vercel)
- The project includes a root `vercel.json` to rewrite SPA routes to `index.html`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
- Build command: `npm run build`
- Output directory: `dist`
- Set `VITE_SOLANA_RPC_ENDPOINT` in Vercel Project Settings if you want to override the default.

## 🧪 Development Tips
- Use the built‑in Wallet modal component (`WalletMultiButton`) on the Get Started page.
- The custom `WalletContext` transparently proxies to the official wallet‑adapter hooks.
- Default network is Devnet for faster iteration.

## 📄 License
MIT License. See `LICENSE` if present or add your own as required.
