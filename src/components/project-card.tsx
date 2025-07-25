import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, EyeOff } from "lucide-react"
import TechList, { type Tech } from "./tech-list"
import { TypographyH3 } from "./typography"

export interface ProjectCardProps {
  title: string
  description: string
  techStack: Tech[]
  livePreviewUrl?: string
  githubUrl?: string
  className?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  livePreviewUrl,
  githubUrl,
  className = "",
}) => {
  return (
    <Card
      className={`h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${className}`}
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold leading-tight line-clamp-2">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4">
        {/* Tech Stack Section */}
        <div className="space-y-2">
          <TypographyH3 className="sr-only text-sm font-medium text-foreground">Technologies</TypographyH3>
          <TechList stack={techStack} />
        </div>

        {/* Action Buttons - Always present to maintain consistent layout */}
        <div className="mt-auto pt-4 flex gap-2">
          {/* Live Preview Button */}
          {livePreviewUrl ? (
            <Button asChild size="sm" className="flex-1">
              <a
                href={livePreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Live Preview
              </a>
            </Button>
          ) : (
            <Button
              size="sm"
              variant="outline"
              disabled
              className="flex-1 inline-flex items-center gap-2 cursor-not-allowed opacity-50 bg-transparent"
              title="Live preview not available"
            >
              <EyeOff className="w-4 h-4" />
              No Preview
            </Button>
          )}

          {/* GitHub Button */}
          {githubUrl ? (
            <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          ) : (
            <Button
              size="sm"
              variant="outline"
              disabled
              className="flex-1 inline-flex items-center gap-2 cursor-not-allowed opacity-50 bg-transparent"
              title="GitHub repository not available"
            >
              <Github className="w-4 h-4" />
              Private
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
