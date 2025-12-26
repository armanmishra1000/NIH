"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, FileText, Calendar, Newspaper, Menu, X, ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Types for mobile menu items
type MobileMenuItem = {
  id: string;
  name: string;
  href?: string;
  hasChildren?: true;
  children?: readonly { name: string; href: string }[];
};

// Animation variants for mobile menu
const overlayVariants = {
  closed: { opacity: 0, pointerEvents: "none" as const },
  open: { opacity: 1, pointerEvents: "auto" as const }
};

const menuVariants = {
  closed: { x: "100%" },
  open: { x: "0%" }
};

const itemVariants = {
  closed: { x: 20, opacity: 0 },
  open: { x: 0, opacity: 1 }
};

const subMenuVariants = {
  closed: { x: "100%", opacity: 0 },
  open: { x: "0%", opacity: 1 }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

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

  // Mobile menu items structure matching the video design
  const mobileMenuItems: readonly MobileMenuItem[] = [
    { id: "home", name: "HOME", href: "/" },
    {
      id: "about-us",
      name: "ABOUT US",
      hasChildren: true,
      children: [
        { name: "About NIH", href: "/about" },
        { name: "Chairman's Message", href: "/about/chairman" }
      ]
    },
    {
      id: "members",
      name: "MEMBERS",
      hasChildren: true,
      children: [
        { name: "NIH Active Members", href: "/membership/active" },
        { name: "Members Institutions", href: "/membership/institutions" }
      ]
    },
    { id: "activities", name: "ACTIVITIES", href: "/activities" },
    {
      id: "membership",
      name: "MEMBERSHIP",
      hasChildren: true,
      children: [
        { name: "Become NIH Member", href: "/membership/form" }
      ]
    },
    { id: "media", name: "MEDIA", href: "/media" },
    { id: "news", name: "NEWS", href: "/news" },
    { id: "careers", name: "CAREERS", href: "/careers" },
    { id: "contact-us", name: "CONTACT US", href: "/contact" }
  ] as const;

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
      {/* Mobile Menu - Slide-in from right */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay/Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => { setIsMenuOpen(false); setActiveSubMenu(null); }}
              className="fixed inset-0 bg-black/50 z-50"
              aria-hidden="true"
            />

            {/* Slide-in Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-secondary z-[60] shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => { setIsMenuOpen(false); setActiveSubMenu(null); }}
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>

              {/* Menu Items Container */}
              <div className="h-full overflow-y-auto pt-16 pb-8">
                <motion.div
                  initial="closed"
                  animate="open"
                  className="space-y-0"
                >
                  {mobileMenuItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      transition={{ delay: index * 0.05, type: "spring", damping: 20, stiffness: 100 }}
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          onClick={() => { setIsMenuOpen(false); setActiveSubMenu(null); }}
                          className="block px-6 py-4 text-white font-semibold text-lg border-b border-white/10 hover:bg-white/5 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <button
                          onClick={() => setActiveSubMenu(item.id)}
                          className="w-full flex items-center justify-between px-6 py-4 text-white font-semibold text-lg border-b border-white/10 hover:bg-white/5 transition-colors"
                        >
                          <span>{item.name}</span>
                          <ChevronRight size={20} />
                        </button>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Sub-Menu Panel */}
              <AnimatePresence>
                {activeSubMenu && (
                  <motion.div
                    variants={subMenuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="absolute right-0 top-0 bottom-0 w-full bg-secondary z-10"
                  >
                    {/* Sub-menu Header with Back Button */}
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
                      <button
                        onClick={() => setActiveSubMenu(null)}
                        className="text-white hover:text-primary transition-colors"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <span className="text-white font-semibold text-lg">
                        {mobileMenuItems.find(i => i.id === activeSubMenu)?.name}
                      </span>
                    </div>

                    {/* Sub-menu Items */}
                    <div className="py-4">
                      {mobileMenuItems.find(i => i.id === activeSubMenu)?.children?.map((subItem, idx) => (
                        <motion.div
                          key={subItem.name}
                          variants={itemVariants}
                          transition={{ delay: idx * 0.05, type: "spring", damping: 20, stiffness: 100 }}
                        >
                          <Link
                            href={subItem.href}
                            onClick={() => { setIsMenuOpen(false); setActiveSubMenu(null); }}
                            className="block px-6 py-3 text-white font-medium text-base hover:bg-white/5 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;