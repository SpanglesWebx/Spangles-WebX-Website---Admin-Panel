import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Components/Preloader";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About/About";
import Home from "./Pages/Landing/HomeApp";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import PortfolioDetails from "./Pages/Portfolio/PortfolioDetails";
import Career from "./Pages/Career/Career";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/Blog/BlogDetails";
import Gallery from "./Pages/Gallery/Gallery";
import ScrollToTop from "./Components/ScrollToTop";
import ServiceDetails from "./Pages/Services/ServiceDetails";
import Privacy from "./Pages/Privacy/Privacy";
import Terms from "./Pages/Terms/Terms";

function App() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader on initial mount and wait for all assets (net speed dependent)
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Clean up any leaked inline styles from other pages to keep the Home page environment fresh
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrolled / height) * 100;
      document.documentElement.style.setProperty('--scroll-percent', `${percentage}%`);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <div className="w-full max-w-[100vw]">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      <ScrollToTop />
      <Navbar />
      <main className=" pt-[97px] max-[413px]:pt-[85px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {pathname === "/" ? null : <Footer />}
    </div>
  );
}

export default App;
