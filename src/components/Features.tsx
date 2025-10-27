import { Shield, Zap, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Trading",
      description: "Bank-level encryption and escrow protection for every trade. Your items are always safe.",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Instant Transactions",
      description: "Complete trades in seconds with our optimized platform. No waiting, just trading.",
      color: "text-secondary",
    },
    {
      icon: Users,
      title: "Trusted Community",
      description: "Join 500K+ verified traders. Our trust score system keeps scammers away.",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      title: "Price Tracking",
      description: "Real-time market data and price trends. Make informed trading decisions.",
      color: "text-rarity-rare",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Skynex</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The most trusted platform for gaming item trading
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
