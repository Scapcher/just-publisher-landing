import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    // JSON-LD Schema for a Software Application
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "JustPublisher",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "49.00",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "320"
        },
        "description": "CRM and lead generation tool for game developers to find publishers."
    };
  return (
      <main className="w-full relative">
          {/* Inject Schema securely */}
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        <Navbar />
        <Hero />
        <Partners />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
  );
}