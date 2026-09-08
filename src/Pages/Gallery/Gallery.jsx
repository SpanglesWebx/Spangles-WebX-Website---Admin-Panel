import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Support from "../About/Components/Support";
import bannerImg from "../../assets/portfolio-banner.jpg";

const API_BASE_URL = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [galleryItems, setGalleryItems] = useState([]);
  const [filters, setFilters] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const sidebarRef = useRef(null);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  // Seamless Circular Auto-Scroll for Sidebar
  useEffect(() => {
    let animationFrameId;
    const scrollSpeed = 0.35;

    const scroll = () => {
      if (selectedItem && sidebarRef.current && !isSidebarHovered) {
        const container = sidebarRef.current;
        container.scrollTop += scrollSpeed;

        if (container.scrollTop >= container.scrollHeight / 2) {
          container.scrollTop = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedItem, isSidebarHovered]);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    const fetchGalleries = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/gallery`, { signal: controller.signal });
        if (!response.ok) throw new Error("Failed to fetch gallery");
        const data = await response.json();

        // Extract unique categories for filters
        const uniqueCategories = [...new Set(data.map((g) => g.category).filter(Boolean))];
        setFilters(["All", ...uniqueCategories]);

        // Flatten all items from all galleries
        const items = data.flatMap((gallery) =>
          (gallery.items || []).map((item, idx) => ({
            id: item._id || `${gallery._id}-${idx}`,
            title: gallery.title || "Untitled",
            category: gallery.category || gallery.title || "Gallery",
            image: `${API_BASE_URL}/api/gallery/view/${item.url.split("/").pop()}`,
            type: item.type,
          })),
        );

        setGalleryItems(items);
      } catch (error) {
        console.warn("Gallery data unavailable or offline:", error.message);
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    };

    fetchGalleries();

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  // ✅ ENHANCED SECURITY: Disable Inspect, F12, and View Source
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (
  //       e.key === "F12" ||
  //       (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
  //       (e.ctrlKey && e.key.toLowerCase() === "u")
  //     ) {
  //       e.preventDefault();
  //       return false;
  //     }
  //   };

  //   const handleContextMenu = (e) => e.preventDefault();

  //   window.addEventListener("keydown", handleKeyDown);
  //   window.addEventListener("contextmenu", handleContextMenu);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //     window.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  const visibleItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [selectedItem]);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setIsZoomed(false);
  };

  const handleClose = () => {
    setSelectedItem(null);
    setIsZoomed(false);
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="select-none">
      {" "}
      {/* ✅ Prevent selection */}
      <section className="relative isolate overflow-hidden animate-fade-in bg-[#f5f1e8]">
        <div className="absolute inset-0">
          <img
            src={bannerImg}
            alt="gallery banner"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,19,25,0.88),rgba(12,19,25,0.52),rgba(107,74,46,0.35))]" />
        </div>

        <div className="absolute left-[-8%] top-[14%] h-[240px] w-[240px] rounded-full bg-[#d8a56a]/30 blur-3xl" />
        <div className="absolute bottom-[-60px] right-[8%] h-[220px] w-[220px] rounded-full bg-[#f4d6ae]/20 blur-3xl" />

        <div
          className="relative px-[100px] pb-[40px] pt-[80px] text-white max-[1400px]:px-[50px]
          max-[1024px]:px-10 max-[1024px]:pt-[60px]
          max-[768px]:px-6 max-[768px]:pb-10 max-[768px]:pt-[50px]
          max-[413px]:px-4 max-[413px]:pb-8 max-[413px]:pt-[40px]"
        >
          {/* Header content remains same */}
          <p className="font-[Montserrat] text-[13px] font-semibold uppercase tracking-[2.6px] text-white/75">
            Home / Festivals
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <img src="/Web.jpg" className="h-4 w-4 rounded-full object-cover animate-pulse" alt="icon" />
                <span className="font-[Montserrat] text-[11px] font-semibold uppercase tracking-[2px] text-white/85">
                  Festival Highlights
                </span>
              </div>
              <h1 className="mt-6 max-w-[760px] font-[Montserrat] text-[64px] font-semibold leading-[68px] max-[1030px]:text-[52px] max-[1030px]:leading-[58px] max-[768px]:text-[42px] max-[768px]:leading-[48px] max-[413px]:text-[30px] max-[413px]:leading-[36px]">
                Vibrant festivals, cultural celebrations, joyful traditions.
              </h1>
            </div>
            <div className="rounded-[28px] border border-white/14 bg-white/8 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="font-[Montserrat] text-[11px] font-semibold uppercase tracking-[2px] text-white/65">
                  Celebrated
                </span>
                <span className="font-[Montserrat] text-[32px] font-semibold leading-none text-white max-[1030px]:text-[28px] max-[413px]:text-[24px]">
                  {visibleItems.length.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="mt-4 h-[1px] bg-white/12" />
              <p className="mt-4 font-[Montserrat] text-[14px] text-white/70 max-[1030px]:text-[13px] max-[413px]:text-[12px]">
                Capturing moments. Showcasing cultural celebrations, festive events, and company traditions for community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Filter and Grid Section */}
      <section className="px-[100px] pt-[40px] pb-[100px] border-b-[0.8px] border-[#E5E5E5] bg-[#F4F7FA]
        max-[1400px]:px-[50px]
        max-[1200px]:px-10
        max-[768px]:px-6
        max-[413px]:px-5 max-[413px]:pt-12 max-[413px]:pb-20">
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[620px]">
            <p className="font-[Montserrat] text-[13px] font-semibold uppercase tracking-[2.4px] text-[#7a6550]">
              Cultural Moments
            </p>
            <h2 className="mt-3 font-[Montserrat] text-[42px] font-semibold text-[#345261] max-[1030px]:text-[36px] max-[1030px]:leading-[40px] max-[768px]:text-[32px] max-[768px]:leading-[36px] max-[413px]:text-[28px] max-[413px]:leading-[32px]">
              Festive designs. Celebrating company cultural events and traditions.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-3 font-[Montserrat] text-[12px] font-semibold uppercase tracking-[1.7px] transition-all duration-300 cursor-pointer max-[1030px]:px-4 max-[1030px]:py-2.5 max-[1030px]:text-[11px] max-[413px]:text-[10px] ${
                  activeFilter === filter
                    ? "bg-[#345261] text-white shadow-lg"
                    : "bg-white text-[#314650] hover:bg-[#2a3d45] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div id="gallery-grid" className="relative mt-12 grid auto-rows-[220px] gap-5 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`animate-pulse rounded-[28px] bg-slate-200/80 ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2 h-[460px] lg:h-[500px]" : "h-[220px] lg:h-[240px]"
                }`}
              />
            ))
          ) : visibleItems.length > 0 ? (
            visibleItems.map((item, index) => {
              const itemSize = index === 0 ? "lg:col-span-2 lg:row-span-2" : "";
              return (
                <article
                  key={item.id}
                  onClick={() => handleOpen(item)}
                  className={`group relative overflow-hidden rounded-[28px] bg-[#15242d] transition-all duration-500 hover:-translate-y-2 cursor-pointer ${itemSize}`}
                >
                  {/* ✅ PROTECTIVE OVERLAY: Prevents direct interaction with the media */}
                  {/* <div className="absolute inset-0 z-20 cursor-default" onContextMenu={(e) => e.preventDefault()} /> */}

                  <div className="absolute inset-0 z-0">
                    {item.type === "video" ? (
                      <video
                        src={item.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08] pointer-events-none"
                      />
                    ) : (
                      <div className="relative h-full w-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          // draggable="false" // ✅ Prevent dragging
                          className="h-full w-full object-cover pointer-events-none select-none"
                        />
                        {/* ✅ WATERMARK OVERLAY */}
                        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 select-none">
                            <span className="text-white text-4xl font-bold rotate-[-45deg] whitespace-nowrap">WEBX SPANGLES</span>
                        </div> */}
                      </div>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,20,0.08),rgba(10,16,20,0.18),rgba(10,16,20,0.78))] z-1" />

                  <div className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-[#15242d]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white z-30">
                    <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-3 py-1 font-[Montserrat] text-[10px] font-semibold uppercase tracking-[1.8px] backdrop-blur-md">
                      {item.category}
                    </span>
                    <h3
                      className={`mt-3 font-[Montserrat] font-semibold leading-tight tracking-[-0.8px] text-white ${itemSize ? "text-[28px] max-[1030px]:text-[24px] max-[413px]:text-[22px]" : "text-[22px] max-[1030px]:text-[18px] max-[413px]:text-[16px]"}`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="col-span-full flex h-[200px] flex-col items-center justify-center text-[#15242d]/60">
              <p className="font-[Montserrat] text-[16px]">No festivals found.</p>
            </div>
          )}
        </div>
      </section>

        <div className="-mt-[40px] relative z-10">
          <Support />
        </div>

      {/* CINEMATIC VIEWER MODAL - PORTALED TO BODY TO FIX CENTERING */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#05080a]/90 backdrop-blur-xl p-4 lg:p-10 pointer-events-auto"
              onClick={handleClose}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative flex h-[85vh] max-[768px]:h-[80vh] max-[413px]:h-[90vh] w-full max-w-[900px] max-[1201px]:max-w-[80vw] max-[1030px]:max-w-[95vw] max-[413px]:flex-col overflow-hidden rounded-[40px] max-[1030px]:rounded-[32px] max-[768px]:rounded-[24px] border border-white/10 bg-[#0c1217] shadow-[0_45px_150px_rgba(0,0,0,0.9)]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Immersive Blurred Backdrop (Inside Modal) */}
                <motion.div
                  key={selectedItem.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.25 }}
                  className="absolute inset-0 z-0 bg-cover bg-center blur-[100px] scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${selectedItem.image})` }}
                />

                {/* MAIN VIEWING AREA */}
                <div className="relative flex flex-1 flex-col items-center justify-center p-6 lg:p-8 max-[768px]:p-4 max-[413px]:p-0 overflow-hidden">
                  {/* Close Button (Mobile Only) */}
                  <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 max-[768px]:top-4 max-[768px]:right-4 z-50 lg:hidden max-[413px]:hidden flex h-12 w-12 max-[768px]:h-10 max-[768px]:w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl"
                  >
                    <X className="max-[768px]:w-5 max-[768px]:h-5" size={24} />
                  </button>

                  {/* Media Container */}
                  <motion.div
                    key={selectedItem.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`relative z-10 flex flex-col h-full w-full items-center justify-center transition-all duration-700 group/shadow ${isZoomed ? "scale-110 cursor-zoom-out" : "scale-100 cursor-zoom-in"}`}
                    onClick={toggleZoom}
                  >
                    <div className="relative max-h-full w-fit max-[1201px]:w-full max-[1201px]:h-full max-[1201px]:flex max-[1201px]:justify-center overflow-hidden rounded-2xl max-[768px]:rounded-xl max-[413px]:rounded-none max-[413px]:border-none shadow-2xl">
                      {selectedItem.type === "video" ? (
                        <video
                          src={selectedItem.image}
                          autoPlay
                          loop
                          controls
                          className="max-h-[75vh] max-[768px]:max-h-[65vh] w-auto max-[1201px]:w-full max-[1201px]:h-full max-[1201px]:object-cover transition-transform"
                          onClick={(e) => e.stopPropagation()}
                        />
                      ) : (
                        <img
                          src={selectedItem.image}
                          alt={selectedItem.title}
                          className="max-h-[75vh] max-[768px]:max-h-[65vh] w-auto max-[1201px]:w-full max-[1201px]:h-full max-[1201px]:object-cover select-none scale-[1.02]"
                          draggable="false"
                        />
                      )}
                    </div>

                    {/* Zoom Instruction Text Below Image */}
                    <div className="mt-3 opacity-0 group-hover/shadow:opacity-100 transition-all duration-500 pointer-events-none">
                      <p className="text-white/30 text-[10px] font-[Montserrat] tracking-wider uppercase flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#f3c98f] animate-pulse" />
                        Click Festival Media to Zoom
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* PREMIUM SIDEBAR (Desktop) */}
                <div className="hidden lg:flex max-[413px]:flex w-[280px] max-[413px]:w-full max-[413px]:h-[55%] flex-col bg-black/40 border-l max-[413px]:border-l-0 max-[413px]:border-t border-white/10 backdrop-blur-[60px] relative z-20 overflow-hidden">
                  <div className="p-8 max-[413px]:p-4 flex flex-col h-full overflow-hidden">
                    {/* Meta Header */}
                    <div className="flex justify-between items-start mb-12 max-[413px]:mb-3">
                      <div className="max-w-[80%]">
                        <span className="inline-block text-[10px] max-[413px]:text-[8px] font-bold uppercase tracking-[4px] max-[413px]:tracking-[2px] text-white/40 mb-4 max-[413px]:mb-2 px-2 py-0.5 border border-white/10 rounded-sm">
                          {selectedItem.category}
                        </span>
                        <h2 className="text-3xl max-[413px]:text-xl font-semibold text-white tracking-tight leading-tight font-[Montserrat]">
                          {selectedItem.title}
                        </h2>
                      </div>
                      <button
                        onClick={handleClose}
                        className="flex h-11 w-11 max-[413px]:h-8 max-[413px]:w-8 items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all duration-500 hover:rotate-90"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    {/* Related Grid - SEAMLESS CIRCULAR AUTO SCROLLING CONTAINER */}
                    <div 
                      ref={sidebarRef}
                      onMouseEnter={() => setIsSidebarHovered(true)}
                      onMouseLeave={() => setIsSidebarHovered(false)}
                      className="flex-1 space-y-8 no-scrollbar overflow-y-auto pr-1 select-none"
                    >
                      <div className="pb-10 max-[413px]:pb-2 pt-4 max-[413px]:pt-1">
                        <div className="flex items-center justify-between mb-5 max-[413px]:mb-2">
                          <h3 className="text-[10px] max-[413px]:text-[8px] font-bold uppercase tracking-[2px] text-white/60">
                            Festival Collection
                          </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pb-4">
                          {galleryItems
                            .filter((item) => item.category === selectedItem.category)
                            .map((item, idx) => (
                              <motion.div
                                key={`${item.id}-${idx}`}
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                  setSelectedItem(item);
                                  setIsZoomed(false);
                                }}
                                className={`aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                                  selectedItem.id === item.id
                                    ? "border-[#f3c98f] ring-2 ring-[#f3c98f]/20"
                                    : "border-white/5 hover:border-white/20"
                                }`}
                              >
                                <img
                                  src={item.image}
                                  className={`w-full h-full object-cover transition-all duration-500 pointer-events-none ${
                                    selectedItem.id === item.id ? "opacity-100 scale-110" : "opacity-40 hover:opacity-100"
                                  }`}
                                  alt={item.title}
                                />
                              </motion.div>
                            ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 pt-10 max-[413px]:mt-2 max-[413px]:pt-2 max-[413px]:hidden border-t border-white/10">
                      <div className="flex items-center justify-center text-white/30 text-[10px] font-[Montserrat] tracking-wider uppercase">
                        <p>© SPANGLES 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
