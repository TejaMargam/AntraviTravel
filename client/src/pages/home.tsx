import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturedDestination from "@/components/featured-destination";
import WhyChoose from "@/components/why-choose";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-white">
      <title>Antravi - Live Your Moments | Luxury Travel Experiences</title>
      <meta name="description" content="Discover extraordinary luxury travel experiences with Antravi. From pristine Maldives resorts to personalized planning, we create unforgettable moments." />
      
      <Navbar />
      <Hero />
      <FeaturedDestination />
      <WhyChoose />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
