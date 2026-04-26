import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Signature() {
  const marbbImages = [
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/LINE_ALBUM_Micronanobubble_260425_13_b0f94f8e.jpg", // Machine image (No text)
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/LINE_ALBUM_Micronanobubble_260425_12_44a5c498.jpg", // Title
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/LINE_ALBUM_Micronanobubble_260425_11_bd5e3ff9.jpg", // What's the marbb??
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/LINE_ALBUM_Micronanobubble_260425_9_336a52de.jpg",  // What marbb Does for you
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/LINE_ALBUM_Micronanobubble_260425_8_81c27c05.jpg",  // Water-Only Hair Treatment #1
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/LINE_ALBUM_Micronanobubble_260425_7_c11445dc.jpg",  // Water-Only Hair Treatment #2
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/LINE_ALBUM_Micronanobubble_260425_10_9df2b975.jpg", // Trusted Japanese Technology
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/LINE_ALBUM_Micronanobubble_260425_1_889ac65a.jpg",  // You can try out Marbb...
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/LINE_ALBUM_Micronanobubble_260425_4_e575fc94.jpg",  // #1 Boco-Boko Purify
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/LINE_ALBUM_Micronanobubble_260425_3_31f23039.jpg",  // #2 Moco-Moko
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/LINE_ALBUM_Micronanobubble_260425_2_5104f572.jpg",  // #3 Tsuru-Tsuru
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/LINE_ALBUM_Micronanobubble_260425_6_4e9302c2.jpg",  // Price for water treatment
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663110495411/E9BnciLVcgD7N43YwoNiqj/LINE_ALBUM_Micronanobubble_260425_5_121577d1.jpg",  // Good deal combo menu
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Signature - marbb Nano Bubble Water System" 
        description="Experience the marbb nano bubble water system at i's. Hair Salon. Deeply cleanses your scalp and hair with microbubbles for a fresh, healthy scalp and beautiful shine."
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-[0.1em] uppercase">
                Signature
              </h1>
              <p className="text-sm md:text-base text-foreground max-w-2xl mx-auto">
                Introducing the latest technology at our salon: the "marbb" nano bubble water system.
              </p>
            </div>
          </div>
        </section>

        {/* Products Gallery */}
        <section className="section-spacing bg-background">
          <div className="container px-0 md:px-4">
            <div className="flex flex-col items-center max-w-4xl mx-auto space-y-4 md:space-y-8">
              {marbbImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full"
                >
                  <img
                    src={image}
                    alt={`marbb nano bubble water system slide ${index + 1}`}
                    className="w-full h-auto object-contain shadow-sm"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>

            {/* Info */}
            <div className="mt-24 max-w-3xl mx-auto text-center border-t border-border pt-16 px-4">
              <h3 className="text-xl md:text-2xl font-light mb-6 tracking-wide">About marbb</h3>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                marbb is a system that generates microbubbles incredibly small—1/2000th the size of carbonated bubbles.
                <br />
                It gently washes away sebum and residual shampoo that regular shampooing cannot remove,
                <br />
                restoring your hair and scalp to their original, beautiful state.
                <br /><br />
                Please experience its amazing effects at our salon.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
