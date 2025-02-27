import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";

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
      <div className="relative w-full h-screen overflow-hidden">
      <Navbar />
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/poster.jpeg" // Pokud máš JPG, změň na .jpg
        >
          <source src="/video.webm" type="video/webm" />
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Text */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-40">
          <h1 className="text-4xl md:text-6xl font-bold">Objev kouzlo pralesů</h1>
          <p className="text-lg md:text-xl mt-4">Deštné pralesy jsou plíce naší planety. Poznej jejich krásu.</p>
          <a href="#content" className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700 transition">
            Prozkoumat
          </a>
        </div>
      </div>
    </div>
  );
}
