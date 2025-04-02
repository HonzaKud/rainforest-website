const FactsSection = () => {
    return (
      <section
        id="facts"
        className="relative w-full text-white py-24 px-6 md:px-16 overflow-hidden"
      >
        {/* Ambientní pozadí */}
        <div className="absolute top-0 left-0 w-full h-full -z-20 bg-green-950">
          <div className="absolute w-[400px] h-[400px] bg-emerald-500 blur-[100px] opacity-20 top-10 left-1/4" />
          <div className="absolute w-[300px] h-[300px] bg-green-600 blur-[80px] opacity-30 bottom-10 right-1/3" />
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
  
        {/* SVG vlna nahoře */}
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
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Příběhy z pralesa</h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Objev fascinující fakta, tajemství a jedinečné příběhy, které deštné pralesy skrývají.
          </p>
  
          {/* Boxy s fakty */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transform transition">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-2">Biodiverzita</h3>
              <p className="text-white/80 text-sm">
                Deštné pralesy jsou domovem více než 50 % všech známých druhů rostlin a živočichů.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transform transition">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold mb-2">Vodní cyklus</h3>
              <p className="text-white/80 text-sm">
                Stromy v pralese vytvářejí vlastní déšť. Vypařují vlhkost, která se vrací jako srážky.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transform transition">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="text-xl font-bold mb-2">Kyslík pro Zemi</h3>
              <p className="text-white/80 text-sm">
                Pralesy produkují více než 20 % kyslíku, který dýcháme. Jsou klíčem ke zdravé planetě.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transform transition">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">Neprozkoumaný svět</h3>
              <p className="text-white/80 text-sm">
                Každý rok vědci objeví stovky nových druhů v pralesích, které jsme ještě nikdy neviděli.
              </p>
            </div>
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
  
  export default FactsSection;
  