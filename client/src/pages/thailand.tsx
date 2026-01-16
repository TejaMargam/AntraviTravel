import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import ScrollManager from "@/hooks/ScrollManager";
import FAQ from "@/components/faq";
import faqsData from "@/data/thailand/faqs.json";

export default function Thailand() {
  const FRESHWORKS_FORM_URL =
    "https://antraviprivatelimited.myfreshworks.com/crm/sales/web_forms/1b242fefa94aa8cd060f4b81be4befd03bc011fc84f8a1490fa433e1abcc364b/form.html";

  const handlePlanClick = () => {
    window.location.href = FRESHWORKS_FORM_URL;
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollManager />
      <title>
        Thailand Tour Packages 2026 – Bangkok, Pattaya, Phuket &amp; Krabi |
        Thailand vacation
      </title>
      <meta
        name="description"
        content="Explore Thailand tour packages with Bangkok, Pattaya, Phuket & Krabi. Luxury resorts, island tours & personalised itineraries. Book your Thailand vacation with Antravi."
      />

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
                src="https://videos.pexels.com/video-files/4351257/4351257-hd_1920_1080_17fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-blue-900/30"></div>
          </div>

          <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Thailand Tour Packages – Bangkok, Pattaya, Phuket &amp; Krabi
            </h1>
            <p className="text-lg md:text-xl font-light mb-8 tracking-wide">
              Thailand vacation Packages - By Antravi
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

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">
                Thailand vacation Packages - By Antravi
              </h2>
              <p className="text-lg text-gray-700 max-w-5xl mx-auto">
                Thailand is one of Asia’s most loved destinations a perfect mix of
                luxury brands, nightlife, food, islands, temples, culture, and
                world-class hospitality. Whether you want beach relaxation, city
                shopping, nightlife, adventure, or a romantic honeymoon, Thailand
                delivers it all effortlessly.
              </p>
              <p className="text-lg text-gray-700 max-w-5xl mx-auto mt-4">
                At Antravi, your Thailand vacation isn’t just a package — It’s a
                curated experience designed exactly around your preferences.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12">
              <h3 className="font-heading text-2xl font-bold text-black mb-4">
                Why Visit Thailand :
              </h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>World-class beaches (Phuket, Krabi, Phi Phi Island)</li>
                <li>Vibrant nightlife & shopping (Bangkok, Pattaya)</li>
                <li>beachfront resorts (Phuket, Krabi)</li>
                <li>Incredible food experiences</li>
                <li>Budget-friendly yet premium hospitality</li>
                <li>Easy visa process for Indians</li>
                <li>Short flight duration from India</li>
              </ol>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=60"
                    alt="Bangkok city at night Thailand tour package"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-black mb-2">
                    Bangkok — The Heart of Thailand :
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bangkok is the most popular starting point for a Thailand
                    holiday. The city is known for its modern skyline, luxurious
                    shopping malls, ancient temples, night markets, and delicious
                    street food. With attractions like the Grand Palace, Wat Arun,
                    and Chao Phraya River cruise, Bangkok blends tradition with
                    modern lifestyle.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    Travellers looking for shopping can explore Siam Paragon, MBK
                    Mall, IconSiam, and Chatuchak Weekend Market. Bangkok is also
                    famous for its nightlife, rooftop bars, floating markets, and
                    temple tours. Including Bangkok in your Thailand tour package
                    ensures a perfect balance of culture, entertainment, and city
                    experiences.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1596879857570-7b6b9018bcb6?auto=format&fit=crop&w=1600&q=60"
                    alt="Pattaya coral island water sports tour Thailand"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-black mb-2">
                    Pattaya — Beaches, Nightlife &amp; Water Sports
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Just two hours from Bangkok, Pattaya is a vibrant beach city
                    renowned for its water sports, shows, nightlife, and adventure
                    activities. One of the most popular experiences is the Coral
                    Island tour, which offers parasailing and jet skiing.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    Pattaya is also home to attractions like the Sanctuary of
                    Truth, Nong Nooch Garden, and the Alcazar &amp; Tiffany Shows.
                    Families, couples, and groups love Pattaya because it provides
                    a mix of beach relaxation and entertainment. Including Pattaya
                    in your Bangkok Pattaya tour package gives you the perfect
                    combination of thrill and relaxation.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1676220022985-f8de09546464?auto=format&fit=crop&w=1600&q=60"
                    alt="Phuket Phi Phi Island tour package Antravi"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-black mb-2">
                    Phuket – Luxury Resorts &amp; Island Experiences
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Phuket is Thailand’s most luxurious island destination, ideal
                    for honeymoons and upscale vacations. Known for Patong Beach,
                    Kata Beach, and Karon Beach, Phuket offers premium shopping,
                    nightlife, beach clubs, and gourmet dining.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    The most iconic experiences in Phuket include the Phi Phi
                    Island tour, the James Bond Island canoeing trip, Big Buddha
                    temple, and exciting adventure activities. With its beautiful
                    beaches, nightlife, and island tours, Phuket is a must-visit
                    in any Thailand honeymoon package.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?auto=format&fit=crop&w=1600&q=60"
                    alt="Krabi 4 Island tour Thailand holiday"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-black mb-2">
                    Krabi – Peaceful, Scenic &amp; Relaxing
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Krabi is the perfect destination for travelers who want a calm
                    and scenic island escape. With stunning limestone cliffs,
                    crystal-clear waters, and soft sandy beaches, Krabi is ideal
                    for honeymooners and nature lovers.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    The most famous attractions include the 4-Island Tour, Railay
                    Beach, Emerald Pool, Hot Springs, and the Tiger Cave Temple
                    viewpoint. Krabi offers a slower pace compared to Phuket,
                    making it perfect for relaxation and long-tail boat trips.
                    When combined with Phuket, Krabi creates a balanced and
                    memorable Phuket Krabi vacation package with a mix of
                    adventure and serenity.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="font-heading text-2xl font-bold text-black mb-4">
                Thailand Itinerary – 5 to 7 Days Travel Plan
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A well-planned itinerary helps make the most of your Thailand
                holiday. For a short trip, the recommended plan is 5 Days Bangkok
                Pattaya, covering city tours, shopping, shows, and water sports.
                For a longer trip, the ideal itinerary is 7 Days Bangkok Phuket
                Krabi, which includes temple visits, island tours, nightlife, and
                premium resort stays.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Travelers looking for a romantic experience can also choose a
                5-day Phuket honeymoon itinerary, which includes Phi Phi Island,
                James Bond Island, romantic dinners, and sightseeing. Each
                itinerary can be fully customized based on your travel style,
                budget, and preferred pace.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Bangkok Pattaya Phuket Krabi itinerary
              </p>
            </div>

            <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="font-heading text-2xl font-bold text-black mb-4">
                Why Choose Antravi for Thailand?
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Luxury hand-picked resorts</li>
                <li>Personalized itineraries based on your travel style</li>
                <li>Private transfers</li>
                <li>Transparent pricing</li>
                <li>Dedicated travel consultant</li>
                <li>24×7 assistance before &amp; during vacation</li>
              </ul>
            </div>

            {/* <div className="text-center mt-14">
              <Button
                onClick={handlePlanClick}
                size="lg"
                className="bg-[#162660] text-white hover:bg-[#162660e6] text-lg px-8 py-3"
                style={{ borderRadius: "5px" }}
              >
                Enquire Now
              </Button>
            </div> */}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 text-center">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4">
                Plan your Thailand vacation with Antravi
              </h3>
              <p className="text-gray-700 text-lg mb-8">
                Tell us your travel dates &amp; preferences — we’ll create a
                personalized itinerary just for you.
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
