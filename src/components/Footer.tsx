import { Link } from "wouter";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">i's Hair Salon</h3>
            <p className="text-sm mb-4">
              バンクーバーの日系美容室。ショートヘア＆ストレートパーマに特化し、
              日本の最新技術とサービスをお届けします。
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/harry_hairstylist/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-amber-500">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-amber-500">About Us</Link></li>
              <li><Link href="/services" className="hover:text-amber-500">Services</Link></li>
              <li><Link href="/stylists" className="hover:text-amber-500">Stylists</Link></li>
              <li><Link href="/styles" className="hover:text-amber-500">Hair Styles</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-amber-500">Cut & Style</li>
              <li className="hover:text-amber-500">Hair Color</li>
              <li className="hover:text-amber-500">Straightening</li>
              <li className="hover:text-amber-500">Perm</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Vancouver, BC, Canada</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (604) XXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@ishairsalon.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} i's Hair Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

