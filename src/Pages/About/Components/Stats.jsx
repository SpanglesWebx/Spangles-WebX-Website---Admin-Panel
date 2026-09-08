import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function Stats() {
  const [rating, setRating] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId;
    const duration = 1400; // 1.4s smooth counter

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Smooth ease-out cubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * 4.9;

      if (progress < 1) {
        setRating(parseFloat(currentVal.toFixed(1)));
        animationFrameId = requestAnimationFrame(step);
      } else {
        setRating(4.9);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="bg-[#ffffff] pt-[70px] pb-[90px] px-[130px] max-[1024px]:px-[60px] max-[768px]:px-[24px] max-[480px]:px-4 max-[413px]:pt-[40px] max-[413px]:pb-[50px]"
    >
      <div className="max-w-7xl mx-auto">
        {/* First Paragraph - Full Width */}
        <div className="text-gray-500 text-[16px] leading-[28px] mb-[60px] max-[413px]:mb-[30px] text-justify">
          <p>
            Spangles Webx Pvt Ltd, launched in 2025, has established itself as a
            trusted leader in the web and app development sector, helping hundreds
            of clients across diverse industries bring their ideas to life. Our
            mission is to meet the growing demand for exceptional web and mobile
            app development by building a reliable and skilled development team
            that collaborates with creative leaders to expand our perspective. We
            offer a wide range of expert solutions, including accounting software,
            management systems, and services tailored for churches, schools,
            universities, hotels, e-commerce sites, and web design. By
            delivering sincere and high-quality outputs, we have earned the
            trust of numerous clients and are committed to maintaining this trust
            through hard work and dedication.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-[90px] max-[1024px]:gap-[60px] max-[768px]:gap-[40px] max-[413px]:gap-[30px]">
          {/* Second Paragraph - Left Column */}
          <div className="md:w-2/3 text-gray-500 text-[16px] leading-[28px] max-[413px]:w-full text-justify">
            <p>
              Our team members are our greatest asset, and we continuously invest in
              their growth by providing a supportive and innovative work
              environment. With a focus on strategic planning that combines
              marketing, technology, and creativity, we aim to drive business
              growth and conversions while acting in the best interests of our
              clients.
            </p>
          </div>

          {/* Stats - Right Column */}
          <div className="md:w-1/3 w-full flex justify-center items-center text-center">
            <div className="min-w-[120px] text-center flex flex-col items-center">
              <h2 className="text-[76px] leading-[84px] font-normal max-[1024px]:text-[64px] max-[1024px]:leading-[72px] max-[768px]:text-[52px] max-[768px]:leading-[60px] max-[413px]:text-[46px] max-[413px]:leading-[52px] text-[#161C2D]">
                {rating.toFixed(1)}
              </h2>
              {/* ⭐ Precise 4.9 Fractional Star Rating */}
              <div className="flex items-center justify-center gap-1.5 my-2.5 max-[413px]:my-2">
                {[0, 1, 2, 3, 4].map((index) => {
                  const fillPercent = Math.max(0, Math.min(100, (rating - index) * 100));
                  const gradId = `stats-star-grad-${index}`;
                  return (
                    <svg
                      key={index}
                      className="w-5 h-5 max-[413px]:w-4 max-[413px]:h-4"
                      viewBox="0 0 24 24"
                    >
                      <defs>
                        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset={`${fillPercent}%`} stopColor="#FBBF24" />
                          <stop offset={`${fillPercent}%`} stopColor="#E5E7EB" />
                        </linearGradient>
                      </defs>
                      <path
                        fill={`url(#${gradId})`}
                        stroke="#F59E0B"
                        strokeWidth="0.5"
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      />
                    </svg>
                  );
                })}
              </div>
              <p className="text-gray-500 text-sm max-[413px]:text-[14px] max-[413px]:leading-[20px]">
                Customer Ratings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
