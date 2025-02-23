import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/sections/navbar';
import Footer from './sections/footer';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biopicta",
  description: "Design Your Research Posters With PosterProT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} max-w-screen-2xl mx-auto bg-[#459a91] antialiased `}
      >
              <Navbar/>

        {children}
        <Footer/>

      </body>
    </html>
  );
}
