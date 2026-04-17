import React from "react";
import spiralBg from "../../../assets/Spiral.png"; // Make sure to have this image in your assets folder
import scurve from "../../../assets/s-shape3.png"; // Make sure to have this image in your assets folder
import imgvibe from "../../../assets/imgvibe.jpg"; // Make sure to have this image in your assets folder

export default function HeroSection() {
  return (
    <div className="overflow-x-clip">
      <section className="relative bg-[#ffffff] pt-30 pb-60 max-[1201px]:pb-52 max-[1024px]:pb-48 max-[413px]:pt-25 max-[413px]:pb-[220px]">
        {/* TOP LEFT THICK ARC — same size/stroke as desktop, visible on ≤413px too */}
        <div className="absolute -top-[370px] -left-[350px] z-0 h-[620px] w-[620px] rounded-full border-[60px] border-gray-50"></div>

        {/* THIN GREY LINE (LARGE CIRCLE) */}
        <svg
          className="absolute top-[250px] left-0 w-[600px] md:w-[600px] h-[600px] md:h-[650px] z-1 pointer-events-none opacity-60 max-[413px]:hidden"
          viewBox="0 0 1000 1000"
          fill="none"
        >
          <path
            d="M 0 0 Q 550 100, 650 700"
            stroke="#D1D5DB"
            strokeWidth="4"
            fill="none"
          />
        </svg>

        {/* Same grey arc as desktop — visible only ≤413px (desktop SVG hidden there) */}
        <svg
          className="pointer-events-none absolute bottom-[-260px] left-1/2 z-[1] hidden h-[650px] w-[600px] max-w-none -translate-x-1/2 opacity-60 max-[413px]:block"
          viewBox="0 0 1000 1000"
          fill="none"
          aria-hidden
        >
          <path
            d="M 0 0 Q 500 100, 650 700"
            stroke="#D1D5DB"
            strokeWidth="1.99"
            vectorEffect="nonScalingStroke"
            fill="none"
          />
        </svg>

        {/* RIGHT SPIRAL / WAVE BACKGROUND */}
        <div className="absolute top-[-10%] right-0 z-0 h-[120%] w-[100%] opacity-80 pointer-events-none md:w-[85%] max-[413px]:hidden">
          <img
            src={spiralBg}
            alt=""
            className="w-full h-full object-contain object-right-top md:object-right hero-spiral"
            style={{
              transform:
                "var(--hero-spiral-transform, scale(1.2) translateX(-5%))",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-10 text-center max-[413px]:px-6 max-[413px]:pt-6">
          {/* BADGE */}
          <div className="mb-6 inline-block rounded-[10px] bg-gray-200 px-2.5 py-2.5 text-center font-montserrat text-[14px] font-bold capitalize leading-[18px] text-[#395563] max-[413px]:mb-5 max-[413px]:rounded-full max-[413px]:bg-[#E8EAED] max-[413px]:px-4 max-[413px]:py-2 max-[413px]:text-[12px] max-[413px]:font-semibold max-[413px]:leading-[16px] max-[413px]:text-[#4A5568]">
            Best Marketing Agency
          </div>

          {/* HEADING */}
          <h1 className="mb-7.5 text-center text-[48px] font-semibold leading-[61.5px] text-[#395563] max-[1024px]:text-[42px] max-[1024px]:leading-[54px] max-[413px]:mb-5 max-[413px]:text-[26px] max-[413px]:font-bold max-[413px]:leading-[1.35] max-[413px]:tracking-[-0.02em] max-[413px]:text-[#395563]">
            Empowering Businesses with{" "}
            <br className="md:hidden max-[413px]:hidden" />
            <br className="hidden md:block" />
            Cutting-Edge Digital Solutions
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mb-7.5 max-w-[500px] text-center font-montserrat text-[16px] font-normal leading-[22.5px] text-[#6B6A66] max-[413px]:mb-5 max-[413px]:max-w-[min(100%,320px)] max-[413px]:text-[14px] max-[413px]:leading-[1.5] max-[413px]:text-[#5C6370]">
            Spangles Webx Private Limited offers tailored solutions in Web
            Development, UI/UX Design, Mobile Apps, and Branding to help your
            business thrive in the digital world.
          </p>

          {/* BUTTON */}
          <button className="rounded-[10px] border-[0.75px] border-transparent bg-[#395563] px-[15px] py-[12px] text-center font-montserrat text-[14px] font-semibold leading-[100%] text-white transition hover:bg-[#2f4650] max-[413px]:mx-auto max-[413px]:block max-[413px]:max-w-[220px] max-[413px]:rounded-[10px]  max-[413px]:px-[16px] max-[413px]:py-[16px] max-[413px]:text-[14px]">
            Explore Services
          </button>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="relative z-20 pb-16 min-[1440px]:pb-24 bg-transparent -mt-32 max-[413px]:-mt-[120px] max-[413px]:pb-0">
        {/* CURVE IMAGE (BACKGROUND) - moved to section level for full width relative positioning */}
        <img
          src={scurve}
          alt=""
          className="absolute -top-[60px] left-0 w-[70%] object-cover object-right h-auto pointer-events-none z-0 opacity-80 max-[413px]:hidden"
          style={{
            filter:
              "invert(21%) sepia(94%) saturate(2793%) hue-rotate(247deg) brightness(95%) contrast(95%)",
          }}
        />

        {/* 413px: purple dashed arc behind hero image top */}
        <svg
          className="pointer-events-none absolute -top-[72px] left-[-8%] z-[1] hidden h-[200px] w-[85%] max-w-[360px] max-[413px]:block"
          viewBox="0 0 320 180"
          fill="none"
          aria-hidden
        >
          <path
            d="M -20 120 Q 40 20, 160 48 T 300 100"
            stroke="#7C3AED"
            strokeWidth="1.5"
            strokeDasharray="5 6"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
        </svg>

        <div className="mx-auto max-w-6xl px-6 max-[413px]:px-5">
          <div className="relative flex justify-center">
            {/* 413px: soft blue glow behind top-left of image */}
            <div
              className="pointer-events-none absolute -top-3 left-[6%] z-[2] hidden h-[100px] w-[100px] rounded-full max-[413px]:block"
              style={{
                background:
                  "radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(56, 189, 248, 0.12) 45%, transparent 70%)",
                filter: "blur(2px)",
              }}
              aria-hidden
            />
            {/* MAIN IMAGE CARD */}
            <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-xl border border-gray-100 shadow-lg max-[413px]:rounded-[18px] max-[413px]:border-[#E8EAED]">
              <img
                src={imgvibe}
                alt="Preview"
                className="h-[550px] w-full object-cover min-[1440px]:h-[600px] max-[1024px]:h-[420px] max-[413px]:h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
