import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", labelJa: "ホーム" },
    { path: "/about", label: "About", labelJa: "私たちについて" },
    { path: "/services", label: "Services", labelJa: "サービス" },
    { path: "/stylists", label: "Stylists", labelJa: "スタイリスト" },
    { path: "/styles", label: "Styles", labelJa: "ヘアスタイル" },
    { path: "/recruit", label: "Recruit", labelJa: "採用情報" },
    { path: "/blog", label: "Blog", labelJa: "ブログ" },
    { path: "/contact", label: "Contact", labelJa: "アクセス" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="text-2xl font-bold text-amber-800">i's</div>
              <div className="text-sm text-gray-600">Hair Salon</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button variant="ghost" className="text-gray-700 hover:text-amber-800">
                  {item.label}
                </Button>
              </Link>
            ))}
            <Button className="ml-4 bg-amber-800 hover:bg-amber-900 text-white">
              Book Online
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-amber-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white">
              Book Online
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

