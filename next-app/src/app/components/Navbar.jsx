"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#0B0B0C] border-b border-[#C6A664]/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="relative w-32 h-10">
          <img
            src="/logo/horizontal_white.png"
            alt="Katerina Tzova"
            className="object-contain w-full h-full"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-[#EAEAEA]">
          <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
          <Link href="/stills" className="hover:text-[#D4AF37]">Stills</Link>
          <Link href="/films" className="hover:text-[#D4AF37]">Films</Link>
          <Link href="/about" className="hover:text-[#D4AF37]">About</Link>
          <Link href="/contact" className="hover:text-[#D4AF37]">Contact</Link>
        </div>

        {/* Mobile drawer trigger */}
        <div className="md:hidden">
          {/* MobileDrawer button will go here */}
        </div>
      </div>
    </nav>
  );
}
