import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | JustPublisher",
        default: "JustPublisher | #1 Game Publisher Database & CRM for Studios",
    },
    description:
        "Connect with 5,000+ verified PC, Console, and Mobile game publishers. The all-in-one CRM to manage leads, send pitch decks, and get funded.",
    keywords: [
        "Game Publisher Database",
        "Indie Game Marketing",
        "Video Game CRM",
        "Mobile Game Publishers",
        "Steam Marketing Tool",
    ],
    openGraph: {
        title: "Find Your Game Publisher Today",
        description:
            "Access 5,000+ verified publisher emails. Pitch faster with JustPublisher.",
        url: "https://justpublisher.com",
        siteName: "JustPublisher",
        images: [
            {
                url: "https://justpublisher.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "JustPublisher Dashboard Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "JustPublisher | The Game Studio CRM",
        description: "Stop using spreadsheets. Get funded faster.",
        creator: "@JustPublisher",
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
        <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}