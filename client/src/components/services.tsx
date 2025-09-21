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
              <DialogContent className="sm:max-w-[900px] w-full max-h-[90vh] bg-white p-0 overflow-hidden rounded-2xl shadow-xl">
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