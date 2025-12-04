import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SALON_ADDRESS, SALON_PHONE, SALON_EMAIL, FRESHA_BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AccessSection() {
  const { t } = useLanguage();

  return (
    <section id="access" className="section-spacing bg-secondary">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-[0.1em] uppercase">
              Access
            </h2>
            <p className="text-base md:text-lg text-foreground/70">
              {t('access.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-start gap-4 mb-8">
                  <MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-sm uppercase tracking-wider mb-2 font-medium">Address</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {SALON_ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-8">
                  <Clock className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-sm uppercase tracking-wider mb-2 font-medium">Hours</h3>
                    <div className="text-foreground/70 space-y-1">
                      <p>Monday - Sunday: 10:00 - 20:00</p>
                      <p className="text-sm text-primary">Open 7 days a week</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-8">
                  <Phone className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-sm uppercase tracking-wider mb-2 font-medium">Phone</h3>
                    <a
                      href={`tel:${SALON_PHONE}`}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {SALON_PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-sm uppercase tracking-wider mb-2 font-medium">Email</h3>
                    <a
                      href={`mailto:${SALON_EMAIL}`}
                      className="text-foreground/70 hover:text-primary transition-colors break-all"
                    >
                      {SALON_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <Button 
                asChild 
                size="lg" 
                className="w-full bg-black text-white hover:bg-black/80 uppercase tracking-wider"
              >
                <a href={FRESHA_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
            </div>

            {/* Map */}
            <div className="h-[500px] lg:h-[600px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.8!2d-123.1367!3d49.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzAwLjEiTiAxMjPCsDA4JzEyLjEiVw!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="i's. Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
