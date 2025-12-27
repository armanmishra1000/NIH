"use client";

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Swiper as SwiperClass } from 'swiper';

// Import Swiper styles
import 'swiper/css';

interface HeroSlideData {
    id: number;
    image: string;
}

interface HeroSliderProps {
    slides: HeroSlideData[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
    const pendingSlides = useRef<number>(0);

    const processQueue = useCallback(() => {
        if (!swiperInstance || swiperInstance.animating || pendingSlides.current === 0) return;

        if (pendingSlides.current > 0) {
            swiperInstance.slideNext(600);
            pendingSlides.current -= 1;
        } else if (pendingSlides.current < 0) {
            swiperInstance.slidePrev(600);
            pendingSlides.current += 1;
        }
    }, [swiperInstance]);

    const handleNext = () => {
        if (!swiperInstance) return;
        pendingSlides.current += 1;
        processQueue();
    };

    const handlePrev = () => {
        if (!swiperInstance) return;
        pendingSlides.current -= 1;
        processQueue();
    };

    return (
        <section
            className="relative h-[85vh] w-full overflow-hidden bg-black"
            aria-roledescription="carousel"
            aria-label="NIH Health Hero Showcase"
        >
            {/* Custom Navigation Buttons - Programmatic control */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-6 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/70 text-white transition-all hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-6 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/70 text-white transition-all hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            <SwiperComponent
                onSwiper={setSwiperInstance}
                onTransitionEnd={processQueue}
                modules={[Autoplay]}
                speed={600}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full">
                            <Image
                                src={slide.image}
                                alt={`Hero Slide ${slide.id}`}
                                fill
                                priority={index === 0}
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </section>
    );
}
