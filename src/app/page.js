import Carousel from "@/components/Carousel";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F4F4F5] ">
      <Navbar />
      <Carousel />
      <div className="container mt-24 mx-auto px-4 py-4">
        <HeroSection/>
      </div>
    </main>
  );
}
