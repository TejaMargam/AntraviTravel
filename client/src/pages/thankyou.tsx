import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLocation } from "wouter";

export default function ThankYou() {
    const [, navigate] = useLocation();
  
  return (
    <div className="min-h-screen bg-warm-white">
      <title>Thank You - Antravi - Luxury Travel Specialists</title>
      <meta name="description" content="Thank you for your booking with Antravi. We look forward to welcoming you to our resorts." />
      
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-700 backdrop-blur-md shadow-sm w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-20 w-full min-w-0">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 min-w-0">
              <a
                onClick={() => navigate("/")}
                className="font-heading text-lg xs:text-xl sm:text-2xl font-bold text-white truncate"
              >
                Antravi
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-blue-700 text-white">
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
