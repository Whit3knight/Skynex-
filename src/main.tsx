import { createRoot } from "react-dom/client";
import { StrictMode, useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import App from "./App.tsx";
import "./index.css";

// Import wallet adapter CSS
import "@solana/wallet-adapter-react-ui/styles.css";

const WalletContextProvider = ({ children }: { children: React.ReactNode }) => {
  // Use environment variable for RPC endpoint, fallback to devnet if not set
  const endpoint = useMemo(() => {
    return (
      import.meta.env.VITE_SOLANA_RPC_ENDPOINT ||
      "https://devnet.helius-rpc.com/?api-key=bc7fe6cf-7c24-4554-aada-85dd07631947" ||
      clusterApiUrl('devnet')
    );
  }, []);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WalletContextProvider>
      <App />
    </WalletContextProvider>
  </StrictMode>
);
