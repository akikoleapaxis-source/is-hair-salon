import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About Us" 
        description="Learn about i's. Hair Salon, our philosophy, and our commitment to bringing authentic Japanese hair techniques and hospitality to Vancouver."
      />
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
