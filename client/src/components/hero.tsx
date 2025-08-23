export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Maldives background image with luxury overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-wide">
          ANTRAVI
        </h1>
        <p className="text-xl md:text-2xl font-light mb-4 tracking-wider">
          Live Your Moments
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
          Discover extraordinary luxury destinations and create unforgettable memories with our bespoke travel experiences.
        </p>
        <button 
          className="bg-luxury-gold hover:bg-yellow-600 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 luxury-shadow"
          onClick={scrollToContact}
          data-testid="button-plan-trip"
        >
          Plan Your Trip
        </button>
      </div>
    </section>
  );
}
