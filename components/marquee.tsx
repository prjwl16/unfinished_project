"use client";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  direction?: "up" | "down";
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = "up",
  className = "",
}) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setScrollHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  const duration = Math.max(scrollHeight * 0.01, 7.5);

  return (
    <div 
      className={cn(
        "relative flex-1 overflow-hidden md:max-w-fit",
        className
      )}
      style={{ willChange: 'transform' }}
    >
      <div
        ref={contentRef}
        className="flex flex-col space-y-4"
        style={{
          animation: `scroll${direction === "up" ? "Up" : "Down"} ${duration}s linear infinite`,
          // Start with an offset
          transform: direction === "up" ? "translateY(-10%)" : "translateY(-23.33%)"
        }}
      >
        {children}
        {/* Duplicated items for seamless loop */}
        {children}
        {children}
      </div>

      <style jsx global>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(-10%);
          }
          100% {
            transform: translateY(-43.33%);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(-43.33%);
          }
          100% {
            transform: translateY(-10%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .flex-col {
            animation-duration: 0s !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;