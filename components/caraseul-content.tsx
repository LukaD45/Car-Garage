import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

export default function CustomerStatements() {
  const carouselRef = useRef(null);
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [isPlaying, setIsPlaying] = useState(true);

  const startAutoplay = () => {
    if (plugin.current) {
      plugin.current.play();
      setIsPlaying(true);
    }
  };

  const stopAutoplay = () => {
    if (plugin.current) {
      plugin.current.stop();
      setIsPlaying(false);
    }
  };

  const toggleAutoplay = () => {
    if (isPlaying) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  };

  const images = [
    "/porsche.jpg",
    "/mclaren.jpg",
    "/aston.jpg",
    "/gtr.avif",
    "/nevera.jpg",
  ];

  return (
    <section className="flex justify-center mb-[200px]">
      <Carousel
        ref={carouselRef}
        plugins={[plugin.current]}
        className="w-9/12 md:w-10/12 lg:w-12/12"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-4/5">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        alt="Carousel image"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <button onClick={toggleAutoplay} className="">
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
