import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';

export default function Services() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Vacation Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-black mb-8">
              Your Vacation, by Antravi
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A vacation is where comfort meets care. Whether it's a honeymoon, a family getaway, or a luxury retreat — every moment with Antravi is curated just for you. Choose Antravi to let your vacation feel as special as it truly is.
            </p>
          </div>

          <div className="text-center">
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3" style={{ borderRadius: '5px' }}>
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
        </div>
      </section>

      {/* Live Your Moments Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-black mb-8">
              Live your Moments
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Travel is more than just reaching a destination — it's about savouring the little moments that stay with you forever.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Antravi, we craft vacations that awaken your senses: the sight of turquoise waters, the soothing sound of gentle waves, and the joy of unhurried time spent with those you love. Every detail is thoughtfully curated to truly experience the world in its most beautiful, heartfelt form.
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
}