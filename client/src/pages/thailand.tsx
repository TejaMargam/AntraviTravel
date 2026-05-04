import ScrollManager from "@/hooks/ScrollManager";
import FAQ from "@/components/faq";
import faqsData from "@/data/thailand/faqs.json";
import { useState } from "react";
import { TravelForm } from "@/components/TravelForm";
import { Link } from "wouter";
import ThailandPageContent from "@/pages/ThailandPageContent";

export default function Thailand() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1C1C1A]">
      <h1 className="sr-only">Thailand Tour Packages & Private Journeys 2026</h1>
      <ScrollManager />
      <title>Thailand Tour Packages 2026 - Bangkok, Pattaya, Phuket &amp; Krabi | Antravi</title>
      <meta
        name="description"
        content="Personalised Thailand holidays — Bangkok temples to Phuket coves. Visa guidance, custom itineraries, and on-trip support from Antravi."
      />

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

      <main>
        <section className="relative flex min-h-[62vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <video autoPlay muted loop playsInline className="h-full w-full object-cover">
              <source src="/videos/thailand.mp4" type="video/mp4" />
              <track kind="captions" src="/captions/thailand.vtt" srcLang="en" label="English captions" default />
            </video>
            <div className="absolute inset-0 bg-black/38" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
            <h2 className="font-serif text-[40px] font-light leading-[1.1] tracking-tight md:text-[58px]">
              Ready to Experience
              <br />
              the Land of Smiles?
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-light text-white/92 md:text-xl">
              Our Thailand specialists craft personalised journeys — from Bangkok&apos;s golden temples to Phuket&apos;s hidden coves — built exactly around you.
            </p>
            <button
              type="button"
              onClick={openForm}
              className="luxury-cta mt-10 rounded-full px-8 py-3 text-sm font-semibold text-white"
            >
              Plan with Antravi
            </button>
          </div>
        </section>

        <ThailandPageContent onOpenForm={openForm} />

        <section className="py-12 bg-white">
          <FAQ faqsData={faqsData} />
        </section>

        <section className="border-t border-[#e8e0d1] bg-[#f0ebe2] py-6 text-center text-[11px] leading-relaxed text-[#4a463f] md:text-xs">
          <p>© 2026 Antravi Travel Experiences · antravi.com · Content accurate as of May 2026.</p>
          <p className="mx-auto mt-2 max-w-3xl px-4">
            Visa, activities, and flight information are subject to change — always verify with official sources before travel.
          </p>
        </section>
      </main>

      <TravelForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} defaultDestination="thailand" />
    </div>
  );
}
