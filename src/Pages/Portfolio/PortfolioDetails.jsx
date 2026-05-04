import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Tag,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Monitor,
  Smartphone,
  Layout,
  Layers,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Support from "../About/Components/Support";
import Preloader from "../../Components/Preloader";
import img1 from "../../assets/churchs.png";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.jpg";
import img6 from "../../assets/portfolio6.jpg";
import img7 from "../../assets/portfolio7.jpg";
import img8 from "../../assets/portfolio8.jpg";

const allProjects = [
  {
    id: 1,
    title: "Elon Date App",
    image: img1,
    gallery: [img1, img2, img3],
    desc: "Analytics-driven dating experience with smart matching.",
    fullDesc:
      "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "AI-powered compatibility matching",
        description:
          "Matches users based on deep behavioral analysis and preferences.",
      },
      {
        title: "Real-time analytics dashboard",
        description: "Provides insights into user activity and engagement.",
      },
      {
        title: "Secure messaging",
        description: "End-to-end encrypted communication for privacy.",
      },
      {
        title: "Dynamic profiling",
        description: "Continuously adapts user profiles based on interactions.",
      },
      {
        title: "Event scheduling",
        description: "Helps users plan and manage meetings efficiently.",
      },
    ],
  },

  {
    id: 2,
    title: "Renewable Energy Landing Page",
    image: img2,
    gallery: [img2, img4, img5],
    desc: "Experience a dynamic landing page for renewable energy solutions, showcasing sustainable innovations that attracted eco-conscious visitors and drove conversions significantly.",
    fullDesc:
      "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "Lightweight architecture",
        description: "Ensures fast loading and optimal performance.",
      },
      {
        title: "SEO-friendly structure",
        description: "Improves search engine visibility and ranking.",
      },
      {
        title: "Interactive modules",
        description: "Engaging service showcase components.",
      },
      {
        title: "CMS integration",
        description: "Easy content updates with custom management tools.",
      },
      {
        title: "Responsive design",
        description: "Optimized for all screen sizes and devices.",
      },
    ],
  },

  {
    id: 3,
    title: "Management Software",
    image: img3,
    gallery: [img3, img5, img6, img7],
    desc: "Implement efficient management software that streamlined operations, enhanced productivity, and provided real-time insights for better decision-making processes across teams.",
    fullDesc:
      "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "Real-time processing",
        description: "Handles large datasets instantly.",
      },
      {
        title: "Predictive analytics",
        description: "Identifies future trends and patterns.",
      },
      {
        title: "Automated reports",
        description: "Generates and distributes reports efficiently.",
      },
      {
        title: "Custom alerts",
        description: "Notifies users about key data changes.",
      },
      {
        title: "Scalable ingestion",
        description: "Supports high-volume data input.",
      },
    ],
  },

  {
    id: 4,
    title: "Hyper Design",
    image: img4,
    gallery: [img4, img6],
    desc: "Minimal UI with futuristic interaction design.",
    fullDesc:
      "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "Micro-interactions",
        description: "Smooth and engaging UI animations.",
      },
      {
        title: "Minimal design",
        description: "Clean and distraction-free interface.",
      },
      {
        title: "Dynamic transitions",
        description: "Fluid layout and page changes.",
      },
      {
        title: "Vector graphics",
        description: "Optimized scalable visuals.",
      },
      {
        title: "Accessibility-first",
        description: "Designed for all users inclusively.",
      },
    ],
  },

  {
    id: 5,
    title: "Laptop UI",
    image: img5,
    gallery: [img5, img7, img8, img1],
    desc: "Clean dashboard interface for productivity tools.",
    fullDesc:
      "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "Modular widgets",
        description: "Customizable dashboard components.",
      },
      {
        title: "Task management",
        description: "Drag-and-drop workflow organization.",
      },
      {
        title: "Productivity metrics",
        description: "Track efficiency and performance.",
      },
      {
        title: "Notification center",
        description: "Unified alerts and updates.",
      },
      {
        title: "Collaboration tools",
        description: "Supports team-based work.",
      },
    ],
  },

  {
    id: 6,
    title: "Fashion Mockup",
    image: img6,
    gallery: [img6, img8, img2],
    desc: "Trendy fashion showcase with modern layout.",
    fullDesc:
      "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "Interactive lookbook",
        description: "Showcases fashion collections beautifully.",
      },
      {
        title: "Image optimization",
        description: "High-quality visuals with fast loading.",
      },
      {
        title: "Typography layout",
        description: "Elegant and stylish text presentation.",
      },
      {
        title: "Social integration",
        description: "Connects with social media platforms.",
      },
      {
        title: "Checkout flow",
        description: "Simple and user-friendly purchasing.",
      },
    ],
  },

  {
    id: 7,
    title: "Creative Studio",
    image: img7,
    gallery: [img7, img1, img3, img4, img8],
    desc: "Creative branding and digital experience design.",
    fullDesc:
      "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "Project categories",
        description: "Organized creative work sections.",
      },
      {
        title: "Case studies",
        description: "Detailed project breakdowns.",
      },
      {
        title: "Process layout",
        description: "Step-by-step design storytelling.",
      },
      {
        title: "Custom animations",
        description: "Smooth page transitions.",
      },
      {
        title: "Blog integration",
        description: "Professional content publishing.",
      },
    ],
  },

  {
    id: 8,
    title: "Mobile UI Kit",
    image: img8,
    gallery: [img8, img3, img6],
    desc: "Modern mobile UI components and interactions.",
    fullDesc:
      "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "UI components",
        description: "50+ reusable mobile elements.",
      },
      {
        title: "Native interactions",
        description: "Smooth mobile experience.",
      },
      {
        title: "Icon library",
        description: "Wide range of icons and fonts.",
      },
      {
        title: "Templates",
        description: "Pre-built app screens.",
      },
      {
        title: "Theme system",
        description: "Highly customizable design options.",
      },
    ],
  },
];

