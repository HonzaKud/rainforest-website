const Contact = () => {
    return (
      <section id="contact" className="bg-green-900 text-white py-24 px-6 md:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          
          {/* Levá část – Formulář */}
          <div className="px-6 md:px-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Napiš nám</h2>
            <p className="text-lg text-white/80 mb-6">
              Máš dotaz nebo nám chceš něco sdělit? Napiš nám pomocí formuláře níže.
            </p>
  
            <form className="space-y-6">
              <div>
                <label className="block text-lg">Jméno</label>
                <input type="text" placeholder="Tvoje jméno" className="w-full p-3 rounded-lg bg-white text-gray-900" />
              </div>
              <div>
                <label className="block text-lg">E-mail</label>
                <input type="email" placeholder="Tvůj e-mail" className="w-full p-3 rounded-lg bg-white text-gray-900" />
              </div>
              <div>
                <label className="block text-lg">Zpráva</label>
                <textarea placeholder="Napiš svou zprávu..." className="w-full p-3 rounded-lg bg-white text-gray-900 h-32"></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700 transition">
                Odeslat
              </button>
            </form>
          </div>
  
          {/* Pravá část – Kontakt */}
          <div className="px-6 md:px-16 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h2>
            <p className="text-lg text-white/80 mb-4">
              Adresa: Pralesní ulice 42, 100 00 Zelená Země
            </p>
            <p className="text-lg text-white/80 mb-4">
              E-mail: info@terraverde.com
            </p>
            <p className="text-lg text-white/80 mb-4">
              Telefon: +420 123 456 789
            </p>
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Contact;
  