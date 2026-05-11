import { useState, type MouseEvent } from "react";
import { Link, useLocation } from "wouter";
import { TravelForm } from "./TravelForm";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [, navigate] = useLocation();

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };

  const scrollToDestinations = () => {
    const destinationsSection = document.getElementById("destinations");
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDestinationsClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    if (window.location.pathname === "/") {
      window.history.replaceState(null, "", "/#destinations");
      scrollToDestinations();
      return;
    }

    navigate("/#destinations");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="block">
              <img src="/Antravi_Logo_W.png" alt="Antravi Logo" height={50} width={150} style={{ cursor: 'pointer' }} />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center" style={{ gap: '2.5rem' }}>
            <a
              href="/#destinations"
              onClick={handleDestinationsClick}
              className="transition-colors"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.85)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            >
              Destinations
            </a>
            <Link
              href="/contact"
              className="transition-colors"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.85)',
              }}
              onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            >
              Contact
            </Link>
            <button
              onClick={handlePlanClick}
              aria-label="Start planning your trip with Antravi"
              className="btn-editorial-white"
            >
              Plan With Antravi
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 transition-opacity"
              style={{ color: 'rgba(255,255,255,0.85)' }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden w-full" style={{ borderTop: '1px solid rgba(255,255,255,0.12)', backgroundColor: 'var(--navy)' }}>
            <div className="px-4 py-6 space-y-5 w-full">
              <a
                href="/#destinations"
                onClick={handleDestinationsClick}
                className="block w-full"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                Destinations
              </a>
              <Link
                href="/contact"
                className="block w-full"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.85)',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={handlePlanClick}
                className="btn-editorial-white w-full text-center"
                aria-label="Start planning your trip with Antravi"
              >
                Plan With Antravi
              </button>
            </div>
          </div>
        )}
        <TravelForm isOpen={isFormOpen} onClose={() => { setIsFormOpen(false); }} />
      </div>
    </nav>
  );
}
