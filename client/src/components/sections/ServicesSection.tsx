import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.cut.title'),
      description: t('services.cut.desc'),
      price: "$60~",
    },
    {
      title: t('services.color.title'),
      description: t('services.color.desc'),
      price: "$80~",
    },
    {
      title: t('services.straight.title'),
      description: t('services.straight.desc'),
      price: "$150~",
    },
    {
      title: t('services.treatment.title'),
      description: t('services.treatment.desc'),
      price: "$50~",
    },
    {
      title: t('services.eyelash.title'),
      description: t('services.eyelash.desc'),
      price: "$70~",
    },
  ];

  return (
    <section id="services" className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-[0.1em] uppercase">
              Services
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          {/* Services List */}
          <div className="max-w-4xl mx-auto space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors px-4 sm:px-6"
              >
                <div className="flex-1 mb-3 sm:mb-0">
                  <h3 className="text-xl md:text-2xl font-normal mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/60">
                    {service.description}
                  </p>
                </div>
                <div className="text-xl md:text-2xl font-light text-primary">
                  {service.price}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="uppercase tracking-wider border-2 hover:bg-black hover:text-white transition-colors"
            >
              <Link href="/menu">
                <a>View Full Menu</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
