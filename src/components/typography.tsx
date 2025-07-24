import type React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "base" | "lg" | "xl"
  variant?: "default" | "slate" | "gray" | "zinc" | "neutral" | "stone"
}

export default function Typography({ children, className, size = "base", variant = "default" }: TypographyProps) {
  const sizeClasses = {
    sm: "prose-sm",
    base: "prose",
    lg: "prose-lg",
    xl: "prose-xl",
  }

  const variantClasses = {
    default: "",
    slate: "prose-slate",
    gray: "prose-gray",
    zinc: "prose-zinc",
    neutral: "prose-neutral",
    stone: "prose-stone",
  }

  return (
    <div
      className={cn(
        // Base prose styles
        sizeClasses[size],
        variantClasses[variant],

        // Headings
        "prose-headings:text-primary/95 prose-headings:text-balance prose-headings:tracking-tight",
        "prose-h1:scroll-m-20 prose-h1:text-4xl prose-h1:font-extrabold",
        className,
      )}
    >
      {children}
    </div>
  )
}
