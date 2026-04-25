import { Button } from "@/components/ui/button";
import { FRESHA_BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const heroImages = [
  '/images/is-gold.png',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/salon_interior_professional_f3b6bbde.png',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/salon_interior_detail_professional_0c9392af.png',
];

export default function HeroSection() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-[70vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Slideshow background images with smooth fade transition */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundPosition: 'center 40%',
            opacity: currentImageIndex === index ? (index === 2 ? 0.5 : 1) : 0,
          }}
        />
      ))}
      
      {/* White overlay for a softer atmosphere */}
      <div className="absolute inset-0 z-0 bg-white/30" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-[#4A3B32]">
          {/* Main heading - uppercase, thin, letter-spaced */}
          <div className="mb-5" style={{ lineHeight: '1' }}>
            <div className="flex justify-center -mb-16 md:-mb-20 lg:-mb-24">
              <img 
                src="/images/is-logo-text.png" 
                alt="i's." 
                className="h-40 md:h-52 lg:h-64 w-auto brightness-0 opacity-80"
                style={{ filter: 'brightness(0) sepia(1) hue-rotate(340deg) saturate(1.5) brightness(0.3) contrast(1.2)' }}
              />
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.05em]" style={{ fontFamily: 'Cormorant, serif' }}>
              Japanese Hair & Eyelash salon
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-lg mb-8 leading-relaxed font-light tracking-wide opacity-95 whitespace-pre-line">
            {t('hero.badge')}
            <br />
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-black text-white hover:bg-black/80 px-10 py-5 text-sm tracking-wide uppercase font-normal"
            >
              <a href={FRESHA_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" className="block animate-bounce">
            <svg 
              className="w-6 h-6 text-[#4A3B32] opacity-70" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
