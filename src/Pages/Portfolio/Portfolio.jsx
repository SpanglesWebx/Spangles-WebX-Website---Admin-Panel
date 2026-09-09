import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import hospitalBanner from "../../assets/Hospital Management/Hospital Banner (2).webp";
import clinicBanner from "../../assets/Clinic Management/Clincal Dashboard.webp";
import schoolBanner from "../../assets/School mangemnt/School management.webp";
import churchBanner from "../../assets/Church/Church.webp";
import bookMain from "../../assets/Book depot/Book-main.webp";
import bricksBanner from "../../assets/Bricks/Banner.webp";
import Support from "../About/Components/Support";
import bannerImg from "../../assets/portfolio-banner.jpg";

export default function Portfolio() {
  const navigate = useNavigate();
  const [clickedCard, setClickedCard] = useState(null);
  const portfolio = [
    {
      id: 4,
      title: "Church Management Software",
      image: churchBanner,
      desc: "A centralized church management platform designed to streamline member directories, donations, event planning, attendance tracking, and community outreach.",
    },
    {
      id: 5,
      title: "Book Depot Management System",
      image: bookMain,
      desc: "A centralized platform designed to manage bookstore operations efficiently across multiple branches with integrated billing, inventory, and reporting.",
    },
    {
      id: 1,
      title: "Hospital Management",
      image: hospitalBanner,
      desc: "A comprehensive hospital management platform that streamlines patient records, doctor scheduling, and healthcare operations efficiently.",
    },
    {
      id: 3,
      title: "School Management Software",
      image: schoolBanner,
      desc: "A comprehensive School Management platform streamlining student admissions, attendance, grading, fee management, and academic administration.",
    },
    {
      id: 6,
      title: "Brick Manufacturing Industry",
      image: bricksBanner,
      desc: "A centralized business and workforce management platform designed to streamline brick manufacturing, sales, credit tracking, employee attendance, and payroll operations.",
    },
    {
      id: 2,
      title: "Clinical Management",
      image: clinicBanner,
      desc: "A modern clinical management platform designed to simplify clinical consultations, patient appointments, and healthcare workflows.",
    },
  ];

  const goToDetails = (item) => {
    if (window.innerWidth <= 1024) {
      setClickedCard(item.id);
      setTimeout(() => {
        navigate("/portfolio-details", { state: item });
        setClickedCard(null);
      }, 350);
    } else {
      navigate("/portfolio-details", { state: item });
    }
  };

  return (
    <div>
      {/* ✅ NEW BANNER SECTION */}
      <div className="relative h-[360px] w-full max-[413px]:h-[300px]">
        <img
          src={bannerImg}
          alt="banner"
          className="w-full h-full object-cover object-center"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* text */}
        <div className="absolute inset-0 flex flex-col justify-end px-[100px] pb-25 text-white 
        max-[1024px]:px-10 max-[1024px]:pb-20 max-[768px]:px-6 max-[768px]:pb-16 max-[413px]:px-4 max-[413px]:pb-10 min-[1024px]:max-[1200px]:px-[72px]">
          <p className="font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-white max-[413px]:text-[12px]">
            Home / Portfolio
          </p>
          <h1 className="font-montserrat font-semibold text-[54px] leading-[62px] text-white mt-2 
          max-[1024px]:text-[48px] max-[1024px]:leading-[56px] max-[768px]:text-[44px] max-[768px]:leading-[52px] max-[413px]:text-[28px] max-[413px]:leading-[32px]">
            Featured Work
          </h1>
        </div>
      </div>

      {/* ✅ PORTFOLIO GRID SECTION */}
      <div className="bg-white pt-[60px] pb-[80px] border-b border-[#E5E5E5] px-[100px] min-[1441px]:w-full
     max-[1024px]:px-10 max-[768px]:px-6 max-[413px]:px-4 max-[413px]:pt-10 max-[413px]:pb-12 min-[1024px]:max-[1200px]:px-[120px]">
        <div className="grid md:grid-cols-2 gap-15 min-[1441px]:gap-20 max-[1024px]:gap-12 max-[768px]:gap-10 max-[413px]:gap-6">
          {portfolio.map((item) => (
            <div
              key={item.id}
              onClick={() => goToDetails(item)}
              className="group relative rounded-xl overflow-hidden cursor-pointer min-[1024px]:max-[1200px]:origin-top min-[1024px]:max-[1200px]:scale-[1.032] bg-[#f0f4f7] border border-[#e5e7eb] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full aspect-[2/1] max-[413px]:aspect-[16/9] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Gradient Shade (Only on hover / tap) */}
              <div
                className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#345261]/95 via-[#345261]/60 to-transparent transition-all duration-300 pointer-events-none ${
                  clickedCard === item.id
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />

              {/* Overlay (Full on hover) */}
              <div
                className={`absolute inset-0 bg-[#345261]/20 transition-all duration-300 pointer-events-none ${
                  clickedCard === item.id
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />

              {/* Content (Anchored to bottom, reveals smoothly on hover / tap) */}
              <div
                className={`absolute bottom-5 left-8 right-8 text-white z-10 transition-all duration-300 pointer-events-none ${
                  clickedCard === item.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                }`}
              >
                <h3 className="font-montserrat font-bold pb-1 text-[26px] leading-[29.28px] text-white max-[413px]:text-[22px] max-[413px]:leading-normal line-clamp-1">
                  {item.title}
                </h3>

                <p className="font-montserrat font-medium text-[14px] leading-[24.29px] text-[#E2E2E2] max-[413px]:text-[12px] max-[413px]:leading-tight line-clamp-2 h-[48px]">
                  {item.desc}
                </p>
              </div>

              {/* Arrow Button */}
              <div className={`absolute top-5.5 right-5.5 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#345261] group-hover:scale-110 
              max-[413px]:top-4 max-[413px]:right-4 max-[413px]:w-10 max-[413px]:h-10 ${clickedCard === item.id ? 'bg-[#345261] scale-110' : ''}`}>
                <ArrowRight
                  size={25}
                  className={`transform transition-all duration-300 max-[413px]:w-5 max-[413px]:h-5 group-hover:rotate-[360deg] group-hover:text-white ${clickedCard === item.id ? 'rotate-[360deg] text-white' : 'rotate-[315deg] text-[#345261]'}`}
                />
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
}
