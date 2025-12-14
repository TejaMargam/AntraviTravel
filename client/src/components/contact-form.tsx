import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEnquirySchema, type InsertEnquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<InsertEnquiry>({
    resolver: zodResolver(insertEnquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      travelDates: "",
      message: ""
    }
  });

  const enquiryMutation = useMutation({
    mutationFn: async (data: InsertEnquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Enquiry Sent Successfully!",
        description: "We'll respond within 24 hours with a personalized travel proposal.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error Sending Enquiry",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertEnquiry) => {
    enquiryMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-[#F1E4D1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#162660] mb-4">
            Start Your Journey
          </h2>
          <p className="text-xl text-gray-600">
            Tell us about your dream destination and we'll create the perfect experience
          </p>
        </div>
        
        <div className="bg-soft-gray rounded-2xl p-8 md:p-12 luxury-shadow h-[900px]">
          <iframe
              src="https://forms.zohopublic.in/antraviprivatelimited1/form/MaldivesLeadform/formperma/_a_99D1bGodoxLFMFMHjBHMTesbFNNo3qxhrECPTfi0?zf_rszfm=1"
              className="w-full h-full"
              frameBorder="0"
              style={{ border: "none" }}
              allowFullScreen
              title="Maldives Lead Form"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
