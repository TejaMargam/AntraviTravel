import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Link } from "wouter";

const resorts = [
  {
    rank: 2,
    name: "Baros Maldives",
    score: "99.73",
    tagline: "Best for honeymoon couples, exceptional house reef and timeless luxury.",
    bestFor: "Couples seeking privacy and world-class snorkelling.",
    image: "/blog-images/tl2026-baros.png",
    alt: "Baros Maldives resort",
  },
  {
    rank: 3,
    name: "JOALI Maldives",
    score: "99.73",
    tagline: "An art-inspired island offering immersive dining, wellness and ultra-luxury.",
    bestFor: "Luxury travellers celebrating milestones.",
    image: "/blog-images/tl2026-joali.png",
    alt: "JOALI Maldives resort",
  },
  {
    rank: 8,
    name: "Waldorf Astoria Maldives Ithaafushi",
    score: "99.58",
    tagline: "One of the Maldives' flagship ultra-luxury resorts with expansive villas and multiple dining venues.",
    bestFor: "Families and travellers wanting extensive facilities.",
    image: "/blog-images/tl2026-waldorf.png",
    alt: "Waldorf Astoria Maldives Ithaafushi resort",
  },
  {
    rank: 17,
    name: "Vakkaru Maldives",
    score: "99.30",
    tagline: "Elegant tropical island with spacious villas and a relaxed luxury atmosphere.",
    bestFor: "Couples and families wanting refined luxury.",
    image: "/blog-images/tl2026-vakkaru.png",
    alt: "Vakkaru Maldives resort",
  },
];

const faqs = [
  {
    q: "Are these the best resorts in the Maldives?",
    a: "They are among the highest-ranked globally, but the best choice depends on your travel goals.",
  },
  {
    q: "Which is best for honeymooners?",
    a: "Baros Maldives is a strong choice for privacy and romance.",
  },
  {
    q: "Which is best for families?",
    a: "Waldorf Astoria Maldives Ithaafushi offers extensive facilities for families.",
  },
  {
    q: "Do rankings guarantee the best experience?",
    a: "No. Your ideal resort depends on budget, travel style and preferences.",
  },
  {
    q: "Should I book directly?",
    a: "Compare packages, inclusions and transfers before deciding.",
  },
];

