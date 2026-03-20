import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

import { useEffect, useState } from "react";
import { marked } from "marked";

interface NewsItem {
  title: string;
  date: string;
  body: string;
  slug: string;
}

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Fetch news items from the public directory
    // In a real scenario with many files, we'd need an index or API
    // For now, we'll just fetch the sample one we created
    const fetchNews = async () => {
      try {
        // We'll use a hardcoded list for now, but in a real setup, 
        // we'd fetch an index.json generated during build or use a serverless function
        const response = await fetch('/content/news/2026-02-25-welcome.md');
        if (response.ok) {
          const text = await response.text();
          // Simple frontmatter parser for the client side
          const match = text.match(/---\n([\s\S]*?)\n---\n([\s\S]*)/);
          if (match) {
            const frontmatter = match[1];
            const body = match[2];
            
            const titleMatch = frontmatter.match(/title:\s*"(.*?)"/);
            const dateMatch = frontmatter.match(/date:\s*(.*?)$/m);
            
            if (titleMatch && dateMatch) {
              setNewsItems([{
                title: titleMatch[1],
                date: new Date(dateMatch[1]).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                body: marked.parse(body.trim()) as string,
                slug: 'welcome'
              }]);
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

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
        "description": item.body.substring(0, 150) + "..."
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
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="text-muted-foreground prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: item.body }} />
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
