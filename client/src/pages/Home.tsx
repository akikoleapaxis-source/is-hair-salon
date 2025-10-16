import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Users, Award, Calendar, MapPin, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/luxury-salon-1.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-amber-600/90 backdrop-blur-sm text-sm font-semibold rounded-full mb-4">
                Vancouver's Premier Japanese Hair Salon
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              自分らしい<br />
              スタイルを<br />
              見つける
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              ショートヘア＆ストレートパーマのスペシャリスト<br />
              日本の最新技術で、理想のスタイルを実現
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
                オンライン予約
              </Button>
              <Link href="/styles">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg backdrop-blur-sm">
                  スタイルギャラリー
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">3+</div>
              <div className="text-gray-300">店舗展開予定</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">2000+</div>
              <div className="text-gray-300">満足されたお客様</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">10+</div>
              <div className="text-gray-300">年の経験</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">#1</div>
              <div className="text-gray-300">口コミ評価</div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section with Images */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">i's のこだわり</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              バンクーバーで口コミNo.1の日系美容室として、日本の最新機械や技術を常に取り入れ、
              お客様一人ひとりに最高のサービスを提供しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/hairstyle-asian-1.jpg" 
                  alt="Short Hair Specialist"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6 pb-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Scissors className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">ショートヘア専門</h3>
                <p className="text-gray-600 leading-relaxed">
                  ショートヘアとボブスタイルを得意とし、アジア人の髪質に合わせた
                  カット技術で理想のスタイルを実現します。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/luxury-salon-2.jpg" 
                  alt="Hair Straightening"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6 pb-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">髪質改善ストレート</h3>
                <p className="text-gray-600 leading-relaxed">
                  日本から直輸入の最新薬剤を使用し、髪にダメージを与えずに
                  自然なストレートヘアを実現します。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/salon-interior.jpg" 
                  alt="Latest Technology"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6 pb-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">最新技術</h3>
                <p className="text-gray-600 leading-relaxed">
                  日本の最新機械や技術を常に取り入れ、トレンドを先取りした
                  スタイルをご提案します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">主なサービス</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "カット", nameEn: "Cut & Style", price: "From $65", icon: Scissors, desc: "精密なカット技術" },
              { name: "カラー", nameEn: "Hair Color", price: "From $120", icon: Sparkles, desc: "トレンドカラー" },
              { name: "ストレート", nameEn: "Straightening", price: "From $200", icon: Sparkles, desc: "髪質改善" },
              { name: "パーマ", nameEn: "Perm", price: "From $150", icon: Sparkles, desc: "デジタルパーマ" },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-600 transition-colors">
                    <service.icon className="w-8 h-8 text-amber-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{service.nameEn}</p>
                  <p className="text-amber-700 font-bold text-lg mb-2">{service.price}</p>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
                全メニューを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stylist Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Meet Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">スタイリスト紹介</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-96 md:h-auto">
                  <img 
                    src="/images/hairstyle-asian-2.jpg" 
                    alt="Harry - Owner & Top Stylist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                      Owner & Top Stylist
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Harry</h3>
                  <p className="text-amber-700 font-semibold mb-6 text-lg">オーナー / トップスタイリスト</p>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    ショートヘア＆ストレートパーマのスペシャリスト。
                    アジア人の髪質を知り尽くした技術で、お客様の理想を実現します。
                    日本とカナダでの豊富な経験を活かし、最新のトレンドを取り入れたスタイルをご提案。
                  </p>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Instagram size={20} className="text-amber-600" />
                    <a href="https://www.instagram.com/harry_hairstylist/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">
                      @harry_hairstylist
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/stylists">
              <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-6 text-lg">
                全スタイリストを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recruit Section */}
      <section className="py-24 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/luxury-salon-2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-sm font-semibold rounded-full mb-6">
            Join Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">海外で挑戦したいあなたへ</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95 leading-relaxed">
            i's では、海外で活躍したいスタイリストを応援しています。
            また、WEBマーケティングやサイト制作に興味のある学生の方も募集中です。
            実績作りや学校の課題としても活用できます。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/recruit">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                採用情報を見る
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-6 text-lg backdrop-blur-sm">
              お問い合わせ
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">アクセス</h2>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Location</h3>
                <p className="text-gray-700 mb-2 text-lg">Vancouver, BC</p>
                <p className="text-gray-600 mb-4">Canada</p>
                <p className="text-sm text-gray-500">
                  バンクーバーのダウンタウンに位置し、<br />
                  公共交通機関でのアクセスも便利です。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">営業時間</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between text-lg">
                    <span>月〜金</span>
                    <span className="font-semibold">10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>土</span>
                    <span className="font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>日</span>
                    <span className="font-semibold">12:00 - 18:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
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

