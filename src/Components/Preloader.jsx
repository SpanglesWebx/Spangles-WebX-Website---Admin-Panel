import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Centered Favicon with "Running" Spinner */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="h-20 w-20 md:h-24 md:w-24 rounded-full border-2 border-[#345261]/10 border-t-[#345261] shadow-[0_0_20px_rgba(52,82,97,0.1)]"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-12 w-12 md:h-16 md:w-16 rounded-full overflow-hidden border-[3px] border-white shadow-2xl"
            >
              <img
                src="/Web.jpg"
                alt="Favicon"
                className="h-full w-full object-cover scale-110"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
