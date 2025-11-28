import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SALON_ADDRESS, SALON_PHONE, SALON_EMAIL, FRESHA_BOOKING_URL } from "@/lib/constants";

export default function AccessSection() {
  return (
    <section id="access" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">Visit Us</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">アクセス</h2>
          <p className="text-lg text-muted-foreground">
            Richmond, BC の Aberdeen Square 内にございます
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-background rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">住所</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {SALON_ADDRESS}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">営業時間</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>月〜日：10:00 - 20:00</p>
                    <p className="text-sm text-primary">年中無休</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">電話</h3>
                  <a
                    href={`tel:${SALON_PHONE}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {SALON_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">メール</h3>
                  <a
                    href={`mailto:${SALON_EMAIL}`}
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {SALON_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="w-full">
              <a href={FRESHA_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                オンライン予約
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="bg-muted rounded-2xl overflow-hidden shadow-sm h-[500px]">
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
    </section>
  );
}

