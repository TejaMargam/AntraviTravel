import { Link } from "wouter";
import ScrollManager from "@/hooks/ScrollManager";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1C1C1A]">
      <ScrollManager />
      <title>About Antravi - Luxury Travel Specialists</title>
      <meta name="description" content="Learn about Antravi's passion for creating extraordinary luxury travel experiences. Discover our story and commitment to exceptional service." />

      <header className="sticky top-0 z-40 border-b border-[#ece5d8] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center">
            <img src="/Antravi_Logo.png" alt="Antravi" className="h-10 w-auto" />
          </Link>
          <Link href="/" className="text-sm uppercase tracking-[0.08em] text-[#1C1C1A] hover:text-[#C9A96E]">
            Back to home
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 pb-24 pt-28 md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="luxury-label">Our story</p>
            <h1 className="mt-6 font-serif text-[44px] font-light leading-tight md:text-[72px]">Creating extraordinary moments since 2025</h1>
            <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-[1.75] text-[#555149]">
              A boutique travel house for Indian travellers who care about beautiful stays, thoughtful details, and journeys that feel personal from start to finish.
            </p>
          </div>
        </section>

        <section className="luxury-section bg-white px-5 md:px-8">
          <div className="mx-auto max-w-4xl">
            <article className="luxury-card p-7 md:p-12">
              <h2 className="font-serif text-[36px] md:text-[48px]">How Antravi began</h2>
              <p className="mt-6 text-[16px] leading-[1.75] text-[#555149]">
                Antravi was born from a simple belief: every journey should be extraordinary. 
                Founded by passionate travelers who understand the transformative power of exploration, 
                we specialize in crafting bespoke luxury experiences that go beyond the ordinary.
              </p>
              <p className="mt-5 text-[16px] leading-[1.75] text-[#555149]">
                Our name, Antravi, reflects our core philosophy - we believe in the power of travel 
                to create lasting memories and meaningful connections. From the pristine beaches of 
                the Maldives to hidden mountain retreats, we curate experiences that speak to your soul.
              </p>
              <p className="mt-5 text-[16px] leading-[1.75] text-[#555149]">
                What sets us apart is our commitment to personalization. Every detail matters, 
                from the moment you first contact us to long after you return home. Our team of 
                dedicated travel specialists works tirelessly to understand your preferences, 
                dreams, and desires, translating them into meticulously planned journeys.
              </p>
              <p className="mt-5 text-[16px] leading-[1.75] text-[#555149]">
                With Antravi, you're not just booking a trip - you're investing in memories that 
                will last a lifetime. Let us help you live your moments to the fullest.
              </p>
            </article>
          </div>
        </section>

        <section className="luxury-section bg-[#F3F1EC] px-5 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-serif text-[36px] md:text-[50px]">Values we build with</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <article className="luxury-card p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f6efe2] text-[#C9A96E]">
                  <i className="fas fa-heart text-lg"></i>
                </div>
                <h3 className="mt-4 font-serif text-[26px]">Passion</h3>
                <p className="mt-3 text-[16px] leading-[1.75] text-[#5f5a52]">
                  We're genuinely passionate about travel and creating extraordinary experiences 
                  that exceed expectations.
                </p>
              </article>
              <article className="luxury-card p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f6efe2] text-[#C9A96E]">
                  <i className="fas fa-gem text-lg"></i>
                </div>
                <h3 className="mt-4 font-serif text-[26px]">Excellence</h3>
                <p className="mt-3 text-[16px] leading-[1.75] text-[#5f5a52]">
                  Every detail is carefully considered and executed to the highest standards 
                  of luxury and service.
                </p>
              </article>
              <article className="luxury-card p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f6efe2] text-[#C9A96E]">
                  <i className="fas fa-handshake text-lg"></i>
                </div>
                <h3 className="mt-4 font-serif text-[26px]">Trust</h3>
                <p className="mt-3 text-[16px] leading-[1.75] text-[#5f5a52]">
                  We build lasting relationships with our clients through transparency, 
                  reliability, and unwavering commitment.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
