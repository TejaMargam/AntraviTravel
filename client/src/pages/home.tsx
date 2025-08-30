import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Destinations from "@/components/destinations";
import About from "@/components/about-preview";
import Testimonials from "@/components/testimonials";
import ContactCTA from "@/components/contact-cta";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <title>Antravi - Live Your Moments in the Maldives</title>
      <meta
        name="description"
        content="Discover the Maldives with Antravi. Luxury travel planning, bespoke Maldives packages, and unforgettable experiences. Live your moments in paradise."
      />

      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      {/* <About /> */}
      <Testimonials />
      <ContactCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
