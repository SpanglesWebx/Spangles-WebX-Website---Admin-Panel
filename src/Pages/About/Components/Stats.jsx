import { useEffect, useState } from "react";

export default function Stats() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    let y = 0;
    let p = 0;
    let r = 0;

    const interval = setInterval(() => {
      if (y < 8) {
        y++;
        setYears(y);
      }

      if (p < 4000) {
        p += 80; // Adjusted for 16ms interval
        if (p > 4000) p = 4000;
        setProjects(p);
      }

      if (r < 4.9) {
        r += 0.05; // Adjusted for 16ms interval
        if (r > 4.9) r = 4.9;
        setRating(parseFloat(r.toFixed(1)));
      }
    }, 16); // 60fps for smoother animation

    setTimeout(() => clearInterval(interval), 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#ffffff] pt-[70px] pb-[90px] px-[130px] max-[1024px]:px-[60px] max-[768px]:px-[24px] max-[480px]:px-4 max-[413px]:pt-[40px] max-[413px]:pb-[50px]">
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

        <div className="flex flex-col md:flex-row items-start justify-between gap-[90px] max-[1024px]:gap-[60px] max-[768px]:gap-[40px] max-[413px]:gap-[20px]">
          {/* Second Paragraph - Left Column */}
          <div className="md:w-1/2 text-gray-500 text-[16px] leading-[28px] max-[413px]:w-full text-justify">
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
          <div className="flex gap-[90px] text-center max-[1024px]:gap-[60px] max-[768px]:gap-[40px] max-[480px]:gap-[25px] max-[413px]:flex-col max-[413px]:gap-[28px] max-[413px]:items-start max-[413px]:justify-start max-[413px]:text-left">
            <div className="min-w-[120px] max-[413px]:min-w-0">
              <h2 className="text-[54px] leading-[64px] font-normal max-[768px]:text-[40px] max-[768px]:leading-[48px] max-[413px]:text-[44px] max-[413px]:leading-[50px]">
                {years}
                <span className="text-[54px] font-light ml-1 max-[768px]:text-[40px] max-[768px]:leading-[48px] max-[413px]:text-[44px] max-[413px]:leading-[50px]">
                  +
                </span>
              </h2>
              <p className="text-gray-500 text-sm max-[413px]:text-[14px] max-[413px]:leading-[20px]">Years of Experience</p>
            </div>

            <div className="min-w-[120px] max-[413px]:min-w-0">
              <h2 className="text-[54px] leading-[64px] font-normal max-[768px]:text-[40px] max-[768px]:leading-[48px] max-[413px]:text-[44px] max-[413px]:leading-[50px]">
                4K
                <span className="sr-only">{projects}</span>
              </h2>
              <p className="text-gray-500 text-sm max-[413px]:text-[14px] max-[413px]:leading-[20px]">Project Completed</p>
            </div>

            <div className="min-w-[120px] max-[413px]:min-w-0">
              <h2 className="text-[54px] leading-[64px] font-normal max-[768px]:text-[40px] max-[768px]:leading-[48px] max-[413px]:text-[44px] max-[413px]:leading-[50px]">
                {rating}
              </h2>
              <p className="text-gray-500 text-sm max-[413px]:text-[14px] max-[413px]:leading-[20px]">Customer Ratings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
