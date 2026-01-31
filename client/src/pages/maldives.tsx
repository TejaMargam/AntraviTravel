import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import resortsData from "@/data/maldives/resorts.json";
import FAQ from "@/components/faq";
import ScrollManager from "@/hooks/ScrollManager";
import { getImagePath } from "@/utils/paths";
import { useLocation } from "wouter";
import Navbar from "@/components/navbar";
import faqsData from "@/data/maldives/faqs.json";
import { TravelForm } from "@/components/TravelForm";

interface Resort {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  tag: string;
  images: string[];
  rating: number;
  "StartsFrom ": string;
  duration: string;
  location: string;
  features: string[];
  amenities: string[];
  roomTypes: string[];
}

export default function Resorts() {
  const [, navigate] = useLocation();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedResort, setSelectedResort] = useState<Resort | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

    // The direct link to your Freshworks Web Form
  const FRESHWORKS_FORM_URL = "https://antraviprivatelimited.myfreshworks.com/crm/sales/web_forms/1b242fefa94aa8cd060f4b81be4befd03bc011fc84f8a1490fa433e1abcc364b/form.html";

  const handlePlanClick = () => {
    // Option A: Open in a new tab (Recommended so they don't leave your site)
    // window.open(FRESHWORKS_FORM_URL, '_blank', 'noopener,noreferrer');
    
    // Option B: Redirect current tab
    // window.location.href = FRESHWORKS_FORM_URL;
    setIsFormOpen(true);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      ></i>
    ));
  };

  const resorts: Resort[] = resortsData;

  const handleResortClick = (resort: Resort) => {
    setSelectedResort(resort);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedResort) {
      setSelectedImageIndex((prev) =>
        prev === selectedResort.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedResort) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? selectedResort.images.length - 1 : prev - 1,
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollManager />
      {/* Header */}
      <Navbar/>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/1675427/1675427-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-blue-900/30"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Maldives Resorts
          </h1>
          <p className="text-lg md:text-xl font-light mb-8 tracking-wide">
            Discover our handpicked collection of resorts
          </p>
          <Button
            onClick={handlePlanClick}
            size="lg"
            className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-3"
            style={{ borderRadius: "5px" }}
          >
            Plan With Antravi
          </Button>
        </div>
      </section>
      {/* Resorts Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {resorts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resorts.map((resort) => (
                <div
                  key={resort.id}
                  className="bg-[#D0E6FD] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleResortClick(resort)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={getImagePath(resort.images[0])}
                      alt={resort.name}
                      width={400}
                      height={300}
                      loading="eager"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      style={{
                        contentVisibility: 'auto',
                        backgroundColor: '#f3f4f6',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                      onLoad={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.opacity = '1';
                      }}
                    />
                    {resort.tag && <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex space-x-1">
                        {resort.tag}
                      </div>
                    </div>}
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-black mb-2">
                      {resort.name}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      {resort.shortDescription}
                    </p>

                    <div className="flex space-x-1 mb-3">
                      {renderStars(resort.rating)}
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {resort.location}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {resort.features.slice(0, 3).map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                      {resort.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{resort.features.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">
                          Starting from
                        </span>
                        <div className="font-bold text-lg text-[#162660]">
                          {resort["StartsFrom "]}
                        </div>
                        <div className="text-sm text-gray-600">
                          {resort["duration"]}
                        </div>
                      </div>
                      {/* Button with shadow */}
                      <Button
                        size="sm"
                        className="bg-white hover:bg-white shadow-lg text-[#162660]"
                        style={{ borderRadius: "5px" }}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
                <h3 className="font-heading text-3xl font-bold text-black mb-4">
                  Resorts Coming Soon
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  We're carefully curating the most amazing resorts for you.
                  Check back soon for our exclusive collection!
                </p>
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="fas fa-star text-yellow-400 text-2xl"
                    ></i>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Maldives FAQ's */}
      <section className="py-10 bg-white">
        <FAQ faqsData={faqsData} />
      </section>

      {/* Resort Details Dialog */}
      <Dialog
        open={!!selectedResort}
        onOpenChange={() => setSelectedResort(null)}
      >
        <DialogContent
          className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white p-6"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          {selectedResort && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center md:text-left">
                  {selectedResort.name}
                </DialogTitle>
              </DialogHeader>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Image Carousel */}
                <div className="relative aspect-[4/3] lg:aspect-[16/12] rounded-xl overflow-hidden">
                  <img
                    src={getImagePath(selectedResort.images[selectedImageIndex])}
                    alt={selectedResort.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{
                      contentVisibility: 'auto',
                      backgroundColor: '#f3f4f6',
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                    onLoad={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.opacity = '1';
                    }}
                  />

                  {selectedResort.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>

                      {/* Image indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedResort.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`w-2 h-2 rounded-full ${
                              index === selectedImageIndex
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Right Column - Content */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1">
                      {renderStars(selectedResort.rating)}
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">
                        Starting from
                      </span>
                      <div className="font-bold text-xl text-[#162660]">
                        {selectedResort["StartsFrom "]}
                      </div>
                      {selectedResort.duration && <div className="text-sm text-black">
                        {selectedResort.duration}
                      </div>}
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {selectedResort.location}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {selectedResort.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedResort.features.map((feature, index) => (
                        <Badge key={index} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Amenities</h4>
                    <ul className="space-y-2 max-h-32 overflow-y-auto">
                      {selectedResort.amenities.map((amenity, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Room Types</h4>
                    <ul className="space-y-2">
                      {selectedResort.roomTypes.map((roomType, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <i className="fas fa-bed text-blue-500 mr-2"></i>
                          {roomType}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-[#162660] hover:bg-[#162660e6] text-lg text-white py-3"
                        style={{ borderRadius: "5px" }}
                      >
                        Plan My Vacation
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
                    className="w-full bg-[#162660] text-white hover:bg-[#162660e6] text-lg px-8 py-3"
                    style={{ borderRadius: "5px" }}
                  >
                    Plan My Vacation
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <TravelForm isOpen={isFormOpen} onClose={() => {setIsFormOpen(false)}} />
    </div>
  );
}
