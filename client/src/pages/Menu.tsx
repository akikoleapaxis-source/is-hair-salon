import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FRESHA_BOOKING_URL } from "@/lib/constants";
import SEO from "@/components/SEO";

export default function Menu() {
  const menuCategories = [
    {
      category: "Haircut",
      items: [
        { name: "★Haircut", price: "CA$68~", duration: "1h 15min - 1h 45min" },
        { name: "★Very Short Haircut (Shaved style, super short style)", price: "CA$63~", duration: "1h - 1h 20min" },
        { name: "★Cut + Japanese TOKIO premium treatment (+free home care)", price: "CA$215~", duration: "2h - 2h 15min" },
        { name: "★Bangs cut", price: "CA$21~", duration: "30min" },
        { name: "★Up-do", price: "CA$86~", duration: "1h - 1h 30min" },
      ],
    },
    {
      category: "Eye lash",
      items: [
        { name: "★Flat Lash Extensions", price: "CA$78~", duration: "1h - 2h" },
        { name: "★Keratain Lash Lift", price: "CA$46~", duration: "30min - 2h" },
        { name: "★Shimmer Lash (EyeLash Extention + Lash Lift)", price: "CA$148~", duration: "1h 30min - 2h 15min" },
        { name: "★Keratin Lash Lift + Black Tint + Shampoo", price: "CA$93~", duration: "1h 30min - 1h 45min" },
      ],
    },
    {
      category: "Color",
      items: [
        { name: "★Premium care Color (Regular color = Non Bleaching process)", price: "CA$278~", duration: "2h 45min - 4h" },
        { name: "★Color (Regular color = Non Bleaching process)", price: "CA$164~", duration: "2h 15min - 3h" },
      ],
    },
    {
      category: "Perm",
      items: [
        { name: "★Japanese Digital perm", price: "CA$281~", duration: "3h - 3h 30min" },
        { name: "★Japanese Cold Perm for women", price: "CA$181~", duration: "2h - 2h 30min" },
        { name: "★Partial Perm for Men's hairstyles", price: "CA$158~", duration: "2h - 2h 30min" },
      ],
    },
    {
      category: "Japanese Straightening",
      items: [
        { name: "★Premium Treatment Japanese Straightening (with system treatment)", price: "CA$398~", duration: "3h 30min - 4h 30min" },
      ],
    },
    {
      category: "Treatment",
      items: [
        { name: "★Japanese TOKIO premium treatment (+free home care)", price: "CA$150~", duration: "45min - 1h 15min" },
        { name: "★Millbon Japanese Premium Aujua 7 Step Treatment", price: "CA$90~", duration: "1h - 1h 15min" },
      ],
    },
  ];

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
