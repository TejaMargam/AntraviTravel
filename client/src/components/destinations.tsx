
export default function Destinations() {
  const destinations = [
    {
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
      description: "Stunning sunsets and white-washed villages perched on volcanic cliffs",
      highlights: ["Luxury Resorts", "Wine Tours", "Private Sailing"]
    },
    {
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
      description: "Ancient temples, zen gardens, and traditional Japanese culture",
      highlights: ["Temple Tours", "Tea Ceremony", "Cherry Blossoms"]
    },
    {
      name: "Patagonia, Chile",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop",
      description: "Dramatic landscapes, glaciers, and unparalleled wilderness adventures",
      highlights: ["Glacier Trekking", "Wildlife Safari", "Luxury Lodges"]
    },
    {
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
      description: "Tropical paradise with pristine beaches and rich cultural heritage",
      highlights: ["Beach Resorts", "Cultural Tours", "Spa Retreats"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Featured Destinations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our handpicked selection of the world's most extraordinary places
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {destinations.map((destination, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="aspect-[4/3] relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="font-heading text-3xl font-bold mb-3">
                  {destination.name}
                </h3>
                <p className="text-lg mb-4 opacity-90 leading-relaxed">
                  {destination.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
