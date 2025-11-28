import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ServicesSection() {
  const services = [
    {
      image: "/images/services/haircut-service.avif",
      title: "ヘアカット",
      description: "骨格に合わせた理想のカット",
      price: "$60〜",
    },
    {
      image: "/images/services/color-service.avif",
      title: "カラー",
      description: "髪に優しいカラーリング",
      price: "$80〜",
    },
    {
      image: "/images/services/eyelash-service.avif",
      title: "アイラッシュ",
      description: "プロフェッショナルな施術",
      price: "$70〜",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#faf8f5] via-[#f5f1ed] to-[#faf8f5]">
      {/* Warm beige gradient background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(237,147,96,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(237,147,96,0.08),transparent_50%)]" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">Our Services</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">主なサービス</h2>
          <p className="text-lg text-muted-foreground">
            日本の最新技術を取り入れた、プロフェッショナルなサービスをご提供します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/10"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-xl font-bold text-primary">{service.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/menu">
              <a>全メニューを見る</a>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

