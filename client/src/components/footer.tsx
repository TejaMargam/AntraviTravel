import { Link } from "wouter";
import type { MouseEvent } from "react";

export default function Footer() {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <footer style={{ backgroundColor: 'var(--navy)', color: '#ffffff', paddingTop: '3rem', paddingBottom: '1.5rem' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around text-center md:text-left flex-wrap gap-8 pb-8">
          {/* Logo */}
          <div className="flex items-start justify-center">
            <img src="/Antravi_Logo_W.png" alt="Antravi" width={140} />
          </div>

          {/* Social & Contact */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(184,150,62,0.85)',
                marginBottom: '1.25rem',
              }}
            >
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <a
                href="https://www.instagram.com/the_antravi?utm_source=qr&igsh=cGpxdzNzMDhmZGV2"
                style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = '#ffffff')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/share/16SQ5QQbaR/"
                style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = '#ffffff')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://youtube.com/@theantravi?si=pyRpR-qhwvsgnS3v"
                style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = '#ffffff')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(184,150,62,0.85)',
                marginBottom: '1rem',
              }}
            >
              Contact Us
            </h3>
            <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)' }}>
              <i className="fas fa-phone mr-2" style={{ color: 'rgba(184,150,62,0.7)' }}></i>
              <a
                href={isMobile ? "tel:+919849981075" : undefined}
                onClick={(e) => { if (!isMobile) e.preventDefault(); }}
                style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = '#ffffff')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.75)')}
                data-testid="link-phone"
              >
                +91 9849981075
              </a>
            </p>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)' }}>
              <i className="fas fa-envelope mr-2" style={{ color: 'rgba(184,150,62,0.7)' }}></i>
              contact@antravi.com
            </p>
          </div>

          {/* Office Address */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(184,150,62,0.85)',
                marginBottom: '1.25rem',
              }}
            >
              Office Address
            </h3>
            <address
              className="not-italic"
              style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}
            >
              We Work 13th floor, Building no :09
              <br />
              K Raheja Mindspace, Madhapur
              <br />
              Hyderabad, Telangana 500081
              <br />
              India
            </address>
          </div>

          {/* Legal */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(184,150,62,0.85)',
                marginBottom: '1.25rem',
              }}
            >
              Legal
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link
                href="/terms"
                style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '1.25rem',
            textAlign: 'center',
          }}
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
            © 2025 Antravi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
