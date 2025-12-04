import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GallerySection() {
  const { t } = useLanguage();

  const galleryImages = [
    "/gallery-hair-result.jpg",
    "/service-treatment.jpg",
    "/concept-styling-detail.jpg",
    "/ambiance-calm.jpg",
    "/salon-interior.png",
    "/salon-waiting-area.jpg",
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group aspect-[3/4] overflow-hidden relative"
              >
                <img
                  src={image}
                  alt={`Style ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
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
