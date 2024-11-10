import React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavButtonProps {
  title: string;
  isDark?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ title, isDark = false }) => {
  const isNext = title === "Next";

  return (
    <button
      className={cn(
        "p-4 rounded-lg border flex flex-col",
        isDark
          ? "bg-transparent border-primary-accent border-surface-overlay/50"
          : "bg-white border-tertiary-inner",
      )}
    >
      <div className={cn("flex items-center", isNext && "self-end")}>
        {!isNext && (
          <ChevronLeft
            className={
              isDark ? "text-primary-accent" : "text-secondary-inverted"
            }
          />
        )}
        <p
          className={cn(
            "text-lg font-medium",
            isDark ? "text-primary-accent text-sm" : "text-secondary-inverted",
          )}
        >
          {title}
        </p>
        {isNext && (
          <ChevronRight
            className={
              isDark ? "text-primary-accent" : "text-secondary-inverted"
            }
          />
        )}
      </div>
      <p
        className={cn(
          "text-sm",
          isDark ? "text-neutral text-xs" : "text-disabled",
          isNext && "self-end",
        )}
      >
        Lorem ipsum dolor sit amet
      </p>
    </button>
  );
};

export default NavButton;
