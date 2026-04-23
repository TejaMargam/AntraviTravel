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

// Luxury styling constants
const goldColor = "#cc8500";
const navyColor = "#162660";
const ivoryColor = "#ffffff";

const luxuryInputClass = `
  w-full bg-transparent border-0 border-b border-[#C9A96E]/40 rounded-none px-0 py-2
  text-[#0D1B2A] placeholder:text-[#0D1B2A]/30 text-sm tracking-wide
  focus:outline-none focus:border-[#C9A96E] focus:ring-0
  transition-colors duration-300
`;

const luxuryLabelClass = "block text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium mb-1";
const luxuryErrorClass = "text-red-400 text-[10px] mt-1 tracking-wide";

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
    if (validateStep(currentStep)) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = (): void => {
    setCurrentStep(currentStep - 1);
  };

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

      try {
        await fetch("https://hook.eu1.make.com/8qt45gw9dkmr4ix1hswa98m772f7vz6p", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }).then(response => response.json()).catch(err => {
          console.log('error while sending smooth action', err);
        });
      } catch (err) {
        console.log('error while sending just dial lead', err);
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
    { number: 1, title: "Your Details", icon: User },
    { number: 2, title: "The Journey", icon: MapPin },
    { number: 3, title: "Preferences", icon: Heart },
  ];

  const nightOptions: string[] = [
    "2 Nights / 3 Days", "3 Nights / 4 Days", "4 Nights / 5 Days",
    "5 Nights / 6 Days", "6 Nights / 7 Days", "7 Nights / 8 Days", "8 Nights / 9 Days"
  ];

  const selectTriggerClass = cn(
    "w-full bg-transparent border-0 border-b border-[#C9A96E]/40 rounded-none px-0 h-9",
    "text-[#0D1B2A] text-sm tracking-wide",
    "focus:outline-none focus:border-[#C9A96E] focus:ring-0",
    "transition-colors duration-300 hover:border-[#C9A96E]/70"
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="p-0 border-0 overflow-hidden"
        style={{
          maxWidth: "620px",
          maxHeight: "90vh",
          background: ivoryColor,
          borderRadius: "2px",
          boxShadow: "0 30px 80px rgba(13,27,42,0.25), 0 0 0 1px rgba(201,169,110,0.2)",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {/* Gold top bar */}
        <div style={{ height: "3px", background: `linear-gradient(90deg, transparent, ${goldColor}, transparent)` }} />

        <div className="overflow-y-auto" style={{ maxHeight: "calc(90vh - 3px)" }}>

          {/* Header */}
          <div
            className="relative px-10 pt-10 pb-8 text-center"
            style={{ background: navyColor }}
          >
            {/* Decorative corner lines */}
            <div className="absolute top-4 left-4 w-8 h-8" style={{ borderTop: `1px solid ${goldColor}40`, borderLeft: `1px solid ${goldColor}40` }} />
            <div className="absolute top-4 right-4 w-8 h-8" style={{ borderTop: `1px solid ${goldColor}40`, borderRight: `1px solid ${goldColor}40` }} />

            <div className="flex justify-center mb-4">
              <div
                className="flex items-center justify-center"
                style={{
                  width: "56px", height: "56px",
                  border: `1px solid ${goldColor}60`,
                  borderRadius: "50%",
                  background: "rgba(201,169,110,0.08)"
                }}
              >
                <Plane style={{ color: goldColor, width: "22px", height: "22px", transform: "rotate(45deg)" }} />
              </div>
            </div>

            <DialogTitle
              className="text-2xl font-normal mb-2 tracking-widest uppercase"
              style={{ color: goldColor, letterSpacing: "0.25em", fontSize: "13px" }}
            >
              Antravi
            </DialogTitle>
            <p
              className="text-3xl font-normal mt-1"
              style={{ color: "#FAF7F0", fontFamily: "'Georgia', serif", letterSpacing: "0.02em" }}
            >
              Plan Your Journey
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div style={{ height: "1px", width: "40px", background: `${goldColor}40` }} />
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: goldColor }} />
              <div style={{ height: "1px", width: "40px", background: `${goldColor}40` }} />
            </div>
          </div>

          {/* Step Indicator */}
          <div
            className="flex items-center justify-center gap-0 px-10 py-6"
            style={{ background: navyColor, borderBottom: `1px solid ${goldColor}20` }}
          >
            {steps.map((step, idx) => {
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;
              return (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex items-center justify-center transition-all duration-500"
                      style={{
                        width: "32px", height: "32px",
                        borderRadius: "50%",
                        border: `1px solid ${isActive || isCompleted ? goldColor : `${goldColor}30`}`,
                        background: isCompleted ? goldColor : isActive ? "rgba(201,169,110,0.15)" : "transparent",
                        color: isCompleted ? navyColor : isActive ? goldColor : `${goldColor}40`,
                      }}
                    >
                      {isCompleted
                        ? <Check style={{ width: "14px", height: "14px" }} />
                        : <span style={{ fontSize: "11px", fontFamily: "sans-serif" }}>{step.number}</span>
                      }
                    </div>
                    <span
                      className="mt-2 uppercase tracking-widest"
                      style={{
                        fontSize: "9px",
                        color: isActive ? goldColor : isCompleted ? `${goldColor}80` : `${goldColor}30`,
                        letterSpacing: "0.15em"
                      }}
                    >
                      {step.title}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className="mx-4 mb-5"
                      style={{
                        width: "60px", height: "1px",
                        background: currentStep > step.number
                          ? `linear-gradient(90deg, ${goldColor}, ${goldColor}60)`
                          : `${goldColor}20`
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Form Body */}
          <div className="px-10 py-8">

            {/* Step Labels */}
            <div className="mb-8">
              <p className="uppercase tracking-[0.25em] text-[10px] mb-1" style={{ color: goldColor }}>
                Step {currentStep} of 3
              </p>
              <h3 className="text-xl font-normal" style={{ color: navyColor, fontFamily: "'Georgia', serif" }}>
                {currentStep === 1 && "Tell us about yourself"}
                {currentStep === 2 && "Where do you wish to go?"}
                {currentStep === 3 && "Curate your experience"}
              </h3>
              <div className="mt-2" style={{ width: "32px", height: "1px", background: goldColor }} />
            </div>

            {/* Step 1 */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className={luxuryLabelClass}>First Name <span style={{ color: "#C9A96E" }}>*</span></label>
                    <input
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="First name"
                      className={luxuryInputClass}
                      style={{ borderColor: errors.firstName ? "#f87171" : undefined }}
                    />
                    {errors.firstName && <p className={luxuryErrorClass}>{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className={luxuryLabelClass}>Last Name <span style={{ color: "#C9A96E" }}>*</span></label>
                    <input
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Last name"
                      className={luxuryInputClass}
                      style={{ borderColor: errors.lastName ? "#f87171" : undefined }}
                    />
                    {errors.lastName && <p className={luxuryErrorClass}>{errors.lastName}</p>}
                  </div>
                </div>
                <div>
                  <label className={luxuryLabelClass}>Mobile Number <span style={{ color: "#C9A96E" }}>*</span></label>
                  <input
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    placeholder="+91XXXXXXXXXX"
                    className={luxuryInputClass}
                    style={{ borderColor: errors.mobile ? "#f87171" : undefined }}
                  />
                  {errors.mobile && <p className={luxuryErrorClass}>{errors.mobile}</p>}
                </div>
                <div>
                  <label className={luxuryLabelClass}>Email Address <span style={{ color: "#C9A96E" }}>*</span></label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className={luxuryInputClass}
                    style={{ borderColor: errors.email ? "#f87171" : undefined }}
                  />
                  {errors.email && <p className={luxuryErrorClass}>{errors.email}</p>}
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className={luxuryLabelClass}>Destination <span style={{ color: "#C9A96E" }}>*</span></label>
                  <Select value={formData.destination} onValueChange={(value) => handleInputChange("destination", value)}>
                    <SelectTrigger
                      className={selectTriggerClass}
                      style={{ borderColor: errors.destination ? "#f87171" : undefined }}
                    >
                      <SelectValue placeholder="Select your destination" />
                    </SelectTrigger>
                    <SelectContent style={{ background: ivoryColor, border: `1px solid ${goldColor}30`, borderRadius: "2px" }}>
                      <SelectItem value="maldives">Maldives</SelectItem>
                      <SelectItem value="thailand">Thailand</SelectItem>
                      <SelectItem value="bali">Bali</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.destination && <p className={luxuryErrorClass}>{errors.destination}</p>}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className={luxuryLabelClass}>Number of Adults <span style={{ color: "#C9A96E" }}>*</span></label>
                    <Select value={formData.numberOfAdults} onValueChange={(value) => handleInputChange("numberOfAdults", value)}>
                      <SelectTrigger
                        className={selectTriggerClass}
                        style={{ borderColor: errors.numberOfAdults ? "#f87171" : undefined }}
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent style={{ background: ivoryColor, border: `1px solid ${goldColor}30`, borderRadius: "2px" }}>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Adult" : "Adults"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.numberOfAdults && <p className={luxuryErrorClass}>{errors.numberOfAdults}</p>}
                  </div>

                  <div>
                    <label className={luxuryLabelClass}>Duration <span style={{ color: "#C9A96E" }}>*</span></label>
                    <Select value={formData.numberOfNights} onValueChange={(value) => handleInputChange("numberOfNights", value)}>
                      <SelectTrigger
                        className={selectTriggerClass}
                        style={{ borderColor: errors.numberOfNights ? "#f87171" : undefined }}
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent style={{ background: ivoryColor, border: `1px solid ${goldColor}30`, borderRadius: "2px" }}>
                        {nightOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.numberOfNights && <p className={luxuryErrorClass}>{errors.numberOfNights}</p>}
                  </div>
                </div>

                <div>
                  <label className={luxuryLabelClass}>Travel Date <span style={{ color: "#C9A96E" }}>*</span></label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        className={cn(
                          "w-full text-left text-sm tracking-wide py-2 border-b transition-colors duration-300",
                          "bg-transparent focus:outline-none",
                          errors.travelDates ? "border-red-400" : "border-[#C9A96E]/40 hover:border-[#C9A96E]"
                        )}
                        style={{ color: formData.travelDates ? navyColor : `${navyColor}40`, fontFamily: "'Georgia', serif" }}
                      >
                        <span className="flex items-center gap-2">
                          <CalendarIcon style={{ width: "14px", height: "14px", color: goldColor }} />
                          {formData.travelDates ? formatDate(formData.travelDates) : "Select departure date"}
                        </span>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" style={{ background: ivoryColor, border: `1px solid ${goldColor}30`, borderRadius: "2px" }}>
                      <Calendar
                        mode="single"
                        selected={formData.travelDates}
                        onSelect={(date) => handleInputChange("travelDates", date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.travelDates && <p className={luxuryErrorClass}>{errors.travelDates}</p>}
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className={luxuryLabelClass}>Booking Timeline <span style={{ color: "#C9A96E" }}>*</span></label>
                    <Select value={formData.lookingToBook} onValueChange={(value) => handleInputChange("lookingToBook", value)}>
                      <SelectTrigger
                        className={selectTriggerClass}
                        style={{ borderColor: errors.lookingToBook ? "#f87171" : undefined }}
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent style={{ background: ivoryColor, border: `1px solid ${goldColor}30`, borderRadius: "2px" }}>
                        <SelectItem value="3-days">Within 3 days</SelectItem>
                        <SelectItem value="7-days">Within a week</SelectItem>
                        <SelectItem value="15-days">Within 15 days</SelectItem>
                        <SelectItem value="1-month">Within a month</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.lookingToBook && <p className={luxuryErrorClass}>{errors.lookingToBook}</p>}
                  </div>

                  <div>
                    <label className={luxuryLabelClass}>Preferred Budget <span style={{ color: "#C9A96E" }}>*</span></label>
                    <Select value={formData.preferredBudget} onValueChange={(value) => handleInputChange("preferredBudget", value)}>
                      <SelectTrigger
                        className={selectTriggerClass}
                        style={{ borderColor: errors.preferredBudget ? "#f87171" : undefined }}
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent style={{ background: ivoryColor, border: `1px solid ${goldColor}30`, borderRadius: "2px" }}>
                        <SelectItem value="1-2-lakhs">₹1 – 2 Lakhs</SelectItem>
                        <SelectItem value="2-3-lakhs">₹2 – 3 Lakhs</SelectItem>
                        <SelectItem value="3-4-lakhs">₹3 – 4 Lakhs</SelectItem>
                        <SelectItem value="4-5-lakhs">₹4 – 5 Lakhs</SelectItem>
                        <SelectItem value="5-plus-lakhs">₹5 Lakhs & above</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.preferredBudget && <p className={luxuryErrorClass}>{errors.preferredBudget}</p>}
                  </div>

                  <div>
                    <label className={luxuryLabelClass}>Special Occasion</label>
                    <Select value={formData.specialOccasion} onValueChange={(value) => handleInputChange("specialOccasion", value)}>
                      <SelectTrigger className={selectTriggerClass}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent style={{ background: ivoryColor, border: `1px solid ${goldColor}30`, borderRadius: "2px" }}>
                        <SelectItem value="honeymoon">Honeymoon</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="family-vacation">Family Vacation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className={luxuryLabelClass}>Departure City <span style={{ color: "#C9A96E" }}>*</span></label>
                    <input
                      value={formData.departureCity}
                      onChange={(e) => handleInputChange("departureCity", e.target.value)}
                      placeholder="City of departure"
                      className={luxuryInputClass}
                      style={{ borderColor: errors.departureCity ? "#f87171" : undefined }}
                    />
                    {errors.departureCity && <p className={luxuryErrorClass}>{errors.departureCity}</p>}
                  </div>
                </div>

                <div>
                  <label className={luxuryLabelClass}>Special Requests</label>
                  <textarea
                    value={formData.anyRequest}
                    onChange={(e) => handleInputChange("anyRequest", e.target.value)}
                    placeholder="Any special arrangements, dietary preferences, or bespoke requests..."
                    rows={3}
                    className="w-full bg-transparent border-b border-[#C9A96E]/40 px-0 py-2 text-sm tracking-wide text-[#0D1B2A] placeholder:text-[#0D1B2A]/30 focus:outline-none focus:border-[#C9A96E] transition-colors duration-300 resize-none"
                    style={{ fontFamily: "'Georgia', serif" }}
                  />
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6" style={{ borderTop: `1px solid ${goldColor}20` }}>
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="uppercase tracking-[0.2em] text-[10px] transition-all duration-300 disabled:opacity-20"
                style={{ color: navyColor, fontFamily: "sans-serif", letterSpacing: "0.2em" }}
              >
                ← Previous
              </button>

              {currentStep < 3 ? (
                <button
                  onClick={handleNext}
                  disabled={!isStepValid(currentStep)}
                  className="flex items-center gap-3 uppercase tracking-[0.2em] text-[11px] px-8 py-3 transition-all duration-300 disabled:opacity-30 hover:opacity-90"
                  style={{
                    background: navyColor,
                    color: goldColor,
                    fontFamily: "sans-serif",
                    letterSpacing: "0.2em",
                    borderRadius: "1px",
                  }}
                >
                  Continue
                  <span style={{ color: goldColor }}>→</span>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isStepValid(currentStep)}
                  className="flex items-center gap-3 uppercase tracking-[0.2em] text-[11px] px-8 py-3 transition-all duration-300 disabled:opacity-30 hover:opacity-90"
                  style={{
                    background: goldColor,
                    color: navyColor,
                    fontFamily: "sans-serif",
                    letterSpacing: "0.2em",
                    borderRadius: "1px",
                  }}
                >
                  Reserve My Vacation Now
                </button>
              )}
            </div>
          </div>

          {/* Footer accent */}
          <div className="px-10 pb-6 text-center">
            <p className="uppercase tracking-[0.2em] text-[9px]" style={{ color: `${navyColor}40`, letterSpacing: "0.2em" }}>
              Crafted for the discerning traveller
            </p>
          </div>
        </div>

        {/* Gold bottom bar */}
        <div style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${goldColor}60, transparent)` }} />
      </DialogContent>
    </Dialog>
  );
}