import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ReviewsSection() {
  const { t } = useLanguage();

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
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-[0.1em] uppercase">
              Reviews
            </h2>
            <p className="text-base md:text-lg text-foreground/70">
              {t('reviews.subtitle')}
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-8 border border-border hover:border-primary/30 transition-colors"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/80 leading-relaxed mb-6">
                  "{review.text}"
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <div>
                    <p className="font-medium text-foreground">{review.name}</p>
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
          <div className="text-center mt-16">
            <a
              href="https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm uppercase tracking-wider text-foreground hover:text-primary border-b border-transparent hover:border-primary transition-colors"
            >
              Read more reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
