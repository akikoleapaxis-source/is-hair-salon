import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FRESHA_BOOKING_URL } from "@/lib/constants";

export default function Menu() {
  const menuCategories = [
    {
      category: "Haircut",
      items: [
        { name: "Cut", price: "$60", duration: "60 min" },
        { name: "Cut + Blow Dry", price: "$70", duration: "75 min" },
        { name: "Bangs Trim", price: "$20", duration: "15 min" },
      ],
    },
    {
      category: "Color",
      items: [
        { name: "Full Color", price: "$80~", duration: "90 min" },
        { name: "Root Touch-up", price: "$60~", duration: "60 min" },
        { name: "Highlights", price: "$100~", duration: "120 min" },
        { name: "Balayage", price: "$120~", duration: "150 min" },
      ],
    },
    {
      category: "Perm & Straightening",
      items: [
        { name: "Digital Perm", price: "$120~", duration: "150 min" },
        { name: "Straightening", price: "$150~", duration: "180 min" },
        { name: "Hair Quality Improvement Straightening", price: "$180~", duration: "180 min" },
      ],
    },
    {
      category: "Treatment",
      items: [
        { name: "Treatment", price: "$30~", duration: "30 min" },
        { name: "Head Spa", price: "$40~", duration: "40 min" },
      ],
    },
    {
      category: "Eyelash",
      items: [
        { name: "Classic Lash", price: "$70~", duration: "90 min" },
        { name: "Volume Lash", price: "$90~", duration: "120 min" },
        { name: "Refill", price: "$50~", duration: "60 min" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
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
                        className="flex items-center justify-between py-2 border-b border-border last:border-0"
                      >
                        <div>
                          <h3 className="font-medium text-xs md:text-sm">{item.name}</h3>
                          <p className="text-xs text-muted-foreground">{item.duration}</p>
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
      <Footer />
    </div>
  );
}
