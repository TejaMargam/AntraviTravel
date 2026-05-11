import { useState } from "react";
import FAQ from "@/components/faq";
import ScrollManager from "@/hooks/ScrollManager";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { TravelForm } from "@/components/TravelForm";

export default function Maldives() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };

  // Experience options
  const experiences = [
    { id: 1, title: "Overwater Villas", image: "/images/maldives/overwater-villa.webp" },
    { id: 2, title: "All Inclusive Resorts", image: "/images/maldives/all-inclusive.webp" },
    { id: 3, title: "Luxury Resorts", image: "/images/maldives/luxury-resort.webp" },
    { id: 4, title: "Private Pool Villas", image: "/images/maldives/private-pool.webp" },
    { id: 5, title: "Honeymoon Escapes", image: "/images/maldives/honeymoon.webp" },
    { id: 6, title: "Family Vacation", image: "/images/maldives/family.webp" },
    { id: 7, title: "Activities", image: "/images/maldives/activities.webp" }
  ];

  // Resort data
  const resorts = [
    { id: 1, name: "NH Collection Reeti Beach", category: "5-star", image: "/images/maldives/resorts/reeti-beach.webp" },
    { id: 2, name: "Dusit 2 Feydhoo", category: "5-star", image: "/images/maldives/resorts/dusit-feydhoo.webp" },
    { id: 3, name: "Le Méridien Maldives", category: "5-star", image: "/images/maldives/resorts/le-meridien.webp" },
    { id: 4, name: "Grand Park Kodhipparu", category: "5-star", image: "/images/maldives/resorts/grand-park.webp" },
    { id: 5, name: "Furaveri", category: "5-star", image: "/images/maldives/resorts/furaveri.webp" },
    { id: 6, name: "Oblu Xperience Aliafushi", category: "5-star", image: "/images/maldives/resorts/oblu-aliafushi.webp" },
    { id: 7, name: "Villa Nautica", category: "4-star", image: "/images/maldives/resorts/villa-nautica.webp" },
    { id: 8, name: "Reeti Faru", category: "4-star", image: "/images/maldives/resorts/reeti-faru.webp" },
    { id: 9, name: "Sheraton Maldives", category: "5-star", image: "/images/maldives/resorts/sheraton.webp" },
    { id: 10, name: "Hard Rock Hotel", category: "5-star", image: "/images/maldives/resorts/hard-rock.webp" },
    { id: 11, name: "NH Maldives Kuda Rah", category: "5-star", image: "/images/maldives/resorts/nh-kuda-rah.webp" },
    { id: 12, name: "Centara Ras Fushi", category: "4-star", image: "/images/maldives/resorts/centara-ras-fushi.webp" },
    { id: 13, name: "Saii Lagoon Curio Collection by Hilton", category: "5-star", image: "/images/maldives/resorts/saii-lagoon.webp" },
    { id: 14, name: "Hilton Amingiri", category: "5-star", image: "/images/maldives/resorts/hilton-amingiri.webp" },
    { id: 15, name: "Adaaran Prestige Vadoo", category: "5-star", image: "/images/maldives/resorts/adaaran-vadoo.webp" },
    { id: 16, name: "The Westin", category: "5-star", image: "/images/maldives/resorts/westin.webp" },
    { id: 17, name: "Nooe Kunaavashi", category: "5-star", image: "/images/maldives/resorts/nooe-kunaavashi.webp" },
    { id: 18, name: "Brennia Kottefaru", category: "4-star", image: "/images/maldives/resorts/brennia-kottefaru.webp" },
    { id: 19, name: "Oblu Select Sangeli", category: "4-star", image: "/images/maldives/resorts/oblu-sangeli.webp" },
    { id: 20, name: "Holiday Inn Kandooma", category: "4-star", image: "/images/maldives/resorts/holiday-inn.webp" },
    { id: 21, name: "Sun Siyam Ohuliveli", category: "5-star", image: "/images/maldives/resorts/sun-siyam.webp" },
    { id: 22, name: "Siyam World", category: "5-star", image: "/images/maldives/resorts/siyam-world.webp" },
    { id: 23, name: "Arrival Beach Resort", category: "4-star", image: "/images/maldives/resorts/arrival-beach.webp" },
    { id: 24, name: "Medhufushi Island Resort & Spa", category: "4-star", image: "/images/maldives/resorts/medhufushi.webp" }
  ];

  // Luxury resorts
  const luxuryResorts = [
    "JW Marriott Kaffu Atoll",
    "Anantara Kiaviah",
    "St. Regis",
    "Anantara Veli",
    "Furaveri",
    "Anantara Dhigu",
    "The Ritz Carlton"
  ];

  // Brands we work with
  const brands = [
    "JW Marriott Kaafu Atoll", "Anantara Kiaviah", "Anantara Veli", "Anantara Dhigu", "Le Meridien", "Hilton", 
    "The Westin", "NH Collection", "NH Hotels & Resorts", "St. Regis", "Sun Siyam", "Centara Collection", 
    "Reeti Faru", "Hard Rock", "Sheraton", "SAii", "Halcyon Private Island", "Colours of Oblu", "Brennia Kottefaru", 
    "Grand Park Kodhipparu", "Holiday Inn Kandooma", "Nooe Kunaavashi", "Villa Nautica", "Medhufushi Island Resort", "Furaveri Maldives"
  ];

  // Top experiences
  const topExperiences = [
    { title: "Overwater Villa Stay", image: "/images/maldives/experiences/overwater-villa-stay.webp", description: "Direct access to lagoon, private deck, ocean views — signature Maldives experience." },
    { title: "Floating Breakfast", image: "/images/maldives/experiences/floating-breakfast.webp", description: "Served in your private pool — iconic luxury moment." },
    { title: "Snorkelling & Diving", image: "/images/maldives/experiences/snorkelling-diving.webp", description: "World-class reefs, turtles, manta rays, reef sharks." },
    { title: "Dolphin Sunset Cruise", image: "/images/maldives/experiences/dolphin-cruise.webp", description: "Magical evening with dolphins and sunset views." },
    { title: "Spa & Wellness", image: "/images/maldives/experiences/spa-wellness.webp", description: "Overwater spa treatments designed for deep relaxation." },
    { title: "Private Sandbank Experience", image: "/images/maldives/experiences/sandbank.webp", description: "A tiny island in the middle of the ocean — just you and the sea." },
    { title: "Cinema Under the Stars", image: "/images/maldives/experiences/cinema-stars.webp", description: "Outdoor movie nights on the beach." },
    { title: "Candlelight Dinner", image: "/images/maldives/experiences/candlelight-dinner.webp", description: "Private beachfront dining setup — perfect for couples." },
    { title: "Underwater Restaurant", image: "/images/maldives/experiences/underwater-restaurant.webp", description: "Dine surrounded by marine life — once-in-a-lifetime experience." }
  ];

  // Filter resorts
  const filteredResorts = selectedFilter === "all" ? resorts : resorts.filter(resort => resort.category === selectedFilter);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <ScrollManager />
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/maldives.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(22,38,96,0.7) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' }} />
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400, letterSpacing: '0.02em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Experience the Maldives with Antravi
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontWeight: 300, marginBottom: '3rem', lineHeight: 1.6, opacity: 0.95 }}>
            Where every part of your vacation is thoughtfully arranged, before you even arrive.
          </p>
        </div>
      </section>

      {/* Explore by Experience */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              Explore by Experience
            </h2>
            <div className="editorial-divider" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="group cursor-pointer">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-3">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'white' }}>
                      {exp.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Maldives */}
      <section className="py-20" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">About</span>
            <div className="editorial-divider" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              Maldives — The World's Most Exclusive Island Escape
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              The Maldives is the definition of luxury travel — a collection of 1,000+ coral islands in the Indian Ocean, known for overwater villas, crystal-clear lagoons, and private island resorts.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
              For Indian travellers, Maldives is the fastest way to experience internationally — just a short flight, but a completely different world. No crowds, no noise, just ocean, privacy, and world-class hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Resorts Section */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              Resorts
            </h2>
            <div className="editorial-divider" />
          </div>

          {/* Filters */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              {["all", "4-star", "5-star", "luxury"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedFilter === filter
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  style={{ textTransform: 'capitalize' }}
                >
                  {filter === "all" ? "All Resorts" : filter}
                </button>
              ))}
            </div>
          </div>

          {/* Resorts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResorts.map((resort) => (
              <div key={resort.id} className="editorial-card overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={resort.image} 
                    alt={resort.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 px-2 py-1 rounded text-xs font-medium" style={{ textTransform: 'capitalize' }}>
                      {resort.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)' }}>
                    {resort.name}
                  </h3>
                  {luxuryResorts.includes(resort.name) && (
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--luxury-gold)', marginTop: '0.5rem' }}>
                      Available upon private consultation
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Work With */}
      <section className="py-16" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--charcoal)' }}>
              Brands We Work With
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand, index) => (
              <span 
                key={index}
                className="bg-white px-4 py-2 rounded-full text-sm border border-gray-200"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About the Country */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">About the Country</span>
            <div className="editorial-divider" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)' }}>
              Essential Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                  Location
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                  Indian Ocean, southwest of India
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                  Islands
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                  1,000+ coral islands
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                  Known for
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                  Private island resorts, marine life, luxury villas
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                  Language
                </h3>
                <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                  <p><strong>Official Language:</strong> Dhivehi</p>
                  <p><strong>Widely Spoken:</strong> English (in all resorts and hotels)</p>
                  <p>Communication is never a problem for travellers.</p>
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                  Currency
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                  Maldivian Rufiyaa (MVR)<br />
                  USD is widely accepted across resorts
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                  Travel Time from India
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                  Mumbai / Bangalore / Delhi → Maldives: 2 to 4 hours<br />
                  Direct flights available daily<br />
                  One of the easiest international destinations from India.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                  Capital City
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                  Male – A compact island city — this is where your international flight lands before transferring to your resort island.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Places to See in Malé */}
      <section className="py-16" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--charcoal)' }}>
              Places to See in Malé
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Grand Friday Mosque",
              "Malé Local Market", 
              "Artificial Beach",
              "National Museum"
            ].map((place, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square bg-gray-200 rounded-lg mb-3" />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)' }}>
                  {place}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Season to Visit */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)' }}>
              Best Season to Visit Maldives
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                November to April — Peak Season
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                Sunny weather, calm waters<br />
                Best for honeymoon & water activities
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                May to October — Value Season
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                Lower prices (30–40% cheaper)<br />
                Short tropical rains
              </p>
            </div>
          </div>
          
          <p className="text-center mt-8" style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: 'var(--mid-gray)' }}>
            Smart travellers choose shoulder months for better deals.
          </p>
        </div>
      </section>

      {/* Important Info Before Arrival */}
      <section className="py-16" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--charcoal)' }}>
              Important Info Before Arrival
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Visa: Free on arrival for Indians",
              "Passport validity: Minimum 6 months", 
              "Return ticket required"
            ].map((info, index) => (
              <div key={index} className="flex items-center space-x-3">
                <i className="fas fa-check-circle" style={{ color: 'var(--luxury-gold)' }} />
                <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>{info}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-8" style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: 'var(--mid-gray)' }}>
            No complicated visa process — very smooth entry.
          </p>
        </div>
      </section>

      {/* Food in Maldives */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)' }}>
              Food in Maldives
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Maldivian cuisine blends Indian, Sri Lankan, and Arabic influences.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Mas Huni", desc: "tuna + coconut breakfast", image: "/images/maldives/food/mas-huni.webp" },
                { title: "Fresh grilled seafood", desc: "", image: "/images/maldives/food/seafood.webp" },
                { title: "Coconut-based curries", desc: "", image: "/images/maldives/food/curries.webp" }
              ].map((food, index) => (
                <div key={index} className="text-center">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-3" />
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)' }}>
                    {food.title}
                  </h4>
                  {food.desc && <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)' }}>{food.desc}</p>}
                </div>
              ))}
            </div>
            
            <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
              Resorts also offer Indian, Jain, and international cuisine — zero food concern.
            </p>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
                As the Maldives is a Muslim country, carrying alcohol is not allowed, however all the private islands resorts will be having alcohol when you can consume on actual cost basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transfers to Resorts */}
      <section className="py-16" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--charcoal)' }}>
              Transfers to Resorts
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                Speedboat Transfer
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                15–60 minutes<br />
                Budget-friendly<br />
                Resorts near Malé
              </p>
            </div>
            
            <div className="text-center">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                Seaplane Transfer
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                30–60 minutes (scenic flight)<br />
                Premium experience<br />
                Aerial views of islands
              </p>
            </div>
            
            <div className="text-center">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                Domestic Flight + Boat
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                For far islands<br />
                Combination transfer
              </p>
            </div>
          </div>
          
          <p className="text-center mt-8" style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: 'var(--mid-gray)' }}>
            👉 Antravi selects resorts based on transfer convenience + budget, a critical decision factor.
          </p>
        </div>
      </section>

      {/* Types of Stay */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)' }}>
              Types of Stay in Maldives
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                Private Island Resorts (Most Popular)
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                Entire island = one resort<br />
                Ultimate privacy + luxury
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                Public Islands (Budget Travel)
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--mid-gray)' }}>
                Guesthouses<br />
                Local experience<br />
                Limited luxury
              </p>
            </div>
          </div>
          
          <p className="text-center mt-8" style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: 'var(--mid-gray)' }}>
            90% of Indian luxury travellers choose private island resorts.
          </p>
        </div>
      </section>

      {/* Top Experiences */}
      <section className="py-20" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)' }}>
              Top Experiences in Maldives
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topExperiences.map((exp, index) => (
              <div key={index} className="editorial-card overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                    {exp.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)' }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book with Antravi */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)' }}>
              Why Book Maldives with Antravi
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Built for Indian Travellers", desc: "We understand food, flights, and expectations." },
              { title: "Right Resort Selection", desc: "We match: Budget, Occasion (honeymoon/family vacation), Experience preference" },
              { title: "End-to-End Planning", desc: "Flights → Resort → Transfers → Activities → Support" },
              { title: "Support During Trip", desc: "You're never stuck or confused." },
              { title: "Transparent Pricing", desc: "No hidden costs. No surprises." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-blue-600 text-xl" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Maldives Vacation */}
      <section className="py-20" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
            Plan Your Maldives Vacation with Antravi
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', marginBottom: '2rem', lineHeight: 1.8 }}>
            Tell us your travel dates & preferences — we'll design a personalised experience tailored exactly for you.
          </p>
          <button onClick={handlePlanClick} className="btn-editorial-solid">
            Reserve Your Maldives Vacation Now
          </button>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ faqsData={[
            {
              id: "maldives-1",
              question: "How much does a Maldives trip cost from India?",
              answer: "A Maldives trip from India typically costs ₹60,000 to ₹2,50,000+ per person, depending on resort category, villa type, and inclusions.\n• Budget (Public Island): ₹60K–₹1L\n• Premium Resort: ₹1L–₹1.8L\n• Luxury Overwater Villa: ₹2L+\nAt Antravi, we customise based on your budget — no fixed packages."
            },
            {
              id: "maldives-2",
              question: "What is the best time to visit Maldives for honeymoon?",
              answer: "The best time for a Maldives honeymoon is November to April, when the weather is sunny, the sea is calm, and visibility is perfect for water activities.\nFor better pricing, May and June offer great value with fewer crowds."
            },
            {
              id: "maldives-3",
              question: "How many days are enough for Maldives?",
              answer: "3 to 5 nights is ideal for most travellers.\n• 3 Nights → Relax + basic experiences\n• 4 Nights → Balanced trip\n• 5 Nights → Full luxury experience\nMost Antravi clients choose 4 nights."
            },
            {
              id: "maldives-4",
              question: "Do Indians need a visa for the Maldives?",
              answer: "No. Indian passport holders get a free visa on arrival in the Maldives for 30 Days.\nRequirements:\n• Valid passport (6+ months)\n• Return ticket\n• Confirmed hotel booking"
            },
            {
              id: "maldives-5",
              question: "Which is better: Maldives private island or public island?",
              answer: "• Private Island Resorts → Luxury, privacy, premium experience\n• Public Islands → Budget-friendly, local experience\n90% of Indian travellers choose private islands for a complete Maldives experience."
            },
            {
              id: "maldives-6",
              question: "What is included in Maldives resort packages?",
              answer: "Most Maldives packages include:\n• Accommodation (Beach or Overwater Villa)\n• Meals (Breakfast / Half Board / All Inclusive)\n• Airport transfers (Speedboat / Seaplane)\nActivities like diving, spa, and excursions are usually extra."
            },
            {
              id: "maldives-7",
              question: "How do you reach resorts from Malé airport?",
              answer: "There are 3 types of transfers:\n• Speedboat (15–60 mins)\n• Seaplane (40–60 mins, scenic)\n• Domestic flight + boat (60+minutes)\nChoosing the right transfer is critical. Antravi helps you pick the best option."
            },
            {
              id: "maldives-8",
              question: "Is Maldives expensive for Indian travellers?",
              answer: "Maldives can be affordable or ultra-luxury, depending on how you plan.\nSmart resort selection + right travel dates can reduce costs by 30–40%."
            },
            {
              id: "maldives-9",
              question: "Is vegetarian or Indian food available in Maldives?",
              answer: "Yes. Most resorts offer:\n• Indian cuisine\n• Vegetarian & Jain options\n• International buffets\nFood is never a concern for Indian travellers."
            },
            {
              id: "maldives-10",
              question: "Why should I book Maldives with Antravi instead of online platforms?",
              answer: "Because Maldives is not about booking a hotel, it's about choosing the right island + experience.\nWith Antravi:\n• You get personalised resort selection\n• Transparent pricing\n• Support before and during your vacation\n• End-to-end planning\nThat's something booking platforms cannot provide."
            }
          ]} />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button onClick={handlePlanClick} className="btn-editorial-solid">
            Reserve Your Maldives Vacation Now
          </button>
        </div>
      </section>

      {/* Copyright */}
      <footer className="py-8 text-center" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--warm-border)' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--mid-gray)' }}>
          © 2026 Antravi Travel Experiences · antravi.com · Content accurate as of May 2026.<br />
          Visa, activities, and flight information are subject to change — always verify with official sources before travel.
        </p>
      </footer>

      <Footer />
      <TravelForm isOpen={isFormOpen} onClose={() => { setIsFormOpen(false); }} />
    </div>
  );
}
