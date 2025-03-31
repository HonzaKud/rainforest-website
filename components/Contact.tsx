const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Ambientní pozadí */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-green-950">
        <div className="absolute w-[400px] h-[400px] bg-emerald-500 blur-[100px] opacity-30 top-10 left-1/4" />
        <div className="absolute w-[300px] h-[300px] bg-green-600 blur-[80px] opacity-40 bottom-10 right-1/3" />
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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 relative z-10">
        {/* Levá část – Formulář */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Napiš nám</h2>
          <p className="text-lg text-white/80 mb-6 max-w-md">
            Máš dotaz nebo nám chceš něco sdělit? Napiš nám pomocí formuláře níže.
          </p>

          <form className="space-y-6 w-full max-w-md text-left">
            <div>
              <label className="block text-lg">Jméno</label>
              <input
                type="text"
                placeholder="Tvoje jméno"
                className="w-full p-3 rounded-lg bg-white text-gray-900"
              />
            </div>
            <div>
              <label className="block text-lg">E-mail</label>
              <input
                type="email"
                placeholder="Tvůj e-mail"
                className="w-full p-3 rounded-lg bg-white text-gray-900"
              />
            </div>
            <div>
              <label className="block text-lg">Zpráva</label>
              <textarea
                placeholder="Napiš svou zprávu..."
                className="w-full p-3 rounded-lg bg-white text-gray-900 h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700 transition"
            >
              Odeslat
            </button>
          </form>
        </div>

        {/* Pravá část – Kontakt */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h2>
          <p className="text-lg text-white/80 mb-4 max-w-md">
            <strong>Adresa:</strong> Pralesní ulice 42, 100 00 Zelená Země
          </p>
          <p className="text-lg text-white/80 mb-4 max-w-md">
            <strong>E-mail:</strong> info@terraverde.com
          </p>
          <p className="text-lg text-white/80 mb-4 max-w-md">
            <strong>Telefon:</strong> +420 123 456 789
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
