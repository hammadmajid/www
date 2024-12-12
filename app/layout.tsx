import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Hammad Majid",
    default: "Hammad Majid"
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/cbef3dd862.js"></Script>
      </head>
      <body className={`${ibmPlexMono.className} antialiased max-w-screen-lg mx-auto`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
