import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Instagram, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FRESHA_BOOKING_URL } from "@/lib/constants";

// Staff data (should be moved to a shared constant file in a real app)
const staffData = {
  "harry": {
    name: "Harry",
    role: "Owner / Top Stylist",
    image: "/images/staff_02.jpg", // Assuming this is Harry based on "Director" role in previous data
    specialty: "Texture Control & Precision Cut",
    description: "With over 15 years of experience in Japan and Canada, Harry specializes in creating styles that are easy to maintain and perfectly suited to your hair texture and lifestyle.",
    instagram: "https://instagram.com/harry_ishair", // Placeholder
    instagramId: "harry_ishair"
  },
  "mii": {
    name: "Mii",
    role: "Stylist",
    image: "/images/staff_04.jpg",
    specialty: "Short Hair & Bob Style",
    description: "Mii is an expert in short hair and bob styles. She creates feminine and soft silhouettes that enhance your natural beauty.",
    instagram: "https://instagram.com/mii_ishair", // Placeholder
    instagramId: "mii_ishair"
  },
  "sari": {
    name: "Sari",
    role: "Eyelist / Assistant",
    image: "/images/staff_01.jpg",
    specialty: "Eyelash Extensions & Head Spa",
    description: "Sari provides relaxing head spa treatments and precise eyelash extensions to brighten your eyes.",
    instagram: "https://instagram.com/sari_ishair", // Placeholder
    instagramId: "sari_ishair"
  },
  "saeko": {
    name: "Saeko",
    role: "Eyelist / Assistant",
    image: "/images/staff_03.jpg",
    specialty: "Eyelash Perm & Color",
    description: "Saeko specializes in eyelash perms and color services, helping you achieve a natural yet impactful look.",
    instagram: "https://instagram.com/saeko_ishair", // Placeholder
    instagramId: "saeko_ishair"
  },
  "yuki": {
    name: "Yuki",
    role: "Receptionist",
    image: "/images/staff_07.jpg",
    specialty: "Hospitality",
    description: "Yuki ensures every guest feels welcomed and comfortable during their visit to i's.",
    instagram: "",
    instagramId: ""
  }
};

export default function StaffProfile() {
  const [match, params] = useRoute("/staff/:id");
  const staffId = params?.id as keyof typeof staffData;
  const staff = staffData[staffId];

  if (!staff) {
    return <div className="min-h-screen flex items-center justify-center">Staff not found</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-[3/4] overflow-hidden"
          >
            <img
              src={staff.image}
              alt={staff.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
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
                <a href={FRESHA_BOOKING_URL} target="_blank" rel="noopener noreferrer">
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
