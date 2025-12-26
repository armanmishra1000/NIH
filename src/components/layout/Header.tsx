"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, FileText, Calendar, Newspaper, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Activities", href: "/activities" },
    { name: "Careers", href: "/careers" },
  ];
  const ctaButtons = [
    {
      name: "Membership",
      href: "/membership",
      icon: <User size={18} />,
      hasDropdown: true,
      dropdownItems: [
        { name: "Membership form", href: "/membership/form" },
        { name: "Active Members", href: "/membership/active" },
        { name: "Member's Institutions", href: "/membership/institutions" },
        { name: "Life Members", href: "/membership/life" },
        { name: "Associate Centres", href: "/membership/associate" },
      ]
    },
    {
      name: "Course Brochure",
      href: "/course-brochure",
      icon: <FileText size={18} />
    },
    {
      name: "Events",
      href: "/events",
      icon: <Calendar size={18} />
    },
    {
      name: "News",
      href: "/news",
      icon: <Newspaper size={18} />
    },
  ];
  return (
    <header
      style={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "white",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        boxShadow: isScrolled ? "0 4px 6px -1px rgb(0 0 0 / 0.1)" : "none",
      }}
      className="sticky top-0 z-50 w-full transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="NIH Logo"
                width={180}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {ctaButtons.map((btn) => (
              <div key={btn.name} className="relative group">
                {btn.hasDropdown ? (
                  <>
                    <button
                      className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all hover:shadow-md bg-primary text-white hover:bg-opacity-90 cursor-pointer`}
                    >
                      {btn.icon}
                      {btn.name}
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="bg-white rounded-2xl p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] min-w-[240px] border border-secondary/10"
                        >
                          <div className="flex flex-col gap-1">
                            {btn.dropdownItems?.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-secondary hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-200"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={btn.href}
                    className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all hover:shadow-md ${btn.name === "Membership"
                      ? "bg-primary text-white hover:bg-opacity-90"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      }`}
                  >
                    {btn.icon}
                    {btn.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-secondary focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
          } bg-white border-t border-gray-100 shadow-xl`}
      >
        <div className="px-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mt-4 px-4 space-y-2 border-t border-gray-100 pt-4 pb-2">
          {ctaButtons.map((btn) => (
            <div key={btn.name} className="space-y-1">
              {btn.hasDropdown ? (
                <div className="space-y-1">
                  <div
                    className={`flex w-full items-center justify-between gap-2 rounded-xl px-5 py-3 text-base font-medium bg-primary text-white`}
                  >
                    <div className="flex items-center gap-2">
                      {btn.icon}
                      {btn.name}
                    </div>
                  </div>
                  <div className="pl-4 space-y-1 mt-1">
                    {btn.dropdownItems?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={btn.href}
                  className={`flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-medium ${btn.name === "Membership"
                    ? "bg-primary text-white"
                    : "border-2 border-primary text-primary"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {btn.icon}
                  {btn.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;