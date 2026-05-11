
export default function AboutPreview() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--warm-cream)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Who We Are</span>
            <div className="editorial-divider-left" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                fontWeight: 400,
                color: 'var(--charcoal)',
                lineHeight: 1.15,
                marginBottom: '2.5rem',
              }}
            >
              Why Choose
              <br />
              Antravi?
            </h2>

            <div className="space-y-10">
              {[
                {
                  icon: 'fa-star',
                  title: 'Expert Curation',
                  body: 'Our travel specialists have personally visited every destination we recommend, ensuring authentic experiences.',
                },
                {
                  icon: 'fa-shield-alt',
                  title: 'Complete Protection',
                  body: 'Travel with confidence knowing you\'re covered by comprehensive insurance and 24/7 support.',
                },
                {
                  icon: 'fa-heart',
                  title: 'Personalized Service',
                  body: 'Every journey is tailored to your unique preferences, interests, and travel style.',
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="flex items-start" style={{ gap: '1.5rem' }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: '2.75rem',
                      height: '2.75rem',
                      border: '1px solid var(--warm-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <i className={`fas ${icon}`} style={{ color: 'var(--luxury-gold)', fontSize: '1rem' }}></i>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 500,
                        color: 'var(--charcoal)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        color: 'var(--mid-gray)',
                        lineHeight: 1.8,
                      }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a href="/about" className="btn-editorial-outline">
                Learn More About Us
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="overflow-hidden"
              style={{
                borderRadius: '4px',
                boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop"
                alt="Travel planning"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
            {/* Subtle gold accent block */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                right: '-1.5rem',
                width: '6rem',
                height: '6rem',
                backgroundColor: 'var(--luxury-gold)',
                opacity: 0.15,
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
