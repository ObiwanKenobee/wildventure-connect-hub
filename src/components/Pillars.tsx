
import { Card, CardContent } from "@/components/ui/card";
import { Compass, Heart, Lightbulb } from "lucide-react";

const Pillars = () => {
  const pillars = [
    {
      icon: Heart,
      title: "Service",
      description: "Contributing to meaningful conservation efforts while building stronger communities and lasting positive impact.",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Compass,
      title: "Adventure",
      description: "Exploring Kenya's breathtaking landscapes through hiking, eco-treks, and immersive outdoor experiences.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging technology and creative thinking to solve environmental challenges and enhance conservation efforts.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Three Pillars
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            WildVenture Hub is built on three core principles that guide every experience we create
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 ${pillar.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${pillar.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-emerald-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
