export default function WhyChoose() {
  const features = [
    {
      icon: "fas fa-crown",
      title: "Luxury Stays",
      description: "Handpicked premium accommodations from overwater villas to mountain lodges, ensuring every moment of your stay exceeds expectations."
    },
    {
      icon: "fas fa-user-tie",
      title: "Personalized Planning",
      description: "Our travel specialists craft bespoke itineraries tailored to your preferences, interests, and travel style for a truly unique experience."
    },
    {
      icon: "fas fa-concierge-bell",
      title: "Hassle-Free Travel",
      description: "From booking to arrival, we handle every detail. Enjoy 24/7 concierge support and seamless coordination for worry-free luxury travel."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            Why Choose Antravi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We create extraordinary travel experiences tailored to your dreams
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group" data-testid={`feature-${index}`}>
              <div className="bg-soft-gray rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-blue transition-colors duration-300">
                <i className={`${feature.icon} text-3xl text-primary-blue group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary-blue mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
