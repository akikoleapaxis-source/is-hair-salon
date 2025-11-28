import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "/", label: "Home", isAnchor: false },
    { href: "#about", label: "About", isAnchor: true },
    { href: "#services", label: "Services", isAnchor: true },
    { href: "#staff", label: "Staff", isAnchor: true },
    { href: "#gallery", label: "Gallery", isAnchor: true },
    { href: "/menu", label: "Menu", isAnchor: false },
    { href: "/news", label: "News", isAnchor: false },
  ];

  const handleNavClick = (href: string, isAnchor: boolean) => {
    if (isAnchor && href.startsWith('#')) {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-primary/10">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center cursor-pointer group">
              <img src="/logo.png" alt="i's." className="h-12 w-auto" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.isAnchor ? (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="hover:text-primary hover:bg-primary/5"
                  onClick={() => handleNavClick(item.href, true)}
                >
                  {item.label}
                </Button>
              ) : (
                <Link key={item.href} href={item.href}>
                  <a>
                    <Button variant="ghost" className="hover:text-primary hover:bg-primary/5">
                      {item.label}
                    </Button>
                  </a>
                </Link>
              )
            ))}
            
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="ml-2 text-gray-600 hover:text-primary hover:bg-primary/5"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === 'ja' ? 'EN' : '日本語'}
            </Button>
            
            <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-white shadow-md">
              <a href="https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx" target="_blank" rel="noopener noreferrer">
                予約
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-gray-600 hover:text-primary"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === 'ja' ? 'EN' : 'JA'}
            </Button>
            <button
              className="p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-primary/10">
            {navItems.map((item) => (
              item.isAnchor ? (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="w-full justify-start hover:text-primary hover:bg-primary/5"
                  onClick={() => {
                    handleNavClick(item.href, true);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </Button>
              ) : (
                <Link key={item.href} href={item.href}>
                  <a className="w-full">
                    <Button variant="ghost" className="w-full justify-start hover:text-primary hover:bg-primary/5" onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Button>
                  </a>
                </Link>
              )
            ))}
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
              <a href="https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx" target="_blank" rel="noopener noreferrer">
                予約
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

