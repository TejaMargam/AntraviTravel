import { DialogContent } from "@radix-ui/react-dialog";
import Enquiry from "./enquiry";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TravelForm } from "./TravelForm";

export default function ContactCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };
  return (
    <section id="contact" className="pt-8 pb-16 text-white bg-gray-900">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
          Let us craft your vacation
        </h2>
        <p className="text-xl font-light mb-8">beautiful and personal</p>

        {/* <Enquiry buttonTitle="Start Planning with Antravi" params={{}} /> */}
        <Button
          onClick={handlePlanClick}
          size="lg"
          className="bg-[#162660] text-white hover:bg-[#162660e6] text-lg px-8 py-3"
          style={{ borderRadius: "5px" }}
        >
          Start Planning with Antravi
        </Button>
      </div>
      <TravelForm isOpen={isFormOpen} onClose={() => {setIsFormOpen(false)}} />
    </section>
  );
}
