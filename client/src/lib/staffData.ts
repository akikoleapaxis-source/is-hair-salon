export interface InstagramPost {
  id: string;
  postUrl: string; // Instagram投稿のURL(例: https://www.instagram.com/p/xxxxx/)
}

export interface Staff {
  id: string;
  name: string;
  nameJa: string;
  role: string;
  roleJa: string;
  category: 'hair' | 'eyelash';
  specialty: string[];
  specialtyJa: string[];
  bio: string;
  bioJa: string;
  experience: string;
  experienceJa: string;
  instagram?: string;
  freshaBookingUrl?: string;
  instagramPosts?: InstagramPost[];
  galleryImages?: string[]; // ローカル保存されたギャラリー画像パス
  image: string; // 仮の画像パス
}

export const staffMembers: Staff[] = [
  // Hair Stylists (in order: Harry, Sho, Sayaka, Mii, Kana)
  {
    id: "harry",
    name: "Harry",
    nameJa: "ハリー",
    role: "Owner & Hair Stylist",
    roleJa: "オーナー・ヘアスタイリスト",
    category: 'hair',
    specialty: ["Haircut", "Color", "Japanese Straightening"],
    specialtyJa: ["ヘアカット", "カラー", "縮毛矯正"],
    bio: "Specializing in short hair and Japanese straightening with over 20 years of experience. Harry's meticulous consultation and expert technique create manageable, long-lasting styles. For him, hair and beauty is his calling — making people happy through his craft.",
    bioJa: "ショートヘアと縮毛矯正のスペシャリストとして、20年以上のキャリアを持つハリー。丁寧なカウンセリングと確かな技術で、ご自宅でも扱いやすく、美しさが長持ちするスタイルをご提案します。「美容は天職」と語り、ヘアスタイルを通じてお客様を笑顔にすることに情熱を注いでいます。",
    experience: "20+ years",
    experienceJa: "20年以上",
    instagram: "https://www.instagram.com/harry_hairstylist/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=2302500",
    galleryImages: [
      "/images/gallery/harry_1.webp",
      "/images/gallery/harry_2.webp",
      "/images/gallery/harry_3.webp",
      "/images/gallery/harry_4.webp",
    ],
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/DQMmVGPkaUb/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DQtmvKYkf17/" },
      { id: "3", postUrl: "https://www.instagram.com/p/C4OFvsGrBte/" },
      { id: "4", postUrl: "https://www.instagram.com/p/C5Sk9eRLjEw/" },
      { id: "5", postUrl: "https://www.instagram.com/p/C0Qj9gxOca1/" },
    ],
    image: "/images/staff_harry.jpg",
  },
  {
    id: "sho",
    name: "Sho",
    nameJa: "ショウ",
    role: "Hair Stylist",
    roleJa: "ヘアスタイリスト",
    category: 'hair',
    specialty: ["Haircut", "Men's Cut", "Styling"],
    specialtyJa: ["ヘアカット", "メンズカット", "スタイリング"],
    bio: "Consistently delivers satisfying results that keep clients coming back. Known for his reliable technique and ability to create styles that exceed expectations every time.",
    bioJa: "「またお願いしたい」と思わせる、安定感のある技術と仕上がりが魅力。お客様一人ひとりの期待を超えるスタイルを提案し、厚い信頼を集めています。再現性の高いカットで、毎日のスタイリングを楽しくします。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/sho.nu/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=2456678",
    galleryImages: [
      "/images/gallery/sho_1.webp",
      "/images/gallery/sho_2.webp",
      "/images/gallery/sho_3.webp",
      "/images/gallery/sho_4.webp",
    ],
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/DRTcM96kQRj/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DRQz4Rtkcft/" },
      { id: "3", postUrl: "https://www.instagram.com/p/DRGtMpxDpoR/" },
      { id: "4", postUrl: "https://www.instagram.com/p/DRD9tehkfJ_/" },
      { id: "5", postUrl: "https://www.instagram.com/p/DPsee1tjrrk/" },
      { id: "6", postUrl: "https://www.instagram.com/p/DPX0Sm9kTSR/" },
    ],
    image: "/images/staff_sho.jpg",
  },
  {
    id: "sayaka",
    name: "Sayaka",
    nameJa: "サヤカ",
    role: "Hair Stylist",
    roleJa: "ヘアスタイリスト",
    category: 'hair',
    specialty: ["Haircut", "Color", "Treatment"],
    specialtyJa: ["ヘアカット", "カラー", "トリートメント"],
    bio: "Excels in color consultation, helping you decide on the perfect shade through thoughtful discussion. Makes the decision-making process easy and enjoyable.",
    bioJa: "丁寧なカラーカウンセリングに定評があり、お客様と一緒に「一番似合う色」を見つけ出します。迷っている方にも親身に寄り添い、色選びの時間さえも楽しい体験に変えてくれるスタイリストです。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/sayaka_vancouverhair/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=2812936",
    galleryImages: [
      "/images/gallery/sayaka_1.webp",
      "/images/gallery/sayaka_2.webp",
      "/images/gallery/sayaka_3.webp",
      "/images/gallery/sayaka_4.webp",
    ],
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/DRh1FXCEk5h/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DRWA7lekTWL/" },
      { id: "3", postUrl: "https://www.instagram.com/p/DRTEAfogT1S/" },
      { id: "4", postUrl: "https://www.instagram.com/p/DRIBISojy-A/" },
      { id: "5", postUrl: "https://www.instagram.com/p/DRFnfCCEkie/" },
    ],
    image: "/images/staff_sayaka_final_v3.jpg",
  },
  {
    id: "yuki",
    name: "Yuki",
    nameJa: "ユキ",
    role: "Hair Stylist",
    roleJa: "ヘアスタイリスト",
    category: 'hair',
    specialty: ["Haircut", "Color", "Treatment"],
    specialtyJa: ["ヘアカット", "カラー", "トリートメント"],
    bio: "Known for truly understanding what you want and working step-by-step to perfect your style. Her incredible scalp massage and meticulous attention create a relaxing, satisfying experience.",
    bioJa: "お客様の「なりたい」を深く理解し、プロセスを大切にしながら理想のスタイルを形にします。至福のヘッドスパと細やかな気配りで、心まで解きほぐされるようなリラックスタイムをお届けします。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/yuki._hair/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=2952908",
    galleryImages: [
      "/images/gallery_yuki_1.webp",
      "/images/gallery_yuki_2.webp",
      "/images/gallery_yuki_3.webp",
    ],
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/C62i_cNvAoN/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DEo7t1wRDgf/" },
      { id: "3", postUrl: "https://www.instagram.com/p/DDTqqSPx4XN/" },
      { id: "4", postUrl: "https://www.instagram.com/p/DSG8H5Kkfl1/" },
      { id: "5", postUrl: "https://www.instagram.com/p/DSEn7tjkSSk/" },
      { id: "6", postUrl: "https://www.instagram.com/p/DSBn-UMERPy/" },
    ],
    image: "/images/staff_yuki_v2.jpg",
  },
  {
    id: "mii",
    name: "Mii",
    nameJa: "ミイ",
    role: "Hair Stylist",
    roleJa: "ヘアスタイリスト",
    category: 'hair',
    specialty: ["Color", "Bleach", "Balayage"],
    specialtyJa: ["カラー", "ブリーチ", "バレイヤージュ"],
    bio: "Attentive and patient, Mii takes time to listen and provide thoughtful advice. She's your cheerleader when trying something new, offering both technical skill and emotional support.",
    bioJa: "じっくりと話を聞き、一人ひとりに合わせた的確なアドバイスをくれるミイ。新しいスタイルに挑戦する時も、確かな技術と温かいサポートで背中を押してくれる、頼れる存在です。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/mii_hairstylist/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=3355886",
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/DRh2S-1D0it/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DRQ3RhOERUJ/" },
      { id: "3", postUrl: "https://www.instagram.com/p/DRLtcf_DurH/" },
      { id: "4", postUrl: "https://www.instagram.com/p/DIJv01PP3jY/" },
      { id: "5", postUrl: "https://www.instagram.com/p/DGW-xfgx-25/" },
      { id: "6", postUrl: "https://www.instagram.com/p/DFujO_cx2Yt/" },
    ],
    galleryImages: [
      "/images/gallery_mii_1.webp",
      "/images/gallery_mii_2.webp",
      "/images/gallery_mii_3.webp",
      "/images/gallery_mii_4.webp",
      "/images/gallery_mii_5.webp",
      "/images/gallery_mii_6.webp",
    ],
    image: "/images/staff_mii_final_v3.jpg",
  },
  {
    id: "kana",
    name: "Kana",
    nameJa: "カナ",
    role: "Hair Stylist",
    roleJa: "ヘアスタイリスト",
    category: 'hair',
    specialty: ["Haircut", "Color", "Styling"],
    specialtyJa: ["ヘアカット", "カラー", "スタイリング"],
    bio: "Kind and considerate, Kana checks in throughout your service to ensure comfort. Great at curling and styling, she makes first-time clients feel at ease while delivering stunning results.",
    bioJa: "細やかな声かけと気配りで、施術中も安心できる空間を作ります。巻き髪やアレンジが得意で、初めての方でも緊張せずにお任せできる、柔らかい雰囲気が魅力です。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/kanapi_hair/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=4942473",
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/DRgamUZkaTQ/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DRtZM4REe8k/" },
    ],
    galleryImages: [
      "/images/gallery_kana_1.webp",
      "/images/gallery_kana_2.webp",
    ],
    image: "/images/staff_kana.png",
  },
  
  // Eyelash Specialists (in order: Saeko, Sally, Chippy)
  {
    id: "saeko",
    name: "Saeko",
    nameJa: "サエコ",
    role: "Eyelash Specialist",
    roleJa: "アイラッシュスペシャリスト",
    category: 'eyelash',
    specialty: ["Eyelash Extensions", "Volume Lash", "Natural Look"],
    specialtyJa: ["アイラッシュエクステ", "ボリュームラッシュ", "ナチュラルルック"],
    bio: "Gentle touch and caring approach. Creates natural-looking lashes that last, with removal so gentle there's no irritation. Many clients fall asleep during her relaxing services.",
    bioJa: "羽のように優しいタッチで、自まつ毛のような自然で美しい仕上がりを叶えます。オフの際も刺激を感じさせない丁寧な施術は、思わず眠ってしまうほどの心地よさです。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/saeko_eyelash/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=3097930",
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/DRBgVuLkYB8/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DCMx181yuO1/" },
    ],
    galleryImages: [
      "/images/gallery_saeko_1.webp",
      "/images/gallery_saeko_2.webp",
    ],
    image: "/images/staff_saeko_new.jpg",
  },
  {
    id: "sally",
    name: "Sally",
    nameJa: "サリー",
    role: "Eyelash Specialist",
    roleJa: "アイラッシュスペシャリスト",
    category: 'eyelash',
    specialty: ["Eyelash Extensions", "Lash Lift", "Consultation"],
    specialtyJa: ["アイラッシュエクステ", "ラッシュリフト", "カウンセリング"],
    bio: "Highly knowledgeable and professional. Takes time to understand what you want and provides expert recommendations that exceed expectations.",
    bioJa: "豊富な知識とプロフェッショナルな視点で、目元の魅力を最大限に引き出します。じっくりとご希望を伺い、期待以上の仕上がりを叶える提案力に定評があります。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/eyelashbysally/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=3322990",
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/DQ3b_0EkfJv/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DQsjBesj_u6/" },
      { id: "3", postUrl: "https://www.instagram.com/p/DQcs1zOkkhc/" },
      { id: "4", postUrl: "https://www.instagram.com/p/DQSzkknDzNO/" },
      { id: "5", postUrl: "https://www.instagram.com/p/DPVfE4vgPAy/" },
      { id: "6", postUrl: "https://www.instagram.com/p/DPVetkVgH58/" },
    ],
    galleryImages: [
      "/images/gallery_sally_1.webp",
      "/images/gallery_sally_2.webp",
      "/images/gallery_sally_3.webp",
      "/images/gallery_sally_4.webp",
      "/images/gallery_sally_5.webp",
      "/images/gallery_sally_6.webp",
    ],
    image: "/images/staff_sari.jpg",
  },

];
