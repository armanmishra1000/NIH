"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutNIH() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="relative sm:py-16 py-12 bg-zinc-50 overflow-hidden">
            {/* Parallax Floating Text */}
            {/* <motion.div
                style={{ y: y1 }}
                className="absolute top-20 -right-20 text-[20rem] font-black text-secondary/5 select-none pointer-events-none whitespace-nowrap hidden lg:block"
            >
                300 YEARS
            </motion.div>
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-40 -left-20 text-[15rem] font-black text-primary/5 select-none pointer-events-none whitespace-nowrap hidden lg:block uppercase"
            >
                Holistic
            </motion.div> */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="container mx-auto">

                    {/* Header Section */}
                    <div className="space-y-4 mb-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-bold text-sm uppercase tracking-widest border border-secondary/20"
                        >
                            The NIH Philosophy
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-zinc-900"
                        >
                            Health is the <span className="text-secondary italic">biggest necessity</span> in today&apos;s life
                        </motion.h2>
                    </div>

                    {/* Main Content Grid */}
                    <div className="flex flex-col lg:flex-row lg:gap-12 gap-8 items-start">

                        {/* Primary Narrative */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-7 space-y-6"
                        >
                            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                Health is the biggest necessity in today&apos;s life. We have to correct our diet, our thoughts and our behavior to keep our health constant.
                                <span className="text-zinc-900"> Only then can we remain physically, mentally and spiritually healthy.</span>
                            </p>

                            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                The National Institute of Holistic Health (NIH) has been working continuously for the last 4 years to make the common people aware of health globally.
                                Our mission spans health education, awareness camps, seminars, and conferences designed to make the whole world healthy.
                            </p>
                        </motion.div>

                        {/* Premium Glass Card Quote */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-5"
                        >
                            <div className="relative group">
                                <div className="relative bg-white/70 backdrop-blur-xl border border-white sm:p-8 p-6 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
                        
                                    <div className="relative z-10 space-y-6">
                                        <p className="sm:text-2xl text-xl font-serif italic text-zinc-800 leading-snug">
                                            According to mythological beliefs, man&apos;s age was considered to be around 300 years.
                                            Today, we can keep our body perfectly healthy for 100 years by keeping our diet and thoughts completely sattvic.
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-px bg-primary" />
                                            <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Holistic Truth</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 pt-4 border-t border-zinc-200"
                    >
                        <h3 className="text-2xl font-black text-zinc-900 italic">
                            Come, <span className="text-primary">let us all</span> make the world healthy.
                        </h3>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
