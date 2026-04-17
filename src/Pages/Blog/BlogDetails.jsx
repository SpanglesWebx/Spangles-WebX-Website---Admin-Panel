import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CalendarDays, Clock3, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import Support from "../About/Components/Support";

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
        const cats = [...new Set(relData.map(p => p.category || "General"))];
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
    return (
      <div className="flex h-screen items-center justify-center bg-[#F4F7FA]">
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-2 border-[#161C2D] border-t-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-[#161C2D] opacity-50" />
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-[#F4F7FA] px-4 text-center">
        <h2 className="text-3xl font-bold text-[#161C2D] mb-4">Story Not Found</h2>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 rounded-xl bg-[#161C2D] px-8 py-4 font-bold uppercase text-white shadow-xl"
        >
          Back to Insights
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
                {blog.category || "General"}
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
                  <Sparkles size={18} className="text-[#345261]" />
                </div>
                <span className="text-[12px] font-bold uppercase tracking-[1px] text-white">Editorial Team</span>
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
            <div className="flex items-center gap-4 mb-12 max-[1201px]:mb-10 max-[1030px]:mb-8 max-[413px]:mb-6 pb-12 max-[1201px]:pb-10 max-[1030px]:pb-8 max-[413px]:pb-6 border-b border-[#161C2D]/5">
              <button
                onClick={() => navigate("/blog")}
                className="h-12 w-12 rounded-full border border-[#161C2D]/10 flex items-center justify-center hover:bg-[#161C2D] hover:text-white transition-all group"
              >
                <FaArrowLeft size={18} className="group-hover:translate-x-[-2px] transition-transform" />
              </button>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-[1.5px] text-[#6B6A66]">Go back</span>
                <span className="text-[13px] font-bold text-[#161C2D]">Back to Insights</span>
              </div>

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

            <div className="mt-10 md:mt-20 pt-8 md:pt-16 border-t border-[#161C2D]/5">
              <div className="flex items-center justify-between flex-wrap gap-6 md:gap-8">
                <div>
                  <h4 className="text-[14px] font-bold text-[#161C2D] mb-2 uppercase tracking-wide">Enjoyed the read?</h4>
                  <p className="text-[#6B6A66]">Share this story with your creative network.</p>
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
                  <h4 className="text-[12px] font-bold uppercase tracking-[2px] text-[#161C2D]">Recent Stories</h4>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#345261] animate-pulse" />
                </div>
              </div>
              <div className="space-y-6 md:space-y-8">
                {relatedPosts.map((post) => (
                  <motion.div
                    key={post._id}
                    whileHover={{ x: 5 }}
                    onClick={() => navigate(`/blog/${post._id}`)}
                    className="group cursor-pointer flex flex-col gap-3"
                  >
                    <div className="flex gap-2 text-[#6B6A66] text-[9px] font-bold uppercase tracking-[1.5px]">
                      <span>{formatDate(post.createdAt)}</span>
                      <span>•</span>
                      <span>{post.category || "General"}</span>
                    </div>
                    <h5 className="text-[15px] font-bold leading-tight text-[#161C2D] group-hover:text-[#345261] transition-colors line-clamp-2">
                      {post.title}
                    </h5>
                    <div className="h-[1px] w-0 bg-[#345261] group-hover:w-full transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
              {/* Tags Card */}
              <div className="bg-[#1c202b] rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-[0_20px_50px_rgba(22,33,45,0.15)] relative overflow-hidden group">
                <div className="flex items-center gap-3 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-white/10 relative z-10">
                  <Sparkles className="text-[#345261] opacity-80 group-hover:opacity-100 transition-opacity" size={24} />
                  <h3 className="text-white text-lg md:text-xl font-bold tracking-tight group-hover:text-white/90 transition-colors">Strategic Tags</h3>
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
                        {tag}
                      </button>
                    );
                  })}
                </div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-[#345261]/10 rounded-full blur-2xl pointer-events-none" />
              </div>

              {/* Categories Card */}
              <div className="bg-[#1c202b] rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-[0_20px_50px_rgba(22,33,45,0.15)] relative overflow-hidden group">
                <div className="flex items-center gap-3 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-white/10 relative z-10">
                  <Sparkles className="text-[#345261] opacity-80 group-hover:opacity-100 transition-opacity" size={24} />
                  <h3 className="text-white text-lg md:text-xl font-bold tracking-tight group-hover:text-white/90 transition-colors">Categories</h3>
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
                        {isActive && <Sparkles size={10} className="mr-2 text-[#8c8c8c]" />}
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
              THE RECENT CATALOG
            </p>
            <h2 className="text-[28px] min-[414px]:text-[34px] font-semibold tracking-[-0.06em] text-[#161C2D] md:text-[64px] leading-[0.8]">
              Keep exploring.
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="max-w-xl text-lg leading-relaxed text-[#161C2D]/40 font-medium">
              A comprehensive index of tactical thoughts, creative investigations, and strategic findings.
            </p>
            {(activeSidebarCategory || activeSidebarTag) && (
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-bold uppercase tracking-[1px] text-[#161C2D] bg-white px-3 py-1.5 rounded-full border border-[#161C2D]/10">
                  {activeSidebarCategory || activeSidebarTag}
                </span>
                <button
                  onClick={() => { setActiveSidebarCategory(null); setActiveSidebarTag(null); }}
                  className="text-[11px] font-bold uppercase tracking-[2px] text-[#345261] hover:underline text-left pointer-events-auto"
                >
                  Reset ×
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
                  <div className="absolute left-6 top-6 rounded-full bg-[#161C2D]/95 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-2xl backdrop-blur-md">
                    {post.category || "General"}
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
                  <div className="h-12 w-12 rounded-full bg-[#161C2D]/5 flex items-center justify-center group-hover:bg-[#161C2D] group-hover:text-white transition-all transform group-hover:translate-x-2">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-[#6B6A66] italic">No other stories found with this criteria.</p>
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
