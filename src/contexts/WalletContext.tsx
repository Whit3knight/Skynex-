import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { useWallet as useSolanaWallet } from '@solana/wallet-adapter-react';

type WalletType = 'phantom' | 'solflare' | null;

interface WalletContextType {
  isConnected: boolean;
  walletType: WalletType;
  walletAddress: string | null;
  connectWallet: (type: WalletType) => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const { connected, wallet, publicKey, select, connect, disconnect } = useSolanaWallet();

  const value = useMemo<WalletContextType>(() => ({
    isConnected: connected,
    walletType: wallet?.adapter.name?.toLowerCase() as WalletType ?? null,
    walletAddress: publicKey ? publicKey.toBase58() : null,
    connectWallet: async (type: WalletType) => {
      if (!type) throw new Error('Wallet type is required');
      const name = type === 'phantom' ? 'Phantom' : 'Solflare';
      await select(name);
      await connect();
    },
    disconnectWallet: async () => {
      await disconnect();
    },
  }), [connected, wallet, publicKey, select, connect, disconnect]);

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
