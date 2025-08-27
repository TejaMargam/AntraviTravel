
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-blue-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          ANTRAVI
        </h1>
        <p className="text-3xl md:text-4xl font-light mb-12 tracking-wide">
          Live Your Moments.
        </p>
        
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-xl px-12 py-4 rounded-full">
              Start Planning Now
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4">Start Your Maldives Journey</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" placeholder="Your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional but preferred)</Label>
                <Input id="phone" placeholder="+91 98765 43210" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="travelDates">Preferred Travel Dates</Label>
                <Input id="travelDates" placeholder="Flexible / June 2024" />
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
                <Label htmlFor="budget">Preferred Budget Range (Optional)</Label>
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
                <Label htmlFor="verification">To keep our service personal and spam-free, what destination do you want to visit?</Label>
                <Input id="verification" placeholder="Type the destination name" />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                Start My Maldives Journey
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                💬 Note: Final pricing may vary based on your travel dates and availability. We'll share the best available options tailored for you.
              </p>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
