import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/utils/paths";
import reviewsData from "@/data/reviews.json";

function Split({
  title,
  kicker,
  image,
  imageLeft = true,
  children,
}: {
  title: string;
  kicker?: string;
  image: string;
  imageLeft?: boolean;
  children?: ReactNode;
}) {
  const img = (
    <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#ece5d8]">
      <img src={getImagePath(image)} alt="" className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
  const text = (
    <div>
      {kicker ? <p className="luxury-label mb-2">{kicker}</p> : null}
      <h3 className="mb-3 font-serif text-2xl text-[#1C1C1A] md:text-[28px]">{title}</h3>
      {children ? (
        <div className="space-y-3 text-[15px] leading-relaxed text-[#5e5a52] md:text-base">{children}</div>
      ) : null}
    </div>
  );
  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-center">
      {imageLeft ? (
        <>
          {img}
          {text}
        </>
      ) : (
        <>
          {text}
          {img}
        </>
      )}
    </div>
  );
}

export default function ThailandPageContent({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <>
      <section className="luxury-section bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 md:px-8">
          {[
            { l: "Capital", v: "Bangkok (Krung Thep)" },
            { l: "Currency", v: "Thai Baht (฿)" },
            { l: "Language", v: "Thai" },
            { l: "Best season", v: "Year-round (pick region & month)" },
            { l: "Buddhist temples", v: "34,000+" },
            { l: "Avg. summer high", v: "35°C" },
            {
              l: "Visa for Indians",
              v: "60 days visa-free; TDAC mandatory ≥72h before flight or you may be denied boarding.",
            },
          ].map((row) => (
            <div key={row.l} className="luxury-card p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C9A96E]">{row.l}</p>
              <p className="mt-2 text-sm font-medium leading-snug text-[#1C1C1A] md:text-[15px]">{row.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="luxury-section bg-[#F3F1EC]">
        <div className="mx-auto max-w-6xl space-y-12 px-5 md:px-8">
          <Split
            title="A Kingdom Unlike Any Other"
            kicker="About"
            image="https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=1400&h=900&fit=crop&q=80"
            imageLeft
          >
            <p>
              Thailand sits at the heart of mainland Southeast Asia, bordered by Myanmar, Laos, Cambodia and Malaysia. It is one of the few countries in
              the region never colonised by a European power — a fact that infuses its people with a quiet pride and its culture with remarkable continuity.
            </p>
            <p>
              For Indian travellers, Thailand has long been the gateway to Southeast Asia — a four-hour flight away yet feeling entirely another world. In
              2024, India became Thailand&apos;s second-largest source of international tourists, with over 1.8 million visitors making the crossing.
            </p>
          </Split>

          <Split title="Speak a Little Thai" kicker="Language" image="https://images.unsplash.com/photo-1553603227-2358aabe821e?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <p>
              Thai is a tonal language — the same syllable can mean different things depending on pitch. But locals absolutely love it when visitors try, and
              even a few words earn you genuine warmth.
            </p>
          </Split>
        </div>
      </section>

      <section className="luxury-section bg-white">
        <div className="mx-auto max-w-6xl space-y-14 px-5 md:px-8">
          <div className="text-center">
            <p className="luxury-label mb-2">Food</p>
            <h2 className="font-serif text-[34px] md:text-[48px]">Eat Like a Local</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[#5e5a52]">
              Thai cuisine is a masterclass in balance — sweet, sour, salty, spicy and umami in every bowl. For Indian palates, it often feels surprisingly
              familiar yet thrillingly different.
            </p>
          </div>
          <Split title="Pad Thai — Street food icon" image="https://images.unsplash.com/photo-1559314809-0d155014e29e?w=1200&h=800&fit=crop&q=80" imageLeft>
            <p>
              Stir-fried rice noodles with egg, bean sprouts, green onions and your choice of tofu, prawn or chicken — topped with crushed peanuts and a squeeze
              of lime. The dish that made Thailand famous worldwide.
            </p>
          </Split>
          <Split title="Green Curry (Gaeng Keow Wan)" kicker="Classic curry" image="https://images.unsplash.com/photo-1455619452474-d7be8d8e438a?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <p>
              Aromatic green chilli paste cooked in rich coconut milk with Thai basil, kaffir lime leaves and vegetables. Fragrant, creamy and deceptively
              spicy — always served with jasmine rice.
            </p>
          </Split>
          <Split title="Som Tum — Northern specialty" image="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=1200&h=800&fit=crop&q=80" imageLeft>
            <p>
              Shredded unripe papaya pounded in a mortar with dried shrimp, chillies, lime juice, fish sauce and palm sugar. Explosive flavour in every bite —
              ask for &quot;mai phet&quot; if you need less heat.
            </p>
          </Split>
          <Split title="Khao Pad — Thai fried rice" kicker="Comfort food" image="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <p>
              Jasmine rice wok-fried with garlic, egg, soy sauce and your choice of protein — finished with cucumber slices, spring onion and a wedge of lime.
              The Thai answer to biryani.
            </p>
          </Split>
          <Split title="Mango Sticky Rice — Must-try dessert" image="https://images.unsplash.com/photo-1626803777461-44809ea3c870?w=1200&h=800&fit=crop&q=80" imageLeft>
            <p>
              Glutinous sticky rice soaked in sweet coconut milk, served alongside perfectly ripe mango slices. Simple, seasonal and sublime — best March
              through May when mangoes peak.
            </p>
          </Split>
          <Split title="Vegetarian & vegan note" image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <p>
              Thai cuisine uses fish sauce (nam pla) and shrimp paste extensively. Always say &quot;jay&quot; (เจ) for vegan or &quot;mangsawirat&quot; (มังสวิรัติ) for
              vegetarian when ordering. Buddhist vegan restaurants (ร้านอาหารเจ) are found across the country.
            </p>
          </Split>
        </div>
      </section>

      <section className="luxury-section bg-[#F3F1EC]">
        <div className="mx-auto max-w-6xl space-y-14 px-5 md:px-8">
          <div className="text-center">
            <p className="luxury-label mb-2">Culture & customs</p>
            <h2 className="font-serif text-[34px] md:text-[48px]">The Soul of Thailand</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[#5e5a52]">
              Thai culture is shaped by Theravada Buddhism, reverence for the royal family and respect for harmony and face. A few fundamentals transform your
              experience from tourist to traveller.
            </p>
          </div>
          <Split title="The Wai — Thai greeting" image="https://images.unsplash.com/photo-1528181304800-259b08848561?w=1200&h=800&fit=crop&q=80" imageLeft>
            <p>
              Press palms together at chest level, fingers pointing up, and bow your head slightly. The higher your hands, the greater the respect. Never
              initiate a wai with children or service workers — they wai you first. Return a wai when given one.
            </p>
          </Split>
          <Split title="Royal family — Profound respect" image="https://images.unsplash.com/photo-1566127443509-0952f49ef2d8?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <p>
              The monarchy is sacred in Thailand. The lèse-majesté law (Article 112) means criticism of the royal family is a criminal offence. When the royal
              anthem plays in cinemas or public spaces, everyone stands — visitors should do the same.
            </p>
          </Split>
          <Split title="Head & feet — Sacred hierarchy" image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop&q=80" imageLeft>
            <p>
              The head is the most sacred part of the body — never touch a Thai person&apos;s head. Feet are the lowest — don&apos;t point your feet at people,
              monks or Buddha images. Remove shoes before entering temples and many homes.
            </p>
          </Split>
          <Split title="Temple etiquette" image="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <p>
              Dress conservatively — cover shoulders and knees. Sarongs are usually available to borrow at temple gates. Women must never touch or hand items
              directly to a monk. Speak quietly; temples are places of worship, not merely photo backdrops.
            </p>
          </Split>
          <Split title="&quot;Saving face&quot; — Kreng jai" image="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=1200&h=800&fit=crop&q=80" imageLeft>
            <p>
              Thais avoid confrontation and public criticism to preserve harmony. If a Thai person smiles when something goes wrong, it is not indifference — it
              is courtesy. Raising your voice or showing frustration in public is deeply disrespectful and counterproductive.
            </p>
          </Split>
          <Split title="Festivals to plan around" image="https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-[#1C1C1A]">Songkran (Apr 13–15):</strong> Thai New Year water festival.
              </li>
              <li>
                <strong className="text-[#1C1C1A]">Loy Krathong (Nov):</strong> Lotus floats and lanterns at night.
              </li>
              <li>
                <strong className="text-[#1C1C1A]">Vegetarian Festival (Oct):</strong> Nine days in Phuket with street performances.
              </li>
            </ul>
          </Split>
          <Split title="Art, craft & silk" image="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop&q=80" imageLeft>
            <p>
              From Chiang Mai&apos;s hand-painted umbrellas and silver jewellery to world-renowned Thai silk, shopping for handicrafts directly supports local
              artisan communities.
            </p>
          </Split>
          <Split title="The elephant — National symbol" image="https://images.unsplash.com/photo-1551986789-71a47064c384?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <p>
              Choose elephant sanctuaries that prioritise welfare — avoid attractions where elephants perform or give rides. Ethical sanctuaries let you walk,
              feed and bathe elephants with dignity.
            </p>
          </Split>
        </div>
      </section>

      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video key="thailand-exp" autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/videos/thailand.mp4" type="video/mp4" />
            <track kind="captions" src="/captions/thailand.vtt" srcLang="en" label="English captions" default />
          </video>
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <p className="luxury-label !text-white/90">Experiences & attractions</p>
          <h2 className="mt-3 font-serif text-[38px] font-light leading-tight md:text-[56px]">Where to Go, What to Feel</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/90 md:text-xl">
            Thailand rewards both the beach-lover and the culture-seeker — from Bangkok&apos;s neon night markets to the silence of a hill tribe village at dawn.
          </p>
        </div>
      </section>

      <section className="luxury-section bg-white">
        <div className="mx-auto max-w-6xl space-y-16 px-5 md:px-8">
          <div>
            <p className="luxury-label">Bangkok · Central Thailand</p>
            <h2 className="mt-2 font-serif text-[34px] md:text-[44px]">Bangkok — The Unstoppable City</h2>
            <p className="mt-4 max-w-3xl text-[#5e5a52]">
              Best for everyone. Centuries-old temples beside rooftop pools; street food for less than a coffee back home. The Grand Palace and Wat Phra Kaew
              alone justify the journey — then Chatuchak, khlong longtails, and the city after dark.
            </p>
          </div>
          <Split title="Grand Palace & Wat Phra Kaew" image="https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=1200&h=800&fit=crop&q=80" imageLeft>
            <p>
              The most iconic landmark in Thailand — the Grand Palace was the official residence of Thai kings for 150 years. Inside, Wat Phra Kaew holds the
              Emerald Buddha. Go early to beat crowds. Entry about ฿500 (~₹1,200).
            </p>
          </Split>
          <Split title="Wat Pho — The Reclining Buddha" image="https://images.unsplash.com/photo-1528181304800-259b08848561?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <p>
              Five minutes from the Grand Palace — a 46-metre golden reclining Buddha and the birthplace of traditional Thai massage. On-site massage around
              ฿260 (~₹620).
            </p>
          </Split>
          <Split title="Chao Phraya River & the khlongs" image="https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&h=800&fit=crop&q=80" imageLeft>
            <p>
              Longtail through Thonburi&apos;s narrow canals past wooden houses and shrines, or ride the Chao Phraya Express Boat for skyline views on a budget.
            </p>
          </Split>
          <Split title="Chatuchak Weekend Market" image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <p>15,000+ stalls across 35 acres — open Saturday & Sunday. Arrive before 10am for cooler, thinner crowds.</p>
          </Split>
          <Split title="Rooftop bars & Bangkok nightlife" image="https://images.unsplash.com/photo-1519452573304-594f9f41efcc?w=1200&h=800&fit=crop&q=80" imageLeft>
            <p>Vertigo, Sky Bar at Lebua, Octave — breathtaking views. Drinks often ฿400–฿700 but worth it once.</p>
          </Split>
          <Split title="Street food capital of the world" image="https://images.unsplash.com/photo-1559314809-0d155014e29e?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <p>Yaowarat (Chinatown), Khao San, Or Tor Kor — pad Thai, boat noodles, mango sticky rice from carts at ฿40–฿80.</p>
          </Split>
          <div className="luxury-card border-l-4 border-[#C9A96E] p-6">
            <p className="font-serif text-xl text-[#1C1C1A]">Antravi&apos;s take</p>
            <p className="mt-2 text-[#5e5a52]">
              We recommend at least 3 nights in Bangkok. Don&apos;t rush the temples — allow a full day for the Grand Palace area. The BTS connects most major
              spots when you&apos;re short on time.
            </p>
          </div>
        </div>
      </section>

      <section className="luxury-section bg-[#F3F1EC]">
        <div className="mx-auto max-w-6xl space-y-14 px-5 md:px-8">
          <div>
            <p className="luxury-label">Pattaya · Eastern Gulf · ~2 hrs from Bangkok</p>
            <h2 className="mt-2 font-serif text-[34px] md:text-[44px]">Pattaya — India&apos;s favourite Thai beach city</h2>
            <p className="mt-4 text-[#5e5a52]">
              Indian-friendly in the best way — familiar aromas, Hindi signboards, Bollywood in beach bars — plus Coral Island, Sanctuary of Truth, Nong Nooch
              and Alcazar.
            </p>
          </div>
          <Split title="Koh Larn (Coral Island)" image="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop&q=80" imageLeft />
          <Split title="Sanctuary of Truth" image="https://images.unsplash.com/photo-1552733407-5d5c46c032bb?w=1200&h=800&fit=crop&q=80" imageLeft={false} />
          <Split title="Nong Nooch Tropical Garden" image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop&q=80" imageLeft />
          <Split title="Alcazar Cabaret Show" image="https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&h=800&fit=crop&q=80" imageLeft={false} />
          <Split title="Pattaya Floating Market" image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop&q=80" imageLeft>
            <p>Four regions of Thailand in one place — stilt shops, regional snacks, and paddle boats through the canals.</p>
          </Split>
          <Split title="Buddha Mountain (Khao Chi Chan)" image="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <p>130-metre laser-etched Buddha on a cliff — peaceful gardens, free entry, about 15 minutes south of Pattaya.</p>
          </Split>
          <div className="luxury-card p-6">
            <p className="font-serif text-xl">Antravi&apos;s take</p>
            <p className="mt-2 text-[#5e5a52]">
              Pattaya works brilliantly as a 2-night add-on to Bangkok — road transfer only, beach time without a domestic flight. Vegetarian Indian food is
              especially easy here.
            </p>
          </div>
        </div>
      </section>

      <section className="luxury-section bg-white">
        <div className="mx-auto max-w-6xl space-y-14 px-5 md:px-8">
          <div>
            <p className="luxury-label">Phuket · Andaman Sea</p>
            <h2 className="mt-2 font-serif text-[34px] md:text-[44px]">Phuket — Where luxury meets the sea</h2>
            <p className="mt-4 text-[#5e5a52]">
              Thailand&apos;s largest island — blue water, world-class resorts, Patong energy, and day trips to Phi Phi and Phang Nga. Domestic flights connect
              from Bangkok.
            </p>
          </div>
          <Split title="Patong Beach" image="https://images.unsplash.com/photo-1589394815800-2cda9be1c095?w=1200&h=800&fit=crop&q=80" imageLeft />
          <Split title="Phang Nga Bay — James Bond Island" image="https://images.unsplash.com/photo-1506665531195-3566aca2be61?w=1200&h=800&fit=crop&q=80" imageLeft={false} />
          <Split title="Old Phuket Town" image="https://images.unsplash.com/photo-1598971861713-54c16ae78e94?w=1200&h=800&fit=crop&q=80" imageLeft />
          <Split title="Big Buddha Phuket" image="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=800&fit=crop&q=80" imageLeft={false} />
          <div className="luxury-card p-6">
            <p className="font-serif text-xl">Antravi&apos;s take</p>
            <p className="mt-2 text-[#5e5a52]">
              Patong for buzz, Kata for families, Surin for luxury, Nai Harn for quiet — we ask how you travel before recommending where to stay.
            </p>
          </div>
        </div>
      </section>

      <section className="luxury-section bg-[#F3F1EC]">
        <div className="mx-auto max-w-6xl space-y-14 px-5 md:px-8">
          <div>
            <p className="luxury-label">Krabi · Andaman coast</p>
            <h2 className="mt-2 font-serif text-[34px] md:text-[44px]">Krabi — The most beautiful coastline</h2>
            <p className="mt-4 text-[#5e5a52]">
              Limestone cliffs, turquoise water, Railay only by longtail, rock climbing, Phi Phi Maya Bay rules, and Tiger Cave Temple sunrise.
            </p>
          </div>
          <Split title="Railay Beach" image="https://images.unsplash.com/photo-1506665531195-3566aca2be61?w=1200&h=800&fit=crop&q=80" imageLeft />
          <Split title="Phi Phi Islands & Maya Bay" image="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=800&fit=crop&q=80" imageLeft={false} />
          <div className="luxury-card p-6">
            <p className="font-serif text-xl">Antravi&apos;s take</p>
            <p className="mt-2 text-[#5e5a52]">Pair Phuket with Krabi — fly into Phuket, then ferry ~1.5 hrs for a completely different rhythm.</p>
          </div>
        </div>
      </section>

      <section className="luxury-section bg-white">
        <div className="mx-auto max-w-6xl space-y-12 px-5 md:px-8">
          <div>
            <p className="luxury-label">Chiang Mai · Northern Thailand</p>
            <h2 className="mt-2 font-serif text-[34px] md:text-[44px]">Chiang Mai — The soul of the north</h2>
            <p className="mt-4 text-[#5e5a52]">
              Cooler air, moated old city, hundreds of temples, cooking schools, Doi Suthep, ethical elephants, Sunday Walking Street and Doi Inthanon day trips.
            </p>
          </div>
          <Split title="Doi Suthep Temple" image="https://images.unsplash.com/photo-1598935898639-9a557b2f2063?w=1200&h=800&fit=crop&q=80" imageLeft />
          <Split title="Ethical elephant sanctuaries" image="https://images.unsplash.com/photo-1551986789-71a47064c384?w=1200&h=800&fit=crop&q=80" imageLeft={false} />
        </div>
      </section>

      <section className="luxury-section bg-[#F3F1EC]">
        <div className="mx-auto max-w-6xl space-y-12 px-5 md:px-8">
          <div>
            <p className="luxury-label">Koh Samui · Gulf of Thailand</p>
            <h2 className="mt-2 font-serif text-[34px] md:text-[44px]">Koh Samui — Tropical luxury island</h2>
            <p className="mt-4 text-[#5e5a52]">
              Calmer Gulf waters, private pool villas, Chaweng beach life, Big Buddha, world-class spas, and Koh Tao day trips.
            </p>
          </div>
          <Split title="Chaweng Beach" image="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&h=800&fit=crop&q=80" imageLeft />
        </div>
      </section>

      <section className="luxury-section bg-white">
        <div className="mx-auto max-w-6xl space-y-12 px-5 md:px-8">
          <div>
            <p className="luxury-label">Koh Phangan · Near Koh Samui</p>
            <h2 className="mt-2 font-serif text-[34px] md:text-[44px]">Koh Phangan — Full moons & quiet north</h2>
            <p className="mt-4 text-[#5e5a52]">Haad Rin parties or Thong Nai Pan serenity — we help you pick the side that fits your dates and style.</p>
          </div>
          <Split title="Full Moon Party & north beaches" image="https://images.unsplash.com/photo-1470071459604-3b5ec3afefe2?w=1200&h=800&fit=crop&q=80" imageLeft />
        </div>
      </section>

      <section className="luxury-section bg-[#F3F1EC]">
        <div className="mx-auto max-w-4xl space-y-8 px-5 md:px-8">
          <h2 className="font-serif text-[34px] md:text-[42px]">When to visit — Choosing your perfect season</h2>
          <p className="text-[#5e5a52]">
            Cool & Dry (Nov–Feb), Hot (Mar–May), Wet Monsoon (Jun–Oct) — rains vary by coast. May–October can mean 30–50% cheaper hotels with fewer crowds if
            you accept occasional showers.
          </p>
        </div>
      </section>

      <section className="luxury-section bg-white">
        <div className="mx-auto max-w-4xl space-y-6 px-5 md:px-8">
          <h2 className="font-serif text-[34px]">Getting there — Flights from India</h2>
          <p className="text-[#5e5a52]">
            Major airports: Bangkok Suvarnabhumi (BKK), Phuket (HKT), Chiang Mai (CNX). Most Indian routes connect via BKK. Best fares often appear 6–10
            weeks out; Tuesday/Wednesday departures are frequently cheaper. Domestic flights BKK → islands often ₹5,000–₹8,000 approx.
          </p>
          <p className="text-[#5e5a52]">
            <strong className="text-[#1C1C1A]">Visa update:</strong> Indian passport holders receive visa-free entry for stays up to 60 days. TDAC must be
            completed at least 72 hours before departure.
          </p>
        </div>
      </section>

      <section className="luxury-section bg-[#F3F1EC]">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="mb-6 font-serif text-[34px]">Before you land</h2>
          <ol className="list-decimal space-y-4 pl-6 text-[#5e5a52]">
            <li>
              <strong className="text-[#1C1C1A]">Local SIM on arrival</strong> — AIS / DTAC / True tourist SIMs at BKK (~₹500–₹900).
            </li>
            <li>
              <strong className="text-[#1C1C1A]">Use Grab</strong> — safer and clearer than street taxis in cities.
            </li>
            <li>
              <strong className="text-[#1C1C1A]">Cash is still king</strong> — carry baht; ATMs charge per withdrawal.
            </li>
            <li>
              <strong className="text-[#1C1C1A]">Dress for temples</strong> — scarf for shoulders/knees.
            </li>
            <li>
              <strong className="text-[#1C1C1A]">Hydration & heat</strong> — 3–4L water daily; skip tap water.
            </li>
            <li>
              <strong className="text-[#1C1C1A]">Travel insurance</strong> — especially with diving or motorbike plans.
            </li>
          </ol>
        </div>
      </section>

      <section className="luxury-section bg-white">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="mb-8 text-center font-serif text-[34px] md:text-[42px]">Antravi for Thailand</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { t: "Built for Indian travellers", d: "Vegetarian & Jain needs, realistic airport pickup times, and WhatsApp support when plans shift." },
              { t: "Every trip is custom-made", d: "No fixed packages — we design around your group, dates, budget and pace." },
              { t: "Support when you need it", d: "Restaurant swaps, add-on day trips, and fixes from India time zones you can actually reach." },
              { t: "Transparent pricing", d: "What’s included is clear before you pay — no surprise resort fees from us." },
            ].map((x) => (
              <div key={x.t} className="luxury-card p-6">
                <h3 className="font-serif text-xl text-[#1C1C1A]">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5e5a52]">{x.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="mb-4 text-center font-serif text-2xl">Trusted by real travellers</h3>
            <p className="mx-auto mb-6 max-w-2xl text-center text-[#5e5a52]">
              Read what guests say — many of our reviews come from Hyderabad, Bangalore, Mumbai and Delhi.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {reviewsData.slice(0, 3).map((r) => (
                <div key={r.id} className="luxury-card p-5 text-sm text-[#5e5a52]">
                  <p className="italic">&ldquo;{r.text.slice(0, 140)}{r.text.length > 140 ? "…" : ""}&rdquo;</p>
                  <p className="mt-3 font-medium text-[#1C1C1A]">{r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F3F1EC]">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="mb-4 font-serif text-[32px] md:text-[40px]">Plan your Thailand vacation with Antravi</h2>
          <p className="mb-8 text-lg text-[#5e5a52]">Tell us your travel dates & preferences — we&apos;ll create a personalised itinerary just for you.</p>
          <Button onClick={onOpenForm} size="lg" className="luxury-cta rounded-full px-8 py-3 text-sm text-white">
            Reserve my Thailand vacation now
          </Button>
        </div>
      </section>
    </>
  );
}
