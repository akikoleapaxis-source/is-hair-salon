import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Placeholder data for products
const products = [
  {
    id: "treatment-1",
    category: "Treatment",
    name: "Japanese Premium Treatment",
    description: "High-quality Japanese treatment for damaged hair. Restores moisture and shine from the core.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop",
    details: "This premium treatment uses advanced Japanese technology to repair hair damage at the molecular level. Perfect for hair that has been frequently colored or permed. It provides long-lasting hydration and a silky smooth finish."
  },
  {
    id: "straightener-1",
    category: "Straightening",
    name: "Damage-less Straightener",
    description: "Gentle straightening solution imported from Japan for natural-looking straight hair.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    details: "Our signature straightening solution minimizes heat and chemical damage while effectively smoothing out frizz and curls. The result is naturally soft, manageable hair that doesn't look artificially flat."
  },
  {
    id: "eyelash-1",
    category: "Eyelash",
    name: "Premium Eyelash Serum",
    description: "Nourishing serum to promote healthy, strong, and long eyelashes.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    details: "Formulated with peptides and botanical extracts, this serum strengthens lashes from the root, preventing breakage and promoting natural growth. Safe for use with eyelash extensions."
  },
  {
    id: "eyelash-2",
    category: "Eyelash",
    name: "Japanese Eyelash Glue",
    description: "High-retention, low-irritation glue used for our eyelash extension services.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    details: "We use only the highest quality Japanese glue for our extensions. It offers excellent retention while being gentle on sensitive eyes, minimizing the risk of allergic reactions."
  }
];

export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Products" 
        description="Discover the professional Japanese hair care and eyelash products used and recommended by i's. Hair Salon."
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-[0.1em] uppercase">
                Products
              </h1>
              <p className="text-base md:text-lg text-foreground/70 font-light">
                Professional Japanese Products We Trust
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-spacing">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                  At i's., we carefully select and use only the highest quality products from Japan. 
                  Click on any product to learn more about its benefits and why we recommend it.
                  <br className="hidden md:block" />
                  <span className="text-sm mt-4 block italic">* Products are available for purchase in-salon only.</span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div 
                    key={product.id} 
                    className="group cursor-pointer flex flex-col"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-secondary">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-black px-4 py-2 rounded text-sm font-medium transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                          View Details
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-xs uppercase tracking-wider text-foreground/50 mb-2">
                        {product.category}
                      </span>
                      <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-foreground/70 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
          {selectedProduct && (
            <div className="flex flex-col md:flex-row h-full max-h-[80vh]">
              <div className="w-full md:w-2/5 h-48 md:h-auto relative bg-secondary">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto">
                <DialogHeader className="mb-4 text-left">
                  <span className="text-xs uppercase tracking-wider text-foreground/50 mb-1 block">
                    {selectedProduct.category}
                  </span>
                  <DialogTitle className="text-2xl font-light">
                    {selectedProduct.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-base font-medium text-foreground/80">
                    {selectedProduct.description}
                  </p>
                  <div className="h-px w-full bg-border" />
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {selectedProduct.details}
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-foreground/50 italic">
                      Available for purchase at our salon. Please ask your stylist for more information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
