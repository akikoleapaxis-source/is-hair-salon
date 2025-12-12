import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-light tracking-[0.2em] mb-6" style={{ fontFamily: 'Cormorant, serif' }}>i's.</h3>
            <p className="text-sm text-foreground/70 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/is.japanese_hair.eyelash_salon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 font-medium">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/#about" className="text-foreground/70 hover:text-primary transition-colors">
                  Concept
                </a>
              </li>
              <li>
                <a href="/#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#staff" className="text-foreground/70 hover:text-primary transition-colors">
                  Stylists
                </a>
              </li>
              <li>
                <a href="/#gallery" className="text-foreground/70 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/menu" className="text-foreground/70 hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="/news" className="text-foreground/70 hover:text-primary transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 font-medium">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-foreground/60 flex-shrink-0" />
                <span className="text-foreground/70 leading-relaxed">
                  4000 No 3 Rd Unit 2060<br />
                  Richmond, BC V6X 0J8
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-foreground/60 flex-shrink-0" />
                <a href="tel:+16045551234" className="text-foreground/70 hover:text-primary transition-colors">
                  (604) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-foreground/60 flex-shrink-0" />
                <a href="mailto:info@is-salon.com" className="text-foreground/70 hover:text-primary transition-colors">
                  info@is-salon.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-foreground/50 uppercase tracking-wider">
            © {new Date().getFullYear()} i's Hair Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
