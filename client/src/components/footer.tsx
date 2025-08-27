
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                <i className="fas fa-compass text-white text-2xl"></i>
              </div>
              <span className="font-heading text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                ANTRAVI
              </span>
            </div>
            
            <p className="text-xl mb-6 text-gray-300 leading-relaxed max-w-md">
              Transforming dreams into extraordinary adventures. 
              Discover the world's most incredible destinations with expert guidance.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: "fab fa-instagram", href: "#" },
                { icon: "fab fa-facebook-f", href: "#" },
                { icon: "fab fa-twitter", href: "#" },
                { icon: "fab fa-youtube", href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-8 text-white">Explore</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Destinations", href: "/destinations" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-8 text-white">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:hello@antravi.com" className="text-white hover:text-blue-400 transition-colors">
                    hello@antravi.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+1-800-ANTRAVI" className="text-white hover:text-blue-400 transition-colors">
                    +1 (800) ANTRAVI
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <p className="text-gray-300">Office</p>
                  <p className="text-white">
                    123 Travel Lane<br />
                    Adventure City, AC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg">
              © 2024 Antravi. All rights reserved. Crafted with ❤️ for adventurers.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
