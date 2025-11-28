import { Instagram, Facebook } from "lucide-react";
import { APP_LOGO, SALON_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={APP_LOGO} alt={SALON_NAME} className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed max-w-md">
              バンクーバーで日本の最新技術を提供する、プレミアムな日系美容室・アイラッシュサロンです。
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/is.japanese_hair.eyelash_salon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">クイックリンク</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  サービス
                </a>
              </li>
              <li>
                <a href="/#staff" className="hover:text-primary transition-colors">
                  スタッフ
                </a>
              </li>
              <li>
                <a href="/#gallery" className="hover:text-primary transition-colors">
                  ギャラリー
                </a>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-bold mb-4">その他</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/menu" className="hover:text-primary transition-colors">
                  メニュー・料金
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-primary transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="/recruit" className="hover:text-primary transition-colors">
                  リクルート
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-primary transition-colors">
                  商品紹介
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {SALON_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

