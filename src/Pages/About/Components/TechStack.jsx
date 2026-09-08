import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// SVG Logos for the 18 Technologies
const techItems = [
  {
    name: "React",
    icon: (
      <svg className="w-7 h-7" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="86" fill="black" stroke="white" strokeWidth="4" />
        <path
          d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3835L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
          fill="url(#nextjs-paint0)"
        />
        <rect x="115" y="54" width="12" height="72" fill="url(#nextjs-paint1)" />
        <defs>
          <linearGradient id="nextjs-paint0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nextjs-paint1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.287 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.287-1.624C10.336 13.382 8.975 12 6.001 12z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32">
        <path
          fill="#539E43"
          d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5zm10.7 20.7L16 29.4l-10.7-6.2v-12L16 4.9l10.7 6.3v12z"
        />
        <path
          fill="#539E43"
          d="M16 8.2c-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8-3.5-7.8-7.8-7.8zm0 13.5c-3.1 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7 5.7 2.6 5.7 5.7-2.6 5.7-5.7 5.7z"
        />
      </svg>
    ),
  },
  {
    name: "Flutter",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <path fill="#02569B" d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37z" />
        <path fill="#0175C2" d="M14.286 10.828L7.057 18.06l3.7 3.7 10.929-10.932h-7.4z" />
        <path fill="#29B6F6" d="M10.757 21.76l3.529 3.526h7.4l-7.229-7.228-3.7 3.702z" />
      </svg>
    ),
  },
  {
    name: "React Native",
    icon: (
      <svg className="w-7 h-7" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="1.2" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "PHP",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="11.5" ry="7.5" fill="#777BB4" />
        <text
          x="12"
          y="15"
          textAnchor="middle"
          fontSize="9"
          fontWeight="bold"
          fill="#FFFFFF"
          fontFamily="system-ui, sans-serif"
        >
          php
        </text>
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <path
          fill="#3776AB"
          d="M11.914 0C5.584 0 5.965 2.747 5.965 2.747l.006 2.846h6.05v.854H3.774S0 5.992 0 12.338c0 6.347 3.297 6.115 3.297 6.115l1.967-.001v-2.76s-.108-3.298 3.242-3.298h5.568s3.134.053 3.134-3.083V3.134S17.65 0 11.914 0zm-1.74 1.84a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z"
        />
        <path
          fill="#FFD43B"
          d="M12.086 24c6.33 0 5.95-2.747 5.95-2.747l-.007-2.846h-6.05v-.854h8.248s3.774.455 3.774-5.891c0-6.346-3.297-6.115-3.297-6.115l-1.967.001v2.76s.108 3.298-3.242 3.298H9.983s-3.134-.053-3.134 3.083v6.208S6.35 24 12.086 24zm1.74-1.84a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z"
        />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <path
          fill="#13AA52"
          d="M12.022 0S8.43 4.29 8.43 11.23c0 4.674 2.76 8.528 3.592 9.605.138.178.267.332.378.468.04.05.074.09.1.123.014.017.024.03.029.036l.006.007s.002.002.002.002v.001c-.001 0 .211-.274.515-.694 1.056-1.464 3.516-5.32 3.516-9.548C16.568 4.29 12.022 0 12.022 0z"
        />
        <path
          fill="#00684A"
          d="M12.022 0v21.472c.04.05.074.09.1.123.014.017.024.03.029.036l.006.007s.002.002.002.002v.001c-.001 0 .211-.274.515-.694 1.056-1.464 3.516-5.32 3.516-9.548C16.568 4.29 12.022 0 12.022 0z"
        />
        <path
          fill="#C4C4C4"
          d="M11.667 21.658c-.378.43-.655.776-.655.776s.395-.12 1.01-.582v-.194z"
        />
      </svg>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <path
          fill="#00758F"
          d="M12.535 2.148c-.61-.005-1.22.02-1.823.078-4.47.432-8.08 3.65-8.59 8.08-.57 4.96 2.82 9.38 7.78 9.95 4.96.57 9.38-2.82 9.95-7.78.36-3.14-1.02-6.19-3.48-7.98-.98-.71-2.45-1.52-3.837-2.348z"
        />
        <path
          fill="#F29111"
          d="M15.42 12.55c-.53.07-1.07.13-1.61.18.32-.48.67-.94 1.05-1.38.19.4.38.8.56 1.2z"
        />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <path
          fill="#336791"
          d="M11.968 0C5.358 0 0 5.358 0 11.968c0 6.61 5.358 11.968 11.968 11.968 6.61 0 11.968-5.358 11.968-11.968C23.936 5.358 18.578 0 11.968 0zm.04 2.87c2.61 0 4.87 1.27 6.27 3.23-.42.06-.88.16-1.39.29-1.28-1.5-3.08-2.44-5.06-2.44-.3 0-.6.03-.89.07.35-.74.67-1.15 1.07-1.15zm-2.8 1.4c-.23.49-.44 1.05-.62 1.68-1.92.79-3.32 2.5-3.66 4.58-.29-.46-.48-.99-.54-1.56.57-2.18 2.45-3.9 4.82-4.7z"
        />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <path
          fill="#2496ED"
          d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm0 2.714h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.186v1.887c0 .102.082.185.185.185zm-2.954 0h2.119a.186.186 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H8.075a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm0-2.714h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H8.075a.185.185 0 0 0-.185.185v1.888c0 .102.083.186.185.186zm-2.955 2.714h2.119a.186.186 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.12a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185z"
        />
        <path
          fill="#2496ED"
          d="M23.79 10.79c-.443-.314-1.428-.485-2.45-.198-.17-.468-.45-.886-.82-1.222l-.58-.518-.458.629c-.642.88-1.04 1.954-1.157 3.093h-.62c-.378 0-4.04-.08-7.397 1.99-1.928 1.189-3.15 3.08-3.15 4.83 0 3.328 3.35 4.596 8.35 4.596 6.012 0 8.492-3.32 8.492-5.76 0-1.89-1.08-3.56-2.21-4.44h.01a6.39 6.39 0 0 0 1.99-3z"
        />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <path
          fill="#232F3E"
          d="M6.22 8.94c0-.77.58-1.43 1.34-1.43.68 0 1.25.5 1.32 1.18l.02.25v2.87h-.79v-.74c-.31.5-.91.82-1.57.82-1.22 0-2.02-.87-2.02-2.14 0-1.34.87-2.17 2.1-2.17.65 0 1.22.31 1.5.8l.09-.72h.74v4.06c0 1.05-.72 1.63-1.88 1.63-.91 0-1.63-.39-1.85-.98l.74-.35c.16.4.63.66 1.14.66.72 0 1.1-.38 1.1-.99v-.53h-.04c-.3.45-.85.74-1.5.74-1.25 0-2.05-.88-2.05-2.16s.8-2.16 2.05-2.16c.65 0 1.2.29 1.5.74h.04v-.66H6.22v1.94zm2.68 0c0-.82-.6-1.47-1.38-1.47-.78 0-1.38.65-1.38 1.47s.6 1.47 1.38 1.47c.78 0 1.38-.65 1.38-1.47zm8.39-2.22l-1.42 5.09-1.34-4.52h-.82l-1.33 4.52-1.42-5.09h-.87l1.83 6.09h.82l1.37-4.57 1.37 4.57h.82l1.83-6.09h-.87zm3.17 4.88c-.64 0-1.07-.3-1.07-.79 0-.58.55-.83 1.34-.98l.7-.13v.55c0 .76-.41 1.35-.97 1.35zm1.75-2.78c-.28-.31-.76-.49-1.33-.49-.97 0-1.6.53-1.6 1.35 0 1.03.85 1.28 1.83 1.46.6.11.83.25.83.56 0 .37-.36.63-.93.63-.67 0-1.12-.3-1.28-.79l-.75.33c.25.75.92 1.19 1.99 1.19 1.11 0 1.77-.57 1.77-1.43 0-.96-.75-1.28-1.77-1.47-.63-.12-.89-.25-.89-.55 0-.35.34-.58.83-.58.52 0 .93.21 1.16.59l.71-.4z"
        />
        <path
          fill="#FF9900"
          d="M18.97 18.06c-2.45 1.81-6 2.76-9.05 2.76-4.28 0-8.14-1.57-11.05-4.2-.23-.21-.03-.49.25-.33 3.12 1.81 7 2.89 10.99 2.89 2.71 0 5.86-.71 8.73-2.19.44-.23.82.26.13.67zm1.18-.55c-.31-.4-.68-.88-1.48-1.06-.27-.06-.52.14-.46.41.21.96.96 2.37 1.37 2.92.15.2.39.14.41-.1.08-.73.08-1.47.16-2.17z"
        />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <path
          fill="#EA4335"
          d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
        />
        <path
          fill="#4285F4"
          d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.6.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"
        />
        <path
          fill="#FBBC05"
          d="M12 6c1.23 0 2.39.43 3.31 1.16l1.45-1.45C15.42 4.67 13.79 4 12 4 9.11 4 6.6 5.64 5.35 8.04l1.83 1.05C8.08 7.14 9.94 6 12 6z"
        />
        <path
          fill="#34A853"
          d="M6 18c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l-1.83-1.05C1.37 9.87 0 11.78 0 14c0 3.31 2.69 6 6 6h6v-2H6z"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#181717">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 38 57">
        <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
        <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
        <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
        <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
        <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
      </svg>
    ),
  },
];

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const total = techItems.length;

  return (
    <section className="relative bg-[#ffffff] pt-[70px] pb-[35px] max-lg:pt-[50px] max-lg:pb-[30px] max-md:pt-[40px] max-md:pb-[25px] max-sm:pt-[30px] max-sm:pb-[20px] px-[100px] max-xl:px-[60px] max-lg:px-[40px] max-md:px-6 max-sm:px-4 max-[413px]:px-3.5 overflow-hidden font-montserrat">
      {/* Embedded CSS for smooth hardware-accelerated clockwise orbit & counter-rotation */}
      <style>{`
        @keyframes orbitClockwise {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes counterClockwise {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        .tech-orbit-spin {
          animation: orbitClockwise 40s linear infinite;
          animation-delay: 1.4s;
          animation-fill-mode: both;
          transform: translate3d(0, 0, 0);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          backface-visibility: hidden;
          will-change: transform;
        }
        .tech-counter-spin {
          animation: counterClockwise 40s linear infinite;
          animation-delay: 1.4s;
          animation-fill-mode: both;
          transform: translate3d(0, 0, 0);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          backface-visibility: hidden;
          will-change: transform;
        }
        .orbit-wrapper:hover .tech-orbit-spin,
        .orbit-wrapper:hover .tech-counter-spin {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 max-xl:gap-8 max-lg:gap-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 max-w-[600px] max-lg:max-w-full text-left max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center"
        >
          <div className="mb-4 inline-block rounded-[10px] bg-gray-200 px-3.5 py-2 text-center font-montserrat text-[14px] max-md:text-[13px] max-sm:text-[12px] font-bold uppercase leading-[18px] text-[#395563] max-[413px]:mb-3 max-[413px]:px-3 max-[413px]:py-1.5">
            Our Technology Stack
          </div>

          <h2 className="font-montserrat font-bold text-[40px] min-[1400px]:text-[44px] leading-[48px] min-[1400px]:leading-[52px] max-xl:text-[34px] max-xl:leading-[42px] max-lg:text-[30px] max-lg:leading-[38px] max-md:text-[26px] max-md:leading-[34px] max-sm:text-[22px] max-sm:leading-[28px] text-[#111827]">
            Build With <br className="hidden sm:block" />
            <span className="text-[#395563] whitespace-normal sm:whitespace-nowrap">
              Future-Ready Technologies.
            </span>
          </h2>

          <p className="mt-5 text-[#6B7280] font-montserrat text-[16px] leading-[28px] max-lg:text-[15px] max-lg:leading-[26px] max-md:text-[14px] max-md:leading-[24px] max-sm:text-[13px] max-sm:leading-[22px] max-lg:max-w-[700px]">
            We leverage modern and reliable technologies to deliver secure,
            scalable, high-performance, and future-ready digital solutions. Our
            approach focuses on efficient development, seamless integration,
            strong performance, and long-term flexibility to meet evolving
            business needs.
          </p>

          <div className="mt-8 max-md:mt-6 max-[413px]:w-full">
            <Link
              to="/contact#contact-form"
              className="group cursor-pointer bg-[#395563] hover:bg-[#2f4650] text-white font-montserrat font-bold text-[12px] max-sm:text-[11px] leading-[18px] tracking-[0px] uppercase text-center align-middle px-[25px] py-[17px] max-md:px-[20px] max-md:py-[14px] rounded-[10px] inline-flex items-center justify-center gap-2.5 whitespace-nowrap transition max-[413px]:w-full"
            >
              <span>BOOK FREE CONSULTATION</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 max-[413px]:w-[12px] max-[413px]:h-[12px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE: CLOCKWISE ROTATING TECH STACK ORBIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="orbit-wrapper flex-1 relative flex items-center justify-center w-full max-w-[620px] aspect-square max-xl:max-w-[560px] max-lg:max-w-[500px] max-md:max-w-[390px] max-sm:max-w-[330px] max-[380px]:max-w-[290px] max-lg:mt-4"
        >
          {/* ROTATING ORBIT CONTAINER (Continuous Clockwise Animation) */}
          <div className="tech-orbit-spin absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
            {/* Background Concentric Circular Lines & Connection Dots */}
            <motion.svg
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 600"
            >
              {/* Outer Orbit Circle */}
              <circle
                cx="300"
                cy="300"
                r="230"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity="0.8"
              />
              {/* Middle Orbit Circle */}
              <circle
                cx="300"
                cy="300"
                r="170"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1"
                strokeDasharray="3 5"
                opacity="0.6"
              />
              {/* Inner Glow Circle */}
              <circle
                cx="300"
                cy="300"
                r="120"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                opacity="0.5"
              />

              {/* Radial Connector Lines and Dots */}
              {techItems.map((_, i) => {
                const angle = (i * 2 * Math.PI) / total - Math.PI / 2;
                const x1 = 300 + 115 * Math.cos(angle);
                const y1 = 300 + 115 * Math.sin(angle);
                const x2 = 300 + 230 * Math.cos(angle);
                const y2 = 300 + 230 * Math.sin(angle);
                const midX = 300 + 170 * Math.cos(angle);
                const midY = 300 + 170 * Math.sin(angle);

                return (
                  <g key={i}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#CBD5E1"
                      strokeWidth="1"
                      strokeDasharray="2 3"
                      opacity="0.7"
                    />
                    {/* Node connection dot */}
                    <circle cx={midX} cy={midY} r="2.5" fill="#395563" opacity="0.85" />
                  </g>
                );
              })}
            </motion.svg>

            {/* 16 TECH LOGO CARDS IN CLOCKWISE CIRCULAR ORBIT WITH ENTRANCE SPREAD */}
            {techItems.map((tech, i) => {
              const angle = (i * 2 * Math.PI) / total - Math.PI / 2;
              const startPercentX = 50 + 16 * Math.cos(angle);
              const startPercentY = 50 + 16 * Math.sin(angle);
              const endPercentX = 50 + 39 * Math.cos(angle);
              const endPercentY = 50 + 39 * Math.sin(angle);

              const isHovered = hoveredTech === tech.name;

              return (
                <motion.div
                  key={tech.name}
                  initial={{
                    left: `${startPercentX}%`,
                    top: `${startPercentY}%`,
                    x: "-50%",
                    y: "-50%",
                    scale: 0.2,
                    opacity: 0,
                  }}
                  whileInView={{
                    left: `${endPercentX}%`,
                    top: `${endPercentY}%`,
                    x: "-50%",
                    y: "-50%",
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.85,
                    delay: 0.15 + (i * 0.04),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className="absolute z-20 flex flex-col items-center justify-center pointer-events-auto cursor-pointer"
                >
                  {/* Counter-Clockwise Rotation so logo and text remain upright */}
                  <div className="tech-counter-spin flex flex-col items-center justify-center group">
                    {/* Logo Box */}
                    <div
                      className={`w-[56px] h-[56px] max-xl:w-[50px] max-xl:h-[50px] max-lg:w-[46px] max-lg:h-[46px] max-md:w-[36px] max-md:h-[36px] max-sm:w-[28px] max-sm:h-[28px] max-[380px]:w-[24px] max-[380px]:h-[24px] rounded-[14px] max-lg:rounded-[12px] max-md:rounded-[9px] max-sm:rounded-[7px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center p-2 max-md:p-1.5 max-sm:p-1 transition-all duration-300 [&>svg]:w-7 [&>svg]:h-7 max-xl:[&>svg]:w-6 max-xl:[&>svg]:h-6 max-lg:[&>svg]:w-5.5 max-lg:[&>svg]:h-5.5 max-md:[&>svg]:w-4.5 max-md:[&>svg]:h-4.5 max-sm:[&>svg]:w-3.5 max-sm:[&>svg]:h-3.5 max-[380px]:[&>svg]:w-3 max-[380px]:[&>svg]:h-3 ${
                        isHovered
                          ? "scale-108 border-[#395563]/40 shadow-[0_8px_20px_rgba(57,85,99,0.15)]"
                          : "hover:border-[#395563]/30"
                      }`}
                    >
                      {tech.icon}
                    </div>

                    {/* Tech Name Label */}
                    <span
                      className={`text-[10px] max-xl:text-[9px] max-lg:text-[8.5px] max-md:text-[7.5px] max-sm:text-[6px] max-[380px]:text-[5px] font-semibold font-montserrat mt-1 max-sm:mt-0.5 bg-white border border-gray-100 px-1.5 max-sm:px-1 py-0.5 max-sm:py-0 rounded-full shadow-xs whitespace-nowrap transition-all duration-200 ${
                        isHovered
                          ? "text-[#395563] font-bold scale-105 shadow-sm border-[#395563]/30"
                          : "text-gray-700 group-hover:text-[#395563]"
                      }`}
                    >
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER 3D GLASS BUBBLE / SPHERE (Stationary) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[220px] h-[220px] max-xl:w-[200px] max-xl:h-[200px] max-lg:w-[180px] max-lg:h-[180px] max-md:w-[140px] max-md:h-[140px] max-sm:w-[115px] max-sm:h-[115px] max-[380px]:w-[95px] max-[380px]:h-[95px] rounded-full flex flex-col items-center justify-center text-center p-3 max-sm:p-2 bg-gradient-to-b from-white via-slate-50 to-white shadow-[0_20px_45px_rgba(57,85,99,0.12),inset_0_2px_10px_rgba(255,255,255,1),inset_0_-6px_16px_rgba(57,85,99,0.06)] border border-slate-200 select-none pointer-events-auto"
          >
            {/* Inner Ring Glow */}
            <div className="absolute inset-2 rounded-full border border-slate-300/40 pointer-events-none" />
            <div className="absolute top-2 left-6 right-6 h-6 rounded-full bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />

            <span className="font-montserrat font-bold text-[22px] max-lg:text-[19px] max-md:text-[15px] max-sm:text-[12px] max-[380px]:text-[10px] leading-tight text-[#1E293B]">
              Our
            </span>
            <span className="font-montserrat font-extrabold text-[28px] max-lg:text-[24px] max-md:text-[18px] max-sm:text-[14px] max-[380px]:text-[12px] leading-tight text-[#395563] my-0.5">
              Tech Stack
            </span>
            <div className="mt-1 text-[11px] max-lg:text-[10px] max-md:text-[8px] max-sm:text-[7px] max-[380px]:hidden font-medium text-[#64748B] font-montserrat leading-tight">
              <span>Modern Tools.</span>
              <br />
              <span>Modern Solutions.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
