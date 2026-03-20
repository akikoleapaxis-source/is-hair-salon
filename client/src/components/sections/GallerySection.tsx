import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GallerySection() {
  const { t } = useLanguage();

  const galleryImages = [
    "/images/gallery/model-hairstyle.png",
    "/images/gallery/straight_hair_closeup_professional.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/salon_interior_detail_professional_0c9392af.png",
    "/images/gallery/salon_waiting_area_professional.png",
    "/images/gallery/hair-balayage-1.avif",
    "/images/gallery/hair-color-1.avif",
    "/images/gallery/hair-cut-1.avif",
    "/images/gallery/eyelash-1.avif",
  ];

  return (
    <section id="gallery" className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-5 tracking-[0.1em] uppercase">
              Gallery
            </h2>
            <p className="text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </div>

          {/* Instagram Feed Widget */}
          <div className="w-full min-h-[400px] bg-white rounded-lg">
            <div className="elfsight-app-d8b8bbcc-fc17-4f58-9307-13cb16f9a86a" data-elfsight-app-lazy></div>
          </div>

          {/* Instagram Link */}
          <div className="mt-12 text-center">
            <a
              href="https://www.instagram.com/is.japanese_hair.eyelash_salon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider border-b border-transparent group-hover:border-primary transition-colors">
                Follow us on Instagram
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
