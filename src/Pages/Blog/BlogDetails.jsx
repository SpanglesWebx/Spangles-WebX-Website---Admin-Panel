import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import Support from "../About/Components/Support";
import bannerImg from "../../assets/Service-banner.jpg";

const API_BASE = "http://localhost:5000";

const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date(dateString).toLocaleDateString("en-GB", options);
};

const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, ""); 
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blogs/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error("Error fetching blog details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white font-[Montserrat]">
        <div className="text-xl font-semibold text-[#345261]">Loading Story...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-white font-[Montserrat] px-4 text-center">
        <h2 className="text-3xl font-bold text-[#161C2D] mb-4">Story Not Found</h2>
        <button 
          onClick={() => navigate("/blog")}
          className="mt-4 rounded-[10px] bg-[#345261] px-6 py-3 font-bold uppercase text-white"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full max-[413px]:h-[300px]">
        <img
          src={`${API_BASE}${blog.image}`}
          alt={blog.title}
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
          <div className="flex items-center gap-2 mb-4">
             <button 
              onClick={() => navigate("/blog")}
              className="flex items-center gap-1 font-[Montserrat] text-[13px] font-bold uppercase tracking-[1px] hover:underline"
            >
              <ArrowLeft size={16} /> Back to Insights
            </button>
          </div>
          
          <h1
            className="mt-2 font-[Montserrat] text-[48px] font-semibold leading-[56px]
            max-[1024px]:text-[40px] max-[1024px]:leading-[48px]
            max-[768px]:text-[32px] max-[768px]:leading-[40px]
            max-[413px]:text-[24px] max-[413px]:leading-[32px]"
          >
            {blog.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-5 text-white/90">
            <span className="inline-flex items-center gap-2 font-[Montserrat] text-[13px] font-semibold uppercase tracking-[1.3px]">
              <CalendarDays className="h-4 w-4" />
              {formatDate(blog.createdAt)}
            </span>
            <span className="inline-flex items-center gap-2 font-[Montserrat] text-[13px] font-semibold uppercase tracking-[1.3px]">
              <Clock3 className="h-4 w-4" />
              {calculateReadTime(blog.content)}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="px-40 py-20 max-[413px]:py-12">
        <div 
          className="prose prose-lg max-w-none font-[Montserrat] text-[#6B6A66] leading-relaxed
          prose-headings:text-[#161C2D] prose-headings:font-semibold
          prose-p:mb-6 prose-strong:text-[#161C2D]
          [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6
          [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-6
          [&>img]:rounded-xl [&>img]:my-8 [&>img]:mx-auto"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        <div className="mt-16 pt-8 border-t border-[#E1E7EB] flex justify-between items-center max-[413px]:flex-col max-[413px]:gap-6">
           <div className="flex flex-col">
              <span className="text-[14px] font-bold uppercase tracking-[1.5px] text-[#395563] mb-1">Spread the word</span>
              <p className="text-[14px] text-[#6B6A66]">Liked this story? share it with your network.</p>
           </div>
           
           <button 
             onClick={() => navigate("/blog")}
             className="inline-flex items-center gap-2 rounded-[10px] bg-[#345261] px-6 py-4 font-[Montserrat] text-[12px] font-bold uppercase tracking-[1.5px] text-white hover:opacity-90 transition-opacity"
           >
             Read More Stories
             <ArrowRight className="h-4 w-4" size={16} />
           </button>
        </div>
      </section>

      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
}

function ArrowRight({ size = 24, className }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
