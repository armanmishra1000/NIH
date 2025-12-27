"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface HeroSlideData {
    id: number;
    image: string;
}

interface HeroSliderProps {
    slides: HeroSlideData[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {

    return (
        <section
            className="relative h-[85vh] w-full overflow-hidden bg-black"
            aria-roledescription="carousel"
            aria-label="NIH Health Hero Showcase"
        >
            {/* Custom Navigation Buttons - Positioned outside Swiper */}
            <button
                className="swiper-button-prev-custom absolute top-1/2 left-6 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/70 text-white transition-all hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="swiper-button-next-custom absolute top-1/2 right-6 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/70 text-white transition-all hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            <Swiper
                modules={[Autoplay, Navigation]}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
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
            </Swiper>
        </section>
    );
}
