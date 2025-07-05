
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, ArrowRight, DollarSign } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

const ExperiencePreview = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const experiences = [
    {
      id: 1,
      title: "Ngong Forest Clean-up & Tech Workshop",
      location: "Ngong Hills",
      duration: "Full Day",
      participants: "12-20",
      difficulty: "Beginner",
      type: "Service + Tech",
      price: 2500,
      originalPrice: 3000,
      description: "Combine forest conservation with hands-on coding. Clean up trails while building environmental monitoring apps.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      includes: ["Transport", "Lunch", "Tech Workshop", "Certificate"]
    },
    {
      id: 2,
      title: "Bird Mapping Expedition",
      location: "Lake Naivasha",
      duration: "Weekend",
      participants: "8-15",
      difficulty: "Intermediate",
      type: "Adventure + Innovation",
      price: 4500,
      originalPrice: 5500,
      description: "Use drones and mobile apps to map bird populations while enjoying scenic nature walks.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      includes: ["Accommodation", "All Meals", "Drone Training", "Bird Guide"]
    },
    {
      id: 3,
      title: "Indigenous Tech Learning Safari",
      location: "Maasai Mara",
      duration: "3 Days",
      participants: "10-18",
      difficulty: "Advanced",
      type: "Cultural + Innovation",
      price: 8500,
      originalPrice: 10000,
      description: "Learn traditional conservation methods while developing tech solutions with local communities.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      includes: ["Full Board", "Cultural Guide", "Tech Mentorship", "Project Kit"]
    }
  ];

  const handleBookNow = (experience) => {
    setSelectedExperience(experience);
    setIsBookingModalOpen(true);
  };

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
          {experiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
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
                {experience.originalPrice > experience.price && (
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="destructive" className="bg-red-500 text-white">
                      Save KES {experience.originalPrice - experience.price}
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-600 transition-colors flex-1 mr-4">
                    {experience.title}
                  </h3>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-emerald-600 font-bold text-lg">
                      <DollarSign className="w-4 h-4" />
                      <span>KES {experience.price.toLocaleString()}</span>
                    </div>
                    {experience.originalPrice > experience.price && (
                      <div className="text-sm text-muted-foreground line-through">
                        KES {experience.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
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

                <Button 
                  onClick={() => handleBookNow(experience)}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Book Now - KES {experience.price.toLocaleString()}
                </Button>
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

      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        experience={selectedExperience}
      />
    </section>
  );
};

export default ExperiencePreview;
