import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "Our Maldives honeymoon was absolutely perfect. Every detail was flawlessly arranged, from the overwater villa to the private dining experiences. Antravi made our dreams come true."
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "The personalized service was exceptional. Our travel specialist understood exactly what we wanted and delivered beyond expectations. The attention to detail was remarkable."
    },
    {
      name: "Emma Rodriguez",
      location: "London, UK",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b714?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "Antravi transformed our family vacation into an unforgettable adventure. The 24/7 support gave us complete peace of mind, and every recommendation was spot-on."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Discover why travelers choose Antravi for their luxury experiences
          </p>
        </div>
        
        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl luxury-shadow p-8 md:p-12 text-center max-w-3xl mx-auto">
                    <div className="flex items-center justify-center mb-8">
                      <img 
                        src={testimonial.avatar}
                        alt={`${testimonial.name} testimonial`}
                        className="w-20 h-20 rounded-full object-cover mr-6"
                        data-testid={`avatar-${index}`}
                      />
                      <div className="text-left">
                        <h4 className="font-heading text-xl font-bold text-primary-blue">{testimonial.name}</h4>
                        <p className="text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-luxury-gold text-lg"></i>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-blue' : 'bg-gray-300'
                }`}
                onClick={() => goToSlide(index)}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
