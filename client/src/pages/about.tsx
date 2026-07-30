import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { TravelForm } from "@/components/TravelForm";
import { useState } from "react";

const reasons = [
  {
    icon: "fa-hotel",
    title: "Hospitality-Led Experience",
    body: "Built on real hospitality industry experience with a strong understanding of guest expectations and service excellence.",
  },
  {
    icon: "fa-compass",
    title: "Personalised Travel Planning",
    body: "Every itinerary is thoughtfully tailored to your travel style, preferences, budget, and expectations.",
  },
  {
    icon: "fa-handshake",
    title: "Carefully Selected Partners",
    body: "Access to carefully chosen hotels, resorts, and trusted travel partners that align with our guests' travel needs.",
  },
  {
    icon: "fa-comment-alt",
    title: "Transparent Recommendations",
    body: "Honest advice and reliable guidance focused on helping you make informed travel decisions.",
  },
  {
    icon: "fa-user-tie",
    title: "Dedicated Guest Relations",
    body: "Personal support before, during, and after your journey to ensure a seamless travel experience.",
  },
];

const timeline = [
  {
    year: "2021",
    heading: "Where It Began",
    body: "Began my career in the hospitality industry, gaining hands-on experience in guest service, hotel operations, and delivering memorable guest experiences.",
  },
  {
    year: "2023",
    heading: "Going International",
    body: "Expanded my experience internationally by working at a resort in the Maldives, developing a deeper understanding of guest expectations, personalised service, and operational excellence.",
  },
  {
    year: "2025",
    heading: "Founding Antravi",
    body: "Founded Antravi with a vision to bring a more transparent, personalised, and guest-focused approach to travel planning.",
  },
  {
    year: "Today & Beyond",
    heading: "The Journey Continues",
    body: "Continuing to combine hospitality experience, destination knowledge, and genuine care to help guests travel with confidence and create memories that last a lifetime.",
  },
];

