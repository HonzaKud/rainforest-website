const HeroSection = () => {
  return (
    <section
      id="content"
      className="relative w-full text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Pozadí sekce + ambientní kruhy */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-green-950">
        <div className="absolute w-[400px] h-[400px] bg-green-600 blur-[100px] opacity-40 top-0 left-1/4" />
        <div className="absolute w-[300px] h-[300px] bg-emerald-400 blur-[80px] opacity-30 bottom-0 right-1/3" />
      </div>

      {/* Obsah sekce */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Levá část – text */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Poznej krásu deštných pralesů
          </h2>
          <p className="text-white/90 leading-relaxed max-w-xl">
            Deštné pralesy jsou jedním z nejdůležitějších ekosystémů na Zemi.
            Poskytují domov milionům druhů rostlin a živočichů, z nichž mnohé
            nenajdeme nikde jinde.
            <br />
            <br />
            Jsou také klíčové pro udržení rovnováhy klimatu – fungují jako
            obrovské zásobníky oxidu uhličitého a produkují kyslík, který
            dýcháme.
            <br />
            <br />
            Bohužel, kvůli odlesňování a nelegální těžbě jsou pralesy ohroženy
            více než kdy dříve. Každý rok mizí obrovské plochy těchto unikátních
            lesů.
            <br />
            <br />
            Pokud chceme tento poklad přírody zachovat i pro budoucí generace, je
            nutné jednat. Každý z nás může přispět ke změně – ať už podporou
            ekologických projektů, odpovědnou spotřebou nebo vzděláváním
            ostatních.
          </p>
        </div>

        {/* Pravá část – obrázek */}
        <div className="w-full md:w-2/5">
          <img
            src="/forest.jpg"
            alt="Deštný prales"
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

export default HeroSection;
