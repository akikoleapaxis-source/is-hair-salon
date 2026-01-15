import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Instagram, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FRESHA_BOOKING_URL } from "@/lib/constants";

interface StaffMember {
  name: string;
  role: string;
  image?: string;
  initial?: string;
  specialty: string;
  description: string;
  instagram?: string;
  instagramId?: string;
  freshaId?: string;
}

// Staff data
const staffData: Record<string, StaffMember> = {
  "harry": {
    name: "Harry",
    role: "Owner / Top Stylist",
    image: "/images/staff_harry.jpg",
    specialty: "Texture Control & Precision Cut",
    description: "With over 15 years of experience in Japan and Canada, Harry specializes in creating styles that are easy to maintain and perfectly suited to your hair texture and lifestyle.",
    instagram: "https://instagram.com/harry_hairstylist",
    instagramId: "harry_hairstylist",
    freshaId: "2302500"
  },
  "sho": {
    name: "Sho",
    role: "Stylist",
    image: "/images/staff_sho.jpg",
    specialty: "Men's Cut & Perm",
    description: "Sho excels in men's grooming and perm styles, creating sharp, modern looks that enhance your personality.",
    instagram: "https://instagram.com/sho.nu",
    instagramId: "sho.nu",
    freshaId: "2456678"
  },
  "sayaka": {
    name: "Sayaka",
    role: "Stylist",
    image: "/images/staff_sayaka.jpg",
    specialty: "Color Design & Layered Cut",
    description: "Sayaka is a color specialist who loves creating dimensional colors and layered cuts that bring movement and lightness to your hair.",
    instagram: "https://instagram.com/sayaka_vancouverhair",
    instagramId: "sayaka_vancouverhair",
    freshaId: "2812936"
  },
  "yuki": {
    name: "Yuki",
    role: "Stylist",
    image: "/images/staff_07.jpg",
    specialty: "Bob Style & Soft Texture",
    description: "Yuki creates soft, feminine bob styles that frame the face beautifully. Her attention to detail ensures a perfect finish every time.",
    instagram: "https://instagram.com/yuki._hair",
    instagramId: "yuki._hair",
    freshaId: "2952908"
  },
  "mii": {
    name: "Mii",
    role: "Stylist",
    image: "/images/staff_04.jpg",
    specialty: "Short Hair & Creative Color",
    description: "Mii is passionate about short hair transformations and creative color work. She helps you discover a new version of yourself.",
    instagram: "https://instagram.com/mii_hairstylist",
    instagramId: "mii_hairstylist",
    freshaId: "3355886"
  },
  "kana": {
    name: "Kana",
    role: "Stylist",
    image: "/images/staff_kana.png",
    specialty: "Natural Style & Head Spa",
    description: "Kana specializes in natural, effortless styles that enhance your inherent beauty. She is also an expert in relaxing head spa treatments.",
    instagram: "https://instagram.com/kanapi_hair",
    instagramId: "kanapi_hair",
    freshaId: "4942473"
  },
  "saeko": {
    name: "Saeko",
    role: "Eyelist",
    image: "/images/staff_03.jpg",
    specialty: "Eyelash Perm & Natural Design",
    description: "Saeko specializes in eyelash perms that lift your lashes from the root, giving you a natural yet wide-eyed look that lasts.",
    instagram: "https://instagram.com/saeko_eyelash",
    instagramId: "saeko_eyelash",
    freshaId: "3097930"
  },
  "sari": {
    name: "Sari",
    role: "Eyelist",
    image: "/images/staff_01.jpg",
    specialty: "Eyelash Extensions & Volume Lash",
    description: "Sari is an expert in eyelash extensions, from natural to volume styles. She customizes the design to perfectly match your eye shape.",
    instagram: "https://instagram.com/eyelashbysally",
    instagramId: "eyelashbysally",
    freshaId: "3322990"
  }
};

export default function StaffProfile() {
  const [match, params] = useRoute("/staff/:id");
  const staffId = params?.id as keyof typeof staffData;
  const staff = staffData[staffId];

  if (!staff) {
    return <div className="min-h-screen flex items-center justify-center">Staff not found</div>;
  }

  // Construct booking URL
  const VENUE_SLUG = "is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx";
  const bookingUrl = staff.freshaId
    ? `https://www.fresha.com/book-now/${VENUE_SLUG}/all-offer?pId=${staff.freshaId}`
    : FRESHA_BOOKING_URL;

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-[3/4] overflow-hidden bg-[#F5F2EB] flex items-center justify-center"
          >
            {staff.image ? (
              <img
                src={staff.image}
                alt={staff.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            ) : (
              <span className="text-9xl font-display font-light text-foreground/20">
                {staff.initial}
              </span>
            )}
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight mb-2">
                {staff.name}
              </h1>
              <p className="text-xl text-foreground/60 font-light uppercase tracking-widest">
                {staff.role}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-2">
                Specialty
              </h3>
              <p className="text-lg font-medium">{staff.specialty}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-2">
                About
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {staff.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                asChild
                size="lg"
                className="bg-black text-white hover:bg-black/80 uppercase tracking-wider h-14 px-8"
              >
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </a>
              </Button>

              {staff.instagram && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="uppercase tracking-wider h-14 px-8 border-black hover:bg-black hover:text-white transition-colors"
                >
                  <a href={staff.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Instagram Feed Section (Placeholder) */}
        {staff.instagramId && (
          <div className="mt-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold uppercase mb-4">Style Gallery</h2>
              <p className="text-foreground/60">Check out the latest styles on Instagram</p>
            </div>
            
            {/* 
              In a real implementation, this would be an Instagram API integration.
              For now, we'll show a placeholder grid that links to their Instagram.
            */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <a 
                  key={i}
                  href={staff.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square bg-secondary relative group overflow-hidden block"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-foreground/20 group-hover:text-foreground/40 transition-colors">
                    <Instagram className="w-8 h-8" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </a>
              ))}
            </div>
            <div className="text-center mt-8">
              <a 
                href={staff.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
              >
                View more on Instagram <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
