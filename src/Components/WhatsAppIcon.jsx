import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "+917708784111"; 
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-10 right-10 z-[9999] flex items-center gap-3">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white px-4 py-2 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 hidden md:block"
          >
            <p className="text-[#25D366] font-semibold text-sm whitespace-nowrap">
              Chat with us on WhatsApp
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] cursor-pointer overflow-hidden relative group"
      >
        <FaWhatsapp size={32} />
        
        {/* Subtle pulse animation */}
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </motion.a>
    </div>
  );
};

export default WhatsAppIcon;
