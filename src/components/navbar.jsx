import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MdArrowOutward } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-15 py-3 sticky top-0 z-100 drop-shadow-xl backdrop-blur-2xl bg-linear-to-b from-white/20 to-transparent">
      <div className="text-4xl font-montserrat font-bold text-primary">
        BTEK
      </div>
      <div className="flex items-center gap-7 font-semibold font-montserrat">
        <Link href="/">home</Link>
        <Link href="#about-us">about us</Link>
        <Link href="#products">products</Link>
      </div>
      <Button className="rounded-full ps-3 pe-1 flex justify-between items-center">
        <span>Contact Us</span>
        <div className="p-1 bg-white rounded-full">
          <MdArrowOutward className="text-primary" />
        </div>
      </Button>
    </nav>
  );
};
