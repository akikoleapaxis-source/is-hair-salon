import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Instagram, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staffMembers } from "@/lib/staffData";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function StaffProfile() {
  const [match, params] = useRoute("/staff/:id");
  const { language } = useLanguage();
  
  const staffId = params?.id;
  const staff = staffMembers.find(s => s.id === staffId);

  if (!staff) {
    return <div className="min-h-screen flex items-center justify-center">Staff not found</div>;
  }

  const bookingUrl = staff.freshaBookingUrl || "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx/booking";

  const staffName = staff.name;
  const staffRole = language === 'ja' ? staff.roleJa : staff.role;
  const staffBio = language === 'ja' ? staff.bioJa : staff.bio;

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <SEO 
        title={`${staffName} - ${staffRole}`}
        description={staffBio.substring(0, 150) + "..."}
        image={staff.image}
      />
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
                className="w-full h-full object-cover transition-all duration-700"
              />
            ) : (
              <span className="text-9xl font-display font-light text-foreground/20">
                {staff.name.charAt(0)}
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
                {language === 'ja' ? staff.roleJa : staff.role}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-2">
                Specialty
              </h3>
              <p className="text-lg font-medium">
                {language === 'ja' ? staff.specialtyJa.join(", ") : staff.specialty.join(", ")}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-2">
                About
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {language === 'ja' ? staff.bioJa : staff.bio}
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
        {staff.instagram && (
          <div className="mt-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold uppercase mb-4">Style Gallery</h2>
              <p className="text-foreground/60">Check out the latest styles on Instagram</p>
            </div>
            
            {/* Instagram Posts Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {staff.instagramPosts ? (
                staff.instagramPosts.slice(0, 4).map((post, index) => (
                  <a 
                    key={post.id}
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square bg-secondary relative group overflow-hidden block"
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-foreground/20 group-hover:text-foreground/40 transition-colors z-10">
                      <Instagram className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-20" />
                    <img 
                      src={staff.galleryImages && staff.galleryImages[index] ? staff.galleryImages[index] : `/images/gallery/gallery-${(parseInt(post.id) % 6) + 1}.jpg`} 
                      alt="Instagram post" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback if specific gallery image doesn't exist
                        e.currentTarget.src = "/images/gallery/gallery-1.jpg";
                      }}
                    />
                  </a>
                ))
              ) : (
                // Fallback if no posts defined
                [1, 2, 3, 4].map((i) => (
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
                ))
              )}
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
