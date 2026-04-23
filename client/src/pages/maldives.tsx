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
import { Link } from "wouter";
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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedResort, setSelectedResort] = useState<Resort | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePlanClick = () => {
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
    <div className="min-h-screen bg-[#FAFAF7] text-[#1C1C1A]">
      <ScrollManager />
      <header className="sticky top-0 z-40 border-b border-[#ece5d8] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center"><img src="/Antravi_Logo.png" alt="Antravi" className="h-10 w-auto" /></Link>
          <Link href="/" className="text-sm uppercase tracking-[0.08em] hover:text-[#C9A96E]">Back to home</Link>
        </div>
      </header>
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/videos/maldives.mp4"
              type="video/mp4"
            />
            <track kind="captions" src="/captions/maldives.vtt" srcLang="en" label="English captions" default />
          </video>
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <p className="luxury-label !text-white/85">Maldives</p>
          <h1 className="font-serif text-[44px] md:text-[72px] font-light mb-6 tracking-tight leading-[1.05]">
            Maldives Resorts
          </h1>
          <p className="text-lg md:text-xl font-light mb-8 tracking-wide text-white/90">
            Discover handpicked island stays, private water villas, and seamless concierge planning.
          </p>
          <button onClick={handlePlanClick} className="luxury-cta rounded-full px-8 py-3 text-sm font-semibold text-white">Plan my Maldives escape</button>
        </div>
      </section>
      {/* Resorts Grid */}
      <section className="luxury-section bg-[#F3F1EC]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {resorts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resorts.map((resort) => (
                <div
                  key={resort.id}
                  className="luxury-card overflow-hidden cursor-pointer group"
                  onClick={() => handleResortClick(resort)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={getImagePath(resort.images[0])}
                      alt={resort.name}
                      width={400}
                      height={300}
                      loading="eager"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
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
                    {resort.tag && <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-[#6b665f]">
                      <div className="flex space-x-1">
                        {resort.tag}
                      </div>
                    </div>}
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-[28px] font-normal text-[#1C1C1A] mb-2">
                      {resort.name}
                    </h3>
                    <p className="text-[#5b564f] mb-3 text-sm leading-relaxed">
                      {resort.shortDescription}
                    </p>

                    <div className="flex space-x-1 mb-3">
                      {renderStars(resort.rating)}
                    </div>

                    <div className="flex items-center text-sm text-[#746e63] mb-3">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {resort.location}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {resort.features.slice(0, 3).map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-[#e8e0d1]"
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

                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-sm text-[#746e63]">
                          Starting from
                        </span>
                        <div className="font-semibold text-lg text-[#C9A96E]">
                          {resort["StartsFrom "]}
                        </div>
                        <div className="text-sm text-[#746e63]">
                          {resort["duration"]}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-[#1C1C1A]">View details</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="luxury-card p-12 max-w-4xl mx-auto">
                <h3 className="font-serif text-3xl text-black mb-4">
                  Resorts Coming Soon
                </h3>
                <p className="text-[#5b564f] text-lg mb-6">
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
      <section className="py-12 bg-[#FAFAF7]">
        <FAQ faqsData={faqsData} />
      </section>

      {/* Resort Details Dialog */}
      <Dialog
        open={!!selectedResort}
        onOpenChange={() => setSelectedResort(null)}
      >
        <DialogContent
          className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white p-6 border-[#efe6d8]"
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
                      <div className="font-semibold text-xl text-[#C9A96E]">
                        {selectedResort["StartsFrom "]}
                      </div>
                      {selectedResort.duration && <div className="text-sm text-[#6f695e]">
                        {selectedResort.duration}
                      </div>}
                    </div>
                  </div>

                  <div className="flex items-center text-[#6f695e] mb-4">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {selectedResort.location}
                  </div>

                  <p className="text-[#58544d] leading-relaxed mb-6">
                    {selectedResort.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-serif text-2xl mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedResort.features.map((feature, index) => (
                        <Badge key={index} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-serif text-2xl mb-3">Amenities</h4>
                    <ul className="space-y-2 max-h-32 overflow-y-auto">
                      {selectedResort.amenities.map((amenity, index) => (
                        <li
                          key={index}
                          className="flex items-center text-[#58544d]"
                        >
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-serif text-2xl mb-3">Room Types</h4>
                    <ul className="space-y-2">
                      {selectedResort.roomTypes.map((roomType, index) => (
                        <li
                          key={index}
                          className="flex items-center text-[#58544d]"
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
                  <Button onClick={handlePlanClick} size="lg" className="luxury-cta w-full text-lg px-8 py-3 text-white rounded-full">
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
