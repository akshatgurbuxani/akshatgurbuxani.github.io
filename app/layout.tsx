import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const GlobalPointerTrail = dynamic(() => import("@/components/GlobalPointerTrail"), { ssr: false });

export const metadata: Metadata = {
  title: "Akshat Gurbuxani | Portfolio",
  description:
    "AI Researcher and engineer building intelligent systems. Portfolio showcasing projects in machine learning, LLMs, computer vision, and multi-agent systems.",
  keywords: [
    "AI",
    "Machine Learning",
    "LLM",
    "Portfolio",
    "Akshat Gurbuxani",
    "Deep Learning",
    "Computer Vision",
  ],
  authors: [{ name: "Akshat Gurbuxani" }],
  openGraph: {
    title: "Akshat Gurbuxani | Portfolio",
    description:
      "AI Researcher and engineer building intelligent systems that transform complex challenges into scalable AI solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Gurbuxani | Portfolio",
    description:
      "AI Researcher and engineer building intelligent systems.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" style={{ minHeight: "100vh", position: "relative" }}>
        <ThemeProvider>
          <GlobalPointerTrail />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
