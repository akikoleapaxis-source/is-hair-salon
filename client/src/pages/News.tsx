import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function News() {
  const newsItems = [
    {
      date: "2025-01-23",
      title: "Why Japanese Straightening is Perfect for Vancouver Weather",
      excerpt: "Vancouver's rainy season can cause frizz and unmanageable hair. Discover how our authentic Japanese Straightening (Thermal Reconditioning) can give you sleek, shiny, and manageable hair that withstands the humidity. Our specialists use premium Japanese products to ensure minimal damage and maximum shine.",
      category: "Hair Care Tips",
    },
    {
      date: "2025-01-15",
      title: "Digital Perm vs. Cold Perm: Which is Right for You?",
      excerpt: "Looking for those effortless, bouncy curls? We explain the difference between Digital Perm (Hot Perm) and traditional Cold Perm. Digital Perms are ideal for thick, coarse Asian hair and create long-lasting, low-maintenance waves that look great even when air-dried.",
      category: "Services",
    },
    {
      date: "2025-01-08",
      title: "The Benefits of Japanese Head Spa Treatment",
      excerpt: "Experience the ultimate relaxation and scalp health with our Japanese Head Spa. This treatment not only relieves stress but also promotes healthy hair growth by deep cleansing the scalp and improving blood circulation. Perfect for revitalizing your hair after winter dryness.",
      category: "Services",
    },
    {
      date: "2025-01-01",
      title: "New Year, New Look: 2025 Hair Trends in Vancouver",
      excerpt: "Start the year fresh with a new style! We're seeing a rise in layered cuts, face-framing highlights, and ash-toned colors this season. Our stylists are trained in the latest Japanese and North American trends to help you find the perfect look that suits your face shape and lifestyle.",
      category: "Trends",
    },
  ];

  // Generate Article Schema for News Items
  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": newsItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": item.title,
        "datePublished": item.date,
        "author": {
          "@type": "Organization",
          "name": "i's. Hair Salon"
        },
        "description": item.excerpt
      }
    }))
  };

  const faqCategories = [
    {
      category: "Hair Care Basics",
      items: [
        {
          q: "What's the proper way to shampoo?",
          a: "Shampooing is primarily for cleansing the scalp. Use your fingertips to gently massage in circular motions. For the hair itself, simply running the lather through is sufficient.",
        },
        {
          q: "What's the difference between treatment and conditioner?",
          a: "Conditioner smooths the hair's outer surface, while treatment penetrates deep into the hair shaft to deliver nutrients. When using both, apply treatment first, then conditioner.",
        },
        {
          q: "How often should I get a haircut?",
          a: "For maintaining healthy hair, we recommend a trim every 6-8 weeks. This helps prevent split ends and keeps your style looking fresh.",
        },
      ],
    },
    {
      category: "Hair Coloring",
      items: [
        {
          q: "How can I make my hair color last longer?",
          a: "Use color-safe shampoo, avoid hot water, protect from UV rays, and get regular treatments. These steps will help maintain vibrant color for weeks.",
        },
        {
          q: "What's the difference between bleach and hair color?",
          a: "Bleach removes natural pigment from hair, while hair color adds pigment. For lighter shades, bleaching may be necessary before coloring.",
        },
        {
          q: "Is it safe to color hair frequently?",
          a: "With proper care and quality products, regular coloring can be safe. We recommend spacing color treatments 4-6 weeks apart and using deep conditioning treatments.",
        },
      ],
    },
    {
      category: "Perms & Straightening",
      items: [
        {
          q: "What's the difference between straightening and thermal reconditioning?",
          a: "Thermal reconditioning (Japanese straightening) uses heat to permanently straighten hair. Regular straightening uses chemicals only and lasts 2-3 months.",
        },
        {
          q: "How do I care for my perm?",
          a: "Avoid shampooing on the day of your perm. Afterward, handle hair gently, use perm-specific styling products, and dry with low heat to maintain curls.",
        },
        {
          q: "Can I color and perm my hair at the same time?",
          a: "We recommend spacing these treatments at least 2 weeks apart to minimize damage. Consult with your stylist for the best timing based on your hair condition.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="News & Knowledge" 
        description="Latest news from i's. Hair Salon and professional hair care tips. Learn about our new services, stylists, and how to maintain your hair at home."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsSchema) }}
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">News & Knowledge</h1>
              <p className="text-lg text-muted-foreground">
                Stay updated with salon news and professional hair care tips
              </p>
            </div>
          </div>
        </section>

        {/* News */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Latest News</h2>
              <div className="space-y-6">
                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / Knowledge */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">Hair Care Knowledge</h2>
              <p className="text-center text-muted-foreground mb-12">
                Professional tips for healthy hair and scalp care
              </p>

              <div className="space-y-12">
                {faqCategories.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
                      {category.category}
                    </h3>
                    <div className="space-y-6">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-background rounded-xl p-6">
                          <h4 className="font-bold text-lg mb-3 flex items-start gap-2">
                            <span className="text-primary">Q.</span>
                            {item.q}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed pl-6">
                            <span className="text-primary font-bold">A.</span> {item.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
