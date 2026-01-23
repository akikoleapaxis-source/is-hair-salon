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
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">商品紹介</h1>
              <p className="text-lg text-muted-foreground">
                サロンで使用している、プロフェッショナル仕様のヘアケア製品をご紹介します
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info */}
            <div className="mt-16 max-w-3xl mx-auto bg-primary/5 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">商品のご購入について</h3>
              <p className="text-muted-foreground leading-relaxed">
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

