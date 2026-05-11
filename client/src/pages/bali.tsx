import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollManager from "@/hooks/ScrollManager";
import FAQ from "@/components/faq";
import faqsData from "@/data/bali/faqs.json";
import { useState } from "react";
import { TravelForm } from "@/components/TravelForm";

export default function Bali() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <ScrollManager />
      <title>
        Bali Tour Packages 2025 Ubud, Seminyak, Kuta, Nusa Penida, Luxury Resorts | Antravi
      </title>
      <meta name="description" content="Explore Bali vacation packages with Ubud, Seminyak, Nusa Penida & luxury villas. Custom itineraries, private pool stays & honeymoon packages. Book your Bali holiday with Antravi." />

      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '60vh' }}>
          <div className="absolute inset-0 overflow-hidden">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover aerial-drift">
              <source src="/videos/bali.mp4" type="video/mp4" />
              <track kind="captions" src="/captions/bali.vtt" srcLang="en" label="English captions" default />
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
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}
            >
              Bali Tour Packages — Ubud, Seminyak, Nusa Penida &amp; Luxury Stays
            </h1>
            <p className="cinematic-subtitle" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, maxWidth: '42rem', margin: '0 auto 2rem' }}>
              Bali is one of the most beautiful and culturally rich islands in Southeast Asia, known for its tropical beaches, volcanic mountains, lush forests, luxury pool villas, unique temples, and world-class hospitality. At Antravi, we create premium Bali packages customised for honeymoon couples, families, and luxury travellers who want comfort, privacy, and unforgettable experiences.
            </p>
            <div className="cinematic-cta">
              <button onClick={handlePlanClick} className="btn-editorial-white">
                Plan With Antravi
              </button>
            </div>
          </div>
        </section>

        {/* Bali Destinations Section */}
        <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label">Destinations</span>
              <div className="editorial-divider" />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                  fontWeight: 400,
                  color: 'var(--charcoal)',
                }}
              >
                Explore Bali's Best Destinations
              </h2>
            </div>

            {[
              {
                title: 'Ubud – Culture, Temples & Nature',
                img: '/images/bali/ubud.webp?auto=format&fit=crop&w=800&q=60',
                alt: 'Ubud Bali rice terrace tour package Antravi',
                paras: [
                  'Ubud is the cultural heart of Bali and a must-visit destination for travelers who want nature, spirituality, and scenic views. Surrounded by lush rice terraces, waterfalls, and traditional villages, Ubud offers a peaceful and relaxing atmosphere.',
                  'Popular attractions include the Tegalalang Rice Terrace, Sacred Monkey Forest, Tegenungan Waterfall, Bali Swing experiences, local craft markets, and unique cafes. Guests often choose forest-view resorts and private pool villas in Ubud for a peaceful start to their Bali vacation package.',
                ],
                reverse: false,
              },
              {
                title: 'Seminyak & Kuta – Beaches, Shopping & Nightlife',
                img: '/images/bali/seminyak.webp?auto=format&fit=crop&w=800&q=60',
                alt: 'Seminyak beach Bali tour for couples',
                paras: [
                  'Seminyak and Kuta are popular for beaches, cafes, nightlife, and shopping. Seminyak Beach is known for luxury beach clubs, boutique stores, spa experiences, and trendy restaurants.',
                  'Kuta is more lively and perfect for surfing, nightlife, and affordable shopping options. These areas are ideal for travelers who want a mix of fun, relaxation, and entertainment during their Bali holiday package.',
                ],
                reverse: true,
              },
              {
                title: 'Nusa Penida – One-Day Island Excursion',
                img: '/images/bali/nusa.webp?auto=format&fit=crop&w=800&q=60',
                alt: 'Nusa Penida Bali honeymoon package',
                paras: [
                  'Nusa Penida is one of the most photographed islands in Bali, famous for its crystal-clear blue waters, dramatic cliffs, and beautiful beaches. The top attractions include Kelingking Beach, Broken Beach, Angel\'s Billabong, and Crystal Bay.',
                  'A full-day Nusa Penida tour is included in most Bali honeymoon packages because of its romantic views and stunning landscapes.',
                ],
                reverse: false,
              },
              {
                title: 'Uluwatu – Clifftop Views & Sunset Experiences',
                img: '/images/bali/uluwatu.webp?auto=format&fit=crop&w=800&q=60',
                alt: 'Uluwatu sunset Bali itinerary',
                paras: [
                  'Uluwatu is known for clifftop ocean views, luxury resorts, and iconic temples. The Uluwatu Temple Kecak Fire Dance is one of Bali\'s most unique cultural shows, offering dramatic sunset views.',
                  'Visitors also enjoy premium beach clubs, surfing spots, and dramatic cliffside dining experiences. Uluwatu is ideal for travelers who want a luxury coastal experience in their Bali travel itinerary.',
                ],
                reverse: true,
              },
            ].map(({ title, img, alt, paras, reverse }) => (
              <div key={title} className="mb-20">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className={reverse ? 'order-2 md:order-1' : ''}>
                    <img
                      src={img}
                      alt={alt}
                      className="w-full object-cover"
                      style={{ height: '22rem', borderRadius: '4px' }}
                    />
                  </div>
                  <div className={reverse ? 'order-1 md:order-2' : ''}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        color: 'var(--charcoal)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {title}
                    </h3>
                    <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--luxury-gold)', margin: '0.75rem 0 1rem' }} />
                    {paras.map((p, i) => (
                      <p key={i} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 1.85, marginBottom: '0.75rem' }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bali Itinerary Section */}
        <section className="py-20" style={{ backgroundColor: 'var(--warm-cream)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Itinerary</span>
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
                Bali Itinerary
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', maxWidth: '42rem', margin: '0 auto', lineHeight: 1.85 }}>
                A well-designed itinerary plans the perfect Bali trip. For short vacations, a 5-day Bali itinerary covering Ubud, Seminyak, and Nusa Penida is ideal. For longer and more relaxed travel, a 7-day Bali itinerary includes Ubud's nature, Seminyak's beaches, Uluwatu's cliffs, and Nusa Penida's island tour.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '5 to 7 Days',
                  body: 'All itineraries can be customised depending on whether you prefer adventure, relaxation, shopping, nightlife, or luxury experiences.',
                },
                {
                  title: 'Best Time to Visit Bali',
                  body: 'The best time to visit Bali is during the dry season from April to October, when the weather is sunny and perfect for sightseeing, beaches, and photography. The months of June to September are the most popular for honeymoons and outdoor activities.',
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--warm-border)',
                    borderRadius: '4px',
                    padding: '2rem',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 1.85 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Antravi Section */}
        <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Why Antravi</span>
              <div className="editorial-divider" />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                  fontWeight: 400,
                  color: 'var(--charcoal)',
                }}
              >
                Why choose Antravi for a Bali vacation?
              </h2>
            </div>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.9, marginBottom: '1rem' }}>
                Antravi offers a luxury-focused and personalised approach to Bali vacation planning. Our curated packages include handpicked resorts, private transfers, guided tours, professional support, and smooth travel coordination. We focus on quality, comfort, and detail, ensuring your Bali vacation is exactly the way you dream it.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.9 }}>
                Whether it's a honeymoon, family vacation, or group travel, we provide seamless service and expert recommendations.
              </p>
            </div>
            <div className="overflow-hidden" style={{ borderRadius: '4px' }}>
              <img
                src="/images/bali/bali-end.webp?auto=format&fit=crop&w=800&q=60"
                alt="Bali private pool villa honeymoon"
                className="w-full object-cover"
                style={{ height: '24rem' }}
              />
            </div>
          </div>
        </section>

        {/* Enquire CTA */}
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
              Ready to Explore Bali?
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', marginBottom: '2rem', lineHeight: 1.8, maxWidth: '36rem', margin: '0 auto 2rem' }}>
              Let us create your perfect Bali vacation with customised itineraries, luxury stays, and unforgettable experiences.
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
