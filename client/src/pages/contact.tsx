import Navbar from "@/components/navbar";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Contact() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-gray-900">
      <title>Contact Antravi - Plan Your Luxury Travel Experience</title>
      <meta name="description" content="Get in touch with Antravi's luxury travel specialists. Start planning your extraordinary journey today." />
      
      <Navbar />
      
      <main className="pt-20">
        {/* Contact Hero */}
        <section ref={sectionRef} className={`py-20 bg-[#162660] text-white ${sectionVisible ? "animate-fade-in-up" : ""}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wider">
              Let's Plan Your Extraordinary Journey
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section ref={sectionRef} className={`py-20 bg-gray-900 ${sectionVisible ? "animate-fade-in-up" : ""}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className={`text-center ${sectionVisible ? "animate-fade-in-up" : ""}`}>
                <div className="bg-[#162660] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-envelope text-2xl"></i>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#162660] mb-4">
                  Email Us
                </h3>
                <p className={`text-gray-300 mb-4 ${sectionVisible ? "animate-fade-in-up" : ""}`}>
                  Our travel specialists are here to help
                </p>
                <a href="mailto:contact@antravi.com" 
                   className="text-[#162660] hover:text-luxury-gold transition-colors"
                   data-testid="link-email">
                  contact@antravi.com
                </a>
              </div>
              
              <div className={`text-center ${sectionVisible ? "animate-fade-in-up" : ""}`}>
                <div className="bg-[#162660] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-phone text-2xl"></i>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#162660] mb-4">
                  Call Us
                </h3>
                <p className={`text-gray-300 mb-4 ${sectionVisible ? "animate-fade-in-up" : ""}`}>
                  Speak directly with our experts
                </p>
                <a href="tel:+919849981075" 
                   className="text-[#162660] hover:text-luxury-gold transition-colors"
                   data-testid="link-phone">
                  +91 9849981075
                </a>
              </div>
              
              <div className={`text-center ${sectionVisible ? "animate-fade-in-up" : ""}`}>
                <div className="bg-[#162660] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-clock text-2xl"></i>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#162660] mb-4">
                  Response Time
                </h3>
                <p className={`text-gray-300 mb-4 ${sectionVisible ? "animate-fade-in-up" : ""}`}>
                  We typically respond within
                </p>
                <span className="text-[#162660] font-semibold">
                  24 hours
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        
      </main>
      
      <Footer />
    </div>
  );
}
