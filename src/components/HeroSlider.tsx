'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

export interface Slide {
  id: number;
  image: string;
  alt: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number>(0);

  // Auto-play effect with pause on hover
  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isPaused, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setCurrentSlide(
          (prev) => (prev - 1 + slides.length) % slides.length
        );
      } else if (event.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  // Touch gesture handlers
  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const touchEndX = event.changedTouches[0].clientX;
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
      // Swipe left - next slide
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (touchEndX - touchStartX > swipeThreshold) {
      // Swipe right - previous slide
      setCurrentSlide(
        (prev) => (prev - 1 + slides.length) % slides.length
      );
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative h-[80vh] overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="NIH Hero Slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Background */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <Image
            key={slide.id}
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            quality={90}
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 sm:flex size-12 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary/80 focus:outline-none cursor-pointer hidden"
        aria-label="Previous slide"
      >
        <ChevronsLeft className="size-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 sm:flex size-12 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary/80 focus:outline-none cursor-pointer hidden"
        aria-label="Next slide"
      >
        <ChevronsRight className="size-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? 'w-8 bg-primary'
                : 'w-2 bg-white hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
}
