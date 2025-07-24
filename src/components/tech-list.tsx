import type React from "react"
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMui,
  SiTerraform,
  SiAnsible,
  SiZod,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
} from "@icons-pack/react-simple-icons"
import type { JSX } from "react" // Import JSX to fix the undeclared variable error

export type Tech =
  | "Next.js"
  | "React"
  | "Tailwind"
  | "MUI"
  | "Terraform"
  | "Ansible"
  | "Zod"
  | "TypeScript"
  | "Node.js"
  | "Express"

interface TechListProps {
  stack: Tech[]
}

const techIcons: Record<Tech, JSX.Element> = {
  "Next.js": <SiNextdotjs />,
  React: <SiReact />,
  Tailwind: <SiTailwindcss />,
  MUI: <SiMui />,
  Terraform: <SiTerraform />,
  Ansible: <SiAnsible />,
  Zod: <SiZod />,
  TypeScript: <SiTypescript />,
  "Node.js": <SiNodedotjs />,
  Express: <SiExpress />,
}

const pillBaseStyles =
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
const pillColorStyles = "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"

const TechList: React.FC<TechListProps> = ({ stack }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span key={tech} className={`${pillBaseStyles} ${pillColorStyles}`}>
          {techIcons[tech]}
          {tech}
        </span>
      ))}
    </div>
  )
}

export default TechList
