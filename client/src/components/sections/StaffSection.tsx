import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "wouter";
import { staffMembers } from "@/lib/staffData";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StaffSection() {
  const { t, language } = useLanguage();

  return (
    <section id="staff" className="section-spacing bg-secondary">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-[0.1em] uppercase">
              Stylists
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              {t('staff.subtitle')}
            </p>
          </div>

          {/* Staff Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {staffMembers.map((member) => (
              <div
                key={member.id}
                className="group"
              >
                <Link href={`/staff/${member.id}`}>
                  <a className="block">
                    {/* Photo */}
                    <div className="aspect-[3/4] overflow-hidden bg-muted mb-4 relative">
                      {/* Placeholder for staff photo */}
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-secondary">
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto rounded-full bg-white/50 flex items-center justify-center">
                            <span className="text-3xl font-light text-primary">
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
                      <h3 className="text-lg md:text-xl font-normal mb-1 tracking-wide group-hover:text-primary transition-colors">
                        {language === 'ja' ? member.nameJa : member.name}
                      </h3>
                      <p className="text-sm text-foreground/60 mb-3">
                        {language === 'ja' ? member.roleJa : member.role}
                      </p>
                      
                      {/* Instagram */}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-foreground/50 hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Instagram className="w-4 h-4" />
                          <span className="text-xs">@{member.instagram.split('/').pop()}</span>
                        </a>
                      )}
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
