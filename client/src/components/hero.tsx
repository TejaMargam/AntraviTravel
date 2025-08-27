
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Explore
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Beyond
            </span>
            <span className="block">Boundaries</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
          Embark on extraordinary journeys to the world's most breathtaking destinations. 
          From hidden gems to luxury escapes, we craft experiences that transform your perspective.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            Start Your Journey
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-12 py-4 text-lg font-semibold rounded-full backdrop-blur-sm">
            Discover More
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down text-2xl opacity-70"></i>
      </div>
    </section>
  );
}
