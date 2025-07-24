import type React from "react"
import { cn } from "@/lib/utils"

// Base Typography component with prose classes
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

        // Text color
        "prose-p:text-primary/95 prose-a:text-primary/95 prose-a:font-semibold",
        "prose-blockquote:text-primary/95",
        "prose-ul:text-primary/95 prose-ol:text-primary/95",
        "prose-table:text-primary/95",
        "prose-strong:text-primary/95 prose-em:text-primary/95",

        // Headings
        "prose-headings:text-primary/95 prose-headings:text-balance prose-headings:tracking-tight",
        "prose-h1:scroll-m-20 prose-h1:text-4xl prose-h1:font-extrabold",
        "prose-h2:scroll-m-20 prose-h2:border-b prose-h2:pb-2 prose-h2:text-3xl prose-h2:font-semibold prose-h2:tracking-tight prose-h2:first:mt-0",
        "prose-h3:scroll-m-20 prose-h3:text-2xl prose-h3:font-semibold prose-h3:tracking-tight",
        "prose-h4:scroll-m-20 prose-h4:text-xl prose-h4:font-semibold prose-h4:tracking-tight",

        // Paragraphs
        "prose-p:leading-7 prose-p:[&:not(:first-child)]:mt-6",

        // Blockquotes
        "prose-blockquote:mt-6 prose-blockquote:border-l-2 prose-blockquote:pl-6 prose-blockquote:italic",

        // Lists
        "prose-ul:my-6 prose-ul:ml-6 prose-ul:list-disc prose-ul:[&>li]:mt-2",
        "prose-ol:my-6 prose-ol:ml-6 prose-ol:list-decimal prose-ol:[&>li]:mt-2",

        // Tables
        "prose-table:my-6 prose-table:w-full prose-table:overflow-y-auto",
        "prose-thead:m-0 prose-thead:border-t prose-thead:p-0 prose-thead:even:bg-muted",
        "prose-th:border prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-bold prose-th:[&[align=center]]:text-center prose-th:[&[align=right]]:text-right",
        "prose-tbody:m-0 prose-tbody:border-t prose-tbody:p-0 prose-tbody:even:bg-muted",
        "prose-td:border prose-td:px-4 prose-td:py-2 prose-td:text-left prose-td:[&[align=center]]:text-center prose-td:[&[align=right]]:text-right",

        // Code styling
        // Inline code - remove default prose styling and add custom styling
        "prose-code:before:content-none prose-code:after:content-none",
        "prose-code:bg-muted prose-code:text-foreground prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:font-medium",

        // Code blocks
        "prose-pre:bg-muted prose-pre:border prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto",
        "prose-pre:text-foreground prose-pre:text-sm prose-pre:leading-relaxed",

        className,
      )}
    >
      {children}
    </div>
  )
}

// Individual Typography Components
interface TypographyElementProps {
  children?: React.ReactNode
  content?: string
  className?: string
}

export function TypographyH1({ children, content, className }: TypographyElementProps) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight text-balance", className)}>
      {children || content}
    </h1>
  )
}

export function TypographyH2({ children, content, className }: TypographyElementProps) {
  return (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
      {children || content}
    </h2>
  )
}

export function TypographyH3({ children, content, className }: TypographyElementProps) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
      {children || content}
    </h3>
  )
}

export function TypographyH4({ children, content, className }: TypographyElementProps) {
  return (
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
      {children || content}
    </h4>
  )
}

export function TypographyP({ children, content, className }: TypographyElementProps) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children || content}
    </p>
  )
}

export function TypographyBlockquote({ children, content, className }: TypographyElementProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children || content}
    </blockquote>
  )
}

interface TypographyTableProps {
  headers?: string[]
  rows?: string[][]
  children?: React.ReactNode
  className?: string
}

export function TypographyTable({ headers, rows, children, className }: TypographyTableProps) {
  if (children) {
    return (
      <div className={cn("my-6 w-full overflow-y-auto", className)}>
        <table className="w-full">
          {children}
        </table>
      </div>
    )
  }

  return (
    <div className={cn("my-6 w-full overflow-y-auto", className)}>
      <table className="w-full">
        {headers && (
          <thead>
            <tr className="even:bg-muted m-0 border-t p-0">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        {rows && (
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="even:bg-muted m-0 border-t p-0">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  )
}

interface TypographyListProps {
  items?: string[]
  children?: React.ReactNode
  ordered?: boolean
  className?: string
}

export function TypographyList({ items, children, ordered = false, className }: TypographyListProps) {
  const ListComponent = ordered ? "ol" : "ul"
  const listClassName = ordered
    ? "my-6 ml-6 list-decimal [&>li]:mt-2"
    : "my-6 ml-6 list-disc [&>li]:mt-2"

  return (
    <ListComponent className={cn(listClassName, className)}>
      {children || items?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListComponent>
  )
}

export function TypographyInlineCode({ children, content, className }: TypographyElementProps) {
  return (
    <code className={cn("bg-muted text-foreground px-1.5 py-0.5 rounded text-sm font-mono font-medium", className)}>
      {children || content}
    </code>
  )
}

export function TypographyLead({ children, content, className }: TypographyElementProps) {
  return (
    <p className={cn("text-muted-foreground text-xl", className)}>
      {children || content}
    </p>
  )
}

export function TypographyLarge({ children, content, className }: TypographyElementProps) {
  return (
    <div className={cn("text-lg font-semibold", className)}>
      {children || content}
    </div>
  )
}

export function TypographySmall({ children, content, className }: TypographyElementProps) {
  return (
    <small className={cn("text-sm leading-none font-medium", className)}>
      {children || content}
    </small>
  )
}

export function TypographyMuted({ children, content, className }: TypographyElementProps) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)}>
      {children || content}
    </p>
  )
}
