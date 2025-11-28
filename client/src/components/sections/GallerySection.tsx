export default function GallerySection() {
  const galleryImages = [
    "/images/gallery/eyelash-1.avif",
    "/images/gallery/hair-color-1.avif",
    "/images/gallery/hair-treatment-1.avif",
    "/images/gallery/hair-balayage-1.avif",
    "/images/gallery/salon-interior-1.avif",
    "/images/gallery/hair-cut-1.avif",
  ];

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">Style Gallery</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            スタイルギャラリー
          </h2>
          <p className="text-lg text-muted-foreground">
            実際の施術例をご覧ください。あなたにぴったりのスタイルが見つかります
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group aspect-[3/4] overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image}
                alt={`Style ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/is.japanese_hair.eyelash_salon/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Instagramでもっと見る
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

