import { Button } from "@/components/ui/button";
import ScrollManager from "@/hooks/ScrollManager";
import FAQ from "@/components/faq";
import faqsData from "@/data/bali/faqs.json";
import { useState } from "react";
import { TravelForm } from "@/components/TravelForm";
import { Link } from "wouter";

export default function Bali() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1C1C1A]">
      <ScrollManager />
      <title>
        Bali Tour Packages 2025 Ubud, Seminyak, Kuta, Nusa Penida, Luxury Resorts | Antravi
      </title>
      <meta name="description" content="Explore Bali vacation packages with Ubud, Seminyak, Nusa Penida & luxury villas. Custom itineraries, private pool stays & honeymoon packages. Book your Bali holiday with Antravi." />

      <header className="sticky top-0 z-40 border-b border-[#ece5d8] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center"><img src="/Antravi_Logo.png" alt="Antravi" className="h-10 w-auto" /></Link>
          <Link href="/" className="text-sm uppercase tracking-[0.08em] hover:text-[#C9A96E]">Back to home</Link>
        </div>
      </header>

      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="/videos/bali.mp4"
                type="video/mp4"
              />
              <track kind="captions" src="/captions/bali.vtt" srcLang="en" label="English captions" default />
            </video>
            <div className="absolute inset-0 bg-black/35"></div>
          </div>

          <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
            <p className="luxury-label !text-white/85">Bali</p>
            <h1 className="font-serif text-[42px] md:text-[72px] font-light mb-6 tracking-tight leading-[1.05]">
              Bali Tour Packages - Ubud, Seminyak, Nusa Penida & Luxury Stays
            </h1>
            <p className="text-lg md:text-xl font-light mb-8 tracking-wide text-white/90">
              Bali is one of the most beautiful and culturally rich islands in Southeast Asia, known for its tropical beaches, volcanic mountains, lush forests, luxury pool villas, unique temples, and world-class hospitality. At Antravi, we create premium Bali packages customised for honeymoon couples, families, and luxury travellers who want comfort, privacy, and unforgettable experiences.
            </p>
            <Button onClick={handlePlanClick} size="lg" className="luxury-cta text-white text-sm px-8 py-3 rounded-full">
              Plan With Antravi
            </Button>
          </div>
        </section>

        {/* Bali Destinations Section */}
        <section className="luxury-section bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <h2 className="font-serif text-[38px] md:text-[50px] text-center mb-12">
              Explore Bali's Best Destinations
            </h2>
            
            {/* Ubud Section */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-[34px] mb-4">Ubud – Culture, Temples & Nature</h3>
                  <p className="text-[#5c5850] mb-4 leading-[1.75]">
                    Ubud is the cultural heart of Bali and a must-visit destination for travelers who want nature, spirituality, and scenic views. Surrounded by lush rice terraces, waterfalls, and traditional villages, Ubud offers a peaceful and relaxing atmosphere.
                  </p>
                  <p className="text-[#5c5850] mb-4 leading-[1.75]">
                    Popular attractions include the Tegalalang Rice Terrace, Sacred Monkey Forest, Tegenungan Waterfall, Bali Swing experiences, local craft markets, and unique cafes. Guests often choose forest-view resorts and private pool villas in Ubud for a peaceful start to their Bali vacation package.
                  </p>
                </div>
                <div>
                  <img 
                    src="/images/bali/ubud.webp?auto=format&fit=crop&w=800&q=60"
                    alt="Ubud Bali rice terrace tour package Antravi"
                    className="w-full h-80 object-cover rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.06)]"
                  />
                </div>
              </div>
            </div>

            {/* Seminyak & Kuta Section */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="/images/bali/seminyak.webp?auto=format&fit=crop&w=800&q=60" 
                    alt="Seminyak beach Bali tour for couples"
                    className="w-full h-80 object-cover rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.06)]"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="font-serif text-[34px] mb-4">Seminyak & Kuta – Beaches, Shopping & Nightlife</h3>
                  <p className="text-[#5c5850] mb-4 leading-[1.75]">
                    Seminyak and Kuta are popular for beaches, cafes, nightlife, and shopping. Seminyak Beach is known for luxury beach clubs, boutique stores, spa experiences, and trendy restaurants.
                  </p>
                  <p className="text-[#5c5850] leading-[1.75]">
                    Kuta is more lively and perfect for surfing, nightlife, and affordable shopping options. These areas are ideal for travelers who want a mix of fun, relaxation, and entertainment during their Bali holiday package.
                  </p>
                </div>
              </div>
            </div>

            {/* Nusa Penida Section */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-[34px] mb-4">Nusa Penida – One-Day Island Excursion</h3>
                  <p className="text-[#5c5850] mb-4 leading-[1.75]">
                    Nusa Penida is one of the most photographed islands in Bali, famous for its crystal-clear blue waters, dramatic cliffs, and beautiful beaches. The top attractions include Kelingking Beach, Broken Beach, Angel's Billabong, and Crystal Bay.
                  </p>
                  <p className="text-[#5c5850] leading-[1.75]">
                    A full-day Nusa Penida tour is included in most Bali honeymoon packages because of its romantic views and stunning landscapes.
                  </p>
                </div>
                <div>
                  <img 
                    src="/images/bali/nusa.webp?auto=format&fit=crop&w=800&q=60" 
                    alt="Nusa Penida Bali honeymoon package"
                    className="w-full h-80 object-cover rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.06)]"
                  />
                </div>
              </div>
            </div>

            {/* Uluwatu Section */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="/images/bali/uluwatu.webp?auto=format&fit=crop&w=800&q=60" 
                    alt="Uluwatu sunset Bali itinerary"
                    className="w-full h-80 object-cover rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.06)]"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="font-serif text-[34px] mb-4">Uluwatu – Clifftop Views & Sunset Experiences</h3>
                  <p className="text-[#5c5850] mb-4 leading-[1.75]">
                    Uluwatu is known for clifftop ocean views, luxury resorts, and iconic temples. The Uluwatu Temple Kecak Fire Dance is one of Bali's most unique cultural shows, offering dramatic sunset views.
                  </p>
                  <p className="text-[#5c5850] leading-[1.75]">
                    Visitors also enjoy premium beach clubs, surfing spots, and dramatic cliffside dining experiences. Uluwatu is ideal for travelers who want a luxury coastal experience in their Bali travel itinerary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bali Itinerary Section */}
        <section className="luxury-section bg-[#F3F1EC]">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-[38px] md:text-[50px] mb-4">Bali Itinerary</h2>
              <p className="text-lg text-[#5c5850] max-w-3xl mx-auto">
                A well-designed itinerary plans the perfect Bali trip. For short vacations, a 5-day Bali itinerary covering Ubud, Seminyak, and Nusa Penida is ideal. For longer and more relaxed travel, a 7-day Bali itinerary includes Ubud's nature, Seminyak's beaches, Uluwatu's cliffs, and Nusa Penida's island tour.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="luxury-card p-8">
                <h3 className="font-serif text-[30px] mb-3">5 to 7 Days</h3>
                <p className="text-[#5c5850]">
                  All itineraries can be customised depending on whether you prefer adventure, relaxation, shopping, nightlife, or luxury experiences.
                </p>
              </div>
              <div className="luxury-card p-8">
                <h3 className="font-serif text-[30px] mb-3">Best Time to Visit Bali</h3>
                <p className="text-[#5c5850]">
                  The best time to visit Bali is during the dry season from April to October, when the weather is sunny and perfect for sightseeing, beaches, and photography. The months of June to September are the most popular for honeymoons and outdoor activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Antravi Section */}
        <section className="luxury-section bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-[38px] md:text-[50px] mb-4">Why choose Antravi for a Bali vacation?</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-[#5c5850] text-center mb-8 leading-[1.75]">
                Antravi offers a luxury-focused and personalised approach to Bali vacation planning. Our curated packages include handpicked resorts, private transfers, guided tours, professional support, and smooth travel coordination. We focus on quality, comfort, and detail, ensuring your Bali vacation is exactly the way you dream it.
              </p>
              <p className="text-lg text-[#5c5850] text-center leading-[1.75]">
                Whether it's a honeymoon, family vacation, or group travel, we provide seamless service and expert recommendations.
              </p>
            </div>
            <div className="text-center mt-12">
              <img 
                src="/images/bali/bali-end.webp?auto=format&fit=crop&w=800&q=60" 
                alt="Bali private pool villa honeymoon"
                className="w-full h-96 object-cover rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.06)]"
              />
            </div>
          </div>
        </section>

        {/* Enquire Now CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center">
              <h2 className="font-serif text-[38px] md:text-[50px] mb-6">
                Ready to Explore Bali?
              </h2>
              <p className="text-lg text-[#5c5850] mb-8 max-w-3xl mx-auto">
                Let us create your perfect Bali vacation with customised itineraries, luxury stays, and unforgettable experiences.
              </p>
              <Button onClick={handlePlanClick} size="lg" className="luxury-cta text-white text-sm px-8 py-3 rounded-full">
                Enquire Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <FAQ faqsData={faqsData} />
        </section>
      </main>

      <TravelForm isOpen={isFormOpen} onClose={() => {setIsFormOpen(false)}} />
    </div>
  );
}
