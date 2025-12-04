import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
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
      question: "How long does a typical appointment take?",
      answer: "Appointment duration varies by service: Haircut (60-90 min), Color (2-3 hours), Perm (2.5-3 hours), Straightening (3-4 hours), Treatment (30-60 min), Eyelash (60-90 min)."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require at least 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a cancellation fee."
    },
    {
      question: "Do you offer hair quality improvement treatments?",
      answer: "Yes! We specialize in Japanese hair quality improvement treatments, including our signature 7-step treatment and hair quality improvement straightening. These treatments help restore damaged hair and improve overall hair health."
    },
    {
      question: "Is parking available?",
      answer: "Yes, Aberdeen Square offers ample parking. Parking is free for the first 3 hours with validation from our salon."
    },
    {
      question: "Do you sell hair care products?",
      answer: "Yes, we carry a selection of professional Japanese hair care products. Our stylists can recommend the best products for your hair type and concerns."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
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
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
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

              {/* Contact CTA */}
              <div className="mt-12 p-8 bg-secondary rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-light mb-3 tracking-wide">
                  Still have questions?
                </h3>
                <p className="text-sm md:text-base text-foreground/70 mb-6">
                  Feel free to contact us directly. We're here to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+16045551234" 
                    className="px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                  >
                    Call Us
                  </a>
                  <a 
                    href="mailto:info@is-salon.com" 
                    className="px-6 py-3 border border-border rounded hover:bg-secondary/50 transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
