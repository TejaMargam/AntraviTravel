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


      {/* Live Your Moments Section */}
      <section className="pt-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-black mb-8">
              Live your Moments
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify">
              At Antravi, we craft vacations that awaken your senses: the sight of turquoise waters, the soothing sound of gentle waves, and the joy of unhurried time spent with those you love. Every detail is thoughtfully curated to truly experience the world in its most beautiful, heartfelt form.
              Travel is more than just reaching a destination - it's about savouring the little moments that stay with you forever.
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
}