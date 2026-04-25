import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FRESHA_BOOKING_URL } from "@/lib/constants";
import SEO from "@/components/SEO";

// Import menu data directly
import haircutData from "@/content/menu/haircut.json";
import eyelashData from "@/content/menu/eyelash.json";
import colorData from "@/content/menu/color.json";
import permData from "@/content/menu/perm.json";
import straighteningData from "@/content/menu/straightening.json";
import treatmentData from "@/content/menu/treatment.json";

export default function Menu() {
  const [isNanoBubbleOpen, setIsNanoBubbleOpen] = useState(false);

  // Combine all menu data and sort by order
  const menuCategories = [
    haircutData,
    eyelashData,
    colorData,
    permData,
    straighteningData,
    treatmentData
  ].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Menu & Pricing" 
        description="View our full menu of services including Japanese Straightening, Digital Perms, Haircuts, and Eyelash Extensions. Transparent pricing and professional consultation."
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-5">Menu & Pricing</h1>
              <p className="text-sm md:text-base text-muted-foreground">
                All services include professional consultation with experienced stylists
              </p>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              {menuCategories.map((category, index) => (
                <div key={index} className="bg-background rounded-2xl p-6 shadow-sm">
                  <h2 className="text-base md:text-lg font-bold mb-5 pb-3 border-b border-border">
                    {category.category}
                  </h2>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`flex items-center justify-between py-2 border-b border-border last:border-0 ${(item as any).isNanoBubble ? 'cursor-pointer hover:bg-muted/50 transition-colors rounded px-2 -mx-2' : ''}`}
                        onClick={() => (item as any).isNanoBubble && setIsNanoBubbleOpen(true)}
                      >
                        <div>
                          <h3 className={`font-medium text-xs md:text-sm ${(item as any).isNanoBubble ? 'text-primary underline decoration-primary/30 underline-offset-4' : ''}`}>
                            {item.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="text-sm md:text-base font-semibold text-primary">{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <div className="max-w-2xl mx-auto bg-primary/5 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3">Book Your Appointment</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Online booking available 24/7 for your convenience
                </p>
                <Button asChild size="lg" className="text-sm px-6 py-4">
                  <a href={FRESHA_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book Online
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Nano Bubble Modal */}
      <Dialog open={isNanoBubbleOpen} onOpenChange={setIsNanoBubbleOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light mb-2">Nano Bubble System</DialogTitle>
            <DialogDescription className="text-base text-foreground/80">
              Experience the ultimate deep cleansing with our state-of-the-art Nano Bubble shampoo system.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="aspect-video bg-secondary rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop" 
                alt="Nano Bubble System"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 text-sm text-foreground/70 leading-relaxed">
              <p>
                <strong>What is Nano Bubble?</strong><br />
                Nano bubbles are ultra-fine bubbles that are smaller than the pores of your scalp. They penetrate deep into the pores to remove dirt, sebum, and chemical residues that regular shampooing cannot reach.
              </p>
              <p>
                <strong>Benefits:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Deeply cleanses scalp pores</li>
                <li>Improves blood circulation</li>
                <li>Enhances the effectiveness of treatments and colors</li>
                <li>Leaves hair feeling incredibly light and soft</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
