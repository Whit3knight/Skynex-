import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

type Rarity = "common" | "rare" | "epic" | "legendary";

interface ItemCardProps {
  name: string;
  game: string;
  price: string;
  rarity: Rarity;
  imageUrl: string;
  trend?: number;
}

const rarityColors: Record<Rarity, string> = {
  common: "border-rarity-common shadow-[0_0_15px_hsl(var(--rarity-common)/0.3)]",
  rare: "border-rarity-rare shadow-[0_0_15px_hsl(var(--rarity-rare)/0.4)]",
  epic: "border-rarity-epic shadow-[0_0_15px_hsl(var(--rarity-epic)/0.5)]",
  legendary: "border-rarity-legendary shadow-[0_0_15px_hsl(var(--rarity-legendary)/0.6)]",
};

const rarityBadgeColors: Record<Rarity, string> = {
  common: "bg-rarity-common/20 text-rarity-common border-rarity-common/30",
  rare: "bg-rarity-rare/20 text-rarity-rare border-rarity-rare/30",
  epic: "bg-rarity-epic/20 text-rarity-epic border-rarity-epic/30",
  legendary: "bg-rarity-legendary/20 text-rarity-legendary border-rarity-legendary/30",
};

const ItemCard = ({ name, game, price, rarity, imageUrl, trend }: ItemCardProps) => {
  return (
    <Card 
      className={`
        group relative overflow-hidden border-2 bg-gradient-card
        transition-all duration-300 cursor-pointer
        hover:scale-105 hover:-translate-y-2
        ${rarityColors[rarity]}
      `}
    >
      {/* Item Image */}
      <div className="aspect-square overflow-hidden bg-muted/50 relative">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Rarity Badge */}
        <Badge 
          className={`absolute top-2 right-2 border ${rarityBadgeColors[rarity]}`}
        >
          {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
        </Badge>
      </div>

      {/* Item Details */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{game}</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground">Price</div>
            <div className="text-lg font-bold text-primary">{price}</div>
          </div>
          
          {trend && (
            <div className="flex items-center gap-1 text-accent">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">+{trend}%</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ItemCard;
