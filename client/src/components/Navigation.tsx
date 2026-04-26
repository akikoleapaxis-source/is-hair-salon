import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "/", label: "Home", isAnchor: false },
    { href: "#about", label: "Concept", isAnchor: true },
    { href: "/signature", label: "Signature", isAnchor: false },
    { href: "/stylists", label: "Stylists", isAnchor: false },
    { href: "#gallery", label: "Gallery", isAnchor: true },
    { href: "/menu", label: "Menu", isAnchor: false },
    { href: "/news", label: "News", isAnchor: false },
    { href: "/faq", label: "FAQ", isAnchor: false },
    { href: "/products", label: "Products", isAnchor: false },
  ];

  const handleNavClick = (href: string, isAnchor: boolean) => {
    if (isAnchor && href.startsWith('#')) {
      const id = href.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // If element exists on current page, scroll to it
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else {
        // If element doesn't exist (we're on a different page), navigate to home with hash
        window.location.href = '/' + href;
      }
    }
  };



  return (
    <nav className="bg-white/98 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-36">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer group -ml-16 mt-2">
            <img 
              src="/images/is-logo-new.png" 
              alt="i's Hair Salon" 
              className="h-30 w-auto" 
              style={{ filter: 'brightness(0) sepia(1) hue-rotate(340deg) saturate(1.5) brightness(0.3) contrast(1.2)' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.isAnchor ? (
                <button
                  key={item.href}
                  className="px-4 py-2 text-sm uppercase tracking-wider hover:text-primary transition-colors"
                  onClick={() => handleNavClick(item.href, true)}
                >
                  {item.label}
                </button>
              ) : (
                <Link key={item.href} href={item.href} className="px-4 py-2 text-sm uppercase tracking-wider hover:text-primary transition-colors">
                  {item.label}
                </Link>
              )
            ))}
            
            <Button 
              asChild 
              className="ml-4 bg-[#4A3B32] text-white hover:bg-[#4A3B32]/80 uppercase tracking-wider text-sm"
            >
              <a href="https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx" target="_blank" rel="noopener noreferrer">
                Book
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="ml-2 px-2 text-xs font-medium"
              onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
            >
              {language === 'en' ? 'JP' : 'EN'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              item.isAnchor ? (
                <button
                  key={item.href}
                  className="w-full text-left px-4 py-3 text-sm uppercase tracking-wider hover:bg-secondary transition-colors"
                  onClick={() => {
                    handleNavClick(item.href, true);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ) : (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className="block px-4 py-3 text-sm uppercase tracking-wider hover:bg-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="px-4 pt-4 flex gap-2">
              <Button 
                asChild 
                className="flex-1 bg-[#4A3B32] text-white hover:bg-[#4A3B32]/80 uppercase tracking-wider"
              >
                <a href="https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx" target="_blank" rel="noopener noreferrer">
                  Book
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-12"
                onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
              >
                {language === 'en' ? 'JP' : 'EN'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
