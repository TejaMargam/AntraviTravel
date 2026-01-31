import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Check, User, MapPin, Heart, Plane, Globe, DollarSign, Users, Map, LucideIcon } from "lucide-react";
import { useLocation } from "wouter";

function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

function formatDate(date: Date | undefined): string {
  if (!date) return '';
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

interface FormData {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  destination: string;
  numberOfAdults: string;
  travelDates: Date | undefined;
  numberOfNights: string;
  lookingToBook: string;
  preferredBudget: string;
  specialOccasion: string;
  departureCity: string;
  anyRequest: string;
}

interface TravelFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Step {
  number: number;
  title: string;
  icon: LucideIcon;
}

export function TravelForm({ isOpen, onClose }: TravelFormProps) {
  const [, navigate] = useLocation();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    destination: "",
    numberOfAdults: "",
    travelDates: undefined,
    numberOfNights: "",
    lookingToBook: "",
    preferredBudget: "",
    specialOccasion: "",
    departureCity: "",
    anyRequest: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.mobile.trim()) {
        newErrors.mobile = "Mobile number is required";
      } else if (!/^\+91\d{10}$/.test(formData.mobile)) {
        newErrors.mobile = "Mobile number must have 10 digits";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (step === 2) {
      if (!formData.destination) newErrors.destination = "Destination is required";
      if (!formData.numberOfAdults) newErrors.numberOfAdults = "Number of adults is required";
      if (!formData.travelDates) newErrors.travelDates = "Travel dates are required";
      if (!formData.numberOfNights) newErrors.numberOfNights = "Number of nights is required";
    }

    if (step === 3) {
      if (!formData.lookingToBook) newErrors.lookingToBook = "Booking timeline is required";
      if (!formData.preferredBudget) newErrors.preferredBudget = "Budget is required";
      if (!formData.departureCity.trim()) newErrors.departureCity = "Departure city is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isStepValid = (step: number): boolean => {
    if (step === 1) {
      return !!(formData.firstName.trim() && formData.lastName.trim() && formData.mobile.trim() &&
        /^\+91\d{10}$/.test(formData.mobile) && formData.email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email));
    }
    if (step === 2) {
      return !!(formData.destination && formData.numberOfAdults && formData.travelDates && formData.numberOfNights);
    }
    if (step === 3) {
      return !!(formData.lookingToBook && formData.preferredBudget && formData.departureCity.trim());
    }
    return false;
  };

  const handleNext = (): void => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = (): void => {
    setCurrentStep(currentStep - 1);
  };

  // const sendJustDialLead = async (data:any) => {
  //   const payload = {
  //     // leadid: "JD" + Date.now(), // unique lead id
  //     leadtype: `DST: ${data.destination}, NOA: ${data.numberOfAdults}, NON: ${data.numberOfNights}, TD: ${data.travelDates}, LTB: ${data.lookingToBook}, PB: ${data.preferredBudget}, SO: ${data.specialRequests}, DC: ${data.departureCity}, RQST: ${data.requestType}`,
  //     // prefix: "",
  //     name: data.fullName,
  //     mobile: data.mobile,
  //     phone: data.phone,
  //     email: data.email,
  //     date: new Date().toISOString().split("T")[0],
  //     // category: "Generator Dealers",
  //     // area: "Ghatkopar West",
  //     // city: "Mumbai",
  //     // brancharea: "Apollo Bunder",
  //     dncmobile: 0,
  //     dncphone: 0,
  //     company: "Antravi Pvt Ltd",
  //     pincode: "0",
  //     time: new Date().toLocaleTimeString("en-GB"),
  //     branchpin: "400001",
  //     parentid: "PXX22.XX22.150705230454.M4B1",
  //     ClientId: "2027"
  //   };

  //   const response = await fetch(
  //     "https://facebookleadimportapi.traviyo.com/api/webhooks/JustDialLeads",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(payload)
  //     }
  //   );

  //   if (!response.ok) {
  //     throw new Error("JustDial API call failed");
  //   }

  //   return response.json();
  // };


  const handleSubmit = async (): Promise<void> => {
    if (validateStep(currentStep)) {

      const payload = {
        fullName: `${formData.firstName} ${formData.lastName}`,
        mobile: formData.mobile,
        email: formData.email,
        destination: formData.destination,
        numberOfAdults: formData.numberOfAdults,
        numberOfNights: formData.numberOfNights,
        travelDates: new Date(formData.travelDates || '').toLocaleDateString(),
        lookingToBook: formData.lookingToBook,
        preferredBudget: formData.preferredBudget,
        specialOccasion: formData.specialOccasion,
        departureCity: formData.departureCity,
        anyRequest: formData.anyRequest
      };

      try{
        await fetch("https://ljivhzufmvrrldkzeiwg.supabase.co/functions/v1/smooth-action", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }).then(response => response.json()).catch(err => {
          console.log('error while sending smooth action',err);
        });
        // await sendJustDialLead(payload);
      } catch (err) {
        console.log('error while sending just dial lead',err);
      }


      navigate("/thankyou");

      onClose();
      setFormData({
        firstName: "", lastName: "", mobile: "", email: "", destination: "",
        numberOfAdults: "", travelDates: undefined, numberOfNights: "",
        lookingToBook: "", preferredBudget: "", specialOccasion: "",
        departureCity: "", anyRequest: ""
      });

      setCurrentStep(1);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | Date | undefined): void => {
    if (field === 'mobile' && typeof value === 'string') {
      const cleanNumber = value.replace(/\D/g, '');
      if (cleanNumber.length === 10 && !value.startsWith('+91')) {
        value = `+91${cleanNumber}`;
      }
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const steps: Step[] = [
    { number: 1, title: "Personal Details", icon: User },
    { number: 2, title: "Trip Details", icon: MapPin },
    { number: 3, title: "Preferences", icon: Heart },
  ];

  const nightOptions: string[] = ["2 Nights / 3 Days", "3 Nights / 4 Days", "4 Nights / 5 Days", "5 Nights / 6 Days",
    "6 Nights / 7 Days", "7 Nights / 8 Days", "8 Nights / 9 Days"];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <DialogHeader>
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20 mb-4 animate-bounce">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                  <Plane className="w-10 h-10 text-white transform rotate-45" />
                </div>
              </div>
            </div>
            <DialogTitle className="text-center text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Plan Your Dream Vacation ✈️
            </DialogTitle>
            <p className="text-center text-gray-700 text-sm mt-2 font-medium">
              Let us create your perfect travel experience with personalized itineraries and exclusive deals 🌴
            </p>
          </div>
        </DialogHeader>

        <div className="flex justify-between mb-8 mt-4 relative">
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }} />
          </div>
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            return (
              <div key={step.number} className="flex flex-col items-center flex-1 relative">
                <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-2 transition-all duration-500 transform shadow-lg",
                    isActive ? "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white scale-110 animate-pulse" :
                    isCompleted ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white scale-105" :
                    "bg-white text-gray-400 border-2 border-gray-200")}>
                  {isCompleted ? <Check className="w-6 h-6 animate-bounce" /> :
                    <Icon className={cn("w-6 h-6", isActive && "animate-bounce")} />}
                </div>
                <span className={cn("text-xs font-bold text-center transition-all duration-300",
                    isActive ? "text-purple-600 scale-105" : isCompleted ? "text-green-600" : "text-gray-500")}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>

        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-100">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-800">Tell us about yourself 👋</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input id="firstName" value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Enter your first name"
                    className={cn("border-2 focus:ring-2 focus:ring-purple-400 transition-all duration-300",
                      errors.firstName ? "border-red-500" : "border-gray-200 focus:border-purple-400")} />
                  {errors.firstName && <p className="text-red-500 text-xs animate-in fade-in">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input id="lastName" value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Enter your last name"
                    className={cn("border-2 focus:ring-2 focus:ring-purple-400 transition-all duration-300",
                      errors.lastName ? "border-red-500" : "border-gray-200 focus:border-purple-400")} />
                  {errors.lastName && <p className="text-red-500 text-xs animate-in fade-in">{errors.lastName}</p>}
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <Label htmlFor="mobile" className="text-sm font-semibold text-gray-700">
                  Mobile <span className="text-red-500">*</span>
                </Label>
                <Input id="mobile" value={formData.mobile}
                  onChange={(e) => handleInputChange("mobile", e.target.value)}
                  placeholder="+91XXXXXXXXXX"
                  className={cn("border-2 focus:ring-2 focus:ring-purple-400 transition-all duration-300",
                    errors.mobile ? "border-red-500" : "border-gray-200 focus:border-purple-400")} />
                {errors.mobile && <p className="text-red-500 text-xs animate-in fade-in">{errors.mobile}</p>}
              </div>

              <div className="space-y-2 mt-4">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input id="email" type="email" value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email address"
                  className={cn("border-2 focus:ring-2 focus:ring-purple-400 transition-all duration-300",
                    errors.email ? "border-red-500" : "border-gray-200 focus:border-purple-400")} />
                {errors.email && <p className="text-red-500 text-xs animate-in fade-in">{errors.email}</p>}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-800">Where to? 🌍</h3>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">
                  Destination <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.destination} onValueChange={(value) => handleInputChange("destination", value)}>
                  <SelectTrigger className={cn("border-2 focus:ring-2 focus:ring-blue-400 transition-all duration-300",
                      errors.destination ? "border-red-500" : "border-gray-200")}>
                    <SelectValue placeholder="Select your destination" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="maldives"><div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-500" /><span>🏝️ Maldives</span></div></SelectItem>
                    <SelectItem value="thailand"><div className="flex items-center gap-2">
                        <Map className="w-4 h-4 text-green-500" /><span>🌺 Thailand</span></div></SelectItem>
                    <SelectItem value="bali"><div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-pink-500" /><span>🌴 Bali</span></div></SelectItem>
                  </SelectContent>
                </Select>
                {errors.destination && <p className="text-red-500 text-xs animate-in fade-in">{errors.destination}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700">
                    Number of Adults <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.numberOfAdults} onValueChange={(value) => handleInputChange("numberOfAdults", value)}>
                    <SelectTrigger className={cn("border-2 focus:ring-2 focus:ring-blue-400 transition-all duration-300",
                        errors.numberOfAdults ? "border-red-500" : "border-gray-200")}>
                      <SelectValue placeholder="Select adults" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span>{num} {num === 1 ? "Adult" : "Adults"}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.numberOfAdults && <p className="text-red-500 text-xs animate-in fade-in">{errors.numberOfAdults}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700">
                    Number of Nights/Days <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.numberOfNights} onValueChange={(value) => handleInputChange("numberOfNights", value)}>
                    <SelectTrigger className={cn("border-2 focus:ring-2 focus:ring-blue-400 transition-all duration-300",
                        errors.numberOfNights ? "border-red-500" : "border-gray-200")}>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {nightOptions.map((option) => (<SelectItem key={option} value={option}>⏰ {option}</SelectItem>))}
                    </SelectContent>
                  </Select>
                  {errors.numberOfNights && <p className="text-red-500 text-xs animate-in fade-in">{errors.numberOfNights}</p>}
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <Label className="text-sm font-semibold text-gray-700">
                  Travel Dates <span className="text-red-500">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal border-2 focus:ring-2 focus:ring-blue-400 transition-all duration-300",
                        !formData.travelDates && "text-muted-foreground",
                        errors.travelDates ? "border-red-500" : "border-gray-200")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.travelDates ? formatDate(formData.travelDates) : <span>📅 Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white">
                    <Calendar mode="single" selected={formData.travelDates}
                      onSelect={(date) => handleInputChange("travelDates", date)} initialFocus />
                  </PopoverContent>
                </Popover>
                {errors.travelDates && <p className="text-red-500 text-xs animate-in fade-in">{errors.travelDates}</p>}
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-pink-600" />
                <h3 className="text-lg font-bold text-gray-800">Customize your experience 💖</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700">
                    When you are looking to book <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.lookingToBook} onValueChange={(value) => handleInputChange("lookingToBook", value)}>
                    <SelectTrigger className={cn("border-2 focus:ring-2 focus:ring-pink-400 transition-all duration-300",
                        errors.lookingToBook ? "border-red-500" : "border-gray-200")}>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="3-days">⚡ 3 days</SelectItem>
                      <SelectItem value="7-days">📅 7 days</SelectItem>
                      <SelectItem value="15-days">🗓️ 15 days</SelectItem>
                      <SelectItem value="1-month">📆 a month</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.lookingToBook && <p className="text-red-500 text-xs animate-in fade-in">{errors.lookingToBook}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700">
                    Preferred Budget <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.preferredBudget} onValueChange={(value) => handleInputChange("preferredBudget", value)}>
                    <SelectTrigger className={cn("border-2 focus:ring-2 focus:ring-pink-400 transition-all duration-300",
                        errors.preferredBudget ? "border-red-500" : "border-gray-200")}>
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="1-2-lakhs"><div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-500" /><span>💵 1-2 Lakhs</span></div></SelectItem>
                      <SelectItem value="2-3-lakhs"><div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-500" /><span>💰 2-3 Lakhs</span></div></SelectItem>
                      <SelectItem value="3-4-lakhs"><div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-500" /><span>💸 3-4 Lakhs</span></div></SelectItem>
                      <SelectItem value="4-5-lakhs"><div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-500" /><span>💎 4-5 Lakhs</span></div></SelectItem>
                      <SelectItem value="5-plus-lakhs"><div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-500" /><span>👑 5+ Lakhs</span></div></SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.preferredBudget && <p className="text-red-500 text-xs animate-in fade-in">{errors.preferredBudget}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700">Special Occasion, if any</Label>
                  <Select value={formData.specialOccasion} onValueChange={(value) => handleInputChange("specialOccasion", value)}>
                    <SelectTrigger className="border-2 border-gray-200 focus:ring-2 focus:ring-pink-400 transition-all duration-300">
                      <SelectValue placeholder="Select occasion" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="honeymoon">💑 Honeymoon</SelectItem>
                      <SelectItem value="anniversary">🎉 Anniversary</SelectItem>
                      <SelectItem value="family-vacation">👨‍👩‍👧‍👦 Family Vacation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="departureCity" className="text-sm font-semibold text-gray-700">
                    Departure City <span className="text-red-500">*</span>
                  </Label>
                  <Input id="departureCity" value={formData.departureCity}
                    onChange={(e) => handleInputChange("departureCity", e.target.value)}
                    placeholder="🛫 Enter your departure city"
                    className={cn("border-2 focus:ring-2 focus:ring-pink-400 transition-all duration-300",
                      errors.departureCity ? "border-red-500" : "border-gray-200 focus:border-pink-400")} />
                  {errors.departureCity && <p className="text-red-500 text-xs animate-in fade-in">{errors.departureCity}</p>}
                </div>
              </div>

              <div className="space-y-2 mt-4 col-span-2">
                <Label htmlFor="anyRequest" className="text-sm font-semibold text-gray-700">Any Request</Label>
                <Textarea id="anyRequest" value={formData.anyRequest}
                  onChange={(e) => handleInputChange("anyRequest", e.target.value)}
                  placeholder="✨ Tell us about any special requests or preferences..." rows={3}
                  className="border-2 border-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300" />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}
            className="px-6 border-2 border-gray-300 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 disabled:opacity-50">
            ← Previous
          </Button>
          <div className="flex gap-2">
            {currentStep < 3 ? (
              <Button onClick={handleNext} disabled={!isStepValid(currentStep)}
                className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 px-8 shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none">
                Next →
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={!isStepValid(currentStep)}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none">
                🎉 Submit & Book!
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}