import Link from "next/link";
import React from "react";
import { WALink } from "./sections/CTA";

export const Footer = () => {
  return (
    <footer className="drop-shadow-2xl border mx-5 md:mx-10 mt-20 p-8 md:p-10 bg-gray-100 rounded-4xl mb-10">
      {/* Grid utama */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Kiri: Branding */}
        <div className="md:col-span-2 space-y-3 max-w-lg">
          {/* <h1 className="text-4xl font-montserrat font-bold text-primary">
            BTEK
          </h1> */}
          <img src="/logo.png" alt="logo" className="w-30" />
          <p className="font-bold text-lg">PT Bimantara Teknologi Inovation</p>
          {/* <p className="text-gray-700">
            Empowering Innovation Through Technology Solutions
          </p> */}
          <p className="text-gray-700 text-sm ">
            MTH Square Ground Floor (GF) A4 A, Jl. Letjen M.T. Haryono Kav 10, RT/RW. 006/012, Kelurahan Bidara Cina, Kecamatan Jatinegara, Jakarta Timur 13330
          </p>
        </div>

        {/* Tengah: Pages */}
        <div className="flex flex-col space-y-2">
          <h1 className="font-bold mb-4 text-lg">Pages</h1>
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#about-us" className="hover:text-primary transition-colors">About Us</Link>
          <Link href="#products" className="hover:text-primary transition-colors">Products</Link>
        </div>

        {/* Kanan: Contact */}
        <div className="flex flex-col space-y-2">
          <h1 className="font-bold mb-4 text-lg">Contact</h1>
          <Link href={WALink} target="_blank" className="hover:text-primary transition-colors">
            +62 856 5860 7360
          </Link>
          <Link href="mailto:Sales@btek.biz.id" className="hover:text-primary transition-colors">
            isep@btek.biz.id
          </Link>
          <Link href="mailto:Sales@btek.biz.id" className="hover:text-primary transition-colors">
            sutrisno@btek.biz.id
          </Link>
        </div>
      </section>

      {/* Garis bawah */}
      <section className="text-center pt-5 mt-5 border-t border-gray-300">
        <p className="text-gray-600 text-sm">
          ©2025 PT Bimantara Teknologi Inovation. All rights reserved.
        </p>
      </section>
    </footer>
  );
};
