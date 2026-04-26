import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Products() {
  const products = [
    {
      name: "ヘアケアシャンプー",
      description: "サロン専用の高品質シャンプー。髪と頭皮を優しく洗い上げます。",
      category: "シャンプー",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
    },
    {
      name: "トリートメント",
      description: "ダメージ補修効果の高いサロン専用トリートメント。",
      category: "トリートメント",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
    },
    {
      name: "ヘアオイル",
      description: "天然成分配合のヘアオイル。ツヤと潤いを与えます。",
      category: "スタイリング",
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop",
    },
    {
      name: "ヘアミスト",
      description: "UVカット効果のあるヘアミスト。外出時の髪を守ります。",
      category: "ヘアケア",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Products" 
        description="Explore our selection of professional hair care products available at i's. Hair Salon. Premium shampoos, treatments, and styling products."
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-[0.1em] uppercase">
                Products
              </h1>
              <p className="text-sm md:text-base text-foreground max-w-2xl mx-auto">
                サロンで使用している、プロフェッショナル仕様のヘアケア製品をご紹介します
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="section-spacing">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden bg-muted mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-foreground/60 uppercase tracking-wider mb-3">
                      {product.category}
                    </div>
                    <h3 className="text-lg md:text-xl font-normal mb-3 tracking-wide">{product.name}</h3>
                    <p className="text-sm text-foreground leading-relaxed">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info */}
            <div className="mt-24 max-w-3xl mx-auto text-center border-t border-border pt-16">
              <h3 className="text-xl md:text-2xl font-light mb-6 tracking-wide">商品のご購入について</h3>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                現在、これらの商品はサロンでのご紹介のみとなっております。
                <br />
                ご興味のある方は、ご来店時にスタッフまでお気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

