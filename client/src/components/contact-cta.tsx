
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';

export default function ContactCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8">
          Let us craft your Maldives vacation
        </h2>
        <p className="text-2xl font-light mb-8">
          — beautiful and personal
        </p>
        
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-12 py-4 rounded-full font-semibold"
            >
              Start Planning with Antravi
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4">Start Your Maldives Journey</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName3">Full Name *</Label>
                  <Input id="fullName3" placeholder="Your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email3">Email Address *</Label>
                  <Input id="email3" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone3">Phone Number (Optional but preferred)</Label>
                <Input id="phone3" placeholder="+91 98765 43210" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="travelDates3">Preferred Travel Dates</Label>
                <Input id="travelDates3" placeholder="Flexible / June 2024" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="occasion3">Occasion</Label>
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
                <Label htmlFor="budget3">Preferred Budget Range (Optional)</Label>
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
                <Label htmlFor="notes3">Additional Requests / Notes</Label>
                <Textarea 
                  id="notes3" 
                  placeholder="We craft each trip personally. Please share as much detail as you're comfortable with — it helps us serve you better."
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="verification3">To keep our service personal and spam-free, what destination do you want to visit?</Label>
                <Input id="verification3" placeholder="Type the destination name" />
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
