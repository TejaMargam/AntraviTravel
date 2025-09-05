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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-700 backdrop-blur-md shadow-sm w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20 w-full min-w-0">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <a
              href="/"
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
                  Start Planning Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto bg-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-4">
                    Start Your Maldives Journey
                  </DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number (Optional but preferred)
                    </Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travelDates">Preferred Travel Dates</Label>
                    <Input
                      id="travelDates"
                      placeholder="Flexible / June 2024"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="occasion">Occasion</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select occasion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="honeymoon">Honeymoon</SelectItem>
                        <SelectItem value="family">Family Vacation</SelectItem>
                        <SelectItem value="luxury">Luxury Break</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">
                      Preferred Budget Range (Optional)
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="below-1l">Below ₹1L</SelectItem>
                        <SelectItem value="1l-1.5l">₹1L–₹1.5L</SelectItem>
                        <SelectItem value="1.5l-2l">₹1.5L–₹2L</SelectItem>
                        <SelectItem value="2l-plus">₹2L+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Requests / Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="We craft each trip personally. Please share as much detail as you're comfortable with — it helps us serve you better."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="verification">
                      To keep our service personal and spam-free, what
                      destination do you want to visit?
                    </Label>
                    <Input
                      id="verification"
                      placeholder="Type the destination name"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Start My Maldives Journey
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    💬 Note: Final pricing may vary based on your travel dates
                    and availability. We'll share the best available options
                    tailored for you.
                  </p>
                </form>
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
                    Start Planning Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto bg-white">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center mb-4">
                      Start Your Maldives Journey
                    </DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number (Optional but preferred)
                      </Label>
                      <Input id="phone" placeholder="+91 98765 43210" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelDates">
                        Preferred Travel Dates
                      </Label>
                      <Input
                        id="travelDates"
                        placeholder="Flexible / June 2024"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="occasion">Occasion</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select occasion" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="honeymoon">Honeymoon</SelectItem>
                          <SelectItem value="family">
                            Family Vacation
                          </SelectItem>
                          <SelectItem value="luxury">Luxury Break</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">
                        Preferred Budget Range (Optional)
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="below-1l">Below ₹1L</SelectItem>
                          <SelectItem value="1l-1.5l">₹1L–₹1.5L</SelectItem>
                          <SelectItem value="1.5l-2l">₹1.5L–₹2L</SelectItem>
                          <SelectItem value="2l-plus">₹2L+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Requests / Notes</Label>
                      <Textarea
                        id="notes"
                        placeholder="We craft each trip personally. Please share as much detail as you're comfortable with — it helps us serve you better."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="verification">
                        To keep our service personal and spam-free, what
                        destination do you want to visit?
                      </Label>
                      <Input
                        id="verification"
                        placeholder="Type the destination name"
                      />
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                      Start My Maldives Journey
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      💬 Note: Final pricing may vary based on your travel dates
                      and availability. We'll share the best available options
                      tailored for you.
                    </p>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
