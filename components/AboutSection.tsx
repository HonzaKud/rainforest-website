const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Ambientní pozadí + kruhy */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 bg-green-950">
        <div className="absolute w-[400px] h-[400px] bg-emerald-500 blur-[100px] opacity-30 top-10 left-1/4" />
        <div className="absolute w-[300px] h-[300px] bg-green-600 blur-[80px] opacity-40 bottom-10 right-1/3" />
      </div>

      {/* Parallax Video Background */}
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

      {/* SVG vlna nahoře bez gradientu */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
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

      {/* Obsah sekce */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-20">
        {/* Pravá část – text */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tajemství pralesů
          </h2>
          <p className="text-white/90 leading-relaxed max-w-xl">
            Deštné pralesy skrývají tisíce druhů, které stále čekají na své objevení.
            Každý kout těchto lesů je ekosystém sám o sobě, plný vzájemně propojených
            rostlin a živočichů.
            <br />
            <br />
            V srdci Amazonie nalezneme stromy vysoké jako mrakodrapy a flóru, 
            která dokáže přežít i v těch nejextrémnějších podmínkách. 
            Vědci stále nacházejí nové druhy, které dokazují, jak neuvěřitelně 
            komplexní a propojený tento svět je.
            <br />
            <br />
            I přes svou odolnost jsou pralesy extrémně citlivé na lidskou činnost.
            Každý nevratný zásah může narušit rovnováhu a ohrozit celé populace živočichů a rostlin.
            <br />
            <br />
            Pojďme společně objevit skrytá tajemství těchto přírodních divů a pochopit,
            jak můžeme pomoci jejich ochraně.
          </p>
        </div>

        {/* Levá část – obrázek */}
        <div className="w-full md:w-2/5">
          <img
            src="/about.jpg"
            alt="Tajemný prales"
            className="rounded-lg shadow-xl object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* SVG vlna dole */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
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
    </section>
  );
};

export default AboutSection;
