import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" data-testid="link-home">
              <h1 className="font-heading text-2xl font-bold text-primary-blue tracking-wide">
                ANTRAVI
              </h1>
              <p className="text-xs text-gray-600 font-light tracking-wider">Live Your Moments</p>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className={`font-medium transition-colors duration-200 ${
                  isActive("/") 
                    ? "text-primary-blue" 
                    : "text-gray-700 hover:text-primary-blue"
                }`}
                data-testid="nav-home"
              >
                Home
              </Link>
              <a 
                href="#destinations" 
                className="text-gray-700 hover:text-primary-blue transition-colors duration-200"
                data-testid="nav-destinations"
              >
                Destinations
              </a>
              <Link 
                href="/about" 
                className={`transition-colors duration-200 ${
                  isActive("/about") 
                    ? "text-primary-blue" 
                    : "text-gray-700 hover:text-primary-blue"
                }`}
                data-testid="nav-about"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`transition-colors duration-200 ${
                  isActive("/contact") 
                    ? "text-primary-blue" 
                    : "text-gray-700 hover:text-primary-blue"
                }`}
                data-testid="nav-contact"
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-700 hover:text-primary-blue"
              onClick={toggleMobileMenu}
              data-testid="button-mobile-menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/")
                    ? "text-primary-blue bg-gray-50"
                    : "text-gray-700 hover:text-primary-blue hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-home"
              >
                Home
              </Link>
              <a
                href="#destinations"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-blue hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-destinations"
              >
                Destinations
              </a>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/about")
                    ? "text-primary-blue bg-gray-50"
                    : "text-gray-700 hover:text-primary-blue hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-about"
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/contact")
                    ? "text-primary-blue bg-gray-50"
                    : "text-gray-700 hover:text-primary-blue hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-contact"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
