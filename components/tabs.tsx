"use client";

import { Dispatch, SetStateAction } from "react";
import { MotionConfig, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  tabs: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  className?: string;
  isDark?: boolean;
  layoutId: string;
}

const Tabs: React.FC<Props> = ({
  tabs,
  activeTab,
  setActiveTab,
  className,
  isDark = false,
  layoutId,
}) => {
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
      <motion.ul
        layout
        className={cn("flex items-center space-x-3", className)}
      >
        {tabs.map((tab) => (
          <motion.li
            layout
            className={cn(
              "relative border border-transparent rounded-full cursor-pointer",
            )}
            tabIndex={0}
            key={tab}
            onClick={() => setActiveTab(tab)}
          >
            {activeTab === tab ? (
              <motion.div
                layoutId={layoutId}
                className="absolute inset-0 px-3 py-1.5 rounded-3xl border border-primary-accent"
              />
            ) : null}
            <span
              className={cn(
                "relative block text-sm px-3 py-1.5",
                isDark ? "text-white" : "text-secondary-inverted",
              )}
            >
              {tab}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </MotionConfig>
  );
};

export default Tabs;
