import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
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
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Clean up any leaked inline styles from other pages to keep the Home page environment fresh
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }, [pathname]);

  return (
    <div className="w-full max-w-[100vw]">
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {pathname === "/" ? null : <Footer />}
    </div>
  );
}

export default App;
