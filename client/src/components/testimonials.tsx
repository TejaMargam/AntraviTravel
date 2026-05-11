'use client';

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
        className={`fas fa-star ${i < rating ? "text-yellow-500" : "text-gray-200"}`}
        style={{ fontSize: '0.75rem' }}
      ></i>
    ));
  };

  const testimonials = reviewsData;

  return (
    <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Guest Voices</span>
          <div className="editorial-divider" />
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: 'var(--charcoal)',
              lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}
          >
            What Our Travelers Say
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'var(--mid-gray)',
              maxWidth: '30rem',
              margin: '0 auto',
            }}
          >
            Real stories from travelers who lived their moments with Antravi
          </p>
        </div>

        {testimonials.length > 0 ? (
          <div className="relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mySwiper py-8"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div
                    className="h-full mx-2"
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--warm-border)',
                      borderRadius: '4px',
                      padding: '2rem',
                      position: 'relative',
                    }}
                  >
                    {/* Large quotation mark */}
                    <div
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '5rem',
                        lineHeight: 1,
                        color: 'var(--luxury-gold)',
                        opacity: 0.25,
                        position: 'absolute',
                        top: '1rem',
                        left: '1.5rem',
                        userSelect: 'none',
                      }}
                    >
                      "
                    </div>
                    <div className="flex space-x-1 mb-4" style={{ paddingTop: '1rem' }}>
                      {renderStars(testimonial.rating)}
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.05rem',
                        fontStyle: 'italic',
                        color: 'var(--charcoal)',
                        lineHeight: 1.75,
                        marginBottom: '1.5rem',
                        textAlign: 'justify',
                      }}
                    >
                      "{testimonial.text}"
                    </p>
                    <div
                      style={{
                        width: '1.5rem',
                        height: '1px',
                        backgroundColor: 'var(--luxury-gold)',
                        marginBottom: '0.75rem',
                      }}
                    />
                    <h3
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--charcoal)',
                      }}
                    >
                      {testimonial.name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="text-center mt-16">
            <div
              style={{
                border: '1px solid var(--warm-border)',
                borderRadius: '4px',
                padding: '4rem',
                maxWidth: '40rem',
                margin: '0 auto',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 400,
                  color: 'var(--charcoal)',
                  marginBottom: '1rem',
                }}
              >
                Reviews Coming Soon
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)', fontSize: '0.9rem' }}>
                We're collecting more amazing moments from our travelers. Check back soon!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
