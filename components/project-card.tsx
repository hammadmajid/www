import type { Project } from "@/lib/types";
import { Link } from "next-view-transitions";
import { Github, Globe } from "lucide-react";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectsCard({ project }: ProjectCardProps) {
	return (
		<div className="shadow-xl hover:shadow-2xl transition-all rounded-md p-6 flex flex-col h-full">
			<div className="flex flex-row items-center justify-between mb-4">
				<h3 className="font-semibold">{project.name}</h3>
				<div className="flex flex-row gap-2">
					<a href={project.github} className="w-max hover:text-light-accent">
						<Github size={20} />
					</a>
					{project.homepage && (
						<Link
							href={project.homepage}
							className="w-max hover:text-light-accent"
						>
							<Globe size={20} />
						</Link>
					)}
				</div>
			</div>
			<p className="flex-grow mb-4">{project.description}</p>
			<ul className="flex flex-wrap gap-2">
				{project.topics &&
					project.topics.map((topics) => (
						<li key={topics}>
							<Link
								href={`/projects/?${topics}`}
								className="text-light-accent hover:text-light-accent-hover text-sm bg-gray-100 px-2 py-1 rounded"
							>
								{topics}
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
}
