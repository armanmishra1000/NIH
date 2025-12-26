"use client";
import React from "react";
const TopTicker = () => {
  const newsItems = [
    "Join us Now - Admission Open for 2025-26 Session!",
    "Important: Monthly E-Magazine for January 2026 is now available.",
    "Central Control Board meeting scheduled for next week.",
    "New Course: Advanced Health Management starting soon.",
  ];
  return (
    <div className="bg-secondary overflow-hidden py-2 text-white">
      <div className="flex animate-marquee whitespace-nowrap">
        {newsItems.map((item, index) => (
          <span key={index} className="mx-8 text-sm font-medium">
            {item}
          </span>
        ))}
        {/* Duplicate for seamless looping */}
        {newsItems.map((item, index) => (
          <span key={`dup-${index}`} className="mx-8 text-sm font-medium">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
export default TopTicker;