export default function About() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-20">

        {/* ── 1. HERO ─────────────────────────────────────────────────── */}
        <section
          style={{ backgroundColor: "var(--navy)", paddingTop: "5rem", paddingBottom: "5rem" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label" style={{ color: "var(--luxury-gold)" }}>
              About Antravi
            </span>
            <div className="editorial-divider" style={{ backgroundColor: "var(--luxury-gold)" }} />
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              We believe travel is about creating experiences that become lifelong memories.
            </h1>
          </div>
        </section>

        {/* ── 2. OUR STORY — brand philosophy paragraphs ──────────────── */}
        <section style={{ backgroundColor: "#ffffff", paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center" style={{ marginBottom: "3rem" }}>
              <span className="section-label">Our Story</span>
              <div className="editorial-divider" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                "Every journey is thoughtfully planned around our guests' preferences, ensuring each itinerary is personalised, meaningful, and memorable. Our focus is on helping guests choose the right experience with confidence through honest guidance, thoughtful planning, and genuine care.",
                "Antravi was founded with a vision to bring a more transparent, knowledge-driven, and guest-centric approach to travel. Rather than offering one-size-fits-all packages, we take the time to understand each guest's travel purpose, budget, interests, and expectations before recommending the destinations, hotels, resorts, and experiences that best suit their journey.",
                "We believe every journey is unique, and so should be the planning behind it. Our role is not simply to arrange travel, but to guide our guests in making informed decisions that lead to meaningful experiences from the very beginning.",
                "As we continue to grow, our vision is to become one of India's most trusted travel brands by combining hospitality experience, destination knowledge, and personalised travel planning. Whether it's a honeymoon, family holiday, a hotel or resort event, a milestone celebration, or a memorable getaway, our commitment is to create journeys that leave lasting memories and experiences that truly matter.",
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.975rem",
                    color: "var(--mid-gray)",
                    lineHeight: 1.9,
                    textAlign: "center",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. WHY GUESTS CHOOSE ANTRAVI ────────────────────────────── */}
        <section style={{ backgroundColor: "var(--warm-cream)", paddingTop: "5rem", paddingBottom: "5rem" }}>
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

            {/* 5 cards — 3 on top row, 2 centred below */}
            <div
              className="grid md:grid-cols-3"
              style={{ gap: "2rem", marginBottom: "2rem" }}
            >
              {reasons.slice(0, 3).map(({ icon, title, body }) => (
                <ReasonCard key={title} icon={icon} title={title} body={body} />
              ))}
            </div>
            <div
              className="grid md:grid-cols-2 max-w-2xl mx-auto"
              style={{ gap: "2rem" }}
            >
              {reasons.slice(3).map(({ icon, title, body }) => (
                <ReasonCard key={title} icon={icon} title={title} body={body} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. MEET THE FOUNDER ──────────────────────────────────────── */}
        <section style={{ backgroundColor: "#ffffff", paddingTop: "5rem", paddingBottom: "5rem" }}>
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
                {/* Gold accent */}
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

                {/* Opening quote */}
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    color: "var(--charcoal)",
                    lineHeight: 1.75,
                    marginBottom: "1.5rem",
                  }}
                >
                  Every meaningful journey begins with understanding what matters most to our guests.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                  {[
                    "I founded Antravi with a simple belief: travel planning should be thoughtful, honest, and centred around the guest. Rather than focusing on selling packages, I wanted to build a travel company that listens first, understands each traveller's needs, and creates journeys that are carefully planned from start to finish.",
                    "Every recommendation we make is guided by transparency, attention to detail, and a genuine commitment to helping our guests create unforgettable memories. These values continue to shape every journey we plan and every relationship we build.",
                    "Thank you for considering Antravi to be part of your journey. I look forward to helping you create experiences that truly matter.",
                  ].map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9rem",
                        color: "var(--mid-gray)",
                        lineHeight: 1.85,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Signature */}
                <div style={{ marginTop: "2rem" }}>
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
                      fontSize: "0.72rem",
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

        {/* ── 5. THE JOURNEY BEHIND ANTRAVI — timeline ─────────────────── */}
        <section style={{ backgroundColor: "var(--warm-cream)", paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center" style={{ marginBottom: "1.5rem" }}>
              <span className="section-label">Our History</span>
              <div className="editorial-divider" />
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                The Journey Behind Antravi
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: "var(--mid-gray)",
                  lineHeight: 1.8,
                  maxWidth: "36rem",
                  margin: "0 auto 3rem",
                }}
              >
                My journey in the hospitality industry began with a passion for creating exceptional guest experiences and understanding the importance of thoughtful service.
              </p>
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
                      {/* Dot */}
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
                          border: "2px solid var(--warm-cream)",
                          boxShadow: "0 0 0 1px var(--luxury-gold)",
                        }}
                      />

                      {/* Year + heading */}
                      <div
                        style={{ textAlign: isLeft ? "right" : "left", order: isLeft ? 1 : 2 }}
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

                      {/* Body */}
                      <div
                        style={{ order: isLeft ? 2 : 1 }}
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

            {/* Closing line */}
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: "var(--mid-gray)",
                textAlign: "center",
                marginTop: "3.5rem",
                lineHeight: 1.75,
              }}
            >
              Every journey tells a story, and every memorable experience begins with thoughtful planning.
            </p>
          </div>
        </section>

        {/* ── 6. LIVE YOUR MOMENTS — closing CTA ──────────────────────── */}
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
              Antravi. Live Your Moments.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                maxWidth: "36rem",
                margin: "0 auto 2.5rem",
              }}
            >
              Whether you're planning your honeymoon, a family holiday, a celebration, or your next unforgettable getaway, we're here to help you travel with confidence and create moments that last a lifetime.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn-editorial-white"
            >
              Reserve with Antravi
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

/* ─── Reusable reason card ─────────────────────────────────────────────── */
function ReasonCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div
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
        <i className={`fas ${icon}`} style={{ color: "var(--luxury-gold)", fontSize: "1rem" }} />
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
  );
}
