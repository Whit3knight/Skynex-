import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Loader2 } from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";
import { useNavigate } from "react-router-dom";

interface WalletConnectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WalletConnectModal = ({ open, onOpenChange }: WalletConnectModalProps) => {
  const [connecting, setConnecting] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<'phantom' | 'solflare' | null>(null);
  const [connected, setConnected] = useState(false);
  const { connectWallet } = useWallet();
  const navigate = useNavigate();

  const handleConnect = async (type: 'phantom' | 'solflare') => {
    setConnecting(true);
    setSelectedWallet(type);
    
    try {
      await connectWallet(type);
      setConnected(true);
      
      // Navigate to dashboard after brief success display
      setTimeout(() => {
        onOpenChange(false);
        navigate('/dashboard');
        setConnected(false);
        setConnecting(false);
        setSelectedWallet(null);
      }, 1500);
    } catch (error) {
      setConnecting(false);
      setSelectedWallet(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-border/50 bg-card/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {connected ? "Wallet Connected!" : "Connect Your Wallet"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {connected 
              ? "Welcome to Skynex. Redirecting to your dashboard..." 
              : "Choose your preferred Solana wallet to begin trading"}
          </DialogDescription>
        </DialogHeader>

        {connected ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4 animate-fade-in">
            <div className="relative">
              <CheckCircle2 className="h-20 w-20 text-primary animate-glow-pulse" />
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            </div>
            <p className="text-lg font-medium text-foreground">Connection Successful!</p>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            {/* Phantom Wallet */}
            <button
              onClick={() => handleConnect('phantom')}
              disabled={connecting}
              className="w-full group relative overflow-hidden rounded-lg border border-border/50 bg-card/50 hover:bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                    P
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Phantom
                    </h3>
                    <p className="text-sm text-muted-foreground">Most popular Solana wallet</p>
                  </div>
                </div>
                {connecting && selectedWallet === 'phantom' && (
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                )}
              </div>
            </button>

            {/* Solflare Wallet */}
            <button
              onClick={() => handleConnect('solflare')}
              disabled={connecting}
              className="w-full group relative overflow-hidden rounded-lg border border-border/50 bg-card/50 hover:bg-card p-6 transition-all duration-300 hover:border-secondary/50 hover:shadow-glow-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                    S
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                      Solflare
                    </h3>
                    <p className="text-sm text-muted-foreground">Secure and easy to use</p>
                  </div>
                </div>
                {connecting && selectedWallet === 'solflare' && (
                  <Loader2 className="h-5 w-5 animate-spin text-secondary" />
                )}
              </div>
            </button>

            {/* Security Notice */}
            <div className="flex items-start gap-3 mt-6 p-4 rounded-lg bg-muted/30 border border-border/30">
              <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Your security is our priority</p>
                <p>We'll never ask for your private keys or seed phrase. Connect with confidence.</p>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WalletConnectModal;
