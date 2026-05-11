import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollManager from "@/hooks/ScrollManager";
import FAQ from "@/components/faq";
import faqsData from "@/data/thailand/faqs.json";
import { lazy, useState } from "react";
import { TravelForm } from "@/components/TravelForm";

const Thailand1 = lazy(() => import("@/pages/thailand2"));
const Thailand2 = lazy(() => import("@/pages/thailand3"));

export default function Thailand() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };

  const snapshotCards = [
    { title: 'Capital', value: 'Bangkok (Krung Thep)' },
    { title: 'Currency', value: 'Thai Baht (฿)' },
    { title: 'Language', value: 'Thai' },
    { title: 'Best Season', value: 'Year-round' },
    { title: 'Buddhist Temples', value: '34,000+' },
    { title: 'Visa for Indians', value: '60 days visa-free, TDAC required' },
  ];

  const cuisineCards = [
    {
      title: 'Pad Thai',
      description: 'Stir-fried rice noodles with egg, bean sprouts, green onions and your choice of tofu, prawn or chicken — topped with crushed peanuts and a squeeze of lime.',
      image: '/images/thailand/bangkok.webp?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Green Curry',
      description: 'Aromatic green chilli paste cooked in rich coconut milk with Thai basil, kaffir lime leaves and vegetables. Fragrant, creamy, and deceptively spicy.',
      image: '/images/thailand/phuket.webp?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Som Tum',
      description: 'Shredded unripe papaya pounded with dried shrimp, chillies, lime juice, fish sauce and palm sugar. Explosive flavour in every bite.',
      image: '/images/thailand/krabi.webp?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Khao Pad',
      description: 'Jasmine rice wok-fried with garlic, egg, soy sauce and your choice of protein — finished with cucumber slices, spring onion and a wedge of lime.',
      image: '/images/thailand/pattaya.webp?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Mango Sticky Rice',
      description: 'Glutinous sticky rice soaked in sweet coconut milk, served with perfectly ripe mango slices. Simple, seasonal and absolutely sublime.',
      image: '/images/thailand/thailand-cover.webp?auto=format&fit=crop&w=800&q=60',
    },
  ];

  const cultureCards = [
    {
      title: 'The Wai — Thai Greeting',
      description: 'Press palms together at chest level, fingers pointing up, and bow slightly. Return a wai when given to show respect.',
      image: '/images/thailand/bangkok.webp?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Royal Family — Profound Respect',
      description: 'Thailand reveres the monarchy. Stand when the royal anthem plays and avoid public criticism of royal family members.',
      image: '/images/thailand/pattaya.webp?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Head & Feet — Sacred Hierarchy',
      description: 'Never touch a person’s head. Don’t point your feet at people, monks or Buddha images. Remove shoes before entering temples.',
      image: '/images/thailand/krabi.webp?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Temple Etiquette',
      description: 'Dress conservatively, speak quietly, and treat temples as places of worship rather than photo backdrops.',
      image: '/images/thailand/phuket.webp?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Saving Face',
      description: 'Thais avoid confrontation to preserve harmony. A smile often means courtesy, not agreement.',
      image: '/images/thailand/thailand-cover.webp?auto=format&fit=crop&w=800&q=60',
    },
  ];

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
            <p className="text-sm uppercase tracking-[0.35em] text-white/80 mb-4">
              Ready to Experience the Land of Smiles?
            </p>
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
            <p className="cinematic-subtitle" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', opacity: 0.85, marginBottom: '1.5rem', lineHeight: 1.9 }}>
              Our Thailand specialists craft personalised journeys — from Bangkok's golden temples to Phuket's hidden coves — built exactly around you.
            </p>
            <div className="cinematic-cta">
              <button onClick={handlePlanClick} className="btn-editorial-white">
                Plan With Antravi
              </button>
            </div>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="section-label">Fast Facts</span>
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
                Actual content starts
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {snapshotCards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--mid-gray)', marginBottom: '0.75rem' }}>
                    {card.title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--charcoal)', lineHeight: 1.4 }}>
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: 'var(--warm-cream)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <span className="section-label">About</span>
                <div className="editorial-divider" />
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                  A Kingdom Unlike Any Other
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.9, marginBottom: '1rem' }}>
                  Thailand sits at the heart of mainland Southeast Asia, bordered by Myanmar, Laos, Cambodia and Malaysia. It is one of the few countries in the region never colonised by a European power — a fact that infuses its people with a quiet pride and its culture with remarkable continuity.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.9 }}>
                  For Indian travellers, Thailand has long been the gateway to Southeast Asia — a four-hour flight away yet feeling entirely another world. In 2024, India became Thailand's second-largest source of international tourists, with over 1.8 million visitors making the crossing.
                </p>
              </div>
              <div className="overflow-hidden rounded-3xl">
                <img src="/images/thailand/thailand-cover.webp?auto=format&fit=crop&w=1200&q=60" alt="Thailand landscape" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <span className="section-label">Language</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--charcoal)', margin: '1rem 0' }}>
                  Speak a Little Thai
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.85 }}>
                  Thai is a tonal language, the same syllable can mean different things depending on pitch. But locals absolutely love it when visitors try, and even a few words earn you genuine warmth.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden bg-slate-950 text-white">
                <img src="/images/thailand/bangkok.webp?auto=format&fit=crop&w=1200&q=60" alt="Thai language" className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', marginBottom: '0.75rem' }}>Thai is welcoming.</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.85, color: '#CBD5E1' }}>
                    The simple effort of learning a few words will earn you smiles, respect, and better service throughout your trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: 'var(--warm-cream)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Food</span>
              <div className="editorial-divider" />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                Thai cuisine — Eat Like a Local
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {cuisineCards.map((card) => (
                <div key={card.title} className="rounded-3xl overflow-hidden bg-white shadow-sm border border-slate-200">
                  <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{card.title}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 1.85 }}>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm mt-10">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>Vegetarian & Vegan Note</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.85 }}>
                Thai cuisine uses fish sauce and shrimp paste extensively. Always say "jay" (เจ) for vegan or "mangsawirat" (มังสวิรัติ) for vegetarian when ordering. Buddhist vegan restaurants are common and serve excellent meat-free versions of all classics.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Culture</span>
              <div className="editorial-divider" />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                The Soul of Thailand
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {cultureCards.map((card) => (
                <div key={card.title} className="rounded-3xl overflow-hidden bg-white shadow-sm border border-slate-200">
                  <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{card.title}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 1.85 }}>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Cards */}
        <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <Thailand1 />
      <Thailand2 />
    </div>
  );
}
