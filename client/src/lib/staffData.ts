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
    bioJa: "ショートヘアと縮毛矯正を専門とし、20年以上の経験を持つハリー。綿密なカウンセリングと熟練した技術で、扱いやすく長持ちするスタイルを作り出します。彼にとって、ヘアと美容は天職であり、自分の技術で人々を幸せにすることが使命です。",
    experience: "20+ years",
    experienceJa: "20年以上",
    instagram: "https://www.instagram.com/harry_hairstylist/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=2302500",
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
    bioJa: "常に満足いく結果を提供し、お客様を何度も戻ってきていただけるショウ。信頼できる技術と、毎回期待を超えるスタイルを作り出す能力で知られています。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/sho.nu/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=2456678",
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
    bioJa: "カラーカウンセリングに優れ、思慮深い話し合いを通じて完璧な色合いを決めるお手伝いをします。意思決定のプロセスを簡単で楽しいものにします。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/sayaka_vancouverhair/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=2812936",
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/DRh1FXCEk5h/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DRWA7lekTWL/" },
      { id: "3", postUrl: "https://www.instagram.com/p/DRTEAfogT1S/" },
      { id: "4", postUrl: "https://www.instagram.com/p/DRIBISojy-A/" },
      { id: "5", postUrl: "https://www.instagram.com/p/DRFnfCCEkie/" },
    ],
    image: "/images/staff_sayaka.jpg",
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
    bioJa: "お客様の希望を真に理解し、段階的に完璧なスタイルを作り上げることで知られています。素晴らしい頭皮マッサージと細部への配慮で、リラックスできる満足度の高い体験を提供します。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/yuki._hair/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=2952908",
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/C62i_cNvAoN/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DEo7t1wRDgf/" },
      { id: "3", postUrl: "https://www.instagram.com/p/DDTqqSPx4XN/" },
      { id: "4", postUrl: "https://www.instagram.com/p/DSG8H5Kkfl1/" },
      { id: "5", postUrl: "https://www.instagram.com/p/DSEn7tjkSSk/" },
      { id: "6", postUrl: "https://www.instagram.com/p/DSBn-UMERPy/" },
    ],
    image: "/images/staff_04.jpg",
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
    bioJa: "丁寧で忍耐強いミイは、時間をかけて話を聞き、思慮深いアドバイスを提供します。新しいことに挑戦する際のチアリーダーとして、技術的なスキルと心のサポートの両方を提供します。",
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
    image: "/images/staff_05.jpg",
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
    bioJa: "優しく思いやりのあるカナは、サービス中も常に声をかけて快適さを確認します。巻き髪とスタイリングが得意で、初めてのお客様もリラックスさせながら素晴らしい結果を提供します。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/kanapi_hair/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=4942473",
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/DRgamUZkaTQ/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DRtZM4REe8k/" },
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
    bioJa: "優しいタッチと思いやりのあるアプローチ。長持ちする自然な仕上がりのラッシュを作り、オフも刺激がないほど優しいです。多くのお客様がリラックスした施術中に眠ってしまうほどです。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/saeko_eyelash/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=3097930",
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/DRBgVuLkYB8/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DCMx181yuO1/" },
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
    bioJa: "非常に知識豊富でプロフェッショナル。お客様の希望を理解するために時間をかけ、期待を超える専門的な提案をします。",
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
    image: "/images/staff_sari.jpg",
  },

];
