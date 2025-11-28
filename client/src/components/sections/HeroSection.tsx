import { Button } from "@/components/ui/button";
import { FRESHA_BOOKING_URL } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      {/* Simple gradient background - no photo */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-primary/5 to-primary/10" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Small tagline */}
          <div className="inline-block mb-8 px-6 py-2 bg-primary/8 rounded-full">
            <p className="text-sm font-medium text-primary tracking-wide">
              Vancouver's Premier Japanese Hair & Eyelash Salon
            </p>
          </div>

          {/* Large typography - main message */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            Transform
            <br />
            Your Beauty
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Experience the art of Japanese hair and beauty care
            <br />
            with our expert stylists in Richmond, Vancouver
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-10 py-7 rounded-full">
              <a href={FRESHA_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-10 py-7 rounded-full border-2"
            >
              <a href="#gallery">View Gallery</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

