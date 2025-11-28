import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "wouter";
import { staffMembers } from "@/lib/staffData";

export default function StaffSection() {
  return (
    <section id="staff" className="py-20 md:py-32 relative overflow-hidden">
      {/* Vancouver sunset background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/backgrounds/vancouver-sunset-2.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.28]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/47 via-background/40 to-background/47" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">Meet Our Team</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">スタッフ紹介</h2>
          <p className="text-lg text-muted-foreground">
            経験豊富なプロフェッショナルが、あなたの理想のスタイルを実現します
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-primary/10 hover:border-primary/30"
            >
              <a
                href={member.freshaBookingUrl || "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="aspect-[3/4] overflow-hidden relative bg-[#f5f1ed] cursor-pointer">
                  {/* Placeholder for staff photo */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-[#f5e6d3] flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary">
                          {member.nameJa.charAt(0)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground px-4">
                        ※ 写真は後日追加予定
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                    <div className="text-center text-white text-sm font-medium mb-2">
                      クリックで予約ページへ
                    </div>
                    
                    <Link href={`/staff/${member.id}`}>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="w-full"
                        onClick={(e) => e.stopPropagation()}
                      >
                        プロフィールを見る
                      </Button>
                    </Link>
                    
                    {member.instagram && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="w-full bg-white/90 hover:bg-white"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Instagram className="w-4 h-4" />
                          Instagram
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </a>
              
              <div className="p-5">
                <Link href={`/staff/${member.id}`}>
                  <h3 className="text-xl font-bold mb-1 hover:text-primary transition-colors cursor-pointer">
                    {member.name}
                  </h3>
                </Link>
                <p className="text-sm text-primary mb-2">{member.roleJa}</p>
                <p className="text-sm text-muted-foreground">
                  {member.specialtyJa.join(" · ")}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  経験 {member.experienceJa}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              スタッフを指名予約する
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

