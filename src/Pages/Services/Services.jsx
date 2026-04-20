import React from "react";
import ServiceImg from "../../assets/Service-banner.jpg";
import cyberImg from "../../assets/portfolio1.jpg";
import digitalImg from "../../assets/portfolio2.jpg";
import productImg from "../../assets/portfolio3.jpg";
import webImg from "../../assets/portfolio4.jpg";
import testingImg from "../../assets/portfolio5.jpg";
import appImg from "../../assets/portfolio6.jpg";
import Support from "../About/Components/Support";
import { useNavigate } from "react-router-dom";
import Serviceicon from "../../assets/Service-icon.png"; // change to your icon

export const services = [
  {
    title: "Website Development",
    image: cyberImg,
    description:
      "We build powerful, pixel-perfect websites that don’t just look good—they grow your business.",
    detailedDescription: "Our website development services create stunning, functional websites that drive business growth. We combine advanced technology with creative design to deliver sites that are not only visually appealing but also optimized for performance, security, and user engagement.",
    advantages: [
      "Responsive design",
      "Accessibility compliance",
      "Fast loading performance",
      "Secure architecture",
      "Cross-browser compatibility",
    ],
    whyChoose: [
      {
        title: "Experienced Developers",
        desc: "Skilled team with years of expertise in web development.",
      },
      {
        title: "Modern Frameworks",
        desc: "Using React, Node.js, and the latest technologies.",
      },
      {
        title: "Custom Solutions",
        desc: "Tailored websites designed for your specific business needs.",
      },
      {
        title: "Post-Launch Support",
        desc: "Ongoing maintenance, updates, and technical support.",
      },
    ],
  },

  {
    title: "Web App Development",
    image: digitalImg,
    description:
      "Transforming ideas into scalable, user-friendly web apps that work seamlessly across every device.",
    detailedDescription: "We develop scalable web applications that meet your unique business requirements. Our team uses the latest frameworks and best practices to build applications that are secure, efficient, and user-friendly, ensuring seamless integration and high performance.",
    advantages: [
      "Scalable architecture",
      "Cross-platform compatibility",
      "Secure data handling",
      "Intuitive user interfaces",
      "High performance optimization",
    ],
    whyChoose: [
      {
        title: "Data-Driven Strategy",
        desc: "We use analytics to maximize your reach.",
      },
      {
        title: "Creative Campaigns",
        desc: "Engaging content that connects with your audience.",
      },
      {
        title: "Multi-Channel Marketing",
        desc: "We cover all major digital platforms.",
      },
      {
        title: "Measurable Results",
        desc: "Trackable growth and ROI-focused approach.",
      },
    ],
  },

  {
    title: "Mobile App Development",
    image: productImg,
    description:
      "Building intuitive mobile apps that connect brands with users anytime, anywhere.",
    detailedDescription: "Transform your ideas into innovative mobile applications for iOS and Android. Our development process focuses on user-centric design, robust functionality, and cross-platform compatibility, delivering apps that enhance user experience and drive business success.",
    advantages: [
      "Cross-platform development",
      "User-friendly interfaces",
      "High performance apps",
      "Secure data handling",
      "Scalable architecture",
    ],
    whyChoose: [
      {
        title: "Creative Designers",
        desc: "Skilled team focused on innovation and usability.",
      },
      {
        title: "User Experience Focus",
        desc: "Designs that improve customer satisfaction.",
      },
      {
        title: "Modern Tools",
        desc: "We use Figma, Adobe XD, and more.",
      },
      {
        title: "Fast Iterations",
        desc: "Quick feedback and design improvements.",
      },
    ],
  },

  {
    title: "Software Testing",
    image: webImg,
    description:
      "Ensuring flawless performance with rigorous testing for reliable, high-quality software.",
    detailedDescription: "Ensure the quality and reliability of your software with our comprehensive testing services. We perform thorough manual and automated testing to identify and resolve issues, guaranteeing that your product meets the highest standards before launch.",
    advantages: [
      "Manual and automated testing",
      "Performance and load testing",
      "Bug tracking and reporting",
      "Quality assurance processes",
      "Improved product reliability",
    ],
    whyChoose: [
      {
        title: "Expert QA Team",
        desc: "Highly experienced testers ensuring quality.",
      },
      {
        title: "Automation Tools",
        desc: "Faster and more accurate testing processes.",
      },
      {
        title: "Detailed Reports",
        desc: "Clear insights into bugs and performance.",
      },
      {
        title: "Reliable Delivery",
        desc: "We ensure your product is market-ready.",
      },
    ],
  },

  {
    title: "UI / UX Designing",
    image: testingImg,
    description:
      "Crafting intuitive and engaging designs that turn users into loyal customers.",
    detailedDescription: "Elevate your digital products with exceptional UI/UX design. Our designers create intuitive interfaces that prioritize user experience, combining aesthetics with functionality to build designs that are both beautiful and effective.",
    advantages: [
      "User-centered design approach",
      "Wireframing and prototyping",
      "UI/UX optimization",
      "Interactive design systems",
      "Consistency across platforms",
    ],
    whyChoose: [
      {
        title: "Creative Designers",
        desc: "Skilled team focused on innovation and usability.",
      },
      {
        title: "User Experience Focus",
        desc: "Designs that improve customer satisfaction.",
      },
      {
        title: "Modern Tools",
        desc: "We use Figma, Adobe XD, and more.",
      },
      {
        title: "Fast Iterations",
        desc: "Quick feedback and design improvements.",
      },
    ],
  },

  {
    title: "Software Development",
    image: appImg,
    description: "Create powerful mobile apps for iOS and Android.",
    detailedDescription: "From concept to deployment, we provide end-to-end software development solutions. Our experts build custom software tailored to your needs, using agile methodologies to deliver scalable, secure, and innovative products.",
    advantages: [
      "Custom software solutions",
      "Agile development process",
      "Scalable architecture",
      "Secure coding practices",
      "Ongoing maintenance and support",
    ],
    whyChoose: [
      {
        title: "Expert Developers",
        desc: "Skilled in modern mobile technologies.",
      },
      {
        title: "Custom App Solutions",
        desc: "Apps tailored to your business goals.",
      },
      {
        title: "Seamless Experience",
        desc: "Smooth performance across devices.",
      },
      {
        title: "Post-Launch Support",
        desc: "Continuous updates and maintenance.",
      },
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[360px] w-full max-[413px]:h-[300px]">
        <img
          src={ServiceImg} // change to your image
          alt="banner"
          className="w-full h-full object-cover object-center"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* text */}
        <div
          className="absolute inset-0 flex flex-col justify-end px-[100px] pb-25 text-white 
    max-[1024px]:px-10 max-[1024px]:pb-20 
    max-[768px]:px-6 max-[768px]:pb-16 
    max-[413px]:px-4 max-[413px]:pb-10 
    min-[1024px]:max-[1200px]:px-[72px]"
        >
          {/* breadcrumb */}
          <p className="font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-white max-[413px]:text-[12px]">
            Home / Services {/* change text */}
          </p>

          {/* heading */}
          <h1
            className="font-montserrat font-semibold text-[54px] leading-[62px] text-white mt-2 
      max-[1024px]:text-[48px] max-[1024px]:leading-[56px] 
      max-[768px]:text-[44px] max-[768px]:leading-[52px] 
      max-[413px]:text-[28px] max-[413px]:leading-[32px]"
          >
            Services We Offer {/* change title */}
          </h1>
        </div>
      </div>

      {/* Services Grid */}
      <div
        className="px-[100px] pt-[60px] pb-[100px] border-b-[0.8px] border-[#E5E5E5]
max-[1400px]:px-[50px]
max-[1200px]:px-10
max-[768px]:px-6
max-[413px]:px-5 max-[413px]:pt-8 max-[413px]:pb-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-[1030px]:grid-cols-2 max-[413px]:!grid-cols-1 gap-x-[30px] gap-y-[50px] max-[413px]:gap-y-10">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() =>
                navigate("/service-details", {
                  state: {
                    ...service,
                    gallery: [service.image], // can expand later
                  },
                })
              }
              className="relative group cursor-pointer rounded-xl overflow-hidden w-[390px] h-[432px] max-[1400px]:w-full max-[1400px]:max-w-[390px] max-[1400px]:mx-auto max-[413px]:h-[430px] shadow-[0px_0px_19.22px_0px_#00000012]"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />

              {/* 🔹 Gradient (default) */}
              <div
                className="absolute inset-0 
          bg-[linear-gradient(0deg,_#395563_0%,_rgba(20,34,92,0)_100%)]
          transition-all duration-500 ease-in-out 
          group-hover:opacity-0"
              />

              {/* 🔹 Default Content */}
              <div className="absolute bottom-14 left-15 right-6 text-white transition-all duration-500 group-hover:opacity-0 max-[413px]:hidden">
                {/* ICON — #FFFFFF default; #395563 when card hovered (hover panel icon) */}
                <div
                  className="relative w-12 h-12 mb-4 bg-white"
                  style={{
                    WebkitMaskImage: `url(${Serviceicon})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskImage: `url(${Serviceicon})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                  aria-hidden
                />

                <h3 className="font-[Montserrat] font-medium text-[20px] leading-[23.07px] tracking-[0%] align-middle text-[#ffffff]">
                  {service.title}
                </h3>
              </div>

              {/* 🔹 Hover White Card */}
              <div
                className="absolute bottom-6 left-6 right-6 bg-white rounded-xl px-5 pt-5 pb-6  
          opacity-0 translate-y-6 
          group-hover:opacity-100 group-hover:translate-y-0 
          transition-all duration-500 ease-in-out
          max-[413px]:opacity-100 max-[413px]:translate-y-0 max-[413px]:bottom-5 max-[413px]:left-5 max-[413px]:right-5"
              >
                {/* ICON — #395563 (visible on card hover with this panel) */}
                <div
                  className="w-12 h-12 mb-4 bg-[#395563]"
                  style={{
                    WebkitMaskImage: `url(${Serviceicon})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskImage: `url(${Serviceicon})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                  aria-hidden
                />

                <h3 className="mb-5 font-[Montserrat] font-medium text-[20px] leading-[23.07px] text-[#395563] max-[413px]:text-[18px] max-[413px]:mb-3">
                  {service.title}
                </h3>

                <p className="font-normal text-[16px] leading-[23.07px] text-[#3955638F] max-[413px]:text-[14px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
};

export default Services;
