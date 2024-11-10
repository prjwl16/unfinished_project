"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const isActive = active === item;

  return (
    <div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          "cursor-pointer text-white hover:opacity-[0.9] flex items-center gap-1.5 px-3 py-4",
          isActive && "text-primary-accent",
        )}
      >
        {item}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-white transition-transform duration-500",
            isActive ? "rotate-180 text-primary-accent" : "rotate-0",
          )}
        />
      </motion.p>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.2rem)] left-0">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="-mt-1 bg-secondary-inverted border border-surface-overlay rounded-2xl overflow-hidden"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  useEffect(() => {
    setActive(null); // resets the state on path change
  }, [pathname, setActive]);

  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full flex items-center justify-center px-4 py-2.5"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex gap-4">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-base font-normal mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, className, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className={cn("text-white hover:text-primary-accent", className)}
    >
      {children}
    </Link>
  );
};
