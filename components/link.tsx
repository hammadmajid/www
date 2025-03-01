import { Link as NextViewTransitionLink } from "next-view-transitions";

interface LinkProps {
	href: string;
	children: React.ReactNode;
	external?: boolean;
}

export default function Link({ href, children, external = false }: LinkProps) {
	const rel = external ? "noopener noreferrer" : undefined;

	return external ? (
		<a href={href} rel={rel} className="text-primary hover:text-primary-hover">
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
