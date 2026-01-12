import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sectoragent.ai"),
  title: {
    default: "SectorAgent.ai | Enterprise AI Automation for Manufacturing & Retail",
    template: "%s | SectorAgent.ai",
  },
  description:
    "Enterprise AI that automates what matters. Intelligent workflows for manufacturing and retail operations. Reduce manual work by 40-60%, save $150K-500K annually.",
  keywords: [
    "enterprise AI",
    "AI automation",
    "manufacturing automation",
    "retail automation",
    "workflow automation",
    "intelligent agents",
    "business process automation",
    "AI workflows",
    "order-to-cash automation",
    "inventory management AI",
  ],
  authors: [{ name: "SectorAgent.ai" }],
  creator: "SectorAgent.ai",
  publisher: "SectorAgent.ai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sectoragent.ai",
    siteName: "SectorAgent.ai",
    title: "SectorAgent.ai | Enterprise AI Automation",
    description:
      "Enterprise AI that automates what matters. Intelligent workflows for manufacturing and retail operations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SectorAgent.ai - Enterprise AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SectorAgent.ai | Enterprise AI Automation",
    description:
      "Enterprise AI that automates what matters. Intelligent workflows for manufacturing and retail operations.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
