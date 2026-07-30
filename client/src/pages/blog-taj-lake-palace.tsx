import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Link } from "wouter";

const faqs = [
  {
    q: "What is the MICHELIN Guide Three Keys?",
    a: "The Three Keys are the highest hotel recognition awarded by the MICHELIN Guide, celebrating properties that provide an exceptional and unforgettable experience.",
  },
  {
    q: "Is Taj Lake Palace a heritage hotel?",
    a: "Yes. Originally built in 1746 as the royal summer palace of the Mewar dynasty, it has been carefully restored and now operates as a luxury hotel managed by Taj Hotels.",
  },
  {
    q: "How do guests reach the hotel?",
    a: "Guests arrive by a private boat from the Taj Lake Palace jetty on the shores of Lake Pichola.",
  },
  {
    q: "Is Taj Lake Palace suitable for honeymooners?",
    a: "Absolutely. Its romantic setting, private experiences and personalised service make it one of India's most sought-after honeymoon destinations.",
  },
  {
    q: "How many MICHELIN Keys has Taj Lake Palace received?",
    a: "Taj Lake Palace has been recognised with the prestigious Three MICHELIN Keys, the highest distinction awarded by the MICHELIN Guide for hotels.",
  },
];

const keyHighlights = [
  "A unique location in the middle of Lake Pichola",
  "Nearly 300 years of royal history",
  "Beautiful marble architecture",
  "Personalised Taj hospitality",
  "Fine dining with spectacular views",
  "An experience that cannot be replicated anywhere else",
];

const idealFor = [
  "Honeymoon couples",
  "Anniversary celebrations",
  "Destination weddings",
  "Luxury leisure travellers",
  "Families celebrating special occasions",
  "International visitors exploring Rajasthan",
  "Photography and heritage enthusiasts",
];

