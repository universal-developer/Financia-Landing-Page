import React from "react";
import { cn } from "@/lib/utils";

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark";
}

export const Pill: React.FC<PillProps> = ({
  className,
  variant = "dark",
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase inline-block",
        variant === "dark"
          ? "bg-[var(--ui-dark-700)] text-muted-foreground"
          : "bg-[#E5EDFA] text-[#1F52C0]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
