import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: "/", key: "nav.home" },
    { path: "/about", key: "nav.about" },
    { path: "/services", key: "nav.services" },
    { path: "/stylists", key: "nav.stylists" },
    { path: "/styles", key: "nav.styles" },
    { path: "/recruit", key: "nav.recruit" },
    { path: "/blog", key: "nav.blog" },
    { path: "/contact", key: "nav.contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-primary/10">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer group">
              <div className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">i's</div>
              <div className="text-sm text-gray-600">Hair Salon</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button variant="ghost" className="text-gray-700 hover:text-primary hover:bg-primary/5">
                  {t(item.key)}
                </Button>
              </Link>
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
            
            <Button className="ml-4 bg-primary hover:bg-primary/90 text-white shadow-md">
              {t('nav.book')}
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
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-primary hover:bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Button>
              </Link>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
              {t('nav.book')}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

