import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ja' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.about': 'サロンについて',
    'nav.services': 'サービス',
    'nav.stylists': 'スタイリスト',
    'nav.styles': 'スタイル',
    'nav.recruit': '採用情報',
    'nav.blog': 'ブログ',
    'nav.contact': 'お問い合わせ',
    'nav.book': 'オンライン予約',
    
    // Hero
    'hero.badge': "Vancouver's Premier Japanese Hair Salon",
    'hero.title': '自分らしい\nスタイルを\n見つける',
    'hero.subtitle': 'ショートヘア＆ストレートパーマのスペシャリスト\n日本の最新技術で、理想のスタイルを実現',
    'hero.cta.book': 'オンライン予約',
    'hero.cta.gallery': 'スタイルギャラリー',
    
    // Stats
    'stats.stores': '店舗展開予定',
    'stats.customers': '満足いただいたお客様',
    'stats.experience': '経験年数',
    'stats.ranking': 'バンクーバー日系サロン',
    
    // About
    'about.label': 'Our Expertise',
    'about.title': "i's のこだわり",
    'about.description': 'バンクーバーで日本人美容師が運営する、日本人美容師による日本人のための美容室です。\n日本の最新技術や技術を常に取り入れているサロンで、またオープンして2年目ですが、\nすでに2店舗展開しており、3店舗目も来年計画中の勢いのあるサロンです。',
    'about.short.title': '女性ショートヘア専門',
    'about.short.desc': 'ショートヘアに特化した技術で、一人ひとりの骨格や髪質に合わせた理想のスタイルを実現します。',
    'about.straight.title': '髪質改善ストレート',
    'about.straight.desc': '最新の髪質改善技術で、ダメージを最小限に抑えながら美しいストレートヘアを実現します。',
    'about.tech.title': '最新技術',
    'about.tech.desc': '日本の最新機械や技術を常に取り入れ、トレンドを押さえたスタイルをご提供します。',
    
    // Services
    'services.label': 'Our Services',
    'services.title': '主なサービス',
    'services.cut': 'カット',
    'services.cut.desc': '骨格に合わせた理想のカット',
    'services.color': 'カラー',
    'services.color.desc': '髪に優しいカラーリング',
    'services.straight': 'ストレート',
    'services.straight.desc': '髪質改善ストレートパーマ',
    'services.perm': 'パーマ',
    'services.perm.desc': 'ナチュラルなパーマスタイル',
    'services.cta': '全メニューを見る',
    
    // Stylist
    'stylist.label': 'Meet Our Team',
    'stylist.title': 'スタイリスト紹介',
    'stylist.badge': 'Owner & Top Stylist',
    'stylist.role': 'オーナー・トップスタイリスト',
    'stylist.bio': 'ショートヘアとストレートパーマのスペシャリスト。アジア人の髪質を知り尽くした技術で、お客様一人ひとりに最適なスタイルをご提案します。日本とカナダでの豊富な経験を活かし、最新のトレンドと確かな技術でお客様の理想を実現します。',
    'stylist.cta': '全スタイリストを見る',
    
    // Recruit
    'recruit.label': 'Join Our Team',
    'recruit.title': '海外で挑戦したいあなたへ',
    'recruit.desc1': 'バンクーバーの日系美容室で一番口コミが多く、唯一日本の最新機械や技術を常に取り入れているサロンで、またオープンして2年目ですが、すでに2店舗展開しており、3店舗目も来年計画中の勢いのあるサロンです。',
    'recruit.desc2': 'お店としては海外に挑戦したいスタイリストを応援する仕組みにしているので、もし、学生さんの応援にも繋がるなら嬉しいなと思っております。実績を作る目的や学校の課題とかでも使えるのであれば、一緒に作れないかなと思っております。',
    'recruit.cta.info': '採用情報を見る',
    'recruit.cta.contact': 'お問い合わせ',
    
    // Access
    'access.label': 'Visit Us',
    'access.title': 'アクセス',
    'access.location': 'Location',
    'access.location.text': 'Vancouver, BC\nCanada',
    'access.location.note': '※詳細な住所はご予約時にお知らせします',
    'access.hours': '営業時間',
    'access.hours.weekday': '月〜金：10:00 - 19:00',
    'access.hours.sat': '土：10:00 - 18:00',
    'access.hours.sun': '日：10:00 - 18:00',
    'access.hours.closed': '定休日：火曜日',
    'access.contact': 'Contact',
    'access.cta': 'Googleマップで開く',
    
    // Footer
    'footer.about': 'サロンについて',
    'footer.menu': 'メニュー',
    'footer.follow': 'フォローする',
    'footer.copyright': '© 2025 i\'s Hair Salon. All rights reserved.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.stylists': 'Stylists',
    'nav.styles': 'Styles',
    'nav.recruit': 'Careers',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.book': 'Book Online',
    
    // Hero
    'hero.badge': "Vancouver's Premier Japanese Hair Salon",
    'hero.title': 'Discover\nYour\nTrue Style',
    'hero.subtitle': 'Specialists in Short Hair & Straightening\nAchieve your ideal look with the latest Japanese techniques',
    'hero.cta.book': 'Book Online',
    'hero.cta.gallery': 'Style Gallery',
    
    // Stats
    'stats.stores': 'Locations Planned',
    'stats.customers': 'Happy Customers',
    'stats.experience': 'Years of Experience',
    'stats.ranking': 'Vancouver Japanese Salon',
    
    // About
    'about.label': 'Our Expertise',
    'about.title': "What Makes i's Special",
    'about.description': 'A Japanese hair salon in Vancouver, run by Japanese stylists for the Japanese community.\nWe constantly incorporate the latest techniques and technology from Japan. Despite being only in our second year,\nwe have already expanded to 2 locations with a 3rd planned for next year.',
    'about.short.title': 'Short Hair Specialists',
    'about.short.desc': 'Expert techniques specialized in short hair, creating the ideal style tailored to each individual\'s bone structure and hair texture.',
    'about.straight.title': 'Hair Quality Improvement',
    'about.straight.desc': 'Achieve beautiful straight hair with the latest hair quality improvement technology while minimizing damage.',
    'about.tech.title': 'Latest Technology',
    'about.tech.desc': 'We constantly incorporate the latest equipment and techniques from Japan to provide you with trending styles.',
    
    // Services
    'services.label': 'Our Services',
    'services.title': 'Main Services',
    'services.cut': 'Cut',
    'services.cut.desc': 'Ideal cut tailored to your bone structure',
    'services.color': 'Color',
    'services.color.desc': 'Gentle hair coloring',
    'services.straight': 'Straightening',
    'services.straight.desc': 'Hair quality improvement straightening',
    'services.perm': 'Perm',
    'services.perm.desc': 'Natural perm styling',
    'services.cta': 'View All Services',
    
    // Stylist
    'stylist.label': 'Meet Our Team',
    'stylist.title': 'Our Stylists',
    'stylist.badge': 'Owner & Top Stylist',
    'stylist.role': 'Owner & Top Stylist',
    'stylist.bio': 'Specialist in short hair and straightening. With thorough knowledge of Asian hair texture, I propose the optimal style for each customer. Leveraging extensive experience in both Japan and Canada, I realize your ideal look with the latest trends and reliable techniques.',
    'stylist.cta': 'View All Stylists',
    
    // Recruit
    'recruit.label': 'Join Our Team',
    'recruit.title': 'For Those Who Want to Challenge Themselves Abroad',
    'recruit.desc1': 'We are the most reviewed Japanese salon in Vancouver and the only one constantly incorporating the latest Japanese equipment and techniques. Despite being only in our second year, we have already expanded to 2 locations with a 3rd planned for next year.',
    'recruit.desc2': 'We have a system to support stylists who want to challenge themselves abroad. If we can also support students, we would be delighted. If it can be used for building achievements or school projects, we would love to work together.',
    'recruit.cta.info': 'View Career Info',
    'recruit.cta.contact': 'Contact Us',
    
    // Access
    'access.label': 'Visit Us',
    'access.title': 'Access',
    'access.location': 'Location',
    'access.location.text': 'Vancouver, BC\nCanada',
    'access.location.note': '*Detailed address will be provided upon booking',
    'access.hours': 'Business Hours',
    'access.hours.weekday': 'Mon-Fri: 10:00 - 19:00',
    'access.hours.sat': 'Sat: 10:00 - 18:00',
    'access.hours.sun': 'Sun: 10:00 - 18:00',
    'access.hours.closed': 'Closed: Tuesday',
    'access.contact': 'Contact',
    'access.cta': 'Open in Google Maps',
    
    // Footer
    'footer.about': 'About',
    'footer.menu': 'Menu',
    'footer.follow': 'Follow Us',
    'footer.copyright': '© 2025 i\'s Hair Salon. All rights reserved.',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'ja' || saved === 'en') ? saved : 'ja';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

