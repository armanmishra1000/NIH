"use client";

import { ChevronRight } from 'lucide-react';

interface NewsItemProps {
    date: string;
    title: string;
}

export default function NewsItem({ date, title }: NewsItemProps) {
    return (
        <div className="py-4 border-b border-white/10 last:border-0 cursor-pointer transition-colors">
            <div className="flex items-center justify-between gap-6">
                <div className="flex flex-col gap-1 flex-1">
                    <span className="text-white text-xs font-mono tracking-widest uppercase">
                        {date}
                    </span>
                    <h5 className="text-white text-base font-semibold leading-snug hover:text-primary transition-colors line-clamp-1">
                        {title}
                    </h5>
                </div>

                <div className="flex items-center gap-1 text-white/60 hover:text-primary transition-colors text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                    Read More
                    <ChevronRight className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
}

