import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-3xl font-bold mb-4">ANTRAVI</h3>
            <p className="text-lg mb-4 opacity-90">Live Your Moments</p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Creating extraordinary luxury travel experiences that transform dreams into unforgettable memories. 
              Discover the world's most exclusive destinations with our bespoke travel services.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-luxury-gold hover:bg-yellow-600 p-3 rounded-lg transition-colors"
                data-testid="social-instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="#" 
                className="bg-luxury-gold hover:bg-yellow-600 p-3 rounded-lg transition-colors"
                data-testid="social-facebook"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a 
                href="#" 
                className="bg-luxury-gold hover:bg-yellow-600 p-3 rounded-lg transition-colors"
                data-testid="social-twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a 
                href="#" 
                className="bg-luxury-gold hover:bg-yellow-600 p-3 rounded-lg transition-colors"
                data-testid="social-linkedin"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                  data-testid="footer-link-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="#destinations" 
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                  data-testid="footer-link-destinations"
                >
                  Destinations
                </a>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                  data-testid="footer-link-privacy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-envelope text-luxury-gold mr-3 w-5"></i>
                <a 
                  href="mailto:hello@antravi.com" 
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                  data-testid="footer-email"
                >
                  hello@antravi.com
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-luxury-gold mr-3 w-5"></i>
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                  data-testid="footer-phone"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-luxury-gold mr-3 w-5 mt-1"></i>
                <span className="text-gray-300">
                  Luxury Travel Specialists<br />
                  Available Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-blue-600 pt-8 mt-12 text-center">
          <p className="text-gray-300">
            © 2024 Antravi. All rights reserved. Creating luxury travel experiences since 2020.
          </p>
        </div>
      </div>
    </footer>
  );
}
