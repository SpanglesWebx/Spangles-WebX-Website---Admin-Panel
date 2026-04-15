// import { useState, useEffect } from "react";
// import { ArrowUpRight, Sparkles } from "lucide-react";
// import Support from "../About/Components/Support";
// import bannerImg from "../../assets/portfolio-banner.jpg";

// const API_BASE_URL = "http://localhost:5000";

// export default function Gallery() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [galleryItems, setGalleryItems] = useState([]);
//   const [filters, setFilters] = useState(["All"]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchGalleries = async () => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/api/gallery`);
//         const data = await response.json();

//         // Dynamically create filters from gallery titles
//         const titles = data.map((g) => g.title).filter(Boolean);
//         setFilters(["All", ...new Set(titles)]);

//         // Flatten all items from all galleries
//         const items = data.flatMap((gallery) =>
//           (gallery.items || []).map((item, idx) => ({
//             id: item._id || `${gallery._id}-${idx}`,
//             title: item.name || gallery.title || "Untiled",
//             category: gallery.title || "Other",
//             image: `${API_BASE_URL}${item.url}`,
//             type: item.type, // image or video
//           })),
//         );

//         setGalleryItems(items);
//       } catch (error) {
//         console.error("Failed to fetch galleries:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGalleries();
//   }, []);

//   useEffect(() => {
//   const handleKeyDown = (e) => {
//     if (
//       e.key === "F12" ||
//       (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
//       (e.ctrlKey && e.key === "U")
//     ) {
//       e.preventDefault();
//     }
//   };

//   window.addEventListener("keydown", handleKeyDown);
//   return () => window.removeEventListener("keydown", handleKeyDown);
// }, []);

//   const visibleItems =
//     activeFilter === "All"
//       ? galleryItems
//       : galleryItems.filter((item) => item.category === activeFilter);

//   return (
//     <div className="bg-[#f5f1e8]">
//       <section className="relative isolate overflow-hidden animate-fade-in">
//         <div className="absolute inset-0">
//           <img
//             src={bannerImg}
//             alt="gallery banner"
//             className="h-full w-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,19,25,0.88),rgba(12,19,25,0.52),rgba(107,74,46,0.35))]" />
//         </div>

//         <div className="absolute left-[-8%] top-[14%] h-[240px] w-[240px] rounded-full bg-[#d8a56a]/30 blur-3xl" />
//         <div className="absolute bottom-[-60px] right-[8%] h-[220px] w-[220px] rounded-full bg-[#f4d6ae]/20 blur-3xl" />

//         <div
//           className="relative px-[100px] pb-[72px] pt-[120px] text-white max-[1400px]:px-[50px]
//           max-[1024px]:px-10 max-[1024px]:pt-[100px]
//           max-[768px]:px-6 max-[768px]:pb-16 max-[768px]:pt-[88px]
//           max-[413px]:px-4 max-[413px]:pb-12 max-[413px]:pt-[76px]"
//         >
//           <p className="font-[Montserrat] text-[13px] font-semibold uppercase tracking-[2.6px] text-white/75 max-[413px]:text-[11px]">
//             Home / Gallery
//           </p>

//           <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
//             <div className="max-w-[720px]">
//               <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
//                 <Sparkles className="h-4 w-4 text-[#f3c98f]" />
//                 <span className="font-[Montserrat] text-[11px] font-semibold uppercase tracking-[2px] text-white/85">
//                   New Gallery Mood
//                 </span>
//               </div>

//               <h1
//                 className="mt-6 max-w-[760px] font-[Montserrat] text-[64px] font-semibold leading-[68px] tracking-[-2.5px]
//                 max-[1024px]:text-[52px] max-[1024px]:leading-[58px]
//                 max-[768px]:text-[42px] max-[768px]:leading-[48px]
//                 max-[413px]:text-[30px] max-[413px]:leading-[36px]"
//               >
//                 Clean visuals, sharper motion, no clutter.
//               </h1>
//             </div>

