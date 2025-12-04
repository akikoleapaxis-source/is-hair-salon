import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { staffMembers } from "@/lib/staffData";
import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Stylists() {
  const { language } = useLanguage();
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);

  const hairStylists = staffMembers.filter((staff) => staff.category === "hair");
  const eyelashSpecialists = staffMembers.filter((staff) => staff.category === "eyelash");

  const selectedStaffData = staffMembers.find((staff) => staff.id === selectedStaff);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-light mb-5 tracking-[0.1em] uppercase">
                {language === 'ja' ? 'スタイリスト' : 'Stylists'}
              </h1>
              <p className="text-sm md:text-base text-foreground/70">
                {language === 'ja' 
                  ? '経験豊富なプロフェッショナルがあなたの理想のスタイルを実現します' 
                  : 'Experienced professionals who will realize your ideal style'}
              </p>
            </div>
          </div>
        </section>

        {/* Hair Stylists */}
        <section className="section-spacing bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-center tracking-wide uppercase">
                {language === 'ja' ? 'ヘアスタイリスト / カラーリスト' : 'Hair Stylists / Colorists'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {hairStylists.map((staff) => (
                  <div
                    key={staff.id}
                    onClick={() => setSelectedStaff(staff.id)}
                    className="group cursor-pointer border border-border hover:border-primary/30 transition-all p-6"
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center text-2xl font-light flex-shrink-0">
                        {language === 'ja' ? staff.nameJa.charAt(0) : staff.name.charAt(0)}
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium mb-1">
                          {language === 'ja' ? staff.nameJa : staff.name}
                        </h3>
                        <p className="text-xs text-foreground/60 mb-2">
                          {language === 'ja' ? staff.roleJa : staff.role}
                        </p>
                        {staff.instagram && (
                          <a
                            href={staff.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                          >
                            <Instagram className="w-3 h-3" />
                            Instagram
                          </a>
                        )}
                      </div>
                      
                      {/* Arrow */}
                      <div className="text-foreground/40 group-hover:text-primary transition-colors">
                        →
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eyelash Specialists */}
        <section className="section-spacing bg-secondary/20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-center tracking-wide uppercase">
                {language === 'ja' ? 'アイラッシュスペシャリスト' : 'Eyelash Specialists'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {eyelashSpecialists.map((staff) => (
                  <div
                    key={staff.id}
                    onClick={() => setSelectedStaff(staff.id)}
                    className="group cursor-pointer border border-border hover:border-primary/30 transition-all p-6 bg-white"
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center text-2xl font-light flex-shrink-0">
                        {language === 'ja' ? staff.nameJa.charAt(0) : staff.name.charAt(0)}
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium mb-1">
                          {language === 'ja' ? staff.nameJa : staff.name}
                        </h3>
                        <p className="text-xs text-foreground/60 mb-2">
                          {language === 'ja' ? staff.roleJa : staff.role}
                        </p>
                        {staff.instagram && (
                          <a
                            href={staff.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                          >
                            <Instagram className="w-3 h-3" />
                            Instagram
                          </a>
                        )}
                      </div>
                      
                      {/* Arrow */}
                      <div className="text-foreground/40 group-hover:text-primary transition-colors">
                        →
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Detail Modal */}
      {selectedStaffData && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStaff(null)}
        >
          <div
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center text-xl font-light">
                  {language === 'ja' ? selectedStaffData.nameJa.charAt(0) : selectedStaffData.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-light">
                    {language === 'ja' ? selectedStaffData.nameJa : selectedStaffData.name}
                  </h2>
                  <p className="text-sm text-foreground/60">
                    {language === 'ja' ? selectedStaffData.roleJa : selectedStaffData.role}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStaff(null)}
                className="p-2 hover:bg-secondary/50 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Bio */}
              <div>
                <h3 className="text-lg font-medium mb-2">
                  {language === 'ja' ? 'プロフィール' : 'Profile'}
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {language === 'ja' ? selectedStaffData.bioJa : selectedStaffData.bio}
                </p>
              </div>

              {/* Specialty */}
              {selectedStaffData.specialty.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    {language === 'ja' ? '得意分野' : 'Specialty'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(language === 'ja' ? selectedStaffData.specialtyJa : selectedStaffData.specialty).map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary/30 text-xs rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience */}
              {selectedStaffData.experience && (
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    {language === 'ja' ? '経験' : 'Experience'}
                  </h3>
                  <p className="text-sm text-foreground/80">
                    {language === 'ja' ? selectedStaffData.experienceJa : selectedStaffData.experience}
                  </p>
                </div>
              )}

              {/* Instagram Posts */}
              {selectedStaffData.instagramPosts && selectedStaffData.instagramPosts.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    {language === 'ja' ? 'Instagram' : 'Instagram'}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedStaffData.instagramPosts.map((post) => (
                      <a
                        key={post.id}
                        href={post.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aspect-square bg-secondary/20 hover:opacity-80 transition-opacity flex items-center justify-center"
                      >
                        <Instagram className="w-8 h-8 text-foreground/40" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Links */}
              <div className="flex gap-3 pt-4">
                {selectedStaffData.instagram && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <a
                      href={selectedStaffData.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-4 h-4 mr-2" />
                      Instagram
                    </a>
                  </Button>
                )}
                {selectedStaffData.freshaBookingUrl && (
                  <Button
                    asChild
                    size="sm"
                    className="flex-1"
                  >
                    <a
                      href={selectedStaffData.freshaBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {language === 'ja' ? '予約する' : 'Book Now'}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
