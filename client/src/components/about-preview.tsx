
import { Button } from "@/components/ui/button";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Why Choose
              </span>
              <br />
              Antravi?
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-6">
                  <i className="fas fa-star text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert Curation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our travel specialists have personally visited every destination we recommend, ensuring authentic experiences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-6">
                  <i className="fas fa-shield-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Protection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Travel with confidence knowing you're covered by comprehensive insurance and 24/7 support.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-6">
                  <i className="fas fa-heart text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Personalized Service</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every journey is tailored to your unique preferences, interests, and travel style.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-full">
                Learn More About Us
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop" 
                alt="Travel planning" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
