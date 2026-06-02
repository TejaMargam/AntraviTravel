import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";

import {
  User,
  Phone,
  Mail,
  CalendarDays,
  MoonStar,
  Users,
  MapPin,
  Plane,
  ChevronRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

interface TravelFormProps {
  isOpen: boolean;
  onClose: () => void;
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

export function TravelForm({
  isOpen,
  onClose,
}: TravelFormProps) {
  const [, navigate] = useLocation();

  const [currentStep, setCurrentStep] =
    useState<number>(1);

  const [formData, setFormData] =
    useState<FormData>({
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

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const bgImage =
    "/images/maldives/resorts/centara/centara-image-1.webp";

  const nightOptions: string[] = [
    "2 Nights / 3 Days",
    "3 Nights / 4 Days",
    "4 Nights / 5 Days",
    "5 Nights / 6 Days",
    "6 Nights / 7 Days",
    "7 Nights / 8 Days",
    "8 Nights / 9 Days",
  ];

  /* =========================================================
      VALIDATION
  ========================================================= */

  const validateStep = (
    step: number
  ): boolean => {
    const newErrors: Record<string, string> =
      {};

    if (step === 1) {
      if (!formData.firstName.trim()) {
        newErrors.firstName =
          "First name is required";
      }

      if (!formData.lastName.trim()) {
        newErrors.lastName =
          "Last name is required";
      }

      if (!formData.mobile.trim()) {
        newErrors.mobile =
          "Mobile number is required";
      } else if (
        !/^\+91\d{10}$/.test(formData.mobile)
      ) {
        newErrors.mobile =
          "Mobile number must have 10 digits";
      }

      if (!formData.email.trim()) {
        newErrors.email =
          "Email is required";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          formData.email
        )
      ) {
        newErrors.email =
          "Please enter a valid email address";
      }
    }

    if (step === 2) {
      if (!formData.destination) {
        newErrors.destination =
          "Destination is required";
      }

      if (!formData.numberOfAdults) {
        newErrors.numberOfAdults =
          "Number of adults is required";
      }

      if (!formData.travelDates) {
        newErrors.travelDates =
          "Travel dates are required";
      }

      if (!formData.numberOfNights) {
        newErrors.numberOfNights =
          "Number of nights is required";
      }
    }

    if (step === 3) {
      if (!formData.lookingToBook) {
        newErrors.lookingToBook =
          "Booking timeline is required";
      }

      if (!formData.preferredBudget) {
        newErrors.preferredBudget =
          "Budget is required";
      }

      if (!formData.departureCity.trim()) {
        newErrors.departureCity =
          "Departure city is required";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =========================================================
      STEP VALID
  ========================================================= */

  const isStepValid = (
    step: number
  ): boolean => {
    if (step === 1) {
      return !!(
        formData.firstName.trim() &&
        formData.lastName.trim() &&
        formData.mobile.trim() &&
        /^\+91\d{10}$/.test(
          formData.mobile
        ) &&
        formData.email.trim() &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          formData.email
        )
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

  /* =========================================================
      HANDLERS
  ========================================================= */

  const handleNext = (): void => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = (): void => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | Date | undefined
  ): void => {
    if (
      field === "mobile" &&
      typeof value === "string"
    ) {
      const cleanNumber =
        value.replace(/\D/g, "");

      if (
        cleanNumber.length === 10 &&
        !value.startsWith("+91")
      ) {
        value = `+91${cleanNumber}`;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  /* =========================================================
      SUBMIT
  ========================================================= */

  const handleSubmit = async (): Promise<void> => {
    if (validateStep(currentStep)) {
      const payload = {
        fullName: `${formData.firstName} ${formData.lastName}`,
        mobile: formData.mobile,
        email: formData.email,
        destination: formData.destination,
        numberOfAdults:
          formData.numberOfAdults,
        numberOfNights:
          formData.numberOfNights,
        travelDates: new Date(
          formData.travelDates || ""
        ).toLocaleDateString(),

        lookingToBook:
          formData.lookingToBook,

        preferredBudget:
          formData.preferredBudget,

        specialOccasion:
          formData.specialOccasion,

        departureCity:
          formData.departureCity,

        anyRequest: formData.anyRequest,
      };

      try {
        await fetch(
          "https://hook.eu1.make.com/8qt45gw9dkmr4ix1hswa98m772f7vz6p",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
      } catch (err) {
        console.log(err);
      }

      navigate("/thankyou");

      onClose();

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

  /* =========================================================
      INPUT STYLE
  ========================================================= */

  const inputClass = `
    w-full h-14 rounded-full
    bg-[#EEF3FF]
    border border-[#DCE6FF]
    px-5
    text-[14px]
    outline-none
    transition-all duration-300
    focus:border-[#4F7CFF]
    focus:ring-4 focus:ring-[#4F7CFF]/10
    placeholder:text-[#97A3B6]
    text-[#13254A]
  `;

  const selectContentClass = `
    border border-white/35
    bg-white/75
    text-[#13254A]
    shadow-[0_24px_70px_rgba(16,36,74,0.18)]
    backdrop-blur-xl
  `;

  const datePopoverClass = `
    w-auto p-0
    border border-white/35
    bg-white/75
    shadow-[0_24px_70px_rgba(16,36,74,0.18)]
    backdrop-blur-xl
  `;

  const primaryButtonStyle = {
    background:
      "linear-gradient(135deg,#18346F,#071A42)",
    boxShadow:
      "0 18px 42px rgba(7,26,66,0.34)",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="
          p-0
          border-0
          overflow-hidden
        "
        style={{
          width: "96vw",
          maxWidth: "1180px",
          height: "92vh",
          maxHeight: "880px",
          borderRadius: "34px",
          background: "#FFFFFF",
          overflow: "hidden",
          boxShadow:
            "0 40px 120px rgba(0,0,0,0.18)",
        }}
      >
        <div
          className="
            grid
            lg:grid-cols-[46%_54%]
            h-full
          "
        >
          {/* =========================================================
              LEFT SIDE
          ========================================================= */}

          <div
            className="
              relative
              hidden
              lg:flex
              flex-col
              justify-between
              p-12
              overflow-hidden
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  180deg,
                  rgba(13,32,77,0.72),
                  rgba(10,24,60,0.82)
                ),
                url(${bgImage})
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* overlays */}

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(54,88,175,0.15), rgba(11,25,56,0.45))",
              }}
            />

            <div
              className="
                absolute
                top-[-80px]
                right-[-60px]
                w-[220px]
                h-[220px]
                rounded-full
              "
              style={{
                background:
                  "rgba(114,149,255,0.18)",
                filter: "blur(20px)",
              }}
            />

            {/* brand */}

            <div className="relative z-10">
              <div
                className="
                  w-16 h-16
                  rounded-full
                  flex items-center justify-center
                  backdrop-blur-md
                "
                style={{
                  background:
                    "rgba(255,255,255,0.10)",
                  border:
                    "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <Plane
                  size={22}
                  color="#FFFFFF"
                />
              </div>

              <p
                className="mt-10"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.45em",
                  color:
                    "rgba(255,255,255,0.85)",
                  fontWeight: 500,
                }}
              >
                ANTRAVI
              </p>

              <h1
                className="
                  mt-10
                  leading-[0.95]
                "
                style={{
                  fontFamily:
                    "'DM Serif Display', serif",
                  fontSize: "84px",
                  color: "#FFFFFF",
                  fontWeight: 400,
                }}
              >
                Where to
                <br />
                next?
              </h1>


            </div>

            {/* bottom card */}

            
          </div>

          {/* =========================================================
              RIGHT SIDE
          ========================================================= */}

          <div
            className="
              relative
              bg-[#FAFBFF]
              overflow-y-auto
            "
          >

            <div
              className="
                px-6
                lg:px-14
                py-10
                lg:py-12
                min-h-full
                flex flex-col
                justify-center
              "
            >
              {/* step */}

              <div className="mb-8">
                <p
                  className="
                    uppercase
                    tracking-[0.28em]
                    text-[11px]
                    font-semibold
                  "
                  style={{
                    color: "#4E73DF",
                  }}
                >
                  Begin Your Journey
                </p>

                <h2
                  className="
                    mt-4
                    leading-[1]
                  "
                  style={{
                    fontFamily:
                      "'DM Serif Display', serif",
                    fontSize:
                      "clamp(42px,4vw,68px)",
                    color: "#10244A",
                    fontWeight: 400,
                  }}
                >
                  {currentStep === 1 &&
                    "Let’s plan your dream vacation"}

                  {currentStep === 2 &&
                    "Choose your perfect getaway"}

                  {currentStep === 3 &&
                    "Complete your journey"}
                </h2>
              </div>

              {/* progress */}

              <div className="flex gap-3 mb-10">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className="flex-1 h-[5px] rounded-full"
                    style={{
                      background:
                        currentStep >= step
                          ? "linear-gradient(90deg,#18346F,#071A42)"
                          : "#E6EBF8",
                    }}
                  />
                ))}
              </div>

              {/* =========================================================
                  FORM CONTENT
              ========================================================= */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  {/* =========================================================
                      STEP 1
                  ========================================================= */}

                  {currentStep === 1 && (
                    <div className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <div
                            className="
                              relative
                              flex items-center
                            "
                          >
                            <User
                              size={18}
                              className="absolute left-5 text-[#4E73DF]"
                            />

                            <input
                              value={
                                formData.firstName
                              }
                              onChange={(e) =>
                                handleInputChange(
                                  "firstName",
                                  e.target.value
                                )
                              }
                              placeholder="First Name"
                              className={`${inputClass} pl-14`}
                            />
                          </div>

                          {errors.firstName && (
                            <p className="text-red-500 text-xs mt-2 ml-3">
                              {
                                errors.firstName
                              }
                            </p>
                          )}
                        </div>

                        <div>
                          <div
                            className="
                              relative
                              flex items-center
                            "
                          >
                            <User
                              size={18}
                              className="absolute left-5 text-[#4E73DF]"
                            />

                            <input
                              value={
                                formData.lastName
                              }
                              onChange={(e) =>
                                handleInputChange(
                                  "lastName",
                                  e.target.value
                                )
                              }
                              placeholder="Last Name"
                              className={`${inputClass} pl-14`}
                            />
                          </div>

                          {errors.lastName && (
                            <p className="text-red-500 text-xs mt-2 ml-3">
                              {
                                errors.lastName
                              }
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <div
                          className="
                            relative
                            flex items-center
                          "
                        >
                          <Phone
                            size={18}
                            className="absolute left-5 text-[#4E73DF]"
                          />

                          <input
                            value={formData.mobile}
                            onChange={(e) =>
                              handleInputChange(
                                "mobile",
                                e.target.value
                              )
                            }
                            placeholder="+91 9876543210"
                            className={`${inputClass} pl-14`}
                          />
                        </div>

                        {errors.mobile && (
                          <p className="text-red-500 text-xs mt-2 ml-3">
                            {errors.mobile}
                          </p>
                        )}
                      </div>

                      <div>
                        <div
                          className="
                            relative
                            flex items-center
                          "
                        >
                          <Mail
                            size={18}
                            className="absolute left-5 text-[#4E73DF]"
                          />

                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange(
                                "email",
                                e.target.value
                              )
                            }
                            placeholder="you@example.com"
                            className={`${inputClass} pl-14`}
                          />
                        </div>

                        {errors.email && (
                          <p className="text-red-500 text-xs mt-2 ml-3">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* =========================================================
                      STEP 2
                  ========================================================= */}

                  {currentStep === 2 && (
                    <div className="space-y-5">
                      {/* destination */}

                      <div>
                        <Select
                          value={
                            formData.destination
                          }
                          onValueChange={(value) =>
                            handleInputChange(
                              "destination",
                              value
                            )
                          }
                        >
                          <SelectTrigger
                            className="
                              h-14 rounded-full border-0
                              bg-[#EEF3FF]
                              px-5
                              shadow-none
                            "
                          >
                            <div className="flex items-center gap-3">
                              <MapPin
                                size={18}
                                color="#4E73DF"
                              />

                              <SelectValue placeholder="Select destination" />
                            </div>
                          </SelectTrigger>

                          <SelectContent
                            className={selectContentClass}
                          >
                            <SelectItem value="maldives">
                              Maldives
                            </SelectItem>

                            <SelectItem value="bali">
                              Bali
                            </SelectItem>

                            <SelectItem value="thailand">
                              Thailand
                            </SelectItem>

                          </SelectContent>
                        </Select>

                        {errors.destination && (
                          <p className="text-red-500 text-xs mt-2 ml-3">
                            {
                              errors.destination
                            }
                          </p>
                        )}
                      </div>

                      {/* row */}

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button
                                className={`
                                  ${inputClass}
                                  flex items-center gap-3
                                  text-left
                                `}
                              >
                                <CalendarDays
                                  size={18}
                                  color="#4E73DF"
                                />

                                <span
                                  className={
                                    formData.travelDates
                                      ? "text-[#13254A]"
                                      : "text-[#97A3B6]"
                                  }
                                >
                                  {formData.travelDates
                                    ? formData.travelDates.toLocaleDateString()
                                    : "Travel Date"}
                                </span>
                              </button>
                            </PopoverTrigger>

                            <PopoverContent
                              className={datePopoverClass}
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={
                                  formData.travelDates
                                }
                                onSelect={(
                                  date
                                ) =>
                                  handleInputChange(
                                    "travelDates",
                                    date
                                  )
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>

                          {errors.travelDates && (
                            <p className="text-red-500 text-xs mt-2 ml-3">
                              {
                                errors.travelDates
                              }
                            </p>
                          )}
                        </div>

                        <div>
                          <Select
                            value={
                              formData.numberOfNights
                            }
                            onValueChange={(value) =>
                              handleInputChange(
                                "numberOfNights",
                                value
                              )
                            }
                          >
                            <SelectTrigger
                              className="
                                h-14 rounded-full border-0
                                bg-[#EEF3FF]
                                px-5
                                shadow-none
                              "
                            >
                              <div className="flex items-center gap-3">
                                <MoonStar
                                  size={18}
                                  color="#4E73DF"
                                />

                                <SelectValue placeholder="Nights" />
                              </div>
                            </SelectTrigger>

                            <SelectContent
                              className={selectContentClass}
                            >
                              {nightOptions.map(
                                (option) => (
                                  <SelectItem
                                    key={option}
                                    value={
                                      option
                                    }
                                  >
                                    {option}
                                  </SelectItem>
                                )
                              )}
                            </SelectContent>
                          </Select>

                          {errors.numberOfNights && (
                            <p className="text-red-500 text-xs mt-2 ml-3">
                              {
                                errors.numberOfNights
                              }
                            </p>
                          )}
                        </div>
                      </div>

                      {/* travelers */}

                      <div>
                        <Select
                          value={
                            formData.numberOfAdults
                          }
                          onValueChange={(value) =>
                            handleInputChange(
                              "numberOfAdults",
                              value
                            )
                          }
                        >
                          <SelectTrigger
                            className="
                              h-14 rounded-full border-0
                              bg-[#EEF3FF]
                              px-5
                              shadow-none
                            "
                          >
                            <div className="flex items-center gap-3">
                              <Users
                                size={18}
                                color="#4E73DF"
                              />

                              <SelectValue placeholder="Select travelers" />
                            </div>
                          </SelectTrigger>

                          <SelectContent
                            className={selectContentClass}
                          >
                            {[1, 2, 3, 4, 5, 6].map(
                              (num) => (
                                <SelectItem
                                  key={num}
                                  value={String(
                                    num
                                  )}
                                >
                                  {num}{" "}
                                  {num === 1
                                    ? "Traveler"
                                    : "Travelers"}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>

                        {errors.numberOfAdults && (
                          <p className="text-red-500 text-xs mt-2 ml-3">
                            {
                              errors.numberOfAdults
                            }
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* =========================================================
                      STEP 3
                  ========================================================= */}

                  {currentStep === 3 && (
                    <div className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <Select
                          value={
                            formData.lookingToBook
                          }
                          onValueChange={(value) =>
                            handleInputChange(
                              "lookingToBook",
                              value
                            )
                          }
                        >
                          <SelectTrigger
                            className="
                              h-14 rounded-full border-0
                              bg-[#EEF3FF]
                              px-5
                              shadow-none
                            "
                          >
                            <SelectValue placeholder="Booking Timeline" />
                          </SelectTrigger>

                          <SelectContent
                            className={selectContentClass}
                          >
                            <SelectItem value="3-days">
                              Within 3 Days
                            </SelectItem>

                            <SelectItem value="7-days">
                              Within a Week
                            </SelectItem>

                            <SelectItem value="15-days">
                              Within 15 Days
                            </SelectItem>

                            <SelectItem value="1-month">
                              Within a Month
                            </SelectItem>
                          </SelectContent>
                        </Select>

                        <Select
                          value={
                            formData.preferredBudget
                          }
                          onValueChange={(value) =>
                            handleInputChange(
                              "preferredBudget",
                              value
                            )
                          }
                        >
                          <SelectTrigger
                            className="
                              h-14 rounded-full border-0
                              bg-[#EEF3FF]
                              px-5
                              shadow-none
                            "
                          >
                            <SelectValue placeholder="Preferred Budget" />
                          </SelectTrigger>

                          <SelectContent
                            className={selectContentClass}
                          >
                            <SelectItem value="1-2-lakhs">
                              ₹1 – 2 Lakhs
                            </SelectItem>

                            <SelectItem value="2-3-lakhs">
                              ₹2 – 3 Lakhs
                            </SelectItem>

                            <SelectItem value="3-4-lakhs">
                              ₹3 – 4 Lakhs
                            </SelectItem>

                            <SelectItem value="4-5-lakhs">
                              ₹4 – 5 Lakhs
                            </SelectItem>

                            <SelectItem value="5-plus-lakhs">
                              ₹5 Lakhs &
                              Above
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        
                        <input
                          value={
                            formData.departureCity
                          }
                          onChange={(e) =>
                            handleInputChange(
                              "departureCity",
                              e.target.value
                            )
                          }
                          placeholder="Departure City"
                          className={inputClass}
                        />

                        <Select
                          value={
                            formData.specialOccasion
                          }
                          onValueChange={(value) =>
                            handleInputChange(
                              "specialOccasion",
                              value
                            )
                          }
                        >
                          <SelectTrigger
                            className="
                              h-14 rounded-full border-0
                              bg-[#EEF3FF]
                              px-5
                              shadow-none
                            "
                          >
                            <div className="flex items-center gap-3">
                              <Sparkles
                                size={18}
                                color="#4E73DF"
                              />

                              <SelectValue placeholder="Special Occasion" />
                            </div>
                          </SelectTrigger>

                          <SelectContent
                            className={selectContentClass}
                          >
                            <SelectItem value="honeymoon">
                              Honeymoon
                            </SelectItem>

                            <SelectItem value="anniversary">
                              Anniversary
                            </SelectItem>

                            <SelectItem value="family-vacation">
                              Family Vacation
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <textarea
                        value={formData.anyRequest}
                        onChange={(e) =>
                          handleInputChange(
                            "anyRequest",
                            e.target.value
                          )
                        }
                        placeholder="Any special requests?"
                        rows={1}
                        className="
                          w-full
                          rounded-[28px]
                          bg-[#EEF3FF]
                          border border-[#DCE6FF]
                          p-5
                          outline-none
                          resize-none
                          text-[#13254A]
                          placeholder:text-[#97A3B6]
                        "
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* =========================================================
                  BUTTONS
              ========================================================= */}

              <div className="flex items-center gap-4 mt-10">
                {currentStep > 1 && (
                  <button
                    onClick={handlePrevious}
                    className="
                      h-14 w-14 rounded-full
                      flex items-center justify-center
                      bg-[#10244A]
                      text-white
                      shadow-[0_14px_32px_rgba(16,36,74,0.28)]
                    "
                  >
                    <ArrowLeft size={20} />
                  </button>
                )}

                {currentStep < 3 ? (
                  <motion.button
                    whileHover={{
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    onClick={handleNext}
                    disabled={
                      !isStepValid(currentStep)
                    }
                    className="
                      flex-1
                      h-14
                      rounded-full
                      text-white
                      font-semibold
                      tracking-[0.12em]
                      uppercase
                      text-[12px]
                      disabled:opacity-40
                    "
                    style={primaryButtonStyle}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Continue Your Journey
                      <ChevronRight
                        size={18}
                      />
                    </span>
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    onClick={handleSubmit}
                    disabled={
                      !isStepValid(currentStep)
                    }
                    className="
                      flex-1
                      h-14
                      rounded-full
                      text-white
                      font-semibold
                      tracking-[0.12em]
                      uppercase
                      text-[12px]
                      disabled:opacity-40
                    "
                    style={primaryButtonStyle}
                  >
                    Reserve Your Vacation
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
