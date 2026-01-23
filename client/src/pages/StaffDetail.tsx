import { useParams, Link } from "wouter";
import { staffMembers } from "@/lib/staffData";
import { ArrowLeft, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import SEO from "@/components/SEO";

export default function StaffDetail() {
  const params = useParams();
  const staffId = params.id;
  
  const staff = staffMembers.find((s) => s.id === staffId);

  // Load Instagram embed script
  useEffect(() => {
    // Check if script already exists
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script exists, process embeds
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }
  }, [staff?.instagramPosts]);

  if (!staff) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Staff Not Found</h1>
            <Link href="/#staff">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Staff
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title={`${staff.name} - ${staff.role}`}
        description={`Book an appointment with ${staff.name}, ${staff.role} at i's. Hair Salon. Specializing in ${staff.specialty.join(", ")}.`}
        image={staff.image}
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section with Elegant Design */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Decorative gold accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30"></div>
          
          <div className="container">
            <Link href="/#staff">
              <Button variant="ghost" className="mb-8 hover:bg-[#f5f1ed] transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Staff
              </Button>
            </Link>

            <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              {/* Staff Image with elegant frame */}
              <div className="relative">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-[#f5f1ed] to-[#e8e4df] relative border-4 border-[#d4af37]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#8b9d83]/20 flex items-center justify-center border-2 border-[#d4af37]/30">
                        <span className="text-6xl font-light text-[#6b7c66]">
                          {staff.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground font-light">
                        Photo coming soon
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative plant accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20">
                  <div className="text-6xl">🌿</div>
                </div>
              </div>

              {/* Staff Info with refined typography */}
              <div className="pt-8">
                <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#8b9d83]/10 to-[#d4af37]/10 rounded-full border border-[#d4af37]/20">
                  <p className="text-sm font-medium text-[#6b7c66] tracking-wide uppercase">{staff.role}</p>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-light mb-8 text-[#3a3a3a] tracking-tight">
                  {staff.name}
                </h1>

                {staff.instagram && (
                  <a
                    href={staff.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[#6b7c66] hover:text-[#d4af37] transition-colors font-light mb-12 group"
                  >
                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="border-b border-[#6b7c66]/30 group-hover:border-[#d4af37] transition-colors">
                      View Latest Styles on Instagram
                    </span>
                  </a>
                )}

                <div className="mt-12 pt-8 border-t border-[#d4af37]/20">
                  <a
                    href={staff.freshaBookingUrl || "https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg" 
                      className="w-full md:w-auto bg-[#6b7c66] hover:bg-[#5a6b56] text-white px-12 py-6 text-base font-light tracking-wide transition-all hover:shadow-lg"
                    >
                      Book with {staff.name}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Gallery Section with refined design */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[#f5f1ed]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <div className="inline-block mb-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#3a3a3a] tracking-tight">
                {staff.name}'s Style Gallery
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Browse the latest work and styling inspiration
              </p>
            </div>

            {staff.instagramPosts && staff.instagramPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {staff.instagramPosts.map((post) => (
                    <div key={post.id} className="instagram-embed-container group">
                      <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#d4af37]/10">
                        <blockquote
                          className="instagram-media"
                          data-instgrm-permalink={post.postUrl}
                          data-instgrm-version="14"
                          style={{
                            background: '#FFF',
                            border: '0',
                            borderRadius: '8px',
                            margin: '0',
                            maxWidth: '540px',
                            minWidth: '326px',
                            padding: '0',
                            width: '100%'
                          }}
                        >
                          <a href={post.postUrl} target="_blank" rel="noopener noreferrer">
                            View this post on Instagram
                          </a>
                        </blockquote>
                      </div>
                    </div>
                  ))}
                </div>
                
                {staff.instagram && (
                  <div className="mt-16 text-center">
                    <a
                      href={staff.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-[#6b7c66] text-[#6b7c66] hover:bg-[#6b7c66] hover:text-white transition-all px-8"
                      >
                        <Instagram className="w-5 h-5 mr-2" />
                        View More on Instagram
                      </Button>
                    </a>
                  </div>
                )}
              </>
            ) : (
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-[#f5f1ed] to-[#e8e4df] rounded-2xl p-16 text-center border border-[#d4af37]/10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/50 flex items-center justify-center">
                    <Instagram className="w-10 h-10 text-[#6b7c66]" />
                  </div>
                  <p className="text-lg text-muted-foreground mb-8 font-light">
                    Instagram posts coming soon
                  </p>
                  {staff.instagram && (
                    <a
                      href={staff.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-[#6b7c66] text-[#6b7c66] hover:bg-[#6b7c66] hover:text-white transition-all"
                      >
                        <Instagram className="w-5 h-5 mr-2" />
                        Follow on Instagram
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Reviews Section with elegant design */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block mb-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#3a3a3a] tracking-tight">
                Client Reviews
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                What our clients say about {staff.name}
              </p>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-[#f5f1ed] to-[#e8e4df] rounded-2xl p-12 border border-[#d4af37]/10">
                <p className="text-muted-foreground mb-8 font-light">
                  Reviews coming soon
                </p>
                <a
                  href="https://www.fresha.com/ja/a/is-japanese-hair-eyelash-salon-richmond-4000-no-3-road-z6jqwgsx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline"
                    className="border-[#6b7c66] text-[#6b7c66] hover:bg-[#6b7c66] hover:text-white transition-all"
                  >
                    View Reviews on Fresha
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
