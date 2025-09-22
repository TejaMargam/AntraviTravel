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
import resortsData from "@/data/resorts.json";
import FAQ from "@/components/faq";
import ScrollManager from "@/hooks/ScrollManager";
import { getImagePath } from "@/utils/paths";
import { useLocation } from "wouter";

interface Resort {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  tag: string;
  images: string[];
  rating: number;
  "StartsFrom ": string;
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
    <div className="min-h-screen bg-gray-50">
      <ScrollManager />
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
      <section className="bg-gray-100 py-4">
        <div className="text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Maldives Resorts
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our handpicked collection resorts
          </p>
        </div>
      </section>
      {/* Resorts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {resorts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resorts.map((resort) => (
                <div
                  key={resort.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleResortClick(resort)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={getImagePath(resort.images[0])}
                      alt={resort.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {resort.tag && <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex space-x-1">
                        {resort.tag}
                      </div>
                    </div>}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex space-x-1">
                        {renderStars(resort.rating)}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-black mb-2">
                      {resort.name}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      {resort.shortDescription}
                    </p>

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
                        <div className="font-bold text-lg text-blue-600">
                          {resort["StartsFrom "]}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
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
      <section className="py-20">
        <FAQ />
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
                    className="w-full h-full object-cover"
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
                      <div className="font-bold text-xl text-blue-600">
                        {selectedResort["StartsFrom "]}
                      </div>
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

                  <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
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
                      {/* Form iframe */}
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
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
