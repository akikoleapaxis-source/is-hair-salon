import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { staffMembers } from "@/lib/staffData";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Staff() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [, setLocation] = useLocation();
  const { language } = useLanguage();

  // Filter staff by category from the centralized staffData
  const hairStylists = staffMembers.filter(member => member.category === 'hair');
  const eyelashSpecialists = staffMembers.filter(member => member.category === 'eyelash');

  const handleStaffClick = (id: string) => {
    setLocation(`/staff/${id}`);
    window.scrollTo(0, 0);
  };

  const StaffCard = ({ staff, index }: { staff: typeof staffMembers[0]; index: number }) => (
    <motion.div
      key={staff.id}
      className="group aspect-[3/4] overflow-hidden relative cursor-pointer bg-[#F5F2EB]"
      onMouseEnter={() => setHoveredId(staff.id)}
      onMouseLeave={() => setHoveredId(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {staff.image ? (
        // Image Layer
        <img
          src={staff.image}
          alt={language === 'ja' ? staff.nameJa : staff.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
      ) : (
        // Placeholder Layer
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-6xl font-display font-light text-foreground/20">
            {staff.name.charAt(0)}
          </span>
        </div>
      )}

      {/* Overlay Info - Matching Gallery Hover Effect */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Hover overlay with buttons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3 p-4 z-10">
        <Button 
          variant="outline" 
          className="w-full max-w-[140px] bg-transparent text-white border-white hover:bg-white hover:text-black uppercase tracking-wider text-xs h-9"
          onClick={(e) => {
            e.stopPropagation();
            handleStaffClick(staff.id);
          }}
        >
          View Profile
        </Button>
        {staff.freshaBookingUrl && (
          <Button 
            className="w-full max-w-[140px] bg-white text-black hover:bg-white/90 uppercase tracking-wider text-xs h-9"
            asChild
          >
            <a 
              href={staff.freshaBookingUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Book Now
            </a>
          </Button>
        )}
      </div>

      {/* Static Label (Always visible until hover) */}
      <div
        className={`absolute bottom-4 left-4 drop-shadow-md transition-opacity duration-300 ${
          hoveredId === staff.id ? "opacity-0" : "opacity-100"
        } text-white`}
      >
        <h3 className="text-lg font-medium tracking-wide uppercase">
          {language === 'ja' ? staff.nameJa : staff.name}
        </h3>
      </div>
    </motion.div>
  );

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-5 tracking-[0.1em] uppercase">
              Stylists
            </h2>
            <p className="text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
              Precision meets creativity. Our team of specialists is dedicated to crafting your perfect look with authentic Japanese techniques.
            </p>
          </div>

          {/* Hair Stylists Section */}
          <div className="mb-20">
            <h3 className="text-xl md:text-2xl font-display font-light text-center mb-10 tracking-widest uppercase">
              Hair Stylists
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {hairStylists.map((staff, index) => (
                <StaffCard key={staff.id} staff={staff} index={index} />
              ))}
            </div>
          </div>

          {/* Eyelash Specialists Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-display font-light text-center mb-10 tracking-widest uppercase">
              Eyelash Specialists
            </h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
               {eyelashSpecialists.map((staff, index) => (
                <div key={staff.id} className="w-[calc(50%-0.5rem)] md:w-[calc(25%-1.125rem)]">
                  <StaffCard staff={staff} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
