"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Careers", href: "/careers" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  // Animate navbar on mount
  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  // Animate nav links when menu opens (mobile)
  useEffect(() => {
    if (menuOpen && linksRef.current) {
      gsap.fromTo(
        linksRef.current.children,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    }
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[93%]  bg-white/90 backdrop-blur-md rounded-2xl z-50"
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href={'/'}>
          <Image
            src={"/saba-group-logo.png"}
            alt="Saba Group Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div
          className="hidden md:flex gap-8 font-medium"
          ref={linksRef}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Button (Desktop only) */}
        <div className="hidden md:block">
          <Link
            href={"/contact"}
            className="bg-primary px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={linksRef}
          className="flex flex-col items-center gap-6 py-6 font-semibold md:hidden bg-white/95 backdrop-blur-md rounded-b-2xl shadow-md"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={"/contact"}
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
