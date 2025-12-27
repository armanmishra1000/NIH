"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GraduationCap, Microscope, Activity, Eye, Compass } from "lucide-react";
import React from "react";

const missionPoints = [
    {
        icon: GraduationCap,
        title: "Educational Excellence",
        description: "Establishing sound pre-primary to higher education institutions with a focus on holistic growth and skill development.",
        color: "bg-primary",
    },
    {
        icon: Activity,
        title: "Holistic Training",
        description: "Professional training in Ayurveda, Yoga, Naturopathy, and Skill Development for global placement.",
        color: "bg-secondary",
    },
    {
        icon: Microscope,
        title: "Advanced Research",
        description: "Conducting deep research in education and healthcare disciplines to innovate holistic solutions.",
        color: "bg-zinc-800",
    },
];

function TiltCard({ point, index }: { point: typeof missionPoints[0]; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-100 overflow-hidden"
        >
            <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                <div className={`w-16 h-16 ${point.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform`}>
                    <point.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-zinc-900 mb-4">{point.title}</h3>
                <p className="text-zinc-600 leading-relaxed font-medium">{point.description}</p>
            </div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out" />
        </motion.div>
    );
}

export default function VisionMissionSplit() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">

                    {/* Vision - High Contrast Sticky */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="sticky top-24 bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden"
                        >
                            {/* Decorative Grid */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                            <div className="relative z-10 space-y-8">
                                <div className="inline-flex items-center px-4 py-2 bg-primary rounded-full text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-primary/20">
                                    <Eye className="w-4 h-4 mr-2" />
                                    Our Vision
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                                    Pioneering <span className="text-primary italic">Global Wellness</span> thru Holistic wisdom
                                </h2>
                                <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                                    To ignite a global awakening where every soul reclaims their birthright of 100+ years of vibrant, sattvic harmony through the convergence of ancient truths and modern care.
                                </p>
                                <div className="flex items-center gap-4 text-primary font-bold">
                                    <Compass className="w-6 h-6 animate-spin-slow" />
                                    <span>Guiding the World to Health</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Mission - Interactive Cards */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-bold text-sm uppercase tracking-widest">
                                Mission Objectives
                            </div>
                            <h2 className="text-4xl font-black text-zinc-900 leading-tight">
                                How we make the <span className="text-secondary italic">Difference</span>
                            </h2>
                        </div>

                        <div className="grid gap-8">
                            {missionPoints.map((point, index) => (
                                <TiltCard key={index} point={point} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
