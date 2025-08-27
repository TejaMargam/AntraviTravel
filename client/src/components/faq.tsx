
export default function FAQ() {
  const faqs = [
    {
      question: "Which is the best time to visit the Maldives?",
      answer: "The Maldives is beautiful year-round, but the best time to visit is between November and April, when the skies are clear and the seas are calm — perfect for honeymoons and beachside moments. That said, we also help travelers plan magical escapes in the off-season, where you can enjoy fewer crowds and better resort value."
    },
    {
      question: "🛬 Do Indians need a visa for the Maldives?",
      answer: "No visa hassles here! Indian passport holders receive a free Visa on Arrival for up to 30 days. All you need is a passport valid for at least 6 months, a confirmed return flight, and your hotel booking — which we'll provide you after confirmation. We'll guide you through everything."
    },
    {
      question: "💸 What's included in Antravi's Maldives packages?",
      answer: "Every Antravi itinerary is crafted around you — but typical inclusions are: Resort accommodation, Airport transfers (speedboat or seaplane), All meals or selected meal plans, Taxes, green fees & travel concierge support. Need something special like a candlelit dinner or overwater spa? Just say the word."
    },
    {
      question: "💳 Which currency should I carry in the Maldives?",
      answer: "While the official currency is Maldivian Rufiyaa (MVR), most resorts prefer US Dollars (USD) for payments. We recommend carrying a mix of USD cash and an international card. No need to exchange currency in advance — we'll guide you based on your resort."
    },
    {
      question: "🍽️ Are meals included in the packages?",
      answer: "Yes — and we help you choose the right meal plan. From bed & breakfast to all-inclusive, we tailor it based on your travel style and budget. Honeymooners often prefer all-inclusive for ease, while families might enjoy flexible dining options."
    },
    {
      question: "🌊 Is alcohol allowed in the Maldives?",
      answer: "Yes — alcohol is available at all private island resorts. However, it's restricted on local islands due to cultural laws. But don't worry — most of our curated resorts include beautiful bars, beach cocktails, and even floating champagne breakfasts!"
    },
    {
      question: "🐠 What should I pack for the Maldives?",
      answer: "Keep it light and breezy. Think: Swimsuits, breathable clothing, sun hats, Reef-safe sunscreen, sunglasses, Optional: GoPro, waterproof pouch, light flip flops. We'll also send you a personalized packing guide before your trip — because we love the little details too."
    },
    {
      question: "🧳 Can I customize my Maldives package with Antravi?",
      answer: "Absolutely — that's what we're known for. Whether it's a romantic split-stay, a private pool villa, or family-friendly excursions, your Maldives holiday is designed around your story. We listen first, then build a vacation you'll never forget."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about your Maldives vacation
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-black mb-4">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
