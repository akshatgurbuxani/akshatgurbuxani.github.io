import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import GlobalPointerTrail from "@/components/GlobalPointerTrail";

export const metadata: Metadata = {
  title: "Akshat Gurbuxani | Portfolio",
  description: "Creative portfolio website showcasing projects and skills",
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
      <body className="antialiased" style={{ minHeight: '100vh', position: 'relative' }}>
        <ThemeProvider>
          <GlobalPointerTrail />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
