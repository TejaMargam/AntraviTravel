import { useEffect, useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    {
      src: "https://videos.pexels.com/video-files/1675427/1675427-hd_1920_1080_30fps.mp4",
      label: "Maldives",
    },
    {
      src: "https://videos.pexels.com/video-files/4351257/4351257-hd_1920_1080_17fps.mp4",
      label: "Thailand",
    },
    {
      src: "https://videos.pexels.com/video-files/2949519/2949519-uhd_2560_1440_30fps.mp4",
      label: "Bali",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    // The direct link to your Freshworks Web Form
  const FRESHWORKS_FORM_URL = "https://antraviprivatelimited.myfreshworks.com/crm/sales/web_forms/1b242fefa94aa8cd060f4b81be4befd03bc011fc84f8a1490fa433e1abcc364b/form.html";

  const handlePlanClick = () => {
    // Option A: Open in a new tab (Recommended so they don't leave your site)
    // window.open(FRESHWORKS_FORM_URL, '_blank', 'noopener,noreferrer');
    
    // Option B: Redirect current tab
    window.location.href = FRESHWORKS_FORM_URL;
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        {videos.map((video, index) => (
          <video
            key={video.label}
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentVideoIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-blue-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        {/* <h1 className="font-heading text-4xl md:text-4xl font-bold mb-6 tracking-tight">
          ANTRAVI
        </h1> */}
        {/* <p className="text-2xl md:text-2xl font-light mb-8 tracking-wide">
          Live Your Moments
        </p> */}
        <h1 className="font-heading text-4xl md:text-4xl font-bold mb-6 tracking-tight">
          Let's turn your travel dreams into plans
        </h1>
        <p className="text-sm md:text-base font-light mb-6 tracking-wide opacity-90">
          {videos[currentVideoIndex].label}
        </p>
        {/* <p className="text-2xl md:text-2xl font-light mb-4 tracking-wide">
          Let's turn your travel dreams into plans
        </p> */}

        {/* <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-xl px-12 py-4"
              style={{ borderRadius: "5px" }}
            >
              Enquire Now
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
          className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-3"
          style={{ borderRadius: "5px" }}
        >
          Enquire Now
        </Button>
      </div>
    </section>
  );
}
