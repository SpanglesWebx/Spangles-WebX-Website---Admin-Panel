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
];

export default function SmoothStack() {
  const [cards, setCards] = useState(data);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [isAutoPaused, setIsAutoPaused] = useState(false);
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
    if (isAutoPaused) return undefined;

    const interval = setInterval(() => {
      nextRef.current();
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPaused]);

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#F4F7FA] px-[200px] pt-15 pb-40">
      {/* 🔝 TOP HEADING */}
      <div className="mb-16 text-center">
        <p className="mb-3 font-montserrat text-[14px] font-bold uppercase tracking-[1.43px] leading-[100%] text-[#395563] text-center">
          Testimonials
        </p>
        <h2 className="font-montserrat text-[32px] font-semibold leading-[42.3px] tracking-[-1.06px] text-[#161C2D] text-center">
          What Our Clients Say
        </h2>
      </div>

      <div className="relative flex h-[480px] w-full max-w-[1100px] items-center justify-center">
        {/* 🔘 LEFT */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-50 text-[#3b5566]"
        >
          <ChevronLeft size={42} strokeWidth={1.5} />
        </button>

        {/* 🔘 RIGHT */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-50 text-[#3b5566]"
        >
          <ChevronRight size={42} strokeWidth={1.5} />
        </button>

        {/* 🎴 MAIN STACK */}
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute left-1/2 top-[60px] flex h-[450px] w-[850px] rounded-xl bg-white shadow-[0px_20px_60px_0px_#2E213D14]"
            animate={{
              width: index === 0 ? "85%" : `calc(85% - ${index * 50}px)`,
              maxWidth: index === 0 ? 900 : 900 - index * 50,

              // ✅ perfectly centered
              x: "-50%",

              // ✅ depth effect (fixes visual imbalance)
              scale: 1 - index * 0.04,

              y: isAnimating
                ? direction === "next"
                  ? index === 0
                    ? -400
                    : (index - 1) * 40
                  : index === cards.length - 1
                    ? -400
                    : (index + 1) * 40
                : index * 40,

              opacity: 1 - index * 0.15,
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
              <div className="absolute left-[40px] top-[-60px] w-[300px] h-[510px] overflow-hidden rounded-t-xl rounded-b-none">
                <img src={card.image} className="h-full w-full object-cover" />
              </div>
            )}

            {/* 📄 CONTENT */}
            <motion.div
              className="ml-[340px] flex flex-col justify-center px-12 py-10"
              animate={{
                opacity: index === 0 ? 1 : isAnimating && index === 1 ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              {/* ⭐ STARS */}
              <div className="mb-5 flex gap-1 text-[#3f5f73] text-[20px]">
                ★ ★ ★ ★ <span className="text-gray-300">★</span>
              </div>

              {/* 👤 NAME */}
              <h3 className="mb-4 font-montserrat text-[32px] font-medium leading-[100%] tracking-[-0.04em] capitalize text-[#345261]">
                {card.name}
              </h3>

              {/* 📝 TEXT */}
              <p className="mb-5 max-w-[480px] font-montserrat text-[18px] font-normal leading-[32px] tracking-[0em] text-[#6B6A66]">
                Ask agreed answer rather joy nature admire wisdom. Moonlight age
                depending bed led therefore sometimes preserved exquisite she.
                An fail up so shot leaf wise in. Minuter highest his arrived for
                put and. Hopes lived by rooms oh in no death house.
              </p>

              {/* 💼 ROLE */}
             <span className="font-montserrat text-[18px] font-normal leading-[100%] tracking-[0em] text-[#345261]">
  – Medical Assistant
</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
