import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Users, Award, Calendar, MapPin, Instagram, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Hero Section - Clean & Elegant */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/luxury-salon-1.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/80"></div>
        </div>
        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-white/95 backdrop-blur-sm text-sm font-medium text-gray-700 rounded-full border border-primary/20 shadow-sm">
                Vancouver's Premier Japanese Hair Salon
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] text-gray-900">
              自分らしい<br />
              スタイルを<br />
              見つける
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-700 leading-relaxed">
              ショートヘア＆ストレートパーマのスペシャリスト<br />
              日本の最新技術で、理想のスタイルを実現
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg shadow-lg hover:shadow-xl transition-all">
                <Calendar className="mr-2 h-5 w-5" />
                オンライン予約
              </Button>
              <Link href="/styles">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-7 text-lg transition-all">
                  スタイルギャラリー
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Gold Accent */}
      <section className="py-16 bg-gradient-to-r from-secondary/30 via-secondary/20 to-secondary/30 border-y border-primary/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-primary">3+</div>
              <div className="text-sm text-gray-600 font-medium">店舗展開予定</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-primary">2000+</div>
              <div className="text-sm text-gray-600 font-medium">満足いただいたお客様</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-primary">10+</div>
              <div className="text-sm text-gray-600 font-medium">経験年数</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-primary">#1</div>
              <div className="text-sm text-gray-600 font-medium">バンクーバー日系サロン</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - i's のこだわり */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">i's のこだわり</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              バンクーバーで日本人美容師が運営する、日本人美容師による日本人のための美容室です。<br />
              日本の最新技術や技術を常に取り入れているサロンで、またオープンして2年目ですが、<br />
              すでに2店舗展開しており、3店舗目も来年計画中の勢いのあるサロンです。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-primary/10 hover:border-primary/30 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/short-hair-specialist.jpg" 
                  alt="ショートヘア専門" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Scissors className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">女性ショートヘア専門</h3>
                <p className="text-gray-600 leading-relaxed">
                  ショートヘアに特化した技術で、一人ひとりの骨格や髪質に合わせた理想のスタイルを実現します。
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-primary/10 hover:border-primary/30 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/hair-treatment.jpg" 
                  alt="髪質改善ストレート" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">髪質改善ストレート</h3>
                <p className="text-gray-600 leading-relaxed">
                  最新の髪質改善技術で、ダメージを最小限に抑えながら美しいストレートヘアを実現します。
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-primary/10 hover:border-primary/30 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/salon-interior.jpg" 
                  alt="最新技術" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">最新技術</h3>
                <p className="text-gray-600 leading-relaxed">
                  日本の最新機械や技術を常に取り入れ、トレンドを押さえたスタイルをご提供します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">主なサービス</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "カット", price: "From $65", icon: Scissors, description: "骨格に合わせた理想のカット" },
              { name: "カラー", price: "From $120", icon: Sparkles, description: "髪に優しいカラーリング" },
              { name: "ストレート", price: "From $200", icon: Sparkles, description: "髪質改善ストレートパーマ" },
              { name: "パーマ", price: "From $150", icon: Sparkles, description: "ナチュラルなパーマスタイル" }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-3">{service.price}</p>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg shadow-lg">
                全メニューを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stylist Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">Meet Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">スタイリスト紹介</h2>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl border-primary/10">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[3/4] md:aspect-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600" 
                  alt="Harry" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-10 flex flex-col justify-center bg-gradient-to-br from-white to-secondary/10">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6 self-start">
                  Owner & Top Stylist
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Harry</h3>
                <p className="text-lg font-medium text-primary mb-4">オーナー・トップスタイリスト</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  ショートヘアとストレートパーマのスペシャリスト。アジア人の髪質を知り尽くした技術で、お客様一人ひとりに最適なスタイルをご提案します。日本とカナダでの豊富な経験を活かし、最新のトレンドと確かな技術でお客様の理想を実現します。
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          <div className="text-center mt-12">
            <Link href="/stylists">
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-6 text-lg">
                全スタイリストを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recruit Section - Gold Background */}
      <section className="py-24 bg-gradient-to-r from-primary/95 via-primary to-primary/95 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/salon-team.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium tracking-wider uppercase mb-4 block opacity-90">Join Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">海外で挑戦したいあなたへ</h2>
            <p className="text-lg mb-8 leading-relaxed opacity-95">
              バンクーバーの日系美容室で一番口コミが多く、唯一日本の最新機械や技術を常に取り入れているサロンで、またオープンして2年目ですが、すでに2店舗展開しており、3店舗目も来年計画中の勢いのあるサロンです。
            </p>
            <p className="text-lg mb-10 leading-relaxed opacity-95">
              お店としては海外に挑戦したいスタイリストを応援する仕組みにしているので、もし、学生さんの応援にも繋がるなら嬉しいなと思っております。実績を作る目的や学校の課題とかでも使えるのであれば、一緒に作れないかなと思っております。
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 py-6 text-lg shadow-xl">
                採用情報を見る
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-6 text-lg">
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">アクセス</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-primary/10 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Vancouver, BC<br />
                      Canada
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      ※詳細な住所はご予約時にお知らせします
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">営業時間</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>月〜金：10:00 - 19:00</p>
                      <p>土：10:00 - 18:00</p>
                      <p>日：10:00 - 18:00</p>
                      <p className="text-sm text-primary font-medium mt-2">定休日：火曜日</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
                    <p className="text-gray-600">
                      <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:info@ishairsalon.com" className="hover:text-primary transition-colors">info@ishairsalon.com</a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="aspect-square md:aspect-auto rounded-lg overflow-hidden shadow-lg border border-primary/10">
              <img 
                src="/images/map-placeholder.jpg" 
                alt="Map" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg shadow-lg">
              <MapPin className="mr-2 h-5 w-5" />
              Googleマップで開く
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

