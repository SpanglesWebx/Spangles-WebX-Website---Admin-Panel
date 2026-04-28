import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    id: 1,
    name: "Becky Nelson",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  },
  {
    id: 2,
    name: "John Carter",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    id: 3,
    name: "Sarah Williams",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: 4,
    name: "Michael Smith",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: 5,
    name: "Emily Davis",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

export default function SmoothStack() {
  const [cards, setCards] = useState(data);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pauseTimeoutRef = useRef(null);

  const pauseAutoplay = (duration = 5000) => {
    setIsAutoPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoPaused(false);
      pauseTimeoutRef.current = null;
    }, duration);
  };

  const next = () => {
    if (isAnimating) return;

    setDirection("next");
    setIsAnimating(true);

    setTimeout(() => {
      setCards((prev) => {
        const arr = [...prev];
        const first = arr.shift();
        arr.push(first);
        return arr;
      });
      setIsAnimating(false);
    }, 500);
  };

  const prev = () => {
    if (isAnimating) return;

    pauseAutoplay();
    setDirection("prev");
    setIsAnimating(true);

    setTimeout(() => {
      setCards((prev) => {
        const arr = [...prev];
        const last = arr.pop();
        arr.unshift(last);
        return arr;
      });
      setIsAnimating(false);
    }, 500);
  };

  const nextRef = useRef(next);
  useEffect(() => {
    nextRef.current = next;
  }, [next]);

  useEffect(() => {
    if (isAutoPaused || isHovered) return undefined;

    const interval = setInterval(() => {
      nextRef.current();
    }, 2000);
    return () => clearInterval(interval);
  }, [isAutoPaused, isHovered]);

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#F4F7FA] px-6 min-[414px]:px-10 min-[1025px]:px-[80px] pt-16 pb-40 max-[1025px]:pb-20 max-[413px]:pb-10">
      {/* 🔝 TOP HEADING */}
      <div className="mb-6 min-[414px]:mb-10 min-[1025px]:mb-16 text-center">
        <p className="mb-3 font-montserrat text-[12px] min-[414px]:text-[13px] min-[1025px]:text-[14px] font-bold uppercase tracking-[1.43px] leading-[100%] text-[#395563] text-center">
          Testimonials
        </p>
        <h2 className="font-montserrat text-[24px] min-[414px]:text-[28px] min-[1025px]:text-[32px] font-semibold leading-[1.3] min-[414px]:leading-[1.4] min-[1025px]:leading-[42.3px] tracking-[-1.06px] text-[#161C2D] text-center">
          What Our Clients Say
        </h2>
      </div>

      <div
        className="relative flex h-[480px] min-[414px]:h-[480px] min-[1025px]:h-[480px] w-full max-w-[1100px] items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 🔘 LEFT (Desktop) */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-50 text-[#3b5566] hidden min-[414px]:block"
        >
          <ChevronLeft size={42} strokeWidth={1.5} />
        </button>

        {/* 🔘 RIGHT */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-50 text-[#3b5566] hidden min-[414px]:block"
        >
          <ChevronRight size={42} strokeWidth={1.5} />
        </button>

        {/* 🎴 MAIN STACK */}
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute left-1/2 top-[60px] flex flex-col min-[414px]:flex-row h-[280px] min-[414px]:h-[320px] min-[1025px]:h-[350px] w-[95%] min-[1025px]:w-[800px] rounded-xl bg-white shadow-[0px_20px_60px_0px_#2E213D14]"
            animate={{
              width:
                window.innerWidth < 414
                  ? index === 0
                    ? "100%"
                    : `calc(100% - ${index * 30}px)`
                  : "100%",
              maxWidth: index === 0 ? 850 : 850 - index * 50, // Matches original desktop proportions

              // ✅ perfectly centered
              x: "-50%",

              // ✅ depth effect (fixes visual imbalance)
              scale: 1 - index * 0.04,

              y: isAnimating
                ? direction === "next"
                  ? index === 0
                    ? -500
                    : (index - 1) * (window.innerWidth < 414 ? 20 : 40)
                  : index === cards.length - 1
                    ? -500
                    : (index + 1) * (window.innerWidth < 414 ? 20 : 40)
                : index * (window.innerWidth < 414 ? 20 : 40),

              opacity: index >= 3 ? 0 : 1 - index * 0.15,
            }}
            transition={{
              duration: 0.6, // 🔥 slower = smoother grow
              ease: "easeInOut",
            }}
            style={{
              zIndex: 100 - index,
            }}
          >
            {/* 🖼 IMAGE (FLOAT STYLE) */}
            {(index === 0 || (isAnimating && index === 1)) && (
              <div className="absolute left-6 min-[414px]:left-8 min-[1025px]:left-[40px] top-[-40px] min-[414px]:top-[-50px] min-[1025px]:top-[-60px] flex items-end gap-3 min-[414px]:block">
                <div className="w-[110px] min-[414px]:w-[200px] min-[1025px]:w-[300px] h-[130px] min-[414px]:h-[280px] min-[1025px]:h-[410px] overflow-hidden rounded-xl min-[1025px]:rounded-b-none shadow-lg min-[1025px]:shadow-none">
                  <img
                    src={card.image}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* ⭐ Mobile Stars */}
                <div className="mb-2 flex gap-1 text-[#3f5f73] text-[14px] min-[414px]:hidden whitespace-nowrap">
                  ★ ★ ★ ★ <span className="text-gray-300">★</span>
                </div>
              </div>
            )}

            {/* 📄 CONTENT */}
            <motion.div
              className="mt-22 min-[414px]:mt-0 min-[414px]:ml-[230px] min-[1025px]:ml-[340px] flex flex-col justify-center px-6 min-[1025px]:px-12 py-4 min-[1025px]:py-10"
              animate={{
                opacity: index === 0 ? 1 : isAnimating && index === 1 ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              {/* ⭐ STARS (Desktop Only) */}
              <div className="mb-3 min-[414px]:mb-4 min-[1025px]:mb-5 hidden min-[414px]:flex gap-1 text-[#3f5f73] text-[16px] min-[1025px]:text-[20px]">
                ★ ★ ★ ★ <span className="text-gray-300">★</span>
              </div>

              {/* 👤 NAME */}
              <h3 className="mb-2 min-[414px]:mb-3 min-[1025px]:mb-4 font-montserrat text-[20px] min-[414px]:text-[24px] min-[1025px]:text-[32px] font-medium leading-[100%] tracking-[-0.04em] capitalize text-[#345261]">
                {card.name}
              </h3>

              {/* 📝 TEXT */}
              <p className="mb-4 min-[350px]:mb-4 min-[1025px]:mb-5 font-montserrat text-[16px] leading-[24px] text-[#6B6A66] max-w-[350px]">
                Ask agreed answer rather joy nature admire wisdom. Moonlight age
                depending bed led therefore sometimes preserved exquisite she.
                An fail up so shot leaf wise in. Minuter highest his arrived for
                put and. Hopes lived by rooms oh in no death house.
              </p>

              {/* 💼 ROLE */}
              <span className="font-montserrat text-[14px] min-[414px]:text-[16px] min-[1025px]:text-[18px] font-normal leading-[100%] tracking-[0em] text-[#345261]">
                – Medical Assistant
              </span>
            </motion.div>
          </motion.div>
        ))}

        {/* 🔘 MOBILE CONTROLS (Bottom Right) */}
        <div className="absolute bottom-0 right-4 z-50 flex gap-6 min-[414px]:hidden">
          <button onClick={prev} className="text-[#3b5566]">
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>
          <button onClick={next} className="text-[#3b5566]">
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
