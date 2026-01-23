import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SALON_EMAIL } from "@/lib/constants";
import { Users, TrendingUp, Heart, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

export default function Recruit() {
  const benefits = [
    {
      icon: Users,
      title: "チームワーク",
      description: "経験豊富なスタッフと共に成長できる環境",
    },
    {
      icon: TrendingUp,
      title: "キャリアアップ",
      description: "急成長中のサロンで、キャリアアップのチャンス",
    },
    {
      icon: Heart,
      title: "働きやすさ",
      description: "柔軟なシフト制度と充実した福利厚生",
    },
    {
      icon: Sparkles,
      title: "最新技術",
      description: "日本の最新技術を学べる研修制度",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Recruit | Careers" 
        description="Join our team at i's. Hair Salon in Vancouver. We are looking for passionate stylists who want to grow with us. Japanese speaking environment."
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">リクルート</h1>
              <p className="text-lg text-muted-foreground">
                一緒に成長していける仲間を募集しています
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm mb-12">
                <h2 className="text-3xl font-bold mb-6">i's で働く魅力</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  i's は、バンクーバーで急成長中の日系美容室・アイラッシュサロンです。
                  カナダ(バンクーバー)と日本(札幌)の2店舗を展開しており、多くのお客様にご来店いただいています。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  日本の最新技術を常に取り入れ、お客様に最高のサービスを提供することを目指しています。
                  経験豊富なスタッフと共に、あなたも成長していきませんか？
                </p>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-2xl p-6 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Current Openings */}
              <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">現在の募集状況</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  現在、具体的な募集は行っておりませんが、
                  <br />
                  将来的に一緒に働きたいと考えている方からのご連絡をお待ちしております。
                </p>
                <Button asChild size="lg">
                  <a href={`mailto:${SALON_EMAIL}?subject=求人について`}>
                    お問い合わせ
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
