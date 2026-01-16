import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLocation } from "wouter";

export default function ThankYou() {
    const [, navigate] = useLocation();
  
  return (
    <div className="min-h-screen bg-white">
      <title>Thank You - Antravi - Luxury Travel Specialists</title>
      <meta name="description" content="Thank you for your booking with Antravi. We look forward to welcoming you to our resorts." />
      
      {/* Header */}
      <Navbar/>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-[#162660] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Thank You
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wider">
              for your booking with Antravi
            </p>
          </div>
        </section>
        <section className="py-20 bg-white text-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Submission Successful
            </h2>
            <p className="text-xl md:text-2xl font-light tracking-wider">
              Our team is reviewing your inquiry and will reach out shortly.
            </p>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
            <p className="text-xl md:text-2xl font-light tracking-wider">
              Continue Exploring:
              <a href="/" className="ml-2">
                <i className="fas fa-home"></i>
              </a>
              <a href="https://www.instagram.com/the_antravi?utm_source=qr&igsh=cGpxdzNzMDhmZGV2" className="ml-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/share/16SQ5QQbaR/" className="ml-2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://share.google/ci7bXoZ3vdkrJuv1C" className="ml-2">
                <i className="fab fa-google"></i>
              </a>
            </p>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
