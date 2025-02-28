const AboutSection = () => {
    return (
      <section
        id="about"
        className="relative w-full bg-gradient-to-r from-green-500 via-green-700 to-green-900 text-white py-24 px-6 md:px-16 flex flex-col md:flex-row-reverse items-center"
      >
        {/* Pravá část – text */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Tajemství pralesů
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/80">
            Deštné pralesy skrývají tisíce druhů, které stále čekají na své objevení.
            Každý kout těchto lesů je ekosystém sám o sobě, plný vzájemně propojených
            rostlin a živočichů.
          </p>
          <p className="mt-4 text-lg md:text-xl text-white/80">
            V srdci Amazonie nalezneme stromy vysoké jako mrakodrapy a flóru, 
            která dokáže přežít i v těch nejextrémnějších podmínkách. 
            Vědci stále nacházejí nové druhy, které dokazují, jak neuvěřitelně 
            komplexní a propojený tento svět je.
          </p>
          <p className="mt-4 text-lg md:text-xl text-white/80">
            I přes svou odolnost jsou pralesy extrémně citlivé na lidskou činnost.
            Každý nevratný zásah může narušit rovnováhu a ohrozit celé populace živočichů a rostlin.
          </p>
          <p className="mt-4 text-lg md:text-xl text-white/80">
            Pojďme společně objevit skrytá tajemství těchto přírodních divů a pochopit,
            jak můžeme pomoci jejich ochraně.
          </p>
        </div>
  
        {/* Levá část – obrázek */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/about.jpg"
            alt="Tajemný prales"
            className="w-full max-w-lg rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  