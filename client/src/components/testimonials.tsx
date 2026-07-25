'use client';

import { useState, useEffect, useCallback } from "react";
import reviewsData from "@/data/reviews.json";

export default function Testimonials() {
  const testimonials = reviewsData;
  const n = testimonials.length;
  const [startIdx, setStartIdx] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = useCallback((idx: number) => {
    setFade(false);
    setTimeout(() => {
      setStartIdx(((idx % n) + n) % n);
      setFade(true);
    }, 280);
  }, [n]);

  const next = useCallback(() => goTo(startIdx + 1), [goTo, startIdx]);
  const prev = useCallback(() => goTo(startIdx - 1), [goTo, startIdx]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const renderStars = (rating: number) =>
    [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? "text-yellow-500" : "text-gray-200"}`}
        style={{ fontSize: "0.75rem" }}
      />
    ));

  const visible = [0, 1, 2].map(offset => testimonials[(startIdx + offset) % n]);

  return (
    <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Guest Voices</span>
          <div className="editorial-divider" />
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              lineHeight: 1.2,
              marginBottom: "0.75rem",
            }}
          >
            What Our Travelers Say
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              color: "var(--mid-gray)",
              maxWidth: "30rem",
              margin: "0 auto",
            }}
          >
            Real stories from travelers who lived their moments with Antravi
          </p>
        </div>

        {testimonials.length > 0 ? (
          <div className="relative">
            {/* Cards */}
            <div
              style={{
                opacity: fade ? 1 : 0,
                transition: "opacity 0.28s ease",
                display: "grid",
                gridTemplateColumns: "repeat(1, 1fr)",
                gap: "1.5rem",
              }}
              className="md:grid-cols-2 lg:!grid-cols-3"
            >
              {visible.map((testimonial, i) => (
                <div
                  key={`${startIdx}-${i}`}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid var(--warm-border)",
                    borderRadius: "4px",
                    padding: "2rem",
                    position: "relative",
                    display: i === 0 ? "block" : undefined,
                  }}
                  className={i === 1 ? "hidden md:block" : i === 2 ? "hidden lg:block" : ""}
                >
                  {/* Quotation mark */}
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "5rem",
                      lineHeight: 1,
                      color: "var(--luxury-gold)",
                      opacity: 0.25,
                      position: "absolute",
                      top: "1rem",
                      left: "1.5rem",
                      userSelect: "none",
                    }}
                  >
                    "
                  </div>
                  <div className="flex space-x-1 mb-4" style={{ paddingTop: "1rem" }}>
                    {renderStars(testimonial.rating)}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.05rem",
                      fontStyle: "italic",
                      color: "var(--charcoal)",
                      lineHeight: 1.75,
                      marginBottom: "1.5rem",
                      textAlign: "justify",
                    }}
                  >
                    "{testimonial.text}"
                  </p>
                  <div
                    style={{
                      width: "1.5rem",
                      height: "1px",
                      backgroundColor: "var(--luxury-gold)",
                      marginBottom: "0.75rem",
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--charcoal)",
                    }}
                  >
                    {testimonial.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  border: "1px solid var(--warm-border)",
                  borderRadius: "50%",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--charcoal)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--luxury-gold)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--luxury-gold)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--warm-border)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--charcoal)";
                }}
              >
                <i className="fas fa-chevron-left" style={{ fontSize: "0.7rem" }} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    style={{
                      width: i === startIdx ? "1.5rem" : "0.4rem",
                      height: "0.4rem",
                      borderRadius: "9999px",
                      background: i === startIdx ? "var(--luxury-gold)" : "var(--warm-border)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  border: "1px solid var(--warm-border)",
                  borderRadius: "50%",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--charcoal)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--luxury-gold)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--luxury-gold)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--warm-border)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--charcoal)";
                }}
              >
                <i className="fas fa-chevron-right" style={{ fontSize: "0.7rem" }} />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center mt-16">
            <div
              style={{
                border: "1px solid var(--warm-border)",
                borderRadius: "4px",
                padding: "4rem",
                maxWidth: "40rem",
                margin: "0 auto",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  marginBottom: "1rem",
                }}
              >
                Reviews Coming Soon
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", color: "var(--mid-gray)", fontSize: "0.9rem" }}>
                We're collecting more amazing moments from our travelers. Check back soon!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
