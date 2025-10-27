import { Button } from "@/components/ui/button";
import { Gamepad2, Search, User, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-7 w-7 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Skynex
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#marketplace" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Marketplace
            </a>
            <a href="#trades" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Trade Hub
            </a>
            <a href="#inventory" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Inventory
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="/get-started">Get Started</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
