import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface GameLinkModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  gameName: string;
  gameIcon: string;
}

const GameLinkModal = ({ open, onOpenChange, gameName, gameIcon }: GameLinkModalProps) => {
  const [linking, setLinking] = useState(false);
  const [linked, setLinked] = useState(false);
  const [uid, setUid] = useState("");

  const handleLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uid.trim()) return;

    setLinking(true);

    // Simulate account linking
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLinked(true);
    
    setTimeout(() => {
      toast({
        title: "Account Linked Successfully!",
        description: `Your ${gameName} account has been verified and linked.`,
      });
      onOpenChange(false);
      setLinked(false);
      setLinking(false);
      setUid("");
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-border/50 bg-card/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <span className="text-3xl">{gameIcon}</span>
            {linked ? "Account Linked!" : `Link ${gameName}`}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {linked 
              ? "Your account has been verified successfully" 
              : `Enter your ${gameName} account details to verify ownership`}
          </DialogDescription>
        </DialogHeader>

        {linked ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4 animate-fade-in">
            <div className="relative">
              <CheckCircle2 className="h-20 w-20 text-primary animate-glow-pulse" />
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            </div>
            <p className="text-lg font-medium text-foreground">Verification Complete!</p>
          </div>
        ) : (
          <form onSubmit={handleLink} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="uid" className="text-foreground">
                Game UID / Account ID
              </Label>
              <Input
                id="uid"
                placeholder={`Enter your ${gameName} UID`}
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                className="bg-background border-border focus:border-primary"
                disabled={linking}
              />
              <p className="text-xs text-muted-foreground">
                You can find this in your game settings or profile
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={linking || !uid.trim()}
            >
              {linking ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying Account...
                </>
              ) : (
                "Link Account"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GameLinkModal;
