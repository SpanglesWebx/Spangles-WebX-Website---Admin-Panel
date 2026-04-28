import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Search,
  Sparkles,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import Support from "../About/Components/Support";
import bannerImg from "../../assets/Service-banner.jpg";
import img5 from "../../assets/portfolio5.jpg";
import Preloader from "../../Components/Preloader";

const API_BASE = "http://localhost:5000";

// --- STYLISTIC UTILITIES ---
const GrainOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-[999] opacity-[0.035] mix-blend-overlay">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
);

const MagneticButton = ({ children, className, onClick }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

// --- DATA UTILITIES ---
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

const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date(dateString).toLocaleDateString("en-GB", options);
};

export default function Blog() {
  const navigate = useNavigate();
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All Stories");
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredPage, setFeaturedPage] = useState(1);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blogs`);
        const data = await res.json();

        const mappedPosts = data
          .map((blog) => {
            const imageName = blog.image ? blog.image.split("/").pop() : "";

            return {
              id: blog._id,
              title: blog.title,
              excerpt: getExcerpt(blog.content),
              image: imageName ? `${API_BASE}/api/blogs/view/${imageName}` : "",
              category: blog.category || "General",
              tags: blog.tags || [],
              createdAt: blog.createdAt,
              date: formatDate(blog.createdAt),
              timeAgo: getTimeAgo(blog.createdAt),
              featured: blog.featured || false,
            };
          })
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setPosts(mappedPosts);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
    window.scrollTo(0, 0);
  }, []);

  // --- URL PARAMETER SYNC ---
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    const tagParam = params.get("tag");

    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else if (tagParam) {
      // If a tag is provided, we should probably set category to "All Stories" or "General" 
      // depends on user preference, but let's reset to All to show all posts with that tag.
      setActiveCategory("All Stories");
      setSearchQuery(tagParam);
    } else {
      // If no params, we could reset or keep current
    }
  }, [location.search]);

  const categories = useMemo(() => {
    return ["All Stories", ...new Set(posts.map((post) => post.category))];
  }, [posts]);

  const totalTags = useMemo(() => {
    return new Set(posts.flatMap(post => post.tags || [])).size;
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All Stories" || post.category === activeCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  const postsPerFeaturedPage = 5;

  const featuredPostsSet = useMemo(() => {
    return filteredPosts.slice(
      (featuredPage - 1) * postsPerFeaturedPage,
      featuredPage * postsPerFeaturedPage
    );
  }, [filteredPosts, featuredPage]);

  const featuredPost = useMemo(() => featuredPostsSet[0], [featuredPostsSet]);
  const featuredSmallLeft = useMemo(() => featuredPostsSet[1], [featuredPostsSet]);
  const spotlightPosts = useMemo(() => featuredPostsSet.slice(2, 5), [featuredPostsSet]);

  const articlePosts = useMemo(() => {
    return [...filteredPosts].sort(() => 0.5 - Math.random()).slice(0, 3);
  }, [filteredPosts]);

  const totalFeaturedPages = Math.ceil(filteredPosts.length / postsPerFeaturedPage);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-[Montserrat] text-[#161C2D] selection:bg-[#345261] selection:text-white">
      <GrainOverlay />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#345261] origin-left z-[1000]" style={{ scaleX }} />

      <div className="bg-[#F4F7FA]">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bannerImg}
              alt="Blog banner"
              className="h-full w-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,12,18,0.96)_10%,rgba(15,23,32,0.88)_40%,rgba(15,23,32,0.6)_70%,rgba(15,23,32,0.2)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,82,97,0.3),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(107,106,102,0.22),transparent_40%)]" />
          </div>

          <div className="absolute -left-16 top-24 h-80 w-80 rounded-full bg-[#345261]/25 blur-[120px]" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#6B6A66]/20 blur-[150px]" />

          <div className="relative mx-auto max-w-[1440px] min-[1441px]:max-w-[1600px] px-6 pb-8 pt-20 md:px-10 md:pt-16 min-[1015px]:px-16 min-[1441px]:px-[100px]">
            <div className="grid min-h-[480px] gap-10 md:gap-12 min-[1015px]:grid-cols-[1.1fr_0.9fr] min-[1015px]:items-end">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8 inline-flex items-center gap-4 rounded-full border border-white/10 bg-[#161C2D]/5 px-5 py-2.5 backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
                >
                  <div className="relative h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-[#345261] animate-ping" />
                    <span className="relative block h-2 w-2 rounded-full bg-[#345261]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#345261]">
                    Insights & Stories
                  </span>
                </motion.div>

                <h1 className="max-w-5xl text-[36px] min-[414px]:text-[44px] font-semibold leading-[0.9] tracking-[-0.055em] text-white sm:text-[64px] min-[1015px]:text-[96px] mix-blend-plus-lighter">
                  Stories for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#345261] italic font-serif">ambitious minds.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-[1.8] text-white/60 md:text-xl font-medium tracking-tight">
                  Explore actionable strategies, design trends, marketing insights,
                  and web development best practices that drive business success.
                </p>

                <div className="mt-10 md:mt-12 grid gap-4 md:gap-6 min-[1015px]:grid-cols-[minmax(0,1fr)_auto] min-[1015px]:items-center">
                  <div className="relative group/search">
                    <Search className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30 group-focus-within/search:text-[#345261] transition-colors" />
                    <input
                      type="text"
                      placeholder="Search articles, topics, or keywords..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-16 w-full rounded-2xl border border-white/10 bg-[#161C2D]/5 pl-16 pr-6 text-white text-base placeholder:text-white/20 backdrop-blur-3xl outline-none transition-all focus:border-[#345261]/40 focus:bg-[#161C2D]/10 shadow-2xl"
                    />
                  </div>

                  <div className="flex h-16 items-center justify-center gap-4 rounded-2xl border border-white/10 bg-[#161C2D]/5 px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6A66] backdrop-blur-3xl">
                    <TrendingUp size={16} className="text-[#6B6A66]" />
                    <span>{posts.length} ARTICLES</span>
                  </div>
                </div>
              </motion.div>

              {featuredPost && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => navigate(`/blog/${featuredPost.id}`)}
                  className="relative cursor-pointer rounded-[32px] border border-white/10 bg-[#161C2D]/[0.03] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.4)] backdrop-blur-[40px] saturate-[180%] group/featured"
                >
                  <div className="overflow-hidden rounded-[24px] relative aspect-[16/9]">
                    {featuredPost.image ? (
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="h-full w-full object-cover grayscale-[0.2] group-hover/featured:grayscale-0 transition-all duration-1000"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#161C2D,#345261)] text-white/60">
                        Archive Fragment
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161C2D]/80 via-transparent to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-700" />
                  </div>

                  <div className="p-4 pt-8">
                    <div className="mb-6 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#345261]">
                      <span className="bg-[#345261] px-4 py-1.5 rounded-full text-white shadow-xl">
                        SPOTLIGHT
                      </span>
                      <span className="text-white/40">{featuredPost.category}</span>
                    </div>

                    <h2 className="text-[26px] font-semibold leading-[1.1] tracking-[-0.05em] text-white mb-4">
                      {featuredPost.title}
                    </h2>

                    <p className="mb-6 line-clamp-1 text-sm leading-relaxed text-white/50 font-medium">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                        <span className="flex items-center gap-2 italic font-serif lowercase capitalize tracking-normal text-white/50 text-sm">
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock3 size={14} /> {featuredPost.timeAgo}
                        </span>
                      </div>

                      <MagneticButton
                        onClick={() => navigate(`/blog/${featuredPost.id}`)}
                        className="h-16 w-16 rounded-full bg-[#345261] text-white flex items-center justify-center shadow-[0_0_40px_rgba(52,82,97,0.3)] hover:bg-white hover:text-[#161C2D] transition-all duration-300"
                      >
                        <ArrowRight size={24} />
                      </MagneticButton>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        <section className="relative z-10 mt-10 md:mt-16 px-6 md:px-10 min-[1095px]:px-16 min-[1441px]:px-[100px]">
          <div className="mx-auto max-w-[1440px] min-[1441px]:max-w-[1600px]">

            <div className="grid gap-12 md:gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center min-[1441px]:gap-12">

              {/* Left Column: The Syndicate Index */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="max-[413px]:mb-0 mb-12 text-left">
                  <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#345261] mb-6">
                    THE BLOG ARCHIVE
                  </p>
                  <h2 className="text-[38px] min-[414px]:text-[48px] md:text-[72px] font-semibold tracking-[-0.065em] text-[#161C2D] leading-[0.85] mb-8">
                    The Insight <br />
                    <span className="italic font-serif text-[#345261]/80">Compass.</span>
                  </h2>
                  <p className="max-w-xl text-lg text-[#161C2D]/50 font-medium leading-relaxed text-left">
                    Browse through our collection of expertly-written articles covering web design, development, branding, and digital strategy.
                  </p>
                </div>

                {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {categories.map((cat, i) => (
                  <motion.button
                    key={cat}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setActiveCategory(cat)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-5 rounded-2xl border-l-4 transition-all duration-500 text-left group/cat shadow-sm ${activeCategory === cat
                        ? "bg-[#161C2D] border-[#345261] shadow-[0_20px_40px_rgba(22,33,43,0.15)]"
                        : "bg-[#F4F7FA] border-[#161C2D]/5 hover:bg-white hover:border-[#345261]"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${activeCategory === cat ? "text-white/40" : "text-[#161C2D]/30"
                        }`}>
                        Domain
                      </span>
                      <div className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${activeCategory === cat ? "bg-[#345261] animate-pulse" : "bg-[#161C2D]/10"
                        }`} />
                    </div>
                    
                    <h4 className={`text-base font-bold tracking-tight transition-colors duration-500 ${activeCategory === cat ? "text-white" : "text-[#161C2D]"
                      }`}>
                      {cat}
                    </h4>

                 
                    {activeCategory === cat && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 bg-gradient-to-br from-[#345261]/5 to-transparent pointer-events-none"
                      />
                    )}
                  </motion.button>
                ))}
              </div> */}
              </motion.div>

              {/* Right Column: The Dashboard metrics */}
              <div className="grid gap-6">

                {/* Archive Scale Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-[40px] border border-[#161C2D]/5 bg-white p-6 md:p-10 shadow-[0_45px_100px_rgba(22,33,43,0.05)] group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#161C2D]/20 mb-4">
                        Categories Available
                      </p>
                      <h3 className="text-5xl md:text-7xl italic font-serif tracking-[-0.08em] text-[#345261]/80 leading-none mb-4">
                        {categories.length - 1}
                      </h3>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#345261]">
                        Content categories
                      </p>
                    </div>
                    <TrendingUp className="text-[#345261]/20 group-hover:text-[#345261]/40 transition-colors duration-700" size={40} />
                  </div>
                  {/* Decorative Pattern */}
                  <div className="absolute -bottom-8 -right-8 h-48 w-48 bg-[#345261]/5 rounded-full blur-3xl pointer-events-none" />
                </motion.div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Domain Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="rounded-[40px] border border-[#161C2D]/5 bg-[#161C2D] p-6 md:p-8 text-white relative overflow-hidden group"
                  >
                    <img src="/Web.jpg" className="h-6 w-6 rounded-full object-cover mb-6 opacity-40 group-hover:opacity-100 transition-opacity" alt="icon" />
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-2">Blog Tags</p>
                    <h4 className="text-4xl md:text-5xl italic font-serif tracking-tight text-[#FFFFFF]/80">{totalTags}</h4>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Frequency Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="rounded-[40px] border border-[#161C2D]/5 bg-[#F4F7FA] p-6 md:p-8 relative overflow-hidden flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start">
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#161C2D]/30">Publishing Schedule</p>
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="h-2 w-2 rounded-full bg-[#345261]"
                      />
                    </div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-semibold tracking-[-0.04em] text-[#161C2D] italic font-serif">Bi-Weekly</h4>
                      <p className="mt-1 text-[10px] font-bold tracking-[0.1em] text-[#345261]/60">NEW ARTICLES</p>
                    </div>
                  </motion.div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {featuredPost && (
          <section className="mx-auto mt-10 md:mt-16 max-w-[1440px] min-[1441px]:max-w-[1600px] px-6 md:px-10 min-[1015px]:px-16 min-[1441px]:px-[100px]">
            <div className="mb-6 md:mb-8 min-[1015px]:mb-12 flex items-baseline justify-between gap-6 border-b border-[#6B6A66]/5 pb-6 md:pb-8 min-[1015px]:pb-12">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#345261] mb-4">
                  TRENDING EDITS
                </p>
                <h2 className="text-[40px] font-semibold tracking-[-0.06em] text-[#161C2D] md:text-[56px] leading-[0.9]">
                  Fresh <span className="italic font-serif text-[#345261]/80">Insights</span>
                </h2>
              </div>
              <div className="hidden lg:block max-w-sm text-[15px] leading-relaxed text-[#161C2D]/40 font-medium">
                Curated articles selected for their expertise, relevance, and value to our digital community.
              </div>
            </div>

            <div className="grid gap-10 md:gap-12 min-[1015px]:grid-cols-[1.1fr_0.9fr] min-[1441px]:gap-10">
              <div className="flex flex-col gap-10 h-full">
                {featuredPost && (
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onClick={() => navigate(`/blog/${featuredPost.id}`)}
                    className="group cursor-pointer relative overflow-hidden rounded-[48px] border border-[#161C2D]/5 bg-white shadow-[0_40px_100px_rgba(22,33,43,0.06)] hover:shadow-[0_40px_100px_rgba(22,33,43,0.12)] transition-shadow duration-1000 flex flex-col flex-1 max-[1030px]:hidden"
                  >
                    <div className="flex flex-col flex-1">

                      {/* Image section — heading overlaid at the bottom */}
                      <div className="relative h-[350px] md:h-[450px] lg:h-[600px] flex-shrink-0 overflow-hidden">
                        {featuredPost.image ? (
                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 1.2 }}
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="h-full w-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[1.5s]"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-[#161C2D] text-white/10 uppercase tracking-[1em] text-xs">
                            Fragment
                          </div>
                        )}

                        {/* Strong gradient so heading is readable */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#161C2D] via-[#161C2D]/60 to-transparent" />

                        {/* Category badge — top left */}
                        <div className="absolute left-8 top-8">
                          <div className="rounded-full bg-[#161C2D]/95 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-2xl backdrop-blur-md">
                            {featuredPost.category}
                          </div>
                        </div>

                        {/* Heading — bottom of image */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 pb-10">
                          <h2 className="text-[26px] min-[414px]:text-[30px] font-semibold leading-[1.1] tracking-[-0.05em] sm:text-[48px] text-white">
                            {featuredPost.title}
                          </h2>
                        </div>
                      </div>

                      {/* Content below image */}
                      <div className="p-6 pb-8 md:p-10 md:pb-10 flex flex-col gap-3">
                        <p className="text-base leading-relaxed text-[#161C2D]/50 font-medium line-clamp-3 pb-5">
                          {featuredPost.excerpt}
                        </p>

                        <button
                          onClick={() => navigate(`/blog/${featuredPost.id}`)}
                          className="inline-flex items-center gap-4 rounded-full bg-[#345261] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white w-fit hover:bg-[#2a3d45] transition-all duration-300 group cursor-pointer"
                        >
                          Read Strategy
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
                        </button>
                      </div>

                    </div>
                  </motion.article>
                )}

                {/* Mobile/Tablet view for featuredPost (<=1030px) */}
                {featuredPost && (
                  <motion.article
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0, duration: 0.8 }}
                    onClick={() => navigate(`/blog/${featuredPost.id}`)}
                    className="group cursor-pointer rounded-[32px] border border-[#161C2D]/5 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(213,164,107,0.15)] transition-all duration-700 min-[1031px]:hidden"
                  >
                    <div className="grid grid-cols-[140px_1fr] gap-8 items-center">
                      <div className="overflow-hidden rounded-2xl aspect-square">
                        {featuredPost.image ? (
                          <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="h-full w-full object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-[#161C2D]/5 text-[9px] font-bold tracking-[0.3em] text-white/20">ARCHIVE</div>
                        )}
                      </div>

                      <div className="pr-4">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#345261]">
                          {featuredPost.category}
                        </p>
                        <h3 className="line-clamp-2 text-[18px] md:text-[20px] font-semibold leading-tight text-[#161C2D] group-hover:translate-x-3 transition-transform duration-500">
                          {featuredPost.title}
                        </h3>
                        <div className="mt-5 flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.1em] text-[#161C2D]/25">
                          <span className="italic tracking-normal text-xs text-[#161C2D]/40">{featuredPost.date}</span>
                          <span>{featuredPost.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )}

                {featuredSmallLeft && (
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onClick={() => navigate(`/blog/${featuredSmallLeft.id}`)}
                    className="group cursor-pointer rounded-[32px] border border-[#161C2D]/5 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(213,164,107,0.15)] transition-all duration-700"
                  >
                    <div className="grid grid-cols-[160px_1fr] gap-8 items-center">
                      <div className="overflow-hidden rounded-2xl aspect-square">
                        {featuredSmallLeft.image ? (
                          <img
                            src={featuredSmallLeft.image}
                            alt={featuredSmallLeft.title}
                            className="h-full w-full object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-[#161C2D]/5 text-[9px] font-bold tracking-[0.3em] text-[#161C2D]/20">ARCHIVE</div>
                        )}
                      </div>

                      <div className="pr-4">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#345261]">
                          {featuredSmallLeft.category}
                        </p>
                        <h3 className="line-clamp-2 text-[18px] md:text-[24px] font-semibold leading-tight text-[#161C2D] group-hover:translate-x-3 transition-transform duration-500">
                          {featuredSmallLeft.title}
                        </h3>
                        <div className="mt-5 flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.1em] text-[#161C2D]/25">
                          <span className="italic tracking-normal text-xs text-[#161C2D]/40">{featuredSmallLeft.date}</span>
                          <span>{featuredSmallLeft.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )}

                {/* Secondary spotlight posts moved to left at 1030px below */}
                {spotlightPosts.slice(0, 2).map((post, index) => (
                  <motion.article
                    key={`${post.id}-left`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="group cursor-pointer rounded-[32px] border border-[#161C2D]/5 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(213,164,107,0.15)] transition-all duration-700 min-[1031px]:hidden"
                  >
                    <div className="grid grid-cols-[140px_1fr] gap-8 items-center">
                      <div className="overflow-hidden rounded-2xl aspect-square">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-[#161C2D]/5 text-[9px] font-bold tracking-[0.3em] text-white/20">ARCHIVE</div>
                        )}
                      </div>

                      <div className="pr-4">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#345261]">
                          {post.category}
                        </p>
                        <h3 className="line-clamp-2 text-[18px] md:text-[20px] font-semibold leading-tight text-[#161C2D] group-hover:translate-x-3 transition-transform duration-500">
                          {post.title}
                        </h3>
                        <div className="mt-5 flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.1em] text-[#161C2D]/25">
                          <span className="italic tracking-normal text-xs text-[#161C2D]/40">{post.date}</span>
                          <span>{post.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="flex flex-col gap-6 h-full">
                {spotlightPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.8 }}
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className={`group cursor-pointer rounded-[32px] border border-[#161C2D]/5 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(213,164,107,0.15)] transition-all duration-700 ${index < 2 ? "max-[1030px]:hidden" : ""}`}
                  >
                    <div className="grid grid-cols-[140px_1fr] gap-8 items-center">
                      <div className="overflow-hidden rounded-2xl aspect-square">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-[#161C2D]/5 text-[9px] font-bold tracking-[0.3em] text-white/20">ARCHIVE</div>
                        )}
                      </div>

                      <div className="pr-4">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#345261]">
                          {post.category}
                        </p>
                        <h3 className="line-clamp-2 text-[18px] md:text-[20px] font-semibold leading-tight text-[#161C2D] group-hover:translate-x-3 transition-transform duration-500">
                          {post.title}
                        </h3>
                        <div className="mt-5 flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.1em] text-[#161C2D]/25">
                          <span className="italic tracking-normal text-xs text-[#161C2D]/40">{post.date}</span>
                          <span>{post.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}

                <div className="flex-1 rounded-[36px] bg-[#161C2D] p-10 text-white relative overflow-hidden group border border-white/5 flex flex-col min-h-[400px]">
                  {/* Animated Background Orbs */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2],
                      x: [0, 20, 0],
                      y: [0, -20, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 h-64 w-64 bg-[#345261]/20 rounded-full blur-[100px]"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.1, 0.2, 0.1],
                      x: [0, -30, 0],
                      y: [0, 40, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 left-0 h-48 w-48 bg-[#345261]/30 rounded-full blur-[80px]"
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-10">
                      <div className="inline-flex items-center gap-3 rounded-full border border-[#345261]/20 bg-[#345261]/5 px-4 py-2 backdrop-blur-md">
                        <img src="/Web.jpg" className="h-4 w-4 rounded-full object-cover animate-pulse" alt="icon" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#345261]">
                          PREMIUM ETHOS
                        </span>
                      </div>
                      <TrendingUp size={20} className="text-white/10 group-hover:text-[#345261]/40 transition-colors duration-700" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold leading-[1.2] tracking-tight mb-8 font-serif italic text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
                      Where knowledge meets inspiration.
                    </h3>

                    <p className="text-white/40 text-base leading-relaxed font-medium mb-12 max-w-[90%]">
                      Join thousands of digital professionals staying updated with the latest trends, tips, and strategies.
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                      <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">The Syndicate Vision</span>
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="h-8 w-8 rounded-full border-2 border-[#0c1217] bg-[#161C2D]/5 backdrop-blur-sm" />
                          ))}
                        </div>
                        <span className="h-1 w-1 rounded-full bg-[#345261]/40 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Sweep Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Featured Pagination Controls */}
            {totalFeaturedPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-4">
                <button
                  disabled={featuredPage === 1}
                  onClick={() => setFeaturedPage(prev => Math.max(1, prev - 1))}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#6B6A66]/10 bg-[#161C2D] shadow-sm hover:border-[#345261]/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="rotate-180 text-white group-hover:text-[#345261]" size={20} />
                </button>

                <div className="flex gap-2">
                  {[...Array(totalFeaturedPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setFeaturedPage(i + 1)}
                      className={`h-2.5 rounded-full transition-all duration-500 ${featuredPage === i + 1 ? "w-10 bg-[#345261]" : "w-2.5 bg-[#161C2D]/10 hover:bg-[#161C2D]/20"
                        }`}
                    />
                  ))}
                </div>

                <button
                  disabled={featuredPage === totalFeaturedPages}
                  onClick={() => setFeaturedPage(prev => Math.min(totalFeaturedPages, prev + 1))}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#6B6A66]/10 bg-[#161C2D] shadow-sm hover:border-[#345261]/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="text-white group-hover:text-[#345261]" size={20} />
                </button>
              </div>
            )}
          </section>
        )}

        {/* Grid Archive section */}
        <section className="mx-auto mt-10 md:mt-16 max-w-[1440px] px-6 pb-10 md:pb-16 md:px-10 min-[1015px]:px-16">
          <div className="max-[413px]:mb-8 mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between border-b border-[#6B6A66]/5 pb-10">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#345261] mb-4">
                LATEST ARTICLES
              </p>
              <h2 className="text-[34px] font-semibold tracking-[-0.06em] text-[#161C2D] md:text-[64px] leading-[0.8]">
                Browse the <span className="italic font-serif text-[#345261]/80">Archive.</span>
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-[#161C2D]/40 font-medium">
              Discover more insights, tutorials, and industry perspectives from our growing collection of articles.
            </p>
          </div>

          {articlePosts.length > 0 ? (
            <AnimatePresence mode="popLayout">
              <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
                {articlePosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className={`group cursor-pointer overflow-hidden rounded-[40px] border border-[#161C2D]/5 bg-white shadow-[0_32px_80px_-16px_rgba(22,33,43,0.05)] hover:shadow-[0_45px_100px_rgba(213,164,107,0.15)] transition-all duration-700 hover:-translate-y-4 flex flex-col h-full ${index > 0 ? "max-[413px]:hidden" : ""}`}
                  >
                    <div className="relative overflow-hidden aspect-video">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-[#161C2D] text-white/5 uppercase tracking-[1em] text-[8px]">Archive Image</div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-at from-[#101920]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute left-6 top-6 rounded-full bg-[#345261]/95 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-2xl backdrop-blur-md transition-all group-hover:bg-[#345261] group-hover:text-white">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-8 flex-grow flex flex-col pb-0">
                      <div className="mb-6 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#161C2D]/30">
                        <span className="italic tracking-normal text-sm text-[#161C2D]/40 font-serif lowercase capitalize">{post.date}</span>
                        <span className="h-1 w-1 rounded-full bg-[#345261]/40" />
                        <span>{post.timeAgo}</span>
                      </div>

                      <h3 className="text-[24px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#161C2D] mb-4 group-hover:text-[#345261] transition-all duration-500">
                        {post.title}
                      </h3>

                      <p className="line-clamp-2 text-sm leading-relaxed text-[#161C2D]/50 mb-6 font-medium h-[50px]">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-auto border-t border-[#6B6A66]/5 px-8 pt-6 pb-8 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#161C2D]">Explore Entry</span>
                      <div className="h-12 w-12 rounded-full bg-[#161C2D]/5 flex items-center justify-center group-hover:bg-[#345261] group-hover:text-white transition-all transform group-hover:translate-x-2">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </AnimatePresence>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-[48px] border-[2px] border-dashed border-[#6B6A66]/10 bg-[#161C2D]/30 px-6 py-40 text-center"
            >
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#161C2D]/5 text-[#161C2D]/10">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-semibold text-[#161C2D] tracking-tight">No intelligence found.</h3>
              <p className="mt-4 text-[#161C2D]/30 font-medium">Refine your inquiry or explore the full archive.</p>
            </motion.div>
          )}
        </section>
      </div>

      {/* Newsletter section - COMPACT CINEMATIC BREAKOUT */}
      <section className="relative w-full py-24 overflow-hidden bg-[#161C2D] group">
        {/* Cinematic Auras */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-[#345261]/10 blur-[120px] mix-blend-screen"
        />


        <div className="mx-auto max-w-[1440px] px-6 md:px-10 min-[1095px]:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[2px] w-12 bg-[#345261]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#345261]">
                NEWSLETTER
              </p>
            </div>

            <h2 className="text-[44px] sm:text-[60px] font-semibold leading-[0.85] tracking-[-0.06em] text-white">
              Never Miss <br />
              <span className="italic font-serif text-white">an Update.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg text-white/40 leading-relaxed font-medium">
              Get the latest articles, design tips, and industry insights delivered
              directly to your inbox every two weeks.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 max-w-xl">
              <input
                type="email"
                placeholder="your@email.com"
                className="h-16 flex-1 rounded-2xl border border-white/5 bg-[#161C2D]/5 px-8 text-white placeholder:text-white/30 outline-none backdrop-blur-3xl focus:border-[#345261]/40 focus:bg-[#161C2D]/10 transition-all text-sm font-medium normal-case"
                style={{ textTransform: 'none' }}
              />
              <MagneticButton className="h-16 px-12 rounded-2xl bg-[#345261] text-white text-[11px] font-bold uppercase tracking-[3px] hover:bg-[#161C2D] transition-all duration-500 ease-out shadow-2xl hover:shadow-[0_0_40px_rgba(52,82,97,0.4)] hover:scale-105">
                Get Updates
              </MagneticButton>
            </div>
          </div>

          <div className="relative hidden lg:block w-[400px] h-[340px]">
            <motion.div
              style={{ rotateZ: 5 }}
              whileHover={{ rotateZ: 0, scale: 1.02 }}
              className="absolute inset-0 rounded-[48px] border border-white/10 bg-[#161C2D]/5 backdrop-blur-3xl overflow-hidden shadow-2xl transition-all duration-700"
            >
              <img
                src={img5}
                alt="Intelligence"
                className="h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161C2D] to-transparent opacity-40" />
            </motion.div>
            <img src="/Web.jpg" className="absolute -top-6 -right-6 h-12 w-12 rounded-full object-cover animate-pulse shadow-2xl border-2 border-white/10" alt="icon" />
          </div>
        </div>
      </section>

      <div className="relative z-10 -mt-20">
        <Support />
      </div>

    </div>
  );
}
