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
  // Hair Stylists / Colorists (in order: Harry, Sho, Sayaka, Mii, Kana)
  {
    id: "harry",
    name: "Harry",
    nameJa: "ハリー",
    role: "Owner & Hair Stylist",
    roleJa: "オーナー・ヘアスタイリスト",
    category: 'hair',
    specialty: ["Haircut", "Color", "Japanese Straightening"],
    specialtyJa: ["ヘアカット", "カラー", "縮毛矯正"],
    bio: "With over 20 years of experience in the hair industry, Harry brings Japanese precision and artistry to every client. As the owner of i's., he is dedicated to providing the highest quality service.",
    bioJa: "20年以上の美容業界経験を持つハリーは、日本の精密さと芸術性をすべてのお客様にお届けします。i's.のオーナーとして、最高品質のサービスを提供することに専念しています。",
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
    image: "/images/staff/placeholder-harry.jpg",
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
    bio: "Sho brings precision and attention to detail to every haircut. His clients appreciate his consistent quality and professional approach.",
    bioJa: "ショウはすべてのヘアカットに精密さと細部へのこだわりをもたらします。お客様は彼の一貫した品質とプロフェッショナルなアプローチを高く評価しています。",
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
    image: "/images/staff/placeholder-sho.jpg",
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
    bio: "Sayaka is professional and friendly, specializing in haircuts and color treatments. She ensures every client leaves feeling confident and beautiful.",
    bioJa: "サヤカはプロフェッショナルでフレンドリーで、ヘアカットとカラートリートメントを得意としています。すべてのお客様が自信を持って美しく感じられるよう心がけています。",
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
    image: "/images/staff/placeholder-sayaka.jpg",
  },
  {
    id: "mii",
    name: "Mii",
    nameJa: "ミイ",
    role: "Colorist",
    roleJa: "カラーリスト",
    category: 'hair',
    specialty: ["Color", "Bleach", "Balayage"],
    specialtyJa: ["カラー", "ブリーチ", "バレイヤージュ"],
    bio: "Mii is a color specialist who excels at creating beautiful, customized hair colors. She is passionate about helping clients achieve their dream hair color.",
    bioJa: "ミイは美しいカスタムカラーを作り出すカラースペシャリストです。お客様が夢見るヘアカラーを実現することに情熱を注いでいます。",
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
    image: "/images/staff/placeholder-mii.jpg",
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
    bio: "Kana is a talented hair stylist who recently joined our team. She brings fresh creativity and attention to detail to every client.",
    bioJa: "カナは最近チームに加わった才能あるヘアスタイリストです。すべてのお客様に新鮮な創造性と細部へのこだわりをもたらします。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/kanapi_hair/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=4942473",
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/DRgamUZkaTQ/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DRtZM4REe8k/" },
    ],
    image: "/images/staff/placeholder-kana.jpg",
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
    bio: "Saeko is a skilled eyelash specialist who creates beautiful, customized lash designs for each client. She is known for her attention to detail and gentle technique.",
    bioJa: "サエコは経験豊富なアイラッシュスペシャリストで、お客様一人ひとりに最適なラッシュデザインを作り出します。細部へのこだわりと優しい技術で知られています。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/saeko_eyelash/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking?employeeId=3097930",
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/DRBgVuLkYB8/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DCMx181yuO1/" },
    ],
    image: "/images/staff/placeholder-saeko.jpg",
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
    bio: "Sally is highly knowledgeable and professional in all aspects of eyelash services. She takes the time to discuss options and create the perfect look for each client.",
    bioJa: "サリーはアイラッシュサービスのあらゆる面で豊富な知識とプロフェッショナリズムを持っています。時間をかけてオプションを相談し、お客様一人ひとりに最適なルックを作り出します。",
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
    image: "/images/staff/placeholder-sally.jpg",
  },
  {
    id: "chippy",
    name: "Chippy",
    nameJa: "チッピー",
    role: "Eyelash Artist",
    roleJa: "アイラッシュアーティスト",
    category: 'eyelash',
    specialty: ["Eyelash Extensions", "Volume Lash", "Design"],
    specialtyJa: ["アイラッシュエクステ", "ボリュームラッシュ", "デザイン"],
    bio: "Chippy is our talented eyelash artist who recently joined the team. She specializes in creating stunning eyelash designs and is known for her friendly, professional approach.",
    bioJa: "チッピーは最近チームに加わった才能あるアイラッシュアーティストです。素晴らしいアイラッシュデザインの作成を得意とし、フレンドリーでプロフェッショナルなアプローチで知られています。",
    experience: "",
    experienceJa: "",
    instagram: "https://www.instagram.com/chippy_eyelash_pro/",
    freshaBookingUrl: "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking",
    instagramPosts: [
      { id: "1", postUrl: "https://www.instagram.com/p/DRh4O5CkrK5/" },
      { id: "2", postUrl: "https://www.instagram.com/p/DRdpGa3EVNt/" },
      { id: "3", postUrl: "https://www.instagram.com/p/DRcyjWXEhQG/" },
      { id: "4", postUrl: "https://www.instagram.com/p/DRbELUNkQBP/" },
      { id: "5", postUrl: "https://www.instagram.com/p/DPz7nfhid68/" },
      { id: "6", postUrl: "https://www.instagram.com/p/DPnR3UTjgwQ/" },
    ],
    image: "/images/staff/placeholder-chippy.jpg",
  },
];
