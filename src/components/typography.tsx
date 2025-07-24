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
        "prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6",
        "prose-h2:text-3xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-8",
        "prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6",
        "prose-h4:text-xl prose-h4:font-semibold prose-h4:mb-2 prose-h4:mt-4",

        // Paragraphs and text
        "prose-p:leading-7 prose-p:mb-4",
        "prose-lead:text-xl prose-lead:text-muted-foreground",

        // Lists
        "prose-ul:my-6 prose-ul:ml-6",
        "prose-ol:my-6 prose-ol:ml-6",
        "prose-li:mt-2",

        // Links
        "prose-a:font-medium prose-a:underline prose-a:underline-offset-4",
        "prose-a:text-primary hover:prose-a:text-primary/80",

        // Code
        "prose-code:relative prose-code:rounded prose-code:bg-secondary-foreground prose-code:px-[0.3rem] prose-code:py-[0.2rem]",
        "prose-code:font-mono prose-code:text-sm prose-code:font-semibold",

        // Pre/Code blocks
        "prose-pre:bg-secondary-foreground prose-pre:border prose-pre:rounded-lg prose-pre:p-4",
        "prose-pre:overflow-x-auto prose-pre:text-sm",

        // Blockquotes
        "prose-blockquote:border-l-2 prose-blockquote:border-border prose-blockquote:pl-6",
        "prose-blockquote:italic prose-blockquote:text-muted-foreground",

        // Tables
        "prose-table:w-full prose-table:border-collapse",
        "prose-th:border prose-th:border-border prose-th:bg-muted/50 prose-th:p-2 prose-th:text-left prose-th:font-semibold",
        "prose-td:border prose-td:border-border prose-td:p-2",

        // Images
        "prose-img:rounded-md prose-img:border",

        // HR
        "prose-hr:border-border",

        // Strong and emphasis
        "prose-strong:font-semibold",
        "prose-em:italic",

        // Max width and responsive
        "max-w-none",

        // Dark mode support
        "dark:prose-headings:text-foreground",
        "dark:prose-p:text-foreground",
        "dark:prose-strong:text-foreground",
        "dark:prose-code:text-foreground",
        "dark:prose-blockquote:text-muted-foreground",

        className,
      )}
    >
      {children}
    </div>
  )
}
