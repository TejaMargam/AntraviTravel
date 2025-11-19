'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-black">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from travelers who lived their moments with Antravi
          </p>
        </div>

        {testimonials.length > 0 ? (
          <div className="relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper py-8"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full mx-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        {/* <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        /> */}
                        <div>
                          <h3 className="font-bold text-xl text-black mb-1">
                            {testimonial.name}
                          </h3>
                          {/* <p className="text-blue-600 font-medium">
                            {testimonial.occasion}
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4 italic">
                      "{testimonial.text}"
                    </p>

                    {/* <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        {testimonial.location}
                      </div>
                      <span>{testimonial.date}</span>
                    </div> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="mt-16 text-center">
            <style jsx global>{`
              .swiper-pagination-bullet {
                background: #3b82f6 !important;
                opacity: 0.3;
                width: 12px;
                height: 12px;
                margin: 0 6px !important;
              }
              .swiper-pagination-bullet-active {
                opacity: 1;
                background: #3b82f6 !important;
              }
              .swiper-button-next,
              .swiper-button-prev {
                color: #3b82f6 !important;
              }
            `}</style>
            <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
              <h3 className="font-heading text-3xl font-bold text-black mb-4">
                Reviews Coming Soon
              </h3>
              <p className="text-gray-600 text-lg">
                We're collecting more amazing moments from our travelers. Check
                back soon for more reviews and experiences!
              </p>
              <div className="flex justify-center space-x-2 mt-6">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className="fas fa-star text-yellow-400 text-2xl"
                  ></i>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
/**

 [
   {
     "id": "review-1",
     "name": "Priya & Arjun",
     "occasion": "Honeymoon",
     "rating": 5,
     "text": "Antravi made our honeymoon absolutely magical! Every detail was perfectly planned, from the overwater villa to the private dinner on the beach. The Maldives exceeded all our expectations.",
     "location": "Conrad Maldives",
     "date": "December 2023",
     "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
   },
   {
     "id": "review-2",
     "name": "The Sharma Family",
     "occasion": "Family Vacation",
     "rating": 5,
     "text": "Traveling with kids can be stressful, but Antravi took care of everything. The resort they chose had amazing family facilities, and the kids' club was fantastic. We could actually relax!",
     "location": "Four Seasons Landaa",
     "date": "January 2024",
     "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
   },
   {
     "id": "review-3",
     "name": "Rohit & Meera",
     "occasion": "Luxury Break",
     "rating": 5,
     "text": "The attention to detail was incredible. From the seaplane transfer to the spa treatments, everything was world-class. Antravi truly understands luxury travel.",
     "location": "Soneva Jani",
     "date": "November 2023",
     "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
   },
   {
     "id": "review-4",
     "name": "Kavita & Rajesh",
     "occasion": "Anniversary",
     "rating": 5,
     "text": "Our 10th anniversary trip was beyond our dreams. The sunset dinner on the private sandbank and the couples spa treatment were unforgettable moments. Thank you Antravi!",
     "location": "Conrad Maldives",
     "date": "February 2024",
     "avatar": "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=100&h=100&fit=crop&crop=face"
   }
 ]

 */
