const HeroSection = () => {
    return (
      <section
        id="content"
        className="relative w-full bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white py-24 px-6 md:px-16 flex flex-col md:flex-row items-center"
      >
        {/* Levá část – text */}
<div className="md:w-1/2 text-left">
  <h2 className="text-4xl md:text-6xl font-bold leading-tight">
    Poznej krásu deštných pralesů
  </h2>
  <p className="mt-6 text-lg md:text-xl text-white/80">
    Deštné pralesy jsou jedním z nejdůležitějších ekosystémů na Zemi.
    Poskytují domov milionům druhů rostlin a živočichů, z nichž mnohé nenajdeme nikde jinde.
  </p>
  <p className="mt-4 text-lg md:text-xl text-white/80">
    Jsou také klíčové pro udržení rovnováhy klimatu – fungují jako obrovské zásobníky
    oxidu uhličitého a produkují kyslík, který dýcháme.
  </p>
  <p className="mt-4 text-lg md:text-xl text-white/80">
    Bohužel, kvůli odlesňování a nelegální těžbě jsou pralesy ohroženy více než kdy dříve.
    Každý rok mizí obrovské plochy těchto unikátních lesů.
  </p>
  <p className="mt-4 text-lg md:text-xl text-white/80">
    Pokud chceme tento poklad přírody zachovat i pro budoucí generace, je nutné jednat.
    Každý z nás může přispět ke změně – ať už podporou ekologických projektů, 
    odpovědnou spotřebou nebo vzděláváním ostatních.
  </p>
</div>

  
        {/* Pravá část – obrázek */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/forest.jpg"
            alt="Deštný prales"
            className="w-full max-w-lg rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  