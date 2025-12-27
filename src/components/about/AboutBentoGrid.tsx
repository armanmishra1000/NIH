"use client";

import { motion } from "framer-motion";
import { Users, UserCheck, Building2, Hospital, Tent, Lightbulb, Heart, Activity } from "lucide-react";

export default function AboutBentoGrid() {
    return (
        <section className="py-24 bg-zinc-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-secondary font-bold tracking-widest uppercase text-sm">Our Impact</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-zinc-900">NIH <span className="text-primary italic">At A Glance</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-6 md:h-[800px]">

                    {/* Philosophy Card - Large */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 md:row-span-2 bg-secondary rounded-[2.5rem] p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-xl"
                    >
                        <div className="relative z-10">
                            <Lightbulb className="w-12 h-12 text-primary mb-6" />
                            <h4 className="text-3xl font-black mb-6 leading-tight">The Core <span className="text-primary">Philosophy</span></h4>
                            <p className="text-lg text-white/90 leading-relaxed font-medium italic">
                                &ldquo;Health is the biggest necessity in today&apos;s life. We have to correct our diet, our thoughts and our behavior to keep our health constant. Only then can we remain physically, mentally and spiritually healthy.&rdquo;
                            </p>
                        </div>
                        <div className="relative z-10 mt-8 flex items-center gap-4">
                            <div className="h-1px flex-grow bg-white/20" />
                            <span className="text-primary font-bold uppercase tracking-widest text-xs">Since 2021</span>
                        </div>
                        {/* Background Accent */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    </motion.div>

                    {/* Members Stat - Tall */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 md:row-span-2 bg-white border border-zinc-100 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center shadow-lg shadow-zinc-200/50"
                    >
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <UserCheck className="w-10 h-10 text-primary" />
                        </div>
                        <span className="text-5xl font-black text-zinc-900 mb-2">2,127+</span>
                        <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Active Members</span>
                        <p className="mt-4 text-zinc-600 text-sm leading-relaxed">A growing community committed to holistic well-being.</p>
                    </motion.div>

                    {/* Students Stat */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 bg-white border border-zinc-100 rounded-[2.5rem] p-8 shadow-md flex items-center gap-6"
                    >
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                            <Users className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="block text-2xl font-black text-zinc-900">135+</span>
                            <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest">Global Students</span>
                        </div>
                    </motion.div>

                    {/* Centres Stat */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 bg-white border border-zinc-100 rounded-[2.5rem] p-8 shadow-md flex items-center gap-6"
                    >
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                            <Building2 className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="block text-2xl font-black text-zinc-900">21+</span>
                            <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest">Associated Centres</span>
                        </div>
                    </motion.div>

                    {/* Wellness Centres - Wide */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 bg-[#FDFDFD] border-2 border-primary/20 rounded-[2.5rem] p-8 flex items-center justify-between shadow-lg"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                <Hospital className="w-8 h-8" />
                            </div>
                            <div>
                                <h5 className="text-xl font-black text-zinc-900 leading-tight">13 Dedicated <br /> Wellness Centres</h5>
                                <p className="text-zinc-500 text-sm mt-1">Providing personalized holistic care.</p>
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <Activity className="w-12 h-12 text-zinc-100" />
                        </div>
                    </motion.div>

                    {/* Checkup Camps */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 bg-[#1A1A1A] rounded-[2.5rem] p-8 text-white flex flex-col justify-center text-center shadow-xl"
                    >
                        <Tent className="w-8 h-8 text-primary mx-auto mb-4" />
                        <span className="text-3xl font-black text-white">224+</span>
                        <span className="text-primary/80 font-bold uppercase tracking-widest text-[10px] mt-1">Health Camps</span>
                    </motion.div>

                    {/* Values - Small squares if needed, but I'll use the remaining space */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 bg-white border border-zinc-100 rounded-[2.5rem] p-8 shadow-md flex flex-col items-center justify-center text-center"
                    >
                        <Heart className="w-8 h-8 text-rose-500 mb-2" />
                        <span className="text-lg font-black text-zinc-900 italic">Trusted</span>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
