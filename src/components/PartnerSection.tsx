
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Globe, TreePine, Users } from "lucide-react";

const PartnerSection = () => {
  const partners = [
    {
      name: "Ujuzi Manyattas",
      type: "Cultural Conservation",
      description: "Preserving Maasai heritage through technology and sustainable tourism.",
      icon: Users
    },
    {
      name: "Nature Kenya",
      type: "Wildlife Protection",
      description: "Leading conservation efforts for Kenya's birds and biodiversity.",
      icon: TreePine
    },
    {
      name: "Green Belt Movement",
      type: "Environmental Action",
      description: "Empowering communities through environmental conservation and education.",
      icon: Globe
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-emerald-50/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <Handshake className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Partner with Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join our network of conservation organizations and make a greater impact together
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{partner.name}</h3>
                  <div className="text-sm text-emerald-600 font-medium mb-3">{partner.type}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{partner.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Partner with WildVenture Hub?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Bring your conservation program to our community of passionate tech adventurers
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Submit Your Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
