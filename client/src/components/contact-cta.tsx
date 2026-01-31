import { DialogContent } from "@radix-ui/react-dialog";
import Enquiry from "./enquiry";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TravelForm } from "./TravelForm";

export default function ContactCTA() {
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
  return (
    <section id="contact" className="pt-8 pb-16 text-black bg-white">
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
