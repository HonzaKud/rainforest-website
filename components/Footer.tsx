const Footer = () => {
  return (
    <footer className="relative w-full text-white pt-10 pb-8 overflow-hidden">
      {/* SVG vlna nahoře */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-10">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-[60px]"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-green-900"
          />
        </svg>
      </div>

      {/* Ambientní pozadí */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 bg-green-950">
        <div className="absolute w-[400px] h-[400px] bg-emerald-500 blur-[100px] opacity-30 top-10 left-1/4" />
        <div className="absolute w-[300px] h-[300px] bg-green-600 blur-[80px] opacity-40 bottom-10 right-1/3" />
      </div>

      {/* Parallax video background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <video
          src="/video.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10 scale-110 [transform:translateZ(0)]"
        />
      </div>

      {/* Obsah footeru */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-white/70 text-center md:text-left">
          &copy; {new Date().getFullYear()} Terra Verde. Všechna práva vyhrazena.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-green-400 transition">Facebook</a>
          <a href="#" className="hover:text-green-400 transition">Instagram</a>
          <a href="#contact" className="hover:text-green-400 transition">Kontakt</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
