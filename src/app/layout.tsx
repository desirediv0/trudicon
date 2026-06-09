import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Trudicon — Diplomatic-Grade Due Diligence & Risk Intelligence Partner",
    template: "%s | Trudicon",
  },
  description: "Trusted Verification Partner for Diplomatic Missions, Consulates & Global Corporations. High-integrity background verification, document authentication, field intelligence, and risk mitigation solutions across India.",
  metadataBase: new URL("https://trudicon.co.in"),
  openGraph: {
    title: "Trudicon — Diplomatic-Grade Due Diligence & Risk Intelligence",
    description: "Trusted Verification Partner for Diplomatic Missions, Consulates & Global Corporations across India.",
    url: "https://trudicon.co.in",
    siteName: "Trudicon Consultancy Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trudicon — Diplomatic-Grade Due Diligence & Risk Intelligence",
    description: "Trusted Verification Partner for Diplomatic Missions, Consulates & Global Corporations across India.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth font-sans antialiased", inter.variable)}>
      <body className="bg-background text-foreground">
        {children}
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
