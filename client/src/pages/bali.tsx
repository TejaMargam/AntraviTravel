import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import ScrollManager from "@/hooks/ScrollManager";
import FAQ from "@/components/faq";
import faqsData from "@/data/bali/faqs.json";

type Place = {
  title: string;
  description: string;
  image: string;
};

export default function Bali() {
  const FRESHWORKS_FORM_URL =
    "https://antraviprivatelimited.myfreshworks.com/crm/sales/web_forms/1b242fefa94aa8cd060f4b81be4befd03bc011fc84f8a1490fa433e1abcc364b/form.html";

  const handlePlanClick = () => {
    window.location.href = FRESHWORKS_FORM_URL;
  };

  const places: Place[] = [
    {
      title: "Ubud",
      description:
        "Rice terraces, art markets, and serene jungle stays in Bali’s cultural heart.",
      image:
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1600&q=60",
    },
    {
      title: "Uluwatu",
      description:
        "Clifftop sunsets, surf breaks, and the iconic Uluwatu Temple overlooking the sea.",
      image:
        "https://images.unsplash.com/photo-1591624197700-6fc997314981?auto=format&fit=crop&w=1600&q=60",
    },
    {
      title: "Nusa Penida",
      description:
        "Dramatic coastal viewpoints, turquoise bays, and day trips made effortless.",
      image:
        "https://plus.unsplash.com/premium_photo-1668883189152-d771c402c385?auto=format&fit=crop&w=1600&q=60",
    },
    {
      title: "Seminyak",
      description:
        "Beach clubs, boutique shopping, and stylish stays for a vibrant Bali escape.",
      image:
        "https://images.unsplash.com/photo-1552272492-3053fbacbf4b?auto=format&fit=crop&w=1600&q=60",
    },
    {
      title: "Tegallalang Rice Terraces",
      description:
        "Picture-perfect terraces and scenic walks—an iconic Bali landscape.",
      image:
        "https://images.unsplash.com/photo-1715755455989-76413081ad10?auto=format&fit=crop&w=1600&q=60",
    },
    {
      title: "Tanah Lot",
      description:
        "A sea temple at golden hour—one of Bali’s most photographed landmarks.",
      image:
        "https://images.unsplash.com/photo-1711948769532-025d4792c7c2?auto=format&fit=crop&w=1600&q=60",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ScrollManager />
      <title>
        Bali Tour Packages 2025 Ubud, Seminyak, Kuta, Nusa Penida, Luxury Resorts | Antravi
      </title>
      <meta name="description" content="Explore Bali vacation packages with Ubud, Seminyak, Nusa Penida & luxury villas. Custom itineraries, private pool stays & honeymoon packages. Book your Bali holiday with Antravi." />

      <Navbar />

      <main className="pt-20">
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
                src="https://videos.pexels.com/video-files/2949519/2949519-uhd_2560_1440_30fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-blue-900/30"></div>
          </div>

          <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Bali Tour Packages – Ubud, Seminyak, Nusa Penida & Luxury Stays
            </h1>
            <p className="text-lg md:text-xl font-light mb-8 tracking-wide">
              Bali is one of the most beautiful and culturally rich islands in Southeast Asia, known for its tropical beaches, volcanic mountains, lush forests, luxury pool villas, unique temples, and world-class hospitality. At Antravi, we create premium Bali packages customised for honeymoon couples, families, and luxury travellers who want comfort, privacy, and unforgettable experiences.
            </p>
            <Button
              onClick={handlePlanClick}
              size="lg"
              className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-3"
              style={{ borderRadius: "5px" }}
            >
              Plan With Antravi
            </Button>
          </div>
        </section>

        {/* Bali Destinations Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              Explore Bali's Best Destinations
            </h2>
            
            {/* Ubud Section */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-black">Ubud – Culture, Temples & Nature</h3>
                  <p className="text-gray-600 mb-4">
                    Ubud is the cultural heart of Bali and a must-visit destination for travelers who want nature, spirituality, and scenic views. Surrounded by lush rice terraces, waterfalls, and traditional villages, Ubud offers a peaceful and relaxing atmosphere.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Popular attractions include the Tegalalang Rice Terrace, Sacred Monkey Forest, Tegenungan Waterfall, Bali Swing experiences, local craft markets, and unique cafes. Guests often choose forest-view resorts and private pool villas in Ubud for a peaceful start to their Bali vacation package.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1558819392-f4ebe3801687?auto=format&fit=crop&w=800&q=60" 
                    alt="Ubud Bali rice terrace tour package Antravi"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Seminyak & Kuta Section */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1662950267280-0cdf5f7139b4?auto=format&fit=crop&w=800&q=60" 
                    alt="Seminyak beach Bali tour for couples"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="font-heading text-2xl font-bold mb-4 text-black">Seminyak & Kuta – Beaches, Shopping & Nightlife</h3>
                  <p className="text-gray-600 mb-4">
                    Seminyak and Kuta are popular for beaches, cafes, nightlife, and shopping. Seminyak Beach is known for luxury beach clubs, boutique stores, spa experiences, and trendy restaurants.
                  </p>
                  <p className="text-gray-600">
                    Kuta is more lively and perfect for surfing, nightlife, and affordable shopping options. These areas are ideal for travelers who want a mix of fun, relaxation, and entertainment during their Bali holiday package.
                  </p>
                </div>
              </div>
            </div>

            {/* Nusa Penida Section */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-black">Nusa Penida – One-Day Island Excursion</h3>
                  <p className="text-gray-600 mb-4">
                    Nusa Penida is one of the most photographed islands in Bali, famous for its crystal-clear blue waters, dramatic cliffs, and beautiful beaches. The top attractions include Kelingking Beach, Broken Beach, Angel's Billabong, and Crystal Bay.
                  </p>
                  <p className="text-gray-600">
                    A full-day Nusa Penida tour is included in most Bali honeymoon packages because of its romantic views and stunning landscapes.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1649594496075-5fe875274f7a?auto=format&fit=crop&w=800&q=60" 
                    alt="Nusa Penida Bali honeymoon package"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Uluwatu Section */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1604842937136-1648761a6256?auto=format&fit=crop&w=800&q=60" 
                    alt="Uluwatu sunset Bali itinerary"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="font-heading text-2xl font-bold mb-4 text-black">Uluwatu – Clifftop Views & Sunset Experiences</h3>
                  <p className="text-gray-600 mb-4">
                    Uluwatu is known for clifftop ocean views, luxury resorts, and iconic temples. The Uluwatu Temple Kecak Fire Dance is one of Bali's most unique cultural shows, offering dramatic sunset views.
                  </p>
                  <p className="text-gray-600">
                    Visitors also enjoy premium beach clubs, surfing spots, and dramatic cliffside dining experiences. Uluwatu is ideal for travelers who want a luxury coastal experience in their Bali travel itinerary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bali Itinerary Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-black">Bali Itinerary</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A well-designed itinerary plans the perfect Bali trip. For short vacations, a 5-day Bali itinerary covering Ubud, Seminyak, and Nusa Penida is ideal. For longer and more relaxed travel, a 7-day Bali itinerary includes Ubud's nature, Seminyak's beaches, Uluwatu's cliffs, and Nusa Penida's island tour.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-heading text-xl font-bold mb-3 text-black">5 to 7 Days</h3>
                <p className="text-gray-600">
                  All itineraries can be customised depending on whether you prefer adventure, relaxation, shopping, nightlife, or luxury experiences.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-heading text-xl font-bold mb-3 text-black">Best Time to Visit Bali</h3>
                <p className="text-gray-600">
                  The best time to visit Bali is during the dry season from April to October, when the weather is sunny and perfect for sightseeing, beaches, and photography. The months of June to September are the most popular for honeymoons and outdoor activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Antravi Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-black">Why choose Antravi for a Bali vacation?</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 text-center mb-8">
                Antravi offers a luxury-focused and personalised approach to Bali vacation planning. Our curated packages include handpicked resorts, private transfers, guided tours, professional support, and smooth travel coordination. We focus on quality, comfort, and detail, ensuring your Bali vacation is exactly the way you dream it.
              </p>
              <p className="text-lg text-gray-600 text-center">
                Whether it's a honeymoon, family vacation, or group travel, we provide seamless service and expert recommendations.
              </p>
            </div>
            <div className="text-center mt-12">
              <img 
                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=60" 
                alt="Bali private pool villa honeymoon"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Enquire Now CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-black">
                Ready to Explore Bali?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Let us create your perfect Bali vacation with customised itineraries, luxury stays, and unforgettable experiences.
              </p>
              <Button
                onClick={handlePlanClick}
                size="lg"
                className="bg-[#162660] text-white hover:bg-[#162660e6] text-lg px-8 py-3"
                style={{ borderRadius: "5px" }}
              >
                Enquire Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <FAQ faqsData={faqsData} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
