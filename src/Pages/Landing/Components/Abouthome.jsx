import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import AboutImage from "../../../assets/about-image.png"; // Make sure to have this image in your assets folder
import growthIcon from "../../../assets/growthIcon.png"; // Make sure to have this image in your assets folder
import starIcon from "../../../assets/starIcon.png"; // Make sure to have this image in your assets folder
function CountUp({ to, durationMs = 2000, suffix = "" }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const tick = (t) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const progress = Math.min(1, elapsed / durationMs);
      const next = Math.round(to * progress);
      setValue(next);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      startRef.current = null;
    };
  }, [to, durationMs]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}
export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#ffffff]">
      <div className="w-full px-[100px] py-[100px] grid md:grid-cols-2 gap-16 items-center md:max-[1025px]:items-start max-[1025px]:gap-12 max-[1025px]:px-[60px] max-[1025px]:py-[70px] max-[413px]:px-4 max-[413px]:py-[60px] max-[413px]:gap-10">
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={AboutImage}
            alt=""
            className="rounded-xl w-full h-full object-cover"
          />
          <div className="absolute bottom-7 right-7 w-[200px] h-[200px] bg-white rounded-full shadow-lg flex flex-col items-center justify-center text-center max-[413px]:w-[150px] max-[413px]:h-[150px] max-[413px]:bottom-4 max-[413px]:right-4">
            <div className="w-[42px] h-[42px] rounded-full bg-[#ffffff] flex items-center justify-center mb-3">
              <img src={starIcon} alt="growth" className="w-[34px] h-[34px]" />
            </div>
            <div className="text-[44px] font-semibold leading-[1] text-[#395563] font-montserrat max-[413px]:text-[34px]">
              <CountUp to={8} suffix="+" />
            </div>
            <div className="mt-2 text-[14px] font-normal leading-[20px] text-[#6B6A66] font-montserrat max-w-[120px] max-[413px]:text-[12px] max-[413px]:leading-[16px] max-[413px]:max-w-[110px]">
              Years Experience in Field
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-[14px] font-bold tracking-[2.24px] leading-[21px] text-[#395563] max-[413px]:text-[10px] max-[413px]:mb-[10px] uppercase font-[Montserrat] mb-4">
            WHO WE ARE
          </p>

          <h2 className="text-[46px] font-semibold leading-[52.36px] tracking-[0px] text-[#395563] font-montserrat mb-4 max-[413px]:text-[22px] max-[413px]:leading-[34px]">
            Spangles Webx is a <br className="hidden min-[1025px]:block" />
            tech-driven company <br className="hidden min-[1025px]:block" />
            Webx is a tech
          </h2>

          <p className="w-full max-w-lg font-montserrat font-normal text-[#6B6A66] text-[16px] leading-[23.65px] mb-10 max-[413px]:text-[14px] max-[413px]:leading-[20px] max-[413px]:mb-8">
            Spangles Webx is a tech-driven company passionate about delivering
            innovative digital products. With a focus on design, usability, and
            performance, we help startups and enterprises scale with impactful
            web and mobile solutions.
          </p>

          <div className="flex items-center gap-4 mb-7.5 max-[413px]:gap-3">
            <div className="bg-gray-100 rounded-md text-xl">
              <div className="bg-gray-100 rounded-md">
                <img
                  src={growthIcon}
                  alt="growth"
                  className="w-[65px] h-[65px] object-contain max-[413px]:w-[54px] max-[413px]:h-[54px]"
                />
              </div>
            </div>
            <div>
              <div className="text-[50px] pb-4 font-semibold leading-[33.78px] text-[#395563] font-montserrat max-[413px]:text-[36px] max-[413px]:pb-2">
                2.5 K
              </div>
              <p className="text-[14px] font-normal leading-[23.65px] text-[#6B6A66] font-montserrat">
                Growth, Compare to Previous Year
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/about')}
            className="cursor-pointer bg-[#395563] text-white px-[25px] py-[14px] rounded-[10px] text-[16px] font-semibold leading-[100%] text-center font-montserrat hover:bg-[#243a47] transition max-[413px]:w-full max-[413px]:max-w-[200px] max-[413px]:text-[12px] max-[413px]:px-[25px] max-[413px]:py-[18px]"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
