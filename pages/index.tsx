import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { FiChevronDown } from "react-icons/fi";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FactsSection from "@/components/FactsSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid items-center justify-items-center min-h-screen`}
    >
      <Head>
        <title>Pralesy světa</title>
      </Head>

      {/* Video Background */}
<div id="home" className="relative w-full h-screen overflow-hidden">
  <Navbar />
  <video
  className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
    autoPlay
    loop
    muted
    playsInline
    poster="/poster.jpg"
  >
    <source src="/video.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay Text & Scroll Button */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
  <h1 className="text-6xl font-bold tracking-wide opacity-0 fade-in-up animation-delay-500">
  Lost in Nature
</h1>

<div className="absolute bottom-10 flex justify-center w-full opacity-0 fade-in-up animation-delay-1000">
  <a
    href="#content"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/50 bg-white/10 text-white text-2xl transition hover:bg-white/20"
  >
    <FiChevronDown />
  </a>
</div>

  </div>
</div>


      {/* Obsah stránky */}
      <HeroSection />
      <AboutSection />
      <Gallery />
      <FactsSection />
      <Contact />
      <Footer />
    </div>
  );
}
