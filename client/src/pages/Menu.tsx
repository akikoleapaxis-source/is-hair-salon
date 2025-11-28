import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FRESHA_BOOKING_URL } from "@/lib/constants";

export default function Menu() {
  const menuCategories = [
    {
      category: "ヘアカット",
      items: [
        { name: "カット", price: "$60", duration: "60分" },
        { name: "カット + ブロー", price: "$70", duration: "75分" },
        { name: "前髪カット", price: "$20", duration: "15分" },
      ],
    },
    {
      category: "カラー",
      items: [
        { name: "フルカラー", price: "$80〜", duration: "90分" },
        { name: "リタッチカラー", price: "$60〜", duration: "60分" },
        { name: "ハイライト", price: "$100〜", duration: "120分" },
        { name: "バレイヤージュ", price: "$120〜", duration: "150分" },
      ],
    },
    {
      category: "パーマ・縮毛矯正",
      items: [
        { name: "デジタルパーマ", price: "$120〜", duration: "150分" },
        { name: "縮毛矯正", price: "$150〜", duration: "180分" },
        { name: "髪質改善ストレート", price: "$180〜", duration: "180分" },
      ],
    },
    {
      category: "トリートメント",
      items: [
        { name: "トリートメント", price: "$30〜", duration: "30分" },
        { name: "ヘッドスパ", price: "$40〜", duration: "40分" },
      ],
    },
    {
      category: "アイラッシュ",
      items: [
        { name: "シングルラッシュ", price: "$70〜", duration: "90分" },
        { name: "ボリュームラッシュ", price: "$90〜", duration: "120分" },
        { name: "リフィル", price: "$50〜", duration: "60分" },
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
              <h1 className="text-5xl font-bold mb-6">メニュー・料金</h1>
              <p className="text-lg text-muted-foreground">
                すべてのメニューは、経験豊富なスタイリストによる丁寧なカウンセリング付きです
              </p>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              {menuCategories.map((category, index) => (
                <div key={index} className="bg-background rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold mb-6 pb-4 border-b border-border">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center justify-between py-3 border-b border-border last:border-0"
                      >
                        <div>
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.duration}</p>
                        </div>
                        <div className="text-xl font-bold text-primary">{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="max-w-2xl mx-auto bg-primary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">ご予約はこちら</h3>
                <p className="text-muted-foreground mb-6">
                  オンライン予約なら24時間いつでもご予約いただけます
                </p>
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <a href={FRESHA_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    オンライン予約
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

