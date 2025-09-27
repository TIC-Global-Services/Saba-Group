"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaTwitter as XIcon,
  FaInstagram as Instagram,
  FaWhatsapp as Whatsapp,
} from "react-icons/fa";

const Footer = () => {
  const Navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  const Socials = [
    { name: "X", href: "https://twitter.com/SabaGroup1", icon: XIcon },
    { name: "Instagram", href: "https://instagram.com/", icon: Instagram },
    { name: "Whatsapp", href: "https://wa.me/919876543210", icon: Whatsapp },
  ];

  return (
    <footer className="bg-[#ECEFF3] ">
      <div className=" mx-auto px-6 md:px-12 py-12 space-y-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Logo + tagline */}
          <div className="flex flex-col md:flex-row md:items-center justify-between w-full md:w-[60%]  space-y-3 animate-fadeIn">
            <Image
              src="/saba-group-logo.png"
              alt="Saba Group Logo"
              width={160}
              height={60}
              className="transition-transform duration-300 hover:scale-105"
            />
            <p className="text-lg font-medium max-w-md">
              Saba Group - Pioneering Excellence in speciality 
              chemicals & Industry Solutions
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 animate-fadeIn delay-200">
            <div className="space-y-3">
              <h1 className="text-lg font-medium uppercase text-light">Navigation</h1>
              <ul className="space-y-2">
                {Navigation.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-secondary transition-colors duration-300 font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="space-y-3">
              <h1 className="text-lg font-medium uppercase text-light">Socials</h1>
              <div className="flex space-x-5">
                {Socials.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full  hover:bg-secondary  transition-all duration-300"
                  >
                    <item.icon size={20} />
                  </Link>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300" />

        {/* Bottom section */}
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-10 animate-fadeIn delay-300">
          {/* Left info */}
          <div className="text-left space-y-3">
            <p>
              © {new Date().getFullYear()} Design & Developed by{" "}
              <Link
                href="https://www.theinternetcompany.one/"
                target="_blank"
                className="font-medium text-secondary hover:underline"
              >
                TIC
              </Link>
            </p>
            <div className="flex items-center justify-start gap-5">
              <Link
                href="/privacy"
                className="hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-secondary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-[45%] space-y-3">
            <p className="uppercase font-medium text-light">Get updates</p>
            <div className="flex items-center border rounded-full overflow-hidden shadow focus-within:ring-2 focus-within:ring-secondary transition-all p-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 py-2 px-4 focus:outline-none"
              />
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors">
                Get Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
