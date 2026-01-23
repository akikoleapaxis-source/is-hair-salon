import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image = "https://is-hair-salon.netlify.app/images/salon-interior.jpg",
  url 
}: SEOProps) {
  const { language } = useLanguage();
  
  const siteTitle = "i's. Japanese Hair & Eyelash Salon | Vancouver";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  const defaultDescription = language === 'ja' 
    ? "バンクーバー（リッチモンド）の日本人経営美容室 i's.（アイズ）。日本の繊細な技術とホスピタリティで、あなただけの理想のスタイルを叶えます。縮毛矯正、デジタルパーマ、カットなど。"
    : "i's. is Vancouver's premier Japanese Hair & Eyelash salon in Richmond, specializing in Japanese Straightening, Digital Perms, and precision cuts. Authentic Japanese technique and hospitality.";

  const metaDescription = description || defaultDescription;
  
  const defaultKeywords = "Japanese hair salon Vancouver, Japanese hairstylist Vancouver, Japanese straightening, Digital Perm, Hair salon Richmond BC, Eyelash extensions, i's hair salon, バンクーバー 美容室, 日本人美容師, 縮毛矯正, デジタルパーマ";
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  const currentUrl = url || window.location.href;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={language === 'ja' ? 'ja_JP' : 'en_CA'} />
      <meta property="og:site_name" content="i's. Japanese Hair & Eyelash salon" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
}