//             <div className="rounded-[28px] border border-white/14 bg-white/8 p-5 backdrop-blur-xl">
//               <div className="flex items-center justify-between">
//                 <span className="font-[Montserrat] text-[11px] font-semibold uppercase tracking-[2px] text-white/65">
//                   Selected
//                 </span>
//                 <span className="font-[Montserrat] text-[32px] font-semibold leading-none text-white">
//                   {visibleItems.length.toString().padStart(2, "0")}
//                 </span>
//               </div>
//               <div className="mt-4 h-[1px] bg-white/12" />
//               <p className="mt-4 font-[Montserrat] text-[14px] leading-[22px] text-white/70">
//                 Minimal copy. More focus on layout, image depth, and movement.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         className="relative overflow-hidden px-[100px] py-[70px] max-[1400px]:px-[50px]
//         max-[1024px]:px-10 max-[768px]:px-6 max-[768px]:py-[56px]
//         max-[413px]:px-4 max-[413px]:py-[42px] animate-fade-in"
//       >
//         <div className="absolute left-[4%] top-10 h-28 w-28 rounded-full border border-[#1b2d38]/10" />
//         <div className="absolute right-[6%] top-24 h-20 w-20 rounded-full bg-[#d9c4a3]/35 blur-2xl" />

//         <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
//           <div className="max-w-[620px]">
//             <p className="font-[Montserrat] text-[13px] font-semibold uppercase tracking-[2.4px] text-[#7a6550] max-[413px]:text-[11px]">
//               Curated Frames
//             </p>
//             <h2
//               className="mt-3 font-[Montserrat] text-[42px] font-semibold leading-[46px] tracking-[-1.8px] text-[#14222b]
//               max-[1024px]:text-[36px] max-[1024px]:leading-[40px]
//               max-[413px]:text-[28px] max-[413px]:leading-[32px]"
//             >
//               Simple layout. Premium feel.
//             </h2>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 type="button"
//                 onClick={() => setActiveFilter(filter)}
//                 className={`rounded-full px-5 py-3 font-[Montserrat] text-[12px] font-semibold uppercase tracking-[1.7px] transition-all duration-300 max-[413px]:px-4 max-[413px]:py-2.5 ${
//                   activeFilter === filter
//                     ? "bg-[#15242d] text-white shadow-[0_18px_40px_rgba(21,36,45,0.18)]"
//                     : "bg-white text-[#314650] shadow-[0_10px_30px_rgba(20,34,43,0.08)] hover:-translate-y-1 hover:bg-[#efe5d5]"
//                 }`}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="relative mt-12 grid auto-rows-[220px] gap-5 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]">
//           {loading ? (
//             <div className="col-span-full flex h-[400px] items-center justify-center">
//               <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#15242d] border-t-transparent" />
//             </div>
//           ) : visibleItems.length > 0 ? (
//             visibleItems.map((item, index) => {
//               // Apply sizes cyclically on visible items to maintain the original layout pattern
//               const itemSize = index === 0 ? "lg:col-span-2 lg:row-span-2" : "";

//               return (
//                 <article
//                   key={item.id}
//                   className={`group relative overflow-hidden rounded-[28px] bg-[#15242d] animate-fade-in transition-all duration-500 hover:-translate-y-2 ${itemSize}`}
//                   style={{ animationDelay: `${index * 80}ms` }}
//                 >
//                   <div className="absolute inset-0">
//                     {item.type === "video" ? (
//                       <video
//                         src={item.image}
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                         className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
//                       />
//                     ) : (
//                       <div className="relative">
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           draggable="false"
//                           onContextMenu={(e) => e.preventDefault()}
//                           className="h-full w-full object-cover pointer-events-none"
//                         />