export default function BlogTajLakePalace() {
  return (
    <div className="min-h-screen bg-white">
      <title>Taj Lake Palace: Why India's Iconic Palace Hotel Earned the MICHELIN Guide Three Keys Distinction | Antravi</title>
      <meta
        name="description"
        content="Discover why Taj Lake Palace in Udaipur has been awarded the prestigious MICHELIN Guide Three Keys distinction. Explore its royal heritage, luxury experiences, architecture, and why it remains one of the world's most extraordinary hotels."
      />

      <Navbar />

      <main className="pt-20">

        {/* ── Hero ── */}
        <section style={{ backgroundColor: "#f8f9fc", borderBottom: "1px solid #e5e7eb" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
            {/* Category + read time */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#fff",
                  backgroundColor: "#6b4f9e",
                  padding: "0.3rem 0.9rem",
                  borderRadius: "2px",
                  fontWeight: 600,
                }}
              >
                General
              </span>
              <span style={{ color: "#d1d5db", fontSize: "0.65rem" }}>•</span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#9ca3af",
                }}
              >
                5–7 Min Read
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.6rem)",
                color: "#162660",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              Taj Lake Palace: India's Floating Palace Honored with the MICHELIN Guide Three Keys Distinction
            </h1>

            {/* Divider */}
            <div style={{ width: "2.5rem", height: "1px", backgroundColor: "var(--luxury-gold)", margin: "0 auto 1.25rem" }} />

            {/* Author */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6b7280",
              }}
            >
              By Founder Yashodar Reddy
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="border-b border-gray-100">
          <div
            className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.62rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#9ca3af",
            }}
          >
            <Link href="/blogs" style={{ color: "#9ca3af", textDecoration: "none" }}>Blog</Link>
            <span>›</span>
            <Link href="/blogs/general" style={{ color: "#9ca3af", textDecoration: "none" }}>General</Link>
            <span>›</span>
            <span style={{ color: "#162660" }}>Taj Lake Palace — MICHELIN Three Keys</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
          <img
            src="/blog-images/taj-lake-palace-michelin.png"
            alt="Taj Lake Palace — MICHELIN Guide Three Keys, Udaipur India"
            className="w-full rounded-sm"
            style={{ border: "1px solid #e5e7eb", objectFit: "cover", maxHeight: "460px" }}
          />
          <p
            className="text-center mt-3"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.62rem",
              letterSpacing: "0.1em",
              color: "#9ca3af",
              fontStyle: "italic",
            }}
          >
            Taj Lake Palace, Lake Pichola, Udaipur — MICHELIN Guide Three Keys
          </p>
        </div>

        {/* ── Article Body ── */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

          {/* Intro */}
          <section className="mb-12">
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Some hotels offer a luxurious stay. A rare few become the destination itself.
            </p>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Rising gracefully from the calm waters of Lake Pichola in Udaipur, Taj Lake Palace is one of those extraordinary places. Surrounded entirely by water and framed by the Aravalli Hills, the white marble palace appears to float effortlessly, creating a view that has captivated royalty, world leaders, celebrities and travellers for generations.
            </p>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Its timeless elegance has now received one of the highest honours in luxury hospitality — the MICHELIN Guide Three Keys distinction.
            </p>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Unlike restaurant stars, which celebrate culinary excellence, the MICHELIN Keys recognise hotels that deliver truly exceptional stays. Receiving Three Keys places a hotel among the world's finest, acknowledging not only its luxury but also its ability to create unforgettable memories through exceptional design, service, atmosphere and guest experience. For travellers seeking more than just premium accommodation, this distinction confirms that Taj Lake Palace is not simply a place to spend the night — it is a destination where history, culture and world-class hospitality come together in perfect harmony.
            </p>
          </section>

          {/* A Palace Built for Royalty */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              A Palace Built for Royalty
            </h2>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Long before it welcomed international travellers, Taj Lake Palace was the pleasure palace of the royal family of Mewar. Constructed in 1746 by Maharana Jagat Singh II, the palace was originally known as Jag Niwas. Built entirely from white marble on the tranquil waters of Lake Pichola, it served as a secluded summer retreat where the royal family could escape the intense Rajasthan heat while enjoying spectacular views of the surrounding hills and the City Palace.
            </p>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Its architecture reflects the artistic brilliance of the Mewar kingdom. Delicately carved marble facades, graceful courtyards, ornate fountains, intricate stonework and elegant arches showcase centuries of craftsmanship that continue to define the palace today.
            </p>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Following extensive restoration, the property was transformed into one of India's most celebrated luxury hotels under the Taj Hotels portfolio. Today, arriving at Taj Lake Palace is an experience unlike any other. Since the hotel is situated on an island in the middle of Lake Pichola, guests are welcomed at a private jetty before boarding an exclusive boat that transports them across the shimmering lake to the palace entrance. The journey itself creates a sense of anticipation, making every arrival feel ceremonial and unforgettable.
            </p>
          </section>

          {/* Palace photo */}
          <div className="mb-12">
            <img
              src="/blog-images/taj-lake-palace-pool.png"
              alt="Taj Lake Palace marble pool and courtyard, Udaipur"
              className="w-full rounded-sm"
              style={{ border: "1px solid #e5e7eb", objectFit: "cover", maxHeight: "480px" }}
            />
            <p
              className="text-center mt-3"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.62rem",
                letterSpacing: "0.1em",
                color: "#9ca3af",
                fontStyle: "italic",
              }}
            >
              The iconic marble pool and courtyard at Taj Lake Palace, Udaipur
            </p>
          </div>

          {/* Why This Recognition Matters */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Why This Recognition Matters to Travellers
            </h2>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Luxury travellers today are no longer searching only for larger suites or lavish amenities. They increasingly value authenticity, meaningful experiences and destinations that offer a genuine sense of place.
            </p>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              The MICHELIN Guide Three Keys distinction serves as an independent endorsement that helps travellers make informed decisions with confidence. For guests considering Taj Lake Palace, the recognition reinforces that they are choosing a hotel celebrated not only for its beauty but also for its exceptional hospitality and enduring legacy.
            </p>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Whether you're planning a once-in-a-lifetime honeymoon, celebrating a milestone anniversary, organising a destination wedding or simply fulfilling a dream of staying in a royal palace, the Three Keys distinction provides reassurance that the experience has been recognised among the world's finest.
            </p>
          </section>

          {/* Living Like Royalty */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Living Like Royalty: The Taj Lake Palace Experience
            </h2>
            <p className="text-gray-600 mb-8" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Stepping into Taj Lake Palace is unlike checking into a conventional luxury hotel. From the moment guests board the private boat across Lake Pichola, the outside world begins to fade away. The sounds of city traffic are replaced by gentle waves, palace courtyards echo with birdsong, and every detail reflects centuries of royal heritage.
            </p>

            {/* Sub-sections */}
            {[
              {
                heading: "A Stay Surrounded by Water",
                body: "Very few hotels in the world can claim to occupy an entire island, and even fewer are former royal palaces. Every room, terrace and courtyard enjoys changing views throughout the day. Sunrise casts a golden glow across the white marble walls, while evenings transform the palace into a shimmering landmark reflected on Lake Pichola. Unlike modern high-rise luxury hotels, the palace has an intimate atmosphere that feels deeply personal rather than commercial.",
              },
              {
                heading: "Elegant Rooms and Suites Inspired by Royal Heritage",
                body: "No two rooms at Taj Lake Palace are exactly alike. Each accommodation has been thoughtfully designed to preserve the palace's original character while providing the comfort expected by today's luxury traveller. Intricately carved marble, traditional Rajasthani artwork, handcrafted furniture and elegant fabrics create interiors that feel authentic rather than recreated. For guests seeking the highest level of exclusivity, the palace suites provide expansive living areas, refined décor and personalised hospitality that reflects the traditions of Indian royal families.",
              },
              {
                heading: "Dining That Celebrates Rajasthan",
                body: "Dining at Taj Lake Palace extends beyond exceptional cuisine. Every meal is enhanced by the palace's remarkable setting. Restaurants overlook the lake, candlelit courtyards create romantic evenings, and every table enjoys an atmosphere shaped by history and architecture. Traditional recipes passed down through generations sit comfortably alongside contemporary presentations, offering both familiarity and innovation.",
              },
              {
                heading: "Wellness in a Palace Setting",
                body: "Guests can enjoy signature spa therapies inspired by traditional Indian wellness practices, complemented by personalised treatments delivered in serene surroundings. The peaceful atmosphere created by the lake naturally encourages relaxation. Morning walks through quiet courtyards, yoga overlooking the water and tranquil seating areas throughout the palace allow guests to disconnect from busy schedules and reconnect with themselves.",
              },
              {
                heading: "Service That Reflects Indian Hospitality",
                body: "Beautiful architecture may attract visitors, but exceptional service is what inspires them to return. From remembering guest preferences to arranging customised celebrations and private experiences, the staff consistently deliver service that feels genuine rather than scripted. At Taj Lake Palace, hospitality is not treated as a service — it is treated as an art.",
              },
              {
                heading: "More Than a Hotel — A Stage for Life's Greatest Celebrations",
                body: "Few destinations evoke romance quite like Taj Lake Palace. Ceremonies overlooking Lake Pichola, intimate proposals beneath historic arches and private dinners illuminated by candlelight create memories that extend far beyond the stay itself. For many travellers, Taj Lake Palace is not simply where they celebrate life's important moments — it becomes part of those memories forever.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="mb-8">
                <h3 className="font-heading font-bold mb-3" style={{ fontSize: "1.15rem", color: "#162660" }}>
                  {heading}
                </h3>
                <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
                  {body}
                </p>
              </div>
            ))}
          </section>

          {/* Why the Experience Feels Different */}
          <section className="mb-12">
            <div className="p-8" style={{ background: "linear-gradient(135deg, #162660 0%, #1e3580 100%)", borderRadius: "2px" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--luxury-gold)", marginBottom: "1rem" }}>
                Why the Experience Feels Different
              </p>
              <blockquote className="font-heading" style={{ fontSize: "1.15rem", color: "#fff", lineHeight: 1.7, fontStyle: "italic", marginBottom: "1.25rem" }}>
                "It is not a palace inspired by history — it is history. Every corridor, balcony and courtyard tells a story that cannot be replicated through modern design."
              </blockquote>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
                — Yashodar Reddy, Founder, Antravi
              </p>
            </div>

            {/* Room interior photo */}
            <div className="mt-6">
              <img
                src="/blog-images/taj-lake-palace-room.png"
                alt="Royal suite interior at Taj Lake Palace — four-poster bed and Rajasthani arched windows"
                className="w-full rounded-sm"
                style={{ border: "1px solid #e5e7eb", objectFit: "cover", maxHeight: "480px" }}
              />
              <p
                className="text-center mt-3"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.1em",
                  color: "#9ca3af",
                  fontStyle: "italic",
                }}
              >
                A royal suite at Taj Lake Palace — handcrafted four-poster bed, intricate arches and authentic Rajasthani décor
              </p>
            </div>
          </section>

          {/* MICHELIN Three Keys */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Why Taj Lake Palace Deserves the MICHELIN Guide Three Keys
            </h2>
            <p className="text-gray-600 mb-6" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              The MICHELIN Guide's Three Keys distinction is awarded to hotels that offer an extraordinary experience — not just through luxury, but through a complete guest experience. Taj Lake Palace stands out because it brings together everything that defines a world-class hotel:
            </p>
            <ul className="space-y-3 mb-6">
              {keyHighlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: "var(--luxury-gold)", fontSize: "1rem", marginTop: "0.1rem", flexShrink: 0 }}>→</span>
                  <p className="text-gray-600" style={{ lineHeight: 1.75 }}>{item}</p>
                </li>
              ))}
            </ul>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Rather than simply offering luxury, the palace tells a story that every guest becomes part of.
            </p>
          </section>

          {/* Who Should Stay Here */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Who Should Stay Here?
            </h2>
            <p className="text-gray-600 mb-6" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Taj Lake Palace is ideal for travellers looking for memorable experiences rather than just premium accommodation. It is particularly suited for:
            </p>
            <ul className="space-y-3 mb-6">
              {idealFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: "var(--luxury-gold)", fontSize: "1rem", marginTop: "0.1rem", flexShrink: 0 }}>→</span>
                  <p className="text-gray-600" style={{ lineHeight: 1.75 }}>{item}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Best Time to Visit */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Best Time to Visit
            </h2>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              The most pleasant time to visit Udaipur is October to March, when temperatures are comfortable for sightseeing, boat rides and outdoor dining. Travellers visiting during festivals such as Diwali or local cultural celebrations can enjoy an even more vibrant atmosphere, though booking well in advance is recommended.
            </p>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-7" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: "1px solid #f3f4f6", paddingBottom: "1.5rem" }}>
                  <h3 className="font-heading font-bold mb-2" style={{ fontSize: "1rem", color: "#162660" }}>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600" style={{ lineHeight: 1.75, fontSize: "0.95rem" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final Thoughts */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Final Thoughts
            </h2>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Some hotels impress you while you're there. A select few stay with you long after you've returned home.
            </p>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Taj Lake Palace belongs in that rare category. Its remarkable history, stunning lakeside setting, timeless architecture and warm hospitality create an experience that goes beyond luxury. The MICHELIN Guide Three Keys distinction simply reinforces what travellers have known for years — it is one of India's most extraordinary places to stay.
            </p>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Whether you're planning a romantic escape, celebrating a milestone or fulfilling a lifelong dream of living in a royal palace, Taj Lake Palace promises an experience that is both timeless and unforgettable.
            </p>
          </section>

          {/* Internal link */}
          <div className="p-5 bg-gray-50 flex items-center gap-3 mb-12" style={{ borderRadius: "2px" }}>
            <span style={{ color: "var(--luxury-gold)" }}>→</span>
            <Link href="/blogs" style={{ color: "#162660", fontFamily: "var(--font-sans)", fontSize: "0.78rem", letterSpacing: "0.1em", textDecoration: "none", fontWeight: 600 }}>
              Explore more travel articles on the Antravi Blog
            </Link>
          </div>

        </article>

        {/* CTA */}
        <section className="py-20" style={{ backgroundColor: "#162660" }}>
          <div className="max-w-2xl mx-auto px-4 text-center text-white">
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--luxury-gold)", marginBottom: "1rem" }}>
              Reserve Your Stay with Antravi
            </p>
            <h2 className="font-heading font-bold mb-4" style={{ fontSize: "2rem" }}>
              Let Antravi Design Your Rajasthan Journey
            </h2>
            <p className="mb-8" style={{ lineHeight: 1.75, fontSize: "1rem", opacity: 0.85 }}>
              Whether you're planning a honeymoon, anniversary, destination wedding or a bespoke luxury holiday in Rajasthan, our travel specialists can curate every detail — from your stay at Taj Lake Palace to private experiences, luxury transfers and personalised itineraries.
            </p>
            <Link href="/contact" className="btn-editorial-white">
              Contact Antravi
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
