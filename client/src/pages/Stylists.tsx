import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Staff from "@/components/Staff";
import SEO from "@/components/SEO";

export default function Stylists() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Our Stylists" 
        description="Meet our team of experienced Japanese hairstylists in Vancouver. Each stylist brings authentic Japanese technique and omotenashi hospitality."
      />
      <Navigation />
      <main className="flex-1 pt-20">
        <Staff />
      </main>
      <Footer />
    </div>
  );
}
