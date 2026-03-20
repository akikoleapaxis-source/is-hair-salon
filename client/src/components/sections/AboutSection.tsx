import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container">
        {/* Split layout: Image left, Text right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/images/short-hair-specialist.jpg"
              alt="Professional Hair Styling"
              className="w-full h-[400px] lg:h-[480px] object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 tracking-[0.1em] uppercase">
              Concept
            </h2>
            
            <div className="space-y-5 text-sm md:text-base leading-relaxed text-foreground/80">
              <p>
                {t('about.description').split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < t('about.description').split('\n').length - 1 && (
                      <br className="hidden lg:block" />
                    )}
                  </span>
                ))}
              </p>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h3 className="text-xs uppercase tracking-wider mb-2 font-medium">
                  {t('about.short.title')}
                </h3>
                <p className="text-sm text-foreground/70">
                  {t('about.short.desc')}
                </p>
              </div>

              <div className="sm:col-span-2">
                <h3 className="text-xs uppercase tracking-wider mb-2 font-medium">
                  {t('about.damage.title')}
                </h3>
                <p className="text-sm text-foreground/70">
                  {t('about.damage.desc')}
                </p>
              </div>
              
              <div>
                <h3 className="text-xs uppercase tracking-wider mb-2 font-medium">
                  {t('about.straight.title')}
                </h3>
                <p className="text-sm text-foreground/70">
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
