import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Trigger "notification" effect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "+917708784111";
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-10 right-4 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {(isHovered || showNotification) && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-3 bg-[#25D366] text-white px-4 py-2 rounded-xl shadow-2xl relative cursor-pointer"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            <p className="font-bold text-xs whitespace-nowrap">
              Hi! How can we help you?
            </p>
            {/* Triangle Pointer */}
            <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-[#25D366] rotate-45 -z-10" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => {
          setIsHovered(true);
          setShowNotification(false); // Clear notification on hover
        }}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1, y: 0 }}
        whileTap={{ scale: 0.9 }}
        className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_25px_rgba(37,211,102,0.5)] cursor-pointer relative group"
      >
        <FaWhatsapp size={24} />

        {/* Notification Badge */}
        {showNotification && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-md z-10"
          >
            1
          </motion.span>
        )}

        {/* Continuous Wave/Pulse Effects */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 -z-10"></span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10 [animation-delay:1s]"></span>
        
        {/* Hover Glow */}
        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </motion.a>
    </div>
  );
};

export default WhatsAppIcon;
