import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshat Gurbuxani — AI Engineer",
  description: "AI engineer building reliable language, vision, and multi-agent systems from research through production.",
  keywords: ["Akshat Gurbuxani", "AI Engineer", "Machine Learning", "LLM", "Multi-Agent Systems", "Computer Vision"],
  authors: [{ name: "Akshat Gurbuxani" }],
  openGraph: {
    title: "Akshat Gurbuxani — AI Engineer",
    description: "Research ideas, engineered into systems that hold up in the real world.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Gurbuxani — AI Engineer",
    description: "Research ideas, engineered into systems that hold up in the real world.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#173a63" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
