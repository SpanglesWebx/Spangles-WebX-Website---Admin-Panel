import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import missionIcon from "../../../assets/Mission.png";
import visionIcon from "../../../assets/Vision.png";
import valuesIcon from "../../../assets/Values.png";

export default function MissionVision() {
  const missionCount = useCounter(2.5);
  const visionCount = useCounter(10000);
  const valuesCount = useCounter(85);

  function useCounter(end, duration = 2000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration]);

    return count;
  }

  return (
    <div className="bg-[#ffffff]">
      <div className="bg-[#e9eff2] 
                  mx-[clamp(16px,4vw,40px)] 
                  px-[clamp(20px,4vw,55px)] 
                  py-[clamp(40px,4vw,60px)] 
                  rounded-[20px] 
                  min-[1441px]:mx-[100px]
                  min-[1441px]:px-[100px]
                  min-[1441px]:py-[80px]
                  max-[768px]:mx-6 
                  max-[768px]:px-[30px] 
                  max-[768px]:py-[40px] 
                  max-[1024px]:px-[40px] 
                  max-[1024px]:mx-6 
                  max-[1024px]:py-[50px]
                  max-[413px]:mx-0 
                  max-[413px]:px-[16px] 
                  max-[413px]:py-[30px]
                  overflow-hidden">

        {/* Row 1 - Mission */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-[1fr_450px_1fr] items-start mb-[40px] 
                    min-[1441px]:grid-cols-[1fr_600px_1fr]
                    min-[1441px]:mb-[60px]
                    max-[1024px]:grid-cols-[1fr_350px_1fr] 
                    max-[1024px]:gap-[30px] 
                    max-[900px]:grid-cols-1 
                    max-[900px]:gap-[20px] 
                    max-[413px]:mb-[25px]"
        >
          {/* Text */}
          <div className="pr-[clamp(10px,3vw,80px)] max-[1024px]:pr-0">
            <h2 className="text-[28px] text-[#395563] font-semibold mb-5 max-[768px]:text-[24px] max-[413px]:text-[22px]">
              Our Mission
            </h2>
            <p className="text-[#6B6A66] text-[18px] leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[22px] text-justify">
            At Spangles Webx Pvt Ltd, our mission is to deliver innovative, reliable, and industry-standard technology solutions that help businesses grow and succeed. We are committed to excellence, creativity, and empowering our team to build cutting-edge digital solutions that exceed client expectations.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-start max-[1024px]:justify-start">
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
              className="rounded-[14px] w-full max-w-[450px] min-[1441px]:max-w-[600px] h-[290px] min-[1441px]:h-[380px] max-[768px]:h-[220px] object-cover"
              alt="Mission"
            />
          </div>

          {/* Stat Box */}
          <div className="pl-[clamp(10px,3vw,80px)] max-[1024px]:pl-0">
            <div className="w-[70px] h-[70px] rounded-[10px] flex items-center justify-center mb-3 bg-white shadow-sm">
              <img src={missionIcon} alt="Mission icon" className="w-[32px] h-[32px] object-contain" />
            </div>
            <p className="text-[#6B6A66] text-[18px] mb-5 leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[22px]">
              Our Growth, Compare to Last Financial Year
            </p>
            <h3 className="font-medium text-[54px] leading-[64px] text-[#182F27] max-[768px]:text-[40px] max-[768px]:leading-[48px] max-[413px]:text-[32px] max-[413px]:leading-[38px]">
              {missionCount.toFixed(1)}X
            </h3>
          </div>
        </motion.div>

        {/* Row 2 - Vision */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-[250px_450px_auto] items-start mb-[40px] 
                    min-[1441px]:grid-cols-[300px_600px_auto]
                    min-[1441px]:mb-[60px]
                    max-[1024px]:grid-cols-1 
                    max-[1024px]:gap-[30px] 
                    max-[900px]:gap-[20px] 
                    max-[413px]:mb-[25px]"
        >
          {/* Stat Box */}
          <div className="pr-[clamp(10px,3vw,80px)] max-[1024px]:pr-0 max-[1024px]:order-3">
            <div className="w-[70px] h-[70px] rounded-[10px] flex items-center justify-center mb-3 bg-white shadow-sm">
              <img src={visionIcon} alt="Vision icon" className="w-[32px] h-[32px] object-contain" />
            </div>
            <p className="text-[#6B6A66] text-[18px] mb-5 leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[22px]">
              Our Growth, Compare to Last Financial Year
            </p>
            <h3 className="font-medium text-[54px] leading-[64px] text-[#182F27] max-[768px]:text-[40px] max-[768px]:leading-[48px] max-[413px]:text-[32px] max-[413px]:leading-[38px]">
              {Math.floor(visionCount / 1000)}K
            </h3>
          </div>

          {/* Image */}
          <div className="flex justify-start max-[1024px]:order-2 max-[1024px]:justify-start">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              className="rounded-[14px] w-full max-w-[450px] min-[1441px]:max-w-[600px] h-[290px] min-[1441px]:h-[380px] max-[768px]:h-[220px] object-cover"
              alt="Vision"
            />
          </div>

          {/* Text */}
          <div className="pl-[clamp(10px,3vw,80px)] pr-[clamp(10px,3vw,100px)] max-[1024px]:pl-0 max-[1024px]:pr-0 max-[1024px]:order-1">
            <h2 className="text-[28px] text-[#395563] font-semibold mb-5 max-[768px]:text-[24px] max-[413px]:text-[22px]">
              Our Vision
            </h2>
            <p className="text-[#6B6A66] text-[18px] leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[22px] text-justify">
           At Spangles Webx Pvt Ltd, our vision is to become a leading technology company delivering innovative and high-quality digital solutions that drive business success. We aim to build a creative and future-ready environment where excellence, innovation, and customer satisfaction remain at the heart of everything we do.
            </p>
          </div>
        </motion.div>

        {/* Row 3 - Core Values */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-[1fr_450px_1fr] items-start 
                    min-[1441px]:grid-cols-[1fr_600px_1fr]
                    max-[1024px]:grid-cols-1 
                    gap-[clamp(20px,3vw,40px)]"
        >
          {/* Text */}
          <div className="pr-[clamp(10px,3vw,80px)] max-[1024px]:pr-0">
            <h2 className="text-[28px] text-[#395563] font-semibold mb-4 max-[768px]:text-[24px] max-[413px]:text-[22px]">
              Our Core Values
            </h2>
            <p className="text-[#6B6A66] text-[18px] leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[22px] text-justify">
          At Spangles Webx Pvt Ltd, we believe our success is driven by a talented team, strong collaboration, and continuous innovation. We create a supportive work environment that empowers professionals to grow, perform, and excel in the evolving technology industry.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-start max-[1024px]:justify-start">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="rounded-[14px] w-full max-w-[450px] min-[1441px]:max-w-[600px] h-[290px] min-[1441px]:h-[380px] max-[768px]:h-[220px] object-cover"
              alt="Values"
            />
          </div>

          {/* Stat Box */}
          <div className="pl-[clamp(10px,3vw,80px)] max-[1024px]:pl-0">
            <div className="w-[70px] h-[70px] rounded-[10px] flex items-center justify-center mb-3 bg-white shadow-sm">
              <img src={valuesIcon} alt="Values icon" className="w-[32px] h-[32px] object-contain" />
            </div>
            <p className="text-[#6B6A66] text-[18px] mb-5 leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[22px]">
              High Retention Reflects our Commitment to Success.
            </p>
            <h3 className="font-medium text-[54px] leading-[64px] text-[#182F27] max-[768px]:text-[40px] max-[768px]:leading-[48px] max-[413px]:text-[32px] max-[413px]:leading-[38px]">
              {Math.floor(valuesCount)}%
            </h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}