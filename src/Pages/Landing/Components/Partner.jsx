import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon-4.png";

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 100,
    restDelta: 0.001
  });

  // Crossover scroll-linked animations (Remapped for full visibility range)
  // Card 1: From Right-Top (Moves to Left)
  const opacity1 = useTransform(smoothProgress, [0.05, 0.35], [0, 1]);
  const scale1 = useTransform(smoothProgress, [0.05, 0.35], [0.4, 1]);
  const x1 = useTransform(smoothProgress, [0.05, 0.35], [150, 0]);
  const y1 = useTransform(smoothProgress, [0.05, 0.35], [-150, 0]);
  const r1 = useTransform(smoothProgress, [0.05, 0.35], [-20, 0]);

  // Card 2: From Left-Top (Moves to Right)
  const opacity2 = useTransform(smoothProgress, [0.05, 0.35], [0, 1]);
  const scale2 = useTransform(smoothProgress, [0.05, 0.35], [0.4, 1]);
  const x2 = useTransform(smoothProgress, [0.05, 0.35], [-150, 0]);
  const y2 = useTransform(smoothProgress, [0.05, 0.35], [-150, 0]);
  const r2 = useTransform(smoothProgress, [0.05, 0.35], [20, 0]);

  // Card 3: From Right (Moves to Left)
  const opacity3 = useTransform(smoothProgress, [0.15, 0.45], [0, 1]);
  const scale3 = useTransform(smoothProgress, [0.15, 0.45], [0.4, 1]);
  const x3 = useTransform(smoothProgress, [0.15, 0.45], [150, 0]);
  const y3 = useTransform(smoothProgress, [0.15, 0.45], [0, 0]);
  const r3 = useTransform(smoothProgress, [0.15, 0.45], [-10, 0]);

  // Card 4: From Left (Moves to Right)
  const opacity4 = useTransform(smoothProgress, [0.15, 0.45], [0, 1]);
  const scale4 = useTransform(smoothProgress, [0.15, 0.45], [0.4, 1]);
  const x4 = useTransform(smoothProgress, [0.15, 0.45], [-150, 0]);
  const y4 = useTransform(smoothProgress, [0.15, 0.45], [0, 0]);
  const r4 = useTransform(smoothProgress, [0.15, 0.45], [10, 0]);

  // Heading animations
  const headerOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const headerY = useTransform(smoothProgress, [0, 0.4], [30, 0]);

  return (
    <section
      ref={containerRef}
      className="bg-[#Ffffff] py-[90px] relative overflow-hidden max-[413px]:bg-[#F4F7FA] max-[413px]:py-[60px]"
    >
      {/* Decorative Animated Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -right-20 -top-20 w-[400px] h-[400px] bg-[#E0E7FF]/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -left-20 -bottom-20 w-[300px] h-[300px] bg-[#e6f4ee]/30 rounded-full blur-[80px] pointer-events-none"
      />

      {/* Dots Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-[0px] top-[120px] grid grid-cols-8 gap-[8px] max-[413px]:top-[130px] max-[413px]:left-0 max-[413px]:grid-cols-6 max-[413px]:gap-[6px] max-[413px]:w-[56px] max-[413px]:h-[56px] max-[413px]:overflow-hidden pointer-events-none"
      >
        {[...Array(72)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.01, duration: 0.5 }}
            className="w-[6px] h-[6px] bg-[#130D3A]/10 rounded-full max-[413px]:w-[4px] max-[413px]:h-[4px]"
          ></motion.span>
        ))}
      </motion.div>

      <div className="max-w-[1100px] mx-auto px-6 max-[1025px]:px-20 text-center max-[413px]:px-4 relative z-10">
        {/* Top Label */}
        <motion.p
          style={{ opacity: headerOpacity, y: headerY }}
          className="font-montserrat font-bold text-[14px] leading-[100%] tracking-[1.43px] uppercase text-center text-[#395563] mb-[20px]"
        >
          WHY CHOOSE US
        </motion.p>

        {/* Heading */}
        <motion.h2
          style={{ opacity: headerOpacity, y: headerY }}
          className="font-montserrat font-semibold text-[32px] leading-[42.3px] tracking-[-1.06px] text-center text-[#161C2D] mb-[100px] max-[413px]:text-[20px] max-[413px]:leading-[32px] max-[413px]:mb-[60px] max-[413px]:w-[320px] mx-auto"
        >
          Why Partner With Spangles <br className="hidden min-[1025px]:block" />
          Webx?
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[120px] gap-y-[50px] text-left max-[413px]:gap-y-[45px]">
          {/* Item 1 */}
          <motion.div
            style={{ opacity: opacity1, scale: scale1, x: x1, y: y1, rotate: r1 }}
            className="flex items-start gap-[26px] max-[413px]:gap-[16px] group cursor-default"
          >
            <div className="p-[20px] bg-[#E0E7FF] rounded-[10px] flex items-center justify-center max-[413px]:p-[16px] relative overflow-hidden">
              <motion.img
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                src={icon3}
                alt="icon"
                className="w-[35px] h-[35px] object-contain max-[413px]:w-[28px] max-[413px]:h-[28px] relative z-10"
              />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>

            <div>
              <h3 className="font-montserrat font-bold text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] mb-[6px] max-[413px]:text-[14px] max-[413px]:leading-[22px] group-hover:text-[#395563] transition-colors">
                Expert Team of Developers & Designers
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#6B6A66] max-w-[300px] max-[413px]:leading-[20px] max-[413px]:text-[12px] max-[413px]:max-w-[260px]">
                A powerhouse of creative designers and skilled developers
                turning ideas into impactful digital solutions.
              </p>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            style={{ opacity: opacity2, scale: scale2, x: x2, y: y2, rotate: r2 }}
            className="flex items-start gap-[26px] max-[413px]:gap-[16px] group cursor-default"
          >
            <div className="p-[20px] bg-[#e6f4ee] rounded-[10px] flex items-center justify-center max-[413px]:p-[14px] relative overflow-hidden">
              <motion.img
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                src={icon4}
                alt="icon"
                className="w-[35px] h-[35px] object-contain max-[413px]:w-[28px] max-[413px]:h-[28px] relative z-10"
              />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] mb-[6px] max-[413px]:text-[14px] max-[413px]:leading-[22px] group-hover:text-[#395563] transition-colors">
                Modern, Scalable Tech Stack
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#6B6A66] max-w-[300px] max-[413px]:leading-[20px] max-[413px]:text-[12px] max-[413px]:max-w-[260px]">
                Empowering your business with a modern, scalable tech stack
                designed for growth and performance.
              </p>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            style={{ opacity: opacity3, scale: scale3, x: x3, y: y3, rotate: r3 }}
            className="flex items-start gap-[26px] max-[413px]:gap-[16px] group cursor-default"
          >
            <div className="p-[20px] bg-[#dee1e6] rounded-[10px] flex items-center justify-center max-[413px]:p-[14px] relative overflow-hidden">
              <motion.img
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                src={icon1}
                alt="icon"
                className="w-[35px] h-[35px] object-contain max-[413px]:w-[28px] max-[413px]:h-[28px] relative z-10"
              />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] mb-[6px] max-[413px]:text-[14px] max-[413px]:leading-[22px] group-hover:text-[#395563] transition-colors">
                Timely Delivery & Ongoing Support
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#6B6A66] max-w-[300px] max-[413px]:leading-[20px] max-[413px]:text-[12px] max-[413px]:max-w-[260px]">
                Ensuring timely delivery and reliable ongoing support to keep
                your projects running smoothly.
              </p>
            </div>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            style={{ opacity: opacity4, scale: scale4, x: x4, y: y4, rotate: r4 }}
            className="flex items-start gap-[26px] max-[413px]:gap-[16px] group cursor-default"
          >
            <div className="p-[20px] bg-[#f4e6e9] rounded-[10px] flex items-center justify-center max-[413px]:p-[14px] relative overflow-hidden">
              <motion.img
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                src={icon2}
                alt="icon"
                className="w-[35px] h-[35px] object-contain max-[413px]:w-[28px] max-[413px]:h-[28px] relative z-10"
              />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] mb-[6px] max-[413px]:text-[14px] max-[413px]:leading-[22px] group-hover:text-[#395563] transition-colors">
                100% Project Transparency
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#6B6A66] max-w-[300px] max-[413px]:leading-[20px] max-[413px]:text-[12px] max-[413px]:max-w-[260px]">
                Experience complete project transparency with clear updates and
                full visibility at every stage.
              </p>
            </div>
          </motion.div>
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

          <button
            onClick={() => navigate('/contact')}
            className="group cursor-pointer bg-[#395563] hover:bg-[#2f4650] text-white font-montserrat font-bold text-[12px] leading-[18px] tracking-[0px] uppercase text-center align-middle px-[25px] py-[17px] rounded-[10px] flex items-center justify-center gap-2 whitespace-nowrap transition max-[413px]:px-[27px] max-[413px]:py-[16px]"
          >
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
