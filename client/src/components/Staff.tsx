import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface StaffMember {
  id: number;
  name: string;
  role: string;
  image: string;
  specialty: string;
}

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: "Sari",
    role: "Top Stylist",
    image: "/images/staff_01.jpg",
    specialty: "Precision Cut",
  },
  {
    id: 2,
    name: "Sho",
    role: "Director",
    image: "/images/staff_02.jpg",
    specialty: "Texture Control",
  },
  {
    id: 3,
    name: "Saeko",
    role: "Stylist",
    image: "/images/staff_03.jpg",
    specialty: "Color Design",
  },
  {
    id: 4,
    name: "Mii",
    role: "Stylist",
    image: "/images/staff_04.jpg",
    specialty: "Short Hair",
  },
  {
    id: 5,
    name: "Saeko",
    role: "Assistant",
    image: "/images/staff_05.jpg",
    specialty: "Head Spa",
  },
  {
    id: 6,
    name: "Sari",
    role: "Assistant",
    image: "/images/staff_06.jpg",
    specialty: "Treatment",
  },
  {
    id: 7,
    name: "Yuki",
    role: "Receptionist",
    image: "/images/staff_07.jpg",
    specialty: "Hospitality",
  },
];

export default function Staff() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Header - Matching Gallery Style */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-5 tracking-[0.1em] uppercase">
              Stylists
            </h2>
            <p className="text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
              Precision meets creativity. Our team of specialists is dedicated to crafting your perfect look with authentic Japanese techniques.
            </p>
          </div>

          {/* Staff Grid - Matching Gallery Layout (2 cols mobile, 4 cols desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {staffMembers.map((staff) => (
              <motion.div
                key={staff.id}
                className="group aspect-[3/4] overflow-hidden relative cursor-pointer"
                onMouseEnter={() => setHoveredId(staff.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: staff.id * 0.1 }}
              >
                {/* Image Layer */}
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                
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
                </div>

                {/* Static Label (Always visible until hover) - Optional, can remove if cleaner look desired */}
                <div className={`absolute bottom-4 left-4 text-white drop-shadow-md transition-opacity duration-300 ${hoveredId === staff.id ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="text-lg font-medium tracking-wide uppercase">
                    {staff.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
