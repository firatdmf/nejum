import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nejum | Your Middle-Manager",
  // description: "Nejum is providing Digital Transformation and Industrial Automation services",
  description: "Nejum is a SaaS ERP solution for distributors and B2B businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#e8e6e0]`}
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F3ECE7]`}
      >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
