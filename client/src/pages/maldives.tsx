import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import resortsData from "@/data/maldives/resorts.json";
import FAQ from "@/components/faq";
import ScrollManager from "@/hooks/ScrollManager";
import { getImagePath } from "@/utils/paths";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import faqsData from "@/data/maldives/faqs.json";
import { TravelForm } from "@/components/TravelForm";

interface Resort {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  tag: string;
  images: string[];
  rating: number;
  "StartsFrom ": string;
  duration: string;
  location: string;
  features: string[];
  amenities: string[];
  roomTypes: string[];
}

export default function Resorts() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedResort, setSelectedResort] = useState<Resort | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? "text-yellow-500" : "text-gray-200"}`}
        style={{ fontSize: '0.75rem' }}
      ></i>
    ));
  };

  const resorts: Resort[] = resortsData;

  const handleResortClick = (resort: Resort) => {
    setSelectedResort(resort);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedResort) {
      setSelectedImageIndex((prev) =>
        prev === selectedResort.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedResort) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? selectedResort.images.length - 1 : prev - 1,
      );
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <ScrollManager />
      <Navbar />

      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover aerial-drift">
            <source src="/videos/maldives.mp4" type="video/mp4" />
            <track kind="captions" src="/captions/maldives.vtt" srcLang="en" label="English captions" default />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(22,38,96,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="cinematic-rule" style={{ width: '2.5rem', height: '1px', background: 'rgba(184,150,62,0.9)', margin: '0 auto 1.5rem' }} />
          <h1
            className="cinematic-title"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '0.03em',
              marginBottom: '0.75rem',
              lineHeight: 1.15,
            }}
          >
            Maldives Resorts
          </h1>
          <p className="cinematic-subtitle" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '2rem' }}>
            Discover our handpicked collection of resorts
          </p>
          <div className="cinematic-cta">
            <button onClick={handlePlanClick} className="btn-editorial-white">
              Plan With Antravi
            </button>
          </div>
        </div>
      </section>

      {/* Resorts Grid */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {resorts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resorts.map((resort) => (
                <div
                  key={resort.id}
                  className="editorial-card overflow-hidden cursor-pointer"
                  onClick={() => handleResortClick(resort)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={getImagePath(resort.images[0])}
                      alt={resort.name}
                      width={400}
                      height={300}
                      loading="eager"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {resort.tag && (
                      <div
                        className="absolute top-3 left-3"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.92)',
                          padding: '0.25rem 0.75rem',
                          fontSize: '0.65rem',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 500,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--navy)',
                        }}
                      >
                        {resort.tag}
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.2rem',
                        fontWeight: 500,
                        color: 'var(--charcoal)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {resort.name}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--mid-gray)', marginBottom: '0.75rem' }}>
                      {resort.shortDescription}
                    </p>

                    <div className="flex space-x-1 mb-3">
                      {renderStars(resort.rating)}
                    </div>

                    <div className="flex items-center mb-3" style={{ fontSize: '0.8rem', color: 'var(--mid-gray)' }}>
                      <i className="fas fa-map-marker-alt mr-2" style={{ color: 'var(--luxury-gold)' }}></i>
                      {resort.location}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {resort.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.65rem',
                            letterSpacing: '0.06em',
                            padding: '0.2rem 0.6rem',
                            border: '1px solid var(--warm-border)',
                            color: 'var(--mid-gray)',
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                      {resort.features.length > 3 && (
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.65rem',
                            letterSpacing: '0.06em',
                            padding: '0.2rem 0.6rem',
                            border: '1px solid var(--warm-border)',
                            color: 'var(--mid-gray)',
                          }}
                        >
                          +{resort.features.length - 3} more
                        </span>
                      )}
                    </div>

                    <div style={{ height: '1px', backgroundColor: 'var(--warm-border)', margin: '0.75rem 0' }} />

                    <div className="flex items-center justify-between">
                      <div>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: 'var(--mid-gray)', letterSpacing: '0.04em' }}>Starting from</span>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--navy)', fontWeight: 500 }}>
                          {resort["StartsFrom "]}
                        </div>
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--mid-gray)' }}>
                          {resort["duration"]}
                        </div>
                      </div>
                      <button className="btn-editorial-outline" style={{ padding: '0.5rem 1.25rem' }}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div
                style={{
                  border: '1px solid var(--warm-border)',
                  borderRadius: '4px',
                  padding: '4rem',
                  maxWidth: '40rem',
                  margin: '0 auto',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                  Resorts Coming Soon
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)', fontSize: '0.9rem' }}>
                  We're carefully curating the most amazing resorts for you. Check back soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Maldives FAQs */}
      <section className="py-10" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <FAQ faqsData={faqsData} />
      </section>

      {/* Resort Details Dialog */}
      <Dialog open={!!selectedResort} onOpenChange={() => setSelectedResort(null)}>
        <DialogContent
          className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white p-6"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          {selectedResort && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.6rem',
                    fontWeight: 400,
                    color: 'var(--charcoal)',
                    textAlign: 'center',
                  }}
                >
                  {selectedResort.name}
                </DialogTitle>
              </DialogHeader>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left — Image Carousel */}
                <div className="relative overflow-hidden" style={{ borderRadius: '4px', aspectRatio: '4/3' }}>
                  <img
                    src={getImagePath(selectedResort.images[selectedImageIndex])}
                    alt={selectedResort.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {selectedResort.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-gray-800 w-9 h-9 flex items-center justify-center"
                        style={{ borderRadius: '2px' }}
                      >
                        <i className="fas fa-chevron-left text-sm"></i>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-gray-800 w-9 h-9 flex items-center justify-center"
                        style={{ borderRadius: '2px' }}
                      >
                        <i className="fas fa-chevron-right text-sm"></i>
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
                        {selectedResort.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            style={{
                              width: '6px',
                              height: '6px',
                              backgroundColor: index === selectedImageIndex ? '#ffffff' : 'rgba(255,255,255,0.45)',
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Right — Content */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">{renderStars(selectedResort.rating)}</div>
                    <div className="text-right">
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: 'var(--mid-gray)' }}>Starting from</span>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--navy)', fontWeight: 500 }}>
                        {selectedResort["StartsFrom "]}
                      </div>
                      {selectedResort.duration && (
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--mid-gray)' }}>
                          {selectedResort.duration}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center" style={{ fontSize: '0.85rem', color: 'var(--mid-gray)' }}>
                    <i className="fas fa-map-marker-alt mr-2" style={{ color: 'var(--luxury-gold)' }}></i>
                    {selectedResort.location}
                  </div>

                  <div style={{ height: '1px', backgroundColor: 'var(--warm-border)' }} />

                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
                    {selectedResort.description}
                  </p>

                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>Key Features</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedResort.features.map((feature, index) => (
                        <span
                          key={index}
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.65rem',
                            letterSpacing: '0.06em',
                            padding: '0.25rem 0.65rem',
                            border: '1px solid var(--warm-border)',
                            color: 'var(--mid-gray)',
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>Amenities</h4>
                    <ul className="space-y-1.5 max-h-32 overflow-y-auto">
                      {selectedResort.amenities.map((amenity, index) => (
                        <li key={index} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--mid-gray)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <i className="fas fa-check" style={{ color: 'var(--luxury-gold)', fontSize: '0.65rem' }}></i>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>Room Types</h4>
                    <ul className="space-y-1.5">
                      {selectedResort.roomTypes.map((roomType, index) => (
                        <li key={index} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--mid-gray)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <i className="fas fa-bed" style={{ color: 'var(--navy)', fontSize: '0.65rem' }}></i>
                          {roomType}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={handlePlanClick}
                    className="btn-editorial-solid w-full text-center"
                    style={{ display: 'block' }}
                  >
                    Plan My Vacation
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <TravelForm isOpen={isFormOpen} onClose={() => { setIsFormOpen(false); }} />
    </div>
  );
}
