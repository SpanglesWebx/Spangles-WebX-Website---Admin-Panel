import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CalendarDays, Clock3, ChevronRight, ArrowRight, RotateCcw } from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import Support from "../About/Components/Support";
import Preloader from "../../Components/Preloader";

const API_BASE = "http://localhost:5000";

const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date(dateString).toLocaleDateString("en-GB", options);
};

const getTimeAgo = (date) => {
  if (!date) return "";
  const now = new Date();
  const past = new Date(date);
  const diffInMS = now - past;

  const seconds = Math.floor(diffInMS / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hr ago`;
  if (days < 30) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
  return `${years} year${years > 1 ? "s" : ""} ago`;
};

const getExcerpt = (content = "", length = 155) => {
  const text = content.replace(/<[^>]*>/g, "").trim();
  if (text.length <= length) return text;
  return `${text.substring(0, length).trim()}...`;
};

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [activeSidebarCategory, setActiveSidebarCategory] = useState(null);
  const [activeSidebarTag, setActiveSidebarTag] = useState(null);
  const [allBlogsForFiltering, setAllBlogsForFiltering] = useState([]);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blogs/${id}`);
        const data = await res.json();

        if (data.error || !data._id) {
          setBlog(null);
          setLoading(false);
          return;
        }

        setBlog(data);

        // Fetch related posts (latest posts except current)
        const relRes = await fetch(`${API_BASE}/api/blogs`);
        const relData = await relRes.json();
        setRelatedPosts(relData.filter(p => p._id !== id).slice(0, 3));

        // Extract unique categories
        const cats = [...new Set(relData.map(p => p.category || "Tech Trends"))];
        setAllCategories(cats);

        // Extract unique tags
        const tags = [...new Set(relData.flatMap(p => p.tags || []))];
        setAllTags(tags);

        // Store all for filtering
        setAllBlogsForFiltering(relData);
      } catch (err) {
        console.error("Error fetching blog details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [id]);

  const filteredCatalog = useMemo(() => {
    let list = allBlogsForFiltering.filter(p => p._id !== blog?._id);

    if (activeSidebarCategory) {
      list = list.filter(p => p.category === activeSidebarCategory);
    }
    if (activeSidebarTag) {
      list = list.filter(p => p.tags?.includes(activeSidebarTag));
    }

    return list.slice(0, 3); // Show up to 3 related/filtered items
  }, [allBlogsForFiltering, activeSidebarCategory, activeSidebarTag, blog]);

  const scrollToCatalog = () => {
    const catalogElement = document.getElementById("recent-catalog-section");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSidebarCategoryClick = (cat) => {
    if (activeSidebarCategory === cat) {
      setActiveSidebarCategory(null);
    } else {
      setActiveSidebarCategory(cat);
      setActiveSidebarTag(null);
      setTimeout(scrollToCatalog, 100);
    }
  };

  const handleSidebarTagClick = (tag) => {
    if (activeSidebarTag === tag) {
      setActiveSidebarTag(null);
    } else {
      setActiveSidebarTag(tag);
      setActiveSidebarCategory(null);
      setTimeout(scrollToCatalog, 100);
    }
  };

  if (loading) {
    return <Preloader />;
  }

  if (!blog) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-[#F4F7FA] px-4 text-center">
        <h2 className="text-3xl font-bold text-[#161C2D] mb-4">Story Not Found</h2>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 rounded-xl bg-[#161C2D] px-8 py-4 font-bold uppercase text-white shadow-xl"
        >
          Back to Trends
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white overflow-x-hidden" ref={targetRef}>
      {/* 1. PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#345261] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* 2. CINEMATIC HERO (80vh) */}
      <section className="relative h-[65vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img
            src={blog.image ? `${API_BASE}/api/blogs/view/${blog.image.split("/").pop()}` : ""}
            alt={blog.title}
            className="h-full w-full object-cover opacity-60 scale-110"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#F4F7FA]" />

        <div className="relative z-10 w-full px-[100px] max-[1201px]:px-[50px] max-[1030px]:px-8 max-[413px]:px-4 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[3px] text-white self-center">
                {blog.category || "Innovation"}
              </span>
              <span className="text-white/40 text-[10px] uppercase font-bold tracking-[2px]">
                {getTimeAgo(blog.createdAt)}
              </span>
            </div>

            <h1 className="text-[36px] min-[414px]:text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white tracking-tighter leading-[0.95] mb-8">
              {blog.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-white/60 max-[1201px]:mb-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                  <img src="/Web.jpg" className="h-4.5 w-4.5 rounded-full object-cover" alt="icon" />
                </div>
                <span className="text-[12px] font-bold uppercase tracking-[1px] text-white">Innovation Hub</span>
              </div>
              <div className="h-4 w-[1px] bg-white/20" />
              <span className="text-[12px] font-bold uppercase tracking-[1px]">{formatDate(blog.createdAt)}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity }}
          className="absolute bottom-8 md:bottom-12 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-[10px] uppercase font-bold tracking-[3px]">Scroll to Read</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* 3. CONTENT AREA */}
      <div className="px-[100px] max-[1201px]:px-[80px] max-[1030px]:px-10 max-[413px]:px-6 pb-24 max-[1201px]:pb-20 max-[1030px]:pb-16 max-[413px]:pb-10 relative bg-[#F4F7FA]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          {/* Main Column */}
          <article className="relative bg-white rounded-[40px] p-16 max-[1201px]:p-12 max-[1030px]:p-8 max-[413px]:p-6 -mt-20 md:-mt-32 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-[#161C2D]/5 z-20">
            <div className="mb-6 md:mb-8 pb-6 border-b border-[#161C2D]/5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: -8 }}
                onClick={() => navigate("/blog")}
                className="group cursor-pointer inline-flex items-center gap-6 relative py-3 pr-8 pl-3 rounded-[35px] transition-all duration-700 hover:bg-[#345261]/5"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent opacity-0 group-hover:opacity-100 rounded-[40px] transition-opacity duration-700" />

                <div className="relative">
                  {/* Continuous Pulsing Rings (Bling Wave) */}
                  <motion.div
                    animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border-2 border-[#345261]/30 z-0"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 1 }}
                    className="absolute inset-0 rounded-full border border-[#345261]/20 z-0"
                  />

                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-full overflow-hidden border-[3px] border-white bg-white shadow-[0_15px_35px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_50px_rgba(52,82,97,0.15)] transition-all duration-700 relative z-10">
                    <img
                      src={blog.image ? `${API_BASE}/api/blogs/view/${blog.image.split("/").pop()}` : ""}
                      className="h-full w-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                      alt="Back"
                    />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
                      <FaArrowLeft size={24} className="text-white transition-transform duration-500 ease-out" />
                    </div>
                  </div>

                  {/* Subtle orbiting dot (Always active) */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    className="absolute inset-[-8px] z-20 pointer-events-none"
                  >
                    <div className="absolute top-0 right-0 h-3 w-3 bg-[#345261] rounded-full border-2 border-white shadow-[0_0_10px_rgba(52,82,97,0.5)]" />
                  </motion.div>
                </div>

                <div className="flex flex-col relative z-10">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[10px] md:text-[11px] uppercase font-bold tracking-[5px] text-[#345261]/50 group-hover:text-[#345261] transition-colors duration-500">Navigation</span>
                    <div className="h-[1px] w-12 bg-gradient-to-r from-[#345261]/30 to-transparent group-hover:w-20 transition-all duration-700" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-serif italic text-[#161C2D] group-hover:text-[#345261] transition-all duration-500 leading-[1.1] tracking-tight">
                    Back to <span className="font-semibold not-italic tracking-tighter">Insights</span>
                  </h3>
                  <p className="text-[11px] md:text-[12px] text-[#161C2D]/40 mt-1 font-medium group-hover:text-[#161C2D]/60 transition-colors duration-500">Explore more tech trends</p>
                </div>
              </motion.div>
            </div>

            <div
              className="prose prose-stone max-w-none text-justify
                    text-[#6B6A66] text-[18px] max-[1201px]:text-[17px] max-[1030px]:text-[16px] max-[413px]:text-[15px] leading-[1.8] font-[Montserrat]
                    prose-headings:text-[#161C2D] prose-headings:font-semibold prose-headings:tracking-tight
                    prose-h2:text-3xl max-[1201px]:prose-h2:text-[28px] max-[1030px]:prose-h2:text-2xl max-[413px]:prose-h2:text-xl prose-h2:mb-6 max-[1030px]:prose-h2:mb-4 prose-h2:mt-12 max-[1030px]:prose-h2:mt-8
                    prose-p:mb-8 max-[1030px]:prose-p:mb-6 
                    prose-strong:text-[#161C2D]
                    prose-img:rounded-3xl max-[1030px]:prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-16 max-[1030px]:prose-img:my-8
                    prose-blockquote:border-l-4 prose-blockquote:border-[#345261] prose-blockquote:pl-8 max-[1030px]:prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-2xl max-[1201px]:prose-blockquote:text-[22px] max-[1030px]:prose-blockquote:text-xl max-[413px]:prose-blockquote:text-lg prose-blockquote:text-[#161C2D]
                    [&>ul]:list-disc [&>ul]:ml-6 max-[1030px]:[&>ul]:ml-4 [&>ul]:mb-8 max-[1030px]:[&>ul]:mb-6
                    [&>ol]:list-decimal [&>ol]:ml-6 max-[1030px]:[&>ol]:ml-4 [&>ol]:mb-8 max-[1030px]:[&>ol]:mb-6"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="mt-8 md:mt-16 pt-6 md:pt-10 border-t border-[#161C2D]/5">
              <div className="flex items-center justify-between gap-6 md:gap-8">
                <div>
                  <h4 className="text-[14px] font-bold text-[#161C2D] mb-2 uppercase tracking-wide">Found this valuable?</h4>
                  <p className="text-[#6B6A66]">Share this trend insight with your tech community.</p>
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-3 px-6 py-4 bg-[#F4F7FA] text-[#345261] rounded-2xl font-bold uppercase text-[11px] tracking-[1.5px] hover:bg-[#161C2D] hover:text-white transition-all">
                    <FaTwitter size={16} /> Twitter
                  </button>
                  <button className="flex items-center gap-3 px-6 py-4 bg-[#F4F7FA] text-[#345261] rounded-2xl font-bold uppercase text-[11px] tracking-[1.5px] hover:bg-[#161C2D] hover:text-white transition-all">
                    <FaLinkedinIn size={16} /> LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:pt-24 lg:sticky lg:top-10 h-fit max-[413px]:mt-0 mt-12 lg:mt-0">
            <div className="space-y-8 md:space-y-12">
              <div className="relative mb-6 md:mb-10 overflow-hidden rounded-2xl bg-[#F4F7FA] border-l-4 border-[#161C2D] py-4 px-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-[12px] font-bold uppercase tracking-[2px] text-[#161C2D]">Latest Trends</h4>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#345261] animate-pulse" />
                </div>
              </div>
              <div className="space-y-4">
                {relatedPosts.map((post) => (
                  <motion.div
                    key={post._id}
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      navigate(`/blog/${post._id}`);
                      window.scrollTo(0, 0);
                    }}
                    className="group cursor-pointer flex flex-col relative"
                  >
                    <div className="flex items-center gap-5 pb-4">
                      <div className="h-16 w-16 rounded-[10px] overflow-hidden flex-shrink-0 border border-[#161C2D]/10 bg-[#F4F7FA]">
                        <img
                          src={post.image ? `${API_BASE}/api/blogs/view/${post.image.split("/").pop()}` : ""}
                          alt={post.title}
                          className="h-full w-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex gap-2 text-[#6B6A66] text-[9px] font-bold uppercase tracking-[1.5px] mb-1.5">
                          <span>{formatDate(post.createdAt)}</span>
                          <span>•</span>
                          <span>{post.category || "Tech Trends"}</span>
                        </div>
                        <h5 className="text-[15px] font-bold leading-tight text-[#161C2D] group-hover:text-[#345261] transition-colors line-clamp-2">
                          {post.title}
                        </h5>
                      </div>
                    </div>
                    {/* Consistent thickness lines */}
                    <div className="relative h-[1px] w-full mb-4">
                      <div className="absolute inset-0 bg-[#161C2D]/5" />
                      <div className="absolute inset-0 w-0 bg-[#345261] group-hover:w-full transition-all duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Tags Card */}
              <div className="bg-[#1c202b] rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-[0_20px_50px_rgba(22,33,45,0.15)] relative overflow-hidden group">
                <div className="flex items-center gap-3 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-white/10 relative z-10">
                  <img src="/Web.jpg" className="h-6 w-6 rounded-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="icon" />
                  <h3 className="text-white text-xl md:text-2xl italic font-serif tracking-tight group-hover:text-white/90 transition-colors">Trend Tags</h3>
                </div>
                <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-4 relative z-10">
                  {(allTags.length > 0
                    ? allTags
                    : ["Strategy", "Innovation", "Digital", "Growth", "Creative"]
                  ).map((tag, idx) => {
                    const isActive = activeSidebarTag === tag || blog.tags?.includes(tag);
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSidebarTagClick(tag)}
                        className={`text-[11px] font-bold uppercase tracking-[2px] transition-all ${isActive
                          ? "text-[#8c8c8c]"
                          : "text-white hover:text-white/70"
                          }`}
                      >
                        #{tag}
                      </button>
                    );
                  })}
                </div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-[#345261]/10 rounded-full blur-2xl pointer-events-none" />
              </div>

              {/* Categories Card */}
              <div className="bg-[#1c202b] rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-[0_20px_50px_rgba(22,33,45,0.15)] relative overflow-hidden group">
                <div className="flex items-center gap-3 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-white/10 relative z-10">
                  <img src="/Web.jpg" className="h-6 w-6 rounded-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="icon" />
                  <h3 className="text-white text-xl md:text-2xl italic font-serif tracking-tight group-hover:text-white/90 transition-colors">Tech Categories</h3>
                </div>
                <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-4 relative z-10">
                  {allCategories.map((cat, idx) => {
                    const isActive = cat === (activeSidebarCategory || blog.category);
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSidebarCategoryClick(cat)}
                        className={`text-[11px] font-bold uppercase tracking-[2px] transition-all flex items-center ${isActive
                          ? "text-[#8c8c8c]"
                          : "text-white hover:text-white/70"
                          }`}
                      >
                        {isActive && <img src="/Web.jpg" className="h-2.5 w-2.5 rounded-full object-cover mr-2 opacity-50" alt="icon" />}
                        {cat}
                      </button>
                    );
                  })}
                </div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-[#345261]/10 rounded-full blur-2xl pointer-events-none" />
              </div>
            </div>
          </aside>
        </div>
      </div>



      {/* 5. MORE STORIES FOOTER (RECENT CATALOG STYLE) */}
      <section
        id="recent-catalog-section"
        className="bg-[#F4F7FA] px-[100px] max-[1201px]:px-[50px] max-[1030px]:px-8 max-[413px]:px-4 pt-10 pb-20 md:pb-[100px] border-b-[0.8px] border-[#E5E5E5]"
      >
        <div className="mb-10 md:mb-20 flex flex-col gap-6 md:gap-8 md:flex-row md:items-end md:justify-between border-b border-[#6B6A66]/5 pb-6 md:pb-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#345261] mb-4">
              TREND ARCHIVE
            </p>
            <h2 className="text-[28px] min-[414px]:text-[34px] font-semibold tracking-[-0.06em] text-[#161C2D] md:text-[64px] leading-[0.8]">
              Keep <span className="italic font-serif text-[#345261]/80">exploring.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="max-w-xl text-lg leading-relaxed text-[#161C2D]/40 font-medium">
              Explore the bleeding edge of innovation with bold perspectives on next-gen technologies and digital frontiers.
            </p>
            {(activeSidebarCategory || activeSidebarTag) && (
              <div className="flex items-center gap-6">
                <span className="text-[12px] font-bold uppercase tracking-[1px] text-[#161C2D] bg-white px-4 py-2 rounded-full border border-[#161C2D]/10 shadow-sm">
                  {activeSidebarCategory || activeSidebarTag}
                </span>
                
                <button
                  onClick={() => { setActiveSidebarCategory(null); setActiveSidebarTag(null); }}
                  className="group flex items-center gap-4 cursor-pointer"
                >
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-white border-2 border-[#161C2D]/5 flex items-center justify-center relative z-10 shadow-md group-hover:bg-[#345261] transition-all duration-500">
                      <RotateCcw size={16} className="text-[#345261] group-hover:text-white transition-all duration-700 ease-in-out" />
                    </div>
                  </div>
                  
                </button>
              </div>
            )}
          </div>
        </div>

        {filteredCatalog.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {filteredCatalog.map((post, index) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onClick={() => {
                  navigate(`/blog/${post._id}`);
                  window.scrollTo(0, 0);
                }}
                className={`group cursor-pointer overflow-hidden rounded-[40px] border border-[#161C2D]/5 bg-white shadow-[0_32px_80px_-16px_rgba(22,33,43,0.05)] hover:shadow-[0_45px_100px_rgba(22,33,45,0.15)] transition-all duration-700 hover:-translate-y-4 flex flex-col h-full ${index > 0 ? "max-[413px]:hidden" : ""}`}
              >
                <div className="relative overflow-hidden aspect-video md:aspect-[4/3]">
                  <img
                    src={post.image ? `${API_BASE}/api/blogs/view/${post.image.split("/").pop()}` : ""}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute left-6 top-6 rounded-full bg-[#345261]/95 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-2xl backdrop-blur-md transition-all group-hover:bg-[#345261] group-hover:text-white">
                    {post.category || "Tech Trends"}
                  </div>
                </div>

                <div className="p-6 md:p-8 pb-4 flex-grow flex flex-col">
                  <div className="mb-4 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#161C2D]/30">
                    <span className="italic tracking-normal text-sm text-[#161C2D]/40 font-serif lowercase capitalize">
                      {formatDate(post.createdAt)}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#345261]/40" />
                    <span>{getTimeAgo(post.createdAt)}</span>
                  </div>

                  <h3 className="text-[20px] md:text-[24px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#161C2D] mb-4 group-hover:text-[#345261] transition-all duration-500">
                    {post.title}
                  </h3>

                  <p className="line-clamp-2 text-sm leading-relaxed text-[#161C2D]/50 mb-3 font-medium">
                    {getExcerpt(post.content, 120)}
                  </p>
                </div>

                <div className="mt-auto border-t border-[#6B6A66]/5 px-6 md:px-8 pt-4 md:pt-6 pb-6 md:pb-8 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#161C2D]">Explore Entry</span>
                  <div className="h-12 w-12 rounded-full bg-[#161C2D]/5 flex items-center justify-center group-hover:bg-[#345261] group-hover:text-white transition-all transform group-hover:translate-x-2">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-[#6B6A66] italic">No matching trends found with this filter.</p>
            <button
              onClick={() => { setActiveSidebarCategory(null); setActiveSidebarTag(null); }}
              className="mt-4 px-8 py-3 bg-[#161C2D] text-white rounded-xl font-bold uppercase text-[11px] tracking-[1px] hover:bg-[#345261] transition-all"
            >
              Show all stories
            </button>
          </div>
        )}
      </section>

      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
}
