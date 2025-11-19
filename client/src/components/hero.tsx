import { useState } from "react";
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

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
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
          <source
            src="https://videos.pexels.com/video-files/1675427/1675427-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/1675427/1675427-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-blue-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <h1 className="font-heading text-5xl md:text-5xl font-bold mb-6 tracking-tight">
          ANTRAVI
        </h1>
        <p className="text-2xl md:text-2xl font-light mb-8 tracking-wide">
          Live Your Moments
        </p>
        {/* <p className="text-2xl md:text-2xl font-light mb-4 tracking-wide">
          Let's turn your travel dreams into plans
        </p> */}

        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
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
    </section>
  );
}
