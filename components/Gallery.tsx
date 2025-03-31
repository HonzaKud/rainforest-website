const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative w-full bg-gradient-to-b from-green-900 via-green-800 to-green-700 text-white py-24 px-6 md:px-16 text-center"
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />

      {/* Nový kontejner pro šířku a zarovnání */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold">Galerie pralesů</h2>
        <p className="mt-4 text-lg md:text-xl text-white/80">
          Prohlédněte si úchvatné záběry z nejkrásnějších deštných pralesů na světě.
        </p>

        {/* Mřížka obrázků */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Galerie ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
