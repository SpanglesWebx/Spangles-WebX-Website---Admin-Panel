import React, { useMemo, useState } from "react";
import formcont from "../../../assets/formcont.jpg"; // replace with your image

export default function ContactSection() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  const setField = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.phone.trim()) next.phone = "Phone number is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!emailRegex.test(values.email.trim()))
      next.email = "Please enter a valid email.";
    if (!values.message.trim()) next.message = "Message is required.";
    return next;
  };

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // TODO: hook up API/email service here
    // For now: successful client-side validation only
    setToast({ type: "success", message: "Message sent successfully." });
    setValues({ name: "", phone: "", email: "", subject: "", message: "" });
    window.clearTimeout(handleSubmit._toastTimer);
    handleSubmit._toastTimer = window.setTimeout(() => setToast(null), 2500);
  };

  return (
    <section className="w-full bg-[#F4F7FA] px-[75px]  relative z-30 -mb-[100px] max-[1025px]: -mt-[55px] max-[413px]:px-4 max-[413px]:mb-0">
      {toast ? (
        <div className="fixed right-5 bottom-5 z-[9999]">
          <div className="bg-[#161C2D] text-white rounded-lg shadow-lg px-4 py-3 flex items-start gap-3 min-w-[240px]">
            <div className="mt-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-emerald-400"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53-1.69-1.69a.75.75 0 1 0-1.06 1.06l2.31 2.31a.75.75 0 0 0 1.14-.094l3.446-4.814Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-montserrat text-[13px] leading-[18px]">
                {toast.message}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="text-white/70 hover:text-white transition leading-none"
              aria-label="Close toast"
              title="Close"
            >
              ×
            </button>
          </div>
        </div>
      ) : null}
      {/* Heading */}
      <div className="mb-10 translate-y-[100px] max-[413px]:translate-y-0 max-[413px]:mb-6">
        <p className="font-montserrat font-bold text-[14px] leading-[100%]  tracking-[1.43px] uppercase text-[#395563] mb-2 max-[413px]:text-[10px] max-[413px]:pt-10">
          CONTACT US
        </p>
        <h2 className="font-montserrat font-semibold text-[32px] leading-[42.3px] tracking-[-1.06px] text-start text-[#161C2D] max-[413px]:text-[22px] max-[413px]:leading-[32px]">
          Let’s Build Something Great Together
        </h2>
      </div>

      {/* Card */}
      <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row gap-[60px] relative translate-y-[100px] max-[413px]:translate-y-0 max-[413px]:gap-0 max-[413px]:bg-transparent max-[413px]:shadow-none max-[413px]:rounded-none max-[413px]:overflow-visible">
        {/* LEFT IMAGE */}
        <div className="md:w-[45%] w-full h-[550px] max-[413px]:h-[400px]">
          <img
            src={formcont}
            alt="contact"
            className="w-full h-full object-cover max-[413px]:rounded-[10px]"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="md:w-[55%] w-full py-20 pr-15 md:py-20 relative max-[413px]:py-10 max-[413px]:px-0">
          {/* subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.05] bg-cover bg-right pointer-events-none max-[413px]:hidden"></div>

          <form className="relative z-10" onSubmit={handleSubmit} noValidate>
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 mb-11 max-[413px]:mb-6 max-[413px]:gap-y-[25px]">
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={values.name}
                  onChange={(e) => setField("name", e.target.value)}
                  className={`w-full h-[48px] font-montserrat font-normal text-[14px] leading-[100%] tracking-[0px] text-[#34526180] align-middle px-[15px] py-[20px] border rounded-[10px] outline-none focus:border-[#E8ECEF] max-[413px]:bg-white  ${
                    errors.name ? "border-red-500" : "border-[#E8ECEF]"
                  }`}
                />
                {errors.name ? (
                  <p className="mt-2 text-[12px] text-red-600 font-montserrat">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number *"
                  value={values.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  className={`w-full h-[48px] font-montserrat font-normal text-[14px] leading-[100%] text-[#34526180] px-[15px] border rounded-[10px] outline-none focus:border-[#395563] max-[413px]:bg-white  ${
                    errors.phone ? "border-red-500" : "border-[#E8ECEF]"
                  }`}
                />
                {errors.phone ? (
                  <p className="mt-2 text-[12px] text-red-600 font-montserrat">
                    {errors.phone}
                  </p>
                ) : null}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 mb-11 max-[413px]:mb-6 max-[413px]:gap-y-[25px]">
              <div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                  className={`w-full h-[48px] font-montserrat font-normal text-[14px] leading-[100%] text-[#34526180] px-[15px] border rounded-[10px] outline-none focus:border-[#395563] max-[413px]:bg-white  ${
                    errors.email ? "border-red-500" : "border-[#E8ECEF]"
                  }`}
                />
                {errors.email ? (
                  <p className="mt-2 text-[12px] text-red-600 font-montserrat">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={values.subject}
                  onChange={(e) => setField("subject", e.target.value)}
                  className="w-full h-[48px] font-montserrat font-normal text-[14px] leading-[100%] text-[#34526180] px-[15px] border border-[#E8ECEF] rounded-[10px] outline-none focus:border-[#395563] max-[413px]:bg-white"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-[35px]">
              <textarea
                placeholder="Message *"
                rows="4"
                value={values.message}
                onChange={(e) => setField("message", e.target.value)}
                className={`w-full font-montserrat font-normal text-[14px] leading-[100%] text-[#34526180] px-[15px] py-[20px] border rounded-[10px] outline-none resize-none focus:border-[#395563] max-[413px]:bg-white ${
                  errors.message ? "border-red-500" : "border-[#E8ECEF]"
                }`}
              ></textarea>
              {errors.message ? (
                <p className="mt-2 text-[12px] text-red-600 font-montserrat">
                  {errors.message}
                </p>
              ) : null}
            </div>
            {/* Button */}
            <button
              type="submit"
              className="group bg-[#3f5b6b] hover:bg-[#344c59] text-white font-montserrat font-bold text-[12px] leading-[18px] tracking-[0px] uppercase text-center align-middle px-9 py-5 rounded-lg flex items-center justify-center gap-2 transition max-[413px]:w-full max-[413px]:text-[12px]"
            >
              SEND MESSAGE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 max-[413px]:w-[14px] max-[413px]:h-[14px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
