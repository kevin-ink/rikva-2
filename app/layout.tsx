import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const mavenPro = Maven_Pro({
  variable: "--font-maven-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RIKVA",
  description: "Using digital humanities tools to analyze airport pollution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mavenPro.variable} bg-sky-200 w-full min-h-screen antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
