import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollManager from "@/hooks/ScrollManager";
import FAQ from "@/components/faq";
import faqsData from "@/data/thailand/faqs.json";
import { TravelForm } from "@/components/TravelForm";

export default function Thailand() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <h1 className="sr-only">Thailand Tour Packages & Private Excursions 2026</h1>
      <ScrollManager />
      <title>Thailand Tour Packages 2026 - Bangkok, Phuket &amp; More | Thailand vacation</title>
      <meta name="description" content="Explore Thailand tour packages with Bangkok, Pattaya, Phuket, Krabi & Chiang Mai. Luxury resorts, island tours & personalised itineraries. Book your Thailand vacation with Antravi." />

      <Navbar />

      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '85vh' }}>
          <div className="absolute inset-0 overflow-hidden">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover aerial-drift">
              <source src="/videos/thailand.mp4" type="video/mp4" />
              <track kind="captions" src="/captions/thailand.vtt" srcLang="en" label="English captions" default />
            </video>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(22,38,96,0.65) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' }} />
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 mt-20">
            <h1
              className="cinematic-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 400,
                letterSpacing: '0.02em',
                marginBottom: '1.5rem',
                lineHeight: 1.1,
              }}
            >
              Ready to Experience<br/>the Land of Smiles?
            </h1>
            <p className="cinematic-subtitle" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', letterSpacing: '0.05em', opacity: 0.95, marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
              Our Thailand specialists craft personalised journeys — from Bangkok's golden temples to Phuket's hidden coves — built exactly around you.
            </p>
            <div className="cinematic-cta">
              <button onClick={handlePlanClick} className="btn-editorial-white px-8 py-3 text-lg">
                Plan Your Journey
              </button>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center text-sm text-gray-700">
              <div><strong className="block text-navy-900 font-serif text-lg mb-1">Capital</strong>Bangkok (Krung Thep)</div>
              <div><strong className="block text-navy-900 font-serif text-lg mb-1">Currency</strong>Thai Baht (฿)</div>
              <div><strong className="block text-navy-900 font-serif text-lg mb-1">Language</strong>Thai</div>
              <div><strong className="block text-navy-900 font-serif text-lg mb-1">Best Season</strong>Year round</div>
              <div><strong className="block text-navy-900 font-serif text-lg mb-1">Temples</strong>34,000+</div>
              <div><strong className="block text-navy-900 font-serif text-lg mb-1">Visa</strong>60 Days Visa-Free*</div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-6 max-w-3xl mx-auto">
              *Visa for Indians: 60 days Visa-free. Thailand Digital Arrival Card (TDAC) is a mandatory online form that must be completed at least 72 hours before your flight. You will be denied boarding without it.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label">About</span>
            <div className="editorial-divider" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--charcoal)', marginBottom: '1.5rem' }}>
              A Kingdom Unlike Any Other
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--mid-gray)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Thailand sits at the heart of mainland Southeast Asia, bordered by Myanmar, Laos, Cambodia and Malaysia. It is one of the few countries in the region never colonised by a European power — a fact that infuses its people with a quiet pride and its culture with remarkable continuity.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
              For Indian travellers, Thailand has long been the gateway to Southeast Asia — a four-hour flight away yet feeling entirely another world. In 2024, India became Thailand's second-largest source of international tourists, with over 1.8 million visitors making the crossing.
            </p>
            
            <div className="mt-12 bg-gray-50 p-8 rounded text-left border border-gray-100">
              <h3 className="font-serif text-xl mb-3 text-navy-800">Speak a Little Thai</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Thai is a tonal language, the same syllable can mean different things depending on pitch. But locals absolutely love it when visitors try, and even a few words earn you genuine warmth.
              </p>
            </div>
          </div>
        </section>

        {/* Food */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Thai Cuisine</span>
              <div className="editorial-divider" />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--charcoal)', marginBottom: '1rem' }}>
                Eat Like a Local
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Thai cuisine is a masterclass in balance — sweet, sour, salty, spicy and umami in every bowl. For Indian palates, it often feels surprisingly familiar yet thrillingly different.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                <h3 className="font-serif text-xl text-gray-800 mb-2">Pad Thai</h3>
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider block mb-3">Street Food Icon</span>
                <p className="text-sm text-gray-600">Stir-fried rice noodles with egg, bean sprouts, green onions and your choice of tofu, prawn or chicken — topped with crushed peanuts and a squeeze of lime. The dish that made Thailand famous worldwide.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                <h3 className="font-serif text-xl text-gray-800 mb-2">Green Curry (Gaeng Keow Wan)</h3>
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider block mb-3">Classic Curry</span>
                <p className="text-sm text-gray-600">Aromatic green chilli paste cooked in rich coconut milk with Thai basil, kaffir lime leaves and vegetables. Fragrant, creamy and deceptively spicy, always served with jasmine rice.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                <h3 className="font-serif text-xl text-gray-800 mb-2">Som Tum (Green Papaya Salad)</h3>
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider block mb-3">Northern Specialty</span>
                <p className="text-sm text-gray-600">Shredded unripe papaya pounded in a mortar with dried shrimp, chillies, lime juice, fish sauce and palm sugar. Explosive flavour in every bite — ask for "mai phet" if you need less heat.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                <h3 className="font-serif text-xl text-gray-800 mb-2">Khao Pad</h3>
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider block mb-3">Thai Fried Rice</span>
                <p className="text-sm text-gray-600">Jasmine rice wok-fried with garlic, egg, soy sauce and your choice of protein — finished with cucumber slices, spring onion and a wedge of lime. The Thai answer to biryani.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                <h3 className="font-serif text-xl text-gray-800 mb-2">Mango Sticky Rice</h3>
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider block mb-3">Must-try Dessert</span>
                <p className="text-sm text-gray-600">Glutinous sticky rice soaked in sweet coconut milk, served alongside perfectly ripe mango slices. Simple, seasonal and absolutely sublime — best enjoyed March through May.</p>
              </div>
              <div className="bg-green-50 p-6 rounded shadow-sm border border-green-100 flex flex-col justify-center">
                <h3 className="font-serif text-xl text-green-900 mb-2">Vegetarian & Vegan Note</h3>
                <p className="text-sm text-gray-700">Thai cuisine uses fish sauce extensively. Always say "jay" (เจ) for vegan or "mangsawirat" (มังสวิรัติ) for vegetarian when ordering. Buddhist vegan restaurants serve excellent meat-free versions of all classics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Culture & Customs</span>
              <div className="editorial-divider" />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--charcoal)', marginBottom: '1rem' }}>
                The Soul of Thailand
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Thai culture is shaped by Theravada Buddhism, reverence for the royal family and a deep respect for harmony and face. Understanding a few fundamentals transforms your experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="font-serif text-xl text-gray-800 mb-2">The Wai — Thai Greeting</h3>
                <p className="text-sm text-gray-600">Press palms together at chest level, fingers pointing up, and bow your head slightly. The higher your hands, the greater the respect. Never initiate a wai with children or service workers — they wai you first. Return a wai when given one.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-gray-800 mb-2">Royal Family — Profound Respect</h3>
                <p className="text-sm text-gray-600">The monarchy is sacred in Thailand. The lèse-majesté law means criticism of the royal family is a criminal offence. When the royal anthem plays in cinemas or public spaces, everyone stands — visitors should do the same.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-gray-800 mb-2">Head & Feet — Sacred Hierarchy</h3>
                <p className="text-sm text-gray-600">The head is considered the most sacred part of the body — never touch a Thai person's head. Feet are the lowest — don't point your feet at people, monks or Buddha images. Remove shoes before entering temples and many homes.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-gray-800 mb-2">Temple Etiquette</h3>
                <p className="text-sm text-gray-600">Dress conservatively — cover shoulders and knees. Sarongs are usually available to borrow at temple gates. Women must never touch or hand items directly to a monk. Speak quietly; temples are places of worship.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-gray-800 mb-2">"Saving Face" — Kreng Jai</h3>
                <p className="text-sm text-gray-600">Thais avoid confrontation and public criticism to preserve harmony. If a Thai person smiles when something goes wrong, it is not indifference — it is courtesy. Raising your voice or showing frustration in public is deeply disrespectful.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-gray-800 mb-2">The Elephant — National Symbol</h3>
                <p className="text-sm text-gray-600">The white elephant is a sacred symbol. Please choose elephant sanctuaries that prioritise welfare — avoid attractions where elephants perform or give rides. Ethical sanctuaries allow you to walk, feed and bathe elephants with full dignity.</p>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded">
              <h3 className="font-serif text-xl text-blue-900 mb-3">Festivals to Plan Around</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li><strong>Songkran (Apr 13–15):</strong> Thai New Year water festival — the world's biggest water fight.</li>
                <li><strong>Loy Krathong (Nov):</strong> Thousands of lit lotus floats and sky lanterns released at night — magical.</li>
                <li><strong>Vegetarian Festival (Oct):</strong> Nine days of strict vegetarian observance and street performances in Phuket.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label">Experiences & Attractions</span>
              <div className="editorial-divider" />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--charcoal)', marginBottom: '1rem' }}>
                Where to Go, What to Feel
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Thailand rewards both the beach-lover and the culture-seeker. From the neon chaos of Bangkok's night markets to the silence of a hilltribe village at dawn, every region tells a different story.
              </p>
            </div>

            {/* Bangkok */}
            <div className="mb-20">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="md:w-1/3">
                  <img src="/images/thailand/bangkok.webp" alt="Bangkok" className="w-full rounded shadow-sm object-cover aspect-[4/3]" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-serif text-gray-800 mb-2">Bangkok — The Unstoppable City</h3>
                  <p className="text-sm font-semibold text-luxury-gold uppercase tracking-widest mb-4">Central & Capital | Best for Everyone</p>
                  <p className="text-gray-600 mb-4">The Thai capital is one of the world's most exciting cities — a place where centuries-old temples stand beside rooftop infinity pools and world-class street food costs less than a coffee back home. The Grand Palace and Wat Phra Kaew alone justify the journey. Lose yourself in the Chatuchak Weekend Market, take a longtail boat through the khlongs, and watch the city transform after dark.</p>
                  <div className="bg-white p-4 border-l-4 border-luxury-gold rounded shadow-sm text-sm text-gray-700">
                    <strong>Antravi's Take:</strong> Bangkok is almost always the first stop on any Thailand trip and rightly so. We recommend 3 nights minimum. Don't rush the temples; give yourself a full day for the Grand Palace area alone.
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Grand Palace & Wat Phra Kaew:</strong> The most iconic landmark. Go early morning.</div>
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Wat Pho:</strong> Houses a 46m reclining Buddha. Birthplace of traditional Thai massage.</div>
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Chao Phraya & Khlongs:</strong> Take a longtail boat through the "Venice of the East".</div>
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Chatuchak Market:</strong> 15,000+ stalls. Open weekends only. Arrive before 10am.</div>
              </div>
            </div>

            {/* Pattaya */}
            <div className="mb-20">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-start mb-8">
                <div className="md:w-1/3">
                  <img src="/images/thailand/pattaya.webp" alt="Pattaya" className="w-full rounded shadow-sm object-cover aspect-[4/3]" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-serif text-gray-800 mb-2">Pattaya — India's Favourite Thai Beach City</h3>
                  <p className="text-sm font-semibold text-luxury-gold uppercase tracking-widest mb-4">Eastern Gulf Coast | 2 hrs from Bangkok</p>
                  <p className="text-gray-600 mb-4">Pattaya is the most Indian-friendly city in Thailand. Beyond the vibrant Beach Road, Pattaya has genuinely beautiful beaches on nearby islands, stunning temples, lush botanical gardens, and unique monuments. It's a city that surprises people who expect nothing more than a party town.</p>
                  <div className="bg-white p-4 border-l-4 border-luxury-gold rounded shadow-sm text-sm text-gray-700">
                    <strong>Antravi's Take:</strong> Pattaya works brilliantly as a 2-night add-on to Bangkok. It's only 2 hours by road and gives travellers a beach experience without a domestic flight. Indian vegetarian food is incredibly easy to find here.
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Koh Larn (Coral Island):</strong> 30-min speedboat. Clear water, water sports.</div>
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Sanctuary of Truth:</strong> 105m wooden temple by the sea. Hand-carved. Unmissable.</div>
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Nong Nooch Garden:</strong> 600 acres of botanical gardens and cultural shows.</div>
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Alcazar Show:</strong> Extravagant cabaret show. Pure family entertainment.</div>
              </div>
            </div>

            {/* Phuket */}
            <div className="mb-20">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="md:w-1/3">
                  <img src="/images/thailand/phuket.webp" alt="Phuket" className="w-full rounded shadow-sm object-cover aspect-[4/3]" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-serif text-gray-800 mb-2">Phuket — Where Luxury Meets the Sea</h3>
                  <p className="text-sm font-semibold text-luxury-gold uppercase tracking-widest mb-4">Andaman Sea | Thailand's Largest Island</p>
                  <p className="text-gray-600 mb-4">Phuket is Thailand's crown jewel. It sits in the Andaman Sea with water so blue it looks digitally enhanced, a thriving restaurant scene, world-class resorts, and enough activities to fill weeks. It's the perfect mix of relaxation and exploration, from the buzz of Patong to the quiet luxury of Surin.</p>
                  <div className="bg-white p-4 border-l-4 border-luxury-gold rounded shadow-sm text-sm text-gray-700">
                    <strong>Antravi's Take:</strong> Phuket has beaches for every type of traveller. We always ask our guests what kind of trip they want before recommending which part of Phuket to stay in — it makes a huge difference.
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Patong Beach:</strong> Buzz, nightlife, water sports. The heartbeat of the island.</div>
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Phang Nga Bay:</strong> Limestone karsts. James Bond Island. Extraordinary landscape.</div>
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Old Phuket Town:</strong> Sino-Portuguese shophouses, cafes, street art, night markets.</div>
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Big Buddha:</strong> 45m tall on Nakkerd Hill. Spectacular views of the whole island.</div>
              </div>
            </div>

            {/* Krabi */}
            <div className="mb-20">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-start mb-8">
                <div className="md:w-1/3">
                  <img src="/images/thailand/krabi.webp" alt="Krabi" className="w-full rounded shadow-sm object-cover aspect-[4/3]" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-serif text-gray-800 mb-2">Krabi — The Most Beautiful Coastline in Thailand</h3>
                  <p className="text-sm font-semibold text-luxury-gold uppercase tracking-widest mb-4">Andaman Coast | Southern Thailand</p>
                  <p className="text-gray-600 mb-4">This is Thailand in its most dramatic, natural form — raw, unspoiled coastline where some beaches can only be reached by longtail boat, where rock climbers scale vertical sea cliffs at sunrise, and where the water is incredibly clear. Krabi is relaxed, scenic, and awe-inspiring.</p>
                  <div className="bg-white p-4 border-l-4 border-luxury-gold rounded shadow-sm text-sm text-gray-700">
                    <strong>Antravi's Take:</strong> Krabi is where Thailand stops feeling like a tourist destination and starts feeling like an adventure. We love pairing Krabi with Phuket — a perfect contrast.
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Railay Beach:</strong> Reached only by boat. Stunning limestone cliffs, calm water.</div>
                <div className="bg-white p-4 rounded border border-gray-100"><strong>4 Islands Tour:</strong> Classic longtail trip to Koh Mor, Koh Chuak, Koh Kwang & Tup Island.</div>
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Tiger Cave Temple:</strong> Climb 1,237 steep steps for a 360-degree panorama.</div>
                <div className="bg-white p-4 rounded border border-gray-100"><strong>Phi Phi Islands:</strong> Access Maya Bay via speedboat day trip from Krabi.</div>
              </div>
            </div>

            {/* Other Gems Text List */}
            <div className="bg-white p-8 rounded border border-gray-200">
              <h3 className="text-2xl font-serif text-gray-800 mb-6 text-center">More incredible regions to explore</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-serif text-lg text-navy-800 mb-2">Chiang Mai</h4>
                  <p className="text-sm text-gray-600">The soul of Northern Thailand. Cooler air, quieter streets, ancient temples, ethical elephant sanctuaries, and the best cooking schools. Don't miss Doi Suthep Temple and the Sunday Walking Street.</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-navy-800 mb-2">Koh Samui</h4>
                  <p className="text-sm text-gray-600">Thailand's tropical luxury island in the Gulf. Private pool villas, beachfront dining, and indulgent spa retreats. Ideal for honeymooners wanting spectacular sunrises and calm seas.</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-navy-800 mb-2">Koh Phangan</h4>
                  <p className="text-sm text-gray-600">Famous for the Full Moon Party at Haad Rin, but equally renowned for quiet fishing villages, hidden beaches, and Asia's best yoga and wellness retreats in the north.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Travel Info */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--charcoal)', marginBottom: '3rem', textAlign: 'center' }}>
              Travel Essentials
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Choosing Your Perfect Season</h3>
                <p className="text-gray-600 text-sm mb-4">Thailand has three seasons: Cool & Dry (Nov–Feb), Hot (Mar–May), and Wet Monsoon (Jun–Oct). Different regions are affected differently.</p>
                <div className="bg-green-50 p-4 border border-green-100 rounded text-sm text-gray-700">
                  <strong>Budget Window:</strong> May–October offers 30–50% cheaper hotels and flights with far fewer crowds. If you don't mind occasional rain, it can be spectacular value.
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Getting There</h3>
                <p className="text-gray-600 text-sm mb-4">3 major international airports: Bangkok (BKK), Phuket (HKT) and Chiang Mai (CNX). Most Indian routes connect through BKK.</p>
                <div className="bg-blue-50 p-4 border border-blue-100 rounded text-sm text-gray-700 mb-2">
                  <strong>Visa Update 2025:</strong> Indian passport holders receive visa-free entry to Thailand for stays up to 60 days. Just a valid passport with 6+ months validity and a return ticket.
                </div>
                <p className="text-xs text-gray-500 mt-2"><strong>Booking Tip:</strong> Best fares appear 6–10 weeks before travel. Tuesday/Wednesday departures are typically cheapest from India.</p>
              </div>
            </div>

            <h3 className="font-serif text-2xl text-navy-900 mb-6 text-center">Before You Land</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <div className="p-4 border border-gray-100 rounded bg-gray-50">
                <strong className="block text-gray-800 mb-1">1. Local SIM</strong>
                <p className="text-gray-600 text-xs">Buy AIS, DTAC or True Move tourist SIMs at the airport. Much cheaper than roaming.</p>
              </div>
              <div className="p-4 border border-gray-100 rounded bg-gray-50">
                <strong className="block text-gray-800 mb-1">2. Use Grab</strong>
                <p className="text-gray-600 text-xs">Grab (Asia's Uber) is available in all major cities. Avoid unmarked street taxis.</p>
              </div>
              <div className="p-4 border border-gray-100 rounded bg-gray-50">
                <strong className="block text-gray-800 mb-1">3. Cash is King</strong>
                <p className="text-gray-600 text-xs">Thailand is cash-based outside luxury hotels. ATMs charge a fee — draw larger amounts fewer times.</p>
              </div>
              <div className="p-4 border border-gray-100 rounded bg-gray-50">
                <strong className="block text-gray-800 mb-1">4. Dress for Temples</strong>
                <p className="text-gray-600 text-xs">Carry a light scarf. Shorts and sleeveless tops are strictly refused at places like the Grand Palace.</p>
              </div>
              <div className="p-4 border border-gray-100 rounded bg-gray-50">
                <strong className="block text-gray-800 mb-1">5. Hydration & Heat</strong>
                <p className="text-gray-600 text-xs">Drink 3-4L of bottled water daily. Tap water is not safe. Fresh coconut water is everywhere.</p>
              </div>
              <div className="p-4 border border-gray-100 rounded bg-gray-50">
                <strong className="block text-gray-800 mb-1">6. Travel Insurance</strong>
                <p className="text-gray-600 text-xs">Medical care is excellent but expensive. Comprehensive travel insurance is strongly recommended.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Book with Antravi CTA */}
        <section className="py-20" style={{ backgroundColor: 'var(--navy)', color: 'white' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '2rem' }}>Antravi for Thailand</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">Planning a Thailand trip is easy. Planning a great Thailand trip takes experience. Here's what makes Antravi different from booking everything yourself.</p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
              <div>
                <h4 className="text-xl font-serif mb-2" style={{ color: 'var(--luxury-gold)' }}>Built for Indian Travellers</h4>
                <p className="text-sm text-gray-300">We understand dietary requirements (veg/Jain), flight timings, and the comfort of speaking to someone in your language when needed.</p>
              </div>
              <div>
                <h4 className="text-xl font-serif mb-2" style={{ color: 'var(--luxury-gold)' }}>Every Trip is Custom-Made</h4>
                <p className="text-sm text-gray-300">No fixed packages. We build an itinerary specifically designed for your group, budget, and travel dates.</p>
              </div>
              <div>
                <h4 className="text-xl font-serif mb-2" style={{ color: 'var(--luxury-gold)' }}>Support When You Need It</h4>
                <p className="text-sm text-gray-300">Available on WhatsApp during your trip. Need a restaurant rec or a spontaneous day trip? You're never alone.</p>
              </div>
              <div>
                <h4 className="text-xl font-serif mb-2" style={{ color: 'var(--luxury-gold)' }}>Transparent Pricing</h4>
                <p className="text-sm text-gray-300">No hidden costs. No surprise charges at check-in. We tell you exactly what's covered before you pay a single rupee.</p>
              </div>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-4">Plan your Thailand vacation with Antravi</h3>
              <p className="mb-6">Tell us your travel dates & preferences — we’ll create a personalized itinerary just for you.</p>
              <button onClick={handlePlanClick} className="btn-editorial-white px-8 py-3 bg-white text-blue-900 border-none font-semibold rounded hover:bg-gray-100 transition-colors">
                Reserve My Thailand Vacation Now
              </button>
            </div>
          </div>
        </section>

        <section className="py-10" style={{ backgroundColor: '#ffffff' }}>
          <FAQ faqsData={faqsData} />
        </section>
      </main>

      <div className="text-center py-6 text-xs text-gray-400 bg-gray-50 border-t-2 border-blue-900">
        © 2026 Antravi Travel Experience · antravi.com · Content accurate as of May 2026.<br />
        Visa, activities, and flight information are subject to change — always verify with official sources before travel.
      </div>

      <Footer />
      <TravelForm isOpen={isFormOpen} onClose={() => { setIsFormOpen(false); }} />
    </div>
  );
}
