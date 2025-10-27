import { useEffect } from "react";
import { Sparkles, Shield, Zap } from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";
import { useNavigate } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";

const GetStarted = () => {
  const { isConnected } = useWallet();
  const { connected } = useSolanaWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected || connected) {
      navigate('/dashboard');
    }
  }, [isConnected, connected, navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating nodes */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-secondary rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-accent rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Icon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Web3 × Gaming</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Welcome to the Future of
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Gaming Trade
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect your wallet to unlock a unified marketplace where your gaming items are truly yours. Trade across games, powered by Solana.
          </p>

          {/* Tagline */}
          <p className="text-lg text-accent font-medium">
            Your inventory, now truly yours.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <WalletMultiButton className="!bg-gradient-primary hover:!opacity-90 !text-primary-foreground !px-8 !py-6 !text-lg !shadow-glow-primary !border-0 !rounded-lg !font-medium !transition-all !duration-300 hover:!scale-105" />
          </div>

          {/* Subtext */}
          <p className="text-sm text-muted-foreground">
            Use <span className="text-primary font-medium">Phantom</span> or{" "}
            <span className="text-secondary font-medium">Solflare</span> wallet — secure, instant access powered by Solana.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Ultra Secure</h3>
              <p className="text-sm text-muted-foreground text-center">
                Blockchain-powered ownership & trading
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm hover:border-secondary/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground text-center">
                Instant transactions on Solana network
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Cross-Game</h3>
              <p className="text-sm text-muted-foreground text-center">
                Trade items across all supported PC games
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
