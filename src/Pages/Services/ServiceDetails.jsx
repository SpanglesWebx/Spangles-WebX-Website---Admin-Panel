import React from "react";

import { useLocation } from "react-router-dom";
import Support from "../About/Components/Support";
import { services } from "./Services";
import { useRef, useEffect } from "react";
import Serviceicon from "../../assets/Service-icon.png"; // ✅ ADD THIS
// fallback images (reuse yours)
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import num01 from "../../assets/01.png";
import num02 from "../../assets/02.png";
import num03 from "../../assets/03.png";
import num04 from "../../assets/04.png";
import num05 from "../../assets/05.png";
import num06 from "../../assets/06.png";
import { useNavigate } from "react-router-dom";
import Preloader from "../../Components/Preloader";
import { useState } from "react";

const ServiceDetails = () => {
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




  const [service, setService] = React.useState(
    location.state || {
      title: "Cyber Security",
      image: img1,
      description: "Web designing in a powerful way...",
      gallery: [img1, img2, img3],
    },
  );



  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isHovered = false;
    const setHovered = () => { isHovered = true; };
    const setNotHovered = () => { isHovered = false; };

    slider.addEventListener("mouseenter", setHovered);
    slider.addEventListener("mouseleave", setNotHovered);
    slider.addEventListener("touchstart", setHovered, { passive: true });
    slider.addEventListener("touchend", setNotHovered);

    const handleScroll = () => {
      const leftFade = document.getElementById("leftFade");
      const rightFade = document.getElementById("rightFade");

      // ✅ LEFT FADE
      if (slider.scrollLeft > 10) {
        leftFade.style.opacity = "1";
      } else {
        leftFade.style.opacity = "0";
      }

      // ✅ RIGHT FADE
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        rightFade.style.opacity = "0";
      } else {
        rightFade.style.opacity = "1";
      }
    };

    const interval = setInterval(() => {
      if (isHovered) return;

      // 🔁 seamless loop instant reset
      if (slider.children.length > 0) {
        const firstSetCount = Math.floor(slider.children.length / 2);
        const firstItem = slider.children[0];
        const middleItem = slider.children[firstSetCount];

        if (firstItem && middleItem) {
          const shiftAmount = middleItem.offsetLeft - firstItem.offsetLeft;
          if (slider.scrollLeft >= shiftAmount) {
            slider.scrollLeft -= shiftAmount;
          }
        }
      }

      const isMobile = window.innerWidth <= 413;
      const gap = isMobile ? 0 : 24;
      const cardWidth = slider.children[0].offsetWidth + gap;

      slider.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }, 3000);

    slider.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      slider.removeEventListener("scroll", handleScroll);
      slider.removeEventListener("mouseenter", setHovered);
      slider.removeEventListener("mouseleave", setNotHovered);
      slider.removeEventListener("touchstart", setHovered);
      slider.removeEventListener("touchend", setNotHovered);
    };
  }, [loading]);



  useEffect(() => {
    if (location.state) {
      setService(location.state);
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [location.state]);


  if (loading) {
    return <Preloader />;
  }


  return (
    <div className="w-full text-gray-700">
      {/* HERO SECTION */}
      <div className="relative h-[360px] w-full max-[413px]:h-[300px]">
        <img
          src={service.image}
          alt={service.title}
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
            Home / Services
          </p>

          {/* heading */}
          <h1
            className="font-montserrat font-semibold text-[54px] leading-[62px] text-white mt-2 
      max-[1024px]:text-[48px] max-[1024px]:leading-[56px] 
      max-[768px]:text-[44px] max-[768px]:leading-[52px] 
      max-[413px]:text-[28px] max-[413px]:leading-[32px]"
          >
            {service.title}
          </h1>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div
        className="
  px-[100px] py-[100px]
  max-[1201px]:px-[80px] max-[1201px]:py-[80px]
    max-[1025px]:px-[60px] max-[1025px]:py-[60px]
  max-[768px]:px-10 max-[768px]:py-10
  max-[413px]:px-0 max-[413px]:py-6
"
      >
        <div className="flex gap-[30px] max-md:flex-col">
          {/* LEFT COLUMN */}
          <div className="flex-[1.2] max-[413px]:px-6">
            {/* Paragraph */}
            <p className="font-[Montserrat] font-normal text-[16px] leading-[32px] text-[#6B6A66] mb-6">
              {service.detailedDescription}
            </p>

            {/* Heading */}
            <h2 className="font-[Montserrat] font-semibold text-[32px] leading-[38px] text-[#345261] mb-5 max-[1024px]:text-[28px] max-[768px]:text-[26px] max-[413px]:text-[20px]">
              Advantages of Service
            </h2>

            <div className="space-y-0 mt-16 relative">
              {service.advantages?.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-20 max-[1024px]:gap-10 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-4 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                >
                  {/* Large Number Image */}
                  <div className="flex-shrink-0 select-none relative">
                    <img 
                      src={[num01, num02, num03, num04, num05, num06][i] || num01}
                      alt={`Number ${i + 1}`}
                      className="w-[200px] h-[200px] object-contain max-[1024px]:w-[180px] max-[1024px]:h-[180px] max-[768px]:w-[140px] max-[768px]:h-[140px] max-[413px]:w-[110px] max-[413px]:h-[110px]"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="z-10 flex-grow">
                    <h3 className="font-[Montserrat] font-bold text-[24px] leading-[32px] text-[#345261] mb-3 max-[413px]:text-[20px]">
                      {item.includes(':') ? item.split(':')[0] : item} :
                    </h3>
                    <p className="font-[Montserrat] font-normal text-[18px] leading-[30px] text-[#6B6A66] max-[413px]:text-[16px]">
                      {item.includes(':') ? item.split(':')[1] : "We provide high-quality services tailored to your business needs, ensuring optimal results and professional excellence."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (Empty or for other minor elements) */}


      </div>

      <div
        className="
  px-[90px] pt-[65px] pb-[140px] bg-[#F7F9FB] max-[413px]:relative
  max-[1024px]:px-[60px] max-[1024px]:pb-[100px]
  max-[768px]:px-10 max-[768px]:py-10
  max-[413px]:px-6 max-[413px]:pt-6 max-[413px]:pb-[120px] max-[413px]:mb-[80px]
"
      >


        <div className="
  flex justify-between items-center mb-[40px]
  max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-4
">

          <button
            onClick={() => navigate('/services')}
            className="cursor-pointer font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] text-[#345261] uppercase bg-transparent border-none p-0 max-[413px]:text-[12px] max-[413px]:leading-[18px]"
          >
            View All Services
          </button>

          <button
            onClick={() => navigate('/services')}
            className="
    group cursor-pointer bg-[#345261] hover:bg-[#2a3d45] text-white px-[25px] py-[16px] rounded-[10px] text-[12px] leading-[18px] font-bold uppercase flex items-center gap-2 mr-0 transition duration-300

    max-[1201px]:mr-0
    max-[1025px]:mr-0

    max-[768px]:mr-0
    max-[768px]:w-[50%]
    max-[768px]:justify-center

    max-[1201px]:px-[22px] max-[1201px]:py-[14px]
    max-[1025px]:px-[20px] max-[1025px]:py-[12px]

    max-[413px]:px-[16px] max-[413px]:py-[10px] max-[413px]:text-[11px]
    max-[413px]:absolute max-[413px]:bottom-10 max-[413px]:left-1/2 max-[413px]:-translate-x-1/2 max-[413px]:w-max
  ">
            All Services

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </button>

        </div>



        <div className="relative">

          {/* RIGHT GREY SHADE */}
          <div
            id="rightFade"
            className="pointer-events-none absolute right-[-60px] top-0 h-full w-[60px] 
  bg-gradient-to-l from-[#F7F9FB] to-transparent z-20 max-[413px]:hidden transition-opacity duration-300"
          />

          {/* LEFT GREY SHADE */}
          <div
            id="leftFade"
            className="pointer-events-none absolute left-[-60px] top-0 h-full w-[60px] 
  bg-gradient-to-r from-[#F7F9FB] to-transparent z-20 max-[413px]:hidden opacity-0 transition-opacity duration-300"
          />

          <button
            onClick={() => scroll("left")}
            className="absolute left-[-50px] top-1/2 -translate-y-1/2 
  w-[61px] h-[61px] bg-white border border-[#E5E5E5] 
  rounded-[10px] flex items-center justify-center shadow-sm z-30 max-[413px]:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-[#345261] rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 
  w-[61px] h-[61px] 
  bg-white border border-[#E5E5E5] 
  rounded-[10px] 
  flex items-center justify-center 
  shadow-sm z-30 max-[413px]:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-[#345261]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </button>


          <div
            ref={scrollRef}
            className="
    flex gap-6 overflow-x-auto no-scrollbar 
    pr-[60px] pl-[60px] -ml-[60px] -mr-[60px]

    max-[413px]:px-0 
    max-[413px]:ml-0 max-[413px]:mr-0
    max-[413px]:gap-0
  "
          >


            {[...services, ...services].map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setService({
                    ...item,
                    gallery: [item.image],
                  });

                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;

                }}
                className="
  relative group cursor-pointer rounded-xl overflow-hidden 
  min-w-[calc((100%-48px)/3)] h-[432px] 
  shadow-[0px_0px_19.22px_0px_#00000012]

  max-[1201px]:h-[380px]
  
  max-[1024px]:min-w-[calc((100%-24px)/2)]
  max-[1024px]:h-[360px]

  max-[413px]:min-w-full
  max-[413px]:max-w-full
  max-[413px]:flex-none
"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />


                <div
                  className="absolute inset-0 
      bg-[linear-gradient(0deg,_#395563_0%,_rgba(20,34,92,0)_100%)]
      transition-all duration-500 ease-in-out 
      group-hover:opacity-0"
                />


                <div
                  className="absolute bottom-14 left-6 right-6 text-white 
    transition-all duration-500 group-hover:opacity-0"
                >
                  <div
                    className="w-12 h-12 mb-4 bg-white"
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
                  />

                  <h3 className="font-[Montserrat] font-medium text-[20px] leading-[23px] text-white">
                    {item.title}
                  </h3>
                </div>


                <div
                  className="absolute bottom-6 left-6 right-6 
      bg-white rounded-xl px-5 pt-5 pb-6  
      opacity-0 translate-y-6 
      group-hover:opacity-100 group-hover:translate-y-0 
      transition-all duration-500 ease-in-out z-20"
                >

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
                  />


                  <h3 className="mb-5 font-[Montserrat] font-medium text-[20px] leading-[23px] text-[#395563]">
                    {item.title}
                  </h3>

                  <p className="font-normal text-[16px] leading-[23px] text-[#3955638F]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>




      </div>

      {/* SUPPORT */}
      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
};

export default ServiceDetails;
