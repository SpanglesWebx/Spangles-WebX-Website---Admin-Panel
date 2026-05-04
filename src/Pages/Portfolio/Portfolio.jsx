import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import img1 from "../../assets/churchs.png";
import img2 from "../../assets/church.png";
import img3 from "../../assets/churc.png";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.jpg";
import img6 from "../../assets/portfolio6.jpg";
import img7 from "../../assets/portfolio7.jpg";
import img8 from "../../assets/portfolio8.jpg";
import Support from "../About/Components/Support";
import Preloader from "../../Components/Preloader";
// 👉 add your background image
import bannerImg from "../../assets/portfolio-banner.jpg";

export default function Portfolio() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [clickedCard, setClickedCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }
  const portfolio = [
    {
      id: 1,
      title: "Elon Date App",
      image: img1,
      desc: "An analytics-driven dating experience that uses smart matching algorithms to connect people based on deep interests and shared behaviors.",
    },
    {
      id: 2,
      title: "Renewable Energy",
      image: img2,
      desc: "Experience a dynamic landing page for renewable energy solutions, showcasing sustainable innovations that attracted eco-conscious visitors and drove conversions significantly.",
    },
    {
      id: 3,
      title: "Management Software",
      image: img3,
      desc: "Implement efficient management software that streamlined operations, enhanced productivity, and provided real-time insights for better decision-making processes across teams.",
    },
    {
      id: 4,
      title: "Hyper Design",
      image: img4,
      desc: "A minimal UI with futuristic interaction design that provides a seamless and immersive user experience across all digital touchpoints.",
    },
    {
      id: 5,
      title: "Laptop UI",
      image: img5,
      desc: "A clean dashboard interface designed for modern productivity tools, focusing on efficiency and ease of use for complex data workflows.",
    },
    {
      id: 6,
      title: "Fashion Mockup",
      image: img6,
      desc: "A trendy fashion showcase featuring a modern layout and high-quality visuals to highlight the latest styles and brand collections effectively.",
    },

    // 👉 NEW CARDS
    {
      id: 7,
      title: "Creative Studio",
      image: img7,
      desc: "Creative branding and digital experience design that helps businesses build a strong identity and connect with their audience meaningfully.",
    },
    {
      id: 8,
      title: "Mobile UI Kit",
      image: img8,
      desc: "A modern mobile UI kit featuring versatile components and smooth interactions designed to accelerate the development of high-quality apps.",
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
      {/* ✅ NEW BANNER SECTION (like your image) */}
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

      {/* ✅ YOUR ORIGINAL SECTION (UNCHANGED) */}
      <div className="bg-white pt-[60px] pb-[80px] border-b border-[#E5E5E5] px-[100px] min-[1441px]:w-full
     max-[1024px]:px-10 max-[768px]:px-6 max-[413px]:px-4 max-[413px]:pt-10 max-[413px]:pb-12 min-[1024px]:max-[1200px]:px-[120px]">
        <div className="grid md:grid-cols-2 gap-15 min-[1441px]:gap-20 mb-8.5 max-[1024px]:gap-12 max-[768px]:gap-10 max-[413px]:gap-6">
          {(showAll ? portfolio : portfolio.slice(0, 6)).map((item) => (
            <div
              key={item.id}
              onClick={() => goToDetails(item)}
              className="group relative rounded-xl overflow-hidden cursor-pointer min-[1024px]:max-[1200px]:origin-top min-[1024px]:max-[1200px]:scale-[1.032]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[280px] min-[1441px]:h-[450px] object-cover max-[413px]:h-[230px]"
              />

              {/* Bottom Gradient Shade */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#345261]/90 via-[#345261]/40 to-transparent transition-opacity duration-300" />

              {/* Overlay (Full on hover) */}
              <div className={`absolute inset-0 bg-[#345261]/20 transition-all duration-300 ${clickedCard === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

              {/* Content (Anchored to bottom, with fixed-height desc to align titles) */}
              <div className="absolute bottom-5 left-8 right-8 text-white z-10">
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

        <div className="text-center max-[413px]:my-6">
          {/* <button
  onClick={() => setShowAll(true)}
  className="font-montserrat font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-[#395563] flex items-center gap-2 mx-auto"
>
  SHOW ALL <ArrowRight size={14} />
</button> */}


          <button
            onClick={() => setShowAll(!showAll)}
            className="font-montserrat font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-[#395563] flex items-center gap-2 mx-auto max-[413px]:text-[13px]"
          >
            {showAll ? "SHOW LESS" : "SHOW ALL"} <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
}
