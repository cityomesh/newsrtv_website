"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-500 ease-in-out bg-blue-600 hover:bg-black ${
        isScrolled ? "bg-black py-2" : "bg-black py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/rtv.png"
            alt="logo"
            width={100}
            height={isScrolled ? 60 : 80}
            className="rounded transition-all duration-500 ease-in-out object-contain"
            priority
          />
        </Link>

        {/* Desktop Contact Us Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-white text-blue-600 hover:bg-black hover:text-white text-sm font-medium px-4 py-2 rounded transition-colors"
        >
          Contact Us
        </Link>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-full left-0 w-full bg-blue-600 hover:bg-black border-t border-blue-500 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <li className="px-4 py-3 border-b border-blue-500">
          <Link
            href="/contact"
            className="block text-white font-medium hover:text-gray-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
