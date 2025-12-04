import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-spacing bg-secondary">
      <div className="container">
        {/* Split layout: Image left, Text right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/concept-styling-detail.jpg"
              alt="Professional Hair Styling"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-[0.1em] uppercase">
              Concept
            </h2>
            
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>{t('about.description')}</p>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-2 font-medium">
                  {t('about.short.title')}
                </h3>
                <p className="text-foreground/70">
                  {t('about.short.desc')}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-2 font-medium">
                  {t('about.straight.title')}
                </h3>
                <p className="text-foreground/70">
                  {t('about.straight.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
