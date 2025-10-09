import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Software Engineer",
  description:
    "Curious builder crafting intelligent tools, learning in public, and sharing the journey.",
  metadataBase: new URL("https://mohammadhprp.ir"),
  openGraph: {
    title: "Software Engineer",
    description:
      "Curious builder crafting intelligent tools, learning in public, and sharing the journey.",
    type: "website",
    url: "https://mohammadhprp.ir",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineer",
    description:
      "Curious builder crafting intelligent tools, learning in public, and sharing the journey.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("bg-background text-foreground antialiased")}
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased transition-colors duration-300",
          "motion-reduce:transition-none",
          geistMono.variable,
          jetBrainsMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
