
import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, Users, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-green-700" />
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Mountain className="w-8 h-8 text-emerald-300/60" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse">
        <Leaf className="w-6 h-6 text-green-300/60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce delay-300">
        <Users className="w-7 h-7 text-teal-300/60" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Wild<span className="text-emerald-400">Venture</span>
            <br />
            <span className="text-3xl md:text-5xl text-emerald-200">Hub</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-100 mb-4 font-medium">
            Where Tech Meets Conservation Adventure
          </p>
          
          <p className="text-lg text-emerald-200/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join Nairobi's most innovative community of tech enthusiasts exploring nature, 
            supporting conservation, and building meaningful connections through adventure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group"
            >
              Join a Program
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-emerald-300 text-emerald-100 hover:bg-emerald-300 hover:text-emerald-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm"
            >
              Host an Experience
            </Button>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-fade-in delay-100">
            <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-emerald-200">Tech Adventurers</div>
          </div>
          <div className="text-center animate-fade-in delay-200">
            <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-emerald-200">Conservation Projects</div>
          </div>
          <div className="text-center animate-fade-in delay-300">
            <div className="text-3xl font-bold text-emerald-400 mb-2">25+</div>
            <div className="text-emerald-200">Partner Organizations</div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="hsl(var(--background))"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="hsl(var(--background))"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="hsl(var(--background))"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
