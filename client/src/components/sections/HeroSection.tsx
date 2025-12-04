import { Button } from "@/components/ui/button";
import { FRESHA_BOOKING_URL } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Full-width background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero-salon-real.jpg')`,
          backgroundPosition: 'center 40%'
        }}
      />
      
      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-black/25" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main heading - uppercase, thin, letter-spaced */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-5 leading-tight tracking-[0.15em] uppercase">
            i's Hair Salon
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg mb-8 leading-relaxed font-light tracking-wide opacity-95">
            Vancouver Japanese Hair Salon
            <br />
            Short Hair & Straight Perm Specialist
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
            className="w-6 h-6 text-white opacity-70" 
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
