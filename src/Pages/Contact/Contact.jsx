import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import phoneIcon from "../../assets/Phone.png";
import mailIcon from "../../assets/Mail.png";
import chatIcon from "../../assets/Chat.png";
import Support from "../About/Components/Support";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export default function Contact() {
  const inputStyle = `w-full h-[48.6px] px-5 rounded-[10px]
border border-[#E8ECEF] bg-white outline-none
font-montserrat text-[14px] leading-[100%]
placeholder:text-[#34526180]
focus:border-[#345261]`;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (form.name.length > 30) {
      newErrors.name = "Name cannot exceed 30 characters.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!form.phone.trim()) {
      newErrors.phone = "Enter your phone number.";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      // Subject is optional in the original code but let's add logic if needed
    } else if (form.subject.length > 50) {
      newErrors.subject = "Subject cannot exceed 50 characters.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message field cannot be empty.";
    } else if (form.message.length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") {
      newValue = value.slice(0, 30);
    } else if (name === "phone") {
      // Only allow numbers and max 10 digits
      newValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "subject") {
      newValue = value.slice(0, 50);
    } else if (name === "message") {
      newValue = value.slice(0, 1000);
    }

    setForm({ ...form, [name]: newValue });

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async () => {
    if (validate() && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const res = await fetch(`${API_BASE}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!res.ok) throw new Error("Submission failed");

        setShowToast(true);
        setForm({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (err) {
        console.error("Error submitting form:", err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      {/* Contact Cards Section */}
      <div
        className="mx-[20px] sm:mx-[40px] md:mx-[67px] xl:mx-[67px] max-w-[1306px] min-[1441px]:max-w-full min-[1441px]:px-[100px] pt-25 pb-20 text-center bg-[#ffffff] 
      max-[768px]:pt-12 max-[768px]:pb-10 max-[413px]:pt-10 max-[413px]:pb-5 max-[413px]:mx-4"
      >
        <div className="w-[520px] min-[1441px]:w-[700px] mx-auto text-center max-[768px]:w-full">
          <p className="text-[14px] font-bold tracking-[1.43px] leading-[100%] text-[#395563] uppercase text-center mb-2 max-[768px]:text-[13px] max-[413px]:text-[12px]">
            CONTACT US
          </p>
          <h2
            className="font-montserrat text-[32px] leading-[42.3px] tracking-[-1.06px] text-[#161C2D] font-semibold max-w-[460px] mx-auto text-center mb-4 
          max-[768px]:text-[28px] max-[768px]:leading-[36px] max-[413px]:text-[24px] max-[413px]:leading-[32px] max-[413px]:max-w-full"
          >
            Have questions or need support?
          </h2>

          <p
            className="font-montserrat text-[16px] leading-[22.5px] text-[#6B6A66] mb-20 max-w-[520px] min-[1441px]:max-w-full min-[1441px]:text-left mx-auto min-[1441px]:mx-0
          max-[768px]:mb-12 max-[768px]:text-[15px] max-[413px]:mb-10 max-[413px]:text-[14px] max-[413px]:leading-[20px]"
          >
            Spangles Webx Private Limited offers tailored solutions in Web
            Development, UI/UX Design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 min-[1441px]:gap-16 text-left min-[1441px]:max-w-[1600px]">
          {/* Card */}
          <div className="group bg-white px-7 py-5 min-[1441px]:px-14 min-[1441px]:py-16 rounded-xl border border-gray-200 relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#345261]/10 text-left">
            {/* Mirrored Floating Accents - Increased Color Depth */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-bl from-[#345261]/25 to-transparent rounded-full -translate-y-1/2 -translate-x-1/2 group-hover:scale-150 group-hover:translate-x-1/4 transition-all duration-1000 ease-out opacity-80"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#345261]/15 rounded-full translate-y-1/2 translate-x-1/2 group-hover:scale-[2] group-hover:-translate-x-0 transition-all duration-1000 ease-out opacity-90"></div>

            <div
              className="relative z-10 w-[76px] h-[76px] min-[1441px]:w-[100px] min-[1441px]:h-[100px] mb-6.5 flex items-center justify-center 
rounded-lg bg-gray-100 group-hover:bg-[#2f4858] transition-all duration-300"
            >
              <img
                src={phoneIcon}
                alt="phone"
                className="w-[36px] h-[36px] min-[1441px]:w-[44px] min-[1441px]:h-[44px] object-contain 
  transition-all duration-300
  [filter:brightness(0)_saturate(100%)_invert(27%)_sepia(17%)_saturate(748%)_hue-rotate(155deg)_brightness(94%)_contrast(90%)]
  group-hover:brightness-0 group-hover:invert"
              />
            </div>

            <div className="relative z-10">
              <h3 className=" font-montserrat text-[18px] min-[1441px]:text-[22px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] font-bold">
                Call us
              </h3>

              <p className="mt-2 font-montserrat text-[14px] min-[1441px]:text-[16px] leading-[25.56px] tracking-[-0.18px] text-[#161C2D]">
                Call us <span className="font-bold">+91 7708784111</span> for any support and enquiries.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="group bg-white px-7 py-5 min-[1441px]:px-14 min-[1441px]:py-16 rounded-xl border border-gray-200 relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#345261]/10">
            {/* Mirrored Floating Accents - Increased Color Depth */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-bl from-[#345261]/25 to-transparent rounded-full -translate-y-1/2 -translate-x-1/2 group-hover:scale-150 group-hover:translate-x-1/4 transition-all duration-1000 ease-out opacity-80"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#345261]/15 rounded-full translate-y-1/2 translate-x-1/2 group-hover:scale-[2] group-hover:-translate-x-0 transition-all duration-1000 ease-out opacity-90"></div>

            <div className="relative z-10 w-[76px] h-[76px] min-[1441px]:w-[100px] min-[1441px]:h-[100px] mb-6.5  flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#2f4858] group-hover:text-white transition-all duration-300">
              <img
                src={mailIcon}
                alt="email"
                className="w-[36px] h-[36px] min-[1441px]:w-[44px] min-[1441px]:h-[44px] object-contain 
  transition-all duration-300
  [filter:brightness(0)_saturate(100%)_invert(27%)_sepia(17%)_saturate(748%)_hue-rotate(155deg)_brightness(94%)_contrast(90%)]
  group-hover:brightness-0 group-hover:invert"
              />
            </div>

            <div className="relative z-10">
              <h3 className=" font-montserrat text-[18px] min-[1441px]:text-[22px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] font-bold">
                Email us
              </h3>

              <p className="mt-2 font-montserrat text-[14px] min-[1441px]:text-[16px] leading-[25.56px] tracking-[-0.18px] text-[#161C2D]">
                Send your email to <span className="font-bold">webxspangles@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="group bg-white px-7 py-5 min-[1441px]:px-14 min-[1441px]:py-16 rounded-xl border border-gray-200 relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#345261]/10">
            {/* Mirrored Floating Accents - Increased Color Depth */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-bl from-[#345261]/25 to-transparent rounded-full -translate-y-1/2 -translate-x-1/2 group-hover:scale-150 group-hover:translate-x-1/4 transition-all duration-1000 ease-out opacity-80"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#345261]/15 rounded-full translate-y-1/2 translate-x-1/2 group-hover:scale-[2] group-hover:-translate-x-0 transition-all duration-1000 ease-out opacity-90"></div>

            <div className="relative z-10 w-[76px] h-[76px] min-[1441px]:w-[100px] min-[1441px]:h-[100px] mb-6.5  flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#2f4858] group-hover:text-white transition-all duration-300">
              <img
                src={chatIcon}
                alt="chat"
                className="w-[36px] h-[36px] min-[1441px]:w-[44px] min-[1441px]:h-[44px] object-contain 
  transition-all duration-300
  [filter:brightness(0)_saturate(100%)_invert(27%)_sepia(17%)_saturate(748%)_hue-rotate(155deg)_brightness(94%)_contrast(90%)]
  group-hover:brightness-0 group-hover:invert"
              />
            </div>

            <div className="relative z-10">
              <h3 className=" font-montserrat text-[18px] min-[1441px]:text-[22px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] font-bold">
                Chat with us
              </h3>

              <p className="mt-2 font-montserrat text-[14px] min-[1441px]:text-[16px] leading-[25.56px] tracking-[-0.18px] text-[#161C2D]">
                Chat with us for quick support and queries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form + Map */}
      {/* Contact Form + Map */}
      <div id="contact-form" className="bg-[#F4F7FA] py-[100px] px-[75px] min-[1441px]:px-[100px] max-[768px]:py-[60px] max-[768px]:px-[30px] max-[413px]:px-4 max-[413px]:py-[50px]">
        <div className="w-full max-w-full mx-auto min-[1441px]:max-w-[1600px] grid md:grid-cols-2 gap-[60px] items-stretch max-[768px]:gap-10">
          {/* Left Section - Form */}
          <div className="w-full">
            <h2 className="font-montserrat text-[46px] leading-[55.2px] text-[#345261] pb-6 font-semibold mb-3 max-[768px]:text-[36px] max-[768px]:leading-[44px] max-[413px]:text-[28px] max-[413px]:leading-[34px] max-[413px]:pb-4">
              Ready to Get Started?
            </h2>

            <p className="font-montserrat text-[16px] leading-[24px] text-[#6B6A66] mb-9 max-[413px]:text-[14px] max-[413px]:mb-6">
              You may simply complete the form below and click ‘send’ to submit
              an enquiry. Our customer service team will get in touch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[44px] max-[768px]:gap-y-6 max-[480px]:gap-y-4">
              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    className={`${inputStyle} pr-16 ${errors.name ? "border-red-500" : ""}`}
                    value={form.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === "name" && (
                    <span className="absolute right-3 bottom-2 text-[11px] text-gray-400 font-montserrat pointer-events-none">
                      {form.name.length}/30
                    </span>
                  )}
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number *"
                  className={`${inputStyle} ${errors.phone ? "border-red-500" : ""}`}
                  value={form.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  className={`${inputStyle} ${errors.email ? "border-red-500" : ""}`}
                  value={form.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className={`${inputStyle} pr-16 ${errors.subject ? "border-red-500" : ""}`}
                    value={form.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === "subject" && (
                    <span className="absolute right-3 bottom-2 text-[11px] text-gray-400 font-montserrat pointer-events-none">
                      {form.subject.length}/50
                    </span>
                  )}
                </div>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
            </div>

            <div className="mb-9 max-[480px]:mb-6">
              <div className="relative mt-[44px] max-[768px]:mt-6 max-[480px]:mt-4">
                <textarea
                  name="message"
                  placeholder="Message *"
                  className={`${inputStyle} h-[120px] pt-4 pb-6 ${errors.message ? "border-red-500" : ""
                    }`}
                  value={form.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />
                {focusedField === "message" && (
                  <span className="absolute right-3 bottom-2 text-[11px] text-gray-400 font-montserrat pointer-events-none">
                    {form.message.length}/1000
                  </span>
                )}
              </div>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="group bg-[#395563] hover:bg-[#2a3d45] cursor-pointer border border-[#5E6FB5]
    px-[35px] py-[20px] rounded-[10px]
    text-white uppercase
    font-montserrat font-bold text-[12px] leading-[18px]
    flex items-center justify-center gap-2
    max-[480px]:w-full max-[480px]:py-4
    mb-0 max-[413px]:mb-[35px]
    disabled:opacity-50 transition-all duration-300"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Success Toast */}
              <div
                className={`flex items-center gap-2 px-4 py-3 rounded-[10px] transition-all duration-500 ease-out ${showToast
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4 pointer-events-none"
                  }`}
                style={{
                  background: "linear-gradient(135deg, #2f4858 0%, #395563 100%)",
                }}
              >
                <div className="w-5 h-5 rounded-full bg-emerald-400/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-emerald-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-white font-montserrat text-[12px] font-medium whitespace-nowrap">
                  Message sent successfully!
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Map */}
          <div className="w-full h-[400px] md:h-full">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=SPANGLES+WEBX+(8.2824082,77.2731045)&z=15&output=embed"
              className="w-full h-full rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
}
