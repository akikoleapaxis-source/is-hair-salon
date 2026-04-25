import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "wouter";
import { staffMembers } from "@/lib/staffData";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StaffSection() {
  const { t, language } = useLanguage();
  
  // Separate staff by category
  const hairStaff = staffMembers.filter(member => member.category === 'hair');
  const eyelashStaff = staffMembers.filter(member => member.category === 'eyelash');

  const StaffCard = ({ member }: { member: typeof staffMembers[0] }) => (
    <div key={member.id} className="group">
      <Link href={`/staff/${member.id}`}>
        <a className="block">
          {/* Photo */}
          <div className="aspect-[3/4] overflow-hidden bg-muted mb-3 relative">
            {/* Staff photo */}
            <img 
              src={member.image} 
              alt={language === 'ja' ? member.nameJa : member.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 gap-3 p-4 z-10">
              <Button 
                variant="outline" 
                className="w-full bg-transparent text-white border-white hover:bg-white hover:text-black uppercase tracking-wider text-xs h-9"
                asChild
              >
                {/* Use div instead of button to avoid nested button issues if Link renders an anchor */}
                <div className="cursor-pointer">View Profile</div>
              </Button>
              {member.freshaBookingUrl && (
                <Button 
                  className="w-full bg-white text-black hover:bg-white/90 uppercase tracking-wider text-xs h-9"
                  asChild
                >
                  <a 
                    href={member.freshaBookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Book Now
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="text-center">
            <h3 className="text-base md:text-lg font-normal mb-1 tracking-wide group-hover:text-primary transition-colors">
              {language === 'ja' ? member.nameJa : member.name}
            </h3>
            <p className="text-xs md:text-sm text-foreground/60 mb-2">
              {language === 'ja' ? member.roleJa : member.role}
            </p>
            
            {/* Instagram */}
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-foreground/50 hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Instagram className="w-3 h-3" />
                <span className="text-xs">@{member.instagram.split('/').pop()}</span>
              </a>
            )}
          </div>
        </a>
      </Link>
    </div>
  );

  return (
    <section id="staff" className="section-spacing bg-secondary">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 tracking-[0.1em] uppercase">
              Stylists
            </h2>
            <p className="text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
              {t('staff.subtitle')}
            </p>
          </div>

          {/* Hair Stylists */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-light mb-6 md:mb-8 tracking-wide text-center uppercase">
              {language === 'ja' ? 'ヘアスタイリスト' : 'Hair Stylists'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {hairStaff.map((member) => (
                <StaffCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Eyelash Specialists */}
          <div>
            <h3 className="text-xl md:text-2xl font-light mb-6 md:mb-8 tracking-wide text-center uppercase">
              {language === 'ja' ? 'アイラッシュスペシャリスト' : 'Eyelash Specialists'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {eyelashStaff.map((member) => (
                <StaffCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
