import React from "react";
import { cn } from "@/lib/utils";

export const Pill = ({
  children,
  className,
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
} & React.HTMLAttributes<HTMLSpanElement>) => {
  const baseStyles =
    "relative px-2.5 py-1 font-medium text-sm text-center rounded-full";

  const variantStyles = {
    primary:
      "border-2 bg-gradient-to-b from-white border-primary-accent from-primary-accent to-primary-accent text-black",
    secondary:
      "bg-gradient-to-b from-transparent to-transparent border border-primary-accent text-white text-center",
    outline: "border border-primary-accent text-surface-light",
    ghost: "bg-transparent text-white border border-transparent",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};
