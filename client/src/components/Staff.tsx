import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

interface StaffMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  initial?: string;
  specialty: string;
}

// Hair Stylists
const hairStylists: StaffMember[] = [
  {
    id: "harry",
    name: "Harry",
    role: "Owner / Top Stylist",
    image: "/images/staff_harry.jpg",
    specialty: "Texture Control",
  },
  {
    id: "sho",
    name: "Sho",
    role: "Stylist",
    image: "/images/staff_sho.jpg",
    specialty: "Men's Cut",
  },
  {
    id: "sayaka",
    name: "Sayaka",
    role: "Stylist",
    image: "/images/staff_sayaka.jpg",
    specialty: "Color Design",
  },
  {
    id: "yuki",
    name: "Yuki",
    role: "Stylist",
    image: "/images/staff_07.jpg",
    specialty: "Bob Style",
  },
  {
    id: "mii",
    name: "Mii",
    role: "Stylist",
    image: "/images/staff_04.jpg",
    specialty: "Short Hair",
  },
  {
    id: "kana",
    name: "Kana",
    role: "Stylist",
    initial: "K",
    specialty: "Natural Style",
  },
];

// Eyelash Specialists
const eyelashSpecialists: StaffMember[] = [
  {
    id: "saeko",
    name: "Saeko",
    role: "Eyelist",
    image: "/images/staff_03.jpg",
    specialty: "Eyelash Perm",
  },
  {
    id: "sari",
    name: "Sari",
    role: "Eyelist",
    image: "/images/staff_01.jpg",
    specialty: "Eyelash Extensions",
  },
];

export default function Staff() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  const handleStaffClick = (id: string) => {
    setLocation(`/staff/${id}`);
    window.scrollTo(0, 0);
  };

  const StaffCard = ({ staff, index }: { staff: StaffMember; index: number }) => (
    <motion.div
      key={staff.id}
      className="group aspect-[3/4] overflow-hidden relative cursor-pointer bg-[#F5F2EB]"
      onMouseEnter={() => setHoveredId(staff.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={() => handleStaffClick(staff.id)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {staff.image ? (
        // Image Layer
        <img
          src={staff.image}
          alt={staff.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
      ) : (
        // Placeholder Layer
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-6xl font-display font-light text-foreground/20">
            {staff.initial}
          </span>
        </div>
      )}

      {/* Overlay Info - Matching Gallery Hover Effect */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

      {/* Staff Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-lg font-medium tracking-wide uppercase">
          {staff.name}
        </h3>
        <p className="text-white/80 text-xs uppercase tracking-wider">
          {staff.role}
        </p>
        <p className="text-white/60 text-[10px] uppercase tracking-widest mt-1">
          View Profile →
        </p>
      </div>

      {/* Static Label (Always visible until hover) */}
      <div
        className={`absolute bottom-4 left-4 drop-shadow-md transition-opacity duration-300 ${
          hoveredId === staff.id ? "opacity-0" : "opacity-100"
        } ${staff.image ? "text-white" : "text-foreground"}`}
      >
        <h3 className="text-lg font-medium tracking-wide uppercase">
          {staff.name}
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
