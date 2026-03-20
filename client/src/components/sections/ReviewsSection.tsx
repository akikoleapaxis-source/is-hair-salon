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
              <a 
                href="https://www.google.com/maps/place/i's.+Japanese+Hair+%26+Eyelash+Salon/@49.1840882,-123.136208,17z/data=!4m8!3m7!1s0x5486752718131333:0x1234567890abcdef!8m2!3d49.1840882!4d-123.136208!9m1!1b1!16s%2Fg%2F11b7q3q_q" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <div className="text-left">
                  <div className="text-lg font-medium text-primary">855</div>
                  <div className="text-xs text-foreground/60 underline decoration-foreground/30 underline-offset-2">
                    {language === 'ja' ? 'Google レビュー' : 'Google Reviews'}
                  </div>
                </div>
              </a>
              
              <a 
                href="https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx?reviews=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <div className="text-left">
                  <div className="text-lg font-medium text-primary">1,955</div>
                  <div className="text-xs text-foreground/60 underline decoration-foreground/30 underline-offset-2">
                    {language === 'ja' ? 'Fresha レビュー' : 'Fresha Reviews'}
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Google Reviews Widget (Elfsight) */}
          <div className="w-full min-h-[300px] bg-white rounded-lg mb-12">
            <div className="elfsight-app-43424155-2ae2-48e3-8afb-257cc07afbc8" data-elfsight-app-lazy></div>
          </div>

          {/* Fresha CTA */}
          <div className="text-center mt-12 bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-xl font-medium mb-4">
              {language === 'ja' ? 'Freshaでも2,600件以上の高評価をいただいています！' : 'Over 2,600 Highly Rated Reviews on Fresha!'}
            </h3>
            <p className="text-sm text-foreground/70 mb-6">
              {language === 'ja' 
                ? 'たくさんのお客様から嬉しいお言葉をいただいております。ぜひFreshaのページでも口コミをご覧ください。' 
                : 'We have received many wonderful reviews from our clients. Please check them out on our Fresha page.'}
            </p>
            <a
              href="https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx?reviews=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-md"
            >
              {language === 'ja' ? 'Freshaの口コミを見る' : 'Read Fresha Reviews'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
