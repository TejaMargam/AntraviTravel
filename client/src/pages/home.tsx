
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Destinations from "@/components/destinations";
import About from "@/components/about-preview";
import Testimonials from "@/components/testimonials";
import ContactCTA from "@/components/contact-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <title>Antravi - Extraordinary Travel Experiences Worldwide</title>
      <meta name="description" content="Discover the world's most exclusive destinations with Antravi. Luxury travel planning, bespoke itineraries, and unforgettable experiences await." />
      
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <About />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
}
