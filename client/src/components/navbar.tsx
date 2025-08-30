import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToDestinations = () => {
    const destinationsSection = document.getElementById("destinations");
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-700 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="font-heading text-2xl font-bold text-white">
              Antravi
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToDestinations}
              className="text-white hover:text-black font-medium transition-colors"
            >
              Destinations
            </button>
            <button
              onClick={scrollToContact}
              className="text-white hover:text-black font-medium transition-colors"
            >
              Contact
            </button>
            <button
              onClick={scrollToContact}
              className="bg-white text-black px-6 py-2 hover:bg-gray-200 transition-colors font-medium"
              style={{ borderRadius: "5px" }}
            >
              Start Planning Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white"
            >
              <i
                className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={scrollToDestinations}
                className="block w-full text-left text-gray-700 hover:text-black font-medium"
              >
                Destinations
              </button>
              <button
                onClick={scrollToContact}
                className="block w-full text-left text-gray-700 hover:text-black font-medium"
              >
                Contact
              </button>
              <button
                onClick={scrollToContact}
                className="w-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors font-medium"
                style={{ borderRadius: "5px" }}
              >
                Start Planning Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
