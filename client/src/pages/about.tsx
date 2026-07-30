import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { TravelForm } from "@/components/TravelForm";
import { useState } from "react";

const reasons = [
  {
    icon: "fa-compass",
    title: "Personally Curated, Every Time",
    body: "No two journeys look alike. We design each itinerary around your preferences, pace, and people — not a template.",
  },
  {
    icon: "fa-handshake",
    title: "Direct Resort Relationships",
    body: "Years of partnerships with the finest resorts in the Maldives, Bali, and Thailand mean better rooms, added benefits, and genuine priority for our guests.",
  },
  {
    icon: "fa-shield-alt",
    title: "End-to-End Ownership",
    body: "From the first enquiry to your return home, one dedicated specialist handles every detail. No call centres, no hand-offs.",
  },
  {
    icon: "fa-clock",
    title: "24/7 On-Trip Support",
    body: "We stay reachable throughout your journey — not just before departure. If anything needs attention, we handle it before it reaches you.",
  },
  {
    icon: "fa-tags",
    title: "Transparent Pricing",
    body: "What you are quoted is what you pay. No hidden charges, no last-minute surprises, no fine print that changes the number.",
  },
  {
    icon: "fa-star",
    title: "Trusted by Discerning Travellers",
    body: "Our guests return — and more importantly, they send their closest friends. That trust is the standard we hold every booking to.",
  },
];

const timeline = [
  {
    year: "2021",
    heading: "The Beginning",
    body: "Antravi was founded with a single focus: crafting unforgettable journeys to the Maldives. With a small circle of trusted resort partners and an uncompromising commitment to detail, our first guests set out to truly Live Their Moments.",
  },
  {
    year: "2023",
    heading: "Growing Trust",
    body: "Word spread. Bali and Thailand were added to our portfolio as guests returned and brought their closest circle. Each new destination followed the same principle — personally experienced before ever being recommended.",
  },
  {
    year: "2025",
    heading: "Recognition & Refinement",
    body: "Four Maldivian resorts featured by Antravi were ranked among Travel + Leisure's World's Best Hotels 2026, validating what our guests had long known. We deepened our resort relationships and strengthened our team to match growing demand.",
  },
  {
    year: "Today & Beyond",
    heading: "The Journey Continues",
    body: "We continue to grow — not in scale for its own sake, but in depth. More destinations, stronger partnerships, and an unwavering focus on the thing that has always driven us: helping our guests live their moments to the fullest.",
  },
];

