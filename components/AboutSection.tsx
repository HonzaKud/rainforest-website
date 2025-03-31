const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Pravá část – text */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tajemství pralesů
          </h2>
          <p className="text-white/90 leading-relaxed">
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
    </section>
  );
};

export default AboutSection;
