import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-2">ANTRAVI</h2>
          <p className="text-xl font-light">Live your Moments.</p>
        </div>
        {/* Contact Information, Social Media, Office Address, Terms and conditions*/}
        <div className="flex justify-around text-center md:text-left flex-wrap">
          <div>
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.instagram.com/the_antravi?utm_source=qr&igsh=cGpxdzNzMDhmZGV2"
                  className="text-2xl hover:text-blue-200 transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <a href="#" className="text-2xl hover:text-blue-200 transition-colors">
                  <i className="fab fa-facebook"></i>
                </a> */}
                {/* <a href="#" className="text-2xl hover:text-blue-200 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a
                  href="https://youtube.com/@theantravi?si=pyRpR-qhwvsgnS3v"
                  className="text-2xl hover:text-blue-200 transition-colors"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">
                <i className="fas fa-phone mr-2"></i>
                +91 9849981075
              </p>
              {/* <p className="mb-4">
                <i className="fas fa-envelope mr-2"></i>
                hello@antravi.com
              </p> */}
            </div>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Office Address</h3>
            <address className="not-italic">
              we work 13th floor, building no :09
              <br />
              K Raheja Mindspace, Madhapur
              <br />
              Hyderabad, Telangana 500081
              <br />
              India
            </address>
          </div>

          {/* Terms and conditions */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <p className="mb-2">
              <Link
                href="/terms"
                className="hover:text-blue-200 transition-colors"
              >
                Terms & Conditions
              </Link>
              <br />
              <Link
                href="/privacy"
                className="hover:text-blue-200 transition-colors"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        {/* FAQ Section Placeholder */}
        {/* <div className="mt-16 pt-8 border-t border-blue-500 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-blue-200 mb-6">
            Have questions about your Maldives vacation? Check out our
            comprehensive FAQ section.
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
        </div> */}

        <div className="mt-12 pt-8 border-t border-blue-500 text-center">
          <p className="text-blue-200">© 2025 Antravi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
