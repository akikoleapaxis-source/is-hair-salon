import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ReviewsSection() {
  const { t, language } = useLanguage();

  const reviews = [
    {
      name: "Jessica Y",
      rating: 5,
      text: "My hair was severely damaged from digital perm, but the 7-step treatment made it incredibly healthy and smooth. I'm truly impressed!",
      service: "Treatment",
      date: "1 week ago",
    },
    {
      name: "Hiroka O",
      rating: 5,
      text: "Yuki is an amazing hair stylist! She took the time to listen carefully and truly understood the style I was looking for.",
      service: "Haircut",
      staff: "Yuki",
      date: "Nov 18, 2025",
    },
    {
      name: "Angelina H",
      rating: 5,
      text: "Mii, thank you for getting my color exactly how I wanted it! Very satisfied.",
      service: "Color",
      staff: "Mii",
      date: "Nov 18, 2025",
    },
    {
      name: "Michelle S",
      rating: 5,
      text: "Chippy and Sayaka were very professional and friendly! Chippy's eyelash work was excellent.",
      service: "Eyelash",
      staff: "Chippy, Sayaka",
      date: "Nov 19, 2025",
    },
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-5 tracking-[0.1em] uppercase">
              Reviews
            </h2>
            <p className="text-sm md:text-base text-foreground/70 mb-6">
              {t('reviews.subtitle')}
            </p>
            
            {/* Review Stats */}
            <div className="flex items-center justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <div className="text-left">
                  <div className="text-lg font-medium text-primary">500+</div>
                  <div className="text-xs text-foreground/60">
                    {language === 'ja' ? 'Google レビュー' : 'Google Reviews'}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <div className="text-left">
                  <div className="text-lg font-medium text-primary">300+</div>
                  <div className="text-xs text-foreground/60">
                    {language === 'ja' ? 'Fresha レビュー' : 'Fresha Reviews'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-6 border border-border hover:border-primary/30 transition-colors"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  "{review.text}"
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-foreground/60">
                  <div>
                    <p className="font-medium text-foreground text-sm">{review.name}</p>
                    {review.staff && (
                      <p className="text-xs">Stylist: {review.staff}</p>
                    )}
                  </div>
                  <p className="text-xs">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-wider text-foreground hover:text-primary border-b border-transparent hover:border-primary transition-colors"
            >
              Read more reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
