
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Calendar, Award } from "lucide-react";

const PricingSection = () => {
  const pricingTiers = [
    {
      name: "Explorer",
      description: "Perfect for first-time adventurers",
      price: "1,500 - 3,000",
      period: "per experience",
      badge: "Most Popular",
      badgeColor: "bg-emerald-500",
      features: [
        "Day trips and workshops",
        "Basic tech training",
        "Group activities (12-20 people)",
        "Certificate of participation",
        "Light refreshments",
        "Transport included"
      ],
      examples: [
        "Forest Clean-up & Coding",
        "Urban Garden Tech Workshop",
        "River Monitoring Basics"
      ],
      icon: Users,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      name: "Adventurer",
      description: "Multi-day experiences with deeper impact",
      price: "4,000 - 6,000",
      period: "per experience",
      badge: "Best Value",
      badgeColor: "bg-blue-500",
      features: [
        "Weekend expeditions",
        "Advanced tech integration",
        "Small groups (8-15 people)",
        "Professional guides",
        "All meals included",
        "Accommodation provided",
        "Equipment rental"
      ],
      examples: [
        "Bird Mapping Expedition",
        "Lake Cleanup & App Development",
        "Wildlife Photography & AI"
      ],
      icon: Calendar,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Pioneer",
      description: "Immersive cultural and conservation programs",
      price: "8,000 - 12,000",
      period: "per experience",
      badge: "Premium",
      badgeColor: "bg-purple-500",
      features: [
        "3-7 day immersive programs",
        "Indigenous community collaboration",
        "Exclusive small groups (6-12 people)",
        "Expert mentorship",
        "Full board accommodation",
        "Cultural exchange activities",
        "Project development kit",
        "Follow-up support"
      ],
      examples: [
        "Maasai Tech Safari",
        "Coastal Conservation Intensive",
        "Mountain Reforestation Project"
      ],
      icon: Award,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const additionalServices = [
    {
      title: "Corporate Packages",
      description: "Team building with purpose",
      price: "Contact for pricing",
      features: ["Customized experiences", "Leadership workshops", "CSR integration"]
    },
    {
      title: "School Programs",
      description: "Educational field trips",
      price: "KES 800 - 1,200 per student",
      features: ["Curriculum aligned", "Safety certified", "Group discounts"]
    },
    {
      title: "Partner Organizations",
      description: "NGO collaboration rates",
      price: "Up to 40% discount",
      features: ["Bulk booking rates", "Flexible scheduling", "Impact reporting"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-emerald-50/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Adventure Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect experience level for your conservation and tech adventure journey
          </p>
        </div>

        {/* Main Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  index === 1 ? 'scale-105 ring-2 ring-emerald-500' : ''
                }`}
              >
                {tier.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className={`${tier.badgeColor} text-white`}>
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${tier.gradient} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                      <p className="text-white/90 text-sm">{tier.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">
                      KES {tier.price}
                    </div>
                    <div className="text-white/80 text-sm">{tier.period}</div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Example Experiences */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm text-foreground">Example Experiences:</h4>
                    <div className="space-y-2">
                      {tier.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-muted-foreground">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${tier.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105`}
                  >
                    View {tier.name} Experiences
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Special Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                <div className="font-bold text-emerald-600 mb-3">{service.price}</div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-emerald-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Adventure?</h3>
            <p className="text-muted-foreground mb-6">
              All prices include professional guidance, safety equipment, and contribute to local conservation efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8">
                Browse All Experiences
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50">
                Contact for Custom Package
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
