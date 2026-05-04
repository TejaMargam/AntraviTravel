import { useMemo, useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import resortsData from "@/data/maldives/resorts.json";
import reviewsData from "@/data/reviews.json";
import FAQ from "@/components/faq";
import ScrollManager from "@/hooks/ScrollManager";
import { getImagePath } from "@/utils/paths";
import { Link } from "wouter";
import faqsData from "@/data/maldives/faqs.json";
import { TravelForm } from "@/components/TravelForm";

interface Resort {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  tag: string;
  images: string[];
  rating: number;
  "StartsFrom ": string;
  duration: string;
  location: string;
  features: string[];
  amenities: string[];
  roomTypes: string[];
  filterTags?: string[];
}

const FILTER_OPTIONS = ["All", "4-star", "5-star", "Luxury"] as const;
type FilterKey = (typeof FILTER_OPTIONS)[number];

const EXPERIENCE_CARDS: { title: string; image: string }[] = [
  { title: "Overwater villas", image: "https://images.unsplash.com/photo-1573843981264-51130c4b12d6?w=800&h=1000&fit=crop&q=80" },
  { title: "All Inclusive Resorts", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=1000&fit=crop&q=80" },
  { title: "Luxury Resorts", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=1000&fit=crop&q=80" },
  { title: "Private Pool Villas", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=1000&fit=crop&q=80" },
  { title: "Honeymoon Escapes", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=1000&fit=crop&q=80" },
  { title: "Family Vacation", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=1000&fit=crop&q=80" },
  { title: "Activities", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=1000&fit=crop&q=80" },
];

const LUXURY_RESORT_NAMES = [
  "JW Marriott Kaafu Atoll",
  "Anantara Kihavah Maldives Villas",
  "The St. Regis Maldives Vommuli Resort",
  "Anantara Veli Maldives Resort",
  "Furaveri Maldives",
  "Anantara Dhigu Maldives Resort",
  "The Ritz-Carlton Maldives, Fari Islands",
];

const BRAND_NAMES = [
  "JW Marriott Kaafu Atoll",
  "Anantara Kihavah",
  "Anantara Veli",
  "Anantara Dhigu",
  "Le Méridien",
  "Hilton",
  "The Westin",
  "NH Collection",
  "NH Hotels & Resorts",
  "St. Regis",
  "Sun Siyam",
  "Centara Collection",
  "Reethi Faru",
  "Hard Rock",
  "Sheraton",
  "SAii",
  "Halcyon Private Island",
  "Colours of OBLU",
  "Brennia Kottefaru",
  "Grand Park Kodhipparu",
  "Holiday Inn Kandooma",
  "Nooe Kunaavashi",
  "Villa Nautica",
  "Medhufushi Island Resort",
  "Furaveri Maldives",
];

function SplitBlock({
  title,
  kicker,
  children,
  image,
  imageLeft = true,
}: {
  title: string;
  kicker?: string;
  children: ReactNode;
  image: string;
  imageLeft?: boolean;
}) {
  const img = (
    <div className="aspect-[4/3] md:aspect-square overflow-hidden rounded-xl bg-[#ece5d8]">
      <img src={getImagePath(image)} alt="" className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
  const text = (
    <div>
      {kicker && <p className="luxury-label mb-2">{kicker}</p>}
      <h3 className="font-serif text-2xl md:text-3xl text-[#1C1C1A] mb-4">{title}</h3>
      <div className="text-[#5e5a52] leading-relaxed space-y-3 text-[15px] md:text-base">{children}</div>
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

export default function Resorts() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedResort, setSelectedResort] = useState<Resort | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [resortFilter, setResortFilter] = useState<FilterKey>("All");

  const handlePlanClick = () => setIsFormOpen(true);

  const renderStars = (rating: number) =>
    [...Array(5)].map((_, i) => (
      <i key={i} className={`fas fa-star ${i < rating ? "text-yellow-400" : "text-gray-300"}`} />
    ));

  const resorts: Resort[] = resortsData as Resort[];

  const filteredResorts = useMemo(() => {
    if (resortFilter === "All") return resorts;
    return resorts.filter((r) => (r.filterTags ?? []).includes(resortFilter));
  }, [resorts, resortFilter]);

  const handleResortClick = (resort: Resort) => {
    setSelectedResort(resort);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedResort) {
      setSelectedImageIndex((prev) => (prev === selectedResort.images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = () => {
    if (selectedResort) {
      setSelectedImageIndex((prev) => (prev === 0 ? selectedResort.images.length - 1 : prev - 1));
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1C1C1A]">
      <ScrollManager />
      <header className="sticky top-0 z-40 border-b border-[#ece5d8] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center">
            <img src="/Antravi_Logo.png" alt="Antravi" className="h-10 w-auto" />
          </Link>
          <Link href="/" className="text-sm uppercase tracking-[0.08em] hover:text-[#C9A96E]">
            Back to home
          </Link>
        </div>
      </header>

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/videos/maldives.mp4" type="video/mp4" />
            <track kind="captions" src="/captions/maldives.vtt" srcLang="en" label="English captions" default />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <p className="luxury-label !text-white/90">Maldives</p>
          <h1 className="mb-4 font-serif text-[40px] font-light leading-[1.08] tracking-tight md:text-[56px]">
            Experience the Maldives with Antravi
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light tracking-wide text-white/92 md:text-xl">
            Where every part of your vacation is thoughtfully arranged, before you even arrive.
          </p>
          <button type="button" onClick={handlePlanClick} className="luxury-cta rounded-full px-8 py-3 text-sm font-semibold text-white">
            Reserve your Maldives vacation
          </button>
        </div>
      </section>

      <section className="luxury-section bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="mb-10 text-center font-serif text-[32px] md:text-[42px]">Explore by Experience</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCE_CARDS.map((c) => (
              <button
                key={c.title}
                type="button"
                onClick={handlePlanClick}
                className="group luxury-card overflow-hidden p-0 text-left shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={getImagePath(c.image)}
                    alt={c.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-[#ece5d8] bg-[#FAFAF7] px-4 py-4">
                  <p className="font-serif text-lg text-[#1C1C1A]">{c.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-section bg-[#F3F1EC]">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="mb-6 font-serif text-[32px] md:text-[44px]">Maldives — The World&apos;s Most Exclusive Island Escape</h2>
          <p className="text-lg leading-relaxed text-[#5e5a52]">
            The Maldives is the definition of luxury travel — a collection of 1,000+ coral islands in the Indian Ocean, known for overwater villas,
            crystal-clear lagoons, and private island resorts.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#5e5a52]">
            For Indian travellers, Maldives is the fastest way to experience internationally — just a short flight, but a completely different world. No
            crowds, no noise, just ocean, privacy, and world-class hospitality.
          </p>
        </div>
      </section>

      <section className="luxury-section bg-white" id="resorts">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-serif text-[34px] md:text-[44px]">Resorts we work with</h2>
              <p className="mt-2 max-w-xl text-[#5e5a52]">Filter by category — tap a resort card for full details.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTER_OPTIONS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setResortFilter(f)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition ${
                    resortFilter === f ? "border-[#C9A96E] bg-[#C9A96E] text-white" : "border-[#e8e0d1] bg-white text-[#6b665f] hover:border-[#C9A96E]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {filteredResorts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredResorts.map((resort) => (
                <div key={resort.id} className="luxury-card group cursor-pointer overflow-hidden" onClick={() => handleResortClick(resort)}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={getImagePath(resort.images[0])}
                      alt={resort.name}
                      width={400}
                      height={300}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                    />
                    {resort.tag ? (
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-[#6b665f] backdrop-blur-sm">
                        {resort.tag}
                      </div>
                    ) : null}
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex flex-wrap gap-1">
                      {(resort.filterTags ?? []).map((t) => (
                        <Badge key={t} variant="outline" className="border-[#e8e0d1] text-[10px] uppercase tracking-wider">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="mb-2 font-serif text-[24px] font-normal text-[#1C1C1A] md:text-[28px]">{resort.name}</h3>
                    <p className="mb-3 text-sm leading-relaxed text-[#5b564f]">{resort.shortDescription}</p>
                    <div className="mb-3 flex space-x-1">{renderStars(resort.rating)}</div>
                    <div className="mb-3 flex items-center text-sm text-[#746e63]">
                      <i className="fas fa-map-marker-alt mr-2" />
                      {resort.location}
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-sm text-[#746e63]">Starting from</span>
                        <div className="text-lg font-semibold text-[#C9A96E]">{resort["StartsFrom "]}</div>
                        {resort.duration ? <div className="text-sm text-[#746e63]">{resort.duration}</div> : null}
                      </div>
                      <span className="text-sm font-medium text-[#1C1C1A]">View details</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-[#5e5a52]">No resorts match this filter. Try &quot;All&quot;.</p>
          )}
        </div>
      </section>

      <section className="luxury-section bg-[#1C1C1A] text-white">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="mb-4 font-serif text-[32px] md:text-[40px] text-[#f5f0e6]">Luxury resorts</h2>
          <p className="mb-10 text-white/75">Ultra-premium stays including JW Marriott, Anantara, St. Regis, The Ritz-Carlton, and more.</p>
          <ul className="mb-8 grid gap-3 text-left text-sm text-white/90 sm:grid-cols-2">
            {LUXURY_RESORT_NAMES.map((n) => (
              <li key={n} className="flex items-center gap-2 border-b border-white/10 pb-2">
                <i className="fas fa-gem text-[#C9A96E]" />
                {n}
              </li>
            ))}
          </ul>
          <p className="rounded-lg border border-[#C9A96E]/40 bg-white/5 px-6 py-4 text-[15px] text-[#f0e6d4]">
            Available upon private consultation — we match the right ultra-luxury island to your occasion, transfer preferences, and budget.
          </p>
        </div>
      </section>

      <section className="luxury-section bg-[#F3F1EC]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="mb-8 text-center font-serif text-[32px] md:text-[40px]">Brands we work with</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {BRAND_NAMES.map((b) => (
              <span key={b} className="rounded-full border border-[#e8e0d1] bg-white px-4 py-2 text-sm text-[#4a463f]">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-section bg-white">
        <div className="mx-auto max-w-4xl space-y-10 px-5 md:px-8">
          <div>
            <h2 className="mb-4 font-serif text-[32px]">About the country</h2>
            <ul className="space-y-2 text-[#5e5a52]">
              <li>
                <strong className="text-[#1C1C1A]">Location:</strong> Indian Ocean, southwest of India
              </li>
              <li>
                <strong className="text-[#1C1C1A]">Islands:</strong> 1,000+ coral islands
              </li>
              <li>
                <strong className="text-[#1C1C1A]">Known for:</strong> Private island resorts, marine life, luxury villas
              </li>
            </ul>
          </div>
          <SplitBlock
            title="Language"
            image="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&h=800&fit=crop&q=80"
            imageLeft
          >
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Official language:</strong> Dhivehi
              </li>
              <li>
                <strong>Widely spoken:</strong> English (in all resorts and hotels)
              </li>
            </ul>
            <p className="mt-3">Communication is never a problem for travellers.</p>
          </SplitBlock>
          <div className="rounded-xl border border-[#ece5d8] bg-[#FAFAF7] p-6 md:p-8">
            <h3 className="mb-3 font-serif text-2xl">Currency</h3>
            <p className="text-[#5e5a52]">
              <strong className="text-[#1C1C1A]">Maldivian Rufiyaa (MVR).</strong> USD is widely accepted across resorts.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-serif text-2xl">Travel time from India</h3>
            <ul className="list-disc space-y-2 pl-5 text-[#5e5a52]">
              <li>Mumbai / Bangalore / Delhi → Maldives: 2 to 4 hours</li>
              <li>Direct flights available daily</li>
            </ul>
            <p className="mt-3 text-[#5e5a52]">One of the easiest international destinations from India.</p>
          </div>
          <SplitBlock title="Capital city — Malé" image="https://images.unsplash.com/photo-1578895101408-1cf40a7a731c?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <p>
              A compact island city — this is where your international flight lands before transferring to your resort island.
            </p>
            <p className="mt-4 font-medium text-[#1C1C1A]">Places to see in Malé</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Grand Friday Mosque</li>
              <li>Malé Local Market</li>
              <li>Artificial Beach</li>
              <li>National Museum</li>
            </ul>
          </SplitBlock>
        </div>
      </section>

      <section className="luxury-section bg-[#F3F1EC]">
        <div className="mx-auto max-w-5xl space-y-12 px-5 md:px-8">
          <h2 className="text-center font-serif text-[32px] md:text-[40px]">Best season to visit Maldives</h2>
          <SplitBlock title="November to April — Peak season" kicker="Sunny & calm" image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop&q=80" imageLeft>
            <ul className="list-disc space-y-2 pl-5">
              <li>Sunny weather, calm waters</li>
              <li>Best for honeymoon & water activities</li>
            </ul>
          </SplitBlock>
          <SplitBlock title="May to October — Value season" kicker="Great value" image="https://images.unsplash.com/photo-1501436513145-30f24e19fccd?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <ul className="list-disc space-y-2 pl-5">
              <li>Lower prices (roughly 30–40% cheaper)</li>
              <li>Short tropical rains</li>
            </ul>
            <p className="mt-3">Smart travellers choose shoulder months for better deals.</p>
          </SplitBlock>
        </div>
      </section>

      <section className="luxury-section bg-white">
        <div className="mx-auto max-w-4xl space-y-10 px-5 md:px-8">
          <div>
            <h2 className="mb-4 font-serif text-[32px]">Important info before arrival</h2>
            <ul className="list-disc space-y-2 pl-5 text-[#5e5a52]">
              <li>
                <strong className="text-[#1C1C1A]">Visa:</strong> Free on arrival for Indians
              </li>
              <li>
                <strong className="text-[#1C1C1A]">Passport validity:</strong> Minimum 6 months
              </li>
              <li>
                <strong className="text-[#1C1C1A]">Return ticket</strong> required
              </li>
            </ul>
            <p className="mt-4 text-[#5e5a52]">No complicated visa process — very smooth entry.</p>
          </div>
          <div>
            <h2 className="mb-4 font-serif text-[32px]">Food in Maldives</h2>
            <p className="text-[#5e5a52]">Maldivian cuisine blends Indian, Sri Lankan, and Arabic influences.</p>
            <p className="mt-3 font-medium text-[#1C1C1A]">Must-try</p>
          </div>
          <SplitBlock title="Mas Huni" kicker="Breakfast classic" image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=800&fit=crop&q=80" imageLeft>
            <p>Tuna + coconut — the iconic Maldivian breakfast.</p>
          </SplitBlock>
          <SplitBlock title="Fresh grilled seafood" kicker="Coastal flavours" image="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <p>Resorts excel at catch-of-the-day grills by the lagoon.</p>
          </SplitBlock>
          <SplitBlock title="Coconut-based curries" kicker="Comfort bowls" image="https://images.unsplash.com/photo-1455619452474-d7be8d8e438a?w=1200&h=800&fit=crop&q=80" imageLeft>
            <p>Fragrant, mild, and perfect with rice or roshi.</p>
          </SplitBlock>
          <p className="text-[#5e5a52]">
            Resorts also offer Indian, Jain, and international cuisine — zero food concern. As the Maldives is a Muslim country, carrying alcohol is not
            allowed; however private-island resorts serve alcohol on an actual-cost basis where permitted.
          </p>
        </div>
      </section>

      <section className="luxury-section bg-[#F3F1EC]">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="mb-8 font-serif text-[32px]">Transfers to resorts</h2>
          <div className="space-y-6">
            <div className="luxury-card p-6">
              <h3 className="mb-2 font-serif text-xl">Speedboat transfer</h3>
              <ul className="list-disc space-y-1 pl-5 text-[#5e5a52]">
                <li>15–60 minutes</li>
                <li>Budget-friendly</li>
                <li>Resorts near Malé</li>
              </ul>
            </div>
            <div className="luxury-card p-6">
              <h3 className="mb-2 font-serif text-xl">Seaplane transfer</h3>
              <ul className="list-disc space-y-1 pl-5 text-[#5e5a52]">
                <li>30–60 minutes (scenic flight)</li>
                <li>Premium experience</li>
                <li>Aerial views of islands</li>
              </ul>
            </div>
            <div className="luxury-card p-6">
              <h3 className="mb-2 font-serif text-xl">Domestic flight + boat</h3>
              <ul className="list-disc space-y-1 pl-5 text-[#5e5a52]">
                <li>For far islands</li>
                <li>Combination transfer</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 rounded-lg border border-[#C9A96E]/30 bg-white p-4 text-[#5e5a52]">
            Antravi selects resorts based on transfer convenience and budget — a critical decision factor.
          </p>
        </div>
      </section>

      <section className="luxury-section bg-white">
        <div className="mx-auto max-w-5xl space-y-12 px-5 md:px-8">
          <h2 className="text-center font-serif text-[32px] md:text-[40px]">Types of stay in Maldives</h2>
          <SplitBlock title="Private island resorts (most popular)" image="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=800&fit=crop&q=80" imageLeft>
            <ul className="list-disc space-y-2 pl-5">
              <li>Entire island = one resort</li>
              <li>Ultimate privacy + luxury</li>
            </ul>
          </SplitBlock>
          <SplitBlock title="Public islands (budget travel)" image="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=1200&h=800&fit=crop&q=80" imageLeft={false}>
            <ul className="list-disc space-y-2 pl-5">
              <li>Guesthouses</li>
              <li>Local experience</li>
              <li>Limited luxury</li>
            </ul>
            <p className="mt-3">About 90% of Indian luxury travellers choose private island resorts.</p>
          </SplitBlock>
        </div>
      </section>

      <section className="luxury-section bg-[#F3F1EC]">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="mb-10 text-center font-serif text-[32px] md:text-[40px]">Top experiences in Maldives</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { t: "Overwater villa stay", i: "https://images.unsplash.com/photo-1573843981264-51130c4b12d6?w=900&h=600&fit=crop&q=80", d: "Direct access to lagoon, private deck, ocean views — signature Maldives experience." },
              { t: "Floating breakfast", i: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&h=600&fit=crop&q=80", d: "Served in your private pool — iconic luxury moment." },
              { t: "Snorkelling & diving", i: "https://images.unsplash.com/photo-1583212292454-1fe62296011b?w=900&h=600&fit=crop&q=80", d: "World-class reefs, turtles, manta rays, reef sharks." },
              { t: "Dolphin sunset cruise", i: "https://images.unsplash.com/photo-1505110019543-a0c22dd1a11d?w=900&h=600&fit=crop&q=80", d: "Magical evening with dolphins and sunset views." },
              { t: "Spa & wellness", i: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&h=600&fit=crop&q=80", d: "Overwater spa treatments designed for deep relaxation." },
              { t: "Private sandbank experience", i: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=900&h=600&fit=crop&q=80", d: "A tiny island in the middle of the ocean — just you and the sea." },
              { t: "Cinema under the stars", i: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&h=600&fit=crop&q=80", d: "Outdoor movie nights on the beach." },
              { t: "Candlelight dinner", i: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=600&fit=crop&q=80", d: "Private beachfront dining — perfect for couples." },
              { t: "Underwater restaurant", i: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&h=600&fit=crop&q=80", d: "Dine surrounded by marine life — once-in-a-lifetime experience." },
            ].map((x) => (
              <div key={x.t} className="luxury-card overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={getImagePath(x.i)} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-[#1C1C1A]">{x.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5e5a52]">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-section bg-white">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="mb-8 text-center font-serif text-[34px] md:text-[44px]">Why book Maldives with Antravi</h2>
          <div className="space-y-6 text-[#5e5a52]">
            <div className="luxury-card p-6">
              <h3 className="mb-2 font-serif text-xl text-[#1C1C1A]">Built for Indian travellers</h3>
              <p>We understand food, flights, and expectations.</p>
            </div>
            <div className="luxury-card p-6">
              <h3 className="mb-2 font-serif text-xl text-[#1C1C1A]">Right resort selection</h3>
              <p>We match budget, occasion (honeymoon / family), and experience preference.</p>
            </div>
            <div className="luxury-card p-6">
              <h3 className="mb-2 font-serif text-xl text-[#1C1C1A]">End-to-end planning</h3>
              <p>Flights → resort → transfers → activities → support.</p>
            </div>
            <div className="luxury-card p-6">
              <h3 className="mb-2 font-serif text-xl text-[#1C1C1A]">Support during your vacation</h3>
              <p>You&apos;re never stuck or confused.</p>
            </div>
            <div className="luxury-card p-6">
              <h3 className="mb-2 font-serif text-xl text-[#1C1C1A]">Transparent pricing</h3>
              <p>No hidden costs. No surprises.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F3F1EC]">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="mb-4 font-serif text-[32px] md:text-[40px]">Plan your Maldives vacation with Antravi</h2>
          <p className="mb-8 text-lg text-[#5e5a52]">Tell us your travel dates & preferences — we&apos;ll design a personalised experience tailored exactly for you.</p>
          <button type="button" onClick={handlePlanClick} className="luxury-cta rounded-full px-8 py-3 text-sm font-semibold text-white">
            Reserve your Maldives vacation now
          </button>
        </div>
      </section>

      <section className="luxury-section bg-white">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="mb-10 text-center font-serif text-[32px]">What travellers say</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviewsData.map((r) => (
              <div key={r.id} className="luxury-card flex flex-col p-6">
                <div className="mb-3 flex space-x-1">{renderStars(r.rating)}</div>
                <p className="flex-1 text-sm italic leading-relaxed text-[#5e5a52]">&ldquo;{r.text}&rdquo;</p>
                <p className="mt-4 font-medium text-[#1C1C1A]">{r.name}</p>
                <p className="text-xs uppercase tracking-wider text-[#9a948a]">{r.occasion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FAFAF7]">
        <FAQ faqsData={faqsData} />
      </section>

      <section className="border-t border-[#ece5d8] bg-white py-12">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="mb-4 font-serif text-[28px]">Ready when you are</h2>
          <p className="mb-6 text-[#5e5a52]">Reserve your Maldives vacation — our team will respond with options matched to you.</p>
          <button type="button" onClick={handlePlanClick} className="luxury-cta rounded-full px-8 py-3 text-sm font-semibold text-white">
            Open enquiry form
          </button>
        </div>
      </section>

      <footer className="border-t border-[#162660]/20 bg-[#0f1729] py-8 text-center text-xs leading-relaxed text-white/70">
        <p>© 2026 Antravi Travel Experiences · antravi.com · Content accurate as of May 2026.</p>
        <p className="mt-2 max-w-2xl mx-auto">
          Visa, activities, and flight information are subject to change — always verify with official sources before travel.
        </p>
      </footer>

      <Dialog open={!!selectedResort} onOpenChange={() => setSelectedResort(null)}>
        <DialogContent
          className="max-h-[90vh] max-w-6xl overflow-y-auto border-[#efe6d8] bg-white p-6"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          {selectedResort && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-bold md:text-left">{selectedResort.name}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-[16/12]">
                  <img
                    src={getImagePath(selectedResort.images[selectedImageIndex])}
                    alt={selectedResort.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  {selectedResort.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black hover:bg-white"
                      >
                        <i className="fas fa-chevron-left" />
                      </button>
                      <button
                        type="button"
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black hover:bg-white"
                      >
                        <i className="fas fa-chevron-right" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
                        {selectedResort.images.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setSelectedImageIndex(index)}
                            className={`h-2 w-2 rounded-full ${index === selectedImageIndex ? "bg-white" : "bg-white/50"}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="space-y-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex space-x-1">{renderStars(selectedResort.rating)}</div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">Starting from</span>
                      <div className="text-xl font-semibold text-[#C9A96E]">{selectedResort["StartsFrom "]}</div>
                      {selectedResort.duration ? <div className="text-sm text-[#6f695e]">{selectedResort.duration}</div> : null}
                    </div>
                  </div>
                  <div className="mb-4 flex items-center text-[#6f695e]">
                    <i className="fas fa-map-marker-alt mr-2" />
                    {selectedResort.location}
                  </div>
                  <p className="mb-6 leading-relaxed text-[#58544d]">{selectedResort.description}</p>
                  <div className="mb-6">
                    <h4 className="mb-3 font-serif text-2xl">Key features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedResort.features.map((feature, index) => (
                        <Badge key={index} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="mb-3 font-serif text-2xl">Amenities</h4>
                    <ul className="max-h-32 space-y-2 overflow-y-auto">
                      {selectedResort.amenities.map((amenity, index) => (
                        <li key={index} className="flex items-center text-[#58544d]">
                          <i className="fas fa-check mr-2 text-green-500" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="mb-3 font-serif text-2xl">Room types</h4>
                    <ul className="space-y-2">
                      {selectedResort.roomTypes.map((roomType, index) => (
                        <li key={index} className="flex items-center text-[#58544d]">
                          <i className="fas fa-bed mr-2 text-blue-500" />
                          {roomType}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button onClick={handlePlanClick} size="lg" className="luxury-cta w-full rounded-full px-8 py-3 text-lg text-white">
                    Plan my vacation
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <TravelForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} defaultDestination="maldives" />
    </div>
  );
}
