import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section
      id="gallery"
      className="relative w-full text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Ambientní pozadí + kruhy */}
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

      {/* Obsah galerie */}
      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">Galerie pralesů</h2>
        <p className="mt-4 text-lg md:text-xl text-white/80">
          Prohlédněte si úchvatné záběry z nejkrásnějších deštných pralesů na světě.
        </p>

        {/* Mřížka obrázků */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="overflow-hidden rounded-lg shadow-lg focus:outline-none"
            >
              <img
                src={src}
                alt={`Galerie ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((src) => ({ src }))}
      />

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

export default Gallery;
