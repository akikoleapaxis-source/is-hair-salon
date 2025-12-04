import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ReviewsSection() {
  const { t, language } = useLanguage();

  const reviews = [
    {
      source: "google",
      name: "Jessica Y",
      rating: 5,
      text: "I had super damaged, frizzy hair from a digital perm, and after getting their 7-step treatment, the difference is unbelievable! My hair is now healthy, smooth, and so much more manageable. I'm genuinely impressed.",
      date: "2 weeks ago",
    },
    {
      source: "fresha",
      name: "KiKi T",
      rating: 5,
      text: "Mii is just awesome! She's always so attentive and patient. She is willing to provide advices and suggestions. She was my cheerleader when I wanted to go for a different hairstyle. I have nothing but good things to say about her. She is my go-to hairstylist ❤️",
      staff: "Mii",
      date: "Nov 30, 2025",
    },
    {
      source: "google",
      name: "Customer Review",
      rating: 5,
      text: "It's my second time going to Harry for a haircut as there's no one else I would trust with my hair after getting it done here. Never got as much compliment on my hair and Harry was able to style it to show my natural curls, which no one has...",
      staff: "Harry",
      date: "2 weeks ago",
    },
    {
      source: "fresha",
      name: "Carmela S",
      rating: 5,
      text: "As always, Saeko makes my lashes so beautiful. She really listens to what I want and creates natural looking lashes that last!",
      staff: "Saeko",
      date: "Nov 29, 2025",
    },
    {
      source: "google",
      name: "Customer Review",
      rating: 5,
      text: "Yuki was an amazing hairstylist! She took the time to carefully listen and truly understand what kind of hairstyle I wanted. The scalp massage during the treatment was also incredible. When adjusting my haircut, she worked step by step...",
      staff: "Yuki",
      date: "2 weeks ago",
    },
    {
      source: "fresha",
      name: "Chiharu S",
      rating: 5,
      text: "頭のマッサージとても気持ち良かったです。すごい丁寧で、髪の長さも相談しながら切ってくれました。新しいヘアスタイルとても気に入ってます。ありがとうございました。Head massage was awesome!! I really like new hair style. Thank you so much.",
      date: "Dec 1, 2025",
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
                  <div className="text-lg font-medium text-primary">826</div>
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
                  <div className="text-lg font-medium text-primary">1,802</div>
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
