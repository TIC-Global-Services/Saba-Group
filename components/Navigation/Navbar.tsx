"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Products",
      dropdown: [
        { name: "Leather", href: "/products/leather" },
        { name: "Farming", href: "/products/farming" },
        { name: "Healthcare", href: "/products/healthcare" },
        { name: "Infra", href: "/products/infra" },
        { name: "Footwear", href: "/products/footwear" },
      ],
    },
    { name: "Careers", href: "/careers" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false); // mobile dropdown toggle
  const [productHover, setProductHover] = useState(false); // desktop hover dropdown
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
      className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[93%] bg-white/90 backdrop-blur-md rounded-2xl z-50"
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={"/saba-group-logo.png"}
            alt="Saba Group Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 font-medium" ref={linksRef}>
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setProductHover(true)}
                onMouseLeave={() => setProductHover(false)}
              >
                <button className="flex items-center gap-1 hover:text-secondary transition-colors">
                  {link.name} <ChevronDown size={16} />
                </button>
                {/* Dropdown */}
                {productHover && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            )
          )}
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
          onClick={() => {
            setMenuOpen(!menuOpen);
            setProductOpen(false); // reset dropdown on close
          }}
          className="md:hidden p-2"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={linksRef}
          className="flex flex-col items-start gap-4 px-10 py-6 font-semibold md:hidden bg-white/95 backdrop-blur-md rounded-b-2xl shadow-md"
        >
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="w-full flex flex-col items-start">
                <button
                  onClick={() => setProductOpen(!productOpen)}
                  className="flex items-center justify-start  hover:text-secondary transition-colors"
                >
                  {link.name}
                  {productOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {/* Collapsible submenu */}
                {productOpen && (
                  <div className="flex flex-col gap-2 mt-2 w-4/5">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        onClick={() => setMenuOpen(false)}
                        className="pl-4 py-2 text-gray-600 hover:text-secondary transition-colors "
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            )
          )}
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
