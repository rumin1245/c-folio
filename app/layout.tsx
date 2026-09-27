import type { Metadata } from "next";
import Link from "next/link";
import { Baloo_Paaji_2, Geist_Mono } from "next/font/google";
import SiteNavigation from "./site-navigation";
import ThemeToggle from "./theme-toggle";
import "./globals.css";

const balooPaaji = Baloo_Paaji_2({
  variable: "--font-baloo-paaji",
  subsets: ["latin"],
  weight: "variable",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "C.Z.M | Portfolio",
  description: "A portfolio of selected work, experience, and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${balooPaaji.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="site-header">
          <div className="site-header__inner">
            <Link className="site-brand" href="/" aria-label="C.Z.M | Portfolio">
              <span className="site-brand__mark" aria-hidden="true">C.Z.M</span>
              <span> | portfolio</span>
            </Link>
            <div className="header-actions">
              <SiteNavigation />
              <ThemeToggle />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