//                         {/* WATERMARK */}
//                         <div className="absolute inset-0 flex items-center justify-center text-white text-lg opacity-20 font-bold pointer-events-none">
//                           YourBrand
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,20,0.08),rgba(10,16,20,0.18),rgba(10,16,20,0.78))]" />
//                   <div className="absolute inset-x-[-30%] top-[-45%] h-[170px] rotate-[18deg] bg-white/18 opacity-0 blur-3xl transition-all duration-700 group-hover:translate-x-[42%] group-hover:opacity-100" />
//                   <div className="absolute left-5 top-5 h-16 w-16 rounded-full bg-[#f2d5ae]/25 blur-2xl transition-all duration-500 group-hover:scale-150" />

//                   <div className="absolute inset-0 rounded-[28px] border border-white/12 transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_28px_70px_rgba(21,36,45,0.28)]" />

//                   <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-0 group-hover:bg-white group-hover:text-[#15242d]">
//                     <ArrowUpRight className="h-4 w-4" />
//                   </div>

//                   <div className="absolute inset-x-0 bottom-0 p-5 text-white max-[413px]:p-4">
//                     <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-3 py-1 font-[Montserrat] text-[10px] font-semibold uppercase tracking-[1.8px] text-white/88 backdrop-blur-md">
//                       {item.category}
//                     </span>
//                     <h3
//                       className={`mt-3 font-[Montserrat] font-semibold leading-tight tracking-[-0.8px] text-white ${
//                         itemSize
//                           ? "text-[28px] max-[413px]:text-[22px]"
//                           : "text-[22px] max-[413px]:text-[18px]"
//                       }`}
//                     >
//                       {item.title}
//                     </h3>
//                   </div>
//                 </article>
//               );
//             })
//           ) : (
//             <div className="col-span-full flex h-[200px] flex-col items-center justify-center gap-4 text-[#15242d]/60">
//               <p className="font-[Montserrat] text-[16px]">
//                 No items found in this category.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       <section
//         className="px-[100px] pb-[80px] pt-2 max-[1400px]:px-[50px]
//         max-[1024px]:px-10 max-[768px]:px-6 max-[768px]:pb-[60px]
//         max-[413px]:px-4 max-[413px]:pb-[48px]"
//       >
//         <div className="overflow-hidden rounded-[32px] bg-[#15242d] px-8 py-8 text-white max-[413px]:px-5">
//           <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//             <div>
//               <p className="font-[Montserrat] text-[12px] font-semibold uppercase tracking-[2.2px] text-white/55">
//                 Visual Flow
//               </p>
//               <h2 className="mt-2 font-[Montserrat] text-[30px] font-semibold leading-[34px] tracking-[-1.2px] max-[413px]:text-[24px] max-[413px]:leading-[28px]">
//                 Fresh look, lighter content, stronger motion.
//               </h2>
//             </div>

//             <div className="flex items-center gap-3 self-start rounded-full bg-white/10 px-5 py-3 backdrop-blur-md">
//               <span className="h-2.5 w-2.5 rounded-full bg-[#f3c98f] shadow-[0_0_18px_rgba(243,201,143,0.9)]" />
//               <span className="font-[Montserrat] text-[12px] font-semibold uppercase tracking-[1.8px] text-white/75">
//                 Modern gallery system
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="relative z-10 -mt-[40px]">
//         <Support />
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Support from "../About/Components/Support";
import bannerImg from "../../assets/portfolio-banner.jpg";

