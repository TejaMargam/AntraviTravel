import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollManager from "@/hooks/ScrollManager";
import { Link } from "wouter";

const destinations = [
  {
    href: "/destinations/maldives",
    name: "Maldives",
    tagline: "Overwater Villas & Pristine Atolls",
    description:
      "Secluded island resorts, crystal-clear lagoons, and world-class marine life. Antravi designs bespoke Maldives escapes for couples, honeymooners, and luxury travellers seeking complete privacy.",
    image: "/images/maldives-hero.jpg",
    fallbackGradient: "linear-gradient(135deg, #0d3b6e 0%, #1a6b8a 100%)",
  },
  {
    href: "/destinations/bali",
    name: "Bali",
    tagline: "Tropical Culture & Luxury Villas",
    description:
      "From Ubud's lush terraces to Seminyak's cliffside sunsets, Bali offers an unmatched blend of culture and comfort. We craft personalised itineraries for every type of traveller.",
    image: "/videos/bali-poster.jpg",
    fallbackGradient: "linear-gradient(135deg, #2d5016 0%, #5a8a3c 100%)",
  },
  {
    href: "/destinations/thailand",
    name: "Thailand",
    tagline: "Golden Temples & Island Retreats",
    description:
      "Bangkok's vibrant energy, Chiang Mai's mountain serenity, and Phuket's turquoise bays — all curated into seamless, luxury-first Thailand journeys by Antravi.",
    image: "/videos/thailand-poster.jpg",
    fallbackGradient: "linear-gradient(135deg, #6b3a0d 0%, #c47a2e 100%)",
  },
];

export default function Destinations() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <ScrollManager />
      <title>Luxury Destinations — Maldives, Bali & Thailand | Antravi</title>
      <meta
        name="description"
        content="Explore Antravi's curated luxury destinations — Maldives overwater villas, Bali private pool stays, and Thailand island retreats. Tailor-made travel for discerning travellers."
      />

      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{ minHeight: "52vh", background: "linear-gradient(135deg, #0f1f5c 0%, #162660 60%, #1a3070 100%)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(184,150,62,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
            <div
              style={{
                width: "2.5rem",
                height: "1px",
                background: "rgba(184,150,62,0.9)",
                margin: "0 auto 1.5rem",
              }}
            />
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "0.02em",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              Our Destinations
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                maxWidth: "36rem",
                margin: "0 auto",
              }}
            >
              Handpicked sanctuaries across Southeast Asia and the Indian Ocean
              — each one chosen for its extraordinary settings and curated for
              the way you like to travel.
            </p>
          </div>
        </section>

        {/* Destination Cards */}
        <section
          style={{
            padding: "5rem 1.5rem",
            maxWidth: "72rem",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {destinations.map((dest) => (
              <Link key={dest.href} href={dest.href}>
                <article
                  style={{
                    borderRadius: "4px",
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    background: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.16)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.10)";
                  }}
                >
                  {/* Card image */}
                  <div
                    style={{
                      height: "220px",
                      background: dest.fallbackGradient,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1.25rem",
                        left: "1.5rem",
                        right: "1.5rem",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.6rem",
                          fontWeight: 600,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "rgba(184,150,62,0.95)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {dest.tagline}
                      </p>
                      <h2
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.6rem",
                          fontWeight: 400,
                          color: "#ffffff",
                          margin: 0,
                        }}
                      >
                        {dest.name}
                      </h2>
                    </div>
                  </div>

                  {/* Card body */}
                  <div
                    style={{
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                      flexGrow: 1,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        color: "rgba(30,30,30,0.75)",
                        lineHeight: 1.75,
                        margin: 0,
                        flexGrow: 1,
                      }}
                    >
                      {dest.description}
                    </p>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(184,150,62,0.9)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      Explore {dest.name}
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path
                          d="M1 5h12M8 1l5 4-5 4"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
