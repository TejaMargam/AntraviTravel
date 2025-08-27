
export default function Services() {
  const services = [
    {
      icon: "fas fa-globe-americas",
      title: "Global Adventures",
      description: "Discover hidden gems and iconic destinations across all seven continents with our expert guides.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "fas fa-crown",
      title: "Luxury Experiences",
      description: "Indulge in premium accommodations, private tours, and exclusive access to extraordinary locations.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "fas fa-route",
      title: "Custom Itineraries",
      description: "Personalized travel plans tailored to your interests, schedule, and budget preferences.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: "fas fa-users",
      title: "Group Travel",
      description: "Organize memorable trips for families, friends, corporate teams, and special celebrations.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "fas fa-mountain",
      title: "Adventure Tours",
      description: "Thrilling expeditions for adrenaline seekers, from mountain climbing to deep-sea exploration.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: "fas fa-concierge-bell",
      title: "Concierge Services",
      description: "24/7 support, restaurant reservations, event tickets, and local expertise wherever you go.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From planning to execution, we handle every detail of your journey with precision and care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
