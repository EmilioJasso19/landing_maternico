import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Screenshots } from "@/components/Screenshots";
import { DownloadSection } from "@/components/Download";
import { Footer } from "@/components/Footer";

export default function MaterniCoLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4D1BA]/20 to-white">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Screenshots />
      <DownloadSection />
      <Footer />
    </div>
  );
}