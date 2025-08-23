export default function FeaturedDestination() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            Featured Destination
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in paradise with our carefully curated luxury experiences
          </p>
        </div>
        
        {/* Maldives Feature Card */}
        <div className="bg-white rounded-2xl luxury-shadow overflow-hidden max-w-5xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Maldives luxury resort with overwater bungalows" 
                className="w-full h-64 md:h-full object-cover"
                data-testid="img-maldives"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                The Maldives
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Experience the ultimate tropical paradise where crystal-clear waters meet pristine white sand beaches. 
                Our exclusive Maldives packages include overwater villas, world-class spas, and personalized butler service 
                for an unforgettable luxury escape.
              </p>
              
              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-water text-primary-blue mr-3"></i>
                  <span>Overwater Villa Suites</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-spa text-primary-blue mr-3"></i>
                  <span>World-Class Spa Treatments</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-fish text-primary-blue mr-3"></i>
                  <span>Private Snorkeling & Diving</span>
                </div>
              </div>
              
              <button 
                className="bg-luxury-gold hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 self-start"
                onClick={scrollToContact}
                data-testid="button-enquire-now"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
