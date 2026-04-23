import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TravelForm } from "./TravelForm";

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };

  return (
    <section className="relative w-full h-screen md:h-[75vh] flex items-center justify-center overflow-hidden" style={{ animation: 'none' }}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full" style={{ animation: 'none' }}>
        <div className="absolute inset-0 w-full h-full" style={{ animation: 'none' }}>
          <img
            src="/images/hero/hero.webp"
            alt="Antravi - Live Your Moments"
            className="w-full h-full object-cover"
            style={{ animation: 'none', transition: 'none' }}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" style={{ animation: 'none' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4" style={{ animation: 'none' }}>
        <div style={{ animation: 'none', transition: 'none' }}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ animation: 'none', transition: 'none' }}>
            Antravi
          </h1>
          <p className="text-lg md:text-xl font-light mb-2 tracking-wide opacity-90" style={{ animation: 'none', transition: 'none' }}>
            Live Your Moments
          </p>
        </div>

        <Button
          onClick={handlePlanClick}
          size="lg"
          className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-3"
          style={{ borderRadius: "5px", animation: 'none', transition: 'none' }}
        >
          Enquire Now
        </Button>
      </div>
      
      <TravelForm isOpen={isFormOpen} onClose={() => {setIsFormOpen(false)}} />
    </section>
  );
}
