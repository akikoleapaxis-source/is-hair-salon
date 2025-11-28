import { useParams, Link } from "wouter";
import { staffMembers } from "@/lib/staffData";
import { ArrowLeft, Instagram, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function StaffDetail() {
  const params = useParams();
  const staffId = params.id;
  
  const staff = staffMembers.find((s) => s.id === staffId);

  // Load Instagram embed script
  useEffect(() => {
    // Check if script already exists
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script exists, process embeds
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }
  }, [staff?.instagramPosts]);

  if (!staff) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">スタッフが見つかりません</h1>
            <Link href="/#staff">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                スタッフ一覧に戻る
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-[#faf8f5] to-[#f5f1ed]">
          <div className="container">
            <Link href="/#staff">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                スタッフ一覧に戻る
              </Button>
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Staff Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#f5f1ed]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#fde8d8] flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary">
                        {staff.nameJa.charAt(0)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ※ 写真は後日追加予定
                    </p>
                  </div>
                </div>
              </div>

              {/* Staff Info */}
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                  <p className="text-sm font-medium text-primary">{staff.roleJa}</p>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {staff.name}
                </h1>
                
                {staff.experienceJa && (
                  <div className="flex items-center gap-2 mb-6">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="font-semibold">5.0</span>
                    <span className="text-muted-foreground">· {staff.experienceJa}の経験</span>
                  </div>
                )}

                {staff.specialtyJa && staff.specialtyJa.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3">専門分野</h3>
                    <div className="flex flex-wrap gap-2">
                      {staff.specialtyJa.map((spec, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">プロフィール</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {staff.bioJa}
                  </p>
                </div>

                {staff.instagram && (
                  <a
                    href={staff.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium mb-8 block"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagramで最新スタイルを見る
                  </a>
                )}

                <div className="mt-8">
                  <a
                    href={staff.freshaBookingUrl || "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full md:w-auto">
                      {staff.name}を指名予約する
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Gallery Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {staff.name}のスタイルギャラリー
              </h2>
              <p className="text-lg text-muted-foreground">
                Instagramから最新のスタイル写真をご覧いただけます
              </p>
            </div>

            {staff.instagramPosts && staff.instagramPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {staff.instagramPosts.map((post) => (
                    <div key={post.id} className="instagram-embed-container">
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={post.postUrl}
                        data-instgrm-version="14"
                        style={{
                          background: '#FFF',
                          border: '0',
                          borderRadius: '3px',
                          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                          margin: '1px',
                          maxWidth: '540px',
                          minWidth: '326px',
                          padding: '0',
                          width: 'calc(100% - 2px)'
                        }}
                      >
                        <a href={post.postUrl} target="_blank" rel="noopener noreferrer">
                          View this post on Instagram
                        </a>
                      </blockquote>
                    </div>
                  ))}
                </div>
                
                {staff.instagram && (
                  <div className="mt-12 text-center">
                    <a
                      href={staff.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="lg">
                        <Instagram className="w-5 h-5 mr-2" />
                        Instagramでもっと見る
                      </Button>
                    </a>
                  </div>
                )}
              </>
            ) : (
              <div className="max-w-4xl mx-auto">
                <div className="bg-[#f5f1ed]/80 rounded-2xl p-12 text-center">
                  <Instagram className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg text-muted-foreground mb-6">
                    Instagram投稿は準備中です
                  </p>
                  {staff.instagram && (
                    <a
                      href={staff.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="lg">
                        <Instagram className="w-5 h-5 mr-2" />
                        Instagramで最新スタイルを見る
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Reviews Section - Placeholder */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-[#faf8f5] to-[#f5f1ed]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {staff.nameJa}のレビュー
              </h2>
              <p className="text-lg text-muted-foreground">
                お客様からいただいた評価とコメント
              </p>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-muted-foreground mb-8">
                レビューは準備中です
              </p>
              <a
                href="https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  Freshaでレビューを見る
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

