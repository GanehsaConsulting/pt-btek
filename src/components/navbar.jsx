"use client";
import React from "react";
import { Button } from "./ui/button";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { WALink } from "./sections/CTA";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-15 py-3 sticky top-0 z-[10] drop-shadow-xl backdrop-blur-2xl bg-white/50">
      {/* Logo */}
      <div className="text-3xl md:text-4xl font-montserrat font-bold text-primary">
        BTEK
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-7 font-semibold font-montserrat">
        <a href="/#">Home</a>
        <a href="/#about-us" scroll={false}>
          About Us
        </a>
        <a href="/#products" scroll={false}>
          Products
        </a>
      </div>

      {/* Button */}
      <Link href={WALink} target="_blank" >
        <Button className="rounded-full ps-3 pe-1 flex justify-between items-center">
          <span>Contact Us</span>
          <div className="p-1 bg-white rounded-full">
            <MdArrowOutward className="text-primary" />
          </div>
        </Button>
      </Link>

      {/* Smooth Scroll Style */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
};
