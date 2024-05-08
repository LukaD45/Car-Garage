"use client";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/images/g-class.jpg",
    alt: "Mercedes G Klasa",
  },
  {
    src: "/images/golf2.jpg",
    alt: "Volkswagen Golf II",
  },
  {
    src: "/images/cayman.jpg",
    alt: "Porsche Cayman GT4RS",
  },
  {
    src: "/images/koenigsegg.jpg",
    alt: "Koenigsegg Agera",
  },
  {
    src: "/images/mclaren.jpg",
    alt: "Mclaren P1",
  },
  {
    src: "/images/passat.jpg",
    alt: "Volkswagen Passat",
  },
  {
    src: "/images/porsche-cacenne.jpg",
    alt: "Porache Cayenne",
  },
  {
    src: "/images/porsche-pan.jpeg",
    alt: "Porsche Panamera",
  },
  {
    src: "/images/rimac-nevera.jpg",
    alt: "Rimac Nevera",
  },
];

export default function Gallery() {
  return (
    <section className="py-10 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24">
      <div>
        <h1 className="text-center text-4xl font-semibold">Galerija</h1>
        <p className="text-center font-lg text-slate-400 mt-4 mb-10">
          Pogledajte ostale automobila
        </p>
      </div>
      <LightGallery
        speed={300}
        plugins={[lgThumbnail]}
        elementClassNames="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {images.map(({ src, alt }) => (
          <Link href={src} key={src}>
            <Image
              alt={alt}
              src={src}
              width={100}
              height={100}
              className="w-full h-full"
            />
          </Link>
        ))}
      </LightGallery>
    </section>
  );
}
