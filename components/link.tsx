import { Link as NextViewTransitionLink } from "next-view-transitions";

interface LinkProps {
	href: string;
	children: React.ReactNode;
	external?: boolean;
}

export default function Link({ href, children, external = false }: LinkProps) {
	const target = external ? "_blank" : "_self";
	const rel = external ? "noopener noreferrer" : undefined;

	return external ? (
		<a
			href={href}
			target={target}
			rel={rel}
			className="text-primary hover:text-primary-hover"
		>
			{children}
		</a>
	) : (
		<NextViewTransitionLink
			href={href}
			rel={rel}
			className="text-primary hover:text-primary-hover"
		>
			{children}
		</NextViewTransitionLink>
	);
}
