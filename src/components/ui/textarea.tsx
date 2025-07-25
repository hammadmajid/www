import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground focus-visible:border-white/50 focus-visible:ring-white/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-white/10 text-card-foreground flex field-sizing-content min-h-16 w-full rounded-4xl border border-white/30 backdrop-blur-xl supports-[backdrop-filter]:bg-white/5 shadow-2xl shadow-black/20 relative overflow-hidden px-4 py-3 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/25 before:via-white/5 before:to-transparent before:pointer-events-none before:rounded-4xl",
        "after:absolute after:inset-[1px] after:rounded-4xl after:bg-gradient-to-br after:from-white/15 after:via-transparent after:to-transparent after:pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
