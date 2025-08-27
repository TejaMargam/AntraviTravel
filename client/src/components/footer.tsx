import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-2">ANTRAVI</h2>
          <p className="text-xl font-light">Live your Moments.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">
              <i className="fas fa-phone mr-2"></i>
              +91 98765 43210
            </p>
            <p className="mb-4">
              <i className="fas fa-envelope mr-2"></i>
              hello@antravi.com
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-2xl hover:text-blue-200 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl hover:text-blue-200 transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl hover:text-blue-200 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl hover:text-blue-200 transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Office Address</h3>
            <address className="not-italic">
              123 Travel Street<br />
              Luxury District<br />
              Mumbai, Maharashtra 400001<br />
              India
            </address>
          </div>
        </div>

        {/* FAQ Section Placeholder */}
        <div className="mt-16 pt-8 border-t border-blue-500 text-center">
          <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
          <p className="text-blue-200 mb-6">
            Have questions about your Maldives vacation? Check out our comprehensive FAQ section.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <p>• Best time to visit Maldives</p>
            <p>• Visa requirements for Indians</p>
            <p>• What's included in packages</p>
            <p>• Currency and payments</p>
            <p>• Meal plans and dining</p>
            <p>• Alcohol availability</p>
            <p>• Packing essentials</p>
            <p>• Package customization</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500 text-center">
          <p className="text-blue-200">
            © 2024 Antravi. All rights reserved. | Creating extraordinary travel experiences since inception.
          </p>
        </div>
      </div>
    </footer>
  );
}