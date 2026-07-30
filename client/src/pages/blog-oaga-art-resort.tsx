import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Link } from "wouter";

const faqs = [
  {
    q: "When is Oaga Art Resort reopening?",
    a: "Oaga Art Resort begins unveiling its first phase of enhancements from 1 August 2026, with further additions including more overwater villas and a new overwater restaurant continuing through 2026 and into early 2027.",
  },
  {
    q: "How do guests get to Oaga Art Resort?",
    a: "Oaga Art Resort is located in North Malé Atoll, approximately 51 kilometres from Velana International Airport. Guests can reach the island in around 45 minutes by speedboat, with transfers arranged according to international flight schedules.",
  },
  {
    q: "What makes Oaga Art Resort different from other Maldives resorts?",
    a: "Unlike most international luxury brands in the Maldives, Oaga is a contemporary homegrown Maldivian brand. Its identity is built around local art, folklore, music and storytelling — every villa, restaurant and public space is designed to celebrate Maldivian culture and creativity.",
  },
  {
    q: "Is Oaga Art Resort suitable for families?",
    a: "Yes. The 2026 expansion includes selected Haruge Beach Villas converted into spacious two-bedroom villas, making Oaga suitable for families, multi-generational holidays and small group celebrations.",
  },
  {
    q: "What new accommodation is being added in 2026?",
    a: "New sunrise overwater villas, additional overwater villas with both sunrise and sunset views, selected beach villas converted into larger two-bedroom accommodations, and a total of 30 new overwater villas being introduced by the end of the year.",
  },
];

const whyOaga = [
  "A homegrown Maldivian identity built around local art and culture",
  "Artistic villa interiors with hand-drawn murals and mural pools",
  "Convenient speedboat access — no domestic flight required",
  "Intimate boutique atmosphere with expanded accommodation options",
  "Live entertainment, storytelling and community experiences",
  "Vibrant house reef for snorkelling just steps from your villa",
  "A new overwater restaurant arriving in early 2027",
];

const idealFor = [
  "Honeymoon couples",
  "Couples celebrating anniversaries",
  "Families looking for spacious beach and overwater villas",
  "Groups travelling together",
  "Art and culture enthusiasts",
  "Repeat Maldives travellers seeking a unique experience",
  "Travellers who appreciate authentic local hospitality",
];

