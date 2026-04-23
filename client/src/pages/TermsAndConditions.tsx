import ScrollManager from "@/hooks/ScrollManager";
import { Link } from "wouter";

export default function TermsAndConditions() {
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
          <h1 className="mt-4 font-serif text-[44px] font-light md:text-[56px]">Terms & Conditions</h1>

          <p className="mb-6 mt-6 text-[16px] leading-[1.75] text-[#555149]">
            By accessing our website, browsing our services, or making a booking
            with us, you agree to the following Terms & Conditions. These terms
            ensure transparency and protect both you and Antravi. Please review
            them before confirming your travel.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-[30px] mb-3">
                A. Our Services
              </h2>
              <p className="text-[#555149]">
                Antravi is a boutique travel consultancy curating journeys with
                select partners. We act as a facilitator; actual services are
                delivered by hotels, resorts, airlines, and operators.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[30px] mb-3">
                B. Booking & Confirmation
              </h2>
              <p className="text-[#555149]">
                A booking is confirmed upon receipt of payment. You will receive
                a detailed itinerary via email. Please check all details and
                report discrepancies promptly.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[30px] mb-3">
                C. Payments
              </h2>
              <p className="text-[#555149]">
                Payments may be made via secure gateways or bank transfers.
                Prices are in INR and may vary based on availability. Bank
                charges and conversion fees are borne by the client.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[30px] mb-3">
                D. Cancellations & Refunds
              </h2>
              <p className="text-[#555149]">
                Cancellation terms depend on service providers. Refunds (if
                eligible) follow partner policies and may take up to 30 days.
                Some bookings may be non-refundable. Bookings canceled 31+ days
                before departure receive full refund. Within 31 days,
                non-refundable. You may reschedule within 100 days (subject to
                charges and availability).
              </p>
              <p className="text-[#555149]">
                The applicable cancellation policy will be clearly communicated at the time of booking.
                Antravi reserves the right to update or modify these, We recommend reviewing this page periodically to stay informed.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[30px] mb-3">
                E. Responsibilities & Limitations
              </h2>
              <p className="text-[#555149]">
                Antravi is not liable for events beyond our control (e.g.
                natural disasters, strikes, pandemics). Guests are responsible
                for valid documents. Travel risks are the guest’s
                responsibility.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[30px] mb-3">
                F. Guest Conduct
              </h2>
              <p className="text-[#555149]">
                Guests must behave respectfully toward staff and communities.
                Misconduct may result in termination of services without refund.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[30px] mb-3">
                G. Intellectual Property
              </h2>
              <p className="text-[#555149]">
                All website and brand content is property of Antravi and may not
                be used or reproduced without consent.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[30px] mb-3">
                H. Changes
              </h2>
              <p className="text-[#555149]">
                Terms may be updated at any time. Updates take effect
                immediately when posted on our website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[30px] mb-3">
                I. Governing Law
              </h2>
              <p className="text-[#555149]">
                These terms are governed by Indian law, under jurisdiction of
                Hyderabad, Telangana courts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
