import React, { useState, useEffect } from "react";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Support from "../About/Components/Support";
import bannerImg from "../../assets/Service-banner.jpg";
import img5 from "../../assets/portfolio5.jpg";

const API_BASE = "http://localhost:5000";

const topics = [
  "UI Strategy",
  "Brand Storytelling",
  "Web Performance",
  "Mobile Experience",
];

const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, ""); // Remove HTML tags
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

const getExcerpt = (content, length = 150) => {
  const text = content.replace(/<[^>]*>/g, ""); // Remove HTML tags
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + "...";
};

const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date(dateString).toLocaleDateString("en-GB", options);
};

export default function Blog() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const disableActions = (e) => {
      // Disable right click
      if (e.type === "contextmenu") e.preventDefault();

      // Disable Ctrl+C, Ctrl+U, Ctrl+S, Ctrl+Shift+I
      if (
        (e.ctrlKey &&
          ["c", "u", "s", "a", "x"].includes(e.key.toLowerCase())) ||
        (e.ctrlKey &&
          e.shiftKey &&
          ["i", "j", "c"].includes(e.key.toLowerCase())) ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableActions);
    document.addEventListener("keydown", disableActions);

    return () => {
      document.removeEventListener("contextmenu", disableActions);
      document.removeEventListener("keydown", disableActions);
    };
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blogs`);
        const data = await res.json();

        const mappedPosts = data.map((blog) => ({
          id: blog._id,
          title: blog.title,
          excerpt: getExcerpt(blog.content),
          image: `${API_BASE}${blog.image}`,
          category: "Insights", // Default category
          date: formatDate(blog.createdAt),
          readTime: calculateReadTime(blog.content),
        }));

        setPosts(mappedPosts);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white font-[Montserrat]">
        <div className="text-xl font-semibold text-[#345261]">
          Loading Insights...
        </div>
      </div>
    );
  }

  if (!featuredPost) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-white font-[Montserrat] px-4 text-center">
        <h2 className="text-3xl font-bold text-[#161C2D] mb-4">
          No stories yet
        </h2>
        <p className="text-[#6B6A66] max-w-md">
          We're currently crafting new insights. Check back soon for the latest
          updates on design and technology.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 rounded-[10px] bg-[#345261] px-6 py-3 font-bold uppercase text-white hover:opacity-90 transition-opacity"
        >
          Refresh Feed
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-[360px] w-full max-[413px]:h-[300px]">
        <img
          src={bannerImg}
          alt="blog banner"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div
          className="absolute inset-0 flex flex-col justify-end px-[100px] pb-25 text-white
          max-[1024px]:px-10 max-[1024px]:pb-20
          max-[768px]:px-6 max-[768px]:pb-16
          max-[413px]:px-4 max-[413px]:pb-10
          min-[1024px]:max-[1200px]:px-[72px]"
        >
          <p className="font-[Montserrat] text-[14px] font-bold uppercase leading-[21px] tracking-[2.24px] max-[413px]:text-[12px]">
            Home / Blog
          </p>
          <h1
            className="mt-2 font-[Montserrat] text-[54px] font-semibold leading-[62px]
            max-[1024px]:text-[48px] max-[1024px]:leading-[56px]
            max-[768px]:text-[44px] max-[768px]:leading-[52px]
            max-[413px]:text-[28px] max-[413px]:leading-[32px]"
          >
            Insights & Blog
          </h1>
        </div>
      </div>

      <section
        className="border-b border-[#E5E5E5] bg-white px-[100px] py-[60px]
        max-[1400px]:px-[50px]
        max-[1024px]:px-10
        max-[768px]:px-6 max-[768px]:py-[50px]
        max-[413px]:px-4 max-[413px]:py-[40px]"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="group overflow-hidden rounded-[28px] border border-[#E1E7EB] bg-[#F4F7FA]">
            <div className="overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            <div className="p-8 max-[413px]:p-5">
              <span className="mb-4 inline-flex rounded-full bg-[#345261] px-4 py-2 font-[Montserrat] text-[11px] font-bold uppercase tracking-[1.8px] text-white">
                Featured Story
              </span>

              <h2 className="mb-4 max-w-[720px] font-[Montserrat] text-[38px] font-semibold leading-[46px] text-[#161C2D] max-[1024px]:text-[32px] max-[1024px]:leading-[40px] max-[413px]:text-[24px] max-[413px]:leading-[32px]">
                {featuredPost.title}
              </h2>

              <p className="mb-6 max-w-[760px] font-[Montserrat] text-[16px] leading-[24px] text-[#6B6A66] max-[413px]:text-[14px] max-[413px]:leading-[22px]">
                {featuredPost.excerpt}
              </p>

              <div className="mb-7 flex flex-wrap gap-5 text-[#395563]">
                <span className="inline-flex items-center gap-2 font-[Montserrat] text-[13px] font-semibold uppercase tracking-[1.3px]">
                  <CalendarDays className="h-4 w-4" />
                  {featuredPost.date}
                </span>
                <span className="inline-flex items-center gap-2 font-[Montserrat] text-[13px] font-semibold uppercase tracking-[1.3px]">
                  <Clock3 className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>

              <button
                type="button"
                onClick={() => navigate(`/blog/${featuredPost.id}`)}
                className="inline-flex items-center gap-2 rounded-[10px] bg-[#345261] px-6 py-4 font-[Montserrat] text-[12px] font-bold uppercase tracking-[1.5px] text-white hover:opacity-90 transition-opacity"
              >
                Read Article
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[24px] border border-[#E1E7EB] bg-white p-7">
              <p className="mb-3 font-[Montserrat] text-[14px] font-bold uppercase leading-[21px] tracking-[2.24px] text-[#395563] max-[413px]:text-[12px]">
                Editorial Note
              </p>
              <h3 className="mb-4 font-[Montserrat] text-[26px] font-semibold leading-[32px] text-[#161C2D] max-[413px]:text-[20px] max-[413px]:leading-[28px]">
                Same spacing system, fresher blog presentation
              </h3>
              <p className="font-[Montserrat] text-[15px] leading-[24px] text-[#6B6A66]">
                The page now matches the inner-page padding and heading rhythm,
                then layers in featured content, cleaner metadata, and more
                stylish cards.
              </p>
            </div>

            <div className="rounded-[24px] bg-[#345261] p-7 text-white">
              <p className="mb-3 font-[Montserrat] text-[14px] font-bold uppercase leading-[21px] tracking-[2.24px] text-[#D9E4EA] max-[413px]:text-[12px]">
                Trending Topics
              </p>
              <div className="flex flex-wrap gap-3">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 font-[Montserrat] text-[12px] font-semibold uppercase tracking-[1.2px]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px]">
              <img
                src={img5}
                alt="blog visual"
                className="h-[260px] w-full object-cover"
              />
            </div>
          </aside>
        </div>
      </section>

      <section
        className="bg-[#F4F7FA] px-[100px] py-[60px]
        max-[1400px]:px-[50px]
        max-[1024px]:px-10
        max-[768px]:px-6 max-[768px]:py-[50px]
        max-[413px]:px-4 max-[413px]:py-[40px]"
      >
        <div className="mb-8 flex items-end justify-between gap-4 max-[768px]:flex-col max-[768px]:items-start">
          <div>
            <p className="mb-2 font-[Montserrat] text-[14px] font-bold uppercase leading-[21px] tracking-[2.24px] text-[#395563] max-[413px]:text-[12px]">
              Latest Articles
            </p>
            <h2 className="font-[Montserrat] text-[32px] font-semibold leading-[42.3px] tracking-[-1.06px] text-[#161C2D] max-[413px]:text-[24px] max-[413px]:leading-[32px]">
              More from the blog
            </h2>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 font-[Montserrat] text-[12px] font-bold uppercase tracking-[1.6px] text-[#395563]"
          >
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-[24px] border border-[#DEE6EA] bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="mb-4 inline-flex rounded-full bg-[#F4F7FA] px-3 py-1.5 font-[Montserrat] text-[11px] font-bold uppercase tracking-[1.5px] text-[#395563]">
                  {post.category}
                </span>
                <h3 className="mb-3 font-[Montserrat] text-[24px] font-semibold leading-[30px] text-[#161C2D] max-[413px]:text-[20px] max-[413px]:leading-[26px]">
                  {post.title}
                </h3>
                <p className="mb-5 font-[Montserrat] text-[15px] leading-[24px] text-[#6B6A66]">
                  {post.excerpt}
                </p>

                <div className="mb-5 flex flex-wrap gap-4 text-[#6B6A66]">
                  <span className="inline-flex items-center gap-2 font-[Montserrat] text-[12px] font-semibold uppercase tracking-[1.2px]">
                    <CalendarDays className="h-4 w-4 text-[#395563]" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2 font-[Montserrat] text-[12px] font-semibold uppercase tracking-[1.2px]">
                    <Clock3 className="h-4 w-4 text-[#395563]" />
                    {post.readTime}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="inline-flex items-center gap-2 font-[Montserrat] text-[12px] font-bold uppercase tracking-[1.5px] text-[#395563] hover:opacity-80 transition-opacity"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
}
