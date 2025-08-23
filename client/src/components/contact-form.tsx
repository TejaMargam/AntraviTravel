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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            Start Your Journey
          </h2>
          <p className="text-xl text-gray-600">
            Tell us about your dream destination and we'll create the perfect experience
          </p>
        </div>
        
        <div className="bg-soft-gray rounded-2xl p-8 md:p-12 luxury-shadow">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="travelDates"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Preferred Travel Dates</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          placeholder="Flexible / June 2024"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                          data-testid="input-travel-dates"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Tell us about your dream trip *</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field}
                        rows={6}
                        placeholder="Share your destination preferences, travel style, special occasions, group size, and any specific requirements..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors resize-none"
                        data-testid="textarea-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={enquiryMutation.isPending}
                  className="bg-primary-blue hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 luxury-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="button-submit-enquiry"
                >
                  {enquiryMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Enquiry
                    </>
                  )}
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 text-center mt-6">
                We'll respond within 24 hours with a personalized travel proposal
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
