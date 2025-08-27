
export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      location: "San Francisco, CA",
      text: "Antravi transformed our honeymoon into the most magical experience of our lives. Every detail was perfectly planned, and we discovered places we never knew existed.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b9d85c12?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      location: "Madrid, Spain",
      text: "The level of personalization was incredible. They understood exactly what we wanted and delivered an adventure that exceeded all expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      location: "London, UK",
      text: "From luxury accommodations to hidden local gems, Antravi showed us the authentic soul of every destination. Simply extraordinary!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Real stories from adventurers who trusted us with their dream journeys
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-white/30"
                />
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-white/70">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-lg mr-1"></i>
                ))}
              </div>
              
              <p className="text-lg leading-relaxed opacity-90">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
