import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [, navigate] = useLocation();

  const scrollToDestinations = () => {
    const destinationsSection = document.getElementById("destinations");
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-700 backdrop-blur-md shadow-sm w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20 w-full min-w-0">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <a
              onClick={handleHomeClick}
              className="font-heading text-lg xs:text-xl sm:text-2xl font-bold text-white truncate"
            >
              Antravi
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToDestinations}
              className="text-white hover:text-black font-medium transition-colors"
            >
              Destinations
            </button>
            <button
              onClick={scrollToContact}
              className="text-white hover:text-black font-medium transition-colors"
            >
              Contact
            </button>
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-3"
                  style={{ borderRadius: "5px" }}
                >
                  Plan With Antravi
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white p-2"
            >
              <i
                className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-lg`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t w-full overflow-hidden">
            <div className="px-3 py-4 space-y-4 w-full">
              <button
                onClick={scrollToDestinations}
                className="block w-full text-left text-gray-700 hover:text-black font-medium"
              >
                Destinations
              </button>
              <button
                onClick={scrollToContact}
                className="block w-full text-left text-gray-700 hover:text-black font-medium"
              >
                Contact
              </button>
              <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-3"
                    style={{ borderRadius: "5px" }}
                  >
                    Plan With Antravi
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
        )}
      </div>
    </nav>
  );
}
