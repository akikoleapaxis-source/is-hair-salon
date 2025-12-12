import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ja' | 'zh';

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
    'hero.subtitle': '日本の最新技術で、あなたの理想のスタイルを実現\nカット、カラー、パーマ、ストレート、トリートメント',
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
    'about.description': 'バンクーバーで日本人美容師が運営する、日本人美容師による日本人のための美容室です。\n日本の最新技術や技術を常に取り入れているサロンで、カナダ(バンクーバー)と日本(札幌)の2店舗を展開しており、\n多くのお客様にご来店いただいている勢いのあるサロンです。',
    'about.short.title': 'あらゆるスタイルに対応',
    'about.short.desc': 'ショート、ミディアム、ロングまで、一人ひとりの骨格や髪質に合わせた理想のスタイルを実現します。',
    'about.straight.title': '髪質改善ストレート',
    'about.straight.desc': '最新の髪質改善技術で、ダメージを最小限に抑えながら美しいストレートヘアを実現します。',
    'about.tech.title': '最新技術',
    'about.tech.desc': '日本の最新機械や技術を常に取り入れ、トレンドを押さえたスタイルをご提供します。',
    
    // Services
    'services.label': 'Our Services',
    'services.title': '主なサービス',
    'services.subtitle': '日本の最新技術を取り入れた、プロフェッショナルなサービスをご提供します',
    'services.cut': 'カット',
    'services.cut.title': 'ヘアカット',
    'services.cut.desc': '骨格に合わせた理想のカット',
    'services.color': 'カラー',
    'services.color.title': 'カラーリング',
    'services.color.desc': '髪に優しいカラーリング',
    'services.straight': 'ストレート',
    'services.straight.title': '髪質改善ストレート',
    'services.straight.desc': '髪質改善ストレートパーマ',
    'services.treatment.title': 'トリートメント',
    'services.treatment.desc': '髪に栄養を与えるトリートメント',
    'services.eyelash.title': 'アイラッシュ',
    'services.eyelash.desc': 'プロフェッショナルな施術',
    'services.perm': 'パーマ',
    'services.perm.title': 'パーマ',
    'services.perm.desc': 'ナチュラルなパーマスタイル',
    'services.cta': '全メニューを見る',
    
    // Stylist
    'staff.subtitle': '経験豊富なプロフェッショナルが、あなたの理想のスタイルを実現します',
    'stylist.label': 'Meet Our Team',
    'stylist.title': 'スタイリスト紹介',
    'stylist.badge': 'Owner & Top Stylist',
    'stylist.role': 'オーナー・トップスタイリスト',
    'stylist.bio': 'ショートヘアとストレートパーマのスペシャリスト。アジア人の髪質を知り尽くした技術で、お客様一人ひとりに最適なスタイルをご提案します。日本とカナダでの豊富な経験を活かし、最新のトレンドと確かな技術でお客様の理想を実現します。',
    'stylist.cta': '全スタイリストを見る',
    
    // Recruit
    'recruit.label': 'Join Our Team',
    'recruit.title': '海外で挑戦したいあなたへ',
    'recruit.desc1': 'バンクーバーの日系美容室で一番口コミが多く、唯一日本の最新機械や技術を常に取り入れているサロンです。カナダ(バンクーバー)と日本(札幌)の2店舗を展開しており、多くのお客様にご来店いただいている勢いのあるサロンです。',
    'recruit.desc2': 'お店としては海外に挑戦したいスタイリストを応援する仕組みにしているので、もし、学生さんの応援にも繋がるなら嬉しいなと思っております。実績を作る目的や学校の課題とかでも使えるのであれば、一緒に作れないかなと思っております。',
    'recruit.cta.info': '採用情報を見る',
    'recruit.cta.contact': 'お問い合わせ',
    
    // Access
    'access.label': 'Visit Us',
    'access.title': 'アクセス',
    'access.subtitle': 'Richmond, BC の Aberdeen Square 内にございます',
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
    
    // Gallery
    'gallery.label': 'Style Gallery',
    'gallery.title': 'スタイルギャラリー',
    'gallery.subtitle': '実際の施術例をご覧ください。あなたにぴったりのスタイルが見つかります',
    'gallery.desc': '実際の施術例をご覧ください。あなたにぴったりのスタイルが見つかります。',
    'gallery.style': 'スタイル',
    'gallery.cta': 'もっと見る',
    
    // Testimonials
    'reviews.subtitle': 'お客様からいただいた声をご紹介します',
    'testimonials.label': 'Customer Reviews',
    'testimonials.title': 'お客様の声',
    'testimonials.review1': 'ショートヘアのカットをお願いしました。骨格に合わせた提案で、想像以上の仕上がりに大満足です！日本語で細かく相談できるのも安心でした。',
    'testimonials.review2': 'ストレートパーマをかけていただきました。髪質改善効果もあり、サラサラの髪になりました。技術力の高さを実感しています。',
    'testimonials.review3': 'バンクーバーで日本人美容師さんを探していて、こちらに出会えて本当に良かったです。リラックスして施術を受けられます。',
    'testimonials.verified': '認証済みレビュー',
    
    // FAQ
    'faq.label': 'FAQ',
    'faq.title': 'よくある質問',
    'faq.q1': '予約は必要ですか？',
    'faq.a1': 'はい、完全予約制となっております。オンライン予約またはお電話にてご予約ください。',
    'faq.q2': '初めてでも大丈夫ですか？',
    'faq.a2': 'もちろんです！初めてのお客様には、カウンセリングでしっかりとご要望をお伺いし、最適なスタイルをご提案いたします。',
    'faq.q3': 'カード払いは可能ですか？',
    'faq.a3': 'はい、各種クレジットカード、デビットカードがご利用いただけます。',
    'faq.q4': '駐車場はありますか？',
    'faq.a4': 'サロン近くに有料パーキングがございます。詳細はご予約時にお問い合わせください。',
    'faq.q5': 'キャンセル料はかかりますか？',
    'faq.a5': '当日キャンセルの場合、キャンセル料が発生する場合がございます。変更・キャンセルはお早めにご連絡ください。',
    
    // Contact Form
    'contact.label': 'Contact Us',
    'contact.title': 'お問い合わせ',
    'contact.desc': 'ご質問やご予約に関するお問い合わせは、下記フォームよりお気軽にご連絡ください。',
    'contact.form.name': 'お名前',
    'contact.form.name.placeholder': '山田 太郎',
    'contact.form.email': 'メールアドレス',
    'contact.form.email.placeholder': 'example@email.com',
    'contact.form.phone': '電話番号',
    'contact.form.phone.placeholder': '+1 (234) 567-8900',
    'contact.form.service': 'ご希望のサービス',
    'contact.form.service.cut': 'カット',
    'contact.form.service.color': 'カラー',
    'contact.form.service.straight': 'ストレート',
    'contact.form.service.perm': 'パーマ',
    'contact.form.service.other': 'その他',
    'contact.form.message': 'メッセージ',
    'contact.form.message.placeholder': 'ご質問やご要望をお聞かせください',
    'contact.form.submit': '送信する',
    
    // Footer
    'footer.description': 'バンクーバーで日本の最新技術を提供する、プレミアムな日系美容室・アイラッシュサロンです。',
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
    'hero.subtitle': 'Achieve your ideal look with the latest Japanese techniques\nCut, Color, Perm, Straightening, Treatment',
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
    'about.description': 'A Japanese hair salon in Vancouver, run by Japanese stylists for the Japanese community.\nWe constantly incorporate the latest techniques and technology from Japan. We have 2 locations in Canada (Vancouver) and Japan (Sapporo),\nserving many satisfied customers with our growing reputation.',
    'about.short.title': 'All Styles Welcome',
    'about.short.desc': 'From short to medium to long, we create the ideal style tailored to each individual\'s bone structure and hair texture.',
    'about.straight.title': 'Hair Quality Improvement',
    'about.straight.desc': 'Achieve beautiful straight hair with the latest hair quality improvement technology while minimizing damage.',
    'about.tech.title': 'Latest Technology',
    'about.tech.desc': 'We constantly incorporate the latest equipment and techniques from Japan to provide you with trending styles.',
    
    // Services
    'services.label': 'Our Services',
    'services.title': 'Main Services',
    'services.subtitle': 'Professional services incorporating the latest Japanese techniques',
    'services.cut': 'カット',
    'services.cut.title': 'Haircut',
    'services.cut.desc': 'Ideal cut tailored to your bone structure',
    'services.color': 'カラー',
    'services.color.title': 'Hair Color',
    'services.color.desc': 'Gentle hair coloring',
    'services.straight': 'ストレート',
    'services.straight.title': 'Hair Quality Improvement Straightening',
    'services.straight.desc': 'Hair quality improvement straightening',
    'services.treatment.title': 'Treatment',
    'services.treatment.desc': 'Nourishing hair treatment',
    'services.eyelash.title': 'Eyelash',
    'services.eyelash.desc': 'Professional eyelash services',
    'services.perm': 'パーマ',
    'services.perm.title': 'Perm',
    'services.perm.desc': 'Natural perm styling',
    'services.cta': 'View All Services',
    
    // Stylist
    'staff.subtitle': 'Experienced professionals who will realize your ideal style',
    'stylist.label': 'Meet Our Team',
    'stylist.title': 'Our Stylists',
    'stylist.badge': 'Owner & Top Stylist',
    'stylist.role': 'Owner & Top Stylist',
    'stylist.bio': 'Specialist in short hair and straightening. With thorough knowledge of Asian hair texture, I propose the optimal style for each customer. Leveraging extensive experience in both Japan and Canada, I realize your ideal look with the latest trends and reliable techniques.',
    'stylist.cta': 'View All Stylists',
    
    // Recruit
    'recruit.label': 'Join Our Team',
    'recruit.title': 'For Those Who Want to Challenge Themselves Abroad',
    'recruit.desc1': 'We are the most reviewed Japanese salon in Vancouver and the only one constantly incorporating the latest Japanese equipment and techniques. We have 2 locations in Canada (Vancouver) and Japan (Sapporo), serving many satisfied customers with our growing reputation.',
    'recruit.desc2': 'We have a system to support stylists who want to challenge themselves abroad. If we can also support students, we would be delighted. If it can be used for building achievements or school projects, we would love to work together.',
    'recruit.cta.info': 'View Career Info',
    'recruit.cta.contact': 'Contact Us',
    
    // Access
    'access.label': 'Visit Us',
    'access.title': 'Access',
    'access.subtitle': 'Located in Aberdeen Square, Richmond, BC',
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
    
    // Gallery
    'gallery.label': 'Style Gallery',
    'gallery.title': 'Style Gallery',
    'gallery.subtitle': 'Browse our actual styling examples. Find the perfect style for you',
    'gallery.desc': 'Browse our actual styling examples. Find the perfect style for you.',
    'gallery.style': 'Style',
    'gallery.cta': 'View More',
    
    // Testimonials
    'reviews.subtitle': 'Hear what our customers have to say',
    'testimonials.label': 'Customer Reviews',
    'testimonials.title': 'What Our Customers Say',
    'testimonials.review1': 'I had my short hair cut here. The stylist\'s suggestions based on my bone structure exceeded my expectations! Being able to discuss details in Japanese was very reassuring.',
    'testimonials.review2': 'I got a straightening treatment. My hair became silky smooth with hair quality improvement effects. I can really feel the high level of technical skill.',
    'testimonials.review3': 'I was looking for a Japanese hairstylist in Vancouver and I\'m so glad I found this salon. I can relax during the treatment.',
    'testimonials.verified': 'Verified Review',
    
    // FAQ
    'faq.label': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Do I need a reservation?',
    'faq.a1': 'Yes, we operate by appointment only. Please book online or call us.',
    'faq.q2': 'Is it okay if I\'m a first-time customer?',
    'faq.a2': 'Of course! For first-time customers, we conduct thorough consultations to understand your needs and propose the optimal style.',
    'faq.q3': 'Do you accept card payments?',
    'faq.a3': 'Yes, we accept all major credit cards and debit cards.',
    'faq.q4': 'Is there parking available?',
    'faq.a4': 'There is paid parking near the salon. Please inquire when making your reservation for details.',
    'faq.q5': 'Is there a cancellation fee?',
    'faq.a5': 'For same-day cancellations, a cancellation fee may apply. Please contact us as early as possible for changes or cancellations.',
    
    // Contact Form
    'contact.label': 'Contact Us',
    'contact.title': 'Contact Us',
    'contact.desc': 'For questions or booking inquiries, please feel free to contact us using the form below.',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'John Doe',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'example@email.com',
    'contact.form.phone': 'Phone',
    'contact.form.phone.placeholder': '+1 (234) 567-8900',
    'contact.form.service': 'Desired Service',
    'contact.form.service.cut': 'Cut',
    'contact.form.service.color': 'Color',
    'contact.form.service.straight': 'Straightening',
    'contact.form.service.perm': 'Perm',
    'contact.form.service.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Please let us know your questions or requests',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.description': 'A premium Japanese hair salon and eyelash salon in Vancouver, providing the latest Japanese techniques.',
    'footer.about': 'About',
    'footer.menu': 'Menu',
    'footer.follow': 'Follow Us',
    'footer.copyright': '© 2025 i\'s Hair Salon. All rights reserved.',
  },
  zh: {
    // Placeholder for Chinese translations - currently using English
    // Will be replaced with actual Chinese translations later
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.stylists': 'Stylists',
    'nav.styles': 'Styles',
    'nav.recruit': 'Careers',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.book': 'Book Online',
    'hero.badge': "Vancouver's Premier Japanese Hair Salon",
    'hero.title': 'Discover\nYour\nTrue Style',
    'hero.subtitle': 'Achieve your ideal look with the latest Japanese techniques\nCut, Color, Perm, Straightening, Treatment',
    'hero.cta.book': 'Book Online',
    'hero.cta.gallery': 'Style Gallery',
    'stats.stores': 'Locations Planned',
    'stats.customers': 'Happy Customers',
    'stats.experience': 'Years of Experience',
    'stats.ranking': 'Vancouver Japanese Salon',
    'about.label': 'Our Expertise',
    'about.title': "What Makes i's Special",
    'about.description': 'A Japanese hair salon in Vancouver, run by Japanese stylists for the Japanese community.\nWe constantly incorporate the latest techniques and technology from Japan. We have 2 locations in Canada (Vancouver) and Japan (Sapporo),\nserving many satisfied customers with our growing reputation.',
    'about.short.title': 'All Styles Welcome',
    'about.short.desc': 'From short to medium to long, we create the ideal style tailored to each individual\'s bone structure and hair texture.',
    'about.straight.title': 'Hair Quality Improvement',
    'about.straight.desc': 'Achieve beautiful straight hair with the latest hair quality improvement technology while minimizing damage.',
    'about.tech.title': 'Latest Technology',
    'about.tech.desc': 'We constantly incorporate the latest equipment and techniques from Japan to provide you with trending styles.',
    'services.label': 'Our Services',
    'services.title': 'Main Services',
    'services.subtitle': 'Professional services incorporating the latest Japanese techniques',
    'services.cut': 'Cut',
    'services.cut.title': 'Haircut',
    'services.cut.desc': 'Ideal cut tailored to your bone structure',
    'services.color': 'Color',
    'services.color.title': 'Hair Color',
    'services.color.desc': 'Gentle hair coloring',
    'services.straight': 'Straightening',
    'services.straight.title': 'Hair Quality Improvement Straightening',
    'services.straight.desc': 'Hair quality improvement straightening',
    'services.treatment.title': 'Treatment',
    'services.treatment.desc': 'Nourishing hair treatment',
    'services.eyelash.title': 'Eyelash',
    'services.eyelash.desc': 'Professional eyelash services',
    'services.perm': 'Perm',
    'services.perm.desc': 'Natural perm styling',
    'services.cta': 'View All Services',
    'staff.subtitle': 'Experienced professionals who will realize your ideal style',
    'stylist.label': 'Meet Our Team',
    'stylist.title': 'Our Stylists',
    'stylist.badge': 'Owner & Top Stylist',
    'stylist.role': 'Owner & Top Stylist',
    'stylist.bio': 'Specialist in short hair and straightening. With thorough knowledge of Asian hair texture, I propose the optimal style for each customer.',
    'stylist.cta': 'View All Stylists',
    'recruit.label': 'Join Our Team',
    'recruit.title': 'For Those Who Want to Challenge Themselves Abroad',
    'recruit.desc1': 'We are the most reviewed Japanese salon in Vancouver.',
    'recruit.desc2': 'We have a system to support stylists who want to challenge themselves abroad.',
    'recruit.cta.info': 'View Career Info',
    'recruit.cta.contact': 'Contact Us',
    'access.label': 'Visit Us',
    'access.title': 'Access',
    'access.subtitle': 'Located in Aberdeen Square, Richmond, BC',
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
    'gallery.label': 'Style Gallery',
    'gallery.title': 'Style Gallery',
    'gallery.subtitle': 'Browse our actual styling examples. Find the perfect style for you',
    'gallery.desc': 'Browse our actual styling examples.',
    'gallery.style': 'Style',
    'gallery.cta': 'View More',
    'reviews.subtitle': 'Hear what our customers have to say',
    'testimonials.label': 'Customer Reviews',
    'testimonials.title': 'What Our Customers Say',
    'testimonials.review1': 'Great service!',
    'testimonials.review2': 'Excellent styling!',
    'testimonials.review3': 'Highly recommended!',
    'testimonials.verified': 'Verified Review',
    'faq.label': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Do I need an appointment?',
    'faq.a1': 'Yes, we operate by appointment only.',
    'faq.q2': 'Is it okay for first-time customers?',
    'faq.a2': 'Of course! We provide thorough consultation.',
    'faq.q3': 'Can I pay by card?',
    'faq.a3': 'Yes, we accept all major credit and debit cards.',
    'faq.q4': 'Is there parking?',
    'faq.a4': 'Paid parking is available near the salon.',
    'faq.q5': 'Is there a cancellation fee?',
    'faq.a5': 'Cancellation fees may apply for same-day cancellations.',
    'contact.label': 'Contact Us',
    'contact.title': 'Contact',
    'contact.desc': 'Please feel free to contact us.',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your Name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'example@email.com',
    'contact.form.phone': 'Phone',
    'contact.form.phone.placeholder': '+1 (234) 567-8900',
    'contact.form.service': 'Service',
    'contact.form.service.cut': 'Cut',
    'contact.form.service.color': 'Color',
    'contact.form.service.straight': 'Straightening',
    'contact.form.service.perm': 'Perm',
    'contact.form.service.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Your message',
    'contact.form.submit': 'Submit',
    'footer.description': 'A premium Japanese hair salon in Vancouver.',
    'footer.about': 'About',
    'footer.menu': 'Menu',
    'footer.follow': 'Follow Us',
    'footer.copyright': '© 2025 i\'s Hair Salon. All rights reserved.',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Force English as default, clear any old Japanese settings
    localStorage.removeItem('language');
    return 'en';
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