export default function BlogOagaArtResort() {
  return (
    <div className="min-h-screen bg-white">
      <title>Oaga Art Resort Reimagined: A Colorful New Chapter Begins in the Maldives (2026) | Antravi</title>
      <meta
        name="description"
        content="Oaga Art Resort unveils exciting enhancements from 1 August 2026 — new overwater villas, refreshed dining and upgraded spaces. Discover why this homegrown Maldivian resort is one of the most creative and memorable stays in the Maldives."
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
                6–8 Min Read
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
              Oaga Art Resort Reimagined: A Colorful New Chapter Begins in the Maldives
            </h1>

            {/* Divider */}
            <div style={{ width: "2.5rem", height: "1px", backgroundColor: "var(--luxury-gold)", margin: "0 auto 1.25rem" }} />

            {/* Author + Date */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6b7280",
              }}
            >
              By Founder Yashodar Reddy &nbsp;·&nbsp; July 31, 2026
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
            <span style={{ color: "#162660" }}>Oaga Art Resort — August 2026</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
          <img
            src="/blog-images/oaga-art-resort-hero.jpg"
            alt="Oaga Art Resort — colorful Maldivian overwater villas and lagoon"
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
            Oaga Art Resort, North Malé Atoll, Maldives — reimagined from August 2026
          </p>
        </div>

        {/* ── Article Body ── */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

          {/* Intro */}
          <section className="mb-12">
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              When people dream about the Maldives, they usually picture turquoise lagoons, white sandy beaches and luxurious overwater villas.
            </p>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              But Oaga Art Resort offers something refreshingly different.
            </p>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Instead of focusing only on luxury, Oaga celebrates the heart and soul of the Maldives through art, storytelling, music, creativity and authentic island culture. Every villa, restaurant and public space has been designed to tell a story inspired by local traditions and Maldivian artists, creating an experience that goes far beyond a typical beach holiday.
            </p>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Now, the resort is entering an exciting new chapter. Beginning 1 August 2026, Oaga Art Resort will unveil the first phase of its latest enhancements — refreshed guest experiences, upgraded facilities and new accommodation options that reflect the resort's commitment to evolving while staying true to its identity as one of the Maldives' most creative and homegrown luxury resorts.
            </p>
          </section>

          {/* A Homegrown Maldivian Resort */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              A Homegrown Maldivian Resort
            </h2>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Unlike many international luxury brands operating in the Maldives, Oaga proudly describes itself as a contemporary homegrown Maldivian brand. Its philosophy is built around authenticity, local creativity and heartfelt hospitality delivered by a passionate Maldivian team. Rather than recreating international luxury, Oaga embraces Maldivian culture and invites guests to become part of it.
            </p>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              From the moment guests arrive, they are introduced to colorful artwork, folklore, music and immersive storytelling that continues throughout their stay. This makes Oaga particularly appealing to travellers looking for experiences rather than simply another luxury resort.
            </p>
          </section>

          {/* Villa image */}
          <div className="mb-12">
            <img
              src="/blog-images/oaga-art-resort-villa.jpg"
              alt="Artistic villa interior at Oaga Art Resort with hand-drawn murals"
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
              Artistic villa interiors featuring hand-drawn murals inspired by Maldivian folklore
            </p>
          </div>

          {/* Easy Access */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Easy Access from Velana International Airport
            </h2>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Oaga Art Resort is located in North Malé Atoll, approximately 51 kilometres from Velana International Airport. Guests can reach the island in around 45 minutes by speedboat, with transfers arranged according to international flight schedules and available throughout the day.
            </p>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              This convenient location allows travellers to begin their holiday quickly without requiring a domestic flight or seaplane transfer — a significant advantage for guests with tight connections or late arrivals.
            </p>
          </section>

          {/* What's New */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              What's New from 1 August 2026?
            </h2>
            <p className="text-gray-600 mb-6" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              The August 2026 reopening marks the beginning of several enhancements across the island. Guests can expect:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Refreshed public spaces",
                "Enhanced dining experiences",
                "Expansion of the main restaurant",
                "New sunrise overwater villas",
                "Conversion of selected beach villas into larger two-bedroom accommodations",
                "Additional overwater villas with both sunrise and sunset views",
                "Continued expansion throughout 2026, including a new overwater restaurant planned for early 2027",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: "var(--luxury-gold)", fontSize: "1rem", marginTop: "0.1rem", flexShrink: 0 }}>→</span>
                  <p className="text-gray-600" style={{ lineHeight: 1.75 }}>{item}</p>
                </li>
              ))}
            </ul>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              These developments are designed to provide more accommodation choices for couples, families and groups while maintaining the intimate atmosphere that guests appreciate.
            </p>
          </section>

          {/* Overwater image */}
          <div className="mb-12">
            <img
              src="/blog-images/oaga-art-resort-overwater.jpg"
              alt="New overwater villas at Oaga Art Resort with turquoise Maldives lagoon"
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
              New overwater villas with sunrise and sunset views — arriving August 2026
            </p>
          </div>

          {/* Stay in Villas That Tell a Story */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Stay in Villas That Tell a Story
            </h2>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              At Oaga Art Resort, accommodation is more than a place to sleep. Every villa has been designed as a piece of art inspired by Maldivian culture, folklore and island life. Hand-drawn murals and creative interiors make each stay feel unique rather than identical.
            </p>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              The resort's signature Mural Walls and Mural Pools extend these stories from the villa interiors into the private pools, creating an artistic experience throughout the property. The refreshed designs will debut with the August 2026 enhancements.
            </p>
          </section>

          {/* Couples, Families, Groups */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Designed for Couples, Families and Groups
            </h2>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              The resort now offers accommodation for different styles of travel. Couples can choose intimate overwater villas with private pools and slides, while families have larger beach villas designed for shared stays. Travellers celebrating special occasions can even stay in the spacious Radhun Residential Suite — a three-bedroom residence with its own private pool and dedicated studio space.
            </p>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              This wider range of villa categories makes Oaga suitable for honeymooners, multi-generational holidays and small group celebrations.
            </p>
          </section>

          {/* Dining Gets an Upgrade */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Dining Gets an Upgrade
            </h2>
            <p className="text-gray-600 mb-6" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Food has always been an important part of the Oaga experience, and the resort is investing further in its dining venues. Highlights include:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Expansion and enhancement of the Kaa Kada main restaurant",
                "Refreshed arrival experience at Raa Baa",
                "More indoor seating and community lounge spaces",
                "Enhanced entertainment areas",
                "A brand-new overwater restaurant planned for early 2027",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: "var(--luxury-gold)", fontSize: "1rem", marginTop: "0.1rem", flexShrink: 0 }}>→</span>
                  <p className="text-gray-600" style={{ lineHeight: 1.75 }}>{item}</p>
                </li>
              ))}
            </ul>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Rather than simply adding another restaurant, these improvements are designed to create more spaces where guests can relax, socialise and experience Oaga's creative atmosphere.
            </p>
          </section>

          {/* Entertainment */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Entertainment Inspired by Maldivian Creativity
            </h2>
            <p className="text-gray-600 mb-6" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Oaga has always positioned itself as a resort where art and entertainment come together. The refreshed Raa Baa will feature:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "An upgraded Ashi Lounge with larger entertainment spaces",
                "Added deck seating and a fire pit for bonfire evenings",
                "An improved open beach stage with movable platforms for performances",
                "The Maldives' largest mural pool continuing as a signature attraction",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: "var(--luxury-gold)", fontSize: "1rem", marginTop: "0.1rem", flexShrink: 0 }}>→</span>
                  <p className="text-gray-600" style={{ lineHeight: 1.75 }}>{item}</p>
                </li>
              ))}
            </ul>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              These spaces encourage guests to enjoy live performances, storytelling and community experiences instead of spending every evening inside their villas.
            </p>
          </section>

          {/* Founder quote block */}
          <section className="mb-12">
            <div className="p-8" style={{ background: "linear-gradient(135deg, #162660 0%, #1e3580 100%)", borderRadius: "2px" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--luxury-gold)", marginBottom: "1rem" }}>
                A Resort That Celebrates Local Culture
              </p>
              <blockquote className="font-heading" style={{ fontSize: "1.15rem", color: "#fff", lineHeight: 1.7, fontStyle: "italic", marginBottom: "1.25rem" }}>
                "Very few resorts in the Maldives feel like they truly belong to the islands. Oaga is one of them — and that is exactly what makes it so memorable."
              </blockquote>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
                — Yashodar Reddy, Founder, Antravi
              </p>
            </div>
          </section>

          {/* Reef / underwater */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Discover the Maldives Above and Below the Water
            </h2>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              While Oaga Art Resort is known for its artistic identity, it also delivers the natural beauty that travellers expect from the Maldives. The island is surrounded by a vibrant house reef, making it easy for guests to snorkel and discover colourful coral formations, tropical fish and diverse marine life just steps from their villa.
            </p>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              For guests looking to explore further, Oaga also offers a range of excursions and experiences that showcase the beauty of the Maldives beyond the island, encouraging travellers to discover more of the destination during their holiday.
            </p>
          </section>

          {/* Reef image */}
          <div className="mb-12">
            <img
              src="/blog-images/oaga-art-resort-reef.jpg"
              alt="Vibrant house reef for snorkelling at Oaga Art Resort Maldives"
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
              The vibrant house reef at Oaga Art Resort — snorkelling just steps from the shore
            </p>
          </div>

          {/* Why Oaga */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Why Oaga Art Resort Stands Apart
            </h2>
            <p className="text-gray-600 mb-6" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              The Maldives is home to many beautiful resorts. Very few have a personality as distinctive as Oaga. Here is what sets it apart:
            </p>
            <ul className="space-y-3 mb-6">
              {whyOaga.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: "var(--luxury-gold)", fontSize: "1rem", marginTop: "0.1rem", flexShrink: 0 }}>→</span>
                  <p className="text-gray-600" style={{ lineHeight: 1.75 }}>{item}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Who Should Choose */}
          <section className="mb-12">
            <h2 className="font-heading font-bold mb-5" style={{ fontSize: "1.5rem", color: "#162660" }}>
              Who Should Choose Oaga Art Resort?
            </h2>
            <p className="text-gray-600 mb-6" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Oaga Art Resort is perfect for travellers who want more than a luxury beach holiday. It is an excellent choice for:
            </p>
            <ul className="space-y-3 mb-6">
              {idealFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: "var(--luxury-gold)", fontSize: "1rem", marginTop: "0.1rem", flexShrink: 0 }}>→</span>
                  <p className="text-gray-600" style={{ lineHeight: 1.75 }}>{item}</p>
                </li>
              ))}
            </ul>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              If you're looking for a resort where creativity, storytelling and Maldivian culture are just as important as white-sand beaches and turquoise lagoons, Oaga Art Resort offers a refreshing alternative.
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
              The Maldives is home to many beautiful resorts, but very few have a personality as distinctive as Oaga Art Resort.
            </p>
            <p className="text-gray-600 mb-5" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              Its colourful design, locally inspired storytelling, artistic villas and genuine Maldivian hospitality create an experience that feels authentic, immersive and memorable. With exciting enhancements launching from 1 August 2026 — including new overwater villas, upgraded dining and refreshed public spaces — there has never been a better time to discover one of the Maldives' most original luxury resorts.
            </p>
            <p className="text-gray-600" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              If you're looking for a holiday that combines island beauty with culture, creativity and unforgettable experiences, Oaga Art Resort deserves a place on your travel list.
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
              Reserve Your Oaga Escape with Antravi
            </p>
            <h2 className="font-heading font-bold mb-4" style={{ fontSize: "2rem" }}>
              Let Antravi Design Your Perfect Maldives Holiday
            </h2>
            <p className="mb-8" style={{ lineHeight: 1.75, fontSize: "1rem", opacity: 0.85 }}>
              Whether you're planning a honeymoon, anniversary, family vacation or a once-in-a-lifetime island escape, our travel specialists will help you choose the perfect villa, organise seamless transfers and create a tailor-made itinerary for an unforgettable Maldives experience.
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
