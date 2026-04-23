import ScrollManager from "@/hooks/ScrollManager";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-[#FAFAF7] text-[#1C1C1A]">
      <ScrollManager />
      <header className="sticky top-0 z-40 border-b border-[#ece5d8] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center">
            <img src="/Antravi_Logo.png" alt="Antravi" className="h-10 w-auto" />
          </Link>
          <Link href="/" className="text-sm uppercase tracking-[0.08em] hover:text-[#C9A96E]">Back to home</Link>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <div className="luxury-card p-7 md:p-10">
          <p className="luxury-label">Legal</p>
          <h1 className="mt-4 font-serif text-[44px] font-light md:text-[56px]">Privacy Policy</h1>

          <p className="mb-6 mt-6 text-[16px] leading-[1.75] text-[#555149]">
            At Antravi, your privacy is not just a formality — it's the
            foundation of the trust we build with every journey. Whether you're
            exploring our site, planning your next getaway, or confirming a
            booking, we handle your personal information with the discretion and
            care you'd expect from a luxury travel curator.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-[30px] mb-3">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-6 text-[#555149] space-y-1">
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
              <h2 className="font-serif text-[30px] mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-[#555149]">
                Your information is used to personalize itineraries, coordinate
                with trusted partners, communicate booking updates, and improve
                your experience. We never sell or misuse your data.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[30px] mb-3">
                3. Cookies & Tracking Technologies
              </h2>
              <p className="text-[#555149]">
                We use cookies to enhance browsing, remember preferences,
                analyze site performance, and suggest relevant content. You may
                disable cookies in your browser at any time.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[30px] mb-3">
                4. Sharing Your Information
              </h2>
              <p className="text-[#555149] mb-2">
                We only share necessary information with trusted partners such
                as:
              </p>
              <ul className="list-disc pl-6 text-[#555149] space-y-1">
                <li>Hotels and resorts</li>
                <li>Airlines and transportation providers</li>
                <li>Local tour operators and service providers</li>
                <li>Payment gateways</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[30px] mb-3">
                5. Data Security
              </h2>
              <p className="text-[#555149]">
                We implement strong security measures to protect against
                unauthorized access, disclosure, or misuse. Only authorized
                personnel may access your data.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[30px] mb-3">
                6. Changes to This Policy
              </h2>
              <p className="text-[#555149]">
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