function ProjectImageSlider({ images }) {
  const list = Array.isArray(images) && images.length > 0 ? images : [];

  const [index, setIndex] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);

  const slideCount = list.length;
  const sliderItems = slideCount > 0 ? [...list, ...list] : [];
  const activeDotIndex =
    slideCount > 0 ? ((index % slideCount) + slideCount) % slideCount : 0;

  useEffect(() => {
    if (slideCount === 0 || index < slideCount) return undefined;
    const timeout = setTimeout(() => {
      setIndex(0);
    }, 700);
    return () => clearTimeout(timeout);
  }, [index, slideCount]);

  useEffect(() => {
    if (sliderPaused || slideCount <= 1) return undefined;
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [sliderPaused, slideCount]);

  const [slideStep, setSlideStep] = useState(460 + 30);
  const sliderViewportRef = useRef(null);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 413px)");

    const updateSlideStep = () => {
      if (mq.matches && sliderViewportRef.current) {
        setSlideStep(sliderViewportRef.current.clientWidth);
      } else {
        setSlideStep(460 + 30);
      }
    };

    updateSlideStep();
    mq.addEventListener("change", updateSlideStep);
    window.addEventListener("resize", updateSlideStep);

    const el = sliderViewportRef.current;
    const ro =
      typeof ResizeObserver !== "undefined" && el
        ? new ResizeObserver(() => updateSlideStep())
        : null;
    if (el && ro) ro.observe(el);

    return () => {
      mq.removeEventListener("change", updateSlideStep);
      window.removeEventListener("resize", updateSlideStep);
      ro?.disconnect();
    };
  }, []);

  if (slideCount === 0) return null;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setSliderPaused(true)}
      onMouseLeave={() => setSliderPaused(false)}
      onClick={(e) => e.preventDefault()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") e.preventDefault();
      }}
      role="presentation"
    >
      <div
        ref={sliderViewportRef}
        className="overflow-hidden w-full pt-[60px] max-lg:pt-12 max-md:pt-10 max-sm:pt-8 max-[413px]:pt-6"
      >
        <div
          className={`flex ${index === 0 ? "" : "transition-transform duration-700 ease-in-out"}`}
          style={{
            transform: `translateX(calc(-${index * slideStep}px))`,
          }}
        >
          {sliderItems.map((src, i) => (
            <div
              key={`${i}-${src}`}
              className="flex-shrink-0 cursor-default max-[413px]:!mr-0 max-[413px]:!h-[230px] max-[413px]:!w-full max-[413px]:!min-w-0 max-[413px]:!shrink-0 max-[413px]:!grow-0 max-[413px]:!basis-full"
              style={{ width: "460px", height: "380px", marginRight: "30px" }}
            >
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={src}
                  alt=""
                  draggable={false}
                  className="h-full w-full object-cover select-none"
                  style={{ borderRadius: 0 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex justify-center gap-[4px] pt-6 max-[413px]:pt-4"
        role="tablist"
        aria-label="Project images"
      >
        {list.map((src, i) => (
          <button
            key={`dot-${src}-${i}`}
            type="button"
            role="tab"
            aria-selected={i === activeDotIndex}
            aria-label={`Go to image ${i + 1} of ${slideCount}`}
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#345261] focus-visible:ring-offset-2"
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
          >
            <span
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${i === activeDotIndex ? "bg-[#345261]" : "bg-gray-400"
                }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

const PortfolioDetails = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);


  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    type: "quote",
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

  if (loading) {
    return <Preloader />;
  }


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
      newValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "subject") {
      newValue = value.slice(0, 50);
    } else if (name === "message") {
      newValue = value.slice(0, 1000);
    }

    setForm({ ...form, [name]: newValue });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
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

  const stateProject = location.state;
  const projectFromData = allProjects.find((p) => p.id === stateProject?.id) || allProjects[0];
  const currentProject = {
    ...projectFromData,
    ...stateProject, // Prioritize state (clicked image/title)
  };

  return (
    <div className="font-sans text-gray-700 max-xl:overflow-x-hidden max-[413px]:overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="relative h-[360px] w-full max-xl:h-[340px] max-lg:h-[330px] max-md:h-[310px] max-[413px]:h-[300px]">
        <img
          src={currentProject.image}
          alt={currentProject.title}
          className="w-full h-full object-cover object-center"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* text */}
        <div className="absolute inset-0 flex flex-col justify-end px-[100px] pb-[100px] text-white max-xl:px-16 max-xl:pb-20 max-lg:px-12 max-lg:pb-16 max-md:px-8 max-md:pb-14 max-sm:px-6 max-sm:pb-12 max-[413px]:px-5 max-[413px]:pb-10">
          <p className="font-montserrat font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-white max-lg:text-[13px] max-lg:leading-5 max-md:text-[13px] max-sm:text-[12px] max-sm:leading-[18px] max-sm:tracking-[1.8px] max-[413px]:text-[12px] max-[413px]:leading-[18px] max-[413px]:tracking-[1.6px]">
            Home / Portfolio
          </p>

          <h1 className="font-montserrat font-semibold text-[54px] leading-[62px] text-white mt-2 max-xl:text-[48px] max-xl:leading-[56px] max-lg:text-[44px] max-lg:leading-[52px] max-md:text-[38px] max-md:leading-[46px] max-sm:text-[34px] max-sm:leading-[40px] max-[413px]:text-[22px] max-[413px]:leading-[28px]">
            {currentProject.title}
          </h1>
        </div>
      </div>

      {/* SLIDER SECTION */}
      {/* SLIDER SECTION */}
      <div className="pl-[100px] pb-[60px] max-xl:pl-16 max-xl:pr-8 max-xl:pb-14 max-lg:pl-12 max-lg:pr-6 max-lg:pb-12 max-md:pl-8 max-md:pr-5 max-md:pb-11 max-sm:pl-6 max-sm:pr-4 max-sm:pb-10 max-[413px]:pl-4 max-[413px]:pr-4 max-[413px]:pb-10">
        <ProjectImageSlider
          key={currentProject.id}
          images={currentProject.gallery ?? [currentProject.image]}
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="flex gap-[120px] px-[100px] pb-[120px] border-b border-[#E5E5E5] max-xl:gap-24 max-xl:px-16 max-xl:pb-24 max-lg:gap-20 max-lg:px-12 max-lg:pb-20 max-md:flex-col max-md:gap-12 max-md:px-8 max-md:pb-16 max-sm:gap-11 max-sm:px-6 max-sm:pb-19 max-[413px]:flex-col max-[413px]:gap-10 max-[413px]:px-5 max-[413px]:pb-12">
        {/* LEFT SIDE */}
        <div className="flex-[2] max-md:w-full max-md:min-w-0 max-[413px]:w-full max-[413px]:min-w-0">
          <h3 className="mb-5 font-montserrat font-semibold text-[38px] leading-[52px] tracking-[0%] text-[#345261] align-middle max-xl:mb-4 max-xl:text-[34px] max-xl:leading-[46px] max-lg:text-[32px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[40px] max-sm:text-[28px] max-sm:leading-[36px] max-[413px]:mb-4 max-[413px]:text-[22px] max-[413px]:leading-[28px]">
            Description
          </h3>

          <p className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle pb-6 max-lg:text-[17px] max-lg:leading-[27px] max-md:text-left max-md:text-[16px] max-md:leading-[26px] max-md:pb-5 max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-left max-[413px]:text-[16px] max-[413px]:leading-[26px] max-[413px]:pb-5">
            {currentProject.fullDesc}
          </p>
          <h4 className="mb-5 font-montserrat font-semibold text-[38px] leading-[52px] tracking-[0%] text-[#345261] align-middle max-xl:mb-4 max-xl:text-[34px] max-xl:leading-[46px] max-lg:text-[32px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[40px] max-sm:text-[28px] max-sm:leading-[36px] max-[413px]:mb-4 max-[413px]:text-[22px] max-[413px]:leading-[28px]">
            The key functionalities include:
          </h4>

          <ul className="mt-4 space-y-3 pl-5 list-disc max-lg:space-y-2.5 max-md:mt-3 max-md:pl-4 max-sm:space-y-2.5 max-[413px]:mt-3 max-[413px]:space-y-2.5 max-[413px]:pl-4">
            {currentProject.functionalities.map((func, idx) => (
              <li
                key={idx}
                className="leading-[28px] text-[18px] align-middle max-lg:text-[17px] max-lg:leading-[27px] max-md:text-[16px] max-md:leading-[26px] max-sm:text-[15px] max-sm:leading-[25px] max-[413px]:text-[15px] max-[413px]:leading-[24px]"
              >
                {/* Title (SemiBold) */}
                <span className="font-semibold text-[#161C2D]">
                  {func.title}:
                </span>{" "}
                {/* Description (Regular) */}
                <span className="font-normal text-[#6B6A66]">
                  {func.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex-1 max-md:w-full max-md:min-w-0 max-[413px]:w-full max-[413px]:min-w-0">
          <h4 className="mb-9 font-montserrat font-semibold text-[24px] leading-[32px] tracking-[0%] text-[#345261] align-middle max-lg:mb-8 max-md:mb-7 max-sm:mb-6 max-[413px]:mb-6 max-[413px]:text-[22px] max-[413px]:leading-[28px]">
            Get A Quote
          </h4>
          <div className="flex-1 p-[30px] rounded-md bg-white shadow h-fit max-xl:p-7 max-lg:p-6 max-md:p-5 max-sm:p-5 max-[413px]:p-5">
            <form
              className="space-y-3 max-xl:space-y-3.5 max-lg:space-y-3 max-md:space-y-3.5 max-sm:space-y-4 max-[413px]:space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex gap-[30px] mb-4 max-xl:gap-6 max-lg:gap-5 max-md:gap-4 max-sm:gap-3 max-sm:mb-3 max-[413px]:flex-col max-[413px]:gap-4 max-[413px]:mb-0">
                <div className="flex-1 flex flex-col max-md:min-w-0 max-[413px]:w-full relative">
                  <label
                    htmlFor="name"
                    className="mb-2 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27] max-md:text-[13px] max-md:leading-[13px] max-sm:mb-1.5"
                  >
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name *"
                      value={form.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} px-3 py-3 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px] outline-none focus:border-[#345261] max-lg:py-3.5 max-md:py-3.5 max-sm:px-3 max-sm:text-[11px]`}
                    />
                    {focusedField === "name" && (
                      <span className="absolute right-3 bottom-2 text-[10px] text-gray-400 font-montserrat pointer-events-none">
                        {form.name.length}/30
                      </span>
                    )}
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="flex-1 flex flex-col max-md:min-w-0 max-[413px]:w-full">
                  <label
                    htmlFor="email"
                    className="mb-2 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27] max-md:text-[13px] max-md:leading-[13px] max-md:mb-1.5 max-sm:mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleInputChange}
                    className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} px-3 py-3 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px] outline-none focus:border-[#345261] max-lg:py-3.5 max-md:py-3.5 max-sm:px-3 max-sm:text-[11px]`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="flex gap-[30px] mb-4 max-xl:gap-6 max-lg:gap-5 max-md:gap-4 max-sm:gap-3 max-sm:mb-3 max-[413px]:flex-col max-[413px]:gap-4 max-[413px]:mb-0">
                <div className="flex-1 flex flex-col max-md:min-w-0 max-[413px]:w-full">
                  <label
                    htmlFor="phone"
                    className="mb-2 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27] max-md:text-[13px] max-md:leading-[13px] max-md:mb-1.5 max-sm:mb-1.5"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={handleInputChange}
                    className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} px-3 py-3 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px] outline-none focus:border-[#345261] max-lg:py-3.5 max-md:py-3.5 max-sm:px-3 max-sm:text-[11px]`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>
                  )}
                </div>
                <div className="flex-1 flex flex-col max-md:min-w-0 max-[413px]:w-full">
                  <label
                    htmlFor="subject"
                    className="mb-2 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27] max-md:text-[13px] max-md:leading-[13px] max-md:mb-1.5 max-sm:mb-1.5"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full border ${errors.subject ? "border-red-500" : "border-gray-300"} px-3 py-3 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px] outline-none focus:border-[#345261] max-lg:py-3.5 max-md:py-3.5 max-sm:px-3 max-sm:text-[11px]`}
                    />
                    {focusedField === "subject" && (
                      <span className="absolute right-3 bottom-2 text-[10px] text-gray-400 font-montserrat pointer-events-none">
                        {form.subject.length}/50
                      </span>
                    )}
                  </div>
                  {errors.subject && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.subject}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col max-md:w-full max-[413px]:w-full relative">
                <label
                  htmlFor="message"
                  className="mb-2 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27] max-lg:mb-4 max-md:mb-3 max-md:text-[13px] max-md:leading-[13px] max-sm:mb-4"
                >
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message *"
                    value={form.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full border mb-3 ${errors.message ? "border-red-500" : "border-gray-300"} px-3 py-4 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px] h-[80px] outline-none focus:border-[#345261] max-lg:mb-4 max-lg:py-3.5 max-md:mb-4 max-sm:min-h-[88px] max-[413px]:min-h-[100px]`}
                  ></textarea>
                  {focusedField === "message" && (
                    <span className="absolute right-3 bottom-4 text-[10px] text-gray-400 font-montserrat pointer-events-none">
                      {form.message.length}/1000
                    </span>
                  )}
                </div>
                {errors.message && (
                  <p className="text-red-500 text-[11px] mb-4">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="cursor-pointer px-[26px] py-[15px] bg-[#345261] text-white text-[18px] leading-[100%] tracking-[0%] text-center align-middle font-bold font-[Montserrat] rounded-[10px] hover:bg-[#2a3d45] transition duration-300 max-lg:px-6 max-lg:py-3.5 max-lg:text-[17px] max-md:w-full max-md:py-3.5 max-md:text-[16px] max-sm:px-5 max-[413px]:block max-[413px]:w-full disabled:opacity-50"
                >
                  {isSubmitting ? "SENDING..." : "Submit"}
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
            </form>
          </div>
        </div>
      </div>
      {/* Support Section */}
      <div className="-mt-[40px] relative z-10 max-xl:-mt-9 max-lg:-mt-8 max-md:-mt-7 max-sm:-mt-6 max-[413px]:-mt-6">
        <Support />
      </div>
    </div>
  );
};

export default PortfolioDetails;
