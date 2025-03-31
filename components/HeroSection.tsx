const HeroSection = () => {
  return (
    <section
      id="content"
      className="w-full bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Levá část – text */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Poznej krásu deštných pralesů
          </h2>
          <p className="text-white/90 leading-relaxed">
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
    </section>
  );
};

export default HeroSection;
