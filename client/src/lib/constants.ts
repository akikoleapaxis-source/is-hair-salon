// i's. Japanese Hair & Eyelash Salon - Constants

export const APP_TITLE = "i's. Japanese Hair & Eyelash Salon";
export const APP_LOGO = "/logo.png";
export const APP_DESCRIPTION = "Vancouver, Richmond hair and eyelash salon with internationally experienced hair professionals. Rated as one of Vancouver's top hair & eyelash salons.";

// Salon Information
export const SALON_NAME = "i's. Japanese Hair & Eyelash Salon";
export const SALON_ADDRESS = "4000 No. 3 Road, Aberdeen Square 3rd Floor #3275 & #3230";
export const SALON_CITY = "Richmond";
export const SALON_PROVINCE = "British Columbia";
export const SALON_COUNTRY = "Canada";
export const SALON_POSTAL_CODE = "V6X 0J8";
export const SALON_PHONE = "+1 (604) 285-5585"; // Updated phone number from demo site/Google Maps
export const SALON_EMAIL = "info@is-salon.com"; // Placeholder, update if known

// Business Hours
export const BUSINESS_HOURS = {
  monday: { open: "10:00", close: "19:00", dayJa: "月曜日" },
  tuesday: { open: "10:00", close: "19:00", dayJa: "火曜日" },
  wednesday: { open: "10:00", close: "19:00", dayJa: "水曜日" },
  thursday: { open: "10:00", close: "19:00", dayJa: "木曜日" },
  friday: { open: "10:00", close: "19:00", dayJa: "金曜日" },
  saturday: { open: "10:00", close: "19:00", dayJa: "土曜日" },
  sunday: { open: "10:00", close: "19:00", dayJa: "日曜日" },
};

// Social Media
export const INSTAGRAM_URL = "https://www.instagram.com/harry_hairstylist/"; // Updated to Harry's
export const FRESHA_BOOKING_URL = "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx";

// Google Maps
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/AAJfuzdR5GijSrcu8"; // Updated from user input
export const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.5!2d-123.1364!3d49.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA5JzU5LjkiTiAxMjPCsDA4JzExLjAiVw!5e0!3m2!1sen!2sca!4v1234567890"; // Keep placeholder or update if I can generate a real one

// Service Categories
export interface ServiceCategory {
  id: string;
  name: string;
  nameJa: string;
  icon?: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: "haircut", name: "Haircut", nameJa: "ヘアカット" },
  { id: "eyelash", name: "Eyelash", nameJa: "アイラッシュ" },
  { id: "color", name: "Color", nameJa: "カラー" },
  { id: "perm", name: "Perm", nameJa: "パーマ" },
  { id: "straightening", name: "Japanese Straightening", nameJa: "縮毛矯正" },
  { id: "treatment", name: "Treatment", nameJa: "トリートメント" },
  { id: "headspa", name: "Head Spa", nameJa: "ヘッドスパ" },
];

// Reviews (sample data from Fresha)
export interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  commentJa?: string;
}

export const SAMPLE_REVIEWS: Review[] = [
  {
    id: "1",
    name: "Lucilla W",
    date: "2025-11-22",
    rating: 5,
    comment: "Thank you Harry, for working your magic! Feeling incredibly grateful for all your time, patience and expertise.",
  },
  {
    id: "2",
    name: "Juanne C",
    date: "2025-11-21",
    rating: 5,
    comment: "Did lashes with Sally and she's very knowledgeable and professional. She is willing to discuss and tailor the lashes to your preference.",
  },
  {
    id: "3",
    name: "Becky X",
    date: "2025-11-19",
    rating: 5,
    comment: "As usual, I am very satisfied with Sho's work.",
  },
  {
    id: "4",
    name: "Michelle S",
    date: "2025-11-19",
    rating: 5,
    comment: "Chippy and Sayaka were very professional and friendly! Chippy did an amazing job with my eyelashes and Sayaka did a great job with my hair.",
  },
  {
    id: "5",
    name: "Angelina H",
    date: "2025-11-18",
    rating: 5,
    comment: "Thank you Mii for taking care of me and getting the color I wanted :)",
  },
  {
    id: "6",
    name: "Hiroka O",
    date: "2025-11-18",
    rating: 5,
    comment: "Yuki was an amazing hairstylist! She took the time to carefully listen and truly understand what kind of style I was looking for.",
  },
];
