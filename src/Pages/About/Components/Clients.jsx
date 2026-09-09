import React from "react";

// Real client logos from src/assets/Client Logo
import kanyakumariLogo from "../../../assets/Client Logo/CSI_Kanyakumari_Diocese_Logo.webp";
import christChurchLogo from "../../../assets/Client Logo/ChristChurchLogo.webp";
import buildersLogo from "../../../assets/Client Logo/builders-vKRvMrDv.webp";
import churchWorkLogo from "../../../assets/Client Logo/chruchwork-9rLId-nw.webp";
import dayspringLogo from "../../../assets/Client Logo/dayspring-DadjnC7J (1).webp";
import elyonLogo from "../../../assets/Client Logo/elyonwork-Do9O1OtC.webp";
import saralLogo from "../../../assets/Client Logo/saral-C_1tZjDe.webp";

export const clientLogos = [
  {
    id: 1,
    name: "CSI Christ Church",
    logo: christChurchLogo,
  },
  {
    id: 2,
    name: "CSI Kanyakumari Diocese",
    logo: kanyakumariLogo,
  },
  {
    id: 3,
    name: "Kevin Jose Builders",
    logo: buildersLogo,
  },
  {
    id: 4,
    name: "Dayspring Education",
    logo: dayspringLogo,
  },
  {
    id: 5,
    name: "Elyon Traders",
    logo: elyonLogo,
  },
  {
    id: 6,
    name: "Vyrakudy Church",
    logo: churchWorkLogo,
  },
  {
    id: 7,
    name: "Saral Church",
    logo: saralLogo,
  },
];

export default function Clients() {
  return (
    <section className="bg-[#ffffff] pt-[50px] pb-[75px] max-lg:pt-[40px] max-lg:pb-[60px] max-md:pt-[30px] max-md:pb-[45px] max-sm:pt-[25px] max-sm:pb-[35px] border-b border-[#E5E5E5] overflow-hidden font-montserrat select-none">
      <style>{`
        @keyframes clientLogoCarousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .client-logo-track {
          display: flex;
          width: max-content;
          animation: clientLogoCarousel 28s linear infinite;
        }
        .client-logo-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-[100px] max-xl:px-[60px] max-lg:px-[40px] max-md:px-6 max-sm:px-4 max-[413px]:px-3.5">
        {/* TOP HEADER */}
        <div className="text-center max-w-[850px] mx-auto mb-10 max-lg:mb-8 max-md:mb-6">
          <div className="mb-4 inline-block rounded-[10px] bg-gray-200 px-3.5 py-2 max-sm:px-3 max-sm:py-1.5 text-center font-montserrat text-[14px] max-md:text-[13px] max-sm:text-[12px] font-bold uppercase leading-[18px] text-[#395563] max-[413px]:mb-3">
            Our Clients
          </div>

          <h2 className="font-montserrat font-bold text-[40px] min-[1400px]:text-[44px] leading-[48px] min-[1400px]:leading-[52px] max-xl:text-[34px] max-xl:leading-[42px] max-lg:text-[30px] max-lg:leading-[38px] max-md:text-[24px] max-md:leading-[32px] max-sm:text-[22px] max-sm:leading-[28px] text-[#111827]">
            Trusted by Leading Brands{" "}
            <br className="hidden sm:block" />
            <span className="text-[#395563]">& Organizations.</span>
          </h2>

          <p className="mt-4 text-[#6B7280] font-montserrat text-[16px] leading-[28px] max-lg:text-[15px] max-lg:leading-[26px] max-md:text-[14px] max-md:leading-[24px] max-sm:text-[13px] max-sm:leading-[22px]">
            We are proud to collaborate with forward-thinking enterprises, institutions, and communities to power their digital growth.
          </p>
        </div>
      </div>

      {/* FULL-WIDTH HORIZONTAL LOGO MARQUEE */}
      <div className="relative w-full my-2 py-3">
        {/* Edge fade gradients for seamless transition */}
        <div className="absolute left-0 top-0 bottom-0 w-32 max-lg:w-20 max-md:w-12 max-sm:w-8 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 max-lg:w-20 max-md:w-12 max-sm:w-8 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        {/* Continuous Marquee Track */}
        <div className="client-logo-track flex items-center gap-6 max-md:gap-4 max-sm:gap-3 py-2">
          {[...clientLogos, ...clientLogos].map((client, index) => {
            return (
              <div
                key={`${client.id}-${index}`}
                className="group w-[240px] max-lg:w-[210px] max-md:w-[175px] max-sm:w-[145px] max-[380px]:w-[130px] h-[130px] max-lg:h-[115px] max-md:h-[100px] max-sm:h-[85px] max-[380px]:h-[75px] flex-shrink-0 bg-white rounded-[18px] max-lg:rounded-[16px] max-md:rounded-[14px] max-sm:rounded-[12px] p-5 max-lg:p-4 max-md:p-3 max-sm:p-2.5 border border-gray-200 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(57,85,99,0.12)] hover:border-[#395563]/40 transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  title={client.name}
                  className="max-h-[75px] max-w-[170px] max-lg:max-h-[62px] max-lg:max-w-[145px] max-md:max-h-[50px] max-md:max-w-[120px] max-sm:max-h-[40px] max-sm:max-w-[100px] max-[380px]:max-h-[34px] max-[380px]:max-w-[85px] object-contain transition-transform duration-300 group-hover:scale-108 select-none"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
