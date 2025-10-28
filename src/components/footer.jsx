import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-4 mx-10 py-7">
      <div className="col-span-2 space-y-3" >
       <h1 className="text-4xl font-montserrat font-bold text-primary">BTEK</h1>
       <p className="font-bold text-lg" >PT Bimantara Teknologi Inovation</p>
       <p>Empowering Innovation Through Technology Solutions</p>
      </div>
      <div className="flex flex-col space-y-2" >
        <h1 className="font-bold mb-5" >Pages</h1>
        <Link href="/">home</Link>
        <Link href="#about-us">about us</Link>
        <Link href="#products">products</Link>
      </div>
      <div className="flex flex-col space-y-2" >
        <h1 className="font-bold mb-5" >Contact</h1>
        <a href="">+62 856 5860 7360</a>
        <a href="">Sales@btek.biz.id</a>
      </div>
    </footer>
  );
};
