# Skynex Universal Trade

A Web3 gaming marketplace built on Solana blockchain, enabling cross-game item trading with secure wallet integration.

## 🚀 Features

- **Solana Wallet Integration**: Connect with Phantom and Solflare wallets
- **Cross-Game Trading**: Trade items across multiple PC games
- **Secure Blockchain**: Powered by Solana's fast and secure network
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Design**: Works seamlessly on desktop and mobile

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: shadcn/ui + Tailwind CSS
- **Blockchain**: Solana Web3.js + Wallet Adapter
- **Wallets**: Phantom, Solflare
- **Deployment**: Vercel Ready

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/cd81b8b0-e8cd-48b3-bb3a-7f7834316754) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Phantom or Solflare wallet installed

### Local Development

```bash
# Clone the repository
git clone https://github.com/Whit3knight/skynex-universal-trade.git
cd skynex-universal-trade

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Environment Configuration

Create a `.env.local` file with your Solana RPC endpoint:

```env
VITE_SOLANA_RPC_ENDPOINT=https://api.devnet.solana.com
```

For production, use mainnet:
```env
VITE_SOLANA_RPC_ENDPOINT=https://api.mainnet-beta.solana.com
```

## 🌐 Deployment

### Vercel Deployment

1. **Connect Repository**: Import this repository to Vercel
2. **Set Environment Variables**:
   - `VITE_SOLANA_RPC_ENDPOINT`: Your Solana RPC endpoint
3. **Deploy**: Vercel will automatically build and deploy

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SOLANA_RPC_ENDPOINT` | Solana RPC endpoint | `https://api.mainnet-beta.solana.com` |

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (Wallet, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx            # Application entry point
```

## 🔧 Development

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Wallet**: Solana Wallet Adapter
- **State**: React Context + Hooks

## 📄 License

This project is licensed under the MIT License.
