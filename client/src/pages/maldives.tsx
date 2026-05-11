import { lazy, useState } from "react";
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

const Resorts1 = lazy(() => import("@/pages/maldives2"));
const Resorts2 = lazy(() => import("@/pages/maldives3"));


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

  const [activeFilter, setActiveFilter] = useState<string>("All");
  const resortFilters = [
    { label: "All", value: "All" },
    { label: "4-Star", value: "4-star" },
    { label: "5-Star", value: "5-star" },
    { label: "Luxury", value: "Luxury" },
  ];

  const filteredResorts = resorts.filter((resort) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "4-star") return resort.rating === 4;
    if (activeFilter === "5-star") return resort.rating === 5;
    if (activeFilter === "Luxury") return resort["StartsFrom "].includes("Available on Request") || resort.rating === 5;
    return true;
  });

  const experienceCards = [
    {
      title: "Overwater Villas",
      image: "images/maldives/resorts/westin/westin-image-2.webp?w=800&h=600&fit=crop",
      subtitle: "Private deck and lagoon access",
    },
    {
      title: "All Inclusive Resorts",
      image: "images/maldives/resorts/dusit/dusit-image-1.webp?w=800&h=600&fit=crop",
      subtitle: "Meals, activities, and transfers included",
    },
    {
      title: "Luxury Resorts",
      image: "images/maldives/resorts/sheraton/sheraton-image-4.webp?w=800&h=600&fit=crop",
      subtitle: "Top-tier island living",
    },
    {
      title: "Private Pool Villas",
      image: "images/maldives/resorts/reethi/reethi-image-3.webp?w=800&h=600&fit=crop",
      subtitle: "Secluded space for couples",
    },
    {
      title: "Honeymoon Escapes",
      image: "images/maldives/resorts/nooe/nooe-image-1.webp?w=800&h=600&fit=crop",
      subtitle: "Romantic island moments",
    },
    {
      title: "Family Vacations",
      image: "images/maldives/resorts/arrival/arrival-image-1.webp?w=800&h=600&fit=crop",
      subtitle: "Fun for every age",
    },
    {
      title: "Activities",
      image: "images/maldives/resorts/saii/saii-image-2.webp?w=800&h=600&fit=crop",
      subtitle: "Diving, spa, and sunset cruises",
    },
  ];

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
      <section className="py-16" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Experience the Maldives</span>
            <div className="editorial-divider" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                color: 'var(--charcoal)',
                marginBottom: '1rem',
              }}
            >
              Experience the Maldives with Antravi
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--mid-gray)', maxWidth: '56rem', margin: '0 auto', lineHeight: 1.9 }}>
              Where every part of your vacation is thoughtfully arranged, before you even arrive.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceCards.map((card) => (
              <div key={card.title} className="relative overflow-hidden rounded-3xl shadow-lg group" style={{ minHeight: '18rem' }}>
                <img
                  src={getImagePath(card.image)}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/85 to-transparent">
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: '#E5E7EB', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '0.5rem' }}>
                    Explore by Experience
                  </p>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: '#D1D5DB', lineHeight: 1.75 }}>
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Maldives — The World’s Most Exclusive Island Escape</span>
            <div className="editorial-divider" />
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--mid-gray)', maxWidth: '56rem', margin: '0 auto 1rem', lineHeight: 1.9 }}>
              The Maldives is the definition of luxury travel — a collection of 1,000+ coral islands in the Indian Ocean, known for overwater villas, crystal-clear lagoons, and private island resorts.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--mid-gray)', maxWidth: '56rem', margin: '0 auto', lineHeight: 1.9 }}>
              For Indian travellers, Maldives is the fastest way to experience internationally — just a short flight, but a completely different world. No crowds, no noise, just ocean, privacy, and world-class hospitality.
            </p>
          </div>

          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>Filter resorts</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)' }}>
                Find the Maldives stay that matches your occasion and budget.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {resortFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${activeFilter === filter.value ? 'border-transparent bg-slate-900 text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
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

      <section className="py-16" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <span className="section-label">Luxury Resorts</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 500, color: 'var(--charcoal)', margin: '1rem 0' }}>
                Available upon private consultation
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--mid-gray)', lineHeight: 1.9 }}>
                <li>JW Marriott Kaafu Atoll</li>
                <li>Anantara Kiaviah</li>
                <li>St. Regis</li>
                <li>Anantara Veli</li>
                <li>Furaveri</li>
                <li>Anantara Dhigu</li>
                <li>The Ritz-Carlton</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <span className="section-label">Brands we work with</span>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.9, marginTop: '1rem' }}>
                JW Marriott Kaafu Atoll, Anantara Kiaviah, Anantara Veli, Anantara Dhigu, Le Méridien, Hilton, The Westin, NH Collection, NH Hotels & Resorts, St. Regis, Sun Siyam, Centara Collection, Reeti Faru, Hard Rock, Sheraton, SAii, Halcyon Private Island, Colours of Oblu, Brennia Kottefaru, Grand Park Kodhipparu, Holiday Inn Kandooma, Nooe Kanaavashi, Villa Nautica, Medhufushi Island Resort, Furaveri Maldives.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <span className="section-label">Maldives Fast Facts</span>
              <div className="grid gap-3 mt-4 text-sm" style={{ color: 'var(--mid-gray)' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--charcoal)' }}>Location</p>
                  <p>Indian Ocean, southwest of India</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--charcoal)' }}>Islands</p>
                  <p>1,000+ coral islands</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--charcoal)' }}>Known for</p>
                  <p>Private island resorts, marine life, luxury villas</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--charcoal)' }}>Language</p>
                  <p>Dhivehi, English widely spoken</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--charcoal)' }}>Currency</p>
                  <p>Maldivian Rufiyaa (MVR), USD accepted</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--charcoal)' }}>Travel time</p>
                  <p>Mumbai / Bangalore / Delhi → Maldives: 2 to 4 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 mt-10">
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>Best Season to Visit</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.85, marginBottom: '0.75rem' }}>
                November to April — Peak Season. Sunny weather, calm waters, best for honeymoon and water activities.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.85 }}>
                May to October — Value Season. Lower prices, short tropical rains, great deals in shoulder months.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>Important Info</h3>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--mid-gray)', lineHeight: 1.85 }}>
                <li>Visa: Free on arrival for Indians</li>
                <li>Passport validity: Minimum 6 months</li>
                <li>Return ticket required</li>
              </ul>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.85, marginTop: '0.75rem' }}>
                No complicated visa process — very smooth entry.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>Transfers to Resorts</h3>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--mid-gray)', lineHeight: 1.85 }}>
                <li><strong>Speedboat:</strong> 15–60 minutes, budget-friendly, resorts near Malé.</li>
                <li><strong>Seaplane:</strong> 30–60 minutes, scenic premium experience.</li>
                <li><strong>Domestic flight + boat:</strong> For far islands, combines flight with boat transfer.</li>
              </ul>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.85, marginTop: '0.75rem' }}>
                Antravi selects resorts based on transfer convenience and budget — a critical decision factor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl overflow-hidden bg-slate-950 text-white" style={{ minHeight: '22rem' }}>
              <img src={getImagePath('images/maldives/resorts/nooe/nooe-image-2.webp?w=800&h=600&fit=crop')} alt="Private island resort" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'white', marginBottom: '0.75rem' }}>Private Island Resorts</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.85 }}>
                  Entire island = one resort. Ultimate privacy, luxury, and service built around your stay.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-slate-950 text-white" style={{ minHeight: '22rem' }}>
              <img src={getImagePath('images/maldives/resorts/saii/saii-image-5.webp?w=800&h=600&fit=crop')} alt="Public island guesthouse" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'white', marginBottom: '0.75rem' }}>Public Islands</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.85 }}>
                  Guesthouses on local islands offer a budget-friendly experience with a more authentic side of Maldives life.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <span className="section-label">Top Experiences</span>
              <ul className="space-y-3 text-sm mt-4" style={{ color: 'var(--mid-gray)', lineHeight: 1.85 }}>
                <li>Overwater Villa Stay</li>
                <li>Floating Breakfast</li>
                <li>Snorkelling & Diving</li>
                <li>Dolphin Sunset Cruise</li>
                <li>Spa & Wellness</li>
                <li>Private Sandbank Experience</li>
                <li>Cinema Under the Stars</li>
                <li>Candlelight Dinner</li>
                <li>Underwater Restaurant</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--charcoal)', marginBottom: '1rem' }}>Why Book Maldives with Antravi</h3>
          <div className="grid gap-6 lg:grid-cols-3 mt-10 text-left">
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Built for Indian Travellers</h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.85 }}>We understand food, flights, and expectations.</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Right Resort Selection</h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.85 }}>We match budget, occasion, and experience preference.</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>End-to-End Planning</h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.85 }}>Flights → Resort → Transfers → Activities → Support.</p>
            </div>
          </div>
          <div className="mt-10">
            <button onClick={handlePlanClick} className="btn-editorial-solid">
              Reserve Your Maldives Vacation Now
            </button>
          </div>
        </div>
      </section>

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
      <Resorts1 />
      <Resorts2 />
    </div>
  );
}
