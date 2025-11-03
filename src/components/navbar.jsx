"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { WALink } from "./sections/CTA";
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex items-center justify-between py-3 sticky top-0 z-50 drop-shadow-xl backdrop-blur-2xl bg-white/50 px-4 md:px-10 2xl:px-70">
        {/* Logo */}
        {/* <div className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-primary">
          BTEK
        </div> */}
        <img src="/logo.png" alt="logo" className="w-16 sm:w-20" />

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7 font-semibold font-montserrat text-sm lg:text-base">
          <a href="/#" className="hover:text-primary transition-colors">
            Home
          </a>
          <a
            href="/#about-us"
            scroll={false}
            className="hover:text-primary transition-colors"
          >
            About Us
          </a>
          <a
            href="/#products"
            scroll={false}
            className="hover:text-primary transition-colors"
          >
            Products
          </a>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <Link href={WALink} target="_blank">
            <Button className=" bg-linear-to-br from-red-400 to-red-900 rounded-full ps-2 sm:ps-3 pe-1 hidden sm:flex justify-between items-center text-xs sm:text-sm h-8 sm:h-9 md:h-10">
              <span className="hidden sm:inline">Contact Us</span>
              <div className="p-0.5 sm:p-1 bg-white rounded-full ml-1 sm:ml-2">
                <MdArrowOutward className="text-primary text-sm sm:text-base" />
              </div>
            </Button>
          </Link>

          {/* Hamburger Button */}
          <Button
            onClick={toggleMenu}
            className="md:hidden rounded-full h-9 w-9 p-0 bg-primary hover:bg-primary/90"
          >
            {isMenuOpen ? (
              <IoClose className="text-white text-xl" />
            ) : (
              <HiMenuAlt3 className="text-white text-xl" />
            )}
          </Button>
        </div>

        {/* Smooth Scroll */}
        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        {/* MOBILE MENU PANEL */}
        <div
          className={`fixed top-1/2 right-0 -translate-y-1/2 w-64 drop-shadow-xl backdrop-blur-3xl bg-white/80 rounded-l-3xl shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-6 space-y-6">
            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-4 font-semibold font-montserrat text-base">
              <a
                href="/#"
                onClick={closeMenu}
                className="hover:text-primary transition-colors py-2 border-b border-gray-200"
              >
                Home
              </a>
              <a
                href="/#about-us"
                scroll={false}
                onClick={closeMenu}
                className="hover:text-primary transition-colors py-2 border-b border-gray-200"
              >
                About Us
              </a>
              <a
                href="/#products"
                scroll={false}
                onClick={closeMenu}
                className="hover:text-primary transition-colors py-2 border-b border-gray-200"
              >
                Products
              </a>
            </div>

            {/* Contact Button - Mobile */}
            <Link href={WALink} target="_blank" onClick={closeMenu}>
              <Button className="w-full bg-linear-to-br from-dark-red to-secondary rounded-full py-3 flex justify-between items-center">
                <span>Contact Us</span>
                <div className="p-1 bg-white rounded-full">
                  <MdArrowOutward className="text-primary" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
