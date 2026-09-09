import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../../../data/servicesData";
import Serviceicon from "../../../assets/Icon/Service-icon.png";

export default function ServicesSection() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const isMobile = window.innerWidth <= 413;
      const gap = 24;
      const cardWidth = scrollRef.current.children[0].offsetWidth + gap;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isHovered = false;
    const setHovered = () => {
      isHovered = true;
    };
    const setNotHovered = () => {
      isHovered = false;
    };

    slider.addEventListener("mouseenter", setHovered);
    slider.addEventListener("mouseleave", setNotHovered);
    slider.addEventListener("touchstart", setHovered, { passive: true });
    slider.addEventListener("touchend", setNotHovered);

    const handleScroll = () => {
      const leftFade = document.getElementById("leftFade");
      const rightFade = document.getElementById("rightFade");

      // ✅ LEFT FADE
      if (slider.scrollLeft > 10) {
        if (leftFade) leftFade.style.opacity = "1";
      } else {
        if (leftFade) leftFade.style.opacity = "0";
      }

      // ✅ RIGHT FADE
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        if (rightFade) rightFade.style.opacity = "0";
      } else {
        if (rightFade) rightFade.style.opacity = "1";
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
      const gap = isMobile ? 24 : 24;
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
  }, []);

  return (
    <section>
      {/* SLIDER */}
      <div
        className="
          relative pt-[60px] pb-[100px] bg-[#3f5f6b]
          max-[1025px]:pb-[120px]
          max-[768px]:pt-10 max-[768px]:pb-[120px]
          max-[413px]:pt-[35px] max-[413px]:pb-[120px]
        "
      >
        <div
          className="bg-[#3f5f6b] pb-[60px] text-white
  px-[90px]
  max-[768px]:px-10
  max-[413px]:px-6 
    max-[413px]:py-6
  "
        >
          <div className="flex justify-between items-end gap-[80px] max-[1201px]:gap-[60px] max-[1025px]:flex-col max-[1025px]:items-start max-[1025px]:gap-6">
            {/* LEFT: Heading */}
            <div className="flex flex-col items-start flex-shrink-0">
              <p className="font-montserrat font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-white/70 mb-4">
                OUR SERVICE
              </p>

              <h2 className="font-montserrat font-semibold text-[32px] leading-[42px] tracking-[-1.06px] max-w-[350px] max-[1201px]:text-[30px] max-[1201px]:max-w-[300px] max-[413px]:text-[24px] max-[413px]:leading-[32px]">
                We Offer a Wide Variety of IT Services
              </h2>
            </div>

            {/* RIGHT: Description + Button */}
            <div className="flex-1 flex justify-between min-[1600px]:justify-end min-[1600px]:gap-12 items-end gap-4 max-[1201px]:gap-4 max-[1025px]:w-full max-[413px]:flex-col max-[413px]:items-start">
              {/* DESCRIPTION */}
              <p className="font-montserrat font-normal text-[16px] leading-[24px] text-white/90 max-w-[650px] text-justify max-[1201px]:text-[15px] max-[1025px]:max-w-none max-[413px]:text-[14px] max-[413px]:leading-[20px]">
                At Spangles Webx Pvt. Ld, we offer a comprehensive range of IT
                services designed to empower businesses in the digital era. We
                combine a customer-focused approach to ensure every project is
                executed with precision, efficiency, and transparency, helping
                your business grow and stay ahead in a competitive market.
              </p>

              {/* BUTTON */}
              <button
                onClick={() => navigate('/services')}
                className="group cursor-pointer font-montserrat font-bold text-[12px] leading-[18px] uppercase text-[#395563] bg-white px-[25px] py-[16px] rounded-lg flex items-center gap-2 whitespace-nowrap transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] max-[1025px]:mt-4 max-[413px]:w-full max-[413px]:justify-center"
              >
                ALL SERVICES
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </div>
          </div>
        </div>

        <div className="relative">
          {/* RIGHT GREY SHADE */}
          <div
            id="rightFade"
            className="pointer-events-none absolute right-0 top-0 h-full w-[60px] 
          bg-gradient-to-l from-[#3f5f6b] to-transparent z-20 max-[413px]:w-[22px] max-[413px]:rounded-l-[22px] transition-opacity duration-300"
          />

          {/* LEFT GREY SHADE */}
          <div
            id="leftFade"
            className="pointer-events-none absolute left-0 top-0 h-full w-[60px] 
          bg-gradient-to-r from-[#3f5f6b] to-transparent z-20 max-[413px]:w-[22px] max-[413px]:rounded-r-[22px] opacity-0 transition-opacity duration-300"
          />

          <button
            onClick={() => scroll("left")}
            className="absolute left-[30px] top-1/2 -translate-y-1/2 
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
            className="absolute right-[30px] top-1/2 -translate-y-1/2 
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
            px-[90px]
            max-[768px]:px-10
            max-[413px]:px-6
            max-[413px]:gap-6
            snap-x snap-mandatory scroll-px-[90px] max-[768px]:scroll-px-10 max-[413px]:scroll-px-6
          "
          >
            {[...services, ...services].map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  navigate(`/services/${item.slug}`, {
                    state: {
                      ...item,
                      gallery: [item.image],
                    },
                  });

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="
          relative group cursor-pointer rounded-2xl overflow-hidden 
          min-w-[calc((100%-48px)/3)] aspect-[4/3] h-auto
          shadow-[0px_10px_30px_0px_rgba(0,0,0,0.08)] hover:shadow-[0px_20px_40px_0px_rgba(0,0,0,0.15)]
          transition-all duration-500
          snap-start
        
          max-[1024px]:min-w-[calc((100%-24px)/2)]
          max-[413px]:min-w-[calc(100%-60px)]
          max-[413px]:max-w-[calc(100%-60px)]
          max-[413px]:flex-none
        "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* 🔹 Bottom shade only (~3cm from bottom) */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[45%] max-h-[135px] min-h-[110px]
              bg-[linear-gradient(0deg,_#395563_0%,_rgba(57,85,99,0.7)_50%,_transparent_100%)]
              transition-all duration-500 ease-in-out 
              group-hover:opacity-0 pointer-events-none"
                />

                <div
                  className="absolute bottom-6 left-6 right-6 text-white 
            transition-all duration-500 group-hover:opacity-0 z-10"
                >
                  <div
                    className="w-10 h-10 mb-3 bg-white"
                    style={{
                      WebkitMaskImage: `url(${item.icon || Serviceicon})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskImage: `url(${item.icon || Serviceicon})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                  />

                  <h3 className="font-[Montserrat] font-semibold text-[18px] min-[1441px]:text-[20px] leading-tight text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>

                <div
                  className="absolute bottom-4 left-4 right-4 
              bg-white/95 backdrop-blur-md rounded-xl p-4 min-[1441px]:p-5 shadow-lg
              opacity-0 translate-y-4 
              group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-400 ease-out z-20"
                >
                  <div
                    className="w-8 h-8 min-[1441px]:w-10 min-[1441px]:h-10 mb-2 bg-[#395563]"
                    style={{
                      WebkitMaskImage: `url(${item.icon || Serviceicon})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskImage: `url(${item.icon || Serviceicon})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                  />

                  <h3 className="mb-2 font-[Montserrat] font-semibold text-[16px] min-[1441px]:text-[18px] leading-tight text-[#395563]">
                    {item.title}
                  </h3>

                  <p className="font-normal text-[16px] leading-[23px] text-[#3955638F] line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
