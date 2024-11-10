"use client";
import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
} from "@/components/ui/carousel";
import { Pill } from "@/components/pill";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const HeroCard = () => {
  return (
    <div className="w-full md:flex flex-col text-surface-light bg-jetpack-eclipse bg-no-repeat bg-cover border border-surface-overlay md:gradient-top-border rounded-3xl mt-16 p-10 md:p-11 pb-44 md:pb-64 relative">
      <div className="hidden md:block">
        <Pill variant="outline" className="self-start">
          Guides
        </Pill>
        <h2 className="font-extrabold text-3xl mt-6 mb-2 max-w-[32ch]">
          Don&apos;t Rebuild Yourself - an intro to Nix Package Caches
        </h2>
        <p className="text-2xl max-w-[48ch]">
          Learn how the Jetify Cache can accelerate your Devbox projects and
          custom packages.
        </p>
        <p className="text-sm absolute left-11 bottom-10">
          Jul 12, 2024 — 4 min read
        </p>
      </div>
    </div>
  );
};

const CardCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      className="flex flex-col w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="w-full">
            <HeroCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselIndicators />
    </Carousel>
  );
};

export default CardCarousel;