export default function About() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-20">

        {/* ── 1. HERO — About Antravi ─────────────────────────────────── */}
        <section
          style={{ backgroundColor: "var(--navy)", paddingTop: "5rem", paddingBottom: "5rem" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label" style={{ color: "var(--luxury-gold)" }}>
              Who We Are
            </span>
            <div className="editorial-divider" style={{ backgroundColor: "var(--luxury-gold)" }} />
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              About Antravi
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.8,
                maxWidth: "38rem",
                margin: "0 auto",
              }}
            >
              We are a boutique luxury travel consultancy dedicated to one pursuit —
              designing journeys that feel effortless, personal, and genuinely extraordinary.
            </p>
          </div>
        </section>

        {/* ── 2. WHY GUESTS CHOOSE ANTRAVI ────────────────────────────── */}
        <section style={{ backgroundColor: "#ffffff", paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center" style={{ marginBottom: "3.5rem" }}>
              <span className="section-label">Our Difference</span>
              <div className="editorial-divider" />
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  lineHeight: 1.2,
                }}
              >
                Why Guests Choose Antravi
              </h2>
            </div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-3"
              style={{ gap: "2rem" }}
            >
              {reasons.map(({ icon, title, body }) => (
                <div
                  key={title}
                  style={{
                    border: "1px solid var(--warm-border)",
                    borderRadius: "4px",
                    padding: "2rem",
                    backgroundColor: "#ffffff",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--luxury-gold)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--warm-border)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "2.75rem",
                      height: "2.75rem",
                      border: "1px solid var(--warm-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#ffffff",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <i
                      className={`fas ${icon}`}
                      style={{ color: "var(--luxury-gold)", fontSize: "1rem" }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: "var(--charcoal)",
                      marginBottom: "0.6rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--mid-gray)",
                      lineHeight: 1.8,
                    }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. MEET THE FOUNDER ──────────────────────────────────────── */}
        <section style={{ backgroundColor: "var(--warm-cream)", paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2" style={{ gap: "4rem", alignItems: "center" }}>

              {/* Image column */}
              <div className="relative order-2 lg:order-1">
                <div
                  className="overflow-hidden"
                  style={{
                    borderRadius: "4px",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                    alt="Yashodar Reddy — Founder, Antravi"
                    className="w-full object-cover"
                    style={{ aspectRatio: "4/5", display: "block" }}
                  />
                </div>
                {/* Gold accent block */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-1.5rem",
                    left: "-1.5rem",
                    width: "6rem",
                    height: "6rem",
                    backgroundColor: "var(--luxury-gold)",
                    opacity: 0.12,
                    zIndex: 0,
                    borderRadius: "2px",
                  }}
                />
              </div>

              {/* Text column */}
              <div className="order-1 lg:order-2">
                <span className="section-label">The Person Behind the Brand</span>
                <div className="editorial-divider-left" />
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 400,
                    color: "var(--charcoal)",
                    lineHeight: 1.2,
                    marginBottom: "1.75rem",
                  }}
                >
                  Meet the Founder
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      color: "var(--mid-gray)",
                      lineHeight: 1.85,
                    }}
                  >
                    Antravi was born from a conviction that most people settle for a holiday when
                    they deserve a genuine experience. Yashodar Reddy founded Antravi to change that —
                    building a consultancy where every booking is handled with the same care he gives
                    to his own travels.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      color: "var(--mid-gray)",
                      lineHeight: 1.85,
                    }}
                  >
                    Having personally explored the resorts, routes, and rhythms of the Maldives, Bali,
                    and Thailand, Yashodar brings firsthand knowledge to every conversation —
                    not brochure copy, but genuine familiarity with what makes each destination worth
                    the journey.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      color: "var(--mid-gray)",
                      lineHeight: 1.85,
                    }}
                  >
                    His philosophy is simple: every guest deserves a journey that feels designed
                    just for them — because with Antravi, it is.
                  </p>
                </div>

                {/* Quote */}
                <div
                  style={{
                    borderLeft: "2px solid var(--luxury-gold)",
                    paddingLeft: "1.5rem",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.15rem",
                      fontStyle: "italic",
                      color: "var(--charcoal)",
                      lineHeight: 1.75,
                    }}
                  >
                    "I started Antravi because I saw too many people settle for ordinary
                    when extraordinary was within reach. Every guest who books with us
                    deserves a journey that feels designed just for them."
                  </p>
                </div>

                {/* Signature */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      fontStyle: "italic",
                      color: "var(--charcoal)",
                      lineHeight: 1.2,
                      marginBottom: "0.3rem",
                    }}
                  >
                    Yashodar Reddy
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--luxury-gold)",
                    }}
                  >
                    Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. THE JOURNEY BEHIND ANTRAVI ────────────────────────────── */}
        <section style={{ backgroundColor: "#ffffff", paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center" style={{ marginBottom: "3.5rem" }}>
              <span className="section-label">Our History</span>
              <div className="editorial-divider" />
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  lineHeight: 1.2,
                }}
              >
                The Journey Behind Antravi
              </h2>
            </div>

            {/* Timeline */}
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div
                className="hidden md:block"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "var(--warm-border)",
                  transform: "translateX(-50%)",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                {timeline.map(({ year, heading, body }, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <div
                      key={year}
                      className="md:grid md:grid-cols-2"
                      style={{ gap: "3rem", alignItems: "center", position: "relative" }}
                    >
                      {/* Dot on the line */}
                      <div
                        className="hidden md:block"
                        style={{
                          position: "absolute",
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "0.75rem",
                          height: "0.75rem",
                          borderRadius: "50%",
                          backgroundColor: "var(--luxury-gold)",
                          zIndex: 1,
                          border: "2px solid #ffffff",
                          boxShadow: "0 0 0 1px var(--luxury-gold)",
                        }}
                      />

                      {/* Year card — alternates sides on desktop */}
                      <div
                        style={{
                          textAlign: isLeft ? "right" : "left",
                          order: isLeft ? 1 : 2,
                        }}
                        className={isLeft ? "md:pr-8" : "md:pl-8"}
                      >
                        <div
                          style={{
                            display: "inline-block",
                            padding: "0.4rem 1rem",
                            backgroundColor: "var(--navy)",
                            borderRadius: "2px",
                            marginBottom: "0.75rem",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.72rem",
                              letterSpacing: "0.18em",
                              textTransform: "uppercase",
                              color: "var(--luxury-gold)",
                              fontWeight: 600,
                            }}
                          >
                            {year}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "1.35rem",
                            fontWeight: 500,
                            color: "var(--charcoal)",
                            lineHeight: 1.3,
                          }}
                        >
                          {heading}
                        </h3>
                      </div>

                      {/* Body text */}
                      <div
                        style={{
                          order: isLeft ? 2 : 1,
                          paddingLeft: isLeft ? undefined : undefined,
                        }}
                        className={isLeft ? "md:pl-8" : "md:pr-8"}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.9rem",
                            color: "var(--mid-gray)",
                            lineHeight: 1.85,
                          }}
                        >
                          {body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. LIVE YOUR MOMENTS — closing CTA ──────────────────────── */}
        <section style={{ backgroundColor: "var(--navy)", paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label" style={{ color: "var(--luxury-gold)" }}>
              Begin Your Journey
            </span>
            <div className="editorial-divider" style={{ backgroundColor: "var(--luxury-gold)" }} />
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Live Your Moments
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                maxWidth: "34rem",
                margin: "0 auto 2.5rem",
              }}
            >
              Every extraordinary journey starts with a single conversation.
              Tell us where you want to go and we will take care of everything else.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn-editorial-white"
            >
              Plan With Antravi
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <TravelForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </div>
  );
}
