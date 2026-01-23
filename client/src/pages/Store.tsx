import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShoppingBag } from "lucide-react";
import SEO from "@/components/SEO";

export default function Store() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Online Store" 
        description="i's. Hair Salon Online Store - Coming Soon. Professional Japanese hair care products and salon-exclusive items."
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Coming Soon Section */}
        <section className="min-h-[70vh] flex items-center justify-center">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 text-foreground/60" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-[0.1em] uppercase">
                Store
              </h1>
              
              <p className="text-xl md:text-2xl font-light mb-4 text-foreground/80">
                Coming Soon
              </p>
              
              <p className="text-base md:text-lg text-foreground/60 leading-relaxed mb-8">
                We're preparing our online store where you'll be able to purchase professional Japanese hair care products and salon-exclusive items. Stay tuned!
              </p>

              <div className="inline-block px-6 py-3 border border-border rounded text-sm tracking-wide uppercase">
                Under Construction
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
