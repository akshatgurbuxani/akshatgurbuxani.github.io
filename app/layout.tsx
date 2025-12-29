import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "AKSHAT_GURBUXANI | SYSTEM_PORTFOLIO",
  description: "AI/ML Engineer Terminal | Accessing Data...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jetbrainsMono.variable}`}>
      <body className="font-mono">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
