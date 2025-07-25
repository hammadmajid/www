import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-white/10 text-card-foreground flex h-9 w-full min-w-0 rounded-full border border-white/30 backdrop-blur-xl supports-[backdrop-filter]:bg-white/5 shadow-2xl shadow-black/20 relative overflow-hidden px-4 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/25 before:via-white/5 before:to-transparent before:pointer-events-none",
        "after:absolute after:inset-[1px] after:rounded-full after:bg-gradient-to-br after:from-white/15 after:via-transparent after:to-transparent after:pointer-events-none",
        "focus-visible:border-white/50 focus-visible:ring-white/30 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
