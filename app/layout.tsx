import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JustPublisher — Mobile App Publishing Studio",
  description:
    "We acquire, grow, and monetize mobile apps built by independent developers. You keep shipping. We handle everything else.",
  keywords: [
    "mobile app publisher",
    "app publishing studio",
    "iOS app publisher",
    "Android app publisher",
    "indie app studio",
    "app acquisition",
  ],
  openGraph: {
    title: "JustPublisher — Mobile App Publishing Studio",
    description:
      "We buy great apps and grow them. If you've built something worth believing in, let's talk.",
    url: "https://justpublisher.com",
    siteName: "JustPublisher",
    images: [
      {
        url: "https://justpublisher.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JustPublisher — Mobile App Publishing Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JustPublisher — Mobile App Publishing Studio",
    description:
      "We buy great apps and grow them. If you've built something worth believing in, let's talk.",
    creator: "@justpublisher",
    images: ["https://justpublisher.com/og-image.jpg"],
  },
  metadataBase: new URL("https://justpublisher.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-canvas text-ink">{children}</body>
    </html>
  );
}
