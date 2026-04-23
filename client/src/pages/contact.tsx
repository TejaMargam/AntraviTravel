import { Link } from "wouter";
import { TravelForm } from "@/components/TravelForm";
import { useState } from "react";
import ScrollManager from "@/hooks/ScrollManager";

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1C1C1A]">
      <ScrollManager />
      <title>Contact Antravi - Plan Your Luxury Travel Experience</title>
      <meta name="description" content="Get in touch with Antravi's luxury travel specialists. Start planning your extraordinary journey today." />

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
        <section className="px-5 pb-20 pt-28 md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="luxury-label">Contact</p>
            <h1 className="mt-5 font-serif text-[44px] font-light leading-tight md:text-[72px]">Let's plan your extraordinary journey</h1>
            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.75] text-[#555149]">
              Tell us where you want to go, when you want to travel, and what kind of moments you want to create. We'll take care of every detail.
            </p>
          </div>
        </section>

        <section className="luxury-section bg-white px-5 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-3">
              <article className="luxury-card p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f6efe2] text-[#C9A96E]">
                  <i className="fas fa-envelope text-lg"></i>
                </div>
                <h3 className="mt-4 font-serif text-[26px]">Email us</h3>
                <p className="mt-3 text-[16px] text-[#5e5a53]">
                  Our travel specialists are here to help
                </p>
                <a href="mailto:yashodar@antravi.com" 
                   className="mt-3 inline-block text-[#1C1C1A] hover:text-[#C9A96E]"
                   data-testid="link-email">
                  yashodar@antravi.com
                </a>
              </article>
              <article className="luxury-card p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f6efe2] text-[#C9A96E]">
                  <i className="fas fa-phone text-lg"></i>
                </div>
                <h3 className="mt-4 font-serif text-[26px]">Call us</h3>
                <p className="mt-3 text-[16px] text-[#5e5a53]">
                  Speak directly with our experts
                </p>
                <a href="tel:+919849981075" 
                   className="mt-3 inline-block text-[#1C1C1A] hover:text-[#C9A96E]"
                   data-testid="link-phone">
                  +91 9849981075
                </a>
              </article>
              <article className="luxury-card p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f6efe2] text-[#C9A96E]">
                  <i className="fas fa-clock text-lg"></i>
                </div>
                <h3 className="mt-4 font-serif text-[26px]">Response time</h3>
                <p className="mt-3 text-[16px] text-[#5e5a53]">
                  We typically respond within
                </p>
                <span className="mt-3 inline-block text-[#C9A96E] font-semibold">
                  24 hours
                </span>
              </article>
            </div>

            <div className="mt-10 text-center">
              <button onClick={() => setIsFormOpen(true)} className="luxury-cta h-[52px] rounded-full px-8 text-sm font-semibold text-white">
                Start planning
              </button>
            </div>
          </div>
        </section>
      </main>
      <TravelForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
