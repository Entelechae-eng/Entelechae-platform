import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: "ENTELECHÆ — Independent Parent Technology Company",
  description:
    "Entelechae is the parent technology company building Atelier, deep computational research, and sovereign platforms for what gets built next.",
  keywords: [
    "Entelechae",
    "Atelier",
    "Parent Technology Company",
    "Creative Systems",
    "Computational Research",
    "Sovereign Architecture",
  ],
  authors: [{ name: "Entelechae" }],
  openGraph: {
    title: "ENTELECHÆ — Building Platforms For What Gets Built Next",
    description: "Independent parent technology company. Atelier is the first flagship platform.",
    url: "https://entelechae.com",
    siteName: "Entelechae",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENTELECHÆ — Parent Technology Company",
    description: "Building platforms for what gets built next.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className="font-sans antialiased min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
