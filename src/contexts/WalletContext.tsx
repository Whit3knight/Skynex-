import React, { createContext, useContext, useState, ReactNode } from 'react';

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
  const [isConnected, setIsConnected] = useState(false);
  const [walletType, setWalletType] = useState<WalletType>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async (type: WalletType) => {
    // Simulate wallet connection
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate mock wallet address
    const mockAddress = `${type?.slice(0, 4)}...${Math.random().toString(36).slice(2, 6)}`;
    
    setWalletType(type);
    setWalletAddress(mockAddress);
    setIsConnected(true);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletType(null);
    setWalletAddress(null);
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        walletType,
        walletAddress,
        connectWallet,
        disconnectWallet,
      }}
    >
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
