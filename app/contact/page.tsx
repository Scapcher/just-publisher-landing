import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactContent } from "./_content";

export const metadata: Metadata = {
  title: "Contact — JustPublisher",
  description:
    "Get in touch with JustPublisher. We respond to every serious inquiry within 48 hours. Real conversations, not templates.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
