import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Funder from "@/components/Funder";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Roadmap from "@/components/Roadmap";
import TeamSlider from "@/components/TeamSlider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F4F4F5] ">
      <Navbar />
      <Carousel />
      <div className="container mt-12 mx-auto px-16 py-4">
        <HeroSection />
      </div>
      <TeamSlider />
      <div className="container mt-12 mx-auto px-16 py-4">
        <Funder />
      </div>
      <Footer />
    </main>
  );
}
