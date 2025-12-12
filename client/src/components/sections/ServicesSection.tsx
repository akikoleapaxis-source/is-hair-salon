import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.cut.title'),
      description: t('services.cut.desc'),
      price: "CA$68~",
    },
    {
      title: t('services.color.title'),
      description: t('services.color.desc'),
      price: "CA$164~",
    },
    {
      title: t('services.perm.title'),
      description: t('services.perm.desc'),
      price: "CA$181~",
    },
    {
      title: t('services.straight.title'),
      description: t('services.straight.desc'),
      price: "CA$398~",
    },
    {
      title: t('services.treatment.title'),
      description: t('services.treatment.desc'),
      price: "CA$90~",
    },
    {
      title: t('services.eyelash.title'),
      description: t('services.eyelash.desc'),
      price: "CA$78~",
    },
  ];

  return (
    <section id="services" className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-5 tracking-[0.1em] uppercase">
              Services
            </h2>
            <p className="text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          {/* Services List */}
          <div className="max-w-4xl mx-auto space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-5 border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors px-4 sm:px-6"
              >
                <div className="flex-1 mb-2 sm:mb-0">
                  <h3 className="text-lg md:text-xl font-normal mb-1 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-foreground/60">
                    {service.description}
                  </p>
                </div>
                <div className="text-lg md:text-xl font-light text-primary">
                  {service.price}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="uppercase tracking-wider border-2 hover:bg-black hover:text-white transition-colors"
            >
              <Link href="/menu">
                View Full Menu
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
