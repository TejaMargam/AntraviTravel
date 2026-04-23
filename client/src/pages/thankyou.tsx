import { Link } from "wouter";
import ScrollManager from "@/hooks/ScrollManager";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1C1C1A]">
      <ScrollManager />
      <title>Thank You - Antravi - Luxury Travel Specialists</title>
      <meta name="description" content="Thank you for your booking with Antravi. We look forward to welcoming you to our resorts." />

      <main className="flex min-h-screen items-center px-5 py-20 md:px-8">
        <section className="mx-auto w-full max-w-4xl">
          <div className="luxury-card p-8 text-center md:p-14">
            <p className="luxury-label">Thank you</p>
            <h1 className="mt-4 font-serif text-[42px] font-light leading-tight md:text-[64px]">Your journey starts here.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.75] text-[#555149]">
              Submission successful. Our team is reviewing your preferences and will reach out shortly with a curated plan.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/" className="luxury-cta rounded-full px-7 py-3 text-sm font-semibold text-white">
                Explore home
              </Link>
              <a href="https://www.instagram.com/the_antravi" className="rounded-full border border-[#e1d7c6] px-6 py-3 text-sm hover:text-[#C9A96E]">
                Instagram
              </a>
              <a href="https://wa.me/917674811075?text=Hi%20Antravi%2C%20I%20just%20submitted%20my%20trip%20request." className="rounded-full border border-[#e1d7c6] px-6 py-3 text-sm hover:text-[#C9A96E]">
                WhatsApp
              </a>
            </div>
          </div>
        </section>        
      </main>
    </div>
  );
}
