import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Premium Shampoo",
      description: "A gentle, nourishing shampoo that cleanses while maintaining your hair's natural moisture balance.",
      price: "$35.00",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
      category: "Hair Care"
    },
    {
      id: 2,
      name: "Deep Treatment Mask",
      description: "Intensive repair mask for damaged or chemically treated hair. Restores shine and elasticity.",
      price: "$45.00",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop",
      category: "Treatment"
    },
    {
      id: 3,
      name: "Styling Oil",
      description: "Lightweight finishing oil that tames frizz and adds a beautiful, healthy gloss without weighing hair down.",
      price: "$40.00",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
      category: "Styling"
    },
    {
      id: 4,
      name: "Scalp Essence",
      description: "Nourishing essence to promote a healthy scalp environment and support strong, beautiful hair growth.",
      price: "$50.00",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
      category: "Scalp Care"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Products - i's. Hair Salon" 
        description="Discover our curated selection of premium hair care products available exclusively at our salon in Richmond, Vancouver."
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-[0.1em] uppercase">
                Products
              </h1>
              <p className="text-sm md:text-base text-foreground max-w-2xl mx-auto mb-4">
                Salon Exclusive Products
              </p>
              <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto">
                *These products are available for purchase exclusively at our salon.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-spacing bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden bg-secondary mb-6 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs tracking-wider uppercase bg-white/90 px-3 py-1">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <p className="text-sm tracking-wider">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon Note */}
            <div className="mt-24 max-w-2xl mx-auto text-center border-t border-border pt-16">
              <h3 className="text-xl font-light mb-4 tracking-wide">More Products Coming Soon</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We are currently preparing our full lineup of premium hair care products.
                <br />
                Please ask your stylist for personalized recommendations during your visit.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
