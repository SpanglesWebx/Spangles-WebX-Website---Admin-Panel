import React from "react";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon-4.png";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#Ffffff] py-[90px] relative overflow-hidden max-[413px]:bg-[#F4F7FA] max-[413px]:py-[60px]">
      {/* Dots Pattern */}
      <div
        className="absolute left-[0px] top-[120px] grid grid-cols-8 gap-[8px] opacity-100 
max-[413px]:top-[130px] 
max-[413px]:left-0 
max-[413px]:grid-cols-6 
max-[413px]:gap-[6px] 
max-[413px]:w-[56px] 
max-[413px]:h-[56px] 
max-[413px]:opacity-100
max-[413px]:overflow-hidden"
      >
        {[...Array(72)].map((_, i) => (
          <span
            key={i}
            className="w-[6px] h-[6px] bg-[#130D3A] rounded-full opacity-100 max-[413px]:w-[4px] max-[413px]:h-[4px]"
          ></span>
        ))}
      </div>

      <div className="max-w-[1100px] mx-auto px-6 max-[1025px]:px-20 text-center max-[413px]:px-4">
        {/* Top Label */}
        <p className="font-montserrat font-bold text-[14px] leading-[100%] tracking-[1.43px] uppercase text-center text-[#395563] mb-[20px]">
          WHY CHOOSE US
        </p>

        {/* Heading */}
        <h2 className="font-montserrat font-semibold text-[32px] leading-[42.3px] tracking-[-1.06px] text-center text-[#161C2D] mb-[100px] max-[413px]:text-[20px] max-[413px]:leading-[32px] max-[413px]:mb-[60px] max-[413px]:w-[320px] mx-auto">
          Why Partner With Spangles <br className="hidden min-[1025px]:block" />
          Webx?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[120px] gap-y-[50px] text-left max-[413px]:gap-y-[45px]">
          {/* Item 1 */}
          <div className="flex items-start gap-[26px] max-[413px]:gap-[16px]">
            <div className="p-[20px] bg-[#E0E7FF] rounded-[10px] flex items-center justify-center max-[413px]:p-[16px]">
              <img
                src={icon3}
                alt="icon"
                className="w-[35px] h-[35px] object-contain max-[413px]:w-[28px] max-[413px]:h-[28px]"
              />
            </div>

            <div>
              <h3 className="font-montserrat font-bold text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] mb-[6px] max-[413px]:text-[14px] max-[413px]:leading-[22px]">
                Expert Team of Developers & Designers
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#6B6A66] max-w-[300px] max-[413px]:leading-[20px] max-[413px]:text-[12px] max-[413px]:max-w-[260px]">
                A powerhouse of creative designers and skilled developers
                turning ideas into impactful digital solutions.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-[26px] max-[413px]:gap-[16px]">
            <div className="p-[20px] bg-[#e6f4ee] rounded-[10px] flex items-center justify-center max-[413px]:p-[14px]">
              <img
                src={icon4}
                alt="icon"
                className="w-[35px] h-[35px] object-contain max-[413px]:w-[28px] max-[413px]:h-[28px]"
              />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] mb-[6px] max-[413px]:text-[14px] max-[413px]:leading-[22px]">
                Modern, Scalable Tech Stack
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#6B6A66] max-w-[300px] max-[413px]:leading-[20px] max-[413px]:text-[12px] max-[413px]:max-w-[260px]">
                Empowering your business with a modern, scalable tech stack
                designed for growth and performance.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-[26px] max-[413px]:gap-[16px]">
            <div className="p-[20px] bg-[#dee1e6] rounded-[10px] flex items-center justify-center max-[413px]:p-[14px]">
              <img
                src={icon1}
                alt="icon"
                className="w-[35px] h-[35px] object-contain max-[413px]:w-[28px] max-[413px]:h-[28px]"
              />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] mb-[6px] max-[413px]:text-[14px] max-[413px]:leading-[22px]">
                Timely Delivery & Ongoing Support
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#6B6A66] max-w-[300px] max-[413px]:leading-[20px] max-[413px]:text-[12px] max-[413px]:max-w-[260px]">
                Ensuring timely delivery and reliable ongoing support to keep
                your projects running smoothly.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-[26px] max-[413px]:gap-[16px]">
            <div className="p-[20px] bg-[#f4e6e9] rounded-[10px] flex items-center justify-center max-[413px]:p-[14px]">
              <img
                src={icon2}
                alt="icon"
                className="w-[35px] h-[35px] object-contain max-[413px]:w-[28px] max-[413px]:h-[28px]"
              />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] mb-[6px] max-[413px]:text-[14px] max-[413px]:leading-[22px]">
                100% Project Transparency
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#6B6A66] max-w-[300px] max-[413px]:leading-[20px] max-[413px]:text-[12px] max-[413px]:max-w-[260px]">
                Experience complete project transparency with clear updates and
                full visibility at every stage.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB] mx-[55px] mt-[100px] mb-[40px] max-[413px]:mx-0 max-[413px]:mt-[40px] max-[413px]:mb-[35px]"></div>

        {/* Bottom CTA */}
        <div className="flex flex-col mx-[55px] md:flex-row items-center justify-between gap-6 text-left max-[413px]:mx-0 max-[413px]:items-start">
          <div>
            <h3 className="font-montserrat font-bold text-[28px] leading-[38.78px] tracking-[-1.06px] text-[#161C2D] mb-[14px] max-[413px]:text-[18px] max-[413px]:leading-[28px]">
              Ready to launch your next project?
            </h3>
           <p className="font-montserrat font-normal w-[900px] text-[18px] leading-[28.2px] tracking-[-0.18px] text-[#6B6A66] max-w-[700px] max-[413px]:text-[12px] max-[413px]:leading-[20px] max-[413px]:max-w-[320px]">
              Ready to launch your next project? We combine creativity,
              technology, and expertise to bring your vision to life. With a
              focus on quality and timely delivery, we ensure your project
              succeeds from start to finish.
            </p>
          </div>

          <button className="bg-[#395563] hover:bg-[#2f4650] text-white font-montserrat font-bold text-[12px] leading-[18px] tracking-[0px] uppercase text-center align-middle px-[25px] py-[17px] rounded-[10px] flex items-center justify-center gap-2 whitespace-nowrap transition max-[413px]:px-[27px] max-[413px]:py-[16px]">
            GET START
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 max-[413px]:w-[12px] max-[413px]:h-[12px]"
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
    </section>
  );
};

export default WhyChooseUs;
