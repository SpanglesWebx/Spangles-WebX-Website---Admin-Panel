import React, { useState, useEffect } from "react";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import MissionVision from "./Components/MissionVision";
import Team from "./Components/Team";
import Support from "./Components/Support";
import Preloader from "../../Components/Preloader";

import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Synthetic loader for premium feel and consistency
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Slightly longer for smoother asset readiness
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "linear" }}
          className="min-h-screen"
        >
          <Hero />
          <Stats />
          <MissionVision />
          <Team />
          <Support />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
