import Navbar from "@/components/navbar";
import ScrollManager from "@/hooks/ScrollManager";
import { useLocation } from "wouter";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function TermsAndConditions() {
  const [, navigate] = useLocation();
  const [sectionRef, sectionVisible] = useIntersectionObserver();

  return (
    <section ref={sectionRef} className={`py-20 bg-gray-900 ${sectionVisible ? "animate-fade-in-up" : ""}`}>
      <ScrollManager/>
      {/* Header */}
      <Navbar/>
      <div className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
            Terms & Conditions
          </h1>

          <p className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 text-gray-300 leading-relaxed mb-6">
            By accessing our website, browsing our services, or making a booking
            with us, you agree to the following Terms & Conditions. These terms
            ensure transparency and protect both you and Antravi. Please review
            them before confirming your travel.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">
                A. Our Services
              </h2>
              <p className="text-gray-300">
                Antravi is a boutique travel consultancy curating journeys with
                select partners. We act as a facilitator; actual services are
                delivered by hotels, resorts, airlines, and operators.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">
                B. Booking & Confirmation
              </h2>
              <p className="text-gray-300">
                A booking is confirmed upon receipt of payment. You will receive
                a detailed itinerary via email. Please check all details and
                report discrepancies promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">
                C. Payments
              </h2>
              <p className="text-gray-300">
                Payments may be made via secure gateways or bank transfers.
                Prices are in INR and may vary based on availability. Bank
                charges and conversion fees are borne by the client.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">
                D. Cancellations & Refunds
              </h2>
              <p className="text-gray-300">
                Cancellation terms depend on service providers. Refunds (if
                eligible) follow partner policies and may take up to 30 days.
                Some bookings may be non-refundable. Bookings canceled 31+ days
                before departure receive full refund. Within 31 days,
                non-refundable. You may reschedule within 100 days (subject to
                charges and availability).
              </p>
              <p className="text-gray-300">
                The applicable cancellation policy will be clearly communicated at the time of booking.
                Antravi reserves the right to update or modify these, We recommend reviewing this page periodically to stay informed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">
                E. Responsibilities & Limitations
              </h2>
              <p className="text-gray-300">
                Antravi is not liable for events beyond our control (e.g.
                natural disasters, strikes, pandemics). Guests are responsible
                for valid documents. Travel risks are the guest’s
                responsibility.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">
                F. Guest Conduct
              </h2>
              <p className="text-gray-300">
                Guests must behave respectfully toward staff and communities.
                Misconduct may result in termination of services without refund.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">
                G. Intellectual Property
              </h2>
              <p className="text-gray-300">
                All website and brand content is property of Antravi and may not
                be used or reproduced without consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">
                H. Changes
              </h2>
              <p className="text-gray-300">
                Terms may be updated at any time. Updates take effect
                immediately when posted on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">
                I. Governing Law
              </h2>
              <p className="text-gray-300">
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
