import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Staff from "@/components/Staff";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import AccessSection from "@/components/sections/AccessSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Staff />
        <GallerySection />
        <ReviewsSection />
        <AccessSection />
      </main>
      <Footer />
    </div>
  );
}
