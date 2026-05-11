import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollManager from "@/hooks/ScrollManager";
import FAQ from "@/components/faq";
import faqsData from "@/data/thailand/faqs.json";
import { useState } from "react";
import { TravelForm } from "@/components/TravelForm";

export default function Thailand() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };

  const cityCards = [
    {
      img: '/images/thailand/bangkok.webp?auto=format&fit=crop&w=1600&q=60',
      alt: 'Bangkok city at night Thailand tour package',
      title: 'Bangkok — The Heart of Thailand',
      paras: [
        'Bangkok is the most popular starting point for a Thailand holiday. The city is known for its modern skyline, luxurious shopping malls, ancient temples, night markets, and delicious street food. With attractions like the Grand Palace, Wat Arun, and Chao Phraya River cruise, Bangkok blends tradition with modern lifestyle.',
        'Travellers looking for shopping can explore Siam Paragon, MBK Mall, IconSiam, and Chatuchak Weekend Market. Bangkok is also famous for its nightlife, rooftop bars, floating markets, and temple tours. Including Bangkok in your Thailand tour package ensures a perfect balance of culture, entertainment, and city experiences.',
      ],
    },
    {
      img: '/images/thailand/pattaya.webp?auto=format&fit=crop&w=1600&q=60',
      alt: 'Pattaya coral island water sports tour Thailand',
      title: 'Pattaya — Beaches, Nightlife & Water Sports',
      paras: [
        'Just two hours from Bangkok, Pattaya is a vibrant beach city renowned for its water sports, shows, nightlife, and adventure activities. One of the most popular experiences is the Coral Island tour, which offers parasailing and jet skiing.',
        'Pattaya is also home to attractions like the Sanctuary of Truth, Nong Nooch Garden, and the Alcazar & Tiffany Shows. Families, couples, and groups love Pattaya because it provides a mix of beach relaxation and entertainment. Including Pattaya in your Bangkok Pattaya tour package gives you the perfect combination of thrill and relaxation.',
      ],
    },
    {
      img: '/images/thailand/phuket.webp?auto=format&fit=crop&w=1600&q=60',
      alt: 'Phuket Phi Phi Island tour package Antravi',
      title: 'Phuket — Luxury Resorts & Island Experiences',
      paras: [
        'Phuket is Thailand\'s most luxurious island destination, ideal for honeymoons and upscale vacations. Known for Patong Beach, Kata Beach, and Karon Beach, Phuket offers premium shopping, nightlife, beach clubs, and gourmet dining.',
        'The most iconic experiences in Phuket include the Phi Phi Island tour, the James Bond Island canoeing trip, Big Buddha temple, and exciting adventure activities. With its beautiful beaches, nightlife, and island tours, Phuket is a must-visit in any Thailand honeymoon package.',
      ],
    },
    {
      img: '/images/thailand/krabi.webp?auto=format&fit=crop&w=1600&q=60',
      alt: 'Krabi 4 Island tour Thailand holiday',
      title: 'Krabi — Peaceful, Scenic & Relaxing',
      paras: [
        'Krabi is the perfect destination for travelers who want a calm and scenic island escape. With stunning limestone cliffs, crystal-clear waters, and soft sandy beaches, Krabi is ideal for honeymooners and nature lovers.',
        'The most famous attractions include the 4-Island Tour, Railay Beach, Emerald Pool, Hot Springs, and the Tiger Cave Temple viewpoint. Krabi offers a slower pace compared to Phuket, making it perfect for relaxation and long-tail boat trips. When combined with Phuket, Krabi creates a balanced and memorable Phuket Krabi vacation package with a mix of adventure and serenity.',
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <h1 className="sr-only">Thailand Tour Packages & Private Excursions 2026</h1>
      <ScrollManager />
      <title>Thailand Tour Packages 2026 - Bangkok, Pattaya, Phuket &amp; Krabi | Thailand vacation</title>
      <meta name="description" content="Explore Thailand tour packages with Bangkok, Pattaya, Phuket & Krabi. Luxury resorts, island tours & personalised itineraries. Book your Thailand vacation with Antravi." />

      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '60vh' }}>
          <div className="absolute inset-0 overflow-hidden">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover aerial-drift">
              <source src="/videos/thailand.mp4" type="video/mp4" />
              <track kind="captions" src="/captions/thailand.vtt" srcLang="en" label="English captions" default />
            </video>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(22,38,96,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <div className="cinematic-rule" style={{ width: '2.5rem', height: '1px', background: 'rgba(184,150,62,0.9)', margin: '0 auto 1.5rem' }} />
            <h1
              className="cinematic-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
                fontWeight: 400,
                letterSpacing: '0.02em',
                marginBottom: '0.75rem',
                lineHeight: 1.2,
              }}
            >
              Thailand Tour Packages — Bangkok, Pattaya, Phuket &amp; Krabi
            </h1>
            <p className="cinematic-subtitle" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '2rem' }}>
              Thailand vacation Packages — By Antravi
            </p>
            <div className="cinematic-cta">
              <button onClick={handlePlanClick} className="btn-editorial-white">
                Plan With Antravi
              </button>
            </div>
          </div>
        </section>

        {/* Intro + Why Visit */}
        <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Overview</span>
              <div className="editorial-divider" />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                  fontWeight: 400,
                  color: 'var(--charcoal)',
                  marginBottom: '1.25rem',
                }}
              >
                Thailand vacation Packages — By Antravi
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', maxWidth: '50rem', margin: '0 auto', lineHeight: 1.9 }}>
                Thailand is one of Asia's most loved destinations — a perfect mix of luxury brands, nightlife, food, islands, temples, culture, and world-class hospitality. Whether you want beach relaxation, city shopping, nightlife, adventure, or a romantic honeymoon, Thailand delivers it all effortlessly.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', maxWidth: '50rem', margin: '1rem auto 0', lineHeight: 1.9 }}>
                At Antravi, your Thailand vacation isn't just a package — it's a curated experience designed exactly around your preferences.
              </p>
            </div>

            <div
              style={{
                border: '1px solid var(--warm-border)',
                borderRadius: '4px',
                padding: '2rem',
                marginBottom: '3rem',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                Why Visit Thailand:
              </h3>
              <ol style={{ paddingLeft: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 2.2, listStyleType: 'decimal' }}>
                <li>World-class beaches (Phuket, Krabi, Phi Phi Island)</li>
                <li>Vibrant nightlife &amp; shopping (Bangkok, Pattaya)</li>
                <li>Beachfront resorts (Phuket, Krabi)</li>
                <li>Incredible food experiences</li>
                <li>Budget-friendly yet premium hospitality</li>
                <li>Easy visa process for Indians</li>
                <li>Short flight duration from India</li>
              </ol>
            </div>

            {/* City Cards */}
            <div className="grid lg:grid-cols-2 gap-6">
              {cityCards.map(({ img, alt, title, paras }) => (
                <div
                  key={title}
                  className="editorial-card overflow-hidden"
                >
                  <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={img}
                      alt={alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                      {title}
                    </h3>
                    <div style={{ width: '1.5rem', height: '1px', backgroundColor: 'var(--luxury-gold)', margin: '0.5rem 0 0.75rem' }} />
                    {paras.map((p, i) => (
                      <p key={i} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--mid-gray)', lineHeight: 1.85, marginBottom: '0.6rem' }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Itinerary */}
            <div
              style={{
                border: '1px solid var(--warm-border)',
                borderRadius: '4px',
                padding: '2rem',
                marginTop: '2.5rem',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>
                Thailand Itinerary — 5 to 7 Days Travel Plan
              </h3>
              <div style={{ width: '1.5rem', height: '1px', backgroundColor: 'var(--luxury-gold)', margin: '0.5rem 0 1rem' }} />
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 1.9, marginBottom: '0.75rem' }}>
                A well-planned itinerary helps make the most of your Thailand holiday. For a short trip, the recommended plan is 5 Days Bangkok Pattaya, covering city tours, shopping, shows, and water sports. For a longer trip, the ideal itinerary is 7 Days Bangkok Phuket Krabi, which includes temple visits, island tours, nightlife, and premium resort stays.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 1.9, marginBottom: '0.75rem' }}>
                Travelers looking for a romantic experience can also choose a 5-day Phuket honeymoon itinerary, which includes Phi Phi Island, James Bond Island, romantic dinners, and sightseeing. Each itinerary can be fully customized based on your travel style, budget, and preferred pace.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 1.9 }}>
                Bangkok Pattaya Phuket Krabi itinerary
              </p>
            </div>

            {/* Why Antravi */}
            <div
              style={{
                border: '1px solid var(--warm-border)',
                borderRadius: '4px',
                padding: '2rem',
                marginTop: '1.5rem',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>
                Why Choose Antravi for Thailand?
              </h3>
              <div style={{ width: '1.5rem', height: '1px', backgroundColor: 'var(--luxury-gold)', margin: '0.5rem 0 1rem' }} />
              <ul style={{ paddingLeft: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 2.2, listStyleType: 'disc' }}>
                <li>Luxury hand-picked resorts</li>
                <li>Personalized itineraries based on your travel style</li>
                <li>Private transfers</li>
                <li>Transparent pricing</li>
                <li>Dedicated travel consultant</li>
                <li>24x7 assistance before &amp; during vacation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" style={{ backgroundColor: 'var(--warm-cream)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label">Get In Touch</span>
            <div className="editorial-divider" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                fontWeight: 400,
                color: 'var(--charcoal)',
                marginBottom: '1rem',
              }}
            >
              Plan your Thailand vacation with Antravi
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', marginBottom: '2rem', lineHeight: 1.8, maxWidth: '36rem', margin: '0 auto 2rem' }}>
              Tell us your travel dates &amp; preferences — we'll create a personalized itinerary just for you.
            </p>
            <button onClick={handlePlanClick} className="btn-editorial-solid">
              Enquire Now
            </button>
          </div>
        </section>

        <section className="py-10" style={{ backgroundColor: '#ffffff' }}>
          <FAQ faqsData={faqsData} />
        </section>
      </main>

      <Footer />
      <TravelForm isOpen={isFormOpen} onClose={() => { setIsFormOpen(false); }} />
    </div>
  );
}
