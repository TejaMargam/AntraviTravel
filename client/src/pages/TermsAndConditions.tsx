import ScrollManager from "@/hooks/ScrollManager";

export default function TermsAndConditions() {
  return (
    <section className="py-20 bg-white">
      <ScrollManager/>
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-700 backdrop-blur-md shadow-sm w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-20 w-full min-w-0">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 min-w-0">
              <a
                href="/"
                className="font-heading text-lg xs:text-xl sm:text-2xl font-bold text-white truncate"
              >
                Antravi
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-black mb-8">
            Terms & Conditions
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            By accessing our website, browsing our services, or making a booking
            with us, you agree to the following Terms & Conditions. These terms
            ensure transparency and protect both you and Antravi. Please review
            them before confirming your travel.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                A. Our Services
              </h2>
              <p className="text-gray-700">
                Antravi is a boutique travel consultancy curating journeys with
                select partners. We act as a facilitator; actual services are
                delivered by hotels, resorts, airlines, and operators.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                B. Booking & Confirmation
              </h2>
              <p className="text-gray-700">
                A booking is confirmed upon receipt of payment. You will receive
                a detailed itinerary via email. Please check all details and
                report discrepancies promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                C. Payments
              </h2>
              <p className="text-gray-700">
                Payments may be made via secure gateways or bank transfers.
                Prices are in INR and may vary based on availability. Bank
                charges and conversion fees are borne by the client.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                D. Cancellations & Refunds
              </h2>
              <p className="text-gray-700">
                Cancellation terms depend on service providers. Refunds (if
                eligible) follow partner policies and may take up to 30 days.
                Some bookings may be non-refundable. Bookings canceled 31+ days
                before departure receive full refund. Within 31 days,
                non-refundable. You may reschedule within 100 days (subject to
                charges and availability).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                E. Responsibilities & Limitations
              </h2>
              <p className="text-gray-700">
                Antravi is not liable for events beyond our control (e.g.
                natural disasters, strikes, pandemics). Guests are responsible
                for valid documents. Travel risks are the guest’s
                responsibility.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                F. Guest Conduct
              </h2>
              <p className="text-gray-700">
                Guests must behave respectfully toward staff and communities.
                Misconduct may result in termination of services without refund.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                G. Intellectual Property
              </h2>
              <p className="text-gray-700">
                All website and brand content is property of Antravi and may not
                be used or reproduced without consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                H. Changes
              </h2>
              <p className="text-gray-700">
                Terms may be updated at any time. Updates take effect
                immediately when posted on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                I. Governing Law
              </h2>
              <p className="text-gray-700">
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
