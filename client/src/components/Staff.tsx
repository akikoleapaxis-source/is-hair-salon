import { useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-display font-bold uppercase leading-none mb-4">
            The <span className="text-stroke text-transparent">Artisans</span>
          </h2>
          <p className="text-xl md:text-2xl font-sans max-w-2xl ml-auto border-l-2 border-primary pl-6">
            Precision meets creativity. Our team of specialists is dedicated to crafting your perfect look with authentic Japanese techniques.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border-l border-t border-border">
          {staffMembers.map((staff) => (
            <motion.div
              key={staff.id}
              className="group relative border-r border-b border-border aspect-[3/4] overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(staff.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: staff.id * 0.1 }}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 bg-gray-200">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Overlay Info */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex flex-col justify-end p-6">
                <div className="bg-background/90 backdrop-blur-sm p-4 border border-border transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-2xl font-display font-bold uppercase mb-1">
                    {staff.name}
                  </h3>
                  <div className="flex justify-between items-center font-sans text-sm">
                    <span className="uppercase tracking-wider">{staff.role}</span>
                    <span className="text-accent font-bold">{staff.specialty}</span>
                  </div>
                </div>
              </div>

              {/* Static Label (Always visible until hover) */}
              <div className={`absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold uppercase tracking-widest transition-opacity duration-300 ${hoveredId === staff.id ? 'opacity-0' : 'opacity-100'}`}>
                {staff.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
