import ItemCard from "./ItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeaturedItems = () => {
  const items = [
    {
      name: "Dragon Lore AWP",
      game: "CS:GO",
      price: "$4,299",
      rarity: "legendary" as const,
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop",
      trend: 12,
    },
    {
      name: "Arcana Divine Rapier",
      game: "Dota 2",
      price: "$349",
      rarity: "epic" as const,
      imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=400&fit=crop",
      trend: 8,
    },
    {
      name: "Elderflame Vandal",
      game: "Valorant",
      price: "$89",
      rarity: "rare" as const,
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=400&fit=crop",
      trend: 5,
    },
    {
      name: "Prism Shard",
      game: "League of Legends",
      price: "$24",
      rarity: "rare" as const,
      imageUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=400&fit=crop",
    },
    {
      name: "Obsidian Knife",
      game: "CS:GO",
      price: "$1,899",
      rarity: "legendary" as const,
      imageUrl: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=400&h=400&fit=crop",
      trend: 15,
    },
    {
      name: "Phoenix Banner",
      game: "Apex Legends",
      price: "$45",
      rarity: "epic" as const,
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop",
      trend: 3,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Items</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the most sought-after items across all games
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="rare">Rare</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ItemCard {...item} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="trending">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.filter(item => item.trend).map((item, index) => (
                <div key={index} className="animate-fade-in">
                  <ItemCard {...item} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="new">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.slice(0, 3).map((item, index) => (
                <div key={index} className="animate-fade-in">
                  <ItemCard {...item} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rare">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.filter(item => item.rarity === "legendary" || item.rarity === "epic").map((item, index) => (
                <div key={index} className="animate-fade-in">
                  <ItemCard {...item} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedItems;
