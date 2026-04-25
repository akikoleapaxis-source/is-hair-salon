import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "@/components/SEO";

export default function FAQ() {
  const faqCategories = [
    {
      category: "Reservation & General",
      items: [
        {
          question: "Do you accept walk-ins?",
          answer: "We recommend booking an appointment in advance to ensure availability. However, we do accept walk-ins when our stylists are available. Please call us to check availability."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, credit cards (Visa, Mastercard, American Express), and debit cards."
        },
        {
          question: "Do you speak Japanese?",
          answer: "Yes! All our stylists are Japanese and fluent in both Japanese and English. We can provide services in your preferred language."
        },
        {
          question: "What is your cancellation policy?",
          answer: "We require at least 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a cancellation fee."
        },
        {
          question: "Is parking available?",
          answer: "Yes, Aberdeen Square offers ample parking. Parking is free for the first 4 hours at P4, which is directly connected to our salon on the 3rd floor."
        }
      ]
    },
    {
      category: "Services & Treatments",
      items: [
        {
          question: "How long does a typical appointment take?",
          answer: "Appointment duration varies by service: Haircut (60-90 min), Color (2-3 hours), Perm (2.5-3 hours), Straightening (3-4 hours), Treatment (30-60 min), Eyelash (60-90 min)."
        },
        {
          question: "Do you offer hair quality improvement treatments?",
          answer: "Yes! We specialize in Japanese hair quality improvement treatments. We offer two premium treatments: Japanese TOKIO premium treatment (CA$150~) which includes free home care, and Millbon Japanese Premium Aujua 7 Step Treatment (CA$90~). These treatments help restore damaged hair and improve overall hair health."
        }
      ]
    },
    {
      category: "Products",
      items: [
        {
          question: "Do you sell hair care products?",
          answer: "Yes, we carry a selection of professional Japanese hair care products including treatments, straighteners, and eyelash products. Our stylists can recommend the best products for your hair type and concerns."
        }
      ]
    }
  ];

  // Generate FAQ Schema
  const allFaqs = faqCategories.flatMap(cat => cat.items);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="FAQ" 
        description="Frequently asked questions about i's. Hair Salon. Find answers about appointments, payments, services, and parking."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-[0.1em] uppercase">
                FAQ
              </h1>
              <p className="text-base md:text-lg text-foreground/70 font-light">
                Frequently Asked Questions
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="section-spacing">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-12">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-2xl font-light mb-6 tracking-wide border-b border-border pb-2">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {category.items.map((faq, index) => (
                      <AccordionItem 
                        key={`${catIndex}-${index}`} 
                        value={`item-${catIndex}-${index}`}
                        className="border border-border rounded-lg px-6 py-2"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="text-base md:text-lg font-normal">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-base text-foreground/70 leading-relaxed pt-2">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}

              {/* Contact Message */}
              <div className="mt-16 p-8 bg-secondary rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-light mb-3 tracking-wide">
                  Still have questions?
                </h3>
                <p className="text-sm md:text-base text-foreground/70">
                  Please feel free to ask our staff for more details.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
