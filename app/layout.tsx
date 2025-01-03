import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ViewTransitions } from "next-view-transitions";
import Script from "next/script";

const ibmPlexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: "400",
	preload: true,
});

export const metadata: Metadata = {
	title: {
		template: "%s | Hammad Majid",
		default: "Hammad Majid",
	},
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang="en" className="h-full">
				<head>
					<Script
						defer
						src="https://umami.bine.codes/script.js"
						data-website-id="0b581d53-f6b5-4131-9c8b-cffaafeebe16"
					/>
				</head>
				<body
					className={`${ibmPlexMono.className} h-full flex flex-col antialiased max-w-screen-lg mx-auto`}
				>
					<Navbar />
					<main className="px-4 py-6 flex-grow space-y-2">{children}</main>
					<Footer />
				</body>
			</html>
		</ViewTransitions>
	);
}
