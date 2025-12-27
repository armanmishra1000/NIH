"use client";

import { motion } from "framer-motion";

const milestones = [
    {
        year: "2021",
        title: "Foundation",
        description: "The National Institute of Holistic Health (NIH) was established with a singular vision: to correct modern lifestyle through ancient wisdom.",
    },
    {
        year: "2022",
        title: "Global Outreach",
        description: "Successfully conducted international conferences and expanded outreach through health awareness camps globally.",
    },
    {
        year: "2023",
        title: "Network Expansion",
        description: "Established a robust network of 20+ associated and wellness centers across diverse regions.",
    },
    {
        year: "2024",
        title: "Digital Integration",
        description: "Launched dedicated E-Magazine and certification courses in Yoga, Meditation, and Holistic Health (CCH).",
    },
    {
        year: "2025",
        title: "New Identity",
        description: "Rebuilding NIH Health with a state-of-the-art digital prototype and advanced research facilities.",
    },
];

export default function Timeline() {
    return (
        <section className="sm:py-16 py-12 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-secondary font-bold tracking-widest uppercase text-sm">Our Evolution</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-zinc-900">A Journey of <span className="text-primary italic">Excellence</span></h3>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-zinc-200" />

                    {/* milestones */}
                    <div className="space-y-16">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {/* Content */}
                                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <div className="space-y-2">
                                        <span className="text-primary font-black text-2xl tracking-tighter">{item.year}</span>
                                        <h4 className="text-2xl font-bold text-zinc-900">{item.title}</h4>
                                        <p className="text-zinc-600 leading-relaxed font-medium">{item.description}</p>
                                    </div>
                                </div>

                                {/* Node */}
                                <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(243,151,42,0.6)] ring-4 ring-white" />
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10" />
        </section>
    );
}
