import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Users, Award, Calendar, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-gray-900">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              バンクーバーで、<br />
              "自分らしい"<br />
              ショートヘアを見つける
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              日本の最新技術とサービスで、あなたの理想のスタイルを実現します
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-amber-800 hover:bg-amber-900 text-white">
                オンライン予約
              </Button>
              <Link href="/styles">
                <Button size="lg" variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                  スタイルを見る
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">i's のこだわり</h2>
            <p className="text-lg text-gray-600">
              バンクーバーで口コミNo.1の日系美容室として、日本の最新機械や技術を常に取り入れ、
              お客様一人ひとりに最高のサービスを提供しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scissors className="w-8 h-8 text-amber-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3">ショートヘア専門</h3>
                <p className="text-gray-600">
                  ショートヘアとボブスタイルを得意とし、アジア人の髪質に合わせた
                  カット技術で理想のスタイルを実現します。
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-amber-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3">髪質改善ストレート</h3>
                <p className="text-gray-600">
                  日本から直輸入の最新薬剤を使用し、髪にダメージを与えずに
                  自然なストレートヘアを実現します。
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3">最新技術</h3>
                <p className="text-gray-600">
                  日本の最新機械や技術を常に取り入れ、トレンドを先取りした
                  スタイルをご提案します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">主なサービス</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "カット", price: "From $65", icon: Scissors },
              { name: "カラー", price: "From $120", icon: Sparkles },
              { name: "ストレート", price: "From $200", icon: Sparkles },
              { name: "パーマ", price: "From $150", icon: Sparkles },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="pt-6">
                  <service.icon className="w-10 h-10 text-amber-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-amber-800 font-semibold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-100">
                全メニューを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stylists Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">スタイリスト紹介</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-48 h-48 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                    <Users className="w-24 h-24 text-gray-400" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Harry</h3>
                    <p className="text-amber-800 font-semibold mb-4">オーナー / トップスタイリスト</p>
                    <p className="text-gray-600 mb-4">
                      ショートヘア＆ストレートパーマのスペシャリスト。
                      アジア人の髪質を知り尽くした技術で、お客様の理想を実現します。
                    </p>
                    <p className="text-sm text-gray-500">
                      Instagram: @harry_hairstylist
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/stylists">
              <Button size="lg" variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-100">
                全スタイリストを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recruit Section */}
      <section className="py-20 bg-gradient-to-br from-amber-800 to-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">海外で挑戦したいあなたへ</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            i's では、海外で活躍したいスタイリストを応援しています。
            また、WEBマーケティングやサイト制作に興味のある学生の方も募集中です。
          </p>
          <Link href="/recruit">
            <Button size="lg" variant="outline" className="bg-white text-amber-800 hover:bg-gray-100 border-0">
              採用情報を見る
            </Button>
          </Link>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">アクセス</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-amber-800 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <p className="text-gray-600 mb-2">Vancouver, BC</p>
                <p className="text-gray-600">Canada</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-amber-800 mb-4" />
                <h3 className="text-xl font-semibold mb-3">営業時間</h3>
                <p className="text-gray-600 mb-2">月〜金: 10:00 - 19:00</p>
                <p className="text-gray-600 mb-2">土: 10:00 - 18:00</p>
                <p className="text-gray-600">日: 12:00 - 18:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-800 hover:bg-amber-900 text-white">
                詳細を見る / お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

