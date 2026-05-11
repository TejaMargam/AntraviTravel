import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  const [activeFilter, setActiveFilter] = useState("All");

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

  const filters = ["All", "4-star", "5-star", "Luxury"];

  const filteredResorts = resortsData.filter(resort => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Luxury" && resort.tag.includes("Luxury")) return true;
    if (activeFilter === "5-star" && resort.rating === 5) return true;
    if (activeFilter === "4-star" && resort.rating === 4) return true;
    return true; // fallback
  });

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
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '80vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover aerial-drift">
            <source src="/videos/maldives.mp4" type="video/mp4" />
            <track kind="captions" src="/captions/maldives.vtt" srcLang="en" label="English captions" default />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(22,38,96,0.65) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)' }} />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 mt-20">
          <h1
            className="cinematic-title"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 400,
              letterSpacing: '0.02em',
              marginBottom: '1rem',
              lineHeight: 1.15,
            }}
          >
            Experience the Maldives with Antravi
          </h1>
          <p className="cinematic-subtitle" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', letterSpacing: '0.05em', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Where every part of your vacation is thoughtfully arranged, before you even arrive.
          </p>
          <div className="cinematic-cta">
            <button onClick={handlePlanClick} className="btn-editorial-white" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>
              Plan With Antravi
            </button>
          </div>
        </div>
      </section>

      {/* About the Destination */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--charcoal)', marginBottom: '1.5rem' }}>
            Maldives — The World’s Most Exclusive Island Escape
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--mid-gray)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The Maldives is the definition of luxury travel — a collection of 1,000+ coral islands in the Indian Ocean, known for overwater villas, crystal-clear lagoons, and private island resorts.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
            For Indian travellers, Maldives is the fastest way to experience internationally — just a short flight, but a completely different world. No crowds, no noise, just ocean, privacy, and world-class hospitality.
          </p>
        </div>
      </section>

      {/* Explore by Experience */}
      <section className="py-16" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center" style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--charcoal)', marginBottom: '3rem' }}>
            Explore by Experience
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Overwater Villas", img: "/images/maldives/resorts/obluAila/obluAila-image-1.webp" },
              { title: "All Inclusive Resorts", img: "/images/maldives/resorts/saii/saii-image-1.webp" },
              { title: "Luxury Resorts", img: "/images/maldives/resorts/westin/westin-image-1.webp" },
              { title: "Private Pool Villas", img: "/images/maldives/resorts/hardRock/hardRock-image-1.webp" },
              { title: "Honeymoon Escapes", img: "/images/maldives/resorts/obluSelect/obluSelect-image-1.webp" },
              { title: "Family Vacation", img: "/images/maldives/resorts/sheraton/sheraton-image-1.webp" },
              { title: "Activities", img: "/images/maldives/resorts/arrival/arrival-image-1.webp" }
            ].map((exp, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-md group cursor-pointer aspect-square" onClick={handlePlanClick}>
                <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <h4 className="text-white font-medium" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{exp.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resorts Grid */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--charcoal)', marginBottom: '1.5rem' }}>
            Featured Resorts
          </h2>
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '0.5rem 1.5rem',
                  border: `1px solid ${activeFilter === filter ? 'var(--navy)' : 'var(--warm-border)'}`,
                  backgroundColor: activeFilter === filter ? 'var(--navy)' : 'transparent',
                  color: activeFilter === filter ? 'white' : 'var(--mid-gray)',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
          {filteredResorts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResorts.map((resort) => (
                <div
                  key={resort.id}
                  className="editorial-card overflow-hidden cursor-pointer"
                  onClick={() => handleResortClick(resort)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={getImagePath(resort.images[0])}
                      alt={resort.name}
                      loading="lazy"
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
            <p className="text-center py-10" style={{ color: 'var(--mid-gray)' }}>No resorts found for this filter.</p>
          )}

          <div className="mt-16 bg-gray-50 p-8 rounded border border-gray-100">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--charcoal)', marginBottom: '1rem' }}>Other Curated Resorts</h3>
            <p className="text-sm text-gray-500 mb-6">Ask us about these exceptional properties when planning your trip:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
              <ul className="space-y-2">
                <li>Le Méridien Maldives</li>
                <li>Grand Park Kodhipparu</li>
                <li>Furaveri Maldives</li>
                <li>Villa Nautica</li>
                <li>Reeti Faru</li>
              </ul>
              <ul className="space-y-2">
                <li>NH Maldives Kuda Rah</li>
                <li>Centara Ras Fushi</li>
                <li>Hilton Amingiri</li>
                <li>Adaaran Prestige Vadoo</li>
                <li>Brennia Kottefaru</li>
              </ul>
              <ul className="space-y-2">
                <li>Holiday Inn Kandooma</li>
                <li>Sun Siyam Ohuliveli</li>
                <li>Siyam World</li>
                <li>Medhufushi Island Resort</li>
              </ul>
            </div>
            
            <h4 className="mt-8 font-serif text-lg text-gray-800 mb-3">Luxury Private Consultation</h4>
            <p className="text-sm text-gray-600 mb-4">Available upon private consultation. Brands we work with:</p>
            <p className="text-sm text-gray-500 italic">JW Marriott Kaafu Atoll, Anantara Kiaviah, Anantara Veli, Anantara Dhigu, The Ritz Carlton, St. Regis, and more.</p>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--charcoal)', marginBottom: '1rem' }}>About the Country</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li><strong>Location:</strong> Indian Ocean, southwest of India</li>
                <li><strong>Islands:</strong> 1,000+ coral islands</li>
                <li><strong>Known for:</strong> Private island resorts, marine life, luxury villas</li>
                <li><strong>Language:</strong> Official: Dhivehi. Widely Spoken: English. Communication is never a problem.</li>
                <li><strong>Currency:</strong> Maldivian Rufiyaa (MVR). USD is widely accepted across resorts.</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--charcoal)', marginBottom: '1rem' }}>Travel Time & Visa</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li><strong>Flight Time:</strong> Mumbai / Bangalore / Delhi → Maldives: 2 to 4 hours</li>
                <li>Direct flights available daily. One of the easiest international destinations from India.</li>
                <li><strong>Visa:</strong> Free on arrival for Indians</li>
                <li><strong>Passport validity:</strong> Minimum 6 months, Return ticket required</li>
                <li>No complicated visa process — very smooth entry.</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--charcoal)', marginBottom: '1rem', textAlign: 'center' }}>Best Season to Visit</h3>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 p-6 rounded text-center">
                <h4 className="font-serif text-xl mb-2 text-blue-900">November to April — Peak Season</h4>
                <p className="text-sm text-gray-600">Sunny weather, calm waters. Best for honeymoon & water activities.</p>
              </div>
              <div className="bg-green-50 p-6 rounded text-center">
                <h4 className="font-serif text-xl mb-2 text-green-900">May to October — Value Season</h4>
                <p className="text-sm text-gray-600">Lower prices (30–40% cheaper). Short tropical rains. Smart travellers choose shoulder months for better deals.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--charcoal)', marginBottom: '1rem' }}>Food & Dining</h3>
              <p className="text-sm text-gray-600 mb-4">Maldivian cuisine blends Indian, Sri Lankan, and Arabic influences. Must-try: Mas Huni (tuna + coconut breakfast), fresh grilled seafood, coconut-based curries.</p>
              <p className="text-sm text-gray-600 mb-4">Resorts also offer Indian, Jain, and international cuisine — zero food concern.</p>
              <p className="text-sm text-gray-500 italic bg-gray-50 p-4 border-l-4 border-gray-300">As the Maldives is a Muslim country, carrying alcohol is not allowed, however all the private island resorts will be having alcohol which you can consume on actual cost basis.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--charcoal)', marginBottom: '1rem' }}>Types of Stay</h3>
              <ul className="space-y-4">
                <li>
                  <strong className="text-gray-800">Private Island Resorts (Most Popular)</strong>
                  <p className="text-sm text-gray-600">Entire island = one resort. Ultimate privacy + luxury.</p>
                </li>
                <li>
                  <strong className="text-gray-800">Public Islands (Budget Travel)</strong>
                  <p className="text-sm text-gray-600">Guesthouses, local experience, limited luxury.</p>
                </li>
              </ul>
              <p className="mt-4 text-sm font-medium text-navy-800">90% of Indian luxury travellers choose private island resorts.</p>
            </div>
          </div>

          <div className="mb-16 bg-gray-50 p-8 rounded border border-gray-100 text-center">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--charcoal)', marginBottom: '1.5rem' }}>Transfers to Resorts</h3>
            <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">Antravi selects resorts based on transfer convenience + budget, a critical decision factor.</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <strong className="block text-gray-800 mb-2">Speedboat</strong>
                <p className="text-xs text-gray-600">15–60 minutes. Budget-friendly. Resorts near Malé.</p>
              </div>
              <div>
                <strong className="block text-gray-800 mb-2">Seaplane</strong>
                <p className="text-xs text-gray-600">30–60 minutes. Premium experience. Aerial views.</p>
              </div>
              <div>
                <strong className="block text-gray-800 mb-2">Domestic Flight + Boat</strong>
                <p className="text-xs text-gray-600">For far islands. Combination transfer.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--charcoal)', marginBottom: '2rem', textAlign: 'center' }}>Top Experiences</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { t: "Overwater Villa Stay", d: "Direct access to lagoon" },
                { t: "Floating Breakfast", d: "Served in your private pool" },
                { t: "Snorkelling & Diving", d: "World-class reefs, turtles" },
                { t: "Dolphin Sunset Cruise", d: "Magical evening views" },
                { t: "Spa & Wellness", d: "Overwater spa treatments" },
                { t: "Private Sandbank", d: "Just you and the sea" },
                { t: "Cinema Under Stars", d: "Outdoor movie nights" },
                { t: "Underwater Dining", d: "Once-in-a-lifetime" }
              ].map((exp, i) => (
                <div key={i} className="bg-white p-4 border border-gray-100 rounded shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-800 text-sm mb-1">{exp.t}</h4>
                  <p className="text-xs text-gray-500">{exp.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Why Book with Antravi */}
      <section className="py-20" style={{ backgroundColor: 'var(--navy)', color: 'white' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '2rem' }}>Why Book Maldives with Antravi</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-lg font-serif mb-2" style={{ color: 'var(--luxury-gold)' }}>Built for Indian Travellers</h4>
              <p className="text-sm text-gray-300">We understand food, flights, and expectations.</p>
            </div>
            <div>
              <h4 className="text-lg font-serif mb-2" style={{ color: 'var(--luxury-gold)' }}>Right Resort Selection</h4>
              <p className="text-sm text-gray-300">We match budget, occasion, and experience preference.</p>
            </div>
            <div>
              <h4 className="text-lg font-serif mb-2" style={{ color: 'var(--luxury-gold)' }}>End-to-End Planning</h4>
              <p className="text-sm text-gray-300">Flights → Resort → Transfers → Activities → Support</p>
            </div>
            <div>
              <h4 className="text-lg font-serif mb-2" style={{ color: 'var(--luxury-gold)' }}>Support During Trip</h4>
              <p className="text-sm text-gray-300">You’re never stuck or confused. Transparent pricing with no hidden costs.</p>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-lg mb-6">Tell us your travel dates & preferences — we’ll design a personalised experience tailored exactly for you.</p>
            <button onClick={handlePlanClick} className="btn-editorial-white px-8 py-3 bg-white text-blue-900 border-none font-semibold rounded hover:bg-gray-100 transition-colors">
              Reserve Your Maldives Vacation Now
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16" style={{ backgroundColor: '#fdfdfc' }}>
        <FAQ faqsData={faqsData} />
      </section>

      <div className="text-center py-6 text-xs text-gray-400 bg-gray-50 border-t border-gray-200">
        © 2026 Antravi Travel Experiences · antravi.com · Content accurate as of May 2026.<br />
        Visa, activities, and flight information are subject to change — always verify with official sources before travel.
      </div>

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
                    </div>
                  </div>

                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
                    {selectedResort.description}
                  </p>

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
