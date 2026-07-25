import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Link } from "wouter";

const resorts = [
  {
    rank: 2,
    name: "Baros Maldives",
    score: "99.73",
    tagline: "Timeless romance, world-class house reef and unmatched privacy.",
    bestFor: "Couples seeking seclusion and world-class snorkelling.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&q=80",
    alt: "Baros Maldives overwater villa with turquoise lagoon",
  },
  {
    rank: 3,
    name: "JOALI Maldives",
    score: "99.73",
    tagline: "An art-inspired island merging immersive dining, wellness and ultra-luxury.",
    bestFor: "Luxury travellers celebrating milestones.",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&q=80",
    alt: "JOALI Maldives luxury overwater bungalows",
  },
  {
    rank: 8,
    name: "Waldorf Astoria Maldives Ithaafushi",
    score: "99.58",
    tagline: "A flagship ultra-luxury resort with expansive villas and multiple dining venues.",
    bestFor: "Families and travellers wanting extensive facilities.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80",
    alt: "Waldorf Astoria Maldives Ithaafushi infinity pool overlooking ocean",
  },
  {
    rank: 17,
    name: "Vakkaru Maldives",
    score: "99.30",
    tagline: "Elegant tropical island with spacious villas and a relaxed luxury atmosphere.",
    bestFor: "Couples and families wanting refined luxury.",
    image: "https://images.unsplash.com/photo-1510525009512-ad7fc7d2f6a5?w=900&q=80",
    alt: "Vakkaru Maldives tropical island aerial view",
  },
];

const faqs = [
  {
    q: "Are these the best resorts in the Maldives?",
    a: "They are among the highest-ranked globally, but the best choice ultimately depends on your travel goals, budget and personal preferences.",
  },
  {
    q: "Which is best for honeymooners?",
    a: "Baros Maldives is a strong choice for privacy, romance and exceptional snorkelling directly from your villa.",
  },
  {
    q: "Which is best for families?",
    a: "Waldorf Astoria Maldives Ithaafushi offers the most extensive facilities and space for families.",
  },
  {
    q: "Do rankings guarantee the best experience?",
    a: "Not necessarily. Your ideal resort depends on your budget, travel style, villa preference and the season you travel in.",
  },
  {
    q: "Should I book directly?",
    a: "Compare packages, inclusions and transfer arrangements carefully before deciding. A specialist can often secure better value.",
  },
];

const comparisonData = [
  { style: "Honeymoon",  baros: 5, joali: 4, waldorf: 4, vakkaru: 4 },
  { style: "Families",  baros: 3, joali: 4, waldorf: 5, vakkaru: 4 },
  { style: "Dining",    baros: 4, joali: 5, waldorf: 5, vakkaru: 4 },
  { style: "Privacy",   baros: 5, joali: 5, waldorf: 4, vakkaru: 4 },
  { style: "Luxury",    baros: 5, joali: 5, waldorf: 5, vakkaru: 4 },
];

function Stars({ count }: { count: number }) {
  return (
    <span style={{ color: "#b8860b", fontSize: "0.85rem" }}>
      {"⭐".repeat(count)}
    </span>
  );
}

