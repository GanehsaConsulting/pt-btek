import Link from "next/link";
import React from "react";
import { WALink } from "./sections/CTA";

export const Footer = () => {
  return (
    <footer className=" mx-10 p-10 bg-gray-100 rounded-4xl mb-10">
      <section className="grid grid-cols-4 mb-5" >
        <div className="col-span-2 space-y-3">
          <h1 className="text-4xl font-montserrat font-bold text-primary">
            BTEK
          </h1>
          <p className="font-bold text-lg">PT Bimantara Teknologi Inovation</p>
          <p>Empowering Innovation Through Technology Solutions</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="font-bold mb-5">Pages</h1>
          <Link href="/">home</Link>
          <Link href="#about-us">about us</Link>
          <Link href="#products">products</Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="font-bold mb-5">Contact</h1>
          <Link href={WALink} target="_blank">+62 856 5860 7360</Link>
          <Link href="/" target="_blank">Sales@btek.biz.id</Link>
        </div>
      </section>
      <section className="text-center pt-5 mt-5 border border-t-black" >
            <p>©2025 PT Bimantara Teknologi Inovation. All rights reserved.</p>
      </section>
    </footer>
  );
};
