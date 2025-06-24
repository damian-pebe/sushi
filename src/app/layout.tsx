import type { Metadata } from "next";
import {
  Playfair_Display,
  Birthstone,
  Ephesis,
  Geist,
  Geist_Mono,
  Lobster,
  Plaster,
  Poppins,
} from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Navbar from "@/Navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const plaster = Plaster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-plaster",
});

const ephesis = Ephesis({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ephesis",
});

const birthstone = Birthstone({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-birthstone",
});
export const metadata: Metadata = {
  title: "Sushi Kuraby",
  description: "Website for a sushi store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`
            ${geistSans.variable} ${geistMono.variable} ${lobster.variable} ${poppins.variable} ${plaster.variable} ${ephesis.variable} ${birthstone.variable}${geistSans.variable} ${geistMono.variable} ${lobster.variable} ${poppins.variable} ${plaster.variable} ${ephesis.variable} ${birthstone.variable} ${playfair.variable} 
            antialiased font-poppins`}
        >
          {/* <Navbar /> */}
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
