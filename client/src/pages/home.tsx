import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Destinations from "@/components/destinations";
import About from "@/components/about-preview";
import Testimonials from "@/components/testimonials";
import ContactCTA from "@/components/contact-cta";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Home() {
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [servicesRef, servicesVisible] = useIntersectionObserver();
  const [testimonialsRef, testimonialsVisible] = useIntersectionObserver();
  const [contactCTARef, contactCTAVisible] = useIntersectionObserver();
  const [faqRef, faqVisible] = useIntersectionObserver();
  const [footerRef, footerVisible] = useIntersectionObserver();

  useEffect(() => {
    // Set page title and meta description
    document.title = "Antravi - Premium Travel & Hospitality service";
    
    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDesc) {
      metaDesc = document.createElement('meta') as HTMLMetaElement;
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Plan your dream luxury vacation with Antravi. Exclusive Maldives honeymoon packages, Bali luxury holidays, and Thailand private tours. Best prices guaranteed with personalized service.";
    
    // Add language meta tag
    let langMeta = document.querySelector('meta[http-equiv="content-language"]') as HTMLMetaElement;
    if (!langMeta) {
      langMeta = document.createElement('meta') as HTMLMetaElement;
      langMeta.httpEquiv = 'content-language';
      document.head.appendChild(langMeta);
    }
    langMeta.content = 'en';
    
    // Add html lang attribute
    document.documentElement.lang = 'en';
    
    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://antravi.com/';

    const scrollToDestinations = () => {
      const destinationsSection = document.getElementById('destinations');
      if (destinationsSection) {
        destinationsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleHashChange = () => {
      if (window.location.hash === '#destinations') {
        scrollToDestinations();
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Main H1 heading for SEO */}
      <h1 className="sr-only">Antravi - Luxury Travel Packages for Maldives, Bali & Thailand</h1>
      
      <Navbar />
      <div ref={heroRef} className={heroVisible ? "animate-fade-in-up" : ""}>
        <Hero />
      </div>
      <div ref={servicesRef} className={servicesVisible ? "animate-fade-in-out animation-delay-200" : ""}>
        <Services />
      </div>
      <Destinations />
      <div ref={testimonialsRef} className={testimonialsVisible ? "animate-fade-in-out animation-delay-600" : ""}>
        <Testimonials />
      </div>
      <div ref={contactCTARef} className={contactCTAVisible ? "animate-fade-in-up animation-delay-800" : ""}>
        <ContactCTA />
      </div>
      <div ref={faqRef} className={faqVisible ? "animate-fade-in-out animation-delay-1000" : ""}>
        <FAQ faqsData={[
          {
            id: "1",
            question: "What destinations does Antravi specialize in?",
            answer: "We specialize in luxury travel packages to Maldives, Bali, and Thailand, offering exclusive experiences and personalized service."
          },
          {
            id: "2", 
            question: "Do you offer honeymoon packages?",
            answer: "Yes, we offer romantic honeymoon packages to all our destinations with special amenities and experiences designed for couples."
          },
          {
            id: "3",
            question: "How do I book a travel package?",
            answer: "You can book through our website by filling out the enquiry form, or contact our travel experts directly for personalized assistance."
          },
          {
            id: "4",
            question: "What is included in your travel packages?",
            answer: "Our packages typically include accommodation, transfers, selected meals, and guided tours. Specific inclusions vary by destination and package type."
          },
          {
            id: "5",
            question: "Do you provide travel insurance?",
            answer: "We recommend and can arrange comprehensive travel insurance for all our clients to ensure a worry-free travel experience."
          }
        ]} />
      </div>
      <div ref={footerRef} className={footerVisible ? "animate-fade-in-up animation-delay-1200" : ""}>
        <Footer />
      </div>
    </div>
  );
}
