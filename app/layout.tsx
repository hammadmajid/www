import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ViewTransitions } from "next-view-transitions";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
	subsets: ["latin"],
	weight: "400",
	preload: true,
});

export const metadata: Metadata = {
	title: {
		template: "%s | Hammad Majid",
		default: "Hammad Majid",
	},
	description: "Computer science student and full stack developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang="en" className="h-full">
				<body
					className={`${atkinsonHyperlegible.className} h-full flex flex-col antialiased max-w-(--breakpoint-lg) mx-auto`}
				>
					<main className="p-4 grow">{children}</main>
					<Analytics />
				</body>
			</html>
		</ViewTransitions>
	);
}
