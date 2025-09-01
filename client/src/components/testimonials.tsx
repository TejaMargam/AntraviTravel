import reviewsData from "@/data/reviews.json";

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      ></i>
    ));
  };

  const testimonials = reviewsData;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-black">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from travelers who lived their moments with Antravi
          </p>
        </div>

        {testimonials.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-xl text-black mb-1">{testimonial.name}</h3>
                      <p className="text-blue-600 font-medium">{testimonial.occasion}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {testimonial.location}
                  </div>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
              <h3 className="font-heading text-3xl font-bold text-black mb-4">
                Reviews Coming Soon
              </h3>
              <p className="text-gray-600 text-lg">
                We're collecting more amazing stories from our travelers. Check
                back soon for more reviews and experiences!
              </p>
              <div className="flex justify-center space-x-2 mt-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-2xl"></i>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
