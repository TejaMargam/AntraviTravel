
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Ready for Your Next
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Adventure?
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
          Let's plan something extraordinary together. Whether you're dreaming of tropical beaches, 
          mountain peaks, or cultural immersions, we'll make it happen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-paper-plane mr-3"></i>
            Start Planning
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-12 py-6 text-xl font-semibold rounded-full backdrop-blur-sm">
            <i className="fas fa-phone mr-3"></i>
            Call Us Now
          </Button>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-clock text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="opacity-80">We're here whenever you need us</p>
          </div>
          
          <div className="p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-award text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Award Winning</h3>
            <p className="opacity-80">Recognized excellence in travel</p>
          </div>
          
          <div className="p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-thumbs-up text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
            <p className="opacity-80">Guaranteed amazing experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
}
