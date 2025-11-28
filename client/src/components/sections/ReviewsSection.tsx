import { Star } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Jessica Y",
      rating: 5,
      text: "デジタルパームで超ダメージを受けた髪が、7ステップトリートメントで見違えるほど健康的でなめらかになりました。本当に感動しています！",
      service: "トリートメント",
      platform: "Google",
      date: "1週間前",
    },
    {
      name: "Hiroka O",
      rating: 5,
      text: "Yukiは素晴らしいヘアスタイリストです！時間をかけて丁寧に話を聞いてくれて、私が求めているスタイルを本当に理解してくれました。",
      service: "ヘアカット",
      platform: "Fresha",
      staff: "Yuki",
      date: "2025年11月18日",
    },
    {
      name: "Angelina H",
      rating: 5,
      text: "Miiさん、私の希望通りの色にしてくれてありがとう！とても満足しています。",
      service: "カラー",
      platform: "Fresha",
      staff: "Mii",
      date: "2025年11月18日",
    },
    {
      name: "Michelle S",
      rating: 5,
      text: "ChippyとSayakaはとてもプロフェッショナルでフレンドリーでした！Chippyのアイラッシュ施術は素晴らしかったです。",
      service: "アイラッシュ",
      platform: "Fresha",
      staff: "Chippy, Sayaka",
      date: "2025年11月19日",
    },
    {
      name: "Becky X",
      rating: 5,
      text: "いつも通り、Shoの仕上がりにとても満足しています。",
      service: "ヘアカット",
      platform: "Fresha",
      staff: "Sho",
      date: "2025年11月19日",
    },
    {
      name: "Juanne C",
      rating: 5,
      text: "Sallyはとても知識が豊富でプロフェッショナルです。しっかり相談に乗ってくれて、希望通りの仕上がりになりました。",
      service: "アイラッシュ",
      platform: "Fresha",
      staff: "Sally",
      date: "2025年11月21日",
    },
    {
      name: "Lucilla W",
      rating: 5,
      text: "Harryさん、魔法のような技術をありがとう！あなたの時間と忍耐に心から感謝しています。",
      service: "ヘアスタイリング",
      platform: "Fresha",
      staff: "Harry",
      date: "2025年11月22日",
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-32 bg-gradient-to-b from-[#faf8f5] via-[#f5f1ed] to-[#faf8f5]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">Customer Reviews</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">お客様の声</h2>
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Star className="w-6 h-6 fill-primary text-primary" />
                <span className="text-3xl font-bold">5.0</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fresha (1,772件)
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Star className="w-6 h-6 fill-primary text-primary" />
                <span className="text-3xl font-bold">4.9</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Google (820件)
              </p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">
            2,500件以上のレビューで高評価をいただいています
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.slice(0, 6).map((review, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                "{review.text}"
              </p>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-sm">{review.name}</p>
                  <span className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded">
                    {review.platform}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{review.service}</span>
                  {review.staff && (
                    <span className="font-medium">by {review.staff}</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Freshaのレビューを見る
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="https://www.google.com/maps/place/i's.+Japanese+hair+%26+eyelash+salon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
          >
            Googleのレビューを見る
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

