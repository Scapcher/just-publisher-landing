import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { AboutContent } from "./_content";

export const metadata: Metadata = {
  title: "About — JustPublisher",
  description:
    "JustPublisher is a mobile app publishing studio. We acquire, grow, and monetize apps built by independent developers. Our model is simple: we win when you win.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
