import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { getImagePath } from "@/utils/paths";
import { TravelForm } from "./TravelForm";

export default function Destinations() {
  const carouselImages = [
    getImagePath("images/maldives/resorts/reethi/reethi-image-2.webp?w=800&h=600&fit=crop"),
    // getImagePath("images/maldives/resorts/sheraton/sheraton-image-9.webp?w=800&h=600&fit=crop"),
    getImagePath("images/maldives/resorts/dusit/dusit-image-1.webp?w=800&h=600&fit=crop"),
    getImagePath("images/maldives/resorts/nooe/nooe-image-1.webp?w=800&h=600&fit=crop"),
    getImagePath("images/maldives/resorts/westin/westin-image-7.webp?w=800&h=600&fit=crop")
  ];
  const resortsData = ["NH Collection Maldives Reethi Resort", 
    // "Sheraton Full Moon Resort & Spa", 
    "Dusit 2 Feydhoo Maldives", "NOOE Kanaavashi", "The Westin Maldives Miriandhoo"]

  const baliImage = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=60";
  const thailandImage = "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=60";

    // The direct link to your Freshworks Web Form
  const FRESHWORKS_FORM_URL = "https://antraviprivatelimited.myfreshworks.com/crm/sales/web_forms/1b242fefa94aa8cd060f4b81be4befd03bc011fc84f8a1490fa433e1abcc364b/form.html";

  const handlePlanClick = () => {
    // Option A: Open in a new tab (Recommended so they don't leave your site)
    // window.open(FRESHWORKS_FORM_URL, '_blank', 'noopener,noreferrer');
    
    // Option B: Redirect current tab
    // window.location.href = FRESHWORKS_FORM_URL;
    setIsFormOpen(true);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCardClicked, setIsCardClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleExploreClick = () => {
    setIsCardClicked(true);
    setTimeout(() => setIsCardClicked(false), 500); // Reset after 500ms
  };

  return (
    <div className="bg-white">
      {/* Featured Destinations Section*/}
      <section
        id="destinations"
        className="py-16 hover:shadow-lg transition-shadow duration-500 ease-in-out"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-black">
              Featured Destinations
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`relative overflow-hidden rounded-3xl shadow-xl transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl ${isCardClicked ? "-translate-y-4 shadow-3xl scale-105" : ""}`}>
              <div className="aspect-[16/10] sm:aspect-[16/10] aspect-[4/3] relative">
                {carouselImages.map((imageSrc, index) => (
                  <img
                    key={index}
                    src={imageSrc}
                    alt="The Maldives"
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                    data-testid={`carousel-image-${index}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">The Maldives</h2>
                <p className="text-sm sm:text-base opacity-90 leading-relaxed mb-4">
                  {resortsData[currentImageIndex]}
                </p>
                <Link
                  href="/destinations/maldives"
                  className="hover:text-blue-200 transition-colors"
                  onClick={handleExploreClick}
                >
                  <div
                    className="bg-[#162660] hover:bg-[#162660e6] text-white px-4 py-2 sm:px-6 sm:py-3 font-medium transition-colors text-sm sm:text-base inline-block"
                    style={{ borderRadius: "5px" }}
                    data-testid="button-explore-resorts"
                  >
                    Explore Resorts
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-xl transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[16/10] sm:aspect-[16/10] aspect-[4/3] relative">
                <img
                  src={baliImage}
                  alt="Bali"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Bali</h2>
                <p className="text-sm sm:text-base opacity-90 leading-relaxed mb-4">
                  Temples, beaches, and culture-packed adventures
                </p>
                <Link
                  href="/destinations/bali"
                  className="hover:text-blue-200 transition-colors"
                >
                  <div
                    className="bg-[#162660] hover:bg-[#162660e6] text-white px-4 py-2 sm:px-6 sm:py-3 font-medium transition-colors text-sm sm:text-base inline-block"
                    style={{ borderRadius: "5px" }}
                    data-testid="button-explore-bali"
                  >
                    Explore Bali
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-xl transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[16/10] sm:aspect-[16/10] aspect-[4/3] relative">
                <img
                  src={thailandImage}
                  alt="Thailand"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Thailand</h2>
                <p className="text-sm sm:text-base opacity-90 leading-relaxed mb-4">
                  Island hopping, street food, and iconic beaches
                </p>
                <Link
                  href="/destinations/thailand"
                  className="hover:text-blue-200 transition-colors"
                >
                  <div
                    className="bg-[#162660] hover:bg-[#162660e6] text-white px-4 py-2 sm:px-6 sm:py-3 font-medium transition-colors text-sm sm:text-base inline-block"
                    style={{ borderRadius: "5px" }}
                    data-testid="button-explore-thailand"
                  >
                    Explore Thailand
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacation Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-black mb-8">
              Your Journey, Perfected by Antravi
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify">
              Every getaway deserves more than just a plan- it deserves thought, warmth, and a personal touch. Whether it’s a romantic honeymoon, a family retreat, or a luxurious escape, every moment with 
              Antravi is designed to feel effortless and truly memorable.
              Let your journey be as special as the memories you'll bring home.
            </p>
          </div>

          <div className="text-center">
            {/* <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-[#162660] hover:bg-[#162660e6] text-white text-lg px-8 py-3" style={{ borderRadius: '5px' }}>
                  Start Planning Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[900px] w-full max-h-[90vh] bg-white p-0 overflow-hidden rounded-2xl shadow-xl">
                <DialogHeader>
                    <DialogTitle className="sr-only">
                        Lead Form
                    </DialogTitle>
                </DialogHeader>
                
                <div className="w-full h-[80vh]">
                    <iframe
                        src="https://forms.zohopublic.in/antraviprivatelimited1/form/MaldivesLeadform/formperma/_a_99D1bGodoxLFMFMHjBHMTesbFNNo3qxhrECPTfi0?zf_rszfm=1"
                        className="w-full h-full"
                        frameBorder="0"
                        style={{ border: "none" }}
                        allowFullScreen
                        title="Maldives Lead Form"
                    ></iframe>
                </div>
              </DialogContent>
            </Dialog> */}
            <Button
              onClick={handlePlanClick}
              size="lg"
              className="bg-[#162660] text-white hover:bg-[#162660e6] text-lg px-8 py-3"
              style={{ borderRadius: "5px" }}
            >
              Plan With Antravi
            </Button>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-black mb-8">
              Plan Your Trip in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-[#162660] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Tell us what you need
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                It's your trip, your way. We begin with a conversation to
                understand what matters to you.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#162660] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                We curate options
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                We tailor everything around your preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#162660] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Confirm and travel
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                When you're ready, we'll be there — to guide and support you, so
                you can focus on what matters most: Live your Moments.
              </p>
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3"
                  style={{ borderRadius: "5px" }}
                >
                  Start Planning with Antravi
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[900px] w-full max-h-[90vh] bg-white p-0 overflow-hidden rounded-2xl shadow-xl">
                <DialogHeader>
                    <DialogTitle className="sr-only">
                        Lead Form
                    </DialogTitle>
                </DialogHeader>
                
                <div className="w-full h-[80vh]">
                    <iframe
                        src="https://forms.zohopublic.in/antraviprivatelimited1/form/MaldivesLeadform/formperma/_a_99D1bGodoxLFMFMHjBHMTesbFNNo3qxhrECPTfi0?zf_rszfm=1"
                        className="w-full h-full"
                        frameBorder="0"
                        style={{ border: "none" }}
                        allowFullScreen
                        title="Maldives Lead Form"
                    ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div> */}
        </div>
      </section>
      <TravelForm isOpen={isFormOpen} onClose={() => {setIsFormOpen(false)}} />
    </div>
  );
}