const comparisonData = [
  { style: "Honeymoon", baros: 5, joali: 4, waldorf: 4, vakkaru: 4 },
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

        {/* ── Simple Hero – plain background, text only ── */}
        <section style={{ backgroundColor: "#f8f9fc", borderBottom: "1px solid #e5e7eb" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
            {/* Category pill */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#fff",
                  backgroundColor: "#162660",
                  padding: "0.3rem 0.9rem",
                  borderRadius: "2px",
                  fontWeight: 600,
                }}
              >
                Maldives
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
                5 Min Read
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
              Travel + Leisure World's Best Awards 2026: Four Maldives Resorts Ranked Among the World's Top 100 Hotels
            </h1>

            {/* Divider */}
            <div style={{ width: "2.5rem", height: "1px", backgroundColor: "var(--luxury-gold)", margin: "0 auto 1.25rem" }} />

            {/* Author & date */}
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
            <Link href="/blogs/maldives" style={{ color: "#9ca3af", textDecoration: "none" }}>Maldives</Link>
            <span>›</span>
            <span style={{ color: "#162660" }}>World's Best Awards 2026</span>
          </div>
        </div>

        {/* ── Rankings Hero Image (from doc) ── */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
          <img
            src="/blog-images/tl2026-hero.png"
            alt="Travel + Leisure World's Best Awards 2026 Maldives Rankings"
            className="w-full rounded-sm"
            style={{ border: "1px solid #e5e7eb" }}
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
            Reference: Travel + Leisure World's Best Awards 2026 Rankings
          </p>
        </div>

        {/* ── Article Body ── */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

          {/* Why This Matters */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-4" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Why This Matters to Luxury Travellers
            </h2>
            <p className="text-gray-600 mb-4" style={{ lineHeight: 1.85, fontSize: "1rem" }}>
              Planning a Maldives holiday can be overwhelming, with more than a hundred luxury resorts spread across different atolls. The Travel + Leisure World's Best Awards are valuable because they highlight resorts consistently recognized by travelers for outstanding hospitality, design, dining and overall guest experience.
            </p>
            <p className="text-gray-600" style={{ lineHeight: 1.85, fontSize: "1rem" }}>
              If you're investing in a once-in-a-lifetime honeymoon, anniversary or family escape, this shortlist helps you start with some of the world's most respected properties.
            </p>
          </section>

          {/* What Are the Awards */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-4" style={{ fontSize: "1.5rem", color: "#162660" }}>
              What Is the Travel + Leisure World's Best Awards?
            </h2>
            <p className="text-gray-600" style={{ lineHeight: 1.85, fontSize: "1rem" }}>
              The World's Best Awards are among the most recognized travel awards globally. Readers evaluate hotels based on factors such as rooms, service, location, food, facilities and value. While awards should not be the only factor in choosing a resort, they provide an excellent benchmark when comparing luxury destinations.
            </p>
          </section>

          {/* Rankings Table */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-6" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Maldives Resorts in the World's Top 100 (2026)
            </h2>
            <div className="overflow-x-auto" style={{ borderRadius: "2px", border: "1px solid #e5e7eb" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#162660", color: "#fff" }}>
                    {["World Rank", "Resort", "Score"].map(h => (
                      <th key={h} className="py-3 px-5 text-left" style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {resorts.map((r, i) => (
                    <tr key={r.rank} style={{ backgroundColor: i % 2 === 0 ? "#f9fafb" : "#fff", borderBottom: "1px solid #f3f4f6" }}>
                      <td className="py-4 px-5 font-bold" style={{ color: "#162660", fontSize: "1rem" }}>#{r.rank}</td>
                      <td className="py-4 px-5 font-medium" style={{ color: "#1f2937" }}>{r.name}</td>
                      <td className="py-4 px-5 font-bold" style={{ color: "#b8860b" }}>{r.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Individual Resort Sections */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-8" style={{ fontSize: "1.5rem", color: "#162660" }}>
              A Closer Look at Each Resort
            </h2>
            <div className="space-y-16">
              {resorts.map((resort) => (
                <div key={resort.rank}>
                  {/* Resort image from doc */}
                  <div className="overflow-hidden mb-6" style={{ borderRadius: "2px" }}>
                    <img
                      src={resort.image}
                      alt={resort.alt}
                      className="w-full object-cover"
                      style={{ maxHeight: "420px", objectPosition: "center" }}
                    />
                  </div>

                  {/* Rank badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", background: "#162660", padding: "0.25rem 0.75rem", borderRadius: "2px", fontWeight: 600 }}>
                      #{resort.rank} Globally
                    </span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.12em", color: "#b8860b", fontWeight: 700 }}>
                      Score: {resort.score}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold mb-3" style={{ fontSize: "1.3rem", color: "#162660" }}>
                    {resort.name}
                  </h3>
                  <p className="text-gray-600 mb-4" style={{ lineHeight: 1.8 }}>{resort.tagline}</p>

                  <div className="p-4 mb-4" style={{ borderLeft: "3px solid var(--luxury-gold)", backgroundColor: "#fffdf5" }}>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#b8860b", marginBottom: "0.3rem", fontWeight: 700 }}>Best For</p>
                    <p className="text-gray-700" style={{ fontSize: "0.95rem" }}>{resort.bestFor}</p>
                  </div>

                  <div className="p-4 bg-gray-50" style={{ borderRadius: "2px" }}>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.3rem", fontWeight: 600 }}>Things to Know</p>
                    <p className="text-gray-600" style={{ fontSize: "0.9rem", lineHeight: 1.75 }}>
                      Consider transfer options, villa category, meal plans and travel season before booking. These factors often have a greater impact on your experience than rankings alone.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-6" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Which Resort Is Right for You?
            </h2>
            <div className="overflow-x-auto" style={{ borderRadius: "2px", border: "1px solid #e5e7eb" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#f9fafb", borderBottom: "2px solid #e5e7eb" }}>
                    <th className="py-3 px-4 text-left" style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280" }}>Travel Style</th>
                    {["Baros", "JOALI", "Waldorf", "Vakkaru"].map(r => (
                      <th key={r} className="py-3 px-4 text-center" style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#162660", fontWeight: 700 }}>{r}</th>
                    ))}
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
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Common Mistakes Luxury Travellers Make
            </h2>
            <ul className="space-y-4">
              {[
                "Choosing a resort based only on social media photos.",
                "Ignoring transfer costs and timings.",
                "Booking the wrong meal plan.",
                "Selecting a villa category without understanding location and privacy.",
                "Travelling in the wrong season for their expectations.",
              ].map((mistake, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: "var(--luxury-gold)", fontSize: "1rem", marginTop: "0.1rem", flexShrink: 0 }}>→</span>
                  <p className="text-gray-600" style={{ lineHeight: 1.75 }}>{mistake}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Founder's Perspective */}
          <section className="mb-12">
            <div className="p-8" style={{ background: "linear-gradient(135deg, #162660 0%, #1e3580 100%)", borderRadius: "2px" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--luxury-gold)", marginBottom: "1rem" }}>
                Founder's Perspective
              </p>
              <blockquote className="font-heading" style={{ fontSize: "1.15rem", color: "#fff", lineHeight: 1.7, fontStyle: "italic", marginBottom: "1.25rem" }}>
                "As someone with a background in hospitality, I've learned that the best resort isn't always the most expensive one. The ideal choice depends on your travel style, budget, expectations and the experiences you value most. Awards are an excellent starting point, but expert guidance helps match the right resort to the right traveller."
              </blockquote>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
                — Yashodar Reddy, Founder, Antravi
              </p>
            </div>
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

          {/* Internal link */}
          <div className="p-5 bg-gray-50 flex items-center gap-3 mb-12" style={{ borderRadius: "2px" }}>
            <span style={{ color: "var(--luxury-gold)" }}>→</span>
            <Link href="/blogs/maldives" style={{ color: "#162660", fontFamily: "var(--font-sans)", fontSize: "0.78rem", letterSpacing: "0.1em", textDecoration: "none", fontWeight: 600 }}>
              Read more: Best Time to Visit the Maldives
            </Link>
          </div>
        </article>

        {/* CTA */}
        <section className="py-20" style={{ backgroundColor: "#162660" }}>
          <div className="max-w-2xl mx-auto px-4 text-center text-white">
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--luxury-gold)", marginBottom: "1rem" }}>
              Planning a Maldives Vacation?
            </p>
            <h2 className="font-heading font-bold mb-4" style={{ fontSize: "2rem" }}>
              Let Antravi Find Your Perfect Resort
            </h2>
            <p className="mb-8" style={{ lineHeight: 1.75, fontSize: "1rem", opacity: 0.85 }}>
              At Antravi, we help you compare islands, villa categories, transfers, meal plans and experiences before you book. Share your preferred travel dates, budget and travel style, and let us create a personalised Maldives itinerary featuring the world's leading resorts.
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
