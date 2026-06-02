import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { getImagePath } from "@/utils/paths";
import { TravelForm } from "./TravelForm";

export default function Destinations() {
  const carouselImages = [
    getImagePath("images/maldives/resorts/reethi/reethi-image-2.webp?w=800&h=600&fit=crop"),
    getImagePath("images/maldives/resorts/dusit/dusit-image-1.webp?w=800&h=600&fit=crop"),
    getImagePath("images/maldives/resorts/nooe/nooe-image-1.webp?w=800&h=600&fit=crop"),
    getImagePath("images/maldives/resorts/westin/westin-image-7.webp?w=800&h=600&fit=crop")
  ];
  const resortsData = [
    "NH Collection Maldives Reethi Resort",
    "Dusit 2 Feydhoo Maldives",
    "NOOE Kanaavashi",
    "The Westin Maldives Miriandhoo"
  ];

  const baliImage = "/images/bali/bali-cover.webp?w=800&h=600&fit=crop";
  const thailandImage = "/images/thailand/thailand-cover.webp?w=800&h=600&fit=crop";

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Featured Destinations Section */}
      <section id="destinations" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Explore the World</span>
            <div className="editorial-divider" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                color: 'var(--charcoal)',
                lineHeight: 1.2,
              }}
            >
              Featured Destinations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Maldives Card */}
            <div
              className="relative overflow-hidden group"
              style={{
                borderRadius: '6px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
              }}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                {carouselImages.map((imageSrc, index) => (
                  <img
                    key={index}
                    src={imageSrc}
                    alt="The Maldives"
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style={{ opacity: index === currentImageIndex ? 1 : 0 }}
                    data-testid={`carousel-image-${index}`}
                  />
                ))}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)' }} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                {/* <p className="section-label" style={{ color: 'rgba(184,150,62,0.9)', marginBottom: '0.4rem' }}>Resort Collection</p> */}
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.4rem' }}>The Maldives</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', opacity: 0.8, marginBottom: '1rem', lineHeight: 1.5 }}>
                  {resortsData[currentImageIndex]}
                </p>
                <Link href="/destinations/maldives" className="transition-opacity hover:opacity-80">
                  <span className="btn-editorial-white" data-testid="button-explore-resorts">
                    Explore
                  </span>
                </Link>
              </div>
            </div>

            {/* Bali Card */}
            <div
              className="relative overflow-hidden group"
              style={{
                borderRadius: '6px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
              }}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={baliImage}
                  alt="Bali"
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)' }} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                {/* <p className="section-label" style={{ color: 'rgba(184,150,62,0.9)', marginBottom: '0.4rem' }}>Island Escapes</p> */}
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.4rem' }}>Bali</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', opacity: 0.8, marginBottom: '1rem', lineHeight: 1.5 }}>
                  Temples, beaches, and culture-packed adventures
                </p>
                <Link href="/destinations/bali" className="transition-opacity hover:opacity-80">
                  <span className="btn-editorial-white" data-testid="button-explore-bali">
                    Explore
                  </span>
                </Link>
              </div>
            </div>

            {/* Thailand Card */}
            <div
              className="relative overflow-hidden group"
              style={{
                borderRadius: '6px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
              }}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={thailandImage}
                  alt="Thailand"
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)' }} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                {/* <p className="section-label" style={{ color: 'rgba(184,150,62,0.9)', marginBottom: '0.4rem' }}>Curated Journeys</p> */}
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.4rem' }}>Thailand</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', opacity: 0.8, marginBottom: '1rem', lineHeight: 1.5 }}>
                  Island hopping, street food, and iconic beaches
                </p>
                <Link href="/destinations/thailand" className="transition-opacity hover:opacity-80">
                  <span className="btn-editorial-white" data-testid="button-explore-thailand">
                    Explore
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacation Description Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Our Promise</span>
          <div className="editorial-divider" />
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
              fontWeight: 400,
              color: 'var(--charcoal)',
              lineHeight: 1.25,
              marginBottom: '1.5rem',
            }}
          >
            Your Journey, Perfected by Antravi
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              color: 'var(--mid-gray)',
              lineHeight: 1.9,
              textAlign: 'justify',
              marginBottom: '2.5rem',
            }}
          >
            Every getaway deserves more than just a plan — it deserves thought, warmth, and a personal touch. Whether it's a romantic honeymoon, a family retreat, or a luxurious escape, every moment with
            Antravi is designed to feel effortless and truly memorable.
            Let your journey be as special as the memories you'll bring home.
          </p>
          <button onClick={handlePlanClick} className="btn-editorial-solid">
            Plan With Antravi
          </button>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">The Process</span>
            <div className="editorial-divider" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                fontWeight: 400,
                color: 'var(--charcoal)',
                lineHeight: 1.25,
              }}
            >
              Plan Your Trip in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                num: '1',
                title: 'Tell us what you need',
                body: "It's your trip, your way. We begin with a conversation to understand what matters to you.",
              },
              {
                num: '2',
                title: 'We curate options',
                body: 'We tailor everything around your preferences.',
              },
              {
                num: '3',
                title: 'Confirm and travel',
                body: 'When you\'re ready, we\'ll be there — to guide and support you, so you can focus on what matters most: Live your Moments.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="text-center">
                <div
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    border: '1px solid var(--navy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                      color: 'var(--navy)',
                    }}
                  >
                    {num}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    fontWeight: 500,
                    color: 'var(--charcoal)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--mid-gray)',
                    lineHeight: 1.8,
                    textAlign: 'justify',
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TravelForm isOpen={isFormOpen} onClose={() => { setIsFormOpen(false); }} />
    </div>
  );
}
