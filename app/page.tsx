import Hero from "@/components/Hero";
import Infobar from "@/components/Infobar";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Infobar />
      <Navbar />
      <Hero />
    </div>
  );
}
