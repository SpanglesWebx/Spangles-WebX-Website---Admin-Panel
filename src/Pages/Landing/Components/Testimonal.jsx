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
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#f6f8fb] px-6">
      <div className="mb-16 text-center">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6d7f8b]">
          Testimonials
        </p>
        <h2 className="text-[2.15rem] font-semibold tracking-[-0.02em] text-[#283742] md:text-[2.35rem]">
          What Our Clients Say
        </h2>
      </div>

      <div className="relative flex h-[470px] w-full max-w-[1060px] items-center justify-center">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 z-50 -translate-y-1/2 text-[#365266] transition-colors hover:text-[#213847]"
        >
          <ChevronLeft size={50} strokeWidth={1.5} />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 z-50 -translate-y-1/2 text-[#365266] transition-colors hover:text-[#213847]"
        >
          <ChevronRight size={50} strokeWidth={1.5} />
        </button>

        <div className="absolute bottom-[4px] left-1/2 h-[84px] w-[86%] -translate-x-1/2 rounded-[40px] bg-[rgba(54,35,97,0.18)] blur-[48px]" />
        <div className="absolute bottom-[10px] left-1/2 h-[304px] w-[70%] -translate-x-1/2 rounded-[14px] bg-white shadow-[0_14px_30px_rgba(34,36,74,0.06)]" />
        <div className="absolute bottom-[28px] left-1/2 h-[304px] w-[80%] -translate-x-1/2 rounded-[14px] bg-white shadow-[0_16px_34px_rgba(34,36,74,0.08)]" />

        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute left-1/2 top-[44px] flex h-[330px] w-[84%] max-w-[870px] -translate-x-1/2 overflow-visible rounded-[14px] bg-white shadow-[0_28px_70px_rgba(34,36,74,0.12)]"
            animate={{
              y: isAnimating
                ? direction === "next"
                  ? index === 0
                    ? -400
                    : (index - 1) * 20
                  : index === cards.length - 1
                    ? -400
                    : (index + 1) * 20
                : index * 20,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              zIndex: 100 - index,
            }}
          >
            <div className="absolute left-[48px] top-[-56px] h-[450px] w-[310px] overflow-hidden rounded-[14px] bg-[#d9dde0] shadow-[0_26px_50px_rgba(34,36,74,0.14)]">
              <img src={card.image} className="h-full w-full object-cover" />
            </div>

            <div className="ml-[390px] flex w-[calc(100%-390px)] flex-col justify-center px-14 py-10">
              <div className="mb-7 flex items-center gap-[6px] text-[19px] leading-none text-[#406074]">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span className="text-[#9ea8af]">&#9733;</span>
              </div>

              <h3 className="mb-6 text-[31px] font-medium leading-none text-[#385a70]">
                {card.name}
              </h3>

              <p className="mb-6 max-w-[470px] text-[17px] leading-[1.9] text-[#7f8088]">
                Ask agreed answer rather joy nature admire wisdom. Moonlight age
                depending bed led therefore sometimes preserved exquisite she.
                An fail up so shot leaf wise in. Minuter highest his arrived for
                put and. Hopes lived by rooms oh in no death house.
              </p>

              <span className="text-[17px] font-medium text-[#58748a]">
                - Medical Assistant
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
