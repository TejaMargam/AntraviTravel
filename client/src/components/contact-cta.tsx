import { useState } from "react";
import { TravelForm } from "./TravelForm";

export default function ContactCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: 'var(--warm-cream)' }}>
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <span className="section-label">Get In Touch</span>
        <div className="editorial-divider" />
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 400,
            color: 'var(--charcoal)',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}
        >
          Let us craft your vacation
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            color: 'var(--mid-gray)',
            marginBottom: '2.5rem',
          }}
        >
          beautiful and personal
        </p>
        <button onClick={handlePlanClick} className="btn-editorial-solid">
          Start Planning with Antravi
        </button>
      </div>
      <TravelForm isOpen={isFormOpen} onClose={() => { setIsFormOpen(false); }} />
    </section>
  );
}
