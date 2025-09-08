"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#0B0B0C] border-b border-[#C6A664]/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">        {/* Logo */}
        <Link href="/" className="relative h-10 w-48">
        <img
            src="/logo/horizontal_white.png"
            alt="Katerina Tzova"
            className="object-contain w-full h-full"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-[#EAEAEA]">
          <NavItem href="/" label="Home" />
          <NavItem href="/stills" label="Stills" />
          <NavItem href="/films" label="Films" />
          <NavItem href="/about" label="About" />
          <NavItem href="/contact" label="Contact" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile links */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B0B0C] shadow-md">
          <div className="flex flex-col space-y-3 px-6 py-4 font-medium text-[#EAEAEA]">
            <NavItem href="/" label="Home" />
            <NavItem href="/stills" label="Stills" />
            <NavItem href="/films" label="Films" />
            <NavItem href="/about" label="About" />
            <NavItem href="/contact" label="Contact" />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`inline-flex font-serif items-center px-2 py-1 rounded-sm transition whitespace-nowrap hover:text-[#D4AF37]`}
    >
      {label}
    </Link>
  );
}
