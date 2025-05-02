import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] text-[15px] leading-[20px] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
  {
    variants: {
      variant: {
        default: "bg-[#2A2D33] text-[#F2F9FE] hover:bg-[#35383F]",
        secondary: "bg-[#3182F6] text-white hover:bg-[#5595f8]",
        outline:
          "border border-[rgba(255,255,255,0.08)] text-[#F2F9FE] bg-transparent hover:bg-[rgba(255,255,255,0.04)]",
        ghost: "text-[#F2F9FE] hover:bg-[rgba(255,255,255,0.04)]",
        link: "text-[#3182F6] underline-offset-4 hover:underline",
      },
      size: {
        default: "px-[18px] py-[12px]",
        sm: "px-[14px] py-[8px] text-[14px]",
        lg: "px-[22px] py-[14px]",
        icon: "p-2 size-[40px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
