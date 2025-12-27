"use client";

import EventCard from './EventCard';
import NewsItem from './NewsItem';
import { ChevronRight } from 'lucide-react';

const upcomingEvents = [
    { date: "18 November 2025", title: "International Seminar on Yoga & Wellness 2025", link: "https://forms.gle/bMJaf6cUczn1ehLF7" },
    { date: "10 April 2026", title: "Upcoming Events" },
    { date: "07 Feb 2026", title: "International Conference on Yoga & Holistic Health-2026" },
    { date: "15 January 2026", title: "Bharat Yatra" },
    { date: "20 March 2026", title: "Monthly Webinar" }
];

const latestNews = [
    { date: "2026-02-07", title: "International Conference (Rishikesh)" },
    { date: "2025-11-18", title: "8th Naturopathy Day" },
    { date: "2025-03-24", title: "Coming Soon" },
    { date: "2025-09-15", title: "Wellness Centre Launch" },
    { date: "2025-12-01", title: "Membership Drive" }
];

export default function EventsNews() {
    return (
        <section className="sm:py-16 py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

                    {/* LEFT COLUMN - Upcoming Events */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-black text-zinc-900 tracking-widest uppercase border-l-4 border-primary pl-4">
                                Upcoming <span className="text-primary">Events</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-4">
                            {upcomingEvents.map((event, index) => (
                                <EventCard key={index} {...event} />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Latest News */}
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <h2 className="text-xl font-black text-zinc-900 tracking-widest uppercase border-l-4 border-secondary pl-4">
                                Latest <span className="text-secondary">News</span>
                            </h2>
                        </div>

                        <div className="bg-secondary p-8 rounded-3xl shadow-xl flex-1 max-h-2xl flex flex-col relative overflow-hidden group">
                            {/* View All Button Card */}
                            <div className="bg-secondary/50 backdrop-blur-sm mb-4 rounded-xl flex items-center justify-between">
                                <h3 className="text-white text-sm font-bold uppercase tracking-wider">News Feed</h3>
                                <button className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-1">
                                    View All <ChevronRight className="size-4" />
                                </button>
                            </div>

                            <div className="relative flex-1 overflow-hidden">
                                {/* Gradient Fades */}
                                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-secondary to-transparent z-10" />
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-secondary to-transparent z-10" />

                                <div className="h-96 overflow-hidden relative">
                                    <div className="flex flex-col animate-scroll-vertical scroll-container">
                                        {[...latestNews, ...latestNews, ...latestNews].map((news, index) => (
                                            <NewsItem key={index} {...news} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

