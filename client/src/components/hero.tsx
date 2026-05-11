import { useState } from "react";
import { TravelForm } from "./TravelForm";

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };

  return (
    <section className="relative w-full h-screen md:h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/images/hero/hero.webp"
          alt="Antravi - Live Your Moments"
          className="w-full h-full object-cover aerial-drift"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="cinematic-rule" style={{ width: '2.5rem', height: '1px', background: 'rgba(184,150,62,0.9)', margin: '0 auto 1.5rem' }} />

        <h1
          className="cinematic-title"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}
        >
          Antravi
        </h1>

        <p
          className="cinematic-subtitle"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            fontWeight: 400,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            opacity: 0.85,
            marginBottom: '2.5rem',
          }}
        >
          Live Your Moments
        </p>

        <div className="cinematic-cta">
          <button onClick={handlePlanClick} className="btn-editorial-white">
            Enquire Now
          </button>
        </div>
      </div>

      <TravelForm isOpen={isFormOpen} onClose={() => { setIsFormOpen(false); }} />
    </section>
  );
}
