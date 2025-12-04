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
            {/* Placeholder for staff photo */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-secondary">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/50 flex items-center justify-center">
                  <span className="text-2xl font-light text-primary">
                    {member.nameJa.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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

          {/* Hair Stylists / Colorists */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-light mb-6 md:mb-8 tracking-wide text-center uppercase">
              {language === 'ja' ? 'ヘアスタイリスト / カラーリスト' : 'Hair Stylists / Colorists'}
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