const API_BASE_URL = "http://localhost:5000";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [galleryItems, setGalleryItems] = useState([]);
  const [filters, setFilters] = useState(["All"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/gallery`);
        const data = await response.json();

        // Dynamically create filters from gallery titles
        const titles = data.map((g) => g.title).filter(Boolean);
        setFilters(["All", ...new Set(titles)]);

        // Flatten all items from all galleries
        const items = data.flatMap((gallery) =>
          (gallery.items || []).map((item, idx) => ({
            id: item._id || `${gallery._id}-${idx}`,
            title: item.name || gallery.title || "Untiled",
            category: gallery.title || "Other",
            // ✅ SECURE URL: Using the backend proxy instead of static uploads
            image: `${API_BASE_URL}/api/gallery/view/${item.url.split("/").pop()}`,
            type: item.type, // image or video
          })),
        );

        setGalleryItems(items);
      } catch (error) {
        console.error("Failed to fetch galleries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleries();
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
          className="relative px-[100px] pb-[72px] pt-[120px] text-white max-[1400px]:px-[50px]
          max-[1024px]:px-10 max-[1024px]:pt-[100px]
          max-[768px]:px-6 max-[768px]:pb-16 max-[768px]:pt-[88px]
          max-[413px]:px-4 max-[413px]:pb-12 max-[413px]:pt-[76px]"
        >
          {/* Header content remains same */}
          <p className="font-[Montserrat] text-[13px] font-semibold uppercase tracking-[2.6px] text-white/75">
            Home / Gallery
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-[#f3c98f]" />
                <span className="font-[Montserrat] text-[11px] font-semibold uppercase tracking-[2px] text-white/85">
                  New Gallery Mood
                </span>
              </div>
              <h1 className="mt-6 max-w-[760px] font-[Montserrat] text-[64px] font-semibold leading-[68px]">
                Clean visuals, sharper motion, no clutter.
              </h1>
            </div>
            <div className="rounded-[28px] border border-white/14 bg-white/8 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="font-[Montserrat] text-[11px] font-semibold uppercase tracking-[2px] text-white/65">
                  Selected
                </span>
                <span className="font-[Montserrat] text-[32px] font-semibold leading-none text-white">
                  {visibleItems.length.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="mt-4 h-[1px] bg-white/12" />
              <p className="mt-4 font-[Montserrat] text-[14px] text-white/70">
                Minimal copy. More focus on layout, image depth, and movement.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Filter and Grid Section */}
      <section className="px-[100px] pt-[60px] pb-[100px] border-b-[0.8px] border-[#E5E5E5] bg-[#f5f1e8]
        max-[1400px]:px-[50px]
        max-[1200px]:px-10
        max-[768px]:px-6
        max-[413px]:px-5 max-[413px]:pt-8 max-[413px]:pb-20">
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[620px]">
            <p className="font-[Montserrat] text-[13px] font-semibold uppercase tracking-[2.4px] text-[#7a6550]">
              Curated Frames
            </p>
            <h2 className="mt-3 font-[Montserrat] text-[42px] font-semibold text-[#14222b]">
              Simple layout. Premium feel.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-3 font-[Montserrat] text-[12px] font-semibold uppercase tracking-[1.7px] transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#15242d] text-white shadow-lg"
                    : "bg-white text-[#314650] hover:bg-[#efe5d5]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-12 grid auto-rows-[220px] gap-5 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]">
          {loading ? (
            <div className="col-span-full flex h-[400px] items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#15242d] border-t-transparent" />
            </div>
          ) : visibleItems.length > 0 ? (
            visibleItems.map((item, index) => {
              const itemSize = index === 0 ? "lg:col-span-2 lg:row-span-2" : "";
              return (
                <article
                  key={item.id}
                  // onContextMenu={(e) => e.preventDefault()} // ✅ Disable right click
                  className={`group relative overflow-hidden rounded-[28px] bg-[#15242d] transition-all duration-500 hover:-translate-y-2 ${itemSize}`}
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
                      className={`mt-3 font-[Montserrat] font-semibold leading-tight tracking-[-0.8px] text-white ${itemSize ? "text-[28px]" : "text-[22px]"}`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="col-span-full flex h-[200px] flex-col items-center justify-center text-[#15242d]/60">
              <p className="font-[Montserrat] text-[16px]">No items found.</p>
            </div>
          )}
        </div>
      </section>

      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
}
