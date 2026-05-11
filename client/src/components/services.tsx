export default function Services() {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Live Your Moments Section */}
      <section className="pt-20 pb-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Our Philosophy</span>
          <div className="editorial-divider" />
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: 'var(--charcoal)',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}
          >
            Live your Moments
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              color: 'var(--mid-gray)',
              lineHeight: 1.9,
              textAlign: 'justify',
              maxWidth: '52rem',
              margin: '0 auto',
            }}
          >
            At Antravi, we craft vacations that awaken your senses: the sight of turquoise waters, the soothing sound of gentle waves, and the joy of unhurried time spent with those you love. Every detail is thoughtfully curated to truly experience the world in its most beautiful, heartfelt form.
            Travel is more than just reaching a destination — it's about savouring the little moments that stay with you forever.
          </p>
        </div>
      </section>
    </div>
  );
}
