import React from "react";
import ServiceImg from "../../assets/Service-banner.jpg";
import Support from "../About/Components/Support";
import { useNavigate } from "react-router-dom";
import Serviceicon from "../../assets/Service-icon.png";
import { motion } from "framer-motion";
import { services } from "../../data/servicesData";

export { services };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-[1030px]:grid-cols-2 max-[413px]:!grid-cols-1 gap-x-[30px] min-[1441px]:gap-x-[20px] min-[1441px]:justify-center gap-y-[50px] min-[1441px]:gap-y-[40px] max-[413px]:gap-y-10">
          {services.map((service, index) => {
            const isLeft = index % 3 === 0;
            const isCenter = index % 3 === 1;
            const isRight = index % 3 === 2;

            return (
              <motion.div
                key={index}
                initial={
                  isLeft
                    ? { opacity: 0, x: -50, y: 20, rotate: -5, filter: "blur(10px)" }
                    : isRight
                      ? { opacity: 0, x: 50, y: 20, rotate: 5, filter: "blur(10px)" }
                      : { opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }
                }
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 15,
                  mass: 1,
                  delay: (index % 3) * 0.15,
                }}
                onClick={() =>
                  navigate(`/services/${service.slug}`, {
                    state: {
                      ...service,
                      gallery: [service.image], // can expand later
                    },
                  })
                }
                className="relative group cursor-pointer rounded-xl overflow-hidden w-[390px] h-[432px] min-[1441px]:w-[480px] min-[1441px]:h-[540px] max-[1400px]:w-full max-[1400px]:max-w-[390px] max-[1400px]:mx-auto max-[413px]:h-[430px] shadow-[0px_0px_19.22px_0px_#00000012]"
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

                  <p className="font-normal text-[16px] leading-[23.07px] text-[#3955638F] max-[413px]:text-[14px] line-clamp-2 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
};

export default Services;
