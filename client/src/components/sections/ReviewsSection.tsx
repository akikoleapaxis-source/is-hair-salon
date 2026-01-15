import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ReviewsSection() {
  const { t, language } = useLanguage();

  const reviews = [
    {
      source: "google",
      name: "Janet Wong",
      rating: 5,
      text: "I recently got a haircut with Yuki and had such a great experience! She's incredibly nice and very professional. Before the appointment, she took the time to ask about my ideas and what I wanted. During the cut, she also gave me really good suggestions that suited my face shape and style. I'm very happy with the result.",
      staff: "Yuki",
      date: "a month ago",
    },
    {
      source: "fresha",
      name: "Catherine L",
      rating: 5,
      text: "Highly recommend Yuki!",
      staff: "Yuki",
      date: "Jan 14, 2026",
    },
    {
      source: "google",
      name: "Jessica Y",
      rating: 5,
      text: "I had super damaged, frizzy hair from a digital perm, and after getting their 7-step treatment, the difference is unbelievable! My hair is now healthy, smooth, and so much more manageable. I'm genuinely impressed.",
      date: "a month ago",
    },
    {
      source: "fresha",
      name: "Nikki",
      rating: 5,
      text: "Amazing service, beautiful haircut done by Kana and Mii :)",
      staff: "Kana & Mii",
      date: "Jan 13, 2026",
    },
    {
      source: "google",
      name: "Michele Chen",
      rating: 5,
      text: "I got a hair cut with Mii today. She is very professional and asked me what style do I want a day before my appointment. She is meticulous in cutting my hair. I appreciate her time and help. I would definitely recommend Mii to anyone looking to have a nice looking hair cut.",
      staff: "Mii",
      date: "a month ago",
    },
    {
      source: "fresha",
      name: "Andrea L",
      rating: 5,
      text: "Sayaka is friendly and treats us like old friends. She remembers things we are doing in our lives and asks about them. She is also very skilled and efficient.",
      staff: "Sayaka",
      date: "Jan 14, 2026",
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
                  <div className="text-lg font-medium text-primary">855</div>
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
                  <div className="text-lg font-medium text-primary">1,955</div>
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
                {/* Source Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    review.source === 'google' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {review.source === 'google' ? 'Google' : 'Fresha'}
                  </span>
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
          <div className="text-center mt-12 flex items-center justify-center gap-6">
            <a
              href="https://www.google.com/maps/place/i's.+Japanese+Hair+%26+Eyelash+Salon/@49.1667,-123.1367,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-wider text-foreground hover:text-primary border-b border-transparent hover:border-primary transition-colors"
            >
              {language === 'ja' ? 'Google レビューを見る' : 'Read Google Reviews'}
            </a>
            <span className="text-foreground/30">|</span>
            <a
              href="https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-wider text-foreground hover:text-primary border-b border-transparent hover:border-primary transition-colors"
            >
              {language === 'ja' ? 'Fresha レビューを見る' : 'Read Fresha Reviews'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
