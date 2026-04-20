import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "../assets/Webx-nav-Logo_03.jpg"; // Make sure to have this image in your assets folder
import sideLogo from "../assets/side-logo.png";


import { services } from "../Pages/Services/Services";

const LINKS = [
  { to: "/", label: "HOME", end: true },
  { to: "/about", label: "ABOUT US" },
  {
    to: "/services",
    label: "SERVICES",
    hasDropdown: true,
    dropdown: services.map((s) => ({
      to: "/service-details",
      state: { ...s, gallery: [s.image] },
      label: s.title,
    })),
  },
  { to: "/portfolio", label: "PORTFOLIO" },
  { to: "/gallery", label: "GALLERY" },
  { to: "/blog", label: "BLOG" },
  { to: "/career", label: "CAREER" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviceOpenMobile, setServiceOpenMobile] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isLandingPage = location.pathname === "/";

  const { scrollY } = useScroll();

  // Dynamic gradient opacity based on scroll (reduced duration)
  const navBgOpacity = useTransform(scrollY, [0, 300], [0, 0.85]);
  const navGlassBlur = useTransform(scrollY, [0, 300], [0, 40]);
  const navShadowOpacity = useTransform(scrollY, [0, 300], [0, 0.4]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const linkBase =
    `relative inline-flex items-center gap-1 whitespace-nowrap text-[12px] font-bold tracking-[0.08em] pb-7 min-[1025px]:max-[1025px]:text-[11px] min-[1025px]:max-[1025px]:tracking-[0.05em] min-[1025px]:max-[1025px]:pb-6 transition-colors duration-[1000ms] ease-in-out ${isScrolled ? "text-white hover:text-gray-200" : "text-[#212529D4] hover:text-[#212529]"}`;

  const navLinkClass = useMemo(
    () =>
      ({ isActive, to }) => {
        const isPortfolioActive =
          to === "/portfolio" && location.pathname.startsWith("/portfolio");

        const isServiceActive =
          to === "/services" && location.pathname.startsWith("/service");

        const trulyActive = isActive || isPortfolioActive || isServiceActive;

        return [
          linkBase,
          `after:absolute after:left-1/2 after:bottom-0 after:h-[4px] after:transition-all after:duration-[1000ms] after:ease-in-out after:-translate-x-1/2 ${isScrolled ? "after:bg-white" : "after:bg-[#345261]"}`,
          trulyActive ? "after:w-full" : "after:w-0",
        ].join(" ");
      },
    [linkBase, location.pathname, isScrolled],
  );

  return (
    <header
      className="fixed top-0 left-0 w-full z-[1000]"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(to bottom, rgba(52, 82, 97, 1), rgba(22, 28, 45, 1))`,
          opacity: navBgOpacity,
          backdropFilter: useTransform(navGlassBlur, b => `blur(${b}px)`),
          boxShadow: useTransform(navShadowOpacity, s => `0 40px 120px rgba(0,0,0,0.4)`)
        }}
      />

      {/* Background for non-landing pages when not scrolled (fallback to pure white if desired) */}
      {!isLandingPage && !isScrolled && (
        <div className="absolute inset-0 z-[-1] bg-white transition-opacity duration-1000" />
      )}
      {/* Navbar Content */}
      <div className={`relative z-10 w-full border-b transition-colors duration-1000 ${isScrolled ? "border-white/10" : "border-[#ebebeb]"}`}>
        <div className="max-w-[1440px] px-[25px] h-[70px] grid grid-cols-[1fr_2fr_1fr] items-end min-[1025px]:max-[1025px]:grid-cols-[180px_1fr_180px] min-[1025px]:max-[1025px]:px-[20px] max-[1025px]:h-[60px] max-[1025px]:grid-cols-[1fr_auto] max-[1025px]:items-end max-[1025px]:px-[20px] max-[413px]:h-[56px] max-[413px]:grid-cols-[1fr_auto] max-[413px]:items-end max-[413px]:px-[16px]">
          {/* Logo */}
          <NavLink
            to="/"
            className="leading-none mb-3 flex items-center justify-self-start min-[1025px]:max-[1025px]:mb-3 max-[1025px]:mb-0"
          >
            <img
              src={isScrolled ? sideLogo : logo}
              alt="WebX Logo"
              className="h-[40px] w-[140px] object-contain transition-all duration-[1000ms] min-[1025px]:max-[1025px]:w-[140px] max-[1025px]:w-[140px] max-[413px]:w-[120px]"
            />
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden min-[1026px]:flex items-end justify-center gap-[30px] justify-self-center">
            {LINKS.map((l) => (
              <li key={l.to} className={l.hasDropdown ? "group relative" : ""}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    navLinkClass({ isActive, to: l.to })
                  }
                >
                  {l.label}
                  {l.hasDropdown ? <ChevronDown className="h-5 w-5 text-bold transition-transform duration-300 group-hover:rotate-180" /> : null}
                </NavLink>

                {l.hasDropdown && l.dropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-[240px] bg-white shadow-lg border border-gray-100 rounded-md py-4 z-50">
                    <ul className="flex flex-col gap-2">
                      {l.dropdown.map((sub) => (
                        <li key={sub.label}>
                          <NavLink
                            to={sub.to}
                            state={sub.state}
                            className="block px-6 py-2 text-[13px] font-medium text-[#212529D4] hover:text-[#345261] hover:bg-gray-50 transition-colors"
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <NavLink
            to="/contact"
            className={`hidden min-[1026px]:inline-flex items-center mb-4 justify-center gap-3 rounded-[8px] px-[20px] py-[12px] text-[11px] leading-[18px] font-bold uppercase font-montserrat justify-self-end transition-colors duration-[1000ms] ease-in-out ${isScrolled ? "text-white" : "bg-[#345261] text-white"}`}
          >
            CONTACT US
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-colors duration-[1000ms] ease-in-out">
              <path
                d="M2 7H11M11 7L7 3M11 7L7 11"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>

          {/* Mobile toggle */}
          <button
            className={`hidden max-[1025px]:inline-flex items-center justify-center p-2 transition-colors duration-[1000ms] ease-in-out ${isScrolled ? "text-white" : "text-[#212529D4]"}`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* 25px space */}
      <div className="h-[17px] max-[413px]:h-[13px]"></div>

      {/* Mobile menu Drawer */}
      {open && (
        <div className="fixed inset-0 z-[2000] flex justify-end min-[1026px]:hidden">
          {/* Backdrop overlay */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)}></div>

          <div className="relative w-[320px] max-[413px]:w-[80%] bg-white h-full overflow-y-auto shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col pt-6 pb-12 transition-transform duration-300">
            {/* Close button inside drawer */}
            <div className="flex justify-end px-6 mb-6">
              <button onClick={() => setOpen(false)} className="text-[#345261]">
                <X className="h-7 w-7 stroke-[1.5]" />
              </button>
            </div>

            <div className="px-[40px] flex-1 flex flex-col">
              <ul className="flex flex-col gap-5">
                {LINKS.map((l) => (
                  <li key={l.to} className={l.hasDropdown ? "group" : ""}>
                    <div className="flex items-center w-full">
                      <NavLink
                        to={l.to}
                        end={l.end}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          [
                            "inline-flex items-center gap-1 whitespace-nowrap text-[11px] font-bold tracking-[0.08em] text-[#212529D4] py-2",
                            isActive ? "text-[#212529]" : "",
                          ].join(" ")
                        }
                      >
                        {l.label}
                      </NavLink>
                      {l.hasDropdown && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setServiceOpenMobile(!serviceOpenMobile);
                          }}
                          className="p-2 ml-1 text-[#212529D4]"
                          aria-label="Toggle dropdown"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${serviceOpenMobile ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                      )}
                    </div>

                    {l.hasDropdown && l.dropdown && (
                      <ul
                        className={`flex-col gap-4 pl-4 pt-2 ${serviceOpenMobile ? "flex" : "hidden"
                          }`}
                      >
                        {l.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <NavLink
                              to={sub.to}
                              state={sub.state}
                              onClick={() => setOpen(false)}
                              className="inline-flex items-center text-[13px] text-[#6b6b6b] hover:text-[#212529]"
                            >
                              {sub.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-16">
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#345261] px-[18px] py-[12px] text-[11px] font-bold tracking-[0.08em] text-white"
                >
                  CONTACT US <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 max-[413px]:w-[12px] max-[413px]:h-[12px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 5l7 7-7 7"
                    />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

