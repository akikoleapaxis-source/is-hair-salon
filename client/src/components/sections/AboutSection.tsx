export default function AboutSection() {
  const features = [
    {
      title: "プロフェッショナルな技術",
      description:
        "日本で培った確かな技術と、バンクーバーでの豊富な経験を活かし、一人ひとりに最適なスタイルをご提案します。",
    },
    {
      title: "髪質改善",
      description:
        "最新の髪質改善技術で、ダメージを最小限に抑えながら、美しく健康的な髪を実現します。",
    },
    {
      title: "最新トレンド",
      description:
        "日本の最新トレンドと技術を常に取り入れ、バンクーバーで最先端のスタイルをご提供します。",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Vancouver sunset background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/backgrounds/vancouver-sunset-6.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/49 via-background/42 to-background/49" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">About Us</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            i's. のこだわり
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            美容を「お志事」として、技術でお客様を幸せにしたい——その想いを持ったプロフェッショナルが集まるサロンです。日本から最新の技術と製品を取り入れ、お客様と何度も確認しながら一緒に理想のスタイルを創り上げていきます。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image - Using actual salon interior photo */}
        <div className="mt-16 max-w-4xl mx-auto">
          <img
            src="/images/about/salon-interior-main.jpg"
            alt="i's. Interior"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

