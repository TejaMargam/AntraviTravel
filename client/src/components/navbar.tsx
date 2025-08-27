import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="font-heading text-2xl font-bold text-black">
              Antravi
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-gray-700 hover:text-black font-medium transition-colors">
              Destinations
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black font-medium transition-colors">
              Contact
            </a>
            <button
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Start Planning Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-black">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}