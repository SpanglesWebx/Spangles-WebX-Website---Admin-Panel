import React, { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img1 from "../../../assets/portfolio1.jpg";
import img2 from "../../../assets/portfolio2.jpg";
import img3 from "../../../assets/portfolio3.jpg";
const projects = [
  {
    title: "Elon Date App",
    desc: "Explore the Elon Date App, a cutting-edge platform that revolutionized online dating with AI-driven matches, boosting connections and user satisfaction globally.",
    roi: "1200% increase in ROI",
    cac: "50% decrease in CAC",
    img: img1,
  },
  {
    title: "Renewable Energy Landing Page",
    desc: "Experience a dynamic landing page for renewable energy solutions, showcasing sustainable innovations that attracted eco-conscious visitors and drove conversions significantly.",
    roi: "800% increase in ROI",
    cac: "35% decrease in CAC",
    img: img2,
  },
  {
    title: "Management Software",
    desc: "Implement efficient management software that streamlined operations, enhanced productivity, and provided real-time insights for better decision-making processes across teams.",
    roi: "950% increase in ROI",
    cac: "45% decrease in CAC",
    img: img3,
  },
];

export default function FeaturedWorkStack() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    // Ultimate Nudge: Forces a complete hardware-level reflow of the sticky container
    // This is the only way to GUARANTEE sticky re-calculation in Chrome after route changes.
    const stack = document.getElementById("featured-stack");
    if (stack) {
      stack.style.display = "none";
      stack.offsetHeight; // Trigger reflow
      stack.style.display = "flex";
    }

    const nudge = () => {
      window.dispatchEvent(new Event("resize"));
      window.scrollBy(0, 1);
      window.scrollBy(0, -1);
    };

    const timer = setTimeout(nudge, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-[#395563] overflow-visible [clip-path:inset(0)]">
      {/* Internal wrapper for relative stickiness tracking */}
      <div className="relative z-[1] overflow-visible">
        {/* HEADER WRAPPER - Limits sticky duration so the header scrolls away exactly when the last card arrives */}
        <div className="absolute top-0 left-0 right-0 h-[calc(100%-300px)] max-[1201px]:h-[calc(100%-350px)] max-[1025px]:h-[calc(100%-400px)] max-[413px]:h-[calc(100%-550px)] pointer-events-none">
          <div className="sticky top-[5px] z-[5] bg-transparent text-center pt-[60px] max-[1201px]:pt-[55px] max-[1025px]:pt-[50px] max-[413px]:pt-[50px] px-[20px] pb-[40px] max-[1201px]:pb-[30px] max-[1025px]:pb-[25px] max-[413px]:pb-[20px] pointer-events-auto">
            {/* BACKGROUND ARC FOR HEADER (Placed identically inside the header so it scrolls synchronously!) */}
            <div className="absolute -top-[450px] -left-[700px] max-[1201px]:-top-[350px] max-[1201px]:-left-[600px] max-[1201px]:w-[800px] max-[1201px]:h-[900px] max-[1201px]:border-[150px] max-[1025px]:-top-[300px] max-[1025px]:-left-[480px] max-[1025px]:w-[700px] max-[1025px]:h-[700px] max-[1025px]:border-[130px] max-[413px]:-top-[250px] max-[413px]:-left-[350px] w-[900px] h-[1000px] max-[413px]:w-[500px] max-[413px]:h-[500px] rounded-full border-[100px] max-[413px]:border-[90px] border-[rgba(0,0,0,0.08)] pointer-events-none z-[-1]">

            </div>

            {/* Foreground content needs relative zIndex so the arc stays behind */}
            <div className="relative z-[1]">
              <p className="font-montserrat font-bold text-[14px] max-[1201px]:text-[13px] max-[1025px]:text-[12px] max-[413px]:text-[12px] leading-[100%] tracking-[1.43px] text-center uppercase text-[#FFFFFFB2]">
                OUR RECENT PROJECTS
              </p>

              <h2 className="font-montserrat font-semibold text-[32px] max-[1201px]:text-[30px] max-[1201px]:leading-[38px] max-[1025px]:text-[28px] max-[1025px]:leading-[36px] max-[413px]:text-[28px] max-[413px]:leading-[36px] leading-[42.3px] tracking-[-1.06px] text-center text-white my-[10px]">
                Featured Work
              </h2>

              <p className="font-montserrat font-normal text-[16px] max-[1201px]:text-[15px] max-[1201px]:leading-[24px] max-[1025px]:text-[14px] max-[1025px]:leading-[22px] max-[413px]:text-[14px] max-[413px]:leading-[22px] leading-[24.88px] tracking-[0px] text-center text-[#c6d7dc] max-w-[600px] mx-auto">
                Browse through some of our latest digital success stories — from
                web platforms to mobile apps and branding overhauls.
              </p>
            </div>
          </div>
        </div>

        {/* STACK SECTION */}
        {/* We use a flex-column with gap to explicitly create the scroll track without tricky margin collapsing */}
        <div id="featured-stack" className="pt-[250px] max-[1201px]:pt-[250px] max-[1025px]:pt-[250px] max-[413px]:pt-[250px] flex flex-col gap-[35vh] max-[1201px]:gap-[30vh] max-[1025px]:gap-[25vh] max-[413px]:gap-[25vh] pb-0">
          {projects.map((item, index) => (
            <div
              key={index}
              className="sticky top-[220px] max-[1201px]:top-[260px] max-[1025px]:top-[250px] max-[413px]:top-[250px]"
              style={{ zIndex: 10 + index }}
            >
              <div className="mx-[90px] max-[1201px]:mx-[60px] max-[1025px]:mx-[40px] max-[413px]:mx-[24px] flex justify-between items-center max-[413px]:flex-col max-[413px]:items-start gap-[40px] max-[1201px]:gap-[30px] max-[1025px]:gap-[25px] max-[413px]:gap-[25px] bg-[#4c6571] rounded-[16px] p-[45px] max-[1201px]:p-[35px] max-[1025px]:p-[30px] max-[413px]:p-[24px] border border-[rgba(255,255,255,0.1)] min-h-[280px] max-[1201px]:min-h-[260px] max-[1025px]:min-h-[240px] max-[413px]:min-h-0">
                {/* LEFT */}
                <div className="flex-1 max-[413px]:w-full max-[413px]:flex-none">
                  <h3 className="font-montserrat font-bold text-[24px] max-[1201px]:text-[22px] max-[1201px]:leading-[26px] max-[1025px]:text-[20px] max-[1025px]:leading-[24px] max-[413px]:text-[20px] max-[413px]:leading-[24px] leading-[29.28px] tracking-[0px] text-white mb-[15px] max-[1201px]:mb-[12px] max-[1025px]:mb-[10px] max-[413px]:mb-[10px] max-[413px]:min-h-[48px]">
                    {item.title}
                  </h3>
                  <p className="font-montserrat font-medium text-[16px] max-[1201px]:text-[15px] max-[1201px]:leading-[23px] max-[1025px]:text-[14px] max-[1025px]:leading-[22px] max-[413px]:text-[14px] max-[413px]:leading-[22px] leading-[24.29px] tracking-[0px] text-[#A7A7A7] mb-[25px] max-[1201px]:mb-[22px] max-[1025px]:mb-[20px] max-[413px]:mb-[20px]">
                    {item.desc}
                  </p>

                  <div className="flex gap-[20px] max-[1201px]:gap-[15px] max-[1025px]:gap-[10px] max-[413px]:flex-col max-[413px]:gap-[8px] text-white font-montserrat font-semibold text-[16px] max-[1201px]:text-[16px] max-[1025px]:text-[14px] max-[413px]:text-[14px] max-[413px]:leading-[20px] leading-[27.32px] tracking-[0px]">
                    <span className="flex items-center gap-[8px]"><span className="text-[#A7A7A7] max-[1201px]:text-[16px] max-[1025px]:text-[14px] max-[413px]:text-[14px]">✔</span> {item.roi}</span>
                    <span className="flex items-center gap-[8px]"><span className="text-[#A7A7A7] max-[1201px]:text-[16px] max-[1025px]:text-[14px] max-[413px]:text-[14px]">✔</span> {item.cac}</span>
                  </div>

                  <button
                    onClick={() => navigate('/portfolio')}
                    className="cursor-pointer font-montserrat font-bold text-[15px] max-[1201px]:text-[15px] max-[1025px]:text-[14px] max-[413px]:text-[13px] max-[1201px]:py-[14px] max-[1201px]:px-[18px] max-[1025px]:py-[12px] max-[1025px]:px-[16px] max-[413px]:py-[12px] max-[413px]:px-[18px] leading-[24.29px] tracking-[0px] mt-[20px] max-[413px]:mt-[20px] bg-[#395563] hover:bg-[#2f4650] text-white py-[13px] px-[17px] rounded-[10px] border-none transition duration-300"
                  >
                    Read Full Case Study
                  </button>
                </div>

                {/* RIGHT */}
                <div className="flex-1 max-[413px]:w-full max-[413px]:flex-none">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[220px] max-[1201px]:h-[210px] max-[1025px]:h-[200px] max-[413px]:h-[200px] object-cover rounded-[12px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* This maintains the 100px of visual blue space at the bottom entirely outside of the sticky track so it scrolls freely! */}
      <div className="h-[100px] max-[413px]:h-[40px]"></div>
    </div>
  );
}
