
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";

const ExperiencePreview = () => {
  const experiences = [
    {
      title: "Ngong Forest Clean-up & Tech Workshop",
      location: "Ngong Hills",
      duration: "Full Day",
      participants: "12-20",
      difficulty: "Beginner",
      type: "Service + Tech",
      description: "Combine forest conservation with hands-on coding. Clean up trails while building environmental monitoring apps.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    },
    {
      title: "Bird Mapping Expedition",
      location: "Lake Naivasha",
      duration: "Weekend",
      participants: "8-15",
      difficulty: "Intermediate",
      type: "Adventure + Innovation",
      description: "Use drones and mobile apps to map bird populations while enjoying scenic nature walks.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716"
    },
    {
      title: "Indigenous Tech Learning Safari",
      location: "Maasai Mara",
      duration: "3 Days",
      participants: "10-18",
      difficulty: "Advanced",
      type: "Cultural + Innovation",
      description: "Learn traditional conservation methods while developing tech solutions with local communities.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-emerald-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our most popular adventures that blend technology, conservation, and community impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {experiences.map((experience, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-emerald-500 text-white hover:bg-emerald-600">
                    {experience.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-emerald-700 border-emerald-200">
                    {experience.difficulty}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-emerald-600 transition-colors">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-500" />
                    <span>{experience.participants} participants</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            Explore All Experiences
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePreview;
