import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function News() {
  const newsItems = [

    {
      date: "2025-01-10",
      title: "冬のヘアケア特集",
      excerpt: "乾燥する冬の季節、髪のダメージが気になる方へ。プロが教える冬のヘアケア方法をご紹介します。",
      category: "ヘアケア知識",
    },
    {
      date: "2025-01-05",
      title: "新スタッフ Wakana 加入",
      excerpt: "経験豊富なスタイリスト Wakana が新しくチームに加わりました。ぜひご指名ください。",
      category: "お知らせ",
    },
  ];

  const faqCategories = [
    {
      category: "ヘアケア基礎知識",
      items: [
        {
          q: "シャンプーの正しい方法は？",
          a: "シャンプーは頭皮を洗うことが目的です。指の腹を使って優しくマッサージするように洗いましょう。髪の毛自体は泡で軽く洗う程度で十分です。",
        },
        {
          q: "トリートメントとコンディショナーの違いは？",
          a: "コンディショナーは髪の表面を整えるもの、トリートメントは髪の内部に栄養を届けるものです。両方使う場合は、トリートメント→コンディショナーの順番で使用します。",
        },
      ],
    },
    {
      category: "カラーリング",
      items: [
        {
          q: "カラーを長持ちさせる方法は？",
          a: "カラー専用シャンプーの使用、熱いお湯を避ける、紫外線対策、定期的なトリートメントが効果的です。",
        },
        {
          q: "ブリーチとヘアカラーの違いは？",
          a: "ブリーチは髪の色素を抜くもの、ヘアカラーは色を入れるものです。明るい色にしたい場合はブリーチが必要になることがあります。",
        },
      ],
    },
    {
      category: "パーマ・縮毛矯正",
      items: [
        {
          q: "縮毛矯正とストレートパーマの違いは？",
          a: "縮毛矯正は熱を使ってクセを伸ばし、半永久的に効果が持続します。ストレートパーマは薬剤のみでクセを伸ばし、効果は2〜3ヶ月程度です。",
        },
        {
          q: "パーマ後のケア方法は？",
          a: "パーマ当日はシャンプーを避け、その後も優しく扱うことが大切です。パーマ用のスタイリング剤を使用し、ドライヤーは弱風で乾かしましょう。",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">News & Knowledge</h1>
              <p className="text-lg text-muted-foreground">
                サロンからのお知らせと、ヘアケアに役立つ知識をお届けします
              </p>
            </div>
          </div>
        </section>

        {/* News */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">最新のお知らせ</h2>
              <div className="space-y-6">
                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / Knowledge */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">ヘアケア知識</h2>
              <p className="text-center text-muted-foreground mb-12">
                プロが教える、髪と頭皮のケア方法
              </p>

              <div className="space-y-12">
                {faqCategories.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
                      {category.category}
                    </h3>
                    <div className="space-y-6">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-background rounded-xl p-6">
                          <h4 className="font-bold text-lg mb-3 flex items-start gap-2">
                            <span className="text-primary">Q.</span>
                            {item.q}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed pl-6">
                            <span className="text-primary font-bold">A.</span> {item.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

