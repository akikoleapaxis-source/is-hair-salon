import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Staff from "@/components/Staff";

export default function Stylists() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <Staff />
      </main>
      <Footer />
    </div>
  );
}
