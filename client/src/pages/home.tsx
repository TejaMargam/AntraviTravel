import { useEffect, useState } from "react";
import { Link } from "wouter";
import { TravelForm } from "@/components/TravelForm";
import {
  CalendarDays,
  ChevronDown,
  Compass,
  Heart,
  MoonStar,
  PartyPopper,
  PlaneTakeoff,
  Sparkles,
  Users,
} from "lucide-react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Antravi | Editorial Luxury Travel Experiences";

    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDesc) {
      metaDesc = document.createElement('meta') as HTMLMetaElement;
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "The world's finest escapes, curated for you. Discover editorial luxury packages across Maldives, Bali, and Thailand with concierge-first planning by Antravi.";

    let langMeta = document.querySelector('meta[http-equiv="content-language"]') as HTMLMetaElement;
    if (!langMeta) {
      langMeta = document.createElement('meta') as HTMLMetaElement;
      langMeta.httpEquiv = 'content-language';
      document.head.appendChild(langMeta);
    }
    langMeta.content = 'en';

    document.documentElement.lang = 'en';

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://antravi.com/';
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Destinations", href: "#destinations" },
    { label: "Experiences", href: "#experiences" },
    { label: "Packages", href: "#packages" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const occasions = [
    { label: "Honeymoon", icon: Heart },
    { label: "Anniversary", icon: Sparkles },
    { label: "Babymoon", icon: MoonStar },
    { label: "Birthday Escape", icon: PartyPopper },
    { label: "Solo Retreat", icon: Compass },
    { label: "Group Getaway", icon: Users },
  ];

  const featuredDestinations = [
    { name: "Maldives", country: "Indian Ocean", price: "₹1,29,000", image: "/images/maldives/resorts/arrival/arrival-image-1.webp", href: "/destinations/maldives" },
    { name: "Bali", country: "Indonesia", price: "₹94,000", image: "/images/bali/bali-cover.webp", href: "/destinations/bali" },
    { name: "Thailand", country: "Thailand", price: "₹79,000", image: "/images/thailand/thailand-cover.webp", href: "/destinations/thailand" },
  ];

  const experiences = [
    { name: "Maldives Sunset Cruise", badge: "Maldives", price: "From ₹24,000", image: "/images/maldives/resorts/hardRock/hardRock-image-1.webp" },
    { name: "Ubud Rice Terrace Walk", badge: "Bali", price: "From ₹11,500", image: "/images/bali/ubud.webp" },
    { name: "Bali Spa Day", badge: "Bali", price: "From ₹14,000", image: "/images/bali/seminyak.webp" },
    { name: "Phuket Island Hopping", badge: "Thailand", price: "From ₹12,000", image: "/images/thailand/phuket.webp" },
  ];

  const reviews = [
    { quote: "Your Maldives moment is waiting - and they made ours unforgettable from airport to private dinner.", name: "Rhea & Karthik", destination: "Maldives" },
    { quote: "Every detail, handled. We just showed up and lived the dream.", name: "Ananya Sharma", destination: "Bali" },
    { quote: "Made for the ones who travel well. The concierge support was exceptional.", name: "Kunal Mehta", destination: "Thailand" },
    { quote: "No hidden surprises, only polished service and incredible stays.", name: "Pranav & Nisha", destination: "Maldives" },
  ];

  return (
    <div className="bg-[#FAFAF7] text-[#1C1C1A]">
      <h1 className="sr-only">Antravi luxury travel packages for Maldives, Bali and Thailand</h1>

      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-[0_6px_22px_rgba(28,28,26,0.08)] backdrop-blur" : "bg-transparent"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center">
            <img src={isScrolled ? "/Antravi_Logo.png" : "/Antravi_Logo_W.png"} alt="Antravi" className="h-10 w-auto" />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className={`nav-link-luxury ${isScrolled ? "text-[#1C1C1A]" : "text-white"}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href="https://wa.me/917674811075?text=Hello%20Antravi,%20I%20would%20like%20to%20plan%20my%20trip." target="_blank" rel="noreferrer" className="rounded-full border border-[#C9A96E] px-5 py-2 text-sm font-medium text-[#C9A96E] transition hover:bg-[#C9A96E] hover:text-white">
              WhatsApp us
            </a>
            <button onClick={() => setIsFormOpen(true)} className="luxury-cta rounded-full px-5 py-2 text-sm font-semibold text-white">
              Plan my trip
            </button>
          </div>
          <button onClick={() => setMobileMenuOpen((prev) => !prev)} className={`md:hidden ${isScrolled ? "text-[#1C1C1A]" : "text-white"}`} aria-label="Toggle menu">
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-[#e9e2d7] bg-[#FAFAF7] px-5 pb-5 pt-3 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-sm tracking-[0.08em] uppercase text-[#1C1C1A]">
                  {item.label}
                </a>
              ))}
              <button onClick={() => setIsFormOpen(true)} className="luxury-cta mt-2 h-[52px] rounded-full text-sm font-semibold text-white">
                Start planning
              </button>
            </div>
          </div>
        )}
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster="/images/maldives/resorts/arrival/arrival-image-1.webp">
          <source src="/videos/maldives.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/15 md:from-black/45" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-5 pb-20 pt-36 text-white md:px-8">
          <p className="luxury-label mb-6 text-white/85">Editorial Luxury Travel</p>
          <h2 className="max-w-4xl font-serif text-[44px] font-light leading-[1.08] md:text-[72px]">The world&apos;s finest escapes, curated for you</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">Handpicked luxury travel for the moments that matter.</p>
          <div className="glass-search mt-10 w-full max-w-4xl rounded-2xl p-4 md:p-5">
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
              <input placeholder="Destination" className="luxury-search-input" />
              <div className="luxury-search-input flex items-center justify-between"><span className="text-white/80">Dates</span><CalendarDays className="h-4 w-4 text-white/80" /></div>
              <input placeholder="Travellers" className="luxury-search-input" />
              <button onClick={() => setIsFormOpen(true)} className="luxury-cta h-[52px] rounded-xl px-6 text-sm font-semibold text-white">Reserve your escape</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80">
          <ChevronDown className="h-7 w-7 animate-bounce" />
        </div>
      </section>

      <main className="pb-28 md:pb-0">
        <section className="luxury-section px-5 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="luxury-label mb-5">Plan by occasion</p>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {occasions.map((occasion) => (
                <a key={occasion.label} href="#packages" className="luxury-pill shrink-0">
                  <occasion.icon className="h-4 w-4" />
                  {occasion.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="destinations" className="luxury-section bg-[#F3F1EC] px-5 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="luxury-label">Featured destinations</p>
            <h2 className="mt-4 max-w-2xl font-serif text-[38px] font-normal leading-tight md:text-[50px]">A curated map of aspirational escapes.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredDestinations.map((destination) => (
                <Link key={destination.name} href={destination.href} className="luxury-card group overflow-hidden">
                  <div className="overflow-hidden">
                    <img src={destination.image} alt={destination.name} className="aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-5">
                    <p className="luxury-label !text-[#6a665c]">{destination.country}</p>
                    <h3 className="mt-2 font-serif text-[30px] font-normal leading-none">{destination.name}</h3>
                    <p className="mt-3 text-sm text-[#C9A96E]">From {destination.price} / person</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="luxury-section px-5 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {[{ title: "Handpicked Stays", text: "Every property personally vetted for luxury, location, and service", icon: "fa-hotel" }, { title: "24/7 Concierge", text: "From visa questions to in-resort requests, we're always reachable", icon: "fa-headset" }, { title: "Transparent Pricing", text: "No hidden fees. Full cost shown before you confirm", icon: "fa-receipt" }].map((pillar) => (
              <article key={pillar.title} className="luxury-card p-7">
                <i className={`fas ${pillar.icon} text-xl text-[#C9A96E]`} />
                <h3 className="mt-4 font-serif text-[26px]">{pillar.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.75] text-[#555149]">{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experiences" className="luxury-section bg-[#F3F1EC] px-5 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="luxury-label">Curated experiences</p>
            <h2 className="mt-4 font-serif text-[38px] md:text-[50px]">Designed around your kind of luxury.</h2>
            <div className="mt-10 flex gap-6 overflow-x-auto pb-2">
              {experiences.map((item) => (
                <article key={item.name} className="luxury-card group w-[280px] shrink-0 overflow-hidden md:w-[320px]">
                  <div className="overflow-hidden">
                    <img src={item.image} alt={item.name} className="aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-5">
                    <span className="rounded-full bg-[#f2e8d5] px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-[#7d6840]">{item.badge}</span>
                    <h3 className="mt-4 font-serif text-2xl leading-snug">{item.name}</h3>
                    <p className="mt-2 text-sm text-[#C9A96E]">{item.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="luxury-section px-5 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="luxury-label text-center">We work with the world&apos;s finest hotels</p>
            <div className="marquee mt-8">
              <div className="marquee-track">
                {["Ritz-Carlton", "Four Seasons", "Six Senses", "Oberoi", "Aman", "St. Regis", "Conrad", "Taj", "Ritz-Carlton", "Four Seasons", "Six Senses", "Oberoi", "Aman", "St. Regis", "Conrad", "Taj"].map((brand, index) => (
                  <span key={`${brand}-${index}`} className="marquee-item">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="luxury-section bg-[#F3F1EC] px-5 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="luxury-label">Guest stories</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[{ image: "/images/maldives/resorts/sheraton/sheraton-image-3.webp", title: "A honeymoon that felt cinematic" }, { image: "/images/bali/uluwatu.webp", title: "Bali, beyond postcards" }, { image: "/images/thailand/krabi.webp", title: "Our Thailand reset" }].map((story) => (
                <article key={story.title} className="luxury-card group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img src={story.image} alt={story.title} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.04]" />
                    <button className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1C1C1A]">
                      <i className="fas fa-play ml-1 text-sm" />
                    </button>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-2xl">{story.title}</h3>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {reviews.map((review) => (
                <article key={review.name} className="luxury-card p-6">
                  <div className="text-[#C9A96E]">★★★★★</div>
                  <p className="mt-3 text-[16px] leading-[1.75] text-[#504c45]">&quot;{review.quote}&quot;</p>
                  <p className="mt-4 text-sm font-semibold">{review.name}</p>
                  <p className="text-xs uppercase tracking-[0.08em] text-[#7a7467]">{review.destination}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="luxury-section px-5 md:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)] md:grid-cols-2">
            <img src="/images/maldives/resorts/arrival/arrival-image-4.webp" alt="Maldives overwater bungalow" className="h-full min-h-[360px] w-full object-cover" />
            <div className="flex items-center p-8 md:p-14">
              <div>
                <p className="luxury-label">Editorial spotlight</p>
                <h2 className="mt-4 font-serif text-[38px] leading-tight md:text-[52px]">Maldives. Where time slows down.</h2>
                <p className="mt-5 text-[16px] leading-[1.75] text-[#555149]">Sunrise over turquoise lagoons, private decks over the sea, and evenings designed around stillness. Every itinerary is crafted for seamless indulgence from touchdown to farewell.</p>
                <Link href="/destinations/maldives" className="luxury-cta mt-8 inline-flex rounded-full px-7 py-3 text-sm font-semibold text-white">
                  Explore Maldives packages
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-white px-5 pb-10 pt-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <img src="/Antravi_Logo.png" alt="Antravi" className="h-10 w-auto" />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <p className="luxury-label mb-3">Destinations</p>
              <div className="space-y-2 text-sm text-[#45423d]">
                <Link href="/destinations/maldives" className="block hover:text-[#C9A96E]">Maldives</Link>
                <Link href="/destinations/bali" className="block hover:text-[#C9A96E]">Bali</Link>
                <Link href="/destinations/thailand" className="block hover:text-[#C9A96E]">Thailand</Link>
              </div>
            </div>
            <div>
              <p className="luxury-label mb-3">Company</p>
              <div className="space-y-2 text-sm text-[#45423d]">
                <a href="#about" className="block hover:text-[#C9A96E]">About</a>
                <Link href="/terms" className="block hover:text-[#C9A96E]">Terms & conditions</Link>
                <Link href="/privacy" className="block hover:text-[#C9A96E]">Privacy policy</Link>
              </div>
            </div>
            <div>
              <p className="luxury-label mb-3">Support</p>
              <div className="space-y-2 text-sm text-[#45423d]">
                <a href="mailto:contact@antravi.com" className="block hover:text-[#C9A96E]">contact@antravi.com</a>
                <a href="tel:+919849981075" className="block hover:text-[#C9A96E]">+91 98499 81075</a>
                <a href="https://wa.me/917674811075?text=Hello%20Antravi,%20I%20would%20like%20to%20plan%20my%20trip." target="_blank" rel="noreferrer" className="luxury-cta mt-3 inline-flex rounded-full px-6 py-2.5 font-medium text-white">
                  Chat with us
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#ece7dd] pt-5 text-sm text-[#6d675d]">
            <p>© 2026 Antravi. All rights reserved.</p>
            <a href="https://www.instagram.com/the_antravi" target="_blank" rel="noreferrer" className="hover:text-[#C9A96E]">
              <i className="fab fa-instagram text-lg" />
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#e8dfcf] bg-[#FAFAF7] p-2 md:hidden">
        <div className="grid grid-cols-4 gap-2 text-center text-[11px] uppercase tracking-[0.08em] text-[#58544d]">
          <a href="#" className="flex flex-col items-center gap-1 py-1"><i className="fas fa-house text-sm" />Home</a>
          <a href="#destinations" className="flex flex-col items-center gap-1 py-1"><i className="fas fa-map text-sm" />Destinations</a>
          <a href="#experiences" className="flex flex-col items-center gap-1 py-1"><PlaneTakeoff className="h-4 w-4" />Experiences</a>
          <a href="https://wa.me/917674811075?text=Hello%20Antravi,%20I%20would%20like%20to%20plan%20my%20trip." className="flex flex-col items-center gap-1 py-1 text-[#C9A96E]"><i className="fab fa-whatsapp text-sm" />WhatsApp</a>
        </div>
      </div>

      <TravelForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
