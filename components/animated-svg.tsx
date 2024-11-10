"use client";
import { motion } from "framer-motion";

interface AnimatedSvgProps {
  className?: string;
}

const AnimatedSvg: React.FC<AnimatedSvgProps> = ({ className }) => {
  return (
    <svg
      width="273"
      height="302"
      viewBox="0 0 273 302"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Original static line */}
      <path
        d="M-61.7646 287.301L272.168 -46.1641"
        stroke="url(#paint0_linear_439_32481)"
        strokeOpacity="0.2"
      />

      {/* Original curved path */}
      <path
        d="M150.398 75.1367C144.31 81.6936 135.036 99.2099 146.652 116.82C156.331 125.094 170.725 147.075 150.867 168.807C131.009 190.538 56.4162 264.038 21.6023 298.071C16.1382 302.13 2.8683 309.03 -6.49869 304.16C-18.2074 298.071 -44.435 267.628 -63.1689 290.109"
        stroke="white"
        strokeOpacity="0.2"
      />

      {/* First beam */}
      <motion.path
        d="M-61.7646 287.301L272.168 -46.1641"
        stroke="url(#paint1_linear_439_32481)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: 0
        }}
      />

      {/* Second beam */}
      <motion.path
        d="M-63.1689 290.109C-44.435 267.628 -18.2074 298.071 -6.49869 304.16C2.8683 309.03 16.1382 302.13 21.6023 298.071C56.4162 264.038 131.009 190.538 150.867 168.807C170.725 147.075 156.331 125.094 146.652 116.82C135.036 99.2099 144.31 81.6936 150.398 75.1367"
        stroke="url(#paint2_linear_439_32481)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: 0
        }}
      />

      <defs>
        <linearGradient
          id="paint0_linear_439_32481"
          x1="291.5"
          y1="-35.2926"
          x2="105.202"
          y2="287.301"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.372454" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_439_32481"
          x1="-61.7646"
          y1="287.301"
          x2="272.168"
          y2="-46.1641"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA9D5" stopOpacity="0" />
          <stop offset="0.555" stopColor="#FFA9D5" />
          <stop offset="0.975" stopColor="#D1BDE2" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_439_32481"
          x1="-63.1689"
          y1="290.109"
          x2="150.398"
          y2="75.1367"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA9D5" stopOpacity="0" />
          <stop offset="0.555" stopColor="#FFA9D5" />
          <stop offset="0.975" stopColor="#D1BDE2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AnimatedSvg;