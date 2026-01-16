import Navbar from "@/components/navbar";
import ScrollManager from "@/hooks/ScrollManager";
import { useLocation } from "wouter";

export default function PrivacyPolicy() {
  const [, navigate] = useLocation();

  return (
    <section className="py-20 bg-white">
      <ScrollManager/>
      {/* Header */}
      <Navbar/>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-black mb-8">
            Privacy Policy
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            At Antravi, your privacy is not just a formality — it's the
            foundation of the trust we build with every journey. Whether you're
            exploring our site, planning your next getaway, or confirming a
            booking, we handle your personal information with the discretion and
            care you'd expect from a luxury travel curator.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Full name</li>
                <li>Contact details (email address, phone number)</li>
                <li>Travel preferences and requirements</li>
                <li>
                  Booking details (dates, destinations, accommodation choices,
                  etc.)
                </li>
                <li>Payment and billing information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700">
                Your information is used to personalize itineraries, coordinate
                with trusted partners, communicate booking updates, and improve
                your experience. We never sell or misuse your data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                3. Cookies & Tracking Technologies
              </h2>
              <p className="text-gray-700">
                We use cookies to enhance browsing, remember preferences,
                analyze site performance, and suggest relevant content. You may
                disable cookies in your browser at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                4. Sharing Your Information
              </h2>
              <p className="text-gray-700 mb-2">
                We only share necessary information with trusted partners such
                as:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Hotels and resorts</li>
                <li>Airlines and transportation providers</li>
                <li>Local tour operators and service providers</li>
                <li>Payment gateways</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                5. Data Security
              </h2>
              <p className="text-gray-700">
                We implement strong security measures to protect against
                unauthorized access, disclosure, or misuse. Only authorized
                personnel may access your data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                6. Changes to This Policy
              </h2>
              <p className="text-gray-700">
                This policy may be updated to reflect new regulations or
                services. Please review this page periodically for the latest
                version.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
