import { useState, useEffect } from "react";
import { useWallet } from "@/contexts/WalletContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Plus, TrendingUp, Shield, Package } from "lucide-react";
import GameLinkModal from "@/components/GameLinkModal";

interface Game {
  id: string;
  name: string;
  icon: string;
  linked: boolean;
}

const Dashboard = () => {
  const { isConnected, walletAddress, walletType, disconnectWallet } = useWallet();
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [games, setGames] = useState<Game[]>([
    { id: '1', name: 'Valorant', icon: '🎯', linked: false },
    { id: '2', name: 'Dota 2', icon: '⚔️', linked: false },
    { id: '3', name: 'Apex Legends', icon: '🎮', linked: false },
    { id: '4', name: 'Rust', icon: '🔨', linked: false },
    { id: '5', name: 'CS:GO', icon: '🔫', linked: false },
    { id: '6', name: 'Team Fortress 2', icon: '🎪', linked: false },
  ]);

  useEffect(() => {
    if (!isConnected) {
      navigate('/get-started');
    }
  }, [isConnected, navigate]);

  const handleDisconnect = () => {
    disconnectWallet();
    navigate('/get-started');
  };

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
    setModalOpen(true);
  };

  if (!isConnected) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Skynex
              </h1>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-primary font-medium capitalize">{walletType}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50">
                <span className="text-sm text-muted-foreground">Wallet:</span>
                <span className="text-sm font-mono text-foreground">{walletAddress}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDisconnect}
                className="border-border/50 hover:border-destructive/50 hover:text-destructive"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Disconnect
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Welcome Section */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Welcome, <span className="bg-gradient-primary bg-clip-text text-transparent">{walletAddress}</span> 👋
            </h2>
            <p className="text-muted-foreground text-lg">
              Connect your first game to start trading and managing your items
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in">
            <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Items</h3>
              </div>
              <p className="text-3xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground mt-1">Link a game to view</p>
            </div>

            <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground">Total Value</h3>
              </div>
              <p className="text-3xl font-bold text-secondary">$0.00</p>
              <p className="text-sm text-muted-foreground mt-1">Across all games</p>
            </div>

            <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Trust Score</h3>
              </div>
              <p className="text-3xl font-bold text-accent">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Perfect record</p>
            </div>
          </div>

          {/* Select Your Game */}
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Select Your Game</h3>
                <p className="text-muted-foreground">Link your game accounts to unlock your inventory</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {games.map((game) => (
                <button
                  key={game.id}
                  onClick={() => handleGameClick(game)}
                  className="group relative p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-glow-primary text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{game.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">
                        {game.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {game.linked ? "Linked ✓" : "Not linked"}
                      </p>
                    </div>
                    <Plus className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Inventory Preview */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">Your Inventory</h3>
            <div className="flex flex-col items-center justify-center py-20 rounded-lg border border-dashed border-border/50 bg-muted/10">
              <Package className="h-16 w-16 text-muted-foreground mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">No Items Yet</h4>
              <p className="text-muted-foreground text-center max-w-md">
                Link your first game account to view and manage your in-game items
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Game Link Modal */}
      {selectedGame && (
        <GameLinkModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          gameName={selectedGame.name}
          gameIcon={selectedGame.icon}
        />
      )}
    </div>
  );
};

export default Dashboard;
