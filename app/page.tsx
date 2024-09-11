import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Infobar from "@/components/Infobar";
import Logos from "@/components/Logos";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Infobar />
      <Navbar />
      <Hero />
      <Logos />
      <Services />
      <Product />
      <Footer />
    </div>
  );
}
