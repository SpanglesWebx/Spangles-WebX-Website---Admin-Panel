import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Components/Preloader";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import WhatsAppIcon from "./Components/WhatsAppIcon";
import ScrollToTop from "./Components/ScrollToTop";

// Eager load Home for lightning-fast first paint
import Home from "./Pages/Landing/HomeApp";

// Lazy load sub-routes for code splitting & instant initial website startup
const About = lazy(() => import("./Pages/About/About"));
const Services = lazy(() => import("./Pages/Services/Services"));
const ServiceDetails = lazy(() => import("./Pages/Services/ServiceDetails"));
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfolio"));
const PortfolioDetails = lazy(() => import("./Pages/Portfolio/PortfolioDetails"));
const Career = lazy(() => import("./Pages/Career/Career"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
const BlogDetails = lazy(() => import("./Pages/Blog/BlogDetails"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));
const Privacy = lazy(() => import("./Pages/Privacy/Privacy"));
const Terms = lazy(() => import("./Pages/Terms/Terms"));

function App() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dismiss preloader immediately on mount for instant render
    setLoading(false);
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const handleTrackClick = (e) => {
    const height = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    if (scrollHeight > height) {
      const targetScroll = (e.clientY / height) * (scrollHeight - height);
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-[100vw]">
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      <ScrollToTop />
      {/* Clickable Scroll Track */}
      <div 
        onClick={handleTrackClick}
        className="fixed top-0 right-0 w-[15px] h-full z-[100000] cursor-pointer"
        title="Scroll to position"
      />
      <Navbar />
      <WhatsAppIcon />
      <main className=" pt-[97px] max-[413px]:pt-[85px]">
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/service-details" element={<ServiceDetails />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio-details" element={<PortfolioDetails />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      {pathname === "/" ? null : <Footer />}
    </div>
  );
}

export default App;
