import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useState } from "react";
export default function Destinations() {
  return (
    <div className="bg-white">
      {/* Featured Destinations Section*/}
      <section
        id="destinations"
        className="py-24 bg-white hover:shadow-lg transition-shadow duration-500 ease-in-out"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-black">
              Our Featured Destinations
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl shadow-xl transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[16/10] sm:aspect-[16/10] aspect-[4/3] relative">
                <img
                  src="https://www.rowfortheocean.co.uk/wp-content/uploads/2025/01/a-picturesque-aerial-view-of-a-tropical-island-resort-surrounded-by-clear-blue-ocean-during-a-vibran.jpg"
                  alt="The Maldives"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 lg:p-12 text-white">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4">
                      The Maldives
                    </h3>
                    <p className="text-sm sm:text-lg lg:text-xl opacity-90 leading-relaxed">
                      Crystal-clear waters and pristine white sand beaches
                    </p>
                  </div>
                    {/* href="/resorts" */}
                  <a
                    href="/AntraviTravel/resorts"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 font-medium transition-colors text-sm sm:text-base flex-shrink-0"
                    style={{ borderRadius: "5px" }}
                  >
                    View Resorts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-black mb-8">
              Plan Your Trip in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Tell us what you need
              </h3>
              <p className="text-gray-600 leading-relaxed">
                It's your trip, your way. We begin with a conversation to
                understand what matters to you.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                We curate options
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We tailor everything around your preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Confirm and travel
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When you're ready, we'll be there — to guide and support you, so
                you can focus on what matters most: Live your Moments.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3"
                  style={{ borderRadius: "5px" }}
                >
                  Start Planning with Antravi
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
                      <Label htmlFor="fullName2">Full Name *</Label>
                      <Input
                        id="fullName2"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email2">Email Address *</Label>
                      <Input
                        id="email2"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone2">
                      Phone Number (Optional but preferred)
                    </Label>
                    <Input id="phone2" placeholder="+91 98765 43210" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travelDates2">Preferred Travel Dates</Label>
                    <Input
                      id="travelDates2"
                      placeholder="Flexible / June 2024"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="occasion2">Occasion</Label>
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
                    <Label htmlFor="budget2">
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
                    <Label htmlFor="notes2">Additional Requests / Notes</Label>
                    <Textarea
                      id="notes2"
                      placeholder="We craft each trip personally. Please share as much detail as you're comfortable with — it helps us serve you better."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="verification2">
                      To keep our service personal and spam-free, what
                      destination do you want to visit?
                    </Label>
                    <Input
                      id="verification2"
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
      </section>
    </div>
  );
}
