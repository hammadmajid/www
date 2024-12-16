import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
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
    <html lang="en" className="h-full">
      <body
        className={`${ibmPlexMono.className} h-full flex flex-col antialiased max-w-screen-lg mx-auto`}
      >
        <Navbar />
        <main className="px-4 py-6 flex-grow space-y-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
