import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Check, User, MapPin, Calendar as CalendarIcon2, DollarSign, Heart, Plane } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

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

export default function TravelForm({ isOpen, onClose }: TravelFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
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
      return !!(
        formData.firstName.trim() &&
        formData.lastName.trim() &&
        formData.mobile.trim() &&
        /^\+91\d{10}$/.test(formData.mobile) &&
        formData.email.trim() &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      );
    }

    if (step === 2) {
      return !!(
        formData.destination &&
        formData.numberOfAdults &&
        formData.travelDates &&
        formData.numberOfNights
      );
    }

    if (step === 3) {
      return !!(
        formData.lookingToBook &&
        formData.preferredBudget &&
        formData.departureCity.trim()
      );
    }

    return false;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      console.log("Form submitted:", formData);
      onClose();
      // Reset form
      setFormData({
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
      setCurrentStep(1);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | Date | undefined) => {
    // Auto-prefix mobile number with +91 if it's a 10-digit number
    if (field === 'mobile' && typeof value === 'string') {
      const cleanNumber = value.replace(/\D/g, '');
      if (cleanNumber.length === 10 && !value.startsWith('+91')) {
        value = `+91${cleanNumber}`;
      }
    }
    
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const steps = [
    { number: 1, title: "Personal Details", icon: User },
    { number: 2, title: "Trip Details", icon: MapPin },
    { number: 3, title: "Preferences", icon: Heart },
  ];

  const nightOptions = [
    "2 Nights / 3 Days",
    "3 Nights / 4 Days",
    "4 Nights / 5 Days",
    "5 Nights / 6 Days",
    "6 Nights / 7 Days",
    "7 Nights / 8 Days",
    "8 Nights / 9 Days",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-[#162660]">
            Plan Your Dream Vacation
          </DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8 mt-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            
            return (
              <div key={step.number} className="flex flex-col items-center flex-1">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300",
                    isActive
                      ? "bg-[#162660] text-white"
                      : isCompleted
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium text-center",
                    isActive ? "text-[#162660]" : isCompleted ? "text-green-600" : "text-gray-500"
                  )}
                >
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Step 1: Personal Details */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Enter your first name"
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">{errors.firstName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Enter your last name"
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-sm font-medium">
                Mobile <span className="text-red-500">*</span>
              </Label>
              <Input
                id="mobile"
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                placeholder="+91XXXXXXXXXX"
                className={errors.mobile ? "border-red-500" : ""}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs">{errors.mobile}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email address"
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Trip Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Destination <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.destination}
                onValueChange={(value) => handleInputChange("destination", value)}
              >
                <SelectTrigger className={errors.destination ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select your destination" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="maldives">Maldives</SelectItem>
                  <SelectItem value="thailand">Thailand</SelectItem>
                  <SelectItem value="bali">Bali</SelectItem>
                </SelectContent>
              </Select>
              {errors.destination && (
                <p className="text-red-500 text-xs">{errors.destination}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Number of Adults <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.numberOfAdults}
                  onValueChange={(value) => handleInputChange("numberOfAdults", value)}
                >
                  <SelectTrigger className={errors.numberOfAdults ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select adults" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Adult" : "Adults"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.numberOfAdults && (
                  <p className="text-red-500 text-xs">{errors.numberOfAdults}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Number of Nights/Days <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.numberOfNights}
                  onValueChange={(value) => handleInputChange("numberOfNights", value)}
                >
                  <SelectTrigger className={errors.numberOfNights ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {nightOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.numberOfNights && (
                  <p className="text-red-500 text-xs">{errors.numberOfNights}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Travel Dates <span className="text-red-500">*</span>
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.travelDates && "text-muted-foreground",
                      errors.travelDates && "border-red-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.travelDates ? (
                      format(formData.travelDates, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white">
                  <Calendar
                    mode="single"
                    selected={formData.travelDates}
                    onSelect={(date) => handleInputChange("travelDates", date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.travelDates && (
                <p className="text-red-500 text-xs">{errors.travelDates}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Preferences */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  When you are looking to book <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.lookingToBook}
                  onValueChange={(value) => handleInputChange("lookingToBook", value)}
                >
                  <SelectTrigger className={errors.lookingToBook ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="3-days">3 days</SelectItem>
                    <SelectItem value="7-days">7 days</SelectItem>
                    <SelectItem value="15-days">15 days</SelectItem>
                    <SelectItem value="1-month">a month</SelectItem>
                  </SelectContent>
                </Select>
                {errors.lookingToBook && (
                  <p className="text-red-500 text-xs">{errors.lookingToBook}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Preferred Budget <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.preferredBudget}
                  onValueChange={(value) => handleInputChange("preferredBudget", value)}
                >
                  <SelectTrigger className={errors.preferredBudget ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="1-2-lakhs">1-2 Lakhs</SelectItem>
                    <SelectItem value="2-3-lakhs">2-3 Lakhs</SelectItem>
                    <SelectItem value="3-4-lakhs">3-4 Lakhs</SelectItem>
                    <SelectItem value="4-5-lakhs">4-5 Lakhs</SelectItem>
                    <SelectItem value="5-plus-lakhs">5+ Lakhs</SelectItem>
                  </SelectContent>
                </Select>
                {errors.preferredBudget && (
                  <p className="text-red-500 text-xs">{errors.preferredBudget}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Special Occasion, if any
                </Label>
                <Select
                  value={formData.specialOccasion}
                  onValueChange={(value) => handleInputChange("specialOccasion", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select occasion" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="honeymoon">Honeymoon</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="family-vacation">Family Vacation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="departureCity" className="text-sm font-medium">
                  Departure City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="departureCity"
                  value={formData.departureCity}
                  onChange={(e) => handleInputChange("departureCity", e.target.value)}
                  placeholder="Enter your departure city"
                  className={errors.departureCity ? "border-red-500" : ""}
                />
                {errors.departureCity && (
                  <p className="text-red-500 text-xs">{errors.departureCity}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="anyRequest" className="text-sm font-medium">
                Any Request
              </Label>
              <Textarea
                id="anyRequest"
                value={formData.anyRequest}
                onChange={(e) => handleInputChange("anyRequest", e.target.value)}
                placeholder="Tell us about any special requests or preferences..."
                rows={3}
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="px-6"
          >
            Previous
          </Button>
          
          <div className="flex gap-2">
            {currentStep < 3 ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid(currentStep)}
                className="bg-[#162660] hover:bg-[#162660e6] px-6"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid(currentStep)}
                className="bg-[#162660] hover:bg-[#162660e6] px-6"
              >
                Submit
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}