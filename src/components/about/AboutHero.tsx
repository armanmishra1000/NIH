"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function AboutHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-[60vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center"
        >
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/images/banner-1.jpg"
                    alt="About NIH"
                    fill
                    className="object-cover brightness-[0.6]"
                    priority
                />
            </motion.div>

            {/* Content */}
            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ opacity }}
                >
                    {/* Breadcrumbs */}
                    <nav className="flex items-center justify-center space-x-2 text-white/80 text-sm mb-6 uppercase tracking-widest font-bold">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-primary">About Us</span>
                    </nav>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        Our <span className="text-primary italic">Journey</span> & Vision
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg text-white/90 font-medium leading-relaxed">
                        Pioneering the path to physical, mental, and spiritual harmony for over 4 years globally.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
        </section>
    );
}