export default function BlogTravelLeisure2026() {
  return (
    <div className="min-h-screen bg-white">
      <title>Travel + Leisure World's Best Awards 2026: Top Maldives Resorts | Antravi</title>
      <meta
        name="description"
        content="Discover why Baros, JOALI, Waldorf Astoria Maldives Ithaafushi and Vakkaru were ranked among the world's best hotels in the Travel + Leisure World's Best Awards 2026."
      />

      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <div className="relative" style={{ height: "520px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1573843981267-be1480760ef8?w=1400&q=80"
            alt="Maldives overwater bungalows aerial view"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(22,38,96,0.72))" }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--luxury-gold)",
                marginBottom: "1rem",
              }}
            >
              Maldives · 5 Min Read
            </p>
            <h1
              className="font-heading font-bold"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", maxWidth: "820px", lineHeight: 1.2, marginBottom: "1.25rem" }}
            >
              Travel + Leisure World's Best Awards 2026: Four Maldives Resorts Ranked Among the World's Top 100 Hotels
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              By Founder Yashodar
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-2" style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af" }}>
            <Link href="/blogs" style={{ color: "#9ca3af", textDecoration: "none" }}>Blog</Link>
            <span>›</span>
            <Link href="/blogs/maldives" style={{ color: "#9ca3af", textDecoration: "none" }}>Maldives</Link>
            <span>›</span>
            <span style={{ color: "#162660" }}>World's Best Awards 2026</span>
          </div>
        </div>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

          {/* Intro */}
          <section className="mb-14">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Why This Matters to Luxury Travellers
            </h2>
            <p className="text-gray-600 mb-4" style={{ lineHeight: 1.8, fontSize: "1rem" }}>
              Planning a Maldives holiday can be overwhelming — more than a hundred luxury resorts spread across different atolls, each with its own character, pricing and experience. The Travel + Leisure World's Best Awards cut through the noise. They highlight resorts consistently recognised by real travellers for outstanding hospitality, design, dining and overall guest experience.
            </p>
            <p className="text-gray-600" style={{ lineHeight: 1.8, fontSize: "1rem" }}>
              If you're investing in a once-in-a-lifetime honeymoon, anniversary or family escape, this shortlist gives you a strong, credible starting point.
            </p>
          </section>

          {/* What are the awards */}
          <section className="mb-14">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              What Are the Travel + Leisure World's Best Awards?
            </h2>
            <p className="text-gray-600" style={{ lineHeight: 1.8, fontSize: "1rem" }}>
              The World's Best Awards are among the most recognised travel awards globally. Readers evaluate hotels based on rooms, service, location, food, facilities and value. While rankings shouldn't be your only deciding factor, they provide an excellent benchmark when comparing luxury destinations.
            </p>
          </section>

          {/* Rankings Table */}
          <section className="mb-14">
            <h2 className="font-heading font-bold mb-6" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Maldives Resorts in the World's Top 100 (2026)
            </h2>
            <div className="overflow-x-auto rounded-sm border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#162660", color: "#fff" }}>
                    <th className="py-3 px-5 text-left" style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>World Rank</th>
                    <th className="py-3 px-5 text-left" style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>Resort</th>
                    <th className="py-3 px-5 text-left" style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {resorts.map((r, i) => (
                    <tr key={r.rank} style={{ backgroundColor: i % 2 === 0 ? "#f9fafb" : "#fff" }}>
                      <td className="py-4 px-5 font-bold" style={{ color: "#162660", fontSize: "1rem" }}>#{r.rank}</td>
                      <td className="py-4 px-5 font-medium" style={{ color: "#1f2937" }}>{r.name}</td>
                      <td className="py-4 px-5" style={{ color: "#b8860b", fontWeight: 700 }}>{r.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Individual Resort Sections */}
          <section className="mb-14">
            <h2 className="font-heading font-bold mb-10" style={{ fontSize: "1.5rem", color: "#162660" }}>
              A Closer Look at Each Resort
            </h2>
            <div className="space-y-16">
              {resorts.map((resort) => (
                <div key={resort.rank}>
                  <div className="overflow-hidden mb-6" style={{ borderRadius: "2px", aspectRatio: "16/9" }}>
                    <img
                      src={resort.image}
                      alt={resort.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#fff",
                        background: "#162660",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "2px",
                        fontWeight: 600,
                      }}
                    >
                      #{resort.rank} Globally
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                        color: "#b8860b",
                        fontWeight: 600,
                      }}
                    >
                      Score: {resort.score}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold mb-3" style={{ fontSize: "1.3rem", color: "#162660" }}>
                    {resort.name}
                  </h3>
                  <p className="text-gray-600 mb-4" style={{ lineHeight: 1.8 }}>{resort.tagline}</p>
                  <div className="p-4 border-l-4 mb-4" style={{ borderColor: "var(--luxury-gold)", backgroundColor: "#fffdf5" }}>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#b8860b", marginBottom: "0.25rem", fontWeight: 600 }}>Best For</p>
                    <p className="text-gray-700" style={{ fontSize: "0.95rem" }}>{resort.bestFor}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-sm">
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.25rem", fontWeight: 600 }}>Things to Know</p>
                    <p className="text-gray-600" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                      Consider transfer options, villa category, meal plans and travel season before booking. These factors often have a greater impact on your experience than rankings alone.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-14">
            <h2 className="font-heading font-bold mb-6" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Which Resort Is Right for You?
            </h2>
            <div className="overflow-x-auto rounded-sm border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#f9fafb", borderBottom: "2px solid #e5e7eb" }}>
                    <th className="py-3 px-4 text-left" style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280" }}>Travel Style</th>
                    <th className="py-3 px-4 text-center" style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#162660", fontWeight: 700 }}>Baros</th>
                    <th className="py-3 px-4 text-center" style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#162660", fontWeight: 700 }}>JOALI</th>
                    <th className="py-3 px-4 text-center" style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#162660", fontWeight: 700 }}>Waldorf</th>
                    <th className="py-3 px-4 text-center" style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#162660", fontWeight: 700 }}>Vakkaru</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.style} style={{ borderBottom: "1px solid #f3f4f6", backgroundColor: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td className="py-3 px-4 font-medium" style={{ color: "#374151", fontFamily: "var(--font-sans)", fontSize: "0.8rem" }}>{row.style}</td>
                      <td className="py-3 px-4 text-center"><Stars count={row.baros} /></td>
                      <td className="py-3 px-4 text-center"><Stars count={row.joali} /></td>
                      <td className="py-3 px-4 text-center"><Stars count={row.waldorf} /></td>
                      <td className="py-3 px-4 text-center"><Stars count={row.vakkaru} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-14">
            <h2 className="font-heading font-bold mb-6" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Common Mistakes Luxury Travellers Make
            </h2>
            <ul className="space-y-3">
              {[
                "Choosing a resort based only on social media photos.",
                "Ignoring transfer costs and timings — seaplane vs speedboat can significantly change your trip.",
                "Booking the wrong meal plan for your dining style.",
                "Selecting a villa category without understanding location and privacy within the resort.",
                "Travelling in the wrong season for their expectations.",
              ].map((mistake, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: "var(--luxury-gold)", fontSize: "1rem", marginTop: "0.15rem", flexShrink: 0 }}>→</span>
                  <p className="text-gray-600" style={{ lineHeight: 1.7 }}>{mistake}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Founder's Perspective */}
          <section className="mb-14">
            <div
              className="p-8"
              style={{ background: "linear-gradient(135deg, #162660 0%, #1e3580 100%)", borderRadius: "2px" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--luxury-gold)",
                  marginBottom: "1rem",
                }}
              >
                Founder's Perspective
              </p>
              <blockquote
                className="font-heading"
                style={{ fontSize: "1.2rem", color: "#fff", lineHeight: 1.65, fontStyle: "italic", marginBottom: "1.25rem" }}
              >
                "The best resort isn't always the most expensive one. As someone with a background in hospitality, I've learned that the ideal choice depends on your travel style, budget, expectations and the experiences you value most. Awards are an excellent starting point — but expert guidance is what matches the right resort to the right traveller."
              </blockquote>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                — Yashodar, Founder, Antravi
              </p>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-14">
            <h2 className="font-heading font-bold mb-8" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-100 pb-6">
                  <h3 className="font-heading font-bold mb-2" style={{ fontSize: "1rem", color: "#162660" }}>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600" style={{ lineHeight: 1.75, fontSize: "0.95rem" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal link */}
          <div className="mb-14 p-5 bg-gray-50 rounded-sm flex items-center gap-3">
            <span style={{ color: "var(--luxury-gold)" }}>→</span>
            <Link href="/blogs/maldives" style={{ color: "#162660", fontFamily: "var(--font-sans)", fontSize: "0.78rem", letterSpacing: "0.1em", textDecoration: "none", fontWeight: 600 }}>
              Read more: Best Time to Visit the Maldives
            </Link>
          </div>
        </article>

        {/* CTA */}
        <section className="py-20 bg-[#162660]">
          <div className="max-w-2xl mx-auto px-4 text-center text-white">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--luxury-gold)",
                marginBottom: "1rem",
              }}
            >
              Planning a Luxury Maldives Vacation?
            </p>
            <h2 className="font-heading font-bold mb-4" style={{ fontSize: "2rem" }}>
              Let Antravi Find Your Perfect Resort
            </h2>
            <p className="mb-8 opacity-80" style={{ lineHeight: 1.7, fontSize: "1rem" }}>
              We compare islands, villa categories, transfers, meal plans and experiences so you don't have to. Share your travel dates, budget and style — we'll create a personalised Maldives itinerary featuring the world's leading luxury resorts.
            </p>
            <Link href="/contact" className="btn-editorial-white">
              Start Planning
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
